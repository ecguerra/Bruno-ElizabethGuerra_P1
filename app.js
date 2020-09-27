// Class for furniture items
let movementDisplay
let game
let status
let ctx
let lamp
let pillow
let papers
let rug 
let glass
let mouse
let furniture

function Object(name,x,y,width,height, color) {
    this.name = name
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

furniture = [          
    lamp = new Object('lamp',650,75,20,400,'#FFFACD'),
    pillow = new Object('pillow',500,250,50,50,'#F0F8FF'),
    papers = new Object('papers',10,300,40,100,'white'),
    rug = new Object('rug',50,500,700,10,'#4682B4'),
    glass = new Object('glass of water',100,250,20,40,'ghostwhite'),
    mouse = new Object('toy mouse',500,480,30,10,'hotpink'), 
]

const detectHit = thing => {
    // check for collision on x-axis
    // if hero's bottom value is > ogre's top value
    if (cora.x + cora.width > thing.x &&
        cora.x < cora.x + thing.width &&
        cora.y + cora.height > thing.y &&
        cora.y < cora.y + thing.height
    ) {
    //-------BUGGY
        document.addEventListener('keydown',e =>{
            // y = 89 n = 78 // 'KeyY' 'KeyN'
            status.innerText = `Want to break the ${thing.name}?`
            if (e.code==='KeyY') thing.notBroken = false
        })
    }
}

// const choice = e => {
// }

const gameLoop = () => {
    // console.log('looping 🐱‍🐉')
    // clear the canvas
        ctx.clearRect(0,0,game.width, game.height)
    // display the x, y coordinates of our hero onto the DOM
        movementDisplay.innerText = `x:${cora.x}\ny:${cora.y}`
    // check if the ogre is alive
        furniture.forEach(thing => {
            if (thing.notBroken) {
            // render the ogre
            thing.render()
        // check for collision
            furniture.forEach(detectHit)
            }
        })
        // render the hero
        cora.render()
    }

const movementHandler = e => {
    // console.log(e)
    // w: 87, a: 65, s: 83, d: 68
    // 'KeyW' 'KeyA' 'KeyS' 'KeyD'
    switch(e.code) {
        case ('KeyW'): // w up
            if(cora.y > 0) cora.y -= 5
            break
        case ('KeyS'): // s down
            if (cora.y + cora.height < game.height) cora.y += 5
            break
        case ('KeyA'): // a left
            if (cora.x > 0) cora.x -= 5
            break
        case('KeyD'): // d right
            if (cora.x + cora.width < game.width) cora.x += 5
            break
    }
}

document.addEventListener('DOMContentLoaded',()=>{
       // the movement tag
       movementDisplay = document.querySelector('#movement')
       // canvas
       game = document.querySelector('#game')
       //CANVAS CONFIG
       game.setAttribute('height', 600) // can also be done responsively
       game.setAttribute('width', 800)
       //status display
       status = document.querySelector('#status')
       // context
       ctx = game.getContext('2d')
    
       console.log(furniture)
       
       cora = new Object('Cora',30,150,20,20, 'black')
       
       document.addEventListener('keydown',movementHandler)
       
       let runGame = setInterval(gameLoop, 60) // approx 16-17 fps    
})