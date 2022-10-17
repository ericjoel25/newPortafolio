import React, { useState, useRef } from "react";
import menuStyle from '../styles/menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBookOpenReader, faBriefcase, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import foto from '../images/Eric2.webp'


export default function Menu(props) {

     const {setValue}=props
    const [resposive, setResposive] = useState(false)
    const menu2Ref = useRef()

    /*useEffect(() => {
        let show = window.matchMedia("(max-width: 767px)");
        window.addEventListener('resize', (e) => {
            // console.log(e.isTrusted)
            //console.log(show.matches)
            setResposive(show.matches)
        });

        //console.log(window)

    }, [])*/

function closeMenu(){
   
     menu2Ref.current.className=menuStyle.hideMenu; 
     setResposive(false)
    
   }

function openMenu(){
    
    menu2Ref.current.className=menuStyle.menu2;
    setResposive(true)
   
   }

function navegate(value){
    setValue(value)
    menu2Ref.current.className=menuStyle.hideMenu;
    setResposive(!resposive)
    
   }

    return (
        <>
            <nav className={menuStyle.menu}>

                <div className={menuStyle.fotoContainer}>
                    <img src={foto} alt='Eric Joel' className={menuStyle.foto} />
                </div>

                <span className={menuStyle.btn} onClick={()=> setValue('home')}>
                    <FontAwesomeIcon icon={faHouse} className={`${menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText} >Home</p>

                </span>

                <span  className={menuStyle.btn} onClick={()=> setValue('about')}>
                    <FontAwesomeIcon icon={faUser} className={`${menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText} >About</p>
                </span>

                <span  className={menuStyle.btn} onClick={()=> setValue('skill')}>
                    <FontAwesomeIcon icon={faBookOpenReader} className={`${ menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText}>Skill</p>
                </span>

                <span  className={menuStyle.btn} onClick={()=> setValue('projects')}>
                    <FontAwesomeIcon icon={faBriefcase} className={`${menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText}>Projects</p>
                </span>


                <span  className={menuStyle.btn} onClick={()=> setValue('contact')}>
                    <FontAwesomeIcon icon={faEnvelope} className={`${menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText}>Contact</p>
                </span>

            </nav>


            <nav ref={menu2Ref} className={menuStyle.hideMenu}>

                <div className={menuStyle.fotoContainer2}>

                    <img src={foto} alt='Eric Joel' className={menuStyle.foto2} />

                    <FontAwesomeIcon icon={faBars} className={menuStyle.faBars} onClick={() => closeMenu()} />

                </div>

                <span className={menuStyle.btn2} onClick={()=>navegate('home')}>
                    <FontAwesomeIcon icon={faHouse} className={`${menuStyle.btnIcon2}`} />
                    <p className={menuStyle.btnText2}>Home</p>

                </span>

                <span className={menuStyle.btn2} onClick={()=>navegate('about')} >
                    <FontAwesomeIcon icon={faUser} className={`${menuStyle.btnIcon2}`} />
                    <p className={menuStyle.btnText}  >About</p>
                </span>

                <span  className={menuStyle.btn2} onClick={() => navegate('skill')}>
                    <FontAwesomeIcon icon={faBookOpenReader} className={`${menuStyle.btnIcon2}`} />
                    <p className={menuStyle.btnText2}>Skill</p>
                </span>

                <span className={menuStyle.btn2} onClick={() => navegate('projects')}>
                    <FontAwesomeIcon icon={faBriefcase} className={`${menuStyle.btnIcon2}`} />
                    <p className={menuStyle.btnText2}>Projects</p>
                </span>


                <span  className={menuStyle.btn2} onClick={() => navegate('contact')}>
                    <FontAwesomeIcon icon={faEnvelope} className={`${menuStyle.btnIcon2}`} />
                    <p className={menuStyle.btnText2}>Contact</p>
                </span>

            </nav>

            {!resposive?(

            <header className={menuStyle.showMenuHeader} >
               <span className={menuStyle.showbtn}  onClick={() => openMenu()}>  
                  <FontAwesomeIcon icon={faBars} className={menuStyle.faBars} onClick={() => openMenu()}/>
               </span>
            </header> 
         
            ):(
                <></>
            )

            }



        </>

    )
}