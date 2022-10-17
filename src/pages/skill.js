import React from "react";
import skillStyle from "../components/styles/skill.module.css";
import firebaseIcon from '../components/images/Firebase.webp';
import HTMLIcon from '../components/images/HTML.webp';
import CssIcon from '../components/images/CSS.webp';
import Javascript from '../components/images/Javascript.webp';
import ReactIcon from '../components/images/React.webp';
import ReactNativeIcon from '../components/images/ReactNative.webp';
import ExpoIcon from '../components/images/Expo.webp';
import TauriIcon from '../components/images/Tauri.webp';
import GitIcon from '../components/images/Git.webp';
import Typewriter from 'typewriter-effect';


export default function Skill(props) {
    const {value}=props

   const data = [
      {
         title: 'HTML',
         Image: HTMLIcon

      },
      {
         title: 'CSS',
         Image: CssIcon
      },
      {
         title: 'Javascript',
         Image: Javascript
      },
      {
         title: 'React',
         Image: ReactIcon
      },
      {
         title: 'firebase',
         Image: firebaseIcon
      },
      {
         title: 'React Native',
         Image: ReactNativeIcon
      },
      {
         title: 'SDK Expo',
         Image: ExpoIcon
      },
      {
         title: 'Tauri',
         Image: TauriIcon
      },
      {
         title: 'Git',
         Image: GitIcon
      }
   ]

   return (
     <>
      {value ==='skill'?(
           <main className={skillStyle.container}>

           <section className={skillStyle.body}>
              
              <span className={skillStyle.text}>
                    <Typewriter
                       onInit={(typewriter) => {
                          typewriter.typeString("My Skills")
                             .pauseFor(2500)
                             //.deleteAll()
                             .start();
                       }}
                    />
              </span>
              <section className={skillStyle.bodyCard} >
                 {data.map((list, index) => {
                    return (
                       <article className={`${skillStyle.card} ${skillStyle.animate}`} key={index}>
                          <img src={list.Image} alt={`Imagen-${list.title}`} className={skillStyle.Image} />
                          <span className={skillStyle.imageText}>{list.title}</span>
                       </article>
                    )
                 })}
     
              </section>
     
              </section>
           </main>
      ):(
          <></>
      )}
     </>
   )
}