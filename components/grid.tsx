export default function Grid({ children }) {
    return (
        <div className="grid">
            {children}
            <style jsx>
                {`
                    .grid{
                        display: grid;
                        grid-template-columns: minmax(10px, 1fr) [content-start] repeat(12, minmax(1fr, 90px)) [content-end] minmax(10px, 1fr);
                        grid-template-rows: 100px 90vh;
                        grid-auto-rows: 30vh;
                        background: lavender;
                        width: 100%;
                        margin: 0 auto;                        
                    }

                    @media screen and (min-width: 750px) and (max-width: 1079px){
                        width: 100%;
                    }

                    @media screen and (min-width: 1080px){
                        max-width: 1080px;
                    }
                `}
            </style>
        </div>
    )
}