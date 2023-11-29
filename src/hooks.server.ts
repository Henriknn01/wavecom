import { type Handle, redirect } from "@sveltejs/kit"
import { createInstance } from "$lib/pocketbase";

export const handle: Handle = async ({ event, resolve }) => {
    const pb = createInstance()
    
    pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')
    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        if (pb.authStore.isValid) {
            await pb.collection('users').authRefresh()
        }
    } catch (_) {
        // clear the auth store on failed refresh
        pb.authStore.clear()
    }
    
    event.locals.pb = pb
    event.locals.user = pb.authStore.model
    
    
    if (!event.url.pathname.startsWith("/auth")) {
        if (!pb.authStore.isValid) {
            throw redirect(301, "/auth/login")
        }
    }
    
    const response = await resolve(event)
    
    response.headers.set(
        'set-cookie',
        pb.authStore.exportToCookie({ httpOnly: false })
    )
    
    return response
}