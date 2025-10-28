export default class Mobile {

    constructor(x, y,ImgSrc,deltaX=0, deltaY=0) {
        this.x =x;
        this.y =y;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.image = this.#createImage(ImgSrc);
    }
/*
    get x() {
        return this.x;
    }

    get y() {
        return this.y;
    }
*/
    /*Créé et retourne un objet image avec la source associée*/
    #createImage(imageSource) {
        //console.log("Création d'une nouvelle image...");

        const newImg = new Image();

        //console.log(`Définition de la source de l'image : ${imageSource}`);

        newImg.src = imageSource;

        //newImg.onload = () => console.log("Image chargée avec succès !");
        //newImg.onerror = () => console.error(`Erreur : Impossible de charger l'image ${imageSource}`);

        return newImg;
    }
    
    

    /*Dessine le mobile avec le contexte de rendu fourni en paramètre*/
    draw(context) {
        //if (!this.image.complete || this.image.naturalWidth === 0) {
            //console.warn("L'image n'est pas encore chargée !");
            //return;
        //}
        //console.log(` Dessin de l'image ${this.image.src} à x=${this.x}, y=${this.y}`);
        context.drawImage(this.image, this.x, this.y);
    }

    /*Applique au mobile un déplacement élémentaire, c'est-à-dire une modification de ses coordonnées en fonction de ses pas de déplacement.*/
    move(){
        this.x +=this.deltaX;
        this.y +=this.deltaY;
    }
}