import { productoIndividual } from "../funciones/funciones";
import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
export default function ProductoDetallado(){
    const {id} = useParams();

    const [producto,setProducto] = useState(null)
    useEffect(() => {
        productoIndividual(id,setProducto)
    },[]);
    
    return(
       <>
        {producto !== null ? (
            <article key={producto.id} className="contenedor-producto-detallado">
                <h2>{producto.title}</h2>
                <img src={producto.image} alt={""}/>
                <h3>{"category : "}{producto.category}</h3>
                <p>{producto.description}</p>
                <span className="price">{"$"}{producto.price}</span>
            </article>
        ) : "Cargando..."}
       </>
    )
}