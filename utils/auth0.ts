import { initAuth0 } from '@auth0/nextjs-auth0';

const { NODE_ENV } = process.env;

const ROOT_URL = NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://fifis.now.sh"


export default initAuth0({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'openid profile',
    redirectUri: `${ROOT_URL}/api/callback`,
    postLogoutRedirectUri: `${ROOT_URL}/`,
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