import Link from "next/link";

export default function Footer(){
    return<>
        <div className="d-flex w-100 mt-4 row">
                <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 me-3 text-center justify-content-center">       
                        <h1 className="heavyFont fontWeight"> Contact Information —</h1>
                        <p className="">Feel free to reach out to me any time. 
                        I prefer to talk over email, especially 
                        since we may be a few time zones away.</p>
                        <p>e:<span className="pointer">  Charsdb@gmail.com</span></p>
                        <p>p:<span className="pointer">  +506 62502302</span></p>  
                </div>
                
                <div className="col-xl-3 col-md-3 col-sm-12 ms-2">
                    <h1 className="heavyFont fontWeight"> Latest Projects —</h1>
                    <p className="pointer"><Link href="/projects/where2day">Where2day </Link> </p>
                    <p className="pointer"><Link href="/projects/star_wars"> Starwars Blog </Link> </p>
                    <p className="pointer"><Link href="/"> Play with me!</Link> </p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-12 me-2">
                    <h1 className="heavyFont fontWeight"> Current Availability — </h1>
                    <p>I usually work on several projects but I’ll be happy to discuss new opportunities. 
                        Let’s get in touch!</p>
                </div>
                <div className="col-xl-2 col-md-2 col-sm-12 ms-3 me-3 mb-1">
                    <h1 className="heavyFont fontWeight"> Follow Me —</h1>
                    <Link href="https://www.linkedin.com/in/carlos-i-carranza/" target="_blank" className="pointer pointerFoot"><p className="pointer pointerFoot">Linkedin</p></Link>
                    <Link href="https://github.com/Wishmastering" target="_blank"><p className="pointer pointerFoot">Github</p></Link>
                    
                </div>
        </div>
    </>
}