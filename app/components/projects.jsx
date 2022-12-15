"use client"
// import Link from "next/link";
import Image from "next/image";
import where2day from "../../public/ovejanegra.png";
import post from "../../public/nyan.webp";
import {useState} from "react";


export default function Projects(){
    
    const [blur, setBlur] = useState(false);
    const [blurStarWars, setBlurStarWars] = useState(false);
    
    

    return<>
        <section id="scroller" className="w-100 marginSectionScroll">
        <div className="mt-scroll">
            <div className="row">
                <div className="col-5">
                    <h5 className=""> Selected Projects</h5>
                    <h1 className=" mt-3 heavyFont mb-5"> Portfolio</h1>
                </div>
            </div>
            
            {/* Aca empiezan las cards de portfolio con animacion */}

            <div className="row mt-5 d-flex justify-content-center">
                
                {/* Metemos todo dentro del <a> tag para que TODO redirija */}
                <div  className="position-relative col-lg-6 projectsHeight overflowx">
                    <a href="/projects/where2day">
                        <div 
                         className="visible position-absolute ms-5 mt-3 w-75">
                            <h1
                             onMouseEnter={()=> setBlur(true)}    
                             > Where2day
                            </h1>
                            <div 
                             onMouseEnter={()=> setBlur(true)}
                             className={blur ? "visible desblurry position-absolute ms-3 mt-3 w-75" : "invisible blurry w-75"}
                             >
                                <h3>Jul 2022 - Oct 2022 </h3>
                                <h2>Where2Day - <br/> A social app to share experiences</h2> 
                                <h3>View Project ➡</h3>
                            </div>
                    
                        </div>
                    
                     {/* // Aca se hace on mouseEnter para setear blur TRUE y hacer */}
                     {/* // "El Agregado de la class que le hace la transicion de CSS" */}
                     {/* // Luego el mouseLEAVE hara blur FALSE y regresa al estado inicial */}
                     <Image 
                     
                     onMouseEnter={() => setBlur(true)}
                     onMouseLeave={() => setBlur(false)}
                     className={blur ? "rounded shadow blurry pointerWeak position-absolute overflowx" : "rounded shadow desblurry position-absolute overflowx"}
                     alt="Where2day"
                     src={where2day}
                     width={500}
                     height={1000}
                     style={{
                        maxWidth: "100%",
                        height: "auto",
                     }}
                     />
                    </a>
                </div>    

                    {/* Inicia nuevo card */}
                <div className="position-relative col-6 projectsHeight overflowx">
                    <a href="/projects/star_wars">
                        <div  className="position-absolute mt-3 ms-5 col-6 visible">
                            <h1
                             onMouseEnter={()=> setBlurStarWars(true)}>
                             Star Wars
                            </h1>
                            <div 
                             onMouseEnter={()=> setBlurStarWars(true)}
                             className={blurStarWars ? "visible desblurry position-absolute ms-3 mt-3" : "invisible blurry"}
                             >
                                <h3>Jul 2022 - Aug 2022 </h3>
                                <h2>Star Wars Website - <br/> Interactive Website That Used Fetch API Star Wars Database</h2> 
                                <h3>View Project ➡</h3>
                            </div>
                        </div>
                        <Image 
                         onMouseEnter={() => setBlurStarWars(true)}
                         onMouseLeave={() => setBlurStarWars(false)}
                         className={blurStarWars ? "rounded shadow blurry pointerWeak position-absolute overflowx" : "rounded shadow desblurry position-absolute overflowx"}
                         alt="Where2day"
                         src={post}
                         width={500}
                         height={1000}
                         style={{
                            maxWidth: "100%",
                            height: "auto",
                         }}
                        />
                    </a>
                </div>    
            </div>
        </div>
        </section>
    </>
}