import Image from "next/image";
import gif from "../../../public/nyan.webp";
import pro from "../../../public/PrometeoLandin.png";
import pro2 from "../../../public/PrometeoLanding2.png";
import pro3 from "../../../public/PrometeoLanding3.png";
import pro4 from "../../../public/PrometeoLanding4.png";

export default function StarWars () {
    return <>
        <div className=" row w-100 ms-3">
           <div className="infodiv col-lg-6 col-sm-12">
                <h5 className="mt-4">Project</h5>
                <h2>Prometeo Landing Page - Wordpress Home Page Mockup Design </h2>
                <h5 className="mt-4">My Role</h5>
                <h4>Front End Development
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
           <div className="infodiv col-lg-6 col-sm-12 mt-3">
             <h3 className="projecth3">Responsible for identifying, evaluating, and employing candidates for 
                management and other professional positions. Generates qualified 
                candidate pools through cost-effective Internet, alternative sourcing, 
                etc. Identifying names of passive candidates and anticipated time frame 
                of the search Demonstrate ability to attract, influence, and convert 
                hard-to-find passive talent through key attraction and employment 
                opportunities. Meet established hiring targets, manage client relationships,
                 and interact with hiring managers to discuss specific requirements. 
                 Continuous improvement via measurement tools, scorecards, and recruitment 
                 analytics<br/><br/>
                
                Developed a mockup of their site with improvements in design and with better 
                AJAX practices via plugins to get a lighter and faster to load website, 
                provided their landing within the timeframe stablished and received feedback
                accordingly to accomodate to any needs the site would require</h3>

           </div>

           <Image
                    
                     className="rounded mt-5 mb-5"
                     alt="Prometeo Landing"
                     src={pro}
                     width={1000}
                     height={1000}
                     style={{
                        maxWidth: "100%",
                        height: "auto",
                     }}
            />

            <Image    
                    className="rounded mt-5 mb-5"
                    alt="Prometeo Landing"
                    src={pro2}
                    width={1000}
                    height={1000}
                    style={{
                       maxWidth: "100%",
                       height: "auto",
                    }}
            />
            <Image    
                    className="rounded mt-5 mb-5"
                    alt="Prometeo Landing"
                    src={pro3}
                    width={1000}
                    height={1000}
                    style={{
                       maxWidth: "100%",
                       height: "auto",
                    }}
            />
            <Image    
                    className="rounded mt-5 mb-5"
                    alt="Prometeo Landing"
                    src={pro4}
                    width={1000}
                    height={1000}
                    style={{
                       maxWidth: "100%",
                       height: "auto",
                    }}
            />

        </div>
    </>
}