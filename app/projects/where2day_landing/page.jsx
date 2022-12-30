import Image from "next/image";
import png0 from "../../../public/ovejanegra.png";
import png1 from "../../../public/Where2day1.png";
import png2 from "../../../public/Where2day2.png";
import png3 from "../../../public/Where2day3.png";


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
                 The landing page for "Where2day" is designed to
                  be visually appealing and engaging for users. 
                  To achieve this, the landing page utilizes a parallax
                   effect, which adds a sense of depth and movement to the
                    page as users scroll. This helps to create a dynamic 
                    and immersive experience for users as they explore the site.
                    <br/> 
                    <br/> 
                    On the landing page, users are introduced to the main 
                    features and goals of "Where2day" through a combination of text and imagery. The page prominently displays the site's logo and tagline, as well as a brief overview of the platform's purpose. This helps users to quickly understand what "Where2day" is all about and what they can expect to find on the site.
                    <br/> 
                    <br/> 
                    To further encourage users to explore the site, the landing page includes a call-to-action button that invites users to "Join Now" and start using the platform. This button is prominently displayed and clearly visible, making it easy for users to take the next step and start using the site.
                    <br/> 
                    <br/> 
                    In addition to the main content of the landing page, users can also find links to the site's social media profiles and other useful information such as the site's privacy policy and terms of use. This helps to create a comprehensive and user-friendly landing page that provides everything users need to know to get started with "Where2day".
                 </h3>
            </div>

            <div className="justify-content-center d-flex">
                <Image
                        className="rounded mt-5 mb-5"
                        alt="imagen"
                        src={png0}
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
                     src={png1}
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
                     src={png2}
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
                     src={png3}
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