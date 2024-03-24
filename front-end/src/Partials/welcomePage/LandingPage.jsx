import { Fragment } from "react";
import Header from "./header/header";
import Navbar from "./navbar/navbar";
import Section from "./Section/section";
import Marque from "./Marque/marque";
import TextSection from "./TextSection/textSection";
import RequestCom from "./RequestCom/requestCom";
import Footer from "./Footer/footer";

export default function LandingPage(){
    return(
        <Fragment>
            <Header/>
            <Navbar />
            <Section />
            <Marque />
            <TextSection />
            <RequestCom />
            <Footer />
        </Fragment>
    )
}