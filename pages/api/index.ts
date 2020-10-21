import { NextApiResponse, NextApiRequest } from "next";

type Payload = {
    message: string
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Payload>) {
    res.status(200).json({ message: "api" });
};