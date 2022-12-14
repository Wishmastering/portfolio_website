import Link from "next/link" 
import Image from "next/image";
import logo from "../../public/CC.png"
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
    {/* Aca tendremos dos componentes  */}
        <div className="navigation d-flex fs-6 w-100 mt-3 justify-content-between">

            {/* El primero es MI NOMBRE Y UN LOGO */}
            <div className="float-start navIcon d-flex align-items-center ms-5">
                <Link href="/" className="pointer text-dark pointerNav">
                    <Image 
                     className="pointer iconFilter"
                     alt="CC Logo"
                     src={logo}
                     width={50}
                     height={50}
                     style={{
                        maxWidth: "100%",
                        height: "auto",
                     }}
                    />
                    Carlos Carranza
                </Link>
            </div>

            {/* EL SEGUNDO ES EL MENU Y EL ICONO MENU CLICKEABLE */}
            <div className="float-start">
               
                <a className="btn d-flex navIcon align-items-center pointer" href="#"  role="button" data-bs-toggle="dropdown">
                    <span className="navIcon2 ">Menu</span> <ion-icon name="menu-outline"></ion-icon>
                </a>

                <ul className="dropdown-menu ">
                    <li><Link className="dropdown-item" href="/projects/where2day">Projects</Link></li>
                    <li><Link className="dropdown-item" href="/about">About Me</Link></li>
                    <li><Link className="dropdown-item" href="/contact">Contact</Link></li>
                    <li> <Link className="dropdown-item" href="https://www.linkedin.com/in/carlos-i-carranza/" target="_blank" > Linkedin</Link></li>
                    <li> <Link className="dropdown-item" href="https://github.com/Wishmastering" target="_blank" > Github</Link></li>
                    
                </ul>
                
            </div>
        </div>
    </>
}