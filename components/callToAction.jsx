import Link from "next/link";

// import ContactPage from "../app/contact/page"



export default function CallToAction(){
    return<>
        <div className="container w-75 marginSection text-center justify-content-center ">
            <div className="row">
                <h5> Need a Developer?</h5>
                <div className="col-lg-12 col-12 d-flex justify-content-center">
            <Link href="/contact" className="">
                    <h1 className="text-dark align-items-center d-flex pointerh1"> Let's work together <ion-icon name="arrow-forward-outline"></ion-icon></h1>
            </Link>
                </div>
            </div>
        </div>
    </>
}