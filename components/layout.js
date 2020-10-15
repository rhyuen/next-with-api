import Nav from "./nav"
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            <section>
                {children}
            </section>
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
        </div>
    )
}