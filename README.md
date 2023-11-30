# Wavecom
# Building and Running Capacitor Applications for iOS and Android

This README provides instructions on building and running Capacitor applications for iOS and Android.

## Prerequisites

Ensure you have the following software installed on your system:

- Node.js and npm (Latest Version)
- Capacitor
- Xcode (for iOS)
- Android Studio (for Android)

## Capacitor Setup

If not already done, install Capacitor globally with the following command:

```bash
npm install -g @capacitor/cli
```
## Compile Application

To prepare the application for a platform deployment, navigate to the root directory of the project and compile your app by running:

```bash
npm run build
```

After building, add the desired platform (in this case iOS or Android) with the following command:

```bash
npx cap add ios
npx cap add android
```

Next, sync the built files into your Capacitor native platforms:

```bash
npx cap sync
```

## Open With IDE

Once the above steps are completed, you are ready to open the IDE to run the app:

### For iOS:

Open the project in Xcode:

```bash
npx cap open ios
```

Once Xcode opens, you can run the application by clicking the 'Play' button or pressing Cmd + R.

### For Android:

Open the project in Android Studio:

```bash
npx cap open android
```

Android Studio, run the app by clicking the 'Run' button or pressing Shift + F10.

More Information

For more detailed information, please refer to the Capacitor [https://capacitorjs.com/docs](official documentation).

***

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
