import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.norheimweb.com',
  appName: 'wavecom',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'http',
    "cleartext": true
  },
  "plugins": {
    "CapacitorHttp": {
      "enabled": true
    }
  }
};

export default config;
