import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Contact(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
                <title>Vaifax | Contact Us</title>
                <meta name="description" content="Agencia de software y marketing digitail. Servicios de creacion de paginas webs y desarrollo de aplicaciones."></meta>
                <meta name="keyword" content="Agencia de marketing, agencia de software, creacion de paginas webs"></meta>
                <meta name="robots" content="all"></meta>
                <link rel="canonical" href=""></link>
                <meta name="author" content="Vainfax"></meta>
                <meta name="publisher" content="Vainfax"></meta>

                {/* Social Media Tags */}
                <meta property="og:title" content='Murkiva | Software Agency' />
                <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
                <meta property="og:url" content="https://www.murkiva.com/" />
                <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

                <meta name="twitter:title" content='Murkiva | Software Agency' />
                <meta
                    name="twitter:description"
                    content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
                />
                <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar />
            <div className="pt-28">
                Contact
                
            </div>
            <Footer />
        </Layout>
    );
}
export default Contact;