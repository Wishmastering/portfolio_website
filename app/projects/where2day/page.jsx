import Image from "next/image";
import w2dfeed from "../../../public/w2dfeed.png";
import w2dfilter from "../../../public/w2dfilter.png";
import w2d0 from "../../../public/w2dpost0.png";
import w2d1 from "../../../public/w2dpost1.png";
import w2d3 from "../../../public/w2dpost3.png";

export default function Where2day () {

    return <>
        <div className=" row w-100 ms-3">
           <div className="infodiv col-lg-6 col-sm-12">
                <h5 className="mt-4">Project</h5>
                <h2>Landing Page & App Funcionalities - Where2day</h2>
                <h5 className="mt-4">My Role</h5>
                <h4>Scrum Master
                    <br/>
                    UX / UI 
                    <br/>
                    Website Design
                    <br/>
                    Funcionalities Design
                </h4>
                <h5 className="mt-4">Year</h5>
                <h4>2022</h4>
           </div>
           <div className="infodiv col-lg-6 col-sm-12">
                <h3 className="projecth3">
                    Where2day" is a web-based platform that allows users to 
                    share and discover new experiences in their local area. 
                    The site is built using React for the front-end, CSS for
                    styling, GSAP for animations, Python for the backend, and 
                    Flask for the web framework.
                    <br/><br/>
                    The main goal of "Where2day" is to inspire users to try 
                    new things and make the most of their days. Whether it's trying
                    a new restaurant, visiting a local attraction, or trying a new
                    activity, "Where2day" provides a place for users to share
                    their experiences and find new ideas for things to do.
                    <br/><br/>
                    To use the site, users can create an account and start posting
                     about their experiences. Each post includes a description of 
                     the experience, photos, and a location tag. Other users can 
                     then browse through these posts to find new ideas for things 
                     to do in their area.
                    <br/><br/>
                    In addition to browsing posts, users can also search for specific
                    experiences or locations using the site's search function. This 
                    makes it easy to find exactly what you're looking for, whether it's
                    a specific type of activity or a particular location.
                    <br/><br/>
                    Overall, "Where2day" is a great resource for anyone looking to try
                    new things and make the most of their days. With its user-generated
                    content and easy-to-use search function, it's a great way to 
                    discover new experiences and make the most of your time.
                </h3>
           </div>

            <div className="justify-content-center d-flex">

                <Image
                        
                        className="rounded mt-5 mb-5"
                        alt="imagen"
                        src={w2dfeed}
                        width={1000}
                        height={1000}
                        style={{
                            maxWidth: "75%",
                            height: "auto",
                        }}
                />
            </div>

            <div className="justify-content-center d-flex">
                <Image
                    
                     className="rounded mt-5 mb-5 justify-content-center d-flex"
                     alt="imagen"
                     src={w2d0}
                     width={1000}
                     height={1000}
                     style={{
                        maxWidth: "75%",
                        height: "auto",
                     }}
                 />
            </div>
            <div className="justify-content-center d-flex">
                
                <Image
                    
                     className="rounded mt-5 mb-5 justify-content-center d-flex"
                     alt="imagen"
                     src={w2d1}
                     width={1000}
                     height={1000}
                     style={{
                        maxWidth: "75%",
                        height: "auto",
                     }}
                />
            </div>
            <div className="justify-content-center d-flex">    
                <Image
                    
                     className="rounded mt-5 mb-5 justify-content-center d-flex"
                     alt="imagen"
                     src={w2d3}
                     width={1000}
                     height={1000}
                     style={{
                        maxWidth: "75%",
                        height: "auto",
                     }}
                />
            </div>
            <div className="justify-content-center d-flex">                
                <Image
                    
                     className="rounded mt-5 mb-5 justify-content-center d-flex"
                     alt="imagen"
                     src={w2dfilter}
                     width={1000}
                     height={1000}
                     style={{
                        maxWidth: "75%",
                        height: "auto",
                     }}
                />
            </div>
        </div>
    </>
}