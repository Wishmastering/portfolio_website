"use client"

import Footer from "../../components/footer"
import { useEffect } from "react"

export default function ContactPage () {
    return <>
            <div className="contactMap align-center col-12 ">
                <img src="https://geology.com/world/costa-rica-map.gif"/>
            </div>
            <div className="row container marginSection ms-4">
                <div className="col-lg-6"> 
                    <h5>Contact</h5>
                    <h1> Get in touch — let’s work together.</h1>
                    <div className="mt-5">
                        <h5>Address</h5>
                        <h3 className="headerDark">Carlos Carranza <br/>
                                                   Los Angeles <br/>
                                                    San Rafael <br/>
                                                     Heredia   <br/>
                                                     Costa Rica
                        </h3>
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <h3>Got a project? Drop me a line if you want to work
                         together on something exciting. Big or small. Mobile or web.
                    </h3>
                    <form className="mt-5 mb-5" action="#"/>
                        <input/>
                </div>
                <Footer/>
                
            </div>    
    </>
}