

export default function Footer() {
    return (
        <footer>
            <h1>fifi's footer</h1>
            <h2>where you can buy feelings.</h2>
            <h2>hopefully for money.</h2>
            <style jsx>
                {
                    `
                        footer{
                            padding: 5rem 0;
                            background-color: black;                                   
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                        }

                        h1{                            
                            color: white;
                            text-transform: uppercase;
                            font-size: 1.5rem;
                        }
                        h2{
                            color: white;
                        }
                    `
                }
            </style>
        </footer>
    )
}