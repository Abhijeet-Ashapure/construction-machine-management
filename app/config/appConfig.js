import environments from './environments.json';

const defaultEnvironment = 'staging';

export const getBaseUrl = function () {
  return defaultEnvironment === 'staging' ? environments['staging'].BASE_URL : environments['production'].BASE_URL;
};

export const getAppKey = function () {
  return defaultEnvironment === 'staging' ? environments['staging'].APP_KEY : environments['production'].APP_KEY;
};
