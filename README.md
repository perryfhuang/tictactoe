# Tic Tac Toe

This is my first full stack application, a single-page Tic Tac Toe game application with token authentication that communicates with a backend API, which stores user account information as well as game states. The app uses asynchronous API calls through AJAX to handle features like login, logout, sign up, change password, create game, update game (making a move on the board), play again, delete game, show stats, etc. I also used jQuery, Javascript and Bootstrap to develop styling, menu animations, modals, UI flow as well as a 'typing effect' for the Tic Tac Toe title. Responsiveness to viewport size is also supported, with the help of Bootstrap and CSS (game board, X's and O's dynamically changes size based on the device you are currently using the app on!). Please check out the game and give it a try!

## Important Links

* LINK TO DEPLOYED APP HERE

## Planning Story

Prior to development of the app, I answered several questions to help plan things out:

How do you plan to approach this project?

>I plan to approach this project by first planning out how I will work on  the app as well as break everything into small, easy-to-solve steps. This  includes having a fundamental understanding of all the technologies and  languages involved that will make the project function (ex. understanding  how the API works, referencing documentation when necessary, etc.) I plan  to first hit every requirement for completing the project while also  putting my own creative flavor into the project. I will also develop the  game with my (and other's) user stories in mind.

How will you represent the board in Javascript?

>The game board will be manipulated by Javascript through DOM events and communicating with the backend game API. For example, HTML elements for the 9 spaces will listen for click events, and send API/ajax calls when a click event happens, which will then update the game board with X and O tokens. When a cell is filled, the click listener for the respective cell will be disabled (in the actual game, this is not how I implemented this feature - instead, the API simply does not get called if a cell is taken, and a message notifies the player). Each API call will also check if the game is over (if there are 3 spaces in a row with the same token) and notify the player when the game is over (win/lose/tie).

How will you use version control to backup / track your project?

>I will use git and GitHub, GitHub-pages deployment, and grunt to backup, track, test and deploy my project. I will commit often, keeping in mind that I can revert to an earlier version if anything becomes broken. I will deploy early and often, and always keep in mind the difference between development and production environments. I will only deploy code that I know is fully functional.


How you plan to keep your code modular?

>I plan to keep my code modular by applying everything that I have learned and picked up in SEI so far. This includes separating HTML, CSS and Javascript files. I will also separate JS files/functions depending on their functionality, including event listeners, API calls, UI updates, url configs, token storing, etc.

What creative spin will you add to your project?

>I will add creative flavor to my project by developing a game that myself, as a gamer, would appreciate, enjoy and overall be impressed with. This includes having a simple yet fluid and appealing visual design/UI, the game overall runs very smoothly with no bugs, offers several customized user options, and is overall a fun experience. Emphasis will be placed on simple but awesome. A visual theme (eg. color and menus) will be developed based on my own personal taste.

What additional features will you build if you have extra time?

>If I have extra time, there are some additional features I want to build for the project. This includes developing a computer player that has varying level of difficulties (eg. easy, medium, hard) and track and view player stats (in addition to the required stat 'number of games played'). Some other features I want to build include being able to 'Play as a Guest' (not sure if this will be possible, since player must be an authenticated user that needs to communicate with the API), having animations (such as X and O animations for the game board) to make the game more interactive and feel less static, and having more visual options such as setting the color theme of the app.

Most of the additional features I mentioned above were not implemented, such as developing an AI/computer. This is outside the scope of the project and definitely something for future iterations of the app. In addition, currently the only stats able to be tracked are total number of games played. 'Play as a Guest' feature is also currently unavailable, since the API requires token authentication for games to be played.

### User Stories

The user stories I wrote before development:

1. As a player, I want to be able to play a game of tic tac toe so that I can have fun while playing the game.
2. As a player, I want to be able to have tracked player stats so that I can see how I perform (wins/losses, # of moves, etc.)
3. As a player, I want a visually appealing and interactive game so that my experience while playing the game is entertaining and rich, and not one-dimensional and boring.
4. As a player, I want the UI to be simple and easy to navigate so that I am able to easily traverse through menus and quickly start new games.
5. As a player, I want to be able to play against a computer with varying levels of difficulty so that I can have continual enjoyment from the game as well as a feeling of progression/ being challenged while playing the game.
6. As a player, I want to be able to play against another human player so that I can also enjoy the game with my friends!
7. As a player, I want the game to be easily accessible and not have any issues running/have any annoying bugs.
8. As a player, I want to be able to play as a guest so I do not have to make an account just to play the game (not sure if possible)
9. As a player, I want to be able to be have the option to change the color theme of the app.

Most of these user stories were definitely stretch goals. For my next project, I definitely want to keep in mind keeping the user stories a little more simple and realistic in terms of development goals considering the skills I currently have and time frame available.

### Technologies Used

* HTML5
* CSS/Sass
* Bootstrap 4
* Javascript
* jQuery

### Future Iterations

Many of the features that I want to deploy in future iterations of the app have been mentioned. These include adding animations for messaging, X and O tokens entering the board, additional user stats to be tracked such as total wins, losses and ties, as well as developing an AI to play against with varying levels of difficulty (Easy, Medium, Hard). I had a slight idea of how to start developing this while drawing the wireframes for the app. One way to develop a "dumb" AI would be to simply have the computer use RNG to choose any random open cell. Developing a smarter AI would require some deeper research on my part. I would also like to develop different colors/themes to be toggled for the app though an options menu.

### Images

Plannning Wireframes

Page 1
![Wireframe Page 1](/public/TicTacToeWireframe-1.jpg "Page 1")

Page 2
![Wireframe Page](/public/TicTacToeWireframe-2.jpg "Page 2")
