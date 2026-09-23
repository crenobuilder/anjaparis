# Assets Anja Paris

## État actuel

Le logo et 24 photos réelles ont été fournis par le client et intégrés au
prototype (voir la liste ci-dessous). **Il ne manque plus que les visuels de
la collaboration Anja × Havaianas**, qui n'existent pas encore (le client les
génère via ChatGPT).

Chaque emplacement image du prototype est câblé sur un chemin précis :
déposer un fichier portant exactement le nom attendu dans ce dossier le
remplace automatiquement, sans toucher au code.

## Encore en attente — collaboration Anja × Havaianas

| Fichier attendu | Utilisation |
|---|---|
| `collab-le-rio.jpg` | Carrousel « Anja × Havaianas, la collection » — pièce 2 (deux pièces) |
| `collab-le-terracotta.jpg` | Carrousel collab — pièce 3 |

`collab.html` a été entièrement reconstruite avec les composants de la home
(hero, bandeau collab, bloc éditorial, carrousel) et ne contient plus aucun
dégradé placeholder ni produit inventé (Le Rio / Le Terracotta ont été
retirés de cette page tant qu'ils n'ont pas de vraie photo — ils ne
subsistent que dans le carrousel de la home, en attente des fichiers
ci-dessus).

## Reçu et intégré — collaboration Anja × Havaianas

| Fichier | Origine | Utilisation |
|---|---|---|
| `hero-collab.jpg` | Photo fournie par le client, sans flocage | Hero plein écran de la home et de `collab.html` |
| `hero-collab-tag.jpg` | Recadrage de `collab-duo-le-fidele.jpg` | Carte produit flottante du hero (les deux pages) |
| `collab-duo-le-fidele.jpg` | Photo produit fournie par le client, floquée par nos soins (lockup recomposé avec le vrai logo Anja — l'original généré utilisait une police "Anja" inventée par l'IA, différente du logo réel) | Bandeau collab (les deux pages) + carrousel « Anja × Havaianas » de la home |
| `collab-tongs-detail.png` | Photo produit fournie par le client (déjà détourée, fond transparent) | Bloc éditorial « Le détail » de `collab.html`, en packshot sur fond ivoire |

## Déjà intégré — catalogue réel Anja

| Fichier | Produit / usage |
|---|---|
| `logo.svg` | Logo réel, en SVG inline (`fill: currentColor` — s'adapte au fond clair/sombre) |
| `le-plongeant-vichy-marine-lifestyle.webp` / `-packshot.webp` | Le Plongeant, vichy marine |
| `le-plongeant-vichy-vert-studio.webp` / `-lifestyle.webp` / `-packshot.webp` | Le Plongeant, vichy vert |
| `le-piccolo-lifestyle-dos.webp` / `-bras.webp` / `-packshot.webp` | Le Piccolo, aubergine et bleu |
| `le-fidele-lifestyle.webp` / `-packshot.webp` | Le Fidèle, une pièce asymétrique violet |
| `le-petillant-lifestyle-1.webp` / `-2.webp` / `-packshot.webp` | Le Pétillant, haut triangle bleu électrique |
| `le-determine-lifestyle-piscine.webp` / `-dos.webp` / `-packshot.webp` | Le Déterminé, une pièce sportif chocolat |
| `le-marin-lifestyle-duo.webp` / `le-marin-detail.webp` | Le Marin, deux pièces rayé marine |
| `triangle-fluo-orange-1.webp` / `-2.webp` | Haut triangle fluo orange |
| `le-confortable-lifestyle.webp` | Le Confortable — prêt-à-porter |
| `ambiance-cabana.webp` | Photo d'ambiance (cabana piscine) — bloc savoir-faire |
| `ambiance-nautique.jpg` | Photo d'ambiance (coussins rayés bateau) — disponible, pas encore utilisée |
| `illustration-palmier.webp` | Illustration dessinée à la main (palmiers) — disponible, pas encore utilisée |

**Important — noms de produits et prix** : les noms (Le Plongeant, Le Piccolo,
Le Fidèle, Le Pétillant, Le Déterminé, Le Marin, Le Confortable) viennent des
noms de fichiers fournis par le client — fiables, mais à faire valider. **Les
prix affichés sont illustratifs** : je n'ai qu'une seule donnée de prix
vérifiée par recherche externe (~125 € pour un une-pièce plein tarif). Tous
les autres montants sont des estimations à corriger avec les vrais tarifs
avant toute présentation client finale.

## Police

Work Sans installée (Archivo chargée en alternative). Si ce n'est ni l'une
ni l'autre, indiquer le nom exact (clic droit sur un titre du vrai site →
Inspecter → `font-family` dans le panneau de styles).

## Ratios de référence

| Emplacement | Ratio |
|---|---|
| Hero | Plein écran, sujet cadré |
| Tag produit flottant (hero) | 4 / 5 |
| Tuiles catégories | 3 / 4 |
| Cartes carrousel | 3 / 4 (packshot recommandé pour la cohérence visuelle) |
| Bloc éditorial plein écran | Libre, occupe 50 % de largeur |
| Grille lookbook | 1 / 1 |
