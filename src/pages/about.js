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
          title2:"I am a programmer that use web technology. I am looking for a position where I can use my knowledge for the development of the company.", 
          btnText:"Contact Me!", 
          btnText2:"Resume"
        }, 
     es:{
         title:"¿Quién soy?", 
         title2:"Soy un programador que usa tecnología web. Busco un puesto donde pueda utilizar mis conocimientos para el desarrollo de la empresa.", 
         btnText:"¡Contáctame!", 
         btnText2:"Currículum"  
        }
    } 

    return (

        <main className={aboutStyle.container}>
            <article className={aboutStyle.body}>
               <section className={aboutStyle.card2} >
                   
                   <div className={aboutStyle.imgContainer} >
                      <img src={foto} alt='home' className={aboutStyle.Img} />
                    </div>
                </section>

                <section className={aboutStyle.card} >
                    <p className={aboutStyle.title} >{data[language]?.title}</p>
                    <p className={aboutStyle.title2}>
                     {data[language]?.title2}
                    </p>
                    <div className={aboutStyle.cardbtnContainer}>
                      <button className={aboutStyle.cardbtn} onClick={()=> gotoContact()}>{data[language]?.btnText}</button>
                      <button className={aboutStyle.cardbtn} onClick={()=> downloadPDF()}>{data[language]?.btnText2}</button>
                    </div>
                </section>

            </article>
        </main>

    )
}