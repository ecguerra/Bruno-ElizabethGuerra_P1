// Class for furniture items

function Object(x,y,width,height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }
}