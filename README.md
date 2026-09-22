# Anja Paris — proposition de refonte

Proposition commerciale en trois étapes pour la marque de maillots de bain **Anja Paris** : audit, refonte de la home page, et création d'une collaboration Anja × Havaianas.

> **Document de travail non officiel.** Ce dépôt n'est pas affilié à Anja Paris ni à Havaianas. La collaboration présentée est **fictive** et sert de support de proposition.

---

## Ouvrir le prototype

Aucune installation, aucun serveur. Double-cliquez sur :

- **[`index.html`](index.html)** — la home page refondue
- **[`collab.html`](collab.html)** — la page de la collaboration Anja × Havaianas

> Le prototype charge deux polices depuis Google Fonts. Sans connexion, il reste lisible mais s'affiche dans les polices système.

### Le mode présentation

Un bouton flotte en bas à gauche : **Mode présentation** (raccourci : touche `N`).

Il affiche :
- des **pastilles numérotées** qui justifient chaque parti pris à l'écran ;
- les **intentions d'art direction** sur chaque bloc image (cadrage, sujet, lumière).

C'est l'outil de soutenance : on ouvre la page devant le client et chaque décision se lit à l'écran.

---

## Les trois étapes

| | Document | Ce qu'il contient |
|---|---|---|
| **1** | [Audit & benchmark](docs/01-audit.md) | 10 constats sur le site actuel, benchmark ERES / Sézane / Polène / Havaianas, 5 chantiers priorisés |
| **2** | [Refonte de la home](docs/02-refonte-home.md) | Le raisonnement section par section, chacune reliée à un constat d'audit |
| **3** | [Collaboration Anja × Havaianas](docs/03-collab-anja-havaianas.md) | Le rationnel, l'offre, la grille tarifaire, le dispositif de lancement, les risques |

---

## Ce qui a été vérifié, et ce qui ne l'a pas été

**Vérifié** — prototype rendu dans Chromium en 1440 px et 390 px : aucune erreur JavaScript, aucun débordement horizontal, mise en page mobile validée sur toutes les sections.

**Non vérifié, à faire avant présentation finale** — ces points sont marqués `À VÉRIFIER` dans les documents :

- performance réelle du site actuel (Lighthouse, Core Web Vitals) ;
- parcours de commande d'Anja testé en conditions réelles ;
- contraste AA sur chaque paire de couleurs du prototype, et navigation clavier complète ;
- validation juridique du motif proposé pour la collaboration.

L'audit a été construit sans pouvoir charger directement les sites concernés — la méthodologie et ses limites sont détaillées en tête du [document d'audit](docs/01-audit.md#0-méthodologie--limites-à-lire-avant-tout).

---

## Organisation du dépôt

```
index.html              Home page refondue
collab.html             Page collaboration Anja × Havaianas
assets/
  css/style.css         Design system + home
  css/collab.css        Styles propres à la page collab
  js/main.js            Interactions (scroll, méga-menu, finder) — zéro dépendance
  README.md             Comment remplacer les placeholders par de vraies photos
docs/
  01-audit.md           Étape 1
  02-refonte-home.md    Étape 2
  03-collab-*.md        Étape 3
```
