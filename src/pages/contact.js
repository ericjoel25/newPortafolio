import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import github from '../components/images/github.webp';
import { contactStyle } from '../utils/styles';



export function Contact({ language }) {
  const [formData, setFormData] = useState({ subject: '', email: '', message: '' }); 
  const [showAlert, setShowAlert] = useState(false); 



  function handleTextChange({ data, type }) {
    const value = data.target.value;
    setFormData({ ...formData, [type]: value })

  }

  async function sendEmail() {

    try {

      if (!formData.email || !formData.message || !formData.subject) {

        setShowAlert(true);
      }

      const headersList = {
        "Content-Type": "application/json"
      };

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
      });

      const data = await response.text();
      const json = data === "" ? {} : JSON.parse(data);

      console.log(data);

      setFormData({ subject: '', email: '', message: '' });

    } catch (error) {

      console.log(error.message);

    }

  }

  const title = {
    en: {
      title: "Contact me!",

    },
    es: {
      title: "¡Contáctame!",
    }
  }


  function goTo({ URL }) {
    const a = window.document.createElement("a");
    a.href = URL;
    a.target = "_black"
    a.click();
  }


  function NotificationAlert({visible, showAlert, setShowAlert}) {

    if(!visible) return <></>; 

    return (
      <section className={contactStyle.notificationAlertBody}>
        <div className={contactStyle.notificationAlertTexBody}>
          <p>¡Por favor completa la información!</p>
          <button 
            className={contactStyle.notificationAlertBtn}
            onClick={()=> setShowAlert(false)}
           >Ok</button>
        </div>
      </section>
    )
  }

  return (

    <main className={contactStyle.container}>

      <section className={contactStyle.card}>
        <span className={contactStyle.title} >
          <p>{title[language].title}</p>
        </span>
        <div className={contactStyle.ContactIconBody}>
          <span className={contactStyle.cardBtn} onClick={() => goTo({ URL: "mailto:ericjoelmarte.m@hotmail.com" })}>
            <FontAwesomeIcon icon={faEnvelope} className={contactStyle.cardIcon} />
            <span className={contactStyle.cardText}>Email</span>
          </span>
          <span className={contactStyle.cardBtn} onClick={() => goTo({ URL: "tel:+18293606091" })}>
            <FontAwesomeIcon icon={faPhone} className={contactStyle.cardIcon} />
            <span className={contactStyle.cardText}>Phone</span>
          </span>

          <span className={contactStyle.cardBtn} onClick={() => goTo({ URL: "https://github.com/ericjoel25" })}>
            <img src={github} className={contactStyle.github} alt='github' />
            <span className={contactStyle.cardText}>Github</span>
          </span>

          <span className={contactStyle.cardBtn} onClick={() => goTo({ URL: "/EricJoelMarte.pdf" })}>
            <FontAwesomeIcon icon={faUser} className={contactStyle.cardIcon} />
            <span className={contactStyle.cardText}>Resume</span>
          </span>

        </div>
      </section>

      {/*
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
              e.preventDefault();
              sendEmail();
            }} >Send</button>
          </form>

          <NotificationAlert visible={showAlert} setShowAlert={setShowAlert}/>
        </section>
      */}
     

    </main>

  )
}