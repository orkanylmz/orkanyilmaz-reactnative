import { Config as NConfig } from './config.js';

type APP_ENV_Type = 'development' | 'staging' | 'production';

type ConfigType = {
  scheme: string;
  icon: string;
  foregroundImage: string;
  APP_ENV: APP_ENV_Type;
  API_BASE_URL: string;
  API_TOKEN: string;
  DEVELOPER_EMAIL: string;
  version: string;
  name: string;
};

// Adding a type support for the config, because we can't use typescript config for expo config.
const Config = NConfig as ConfigType;

export default Config;
