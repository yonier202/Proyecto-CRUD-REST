import {MostrarAlerta} from './funciones.js';
import {nuevoCliente} from './API.js';
(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();
        
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            empresa: empresa
        }

        if (validar(cliente)) {
            MostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        nuevoCliente(cliente);
    }

    function validar(cliente) {
        
        //revisa que cada llave del objeto tenga algun valor
       return (!Object.values(cliente).every(input => input !== ""));
    }

})();