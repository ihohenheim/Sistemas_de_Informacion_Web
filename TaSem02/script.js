document.addEventListener("DOMContentLoaded", function() {
  // Tomamos el botón y el contenido principal
  const miBoton = document.getElementById("miBoton");
  const mainContent = document.querySelector("main");

  // Añadimos un event listener para que cambie el color de texto al hacer clic
  miBoton.addEventListener("click", function() {
    // Si el texto es gris, lo cambiamos a rojo oscuro,
    // si está en rojo oscuro, volvemos a gris.
    if (mainContent.style.color === "var(--color-dark-red)") {
      mainContent.style.color = "var(--color-gray)";
    } else {
      mainContent.style.color = "var(--color-dark-red)";
    }
  });
});

// ----------------------------------------------------
// EJERCICIO 01
// ----------------------------------------------------
/**
 * Ejercicio 01:
 * Desarrolla una página web que permita a los usuarios convertir un monto
 * en de alguna moneda a su equivalente en una segunda moneda usando un valor de
 * cambio ingresado por el usuario.
 */
function ejercicio01() {
   const monto = parseFloat(prompt("Ingresa el monto de la divisa:"));
   const tasa = parseFloat(prompt("Ingresa la tasa de cambio:"));
 
   // Validamos la entrada
   if (isNaN(monto) || isNaN(tasa)|| monto < 0 || tasa <0) {
     alert("Por favor, ingresa valores numéricos válidos!");
     return;
   }
 
   // Calculamos el monto convertido
   const convertido = monto * tasa;

  // Aseguramos dos decimales
  // (por ejemplo 1234567.45 se volverá "1234567.45")
  const resultadoConDosDecimales = convertido.toFixed(2);

   // Insertamos espacios cada 3 dígitos a la izquierda del punto decimal.
   const resultadoConEspacios = resultadoConDosDecimales.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

   // Mostramos el resultado con dos decimales
   alert(`El monto convertido es: ${resultadoConEspacios}`);
 }

 /**
 * Ejercicio 02:
 * Conversión de temperatura de Celsius a Fahrenheit.
 * Fórmula: F = (C × 9/5) + 32
 */
function ejercicio02() {
   const celsius = parseFloat(prompt("Ingresa la temperatura en Celsius:"));
 
   // Validar que la entrada sea numérica
   if (isNaN(celsius)) {
     alert("Por favor, ingresa un valor numérico válido para Celsius.");
     return;
   }
 
   // Realizar la conversión
   const fahrenheit = (celsius * 9/5) + 32;
 
   // Mostrar el resultado con 2 decimales
   alert(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)} °F`);
 }
 
 /**
 * EJERCICIO 03:
 * Conversión de Fahrenheit a Celsius “en vivo” dentro de la página.
 * Fórmula: C = (F - 32) * 5/9
 */
function convertirFahrenheitACelsius() {
   // Obtenemos el valor del input
   const fahrenheitInput = document.getElementById("fahrenheitInput");
   const valorF = parseFloat(fahrenheitInput.value);
 
   // Obtenemos el span donde mostraremos el resultado
   const resultadoCelsius = document.getElementById("resultadoCelsius");
 
   // Validamos el valor ingresado
   if (isNaN(valorF)) {
     resultadoCelsius.textContent = "Ingresa un valor válido para °F";
     return;
   }
 
   // Calculamos Celsius
   const celsius = (valorF - 32) * 5/9;
 
   // Mostramos el resultado con 2 decimales
   resultadoCelsius.textContent = `= ${celsius.toFixed(2)} °C`;
 }

/**
 * EJERCICIO 04:
 * Ingreso de datos de usuario: Nombre, Apellido y Edad.
 * Debe mostrar un mensaje con los datos concatenados
 * y un saludo amigable.
 */
function ejercicio04() {
   // Solicitamos datos por prompt
   const nombre = prompt("Ingresa tu nombre:");
   const apellido = prompt("Ingresa tu apellido:");
   const edad = parseInt(prompt("Ingresa tu edad:"));
 
   // Validación de datos
   // 1) Verificamos que el nombre y apellido no estén vacíos
   // 2) Verificamos que la edad sea numérica y no negativa
   if (!nombre || !apellido || isNaN(edad) || edad < 0) {
     alert("Por favor, ingresa valores válidos (nombre, apellido y edad).");
     return;
   }
 
   // Mensaje concatenado
   const mensaje = `¡Hola, ${nombre} ${apellido}! Es un gusto saber que desbloqueaste el level ${edad}.`;
 
   // Mostramos el resultado
   alert(mensaje);
 }
 
 /**
 * Ejercicio 05:
 * El usuario ingresa su edad en un <input>, y el script calcula
 * su edad dentro de 5, 10 y 100 años, mostrándolas en la página.
 */
function calcularEdades() {
   // Obtenemos el valor del input
   const edadInput = document.getElementById("edadInput");
   const edad = parseInt(edadInput.value);
 
   // Obtenemos los elementos donde mostraremos el resultado
   const edad5 = document.getElementById("edad5");
   const edad10 = document.getElementById("edad10");
   const edad100 = document.getElementById("edad100");
 
   // Validación de edad
   if (isNaN(edad) || edad < 0) {
     edad5.textContent = "Edad inválida";
     edad10.textContent = "Edad inválida";
     edad100.textContent = "Edad inválida";
     return;
   }
 
   // Calculamos las edades futuras
   edad5.textContent = `${edad + 5} años`;
   edad10.textContent = `${edad + 10} años`;
   edad100.textContent = `${edad + 100} años`;
 }

 /**
 * Ejercicio 06:
 * Al ingresar un monto en guaraníes, se calcula y muestra
 * el monto + IVA (10%) de manera centrada en la página.
 */
function calcularMontoConIva() {
   const montoGsInput = document.getElementById("montoGsInput");
   const resultadoConIva = document.getElementById("resultadoConIva");
 
   // Convertimos a número
   const valor = parseFloat(montoGsInput.value);
 
   // Validación del monto
   if (isNaN(valor) || valor < 0) {
     resultadoConIva.textContent = "Monto inválido";
     return;
   }
 
   // Cálculo del IVA (10%)
   const iva = valor * 0.10;
   const total = valor + iva;
 
   // Formateamos a 2 decimales y agregamos espacios cada 3 dígitos
   const totalFormateado = total
     .toFixed(2)
     .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
 
   // Mostramos el resultado
   resultadoConIva.textContent = `Monto + IVA (10%): GS ${totalFormateado}`;
 }

 /**
 * Ejercicio 07:
 * El usuario debera de ingresar un monto y el msistema debera de:
 * Calcular y mostrar el valor del IVA de ese monto y el presio sin IVA
 */
 function calcularIva() {
   // Obtenemos el campo de entrada y el contenedor de resultado
   const inputMonto = document.getElementById("montoGs");
   const divResultado = document.getElementById("resultadoIva");
 
   // Convertimos el valor ingresado a número
   const precio = parseFloat(inputMonto.value);
 
   // Validación: el valor debe ser un número y no negativo
   if (isNaN(precio) || precio < 0) {
     divResultado.textContent = "Monto inválido";
     return;
   }
 
   // Cálculo:
   // Si el precio incluye IVA (10%), se tiene:
   // precio = base + (10% de la base) = 1.1 * base  => base = precio / 1.1
   // IVA = precio - base = precio - (precio / 1.1) = precio / 11
   const iva = precio / 11;
   const precioSinIva = precio - iva;
 
   // Formateo a dos decimales y separación de miles con espacio
   const ivaFormateado = iva.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
   const precioSinIvaFormateado = precioSinIva.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
 
   // Mostramos el resultado en el contenedor
   divResultado.textContent = `El valor del IVA (10%) es: GS ${ivaFormateado}, el precio sin IVA es: GS ${precioSinIvaFormateado}`;
 }
 
/**
 * Ejercicio 08:
 * Calcula y muestra el valor de la propina aplicando el porcentaje
 * ingresado al valor total del consumo en guaraníes (GS).
 */
function calcularPropina() {
   // Obtener los valores de los inputs
   const inputConsumo = document.getElementById("consumoTotal");
   const inputPorcentaje = document.getElementById("porcentajePropina");
   const divResultado = document.getElementById("resultadoPropina");
 
   // Convertir los valores a números
   const consumo = parseFloat(inputConsumo.value);
   const porcentaje = parseFloat(inputPorcentaje.value);
 
   // Validar que ambos valores sean numéricos y no negativos
   if (isNaN(consumo) || consumo < 0 || isNaN(porcentaje) || porcentaje < 0) {
     divResultado.textContent = "Por favor, ingresa valores válidos.";
     return;
   }
 
   // Calcular la propina: Propina = (porcentaje / 100) x consumo
   const propina = consumo * (porcentaje / 100);
 
   // Formatear el resultado a 2 decimales y con separación de miles
   const propinaFormateada = propina.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
 
   // Mostrar el resultado
   divResultado.textContent = `El valor de la propina es: GS ${propinaFormateada}`;
 }

 /**
 * Ejercicio 09:
 * Verifica si el año ingresado es bisiesto y muestra el mensaje correspondiente
 * en un recuadro con borde rojo, fondo blanco y letras azul.
 */
function verificarBisiesto() {
   // Obtenemos el valor del input y el contenedor del mensaje
   const inputAnio = document.getElementById("inputAnio");
   const mensajeDiv = document.getElementById("mensajeBisiesto");
 
   // Convertimos el valor a número entero
   const anio = parseInt(inputAnio.value);
 
   // Validamos que el año sea un valor numérico y positivo
   if (isNaN(anio) || anio <= 0) {
     mensajeDiv.textContent = "Por favor, ingresa un valor numérico y positivo.";
     return;
   }
 
   // Regla para determinar si un año es bisiesto:
   // Un año es bisiesto si es divisible por 4, pero no por 100, a menos que sea divisible por 400.
   if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
     mensajeDiv.textContent = `El año ${anio} es bisiesto.`;
   } else {
     mensajeDiv.textContent = `El año ${anio} no es bisiesto.`;
   }
 }

/**
 * Ejercicio 10:
 * Solicita dos fechas y calcula la diferencia entre ellas (en días).
 * Se valida que ambas fechas estén ingresadas, y que la fecha final no sea anterior a la fecha de inicio.
 * El resultado se muestra en una ventana emergente.
 */
function calcularDiferenciaFechas() {
   // Obtenemos los valores de los inputs
   const fechaInicioStr = document.getElementById("fechaInicio").value;
   const fechaFinStr = document.getElementById("fechaFin").value;
   
   // Validar que ambos campos tengan valores
   if (!fechaInicioStr || !fechaFinStr) {
     alert("Por favor, ingresa ambas fechas.");
     return;
   }
   
   // Convertir las cadenas a objetos Date
   const fechaInicio = new Date(fechaInicioStr);
   const fechaFin = new Date(fechaFinStr);
   
   // Validar que la fecha final no sea menor que la fecha de inicio
   if (fechaFin < fechaInicio) {
     alert("La fecha final debe ser mayor o igual que la fecha de inicio.");
     return;
   }
   
   // Calcular la diferencia en milisegundos
   const diferenciaMs = fechaFin - fechaInicio;
   // Convertir la diferencia a días
   const diferenciaDias = diferenciaMs / (1000 * 60 * 60 * 24);
   
   // Redondear la diferencia a un entero
   const dias = Math.round(diferenciaDias);
   
   // Mostrar el resultado en una ventana emergente
   alert(`La diferencia entre las fechas es de ${dias} día(s).`);
 }
 
 