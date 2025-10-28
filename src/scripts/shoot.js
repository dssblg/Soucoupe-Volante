import imgSrc from "./assets/images/tir.png";
import Mobile from "./mobile";
export default class Shoot extends Mobile{
       constructor(x, y,canvas) {
              super((x+35), (y+12), imgSrc, 8,0);
              this.moving = 0; 
              this.canvas = canvas;
       }

       /*Retourne true si le tir est en mouvement vers le haut.*/
       get up() {
              return this.moving == 1;
       }
       /*Retourne true si le tir est en mouvement vers le bas.*/
       get down() {
              return this.moving == -1;
       }

       /*Arrête le mouvement du tir en réinitialisant sa position verticale.*/
       stopMoving() {
              this.y = 0;
       }

       /*Vérifie si le tir entre en collision avec une soucoupe donnée.*/
       collisionWith(saucer) {


              const shootRight = this.x+32;
              const shootBottom = this.y+ 8;

              const saucerRight = saucer.x+ 39;
              const saucerBottom = saucer.y+ 48;
              const P1X = Math.max(this.x, saucer.x);
              const P1Y = Math.max(this.y, saucer.y);
              const P2X = Math.min(shootRight, saucerRight);
              const P2Y = Math.min(shootBottom, saucerBottom);
              //console.log(`Saucer: [${this.x}, ${this.y}] - [${shootRight}, ${shootBottom}]`);
              //console.log(`Shoot: [${saucer.x}, ${saucer.y}] - [${saucerRight}, ${saucerBottom}]`);
              //console.log(`Overlap: [${P1X}, ${P1Y}] - [${P2X}, ${P2Y}]`);
              //console.log(`Collision: ${P1X < P2X && P1Y < P2Y}`);
              return ((P1X < P2X) && (P1Y < P2Y));

       }

       /*Retourne la première soucoupe avec laquelle le tir est en collision parmi un tableau de soucoupes.*/
       collision(saucers) {
              return saucers.find(saucer => this.collisionWith(saucer));
       }
   

       /*Gère le mouvement du tir lorsqu'une touche est pressée (espace pour tirer).*/
       shoothandleMoveKeys(keyManager) {
              //console.log(keyManager.space);
              //this.stopMoving();    // on réinitialise les déplacements
              if (keyManager.space)  // touche flèche du haut pressée ?
              this.move();

       }

       /*Vérifie si le tir est sorti du canvas (bord droit de l'écran).*/
       OutOfCanvas(){
              this.x >= this.canvas.width + 32 ;
       }

}