const riot = require('riot')
import '../../componentes/header/header'
import '../../componentes/footer/footer'
import '../../componentes/headeroom/headeroom'
import '../../componentes/quotes/quotes'
import '../../componentes/careers/careers'
import '../../componentes/pasantes/pasantes'
import '../../componentes/onscroll/onscroll'
<trabajos-page>
  <onscroll>
    <header class="{ (pos.top>-100)? 'block':'fixed' }"></header>
  </onscroll>
<headeroom></headeroom>
<quotes contenido={ quotePage }></quotes>
<careers></careers>
<pasantes></pasantes>
<footer></footer>


<script>
  this.quotePage = {quote:'Te sentis con ganas de evolucionar a un informatico con poderes de spiderman?', autor:'postula ya!'}
</script>
<style>
  .fixed{
    position: fixed;
    z-index:10;
    background-color: rgba(233, 233, 233, 0.92);
    box-shadow: 0em 0.24em 0.92em #051923;
    transition: all 2s;
    width: 100%;
    margin-top: -1em;

  }
  .block{
    position:absolute;
    z-index:10;
    transition: all 3s;
    background-color: transparent;
    width: 100%;
  }
  .si{

    opacity: 1;

    transition: all 5s;

  }
  .no{

    opacity: 0;

    transition: all 5s;

  }
</style>

</trabajos-page>
