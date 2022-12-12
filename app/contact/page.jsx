"use client"

import Footer from "../../components/footer"
import { useEffect } from "react"

export default function ContactPage () {
    return <>
            
            {/* Imagen de Costa Rica aca */}
            <div className="contactMap align-center col-12 justify-content-center">
                <img src="https://geology.com/world/costa-rica-map.gif"/>
            </div>

            {/* Aca iran los componentes de la Izq y Der */}
            <div className="row container marginSection ms-4">
                {/* Texto de la izquierda Aca */}
                <div className="col-lg-6"> 
                    <h5>Contact</h5>
                    <h1> Get in touch — let’s work together.</h1>
                    <div className="mt-5">
                        <h5>Address</h5>
                        <h3 className="headerDark text-dark">Carlos Carranza <br/>
                                                   Los Angeles <br/>
                                                    San Rafael <br/>
                                                     Heredia   <br/>
                                                     Costa Rica
                        </h3>
                    </div>
                </div>

                {/* Aca Empiezan los componentes de la derecha */}
                <div className="col-lg-6 mt-5">
                    <h3>Got a project? Drop me a line if you want to work
                         together on something exciting. Big or small. Mobile or web.
                    </h3>

                {/* Aca empiezan los inputs */}
                    <form action="#" >
                    {/* Aca habran DOS DIVS para Your Name / Your eMail */}
                    <div className="w-100 d-flex">
                        {/* Este es el de Name */}
                        <div className="col-lg-6 mt-5 p-2">
                            <label className="grot d-block form-control border-0" htmlFor="name">
                                Your name
                            </label>
                            <input className="p-3 w-100 border-0 form-control" placeholder="What's your name?" id="name"  type="text" />
                        </div>
                        {/* Este es el de eMail */}
                        <div  className="col-lg-6 mt-5 p-2">
                            <label className="grot d-block form-control border-0" htmlFor="email">
                                Your email
                            </label>
                            <input className="p-3 w-100 form-control border-0" placeholder="What's your email?" id="email"  type="text" />
                        </div>
                    </div>

                    {/* Este es el de los clickeables son DOS DIVS*/}
                    <div className="w-100 row">
                        {/* Este Div para "el motivo de contacto" */}
                        <div className="col-lg-6 mt-5 p-2"> <label className="grot d-block form-control border-0" htmlFor="service">Services</label>
                            <select className=" w-100 form-control p-3 text-secondary pointer" name="services" id="service">
                                <option value="-1">What are you interested in?</option>
                                <option>Need help with a one time project</option>
                                <option>Looking for a longterm partnership</option>
                                <option>Want to hire me full-time</option>
                                <option>Just wanted to say hi!</option>
                            </select>
                        </div>
                        {/* Este Div para "El Budget" */}
                        <div className="col-lg-6 mt-5 p-2"> <label className="grot d-block form-control border-0" htmlFor="service">Services</label>
                            <select className=" w-100 form-control p-3 text-secondary pointer" name="services" id="service">
                                <option value="-1">What is your budget?</option>
                                <option>500$-1000$</option>
                                <option>1000$-2500$</option>
                                <option>2500$-5000$</option>
                                <option>5000$ or more</option>
                            </select>
                        </div>

                    <div className="col-lg-12 mt-5 p-2">
                    <textarea className="form-control border-1" placeholder="What's your message?" name="Comments" id="comments" cols="13" rows="8"></textarea>
                    </div>
                    <div className="col-lg-12 mt-5 p-2">
                        <h1 className="fs-3 pointer d-inline-block">✉️Send message</h1>
                    </div>

                    
                    </div>
                    </form>
                </div>
                <Footer/>
                
            </div>    
    </>
}