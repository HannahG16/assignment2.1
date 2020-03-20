
let circle1 = document.getElementById('progress1').getContext('2d'),
    circle2 = document.getElementById('progress2').getContext('2d'),
    circle3 = document.getElementById('progress3').getContext('2d');
    
 
draw(circle1,'#f707af',75,'HTML');  
draw(circle2,'#f707af', 60,'CSS'); 
draw(circle3,'#f707af', 5,'JavaScript');

circle1.font = "Oswald";
circle2.font = "Oswald";
circle3.font = "Oswald";
    
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

function filter(filter) {
    let filter_class = filter.dataset.filter;
    let all_portfolio_items = document.getElementById("portfolio-grid").getElementsByClassName("portfolio-item");

    for (let i = 0; i<all_portfolio_items.length; i++) {
      if (!all_portfolio_items[i].classList.contains(filter_class)) {
        all_portfolio_items[i].style.display = "none";
      } else {
        all_portfolio_items[i].style.display = "block";
      }
    }
}

function hoverIconBig (x){
    x.style.fontSize = "40px";
}

function hoverIconOut (x){
  x.style.fontSize = "35px";
}

function confirmation (){
  let sucessful
  if (confirm("Are you sure your ready to send!?") == true) {
    sucessful = "Successfully Sent!";
  } else {
    sucessful = "not sent";
  }
  document.getElementById("sucessful").innerHTML = sucessful;





}

let quotes = [
  'Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.',
  'Whatever the mind of man can conceive and believe, it can achieve.',
  'We become what we think about. –Earl Nightingale',
  'Challenges are what make life interesting and overcoming them is what makes life meaningful. –Joshua J. Marine',
  'Dreaming, after all, is a form of planning. –Gloria Steinem',
  'I didn’t fail the test. I just found 100 ways to do it wrong. –Benjamin Franklin',
  'Everything has beauty, but not everyone can see. –Confucius',
  'If you\'re offered a seat on a rocket ship, don\'t ask what seat! Just get on. –Sheryl Sandberg'
]

function quote() {
  let randommNumber = Math.floor(Math.random()*(quotes.length));
  
  // console.log(quotes[randommNumber]);
document.getElementById('quote_entry').innerHTML = quotes[randommNumber];
}