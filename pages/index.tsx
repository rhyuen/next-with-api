import Layout from "../components/layout";
import { useState, useEffect } from "react";
import auth0 from "../utils/auth0";
import Landing from "../components/landing";
import Authed from "../components/authed";





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
                {
                    !props?.session?.user ?
                        <Landing /> :
                        <Authed />
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