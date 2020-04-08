// (c) 2020 by asmaa (https://codepen.io/asmaa-mohammed/pen/vxzroy)
/* This part of the JS file creates the circle progress bars which are shown on the index.html page which represent a proportion of the skills
i hold within that area. To start an if statement was used to check that if all three id's were present on the specific page then complete the 
following, this was because an error was shown as when on another page the file couldnt find any elements with matching id's preventing the code from completing 
other parts of the JavaScript. if they are present then it creates three variables circle 1,2 and 3. These are set to equal the id on the index.html page 
within the canavases. These are then styled through the draw function which enables the colour, amount of percentage and the text to be inserted by using the function
created below. The font is then set for each circle to match the house style of the document. The draw function takes in the circle, color,prec and text previously stated,
variables are then created to hold values used to help create the shape of the circles.
  
*/ 
if (document.getElementById('progress1') && document.getElementById('progress2') && document.getElementById('progress3')){
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
      
      /* the progressSim function creates the movement of the function when the page is loaded. The diff creates the circle, the clear rect creates
      the canvas which is used to hold the shape, the line width defines how thick the circle border is, the fill style is set to the colour stated above,
      similar to the stroke style. The text alligns to the center. The fill text is set to the al value with the % text and is set between the canvas dimensions.
      The begin path starts to draw the shape, the arc creates the circluar shape movement using the start position given and te diff value. 
      if the al variable is greater than the prec percentage value then it will complete the clearTimeout function using the sim variable set below which sets the interval to 50.
       */
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

/* in order to have the navigation displayed on every page without being created within the JS file i decided to have a seperate html document holding the navigation section,
a xml Http Request is then used by assigning it to the navigation variable. A xml Http Request object interacts with the server allowing one part of a document to be updated without 
a whole page having to be refreshed and stop what the user is doing. In this case the request is getting the navigation.html file and when the page is changed / loaded it will complete
the following function. this function looks for any id within the html documents called nav and inserts the navigation.html text inside. This is then sent at the end meaning the navigation
only needs to be in one file and not on every page */
 let navigation = new XMLHttpRequest();
 navigation.open('GET', 'navigation.html');
 navigation.onreadystatechange= function() {
 document.getElementById('nav').innerHTML= this.responseText;
 };
 navigation.send();


