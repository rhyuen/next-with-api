import auth0 from "../../utils/auth0";
import { NextApiResponse, NextApiRequest } from "next"

export default async function me(req: NextApiRequest, res: NextApiResponse) {
    try {
        await auth0.handleProfile(req, res, { refetch: true });
    } catch (e) {
        console.error(e);
        res.status(e.status || 500).end(e.message);
    }
}