
export const random = {
    name : "money",
    owner : "ISIS",
    skin : {
        normal : "./giftassets/source.gif",
        sleep : "./giftassets/awhellnah.gif",
        eat : "./gifassets/attachment.gif",
    },
    element : document.createElement('img'),
    width : 10,
    height : 10,
    x : 0,
    y : 0,
    speed: 10,

    show : function(){
        this.element.classList.add("random");
        this.default();
        document.getElementById("arena").append(this.element);
    },

    default : function(){
        this.element.src = this.skin.normal;
    },

    sleep : function(){
        this.element.src = this.skin.sleep;
    },

    eat : function(){
        this.element.src = this.skin.eat;
    },

    getName : function(){
        return this.name;
    },

    getOwner()
    {
        return this.owner;
    },

    moveRight : function(x = this.speed){
        this.x += x;
        this.element.style.left = `${this.x}px`;
    },

    moveLeft : function(x = this.speed){
        this.x -= x;
        this.element.style.left = `${this.x}px`;
    },

    moveDown : function(y = this.speed){
        this.y += y;
        this.element.style.top = `${this.y}px`;
    }
}
