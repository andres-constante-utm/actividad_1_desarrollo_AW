// Calculadora Web - Actividad 3
// Todo el código está en este archivo, dividido en secciones.

/* ============================================================
   SECCIÓN 3: Variables y funciones para agregar números y el punto
   Integrante: Solange Dayanara Iñiguez Páraga
   ============================================================ */

// Aquí se guarda la pantalla del HTML para poder cambiarla
const pantalla = document.getElementById("pantalla");

// Variables que usa la calculadora (guardan todo como texto)
let numeroActual = "";     // el número que se está escribiendo
let numeroAnterior = "";   // el primer número, antes de elegir la operación
let operacion = "";        // la operación elegida: + - × ÷
let reiniciar = false;     // sirve para empezar de nuevo después de un resultado o error

// Esta función muestra en la pantalla lo que hay en las variables
function actualizarPantalla() {
    let texto = "";

    if (numeroAnterior !== "") {
        texto = numeroAnterior + " " + operacion + " ";
    }
    texto = texto + numeroActual;

    // Si no hay nada escrito mostramos un 0
    if (texto === "") {
        texto = "0";
    }
    pantalla.value = texto;
}

// Esta función agrega el número que se presionó a la pantalla
function agregarNumero(numero) {
    // Si había un resultado o un Error, empezamos desde cero
    if (reiniciar === true) {
        limpiar();
    }

    // Si solo hay un 0, lo cambiamos por el número para no tener 05, 07, etc.
    if (numeroActual === "0") {
        numeroActual = numero;
    } else {
        numeroActual = numeroActual + numero;
    }
    actualizarPantalla();
}

// Esta función agrega el punto decimal, pero solo uno por número
function agregarPunto() {
    if (reiniciar === true) {
        limpiar();
    }

    // Validación: no dejar poner dos puntos en el mismo número
    if (numeroActual.includes(".")) {
        console.log("Ya hay un punto en este número");
        return;
    }

    // Si todavía no hay número, ponemos 0. para que quede 0.5
    if (numeroActual === "" || numeroActual === "-") {
        numeroActual = numeroActual + "0.";
    } else {
        numeroActual = numeroActual + ".";
    }
    actualizarPantalla();
}


/* ============================================================
   SECCIÓN 4: Selección de la operación
   Integrante: Francisco Xavier Reyes Muñoz
   ============================================================ */

// Esta función guarda la operación que eligió el usuario (+, -, ×, ÷)
function elegirOperacion(op) {
    // Si en pantalla hay un Error, no se puede operar hasta limpiar o escribir un número
    if (numeroActual === "Error") {
        return;
    }

    // Si hay un resultado en pantalla, se puede seguir operando con él
    reiniciar = false;

    // Si el usuario todavía no escribió ningún número, no hacemos nada
    if (numeroActual === "" && numeroAnterior === "") {
        console.log("Primero hay que escribir un número");
        return;
    }

    // Si ya hay una operación y no se escribió el segundo número,
    // solo cambiamos la operación (por ejemplo de + a -)
    if (numeroActual === "" && numeroAnterior !== "") {
        operacion = op;
        actualizarPantalla();
        return;
    }

    // Si ya había una operación pendiente (ejemplo 2 + 3 y luego +),
    // primero se calcula lo anterior
    if (numeroAnterior !== "" && operacion !== "") {
        calcular();
        if (numeroActual === "Error") {
            return;
        }
        reiniciar = false;
    }

    // Pasamos el número actual a "anterior" y esperamos el segundo número
    numeroAnterior = numeroActual;
    numeroActual = "";
    operacion = op;
    actualizarPantalla();
}


/* ============================================================
   SECCIÓN 5: Función calcular (las 4 operaciones y la división para cero)
   Integrante: Alba Alexandra Silva Pila
   ============================================================ */

// Esta función hace la operación con los dos números y muestra el resultado
function calcular() {
    // Si falta algún número o la operación, no se calcula
    if (numeroAnterior === "" || numeroActual === "" || operacion === "") {
        console.log("Faltan datos para calcular");
        return;
    }

    // Convertimos los textos a números
    const numero1 = parseFloat(numeroAnterior);
    const numero2 = parseFloat(numeroActual);

    // Si el segundo número quedó como "-" o algo raro, no se calcula
    if (isNaN(numero1) || isNaN(numero2)) {
        return;
    }

    let resultado = 0;

    if (operacion === "+") {
        resultado = numero1 + numero2;
    } else if (operacion === "-") {
        resultado = numero1 - numero2;
    } else if (operacion === "×") {
        resultado = numero1 * numero2;
    } else if (operacion === "÷") {
        // Validación: no se puede dividir para cero
        if (numero2 === 0) {
            pantalla.value = "Error";
            numeroAnterior = "";
            numeroActual = "Error";
            operacion = "";
            reiniciar = true;
            return;
        }
        resultado = numero1 / numero2;
    }

    // Redondeamos para evitar cosas como 0.30000000000000004
    resultado = Math.round(resultado * 10000000000) / 10000000000;
    console.log("Resultado: " + resultado);

    // El resultado queda como número actual para poder seguir operando
    numeroActual = String(resultado);
    numeroAnterior = "";
    operacion = "";
    reiniciar = true;
    actualizarPantalla();
}


/* ============================================================
   SECCIÓN 6: Limpiar, borrar el último dígito y soporte de teclado
   Integrante: Ronnie Guillermo Tirira Morales
   ============================================================ */

// Esta función deja la calculadora como al inicio (botón C)
function limpiar() {
    numeroActual = "";
    numeroAnterior = "";
    operacion = "";
    reiniciar = false;
    actualizarPantalla();
}

// Esta función borra el último dígito que se escribió (botón ⌫)
function borrarUltimo() {
    // Si hay un resultado o un Error, el botón borrar limpia todo
    if (reiniciar === true) {
        limpiar();
        return;
    }

    if (numeroActual !== "") {
        // slice(0, -1) quita el último carácter del texto
        numeroActual = numeroActual.slice(0, -1);
    } else if (numeroAnterior !== "") {
        // Si no hay segundo número, se borra la operación y volvemos al primero
        numeroActual = numeroAnterior;
        numeroAnterior = "";
        operacion = "";
    }
    actualizarPantalla();
}

// Soporte de teclado: cada tecla llama a la función que ya hicimos
document.addEventListener("keydown", function (evento) {
    const tecla = evento.key;
    console.log("Tecla: " + tecla);

    if (tecla >= "0" && tecla <= "9") {
        agregarNumero(tecla);
    } else if (tecla === "." || tecla === ",") {
        agregarPunto();
    } else if (tecla === "+") {
        elegirOperacion("+");
    } else if (tecla === "-") {
        elegirOperacion("-");
    } else if (tecla === "*") {
        elegirOperacion("×");
    } else if (tecla === "/") {
        elegirOperacion("÷");
    } else if (tecla === "Enter" || tecla === "=") {
        // preventDefault evita que Enter vuelva a apretar un botón
        evento.preventDefault();
        calcular();
    } else if (tecla === "Backspace") {
        borrarUltimo();
    } else if (tecla === "Escape" || tecla === "c" || tecla === "C") {
        limpiar();
    }
});
