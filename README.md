<p align="center">
  <img src="http://i63.tinypic.com/ncyqaf.png" alt="logo">
  <br><br>
  <strong>A responsive, customizable, open-source RSPS website template</strong>
</p>

#Getting Started
After you clone, fork, or download the repository you're ready to start using ReSPonSive.  Here's a quick documentation of how the website works.

##Requirements For Customizing
It is not recommended to edit the .CSS files, this project utilizes .SCSS files.  This means that if you haven't already installed SASS, you should do so right now.  You can download sass here: <a href="http://sass-lang.com/">http://sass-lang.com/</a>.

##Customizing the Template for Your Needs
ReSPonSive is very easy to customize to fit your needs. For basic visual changes, you'll only ever need to look at one file: 
> _configs.scss

Once you open it at the top of the file you will see some variables that will need to be tweaked (if you so choose).

```SCSS
$background-color: #222;    /* background color of the website */
$theme-color: #ff6559;      /* the main theme color */
$container-width: 80%;      /* the width everything should be centered at */

$font: .8em verdana, sans-serif;    /* easily change the font theme here */
$font-color: #cbcbcb;               /* font-color for the entire site */
$nav-color: rgba(255, 255, 255, 0.8);       /* font-color on the navigation section */
$darker-nav-color: rgba(255, 255, 255, .9); /* font-color when you hover over a navigation link */

$lighter-theme-color: lighten($theme-color, 15%);   /* automatically adjusts based on the main color */
$darker-theme-color: darken($theme-color, 8%);      /* automatically adjusts based on the main color */

$header-picture: "../images/header-bg.jpg";     /* the image displayed at the top of the page */
```

In case that documentation doesn't make sense, let's dive into this a little further.

##Core Variables
The variables are in sets of groups, these groups are done on purpose to help find variables. Especially when more get added for further customization.  The first group of three (the following):

```SCSS
$background-color: #222;    /* background color of the website */
$theme-color: #ff6559;      /* the main theme color */
$container-width: 80%;      /* the width everything should be centered at */
```

are vital to changing the overall look and feel of the site.

###Let's check them out in detail
```SCSS
$background-color: #222;    /* background color of the website */
```
This variable will change the background of the entire website, so if you want a blue background, be our guest. simply change the hexadecimal value to "blue", "rgb(0, 0, 255)", or whatever other way you wish to represent the color blue.

```SCSS
$theme-color: #ff6559;      /* the main theme color */
```
This variable will change the "main theme color", this color is the header's color at the top, it's the nav bar's background color, links, and basically all other kinds of highlighting on the page.

```SCSS
$container-width: 80%;      /* the width everything should be centered at */
```
This variable will change the width of the page. If you want to squeeze everything to 50% of the page's width, go right ahead.  You would just simply change the 80% to 50%.

##Font Attributes
The next group of four have to do with your website's typography and font colors.

```SCSS
$font: .8em verdana, sans-serif;    /* easily change the font theme here */
$font-color: #cbcbcb;               /* font-color for the entire site */
$nav-color: rgba(255, 255, 255, 0.8);       /* font-color on the navigation section */
$darker-nav-color: rgba(255, 255, 255, .9); /* font-color when you hover over a navigation link */
```

###Let's check them out in detail
```SCSS
$font: .8em verdana, sans-serif;    /* easily change the font theme here */
$font-color: #cbcbcb;               /* font-color for the entire site */
```
These two variables allow you to change the typography and the color of the font on the webpage.

```SCSS
$nav-color: rgba(255, 255, 255, 0.8);       /* font-color on the navigation section */
$darker-nav-color: rgba(255, 255, 255, .9); /* font-color when you hover over a navigation link */
```
These two variables are a little bit more difficult to understand. So, here's the jist.  

```SCSS
$nav-color: rgba(255, 255, 255, 0.8);       /* font-color on the navigation section */
```
This will adjust the color of the links in the navigation section of the website.  This is important to change when you have a light or dark "theme-color". If your theme-color is darker, you'd probably want this color to be light. Conversely, if your theme-color is lighter you'd probably want this color to be dark.

```SCSS
$darker-nav-color: rgba(255, 255, 255, .9); /* font-color when you hover over a navigation link */
 ```
This should automatically adjust based off of the value of nav-color.  This works because this color will be more opaque than nav-color.

##No Touchey
These are two variables you probably don't want to change, unless you feel that the color when you hover over a link is too bright or too dark.

```SCSS
$lighter-theme-color: lighten($theme-color, 15%);   /* automatically adjusts based on the main color */
$darker-theme-color: darken($theme-color, 8%);      /* automatically adjusts based on the main color */
```

##How to Change That Header Image
You should change the header image right away to make the template your own.
```SCSS
$header-picture: "../images/header-bg.jpg";     /* the image displayed at the top of the page */
```
You link to it in your images folder relatively, or you can put an absolute link.


#HTML portion
If you do choose to have a lighter theme-color, then you'll probably want a darker hamburger.  Luckily, there is a dark-hamburger PNG that already comes in the images directory.
```HTML
 <!-- light-hambuger.png OR dark-hamburger.png -->
 <li>
    <a href="#" onclick="animateHamburger();" class="hamburger"><img src="images/light-hamburger.png"></a>
 </li>
```
In this example, the light-hamburger.png will display.

##How to Change Your Server's Status
Render your server online:
```HTML
<div id="game_status">
    Status: <span class="online">Online</span>
</div>
```

Render your server offline:
```HTML
<div id="game_status">
    Status: <span class="offline">Offline</span>
</div>
```

Render your server updating or in development:
```HTML
<div id="game_status">
    Status: <span class="updating">Updating</span>
</div>
```

#Partials and Plugins
ReSPonSive is a great tool that allows you to easily make changes to your template.  With Partials and Plugins
if you want to add styling to your page, for example a "Hiscores" page styling, adding the design to your page is simple.

Go into the ```styles/partials``` or ```styles/plugins``` directory and start searching for styling that you wish to add
to your site.

To add the styling you would simply add the following import to your ```main.scss``` file.

In this example we are adding the Hiscore styling to our website.
```SCSS
/* PARTIALS */
@import "partials/hiscores";
```

It's that easy.  Then adding the Hiscore's styling to your website will be as easy as adding a class name
to an HTML element.