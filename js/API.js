const url="http://localhost:4000/clientes";


export const nuevoCliente =async cliente => {
    try {
        await fetch(url,{
            method:"POST",
            body:JSON.stringify(cliente),
            headers:{
                "Content-Type":"application/json"
            }
        });
        //si lo agrega, se envia al index
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
}

export const obtenerClientes = async () => {
    try {
        const respuesta = await fetch(url);
        const clientes = await respuesta.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//eliminar cliente

export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`,{
            method:"DELETE"
        });
    } catch (error) {
        console.log(error);
    }
}

//obtener cliente por el ID

export const obtenerCliente = async idCliente => {
    try {
        const respuesta = await fetch(`${url}/${idCliente}`);
        const cliente = await respuesta.json();
        return(cliente);
    } catch (error) {
        console.log(error);
    }
}

//actualizar cliente

export const actualizarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`,{
            method:"PUT",
            body:JSON.stringify(cliente),
            headers:{
                "Content-Type":"application/json"
            }
        });
        //si lo actualiza, se envia al index
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
}