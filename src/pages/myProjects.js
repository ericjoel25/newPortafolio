import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from "../components/modal/modal";
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';
import projectStyles from "../components/styles/myProjects.module.css";
import Typewriter from 'typewriter-effect';
import granja from '../components/images/Granja.webp';
import puntoDeVenta from '../components/images/venta.webp';
import ortografia from '../components/images/Ortografia.webp';
import prestar from '../components/images/prestar.webp'
import granja2 from '../components/images/granja2.webp'
import ventaPC from '../components/images/ventaPC.webp'
import IMC from '../components/images/IMC.webp';

export function Myprojects(props) {

   const { value } = props
   const [show, setShow] = useState(false)
   const [text, setText] = useState('')


   if (value !== 'projects') return <></>

   const data = [
      {
         title: 'HTML, CSS, React, Firebase',
         Image: granja,
         demo: 'https://ericjoel25.github.io/granjamd/',
         code: 'https://github.com/ericjoel25/granjamd.git',
         text: ""

      },
      {
         title: 'HTML, CSS, Vanilla Javascript',
         Image: puntoDeVenta,
         demo: 'https://ericjoel25.github.io/gestor-de-ventas/#Tablero',
         code: 'https://github.com/ericjoel25/gestor-de-ventas.git',
         text: ''
      },
      {
         title: 'React Native, Expo, CSS, Firebase',
         Image: ortografia,
         demo: 'https://play.google.com/store/apps/details?id=com.ericjoel.OrtografiaBasica&hl=es',
         code: '#',
         text: "This app is on PlayStore and I can't share the code, but I will be able to show it by video call."
      },
      {
         title: 'React Native, Expo, CSS, Firebase',
         Image: prestar,
         demo: '#',
         code: 'https://github.com/ericjoel25/prestamosJ-J.git',
         text: 'This app is not on PlayStore.'
      },
      {
         title: 'React Native, Expo, CSS, Firebase',
         Image: granja2,
         demo: '#',
         code: 'https://github.com/ericjoel25/GranjaM-D-Android.git',
         text: 'This app is not on PlayStore.'
      },
      {
         title: 'Tauri, HTML, CSS, Vanilla Javascript',
         Image: ventaPC,
         demo: 'https://mega.nz/file/XFQQzA6B#_4ZUfdaWJ7caWB4Y52udDNbO4oqxzQ61nGwyWUW65m0',
         code: 'https://github.com/ericjoel25/puntoDeVentaPC.git',
         text: ''
      },
      {
         title: 'Practice HTML, CSS, Vanilla Javascript',
         Image: IMC,
         demo: 'https://ericjoel25.github.io/practiceJavascript-IMC/',
         code: 'https://github.com/ericjoel25/practiceJavascript-IMC.git',
         text: ''
      },


   ]


   const goTo = (link, Text) => {

      if (link === '#') {
         setText(Text)
         setShow(true)
         return
      }

      window.open(link, "_blank");


   }

   return (


      <main className={projectStyles.container}>
         <section className={projectStyles.body}>

            <span className={projectStyles.text}>
               <Typewriter
                  onInit={(typewriter) => {
                     typewriter.typeString("My projects.")
                        .pauseFor(2500)
                        //.deleteAll()
                        .start();
                  }}
               />
            </span>

            <section className={projectStyles.bodyCard} >
               {data.map((list, index) => {
                  return (
                     <article className={`${projectStyles.card} ${projectStyles.animate}`} key={index}>
                        <img src={list.Image} alt={`Imagen-${list.title}`} className={projectStyles.Image} />

                        <span className={projectStyles.imageText}>{list.title}</span>

                        {list.code !== '#' ? (
                           <div className={projectStyles.btnBody}>
                              <button className={projectStyles.btn} onClick={() => goTo(list.code, list.text)}>
                                 Code
                                 <FontAwesomeIcon icon={faCode} className={projectStyles.textIcon} />
                              </button>
                              <button className={projectStyles.btn} onClick={() => goTo(list.demo, list.text)}>
                                 Demo
                                 <FontAwesomeIcon icon={faEye} className={projectStyles.textIcon} />
                              </button>
                           </div>
                        ) : (

                           <div className={projectStyles.btnBody}>
                              <button className={projectStyles.btn} onClick={() => goTo(list.code, list.text)}>
                                 Code
                                 <FontAwesomeIcon icon={faCode} className={projectStyles.textIcon} />
                              </button>
                              <button className={projectStyles.btn} onClick={() => goTo(list.demo, list.text)}>
                                 Demo
                                 <FontAwesomeIcon icon={faEye} className={projectStyles.textIcon} />
                              </button>
                           </div>

                        )

                        }

                     </article>
                  )
               })}

            </section>

         </section>
         <Modal
            visible={show}
            title={text}
            bodyColor={'#581845'}
            textColor={'#fff'}
            buttonColor={'#43060A'}
            button1={'Ok'}
            fnButton1={() => setShow(false)}

         />
      </main>

   )
}