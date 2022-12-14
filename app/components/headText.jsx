import Link from "next/link" 
import Image from "next/image";
import png from "../../public/LANDING.png"

export default function HeadText () {
    return <>
    <div id="fondo" className="col-5 col-lg-12 text-center d-none d-sm-block  ">
            Developer
    </div>
    {/* Este es el padre de DOS DIVs  */}
    <div className="row w-100">
        {/* Aca vendra el texto */}
        <div id="sobreFondo" className="col-10 col-sm-6">
            <div className="d-flex">
                <h5 className="">Carlos Carranza</h5>
            </div>
            <h1 className="mt-4 heavyFont">Developer and web designer</h1>
            <p className="text-secondary mt-4 fontWeight"> Over the past 5 years I have been working
                    with big eCommerce companies around the world and have
                    been offering services around them, working
                    solo and leading small eCommerce teams, maintaining eCommerce 
                    websites and developing SAAS.</p>
            <div className="d-flex">
                
                    <Link href="/projects/where2day" className="" ><b className="heavyFont pointer pointerh3">View Projects</b></Link>
                    <p className="ms-3 me-3"> or </p>
                    <Link href="/about" className=""><b className="heavyFont pointer pointerh3">Read About Me</b></Link>         
            </div>
        </div>
        {/* Aca viene la imagen de Carlos Carranza */}
        <div id="portrait" className="col-lg-5 col-sm-5 d-none d-sm-block ">
            <Image  id="portrait"
                    alt="Portrait"
                    src={png}
                    width={500}
                    height={1000}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
            />
        </div>
    </div>
    </>
}