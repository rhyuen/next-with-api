import { NextApiResponse, NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({
            message: "only Post methods are allowed"
        })
    } else {
        res.status(200).json({
            message: "post success."
        });
    }
}