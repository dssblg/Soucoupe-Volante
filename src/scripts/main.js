
// importation de la classe Game.js
import Game from './game.js';
import Shoot from './shoot.js';

// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler Greedy
const init = () => {
  const canvas = document.getElementById("stars");
  const game = new Game(canvas);
  const ctx = canvas.getContext("2d");
  //const sh = new Shoot(100,100,canvas);
  //const sh1 = new Shoot(200,200,canvas);
  //const sh2 = new Shoot(300,300,canvas);
  //console.log(sh);
  //sh.draw(ctx);
  //sh1.draw(ctx);
  //console.log("dessiner");
  //sh2.draw(ctx);
  //console.log("dessiner");

  game.animate(); // anime le jeu fonction principale.



  //ctx.fillStyle = "rgb(255, 118, 193)";
  //ctx.fillRect(348, 300, 10, 10);

  window.addEventListener('keyup', game.keyUpActionHandler.bind(game));
  window.addEventListener('keydown', game.keyDownActionHandler.bind(game));
  const addSaucerButton = document.querySelector("#nouvelleSoucoupe").addEventListener("click", () => game.addSaucer() );
  

  const flotteSoucoupesButton = document.getElementById('flotteSoucoupes');
  //console.log(flotteSoucoupesButton);
    if (flotteSoucoupesButton) {
      flotteSoucoupesButton.addEventListener("click", () => game.flotteSoucoupe());
    }
}

window.addEventListener("load", init);

