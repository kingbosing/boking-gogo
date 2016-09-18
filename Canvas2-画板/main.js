/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {
    var canvas=document.getElementById('canvas');
    var king=canvas.getContext('2d');

    king.beginPath();

    var mo=true;
    canvas.addEventListener('mousedown',function (e) {
        var x1=e.pageX;
        var y1=e.pageY;
        king.moveTo(x1,y1);

        canvas.onmousemove=function (e) {
            var x=e.pageX;
            var y=e.pageY;
            king.lineTo(x,y);
            console.log(x,y);
            king.strokeStyle='green';
            king.stroke();
        };
        king.closePath();
    });

    canvas.addEventListener('mouseup',function () {
        console.log(1);
        canvas.onmousemove=' ';
    });










    // king.strokeStyle='green';
    // king.stroke();
    // king.closePath();

})();