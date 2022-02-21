const todosProductos = async (state)  => {
    let res = await fetch('https://fakestoreapi.com/products'),
     json = await res.json();
     state(json)
}

const productoIndividual = async (id,state)  => {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`),
     json = await res.json();
     state(json)
}
export {
    todosProductos,
    productoIndividual
}