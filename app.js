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
let gameOver

let pillowImg = new Image()
pillowImg.src = './images/pillow.png'

let lampImg = new Image()
lampImg.src = './images/lamp.png'

let papersImg = new Image()
papersImg.src = './images/papers.png'

let rugImg = new Image()
rugImg.src = './images/rug.png'

let coffeeImg = new Image()
coffeeImg.src = './images/coffee.png'

let mouseImg = new Image()
mouseImg.src = './images/mouse.png'

let coraImg = new Image()
coraImg.src = './images/cora.png'

game = document.querySelector('#game')
    game.setAttribute('height', 600)
    game.setAttribute('width', 800)
ctx = game.getContext('2d')

let hold = false

// let background = document.querySelector('#background')
//     background.setAttribute('height', 600)
//     background.setAttribute('width', 800)

//     let ctxBG = game.getContext('2d')

// var bgImg = new Image()
// bgImg.onload = function(){
//     ctxBG.drawImage(bgImg,0,0)
//  }
//  bgImg.src = './images/background-01.jpg'

// pillowImg = new Image()
//  pillowImg.src = './images/pillow.png'
//     pillowImg.onload = function() {
//         ctx.drawImage(pillowImg,500,200)
//     }


//    console.log(pillowImg)

    //    // canvas
    //    game = document.querySelector('#game')
    //    //CANVAS CONFIG
    //    game.setAttribute('height', 600)
    //    game.setAttribute('width', 800)

    //    // context
    //    ctx = game.getContext('2d')



function Object(name,x,y,width,height, color,image,ctx) {
    this.name = name
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.image = image
    this.notBroken = true
    this.prompt = `Do you want to DESTROY the ${this.name}?`
    this.msg = `The ${this.name} is DESTROYED!`
    this.failed = false
    this.score = 0
    this.render = function() {
        // ctx.fillStyle = this.color
        // ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x,this.y)
    }
}


// const pillowImg = new Image()
// // pillowImg.onload = function() {
// //     ctx.drawImage(pillowImg, 500,200)
// // }
// pillowImg.src = './images/pillow.png'


// class ImgObject {
// constructor(x,y,image,ctx) {
//     // this.name = name+
//     this.x = x
//     this.y = y
//     // this.width = width
//     // this.height = height
//     this.image = image
//     this.notBroken = true
//     // this.prompt = `Do you want to DESTROY the ${this.name}?`
//     // this.msg = `The ${this.name} is DESTROYED!`
//     // this.failed = false
//     // this.score = 0
//     this.ctx = ctx
// }
//     render() {
//         ctx.drawImage(this.image,this.x,this.y)
//     }
// }

// FURNITURE CONFIG
furniture = [          
    lamp = new Object('lamp',650,120,40,300,'#FFFACD',lampImg,ctx),
    pillow = new Object('pillow',542,286,50,50,'transparent',pillowImg,ctx),
//    pillow2 = new ImgObject(142,286, pillowImg,ctx),
    papers = new Object('stack of papers',54,307,60,100,'white',papersImg,ctx),
    rug = new Object('rug',180,450,600,140,'#4682B4',rugImg,ctx),
    coffee = new Object('cup of coffee',160,285,20,40,'peru',coffeeImg,ctx),
//    mouse = new Object('toy mouse',500,480,60,40,'hotpink'), 
]

// Object logic

// Each object has a correct order to be broken in and various consequences if you don't

// turnCounter - only go up when an object is broken
    // Events: 
        // Turn 2: Human comes in and takes coffee, leaves mouse
        // Turn 5: Gust of wind through window // affects papers and pillow stuffing

const counterEvents = () => {
    if (turnCounter === 2 && coffee.notBroken) {
        changeMsg ('Your human comes in looking for their coffee. They find it and take it away! Cup of coffee NOT destroyed 💔','ok')
        coffee.notBroken = false
        coffee.failed = true
        turnCounter = 3
    } else if (turnCounter === 2 && (coffee.notBroken === false || rug.spilledOn)){
       // console.log('going to show missing message')
        // if(hold === true) {
        //     changeMsg('The coffee spills across the desk and onto the rug! Gross. You liked that rug. Now the flavor will be all wrong.','ok')
        //     document.querySelector('#ok-button').addEventListener('click',()=> hold = false)
        //     console.log(hold)
        // }
        // if(document.querySelector('#ok-button')) {
        //     document.querySelector('#ok-button').addEventListener('blur',() => {
        //         changeMsg ('Your human comes in looking for their coffee. They see you already knocked it over! They sigh and give you a toy mouse to play with, hoping it will distract you from further mayhem','ok')
        //     })  
        // }
        changeMsg ('Your human comes in looking for their coffee. They see you already knocked it over! They sigh and give you a toy mouse to play with, hoping it will distract you from further mayhem','ok')
        furniture.push(mouse = new Object('toy mouse',500,480,60,40,'hotpink',mouseImg,ctx))
	        mouse.prompt = 'Big Pinky. Your oldest friend and greatest nemesis. Many times you have killed him, and many times he has returned to thwart you! This is your final showdown. You know what you have to do. DESTROY Big Pinky?'
	        mouse.msg = 'You wrestle the mouse across the room. You kick and bite every part of your foe that you can find. You\'re sure hours - nay - days have passed as the battle wages on. Finally Big Pinky\'s head parts company with his body. It is finished. Big Pinky is DESTROYED.'
        turnCounter = 3
    } else if (turnCounter === 4 && papers.notBroken) {
        changeMsg('A gust of wind blows through the open window. The stack of papers falls over! They\'re destroyed, but you can\'t take the credit 💔','ok')
        papers.notBroken = false
        papers.failed = true
        turnCounter = 5
    } else if (turnCounter === 4 && pillow.notBroken === false) {
        changeMsg('A gust of wind blows through the open window. The pillow stuffing blows everywhere. It\'s great!','ok')
        pillow.scattered = true
        turnCounter = 5
    } else if (turnCounter === 4) {
        changeMsg('A gust of wind blows through the open window. It\'s so breezy!','ok')
        turnCounter = 5
    }
}

// Object customizing and turn order
// 1 - Coffee
    coffee.prompt = 'Your human left this cup of coffee on their desk. Coffee is gross, and it\'s VERY close to the edge... DESTROY the cup of coffee?'
    coffee.msg = 'You nudge the cup of coffee to the edge of the desk. You pause to look at it one last time, and then send it tumbling. Coffee spills everywhere. The cup rolls away. It has been DESTROYED!'

// 2 - Papers
    // Destroyed = knocked out window
    // Level Up = spilled on by coffee
    // Can be blown over by wind / not playable

    papers.spilledOn = false
    papers.prompt = 'These papers started blocking your favorite window last week. Nowhere else in the house gets the sun this window does. Thankfully your human left the window open today... DESTROY the papers?'
    papers.msg = 'You smack the stack of papers until it starts to topple. Soon gravity does the rest. You watch as the papers fly away on the breeze. They are DESTROYED!'


// 3 - Human comes in

// 4 - Rug
    rug.spilledOn = false
    rug.prompt = 'This rug has been good to you. It\'s a shame that today it must meet its end. You stretch your legs and scratch at it for a moment, for old times\' sake. DESTROY the rug?'
    rug.msg = 'You sink your teeth into the rug and bite the biggest hole you can manage, which is not very big, to be honest. No matter. This rug is DESTROYED!'

// 5 - Toy Mouse
	// additional prompts under render

// 6 - Wind

// 7 - Pillow
    pillow.scattered = false
    pillow.prompt = 'Pillows are soft and fluffy and nice to sleep on... but they are much more fun to rip apart! DESTROY the pillow?'
    pillow.msg = 'Claws and teeth and claws and more teeth! You rip that pillow to shreds! Most of its stuffing ended up near the lamp. You make a mental note to sleep there later, but for now it is DESTROYED!'
    // pillow.drawObject = function(){
    // //     ctx.drawImage(pillowImg, 100,100)
    //  }



// 8 - Lamp
    lamp.prompt = 'This lamp has a metal string on it that goes DING when you hit it with your paw. You try this for a few minutes before you remember why you came over here. DESTROY the lamp?'
    lamp.msg = 'You stand up on your back legs and give the lamp a big push. It starts to tip over...'

// When called, creates a new message in the overlay // 'type' is yes/no or ok buttons
// Maybe switch to modals to help with display bugs?
const changeMsg = (msg, type) => {
    while (overlay.firstChild) overlay.removeChild(overlay.firstChild)
    document.querySelector('#canvas-wrapper').classList.add('disabled')
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
        noButton.addEventListener('click', () => {
            overlay.classList.add('display-none')
            document.querySelector('#canvas-wrapper').classList.remove('disabled')
        })
        buttonContainer.appendChild(noButton)
    } else if (type === 'ok') {
        let okButton = document.createElement('button')
        okButton.setAttribute('type','button')
        okButton.setAttribute('id','ok-button')
        okButton.innerText='OK'
        okButton.addEventListener('click', () => {
            overlay.classList.add('display-none')
            document.querySelector('#canvas-wrapper').classList.remove('disabled')
        })
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

const itemEvents = e => {
 furniture.forEach(thing => {
   if	(thing.x <= e.offsetX &&
         thing.x + thing.width >= e.offsetX &&
         thing.y <= e.offsetY &&
         thing.y + thing.height >= e.offsetY
   ){
	if (thing === coffee) {
	   if(papers.notBroken) {
        hold = true
		papers.spilledOn = true
		papers.score = papers.score + 5
		coffee.score = coffee.score + 5
		changeMsg('The coffee spills across the desk and saturates the stack of papers! This is so much fun.', 'ok')
        document.querySelector('#ok-button').addEventListener('click',()=> hold = false)
        // hold = false
        // console.log(hold)
       }
	    else if (rug.notBroken && papers.spilledOn === false) {
	  	rug.spilledOn = true
        coffee.score = coffee.score + 5
        hold = true
            changeMsg('The coffee spills across the desk and onto the rug! Gross. You liked that rug. Now the flavor will be all wrong.','ok')
            document.querySelector('#ok-button').addEventListener('click',()=> {
                hold = false
                // console.log(hold)
            })
            //hold = false
        
        // console.log(hold)
		rug.failed = true
		rug.notBroken = false
	  }
    }
	if (thing === mouse) {
	   if(rug.notBroken === false) {
		changeMsg('You realize the hole in the rug is a perfectly-sized final resting place for Big Pinky. Sleep well, old friend','ok')
		mouse.inRug = true
		mouse.score = mouse.score + 5
        rug.score = rug.score + 5
        hold = false
	   }
	}
	if (thing === lamp) {
	   if(pillow.notBroken) {
            changeMsg('CRASH! The lamp falls to the floor. Metal and glass fly everywhere. Your human hears the crash and comes in to investigate. They see the mess you\'ve made in the room and get REALLY MAD. Oh no! They pick you up and carry you out of the room.','ok')
            lamp.failed = true
            gameOver = true
	   }
       else if(pillow.scattered) {
        changeMsg('CRASH! The lamp falls to the floor. Metal and glass fly everywhere. Your human hears the crash and comes in to investigate. They see the mess you\'ve made in the room and get REALLY MAD. Oh no! They pick you up and carry you out of the room.','ok')
           lamp.failed = true
           gameOver = true
       }
       else if (pillow.notBroken === false && pillow.scattered === false) {
            changeMsg ('The lamp falls over and lands with a FLUMP. A big crash would\'ve been more fun, but your human probably would\'ve heard it too.','ok')
            lamp.score = lamp.score + 5
            pillow.score = pillow.score + 5
            hold = false
       }
    }

    if(thing === papers) {
        hold = false
    }

    if(thing === rug) {
        hold = false
    }

    if(thing === pillow) {
        hold = false
    }

     }   
  })
}



// Maybe update with isPointInPath later
const checkCollision = e => {
    furniture.forEach(thing => {
        if(thing.notBroken) {
            if ( thing.x <= e.offsetX &&
                thing.x + thing.width >= e.offsetX &&
                thing.y <= e.offsetY &&
                thing.y + thing.height >= e.offsetY
            ){
                changeMsg(thing.prompt,'yes')
                // There might be a better way to do this, but this was the only way I found that doesn't skip over any messages
                document.querySelector('#yes-button').addEventListener('click', () => {
                    thing.notBroken = false
		            thing.score = thing.score + 5			
                    document.querySelector('#yes-button').addEventListener('blur', () => {
                        hold = true
                        changeMsg(thing.msg,'ok')
			            document.querySelector('#ok-button').addEventListener('blur', () => {
                            itemEvents(e)
                            winCondition()
                            turnCounter++
                            // if (hold === true) {
                            //     document.querySelector('#ok-button').addEventListener('click', () => counterEvents())
                            //     hold = false
                            // }
                            //console.log(turnCounter)
                            //console.log(furniture)
                        })
                    })
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
    //console.log(cora.x,cora.y)
}

const reset = () => {
    furniture.forEach(thing => {
        thing.notBroken = true
        thing.failed = false
        thing.score = 0
        thing.spilledOn = false
        thing.inRug = false
        thing.scattered = false
    })
    if(furniture.length > 5) furniture.pop()
    // console.log(furniture)
    turnCounter = 0
    gameOver = false
    hold = false
    document.querySelector('#canvas-wrapper').classList.remove('disabled')
    overlay.classList.add('display-none')
    document.querySelector('.score-container').classList.add('display-none')
    gameLoop()
}
 
const winCondition = () => {
    coffeeScore = document.querySelector('#coffee-score').innerText = coffee.score
    papersScore = document.querySelector('#papers-score').innerText = papers.score
    rugScore = document.querySelector('#rug-score').innerText = rug.score
    pillowScore = document.querySelector('#pillow-score').innerText = pillow.score
    lampScore = document.querySelector('#lamp-score').innerText = lamp.score
    if (mouse) mouseScore = document.querySelector('#mouse-score').innerText = mouse.score
    if (gameOver === true) {
        document.querySelector('.score-container').classList.remove('display-none')
        document.querySelector('#ok-button').addEventListener('blur',() => {
            changeMsg('GAME OVER\nThe human caught you! Fun over. Try again','ok')
            document.querySelector('#ok-button').addEventListener('click',reset)
        })
    }
    else if (furniture.every(thing => thing.notBroken === false) && furniture.every(thing => thing.failed === false)) {
        document.querySelector('.score-container').classList.remove('display-none')
        if(document.querySelector('#ok-button')) {
            document.querySelector('#ok-button').addEventListener('blur',()=>{
                changeMsg('Hooray, everything is DESTROYED! You feel so accomplished.','ok')
            })
        }
        document.querySelector('#ok-button').addEventListener('click',reset)
    }
    else if (furniture.every(thing => thing.notBroken === false) && furniture.some(thing => thing.failed)) {
        document.querySelector('.score-container').classList.remove('display-none')
        if(document.querySelector('#ok-button')) {
            document.querySelector('#ok-button').addEventListener('blur',()=>{
                changeMsg('There\'s nothing left to destroy, but you know in your tiny furry heart you\'re capable of more','ok')
            })
        }

        document.querySelector('#ok-button').addEventListener('click',reset)
    }
}



//Runs the game, renders all the items
const gameLoop = () => {
    window.requestAnimFrame(gameLoop)
    ctx.clearRect(0,0,game.width, game.height)
    document.addEventListener('click',checkCollision)
// Right now this overwrites any secondary messages // Fatima helped me fix it!
    if(!hold) counterEvents()
    furniture.forEach(thing => {
        if (thing.notBroken) {
            thing.render() // when styling, create "broken" sprite for objects
            // check for collision
            // furniture.forEach(detectHit)
        }
    })

 //   pillowImg.onload = function() {
 //       ctx.drawImage(pillowImg,500,200)
 //   }
//   pillow.drawObject()
//   pillow2.render()
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
// consolidates browser variations of requestAnimationFrame into one function
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
  
//   window.onload = function() {
//       game = document.querySelector('#game')
//       ctx = game.getContext('2d')
//       var pillowImg = document.querySelector('#pillow')
//     //   var pillowImg = new Image()
//       pillowImg.loaded = false
//       pillowImg.onload = start
//     //   pillowImg.src = './images/pillow.png'
//       let imgCount = 1

//     function start() {
//         if(--imgCount>0){return}
//         this.loaded = true
//         ctx.drawImage(pillowImg,1,1)
//         console.log(pillowImg.loaded)
//     }

//       console.log(pillowImg)
//   }   

document.addEventListener('DOMContentLoaded',()=>{
       // canvas
       game = document.querySelector('#game')
       //CANVAS CONFIG
       game.setAttribute('height', 600) // can also be done responsively
       game.setAttribute('width', 800)

       // Overlay for messages
       overlay = document.querySelector('#overlay')
       hold = true
        // overlay.addEventListener('click', e =>{
            // hold = false
            // if(!hold) {
                changeMsg('You are CORA! You are a tiny kitten who enjoys RUNNING AROUND and DESTROYING THINGS. Your human left you alone in this room, which means there\'s only one thing to do: DESTROY. EVERYTHING. Find the best order to make the biggest mess!','ok')
            // }
        //     console.log(hold)
        // console.log(hold)
        // context
        ctx = game.getContext('2d')
        
        // CHARACTER CONFIG
        cora = new Object('Cora',390,450,20,20, 'black',coraImg,ctx)
        
        //var pillowImg = new Image()
        //     var pillowImg = document.getElementById('pillow')
        //    pillowImg.onload = function() {
            //        ctx.drawImage(pillowImg,1,1)
            //    }
            //    //pillowImg.src = './images/pillow.png'
            //    console.log(pillowImg)
            
            turnCounter = 0
            gameOver = false
            
            //     document.addEventListener('keydown',movementHandler)
            document.addEventListener('click', pointAndClick)
            
            document.querySelector('#restart').addEventListener('click',reset)
        // })
       
//   let runGame = setInterval(gameLoop, 60) // approx 16-17 fps
        window.requestAnimFrame(gameLoop)    
})