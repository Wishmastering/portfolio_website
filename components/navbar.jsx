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
            <div className="float-start navIcon d-flex align-items-center ms-5"><ion-icon name="logo-reddit"></ion-icon>Carlos Carranza</div>
            
            <div class="float-end dropdown me-3">
                <a class="btn d-flex navIcon align-items-center" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu <ion-icon name="menu-outline"></ion-icon>
                </a>

                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Projects</a></li>
                    <li><a class="dropdown-item" href="#">About Me</a></li>
                    <li><a class="dropdown-item" href="#">Contact</a></li>
                    <li><a class="dropdown-item" href="#">Github</a></li>
                    <li><a class="dropdown-item" href="#">Linkedin</a></li>
                </ul>
                
            </div>
        </div>
    </>
}