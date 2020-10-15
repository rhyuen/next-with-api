import Layout from "../components/layout";
import { useState } from "react";
import axios from "axios";



export default function Contact() {

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        const res = await axios.post("", { email: email });
        res.data.
            setEmail("");
    }

    const handleChange = e => {
        const { value } = e.target;
        setEmail(value);
    }

    return (
        <Layout>
            <section>
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={email} onChange={handleChange} name="email" placeholder="email@domain.com" /><br />
                    <input type="submit" value="Submit" />
                </form>
            </section>
        </Layout>
    )
}