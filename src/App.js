import {useRef, useEffect, useState} from 'react'; 
import './App.css';
import {appStyle}  from './utils/styles'; 
import {Home, About, Myprojects, Myprojects2, Myprojects3, Myprojects4, Skill, Contact} from './pages'; 
import {englishIcon, spanishIcon} from '../src/components/images'; 
import {Modal} from './components/modal/modal'; 
 


export default function App() {
 
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const skillRef = useRef();
  const contactRef = useRef();
  const [language, setLanguage] = useState('es'); 
  const [showAlert, setShowAlert] = useState(false); 


 useEffect(()=>{
  
   //setLanguage(navigator.language);

   //console.log(navigator.language)

 },[])

  const scrollTo =  (refView) => {
     refView?.current?.scrollIntoView({behavior: 'smooth'})
  }
 

  function changeLanguage(){
     const data = {es:'en', en:'es'}
     setLanguage((prev)=> data[prev])

  }

  return (
    <main  className={appStyle.container}>
      <nav className={appStyle.header}>
        <button className={appStyle.headerBtn}  onClick={()=> scrollTo(homeRef)}>Home</button>
        <button className={appStyle.headerBtn} onClick={()=> scrollTo(aboutRef)}>About</button>
        <button className={appStyle.headerBtn} onClick={()=> scrollTo(projectRef)}>Projects</button>
        <button className={appStyle.headerBtn} onClick={()=> scrollTo(skillRef)}>Skill</button>
        <button className={appStyle.headerBtn} onClick={()=> scrollTo(contactRef)}>Contact</button>
        <button className={appStyle.headerBtn} onClick={()=> changeLanguage()}>
          <img src={`${language ==='es'?spanishIcon:englishIcon}`} className={appStyle.headerIcon} />
        </button>
      </nav>

      <article className={appStyle.body}>
         
        <section ref={homeRef} className={appStyle.Home}>
          <Home callback={()=>scrollTo(projectRef)} language={language.slice(0,2)}/>
        </section>
        <section ref={aboutRef} className={appStyle.About}>
          <About gotoContact={()=>scrollTo(contactRef)} language={language.slice(0,2)}/>
        </section>
        <section ref={projectRef} className={appStyle.Projects}>
         <Myprojects language={language.slice(0,2)} setShowAlert={setShowAlert}/>
        </section>
        <section className={appStyle.Projects}>
          <Myprojects2 language={language.slice(0,2)} />
        </section>

        <section className={appStyle.Projects}>
          <Myprojects3  language={language.slice(0,2)} setShowAlert={setShowAlert}/>
        </section>
        <section className={appStyle.Projects}>
          <Myprojects4  language={language.slice(0,2)} setShowAlert={setShowAlert}/>
        </section>

        <section ref={skillRef} className={appStyle.Skill}>
           <Skill language={language.slice(0,2)} />
        </section>
      
        <section ref={contactRef} className={appStyle.Contact}>
         <Contact  language={language.slice(0,2)} />
        </section>
            
    
        {/* 
        */}
      
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
  );

}



