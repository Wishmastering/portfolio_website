import Image from "next/image";
import gif from "../../../public/nyan.webp";
// import png from "../../../public/CC.png";
// import png1 from "../../../public/Where2day1.png";
// import png2 from "../../../public/Where2day2.png";
// import png3 from "../../../public/Where2day3.png";
// import feed from "../../../public/Where2dayFeed.png";
// import feed from "../../../public/where2dayHOME1.png";

export default function Where2day () {
    
    console.log("Hola")

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
             <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur corporis accusamus, quod nesciunt dolores, doloremque qui consectetur ipsam impedit consequatur quis cumque earum quos reiciendis architecto dicta velit quam voluptatem autem aliquam sed eos illum similique. At deserunt blanditiis quod consequuntur autem beatae! Amet consectetur ullam quaerat perspiciatis delectus, dignissimos, provident eaque impedit assumenda error quasi deleniti facilis doloribus. Maiores ex atque modi, numquam placeat consectetur! Facilis nam ipsa incidunt, aliquam obcaecati ut repudiandae ea quas architecto officiis perferendis modi quaerat, porro ratione suscipit? Maiores quisquam atque adipisci? Debitis quia voluptatum aut quaerat eius fugiat aliquam accusantium voluptate recusandae.</h3>
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