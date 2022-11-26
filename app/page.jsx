"use client"

import { useEffect } from "react"

import BackgroundDeveloper from "../components/backgroundText"
// Linea 4 traera el hook useEffect

import HeadText from "../components/headText"
import Projects from "../components/Projects"

// Linea 8 importamos el componente headText




export default function HomePage () {
    return <>
        <div className="row">
            <BackgroundDeveloper/>
            <HeadText/>
            <Projects/>
        </div>
    </>
}