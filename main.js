// (c) 2020 by asmaa (https://codepen.io/asmaa-mohammed/pen/vxzroy)
/* This part of the JS file creates the circle progress bars which are shown on the index.html page which represent
*/ 
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

/*this function allows the portfolio items to be filtered into sections depending on which button the user clicks, this is done by when the button is clicked the data specified is 
sent to the function as well as which button has been clicked. The data passed through is placed within a variable. Inside another variable all the items with an id of portfolio-grid and a class name of portfolio-item
are placed inside which is all of them. A loop is then used to go through the length of that variable and increment by 1 each time. If the portfolio_all_items variable doesnt have the matching filter class then
it is not shown, else it is shown. This allows it to be filtered between the 4 buttons only showing the required portfolio items.
*/
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

//this function resizes the icons with the function included within the onmousehover to be 40px making the effect of the icon enlarging on hover.
function hoverIconBig (x){
    x.style.fontSize = "40px";
}

// this function resizes the icons with the function included within the onmouseout to be 30px, their normal size creating an effect of the icon returning to normal size.
function hoverIconOut (x){
  x.style.fontSize = "35px";
}

/* this function creates an effect that when the user sends the contact form and clicks confirm, a confirmation message is shown to ensure it has been sent to the user. This is done
by creating a variable called sucessfull, if the user clicks confirm in the message box which is shown on the page its equal to true so set the text in the variable to say sucessfully sent,
else set the string stored within sucessful be set to not sent. The element within the html document with the id sucessful is then set to equal the variable which will show the 
message when required. */
function confirmation (){
  let sucessful
  if (confirm("Are you sure your ready to send!?") == true) {
    sucessful = "Successfully Sent!";
  } else {
    sucessful = "not sent";
  }
  document.getElementById("sucessful").innerHTML = sucessful;





}

//A variable is created called quotes which holds an array of multiple different quotes
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

/* this function, called quote, generates a random quote to be shown when the click me button is clicked using the quotes variable created above. This is done by creating a variable 
called randomNumber, this is then set to hold a random number up to the length of the quotes array as each one has its own index, the Math.floor method then makes this round down to the nearest whole number.
The element with the id of quotes_entry is then found within the document and set to the variable quotes with the random number selecting the index of the correct quote to display, this means 
each time the button is clicked a new random number is calculated therefore showing a new quote.
*/
function quote() {
  let randommNumber = Math.floor(Math.random()*(quotes.length));
  document.getElementById('quote_entry').innerHTML = quotes[randommNumber];
}


 let navigation = new XMLHttpRequest();
 navigation.open('GET', 'navigation.html', true);
 navigation.onreadystatechange= function() {
     document.getElementById('nav').innerHTML= this.responseText;
 };
 navigation.send();

 let navigation1 = new XMLHttpRequest();
 navigation1.open('GET', 'navigation.html', true);
 navigation1.onreadystatechange= function() {
     document.getElementById('nav1').innerHTML= this.responseText;
 };
 navigation1.send();