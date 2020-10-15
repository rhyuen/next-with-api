import { initAuth0 } from '@auth0/nextjs-auth0';
require("dotenv").config();

export default initAuth0({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'openid profile',
    redirectUri: 'http://localhost:3000/api/callback',
    postLogoutRedirectUri: 'http://localhost:3000/',
    session: {
        cookieSecret: process.env.COOKIE_SECRET,
        cookieLifetime: 60 * 60 * 8,
        cookieSameSite: 'lax',
        storeIdToken: false,
        storeAccessToken: false,
        storeRefreshToken: false
    },
    oidcClient: {
        httpTimeout: 2500,
        clockTolerance: 10000
    }
});