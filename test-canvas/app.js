let game = document.querySelector('#game')
    game.setAttribute('height', 600)
    game.setAttribute('width', 800)
let ctx = game.getContext('2d')

let background = document.querySelector('#background')
    background.setAttribute('height', 600)
    background.setAttribute('width', 800)
// let ctx = game.getContext('2d')

var bgImg = new Image()
bgImg.onload = function(){
    ctx.drawImage(bgImg,0,0)
 }
 bgImg.src = '../images/background-01.jpg'

let pillowImg = new Image()
pillowImg.onload = function() {
    ctx.drawImage(pillowImg,540,275)
}
pillowImg.src = '../images/pillow.png'
