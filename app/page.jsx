"use client"
// import gsap from "gsap"
// Linea 1 traera animaciones de gsap

import { useEffect } from "react"
// Linea 4 traera el hook useEffect

import HeadText from "../components/headText"
// Linea 8 importamos el componente headText




export default function HomePage () {
    return <>
        <div className="row">
            <div id="fondo" className="col-5 col-lg-12 text-center">Developer</div>
            <HeadText/>
        </div>
    </>
}