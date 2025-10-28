import imgSrc from "./assets/images/vaisseau-ballon-petit.png";
import Mobile from "./mobile";

//vaisseau du joueur
export default class Starship extends Mobile{
    constructor(canvas) {
        super(40, canvas.height /2, imgSrc, 0,8);
        this.moving = 0; 
        this.canvas = canvas;
    }

    /*Retourne true si le vaisseau se déplace vers le haut (moving == 1).*/
    get up() {
        return this.moving == 1;
    }

    /*Retourne true si le vaisseau se déplace vers le bas (moving == -1).*/
    get down() {
        return this.moving == -1;
    }
    
    /*Arrête le mouvement en mettant moving à 0.*/
    stopMoving() {
        //this.y = 0;
        this.moving = 0;
    }
    
    /*Surcharge la méthode move de Mobile pour que le comportement hérité de la méthode move de Mobile ne s'exécute que si le déplacement ne fait pas sortir le vaisseau de la zone du jeu (du canvas). Vous pouvez utiliser une reférence correspondant au jeu pour accéder aux dimensions de la zone de jeu.*/
    move() {
        if (this.y + this.deltaY >= 0 && this.y + this.deltaY <= this.canvas.height - 39) {
            super.move();
        }
        
    }
    
    /*Gère le déplacement du vaisseau en ajustant deltaY et en appelant move() en fonction des touches directionnelles pressées (haut ou bas).
    keyManager : un objet gérant l'état des touches pressées.*/
    handleMoveKeys(keyManager) {
        //this.stopMoving();    
        if (keyManager.up) {
            this.deltaY = Math.abs(this.deltaY); 
           this.moveUp();
           this.move();
        }
        if (keyManager.down) {
            this.deltaY = -1* Math.abs(this.deltaY);
           this.moveDown();
           this.move();
        }
    }

    /* Fait monter le vaisseau en ajustant deltaY. */
    moveUp() {
        this.deltaY = -Math.abs(this.deltaY); 
        this.moving = 1;
    }

    /* Fait descendre le vaisseau en ajustant deltaY. */
    moveDown() {
        this.deltaY = Math.abs(this.deltaY); 
        this.moving = -1;
    }
}

