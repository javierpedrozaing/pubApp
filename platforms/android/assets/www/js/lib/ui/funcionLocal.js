var latitud
var longitud
function getGeo(){
if (navigator && navigator.geolocation) {
navigator.geolocation.getCurrentPosition(geoOK, geoKO);
} else {
geoMaxmind();
}
}
function geoOK(position) {
	showLatLong(position.coords.latitude, position.coords.longitude);
}
function geoMaxmind() {
	showLatLong(geoip_latitude(), geoip_longitude());
}
function geoKO(err) {
	if (err.code == 1) {
		error('El usuario ha denegado el permiso para obtener informacion de ubicacion.');
	} else if (err.code == 2) {
		error('Tu ubicacion no se puede determinar.');
	} else if (err.code == 3) {
		error('TimeOut.')
	} else {
	error('No sabemos que pasó pero ocurrio un error.');
	}
}
function showLatLong(lat, longi) {
var geocoder = new google.maps.Geocoder();
var yourLocation = new google.maps.LatLng(lat, longi);
geocoder.geocode({ 'latLng': yourLocation },processGeocoder);
}
function processGeocoder(results, status){
if (status == google.maps.GeocoderStatus.OK) {
if (results[0]) {
window.localizacionPrueba= document.forms[0].dir.value=results[2].formatted_address;
document.getElementById("localizacion").innerHTML = localizacionPrueba;
var palabras = localizacionPrueba.split(",");
document.getElementById("dondeBuscas").value = palabras[0];
} else {
error('Google no retorno resultado alguno.');
}
} else {
error("No se pudo verificar su geolocalización, compruebe su conexion a internet ");
}
}
function error(msg) {
alert(msg);
}