import Image from "next/image";
import gif from "../../../public/nyan.webp";

export default function StarWars () {
    return <>
        <div className=" row w-100 ms-3">
           <div className="infodiv col-lg-6 col-sm-12">
                <h5 className="mt-4">Project</h5>
                <h2>Star Wars Responsive Info Site - Complete Website & App Funcionalities using SWAPI API's</h2>
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
           <div className="infodiv col-lg-6 col-sm-12">
             <h3>Im working on the finishing touches for my projects tabs 🛑☢🚫. Currently Under Cosntruction, Soon It Will Be All Finished. 👨‍💻🏃‍♂️👨‍🔧</h3>
           </div>

           <Image
                    
                     className="rounded"
                     alt="imagen"
                     src={gif}
                     width={500}
                     height={1000}
                     style={{
                        maxWidth: "100%",
                        height: "auto",
                     }}
            />

        </div>
    </>
}