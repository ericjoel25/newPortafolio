import React from "react";
import contactStyles from "../components/styles/contact.module.css";
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import github from '../components/images/github.webp'


export function Contact(props) {

    const { value } = props

    if (value !== 'contact') return <></>

    return (

        <main className={contactStyles.container}>

            <section className={contactStyles.body}>
                <span className={contactStyles.title} >
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Contact me.")
                                .pauseFor(2500)
                                //.deleteAll()
                                .start();
                        }}
                    />

                </span>

                <article className={contactStyles.card}>


                    <span className={contactStyles.cardText}>
                        <FontAwesomeIcon icon={faEnvelope} className={contactStyles.cardIcon} />

                        <a href="mailto:ericjoelmarte.m@hotmail.com" className={contactStyles.cardText}>ericjoelmarte.m@hotmail.com</a>

                    </span>

                    <span className={contactStyles.cardText}>
                        <FontAwesomeIcon icon={faPhone} className={contactStyles.cardIcon} />
                        <a href="tel:+18293606091" className={contactStyles.cardText}>(829)-360-6091</a>
                    </span>

                    <span className={contactStyles.cardText}>
                        <img src={github} className={contactStyles.github} alt='github' />
                        <a target="_blank" href=" https://github.com/ericjoel25" className={contactStyles.cardText}>https://github.com/ericjoel25</a>
                    </span>



                    <span className={contactStyles.cardText}>
                        <FontAwesomeIcon icon={faUser} className={contactStyles.cardIcon} />
                        <a target="_blank" href="/EricJoelMarte.pdf" download className={contactStyles.cardText} > Download CV</a>
                    </span>

                </article>
            </section>
        </main>

    )
}