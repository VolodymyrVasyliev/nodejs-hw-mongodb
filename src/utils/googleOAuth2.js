import { readFile } from 'fs/promises'; 
import { PATH_JSON } from '../constants/index.js';
import { OAuth2Client } from 'google-auth-library';
import { getEnvVar } from './getEnvVar.js';

const oauthConfig = JSON.parse(await readFile(PATH_JSON));

const googleOAuthClient = new OAuth2Client({
  clientId: getEnvVar('GOOGLE_AUTH_CLIENT_ID'),
  clientSecret: getEnvVar('GOOGLE_AUTH_CLIENT_SECRET'),
  redirectUri: oauthConfig.web.redirect_uris[0],
});

export const generateAuthUrl = () => {
  return googleOAuthClient.generateAuthUrl({
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
  });
};

export const validateCode = async (code) => {
  const response = await googleOAuthClient.getToken(code);

  return googleOAuthClient.verifyIdToken({
    idToken: response.tokens.id_token,
  });
};
