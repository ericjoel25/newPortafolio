import React from "react";
import aboutStyle from '../components/styles/about.module.css';
import Typewriter from 'typewriter-effect';
import foto from '../components/images/Eric2.webp'


export default function About(props) {
    const {value} =props
  
    return (
       <>
        {value==='about'?(
             <main className={aboutStyle.container}>
             <section className={aboutStyle.body}>
                 <article className={aboutStyle.article} >
                     <span className={aboutStyle.title} >
                         <Typewriter
                             onInit={(typewriter) => {
                                 typewriter.typeString("Who Am I?")
                                     .pauseFor(2500)
                                     //.deleteAll()
                                     .start();
                             }}
                         />
 
                     </span>
 
                     <p className={aboutStyle.title2}>
                         I am a self-taught programmer, passionate about technology.<br/><br/>
                         Open to learn new technology.<br/><br/>
                         I am looking for a position where I can use my skills to solve problems with code.
                     </p>
 
                 </article>
 
                 <article className={aboutStyle.article2} >
                   <img src={foto} alt='home' className={aboutStyle.homeImg} />
           
                   <p className={aboutStyle.text}>
                      Eric Joel Marte
                   </p>
                    
                 </article>
 
             </section>
         </main>
        ):(
            <></>
        )}
       </>
    )
}