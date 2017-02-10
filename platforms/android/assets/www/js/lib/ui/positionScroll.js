function contadorDinamico(){
var medidaCambio=0;
   var auxiliar=1;
   var aux=0;
    document.getElementById('divisor').innerHTML = auxiliar;
window.onscroll = function (){
    // Obtenemos la posicion del scroll en pantall
   window.scroll = document.documentElement.scrollTop || document.body.scrollTop;
    //scroll = (scroll/100)+1;
    if(screen.width<=511) {
        document.getElementById('divisor').innerHTML = auxiliar;
       if (scroll>=medidaCambio) {
            
            auxiliar=auxiliar+1;
            document.getElementById('divisor').innerHTML = auxiliar;
            medidaCambio=medidaCambio+170;
    };
        if (scroll<=medidaCambio) {
          
            auxiliar=auxiliar-1;
            document.getElementById('divisor').innerHTML = auxiliar;
            medidaCambio=medidaCambio-170;
    };
    };
    if(screen.width>511) {
       
        document.getElementById('divisor').innerHTML = auxiliar;
       if (scroll>=medidaCambio) {
           
            auxiliar=auxiliar+1;
            document.getElementById('divisor').innerHTML = auxiliar;
            medidaCambio=medidaCambio+130;
    };
        if (scroll<=medidaCambio) {
           
            auxiliar=auxiliar-1;
            document.getElementById('divisor').innerHTML = auxiliar;
            medidaCambio=medidaCambio-130;
    };
    };
    //document.getElementById('divisor').innerHTML = Math.floor(scroll);
}



}