(function() { // Para cargar nuestro JS despues de que se haya cargado el HTML/CSS
    'use strict';

    var regalo = document.getElementById('regalo');
    
    document.addEventListener('DOMContentLoaded', function(){

        // Ver mapa
        var map = L.map('mapa').setView([41.33158, 2.052641], 16); // En L.map se pone el nombre del Div donde quieres que aparezca, el número de la derecha es el Zoom

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([41.33158, 2.052641]).addTo(map)
         .bindPopup('GDLWebCamp 2018 <br> Boletos ya Disponibles') // El mensaje que aparece encima del marcador de ubicación
         .openPopup()
         .bindTooltip('Un Tooltip') // Esto sería para el hoover dentro del mapa
         .openTooltip();

        // Campos Datos Usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        // Campos Pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        // Botones y Divs
        var lista_productos = document.getElementById('lista-productos');
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var suma = document.getElementById('suma-total');
        

        // Extras
        var etiquetas = document.getElementById('etiquetas');
        var camisas = document.getElementById('camisa_evento');



        // Eventos

        if(document.getElementById('calcular')) { // Sirve para prevenir errores con JS

        calcular.addEventListener('click', calcularMontos); // Cuando el usuario le de click al boton calcular se ejecutará la siguiente función

        pase_dia.addEventListener('blur', mostrarDias); // Blur se queda el valor que el usuario deja al final
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);



        //Funciones
        function validarMail(){
            if(this.value.indexOf('@')> -1) { // indexOf busca un elemento en concreto y retorna 0 en caso de que lo encuentre
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            } else {
                errorDiv.style.display='block';
                errorDiv.innerHTML ='El correo electrónico no existe';
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }
        }

        function validarCampos(){
            if(this.value == ''){ // Validar que un input no venga vacio
                errorDiv.style.display='block';
                errorDiv.innerHTML ='Este campo es obligatorio';
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            } else { // Para remover en caso de que rellen el campo
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        }

        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value == '') { // Para que en caso de que el valor de la variable regalo esté vacío no pueda seguir con la compra
                alert('Debes elegir un regalo');
                regalo.focus(); // Para subrayar el por qué le está saliendo el error
            } else {
                var boletosDia = parseInt(pase_dia.value, 10) || 0, // Creas una variable para saber la cantidad de voletos (pase_dia.value) que ha elegido el comprador
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0, // ParseInt es para corroborar que no están pasando números 
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas = parseInt(camisas.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                var totalPagar = (boletosDia*30) + (boletos2Dias*45) + (boletoCompleto*50) + ((cantCamisas*10) * .93) + (cantEtiquetas*2);
                console.log(totalPagar);

                var listadoProductos = []; // [] es una forma de asegurarnos de que lo que estamos utilizando es un Array
                
                if(boletosDia >= 1) {
                    listadoProductos.push(boletosDia + ' Pases por dia');
                }

                if (boletos2Dias >= 1) {
                    listadoProductos.push(boletos2Dias + ' Pases por 2 dias');
                }

                if (boletoCompleto >= 1){
                    listadoProductos.push(boletoCompleto + ' Pases completos');
                }

                if (cantEtiquetas >= 1){
                    listadoProductos.push(cantEtiquetas + ' Etiquetas');
                }

                if (cantCamisas >= 1){
                    listadoProductos.push(cantCamisas + ' Camisas');
                }

                lista_productos.style.display = 'block'; // Para que aparezca cuando se ejecute el documento JS

                lista_productos.innerHTML = '';
                for (var i = 0; i< listadoProductos.length; i++){
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>'; // Imprime todo lo que está en el for en el elemento Resumen:
                }

                suma.innerHTML = '$ ' + totalPagar.toFixed(2); // Añade en el div suma-total el precio total de la operación, el toFixed es para que solo devuelva dos decimales y no haya problemas con el pago
            


            }   
        }

        function mostrarDias(){
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0, 
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;

            var diasElegidos = [];

            if(boletosDia>0) {
                diasElegidos.push('viernes');
            }

            if(boletos2Dias>0){
                diasElegidos.push('viernes', 'sabado');
            }

            if (boletoCompleto>0) {
                diasElegidos.push('viernes', 'sabado', 'domingo')
            }

            for (var i=0; i< diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display='block'; // Esto es debido a que el getElementById cogerá el valor de por ejemplo 'viernes' y se desbloqueará el div con el ID viernes
            }


        }

        }

    }); // DOM CONTENT LOADED

})();

$(function () {
    
    // Lettering
    $('.nombre-sitio').lettering(); // Agrega un span a cada letra del elemento para poder agregarle efectos

    // Agregar clase a Menú
    $('body.conferencia .navegacion-principal a:contains("Conferencia")').addClass('activo');
    $('body.calendario .navegacion-principal a:contains("Calendario")').addClass('activo');
    $('body.invitados .navegacion-principal a:contains("Invitados")').addClass('activo');



    // Menú fijo
    var windowHeight = $(window).height(); // Para saber la altura de tu página web
    var barraAltura = $('.barra').innerHeight(); // Para saber cuanto mide la barra

    $(window).scroll(function() { // Esto sirve para fijar un scroll dentro de tu propia página web
        var scroll = $(window).scrollTop();
        if(scroll > windowHeight) {
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura+'px'}); // Para que no haga el salto la barra y se comea los pixeles
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'}); // Para remover lo que impide el salto hacia abajo
        }
    });

    //Menú Responsiveç
    $('.menu-movil').on('click', function() {
        $('.navegacion-principal').slideToggle(); // Es un autoejecutable que en cuanto se le da a 'CLICK' en caso de que este en oculto se muestra y en caso de que se muestre se oculta
    });

    //Programa de Conferencias
    $('div.ocultar').hide();
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');

    $('.menu-programa a').on('click', function() {

        $('.menu-programa a').removeClass('activo'); // se remueve la clase para que la añada solo a la que se clica
        $(this).addClass('activo');

        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false; // para que no de el pequeño salto al darle al navegador
    });

    //Animaciones para los números
    $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200); //Nth-child selecciona el elemento en base a su número. Los parámetros que se pasan son el número que queremos que aparezca en el contador y cuantos segundos queremos que tarde en llegar a ese número
    $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 900);

    //Contador
    $('.cuenta-regresiva').countdown('2020/12/10 09:00:00', function(event) { // Como parámetro le tenemos que pasar el año y la hora al que queremos llegar
        $('#dias').html(event.strftime('%D')); // Le pasamos la ID e imprimimos el elemento
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });

    //Colorbox
    $('.invitado-info').colorbox({inline:true, width:"50%"});
});





















