import React from "react";
import ContactForm from "../components/ContactForm";
import '../styles/ContactPage.scss';

const ContactPage:React.FC=()=>{

return(
    <div className="contact-page">
        <h2>Свяжитесь с нами:</h2>
        <ContactForm/>
    </div>
    )
}

export default ContactPage