import React from "react";
import {homeStyle} from '../utils/styles'; 
import {mePhoto} from '../components/images'; 

export function Home({callback, language}) {

    const data ={
        en:{
           sayHello:"Hi there!", 
           name:"I'm Eric Joel", 
           job:"Programmer that use web technology.", 
           btnText:'Projects'
        }, 
        es:{
            sayHello:"¡Hola!", 
            name:"Soy Eric Joel", 
            job:"Programador que utiliza tecnología web.", 
            btnText:'Proyectos'  
        }
    }
   
    return (

        <main className={homeStyle.container}>
            <article className={homeStyle.body}>
                <section className={homeStyle.article} >
                    <p className={homeStyle.title}>{data[language]?.sayHello}</p>    
                    <p className={homeStyle.title}>{data[language]?.name}</p>   
                    <p className={homeStyle.title}>{data[language]?.job}</p>   
                    <span className={homeStyle.btn2} onClick={() => callback()}>
                         {/*  <FontAwesomeIcon icon={faEnvelope} className={homeStyle.btnIcon2} /> */}
                        <p className={homeStyle.btnText2}>{data[language]?.btnText}</p>
                    </span>
                </section>
     
                 <section className={homeStyle.article2} >
                    <div className={homeStyle.imgContainer}>
                      <img src={mePhoto} alt='home' className={homeStyle.Img} />
                    </div> 
                </section>
            </article>
        </main>

    )
}