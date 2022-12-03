import Link from "next/link" 

export default function HeadText () {
    return <>
    <nav className="col-7 col-sm-6 ms-4  marginSection">
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
            
                <Link href="/contact" className="" ><b className="heavyFont pointer pointerh3">View Projects</b></Link>
                  <p className="ms-3 me-3"> or </p>
                 <Link href="/about" className=""><b className="heavyFont pointer pointerh3">Read About Me</b></Link>         
        </div>
    </nav>
    </>
}