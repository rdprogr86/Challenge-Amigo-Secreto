// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
    return;
}
function condicionesIniciales() {
    asignarTextoElemento('p','Digite el nombre de sus amigos')
}
function agregarAmigo() {
  let inputNombre = document.getElementById('amigo');
  let nombreAmigo = inputNombre.value;
  let validaNombre = 0;

  if (!nombreAmigo) {
    alert('Debes ingresar el nombre de un amigo');
    return;
    } else {
       for (let i = 0; i <amigo.length; i++) 
        {
         if (nombreAmigo == amigo[i])
         {
          nombreAmigo = prompt(`Nombre de amigo repetido, digte nombre completo o alún cartacter que lo diferencíe de ${amigo['i']}`);
         }  
        }
    }
}
asignarTextoElemento();
agregarAmigo();