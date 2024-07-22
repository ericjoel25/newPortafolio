import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import github from '../components/images/github.webp';
import { contactStyle } from '../utils/styles';



export function Contact({language}) {
  const [formData, setFormData] = useState({ subject: '', email: '', message: '' })


  
  function handleTextChange({ data, type }) {
    const value = data.target.value;
    setFormData({ ...formData, [type]: value })

  }

  async function sendEmail() {

    try {

      const headersList = {
        "Content-Type": "application/json"
      }

      const bodyContent = JSON.stringify({
        "subject": formData.subject,
        "message": formData.message,
        "email": formData.email
      });

      const response = await fetch("https://script.google.com/macros/s/AKfycbwqVg61Ei8xEP84VzG7_dGjueIB8sdzBR36vQWVQHgqMABvsWh9QWeT179pWJRo2gg8Pw/exec?type=1", {
        mode: 'no-cors',
        method: "POST",
        headers: headersList,
        body: bodyContent
      })

      const data = await response.text();
      const json = data === "" ? {} : JSON.parse(data);

      console.log(data)
    } catch (error) {

      console.log(error.message)

    }

  }
 
  const title = {
    en:{
       title:"Contact me!", 
       
    },
    es:{
       title:"¡Contáctame!", 
    }
 }



  return (

    <main className={contactStyle.container}>


      <article className={contactStyle.body}>
        <section className={contactStyle.card}>
          <span className={contactStyle.title} >
            <p>{title[language].title}</p>
          </span>
          <span className={contactStyle.cardText}>
            <FontAwesomeIcon icon={faEnvelope} className={contactStyle.cardIcon} />
            <a href="mailto:ericjoelmarte.m@hotmail.com" className={contactStyle.cardText}>ericjoelmarte.m@hotmail.com</a>
          </span>
          <span className={contactStyle.cardText}>
            <FontAwesomeIcon icon={faPhone} className={contactStyle.cardIcon} />
            <a href="tel:+18293606091" className={contactStyle.cardText}>(829)-360-6091</a>
          </span>

          <span className={contactStyle.cardText}>
            <img src={github} className={contactStyle.github} alt='github' />
            <a target="_blank"
              href="https://github.com/ericjoel25"
              className={contactStyle.cardText}>https://github.com/ericjoel25</a>
          </span>

          <span className={contactStyle.cardText}>
            <FontAwesomeIcon icon={faUser} className={contactStyle.cardIcon} />
            <a target="_blank" href="/EricJoelMarte.pdf" download className={contactStyle.cardText} > Download CV</a>
          </span>

        </section>
        <section className={contactStyle.card2}>
          <form className={contactStyle.card2Form}>

            <input className={contactStyle.card2FormInput}
              type="email" placeholder="Email"
              onChange={(value) => handleTextChange({ data: value, type: 'email' })}
              value={formData.email}
            />
            <input className={contactStyle.card2FormInput}
              type="text" placeholder="subject"
              onChange={(value) => handleTextChange({ data: value, type: 'subject' })}
              value={formData.subject}
            />
            <textarea className={contactStyle.card2FormInputLarge}
              type="text" placeholder="Message"
              onChange={(value) => handleTextChange({ data: value, type: 'message' })}
              value={formData.message}
            />
            <button className={contactStyle.card2Btn} onClick={(e) => {
              e.preventDefault()
              sendEmail()
              setFormData({ subject: '', email: '', message: '' })
            }} >Send</button>
          </form>
        </section>
      </article>
    </main>

  )
}