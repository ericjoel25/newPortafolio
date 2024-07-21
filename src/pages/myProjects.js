import React, { useState } from "react";
import {projectyle, appStyle} from '../utils/styles'; 
import {ortografiaImg} from '../components/images'; 
import {Modal} from '../components/modal/modal';

export function Myprojects({language}) {
 
 const [showAlert, setShowAlert] = useState(false); 

const data ={
   en:{
      title:"Project (1)", 
      title2:"Ortografía-Básica", 
      category:'Category: Mobile App',
      description:'Description: Notes, Dictionary, Chat, Exercise, Analyze Words, Phrases and Spelling Topics.', 
      frontendTechnology:'Frontend: Javascript, React, React Native, CSS, Git',
      backendTechnology:'Backend: Firebase, Node, Express',
      authors:'Authors: Eric Joel Marte',
   },
  es:{
      title:"Proyecto (1)", 
      title2:"Ortografía-Básica", 
      category:'Categoría: Aplicación Móvil',
      description:'Descripción: Notas, Diccionario, Chat, Ejercicio, Analizar Palabras, Frases y Temas De Ortografía.', 
      frontendTechnology:'Frontend: Javascript, React, React Native, CSS, Git',
      backendTechnology:'Backend: Firebase, Node, Express',
      authors:'Autores: Eric Joel Marte',
   } 

}

function certificaciones({type, show}) {
   if(type === "code" && !show){

      setShowAlert(true); 
      return; 
   }
   window.open("https://play.google.com/store/apps/details?id=com.ericjoel.OrtografiaBasica&pcampaignid=web_share", "_blank");        
}

 return (

      <main className={projectyle.container}>
         <article className={projectyle.bodyCard}>
            <section className={projectyle.card}>
               <p className={projectyle.cardTitle}>{data[language]?.title}</p>
               <p className={projectyle.cardTitle2}>{data[language]?.title2}</p>
               <p className={projectyle.cardText}>{data[language]?.category}</p>
               <p className={projectyle.cardText}>{data[language]?.description}</p>
               <p className={projectyle.cardText}>{data[language]?.frontendTechnology}</p>
               <p className={projectyle.cardText}>{data[language]?.backendTechnology}</p>
               <p className={projectyle.cardText}>{data[language]?.authors}</p>
               
               <div className={projectyle.btnContainer}>
                  <button className={projectyle.btn} onClick={()=> certificaciones({type:"code", show:false})}>Code</button>
                  <button className={projectyle.btn}  onClick={()=> certificaciones({type:"demo", show:true})}>Demo</button>
               </div>
            </section>
            <section className={projectyle.card2}>
               <div className={projectyle.card2ImgContainer}>
                 <img  src={ortografiaImg} className={appStyle.Img}/>
               </div>
            </section>

         </article>
       
         <Modal 
           visible={showAlert}
           title={'El codigo es privado debido a que la app esta en produción'}
           bodyColor="#839dd1"
           button1="Ok"
           fnButton1={()=> setShowAlert(false)}
           buttonColor="#262c40"
         />
      </main>

   )
}