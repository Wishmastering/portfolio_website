"use client"
// import Link from "next/link";
import Image from "next/image";
import where2day from "../../public/ovejanegra.png";
import starwars from "../../public/starwarscard.png";
import prometeo from "../../public/PrometeoCARD.png";
import landing from "../../public/Where2dayLANDING.png"
import {useState} from "react";


export default function Projects(){
    
    const [blur, setBlur] = useState(false);
    const [blurStarWars, setBlurStarWars] = useState(false);
    const [blurLand, setBlurLand] = useState(false);
    const [blurProm, setBlurProm] = useState(false);
    
    

return<>
    {/* Esta section contiene dos cards, where2day y starwars */}
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
                     src={landing}
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
                         src={starwars}
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

    {/* =8=8=8==8=8=8==8=8=8==8=8=8==8=8=8==8=8=8==8=8=8==8=8=8==8=8=8==8=8=8= */}
    {/* Inicia una nueva seccion de cards Where2day Landing y Prometeo */}
    {/* =8=8=8==8=8=8==8=8=8==8=8=8==8=8=8==8=8=8==8=8=8==8=8=8==8=8=8==8=8=8= */}
    <section className="w-100 mt-5">
        <div className="">          
            {/* Aca empiezan las cards de portfolio con animacion */}

            <div className="row d-flex justify-content-center">
                
                {/* Aca empieza el where2day LANDING Card */}
                {/* Metemos todo dentro del <a> tag para que TODO redirija */}
                <div  className="position-relative col-lg-6 projectsHeight overflowx">
                    <a href="/projects/where2day_landing">
                        <div 
                         className="visible position-absolute ms-5 mt-3 w-75">
                            <h1
                             onMouseEnter={()=> setBlurLand(true)}    
                             > Where2day <br/>Landing Page
                            </h1>
                            <div 
                             onMouseEnter={()=> setBlurLand(true)}
                             className={blurLand ? "visible desblurry position-absolute ms-3 mt-3 w-75" : "invisible blurry w-75"}
                             >
                                <h3>Jul 2022 - Oct 2022 </h3>
                                <h2>Where2Day - <br/> Full Design</h2> 
                                <h3>View Project ➡</h3>
                            </div>
                    
                        </div>
                    
                     {/* // Aca se hace on mouseEnter para setear blur TRUE y hacer */}
                     {/* // "El Agregado de la class que le hace la transicion de CSS" */}
                     {/* // Luego el mouseLEAVE hara blur FALSE y regresa al estado inicial */}
                     <Image 
                     
                     onMouseEnter={() => setBlurLand(true)}
                     onMouseLeave={() => setBlurLand(false)}
                     className={blurLand ? "rounded shadow blurry pointerWeak position-absolute overflowx" : "rounded shadow desblurry position-absolute overflowx"}
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
                    {/* Aca inicia el PROMETEO Landing Card */}
                <div className="position-relative col-6 projectsHeight overflowx">
                    <a href="/projects/prometeo">
                        <div  className="position-absolute mt-3 ms-5 col-6 visible">
                            <h1
                             onMouseEnter={()=> setBlurProm(true)}>
                             Prometeo
                            </h1>
                            <div 
                             onMouseEnter={()=> setBlurProm(true)}
                             className={blurProm ? "visible desblurry position-absolute ms-3 mt-3" : "invisible blurry"}
                             >
                                <h3>Dec 2022</h3>
                                <h2>Prometeo Website - <br/> Responsive Website Design</h2> 
                                <h3>View Project ➡</h3>
                            </div>
                        </div>
                        <Image 
                         onMouseEnter={() => setBlurProm(true)}
                         onMouseLeave={() => setBlurProm(false)}
                         className={blurProm ? "rounded shadow blurry pointerWeak position-absolute overflowx" : "rounded shadow desblurry position-absolute overflowx"}
                         alt="Prometeo"
                         src={prometeo}
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