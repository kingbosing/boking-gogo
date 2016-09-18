/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {
    var canvas=document.getElementById('canvas');
    var king=canvas.getContext('2d');

    king.beginPath();
    king.fillStyle="#FF0000";
    king.arc(200,200,200,0,Math.PI*2,true);
    king.fill();
    king.closePath();

    king.beginPath();
    king.fillStyle="#fff";
    king.arc(200,200,160,0,Math.PI*2,true);
    king.fill();
    king.closePath();

    king.beginPath();
    king.fillStyle="#f00";
    king.arc(200,200,120,0,Math.PI*2,true);
    king.fill();
    king.closePath();

    king.beginPath();
    king.fillStyle="#00f";
    king.arc(200,200,80,0,Math.PI*2,true);
    king.fill();
    king.closePath();

    king.beginPath();
    for(var i=0;i<6;i++){
        var ox=80*Math.cos(i*72*2*Math.PI/180-Math.PI/2)+200;
        var oy=80*Math.sin(i*72*2*Math.PI/180-Math.PI/2)+200;
         king.lineTo(ox,oy);
    }
    king.stroke();
    king.fillStyle='#fff';
    king.fill();
    king.closePath();

    /*
     *
     *
     *
     *
    * */
    // king.beginPath();
    // king.translate(800,200);
    // king.moveTo(0,0);
    // king.arc(0,0,100,0,Math.PI*9/6,true);
    // king.fill();
    // king.closePath();
    //
    // king.beginPath();
    // king.moveTo(0,0);
    // king.fillStyle="#00f";
    // king.arc(0,0,100,Math.PI*9/6,Math.PI*5/6,true);
    // king.fill();
    // king.closePath();
    //
    // king.beginPath();
    // king.moveTo(0,0);
    // king.fillStyle="#FF0000";
    // king.arc(0,0,100,Math.PI*5/6,Math.PI*1/2,true);
    // king.fill();
    // king.closePath();

    king.translate(800,200);
    function create(color,begin,stop) {
        king.beginPath();
        king.moveTo(0,0);
        king.fillStyle=color;
        start=Math.PI*2*begin/360;
        end=Math.PI*2*stop/360;
        king.arc(0,0,100,start,end,false);
        king.fill();
        king.closePath();
    }
    function ti(stop,x,y) {
        king.save();
        king.beginPath();
        king.clearRect(x, y-10,30, 20);
        king.fillStyle='green';
        king.font='15px 宋体';
        king.closePath();
        king.fillText(Math.floor(stop/360*100)+"%",x,y);
        king.restore();
    }

    var speed=10,stop=0;
   var id=setInterval(function () {
        stop+=speed;

       if(stop<=60){
           create('red',0,stop);
           ti(stop,80,80);
       }else if(stop<=150){
           create('green',60,stop);
           ti(stop-60,-80,100)
       }else if(stop<=270){
           create('blue',150,stop);
           ti(stop-150,-90,-90)
       }else{
           create('yellow',270,stop);
           ti(stop-270,80,-80)
       }

        if(stop>=360){
            clearInterval(id);
        }
    },100)






})();