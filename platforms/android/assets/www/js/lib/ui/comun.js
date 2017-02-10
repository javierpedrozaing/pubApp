(function(){
	setTimeout(function(){
		if (document.querySelectorAll('.enlace-externo')){
			var enlaceexterno = document.querySelectorAll('.enlace-externo');
			for (var i = 0; i < enlaceexterno.length; i++){
				enlaceexterno[i].target = '_blank';
			}	
		}
	}, 1000);
})();

var leerCookie = function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for( var i=0 ; i < ca.length ; i++ ) {
        var c = ca[i];
        while ( c.charAt(0) == ' '  )
            c = c.substring( 1 , c.length );
        if ( c.indexOf( nameEQ )  ==  0  )
            return c.substring( nameEQ.length , c.length );
    }
    return null; 
}

var crearCookie = function(){
	var value = "cerrar";
	document.cookie = "amstudio"+"="+value+"; path=/";	
}

setTimeout(function() {
	var c, mensaje
		cook = document.cookie;
	if (document.getElementById('cerrar-cookie')){
		c = document.getElementById('cerrar-cookie');
	}
	if (document.getElementById('mensaje-cookies')){
		mensaje = document.getElementById('mensaje-cookies');
	}
	var x = leerCookie('amstudio');
	if(x) mensaje.className = "cerrado";
	else mensaje.clasName = 'abierto';	
		
	c.onclick = (function(){
		crearCookie();
		mensaje.className = "cerrado";
		return false;
	});
},1000);