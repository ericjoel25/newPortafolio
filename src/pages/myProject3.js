
import {useState} from 'react';
import {projectyle, appStyle} from '../utils/styles'; 
import {seguridadImg} from '../components/images'; 

export function Myprojects3({language, setShowAlert}) {

   

   
   const data ={
      en:{
         title:"Project (3)", 
         title2:"Urban Security", 
         category:'Category: Mobile App',
         description:'Description: Developed a Progressive Web App (PWA) to manage employee clock-in and clock-out processes, ensuring location-based compliance using geolocation services. The app restricts employees to clock in only within specified locations, enhancing accountability. The backend architecture includes a custom API built with Google Apps Script to interact with Google Sheets for data storage, allowing efficient saving, updating, and deletion of employee records. A second API was developed using Node.js and Express to connect the PWA with a PostgreSQL database, ensuring seamless data integration and secure communication.', 
         frontendTechnology:'Frontend: Javascript, React, React Native, CSS, Git.',
         backendTechnology:'Backend: Node, Express, Google Apps Script',
         authors:'Autores: Eric Joel Marte',
 
      },
      es:{
         title:"Proyecto (3)", 
         title2:"Urban Security",
         category:'Categoría: Mobile App',
         description:'Descripción: Desarrollé una aplicación web progresiva (PWA) para gestionar los procesos de entrada y salida de los empleados, garantizando el cumplimiento basado en la ubicación mediante servicios de geolocalización. La aplicación restringe a los empleados a registrar su entrada solo en ubicaciones específicas, lo que mejora la responsabilidad. La arquitectura backend incluye una API personalizada creada con Google Apps Script para interactuar con Google Sheets para el almacenamiento de datos, lo que permite guardar, actualizar y eliminar de manera eficiente los registros de los empleados. Se desarrolló una segunda API utilizando Node.js y Express para conectar la PWA con una base de datos PostgreSQL, lo que garantiza una integración de datos perfecta y una comunicación segura.', 
         frontendTechnology:'Frontend: Javascript, React, React Native, CSS, Git.',
         backendTechnology:'Backend: Node, Express, Google Apps Script',
         authors:'Autores: Eric Joel Marte',
      }
   }

   function certificaciones({type, show}) {
      if(type === "code" && !show){
         
         setShowAlert(true); 
         return; 
      }
      window.open("https://ericjoel25.github.io/granjamd/", "_blank");        
   }


   return (

      <main className={projectyle.container}>
            <article className={projectyle.card}>
               <p className={projectyle.cardTitle}>{data[language].title}</p>
               <p className={projectyle.cardTitle2}>{data[language].title2}</p>
               <p className={projectyle.cardText}>{data[language].category}</p>
               <p className={projectyle.cardText}>{data[language].description}</p>
               <p className={projectyle.cardText}>{data[language].frontendTechnology}</p>
               <p className={projectyle.cardText}>{data[language].backendTechnology}</p>
               <p className={projectyle.cardText}>{data[language].authors}</p>
               <div className={projectyle.btnContainer}>
                  <button className={projectyle.btn} onClick={()=> certificaciones({type:"code", show:false})}>Code</button>
                  <button className={projectyle.btn}  onClick={()=> certificaciones({type:"code", show:false})}>Demo</button>
               </div>
            </article>
            <article className={projectyle.card2}>
               <div className={projectyle.card2ImgContainer}>
                 <img  src={seguridadImg} className={projectyle.Img}/>
               </div>
            </article>
        
      </main>

   )
}