import Layout from "../components/layout";
import { useState, useEffect } from "react";
import auth0 from "../utils/auth0";





export default function Index(props) {
    console.log(props);

    const [data, setData] = useState<any>("");

    useEffect(() => {
        fetch("/api/person")
            .then(res => res.json())
            .then(res => {
                setData(res)
            }).catch(e => {
                console.error(e);
            });
    }, []);


    return (
        <Layout>
            <div>
                <h1>i'm an index</h1>
                <h2>"Welcome to React"</h2>
                {
                    !props?.session?.user ?
                        (
                            <div>
                                <a href="/api/login">Login</a>
                            </div>
                        ) : (
                            <div>
                                <a href="/api/logout">Logout</a>
                            </div>
                        )
                }

                <p>i'm {data.message}</p>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const session = await auth0.getSession(context.req);
    return { props: { session } };
}