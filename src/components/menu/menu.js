import React, { useState, useRef, useEffect } from "react";
import menuStyle from '../styles/menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBookOpenReader, faBriefcase, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import foto from '../images/Eric2.webp'


export default function Menu(props) {

    const { value, setValue } = props
    const [resposive, setResposive] = useState(false);
    const [show, setShow] = useState(true);
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


    function closeMenu() {
        menu2Ref.current.className = menuStyle.hideMenu2;
        setShow(false);
        setResposive(false);
        setTimeout(() => {
            menu2Ref.current.className = menuStyle.hideMenu;
        }, 500)

    }

    function openMenu() {

        menu2Ref.current.className = menuStyle.menu2;
        setResposive(true);
        setShow(true)

    }

    function navegate(value) {

        // menu2Ref.current.className = menuStyle.hideMenu;
        menu2Ref.current.className = menuStyle.hideMenu2;
        setValue(value)
        setResposive(!resposive)
        setShow(false);

        setTimeout(() => {
            menu2Ref.current.className = menuStyle.hideMenu;
        }, 400)

    }


    return (
        <>
            <nav className={menuStyle.menu}>

                <div className={menuStyle.fotoContainer}>
                    <img src={foto} alt='Eric Joel' className={menuStyle.foto} />
                </div>

                <span className={menuStyle.btn} onClick={() => setValue('home')}>
                    <FontAwesomeIcon icon={faHouse}  className={`${value==='home' ? menuStyle.activate: menuStyle.btnIcon}`}/>
                    <p className={menuStyle.btnText} >Home</p>

                </span>

                <span className={menuStyle.btn} onClick={() => setValue('about')}>
                    <FontAwesomeIcon icon={faUser} className={`${value==='about' ? menuStyle.activate: menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText} >About</p>
                </span>

                <span className={menuStyle.btn} onClick={() => setValue('skill')}>
                    <FontAwesomeIcon icon={faBookOpenReader} className={`${value==='skill' ? menuStyle.activate: menuStyle.btnIcon}`}/>
                    <p className={menuStyle.btnText}>Skill</p>
                </span>

                <span className={menuStyle.btn} onClick={() => setValue('projects')}>
                    <FontAwesomeIcon icon={faBriefcase}className={`${value==='projects' ? menuStyle.activate: menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText}>Projects</p>
                </span>


                <span className={menuStyle.btn} onClick={() => setValue('contact')}>
                    <FontAwesomeIcon icon={faEnvelope} className={`${value==='contact' ? menuStyle.activate: menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText}>Contact</p>
                </span>

            </nav>


            <nav ref={menu2Ref} className={menuStyle.hideMenu}  >

                <section className={!show ? menuStyle.hidenMenuBody: undefined}>
                    <div className={menuStyle.fotoContainer2}>

                        <img src={foto} alt='Eric Joel' className={`${show ? menuStyle.foto2 : menuStyle.btnHiden}`} />

                        <FontAwesomeIcon icon={faBars} className={`${show ? menuStyle.faBars : menuStyle.btnHiden}`} onClick={() => closeMenu()} />

                    </div>

                    <span className={`${show ? menuStyle.btn2 : menuStyle.btnHiden}`} onClick={() => navegate('home')}>
                        <FontAwesomeIcon icon={faHouse} className={`${value === 'home' ? menuStyle.activate: menuStyle.btnIcon2}`} />
                        <p className={`${show ? menuStyle.btnText2 : menuStyle.btnHiden}`}>Home</p>

                    </span>

                    <span className={`${show ? menuStyle.btn2 : menuStyle.btnHiden}`} onClick={() => navegate('about')} >
                        <FontAwesomeIcon icon={faUser} className={`${value === 'about' ? menuStyle.activate: menuStyle.btnIcon2}`} />
                        <p className={menuStyle.btnText}  >About</p>
                    </span>

                    <span className={`${show ? menuStyle.btn2 : menuStyle.btnHiden}`} onClick={() => navegate('skill')}>
                        <FontAwesomeIcon icon={faBookOpenReader} className={`${value === 'skill' ? menuStyle.activate: menuStyle.btnIcon2}`} />
                        <p className={`${show ? menuStyle.btnText2 : menuStyle.btnHiden}`}>Skill</p>
                    </span>

                    <span className={`${show ? menuStyle.btn2 : menuStyle.btnHiden}`} onClick={() => navegate('projects')}>
                        <FontAwesomeIcon icon={faBriefcase} className={`${value === 'projects' ? menuStyle.activate: menuStyle.btnIcon2}`} />
                        <p className={`${show ? menuStyle.btnText2 : menuStyle.btnHiden}`}>Projects</p>
                    </span>


                    <span className={`${show ? menuStyle.btn2 : menuStyle.btnHiden}`} onClick={() => navegate('contact')}>
                        <FontAwesomeIcon icon={faEnvelope}className={`${value === 'contact' ? menuStyle.activate: menuStyle.btnIcon2}`} />
                        <p className={`${show ? menuStyle.btnText2 : menuStyle.btnHiden}`}>Contact</p>
                    </span>
                </section>



            </nav>

            {!resposive ? (

                <header className={menuStyle.showMenuHeader}>
                    <span className={menuStyle.showbtn} onClick={() => openMenu()}>
                        <FontAwesomeIcon icon={faBars} className={menuStyle.faBars} onClick={() => openMenu()} />
                    </span>
                </header>

            ) : (
                <></>
            )

            }



        </>

    )
}