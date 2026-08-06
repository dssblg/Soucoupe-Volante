# Soucoupe-Volante

Mini jeu d'arcade en JavaScript : pilotez un vaisseau, détruisez des soucoupes volantes avant qu'elles ne traversent l'écran, et marquez un maximum de points.

![capture](src/images/flyingSaucer-petit.png)

---

## Gameplay

- Déplacez le vaisseau verticalement avec le clavier (avec les flèches haut et bas)
- Les soucoupes apparaissent aléatoirement et avancent vers la gauche
- Tirez pour les détruire avant qu'elles n'atteignent le bord (avec la touche espace)
- Chaque soucoupe détruite rapporte des points
- Deux modes : ajouter une soucoupe, ou activer un flux infini

---

## Stack technique

- JavaScript (ES6+)
- Canvas API
- Webpack (bundling, dev server)
- Babel (transpilation)
- CSS animations (fond étoilé défilant)

---

## Lancement

```bash
npm install
npm run build
npm run dev-server
```

Le jeu s'ouvre sur `localhost:9000`.

---

## 📁 Structure

```
src/
├── scripts/
│   ├── main.js        # Point d'entrée, initialisation
│   ├── game.js        # Boucle de jeu, gestion des entités
│   └── shoot.js       # Gestion des tirs
├── index.html         # Structure de la page
├── style/
│   └── style.css      # Styles et animation du fond
└── images/            # Sprites et assets
```

---

## Ce que j'ai appris

- **Boucle de jeu avec `requestAnimationFrame`** : gestion du delta time pour des animations fluides.
- **Gestion des entrées clavier** : `keydown`/`keyup` avec `bind()` pour le contexte.
- **Bundling avec Webpack** : configuration manuelle, loaders CSS/images, dev server.
- **Animation CSS** : fond étoilé défilant en keyframes.