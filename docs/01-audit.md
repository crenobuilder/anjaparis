# Étape 1 — Audit Anja Paris & benchmark concurrentiel

> Document de travail — proposition de refonte anja-paris.com
> Date : septembre 2026

---

## 0. Méthodologie & limites (à lire avant tout)

Cet audit a été construit à partir de :

- les **pages indexées** d'anja-paris.com (titres, slugs, structures d'URL, meta descriptions) ;
- les **sources publiques** : presse, interviews des fondatrices, Trustpilot, réseaux sociaux ;
- la **connaissance des sites de référence** (Sézane, Polène, ERES, Havaianas) et de leurs partis pris UX documentés (Awwwards, Ecommerce Design Awards, audits UX publiés).

**Limite assumée :** l'environnement technique utilisé pour cet audit bloque le chargement direct des sites marchands. Les constats de **performance mesurée** (Core Web Vitals, poids des pages, temps de chargement) et de **parcours pas-à-pas** (tunnel de commande, fiche produit au clic) sont donc marqués `À VÉRIFIER` dans le document. Ils doivent être confirmés par une passe Lighthouse / PageSpeed + un test utilisateur avant présentation finale au client.

Tout ce qui n'est **pas** marqué `À VÉRIFIER` est un constat factuel, vérifiable depuis les pages publiques.

---

## 1. Qui est Anja Paris

| | |
|---|---|
| **Création** | 10 avril 2017, lancée via Ulule (financement participatif) |
| **Fondatrices** | Alexandra Thiltgès (IFM, ex-Make Up For Ever), rejointe par Lucie Hanon |
| **Positionnement** | Maillots de bain français « solaires », élégants, à prix juste |
| **Promesse** | *« French swimwear for Sunny Women »* |
| **Fabrication** | Dessiné à Paris, fabriqué au Portugal, tissus européens/italiens, certifié OEKO-TEX |
| **Prix** | ~125 € le une-pièce plein tarif (positionnement accessible-premium) |
| **Communauté** | ~114 K abonnés Instagram (@anja_paris) |
| **Distribution** | E-shop + Le Bon Marché Rive Gauche + revendeurs |
| **Gamme** | Maillots (1 pièce, 2 pièces, hauts, bas), beachwear / prêt-à-porter (robes, blouses, jupes, paréos, pantalons), accessoires (foutas, totes, chapeaux, casquettes, parfums) |

**Ce que la marque a déjà, et qui est rare :** une histoire fondatrice incarnée, une fabrication européenne tracée, une gamme de bonnets large (vrai différenciant sur le maillot), une communauté de 114 K, et une caution retail (Le Bon Marché).

**Le problème :** rien de tout cela ne se voit sur le site. Le site vend des produits ; il ne vend pas la marque.

---

## 2. Audit du site actuel — les 10 constats

### 🔴 Critique

**C1 — La version anglaise est traduite à la machine, et c'est visible dans Google.**
La collection « une pièce et deux pièces » est indexée en anglais sous le titre **« All Swimsuits of Anja — One room and two rooms »**. *Une pièce* a été traduit par *one room*. On trouve aussi des titres hybrides non traduits : « **Les** Swimsuits two-pieces by Anja », « **Les** Swimsuits clairs d'Anja ».
→ *Impact :* sur le marché international — celui que la marque cherche à ouvrir avec un `/en` — la première impression est celle d'un site non professionnel. C'est le point le plus grave et le moins cher à corriger.

**C2 — Le site est en promotion permanente (jusqu'à −60 %).**
La remise est un argument de façade sur les pages d'entrée. Pour une marque qui revendique le prix juste, la fabrication européenne et l'OEKO-TEX, la promo systématique **détruit la valeur perçue** et entraîne les clientes à n'acheter qu'en soldes.
→ *Comparaison :* Polène et Sézane ne soldent quasiment jamais. ERES solde en fenêtres courtes et cadrées. C'est ce qui leur permet de tenir leur prix.

**C3 — Hygiène technique et SEO dégradée.**
Des URLs de travail sont indexées telles quelles :
- `…/collections/robes?logged_in_customer_id=&lang=en` — un paramètre de session exposé dans l'index,
- `…/a/l/en/collections/all` — un second chemin vers la même page que `/en/collections/all`.
→ *Impact :* contenu dupliqué, budget de crawl gaspillé, signaux SEO dilués sur des pages qui devraient concentrer le jus.

### 🟠 Important

**C4 — Aucune hiérarchie éditoriale sur la home.**
La home empile des collections (`nouveautés`, `tous les maillots`, `maillots clairs`, `prêt-à-porter`, `accessoires`) sans raconter de saison, sans parti pris, sans point d'entrée émotionnel. C'est un catalogue, pas une vitrine. Sézane fait exactement l'inverse : chaque bloc de la home est un chapitre.

**C5 — La navigation est une liste de catégories, pas un outil de découverte.**
Le menu reproduit l'arborescence du back-office. Chez Sézane, le méga-menu est **illustré** : chaque entrée porte une image éditoriale qui donne envie de cliquer. Chez Polène, la navigation est réduite à l'os mais chaque clic mène à une page qui respire.

**C6 — La taxonomie est incohérente et parfois absurde commercialement.**
« Les maillots clairs » est une collection de premier niveau. Ce n'est pas un besoin client : personne ne cherche « un maillot clair ». En revanche, **personne ne peut filtrer par morphologie, par bonnet, ou par niveau de maintien** — alors que c'est *le* critère d'achat n°1 sur le maillot de bain, et que la largeur de bonnets est justement un atout d'Anja.

**C7 — Le savoir-faire est enterré dans une page « marque ».**
Paris / Portugal / OEKO-TEX / séries limitées : ce sont les arguments qui justifient les 125 €. Ils sont relégués dans une page institutionnelle que presque personne n'ouvre. Ils doivent être **dans le parcours d'achat**, sur la home et sur la fiche produit.

**C8 — Preuve sociale quasi absente.**
114 K abonnés Instagram d'un côté, **10 avis Trustpilot** de l'autre. La communauté existe mais n'est ni captée, ni réinjectée sur le site (pas d'avis produits visibles, pas de mur UGC, pas de photos clientes). C'est un actif dormant.

### 🟡 À confirmer

**C9 — Performance et mobile.** `À VÉRIFIER` — passe Lighthouse mobile + desktop à faire sur home / collection / fiche produit. Le thème Shopify utilisé semble ancien ; sur ce type de thème les LCP > 4 s sont fréquents. Sachant que ~75 % du trafic mode est mobile, c'est potentiellement le premier poste de perte de CA.

**C10 — Tunnel de conversion.** `À VÉRIFIER` — nombre d'étapes, frais de port affichés tardivement, absence éventuelle de paiement express (Apple Pay / Shop Pay / PayPal), politique de retour peu visible. À tester en commande réelle.

---

## 3. Benchmark concurrentiel

### ERES Paris — le concurrent frontal (haut de gamme)

- Maison fondée en **1968**, dans le **groupe Chanel depuis 1996**. Fabrication française, tissus exclusifs résistants chlore/sel.
- Positionnement : le maillot comme **seconde peau**, sans armatures ni baleines. Prix 300–600 €.
- Le site est **organisé par saisons nommées** (`Winter26collection`, `Spring2025`, `Summer2025`) — la collection devient un événement daté, pas un stock.
- Rubrique **« ERES Days »** : un rendez-vous commercial identifié, qui remplace la promo sauvage.
- Service client **avec horaires affichés** (lun–ven 9h–19h, sam 9h–18h), livraison et retours offerts dans le monde entier.

> **À prendre :** la logique de saison nommée, le rendez-vous promotionnel cadré, le service client mis en avant comme preuve de gamme.
> **À ne pas prendre :** la froideur. Anja est solaire, ERES est clinique. Ce n'est pas le même terrain.

### Sézane — la référence structure & navigation

- **Méga-menu éditorial illustré** : chaque entrée de menu porte une photo de mode qui prolonge l'univers de la home. La navigation fait elle-même partie du storytelling.
- **Home en chapitres** : des blocs éditoriaux alternent avec les blocs produits, au lieu d'une grille infinie.
- La photo produit est cassée par des **plans lifestyle stylisés** — on a l'impression de feuilleter une sélection, pas de scroller un stock.
- Services identitaires et rassurants (retours, boutiques, l'Appartement) intégrés comme des **signes de marque**, pas comme des mentions légales.

> **À prendre :** le méga-menu illustré, la home en chapitres, l'alternance éditorial/produit. C'est exactement ce qui manque à Anja.

### Polène — la référence sobriété & désir

- Maison de maroquinerie fondée en **2016** — donc quasi contemporaine d'Anja, ce qui prouve qu'on peut construire une marque désirable en moins de dix ans.
- Navigation **fluide et sans fioritures**, peu d'entrées, beaucoup d'air. Le site est un **écrin** : il s'efface derrière les produits.
- Tonalités naturelles, rythme lent, aucune pression promotionnelle. Primée aux **Ecommerce Design Awards**.

> **À prendre :** l'économie de moyens. Moins d'entrées de menu, plus de blanc, zéro bruit promotionnel. Le luxe, c'est le vide.

### Havaianas — le partenaire de l'étape 3

- Marque brésilienne populaire, **spécialiste des collaborations mode** : Isabel Marant (mai 2026), Dolce & Gabbana, Gigi Hadid.
- La collab **Isabel Marant × Havaianas** (lancée le 22 mai 2026) est le précédent le plus utile : 4 modèles sur 2 silhouettes, imprimés ikat, clous métalliques, **120 à 195 €**, distribuée **sur les deux e-shops** et en boutiques sélectionnées.
- Narratif officiel : *faire se rencontrer deux mondes culturels — la spontanéité brésilienne et l'allure parisienne*.

> **Ce que ça démontre pour nous :** Havaianas a un **playbook collab rodé avec des marques parisiennes**, et accepte des prix jusqu'à 195 € quand le partenaire apporte de la désirabilité. Une collaboration Anja × Havaianas n'est donc ni farfelue ni hors budget — elle est dans la continuité exacte de leur stratégie. Détail de la proposition : `docs/03-collab-anja-havaianas.md`.

---

## 4. Synthèse — tableau de positionnement

| | Anja Paris | ERES | Sézane | Polène |
|---|---|---|---|---|
| Prix maillot / pièce | ~125 € | 300–600 € | — | — |
| Fabrication | Portugal, OEKO-TEX | France | Portugal / Europe | Espagne |
| Navigation | Liste de catégories | Par saison nommée | Méga-menu illustré | Minimale, très aérée |
| Home | Catalogue empilé | Collection-événement | Chapitres éditoriaux | Écrin, peu de blocs |
| Promotion | Permanente (−60 %) | Fenêtres cadrées | Quasi nulle | Quasi nulle |
| Preuve sociale | 10 avis | Service client premium | Communauté forte | Désir / rareté |
| Storytelling | Enterré | Patrimonial (1968) | Omniprésent | Matière & geste |

**Le constat central :** Anja a le produit, le prix, la fabrication et la communauté d'une marque désirable. Son site la fait passer pour un destockeur. **L'écart est un écart d'exécution digitale, pas un écart de marque.** C'est une bonne nouvelle : c'est réparable.

---

## 5. Les 5 chantiers prioritaires

| # | Chantier | Effort | Impact | Priorité |
|---|---|---|---|---|
| 1 | **Refaire la home en chapitres** : hero fort, mise en avant produit au scroll, savoir-faire et communauté remontés | M | 🔥🔥🔥 | **P0** — étape 2 |
| 2 | **Lancer la collab Anja × Havaianas** comme événement de marque et pic d'acquisition | L | 🔥🔥🔥 | **P0** — étape 3 |
| 3 | **Corriger la traduction EN + l'hygiène d'URL** (paramètres indexés, chemins dupliqués) | S | 🔥🔥 | **P0** — quick win |
| 4 | **Refondre la navigation** : méga-menu illustré + filtres par bonnet / maintien / morphologie | M | 🔥🔥 | P1 |
| 5 | **Sortir de la promo permanente** : remplacer −60 % par des rendez-vous cadrés type « ERES Days » | S | 🔥🔥 | P1 |

> Les chantiers 1, 2 et 3 sont couverts par cette proposition. Les chantiers 4 et 5 sont documentés ici pour la discussion client mais dépassent le périmètre du prototype.

---

## 6. Ce qu'il reste à valider ensemble

1. **La cible prioritaire** — fidéliser les 30-45 ans actuelles, ou aller chercher les 25-35 ans via la collab ?
2. **La sortie de la promo** — le client est-il prêt à renoncer au −60 % permanent ? C'est la décision la plus structurante et la plus difficile.
3. **Le périmètre de refonte** — nouveau thème Shopify sur mesure, ou refonte de la home seule dans le thème existant ?
4. **La faisabilité de la collab** — existe-t-il un contact chez Havaianas / groupe Alpargatas ? Le prototype de l'étape 3 sert justement de support de prise de contact.

---

### Sources

- [Alexandra Thiltgès, fondatrice des maillots Anja — Les Confettis](https://www.lesconfettis.com/anja-alexandra-thiltges/)
- [Anja, la marque de maillots de bain responsable — Les Confettis](https://www.lesconfettis.com/anja-maillots-de-bain-responsables/)
- [Alexandra Thiltgès, fondatrice d'Anja Paris — Femmes Magazine](https://www.femmesmagazine.lu/alexandra-thiltges-fondatrice-danja-paris/)
- [Les fondatrices — Anja Paris](https://www.anja-paris.com/en/pages/les-fondatrices)
- [La marque — Anja Paris](https://www.anja-paris.com/en/pages/marque)
- [Tous les maillots de bain — Anja Paris](https://www.anja-paris.com/en/collections/tous-les-maillots-de-bain)
- [Avis anja-paris.com — Trustpilot](https://www.trustpilot.com/review/anja-paris.com)
- [ERES Paris — site officiel](https://www.eresparis.com/eu/en/home)
- [Toute la collection — ERES](https://www.eresparis.com/eu/fr/les-maillots-de-bain/tous-les-modeles/)
- [Sézane — Awwwards](https://www.awwwards.com/sites/sezane)
- [Sézane, a Luxury Fashion UX Audit — Rebekah Daniels](https://www.rebekahdaniels.com/explorations/sezane-a-luxury-fashion-ux-audit)
- [Polène — Ecommerce Design Awards](https://www.ecomdesignawards.com/websites/polene-paris)
- [Polène : l'ascension discrète d'une marque devenue incontournable — MCFactory](https://www.mcfactory.fr/marketing-digital/polene-l-ascension-discrete-d-une-marque-devenue-incontournable/)
- [Isabel Marant and Havaianas join forces for first limited-edition collaboration — FashionUnited](https://fashionunited.com/news/fashion/isabel-marant-and-havaianas-join-forces-for-first-limited-edition-collaboration/2026052772597)
- [Havaianas and Isabel Marant Merge Brazilian and Parisian Style — WWD](https://wwd.com/footwear-news/shoe-trends/havaianas-isabel-marant-flip-flop-collection-1238972434/)
- [Isabel Marant x Havaianas — Havaianas Store](https://www.havaianas-store.com/gb/en/isabelmarantxhavaianas.html)
