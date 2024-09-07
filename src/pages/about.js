import React from "react";
import foto from '../components/images/Eric2.webp'
import { aboutStyle } from '../utils/styles';

export function About({gotoContact, language}) {
    

    function downloadPDF(){
        const a = document.createElement('a'); 
        a.href="/EricJoelMarte.pdf"
        a.download = "EricJoelMarte.pdf"; // Set the download attribute to specify the filename
        a.click();

     }

    const data ={
        en:{
          title:'Who Am I?', 
          title2:"Web developer specializing in front-end and notion on back-end development. Proficient in a range of technologies including HTML, CSS, JavaScript, React, React Native, Node.js, Firebase, SQL, and Tauri.js. Experienced in building responsive web and mobile applications with a focus on user-centered design, performance optimization, and seamless functionality. Known for delivering robust solutions that align with client goals and technical requirements, while maintaining scalability and best coding practices across projects.", 
          btnText:"Contact Me!", 
          btnText2:"Resume"
        }, 
     es:{
         title:"¿Quién soy?", 
         title2:"Desarrollador web especializado en front-end y nociones sobre desarrollo back-end. Competente en una variedad de tecnologías que incluyen HTML, CSS, JavaScript, React, React Native, Node.js, Firebase, SQL y Tauri.js. Experiencia en la creación de aplicaciones web y móviles responsivas con un enfoque en el diseño centrado en el usuario, la optimización del rendimiento y la funcionalidad perfecta. Conocido por ofrecer soluciones sólidas que se alinean con los objetivos y requisitos técnicos del cliente, al mismo tiempo que mantienen la escalabilidad y las mejores prácticas de codificación en todos los proyectos.", 
         btnText:"¡Contáctame!", 
         btnText2:"Currículum"  
        }
    } 

    return (

        <main className={aboutStyle.container}>
               <article className={aboutStyle.card2} >
                   
                   <div className={aboutStyle.imgContainer} >
                      <img src={foto} alt='home' className={aboutStyle.Img} />
                    </div>
                </article>

                <article className={aboutStyle.card} >
                    <p className={aboutStyle.title} >{data[language]?.title}</p>
                    <p className={aboutStyle.title2}>
                     {data[language]?.title2}
                    </p>
                    <div className={aboutStyle.cardbtnContainer}>
                      <button className={aboutStyle.cardbtn} onClick={()=> gotoContact()}>{data[language]?.btnText}</button>
                      <button className={aboutStyle.cardbtn} onClick={()=> downloadPDF()}>{data[language]?.btnText2}</button>
                    </div>
                </article>
        </main>

    )
}