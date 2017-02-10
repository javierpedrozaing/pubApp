getGeo();
var validaBusq= true;
window.latitudEmp;
window.longitudEmp;
window.enlacee;
window.pagina=1;
window.ctrlCerca=0;
window.totalResultados = 1;
window.videosData;
/////////////////////////////Vista resultados  ////////////////////////////////
window.VarControl=0;
window.controlEvento=0;
window.controlEventoMapa=0;
ResultadosView = Backbone.View.extend( {
    events:{
        //"touchstart #regresar1" : "search",
        "keyup .dondeBuscas": "keyAction",
        "keyup .queBuscas": "keyAction",
        //"keyup #queBuscass": "keyActionAux",
        "touchstart #option2" : "Mapa",
        "touchstart #option1" : "render",
        "click #option1" : "render",
        //"click #regresar1" : "search",
        "click #option2" : "Mapa"
    },
        initialize: function() {
        this.$el;
    },  
        Mapa: function() {
        controlEventoMapa = controlEventoMapa +1;
        if(controlEventoMapa % 2 != 0) {
                this.mostrarMapa();
        }
        },  
        keyAction : function(e){
            controlEvento= controlEvento +1;
            if (e.keyCode == 13){
                   if($('.dondeBuscas').val()==""){
                        alert("Debe seleccionar una ciudad");
                        $("#enviar").attr("href", "");
                        $( ".dondeBuscas" ).focus();
                        $('.dondeBuscas').css("border", "rgb(211, 153, 26) solid");
                        window.pruebaLocalizacion= $("#localizacion" ).html();
                        if(pruebaLocalizacion!="Buscando, tu ubicación..."){
                        var palabras = pruebaLocalizacion.split(",");
                        $(".dondeBuscas" ).val(palabras[0]);
                         }
                    } else{
                      console.log("haga busqueda");
                      $("#enviar").attr("href", "#results");
             console.log("entro a key");
             if(controlEvento % 2 != 0) {
                window.history.pushState("data", "Titulo", "index.html#resultsEnter");
                this.search();
                }
            window.pagina=2;
             }
        };   
        },
        searchCercaDeMi : function(){
            if(pagina!=3){
            $('#queBuscass').css("border", "rgb(211, 153, 26) solid");
            $("#footerllegar").remove();
            $("#footerllegarVerMas").remove();
            $("#footerllegar").css("display", "none");
            $("#footerllegarVerMas").css("display", "none");
            var queBuscas= $('#queBuscasCerca').val();
             
            //var dondeBuscas= this.$el.find('#dondeBuscas').val();
            var ubicacion= $('#localizacion').text();
            var palabras= ubicacion.split(",");
            //$("#dondeBuscass").val(dondeBuscas); // se asigna este valor para llevarlo a la busqueda auxiliar
            //enlacee.href = "#cercademi";
            var resultados = document.getElementById('enviar');
            $("#mostrarMapa").remove();
            $("#mapaEmpresa").remove();
            /*alert(queBuscas+" "+dondeBuscas);*/
            this.request(queBuscas ,palabras[0]); 
            }else{
                this.render();
            }
            
        },
        search : function() {
        if(pagina != 3){
            
        $( "#queBuscas" ).blur();
        $('#queBuscass').css("border", "rgb(211, 153, 26) solid");
        $("#footerllegar").remove();
        $("#footerllegarVerMas").remove();
        $("#footerllegar").css("display", "none");
        $("#footerllegarVerMas").css("display", "none");
        var queBuscas= this.$el.find('#queBuscas').val();
        var dondeBuscas= this.$el.find('#dondeBuscas').val();
        var ubicacion= this.$el.find('#localizacion').text();
        var palabras= ubicacion.split(",");
        $("#dondeBuscass").val(dondeBuscas); // se asigna este valor para llevarlo a la busqueda auxiliar
            //enlacee.href = "#cercademi";
        var resultados = document.getElementById('enviar');
        // Condicional que permite cambiar el valor del href del elemento con id  
        //"enviar" con el fin de permitir realizar varias busquedas en el buscador principal
        if(VarControl==0){
            console.log('hola soy control 0'); 
            resultados.href = "#resultadosUno";
            VarControl=1;
        }else if(VarControl==1){
            resultados.href = "#resultadosDos";
            VarControl=2;
        }else if (VarControl==2){
            resultados.href = "#resultadosTres";
            VarControl=3;
        }else if (VarControl==3){
            resultados.href = "#resultadosCuatro";
            VarControl=4;
        }else if(VarControl==4){
            resultados.href = "#resultadosCinco";
            VarControl=1;
        }
        $("#mapaEmpresa").remove();
        if (dondeBuscas=="" || dondeBuscas==" ") {
            if (palabras[0]=="Buscando") {
                /*alert("no se pudo tomar la ubicacion se hara la consulta solo por el primer parametro de busqueda");
                alert(queBuscas+" esto es lugar "+dondeBuscas);*/
                self= this;
                this.request(queBuscas ,dondeBuscas);
            } else {
                /*alert("esta es tu ubicacion y se hara la busqueda por tal parametro"+palabras[0]);*/
                self= this;
                this.request(queBuscas ,palabras[0]);
            }
        } else {
            /*alert(queBuscas+" "+dondeBuscas);*/
            self= this;
           
            this.request(queBuscas ,dondeBuscas);
        }
        }else{

            this.render();
            /*if (totalResultados>=5) {
                $('#contentContador').show();
            } else {
                $('#contentContador').hide();
            }
            $('.contentr1').show();
            $('#contenedor1').hide();
            $('#itemscenter').show();
            $('#contenedor2').show().css('margin-bottom','65px');
            $('#contentContador').show();
            $('#hom').css('background','#fff');
            $('.ui-content').css('margin-top','0');
            $('#w').hide();
            $('#regresar1').show();
            $('#regresar1').css('float', 'left');
            $('#mapavista').css('display','none');
            $('#noresultados').hide();
            $('#mapavistacerca').hide();
            $('#nombreEmpresa').remove();
            $('#slidergalery').remove();
            $('#mision').remove();
            $('#acordeonp1').remove();
            $('.titulover1').remove();
            $('#acordeonp2').remove();
            $('#acordeonp3').remove();
            $('#acordeonp4').remove();
            $('#acordeonp5').remove();
            $('#acordeonp6').remove();
            $('#logoMision').remove();
            $('#service1').remove();
            $('#info2ver').remove();
            $('#desc1').remove();
            $('#info1ver').remove();
            $('.titulosver').remove();
            $('#mapaver').remove();
            $('#streetVista').remove();
            $('.iconosver').remove();
            $('#iconover1').remove();
            $('#iconover2').remove();
            $('#iconover3').remove();
            $('#iconover4').remove();
            $('#iconover5').remove();
            $('#iconover6').remove();
            $('#iconover7').remove();
            $('#iconover8').remove();
            $('#logoMision').remove();
            $('#descripver').remove();
            $('#panel-1').remove();
            $('#panel-0').remove();
            $('.accordion').remove();*/
            //----------------------------------------------------
        }
        },
    searchPopup : function() {
        if(pagina != 3){
            console.log("entro al search popup");
        //$(".contentr1").remove();
        totalResultados =0;
        $("#busquedaAux").css('margin-top','-150%');
        $("#hamburger-overlayy").css('display','none');
        //window.copor= $("#dondeBuscas").val();
        var queBuscass= $('#queBuscass').val();
        var dondeBuscass= $('#dondeBuscass').val();
        self= this;
        var ubicacion= this.$el.find('#localizacion').text();
        var palabras= ubicacion.split(",");
        if (dondeBuscass=="" || dondeBuscass==" ") {
            if (palabras[0]=="Buscando") {
                self= this;
                this.request(queBuscass ,dondeBuscass);
            } else {
                self= this;
                this.request(queBuscass ,palabras[0]);
            }
        } else {
            self= this;
            this.request(queBuscass,dondeBuscass);
        }    
        }else{
            this.render();
        }
        
}, 
    request : function(queBuscas , dondeBuscas) {
        //alert("esta buscando" + queBuscas);
         $("div#home").css("background", "#fff");
        console.log("entro al request" + queBuscas + dondeBuscas);
        // Loading 
        $('#cargando').waitMe( {
            //none, rotateplane, stretch, orbit, roundBounce, win8, 
            //win8_linear, ios, facebook, rotation, timer, pulse, 
            //progressBar, bouncePulse or img
            effect: 'timer',//place text under the effect (string).
            text: 'Cargando Resultados',//background for container (string).
            bg: 'rgba(255,255,255)',//color for background animation and text (string).
            color: '#000',//change width for elem animation (string).
            sizeW: '',//change height for elem animation (string).
            sizeH: ''
        });
        ctrlCerca=2;
        //enlacee = document.getElementById('link');
        //enlacee.href = "#cercademi";
        //busqueda
        window.myLatlng;
        window.mapOptions;
        window.map;
        window.marker;
        window.vecId=0;
        
        window.text;
        window.auxaumenta = 0;
        $("#dividendo").html(totalResultados);
        window.infor= $.ajax( {
            url:"http://www.publitell.com/json/search.json?busqEmpresa="+queBuscas + "&busqLugar=" + dondeBuscas,
                                type: "get",
                                crossDomain: true,
                                dataType: 'jsonp',
                                cache:true,
                                xhrFields: {
                                withCredentials: true
            },
                                success: function(data,status, error) {
                                    console.log("ENTRO AL JSON");
                window.cont = vecId=vecId;
                window.items = data;
   
                videosData = jQuery.map(items, function(value, index ){
                    console.log("Entro al jquery map");
                    window.id;
                    // validamos que la empresa tenga logo
                    if (items[index][4]=="" || items[index][5]=="Básico" || items[index][5]=="Económico" || items[index][5]=="Cliente No Pago"){
                        milogo = "http://publitell.com/system/logo_solo.png";
                    }else{                        
                        milogo = "http://publitell.com/system/logos/"+items[index][1]+"/"+items[index][4];
                    }
                    //validamos  si el horario esta abierto o cerrado
                    if (items[index][13] == true){
                        horario = "../www/img/icon-horario1.jpg";
                    }else{
                        horario = "../www/img/icon-horario2.jpg";
                    }
                    var celular ="";
                    var telefono ="";
                    var pagina = "";
                    var correo = "";
                    var latitudEmpresa = "";
                    var longitudEmpresa = "";
                    var imagen = "";
                    if (items[index][4]=="" || items[index][5]=="Básico" || items[index][5]=="Económico" || items[index][5]=="Cliente No Pago" ){
                        imagen= 'logo_solo.png';
                    }else{
                        imagen=items[index][4];
                    }

                    if (items[index][11]=="" && items[index][12]==""){
                        if(items[index][8]=="Villanueva"){
                            latitudEmpresa = 4.555;
                            longitudEmpresa = -72.882;
                        }else if(items[index][8]=="San  Juan de Arama"){
                            latitudEmpresa = 3.15646;
                            longitudEmpresa = -73.6098;
                        }else if(items[index][8]=="Orocué"){
                            latitudEmpresa = 4.92194;
                            longitudEmpresa = -71.597;
                        }else if(items[index][8]=="Trinidad"){
                            latitudEmpresa = 3.2682;
                            longitudEmpresa = -74.1582;
                        }else if(items[index][8]=="Duitama"){
                            latitudEmpresa = 5.817;
                            longitudEmpresa = -73.033;
                        }
                        else if(items[index][8]=="Paz de Ariporo"){
                            latitudEmpresa = 5.846;
                            longitudEmpresa = -71.11;
                        }else if(items[index][8]=="Castilla La Nueva"){
                            latitudEmpresa = 3.833;
                            longitudEmpresa =-73.683;
                        }else if(items[index][8]=="Aguazul"){
                            latitudEmpresa = 5.16833;
                            longitudEmpresa = -72.544;
                        }else if(items[index][8]=="Pore"){
                            latitudEmpresa = 5.72722;
                            longitudEmpresa = -71.994;
                        }else if(items[index][8]=="Guayabal de Síquima"){
                            latitudEmpresa = 4.8773;
                            longitudEmpresa = -74.4677;
                        }else if(items[index][8]=="Soacha"){
                            latitudEmpresa = 4.583;
                            longitudEmpresa = -74.217;
                        }else if(items[index][8]=="San José del Guaviare"){
                            latitudEmpresa = 2.60517;
                            longitudEmpresa = -72.5747;
                        }else if(items[index][8]=="Cabuyaro"){
                            latitudEmpresa = 4.2817;
                            longitudEmpresa = -72.794;
                        }else if(items[index][8]=="Támara"){
                            latitudEmpresa = 5.8322;
                            longitudEmpresa = -72.162;
                        }else if(items[index][8]=="Saravena"){
                            latitudEmpresa = 6.952;
                            longitudEmpresa = -71.875;
                        }else if(items[index][8]=="Lejanías"){
                            latitudEmpresa = 3.526;
                            longitudEmpresa = -74.023;
                        }else if(items[index][8]=="Villavicencio"){
                            latitudEmpresa = 4.15;
                            longitudEmpresa =  -73.63;
                        }else if(items[index][8]=="Yopal"){
                            latitudEmpresa =5.35 ;
                            longitudEmpresa = -72.4;
                        }else if(items[index][8]=="Fuente de Oro"){
                            latitudEmpresa =  3.34505;
                            longitudEmpresa = -73.765;
                        }else if(items[index][8]=="San Martín"){
                            latitudEmpresa = 3.69605;
                            longitudEmpresa = -73.695;
                        }else if(items[index][8]=="Guamal"){
                            latitudEmpresa = 3.88043;
                            longitudEmpresa = -73.7657;
                        }else if(items[index][8]=="La Macarena"){
                            latitudEmpresa = 2.50896;
                            longitudEmpresa = -73.883;
                        }else if(items[index][8]=="Tunja"){
                            latitudEmpresa = 5.533;
                            longitudEmpresa = -73.367;
                        }else if(items[index][8]=="Sabanalarga"){
                            latitudEmpresa = 10.6296;
                            longitudEmpresa = -74.920;
                        }else if(items[index][8]=="Puerto Rico"){
                            latitudEmpresa = 5.50667;
                            longitudEmpresa = -72.0425;
                        }else if(items[index][8]=="Tame"){
                            latitudEmpresa = 6.45;
                            longitudEmpresa = -71.73;
                        }else if(items[index][8]=="Bogotá"){
                            latitudEmpresa = 4.6;
                            longitudEmpresa = -74.08;
                        }}else{
                        latitudEmpresa = items[index][11];
                        longitudEmpresa = items[index][12];
                    }
                    if(items[index][14]!="" &&  items[index][15]!=""){
                        var indicativo = items[index][14].substr(0,3);
                        var numero = items[index][14].substr(3, 9);
                        var telefonofijoMod = indicativo +" "+ numero;
                        celular = " - " + items[index][15];
                        celularLlamar = items[index][15];
                        telefono = telefonofijoMod;
                    }else if(items[index][14]=="" &&  items[index][15]!=""){
                        celular = items[index][15];
                        celularLlamar = items[index][15];
                        telefono = "  ";
                    }else if(items[index][14]!="" &&  items[index][15]==""){
                        var indicativo = items[index][14].substr(0,3);
                        var numero = items[index][14].substr(3, 9);
                        var telefonofijoMod = indicativo +" "+ numero;
                        telefono= telefonofijoMod;
                        celular = "  ";
                        celularLlamar = "  ";
                    }else{
                        celular ="  ";
                        telefono ="  ";
                    }
                    if(items[index][16]!="" ){
                        directo = items[index][16];
                    }else{
                        directo = "No registra";
                    }
                    if(items[index][17]!="" ) {
                        correo = items[index][17];
                    }else{
                        correo = "No registra";
                    }
                    if(items[index][18]!=="" ) {
                        pagina = items[index][18];
                    }else{
                        pagina = "No registra";
                    }
                    return{
                            cont: vecId=vecId+1,
                            sucursal: items[index][0],
                            empresa: items[index][1],
                            title: items[index][2],
                            imagen : imagen,
                            logo: milogo,
                            plan: items[index][5],
                            pais: items[index][6],
                            departamento: items[index][7],
                            municipio: items[index][8],
                            barrio: items[index][9],
                            direccion: items[index][10],
                            latitud: latitudEmpresa,
                            longitud: longitudEmpresa,
                            horario: horario,
                            telefono: telefono,
                            celular1: celular,
                            celularLlamar: celularLlamar, 
                            directo: directo,
                            email: correo,
                            web: pagina,
                            facebook: items[index][19],
                            twitter: items[index][20],
                            google: items[index][21],
                            instagram: items[index][22],
                    }
                });
                
                videosData.forEach(function(videoData) {
                    $("#dividendo").html(totalResultados);           
                    var miTemplate;
                     switch(videoData.plan)
                    {
                        case "Premium":                            
                            miTemplate = _.template($('#resultadosTemplatePremium').html());
                            console.log("soy premium");
                            break;
                        case "Delux":                            
                            miTemplate = _.template($('#resultadosTemplateDelux').html());
                            break;
                        case "Básico":                            
                            miTemplate = _.template($('#resultadosTemplateBasico').html());
                            break;
                        case "Económico":                            
                            miTemplate = _.template($('#resultadosTemplateEconomico').html());
                            break;
                        default:                            
                            miTemplate = _.template($('#resultadosTemplateNoPago').html());
                    }

               /*     if (videoData.plan == "Premium"){
                        miTemplate = _.template($('#resultadosTemplatePremium').html());    
                    }
                    else if (videoData.plan == "Delux")
                    {
                        miTemplate = _.template($('#resultadosTemplateDelux').html());    
                    } 
                    else if (videoData.plan == "Básico")
                    {
                        miTemplate = _.template($('#resultadosTemplateBasico').html());    
                    } 
                    else if (videoData.plan == "Económico")
                    {
                        miTemplate = _.template($('#resultadosTemplateEconomico').html());    
                    } 
                    else if (videoData.plan == "Cliente No Pago")
                    {
                        miTemplate = _.template($('#resultadosTemplateNoPago').html());    
                    } */
                    window.template = miTemplate;
                    window.videoHtml= template(videoData);
                    totalResultados = totalResultados +1;
                    self.$el.append(videoHtml);
                });
                window.numero=totalResultados;
                if (totalResultados>=5) {
                    $('#contentContador').show();
                    $('#cargando').waitMe('hide');
                }else if(totalResultados==2){
                    $('#contentContador').hide();
                    $("#link3").show();
                    $("#link2").hide();
                    $("#link").hide();
                    $('#cargando').waitMe('hide');
                } 
                else {
                    $('#contentContador').hide();
                    $('#cargando').waitMe('hide');
                }
                if (totalResultados==1) {
                    $('#noresultados').show(); 
                    $('#noResulta').html(' de '+"<strong>"+queBuscas+"</strong>"+' en '+"<strong>"+dondeBuscas+"</strong>"); 
                    queBuscas , dondeBuscas                 
                    $('#cargando').waitMe('hide');
                };
            },
        });
        $("#link2").show();
        $("#link").hide(); 
        $("#link3").hide();           
        $("#resultadosCerca").hide();
        $(".option1").addClass('active');
        $("div#home").css("background", "#fff");
        $(".option2").removeClass('active');
        $("#cargandoEmp").hide();
        $("#submenucon").show();
        $("#slidergalery").remove();
        $("#mapaEmpresa").remove();
     
        $("#footer2").remove();
        $("#rutaOps").remove();
        $("#footerllegar").remove();
        $("#footerllegarVerMas").remove();
        $("#footerllegar").css("display", "none");
        $("#footerllegarVerMas").css("display", "none");
        $("#streetVistaLlegar").remove();
        $("#directions_panel").remove();
        $("#submenu2").remove();
        $("#map_panel").remove();
        $("#mapaver").remove();
        $(".iconosver").remove();
        $(".titulosver").remove();
        $("#info1ver").remove();
        $("#info2ver").remove();
        $("#descripver").remove();
        $(".contentr1").remove();
        $("#streetVista").remove();
        $(".container").remove();
        $(".flexslider").remove();
        $("#titulover").remove();
        $("#mapavistacerca").remove();
        //$("#cercaDeMiTemplate").remove();
        
        $("#footerMapa").hide();
        $("footer").show();
        $('#btncerca').show();
        $('#btnllevame').hide();
        $('#contenedor1').hide();
        $('#itemscenter').show();
        $('#contenedor2').show().css('margin-bottom','65px');
        $('#contentContador').show();
        $('#home').css('background','#fff');
        $('.ui-content').css('margin-top','0');
        $('#w').hide();
        $('#slidergalery').hide();
         $('div#slidergalery').css('overflow: hidden;');
        $('div#slidergalery figure img').css('width: 20%;');
        $('div#slidergalery figure img').css('float: left;');
        $('div#slidergalery figure').css('position: relative;');
        $('div#slidergalery figure').css('width: 500%;');
        $('div#slidergalery figure').css('margin: 0;');
        $('div#slidergalery figure').css('left: 0;');
        $('div#slidergalery figure').css('text-align: left;');
        $('div#slidergalery figure').css('display:inline-block;');
        $('div#slidergalery figure').css('height:36%;');
        $('div#slidergalery figure').css('animation:30s slidy infinite;');
        $('#regresar1').show();
        $('#regresar1').css('float', 'left');
        $('#mapavista').css('display','none');
        $('#mapavistacerca').css('display','none');
        $('#streetVista').css('display','none');
        $('#noresultados').hide();
    },
        mostrarMapa:function() {
        $('#contenedor2').show().css('margin-bottom','65px');
        $('#contenedor1').hide();
        $('#itemscenter').show();
        $("#mapavista").hide();
        $('#mapavista').css('display','block');
        $('.contentr1').hide();
        $('#contentContador').hide();
        $('#home').css('background', '#fff');
        $('.ui-content').css('margin-top', '0');
        $('#w').hide();
        $('#regresar1').show();
        $('#mapavistacerca').remove();
        $('#noresultados').hide();
        $('#streetVista').css('display','none');
        //console.log(videosData[0]['title']);
        //console.log(videosData[0]['latitud']);
        //console.log(videosData[0]['longitud']);
        myLatlng = new google.maps.LatLng(videosData[0]['latitud'],videosData[0]['longitud']);
        
        mapOptions = {
            zoom: 13,
            center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById('mapavista'), mapOptions);
        window.place = new Array();
        window.latitudes = new Array();
        window.longitudes = new Array();
        window.latilongi = new Array();
        window.codigo = new Array();
        window.logoEmp = new Array();
        window.planes = new Array();
        window.empresa = new Array();
        window.direcciones = new Array();
        //window.departamentos = new Array();
        //window.municipios= new Array();
        window.barrios = new Array();
        window.telefonos = new Array();
        window.celularesUno = new Array();
        window.emails = new Array();
        window.webs = new Array();
        //window.popup = new Array();

        for (var i = 0; i < videosData.length; i++) {
        place.push(videosData[i]['title']);
        latitudes.push(videosData[i]['latitud']);
        longitudes.push(videosData[i]['longitud']);
        codigo.push(videosData[i]['sucursal']);
        empresa.push(videosData[i]['empresa']);
        logoEmp.push(videosData[i]['logo']);
        latilongi.push(new google.maps.LatLng(latitudes[i],longitudes[i]));
        planes.push(videosData[i]['plan']);
        direcciones.push(videosData[i]['direccion']);
        //departamentos.push(videosData[i]['departamento']);
        //municipios.push(videosData[i]['municipio']);
        barrios.push(videosData[i]['departamento']+","+videosData[i]['municipio']+","+videosData[i]['barrio']);
        telefonos.push(videosData[i]['telefono']);
        celularesUno.push(videosData[i]['celular1']);
        emails.push(videosData[i]['email']);
        webs.push(videosData[i]['web']);
        };
    var image = new google.maps.MarkerImage(
        'img/markerr2.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );
    var image2 = new google.maps.MarkerImage(
        'img/ico-marker-1.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );
    var image3 = new google.maps.MarkerImage(
        'img/ico-marker-3.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );
 
    var shape = {
        coord: [
            2,0,3,1,5,2,7,3,8,4,10,5,11,6,29,7,29,8,29,9,29,10,29,11,29,12,
            29,13,29,14,28,15,27,16,26,17,25,18,23,19,21,20,20,21,26,22,26,
            23,26,24,26,25,26,26,26,27,25,28,24,29,23,30,21,31,20,32,18,33,
            17,34,15,35,15,36,15,37,15,38,15,39,15,40,15,41,15,42,14,42,14,
            41,13,40,12,39,10,38,8,37,7,36,6,35,5,34,4,33,4,32,4,31,4,30,4,
            29,5,28,10,27,8,26,7,25,5,24,4,23,3,22,3,21,3,20,3,19,3,18,3,17,
            3,16,11,15,9,14,8,13,6,12,4,11,3,10,2,9,1,8,0,7,0,6,0,5,0,4,0,3,
            0,2,0,1,0,0,2,0
        ]
        , type: 'poly'
    };

    for(var i = 0; i < place.length; i++){        
        if(planes[i]=='Premium'){
            window.marker = new google.maps.Marker({
            position: latilongi[i], 
            map: map, 
            title: place[i],
            icon: image2,
            shape: shape,
            cod : codigo[i],
            empresa : empresa[i],
            log: logoEmp[i],
            plan : planes[i],
            latitud : latitudes[i],
            longitud : longitudes[i],
            dir : direcciones[i],
            tel : telefonos[i],
            cel : celularesUno[i],
            email : emails[i],
            web : webs[i],
            barrio :barrios[i]
        });
        google.maps.event.addListener(marker, 'mousedown', function(){
            this.setIcon(image2);
        });     
        window.popup = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function(){
            
            window.note =  this.title;
            window.codigoSuc = this.cod;
            window.codEmpresa = this.empresa;
            window.logoSuc = this.log;
            window.pl = this.plan;
            window.lati =  this.latitud;
            window.longi = this.longitud;
            window.direccion = this.dir;
            window.telefono = this.tel;
            if(telefono == "" || telefono== " "){
                telefono="no existe";
            }
            window.celular = this.cel;
            if(celular == "" || celular== " "){
                celular="no existe";
            }
            window.emai = this.email;
            if(emai == "" || emai== " "){
                emai="no existe";
            }
            window.web = this.web;
            if(web == "" || web== " "){
                web="No existe";
            }
            window.bar = this.barrio;
            window.TemporalTel="No Existe";

                var contenido='<div class="ventana">'+
                '<div class="imgventana">'+
                    '<img src="'+logoSuc+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+//"comoLlegar/:latitud/:longitud/:nombre/:direccion/:telefonoFijo/:celularUno/:celularDos/:email/:web/:barrio":"comoLlegar",
                        '<a href="#vermas/'+note+'/'+ codEmpresa +'/'+codigoSuc+'/'+lati+'/'+longi+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+email+'/'+web+'/'+bar+'"> Vermas </a>' + '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+emai+'/'+web+'/'+bar+'">Trazar ruta</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
            popup.setContent(contenido);
            popup.open(map, this);      
        });
        }else if(planes[i]=='Delux'){
            console.log(logoEmp[i]);
            window.marker = new google.maps.Marker({
            position: latilongi[i], 
            map: map, 
            title: place[i],
            icon: image2,
            shape: shape,
            cod : codigo[i],
            empresa : empresa[i],
            log: logoEmp[i],
            plan : planes[i],
            latitud : latitudes[i],
            longitud : longitudes[i],
            dir : direcciones[i],
            tel : telefonos[i],
            cel : celularesUno[i],
            email : emails[i],
            web : webs[i],
            barrio :barrios[i]
        });
        google.maps.event.addListener(marker, 'mousedown', function(){
            this.setIcon(image2);
        });     
        window.popup = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function(){
            
            window.note =  this.title;
            window.codigoSuc = this.cod;
            window.codEmpresa = this.empresa;
            window.logoSuc = this.log;
            window.pl = this.plan;
            window.lati =  this.latitud;
            window.longi = this.longitud;
            window.direccion = this.dir;
            window.telefono = this.tel;
            if(telefono == "" || telefono== " "){
                telefono="no existe";
            }
            window.celular = this.cel;
            if(celular == "" || celular== " "){
                celular="no existe";
            }
            window.emai = this.email;
            if(emai == "" || emai== " "){
                emai="no existe";
            }
            window.web = this.web;
            if(web == "" || web== " "){
                web="No existe";
            }
            window.bar = this.barrio;
            window.TemporalTel="No Existe";
                var contenido='<div class="ventana">'+
                '<div class="imgventana">'+
                    '<img src="'+logoSuc+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+//"comoLlegar/:latitud/:longitud/:nombre/:direccion/:telefonoFijo/:celularUno/:celularDos/:email/:web/:barrio":"comoLlegar",
                        '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+emai+'/'+web+'/'+bar+'">Trazar ruta</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
            popup.setContent(contenido);
            popup.open(map, this);
        });

        }else if(planes[i]=='Básico'){
            window.marker = new google.maps.Marker({
            position: latilongi[i], 
            map: map, 
            title: place[i],
            icon: image2,
            shape: shape,
            cod : codigo[i],
            empresa : empresa[i],
            log: logoEmp[i],
            plan : planes[i],
            latitud : latitudes[i],
            longitud : longitudes[i],
            dir : direcciones[i],
            tel : telefonos[i],
            cel : celularesUno[i],
            email : emails[i],
            web : webs[i],
            barrio :barrios[i]
        });
        google.maps.event.addListener(marker, 'mousedown', function(){
            this.setIcon(image2);
        });     
        window.popup = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function(){
            
            window.note =  this.title;
            window.codigoSuc = this.cod;
            window.codEmpresa = this.empresa;
            window.logoSuc = this.log;
            window.pl = this.plan;
            window.lati =  this.latitud;
            window.longi = this.longitud;
            window.direccion = this.dir;
            window.telefono = this.tel;
            if(telefono == "" || telefono== " "){
                telefono="no existe";
            }
            window.celular = this.cel;
            if(celular == "" || celular== " "){
                celular="no existe";
            }
            window.emai = this.email;
            if(emai == "" || emai== " "){
                emai="no existe";
            }
            window.web = this.web;
            if(web == "" || web== " "){
                web="No existe";
            }
            window.bar = this.barrio;
            window.TemporalTel="No Existe";
                var contenido='<div class="ventana">'+
                '<div class="imgventana">'+
                    '<img src="'+logoSuc+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+//"comoLlegar/:latitud/:longitud/:nombre/:direccion/:telefonoFijo/:celularUno/:celularDos/:email/:web/:barrio":"comoLlegar",
                        '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+emai+'/'+web+'/'+bar+'">Trazar ruta</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
            popup.setContent(contenido);
          
            popup.open(map, this);
            
            
        });

        }else if(planes[i]=='Económico'){
            console.log("entre a delux");
            console.log(place[i]);
            window.marker = new google.maps.Marker({
            position: latilongi[i], 
            map: map, 
            title: place[i],
            icon: image2,
            shape: shape,
            cod : codigo[i],
            empresa : empresa[i],
            log: logoEmp[i],
            plan : planes[i],
            latitud : latitudes[i],
            longitud : longitudes[i],
            dir : direcciones[i],
            tel : telefonos[i],
            cel : celularesUno[i],
            email : emails[i],
            web : webs[i],
            barrio :barrios[i]
        });
        google.maps.event.addListener(marker, 'mousedown', function(){
            this.setIcon(image2);
        });     
        window.popup = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function(){
            
            window.note =  this.title;
            window.codigoSuc = this.cod;
            window.codEmpresa = this.empresa;
            window.logoSuc = this.log;
            window.pl = this.plan;
            window.lati =  this.latitud;
            window.longi = this.longitud;
            window.direccion = this.dir;
            window.telefono = this.tel;
            if(telefono == "" || telefono== " "){
                telefono="no existe";
            }
            window.celular = this.cel;
            if(celular == "" || celular== " "){
                celular="no existe";
            }
            window.emai = this.email;
            if(emai == "" || emai== " "){
                emai="no existe";
            }
            window.web = this.web;
            if(web == "" || web== " "){
                web="No existe";
            }
            window.bar = this.barrio;
            window.TemporalTel="No Existe";
                var contenido='<div class="ventana">'+
                '<div class="imgventana">'+
                    '<img src="'+logoSuc+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+//"comoLlegar/:latitud/:longitud/:nombre/:direccion/:telefonoFijo/:celularUno/:celularDos/:email/:web/:barrio":"comoLlegar",
                        '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+emai+'/'+web+'/'+bar+'">Trazar ruta</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
            popup.setContent(contenido);
          
            popup.open(map, this);
            
            
        });

        }
        else{
             window.marker = new google.maps.Marker({
            position: latilongi[i], 
            map: map, 
            title: place[i],
            icon: image3,
            shape: shape,
            cod : codigo[i],
            empresa : empresa[i],
            log: logoEmp[i],
            plan : planes[i],
            latitud : latitudes[i],
            longitud : longitudes[i],
            dir : direcciones[i],
            tel : telefonos[i],
            cel : celularesUno[i],
            email : emails[i],
            web : webs[i],
            barrio :barrios[i]

        });

       
             
        //google.maps.event.addListener(marker, 'mousedown', function(){
        //    this.setIcon(image2);
        //});
        window.popup = new google.maps.InfoWindow();

        google.maps.event.addListener(marker, 'click', function(){
            //window.popup = new google.maps.InfoWindow();
            //if(!popup){
            //    popup = new google.maps.InfoWindow();
            //}
            window.note =  this.title;
            window.codigoSuc = this.cod;
            window.codEmpresa = this.empresa;
            window.logoSuc = this.log;
            window.pl = this.plan;
            window.lati =  this.latitud;
            window.longi = this.longitud;
            window.direccion = this.dir;
            window.telefono = this.tel;
            if(telefono == "" || telefono== " "){
                telefono="no existe";
            }
            window.celular = this.cel;
            if(celular == "" || celular== " "){
                celular="no existe";
            }
            window.emai = this.email;
            if(emai == "" || emai== " "){
                emai="no existe";
            }
            window.web = this.web;
            if(web == "" || web== " "){
                web="No existe";
            }
            window.bar = this.barrio;
            window.TemporalTel="No Existe";
                   
             var contenido='<div class="ventana">'+
                '<div class="imgventana" >'+
                    '<img id="logoSuc" src="'+logoSuc+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+
                    '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+emai+'/'+web+'/'+bar+'">Trazar ruta</a>'+
                    '</div>'+
                '</div>'+
            '</div>';           
           popup.setContent(contenido);
            popup.open(map, this);
        });


        }
    }

        },
            render: function() {
        //this.$el.html(this.template(this.model.attributes));
        //   return this;
        if (totalResultados>=5) {
            $('#contentContador').show();
        } else {
            $('#contentContador').hide();
        }
        $('.contentr1').show();
        $('#contenedor1').hide();
        $('#itemscenter').show();
        $('#contenedor2').show().css('margin-bottom','65px');
        $('#home').css('background','#fff');
        $('.ui-content').css('margin-top','0');
        $('#w').hide();
        $('#regresar1').show();
        $('#regresar1').css('float', 'left');
        $('#mapavista').css('display','none');
        $('#noresultados').hide();
        $('#mapavistacerca').hide();
        $('.contentr1').show();
        $('#contenedor1').hide();
        $('#itemscenter').show();
        $('#contenedor2').show().css('margin-bottom','65px');
        $('#home').css('background','#fff');
        $('.ui-content').css('margin-top','0');
        $('#w').hide();
        $('#regresar1').show();
        $('#regresar1').css('float', 'left');
        $('#mapavista').css('display','none');
        $('#noresultados').hide();
        $('#mapavistacerca').hide();
        $('#nombreEmpresa').remove();
        $('#slidergalery').remove();
        $('#mision').remove();
        $('#acordeonp1').remove();
        $('.titulover1').remove();
        $('#acordeonp2').remove();
        $('#acordeonp3').remove();
        $('#acordeonp4').remove();
        $('#acordeonp5').remove();
        $('#acordeonp6').remove();
        $('#logoMision').remove();
        $('#service1').remove();
        $('#info2ver').remove();
        $('#desc1').remove();
        $('#info1ver').remove();
        $('.titulosver').remove();
        $('#mapaver').remove();
        $('#streetVista').remove();
        $('.iconosver').remove();
        $('#iconover1').remove();
        $('#iconover2').remove();
        $('#iconover3').remove();
        $('#iconover4').remove();
        $('#iconover5').remove();
        $('#iconover6').remove();
        $('#iconover7').remove();
        $('#iconover8').remove();
        $('#logoMision').remove();
        $('#descripver').remove();
        $('#panel-1').remove();
        $('#panel-0').remove();
        $('.accordion').remove();
        $('#footerllegarVerMas').remove();
        $('footer').show();
                      
    }
});

/////////////////////////////Vista Como llegar  ////////////////////////////////

comoLlegar = Backbone.View.extend({
    events: {
        "touchstart #draw" : "againTrace",
        "touchstart #subop2":"againTrace",
        "click #draw" : "againTrace",
        "click #subop2" : "againTrace",
        "touchstart #subop3":"againTraceTransit",
        "click #subop3" : "againTraceTransit",
        "touchstart #subop4":"againTraceWalking",
        "click #subop4" : "againTraceWalking"
    },
        initialize: function() {
        this.$el;
    },  
    trazar:function(latitud,longitud,nombre,direccion,telefonoFijo,celularUno,celularDos,email,webs,barrio) {
        window.celularUno = celularUno;
        celularUno=celularUno.replace('-','');
        $('#DirEmpresa').html("<p>"+direccion+ ' - ' + barrio+"</p>");
        if(telefonoFijo=="No registra" || telefonoFijo=="  "){
              console.log("no hay telefonoFijo");
            $('#telefonoFijo').html("<a>No registra</a>"); 
        }else{
            var indicativo = telefonoFijo.substr(0,3);
            var numero = telefonoFijo.substr(3, 9);
            var telefonofijoMod = indicativo +" "+ numero;
            $('#telefonoFijo').html("<a href='tel:"+telefonoFijo+"'>"+telefonofijoMod+"</a>");  
        }
        if(celularDos=="No registra"){
            $('#celularUno').html("<a href='tel:"+celularUno+"'>"+celularUno+"</a>");
        }else{
           $('#celularUno').html("<a href='tel:"+celularUno+"'>"+celularUno+"</a> -  <a href='tel:"+celularDos+"'>"+celularDos+"</a>"); 
        }
        $('#email').html("<a href='mailto:"+email+"?subject=Contacto'>"+email+"</a>");
        $('#webs').html("<a onclick=\"{window.open('http://"+webs+"', '_system', 'location=no');}\">"+webs+"</a>");
        var valorNombre = nombre;
        window.valorLat = latitud;
        window.valorlon = longitud;
        self= this;
        var template = _.template($('#comoLlegarTemplate').html());
        self.$el.append(template);
        window.scrollTo(0,0);
        $('#mapaEmpresa').remove();
        $("#mapavistacerca").remove();
        $("#footer").show();
        $(".footerr3").remove();
        $("#info2ver").remove();
        $("#mapaver").remove();
        $("#mVerMas").css("display", "none");
        $("#footerMapa").hide();
        $(".iconosver").remove();
        $(".titulosver").remove();
        $("#info1ver").remove();
        $("#info1ver").remove();
        $("#descripver").remove();
        $(".contentr1").hide();
        $("#streetVista").remove();
        $(".container").remove();
        $(".flexslider").remove();
        $("#titulover").remove();
        $("#slidergalery").remove();
        $("#mostrarMapa").remove();
        $("#resultadosCerca").hide();
        $('#cargandoEmp').hide();
        //$("footer").hide();
        $("#btngps").show();
        $("#btngps").css('width', '37%');
        //$('#btnllevame').show();
        $('#cercademi').hide();
        $('#mapavistacerca').show();
        $('#mapavista').hide();
        $('#contenedor1').hide();
        $('#itemscenter').hide();
        $('.contentr1').hide();
        $('#contenedor2').show().css('margin-bottom','65px');
        $('#contentContador').hide();
        $('#home').css('background', '#fff');
        $('.ui-content').css('margin-top', '0');
        $('#w').hide();
        $('#slidergalery').hide();
        $('#regresar1').show();
        $('#noresultados').hide();
        $('#espacioresultados').css('height','49px')
        $("#pp").text(valorNombre);
        $('.gpsOpen').attr("href", "geo:"+latitud+","+longitud);
        //document.getElementById('gpsOpen').href = "hola";
        ////////////////////////////////////////////////////
        $(".submenuu > li").click(function(e){
            var a = e.target.id;
            //desactivamos seccion y activamos elemento de menu
        $(".submenuu li.active").removeClass("active");
        $(".submenuu #"+a).addClass("active");
        });

        //////// Script traza de rutas /////////////////////
        windowmap = null;
        window.directionsDisplay = null;
        window.directionsService = null;
        var myLatiyudelongitude = new google.maps.LatLng(valorLat,valorlon);
        var myOption = {
            zoom: 9,
            center: myLatiyudelongitude,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map($("#map_panel").get(0), myOption);
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsService = new google.maps.DirectionsService();
        this.Trace();
    },
    Trace : function() {
        window.myLatandlong= new google.maps.LatLng(valorLat,valorlon);
        window.start;
        window.geocoder = new google.maps.Geocoder();
        //window.myLat= new google.maps.LatLng(5.533, -73.367);
            navigator.geolocation.getCurrentPosition(function(position) {
                window.poss = new google.maps.LatLng(position.coords.latitude,
                position.coords.longitude);
                geocoder.geocode({ 'latLng': poss },processGeocoder);
                function processGeocoder(results,status){
                    //alert("estoy en process");
                    if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                    window.localizacionTraza= document.forms[0].dir.value=results[0].formatted_address;
                    //alert(localizacionTraza);
                    $("#start").val(localizacionTraza);
                } else {
                    error('Google no retorno resultado alguno.');
                }
                }else {
                    error("No se pudo verificar su geolocalización, compruebe su conexion a internet ");
                }
                }
                start=poss;
                window.request = {
                    origin: start,
                    destination:myLatandlong,
                    travelMode: google.maps.DirectionsTravelMode["DRIVING"],
                    unitSystem: google.maps.DirectionsUnitSystem[$('#unitSystem').val()],
                    provideRouteAlternatives: true
                };
                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setMap(map);
                        directionsDisplay.setPanel($("#directions_panel").get(0));
                        directionsDisplay.setDirections(response);
                    } else {
                        alert("No hay direcciones disponibles entre estos dos puntos");
                    }
                });
            });
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError,{ maximumAge: Infinity, timeout: 10000, enableHighAccuracy: true });
        }
        function onSuccess(position) {
            //cunando es efectivo el trazado de ruta 
        }
        function onError(error) {
        //alert('No se pudo tomar su ubicacion, active el gps de su dispositivo, por favor ingrese la dirección de origen.');
        $('#noUbicacion').popup('show');
    }        
        ///////////////////// script street view //////////////////////
        var LatLngEmpresa = new google.maps.LatLng(valorLat,valorlon);
        var panoramaOptions = {
            position: LatLngEmpresa,
                                    pov: {
                                    heading: 165,
                                    pitch: 0
            },
                                    zoom: 1
        };
        var myPano = new google.maps.StreetViewPanorama(
                            document.getElementById('streetVistaLlegar'),
                            panoramaOptions);
        myPano.setVisible(true);
        ///////////script autocomplete direcciones
        // Create the autocomplete object, restricting the search
        // to geographical location types.
        var autocomplete = new google.maps.places.Autocomplete(
        /** @type {HTMLInputElement} */
        (document.getElementById('start')), {
            types: ['geocode']
        }
        );
        // When the user selects an address from the dropdown,
        // populate the address fields in the form. 
    },
    againTrace : function() {
         var start = $('#start').val();
                if (start == "") {
                    start=poss;
                };
        window.request = {
            origin: start,
            destination:myLatandlong,
            travelMode: google.maps.DirectionsTravelMode["DRIVING"],
            unitSystem: google.maps.DirectionsUnitSystem[$('#unitSystem').val()],
            provideRouteAlternatives: true
        };

        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel($("#directions_panel").get(0));
                directionsDisplay.setDirections(response);
                
                } else {
                alert("No hay direcciones disponibles en modo vehiculo entre estos dos puntos");
            }
        });

    },
    againTraceTransit : function() {
        var start = $('#start').val();
        if (start == "") {
            start=poss;
        };

        window.request = {
            origin: start,
                    destination:myLatandlong,
                    travelMode: google.maps.DirectionsTravelMode["TRANSIT"],
                    unitSystem: google.maps.DirectionsUnitSystem[$('#unitSystem').val()],
                    provideRouteAlternatives: true
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel($("#directions_panel").get(0));
                directionsDisplay.setDirections(response);
                //window.rrr= $('.gm-iw').text();
                //alert(rrr);

            } else {
                alert("No hay direcciones disponibles en modo transporte publico entre estos dos puntos");
            }
        }
        );
    },
    againTraceWalking : function() {
        var start = $('#start').val();
        if (start == "") {
            start=poss;
        };
        window.request = {
            origin: start,
            destination:myLatandlong,
            travelMode: google.maps.DirectionsTravelMode["WALKING"],
            unitSystem: google.maps.DirectionsUnitSystem[$('#unitSystem').val()],
            provideRouteAlternatives: true
        }
        ;
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel($("#directions_panel").get(0));
                directionsDisplay.setDirections(response);
            } else {
                alert("No hay direcciones disponibles en modo caminando entre estos dos puntos");
            }
        }
        );
    }
});



///////////////////////////////////// VISTA CERCA DE MI INICIO ///////////////

cercaDeMiInicioView = Backbone.View.extend({
    events: {

       "click #cercacerc" : "buscarCerca",
       "keyup #queBuscasCerca": "keyActioncerc",
    },
   funcioncercademi: function(){
        window.borrador=0;
        window.markers = [];
        enlacee = "";
        self= this;
        var templatecercademi = _.template($('#empresasCercaInicioTemplate').html());
        self.$el.append(templatecercademi);
        //console.log("vista cerca de mi home");
        window.lupa=13;
        var mapOptions = {
            zoom: lupa
        };
        window.mapCerc = new google.maps.Map(document.getElementById('mostrarMapa'),
                        mapOptions);
        var imagePos = new google.maps.MarkerImage(
            'img/pegman-llanero.png'
            , new google.maps.Size(30,43)
            , new google.maps.Point(0,0)
            , new google.maps.Point(15,43)
        );
        var shape = {
            coord: [
                2,0,3,1,5,2,7,3,8,4,10,5,11,6,29,7,29,8,29,9,29,10,29,11,29,12,
                29,13,29,14,28,15,27,16,26,17,25,18,23,19,21,20,20,21,26,22,26,
                23,26,24,26,25,26,26,26,27,25,28,24,29,23,30,21,31,20,32,18,33,
                17,34,15,35,15,36,15,37,15,38,15,39,15,40,15,41,15,42,14,42,14,
                41,13,40,12,39,10,38,8,37,7,36,6,35,5,34,4,33,4,32,4,31,4,30,4,
                29,5,28,10,27,8,26,7,25,5,24,4,23,3,22,3,21,3,20,3,19,3,18,3,17,
                3,16,135441438193667,15,9,14,8,13,6,12,4,11,3,10,2,9,1,8,0,7,0,6,0,5,0,4,0,3,
                0,2,0,1,0,0,2,0
            ]
            , type: 'poly'
        };

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = new google.maps.LatLng(position.coords.latitude,
                                                                       position.coords.longitude);
                var infowindow = new google.maps.Marker( {
                    map: mapCerc,
                    position: pos,
                    title: 'tu posición',
                    icon: imagePos,
                    shape: shape,
                    animation: google.maps.Animation.BOUNCE
                }
                );
                mapCerc.setCenter(pos);
            }, function() {        
                
                var options = new google.maps.Marker( {
                    zoom: 10,
                    map: mapCerc,
                    position: new google.maps.LatLng(5.533, -73.367),
                    title:'Error: The Geolocation service failed',
                    icon: imagePos,
                    shape: shape,
                    animation: google.maps.Animation.BOUNCE
                });
                mapCerc.setZoom(13);
                mapCerc.setCenter(options.position);
                            }
            );
        } else {
            
            this.handleNoGeolocation(false);
        }

        $("#contenedor2").css("margin", "0px");
        $("#submenucon").show();
        $("#busquedaAux").hide();
        $("#contBuscar").show();
        $("#resultadosCerca").show();
        $("#buscar").show();
        $("#link2").hide();
        $("#link").hide(); 
        $("#link3").hide();           
        $(".option1").addClass('active');
        $("div#home").css("background", "#fff");
        $("#cargandoEmp").hide();
        $("#slidergalery").remove();
        $("#mapaEmpresa").remove();
        $("#footer2").hide();
        $("#rutaOps").remove();
        $("#footerllegar").remove();
        $("#footerllegarVerMas").remove();
        $("#footerllegar").css("display", "none");
        $("#footerllegarVerMas").css("display", "none");
        $("#streetVistaLlegar").remove();
        $("#directions_panel").remove();
        $("#submenu2").remove();
        $("#map_panel").remove();
        $("#mapaver").remove();
        $(".iconosver").remove();
        $(".titulosver").remove();
        $("#info1ver").remove();
        $("#info2ver").remove();
        $("#descripver").remove();
        $(".contentr1").remove();
        $("#streetVista").remove();
        $(".container").remove();
        $(".flexslider").remove();
        $("#titulover").remove();
        $("#mapavistacerca").remove();
        $("#footerMapa").hide();
        $("footer").show();
        $("#resultadosCerca").show();
        $('#btncerca').show();
        $('#btnllevame').hide();
        $('#contenedor1').show();
        //$('#cargando').hide();
        $('#submenucon').hide();
        $('#itemscenter').hide();
        $('#contenedor2').show().css('margin-bottom','65px');
        $('#contentContador').hide();
        $('#home').css('background','#fff');
        $('.ui-content').css('margin-top','0');
        $('#w').hide();
        $('#slidergalery').hide();
        $('div#slidergalery').css('overflow: hidden;');
        $('div#slidergalery figure img').css('width: 20%;');
        $('div#slidergalery figure img').css('float: left;');
        $('div#slidergalery figure').css('position: relative;');
        $('div#slidergalery figure').css('width: 500%;');
        $('div#slidergalery figure').css('margin: 0;');
        $('div#slidergalery figure').css('left: 0;');
        $('div#slidergalery figure').css('text-align: left;');
        $('div#slidergalery figure').css('display:inline-block;');
        $('div#slidergalery figure').css('height:36%;');
        $('div#slidergalery figure').css('animation:30s slidy infinite;');
        $('#regresar1').show();
        $('#regresar1').css('float', 'left');
        $('#mapavista').css('display','none');
        $('#mapavistacerca').css('display','none');
        $('#streetVista').css('display','none');
        $('#noresultados').hide();
        $('section#donde').hide();
        $('p#localizacion').hide();
        $('#espacioresultados').hide();
        $('#queBuscas').hide();
        $('article#btndonde').hide();
        $('#queBuscasCerca').show();
        $('#btndondeCerca').show();
    },

    keyActioncerc: function(e){
        if (e.keyCode == 13){
            this.buscarCerca();    
        }
                
    },

    buscarCerca : function(){
      borrador = borrador + 1;

      if(borrador != 1){
        console.log("hay q borrar");
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
      }
      var queBuscas= $('#queBuscasCerca').val();
      //alert(queBuscas);
      var ubicacion= $('#localizacion').text();
      var palabras= ubicacion.split(",");
      var ciudad = palabras[0]; 
      //alert(ciudad);
      window.empresasCerca;
      if(queBuscas==''){
        alert('No selecciono ningun criterio de busqueda');
      };
      if(ciudad=='buscando'){
        alert('No se ha podido tomar su ubicación rectifique su conexión a internet o permisos del dispositivo ');
      };
     ////////////////////////////////////////////////////////////////////
     ////////////////////////////////////////////////////////////////////

     window.lupa=13;
        var mapOptions = {
            zoom: lupa
        };
        window.contadorEmpresas=0;
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    window.infor= $.ajax({
            url:"http://www.publitell.com/json/search.json?busqEmpresa="+queBuscas + "&busqLugar="+ciudad,
                                type: "get",
                                crossDomain: true,
                                dataType: 'jsonp',
                                cache:true,
                                xhrFields: {
                                withCredentials: true
            },
                                success: function(data,status, error) {
                                console.log("ENTRO AL JSON cerca");
                                window.items = data;
                                empresasCerca = jQuery.map(items, function(value, index ){
                                console.log("Entro al jquery map");
                                contadorEmpresas = contadorEmpresas + 1;
                                if (items[index][4]=="" || items[index][5]=="Básico" || items[index][5]=="Económico" || items[index][5]=="Cliente No Pago"){
                        milogo = "http://publitell.com/system/logo_solo.png";
                    }else{                        
                        milogo = "http://publitell.com/system/logos/"+items[index][1]+"/"+items[index][4];
                    }
                    //validamos  si el horario esta abierto o cerrado
                    if (items[index][13] == true){
                        horario = "../www/img/icon-horario1.jpg";
                    }else{
                        horario = "../www/img/icon-horario2.jpg";
                    }
                    var celular ="";
                    var telefono ="";
                    var pagina = "";
                    var correo = "";
                    var latitudEmpresa = "";
                    var longitudEmpresa = "";
                    var imagen = "";
                    if (items[index][4]=="" || items[index][5]=="Básico" || items[index][5]=="Económico" || items[index][5]=="Cliente No Pago" ){
                        imagen= 'logo_solo.png';
                    }else{
                        imagen=items[index][4];
                    }

                    if (items[index][11]=="" && items[index][12]==""){
                        if(items[index][8]=="Villanueva"){
                            latitudEmpresa = 4.555;
                            longitudEmpresa = -72.882;
                        }else if(items[index][8]=="San  Juan de Arama"){
                            latitudEmpresa = 3.15646;
                            longitudEmpresa = -73.6098;
                        }else if(items[index][8]=="Orocué"){
                            latitudEmpresa = 4.92194;
                            longitudEmpresa = -71.597;
                        }else if(items[index][8]=="Trinidad"){
                            latitudEmpresa = 3.2682;
                            longitudEmpresa = -74.1582;
                        }else if(items[index][8]=="Duitama"){
                            latitudEmpresa = 5.817;
                            longitudEmpresa = -73.033;
                        }
                        else if(items[index][8]=="Paz de Ariporo"){
                            latitudEmpresa = 5.846;
                            longitudEmpresa = -71.11;
                        }else if(items[index][8]=="Castilla La Nueva"){
                            latitudEmpresa = 3.833;
                            longitudEmpresa =-73.683;
                        }else if(items[index][8]=="Aguazul"){
                            latitudEmpresa = 5.16833;
                            longitudEmpresa = -72.544;
                        }else if(items[index][8]=="Pore"){
                            latitudEmpresa = 5.72722;
                            longitudEmpresa = -71.994;
                        }else if(items[index][8]=="Guayabal de Síquima"){
                            latitudEmpresa = 4.8773;
                            longitudEmpresa = -74.4677;
                        }else if(items[index][8]=="Soacha"){
                            latitudEmpresa = 4.583;
                            longitudEmpresa = -74.217;
                        }else if(items[index][8]=="San José del Guaviare"){
                            latitudEmpresa = 2.60517;
                            longitudEmpresa = -72.5747;
                        }else if(items[index][8]=="Cabuyaro"){
                            latitudEmpresa = 4.2817;
                            longitudEmpresa = -72.794;
                        }else if(items[index][8]=="Támara"){
                            latitudEmpresa = 5.8322;
                            longitudEmpresa = -72.162;
                        }else if(items[index][8]=="Saravena"){
                            latitudEmpresa = 6.952;
                            longitudEmpresa = -71.875;
                        }else if(items[index][8]=="Lejanías"){
                            latitudEmpresa = 3.526;
                            longitudEmpresa = -74.023;
                        }else if(items[index][8]=="Villavicencio"){
                            latitudEmpresa = 4.15;
                            longitudEmpresa =  -73.63;
                        }else if(items[index][8]=="Yopal"){
                            latitudEmpresa =5.35 ;
                            longitudEmpresa = -72.4;
                        }else if(items[index][8]=="Fuente de Oro"){
                            latitudEmpresa =  3.34505;
                            longitudEmpresa = -73.765;
                        }else if(items[index][8]=="San Martín"){
                            latitudEmpresa = 3.69605;
                            longitudEmpresa = -73.695;
                        }else if(items[index][8]=="Guamal"){
                            latitudEmpresa = 3.88043;
                            longitudEmpresa = -73.7657;
                        }else if(items[index][8]=="La Macarena"){
                            latitudEmpresa = 2.50896;
                            longitudEmpresa = -73.883;
                        }else if(items[index][8]=="Tunja"){
                            latitudEmpresa = 5.533;
                            longitudEmpresa = -73.367;
                        }else if(items[index][8]=="Sabanalarga"){
                            latitudEmpresa = 10.6296;
                            longitudEmpresa = -74.920;
                        }else if(items[index][8]=="Puerto Rico"){
                            latitudEmpresa = 5.50667;
                            longitudEmpresa = -72.0425;
                        }else if(items[index][8]=="Tame"){
                            latitudEmpresa = 6.45;
                            longitudEmpresa = -71.73;
                        }else if(items[index][8]=="Bogotá"){
                            latitudEmpresa = 4.6;
                            longitudEmpresa = -74.08;
                        }}else{
                        latitudEmpresa = items[index][11];
                        longitudEmpresa = items[index][12];
                    }
                    if(items[index][14]!="" &&  items[index][15]!=""){
                        var indicativo = items[index][14].substr(0,3);
                        var numero = items[index][14].substr(3, 9);
                        var telefonofijoMod = indicativo +" "+ numero;
                        celular = " - " + items[index][15];
                        celularLlamar = items[index][15];
                        telefono = telefonofijoMod;
                    }else if(items[index][14]=="" &&  items[index][15]!=""){
                        celular = items[index][15];
                        celularLlamar = items[index][15];
                        telefono = "  ";
                    }else if(items[index][14]!="" &&  items[index][15]==""){
                        var indicativo = items[index][14].substr(0,3);
                        var numero = items[index][14].substr(3, 9);
                        var telefonofijoMod = indicativo +" "+ numero;
                        telefono= telefonofijoMod;
                        celular = "  ";
                        celularLlamar = "  ";
                    }else{
                        celular ="  ";
                        telefono ="  ";
                    }
                    if(items[index][16]!="" ){
                        directo = items[index][16];
                    }else{
                        directo = "No registra";
                    }
                    if(items[index][17]!="" ) {
                        correo = items[index][17];
                    }else{
                        correo = "No registra";
                    }
                    if(items[index][18]!=="" ) {
                        pagina = items[index][18];
                    }else{
                        pagina = "No registra";
                    }
                                return{
                                    sucursal: items[index][0],
                                    empresa: items[index][1],
                                    title: items[index][2],
                                    imagen : imagen,
                                    logo: milogo,
                                    plan: items[index][5],
                                    pais: items[index][6],
                                    departamento: items[index][7],
                                    municipio: items[index][8],
                                    barrio: items[index][9],
                                    direccion: items[index][10],
                                    latitud: latitudEmpresa,
                                    longitud: longitudEmpresa,
                                    horario: horario,
                                    telefono: telefono,
                                    celular1: celular,
                                    celularLlamar: celularLlamar, 
                                    directo: directo,
                                    email: correo,
                                    web: pagina,
                                    facebook: items[index][19],
                                    twitter: items[index][20],
                                    google: items[index][21],
                                    instagram: items[index][22],                        
                                }
                              
                });
        if(contadorEmpresas==0){
            alert('No se encontraron resultados para la busqueda '+ queBuscas+'cerca a su posición actual, realice una nueva busqueda');
        }
        window.place2 = new Array();
        window.latitudes = new Array();
        window.longitudes = new Array();
        window.latilongi = new Array();
        window.codigo = new Array();
        window.logoEmp = new Array();
        window.planes = new Array();
        window.empresa = new Array();
        window.direcciones = new Array();
        window.barrios = new Array();
        window.telefonos = new Array();
        window.celularesUno = new Array();
        window.emails = new Array();
        window.webs = new Array();

        //$('.login-control').hide();
         if(empresasCerca != ""){
         for (var i = 0; i < empresasCerca.length; i++) {
        place2.push(empresasCerca[i]['title']);
        latitudes.push(empresasCerca[i]['latitud']);
        longitudes.push(empresasCerca[i]['longitud']);
        codigo.push(empresasCerca[i]['sucursal']);
        empresa.push(empresasCerca[i]['empresa']);
        logoEmp.push(empresasCerca[i]['logo']);
        latilongi.push(new google.maps.LatLng(latitudes[i],longitudes[i]));
        planes.push(empresasCerca[i]['plan']);
        direcciones.push(empresasCerca[i]['direccion']);
        barrios.push(empresasCerca[i]['departamento']+","+empresasCerca[i]['municipio']+","+empresasCerca[i]['barrio']);
        telefonos.push(empresasCerca[i]['telefono']);
        celularesUno.push(empresasCerca[i]['celular1']);
        emails.push(empresasCerca[i]['email']);
        webs.push(empresasCerca[i]['web']);
        };

        var image = new google.maps.MarkerImage(
        'img/markerr2.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );

    var image2 = new google.maps.MarkerImage(
        'img/ico-marker-1.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );

    var image3 = new google.maps.MarkerImage(
        'img/ico-marker-3.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );

 
    var shape = {
        coord: [
            2,0,3,1,5,2,7,3,8,4,10,5,11,6,29,7,29,8,29,9,29,10,29,11,29,12,
            29,13,29,14,28,15,27,16,26,17,25,18,23,19,21,20,20,21,26,22,26,
            23,26,24,26,25,26,26,26,27,25,28,24,29,23,30,21,31,20,32,18,33,
            17,34,15,35,15,36,15,37,15,38,15,39,15,40,15,41,15,42,14,42,14,
            41,13,40,12,39,10,38,8,37,7,36,6,35,5,34,4,33,4,32,4,31,4,30,4,
            29,5,28,10,27,8,26,7,25,5,24,4,23,3,22,3,21,3,20,3,19,3,18,3,17,
            3,16,11,15,9,14,8,13,6,12,4,11,3,10,2,9,1,8,0,7,0,6,0,5,0,4,0,3,
            0,2,0,1,0,0,2,0
        ]
        , type: 'poly'
    };


    for(var i = 0; i < place2.length; i++){
        
        if(planes[i]=='Premium'){
           window.marker = new google.maps.Marker({
            position: latilongi[i], 
            map: mapCerc, 
            title: place2[i],
            icon: image2,
            shape: shape,
            cod : codigo[i],
            empresa : empresa[i],
            log: logoEmp[i],
            plan : planes[i],
            latitud : latitudes[i],
            longitud : longitudes[i],
            dir : direcciones[i],
            tel : telefonos[i],
            cel : celularesUno[i],
            email : emails[i],
            web : webs[i],
            barrio :barrios[i]
        });

        markers.push(marker);
        
        window.pop = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function(){    
        
            
            window.note =  this.title;
            window.codigoSuc = this.cod;
            window.codEmpresa = this.empresa;
            window.logoSuc = this.log;
            window.pl = this.plan;
            window.lati =  this.latitud;
            window.longi = this.longitud;
            window.direccion = this.dir;
            window.telefono = this.tel;
            if(telefono == "" || telefono== " "){
                telefono="No registra";
            }
            window.celular = this.cel;
            if(celular == "" || celular== " "){
                celular="No registra";
            }
            window.emai = this.email;
            if(emai == "" || emai== " "){
                emai="No registra";
            }
            window.web = this.web;
            if(web == "" || web== " "){
                web="No registra";
            }
            window.bar = this.barrio;
            window.TemporalTel="No registra";

        
                var contenido='<div class="ventana">'+
                '<div class="imgventana">'+
                    '<img src="'+logoSuc+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+
                        '<a href="#vermas/'+note+'/'+ codEmpresa +'/'+codigoSuc+'/'+lati+'/'+longi+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+email+'/'+web+'/'+bar+'"> Vermas </a>' + '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+email+'/'+webs+'/'+bar+'"> Trazar ruta </a>'+
                    '</div>'+
                '</div>'+
            '</div>';

            pop.setContent(contenido);
            pop.open(mapCerc, this);
            //popup[i].open(map, this);
            //for (var j = 0; j<popup.length; j++) {
               // popup.close();
             //   console('diego');               
           // };
           
            //popup.close(map, this);
        }); 
}else if(planes[i]=='Delux' || planes[i]=='Básico' || planes[i]=='Básico' || planes[i]=='Económico'){
    window.marker = new google.maps.Marker({
            position: latilongi[i], 
            map: mapCerc, 
            title: place2[i],
            icon: image2,
            shape: shape,
            cod : codigo[i],
            empresa : empresa[i],
            log: logoEmp[i],
            plan : planes[i],
            latitud : latitudes[i],
            longitud : longitudes[i],
            dir : direcciones[i],
            tel : telefonos[i],
            cel : celularesUno[i],
            email : emails[i],
            web : webs[i],
            barrio :barrios[i]
        });
        markers.push(marker);
        window.pop = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function(){    
            window.note =  this.title;
            window.codigoSuc = this.cod;
            window.codEmpresa = this.empresa;
            window.logoSuc = this.log;
            window.pl = this.plan;
            window.lati =  this.latitud;
            window.longi = this.longitud;
            window.direccion = this.dir;
            window.telefono = this.tel;
            if(telefono == "" || telefono== " "){
                telefono="No registra";
            }
            window.celular = this.cel;
            if(celular == "" || celular== " "){
                celular="No registra";
            }
            window.emai = this.email;
            if(emai == "" || emai== " "){
                emai="No registra";
            }
            window.web = this.web;
            if(web == "" || web== " "){
                web="No registra";
            }
            window.bar = this.barrio;
            window.TemporalTel="No registra";

        
                var contenido='<div class="ventana">'+
                '<div class="imgventana">'+
                    '<img src="'+logoSuc+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+
                        '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+email+'/'+webs+'/'+bar+'"> Trazar ruta </a>'+
                    '</div>'+
                '</div>'+
            '</div>';

            pop.setContent(contenido);
            pop.open(mapCerc, this);
            //popup[i].open(map, this);
            //for (var j = 0; j<popup.length; j++) {
               // popup.close();
             //   console('diego');               
           // };
           
            //popup.close(map, this);
        }); 

}else{
    window.marker = new google.maps.Marker({
            position: latilongi[i], 
            map: mapCerc, 
            title: place2[i],
            icon: image3,
            shape: shape,
            cod : codigo[i],
            empresa : empresa[i],
            log: logoEmp[i],
            plan : planes[i],
            latitud : latitudes[i],
            longitud : longitudes[i],
            dir : direcciones[i],
            tel : telefonos[i],
            cel : celularesUno[i],
            email : emails[i],
            web : webs[i],
            barrio :barrios[i]
        });

        markers.push(marker);
        window.pop = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function(){
            
            
            window.note =  this.title;
            window.codigoSuc = this.cod;
            window.codEmpresa = this.empresa;
            window.logoSuc = this.log;
            window.pl = this.plan;
            window.lati =  this.latitud;
            window.longi = this.longitud;
            window.direccion = this.dir;
            window.telefono = this.tel;
            if(telefono == "" || telefono== " "){
                telefono="No registra";
            }
            window.celular = this.cel;
            if(celular == "" || celular== " "){
                celular="No registra";
            }
            window.emai = this.email;
            if(emai == "" || emai== " "){
                emai="No registra";
            }
            window.web = this.web;
            if(web == "" || web== " "){
                web="No registra";
            }
            window.bar = this.barrio;
            window.TemporalTel="No registra";
        
            var contenido='<div class="ventana">'+
                '<div class="imgventana" >'+
                    '<img id="logoSuc" src="'+logoSuc+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+
                    '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+emai+'/'+web+'/'+bar+'">Trazar ruta</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
        
           
           pop.setContent(contenido);
            //popup.setContent(note +'<a href="#vermas/'+note+' "> Vermas </a>' + '<a href="#comoLlegar">Trazar ruta</a>');
            pop.open(mapCerc, this);
        }); 
}
         
    }
}else{
    console.log('data esta vacio');
}
            }
});
},    
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    

});

///////////////////////////////////// Vista Ver Mas ////////////////////////////////////////////

VerMas = Backbone.View.extend( {
    initialize: function() {
        this.$el;
    },  

   
    mostrarEmpresa:function(nombreEmpresa, idSucursal, idEmpresa,latitud,longitud, direccion, barrio, telefonoFijo, celularUno, celularDos, email, webs) {
            
        window.telef = telefonoFijo;
        celularUno=celularUno.replace('-','');
        

        $('#DirEmpresa').html("<p>"+direccion+ ' - ' + barrio+"</p>");
        if(telefonoFijo=="No registra" || telefonoFijo=="  "){
              console.log("no hay telefonoFijo");
            $('#telefonoFijo').html("<a>No registra</a>"); 

        }else{
          
            var indicativo = telefonoFijo.substr(0,3);
            var numero = telefonoFijo.substr(3, 9);
            var telefonofijoMod = indicativo +" "+ numero;
            $('#telefonoFijo').html("<a href='tel:"+telefonoFijo+"'>"+telefonofijoMod+"</a>");  
        }
        if(celularDos=="No registra"){
            $('#celularUno').html("<a href='tel:"+celularUno+"'>"+celularUno+"</a>");
        }else{
           $('#celularUno').html("<a href='tel:"+celularUno+"'>"+celularUno+"</a> -  <a href='tel:"+celularDos+"'>"+celularDos+"</a>"); 
        }
        $('#email').html("<a href='mailto:"+email+"?subject=Contacto'>"+email+"</a>");
        $('#webs').html("<a onclick=\"{window.open('http://"+webs+"', '_system', 'location=no');}\">"+webs+"</a>");
        window.nombre = nombreEmpresa;
        window.idSucursal = idSucursal;
        window.idEmpresa = idEmpresa;
        window.latitud = latitud;
        window.longitud = longitud;
        window.direccionEmpresa;
        $("#cargandoEmp").show();
        $(".waitMe_content").css('top','4px !important');
        $("#cargandoEmp").waitMe( {
            //none, rotateplane, stretch, orbit, roundBounce, win8, 
            //win8_linear, ios, facebook, rotation, timer, pulse, 
            //progressBar, bouncePulse or img
            effect: 'timer',
                                //place text under the effect (string).
            text: 'Cargando informacion Empresa',
                                //background for container (string).
            bg: 'rgba(255,255,255)',
                                //color for background animation and text (string).
            color: '#000',
                                //change width for elem animation (string).
            sizeW: '',
                                //change height for elem animation (string).
            sizeH: ''
        });

        //$('#nombreEmp').text(nombre);
        self= this;
        window.template= _.template($('#VerMasTemplate').html());  
        window.datosFotos= template(window.fotoData);
        self.$el.append(template);                   
           // COnsulta json fotos
        // http://publitell.com/json/fotos.json/?utf8=%E2%9C%93&NombreComercial=Publitell%20ltda
            window.fotos= $.ajax( {
            url: "http://publitell.com/json/fotos.json/?utf8=%E2%9C%93&NombreComercial="+nombre,
                                type: "get",
                                crossDomain: true,
                                dataType: 'jsonp',
                                cache:true,
                                xhrFields: {
                                withCredentials: true
            },   
            success: function(data,status, error) {
             window.infoFotos = data;                         
            console.log(infoFotos.length);
            window.misdatofotos =  $.map(infoFotos, function(value, index ){
                    
                   $('#figure').append("<img src='http://publitell.com/system/fotos/"+ infoFotos[index].enterprise_id + '/' + infoFotos[index].foto_file_name +  "' />");        
            });                    

            misdatofotos.forEach(function(dataFoto){
              console.log("forEach");
                  window.fotoData = dataFoto;
                });  
            },
        });       
        window.scrollTo(0,0);
        /////////////// Consulta a json con info de la empresa ///////////////
        window.infoEmpresa = $.ajax( {
            url:"http://publitell.com/json/verMas.json?idSucursal="+idSucursal+"",
                                    type: "get",
                                    crossDomain: true,
                                    dataType: 'jsonp',
            success: function(data,status, error) {

                window.articulo = data;
                window.mision = (data[3]);
                window.direccionEmpresa = data[10];
                window.departamento = data[6] + " " + data[7] + " " + data[8];
                window.telefonoFijo = data[14];
                if(telefonoFijo==""){
                    telefonoFijo="No registra"
                }
                window.celularUno=data[15];
                if(celularUno==""){
                    celularUno="No registra"
                }
                window.celularDos=data[16];
                if(celularDos==""){
                    celularDos="No registra"
                }
                //window.telefonocelular = data[12] + " " + data[13] + " "+ data[14];
                if (!data[4]){
                        document.getElementById('logoMision').src ="http://publitell.com/system/logo_solo.png";
                    }else{
                        document.getElementById('logoMision').src ="http://publitell.com/system/logos/"+idEmpresa+"/"+data[4];                        
                    }
                if (!mision){
                    $("#mision").css("height", "70px");
                    $("#mision").text("Sin descripcion");

                }else{
                    $("#mision").text(mision);    
                }
                
                $("#vermas11").text(data[10]);
                window.insta= data[20]
                window.webs = data[18];
                if(webs==""){
                    webs="No registra"
                }
                window.barrio = data[6].concat(",",data[7],",",data[8],",",data[9]);
                window.datacatorce = data[15];
                window.dataquince = data[16];
                window.email=data[17];
                if(email==""){
                    email="No registra"
                }
                if(data[14]!="" && data[15]!="" &&  data[16]!=""){
                    $("#guion1").text("-"); 
                    $("#guion2").text("-");
                    $('#vermas13').html("<a href='tel:"+data[14]+"'>"+data[14]+"</a>");
                    $('#vermas20').html("<a href='tel:"+data[15]+"'>"+data[15]+"</a>");
                    $('#vermas21').html("<a href='tel:"+data[16]+"'>"+data[16]+"</a>");
                }else if (data[14]!="" && data[15]!=""){
                   $("#guion1").text("-");
                   $('#vermas13').html("<a href='tel:"+data[14]+"'>"+data[14]+"</a>");
                   $('#vermas20').html("<a href='tel:"+data[15]+"'>"+data[15]+"</a>");
                }else if(data[15]!="" && data[16]!=""){
                    $("#guion2").text("-");
                    $('#vermas20').html("<a href='tel:"+data[15]+"'>"+data[15]+"</a>");
                    $('#vermas21').html("<a href='tel:"+data[16]+"'>"+data[16]+"</a>");
                }
                window.sharedTel = data[15];
                $("#info2ver").html("<a onclick=\"window.open('http://"+webs+"', '_system', 'location=no');\"><img src='img/vermas2.png' /><p id='vermas14'></p><p id='vermas15'>hotelcampestreelcampanario.com.co</p></a>");
                $("#vermas12").text(barrio);

                latitudEmp = (data[11]);
                longitudEmp = (data[12]);
                $("#vermas14").text(data[17]);
                $("#vermas15").text(data[18]);

                aComoLlegar = document.getElementById('aComoLlegar');
                aComoLlegar.href ="#comoLlegar"+"/"+latitud+"/"+longitud+"/"+nombre+"/"+window.direccionEmpresa+"/"+telefonoFijo+"/"+celularUno+"/"+celularDos+"/"+email+"/"+webs+"/"+barrio;
                            
                var empresa = nombre.replace(/\s/g,"%20");
                if(telefonoFijo!="No registra" && celularUno!="No registra" && celularDos=="No registra"){
                    //alert('No se encuentra numeros de contacto para esta empresa');
                    $('#telefonoFijoCon').html("<a href='tel:"+telefonoFijo+"'>"+telefonoFijo+"</a>");
                    $('#celularUnoCon').html("<a href='tel:"+celularUno+"'>"+celularUno+"</a>");
                    $('#iconover3').addClass( "numerosContacto_open");
                    $('#iconover3').html("<img src='img/llamarver.png'/>");
                }else if(telefonoFijo!="No registra" && celularDos!="No registra" && celularUno=="No registra"){
                    //alert('No se encuentra numeros de contacto para esta empresa');
                    $('#telefonoFijoCon').html("<a href='tel:"+telefonoFijo+"'>"+telefonoFijo+"</a>");
                    $('#celularUnoCon').html("<a href='tel:"+celularDos+"'>"+celularDos+"</a>");
                    $('#iconover3').addClass( "numerosContacto_open");
                    $('#iconover3').html("<img src='img/llamarver.png'/>");
                }else if(celularUno!="No registra" && celularDos!="No registra" && telefonoFijo=="No registra"){
                    $('#celularUnoCon').html("<a href='tel:"+celularUno+"'>"+celularUno+"</a> -  <a href='tel:"+celularDos+"'>"+celularDos+"</a>");
                    $('#iconover3').addClass( "numerosContacto_open");
                    $('#iconover3').html("<img src='img/llamarver.png'/>");
                }else if (telefonoFijo!="No registra" && celularUno!="No registra" && celularDos!="No registra") {
                    //alert('No se encuentra numeros de contacto para esta empresa');
                    $('#celularUnoCon').html("<a href='tel:"+celularUno+"'>"+celularUno+"</a> -  <a href='tel:"+celularDos+"'>"+celularDos+"</a>");
                    $('#telefonoFijoCon').html("<a href='tel:"+telefonoFijo+"'>"+telefonoFijo+"</a>");
                    $('#iconover3').addClass( "numerosContacto_open");
                    $('#iconover3').html("<img src='img/llamarver.png'/>");
                }else if(telefonoFijo=="No registra" && celularUno=="No registra" && celularDos!="No registra"){
                    $('#iconover3').html("<a href='tel:"+celularDos+"'><img src='img/llamarver.png'/></a>");
                }else if(telefonoFijo=="No registra" && celularUno!="No registra" && celularDos=="No registra"){
                    $('#iconover3').html("<a href='tel:"+celularUno+"'><img src='img/llamarver.png'/></a>");
                }else if(telefonoFijo!="No registra" && celularUno=="No registra" && celularDos=="No registra"){
                    $('#iconover3').html("<a href='tel:"+telefonoFijo+"'><img src='img/llamarver.png'/></a>");
                }else{
                    alert('No se encuentra numeros de contacto para esta empresa');                    
                }

                
                //$('#iconover3').html("<a href='tel:"+sharedTel+"'><img src='img/llamarver.png'/></a>");

                if(data[17]==""){
                    $('#iconover2').html("<a id='compartirCorreo'><img src='img/correo-desactivado.png'/></a>");
                }else{
                   $('#iconover2').html("<a id='compartirCorreo' href='mailto:"+ data[17]+ "'?subject=contacto'><img src='img/icomsj.png'/></a>"); 
                }
                //if(data[18]==""){
                //    $('#iconover4').html("<div><img src='img/compartir-desactivado.png'/></div>");

                //}else{
                   $('#iconover4').html("<div onclick=\"window.plugins.socialsharing.share('Estoy utilizando app publitell y encontre esto esta genial', null, null, '" +'publitell.com/enterprises/'+empresa+"')\"><img src='img/compartirver.png'/></div>"); 
                //}
                if(data[20]==""){
                    $('#iconover5').html("<a><img src='img/twitter-desactivado.png'/></a>");             
                }else{
                    
                    $('#iconover5').html("<a onclick=\"{window.open('https://twitter.com/"+ (data[20])+ "', '_system', 'location=no');}\"><img src='img/twitter.png'/></a>");
                }
                if(data[19]==""){
                    $('#iconover6').html("<a><img src='img/facebook-desactivado.png'/></a>");
                }else{
                    $('#iconover6').html("<a onclick=\"{window.open('https://www.facebook.com/"+ (data[19]) +  "', '_system', 'location=no');}\"><img src='img/facebook.png'/></a>");                    
                }
                if(data[21]==""){
                    $('#iconover7').html("<a><img src='img/google-desactivado.png'/></a>");
                }else{
                    $('#iconover7').html("<a onclick=\"{window.open('https://plus.google.com/" +(data[21]) + "   ', '_system', 'location=no');}\"><img src='img/ico-google.png'/></a>");
                }
                window.vecInfoEmpresa = articulo.map(function(items) {
                    
                    /*$("#vermas11").text(items[4]);
                    $("#vermas12").text(barrio);
                    
                    //$("#vermas13").text(telefonos);
                    var email = items[10];
                    $("#vermas14").text(email);
                    var webpage = items[11];
                    $("#vermas15").text(webpage);*/
                  
                });
                  
                    
        window.myLatlng = new google.maps.LatLng(latitud,longitud);
        mapOptions = {
            zoom: 15,
            center: myLatlng
        }

        var image = new google.maps.MarkerImage(
        'img/ico-marker-1.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );

        var shape = {
        coord: [
            2,0,3,1,5,2,7,3,8,4,10,5,11,6,29,7,29,8,29,9,29,10,29,11,29,12,
            29,13,29,14,28,15,27,16,26,17,25,18,23,19,21,20,20,21,26,22,26,
            23,26,24,26,25,26,26,26,27,25,28,24,29,23,30,21,31,20,32,18,33,
            17,34,15,35,15,36,15,37,15,38,15,39,15,40,15,41,15,42,14,42,14,
            41,13,40,12,39,10,38,8,37,7,36,6,35,5,34,4,33,4,32,4,31,4,30,4,
            29,5,28,10,27,8,26,7,25,5,24,4,23,3,22,3,21,3,20,3,19,3,18,3,17,
            3,16,11,15,9,14,8,13,6,12,4,11,3,10,2,9,1,8,0,7,0,6,0,5,0,4,0,3,
            0,2,0,1,0,0,2,0
        ]
        , type: 'poly'
    };


        mapMarker = new google.maps.Map(document.getElementById('mapaver'), mapOptions);
        marker = new google.maps.Marker( {
            position: myLatlng,
            map: mapMarker,
            title: nombre,
            icon: image,
            shape: shape
        }
        );
        var infowindow = new google.maps.InfoWindow( {
            content: nombre
        }
        )
                        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(marker.get('map'), marker);
        }
        );

        // script street view
        var LatLngEmpresa = new google.maps.LatLng(latitud,longitud);
        var panoramaOptions = {
            position: LatLngEmpresa,
                                    pov: {
                heading: 165,
                pitch: 0
            },
                                    zoom: 1
        };
        var myPano = new google.maps.StreetViewPanorama(
                            document.getElementById('streetVista'),
                            panoramaOptions);
        myPano.setVisible(true);
                
            },
            
        });
        /////////////// Consulta a json con info productos de la empresa  ///////////////
        window.infor2= $.ajax( {
            url: "http://publitell.com/json/servicios.json/?utf8=%E2%9C%93&NombreComercial="+nombre+"&",
                                type: "get",
                                crossDomain: true,
                                dataType: 'jsonp',        
                                success: function(data,status, error) {
                        window.infoIndice = data;
                        window.infoservs = infoIndice.map(function(items) {
                    return {

                        titulo: items.titulo,
                        descripcion : items.descripcion,
                        foto_file_name : items.foto_file_name,
                    }            
                });

                $('#cargandoEmp').waitMe('hide');
                $('#cargandoEmp').hide();

                window.tamanioVec = infoservs.length;
                window.imagen = (infoservs[0]['foto_file_name']);
                window.empemp= idEmpresa;
                window.ruta ="http://publitell.com/system/fotos/"+empemp+"/"+imagen;
                
                /*$('#service1').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[0]['foto_file_name']) +  "' />");
                $('#service2').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[1]['foto_file_name']) +  "' />");
                $('#service3').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[2]['foto_file_name']) +  "' />");
                $('#service4').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[3]['foto_file_name']) +  "' />");
                $('#service5').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[4]['foto_file_name']) +  "' />");
                $('#service6').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[5]['foto_file_name']) +  "' />");
                /*var a = document.getElementById('fanUno'); //or grab it by tagname etc
                if (infoservs[0]['foto_file_name']!=null) {
                    //a.href = "http://publitell.com/system/servicios/"+empemp+"/"+imagen;
                    $('#service1').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + imagen +  "' />"); 
                  //  document.getElementById('imgVerMasUno').src ="http://publitell.com/system/servicios/"+empemp+"/"+imagen;
                }else{
                    //a.href = "http://publitell.com/system/logo_solo.png";
                    document.getElementById('imgVerMasUno').src ="http://publitell.com/system/logo_solo.png";
                }
                var b = document.getElementById('fanDos'); //or grab it by tagname etc
                if (infoservs[1]['foto_file_name']!=null) {
                    //b.href = "http://publitell.com/system/servicios/"+empemp+"/"+infoservs[1]['foto_file_name'];
                    $('#service2').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + infoservs[1]['foto_file_name'] +  "' />"); 
                }else{
                    //b.href = "http://publitell.com/system/logo_solo.png";
                    document.getElementById('imgVerMasDos').src ="http://publitell.com/system/logo_solo.png";
                }
                var c = document.getElementById('fanTres'); //or grab it by tagname etc
                if(infoservs[2]['foto_file_name']!=null){
                   // c.href = "http://publitell.com/system/servicios/"+empemp+"/"+infoservs[2]['foto_file_name'];
                   $('#service3').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + infoservs[2]['foto_file_name'] +  "' />"); 
                }else{
                    //c.href = "http://publitell.com/system/logo_solo.png";
                    document.getElementById('imgVerMasTres').src ="http://publitell.com/system/logo_solo.png";
                }
                var d = document.getElementById('fanCuatro'); //or grab it by tagname etc
                if (infoservs[3]['foto_file_name']!=null) {
                  //  d.href = "http://publitell.com/system/servicios/"+empemp+"/"+infoservs[3]['foto_file_name'];
                    $('#service4').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + infoservs[3]['foto_file_name'] +  "' />"); 
                }else{
                    //d.href = "http://publitell.com/system/logo_solo.png";
                    document.getElementById('imgVerMasCuatro').src ="http://publitell.com/system/logo_solo.png";
                }
                var e = document.getElementById('fanCinco'); //or grab it by tagname etc
                if (infoservs[4]['foto_file_name']!=null) {
                  //  e.href = "http://publitell.com/system/servicios/"+empemp+"/"+infoservs[4]['foto_file_name'];
                   $('#service5').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + infoservs[4]['foto_file_name'] +  "' />"); 
                }else{
                     //e.href = "http://publitell.com/system/logo_solo.png";
                     document.getElementById('imgVerMasCinco').src ="http://publitell.com/system/logo_solo.png";
                }
                var f = document.getElementById('fanSeis'); //or grab it by tagname etc
                window.uc=infoservs[5]['foto_file_name'];
                if (infoservs[5]['foto_file_name']!=null) {
                   // f.href = "http://publitell.com/system/servicios/"+empemp+"/"+infoservs[5]['foto_file_name'];
                   $('#service6').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + infoservs[5]['foto_file_name'] +  "' />"); 
                }else{
                    //f.href = "http://publitell.com/system/logo_solo.png";
                    document.getElementById('imgVerMasSeis').src ="http://publitell.com/system/logo_solo.png";
                }*/
                
                if(tamanioVec==1) {
                    $("#acordeonp1 a").text(infoservs[0]['titulo']);
                    $("#acordeonp1 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service1').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[0]['foto_file_name']) +  "' />");
                    $("#desc1").text(infoservs[0]['descripcion']);
                    $("#acordeonp2").remove();
                    $("#acordeonp3").remove();
                    $("#acordeonp4").remove();
                    $("#acordeonp5").remove();
                    $("#acordeonp6").remove();
                } else if (tamanioVec==2) {
                    $("#acordeonp1 a").text(infoservs[0]['titulo']);
                    $("#acordeonp1 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service1').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[0]['foto_file_name']) +  "' />");
                    $("#acordeonp2 a").text(infoservs[1]['titulo']);
                    $("#acordeonp2 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service2').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[1]['foto_file_name']) +  "' />");
                    $("#desc1").text(infoservs[0]['descripcion']);
                    $("#desc2").text(infoservs[1]['descripcion']);
                    $("#acordeonp3").remove();
                    $("#acordeonp4").remove();
                    $("#acordeonp5").remove();
                    $("#acordeonp6").remove();
                } else if (tamanioVec==3) {
                    $("#acordeonp1 a").text(infoservs[0]['titulo']);
                    $("#acordeonp1 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service1').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[0]['foto_file_name']) +  "' />");
                    $("#acordeonp2 a").text(infoservs[1]['titulo']);
                    $("#acordeonp2 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service2').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[1]['foto_file_name']) +  "' />");
                    $("#acordeonp3 a").text(infoservs[2]['titulo']);
                    $("#acordeonp3 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service3').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[2]['foto_file_name']) +  "' />");
                    $("#desc1").text(infoservs[0]['descripcion']);
                    $("#desc2").text(infoservs[1]['descripcion']);
                    $("#desc3").text(infoservs[2]['descripcion']);
                    $("#acordeonp4").remove();
                    $("#acordeonp5").remove();
                    $("#acordeonp6").remove();
                } else if (tamanioVec==4) {
                    $("#acordeonp1 a").text(infoservs[0]['titulo']);
                    $("#acordeonp1 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service1').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[0]['foto_file_name']) +  "' />");
                    $("#acordeonp2 a").text(infoservs[1]['titulo']);
                    $("#acordeonp2 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service2').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[1]['foto_file_name']) +  "' />");
                    $("#acordeonp3 a").text(infoservs[2]['titulo']);
                    $("#acordeonp3 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service3').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[2]['foto_file_name']) +  "' />");
                    $("#acordeonp4 a").text(infoservs[3]['titulo']);
                    $("#acordeonp4 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service4').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[3]['foto_file_name']) +  "' />");
                    $("#desc1").text(infoservs[0]['descripcion']);
                    $("#desc2").text(infoservs[1]['descripcion']);
                    $("#desc3").text(infoservs[2]['descripcion']);
                    $("#desc4").text(infoservs[3]['descripcion']);
                    $("#acordeonp5").remove();
                    $("#acordeonp6").remove();
                } else if (tamanioVec==5) {
                    $("#acordeonp1 a").text(infoservs[0]['titulo']);
                    $("#acordeonp1 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service1').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[0]['foto_file_name']) +  "' />");
                    $("#acordeonp2 a").text(infoservs[1]['titulo']);
                    $("#acordeonp2 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service2').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[1]['foto_file_name']) +  "' />");
                    $("#acordeonp3 a").text(infoservs[2]['titulo']);
                    $("#acordeonp3 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service3').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[2]['foto_file_name']) +  "' />");
                    $("#acordeonp4 a").text(infoservs[3]['titulo']);
                    $("#acordeonp4 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service4').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[3]['foto_file_name']) +  "' />");
                    $("#acordeonp5 a").text(infoservs[4]['titulo']);
                    $("#acordeonp5 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service5').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[4]['foto_file_name']) +  "' />");
                    $("#desc1").text(infoservs[0]['descripcion']);
                    $("#desc2").text(infoservs[1]['descripcion']);
                    $("#desc3").text(infoservs[2]['descripcion']);
                    $("#desc4").text(infoservs[3]['descripcion']);
                    $("#desc5").text(infoservs[4]['descripcion']);
                    $("#acordeonp6").remove();
                } else if(tamanioVec==6) {
                    $("#acordeonp1 a").text(infoservs[0]['titulo']);
                    $("#acordeonp1 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service1').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[0]['foto_file_name']) +  "' />");
                    $("#acordeonp2 a").text(infoservs[1]['titulo']);
                    $("#acordeonp2 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service2').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[1]['foto_file_name']) +  "' />");
                    $("#acordeonp3 a").text(infoservs[2]['titulo']);
                    $("#acordeonp3 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service3').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[2]['foto_file_name']) +  "' />");
                    $("#acordeonp4 a").text(infoservs[3]['titulo']);
                    $("#acordeonp4 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service4').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[3]['foto_file_name']) +  "' />");
                    $("#acordeonp5 a").text(infoservs[4]['titulo']);
                    $("#acordeonp5 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service5').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[4]['foto_file_name']) +  "' />");
                    $("#acordeonp6 a").text(infoservs[5]['titulo']);
                    $("#acordeonp6 a").append('<span class="icon"><img src="img/desplegable.png"/></span>');
                    $('#service6').append("<img src='http://publitell.com/system/servicios/"+ empemp + '/' + (infoservs[5]['foto_file_name']) +  "' />");
                    $("#desc1").text(infoservs[0]['descripcion']);
                    $("#desc2").text(infoservs[1]['descripcion']);
                    $("#desc3").text(infoservs[2]['descripcion']);
                    $("#desc4").text(infoservs[3]['descripcion']);
                    $("#desc5").text(infoservs[4]['descripcion']);
                    $("#desc6").text(infoservs[5]['descripcion']);

                }
            },

        });


      
        
        // Cierra Consulta json Fotos
        $("#fotoGaleria").css('position', 'relative');
        //document.getElementById("compartirCorreo").href ="mailto:prueba@publitell.com?subject=Contacto";
        $("#mapavista").hide();
        $('#resultadosCerca').remove();
        $('#mapaEmpresa').remove();
        $("#mostrarMapa").remove();
        $('#mapavistacerca').remove();
        $("#map_panel").remove();
        $(".submenuu").remove();
        $("#submenu2").remove();
        $("#streetVistaLlegar").remove();
        $("#rutaOps").remove();
        $("#directions_panel").remove();
        $(".footerr3G").show();
        $("#nombreEmpresa").text(nombre);
        $('footer').hide();
        $('#footerllegarVerMas').show();

        $("#footerMapa").hide();
        $('#btngps').hide();
        $("#btngps").css('width', '37%');
        $('#btnllevame').show();
        $('#btncerca').hide();
        $('#itemscenter').hide();
        $('#contenedor1').hide();
        $('#contenedor2').hide();
        $('.contentr1').hide();
        $('#contenedor2').show().css('margin-bottom','55px');
        $('#w').hide();
        $('#slidergalery').show();
        $('.ui-content').css('margin-top', '0');
        $('#contentContador').hide();
        $('#noresultados').hide();
        $('.slides').css('margin','0');
        $('.slides').css('padding','0');
        $('.slides').css('list-style','none');

        
        //script galeria flexsilder para ver mas      


        $('div#slidergalery').css('overflow: hidden;');
        $('div#slidergalery figure img').css('width: 20%;');
        $('div#slidergalery figure img').css('float: left;');

        $('div#slidergalery figure').css('position: relative;');
        $('div#slidergalery figure').css('width: 500%;');
        $('div#slidergalery figure').css('margin: 0;');
        $('div#slidergalery figure').css('left: 0;');
        $('div#slidergalery figure').css('text-align: left;');
        $('div#slidergalery figure').css('display:inline-block;');
        $('div#slidergalery figure').css('height:36%;');
        $('div#slidergalery figure').css('animation:<10s></10s> slidy infinite;');
        


        
        //script galeria flexsilder para ver mas    
        $( '.panel-content' ).hide();
        $( '.panel-contentUno' ).show();
        // Preparing the DOM
        // -- Update the markup of accordion container 
        $( '.accordion' ).attr( {
            role: 'tablist',
            multiselectable: 'true'
        });
        // -- Adding ID, aria-labelled-by, role and aria-labelledby attributes to panel content
        $( '.panel-content' ).attr( 'id', function( IDcount ) {
            return 'panel-' + IDcount;
        });
        $( '.panel-contentUno' ).attr( 'id', function( IDcount ) {
            return 'panel-' + IDcount;
        });
        $( '.panel-content' ).attr( 'aria-labelledby', function( IDcount ) {
            return 'control-panel-' + IDcount;
        });
        $( '.panel-contentUno' ).attr( 'aria-labelledby', function( IDcount ) {
            return 'control-panel-' + IDcount;
        });
        $( '.panel-content' ).attr( 'aria-hidden' , 'true' );
        $( '.panel-contentUno' ).attr( 'aria-hidden' , 'false' );
        // ---- Only for accordion, add role tabpanel
        $( '.accordion .panel-content' ).attr( 'role' , 'tabpanel' );
        $( '.accordion .panel-contentUno' ).attr( 'role' , 'tabpanel' );
        // -- Wrapping panel title content with a <a href="">
        $( '.panel-title' ).each(function(i) {
            // ---- Need to identify the target, easy it's the immediate brother
            $target = $(this).next( '.panel-content' )[0].id;
            // ---- Creating the link with aria and link it to the panel content
            $link = $( '<a>', {
                'href': '#' + $target,
                                            'aria-expanded': 'false',
                                            'aria-controls': $target,
                                            'id' : 'control-' + $target
            });
            // ---- Output the link
            $(this).wrapInner($link);
        } );
         $( '.panel-titleUno' ).each(function(i) {
            // ---- Need to identify the target, easy it's the immediate brother
            $target = $(this).next( '.panel-contentUno' )[0].id;
            // ---- Creating the link with aria and link it to the panel content
            $link = $( '<a>', {
                'href': '#' + $target,
                                            'aria-expanded': 'true',
                                            'aria-controls': $target,
                                            'id' : 'control-' + $target
            }
            );
            // ---- Output the link
            $(this).wrapInner($link);
        });
        // Optional : include an icon. Better in JS because without JS it have non-sense.
        $( '.panel-title a' ).append('<span class="icon"><img src="img/desplegable.png"/></span>');
        $( '.panel-titleUno a' ).append('<span class="icon"><img src="img/desplegable.png"/></span>');
        $('.panel-titleUno a').attr( 'aria-expanded' , true ).addClass( 'activee' ).parent().next( '.panel-contentUno' ).slideDown(200).attr( 'aria-hidden' , 'false');
        // Now we can play with it
        $( '.panel-title a' ).click(function() {
            if ($(this).attr( 'aria-expanded' ) == 'false') {
                //If aria expanded is false then it's not opened and we want it opened !
                // -- Only for accordion effect (2 options) : comment or uncomment the one you want
                // ---- Option 1 : close only opened panel in the same accordion
                //      search through the current Accordion container for opened panel and close it, remove class and change aria expanded value
                $(this).parents( '.accordion' ).find( '[aria-expanded=true]' ).attr( 'aria-expanded' , false ).removeClass( 'active' ).parent().next( '.panel-content' ).slideUp(200).attr( 'aria-hidden' , 'true');
                // Option 2 : close all opened panels in all accordion container
                //$('.accordion .panel-title > a').attr('aria-expanded', false).removeClass('active').parent().next('.panel-content').slideUp(200);
                // Finally we open the panel, set class active for styling purpos on a and aria-expanded to "true"
                $(this).attr( 'aria-expanded' , true ).addClass( 'active' ).parent().next( '.panel-content' ).slideDown(200).attr( 'aria-hidden' , 'false');
            } else {
                // The current panel is opened and we want to close it
                $(this).attr( 'aria-expanded' , false ).removeClass( 'active' ).parent().next( '.panel-content' ).slideUp(200).attr( 'aria-hidden' , 'true');
                ;
            }
            // No Boing Boing
            return false;
        });        
        $( '.panel-titleUno a' ).click(function() {
            if ($(this).attr( 'aria-expanded' ) == 'true') {
                $(this).parents( '.accordion' ).find( '[aria-expanded=true]' ).attr( 'aria-expanded' , false ).addClass( 'activee' ).parent().next( '.panel-contentUno' ).slideDown(200).attr( 'aria-hidden' , 'false');
                // Option 2 : close all opened panels in all accordion container
                //$('.accordion .panel-title > a').attr('aria-expanded', false).removeClass('active').parent().next('.panel-content').slideUp(200);
                // Finally we open the panel, set class active for styling purpos on a and aria-expanded to "true"
                $(this).attr( 'aria-expanded' , false ).removeClass( 'activee' ).parent().next( '.panel-contentUno' ).slideUp(200).attr( 'aria-hidden' , 'true');
            } else {
                // The current panel is opened and we want to close it
               $(this).attr( 'aria-expanded' , true ).addClass( 'activee' ).parent().next( '.panel-contentUno' ).slideDown(200).attr( 'aria-hidden' , 'false');
                ;
            }
            // No Boing Boing
            return false;
        });
        
        
        
    }
}
);
///////////////////////////// Vista cerca de mi ////////////////////////////////
cercaDeMi = Backbone.View.extend( {
    initialize: function() {
        this.$el;
    },   
    cerca:function() {
        enlacee = "";
        self= this;
        var template = _.template($('#cercaDeMiTemplate').html());
        self.$el.append(template);
        console.log(videosData);
        $("#info2ver").remove();
        $("#mapaver").remove();
        $(".iconosver").remove();
        $(".titulosver").remove();
        $("#info1ver").remove();
        $("#info1ver").remove();
        $("#descripver").remove();
        $(".contentr1").remove();
        $("#streetVista").remove();
        $(".container").remove();
        $(".flexslider").remove();
        $("#titulover").remove();
        $("#map_panel").remove();
        $("#rutaOps").remove();
        $("#footer2").remove();
        $("#streetVistaLlegar").remove();
        $(".submenuu").remove();
        $('#cargandoEmp').hide();
        $("#footerMapa").hide();
        $("#footerMapa").css("display", "none");
        $("footer").show();
        $('#mapavistacerca').show();
        $('#mapavista').hide();
        $('#contenedor1').hide();
        $('#itemscenter').hide();
        $('.contentr1').hide();
        $('#contenedor2').show().css('margin-bottom','65px');
        $('#contentContador').hide();
        $('#home').css('background', '#fff');
        $('.ui-content').css('margin-top', '0');
        $('#w').hide();
        $('#slidergalery').hide();
        $('#regresar1').show();
        $('#noresultados').hide();
        $('#espacioresultados').css('height','49px')
        $('#footerCerca').show();
        window.lupa=12;
        var map;
        var mapOptions = {
            zoom: lupa
        };

        var map = new google.maps.Map(document.getElementById('mapavistacerca'),
                        mapOptions);

        window.place2 = new Array();
        window.latitudes = new Array();
        window.longitudes = new Array();
        window.latilongi = new Array();
        window.codigo = new Array();
        window.logoEmp = new Array();
        window.planes = new Array();
        window.empresa = new Array();
        window.direcciones = new Array();
        window.barrios = new Array();
        window.telefonos = new Array();
        window.celularesUno = new Array();
        window.emails = new Array();
        window.webs = new Array();

        //$('.login-control').hide();

         if(videosData != ""){

         for (var i = 0; i < videosData.length; i++) {
        place2.push(videosData[i]['title']);
        latitudes.push(videosData[i]['latitud']);
        longitudes.push(videosData[i]['longitud']);
        codigo.push(videosData[i]['sucursal']);
        empresa.push(videosData[i]['empresa']);
        logoEmp.push(videosData[i]['logo']);
        latilongi.push(new google.maps.LatLng(latitudes[i],longitudes[i]));
        planes.push(videosData[i]['plan']);
        direcciones.push(videosData[i]['direccion']);
        barrios.push(videosData[i]['departamento']+","+videosData[i]['municipio']+","+videosData[i]['barrio']);
        telefonos.push(videosData[i]['telefono']);
        celularesUno.push(videosData[i]['celular1']);
        emails.push(videosData[i]['email']);
        webs.push(videosData[i]['web']);
        };

        var image = new google.maps.MarkerImage(
        'img/markerr2.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );

    var image2 = new google.maps.MarkerImage(
        'img/ico-marker-1.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );

    var image3 = new google.maps.MarkerImage(
        'img/ico-marker-3.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );

 
    var shape = {
        coord: [
            2,0,3,1,5,2,7,3,8,4,10,5,11,6,29,7,29,8,29,9,29,10,29,11,29,12,
            29,13,29,14,28,15,27,16,26,17,25,18,23,19,21,20,20,21,26,22,26,
            23,26,24,26,25,26,26,26,27,25,28,24,29,23,30,21,31,20,32,18,33,
            17,34,15,35,15,36,15,37,15,38,15,39,15,40,15,41,15,42,14,42,14,
            41,13,40,12,39,10,38,8,37,7,36,6,35,5,34,4,33,4,32,4,31,4,30,4,
            29,5,28,10,27,8,26,7,25,5,24,4,23,3,22,3,21,3,20,3,19,3,18,3,17,
            3,16,11,15,9,14,8,13,6,12,4,11,3,10,2,9,1,8,0,7,0,6,0,5,0,4,0,3,
            0,2,0,1,0,0,2,0
        ]
        , type: 'poly'
    };


    for(var i = 0; i < place2.length; i++){
        
        if(planes[i]=='Premium'){
           window.marker = new google.maps.Marker({
            position: latilongi[i], 
            map: map, 
            title: place2[i],
            icon: image2,
            shape: shape,
            cod : codigo[i],
            empresa : empresa[i],
            log: logoEmp[i],
            plan : planes[i],
            latitud : latitudes[i],
            longitud : longitudes[i],
            dir : direcciones[i],
            tel : telefonos[i],
            cel : celularesUno[i],
            email : emails[i],
            web : webs[i],
            barrio :barrios[i]
        });


        
        window.pop = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function(){    
        
            
            window.note =  this.title;
            window.codigoSuc = this.cod;
            window.codEmpresa = this.empresa;
            window.logoSuc = this.log;
            window.pl = this.plan;
            window.lati =  this.latitud;
            window.longi = this.longitud;
            window.direccion = this.dir;
            window.telefono = this.tel;
            if(telefono == "" || telefono== " "){
                telefono="No registra";
            }
            window.celular = this.cel;
            if(celular == "" || celular== " "){
                celular="No registra";
            }
            window.emai = this.email;
            if(emai == "" || emai== " "){
                emai="No registra";
            }
            window.web = this.web;
            if(web == "" || web== " "){
                web="No registra";
            }
            window.bar = this.barrio;
            window.TemporalTel="No registra";

        
                var contenido='<div class="ventana">'+
                '<div class="imgventana">'+
                    '<img src="'+logoSuc+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+
                        '<a href="#vermas/'+note+'/'+ codEmpresa +'/'+codigoSuc+'/'+lati+'/'+longi+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+email+'/'+web+'/'+bar+'"> Vermas </a>' + '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+email+'/'+webs+'/'+bar+'"> Trazar ruta </a>'+
                    '</div>'+
                '</div>'+
            '</div>';

            pop.setContent(contenido);
            pop.open(map, this);
            //popup[i].open(map, this);
            //for (var j = 0; j<popup.length; j++) {
               // popup.close();
             //   console('diego');               
           // };
           
            //popup.close(map, this);
        }); 
}else if(planes[i]=='Delux' || planes[i]=='Básico' || planes[i]=='Básico' || planes[i]=='Económico'){
    window.marker = new google.maps.Marker({
            position: latilongi[i], 
            map: map, 
            title: place2[i],
            icon: image2,
            shape: shape,
            cod : codigo[i],
            empresa : empresa[i],
            log: logoEmp[i],
            plan : planes[i],
            latitud : latitudes[i],
            longitud : longitudes[i],
            dir : direcciones[i],
            tel : telefonos[i],
            cel : celularesUno[i],
            email : emails[i],
            web : webs[i],
            barrio :barrios[i]
        });
        window.pop = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function(){    
            window.note =  this.title;
            window.codigoSuc = this.cod;
            window.codEmpresa = this.empresa;
            window.logoSuc = this.log;
            window.pl = this.plan;
            window.lati =  this.latitud;
            window.longi = this.longitud;
            window.direccion = this.dir;
            window.telefono = this.tel;
            if(telefono == "" || telefono== " "){
                telefono="No registra";
            }
            window.celular = this.cel;
            if(celular == "" || celular== " "){
                celular="No registra";
            }
            window.emai = this.email;
            if(emai == "" || emai== " "){
                emai="No registra";
            }
            window.web = this.web;
            if(web == "" || web== " "){
                web="No registra";
            }
            window.bar = this.barrio;
            window.TemporalTel="No registra";

        
                var contenido='<div class="ventana">'+
                '<div class="imgventana">'+
                    '<img src="'+logoSuc+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+
                        '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+email+'/'+webs+'/'+bar+'"> Trazar ruta </a>'+
                    '</div>'+
                '</div>'+
            '</div>';

            pop.setContent(contenido);
            pop.open(map, this);
            //popup[i].open(map, this);
            //for (var j = 0; j<popup.length; j++) {
               // popup.close();
             //   console('diego');               
           // };
           
            //popup.close(map, this);
        }); 

}else{
    window.marker = new google.maps.Marker({
            position: latilongi[i], 
            map: map, 
            title: place2[i],
            icon: image3,
            shape: shape,
            cod : codigo[i],
            empresa : empresa[i],
            log: logoEmp[i],
            plan : planes[i],
            latitud : latitudes[i],
            longitud : longitudes[i],
            dir : direcciones[i],
            tel : telefonos[i],
            cel : celularesUno[i],
            email : emails[i],
            web : webs[i],
            barrio :barrios[i]
        });


        window.pop = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function(){
            
            
            window.note =  this.title;
            window.codigoSuc = this.cod;
            window.codEmpresa = this.empresa;
            window.logoSuc = this.log;
            window.pl = this.plan;
            window.lati =  this.latitud;
            window.longi = this.longitud;
            window.direccion = this.dir;
            window.telefono = this.tel;
            if(telefono == "" || telefono== " "){
                telefono="No registra";
            }
            window.celular = this.cel;
            if(celular == "" || celular== " "){
                celular="No registra";
            }
            window.emai = this.email;
            if(emai == "" || emai== " "){
                emai="No registra";
            }
            window.web = this.web;
            if(web == "" || web== " "){
                web="No registra";
            }
            window.bar = this.barrio;
            window.TemporalTel="No registra";
        
            var contenido='<div class="ventana">'+
                '<div class="imgventana" >'+
                    '<img id="logoSuc" src="'+logoSuc+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+
                    '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular+'/'+TemporalTel+'/'+emai+'/'+web+'/'+bar+'">Trazar ruta</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
           pop.setContent(contenido);
            //popup.setContent(note +'<a href="#vermas/'+note+' "> Vermas </a>' + '<a href="#comoLlegar">Trazar ruta</a>');
            pop.open(map, this);
        }); 
}
    }
}else{
    console.log('data esta vacio');
}
//convertir string a numbers
window.onSuccess = function(position) {
    window.milatitud=position.coords.latitude ;
    window.milongitud= position.coords.longitude;
};
function onError(error) {
    alert('No se pudo tomar su ubicación, por favor active su gps');
    window.milatitud=4.35;
    window.milongitud= -74.04;
}
navigator.geolocation.getCurrentPosition(onSuccess, onError);

/*window.latitudespro = new Array();
window.longitudespro = new Array();

latitudespro.push(milatitud);
longitudespro.push(milongitud);

for(var i=0; i<latitudes.length; i++) { 
        latitudespro.push(parseFloat(latitudes[i]));
        longitudespro.push(parseFloat(longitudes[i]));
} 
window.latilongiaux=[];
       /*myLatlng = new google.maps.LatLng(4.135441438193667,-433.6320342257324);
        var popup;
        mapOptions = {
            zoom: 10,
            center: myLatlng
        }*/
        
        var imagePos = new google.maps.MarkerImage(
        'img/pegman-llanero.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );

 
    var shape = {
        coord: [
            2,0,3,1,5,2,7,3,8,4,10,5,11,6,29,7,29,8,29,9,29,10,29,11,29,12,
            29,13,29,14,28,15,27,16,26,17,25,18,23,19,21,20,20,21,26,22,26,
            23,26,24,26,25,26,26,26,27,25,28,24,29,23,30,21,31,20,32,18,33,
            17,34,15,35,15,36,15,37,15,38,15,39,15,40,15,41,15,42,14,42,14,
            41,13,40,12,39,10,38,8,37,7,36,6,35,5,34,4,33,4,32,4,31,4,30,4,
            29,5,28,10,27,8,26,7,25,5,24,4,23,3,22,3,21,3,20,3,19,3,18,3,17,
            3,16,11,15,9,14,8,13,6,12,4,11,3,10,2,9,1,8,0,7,0,6,0,5,0,4,0,3,
            0,2,0,1,0,0,2,0
        ]
        , type: 'poly'
    };


        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = new google.maps.LatLng(position.coords.latitude,
                                                                       position.coords.longitude);
                var infowindow = new google.maps.Marker( {
                    map: map,
                    position: pos,
                    title: 'tu posición',
                    icon: imagePos,
                    shape: shape,
                    animation: google.maps.Animation.BOUNCE
                }
                );
                map.setCenter(pos);
            }, function() {        
                //PROMEDIO DE LAT Y LON PARA CENTRAR EL MAPA
                /*window.Clat=0;
                window.Clon=0;
                for (j = 0; j < latitudespro.length; j++) {
                    latilongiaux[j] = new google.maps.LatLng(latitudespro[j], longitudespro[j]);
                    window.Clat = Clat + latitudespro[j];
                    window.Clon = Clon + longitudespro[j]; 
                }
                window.contador = j;
                window.latitud = Clat / j;
                window.longitud = Clon / j;

                //CENTRO EL MAPA
                window.centro = new google.maps.LatLng(latitud, longitud);*/

                var options = new google.maps.Marker( {
                    zoom: 10,
                    map: map,
                    position: new google.maps.LatLng(4.35,-74.04),
                    title:'Error: The Geolocation service failed',
                    icon: imagePos,
                    shape: shape,
                    animation: google.maps.Animation.BOUNCE
                });
                map.setZoom(13);
                map.setCenter(options.position);
                            }
            );
        } else {
            // Browser doesn't support Geolocation
            this.handleNoGeolocation(false);
        }
        return this;
    },
});
/////////////////////////////Vista mapa empresa  ////////////////////////////////
mapaEmpresa = Backbone.View.extend({
    initialize:function(){
        this.$el;
    },
    mostrarGeoEmpresa:function(lat,lon,nombre,idEmp,idSuc ,imagen,direccion,departamento,municipio,barrio,telefono,celular1,email,web,plan){

        $("#empSinVerMas").html("<p>"+ "<strong>Lo sentimos !!!</strong>"+ "</br>" +  "la Empresa " + nombre +  "</br>" + " No tiene información adicional");
        self= this;
        var template = _.template($('#cercaDeMiInicioTemplate').html());
        self.$el.append(template);
        window.lat = lat;
        window.lon = lon;
        var nombre = nombre;
        var idEmp= idEmp;
        var idSuc = idSuc;
        var imagen = imagen;
        var barrio = departamento + municipio + barrio;

        mVerMas = document.getElementById('mVerMas');
        //#vermas/'+note+'/'+ idEmp +'/'+idSuc+'/'+lati+'/'+longi+'/'+direccion+'/'+telefono+'/'+celular1+'/'+TemporalTel+'/'+email+'/'+web+'/'+barrio+'"
        mVerMas.href="#vermas"+"/"+nombre+"/"+idEmp+"/"+idSuc+"/"+lat+"/"+lon+"/"+direccion+"/"+telefono+"/"+celular1+"/"+"No existe"+"/"+email+"/"+web+"/"+barrio;
        
        rComoLlegar = document.getElementById('rComoLlegar');
        rComoLlegar.href ="#comoLlegar"+"/"+lat+"/"+lon+"/"+nombre+"/"+direccion+"/"+telefono+"/"+celular1+"/"+'No existe'+"/"+email+"/"+web+"/"+barrio;
        $("#info2ver").remove();
        $("#mapaver").remove();
        $(".iconosver").remove();
        $(".titulosver").remove();
        $("#info1ver").remove();
        $("#info1ver").remove();
        $("#descripver").remove();
        $(".contentr1").remove();
        $("#streetVista").remove();
        $(".container").remove();
        $(".flexslider").remove();
        $("#titulover").remove();
        $("#map_panel").remove();
        $("#map_panel").remove();
        $("#map_panel").remove();
        $("#submenu2").remove();
        $("#rutaOps").remove();
        $("#streetVistaLlegar").remove();
        $("#directions_panel").remove();
        $("#streetVistaLlegar").remove();        
        $("#footerllegar").hide();        
        $("#footerllegarVerMas").show();
        $("#btngps").hide();
        $("#footerMapa").show();
        $("#footerMapa").css("display", "inline-block");

        $("#rComoLlegar").show();
        $("#rComoLlegar").css("display", "inline-block");
        $("#footerr3").show();
        $("footer").hide();        
        
        $('#cargandoEmp').hide();        
        $('#mapavistacerca').hide();
        $('#mapaEmpresa').show();
        $('#mapavista').hide();
        $('#contenedor1').hide();
        $('#itemscenter').hide();
        $('.contentr1').hide();
        $('#contenedor2').show().css('margin-bottom','65px');
        $('#contentContador').hide();
        $('#home').css('background', '#fff');
        $('.ui-content').css('margin-top', '0');
        $('#w').hide();
        $('#slidergalery').hide();
        $('#regresar1').show();
        $('#noresultados').hide();
        $('#espacioresultados').css('height','49px');
        
        //$('.login-control').remove();
        //$('.login-control').css('display','none');
        
        if(plan=="Premium"){
            
            $('#mVerMasDesactivado').hide();
            $('#mVerMas').show(); 
            $("#rComoLlegar").show();
        }else{
            $('#mVerMasDesactivado').show();
            $('#mVerMasDesactivado').css("display", "inline-block");
            $('#mVerMasDesactivado').css("width", "49.9%");
            $('#mVerMasDesactivado').css("height", "68px");
            $('#mVerMasDesactivado').css("background", "#979695");
            $('#mVerMas').remove();    
            $("#rComoLlegar").show();     
        }
                                        
        //window.milogoEmp = "http://publitell.com/system/logos/"+idemp+"/"+imagen;
        
        if (imagen==undefined || imagen=='logo_solo.png'){
                        window.milogoEmp = "http://publitell.com/system/logo_solo.png";
                    }else{                        
                        window.milogoEmp = "http://publitell.com/system/logos/"+idEmp+"/"+imagen;
                    }
        window.myLatlng = new google.maps.LatLng(lat,lon);
        mapOptions = {
            zoom: 15,
            center: myLatlng
        }

      var image = new google.maps.MarkerImage(
        'img/markerr2.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );

    var image2 = new google.maps.MarkerImage(
        'img/ico-marker-1.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );

    var image3 = new google.maps.MarkerImage(
        'img/ico-marker-3.png'
        , new google.maps.Size(30,43)
        , new google.maps.Point(0,0)
        , new google.maps.Point(15,43)
    );
        if(plan=='Premium'){
            var mapMarker = new google.maps.Map(document.getElementById('mapaEmpresa'), mapOptions);
        marker = new google.maps.Marker( {
            position: myLatlng,
            map: mapMarker,
            title: nombre,
            icon: image2,
            codigo: idEmp,
            sucursal : idSuc,            
            imagen : milogoEmp,
            lati : lat,
            longi : lon,
            direccion : direccion,
            departamento : departamento,
            municipio : municipio,
            barrio : barrio,
            telefono : telefono,
            celular1 : celular1,
            email : email,
            web : web,
            plan: plan
        }

        );
        var infowindow = new google.maps.InfoWindow( {
            content: nombre
        }
        )
                       
        
        /*google.maps.event.addListener(marker, 'mousedown', function(){
            this.setIcon(image2);
        });*/
        
        google.maps.event.addListener(marker, 'click', function(){
            var popup = new google.maps.InfoWindow();
            if(!popup){
                popup = new google.maps.InfoWindow();
            }
            window.note =  this.title;
            window.lati = this.lati;
            window.longi = this.longi;
            window.idEmp = this.codigo;
            window.idSuc = this.sucursal;
            window.imagenLogo = this.imagen;
            window.direccion  =this.direccion;
            window.barrio =  this.departamento+","+this.municipio+","+this.barrio;
            window.telefono = this.telefono;
            window.celular1 = this.celular1;
            window.email = this.email;
            window.web = this.web;
            window.plan= this.plan;
            window.TemporalTel = "No existe";

                var contenido='<div class="ventana">'+
                '<div class="imgventana">'+
                    '<img src="'+imagenLogo+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+//"comoLlegar/:latitud/:longitud/:nombre/:direccion/:telefonoFijo/:celularUno/:celularDos/:email/:web/:barrio":"comoLlegar",
                        '<a href="#vermas/'+note+'/'+ idEmp +'/'+idSuc+'/'+lati+'/'+longi+'/'+direccion+'/'+telefono+'/'+celular1+'/'+TemporalTel+'/'+email+'/'+web+'/'+barrio+'"> Vermas </a>' + '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular1+'/'+TemporalTel+'/'+email+'/'+webs+'/'+barrio+'">Trazar ruta</a>'+
                    '</div>'+
                '</div>'+
            '</div>';          
           popup.setContent(contenido);
            //popup.setContent(note +'<a href="#vermas/'+note+' "> Vermas </a>' + '<a href="#comoLlegar">Trazar ruta</a>');
            popup.open(mapMarker, this);
        });
}else if(plan=='Delux' || plan=='Básico' || plan=='Económico' ){
     var mapMarker = new google.maps.Map(document.getElementById('mapaEmpresa'), mapOptions);
        marker = new google.maps.Marker( {
            position: myLatlng,
            map: mapMarker,
            title: nombre,
            icon: image2,
            codigo: idEmp,
            sucursal : idSuc,            
            imagen : milogoEmp,
            lati : lat,
            longi : lon,
            direccion : direccion,
            departamento : departamento,
            municipio : municipio,
            barrio : barrio,
            telefono : telefono,
            celular1 : celular1,
            email : email,
            web : web,
            plan: plan
        });
        var infowindow = new google.maps.InfoWindow( {
            content: nombre
        }
        )
        /*google.maps.event.addListener(marker, 'mousedown', function(){
            this.setIcon(image2);
        });*/
        
        google.maps.event.addListener(marker, 'click', function(){
            var popup = new google.maps.InfoWindow();
            if(!popup){
                popup = new google.maps.InfoWindow();
            }
            window.note =  this.title;
            window.lati = this.lati;
            window.longi = this.longi;
            window.idEmp = this.codigo;
            window.idSuc = this.sucursal;
            window.imagenLogo = this.imagen;
            window.direccion  =this.direccion;
            window.barrio =  this.departamento+","+this.municipio+","+this.barrio;
            window.telefono = this.telefono;
            window.celular1 = this.celular1;
            window.email = this.email;
            window.web = this.web;
            window.plan= this.plan;
            window.TemporalTel = "No existe";

                var contenido='<div class="ventana">'+
                '<div class="imgventana">'+
                    '<img src="'+imagenLogo+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+//"comoLlegar/:latitud/:longitud/:nombre/:direccion/:telefonoFijo/:celularUno/:celularDos/:email/:web/:barrio":"comoLlegar",
                        '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular1+'/'+TemporalTel+'/'+email+'/'+webs+'/'+barrio+'">Trazar ruta</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
           popup.setContent(contenido);
            //popup.setContent(note +'<a href="#vermas/'+note+' "> Vermas </a>' + '<a href="#comoLlegar">Trazar ruta</a>');
            popup.open(mapMarker, this);
        });
}
else{
     var mapMarker = new google.maps.Map(document.getElementById('mapaEmpresa'), mapOptions);
        marker = new google.maps.Marker( {
            position: myLatlng,
            map: mapMarker,
            title: nombre,
            icon: image3,
            codigo: idEmp,
            sucursal : idSuc,            
            imagen : milogoEmp,
            lati : lat,
            longi : lon,
            direccion : direccion,
            departamento : departamento,
            municipio : municipio,
            barrio : barrio,
            telefono : telefono,
            celular1 : celular1,
            email : email,
            web : web,
            plan: plan
        }

        );
        var infowindow = new google.maps.InfoWindow( {
            content: nombre
        }
        )
                       
        
        /*google.maps.event.addListener(marker, 'mousedown', function(){
            this.setIcon(image2);
        });*/
        
        google.maps.event.addListener(marker, 'click', function(){
            var popup = new google.maps.InfoWindow();
            if(!popup){
                popup = new google.maps.InfoWindow();
            }
            window.note =  this.title;
            window.lati = this.lati;
            window.longi = this.longi;
            window.idEmp = this.codigo;
            window.idSuc = this.sucursal;
            window.imagenLogo = this.imagen;
            window.direccion  =this.direccion;
            window.barrio =  this.departamento+","+this.municipio+","+this.barrio;
            window.telefono = this.telefono;
            window.celular1 = this.celular1;
            window.email = this.email;
            window.web = this.web;
            window.plan= this.plan;
            window.TemporalTel = "No existe";

              var contenido='<div class="ventana">'+
                '<div class="imgventana" >'+
                    '<img id="logoSuc" src="'+imagenLogo+'"/>'+
                    '</div>'+
                '<div class="infoventana">'+
                    '<div class="titleventana">'+
                        '<div class="ventanatxt">'+
                            '<p>'+note+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="linkventana">'+
                    '<a href="#comoLlegar/'+lati+'/'+longi+'/'+note+'/'+direccion+'/'+telefono+'/'+celular1+'/'+TemporalTel+'/'+email+'/'+web+'/'+barrio+'">Trazar ruta</a>'+
                    '</div>'+
                '</div>'+
            '</div>';  
            
            
           
           popup.setContent(contenido);
            //popup.setContent(note +'<a href="#vermas/'+note+' "> Vermas </a>' + '<a href="#comoLlegar">Trazar ruta</a>');
            popup.open(mapMarker, this);
        });

}
        
    
    
/////////////////////////////////////////////////////////////////////////////////////////////////

       
    
    }

});


///////////////////////////// Definicion de Rutas  ////////////////////////////////
var Router = Backbone.Router.extend( {
                    cerca: null,    
                    resultados: null,
                    vermas:null,
                    comoLlegar:null,
                    resultadosAuxiliar:null,
                    //definimos las rutas
    initialize: function () {
        this.cerca = new cercaDeMi( {
            el: $(".ui-content")
        });
        this.resultados = new ResultadosView( {
            el: $(".ui-content")
        });
        this.resultadosAuxiliar = new ResultadosView( {
            el: $(".ui-content")
        });
        this.cercademihome = new cercaDeMiInicioView({
           el: $(".ui-content")
        });
        this.vermas = new VerMas( {
            el: $(".ui-content")
        });
        this.mapaEmpresa = new mapaEmpresa( {
            el: $(".ui-content")
        });
        this.comoLlegar = new comoLlegar( {
            el: $(".ui-content")
        });
    },
    
    routes: {

        "": "homeDos", // la url por defecto va a llamar a la función home
        //"h": "homeDos",
        "cercademi": "cercademi", //la url #cercademi va a llamar a cercademi
        "cercademihome": "cercademihome", //la url #cercademi va a llamar a cercademi
        "resultadosUno": "busqueda",  //la url #resultados va a llamar a busqueda
        "resultadosDos": "busqueda",
        "resultadosTres" : "busqueda",
        "resultadosCuatro" : "busqueda",
        "resultadosCinco" : "busqueda",
        "results": "busqueda",
        "resultsEnter":"busqueda",
        "resultadosAuxiliar":"busquedaAuxiliar",
        "resultadosCerca":"busquedaCerca",
        "home" : "homeDos",
        //"homee" : "homeDos",
        "mapa/:latitud/:longitud/:nombre/:idEmpresa/:idSucursal/:imagen/:direccion/:departamento/:municipio/:barrio/:telefono/:celular1/:email/:web/:plan" : "mostrarMapaIndividual",        
        "vermas/:nombreEmpresa/:sucursal/:id/:latitud/:longitud/:direccion/:telefonoFijo/:celular1/:directo/:email/:web/:barrio":"vermas",
        "comoLlegar/:latitud/:longitud/:nombre/:direccion/:telefonoFijo/:celularUno/:celularDos/:email/:webs/:barrio":"comoLlegar",
    },
    /*home: function() {
        /*$("#link").removeAttr("href");
        enlacee = $('#link').attr('href');
        $( "#link" ).click(function() {
            if (enlacee==undefined) {
                alert("Por favor realice una busqueda para indicarle que empresas estan cerca de usted");
            };
        });*/
        /*window.pagina=1; // Variable que permite evaluar si la aplicacion se encuentra para retroceder o salir

        $("#footerllegar").hide();
        $(".option1").addClass('active');
        $(".option2").removeClass('active');
        $('#mapaEmpresa').remove();
        $('footerCerca').remove();
        $('footer').show();
        $('#btnllevame').hide();
        $('#btncerca').show();
        $('.contentr1').hide();
        $('#contenedor1').show();
        $('#contenedor2').show();
        $('#w').show();
        $('#slidergalery').hide();
        $('#contentContador').hide();
        $('#regresar1').hide();
        $('#itemscenter').hide();
        $('.results').hide();
        $('#home').css('background', '');
        $('#mapavista').css('display','none');
        $('#mapavistacerca').css('display','none');
        $('#streetVista').css('display','none');
        $('.flexslider').css('display','none');
        $('#espacioresultados').css('height','49px');
        $('#noresultados').hide();
        window.scrollTo(0,0);
    },*/
    homeDos: function() {
    $("#noInternet").html("<p>"+ "<strong>Lo sentimos !!!</strong>"+ "</br>" +  "</br>" +  "Necesitas estar conectado a internet para poder usar Publitell App");

 $('#queBuscas').css("border", "rgb(211, 153, 26) solid");
 $( "#queBuscas" ).focus();
        pagina=1;// Variable que permite evaluar si la aplicacion se encuentra para retroceder o salir
        window.scrollTo(0,0);
        totalResultados=0;
        //ctrlCerca = ctrlCerca +1;
        $("#link3").hide();
        $("#link2").hide();
        $("#link").show();
        $(".option2").removeClass('active');
        $(".option1").addClass('active');
        $("#queBuscas").val("");
        //$("#dondeBuscas").val("");
        $("#mostrarMapa").remove();
        $('#queBuscas').show();
        $('article#btndonde').show();
        $('section#donde').show();
        $('p#localizacion').show();        
        $("#footerllegar").remove();
        $("#footerllegarVerMas").remove();
        $("#footerllegar").css("display", "none");
        $("#footerllegarVerMas").css("display", "none");
        $('#footerllegar').hide();
        $('#contBuscar').hide();
        $("#slidergalery").remove();
        $('#footerCerca').remove();
        $('.footer23').remove();
        $('#footerllegar').remove();
        $('#btnllevame').hide();
        $('#btncerca').show();
        $("#submenu2").remove();
        $("#footer2").remove();
        $("#streetVistaLlegar").remove();
        $("#map_panel").remove();
        $("#rutaOps").remove();
        $("#directions_panel").remove();
        $("#info2ver").remove();
        $("#info1ver").remove();
        $(".titulosver").remove();
        $("#descripver").remove();
        $(".contentr1").remove();
        $("#streetVista").remove();
        $(".container").remove();
        $(".flexslider").remove();
        $("#titulover").remove();
        $(".iconosver").remove();
        $("#mapaver").remove();
        $("#mapavistacerca").remove();
        $('#cargandoEmp').hide();
        $('.contentr1').hide();
        $('#contenedor1').show();
        $('#contenedor2').show();
        $('#w').show();
        $('#contentContador').hide();
        $('#regresar1').hide();
        $('#itemscenter').hide();
        $('.results').hide();
        $('footer').show();
        $('#home').css('background', '');
        $('#mapavista').hide();
        $('#mapavistacerca').hide();
        $('#noresultados').hide();
        $('.slides').css('height','100%');
        $('.slides').css('overflow','hidden');
        $('.slides').css('-webkit-backface-visibility','hidden');
        $('.slides').css('-webkit-transform-style','preserve-3d');
        $('.slides').css('-webkit-transition','all 500ms cubic-bezier(0.165, 0.840, 0.440, 1.000)');
        $('.slides').css('-moz-transition','all 500ms cubic-bezier(0.165, 0.840, 0.440, 1.000)');
        $('.slides').css('-ms-transition','all 500ms cubic-bezier(0.165, 0.840, 0.440, 1.000)');
        $('.slides').css('-o-transition','all 500ms cubic-bezier(0.165, 0.840, 0.440, 1.000)');
        $('.slides').css('transition','all 500ms cubic-bezier(0.165, 0.840, 0.440, 1.000)');
        //$('#w').css('margin-top','90px');
        console.log("a ocultar menu");
        current = nav.css('margin-left'),
                                val = '100%',
                                layer = 'none',
                                opacity = 0.0,
                                ham = 0;
        botonMostrar.addClass("is-active");
        botonOcultar.removeClass("is-active");
        nav.animate( {
            'margin-left': [val]
        },
        {
            duration: 80
        }
        );
        overlay.animate( {
            'opacity': [opacity]
        },
        {
                duration: 80,
                complete: function() {
                overlay.css('display', layer);
            }
        }
        );
    },
    //:direccion/:departamento/:municipio/:barrio/:telefono/:celular1/:email/:web/:plan"
    mostrarMapaIndividual:function(lat,lon,nombre, idEmpresa, idSucursal ,imagen,direccion,departamento,municipio,barrio,telefono,celular1,email,web,plan) {
        window.lat = lat;
        window.lon = lon;
        window.plll = plan;
        window.nombre = nombre; 
        window.idSuc = idSucursal;
        window.idEmp = idEmpresa;
        window.imagen = imagen;
        pagina=0;
        if (this.mapaEmpresa == null) {
            this.mapaEmpresa = new mapaEmpresa();
        }
        this.mapaEmpresa.mostrarGeoEmpresa(lat,lon,nombre,idEmp,idSuc ,imagen,direccion,departamento,municipio,barrio,telefono,celular1,email,web,plan);
    },
    comoLlegar:function(latitud,longitud,nombre,direccion,telefonoFijo,celularUno,celularDos,email,webs,barrio) {
        pagina=0;
        if (this.cerca == null) {
            this.comoLlegar = new comoLlegar();
        }
        this.comoLlegar.trazar(latitud,longitud,nombre,direccion,telefonoFijo,celularUno,celularDos,email,webs,barrio);
    },
    cercademi: function() {
        pagina=0;
        if (this.cerca == null) {
            this.cerca = new cercaDeMi();
        }
        this.cerca.cerca();
    },

    cercademihome: function(){
        pagina=0;
        if (this.cercademihome == null) {
            this.cercademihome = new cercaDeMiInicioView();
        }
        this.cercademihome.funcioncercademi();
    },

    busqueda: function(){
        if(pagina==3){
            pagina=3;
        }else{
        pagina=2;
        }
        if (this.resultados == null) {
            this.resultados = new ResultadosView();
        }
        if ($('#dondeBuscas').val() ==""){
        }
            this.resultados.search();        
    },
    busquedaCerca:function(){
        //pagina=2;
        console.log('busq cerca');
        if (this.resultados == null) {

            this.resultados = new ResultadosView();
        }
            this.resultados.searchCercaDeMi();
    },
    busquedaAuxiliar: function() {
        if(pagina==3){
            pagina=3;
        }else{
        pagina=2;
        }
        if (this.resultadosAuxiliar == null) {
            this.resultadosAuxiliar = new ResultadosView();
        }
        if ($('#dondeBuscass').val() ==""){
            //alert("Debe seleccionar una ciudad");
        }

        this.resultadosAuxiliar.searchPopup();
    },    
    vermas: function(nombreEmpresa,sucursal,id,latitud,longitud, direccion, telefonoFijo, celularUno, celularDos, email, webs, barrio) {
        pagina=3;
        var nombreEmpresa=nombreEmpresa;
        var idSucursal = sucursal;
        var idEmpresa = id;
        var direccion = direccion;
        var barrio = barrio;
        var telefonoFijo = telefonoFijo;
        var celularUno = celularUno;
        var celularDos = celularDos;
        var email = email;
        var webs = webs;
        //pagina=0;
        if (this.vermas == null) {
            this.vermas = new VerMas();
        }
        this.vermas.mostrarEmpresa(nombreEmpresa, idSucursal, idEmpresa,latitud,longitud, direccion, barrio, telefonoFijo, celularUno, celularDos, email, webs);
    },
}
);
enrutador = new Router();
Backbone.history.start ();
function showConfirm() {
    navigator.notification.confirm(
    '¿Seguro que quieres salir de publitell app?', // mensaje a mostrar
    exitFromApp, // callback a invocar cuando el botón es presionado
    'Salir', // titulo de la ventana
    'Cancelar,Si' // etiquetas de los botones
    );
};
document.addEventListener("backbutton", backKeyDown, true);
function backKeyDown() {
    if (pagina==1) {
        navigator.notification.confirm(
        '¿Seguro que quieres salir de publitell app?', // mensaje a mostrar
        exitFromApp, // callback a invocar cuando el botón es presionado
        'Salir', // titulo de la ventana
        'Cancelar,Si' // etiquetas de los botones
        );
    } else if(pagina==2){
        pagina=1;// Variable que permite evaluar si la aplicacion se encuentra para retroceder o salir
        $("#enviar").attr("href", "#resultadosUno");
        window.scrollTo(0,0);
        $("#link3").hide();
        $("#link2").hide();
        $("#link").show();
        $("#queBuscas").val("");
        $("#slidergalery").remove();
        $('#footerCerca').remove();
        $('.footer23').remove();
        $('footer').show();
        $('#btnllevame').hide();
        $('#btncerca').show();
        $("#submenu2").remove();
        $("#footer2").remove();
        $("#streetVistaLlegar").remove();
        $("#map_panel").remove();
        $("#rutaOps").remove();
        $("#directions_panel").remove();
        $("#info2ver").remove();
        $("#info1ver").remove();
        $(".titulosver").remove();
        $("#descripver").remove();
        $(".contentr1").remove();
        $("#streetVista").remove();
        $(".container").remove();
        $(".flexslider").remove();
        $("#titulover").remove();
        $(".iconosver").remove();
        $("#mapaver").remove();
        $("#mapavistacerca").remove();
        $('.contentr1').hide();
        $('#contenedor1').show();
        $('#contenedor2').show();
        $('#w').show();
        $('#contentContador').hide();
        $('#regresar1').hide();
        $('#itemscenter').hide();
        $('.results').hide();
        $('#home').css('background', '');
        $('#mapavista').hide();
        $('#noresultados').hide();
        $('.slides').css('height','100%');
        $('.slides').css('overflow','hidden');
        $('.slides').css('-webkit-backface-visibility','hidden');
        $('.slides').css('-webkit-transform-style','preserve-3d');
        $('.slides').css('-webkit-transition','all 500ms cubic-bezier(0.165, 0.840, 0.440, 1.000)');
        $('.slides').css('-moz-transition','all 500ms cubic-bezier(0.165, 0.840, 0.440, 1.000)');
        $('.slides').css('-ms-transition','all 500ms cubic-bezier(0.165, 0.840, 0.440, 1.000)');
        $('.slides').css('-o-transition','all 500ms cubic-bezier(0.165, 0.840, 0.440, 1.000)');
        $('.slides').css('transition','all 500ms cubic-bezier(0.165, 0.840, 0.440, 1.000)');
        //$('#w').css('margin-top','90px');
        console.log("a ocultar menu");
        current = nav.css('margin-left'),
                                val = '100%',
                                layer = 'none',
                                opacity = 0.0,
                                ham = 0;
        botonMostrar.addClass("is-active");
        botonOcultar.removeClass("is-active");
        nav.animate( {
            'margin-left': [val]
        }
        , {
            duration: 80
        }
        );
        overlay.animate( {
            'opacity': [opacity]
        }
        , {
                duration: 80,
                complete: function() {
                overlay.css('display', layer);
            }
        }
        );
    }else{
       navigator.app.backHistory();
       
    }
};
function exitFromApp(buttonIndex) {
    if (buttonIndex==2) {
        navigator.app.exitApp();
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
function myFunction(e){
    if (e.keyCode == 13){
                    if($('#dondeBuscass').val()==""){
                        alert("Debe seleccionar una ciudad");
                        
                        $( "#dondeBuscass" ).focus();
                        $('#dondeBuscass').css("border", "rgb(211, 153, 26) solid");
                        window.pruebaLocalizacion= $("#localizacion" ).html();
                        if(pruebaLocalizacion!="Buscando, tu ubicación..."){
                        var palabras = pruebaLocalizacion.split(",");
                        $("#dondeBuscass" ).val(palabras[0]);
                         }
                    }else if($('#queBuscass').val()==""){
                        alert("Debe seleccionar un criterio de busqueda");
                        $( "#queBuscass" ).focus();
                        $('#queBuscass').css("border", "rgb(211, 153, 26) solid");
                        window.pruebaLocalizacion= $("#localizacion" ).html();
                        if(pruebaLocalizacion!="Buscando, tu ubicación..."){
                        var palabras = pruebaLocalizacion.split(",");
                        $("#queBuscass" ).val(palabras[0]);
                         }
                    }
                     else{
                      console.log("haga busqueda");                                
    window.history.pushState("data", "Titulo", "index.html#resultadosAuxiliar");
    this.searchPopupres= new ResultadosView();
     $("#busquedaAux").css('margin-top','-150%');
        $("#hamburger-overlayy").css('display','none');
        //window.copor= $("#dondeBuscas").val();
        var queBuscass= $('#queBuscass').val();
        var dondeBuscass= $('#dondeBuscass').val();
        this.searchPopupres.request(queBuscass,dondeBuscass);
        }
    }
 
}