alert("Profe: las actividades de la primera parte del trabajo estan para ver en el repositorio. El último ejercicio, lo sigo practicando porque hasta ahora no hubo caso. Saludos!");

//Actividad 1 - Numero Primo

let numero = 6;
function esPrimo(numero) { 
    { if (numero <=1)
        {return "no es primo";}
    };
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return " No es primo"; 
        }
        return " Es primo";
    }
    
};

console.log(esPrimo(numero));


//Actividad 2 - Matrices

let matrizA = [[1,2], [3,4]];
let matrizB = [[5,6], [7,8]];

function sumadeMatrices (matrizA,matrizB) { 
  const filas = matrizA.length;
  const columnas = matrizA[0].length;
  let resultado = [];
  
  for (let i = 0; i < filas; i++) {
    let fila = [];
  
    for (let j = 0; j < columnas; j++) {
      fila.push(matrizA[i][j] + matrizB[i][j]); 
    }
    resultado.push(fila); 
  }

 for (let i = 0; i < filas; i++)
  {
    console.log(resultado[i]);
}
}
sumadeMatrices(matrizA, matrizB);


//Actividad 3 - Suma de rangos

let rango1 = [1, 2, 3, 4];
let rango2 = [5, 6, 7, 8];
let rango3 = [9, 10, 11, 12];

function sumadeRangos() {
  let data1 = 0;
  let data2 = 0;
  let data3 = 0;

  for (let i = 0; i < rango1.length; i++) {
    data1 += rango1[i];
  }
  
  for (let j = 0; j < rango2.length; j++) {
    data2 += rango2[j];
  }
  
  for (let k = 0; k < rango3.length; k++) {
    data3 += rango3[k];
  }

  if (data1 === data2) {
    console.log(`El resultado es ${data1}`);
  }
  if (data1 === data3) {
    console.log(`El resultado es ${data2}`);
  }
  if (data2 === data3) {
    console.log(`El resultado es ${data3}`);
  }
}

sumadeRangos();

//Actividad 4 - Suma Vocales.

let texto = "Estoy aprendiendo JavaScript"; 
const vocales = ["a", "e", "i", "o", "u"];

function contadorVocales(texto) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase(); 
    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

let totalVocales = contadorVocales(texto);
console.log("La cantidad de vocales que tiene la palabra es: " + totalVocales);


// Actividad 5 - Matriz con elementos únicos.

let matriz1 = ["azucar","leche", "huevos", "manteca"]


console.log (matriz1.splice (1,2));


// Actividad 6 - Invertir texto sin reverse.

let texto1 = "Esto es un texto invertido";

function textoInvertido() {
  let palabras = texto1.split(' '); 
  for (let i = 0; i < palabras.length; i++) {
    let palabraInvertida = '';
    for (let j = palabras[i].length - 1; j >= 0; j--) {
      palabraInvertida += palabras[i][j]; 
    }
    console.log(palabraInvertida);
  }
}

textoInvertido(); 



// INTERACCION CON DOM



//Actividad 2 - Aumentar disminuir tamaño


const aumentarBtn = document.getElementById('aumentarBtn');
const disminuirBtn = document.getElementById('disminuirBtn');

function cambiarTamaño(elementId, accion) {
    const texto = document.getElementById(elementId);
    const estilo = window.getComputedStyle(texto).fontSize;

    let tamanio = parseInt(estilo);

    if (accion === 'aumentar') {
        tamanio += 5;
    } else if (accion === 'disminuir') {
        tamanio -= 5;
    }

    texto.style.fontSize = `${tamanio}px`;
}

aumentarBtn.addEventListener('click', function() {
    cambiarTamaño('texto', 'aumentar');
});

disminuirBtn.addEventListener('click', function() {
    cambiarTamaño('texto', 'disminuir');
});






//Actividad 1 - Creacion de Carrusel de imagenes.

let carrusel = document.getElementById ("carrusel"); // llamado a img
let imagenes = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"]; // llamo a las imagenes del archivo
let index = 0; //contador de imagenes desde el indice 0
let botonAnterior = document.getElementById ("anterior"); //llamo el id del elemento html que es boton anterior
let botonSiguiente = document.getElementById ("siguiente"); //llamo el id del elemento html que es boton siguiente

function mostrarImagen() {
    carrusel.src = `images/${imagenes[index]}`;
}

function anterior () {
  if (index > 0) {
      index--;
    } else {
      index = 3;
    }
    mostrarImagen();
  };

function siguiente () {

    if (index < 3) {
      index++;
    } else {
      index = 0;
    };
    mostrarImagen();
}


botonAnterior.addEventListener ("click", anterior);
botonSiguiente.addEventListener("click", siguiente);




// Actividad 3 - Tarjetas.

let fotos = ["images/img5.jpg", "images/img6.jpg", "images/img7.jpg"];
let imagen = document.getElementById('imagen');
let imgOriginal = window.getComputedStyle(imagen);
let originalWidth;
let originalHeight;

function cambiarTamano() {
  imagen.src = fotos[0]; 
}

imagen.addEventListener('mouseover', function() {
  imagen.style.width = (parseInt(imgOriginal.width) * 1.5) + 'px';
  imagen.style.height = (parseInt(imgOriginal.height) * 1.5) + 'px';
});

imagen.addEventListener('mouseout', function() {
  imagen.style.width = originalWidth;
  imagen.style.height = originalHeight;
});

window.onload = function() {
  originalWidth = imgOriginal.width;
  originalHeight = imgOriginal.height;
  cambiarTamano();
};














  