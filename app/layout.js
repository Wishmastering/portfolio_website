import Link from "next/link"  
// Linea 1: esto traera la funcionalidad en nextJS de poder navegar de una routa a otra
import "../styles/globals.css"
// Linea 3: esto importa los styles de CSS
import Navbar from "../components/navbar"
// Linea 5: esto importa el componente Navbar 


export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="w-100 h-100">
      <header>
        <Navbar/>
      </header>
       {children}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  )
}
