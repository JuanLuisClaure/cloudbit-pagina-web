const riot = require('riot')
riot.tag2('header', '<div class="banner"> <div style="padding:0.11em 0em;"> <div class="row clear"> <section id="large-header"> <div class="col-3-xl col-3-l col-3-m pad-top-5 text-left" id="logotipo-header"> <a href="#/" class="text-center"> <img src="./client/assets/img/logo-fondo-transparente.png" alt="La mejor empresa de software en Bolivia" class="img-fluid"> </a> </div> <div class="push-1-xl col-8-xl push-1-l col-8-l push-1-m col-8-m pad-top-25 text-right" id="sociales-header"> <ul> <li><a href="#/inicio">INICIO</a></li> <li><a href="#/servicios">SERVICIOS</a></li> <li><a href="#/productos">PRODUCTOS</a></li> <li><a href="#/cultura">CULTURA</a></li> <li><a href="#/contrataciones">CONTRATACIONES</a></li> <li><a href="#/equipo">EQUIPO</a></li> <li><a href="#/contacto">CONTACTO</a></li> <li style="border:2px solid #0066cb;"><a href="https://botchat-cloudbit-atencion-al-cliente.now.sh/">CHAT-BOT</a></li> </ul> </div> </section> <section id="mobile-header"> <div class="clear row pad-top-20"> <div class="push-1 col-2"> <img src="./client/assets/img/mstile-150x150.png" class="fluid-img" alt="" style="width: 222%;"> </div> <div class="push-6 col-3 text-center"> <button onclick="{abrirSideMenu}" style="background-color:transparent;"> <embed src="./client/assets/img/menu-4.svg"> </button> </div> </div> <div if="{none}" id="sidemenu" class="row" onclick="{abrirSideMenu}"> <ul> <li><a href="#/inicio">INICIO</a></li> <li><a href="#/servicios">SERVICIOS</a></li> <li><a href="#/productos">PRODUCTOS</a></li> <li><a href="#/cultura">CULTURA</a></li> <li><a href="#/contrataciones">CONTRATACIONES</a></li> <li><a href="#/equipo">EQUIPO</a></li> <li><a href="#/contacto">CONTACTO</a></li> <li style="border:2px solid #0066cb;"><a href="https://botchat-cloudbit-atencion-al-cliente.now.sh/">CHAT-BOT</a></li> </ul> </div> </section> </div> </div> </div>', '', '', function(opts) {

	this.botonTexto = 'menu';

	this.none = false;

	this.abrirSideMenu = function (click) {
		if(this.none == false){
			this.none = true
		}else if(this.none == true){
			this.none = false
		}else {
		console.log('error');
		}
	};

});
