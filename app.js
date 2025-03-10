let amigo = [];

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}

function agregarAmigo() {
  asignarTextoElemento('h2','Digite el nombre de sus amigos');
  let inputAmigo = document.getElementById('amigo');
  let nombreAmigo = inputAmigo.value;
   //console.log(amigo);

   if (nombreAmigo == "") {
    asignarTextoElemento('h2','Debes ingresar un nombre');
    return;
   }
   amigo.push(nombreAmigo);
   //console.log(amigo);
   inputAmigo.value = "";
   inputAmigo.focus();
   mostrarAmigos();
}

function mostrarAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
   listaAmigos.innerHTML = '';

   for(let i = 0; i < amigo.length; i++) {
    let item = document.createElement('li');
     item.textContent = amigo[i];
     listaAmigos.appendChild(item);
   }
}
function sortearAmigo() {
  if(amigo.length === 0) {
    //alert('No hay amigos para el sorteo');
    asignarTextoElemento('h2','No hay amigos para el sorteo');
    return;
  } else {
    if(amigo.length < 2) {
      asignarTextoElemento('h2','Debes ingresar mas de un nombre');
      return;
    }
  }
  let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
  let resultado = document.getElementById('resultado');
   resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;    
}
