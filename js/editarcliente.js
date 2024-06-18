import {obtenerCliente, actualizarCliente} from './API.js';
import {MostrarAlerta, validar} from './funciones.js';


(function () {

    //campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');
    


    document.addEventListener('DOMContentLoaded', async () => {
        // OBTENER EL ID DE LA URL
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id');
        
        //await espera que obtenga el id del cliente
        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);

        //submit al formulario 
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);

    });

    function mostrarCliente(cliente) {
        const {nombre, email, telefono, empresa, id} = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono:  telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }

        if (validar(cliente)) {
            MostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        //rescribir el objeto
        actualizarCliente(cliente);
    }
})();