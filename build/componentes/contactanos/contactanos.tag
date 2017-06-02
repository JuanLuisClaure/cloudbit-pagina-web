  const riot = require('riot')

<contactanos>


<section id="contactanos-resumen" class=" pad-bottom-50 row clear text-center">
  <div class="col-full pad-bottom-50">
    <h1>Conoce mas de nosotros</h1>
    <hr>
  </div>

  <div class="col-6-xl col-6-l col-6-m col-full pad-top-50 pad-bottom-50">
        <embed  src="./client/assets/img/user.svg" width="50" height="50">
      <p>Conoce al equipo cloudbit y su compromiso con nuestra cultura</p>
      <button onclick={ href }><a href="#/people">conocenos</a></button>
  </div>
  <div class="col-6-xl col-6-l col-6-m col-full pad-top-50 pad-bottom-50">
      <embed src="./client/assets/img/agenda.svg" width="50" height="50">
      <p>Comunicate con nosotros y conoce nuestras oficinas</p>
      <button onclick={ ref }><a href="#/contacto">contactanos</a></button>
  </div>
</section>

<script>
  this.href = () => {
    location.href = 'http://www.cloudbit.com.bo/#/equipo'
  }

  this.ref = () => {
    location.href = 'http://www.cloudbit.com.bo/#/contacto'
  }
</script>
</contactanos>
