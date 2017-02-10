function tomarValor(){
window.apoyo = $("#localizacion").text();
var palabras= apoyo.split(",");
$("#dondeBuscass").val($("#dondeBuscas").val())
if($('#dondeBuscas').val() ==''){
  alert("tomo posicion actual");
  $("#dondeBuscass").val(palabras[0])
}
}

$(function(){

if(screen.height>=480 && screen.height<539){var urlUno = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=6"};
       if(screen.height>=540 && screen.height<599){var urlUno = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=7"};
       if(screen.height>=600 && screen.height<639){var urlUno = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=8"};
       if(screen.height>=640 && screen.height<699){var urlUno = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=9"};
       if(screen.height>=700 && screen.height<739){var urlUno = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=10"};
       if(screen.height>=740){var urlUno = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=11"};
       $("#queBuscasCerca").autocomplete({
                  source: function( request, response ) {
                      $.ajax(
                {       
                          url: urlUno,
                          data: {
                             fq:'lugares_ac:'+ '"' + request.term + '"'
                          },
                          minLength: 3,
                          dataType:"jsonp",
                          jsonp:'json.wrf',
              success: function(data) {
                              response($.map(data.response.docs, function( item ) {
                                  return {
                                       //https://gist.github.com/pduey/2648514
                                      //label: (item.seccion_ac != null ) ? item.seccion_ac : item.item_ac 
                                      //label: ? item.guia_ac : item.tag_ac : item.tipo_lugar_ac
                                      //label: item.label, value: item.value
                    label: item.lugares_ac,
                                      id: item.id
                                  }
                              }));
                          }
                      });
                  },
                  // SLA: Al seleccionar del autocompletar, realizar la búsqueda automaticamente
                  select: function(event, ui) {
                    var term = ui.item.value; // Obtiene el valor seleccionado
                    $("#queBuscas").val(term); // Pasa el valor al input
                    $("#busquedas").submit();
                  },
                  messages: {
                      noResults: 'No se encontro resultados',
                      results: function() {}
                  }
        });



});

$(function() {
       if(screen.height>=480 && screen.height<539){var urlUno = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=6"};
       if(screen.height>=540 && screen.height<599){var urlUno = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=7"};
       if(screen.height>=600 && screen.height<639){var urlUno = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=8"};
       if(screen.height>=640 && screen.height<699){var urlUno = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=9"};
       if(screen.height>=700 && screen.height<739){var urlUno = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=10"};
       if(screen.height>=740){var urlUno = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=11"};
       $("#queBuscas").autocomplete({
                  source: function( request, response ) {
                      $.ajax(
                {       
                          url: urlUno,
                          data: {
                             fq:'lugares_ac:'+ '"' + request.term + '"'
                          },
                          minLength: 3,
                          dataType:"jsonp",
                          jsonp:'json.wrf',
              success: function(data) {
                              response($.map(data.response.docs, function( item ) {
                                  return {
                                       //https://gist.github.com/pduey/2648514
                                      //label: (item.seccion_ac != null ) ? item.seccion_ac : item.item_ac 
                                      //label: ? item.guia_ac : item.tag_ac : item.tipo_lugar_ac
                                      //label: item.label, value: item.value
                    label: item.lugares_ac,
                                      id: item.id
                                  }
                              }));
                          }
                      });
                  },
                  // SLA: Al seleccionar del autocompletar, realizar la búsqueda automaticamente
                  select: function(event, ui) {
                    var term = ui.item.value; // Obtiene el valor seleccionado
                    $("#queBuscas").val(term); // Pasa el valor al input
                    $("#busquedas").submit();
                  },
                  messages: {
                      noResults: 'No se encontro resultados',
                      results: function() {}
                  }
        });
        if(screen.height>=480 && screen.height<539){var urlDos = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=6"};
       if(screen.height>=540 && screen.height<599){var urlDos = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=7"};
       if(screen.height>=600 && screen.height<639){var urlDos = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=9"};
       if(screen.height>=640 && screen.height<699){var urlDos = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=10"};
       if(screen.height>=700 && screen.height<739){var urlDos = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=11"};
       if(screen.height>=740){var urlDos = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=12"};
        
 $("#dondeBuscas").autocomplete({

                  source: function( request, response ) {
                      $.ajax({
                          //url: "http://localhost:8982/solr/select?wt=json&fq=type%3AEnterprise&&fl=*+score&qf=name_text+category_text&defType=dismax&mm=1&start=0&rows=15",
                          url: urlDos,

                          data: {
                              fq:'ubicaciones_ac:'+ '"' + request.term + '"'
                          },
                          minLength: 3,
                          dataType:"jsonp",
                          jsonp:'json.wrf',
                          success: function(data) {
              
                              response($.map(data.response.docs, function( item ) {
                                  return {
                                      label: item.ubicaciones_ac,
                                      id: item.id
                                  }
                              }));
                          }
                      });
                  },
                  // SLA: Al seleccionar del autocompletar, realizar la búsqueda automaticamente
                  select: function(event, ui) {
                    var term = ui.item.value; // Obtiene el valor seleccionado
                    $("#busqueda_lugar").val(term); // Pasa el valor al input
                    $("#enviar").submit();
                  },
                  messages: {
                      noResults: '',
                      results: function() {}
                  }
              });
  });
$(function() {
        if(screen.height>=480 && screen.height<539){var urlTres = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=6"};
       if(screen.height>=540 && screen.height<599){var urlTres = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=7"};
       if(screen.height>=600 && screen.height<639){var urlTres = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=8"};
       if(screen.height>=640 && screen.height<699){var urlTres = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=9"};
       if(screen.height>=700 && screen.height<739){var urlTres = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=10"};
       if(screen.height>=740){var urlTres = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=11"};
       $("#queBuscass").autocomplete({
                  source: function( request, response ) {
                      $.ajax(
                {
                          //url: "http://localhost:8982/solr/select?wt=json&fq=type%3AEnterprise&&fl=*+score&qf=name_text+category_text&defType=dismax&mm=1&start=0&rows=15",
              url: urlTres,
                          data: {
                             // fq:'name_ac:'+ '"' + request.term + '"'
                             // fq:'(item_ac:'+ '"' + request.term + '")'
                             // + 'OR' + '(seccion_ac:' + '"' + request.term + '")'
                             // + 'OR' + '(guia_ac:' + '"' + request.term + '")'
                             // + 'OR' + '(tag_ac:' + '"' + request.term + '")'
                             // + 'OR' + '(tipo_lugar_ac:' + '"' + request.term + '")'
               fq:'lugares_ac:'+ '"' + request.term + '"'
                          },
                          minLength: 3,
                          dataType:"jsonp",
                          jsonp:'json.wrf',
              success: function(data) {
              
                              response($.map(data.response.docs, function( item ) {
                                  return {
                                       //https://gist.github.com/pduey/2648514
                                      //label: (item.seccion_ac != null ) ? item.seccion_ac : item.item_ac 
                                      //label: ? item.guia_ac : item.tag_ac : item.tipo_lugar_ac
                                      //label: item.label, value: item.value
                    label: item.lugares_ac,
                                      id: item.id
                                  }
                              }));
                          }
                      });
                  },
                  // SLA: Al seleccionar del autocompletar, realizar la búsqueda automaticamente
                  select: function(event, ui) {
                    var term = ui.item.value; // Obtiene el valor seleccionado
                    $("#queBuscas").val(term); // Pasa el valor al input
                    $("#enviar").click();
                  },
                  messages: {
                      noResults: 'No se encontro resultados',
                      results: function() {}
                  }
              });
        if(screen.height>=480 && screen.height<539){var urlCuatro = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=6"};
       if(screen.height>=540 && screen.height<599){var urlCuatro = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=7"};
       if(screen.height>=600 && screen.height<639){var urlCuatro = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=9"};
       if(screen.height>=640 && screen.height<699){var urlCuatro = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=10"};
       if(screen.height>=700 && screen.height<739){var urlCuatro = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=11"};
       if(screen.height>=740){var urlCuatro = "http://publitell.com:8080/solr/select?wt=json&start=0&q=*:*&rows=12"};
        
 $("#dondeBuscass").autocomplete({
                  source: function( request, response ) {
                      $.ajax({
                          url: urlCuatro,

                          data: {
                              fq:'ubicaciones_ac:'+ '"' + request.term + '"'
                          },
                          minLength: 3,
                          dataType:"jsonp",
                          jsonp:'json.wrf',
                          success: function(data) {
              
                              response($.map(data.response.docs, function( item ) {
                                  return {
                                      label: item.ubicaciones_ac,
                                      id: item.id
                                  }
                              }));
                          }
                      });
                  },
                  // SLA: Al seleccionar del autocompletar, realizar la búsqueda automaticamente
                  select: function(event, ui) {
                    var term = ui.item.value; // Obtiene el valor seleccionado
                    $("#busqueda_lugar").val(term); // Pasa el valor al input
                    $("#enviar").submit();
                  },
                  messages: {
                      noResults: '',
                      results: function() {}
                  }
              });
  });
