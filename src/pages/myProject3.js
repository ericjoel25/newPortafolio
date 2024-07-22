
import {useState} from 'react';
import {projectyle, appStyle} from '../utils/styles'; 
import {seguridadImg} from '../components/images'; 
import {Modal} from '../components/modal/modal'; 

export function Myprojects3({language}) {

   const [showAlert, setShowAlert] = useState(false); 

   
   const data ={
      en:{
         title:"Project (3)", 
         title2:"Urban Security", 
         category:'Category: Mobile App',
         description:'Description: Platform to record the clock in and clock out of the worker, consult the hours worked, etc.', 
         frontendTechnology:'Frontend: Javascript, React, React Native, CSS, Git.',
         backendTechnology:'Backend: Node, Express, Google Apps Script',
         authors:'Autores: Eric Joel Marte',
 
      },
      es:{
         title:"Proyecto (3)", 
         title2:"Urban Security",
         category:'Categoría: Mobile App',
         description:'Descripción: Plataforma para registrar la entrada y salida del trabajador, Consultar las horas trabajadas ect.', 
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
         <article className={projectyle.bodyCard}>
            <section className={projectyle.card}>
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
            </section>
            <section className={projectyle.card2}>
               <div className={projectyle.card2ImgContainer}>
                 <img  src={seguridadImg} className={appStyle.Img}/>
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