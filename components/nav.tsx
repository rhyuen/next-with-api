import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
            <style jsx>{`
                nav{       
                    height: 5vw;      
                    background: black;       
                }

                ul{
                    
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    height: 100%;
                    max-width: 1080px;
                    margin: 0 auto;
                }

                li{
                    list-style-type: none;
                    margin-right: 20px;
                }

                a{
                    font-size: 16px;
                    font-family: "Segoe UI";
                    text-decoration: none;
                    padding-bottom: 8px;
                    font-weight: 600;
                    color: white;
                    border-bottom: 2px solid transparent;
                    transition: border-bottom-color 0.2s ease-in;
                }
                a:visited{
                    color: white;
                }
                a:hover{
                    border-bottom-color: white;
                }
                
            `}</style>
        </nav>
    )
}