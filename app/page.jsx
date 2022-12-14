import HeadText from "./components/headText"
import Projects from "./components/projects"
import CallToAction from "./components/callToAction"
import Footer from "./components/footer"

export default function HomePage () {
    return <>
        <div className="row ms-5"> 
            <HeadText/>
            <Projects/>
            <CallToAction/>
            <div className="row justify-content-center">
                <hr className="w-100 marginSection"/>
            </div>
            <Footer/>
        </div>
    </>
}