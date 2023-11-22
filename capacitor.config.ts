import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.norheimweb.com',
  appName: 'wavecom',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

export default config;
