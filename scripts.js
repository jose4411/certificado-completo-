document.getElementById('bpaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const superficie = document.getElementById('superficie').value.trim();
    const rendimiento = document.getElementById('rendimiento').value.trim();

    const perteneceCooperativa = document.querySelector('input[name="cooperativa"]:checked') ? document.querySelector('input[name="cooperativa"]:checked').value : 'No';
    const nombreCooperativa = document.getElementById('nombreCooperativa').value.trim();
    const certificaciones = document.querySelectorAll('input[name="certificaciones"]:checked');
    const tieneTrabajadores = document.querySelector('input[name="trabajadores"]:checked') ? document.querySelector('input[name="trabajadores"]:checked').value : 'No';
    const ruc = document.getElementById('ruc').value.trim();
    const licencia = document.querySelector('input[name="licencia"]:checked') ? document.querySelector('input[name="licencia"]:checked').value : 'No';
    const propiedad = document.querySelector('input[name="propiedad"]:checked') ? document.querySelector('input[name="propiedad"]:checked').value : 'No';

    // Inicializar el mensaje de evaluación
    let resultado = "No aprobado";
    let mensaje = "El agricultor no cumple con los requisitos para obtener el certificado debido a las siguientes razones:<br>";

    // Validación de datos
    if (nombre === "" || dni === "" || fechaNacimiento === "" || telefono === "" || correo === "" || superficie === "" || rendimiento === "") {
        mensaje += "- Algunos campos obligatorios están vacíos.<br>";
    }

    if (parseInt(superficie) < 1 || parseInt(rendimiento) < 1) {
        mensaje += "- La superficie cultivada o el rendimiento anual no cumplen los requisitos mínimos.<br>";
    }

    if (perteneceCooperativa === 'No') {
        mensaje += "- El agricultor no pertenece a una cooperativa o asociación, lo cual es un requisito para el certificado.<br>";
    }

    if (certificaciones.length === 0) {
        mensaje += "- El agricultor no tiene ninguna certificación válida (Orgánico, Comercio Justo, Rainforest Alliance).<br>";
    }

    if (licencia === 'No') {
        mensaje += "- La licencia de comercialización no está vigente.<br>";
    }

    if (propiedad === 'No') {
        mensaje += "- El tipo de propiedad de la tierra no está claro o no es adecuada.<br>";
    }

    // Si no hay errores, aprobar
    if (mensaje === "El agricultor no cumple con los requisitos para obtener el certificado debido a las siguientes razones:<br>") {
        resultado = "Aprobado";
        mensaje = "El agricultor cumple con los requisitos para obtener el certificado de Buenas Prácticas Agrícolas.";
    }

    // Mostrar el resultado
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('mensajeResultado').innerHTML = mensaje;
});
