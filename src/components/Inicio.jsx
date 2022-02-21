import React,{useEffect,useState} from "react";
import { todosProductos } from "../funciones/funciones";
import { Link } from "react-router-dom";
export default function Inicio(){
    const [productos,setProductos] = useState(null);

    useEffect(() => {
        todosProductos(setProductos)
    },[])
    
    return(
        <>
            <h1>Listado de productos</h1>
            <div className="contenedor">
            {productos !== null ? (
                productos.map(producto => {
                   return(
                       <article className="producto-inicio">
                            <img src={producto.image} alt={`Imagen del producto ${producto.id}`}/>
                            <h2>{producto.title}</h2>
                            <Link to={`producto/${producto.id}`}>Ver detalle</Link>
                     </article>
                    )
                })
             ) : ("Cargando...")}
            </div>
           
        </>
        
    )
}