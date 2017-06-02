const riot = require('riot')
<onscroll>

  <yield/>

     <script>

     this.on('before-mount',function() {
       window.addEventListener('scroll',this.handleScroll);
       window.addEventListener('resize',this.handleScroll);
       this.inviewport = this.inViewport();
       this.prevPos = this.pos;
       return this.update();
     });

     this.on('unmount',function() {
       window.removeEventListener('scroll',this.handleScroll);
       return window.removeEventListener('resize',this.handleScroll);
     });


    this.handleScroll = e=> {
       let newval = this.inViewport();
       this.diff = this.calcDiff();
       if (newval !== this.inviewport || this.diff>5) {
         this.prevPos = this.pos;
         this.inviewport = newval;
         return this.update();
       }
     };

    this.calcDiff = () => {
       if (!this.prevPos) { return 0; }
       return Math.abs(this.pos.top-this.prevPos.top)+
       Math.abs(this.pos.left-this.prevPos.left)+
       Math.abs(this.pos.right-this.prevPos.right)+
       Math.abs(this.pos.bottom-this.prevPos.bottom);
     };

     this.inViewport = () => {
       let pos = this.root.getBoundingClientRect();
       let winheight = (window.innerHeight || document.documentElement.clientHeight);
       let winwidth = (window.innerWidth || document.documentElement.clientWidth);
       this.pos = {
         top:pos.top,
         left:pos.left,
         right:winwidth-pos.right,
         bottom:winheight-pos.bottom
       };
       return pos.bottom >= 0 && pos.right >= 0 && pos.top <= winheight && pos.left <= winwidth;
     };
     </script>

</onscroll>
