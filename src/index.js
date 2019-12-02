//BASE DE DATOS
	var productos = ["Foodie Giftbox", "Sommelier Giftbox", "Love Giftbox", "Spa Giftbox", "Yoga Giftbox", "Garden Giftbox", "Music Giftbox", "Fit Giftbox", "Tech Giftbox"];
	var imgGrandes = ["img/productos/1.jpg", "img/productos/2.jpg", "img/productos/3.jpg", "img/productos/4.jpg", "img/productos/5.jpg", "img/productos/6.jpg", "img/productos/7.jpg", "img/productos/8.jpg", "img/productos/9.jpg"];
	var imgPeque = ["img/productos/1m.jpg", "img/productos/2m.jpg", "img/productos/3m.jpg", "img/productos/4m.jpg", "img/productos/5m.jpg", "img/productos/6m.jpg", "img/productos/7m.jpg", "img/productos/8m.jpg", "img/productos/9m.jpg"];
	var precios = [24990, 29990, 22990, 24990, 24990, 22990, 22990, 22990, 24990];
	var stock = [5, 2, 8, 3, 10, 4, 3, 1, 2];
	var precioTransporte = [2000, 2000, "gratis", "gratis"];
	var Descuento = 0.10;
	var uniUser;
	
	
	
//JAVASCRIPT A EJECUTARSE UNA VEZ CARGADA LA PAGINA:	
	window.onload = function(){

	
		//Se cargan los productos dentro del HTML de forna dinamica haciendo uso de los datos de la base de datos, como si de un PHP se tratase:
		var DIVS = document.getElementsByName("DIVS");
		for (i in productos){
			DIVS[i].innerHTML = '<a id="imgG'+i+'" href="' +imgGrandes[i]+ '"><img id="imgP'+i+'" class="imagen" src="' +imgPeque[i]+ '"></a><div class="etiquetas"><b><span id="pro'+i+'">' +productos[i]+ '</span>:&nbsp;<span id="pre'+i+'">$' +precios[i]+ '</span></b></div><div class="stock">Hay en stock <span id="uni'+i+'">' +stock[i]+ '</span> unidades,<br/>�Cuantas quiere?: <input class="uniBien" type="number" id="uniUser'+i+'" name="uniUser" value="0" size="4" /></div>';
		}
	
	
		//Rellena el campo dia y a�o, de la fecha de nacimiento y tarjeta de credito:
		
		//Fecha de nacimiento
		var fecha = new Date();
		var anio = fecha.getFullYear();
				
		for (var i=1;i<=31;i++){
			document.getElementById("fechaNacimientoDia").innerHTML = document.getElementById("fechaNacimientoDia").innerHTML + '<option value="' +i+ '">' +i+ '</option>';
		}
				
		for (var i=anio;i>=(anio-110);i--){
			document.getElementById("fechaNacimientoAnio").innerHTML = document.getElementById("fechaNacimientoAnio").innerHTML + '<option value="' +i+ '">' +i+ '</option>';
		}

		//Tarjeta de credito:
		for (var i=1;i<=12;i++){
			document.getElementById("mesTarjeta").innerHTML = document.getElementById("mesTarjeta").innerHTML + '<option value="' +i+ '">' +i+ '</option>';
		}

		for (var i=anio;i<=(anio+21);i++){
			document.getElementById("anioTarjeta").innerHTML = document.getElementById("anioTarjeta").innerHTML + '<option value="' +i+ '">' +i+ '</option>';
		}

		
	
		//Botones que llevaran a cabo la ejecucion de determinadas secuencias de codigo JavaScript:
		document.getElementById("botonTotal").onclick = validaLasUnidades;
		document.getElementById("botonDatos").onclick = pideDatos;
		document.getElementById("botonPago").onclick = validaDatosPersonales;
		document.getElementById("botonConfirmar").onclick = validaDatosPago;
	}

	
	
	
	/*-------------------COMIENZAN LAS FUNCIONES-------------------*/




//FUNCION DE VALIDACION DE UNIDADES:
	function validaLasUnidades(elEvento) {
		
		var todoBien = true;
		uniUser = document.getElementsByName("uniUser");
		
		
		for (i in productos){
		
			if ( uniUser[i].value == "" || uniUser[i].value > stock[i] || uniUser[i].value < 0 ){
				
				todoBien = false;
				uniUser[i].className = "uniMal";
								
				//Modifica el css para quitar los formularios:
				document.getElementById("todo").className = "todoNo";
				document.getElementById("menu").className = "menuNo";
				document.getElementById("divZonaCompra").className = "divZonaCompraNo";
				document.getElementById("divTotal").className = "divsNo";
/**/			document.getElementById("divDatos").className = "divsNo";
/**/			document.getElementById("divPago").className = "divsNo";				
				
				//Deshabilita el boton de datos personales:
				document.getElementById("botonDatos").disabled = true;
/**/			document.getElementById("botonDatos").disabled = true;
/**/			document.getElementById("botonDatos").disabled = true;				
				
				//Con solo un error se para la validacion de unidades:
				return;
			}
			else{
				todoBien = true;
				uniUser[i].className = "uniBien";
			}
		}

		//Si no ha habido ni un solo error, se ejecuta la siguiente funcion que se encarga de cargar el carro de la compra:
		if (todoBien){
			calculaElTotal();
		}
	}

	

	
//FUNCION QUE MUSTRA EL CARRO DE LA COMPRA:
	function calculaElTotal(elEvento) {

	
		//A�ade el encabezado de la tabla
		document.getElementById("tablaTotal").innerHTML = '<tr><td class="pro"><b>Producto</b></td><td class="uni"><b>Unidades</b></td><td class="preUni"><b>Precio Unidad</b></td><td class="preTotal"><b>Precio Total</b></td></tr>';
	
	
		//Inicializacion de las variables para esta funcion:
		var carroTotal = 0;
		var numProductos = 0;
		
		
		//Muestra el carrito de la compra
		for (i in productos){

			var tablaTotal = document.getElementById("tablaTotal").innerHTML;
			var preTotal = 0;
		
			
			//Cuenta el numero de productos para saber cuanto costara el transporte
			if (uniUser[i].value != 0){
				numProductos++;
			}
			
			
			if (uniUser[i].value != 0){
			
				//Modifica el css para hacer hueco a los formularios
				document.getElementById("todo").className = "todoSi";
				document.getElementById("menu").className = "menuSi";
				document.getElementById("divZonaCompra").className = "divZonaCompraSi";
				document.getElementById("divTotal").className = "divsSi";
/**/			document.getElementById("divDatos").className = "divsNo";
/**/			document.getElementById("divPago").className = "divsNo";				
				
				//Habilita el boton de datos personales
				document.getElementById("botonDatos").disabled = false;
				
				//Calcula el totalUnidades y rellena el carro de la compra
				preTotal = precios[i] * uniUser[i].value;
				carroTotal = carroTotal + preTotal;
				document.getElementById("tablaTotal").innerHTML = tablaTotal + '<tr class="proCarrito"><td>' +productos[i]+ '</td><td>' +uniUser[i].value+ '</td><td>' +precios[i]+ '</td><td id="preTotal' +i+'" name="preTotal">' +preTotal+ '</td></tr>';
			}
		}
		

		//Se calcula el transporte a pagar segun la cantidad de productos comprados:
		var precioTransporteAPagar;
		if (numProductos <= 2){
			precioTransporteAPagar = precioTransporte[0];
		}
		else if (numProductos <= 3){
			precioTransporteAPagar = precioTransporte[1];
		}
		else if (numProductos <= 4){
			precioTransporteAPagar = precioTransporte[2];
		}
		else if (numProductos >= 5){
			precioTransporteAPagar = precioTransporte[3];
		}

		//Se sacan las cuentas del transporte (si lo hubiese), del Descuento y el total:
		var totalTransporte = precioTransporteAPagar;
		if(totalTransporte == "gratis"){
			var totalDescuento = (carroTotal * Descuento);
			var totalAPagar = carroTotal - totalDescuento;
		}
		else{
			var totalDescuento = ((carroTotal + totalTransporte) * Descuento);
			var totalAPagar = carroTotal + totalTransporte - totalDescuento;
		}

		
		//Limitar a 2 los decimales a mostrar del Descuento:
		totalDescuento=totalDescuento*100;
		totalDescuento=Math.floor(totalDescuento);
		totalDescuento=totalDescuento/100;
		//Limitar a 2 los decimales a mostrar del TOTAL A PAGAR:
		totalAPagar=totalAPagar*100;
		totalAPagar=Math.floor(totalAPagar);
		totalAPagar=totalAPagar/100;		
		
		//Se añade a la tabla el TOTAL que suma el carrito:
		tablaTotal = document.getElementById("tablaTotal").innerHTML;
		document.getElementById("tablaTotal").innerHTML = tablaTotal + '<tr><td>&nbsp;</td>&nbsp;<td></td><td class="preUni"><b>Transporte: </b></td><td class="preTotal"><b>' +totalTransporte+ '</b></td></tr>' + '<tr><td>&nbsp;</td>&nbsp;<td></td><td class="preUni"><b>Descuento ('+(Descuento*100)+'%): </b></td><td class="preTotal"><b>' +totalDescuento+ '</b></td></tr>' + '<tr><td>&nbsp;</td>&nbsp;<td></td><td class="preUni"><b>Total: </b></td><td class="preTotal" id="totalAPagar"><b>$' +totalAPagar+ '</b></td></tr>';
	}	
	
	
	
	
//FUNCION DE PEDIR DATOS
	function pideDatos(elEvento) {
		document.getElementById("divDatos").className = "divsSi";
/**/	document.getElementById("divTotal").className = "divsNo";
/**/	document.getElementById("divPago").className = "divsNo";		
		document.getElementById("botonPago").disabled = false;
	}	

	

	
//FUNCION DE VALIDACION DE DATOS PERSONALES:
	function validaDatosPersonales(elEvento) {

		var todoBien = true;
	
	
		 //Nombre:
			var vNombre = document.getElementById("nombre").value;
			if( vNombre == null || vNombre.length == 0 || /^\s+$/.test(vNombre) || !isNaN(vNombre)) {
				todoBien=false;
				document.getElementById("nombre").className = "textMal";
			}
			else{
				document.getElementById("nombre").className = "textBien";
			}	
	
	
			
				
	
	
		//Fecha de nacimiento DIA:
			var vFechaNacimientoDia = document.getElementById("fechaNacimientoDia").selectedIndex;
			if( vFechaNacimientoDia == null || vFechaNacimientoDia == 0 ) {
				todoBien=false;
				document.getElementById("fechaNacimientoDia").className = "textMal";
			}
			else{
				document.getElementById("fechaNacimientoDia").className = "textBien";
			}
		//Fecha de nacimiento MES:
			var vFechaNacimientoMes = document.getElementById("fechaNacimientoMes").selectedIndex;
			if( vFechaNacimientoMes == null || vFechaNacimientoMes == 0 ) {
				todoBien=false;
				document.getElementById("fechaNacimientoMes").className = "textMal";
			}
			else{
				document.getElementById("fechaNacimientoMes").className = "textBien";
			}	
		//Fecha de nacimiento AÑO:
			var vFechaNacimientoAnio = document.getElementById("fechaNacimientoAño").selectedIndex;
			if( vFechaNacimientoAnio == null || vFechaNacimientoAnio == 0 ) {
				todoBien=false;
				document.getElementById("fechaNacimientoAño").className = "textMal";
			}
			else{
				document.getElementById("fechaNacimientoAño").className = "textBien";
			}	
	
	
		//Telefono:
			var vMovil = document.getElementById("movil").value;
			if( !(/^\d{9}$/.test(vMovil))  ) {
				todoBien=false;
				document.getElementById("movil").className = "textMal";
			}
			else{
				document.getElementById("movil").className = "textBien";
			}	
	
	
		//email:
			var vEmail1 = document.getElementById("email1").value;
			var vEmail2 = document.getElementById("email2").value;

		//email 1
			if( !(/^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(vEmail1)) ) {
				todoBien=false;
				document.getElementById("email1").className = "textMal";
			}
			else{
				document.getElementById("email1").className = "textBien";
			}
			
		//email 2
			if( !(/^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(vEmail2)) ) {
				todoBien=false;
				document.getElementById("email2").className = "textMal";
			}
			else{
				document.getElementById("email2").className = "textBien";
			}

		//Comparacion email 1 y 2
			if (vEmail1 != vEmail2){
				todoBien=false;
				document.getElementById("email2").className = "textMal";
			}

			
		 //Calle:
			var NombreCalle = document.getElementById("Calle").value;
			if( NombreCalle == null || vViaNombre.length == 0 || /^\s+$/.test(NombreCalle) || !isNaN(NombreCalle)) {
				todoBien=false;
				document.getElementById("Calle").className = "textMal";
			}
			else{
				document.getElementById("Calle").className = "textBien";
			}				

			
		//Numero:	
			var Numero = document.getElementById("Numero").value;
			if( Numero=="" || isNaN(Numero) ) {
				todoBien=false;
				document.getElementById("Numero").className = "textMal";
			}	
			else{
				document.getElementById("Numero").className = "textBien";
			}	

			
		 //Ciudad:
			var Ciudad = document.getElementById("Ciudad").value;
			if( Ciudad == null || Ciudad.length == 0 || /^\s+$/.test(Ciudad) || !isNaN(Ciudad)) {
				todoBien=false;
				document.getElementById("lCiudad").className = "textMal";
			}
			else{
				document.getElementById("Ciudad").className = "textBien";
			}					

			
		//Comuna:
			var vComuna = document.getElementById("comuna").selectedIndex;
			if( vComuna == null || vComuna == 0 ) {
				todoBien=false;
				document.getElementById("pcomuna").className = "textMal";
			}
			else{
				document.getElementById("comuna").className = "textBien";
			}	
	
	
		//Si no ha habido ni un solo error, se ejecuta la siguiente funcion que se encarga de mostrar el formulario de los datos personales:
		if (todoBien){
			pideDatosPago();
		}
		else{
			document.getElementById("botonConfirmar").disabled = true;
		}
	}

	
	
	
//FUNCION DE VALIDAR DATOS y PEDIR DATOS PAGO
	function pideDatosPago(elEvento) {
/**/	document.getElementById("divTotal").className = "divsNo";
/**/	document.getElementById("divDatos").className = "divsNo";
		document.getElementById("divPago").className = "divsSi";
		document.getElementById("botonConfirmar").disabled = false;
	}
	
	

	
//FUNCION DE VALIDACION DE DATOS PAGO:
	function validaDatosPago(elEvento) {

		var todoBien = true;
		
	    //Tipo de tarjeta:
		var vTarjetas = document.getElementsByName("tarjetas");
		var seleccionado = false;
		for(var i=0; i<vTarjetas.length; i++) {
			if(vTarjetas[i].checked) {
				seleccionado = true;
				//break;
			}
		}
		
				
	    //Si no ha habido ni un solo error, se ejecuta la siguiente funcion que se encarga de enviar los datos:
		if (todoBien){
			validaDatosPagoYEnviaCarro();
		}
	}

	


//FUNCION DE VALIDAR DATOS PAGO y ENVIAR DATOS
	function validaDatosPagoYEnviaCarro(elEvento) {
		alert("Gracias por su compra, en 24 horas recivira su pedido\nAhora sera redirigido a la pagina de inicio.");
		window.location.reload()
	}

	
	
	
