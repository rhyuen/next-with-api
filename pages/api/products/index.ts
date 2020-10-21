import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
    const products = [
        {
            id: 1,
            name: "happiness",
            price: 1000
        },
        {
            id: 2,
            name: "sadness",
            price: 500
        },
        {
            id: 3,
            name: "fear",
            price: 2000
        },
        {
            id: 4,
            name: "guilt",
            price: 3000
        },
    ]

    res.status(200).json({
        route: "/products",
        products: products
    });
};