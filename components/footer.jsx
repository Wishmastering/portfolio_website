import Link from "next/link";

export default function Footer(){
    return<>
        <div className="d-flex w-100 marginSection row justify-content-center">
                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 ms-5 me-5 text-center justify-content-center">       
                        <h1 className="heavyFont fontWeight"> Contact Information —</h1>
                        <p className="">Feel free to reach out to me any time. 
                        I prefer to talk over email, especially 
                        since we may be a few time zones away.</p>
                        <p>e:<span className="pointer">  Charsdb@gmail.com</span></p>
                        <p>p:<span className="pointer">  +506 62502302</span></p>  
                </div>

                <div className="col-xl-2 col-md-3 col-sm-12 ms-3 me-3">
                    <h1 className="heavyFont fontWeight"> Latest Projects —</h1>
                    <p className="pointer"> Where2day</p>
                    <p className="pointer"> Starwars Blog</p>
                    <p className="pointer"> Play with me!</p>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-12 ms-3 me-3">
                    <h1 className="heavyFont fontWeight"> Current Availability — </h1>
                    <p>I usually work on several projects but I’ll be happy to discuss new opportunities. 
                        Let’s get in touch!</p>
                </div>
                <div className="col-xl-1 col-md-2 col-sm-12 ms-3 me-3">
                    <h1 className="heavyFont fontWeight"> Follow Me On —</h1>
                    <p className="pointer">Linkedin</p>
                    <p className="pointer">Github</p>
                </div>
        </div>
    </>
}