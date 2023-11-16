import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.norheimweb.com',
  appName: 'wavecom',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
