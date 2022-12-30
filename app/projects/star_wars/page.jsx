import Image from "next/image";
import sw from "../../../public/swhome.png";
import sw1 from "../../../public/swchar.png";
import sw2 from "../../../public/swplanet.png";
import sw3 from "../../../public/swstar.png";
import sw4 from "../../../public/swvehicle.png";
import sw5 from "../../../public/swmenu.png";

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
             <h3 className="projecth3">
             The website I developed is a Star Wars information site built
              using the NextJS framework and the React library. I used 
              languages such as JavaScript, HTML, and CSS to create the site.
             <br/><br/>
             One of the key features of the site is the use of the Axios
             library to fetch data from the Swapi.dev API. This API provides
             a wealth of information about the Star Wars universe, 
             including information about characters, planets, vehicles,
             and starships.
             <br/><br/>
             Another important feature of the site is the dynamic menu located
             in the top right corner of the page. This menu allows users to
             navigate to different parts of the site and access additional
             information.
             <br/><br/>
             On the homepage of the site, users will find a variety of "cards"
             that contain information about characters, planets, vehicles, and
             starships. Users can click the "learn more" button on any of these
             cards to access more detailed information about the specific topic.
             Overall, the website provides a rich and engaging experience for
             fans of the Star Wars franchise.
             <br/> <br/>
             Technical Bullet Points:
             <br/> <br/>
             In addition to using NextJS and React, the website also utilizes various NPM packages to enhance its functionality. These packages include things like styled-components for styling and react-router for client-side routing.
             <br/> <br/>
To optimize the website's performance and ensure a smooth user experience, I implemented server-side rendering using NextJS's built-in capabilities. This allows the site to load faster and provide a more seamless experience for users.
            <br/> <br/>
To handle data management, I utilized the React Context API to create a centralized store for the website's data. This allows for easy management and manipulation of data across different components of the site.
<br/> <br/>
To make the site more visually appealing, I implemented various design techniques such as responsive design, smooth transitions, and well-structured layout. This helps to create a visually appealing and easy-to-use interface for users.
<br/> <br/>
Overall, the website is a well-crafted and technically advanced project that utilizes a variety of modern web development tools and techniques to deliver a rich and engaging experience for users.
        
             </h3>
           </div>

           <Image
                    className="rounded mt-5 mb-5"
                     alt="imagen"
                     src={sw}
                     width={1000}
                     height={1000}
                     style={{
                        maxWidth: "100%",
                        height: "auto",
                     }}
            />
           <Image
                    className="rounded mt-5 mb-5"
                     alt="imagen"
                     src={sw1}
                     width={1000}
                     height={1000}
                     style={{
                        maxWidth: "100%",
                        height: "auto",
                     }}
            />
           <Image
                    className="rounded mt-5 mb-5"
                     alt="imagen"
                     src={sw2}
                     width={1000}
                     height={1000}
                     style={{
                        maxWidth: "100%",
                        height: "auto",
                     }}
            />
           <Image
                    className="rounded mt-5 mb-5"
                     alt="imagen"
                     src={sw3}
                     width={1000}
                     height={1000}
                     style={{
                        maxWidth: "100%",
                        height: "auto",
                     }}
            />
           <Image
                    className="rounded mt-5 mb-5"
                     alt="imagen"
                     src={sw4}
                     width={1000}
                     height={1000}
                     style={{
                        maxWidth: "100%",
                        height: "auto",
                     }}
            />
           <Image
                    className="rounded mt-5 mb-5"
                     alt="imagen"
                     src={sw5}
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