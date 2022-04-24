// Mensajes de Errores para la validacion de texto
let errors = [
  "No se puede encriptar un campo vacio.",
  "El texto no debe tener mayusculas.",
  "El texto no debe tener numeros.",
  "El texto no debe tener caracteres especiales.",
];

let encriptador = document.querySelector("#encriptador");
let desencriptador = document.querySelector("#desencriptador");
let copia = document.querySelector("#btn-copiar");

// Funcion para encriptar el mensaje.
function encriptar(palabra) {
  let texto = palabra.split("");

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    // console.log("evalueando", letra);

    if (letra == "a") texto[i] += "i";
    if (letra == "e") texto[i] += "nter";
    if (letra == "i") texto[i] += "mes";
    if (letra == "o") texto[i] += "ber";
    if (letra == "u") texto[i] += "fat";
  }
  return texto.join("");
}

// Funcion para desencriptar el mensaje.
function desencriptar(palabra) {
  let texto = palabra;
  let regex;

  if (texto.includes("ai")) {
    regex = /ai/g;
    texto = texto.replace(regex, "a");
  }
  if (texto.includes("enter")) {
    regex = /enter/g;
    texto = texto.replace(regex, "e");
  }
  if (texto.includes("imes")) {
    regex = /imes/g;
    texto = texto.replace(regex, "i");
  }

  if (texto.includes("ober")) {
    regex = /ober/g;
    texto = texto.replace(regex, "o");
  }

  if (texto.includes("ufat")) {
    regex = /ufat/g;
    texto = texto.replace(regex, "u");
  }

  return texto;
}

// Funcion para validar el texto ingresado
function validar(palabra) {
  // let msg;
  let msgError = document.querySelector("span");
  //paso palabra a un string sin espacios en blanco para ver si hace match con caracteres especiales.
  let a = palabra.replaceAll(" ", "");
  let isValido = true;

  if (palabra === "") {
    errors.message = errors[0];
    msgError.textContent = errors.message;
    isValido = false;
  }
  if (/[A-Z]/.test(palabra)) {
    errors.message = errors[1];
    msgError.textContent = errors.message;
    isValido = false;
  }
  if (/\d/.test(palabra)) {
    errors.message = errors[2];
    msgError.textContent = errors.message;
    isValido = false;
  }
  if (/\W/.test(a)) {
    errors.message = errors[3];
    msgError.textContent = errors.message;
    isValido = false;
  }

  return isValido;
}

// Funcion para boton copiar
function copiarTexto() {
  let textoCopiado = document.querySelector("#respuesta").value;

  let mensajePegado = document.querySelector("#mensaje");
  mensajePegado.value = textoCopiado;
}

// Añadiendo evento al boton encriptador
encriptador.addEventListener("click", () => {
  let palabra = document.querySelector("#mensaje").value;
  let palabraEncriptada;

  if (validar(palabra)) {
    palabraEncriptada = encriptar(palabra);
  } else {
    console.log("no puede encriptar");
  }

  document.querySelector("#mensaje").value = "";
  let salida = document.querySelector("#respuesta");
  salida.textContent = palabraEncriptada;
});

// Añadiendo evento al boton desencriptador
desencriptador.addEventListener("click", () => {
  let palabra = document.querySelector("#mensaje").value;
  let palabraDesencriptada;

  if (validar(palabra)) {
    palabraDesencriptada = desencriptar(palabra);
  } else {
    console.log("no puede encriptar");
  }

  document.querySelector("#mensaje").value = "";
  let salida = document.querySelector("#respuesta");
  salida.textContent = palabraDesencriptada;
});

//  Añadiendo evento al boton copiar
copia.addEventListener("click", copiarTexto);
