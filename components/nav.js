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
                ul{
                    display: flex;
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
                    border-bottom: 2px solid transparent;
                    transition: border-bottom-color 0.2s ease-in;
                }
                a:hover{
                    border-bottom-color: black;
                }
                
            `}</style>
        </nav>
    )
}