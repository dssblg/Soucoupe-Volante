import imgSrc from "./assets/images/flyingSaucer-petit.png";
import Mobile from "./mobile";

// les soucoupes
export default class Saucer extends Mobile{
    constructor(canvas) {
        super(canvas.width,Math.floor(Math.random() * (canvas.height-36)), imgSrc, -3,0);
        this.moving = 0; 
        this.canvas = canvas;
    }

    /*Retourne true si la soucoupe se déplace vers le haut (moving == 1).*/
    get up() {
        return this.moving == 1;
    }

    /*Retourne true si la soucoupe se déplace vers le bas (moving == -1).*/
    get down() {
        return this.moving == -1;
    }

    /*Modifie la direction de déplacement de la soucoupe pour aller vers le bas 
    Quand la soucoupe est touchée*/
    modifyXY(){
        this.deltaX = 0;
        this.deltaY = 3;
    }

    /*Retourne true si la soucoupe est sortie de l'écran par la gauche (x <= -48).*/
    collisionWithCanva(){
        return this.x <=- 48;
    }

    /*Retourne true si la soucoupe est totalement hors du canvas (hors de la zone visible).*/
    OutOfCanvas(){
        return this.x <= -48 || this.y >= this.canvas.height + 36
    }

/*
    collisionWith(shoot) {
        const saucerRight = this.x+48;
        const saucerBottom = this.y+ 36;
    
        const shootRight = shoot.x+ 32;
        const shootBottom = shoot.y+ 8;
        const P1X = Math.max(this.x, shoot.x);
        const P1Y = Math.max(this.y, shoot.y);
        const P2X = Math.min(saucerRight, shootRight);
        const P2Y = Math.min(saucerBottom, shootBottom);
        console.log(`Saucer: [${this.x}, ${this.y}] - [${saucerRight}, ${saucerBottom}]`);
        console.log(`Shoot: [${shoot.x}, ${shoot.y}] - [${shootRight}, ${shootBottom}]`);
        console.log(`Overlap: [${P1X}, ${P1Y}] - [${P2X}, ${P2Y}]`);
        console.log(`Collision: ${P1X < P2X && P1Y < P2Y}`);
        return ((P1X < P2X) && (P1Y < P2Y));
    
    }*/
}