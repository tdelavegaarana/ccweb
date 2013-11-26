function init() {
  mapas();
  click_event(0);
}
function mapas() {
  var center = new google.maps.LatLng(43.3949603696751,-3.4535908699035645);
  var mapProp = {
    center: center,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.HYBRID};
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    position: center,
    animation:google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}
function quitarFoco(id) {
  elemento = document.getElementById(id);
  elemento.blur();
}
function click_event (argument) {
  // body...
  var url = "";
  switch(argument)
  {
    case 0:
      //Inicio
      url = "php/inicio.php";
    break;
    case 1:
      //Ginecología y Obstreticia
      url = "php/ginecologia/ginecologia.php";
    break;
    case 2:
      //Depilación Láser Médico
      url = "php/dlm/depilacion_laser_medico.php";
    break;
    case 3:
      //Psicología para adultos
      url = "php/psicologia/adultos.php";
    break;
    case 4:
      //Psicología Infanto Juvenil Trastornos de Conducta
      url = "php/psicologia/trastorno_conducta.php";
    break;
    case 5:
      //Psicología Infanto Juvenil Deficit de atención
      url = "php/psicologia/trastorno_deficit_atencion.php";
    break;
    case 6:
      //Psicología Infanto Juvenil Adicción Nuevas Tecnologías
      url = "php/psicologia/adiccion_nuevas_tecnologias.php";
    break;
    case 7:
      //Psicología Infanto Juvenil Trastornos de Ansiedad
      url = "php/psicologia/trastorno_ansiedad.php";
    break;
    case 8:
      //Psicología Infanto Juvenil Trastorno del Estado de Ánimo
      url = "php/psicologia/trastorno_estado_animo.php";
    break;
    case 9:
      //Psicología Infanto Juvenil Trastorno del Control de Esfínteres
      url = "php/psicologia/trastorno_control_esfinteres.php";
    break;
    case 10:
      //Medicina Estética
      url = "php/mestetica.php";
    break;
    case 11:
      //Analisis clinicos
      url = "php/ac/analisis_clinicos.php";
    break;
  }
  if(argument === 3 || argument === 1) {
    loadXMLDoc(url, function()
    {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
      {
        document.getElementById("contenido").innerHTML = xmlhttp.responseText;
        accordion();
      }
    });
  } else {
    loadXMLDoc(url, function()
    {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
      {
        document.getElementById("contenido").innerHTML = xmlhttp.responseText;
      }
    });
  }
  quitarFoco(argument.toString());
}
function loadXMLDoc(url,cfunc) {
  if (window.XMLHttpRequest){
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=cfunc;
  xmlhttp.open("GET",url,true);
  xmlhttp.send();
}
function accordion() {
  $(document).ready(function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
  });
}
function cvPsico() {
  document.getElementById("contenido").innerHTML = '<iframe class="iframe" src="http://docs.google.com/viewer?url=www.clinicacolindres.es%2Ffiles%2Fcv-psico.pdf&embedded=true"></iframe>';
  quitarFoco("cvp");
}