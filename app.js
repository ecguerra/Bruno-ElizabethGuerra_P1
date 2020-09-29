let game
let overlay
let ctx
let turnCounter
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
    this.msg = `The ${this.name} is DESTROYED!`
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }
}

// FURNITURE CONFIG
furniture = [          
    lamp = new Object('lamp',650,75,40,400,'#FFFACD'),
    pillow = new Object('pillow',500,250,50,50,'#F0F8FF'),
    papers = new Object('stack of papers',10,300,40,100,'white'),
    rug = new Object('rug',50,500,700,100,'#4682B4'),
    coffee = new Object('cup of coffee',100,250,20,40,'peru'),
    mouse = new Object('toy mouse',500,480,60,40,'hotpink'), 
]

// Object logic

// Each object has a correct order to be broken in and various consequences if you don't

// turnCounter - only go up when an object is broken
    // Events: 
        // Turn 2: Human comes in and takes coffee, leaves mouse
        // Turn 5: Gust of wind through window // affects papers and pillow stuffing
const counterEvents = () => {
    if (turnCounter === 2 && coffee.notBroken) {
        changeMsg (`Your human comes in looking for their coffee. They find it and take it away! Cup of coffee NOT destroyed 💔`,'ok')
        coffee.notBroken = false
        turnCounter = 3
    } else if (turnCounter === 5 && papers.notBroken) {
        changeMsg(`A gust of wind blows through the open window. The stack of papers falls over! They're destroyed, but you can't take the credit 💔`,'ok')
        papers.notBroken = false
        turnCounter = 6
    } 
}


// 1 - Papers
    // Destroyed = knocked out window
    // Can be spilled on by coffee / still playable
    // Can be blown over by wind / not playable

    papers.spilledOn = false
    papers.msg = `You push the papers out the window. They are DESTROYED!`




// When called, creates a new message in the overlay // 'type' is yes/no or ok buttons
const changeMsg = (msg, type) => {
    while (overlay.firstChild) overlay.removeChild(overlay.firstChild)
    overlay.classList.remove('display-none')
    overlay.style.height = '200px'
    overlay.style.top = '220px'
    let p = document.createElement('p')
    p.innerText = msg
    overlay.appendChild(p)
    let buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')
    overlay.appendChild(buttonContainer)
    if (type === 'yes') {
        let yesButton = document.createElement('button')
        yesButton.setAttribute('type','button')
        yesButton.setAttribute('id','yes-button')
        yesButton.innerText='yes'
        buttonContainer.appendChild(yesButton)
        let noButton = document.createElement('button')
        noButton.setAttribute('type','button')
        noButton.setAttribute('id','no-button')
        noButton.innerText = 'no'
        noButton.addEventListener('click', () => overlay.classList.add('display-none'))
        buttonContainer.appendChild(noButton)
    } else if (type === 'ok') {
        let okButton = document.createElement('button')
        okButton.setAttribute('type','button')
        okButton.setAttribute('id','ok-button')
        okButton.innerText='OK'
        okButton.addEventListener('click', () => overlay.classList.add('display-none'))
        buttonContainer.appendChild(okButton)
    }
}

// const detectHit = thing => {
//     // check for collision on x-axis
//     // if hero's bottom value is > ogre's top value
//     //This part works
//     if (cora.x + cora.width > thing.x &&
//         cora.x < cora.x + thing.width &&
//         cora.y + cora.height > thing.y &&
//         cora.y < cora.y + thing.height
//     ) {
//         thing.notBroken = false
//-------BUGGY
//         document.addEventListener('keydown',e =>{
//             // y = 89 n = 78 // 'KeyY' 'KeyN'
//         //    console.log(e)
//             msg.innerText = `Want to break the ${thing.name}?`
//             if (e.code==='KeyY') thing.notBroken = false
//             return
//         })
    // }
//  }


// Maybe update with isPointInPath later
const checkCollision = e => {
    furniture.forEach(thing => {
        if(thing.notBroken) {
            if ( thing.x <= e.offsetX &&
                thing.x + thing.width >= e.offsetX &&
                thing.y <= e.offsetY &&
                thing.y + thing.height >= e.offsetY
            ){
                changeMsg(`Do you want to DESTROY the ${thing.name}?`,'yes')
                document.querySelector('#yes-button').addEventListener('click', () => {
                    thing.notBroken = false
                    turnCounter++
                    overlay.classList.add('display-none')
                })
            }
        }
    })
}

// Movement
const pointAndClick = e => {
    overlay.classList.add('display-none')
    cora.x = e.offsetX
    cora.y = e.offsetY
}

//Runs the game, renders all the items
const gameLoop = () => {
    window.requestAnimFrame(gameLoop)
    ctx.clearRect(0,0,game.width, game.height)
    document.addEventListener('click',checkCollision)
    counterEvents()
    furniture.forEach(thing => {
        if (thing.notBroken) {
            thing.render() // when styling, create "broken" sprite for objects
            // check for collision
            // furniture.forEach(detectHit)
        }
    })
    cora.render()
    }

// const movementHandler = e => {
//     // console.log(e)
//     // w: 87, a: 65, s: 83, d: 68
//     // 'KeyW' 'KeyA' 'KeyS' 'KeyD'
//     overlay.classList.add('display-none')
//     switch(e.code) {
//         case ('KeyW'): // w up
//             if(cora.y > 0) cora.y -= 10
//             break
//         case ('KeyS'): // s down
//             if (cora.y + cora.height < game.height) cora.y += 10
//             break
//         case ('KeyA'): // a left
//             if (cora.x > 0) cora.x -= 10
//             break
//         case('KeyD'): // d right
//             if (cora.x + cora.width < game.width) cora.x += 10
//             break
//     }
// }

// shim layer with setTimeout fallback 
// consolidates browser variations of RequestAnimationFrame into one function
// Source: Paul Irish // https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

window.requestAnimFrame = (function(){ 
    return  window.requestAnimationFrame       ||  
            window.webkitRequestAnimationFrame ||  
            window.mozRequestAnimationFrame    ||  
            window.oRequestAnimationFrame      ||  
            window.msRequestAnimationFrame     ||  
            function( callback ){ 
              window.setTimeout(callback, 1000 / 60); 
            }; 
  })() 

document.addEventListener('DOMContentLoaded',()=>{
       // canvas
       game = document.querySelector('#game')
       //CANVAS CONFIG
       game.setAttribute('height', 600) // can also be done responsively
       game.setAttribute('width', 800)

       // Overlay for messages
       overlay = document.querySelector('#overlay')

       // context
       ctx = game.getContext('2d')

       // CHARACTER CONFIG
       cora = new Object('Cora',390,450,20,20, 'black')
       
       turnCounter = 0
       
//     document.addEventListener('keydown',movementHandler)
        document.addEventListener('click', pointAndClick)
       
//   let runGame = setInterval(gameLoop, 60) // approx 16-17 fps
        window.requestAnimFrame(gameLoop)    
})