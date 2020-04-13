# assignment2.1

### Professional Profile Links
- GitHub 	https://github.com/HannahG16
- Twitter	https://twitter.com/hannahgoodridg1
- Stack Overflow	https://stackoverflow.com/users/12774038/han24072018?tab=profile
- Dev 	https://dev.to/hannahg16
- LinkedIn https://www.linkedin.com/feed/?trk=guest_homepage-basic_sign-in-submit

### Github Sync Evidence
This is my contribution grid from my github account;

![contribution Grid](images/contributionGrid.png)

This is evidence of me syncing my work to github consistantly from the begining of term;

![syncing to github](images/Repos.png)

### Code Validation 

To check that there are no errors within my code I put it into the W3C validator which looks through your document to find any errors within the code allowing the user to fix the issues which appear.  

**HTML**

When I put my code through the HTML validator it came up with the following errors;

![HTML validation](images/HTMLvalidation.png)

The first error which appeared I had received previously in my assignment 1 validation and concerned the google fonts api link. The error was stating the line character is illegal. I went into my code and attempted to change the line to a different character however when viewed it wouldn’t work. I was unsure about changing it because it was copied from the google fonts website as a reference which sourced the fonts through this link. I decided to leave it the same because it works and doesn’t affect the look of the website.

The second warning to appear was that there was an empty heading 2 tag, this is being used within the random quote generator to hold the quote which is generated when the click me button is pressed. This wont need to hold any text as it should only show the quote when the user clicks. I decided to leave the empty h2 tag because it was necessary for the required code to be held within. 

The third warning was about only having the h1 tag as the heading only and not used for other elements, after researching I discovered this was due to search engines penalising websites for having more and one h1 tag per page in regard to search engine optimisation. As my site isn’t being used in this manor I decided to leave the tags as the same, however keeping this in mind when designing and building websites in the future. 

**CSS**

I then ran my site through the CSS validator which is also present on W3C to check my CSS code. It came back that some of the values weren’t recognised within the CSS such as the minmax and the margin-block-start. I didn’t understand what this meant because they make a difference on the user interface when removing them from the code meaning they do exist else they wouldn’t be changing anything on the page. 

![CSS validation](images/CSSvalidation.png)

When I investigated futher I founf multiple comments like this one shown below which states that it doesn’t check for the latest version of CSS even though it does say this, this means that that property doesn’t exist in the earlier versions so is therefore picking up on this when validating. 

![CSS validation comment](images/comment.png)

I found another online validator to check my CSS code, no errors were shown only warnings which could happen. One of these includes the alphabetical order of the properties within their containing elements. This can be sorted by reordering the properties within the classes, so they are in alphabetical order. Another warning was concerning using rgba colours, older browsers might not support using rgba so having a fallback colour using rgb can make sure the colour stays the same in older browsers. Another warning was not to include any values with a 0% border radius as they is the default value, however I have used this to change the image border radius from 10% to 0% when hovered over, I couldn’t find another way to complete this without stating the border radius as 0% so have kept this the same. The last waring received was to only allow transitions under 60fps meaning it is very slow, I have changed this to 0.5s within my code to allow a faster transition speed allowing the user to see it more effectively.  

![CSS validation Up to date](images/cssvalidation2.png)

**JavaScript**

When I put JavaScript file through an online validator the following errors were shown;

![JS validation](images/jsvalidation.png)

The easiest error to fix was the missing semicolons, there were two missing from within the file, I went into my code and put them in where they were missing. The second error was that putting .5 numbers rather than 0.5 can cause confusion and could potentially miss lead people into thinking they were dots, this again was easy to solve, and I just put a 0 Infront of the decimal points, this fixed this error. The first error concerns the function which draws the circles to show the skills I hold. I took this function from an existing codepen project and changed it to fit with the style I wanted. The error is concerned with putting the second function within the block of the first one which makes the code more complicated. This should be declared outside the block and used within the other function. Although I understand the JavaScript used within this function I couldn’t work out how to change the function to fix this error without breaking the code. This is something I’m going to investigate further and attempt to fix in the future. I put my code back through the code validator and the only error present was the function error which I expected.  

![JS validation re run](images/redonejs.png)

### Wireframes
**About Me wireframe**

This wireframe shows the layout for the about me index page, the navigation bar section is present on the left which contains an image of myself as well as all the links to the other pages as well as some links to my professional profiles. this is shown on every page making it look like only the content on the right is changing depending what page the user is on. The information is split into a grid layout making it fun but simple at the same time. Links are shown futher down the page as well as the click on me button which activates a random quote. 

![about me wireframe](images/figma1.PNG)

**Portfolio wireframe**

This the portfolio page wireframe which shows the grid layout of the projects which I have completed. The user can choose what types of examples they wish to see by clicking the filtering buttons along the top of the grid. You can see the titles which will be shown when the image is hovered over as well as the heading of the whole page following the previous style on the home page.


![portfolio wireframe](images/figma2.PNG)

**Contact me wireframe**

This wireframe shows the contact page which consists of a contact form. The contact form is simple and minimalistic with only the four main inputs which are required to gain contact with me. The sucessfully sent message is shown when the user selects they do wish to send the form through the pop up message providing validation.

![contact me wireframe](images/figma3.PNG)

**CV wireframe**

This is the wireframe for the cv page showing the three main columns used within the grid layout as well as content and headings which will be shown in each part. The navigation is still present and contains the same information as previous to create a consistent house style throughout.

![cv wireframe](images/figma4.PNG)

**Mobile Portfolio wireframe**

This is an example of the mobile version of the portfolio page, as you can see the navigation bar moves to the top of the page and the icons go into a footer at the bottom of the page, the content style stays the same however the grid changes to only 1 column meaning the user must scroll down to view the grid. 

![mobile portfolio example wireframe](images/figma5.PNG)
