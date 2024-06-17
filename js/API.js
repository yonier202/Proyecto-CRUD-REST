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