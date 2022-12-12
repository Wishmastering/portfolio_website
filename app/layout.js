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
      <body className="w-100 h-100 justify-content-center">
      
        <Navbar/>
      <div className="body2">{children}</div>
       
       
      {/* Abajo esta bootstrap */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
      {/* Abajo estan los scripts de ionic */}
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      {/* Abajo estan los CDN de GSAP */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
      </body>
    </html>
  )
}
