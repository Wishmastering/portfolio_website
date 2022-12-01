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
    <div>
       <div><h4>Empresa</h4></div>
       <div><h4>Rol</h4></div>
       <div><h4>2010-Present</h4></div>
    </div>
    </>
}