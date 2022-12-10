"use client"
import Link from "next/link";
import Image from "next/image";
import where2dayHOME from "../public/Where2dayHOME1.PNG";
import where2dayPOST from "../public/Where2dayPost.PNG";
import {useState} from "react";





export default function Projects(){
    
    const [blur, setBlur] = useState(false);

    function test(){
         if (blur){
            console.log("Funciono")
        }
        else{
            console.log("NO Funciono")
        }
    }

    setTimeout(test(), 5000)

    return<>
        <div className="ms-4 container w-100 marginSection ">
            <div className="row">
                <div className="col-5">
                    <h5 className="ms-4"> Selected Projects</h5>
                    <h1 className="ms-4 mt-3 heavyFont mb-5"> Portfolio</h1>
                </div>
            </div>
            
            {/* Aca empiezan las cards de portfolio con animacion */}

            <div className="row mt-5 w-100 ">
                <div className="position-relative col-lg-6 projectsHeight">
                    {/* Div de la 27 aparece/desaparece el texto */}
                    {/* NO OCUPA MOUSE LEAVE PORQUE TIENE OPACIDAD 0 */}
                    <div onMouseEnter={()=> setBlur(true)}
                         className="visible position-absolute ms-5 mt-3"><h1> Where2day</h1>
                        <div 
                            // onMouseEnter={()=> setBlur(true)}
                             className={blur ? "visible desblurry position-absolute ms-3 mt-3" : "invisible blurry"}>
                                <h2>Where2Day - A social app to share experiences</h2> 
                        </div>
                    </div>
                    
                    {/* // Aca si se hace on mouseEnter para setear blur TRUE y hacer */}
                    {/* // "El Agregado de la class que le hace la transicion de CSS" */}
                    {/* // Luego el mouseLEAVE hara blur FALSE y regresa al estado inicial */}
                    <Image 
                    onMouseEnter={() => setBlur(true)}
                    onMouseLeave={() => setBlur(false)}
                    className={blur ? "rounded shadow blurry" : "rounded shadow desblurry"}
                    alt="Where2day"
                    src={where2dayHOME}
                    width={500}
                    height={1000}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                    />
                </div>    
                <div className="position-relative col-6 projectsHeight">
                    <div  className="position-absolute col-6 visible"><h1> Star Wars</h1></div>
                    <Image 
                    className="rounded shadow desblurry"
                    alt="Where2day"
                    src={where2dayPOST}
                    width={500}
                    height={1000}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                    />
                </div>    
            </div>
            
        </div>
    </>
}