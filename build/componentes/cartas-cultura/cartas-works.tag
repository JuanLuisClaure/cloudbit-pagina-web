const riot = require('riot')

<cartas-works>

<section id="cultura-section" class="row pad-top-50 pad-bottom-50 text-center" if={ lista } >
<div class="container ">


<ul each={ x in cultura } class="pull-1-xl col-3-xl  col-3-l  col-3-m  push-1 col-10">
  <li>
    <button onclick={ verMas.bind(this, x) }>
        <hr style="border:1px solid grey;" >
    <h3 class="pad-top-10"><u>{ x.trabajo }</u></h3>

    <p class="pad-bottom-10"><em> { x.orientacion }</em></p>
    <hr style="border:1px solid grey;" >

    </button>
  </li>
</ul>
</div>
</section>
<section id="cultura-mas" class="row text-center pad-top-50 pad-bottom-50" if={ detalles }>


    <button onclick={ toggle } class="push-1-xl col-10-xl push-1-l col-10-l push-1-m col-10-m push-1 col-10">
    <div style={ datos.img } class="background">
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>

    </div>
    <hr style="border:1px solid grey;">
    <h1><u>{ datos.trabajo }</u></h1>
    <p>{ datos.mensaje }</p>
    <hr style="border:1px solid grey;">
      <p> <b>cliente:</b>{ datos.nombre }</p>
    </button>



</section>
<script>

  this.cultura = [
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI RECARGA, MI PREMIO', mensaje:'Aplicación que permite acumular las recargas realizadas por una cuenta y luego determinar el “premio” que corresponda según la regla configurada, ya sea otra recarga o SMS gratis, MB gratis o minutos libres.', id:'1', orientacion:'Revenue'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI CUMPLEAÑOS', mensaje:'Aplicación que permite elegir al cliente un combo de regalo, al determinar que el dueño de la línea ha cumplido un año más de vida. El “regalo” podrá ser elegido, minutos, sms o mb gratuitos.', id:'2', orientacion:'Loyalty'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI ANIVERSARIO', mensaje:'Aplicación que permite elegir al cliente un combo atractivo, al determinar que la línea ha cumplido un año más en la compañía. El “regalo” podrá ser elegido con un “%” de descuento.', id:'3', orientacion:'Anti-Churn'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'SMS BROADCAST', mensaje:'Aplicación que permite el envío de SMS basados en tipo de cliente, ARPU, ciudad, radio base, sexo, antigüedad de la línea. Esta aplicación es altamente parametrizable, basados en datos del cliente.', id:'4', orientacion:'Revenue'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI CAMPAÑA', mensaje:'Aplicación que permite el envió de campañas de combos que el cliente puede adquirir con tan solo responder “SI” al mensaje que es enviado vía broadcaster.', id:'5', orientacion:'Revenue'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI SALVACION', mensaje:'Aplicación que permite realizarse préstamo de “crédito” que luego puede ser utilizado para la compra de combos, realizar llamadas, envío de SMS o navegación. Por dichos prestamos se puede cobrar un “fee” que es cobrado en su próxima recarga', id:'6', orientacion:'Revenue'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI ELECCION', mensaje:'Aplicación que permite ofrecer al cliente un combo basado en su historial de compras, dicha oferta se la realiza posterior a cualquier recarga. La recarga es realizada y posterior a esta el cliente recibe una notificación con los combos más utilizados, la compra se realiza con tan solo responder con el número de combo', id:'7', orientacion:'Revenue'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI CUENTA-360', mensaje:'Aplicación orientada a clientes corporativos, que le permite obtener extracto de cuenta, consulta de facturas, consulta de saldos.', id:'8', orientacion:'Loyalty'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI PORTAL', mensaje:'Aplicación que permite a un cliente que ha quedado sin saldo o expirado su combo, pueda ser redirigido a un portal que le permita realizar la recarga de tarjeta y posterior compra de combos de internet, además que podrá ver su saldo en MB.  Este portal también puede ser usado cuando el proveedor pierde el acceso a internet.', id:'9', orientacion:'Revenue'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MIS COMBOS', mensaje:'Aplicación que permite a un cliente poder elegir la compra de uno o varios combos, ya se interactuando vía SMS, Webservice, APP mobile o USSD. Se puede elegir el precio, los MB, SMS, Internet que corresponden al combo, expiración y modo de pago', id:'10', orientacion:'Revenue'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'A PRIMERA VISTA', mensaje:'Aplicación que permite obtener los datos de cliente, datos de facturación, productos adquiridos, datos más relevantes. Todo esto, desde una sola pantalla, todos nuestros productos informan a esta plataforma, de esta forma, se puede obtener la información consolidada del cliente.', id:'11', orientacion:'Call Center'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI LISTA NEGRA', mensaje:'Aplicación que permite definir un listado de cuentas que no pueden adquirir ciertos productos, esta plataforma expone “n” interfaces para incluir/excluir cuentas de lista negra.', id:'12', orientacion:'Transparencia'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'SMS CORPORATIVOS', mensaje:'Aplicación que permite a un cliente corporativo el envío de sms promocionales de la empresa, estas propagandas (SMS) son cargadas a la aplicación y son enviadas a los clientes que están “atachados” a ciertas radio bases y en determinados horarios.', id:'13', orientacion:'Corporativos'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI PROMOCIÓN', mensaje:'Aplicación que permite a un cliente corporativo regalar a sus clientes SMS, MB, minutos de cualquier compañía. Ejemplo: PIL decide regalar 10SMS a todos sus clientes que compren un producto “X”, PIL envía imprimir códigos secretos que luego son enviados vía SMS a la plataforma y esta entiende dicho código y procede a regalar lo definido-', id:'43', orientacion:'Corporativos'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI FAMILIA', mensaje:'Aplicación que permite a un cliente poder definir un listado de cuentas que son parte de su grupo familiar y poder obsequiarle combos o recargas, ya sean on demmand o programadas pero que son debitados de su línea.', id:'43', orientacion:'Loyalty'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI FRATERNIDAD', mensaje:'Aplicación que permite a un cliente poder definir un listado de “x” cuentas y todo el tráfico entre estas cuentas tienen un precio diferenciado, pero el cobro por el servicio es diario.', id:'44', orientacion:'Loyalty'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI NUMERO BONITO', mensaje:'Aplicación que permite a un cliente poder cambiar de número, a un número atractivo y fácil de utilizar, los algoritmos que permite conocer el “número bonito” son definidos en la APP y el cobro se realiza por el servicio, la línea mantiene su antigüedad.', id:'45', orientacion:'Loyalty'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI BILLETERA', mensaje:'Aplicación que permite la integración con la plataforma de Billetera Móvil y que sirve para poder realizar la compra de cualquier combo con debito a la billetera móvil del cliente.', id:'46', orientacion:'Reveneu'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI SUSCRIPCIÓN', mensaje:'Aplicación que permite la integración con Netflix, Dezeer, Buzuu y otras aplicaciones, el cliente compra la suscripción con debito a su billetera móvil o débito a su crédito, con esta integración se incrementa el tráfico de internet', id:'47', orientacion:'Reveneu'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'MI TIENDA DIGITAL', mensaje:'Aplicación mobile que permite la compra de todos estos productos desde una APP, ya sea para Android o IOS. Todos los productos estarán disponibles para la compra y así diversificar los medios de compra, al tiempo de mejorar la experiencia del usuario.', id:'48', orientacion:'Reveneu'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'NOMINACION', mensaje:'Aplicación que permite cumplir con la normativa Boliviana, de que toda línea nueva o teléfono nuevo deba ser nominado, permite la integración con el SEGIP, manejo de listas blancas, negras y grises.', id:'49', orientacion:'Anti-Chrun'},
    {img:'background-image: url("./client/assets/img/wrok1.png")', nombre:'TELCO', trabajo:'ACTIVACIONES', mensaje:'Aplicación que permite cumplir con el proceso de activación de una línea prepago, ', id:'50', orientacion:'Anti-Chrun'},















  ]
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


  this.verMas = (datos) => {
    this.toggle()
    this.datos = datos
  }





</script>

</cartas-works>
