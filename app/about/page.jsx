import Link from "next/link";

// import { useEffect } from "react"
import Carousel from "../../components/carousel"

// Linea 4 traera el hook useEffect

import Footer from "../../components/footer"

// Linea 8 importamos el componente headText




export default function AboutPage () {
    return <>
        <div className=" mt-5 container w-75 text-center">
            <h5>A Few Words About Me</h5>
            <h1>
                I’m Carlos Carranza, a multidisciplinary developer
                who focuses on telling my clients’ stories visually,
                through enjoyable and meaningful experiences. 
                I specialize in responsive websites and functional 
                user interfaces.
            </h1>
            <h3 className="mt-5">
                Over the past 5 years I have been working
                with big eCommerce companies around the world and have
                been offering services revolving around them, working
                solo and leading small eCommerce teams, maintaining eCommerce 
                websites and even developing SAAS. In my spare 
                time I enjoy exercising and playing videogames.
            </h3>
            <Carousel/>
            <div className="container d-flex row marginSection">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mt-5">
                    <h5>
                        Services I Offer
                    </h5>
                    <h3 className="blackFont heavyFont">
                        Front-end Development <em><b> / </b></em> Web Design <em><b> / </b></em> Back-end Development <em><b> / </b></em> Mobile First Websites <em><b> / </b></em> 
                    </h3>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mt-5">
                    <h5>
                        Technologies I Use
                    </h5>   
                    <h3 className="blackFont heavyFont">
                        Javascript <em><b> / </b></em> Python <em><b> / </b></em> NodeJS <em><b> / </b></em> NextJS <em> <b> / </b> </em> ReactJS <em> <b> / </b> </em> Flask-SQLAlchemy <em><b> / </b></em> GSAP <em><b> / </b></em> VSCode <em> <b> / </b> </em> GitHub <em> <b> / </b> </em> Git <em> <b> / </b> </em> Scrum <em> <b> / </b> </em> Agile
                    </h3>
                </div>
            </div>
            <hr className="w-85 marginSection justify-content-center"></hr>
            <div className="marginSection">
                <h5>
                    Experience 
                </h5>
                <h1 className="mt-3">
                    Over 5 Years Experience
                </h1>
                <h3>
                    I’ve been lucky enough to establish relationships with amazing
                    clients from all over the world, ranging from individual clients to mid-range businesses
                    For more details, head over to my <Link className="pointer" href="https://www.linkedin.com/in/carlos-i-carranza/">LinkedIn profile.</Link>
                </h3>
            </div>
            <Footer/>
        </div>
    </>
}