import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";
import Grid from "./grid";


export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Fifi's, where you can buy feelings.</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
                <link rel="icon" href="./favicon.png" type="image/png" />
            </Head>

            <Grid>
                <Nav />
                {children}
            </Grid>
            <Footer></Footer>
            <style jsx global>{`
                * {
                    box-sizing: border-box;
                    font-size: 16px;
                    font-family: Segoe UI, Helvetica;
                }

                body {
                    margin: 0;                    
                }
            `}</style>
        </>
    )
}