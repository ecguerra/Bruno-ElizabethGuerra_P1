# Cora Breaks Everything!

## Demo https://ecguerra.github.io/Bruno-ElizabethGuerra_P1/index.html

## Concept
You are Cora, a tiny, excitable kitten who LOVES TO PLAY WITH EVERYTHING. Everything in Cora's world is a food, a friend, or a toy, and the best thing to do with your toys is DESTROY THEM. You find yourself in a room full of SO. MANY. TOYS. and you can't wait to destroy them all!

### Inspirations
 - The Grow series by ON of [Eyezmaze](eyezmaze.com)
 - My kitten Cora, who helped as much as she could

### Installation Instructions
- index.html, style.css, app.js, and the .png files in the images folder are all that is needed to download
- a browser capable of running HTML5 Canvas is required

### Gameplay
Move Cora with your mouse and walk up to things in the room to interact with them. Your goal is to break everything in the room, but the challenge is to find the best way to do it. Objects are affected by each other and with the environment, plus you don't want your human to catch you before you get a chance to break it all! Try to find the best order to help Cora Destroy Everything!

## Technologies Used
- HTML
- CSS
- Javascript
- HTML5 Canvas
- Adobe Illustrator

### Credits
 - Paul Irish for requestAnimFrame function [website](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)

## Approach

### Overview
I wrote the original code with WASD movement in mind, but later switched to point & click with the mouse. The game flowed better with this method. I love point & click games and was excited to create one of my own. I started with rendering rectangles of all the furniture objects and Cora and built functions to "break" them. Then I went through and wrote the relationships between the objects and how they can level up or down based on the user's choices. I built the basic win conditions and added scoring last.

### Wireframe
<img src="./wireframe_firstsketch.jpg/>"

### Development Plan
- Early stage game with rectangles
- Quick graphics game (**Current State**)
- Consolidated code & additional debugging
- Improved graphics and sound

### MVP
- The user can click the objects and destroy them
- The objects are affected by each other and the environment
- The game can be reset at any point
- There is a win order, an imcomplete order, and a game over event

## Stretch Goals
- [x] Original graphics
    - [x] Quick graphics
    - [] Graphics for leveled up and broken objects
    - [] Improved graphics
    - [] paw/pawprint cursor
- [x] "Do you want to break ___?" prompts unique to each object
- [x] Display score when game ends
    -  [] score meters/ something more interesting than numbers
- [] More object leveling up
- [] More objects
- [] Sound effects & music

## Challenges
### Solved Issues
- The overlay messages were overwriting too quickly and one or more would be skipped. This issue was solved with blur event listeners and a "hold" variable that prevents the turn event messages from loading before the item event messages
- Loading images for the objects instead of rectangles. This was solved by reworking the render() function and adding ctx as a parameter.

### Unsolved Issues
- In deployment the title screen and first message cannot be displayed at the same time. This is likely a similar issue to the earlier one I faced with my overlay messages, but the hold variable approach is not working
- The lamp messages are stuck in the first deployment and not clearing when the user selects "No"
- I would like to find a way to disable the canvas from being clicked when the overlay is visible
- The score div disappears a little sooner than I would like
- See "notes" for Wish List and future improvement plans

 ## Acknowledgements 
 - My General Assembly instructors Taylor, Mateen, Bruno, and Fatima
 - Sarah for the HTML5 canvas lesson
 - Fatima and Justin for being my debugging heroes
 - Andy for continuing to live with a grouchy code monster

## Demo https://ecguerra.github.io/Bruno-ElizabethGuerra_P1/index.html

## Versioning & Releases
- 10/3/2020 - initial release

 ## Author
 Elizabeth Guerra