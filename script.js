let puntaje = 0;
let preguntasRespondidas = {};
let totalPreguntas = 8;
let respuestasTotales = 0;

function mostrarInfo(id){
let elemento = document.getElementById(id);
if(elemento.style.display === "block"){
elemento.style.display = "none";
}else{
elemento.style.display = "block";
}
}

function responderPregunta(idPregunta, esCorrecta){

if(preguntasRespondidas[idPregunta]) {
return;
}

let pregunta = document.getElementById(idPregunta);

if(esCorrecta){
pregunta.classList.add("correcta");
puntaje++;
} else {
pregunta.classList.add("incorrecta");
}

preguntasRespondidas[idPregunta] = true;
respuestasTotales++;

actualizarProgreso();
}

function actualizarProgreso(){
let porcentaje = (respuestasTotales / totalPreguntas) * 100;
document.getElementById("barraProgreso").style.width = porcentaje + "%";
document.getElementById("textoProgreso").innerHTML =
"Progreso: " + respuestasTotales + " / " + totalPreguntas;
}

function mostrarResultado(){

if(respuestasTotales < totalPreguntas){
document.getElementById("resultado").innerHTML =
"Responde todas las preguntas antes de ver el resultado.";
return;
}

let mensaje = "";

if(puntaje >= 7){
mensaje = "¡Excelente! Dominas completamente estos personajes.";
}else if(puntaje >= 5){
mensaje = "Muy buen trabajo, tienes buen conocimiento.";
}else if(puntaje >= 3){
mensaje = "Vas bien, pero puedes mejorar.";
}else{
mensaje = "Te recomiendo explorar nuevamente el recorrido virtual.";
}

document.getElementById("resultado").innerHTML =
"Tu puntaje es " + puntaje + " / " + totalPreguntas + ". " + mensaje;
}