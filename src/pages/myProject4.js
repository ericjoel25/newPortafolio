
import {useState} from 'react';
import {projectyle, appStyle} from '../utils/styles'; 
import {phoneimg} from '../components/images'; 
import {Modal} from './../components/modal/modal';

export function Myprojects4({language}) {

 
   const [showAlert, setShowAlert] = useState(false); 

   const data ={
      en:{
         title:"Project (4)", 
         title2:"Phone App", 
         category:'Category: Desktop App',
         description:'Description: Make a call, receive a call, make a conference, etc.', 
         frontendTechnology:'Frontend: HTML, CSS, Javascript, React, Twilio SDK, Tauri, Git',
         backendTechnology:'Backend: Node, Express, Twilio',
         authors:'Autores: Eric Joel Marte',
      },
      es:{
         title:"Proyecto (4)", 
         title2:"Phone App",
         category:'Categoría: Aplicación De Escritorio',
         description:'Descripción: Realizar llamada, recibir llamada, realizar conferencia etc.', 
         frontendTechnology:'Frontend: HTML, CSS, Javascript, React, Twilio SDK, Tauri, Git.',
         backendTechnology:'Backend: Node, Express, Twilio Firebase',
         authors:'Autores: Eric Joel Marte',
      }
   }

 function certificaciones({type, show}) {

      if(type === "code" && show){

         window.open("https://github.com/ericjoel25/App_To_Make_Phone_call", "_blank");     
         return; 
      }

      setShowAlert(true); 
      //window.open("https://ericjoel25.github.io/granjamd/", "_blank");        
   }


   return (

      <main className={projectyle.container}>
         <article className={projectyle.bodyCard}>
          
            <section className={projectyle.card2}>
               <div className={projectyle.card2ImgContainer}>
                 <img  src={phoneimg} className={appStyle.Img}/>
               </div>
            </section>

            <section className={projectyle.card}>
               <p className={projectyle.cardTitle}>{data[language].title}</p>
               <p className={projectyle.cardTitle2}>{data[language].title2}</p>
               <p className={projectyle.cardText}>{data[language].category}</p>
               <p className={projectyle.cardText}>{data[language].description}</p>
               <p className={projectyle.cardText}>{data[language].frontendTechnology}</p>
               <p className={projectyle.cardText}>{data[language].backendTechnology}</p>
               <p className={projectyle.cardText}>{data[language].authors}</p>
               <div className={projectyle.btnContainer}>
                  <button className={projectyle.btn} onClick={()=> certificaciones({type:"code", show:true})}>Code</button>
                  <button className={projectyle.btn}  onClick={()=> certificaciones({type:"code", show:false})}>Demo</button>
               </div>
            </section>
         </article>

         <Modal 
           visible={showAlert}
           title={"Esta app es un ejecutable para windows"}
           bodyColor="#839dd1"
           button1="Ok"
           fnButton1={()=> setShowAlert(false)}
           buttonColor="#262c40"
         />
      </main>

   )
}