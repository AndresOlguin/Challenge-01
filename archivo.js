var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var munieco = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var areaTexto = document.querySelector(".area");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;

areaTexto.addEventListener("focus", function() {
  areaTexto.style.background = "transparent";
});

areaTexto.addEventListener("blur", function() {
  areaTexto.style.background = "";
});

function encriptar() {
  ocultarAdelante();
  var area = recuperarTexto();
  resultado.textContent = encriptarTexto(area);
  areaTexto.value = "";
}

function desencriptar() {
  ocultarAdelante();
  var area = recuperarTexto();
  resultado.textContent = desencriptarTexto(area);
  areaTexto.value = "";
}

function recuperarTexto() {
  return areaTexto.value;
}

function ocultarAdelante() {
  munieco.classList.add("ocultar");
  h3.classList.add("ocultar");
  parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      i = i + 1;
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "e";
      i = i + 4;
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}

function copiarTexto() {
  navigator.clipboard.writeText(resultado.textContent)
    .then(function() {
      alert("Texto copiado al portapapeles");
    })
    .catch(function(error) {
      console.error("Error al copiar el texto:", error);
    });
}
