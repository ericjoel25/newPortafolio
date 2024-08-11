import { useState } from "react";
import firebaseIcon from '../components/images/Firebase.webp';
import HTMLIcon from '../components/images/HTML.webp';
import CssIcon from '../components/images/CSS.webp';
import Javascript from '../components/images/Javascript.webp';
import ReactIcon from '../components/images/React.webp';
import ReactNativeIcon from '../components/images/ReactNative.webp';
import ExpoIcon from '../components/images/Expo.webp';
import TauriIcon from '../components/images/Tauri.webp';
import GitIcon from '../components/images/Git.webp';
import { skillStyle } from '../utils/styles';
import { scriptIcon, sqlIcon } from '../components/images/index';


export function Skill({ language }) {

   // 4 - 8  => 8- 12   //  4- 8
   const [useControl, setUseControl] = useState({ back: 0, next: 4 });


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
      },
      {
         title: 'Google App Script',
         Image: scriptIcon
      },
      {
         title: 'SQL',
         Image: sqlIcon
      }
   ];

   const title = {
      en: { title: "My skills!" },
      es: { title: "¡Mis habilidades!" }
   }


   function navigation({ type }) {

      if (type === "back" && useControl.back !== 0) {

         setUseControl({ back: useControl.back - 4, next: useControl.next - 4 });

      }


      if (type === "next" && useControl.next < data.length) {
         setUseControl({ back: useControl.next, next: useControl.next + 4 });
      }


   }


   return (

      <main className={skillStyle.container}>

         <span className={skillStyle.text}>
            <p>{title[language].title}</p>
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

         <section className={skillStyle.bodyCard2} >
            {data.slice(useControl.back, useControl.next).map((list, index) => {
               return (
                  <article className={`${skillStyle.card} ${skillStyle.animate}`} key={index}>
                     <img src={list.Image} alt={`Imagen-${list.title}`} className={skillStyle.Image} />
                     <span className={skillStyle.imageText}>{list.title}</span>
                  </article>
               )
            })}

            <div className={skillStyle.btnControlContainer}>
               <button className={skillStyle.btnControl} onClick={() => navigation({ type: "back" })}>Back</button>
               <button className={skillStyle.btnControl} onClick={() => navigation({ type: "next" })}>next</button>
               <span className={skillStyle.controlText}>
                  {`${useControl.next > data.length ? data.length : useControl.next} / ${data.length} `}
               </span>
            </div>
         </section>
      </main>

   )
}