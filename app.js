let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto){
    //se colocan dentro del  parentesis los elementos que seran variables dentro de la funcion
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return   
}

condicionesIniciales();

function verificarIntento(){
    let numeroUsuario =parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertaste, el numero es: ${numeroUsuario} ${intentos <= 3 ? '¡a perro y en solo' : '¡Bravo, mas lento no puedes ser, solo te llevo intentarlo'} ${intentos} ${intentos === 1 ? 'vez' : 'veces'}! `);
        asignarTextoElemento('h1','¡Congratulation!');
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#inicio').setAttribute('disabled',true);
        limpiarCaja()
    } else {
        // El usuario no acerto.
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','¡Nelson el numero secreto es menor');
            asignarTextoElemento('h1','¡Eres una verguenza!');

        } else {
        asignarTextoElemento('p','¡Nop el numero secreto es mayor');
        asignarTextoElemento('h1','¡Buuuu, saquenl@!');
        }
        intentos ++
        limpiarCaja();
    return;
    }
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; 
    // para obtener el objeto por ID se agrega un # al iniciopq eue la funcion sepa que se trata de busueda por id.
   // valorCaja.value = '';// al coolocar solo ls comilllas se da a entender que es vacio.
}

function condicionesIniciales(){
asignarTextoElemento('h1','Adivina el numero secreto de Zuki');
asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}.`);
numeroSecreto = generarNumeroSecreto();
intentos = 1
document.getElementById('inicio').removeAttribute('disabled');
}

function reiniciarJuego(){

    //limpiar la caja
    limpiarCaja();
    // mensaje de inicio
    condicionesIniciales();
   
    //dejar el boton de nuev juego deshabilitado
    document.getElementById('inicio').removeAttribute('disabled');
    document.querySelector('#reiniciar').setAttribute('disabled',true);// para asignar un valor necesitamos dar un nombre y un valor al odjeto
}
//al llamar la funcion se colocan los elementos a los que se aplicarn os cambio.
function generarNumeroSecreto() {
    //math.floor rendondea hacia abajo, math.random da un numero aleatorio y se debe multiplicar por el numero entero deceado del rango
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    // si ya se sortearon todos los numeros
    if (listaNumerosSorteados == numeroMaximo){
        asignarTextoElemento('p','Ya es todo wey, reinicia la pagina.')
    }else{ //Si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
         } else{
                listaNumerosSorteados.push(numeroGenerado)
                return numeroGenerado;
        }   

    }

}
