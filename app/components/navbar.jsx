"use client"
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/CC.png';
import gsap from 'gsap';



export default function Navbar() {
  


//   useEffect(() => {
//     const hamburger= document.querySelector(".hamburger")  
//       gsap.from(hamburger, { duration: 4, opacity: 0.5, x: -400 });
//   }, []);

    return <>
    {/* Aca tendremos dos componentes  */}
        <div className="navigation d-flex fs-6 w-100 mt-3 justify-content-between">

            {/* El primero es MI NOMBRE Y UN LOGO */}
            <div className="float-start navIcon d-flex align-items-center ms-5">
                <Link href="/" className="pointer text-dark pointerNav">
                    <Image 
                     className="pointer iconFilter"
                     alt="CC Logo"
                     src={logo}
                     width={50}
                     height={50}
                     style={{
                        maxWidth: "100%",
                        height: "auto",
                     }}
                    />
                    Carlos Carranza
                </Link>
            </div>

            {/* EL SEGUNDO ES EL MENU Y EL ICONO MENU CLICKEABLE */}
            <div className="float-start">
               
                <a className="btn d-flex navIcon align-items-center pointer" href="#"  role="button" data-bs-toggle="dropdown">
                    <span className="navIcon2 ">Menu</span> <ion-icon name="menu-outline"></ion-icon>
                    {/* <svg className="hamburger " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={{backgroundColor:"green"}}>
                        <line className="line-one" x1="25" y1="38" x2="75" y2="38" fill='none' stroke="#000" strokeMiterlimit="10" strokeWidth="4"/>
                        <line className="line-two" x1="25" y1="50" x2 = "75" y2="50" fill='none' stroke="#000" strokeMiterlimit="10" strokeWidth="4"/>
                        <line className="line-three" x1="25" y1="62" x2 = "75" y2="62" fill='none' stroke="#000" strokeMiterlimit="10" strokeWidth="4"/>
                    </svg> */}
                </a>

                <ul className="dropdown-menu ">
                    <li><Link className="dropdown-item" href="/projects/where2day">Projects</Link></li>
                    <li><Link className="dropdown-item" href="/about">About Me</Link></li>
                    <li><Link className="dropdown-item" href="/contact">Contact</Link></li>
                    <li> <Link className="dropdown-item" href="https://www.linkedin.com/in/carlos-i-carranza/" target="_blank" > Linkedin</Link></li>
                    <li> <Link className="dropdown-item" href="https://github.com/Wishmastering" target="_blank" > Github</Link></li>
                    
                </ul>
                
            </div>
        </div>
    </>
}