//PRIMER DIA:
//Acciones para que cuando pasemos el ratón por un botón cambia el texto y cuando
//se salga el ratón vuelva al mismo texto o a otro diferente
document.getElementById('button1').addEventListener('click',(event)=>{window.alert('clicado boton 1')});
undefined
document.getElementById('button1').addEventListener('mouseenter',(event)=>{document.write(<p>'entrando en boton 1'</p>)});

document.getElementById('button1').addEventListener('mouseenter',(event)=>{document.write('<p>entrando en boton 1</p>')});
var elemento=document.getElementById('button1');
document.getElementById('button1').addEventListener('mouseenter',(event)=>{elemento.value='entrando en boton 1'});
document.getElementById('button1').addEventListener('mouseleave',(event)=>{elemento.value='Button 1'}); //o mouseout

//-------------------------------------------------------------------->

//Cierra la ventana cuando se deja de pulsar una tecla:
addEventListener('keyup', (event) => {});
onkeyup = () => { window.close()};
//LO MISMO PERO MÁS CORTO
addEventListener('keyup', (event) => {window.close()});
//OTRA MANERA con DOCUMENT:
document.addEventListener('keyup', (event) => {window.close()});

//-------------------------------------------------------------------->

//Nos dice por consola el elemento que estamos clicando:
document.addEventListener('click', (event) => { 
	console.log(event.target);}); 

//TE MUESTRA EL ELEMENTO SOBRE EL QUE TE SITUAS CUANDO SALES DE EL
document.addEventListener('mouseover', (event) => { 
	console.log("Target: " + event.target);
console.log("Relatedtarget: " + event.relatedTarget);}); //FALLO:SOLO ENTIENDE EL DOCUMENTO ENTERO HTML A MI POR LO MENOS
  
//-------------------------------------------------------------------->

//EVITA QUE PULSES ENLACES O CHECKBOX EN EL DOCUMENTO:

function stopDefAction(evt) {evt.preventDefault()}
//los ids hay que cambiarlos a los elementos deseados, enlaces, etc
document.getElementById(id="cb1").addEventListener('click', stopDefAction);
document.getElementById(id="pag").addEventListener('click', stopDefAction);

//-------------------------------------------------------------------->

//Cuando cliquemos una dos o tres veces mostremos una alerta de cuantas veces hemos pulsado sobre un botón

