import { log, logGreen, logError } from '@utils';
const buildBaseUrl = async () => {
  return 'https://randomuser.me/api/';
};

const buildHeader = req => {
  const header = req && req.header ? req.header : {};
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'x-api-key': Config.X_API_KEY,
    // 'x-secret-key': Config.SECRET_KEY,
    ...header
  };
};

const secureHeader = async req => {
  const header = req && req.header ? req.header : {};
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'x-api-key': Config.X_API_KEY,
    // 'x-access-token': accessToken,
    // 'x-refresh-token': refreshToken,
    // user: identifier,
    ...header
  };
};

export { secureHeader, buildHeader, buildBaseUrl };
