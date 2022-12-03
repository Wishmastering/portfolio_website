import Link from "next/link" 

export default function Experience ({business, title, time}) {
    return <>
    <div className="row">
       <div className="col-5 col-lg-12"><h4 className="headerDark">{business}</h4></div>
       <div className="col-5 col-lg-12"><h4 className="headerLight">{title}</h4></div>
       <div className="col-5 col-lg-12"><h4 className="headerLight">{time}</h4></div>
    </div>
    </>
}