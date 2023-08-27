# cogniCraft

This is a memory game web application which is fully responsive. This site has been built to showcase my initial javascript skills as my very first Java code!

![Am I responsive](assets/images/readme/amiresponsive.png)

[View cogniCraft on github pages ](https://nmyhi.github.io/cogniCraft/)

---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

### Initial Discussion

cogniCraft is a simple 16 tiles memory game. The game has a main menu: play, High-Scores and Help.
The goal is to beat the 16 tiles memory game within the least amount of time.

### User Stories

#### Client Goals

* To navigate in the menu.
* To play the game.
* To have fun by trying to comple it within the least amount of time.
* To access previously played time record in the High Score menu.
* To access the developer's personal social-media using the footer links.

#### First Time Visitor Goals

* I want to play the game with no issues
* I want to navigate in the menu

#### Returning Visitor Goals

* I want to beat my previous record
* I want to be able to contact the developer if I need to.

#### Frequent Visitor Goals

* I want to have fun!


## Design

### Colour Scheme

I have chosen a vibrant colour sceme for this project and tried to make it interesting.

I like to include a palette of the colour scheme here, my favourite site for creating a colour palette is [coolors](https://coolors.co/), but there are lots of other sites that also do the same thing, like [ColorSpace](https://mycolor.space/?hex=%23F5F5F5&sub=1), [Muzli Colors](https://colors.muz.li/), [Adobe Colour Wheel](https://color.adobe.com/create/color-wheel) and [Canva](https://www.canva.com/colors/color-palette-generator/) to name a few.

![Colour Scheme](assets/images/readme/colourscheme.png)

### Typography

I have imported a font family for this project from google fonts. It is callled: Share Tech Mono

I chose this font style because I think it's sci-fi appereance matches with my game style.

I used font-weight: 400.

I also like to include an image of the fonts chosen as a reference.

![Font style reference](assets/images/readme/fontreference.png)

[Google Fonts](https://fonts.google.com/) is a popular choice for importing fonts to use in your project, as it doesn't require you to download the fonts to use them.

### Imagery

I used a single image for this project which has been created by my graphics designer friend. I used the image as the game logo and the favicon.

![logo image](assets/images/logo.png)

### Wireframes

Desktop view wireframes:

[Main Menu](assets/images/readme/desktopmainmenuwireframe.png)

[Game](assets/images/readme/desktopgamewindowwireframe.png)

[Hi-Scores](assets/images/readme/desktophiscoreswireframe.png)

[Help](assets/images/readme/desktophelpwireframe.png)

Mobile and tablet view wireframes:

[Main Menu](assets/images/readme/mobilemainmenuwireframe.png)

[Game](assets/images/readme/mobilegamewindowwireframe.png)

[Hi-Scores](assets/images/readme/mobilehiscoreswireframe.png)

[Help](assets/images/readme/mobilehelpwireframe.png)

There are lots of different options to create your wireframes - Code Institute students can access [Balsamiq](https://balsamiq.com/) as part of the course.

Some other options include [Figma](https://www.figma.com/), [AdobeXD](https://www.adobe.com/products/xd.html), [Sketch](https://www.sketch.com/?utm_source=google&utm_medium=cpc&adgroup=uxui&device=c&matchtype=e&utm_campaign=ADDICTMOBILE_SKETCH_GAD_DG_UK_T1_ALWAYS-ON_S_TRF_PROS_BRAND&utm_term=sketch&utm_source=google&utm_medium=cpc&utm_content=TOF_BRND__generic&hsa_acc=8710913982&hsa_cam=16831089317&hsa_grp=134620695759&hsa_ad=592060065319&hsa_src=g&hsa_tgt=kwd-14921750&hsa_kw=sketch&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwr4eYBhDrARIsANPywCjRIFn93DMezYnsyE5Fic_8l8kynJtut0GYMU01TiohHjwziFtlH0gaAhteEALw_wcB) and [Mockup](https://apps.apple.com/us/app/mockup-sketch-ui-ux/id1527554407) to name just a few! Or you can even go old school and get those wireframes completed using pen and paper. Just snap an image of the completed wireframes to add the images to the README.

## Features

### General features on each page

The website is comprised a Main menu page, a High-Scores page and a Help page.

These pages DOM are modified by the javascript code.

All pages on the website are responsive and have: 

* A favicon in the browser tab.

![Favicon tab](assets/images/readme/favicontab.png)

* A header with the game title and logo.

![Header screenshot](assets/images/readme/headerscreenshot.png)

* A footer with my own social links.

![Footer screenshot](assets/images/readme/footerscreenshot.png)

The Main menu prvides 3 options.

![Main Menu](assets/images/readme/mainmanuscreenshot.png)

* Play menu: After clicking on the main menu the javascript code modifies the DOM and a gamescreen appeares with
an input window for entering the Username. The site will not let you to enter only spaces as a username and the maximum characters are limited to 15.

![Play area](assets/images/readme/playwindow.png)

* After the game starts the player has to find all the matchink colour pairs as fast as possible. The username displays in the top
 left corner and the timer displays in the top riht corner.

 ![Ingame Screenshot](assets/images/readme/ingamescreenshot.png)

* When the player managed to find all the matching pairs the game displays the username and the time in the same window which was 
the username input before. The player clicks the Save and Reset button and the highscore gets saved in the localstorage.

![Endgame](assets/images/readme/endgamescreenshot.png)

High Scores Screen

* In the high-scores menu the javascript code reads the data from the localstore and displays them in a top-10 Highscore table.
In the scrrenshot you can see incorrectly saved username data which still remained in my localstorage from an earlier stage of developement.

![High-Scores](assets/images/readme/highscorescreenshot.png)

Help menu

* The help page provides some information about the game mechanics in case someone would need it.

![Help](assets/images/readme/helpscreenshot.png)

Each page has a menu button which takes back to the main menu. In reality the javascript code modifies the DOM. The whole game is using only one html file(index.html)

### Future Implementations

* Sounds
* Dynamic bakground
* Ability to display global high-scores
* different levels with more tiles
* Add a sweetalert to the project for the case when the user enters an all spaces username
* Hover effects

### Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. I have achieved this by:

* Using semantic HTML.
* Using descriptive alt attributes on images on the site.
* Ensuring that there is a sufficient colour contrast throughout the site.
* Ensuring menus are accessible.
* Using rel attributes on the anchor tags.

## Technologies Used

### Languages Used

* HTML
* CSS
* JavaScript

### Frameworks, Libraries & Programs Used

* [Balsamiq](https://www.balsamiq.com/wireframes "Balsamiq Wireframing Tool") was used to create the wireframes/sitemap for the site.
* [Font Awesome](https://fontawesome.com/icons "Font Awesome 6.2.1 Free Icons") was used for the social media icons in the footer.
* [Chrome Developer Edition](https://developer.chrome.com/docs/devtools "Chrome Developer Tools") this was used to find out specific styling of elements and to identify and resolve problems related to responsiveness and appearance.
* [Google Fonts](https://fonts.google.com/ "Google Fonts") we used the Roboto font and also the Oxygen font.
* [Github](https://github.com/ "Github") was used to store my project in a repository. 
* [Git](https://git-scm.com/ "Git Version Control") was used for Version Control.
* [Google](https://www.google.co.uk "Google Search Engine") was used to research HTML & CSS.
* [Gitpod](https://www.gitpod.io "Gitpod Cloud IDE") the vast majority of my time was spent inside GitPod's VSCode Cloud IDE.
* [ChatGPT](https://chat.openai.com/) was used for some debugging and ideas when I was stuck.

## Deployment & Local Development

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, Nmyhi/cogniCraft.
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

#### How to Fork

To fork the Nmyhi/cogniCraft repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, Nmyhi/cogniCraft.
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the Nmyhi/cogniCraft:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, Nmyhi/cogniCraft.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

I have created the full testing documentation which collects all the information into a test sheet. [Testing documentation](testing.md)

## Credits

👩🏻‍💻 View an example of a completed Credits section [here](https://github.com/kera-cudmore/BookWorm#Credits)

The Credits section is where you can credit all the people and sources you used throughout your project.

### Code Used

If you have used some code in your project that you didn't write, this is the place to make note of it. Credit the author of the code and if possible a link to where you found the code. You could also add in a brief description of what the code does, or what you are using it for here.

### Content

Who wrote the content for the website? Was it yourself - or have you made the site for someone and they specified what the site was to say? This is the best place to put this information.

###  Media

If you have used any media on your site (images, audio, video etc) you can credit them here. I like to link back to the source where I found the media, and include where on the site the image is used.
  
###  Acknowledgments

If someone helped you out during your project, you can acknowledge them here! For example someone may have taken the time to help you on slack with a problem. Pop a little thank you here with a note of what they helped you with (I like to try and link back to their GitHub or Linked In account too). This is also a great place to thank your mentor and tutor support if you used them.