
import {projectyle, appStyle} from '../utils/styles'; 
import {granjaImg} from '../components/images'; 

export function Myprojects2({language}) {

  
   
   const data ={
      en:{
         title:"Project (2)", 
         title2:"Granja M&D", 
         category:'Categoría: Web App',
         description:'Description: Developed a comprehensive web app to streamline the management of a pig farm, focused on tracking key data such as gestation periods, weight gain, and vaccination records. The solution boosted data collection efficiency to 95%, enabling more effective farm management and decision-making.', 
         frontendTechnology:'Frontend: Javascript, React, React Native, CSS, Git',
         backendTechnology:'Backend: Firebase',
         authors:'Autores: Eric Joel Marte',
      },
      es:{
         title:"Proyecto (2)", 
         title2:"Granja M&D",
         category:'Categoría: Web App',
         description:'Descripción: Desarrollé una aplicación web integral para agilizar la gestión de una granja porcina, centrada en el seguimiento de datos clave como períodos de gestación, aumento de peso y registros de vacunación. La solución aumentó la eficiencia de la recopilación de datos al 95 %, lo que permitió una gestión y una toma de decisiones más eficaces en las explotaciones agrícolas.', 
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
         
          
            <article className={projectyle.card2}>
               <div className={projectyle.card2ImgContainer}>
                 <img  src={granjaImg} className={projectyle.Img}/>
               </div>
            </article>

            <article className={projectyle.card}>
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
            </article>
        
      </main>

   )
}