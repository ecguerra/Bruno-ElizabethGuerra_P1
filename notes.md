# Notes & Planning

## Game Premise
You are Cora, a tiny, excitable kitten who LOVES TO PLAY WITH EVERYTHING. Everything in Cora's world is a food, a friend, or a toy, and the best thing to do with your toys is DESTROY THEM. You find yourself in a room full of SO. MANY. TOYS. and you can't wait to destroy them all!

## Gameplay
Move Cora with your mouse and walk up to things in the room to interact with them. Your goal is to break everything in the room, but the challenge is to find the best way to do it. Objects are affected by each other and with the environment, plus you don't want your human to catch you before you get a chance to break it all! Try to find the best order to help Cora Destroy Everything!

## Objects
- Lamp
    - Goal: knock over
    - Level Up: land on pillow stuffing so human doesn't hear
    - Challenge: if knocked over before the pillow is ripped up, the human will hear the crash and come in and catch you
    - Correct order: 6
- Pillow
    - Goal: Rip
    - Challenge: If ripped too early, the wind blows the stuffing around and it doesn't catch the lamp
    - Correct order: 5
- Stack of Papers
    - Goal: Knock out window
    - Challenge 1: if you wait too long to knock over the stack of paper, a gust of wind blows though the room and knocks it over into the room!
    - Correct order: 2
- Cup of Coffee
    - Goal: spill
    - Challenge 1: The human comes in to get it if you don't knock it over quickly enough
    - Challenge 2: It is supposed to be spilled onto the papers, but can also be spilled on the rug
    - Correct order: 1
- Rug
    - Goal: Bite a hole
    - Level Up: You can fit the mouse into the hole
    - Challenge: If you knock the papers over before the coffee, the coffee spills on the rug. Cora doesn't like coffee, so she doesn't destroy the rug
    - Correct order: 3
- Toy Mouse
    - Goal: pull apart
    - Level up 1: If there's a hole in the rug, you put the mouse in it
    - Challenge: Isn't in the room at first. Human brings in when looking for coffee
    - Correct order: 4

- Couch - not something to destroy, but you end up sleeping here at the end

## Obstacles
- Human comes in to get coffee after turn 2 and leaves the mouse
- Gust of wind blows through window after turn 4 and can knock over papers and/or blow stuffing around

## To-Do
- [x] Write functions for yes/no object buttons
- [x] Write logic for linked events
    - Turn counter (only goes up when something breaks)
- [x] Write meters/score
    - Score for now
- [x] Add reset button
- [x] write win condition
- [x] update collision function
    - shouldn't be able to still click on broken objects
- [x] style
- [] clean up code
    - break up into multiple JS files
    - create digital wireframe


## Wish List
- [x] Original graphics
    - [x] start with boxes to get game mechanics correct
    - look at sprite packages from game bundle to use in interim
    - better graphics later
- paw/pawprint cursor
- [x] "Do you want to break ___?" prompts unique to each object
- score meters/ something more interesting than numbers
- More object leveling up
- More objects
- Sound effects & music

## Other
- keyCode is apparently deprecated and you should now use code [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)
- setInterval also apparently isn't the best choice, and requestAnimationFrame is better practice [HTML5 Canvas Deep Dive](https://joshondesign.com/p/books/canvasdeepdive/chapter04.html#settimeout)
- c.fillText(overlay.subtitle, 190,250)
- isPointInPath
- Point & Click instead of WASD? - Yes
