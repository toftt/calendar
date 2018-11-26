var c = document.getElementById('canv'), 
    $ = c.getContext("2d");
var w = c.width = document.documentElement.clientWidth, 
    h = c.height = document.documentElement.clientHeight;

Snowy();
function Snowy() {
  var snow, arr = [];
  var num = 400, tsc = 1, sp = 1; //decreased snow from 600 to 400
  var sc = 1.3, mv = 20, min = 1; 
    for (var i = 0; i < num; ++i) {
      snow = new Flake();
      snow.y = Math.random() * (h + 50);
      snow.x = Math.random() * w;
      snow.t = Math.random() * (Math.PI * 2);
// following two 0.5
      snow.sz = 0.5*(100 / (10 + (Math.random() * 100))) * sc;  
      snow.sp = 0.5*(Math.pow(snow.sz * .8, 2) * .15) * sp;
      snow.sp = snow.sp < min ? min : snow.sp;
      arr.push(snow);
    }
  go();
  function go(){
    window.requestAnimationFrame(go);
      $.clearRect(0, 0, w, h);
      $.fillStyle = 'hsla(242, 95%, 3%, 0)';
      $.fillRect(0, 0, w, h);
      $.fill();
        for (var i = 0; i < arr.length; ++i) {
          let f = arr[i];
          f.t += .05;
          f.t = f.t >= Math.PI * 2 ? 0 : f.t;
//following two 0.7
          f.y += 0.7*f.sp;
          f.x += 0.7*Math.sin(f.t * tsc) * (f.sz * .3);
          if (f.y > h + 50) f.y = -10 - Math.random() * mv;
          if (f.x > w + mv) f.x = - mv;
          if (f.x < - mv) f.x = w + mv;
          f.draw();}
 }
 function Flake() {
   this.draw = function() {
      this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
      this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
      this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
      $.moveTo(this.x, this.y);
      $.fillStyle = this.g;
      $.beginPath();
      $.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
      $.fill();}
  }
}
/*________________________________________*/
window.addEventListener('resize', function(){
  c.width = w = document.documentElement.clientWidth;
  c.height = h = document.documentElement.clientHeight;
}, false);