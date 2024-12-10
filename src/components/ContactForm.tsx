import React, {useState} from "react"
import '../styles/ContactForm.scss';

const ContactForm:React.FC=()=>{

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });

       const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
    setFormData({ name: "", email: "", message: "" }); 
  };

    return(
        <form className="contact-form">
        <div className="contact-form__holder">
            <label>Имя:</label>
            <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required/>
            <label>Электронная почта:</label>
            <input  
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required/>
            <label>Сообщение:</label>
            <textarea 
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required/>
            <button className="submit-btn" type="submit" onClick={handleSubmit}>Отправить</button>
        </div>
    </form>
    )
}

export default ContactForm
