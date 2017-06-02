const riot = require('riot')

<producto-dos>


<section id="producto-dos" class="pad-bottom-50 text-center" if={ enfrente }>
  <button class="clear row" onclick={ mostrarReversa }>


        <div class="col-3-5-m pad-top-50 pad-bottom-50 text-center">

          <img src={ opts.contenido.imagen } alt={ opts.contenido.titulo }>
        </div>
        <div class="col-2-5-m text-center">
      <h1>{ opts.contenido.titulo }</h1>
          <ul>
            <li> <embed src="./client/assets/img/user.svg" width="66" height="66">hola mundo algo nuevo </li>
              <li> <embed src="./client/assets/img/user.svg" width="66" height="66">hola mundo algo nuevo </li>
                <li> <embed src="./client/assets/img/user.svg" width="66" height="66">hola mundo algo nuevo </li>

          </ul>
        </div>

  </button>
</section>

<section id="producto-dos-reversa" class="pad-bottom-50 text-center" if={ !enfrente }>
  <button class="clear row" onclick={ mostrarReversa }>
    <div class="col-full-m pad-top-50 pad-bottom-50 text-center">
      <h1>una nueva forma de hacer websites</h1>
    </div>
    <div class="col-full-m pad-top-50 pad-bottom-50 text-center">
      <p>kjadlkasjlkjaslkfjaslfnvvnew SL CSjdsDOSLSD LAS VASVN A NASÑ AS</p>
      <p> ASLKASLK LA ALKS L lL l L L l L l LJPn Pan ñka nñMCÑANÑ ñnñmñsmds</p>
      <p>kasmdlakscvlka slkvnsaknclasnvlkasnvlkasnvlkasnvlkas vlka lae lkae vlkaekn la lka ñkaña area</p>
      <p>,masnlkas vasas asd asd asñlv av  ñksdb  rw ,a or lew k wkl wñ {oa ka pw pkwe pkew pew ew}</p>
    </div>
    <div class="col-full">
        <a href="#">ir a la pagina del producto.</a>
        <q cite="te redirije a otra pagiana">:Ds</q>
    </div>
  </button>
</section>

<script>

  this.enfrente = true


  this.mostrarReversa = (e) => {
    if (this.enfrente === true) {
      this.enfrente = false

    }else{
      this.enfrente = true

    }
  }
</script>



</producto-dos>
