import Link from "next/link" 
// activa el next JS para poder navegar entre links

// import HomePage from "../app/page"

// const links = [{label: "Home", route: "/"}, {label: "About", route: "/about",}]

        {/* {links.map(({label, route}) => 
            <li className="btn btn-outline boton" key={label}>
                <Link className="text-light" href={route}>
                    {label}
                </Link>
            </li>
        )} */}

// Linea 6 a 15
// Esto permite dar un DESESTRUCTURING DE LOS OBJETOS
// DA EL KEY de "label" para distinguirlos de forma unica
// luego el href usara la ruta que tiene almacenada en el objeto


export default function Navbar () {
    return <>
        <div className="navigation d-flex fs-6 w-100 mt-3 justify-content-between">
            <div className="float-start navIcon d-flex align-items-center ms-5">
                <Link href="/" className="pointer text-dark pointerNav">
                    <img src="../images/CC_png.png"/>
                    Carlos Carranza
                </Link>
            </div>
            
            <div className="float-end dropdown me-3">
                <a className="btn d-flex navIcon align-items-center pointer" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="navIcon2 ">Menu</span> <ion-icon name="menu-outline"></ion-icon>
                </a>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Projects</a></li>
                    <li><Link className="dropdown-item" href="/about">About Me</Link></li>
                    <li><a className="dropdown-item" href="#">Contact</a></li>
                    <li><a className="dropdown-item" href="#">Github</a></li>
                    <li><a className="dropdown-item" href="#">Linkedin</a></li>
                </ul>
                
            </div>
        </div>
    </>
}