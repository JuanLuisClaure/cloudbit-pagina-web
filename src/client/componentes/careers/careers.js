const riot = require('riot')

riot.tag2('careers', '<section id="careers-componente" class="container text-center" if="{lista}"> <div class="row"> <button class="col-1-3" id="{backendInfo.id}" onclick="{abrir.bind(this, backendInfo)}"> <p>{backendInfo.titulo}</p> </button> <button class="col-1-3" id="{frontendInfo.id}" onclick="{abrir.bind(this, frontendInfo)}"> <p>{frontendInfo.titulo}</p> </button> <button class="col-1-3" id="{disenadorInfo.id}" onclick="{abrir.bind(this, disenadorInfo)}"> <p>{disenadorInfo.titulo}</p> </button> </div> <div class="row"> <button class="col-6" id="{ventasInfo.id}" onclick="{abrir.bind(this, ventasInfo)}"> <p>{ventasInfo.titulo}</p> </button> <button class="col-6 post-venta" id="{postVentaInfo.id}" onclick="{abrir.bind(this, postVentaInfo)}"> <p>{postVentaInfo.titulo}</p> </button> </div> <div class="row"> <button class="col-1-3 marketing" id="{marketingInfo.id}" onclick="{abrir.bind(this, marketingInfo)}"> <p>{marketingInfo.titulo}</p> </button> <button class="col-1-3 legal" id="{legalInfo.id}" onclick="{abrir.bind(this, legalInfo)}"> <p>{legalInfo.titulo}</p> </button> <button class="col-1-3" id="{soporteInfo.id}" onclick="{abrir.bind(this, soporteInfo)}"> <p>{soporteInfo.titulo}</p> </button> </div> </section> <section class="row text-center pad-top-50 pad-bottom-50" if="{detalles}" id="sabermas"> <div class="push-2-xl col-8-xl push-2-l col-8-l push-2-m col-8-m col-full"> <button class="mark text-left" onclick="{toggle}">atras</button> <img riot-src="{datos.img}" alt="{datos.titulo}" class="img-fluid"> <h1>{datos.titulo}</h1> <hr> <p>{datos.resumen}</p> </div> </section>', '', '', function(opts) {
    this.backendInfo = {
      id:'backend',
      titulo:'INGENIERO',
      img:'./client/assets/img/backend.jpg',
      resumen:'Siempre estamo en la busca de talentos nuevos. en el area de ingenieria buscamos personas capaces de aprender en tiempos cortos de tiempo. Tener lectura veloz y estar al tanto de las novedades tecnologicas tanto de hardware como the software. Por eso todos los ingenieros que trabajan con nosotros tiene minimo dos proyectos bajo su responsabilidad. si deseas trabajar y exigirte lo mejor de vos. POSTULATE'
    }
    this.frontendInfo = {
      id:'frontend',
      titulo:'COMUNICACION',
      img:'./client/assets/img/frontend.jpg',
      resumen:'Siempre estamo en la busca de talentos nuevos. en el area de ingenieria buscamos personas capaces de aprender en tiempos cortos de tiempo. Tener lectura veloz y estar al tanto de las novedades tecnologicas tanto de hardware como the software. Por eso todos los ingenieros que trabajan con nosotros tiene minimo dos proyectos bajo su responsabilidad. si deseas trabajar y exigirte lo mejor de vos. POSTULATE'
    }
    this.disenadorInfo = {
      id:'disenador',
      titulo:'DISEÑADOR',
      img:'./client/assets/img/diseño.jpg',
      resumen:'Siempre estamo en la busca de talentos nuevos. en el area de ingenieria buscamos personas capaces de aprender en tiempos cortos de tiempo. Tener lectura veloz y estar al tanto de las novedades tecnologicas tanto de hardware como the software. Por eso todos los ingenieros que trabajan con nosotros tiene minimo dos proyectos bajo su responsabilidad. si deseas trabajar y exigirte lo mejor de vos. POSTULATE'
    }
    this.ventasInfo = {
      id:'ventas',
      titulo:'VENTAS',
      img:'./client/assets/img/ventas.jpg',
      resumen:'Siempre estamo en la busca de talentos nuevos. en el area de ingenieria buscamos personas capaces de aprender en tiempos cortos de tiempo. Tener lectura veloz y estar al tanto de las novedades tecnologicas tanto de hardware como the software. Por eso todos los ingenieros que trabajan con nosotros tiene minimo dos proyectos bajo su responsabilidad. si deseas trabajar y exigirte lo mejor de vos. POSTULATE'
    }
    this.soporteInfo = {
      id:'soporte',
      titulo:'SOPORTE',
      img:'./client/assets/img/soporte.jpg',
      resumen:'Siempre estamo en la busca de talentos nuevos. en el area de ingenieria buscamos personas capaces de aprender en tiempos cortos de tiempo. Tener lectura veloz y estar al tanto de las novedades tecnologicas tanto de hardware como the software. Por eso todos los ingenieros que trabajan con nosotros tiene minimo dos proyectos bajo su responsabilidad. si deseas trabajar y exigirte lo mejor de vos. POSTULATE'
    }
    this.postVentaInfo = {
      id:'postVenta',
      titulo:'POST-VENTA',
      img:'./client/assets/img/post-venta.jpg',
      resumen:'Siempre estamo en la busca de talentos nuevos. en el area de ingenieria buscamos personas capaces de aprender en tiempos cortos de tiempo. Tener lectura veloz y estar al tanto de las novedades tecnologicas tanto de hardware como the software. Por eso todos los ingenieros que trabajan con nosotros tiene minimo dos proyectos bajo su responsabilidad. si deseas trabajar y exigirte lo mejor de vos. POSTULATE'
    }
    this.marketingInfo = {
      id:'marketing',
      titulo:'MARKETING',
      img:'./client/assets/img/marketing.jpg',
      resumen:'Siempre estamo en la busca de talentos nuevos. en el area de ingenieria buscamos personas capaces de aprender en tiempos cortos de tiempo. Tener lectura veloz y estar al tanto de las novedades tecnologicas tanto de hardware como the software. Por eso todos los ingenieros que trabajan con nosotros tiene minimo dos proyectos bajo su responsabilidad. si deseas trabajar y exigirte lo mejor de vos. POSTULATE'
    }
    this.legalInfo = {
      id:'legal',
      titulo:'LEGAL',
      img:'./client/assets/img/legal.jpg',
      resumen:'Siempre estamo en la busca de talentos nuevos. en el area de ingenieria buscamos personas capaces de aprender en tiempos cortos de tiempo. Tener lectura veloz y estar al tanto de las novedades tecnologicas tanto de hardware como the software. Por eso todos los ingenieros que trabajan con nosotros tiene minimo dos proyectos bajo su responsabilidad. si deseas trabajar y exigirte lo mejor de vos. POSTULATE'
    }

    this.detalles = false
    this.lista = true

    this.toggle = (e) => {
      if(this.lista == true){
        this.detalles = true
        this.lista = false
      }else{
        this.detalles = false
        this.lista = true
      }
    }

    this.abrir = (datos) => {
      this.toggle()
      this.datos = datos
    }
});
