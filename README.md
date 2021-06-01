# chuck-norris-jokes

## Table of contents

-   [Setup](#setup)
-   [Technologies](#technologies)
-   [Name](#name)
-   [General info](#general-info)
-   [Stack](#stack)
-   [Content](#content)
-   [UX/UI](#uxui)
-   [Footer](#footer)
-   [Visuals](#visuals)
-   [Contact](#contact)

## Setup

To run the application type in terminal :
npm i
npm run serve

## Technologies

Project is created with:

-   Vue.js: 2.6.11
-   Vuex: 3.6.2
-   Bootstrap: 5.0.1

## Name

Chuck Norris Jokes
The best jokes about Chuck Norris.

## General info

    1) Application is built in frontend with using Axios for catching data from the API
    (http://api.icndb.com/jokes/random).
    2) The application is a single page application.
    3) I used Vue.js, Vuex, Axios, Bootstrap 5.0.1, CSS.
    4) The whole application is responsive.
    5) I took care to keep the code is clean and readable.
    6) For images  I used Cloudinary.
    7) For styling I used Bootstrap and CSS.
    8) I added a favicon and the title for the website.

## Stack

    Vue.js,Vuex, Axios, Bootstrap, CSS

## Content

    The application has two views: Home and Favourites.

    - Home: shows 10 random jokes called from API: http://api.icndb.com/jokes/random/10
    By clicking on the "Add to favourites" button, we can add joke we like to the favourites list (maximum 10 jokes).
    By clicking the "More jokes" button in the navigation bar, we can see the next 10 jokes. There is always, maximum of 10 jokes visible on the page.

    - Favourites: here we can see the favourite jokes we chose on the Home page. We can remove them from the list by clicking the "Remove" button. After click the Timer ON / OFF button in the navigation bar, we can see one random joke loading every 5 seconds, starting immediately. If we want to make the process faster, we can click the button a couple of times in a row.
    I called one random joke using the API call: http://api.icndb.com/jokes/random/1
    There is always, maximum of 10 jokes visible on the page. The button stays in the position "Timer OFF" if there is already ten jokes on the page and go back to the "Timer ON" position if we remove at least one joke.

    The navigation bar contains one more button in the left corner. It is a button which is changing the background of the page.

## UX/UI

    User can:
    - click buttons in the navigation bar and:
        * change background of the page (button on the left side)
        * see more jokes by clicking "More jokes" (in the Home view)
        * click "Timer ON/OFF" (in the Favourites view)
        * go to Home
        * go to Favourites
    - add jokes to favourites on the Home page
    - call one random joke every 5 seconds on the Favourites page
    - remove jokes from favourites on the Favourites page
    - if jokes are taking more space than usual, we can notice a scrollbar near the jokes list
    - we can notice alerts with chuck Norris while we add a joke to favourites, remove it, when we try to add more than 10 jokes to favourites and when we try to add the same joke more than one.
    - Favourite jokes and chosen background are saving in a localStorage and stays after refreshing the page
    - I fixed errors in API jokes (like I replace &quote; with " and he?s with he's)
    - I added error 404 page

## Footer

    An additional element with the link to my portfolio.

## Visuals

Click a <a href="https://youtu.be/0OLYROgiJqk"><b>video</b></a> and see how the App works.

<b>Desktop version:</b>
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/c_scale,w_800/v1621110419/ChuckNorrisJokes/CN1.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/c_scale,w_800/v1621110413/ChuckNorrisJokes/CN2.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/c_scale,w_800/v1621110411/ChuckNorrisJokes/CN3.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/c_scale,w_800/v1621110415/ChuckNorrisJokes/CN4.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/c_scale,w_800/v1621112184/ChuckNorrisJokes/CN5.png" />
<br><br>

<b>Mobile version:</b>
<br><br>

<img src="https://res.cloudinary.com/mokaweb/image/upload/c_scale,w_200/v1621112066/ChuckNorrisJokes/CN1-mobile.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/c_scale,w_200/v1621112067/ChuckNorrisJokes/CN2-mobile.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/c_scale,w_200/v1621112519/ChuckNorrisJokes/CN3-mobile.png" />
<br><br>

## Contact

Created by <a href="https://monikaswidzinska.netlify.app">Monika Swidzinska</a>
