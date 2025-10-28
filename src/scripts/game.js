import Starship from "./starship";
import Saucer from "./saucer";
import KeyManager from './keyManager';
import Shoot from "./shoot";
export default class Game {

   #canvas;
   #score;
   #saucerTime;
   

   constructor(canvas) {
      this.#canvas = canvas;
      this.starship = new Starship(canvas);
      this.saucers = [];
      this.#score = 0;
      this.keyManager = new KeyManager();
      this.shoot = [];
      this.saucersnull = [];
      this.#saucerTime = null;
      

   }

   /*Gérer les soucoupes volantes du jeu, les soucoupes ajoutées apparaissent à droite du canvas à une hauteur aléatoire.(dans le constructeur de Saucer)*/
   addSaucer = () => {
      const newSaucer = new Saucer(this.#canvas);
      this.saucers.push(newSaucer);
      
   };
   /*Ajouter des shoots.*/
   addShoot = () => {
      const newShoot = new Shoot(this.starship.x,this.starship.y,this.#canvas);
      this.shoot.push(newShoot);
   }

   /*Renvoie la valeur absolue de la valeur entrée en paramètre.
   n un entier.*/
   abs(n){
      if (n<0){n = -1*n};
      return n;
   }

   /*Animer le jeu, c'est-à-dire faire bouger et dessiner tous les mobiles du jeu.
   Gère l'appui sur les touche up down et espace.
   Modifie le score lorsque le joueur touche une soucoupe.
   Modofie le score lorsque qu'une soucoupe passe a gauche.*/
   animate = () => {
      const ctx = this.#canvas.getContext("2d");
      ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

      this.starship.handleMoveKeys(this.keyManager);
      this.starship.draw(ctx);
      //console.log('he');
      const x = this.shoot.map(shoot => shoot.collision(this.saucers)).find(saucer => saucer !== undefined);
      this.shoot = this.shoot.filter(shoot => !shoot.collision(this.saucers));
      if (x){
      this.saucersnull.push(x);
      this.#score += 200;
      this.updateScore();
      this.saucers = this.saucers.filter(sa => sa !== x);
      }
      this.saucersnull.forEach( saucer => saucer.modifyXY());
      //this.saucers = this.saucers.filter(sa => 
      //   !this.shoot.some(sho => sa.collisionWith(sho))
      //);
      //console.log('re');
      this.saucers.forEach(saucer => {
         saucer.draw(ctx);
         saucer.move();
      });
      this.isOut();
      this.updateScore();
      this.saucersnull.forEach(saucer => {
         saucer.draw(ctx);
         saucer.move();
      });

      this.shoot.forEach(sho => {
         sho.shoothandleMoveKeys(this.keyManager)
         sho.draw(ctx);
         sho.move();
      });
      this.saucers = this.saucers.filter( sau => !sau.OutOfCanvas());
      this.shoot = this.shoot.filter( sho => !sho.OutOfCanvas());
      this.saucersnull = this.saucersnull.filter( sau => !sau.OutOfCanvas());
      requestAnimationFrame(this.animate); 
   };

   /*Gérer les événements clavier qui permettent de faire bouger le vaisseau du joueur à l'aide des touches flèche haut et flèche bas.
   Ici lorsque l'on appuie sur une touche.*/
   keyDownActionHandler(event) {
      switch (event.key) {
          case "ArrowUp":
          case "Up":
              this.keyManager.upPressed();
              break;
          case "ArrowDown":
          case "Down":
              this.keyManager.downPressed();
              break;
          case " ":
          case "Spacebar":
               this.keyManager.spacePressed();
               this.addShoot();
               break;
          default: return;
      }
      event.preventDefault();
   }

   /*Gérer les événements clavier qui permettent de faire bouger le vaisseau du joueur à l'aide des touches flèche haut et flèche bas.
   Ici lorsque l'on arrête l'appui sur une touche.*/
   keyUpActionHandler(event) {
      switch (event.key) {
         case "ArrowUp":
         case "Up":
             this.keyManager.upReleased();
             break;
         case "ArrowDown":
         case "Down":
             this.keyManager.downReleased();
             break;
         case " ":
         case "Spacebar":
               this.keyManager.spaceReleased();
               break;
         default: return;
     }
     event.preventDefault();
   }

   /*Modifier le score
   points un entier.*/
   addPoints(points) {
      this.#score += points;
      this.updateScore();
   }
   
   /*Modifier le score*/
   //set score(pts) {
   //   this.#score = pts;
   //   this.updateScore();
   //}
   //modifier le score (voir ci-dessous),
   //set score(pts){
   //   this.score = this.score + pts;
   //}

   /*Donne accès au canvas correspondant à la zone de jeu */
   get canvas() {
      return this.#canvas;
   }

   /*Gère la sortie des soucoupes, qui sortent du canvas par la gauche et doivent être supprimée du jeu.*/
   isOut(){
      const res = this.saucers.filter( saucer => saucer.collisionWithCanva());
      if (res.length !== 0){
         this.addPoints(-1000);
      }
   }

   /*Modifier l'affichage du  score */
   updateScore() {
      const score = document.getElementById('score');
      score.textContent = this.#score;
   }
   
   /*La création d'une nouvelle soucoupe volante à intervalle régulier. 
   Toutes les 750ms, il y aura une chance sur 2 qu'une nouvelle soucoupe soit créée.
   Un nouveau clic sur ce même bouton interromp l'arrivée de nouvelles soucoupes, jusqu'au prochain clic qui redémarre le processus et ainsi de suite...*/
   flotteSoucoupe = () => {
      if (this.#saucerTime) {
         this.#saucerTime = null;
         clearInterval(this.#saucerTime);
      } 
      else {
         this.#saucerTime = setInterval(() => {
            if (Math.random() <= 0.5) {  
               this.addSaucer();
            }
         }, 750);
      }
   };
   

   
}



