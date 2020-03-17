
let circle1 = document.getElementById('progress1').getContext('2d'),
    circle2 = document.getElementById('progress2').getContext('2d'),
    circle3 = document.getElementById('progress3').getContext('2d');
    
 
draw(circle1,'#f707af',75,'HTML');  
draw(circle2,'#f707af', 60,'CSS'); 
draw(circle3,'#f707af', 5,'JavaScript');
    
function draw(circle,color,prec,text){
    let    al  = 0;
    let    start = 4.72;
    let    cw  = circle.canvas.width;
    let    ch  = circle.canvas.height;
    let    diff;
    
    function progressSim(){
      diff = ((al / 100) * Math.PI*2*10).toFixed(2);
      circle.clearRect(0, 0, cw, ch);
      circle.lineWidth = 12;
      circle.fillStyle = color;
      circle.strokeStyle = color;
      circle.textAlign = 'center';
      
      circle.fillText(al + '%', cw*.5, ch*.45+2, cw);
        circle.fillText(text, cw*.5, ch*.55+2, cw);
      circle.beginPath();
      circle.arc(50, 50, 40, start, diff/10+start, false);
      circle.stroke();
      if(al >= prec){
        clearTimeout(sim);
      }
      al++;
    }
let sim = setInterval(progressSim, 50);
} 