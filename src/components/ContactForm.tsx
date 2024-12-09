import React, {useState} from "react"

const ContactForm:React.FC=()=>{

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });

    return(
        <form className="contact-form">
        <div className="contact-form__holder">
            <label>Имя:</label>
            <input id="name" value={formData.name}/>
            <label>Электронная почта:</label>
            <input id="email" type="email" value={formData.email}/>
            <label>Сообщение:</label>
            <textarea id="message" value={formData.message}/>
            <button type="submit" >Отправить</button>
        </div>
    </form>
    )
}

export default ContactForm
