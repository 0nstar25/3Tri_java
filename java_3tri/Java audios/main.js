//Alert
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listadeteclas=document.querySelectorAll('.tecla');
let contador=0
while(contador <listadeteclas.lenght) {
const efeito= listadeteclas[contador]. classlist[1];
const idAudio= "#som_"+efeito;
listadeteclas[contador].onclick=function(){
    tocaSom(idAudio);
}
contador=contador +1 ;
console.log(contador);
}
tecla.onkeydown=function(){
    tecla.add('ativa')
}
