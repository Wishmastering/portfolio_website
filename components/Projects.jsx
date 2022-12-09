import Link from "next/link";
import Image from "next/image";
import where2dayHOME from "../public/Where2dayHOME1.PNG";
import where2dayPOST from "../public/Where2dayPost.PNG";

import {useState} from "react";

const [blur, setBlur] = useState(false);



export default function Projects(){
    return<>
        <div className="ms-4 container w-100 marginSection ">
            <div className="row">
                <div className="col-5">
                    <h5 className="ms-4"> Selected Projects</h5>
                    <h1 className="ms-4 mt-3 heavyFont mb-5"> Portfolio</h1>
                </div>
            </div>
            <div className="mt-5 w-100 text-center justify-content-center row">
                <div className="position-relative col-6 projectsHeight">
                    {/* Div de la 20 aparece/desaparece el texto */}
                    {/* NO OCUPA MOUSE LEAVE PORQUE TIENE OPACIDAD 0 */}
                    <div onMouseEnter={()=> setBlur(true)}
                    className={blur ? "position-absolute col-6 zindex" : " "><h1> Where2day</h1></div>
                    
                    // Aca si se hace on mouseEnter para setear blur TRUE y hacer
                    // "El Agregado de la class que le hace la transicion de CSS"

                    // Luego el mouseLEAVE hara blur FALSE y regresa al estado inicial

                    <Image 
                    className="rounded shadow blur"
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
                    <div  className="position-absolute col-6 zindex"><h1> Star Wars</h1></div>
                    <Image 
                    className="rounded shadow blur"
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