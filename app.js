// Class for furniture items
let movementDisplay
let game
let ctx
let lamp
let pillow
let papers
let rug 
let glass
let mouse


function Object(x,y,width,height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.notBroken = true
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }
}

const gameLoop = () => {
    // console.log('looping 🐱‍🐉')
    // clear the canvas
        ctx.clearRect(0,0,game.width, game.height)
    // display the x, y coordinates of our hero onto the DOM
        movementDisplay.innerText = `x:${cora.x}\ny:${cora.y}`
    // check if the ogre is alive
 //       if (ogre.alive) {
            // render the ogre
            lamp.render()
            pillow.render()
            papers.render()
            rug.render()
            // check for collision
 //           detectHit()
 //       }
        // render the hero
        cora.render()
    }

const movementHandler = e => {
    // console.log(e)
    // w: 87, a: 65, s: 83, d: 68
    switch(e.keyCode) {
        case (87): // w up
            if(cora.y > 0) cora.y -= 5
            break
        case (83): // s down
            if (cora.y + cora.height < game.height) cora.y += 5
            break
        case (65): // a left
            if (cora.x > 0) cora.x -= 5
            break
        case(68): // d right
            if (cora.x + cora.width < game.width) cora.x += 5
            break
        default:
            console.log('invalid keystroke')
    }
}

document.addEventListener('DOMContentLoaded',()=>{
       // the movement tag
       movementDisplay = document.querySelector('#movement')
       // canvas
       game = document.querySelector('#game')
   
       //CANVAS CONFIG
       game.setAttribute('height', 400) // can also be done responsively
       game.setAttribute('width', 800)
       // context
       ctx = game.getContext('2d')
   
       // OBJECT REFS    
       lamp = new Object(300,100,30,120,'#FFFACD')
       pillow = new Object(140,150,20,20,'#F0F8FF')
       papers = new Object(10,50,20,100,'white')
       rug = new Object(10,300,700,20,'#4682B4')
       
       cora = new Object(30,150,10,10, 'black')
       
       document.addEventListener('keydown',movementHandler)
       
       let runGame = setInterval(gameLoop, 60) // approx 16-17 fps    
})