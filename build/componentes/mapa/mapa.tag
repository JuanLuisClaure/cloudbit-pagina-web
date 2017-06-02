const riot = require('riot')

<mapa>
<div id="map">
  <h1>aca va el mapa</h1>

</div>
<script>


this.initMap = () => {
         var uluru = {lat: -17.764258, lng:  -63.156197};
         var map = new google.maps.Map(document.getElementById('map'), {
           zoom: 16,
           center: uluru
         });
         var marker = new google.maps.Marker({
           position: uluru,
           animation: google.maps.Animation.DROP,
           map: map
         });
       }


       this.on('mount', function() {
       this.initMap()
       })
</script>
</mapa>
