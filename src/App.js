
import React,{useState, useRef} from 'react';
import './App.css';
import Menu from './components/menu/menu';
import appStyle from './components/styles/app.module.css'; 
import {Contact, About, Background, Home, Myprojects, Skill} from './pages';


export default function App() {
 
  const [value, setValue]= useState('home');



  return (
    <main  className={appStyle.container}>
      {/*<Background />*/}
      <Menu value={value} setValue={setValue} />

      <section className={appStyle.body}>
        <Home value={value} setValue={setValue} />
        <About value={value} />
        <Skill value={value} />
        <Myprojects value={value} />
        <Contact value={value} />
      </section>
      
    </main>
  );

}



