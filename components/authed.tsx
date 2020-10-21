import { useState, useEffect } from "react";

export default function Authed() {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res)
                setLoading(false);

            }).catch(e => {
                setLoading(false);
                console.error(e);
            });
    }, []);

    return <div>
        <a href="/api/logout">Logout</a>
        <div>
            {
                loading ? "loading" :
                    // data.products.length === 0 ? "empty" :
                    data.products.map(d => {
                        return (
                            <li key={d.id}>
                                <h1>{d.name}</h1>
                                <h2>{d.price}</h2>
                            </li>
                        );
                    })
            }
        </div>
    </div>
}