
import {projectyle, appStyle} from '../utils/styles'; 
import {granjaImg} from '../components/images'; 

export function Myprojects2({language}) {

  
   
   const data ={
      en:{
         title:"Project (2)", 
         title2:"Granja M&D", 
         category:'Categoría: Web App',
         description:'Description: Tool to monitor the pig production process in a barn, from gestation to sale.', 
         frontendTechnology:'Frontend: Javascript, React, React Native, CSS, Git',
         backendTechnology:'Backend: Firebase',
         authors:'Autores: Eric Joel Marte',
      },
      es:{
         title:"Proyecto (2)", 
         title2:"Granja M&D",
         category:'Categoría: Web App',
         description:'Descripción: Herramienta para dar seguimiento al proceso de producción de cerdos en una graja, desde la gestacion hasta la venta', 
         frontendTechnology:'Frontend: Javascript, React, React Native, CSS, Git.',
         backendTechnology:'Backend: Firebase',
         authors:'Autores: Eric Joel Marte',
      }
   }
   function certificaciones({type, show}) {
      if(type === "code" && show){

         window.open("https://github.com/ericjoel25/granjamd", "_blank");      
         return; 
      }
      window.open("https://ericjoel25.github.io/granjamd/", "_blank");        
   }
   return (

      <main className={projectyle.container}>
         <article className={projectyle.bodyCard}>
          
            <section className={projectyle.card2}>
               <div className={projectyle.card2ImgContainer}>
                 <img  src={granjaImg} className={appStyle.Img}/>
               </div>
            </section>

            <section className={projectyle.card}>
               <p className={projectyle.cardTitle}>{data[language]?.title}</p>
               <p className={projectyle.cardTitle2}>{data[language]?.title2}</p>
               <p className={projectyle.cardText}>{data[language]?.category}</p>
               <p className={projectyle.cardText}>{data[language]?.description}</p>
               <p className={projectyle.cardText}>{data[language]?.frontendTechnology}</p>
               <p className={projectyle.cardText}>{data[language]?.backendTechnology}</p>
               <p className={projectyle.cardText}>{data[language]?.authors}</p>
               <div className={projectyle.btnContainer}>
                  <button className={projectyle.btn} onClick={()=> certificaciones({type:"code", show:true})}>Code</button>
                  <button className={projectyle.btn}  onClick={()=> certificaciones({type:"demo", show:true})}>Demo</button>
               </div>
            </section>
         </article>

      </main>

   )
}