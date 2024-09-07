import React, { useState } from "react";
import {projectyle, appStyle} from '../utils/styles'; 
import {ortografiaImg} from '../components/images'; 
import {Modal} from '../components/modal/modal';

export function Myprojects({language, setShowAlert}) {
 

const data ={
   en:{
      title:"Project (1)", 
      title2:"Ortografía-Básica", 
      category:'Category: Mobile App',
      description:'Description: Developed an Android mobile app designed to help users improve their Spanish spelling skills. The app includes features such as Notes, Dictionary, Chat, and Exercise modules, providing a comprehensive learning experience. With the latest update, the app saw a significant increase in user acquisition from 10% to 80%, alongside a 65% reduction in user churn.', 
      frontendTechnology:'Frontend: Javascript, React, React Native, CSS, Git',
      backendTechnology:'Backend: Firebase, Node, Express',
      authors:'Authors: Eric Joel Marte',
   },
  es:{
      title:"Proyecto (1)", 
      title2:"Ortografía-Básica", 
      category:'Categoría: Aplicación Móvil',
      description:'Descripción: Descripción: Desarrollé una aplicación móvil para Android diseñada para ayudar a los usuarios a mejorar sus habilidades de ortografía en español. La aplicación incluye funciones como módulos de Notas, Diccionario, Chat y Ejercicio, lo que brinda una experiencia de aprendizaje integral. Con la última actualización, la aplicación experimentó un aumento significativo en la adquisición de usuarios del 10% al 80%, junto con una reducción del 65% en la rotación de usuarios.', 
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
            <article className={projectyle.card}>
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
            </article>

            <article className={projectyle.card2}>
               <div className={projectyle.card2ImgContainer}>
                 <img  src={ortografiaImg} className={projectyle.Img}/>
               </div>
            </article>

      
      </main>

   )
}