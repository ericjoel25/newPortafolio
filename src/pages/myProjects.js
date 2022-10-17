import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faEye } from '@fortawesome/free-solid-svg-icons';
import projectStyles from "../components/styles/myProjects.module.css";
import Typewriter from 'typewriter-effect';
import granja from '../components/images/Granja.webp';
import puntoDeVenta from '../components/images/venta.webp';
import ortografia from '../components/images/Ortografia.webp';

export default function Myprojects(props){
  
   const {value}=props

   const data = [
      {
         title: 'HTML, CSS, React, Firebase',
         Image:granja,
         demo:'https://ericjoel25.github.io/granjamd/',
         code:'https://github.com/ericjoel25/granjamd.git'

      },
      {
         title: 'HTML, CSS, Javascript Vanilla',
         Image: puntoDeVenta,
         demo:'https://ericjoel25.github.io/gestor-de-ventas/#Tablero',
         code:'https://github.com/ericjoel25/gestor-de-ventas.git'
      },
      {
         title: 'React Native, Expo, CSS',
         Image: ortografia,
         demo:'',
         code:''
      },
      {
         title: 'React',
         Image: '',
         demo:'',
         code:''
      },
      {
         title: 'firebase',
         Image: '',
         demo:'',
         code:''
      },
      {
         title: 'React Native',
         Image: '',
         demo:'',
         code:''
      },
      {
         title: 'SDK Expo',
         Image: '',
         demo:'',
         code:''
      },
      {
         title: 'Tauri',
         Image: '',
         demo:'',
         code:''
      },
      {
         title: 'Git',
         Image: '',
         demo:'',
         code:''
      }
   ]


    return(
       <>
        {value ==='projects'?(
            <main className={projectStyles.container}>
            <section className={projectStyles.body}>
           
           <span className={projectStyles.text}>
                 <Typewriter
                    onInit={(typewriter) => {
                       typewriter.typeString("My projects.")
                          .pauseFor(2500)
                          //.deleteAll()
                          .start();
                    }}
                 />
           </span>
           
           <section className={projectStyles.bodyCard} >
              {data.map((list, index) => {
                 return (
                    <article className={`${projectStyles.card} ${projectStyles.animate}`} key={index}>
                        <img src={list.Image} alt={`Imagen-${list.title}`} className={projectStyles.Image} />
  
                       <span className={projectStyles.imageText}>{list.title}</span>
                        
                       {list.code !==''?(
                          <div className={projectStyles.btnBody}>
                          <a target="_blank"  href={`${list.code}`} className={projectStyles.btn}>
                             Code
                             <FontAwesomeIcon icon={faCode}  className={projectStyles.textIcon}/>
                          </a>
                          <a  target="_blank"  href={`${list.demo}`} className={projectStyles.btn}>
                             Demo
                             <FontAwesomeIcon icon={faEye}  className={projectStyles.textIcon} />
                          </a>
                          </div>
                       ):(
  
                          <div className={projectStyles.btnBody}>
                          <button target="_blank"  className={projectStyles.btn} onClick={()=>alert('ok')}>
                             Code
                             <FontAwesomeIcon icon={faCode}  className={projectStyles.textIcon}/>
                          </button>
                          <a  target="_blank" href={`${list.demo}`} className={projectStyles.btn}>
                             Demo
                             <FontAwesomeIcon icon={faEye}  className={projectStyles.textIcon} />
                           </a>
                         </div>
  
                       )
  
                       }
                      
                    </article>
                 )
              })}
  
           </section>
  
           </section>
         </main>
        ):(
            <></>
        )

        }
       </>
    )
}