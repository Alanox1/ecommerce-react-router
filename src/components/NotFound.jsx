import { Link } from "react-router-dom"
export default function NotFound(){
    return(
        <>
           <h2>Página no encontrada</h2>
           <p>Intente buscando otra dirección</p>
           <Link to={"/"} replace>Ir al inicio</Link>
        </>
     
    )
}