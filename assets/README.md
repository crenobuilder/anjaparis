# Remplacer les placeholders par de vraies photos

Nous n'avons pas les droits sur les visuels d'Anja Paris. Chaque emplacement image du prototype est donc occupé par un dégradé art-dirigé, prêt à être remplacé.

## Comment faire

Chaque bloc image est un `<div class="ph ph--sun">`. Pour y mettre une photo, ajoutez la variable `--img` :

```html
<!-- Avant -->
<div class="ph ph--sun"></div>

<!-- Après -->
<div class="ph" style="--img: url('images/le-plongeant-rouge.jpg')"></div>
```

Le CSS bascule automatiquement en `background-size: cover` centré. Aucune autre modification n'est nécessaire.

## Les ambiances disponibles

Tant que les photos ne sont pas là, ces classes donnent la tonalité voulue :

| Classe | Ambiance |
|---|---|
| `ph--sun` | Jaune soleil → terracotta |
| `ph--sea` | Lagon → bleu profond |
| `ph--rouge` | Corail → rouge brique |
| `ph--marine` | Bleu clair → marine |
| `ph--sable` | Sable → beige doré |
| `ph--terra` | Rosé → terracotta |
| `ph--vert` | Vert amande → vert profond |
| `ph--nuit` | Gris bleuté → nuit |

## Quelle photo à quel endroit

Activez le **mode présentation** (bouton en bas à gauche, ou touche `N`) : chaque bloc affiche alors l'intention d'art direction attendue — cadrage, sujet, lumière.

## Ratios à respecter

| Emplacement | Ratio |
|---|---|
| Hero | Plein écran, sujet décalé à droite (le texte occupe la gauche) |
| Tuiles catégories | 3 / 4 |
| Spotlight produit | Plein écran vertical, une moitié d'écran |
| Cartes carrousel | 3 / 4 |
| Vignettes méga-menu | 4 / 5 |
| Mur communauté | 1 / 1 |

## Recommandations techniques

- Format **WebP**, largeur maximale 2000 px pour les visuels plein écran, 1200 px pour les cartes.
- Prévoir un `srcset` en production — le prototype ne le fait pas pour rester lisible.
- Le hero est prévu pour une **vidéo de 8 secondes en boucle** (muette, `autoplay`, `playsinline`). Une photo fonctionne tout aussi bien.
