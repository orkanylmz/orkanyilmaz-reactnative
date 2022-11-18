const packageJSON = require('../package.json');

const APP_ENV = process.env.APP_ENV ?? 'development';
const SCHEME = 'com.upayments';
const APP_NAME = 'UPayments';
const API_BASE_URL = 'https://upayments-studycase-api.herokuapp.com/api/';
const DEVELOPER_EMAIL = 'orkanylmz@gmail.com';
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9ya2FueWxtekBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vb3JrYW55bG16IiwiaWF0IjoxNjY4NTIwMzM3LCJleHAiOjE2Njg5NTIzMzd9.pma1hwzKnErWK09-i93k_t5WVPDOD2m9M7Fcb9HkJHs';

const development = {
  APP_ENV: 'development',
  name: APP_NAME,
  scheme: `${SCHEME}.development`,
  icon: './assets/icon.development.png',
  foregroundImage: './assets/icon.development.png',
  version: packageJSON.version,
  API_BASE_URL,
  API_TOKEN,
  DEVELOPER_EMAIL,
};

const staging = {
  APP_ENV: 'staging',
  name: APP_NAME,
  scheme: `${SCHEME}.staging`,
  icon: './assets/icon.staging.png',
  foregroundImage: './assets/icon.staging.png',
  version: packageJSON.version,
  API_BASE_URL,
  API_TOKEN,
  DEVELOPER_EMAIL,
};

const production = {
  APP_ENV: 'production',
  name: APP_NAME,
  scheme: `${SCHEME}.production`,
  icon: './assets/icon.png',
  foregroundImage: './assets/icon.png',
  version: packageJSON.version,
  API_BASE_URL,
  API_TOKEN,
  DEVELOPER_EMAIL,
};

const configs = { development, staging, production };

const Config = configs[APP_ENV];
module.exports = { Config };
