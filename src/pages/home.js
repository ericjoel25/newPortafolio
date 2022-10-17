import React from "react";
import homeStyle from '../components/styles/home.module.css'
import homeImg from '../components/images/homeImg.webp'
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Home(props) {

    const { value } = props

    return (
        <>
            {value === 'home' ? (
                <main className={homeStyle.container}>
                    <section className={homeStyle.body}>
                        <article className={homeStyle.article} >
                            <span className={homeStyle.title} >
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString("Hi there!<br/> I'm Eric Joel <br/>Web Developer.")
                                            .pauseFor(2500)
                                            //.deleteAll()
                                            .changeDelay(0.1)
                                            .start();
                                    }}
                                />

                            </span>

                            <p className={homeStyle.text} >Web developer / Front</p>

                            <span className={homeStyle.btn2}>
                                <FontAwesomeIcon icon={faEnvelope} className={homeStyle.btnIcon2} />
                                <p className={homeStyle.btnText2}>Contact</p>
                            </span>
                        </article>

                        <article className={homeStyle.article2} >
                            < img src={homeImg} alt='home' className={homeStyle.homeImg} />
                        </article>

                    </section>
                </main>
            ) : (
                <></>
            )}

        </>


    )
}