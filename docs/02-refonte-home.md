# Étape 2 — Refonte de la home page

> Prototype : [`index.html`](../index.html)
> Chaque section répond à un constat numéroté de l'[audit](01-audit.md).

---

## Le principe directeur

La home actuelle est un **catalogue** : elle empile des collections. La home proposée est une **vitrine** : elle raconte une saison, puis vend.

Concrètement, on inverse l'ordre des priorités.

| Aujourd'hui | Proposition |
|---|---|
| La promo en premier | La promesse de marque en premier |
| Des grilles de produits | Un produit à la fois, mis en scène |
| Le savoir-faire en page annexe | Le savoir-faire dans le parcours d'achat |
| Filtres par couleur | Filtres par bonnet et par maintien |
| 114 K abonnées invisibles | La communauté affichée sur la home |

---

## La home, section par section

### 1. Barre d'annonce — rotation de réassurance → répond à **C2**

Trois messages alternent : livraison offerte, fabrication Paris/Portugal, bonnets A à E.
**Ce qu'on retire :** le bandeau « −60 % » permanent. On remplace un argument de prix par trois arguments de valeur.

### 2. Header transparent puis opaque, méga-menu illustré → répond à **C5**

Le header se fond dans le hero à l'arrivée, puis devient solide au scroll — le visuel garde toute la place à l'ouverture.

Le méga-menu reprend le parti pris de Sézane : trois colonnes de liens **plus deux vignettes éditoriales** qui poussent l'iconique et la collab. Le menu devient un lieu de découverte, pas un sommaire.

Nouveauté structurelle : la colonne **« Par bonnet »** (A–B, C–D, E et +, maintien renforcé). C'est la promesse différenciante d'Anja, elle entre dans la navigation.

### 3. Hero plein écran → répond à **C4**

Un seul message — *« Le maillot qu'on garde dix étés »* — une promesse de durabilité qui justifie le prix au lieu de s'en excuser. Deux actions : découvrir la collection, ou trouver son maillot.

Le bloc est prévu pour accueillir **une vidéo de 8 secondes en boucle**. À défaut, une photo pleine largeur.

### 4. Bandeau collaboration → **étape 3**

Placé immédiatement sous le hero, avant tout produit. La collab est l'événement de la saison : elle doit être vue par 100 % des visiteurs, pas seulement par ceux qui scrollent jusqu'en bas.

### 5. Trois portes d'entrée → répond à **C6**

Maillots / Beachwear / Accessoires. Trois tuiles, pas quinze collections. Les sous-catégories vivent dans le méga-menu, pas sur la home.

### 6. Spotlight — les produits révélés au scroll → **le cœur de la demande**

La section fait quatre hauteurs d'écran. Le visuel reste collé pendant qu'on descend, et **change à chaque produit** : quatre produits, quatre plans pleine hauteur, un à la fois.

Chaque produit affiche ce qui décide vraiment de l'achat : le prix, la plage de bonnets, le maintien, la provenance, les coloris.

Le quatrième produit est la pièce de la collab — la découverte produit débouche naturellement sur l'événement.

> **Sur mobile**, le principe collant est désactivé : les produits se transforment en cartes empilées. Une section de 400 vh est ingérable au pouce. Même chose si le visiteur a activé « réduire les animations » dans son système.

### 7. Les icônes — carrousel horizontal

Six pièces en scroll horizontal avec ajout rapide. C'est le rattrapage transactionnel après la mise en scène : celles qui savent ce qu'elles veulent peuvent acheter en deux clics.

### 8. Savoir-faire → répond à **C7**

Paris / Portugal / tissus italiens / OEKO-TEX / séries limitées : remonté de la page « marque » vers la home, en quatre lignes factuelles.

C'est ce bloc qui rend les 125 € acceptables. Sans lui, le prix est arbitraire ; avec lui, il est justifié.

### 9. Finder — « trouve ton maillot » → répond à **C6**

Deux questions : *maintien recherché* et *bonnet*. Le visiteur obtient une sélection.

Le site actuel propose de filtrer par « maillots clairs ». Personne n'a jamais acheté un maillot parce qu'il était clair. On achète parce qu'il tient. Ce module transforme le principal atout produit d'Anja — la largeur de bonnets — en outil de conversion.

### 10. Communauté #AnjaGirls → répond à **C8**

Six photos clientes. 114 000 abonnées d'un côté, 10 avis Trustpilot de l'autre : le mur UGC est le pont entre les deux. C'est aussi la preuve sociale la moins chère à produire.

### 11. Fondatrices

Une citation, un portrait, un lien. Alexandra et Lucie sont un actif de marque — Sézane et Polène ont bâti leur désirabilité sur exactement ça.

### 12. Réassurance, newsletter, footer

Quatre garanties explicites, dont **le conseil personnalisé avec ses horaires** — repris d'ERES, où c'est un marqueur de gamme.

La newsletter n'échange plus un code promo contre une adresse : elle échange **un accès anticipé de 48 h à la collab**. La contrepartie devient exclusive au lieu d'être vénale.

---

## Choix techniques

| Choix | Raison |
|---|---|
| HTML / CSS / JS natifs, zéro dépendance | Le prototype s'ouvre d'un double-clic, sans installation. Il se transpose ensuite en sections Shopify. |
| Deux polices Google (Fraunces + Inter) | Un serif chaleureux pour l'éditorial, un sans neutre pour l'interface. |
| Placeholders en dégradé | Nous n'avons pas les droits sur les photos d'Anja. Chaque bloc est prêt à recevoir une vraie image — voir [`assets/README.md`](../assets/README.md). |
| `IntersectionObserver` pour les apparitions | Natif, performant, dégradé proprement si indisponible. |
| `prefers-reduced-motion` respecté | Les animations et le scroll collant se désactivent pour les personnes qui le demandent. |

**Vérifications effectuées** sur le prototype rendu dans Chromium (1440 px et 390 px) : aucune erreur JavaScript, aucun débordement horizontal, mise en page mobile validée sur toutes les sections.
`À VÉRIFIER` : contraste AA sur chaque paire de couleurs, navigation clavier complète, et passage Lighthouse — à faire avant mise en production.

---

## Le mode présentation

Un bouton flotte en bas à gauche des deux pages : **Mode présentation** (ou la touche `N`).

Il affiche des pastilles numérotées expliquant chaque parti pris, et révèle les intentions d'art direction sur chaque bloc image (« vidéo 8 s, plan large, mer au petit matin », « portrait des deux fondatrices, atelier »…).

C'est fait pour la soutenance client : on ouvre la page, on active le mode, et chaque décision est justifiée à l'écran.
