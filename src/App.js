
import React,{useState} from 'react';
import './App.css';
import Menu from './components/menu/menu';
import Background from './pages/background';
import appStyle from './components/styles/app.module.css'; 
import Home from './pages/home';
import About from './pages/about';
import Skill from './pages/skill';
import Myprojects from './pages/myProjects';
import Contact from './pages/contact';

export default function App() {
 
  const [value, setValue]= useState('home');


  return (
    <main className={appStyle.container}>
      <Background />
      <Menu value={value} setValue={setValue} />

      <section className={appStyle.body}>
        <Home value={value} />
        <About value={value} />
        <Skill value={value} />
        <Myprojects value={value} />
        <Contact value={value} />
      </section>
      
    </main>
  );

}



