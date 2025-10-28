/*
   A KeyManager can be used to store the pressed keys.
   It provides accessors for left, right, up and down keys.
   Methods leftPressed()/leftReleased() must be called when left key is pressed or releasee.
   Simular methods exist for right, up and down.
*/
export default class KeyManager {
   #left;
   #right;
   #up; 
   #down;
   #space;
   
   constructor() {
      this.#left = false;
      this.#right = false;
      this.#up = false;
      this.#down = false;
      this.#space = false;
   }

//LEFT (pas pour le projet)

   /* accessor for left key, true when pressed  */
   get left() {
      return this.#left;
   }

   /* setter for left key */
   set left(value) {
      this.#left = value;
   }

   /* stores that left key is pressed */
   leftPressed() {
      this.#left = true;
   }
   /* stores that left key is no more pressed */
   leftReleased() {
      this.#left = false;
   }

//SPACE 

   /*Retourne true si la touche espace est pressée.*/
   get space() {
      return this.#space;
   }

   //set space(value) {
   //   this.#space = value;
   //}
   
   /*Marque la touche espace comme pressée (#space = true).*/
   spacePressed() {
      this.#space = true;
   }
   
   /*Marque la touche espace comme relâchée (#space = false).*/
   spaceReleased() {
      this.#space= false;
   }

//RIGHT (pas pour le projet)
   get right() {
      return this.#right;
   }
   set right(value) {
      this.#right = value;
   }
   rightPressed() {
      this.#right = true;
   }
   rightReleased() {
      this.#right = false;
   }
   
//UP

   /*Retourne true si la touche haut est pressée.*/
   get up() {
      return this.#up;
   }

   /*Modifie l'état de la touche haut.*/
   set up(value) {
      this.#up = value;
   }

   /*Marque la touche haut comme pressée (#up = true).*/
   upPressed() {
      this.#up = true;
   }

   /*Marque la touche haut comme relâchée (#up = false).*/
   upReleased() {
      this.#up = false;
   }

//DOWN

   /*Retourne true si la touche bas est pressée.*/
   get down() {
      return this.#down;
   }

   /*Modifie l'état de la touche bas.*/
   set down(value) {
      this.#down = value;
   }

   /*Marque la touche bas comme pressée (#down = true).*/
   downPressed() {
      this.#down = true;
   }

   /*Marque la touche bas comme relâchée (#down = false).*/
   downReleased() {
      this.#down = false;
   }

//OTHER
   oneKeyPressed() {
      return this.#left || this.#right || this.#up || this.#down;
   }
   noKeyPressed() {
      return ! this.oneKeyPressed();
   }
}