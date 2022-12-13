"use client"

import { useEffect } from "react"

// Linea 4 traera el hook useEffect

import HeadText from "../components/headText"
import Projects from "../components/projects"
import CallToAction from "../components/callToAction"
import Footer from "../components/footer"

// Linea 8 importamos el componente headText




export default function HomePage () {
    return <>
        <div className="row"> 
            <HeadText/>
            <Projects/>
            <CallToAction/>
            <div className="row justify-content-center">
                <hr className="w-75 marginSection "/>
            </div>
            <Footer/>
        </div>
    </>
}