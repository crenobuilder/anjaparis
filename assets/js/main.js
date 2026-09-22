/* ==========================================================================
   ANJA PARIS — Proposition de refonte
   Interactions de la page. Zéro dépendance.
   ========================================================================== */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     1. Barre d'annonce — rotation des messages de réassurance.
        Remplace le bandeau promo permanent (constat C2 de l'audit).
     ---------------------------------------------------------------------- */
  function initAnnounce() {
    var items = document.querySelectorAll('.announce__item');
    if (items.length < 2) return;
    var i = 0;
    setInterval(function () {
      items[i].classList.remove('is-active');
      i = (i + 1) % items.length;
      items[i].classList.add('is-active');
    }, 4200);
  }

  /* ----------------------------------------------------------------------
     2. Header — transparent sur le hero, opaque dès qu'on scrolle.
     ---------------------------------------------------------------------- */
  function initHeader() {
    var header = document.querySelector('.header');
    if (!header) return;

    var hero = document.querySelector('.hero');
    var threshold = hero ? hero.offsetHeight - 120 : 80;

    function update() {
      header.classList.toggle('is-solid', window.scrollY > threshold);
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', function () {
      threshold = hero ? hero.offsetHeight - 120 : 80;
      update();
    });
    update();
  }

  /* ----------------------------------------------------------------------
     3. Méga-menu éditorial — ouverture au survol et au clavier.
     ---------------------------------------------------------------------- */
  function initMega() {
    var items = document.querySelectorAll('.nav__item--has-mega');
    if (!items.length) return;

    items.forEach(function (item) {
      var link = item.querySelector('.nav__link');
      var timer;

      function open() {
        clearTimeout(timer);
        items.forEach(function (o) { if (o !== item) o.classList.remove('is-open'); });
        item.classList.add('is-open');
        if (link) link.setAttribute('aria-expanded', 'true');
      }
      function close(delay) {
        timer = setTimeout(function () {
          item.classList.remove('is-open');
          if (link) link.setAttribute('aria-expanded', 'false');
        }, delay || 0);
      }

      item.addEventListener('mouseenter', open);
      item.addEventListener('mouseleave', function () { close(120); });
      item.addEventListener('focusin', open);
      item.addEventListener('focusout', function (e) {
        if (!item.contains(e.relatedTarget)) close();
      });
      if (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          item.classList.contains('is-open') ? close() : open();
        });
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      items.forEach(function (item) {
        item.classList.remove('is-open');
        var l = item.querySelector('.nav__link');
        if (l) l.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------------------
     4. Menu mobile
     ---------------------------------------------------------------------- */
  function initDrawer() {
    var burger = document.querySelector('.burger');
    var drawer = document.querySelector('.drawer');
    if (!burger || !drawer) return;

    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      document.body.classList.toggle('is-locked', open);
      burger.setAttribute('aria-expanded', String(open));
    });

    drawer.addEventListener('click', function (e) {
      if (e.target.tagName !== 'A') return;
      document.body.classList.remove('menu-open', 'is-locked');
      burger.setAttribute('aria-expanded', 'false');
    });
  }

  /* ----------------------------------------------------------------------
     5. Spotlight — les produits se révèlent au fil du scroll.
        La section fait N × 100vh ; son contenu est collant (sticky).
        On déduit l'index actif de la progression dans la section.
        Sur mobile et en mouvement réduit, le CSS remet tout à plat.
     ---------------------------------------------------------------------- */
  function initSpotlight() {
    var sections = document.querySelectorAll('[data-spotlight]');
    if (!sections.length) return;

    var ticking = false;

    function render() {
      ticking = false;
      var isStacked = window.innerWidth <= 960 || reduced;

      sections.forEach(function (section) {
        var shots = section.querySelectorAll('.spotlight__shot');
        var items = section.querySelectorAll('.spotlight__item');
        var dots  = section.querySelectorAll('.spotlight__dot');
        var n = items.length;
        if (!n) return;

        if (isStacked) {
          items.forEach(function (el) { el.classList.add('is-active'); });
          return;
        }

        // La scène est collée sous le header : la progression court entre
        // le moment où elle se colle et celui où la section la relâche.
        var stage = section.querySelector('.spotlight__stage');
        var stuckAt = stage ? stage.getBoundingClientRect().height : window.innerHeight;
        var top = parseFloat(getComputedStyle(document.documentElement)
          .getPropertyValue('--header-h')) || 0;

        var rect = section.getBoundingClientRect();
        var scrollable = section.offsetHeight - stuckAt;
        var progress = scrollable > 0 ? (top - rect.top) / scrollable : 0;
        progress = Math.min(Math.max(progress, 0), 0.9999);

        var index = Math.floor(progress * n);
        if (index === section._idx) return;
        section._idx = index;

        [shots, items, dots].forEach(function (list) {
          list.forEach(function (el, i) { el.classList.toggle('is-active', i === index); });
        });
      });
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(render);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () {
      sections.forEach(function (s) { s._idx = null; });
      onScroll();
    });
    render();
  }

  /* ----------------------------------------------------------------------
     6. Révélation progressive des blocs
     ---------------------------------------------------------------------- */
  function initReveal() {
    var targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });

    targets.forEach(function (el) { io.observe(el); });
  }

  /* ----------------------------------------------------------------------
     7. Finder — « trouve ton maillot ».
        Répond au constat C6 : filtrer par morphologie et bonnet,
        pas par « maillots clairs ».
     ---------------------------------------------------------------------- */
  function initFinder() {
    var box = document.querySelector('[data-finder]');
    if (!box) return;

    var out = box.querySelector('[data-finder-out]');
    var cta = box.querySelector('[data-finder-cta]');
    var answers = {};

    box.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;

      var group = chip.closest('[data-group]');
      var key = group.dataset.group;

      group.querySelectorAll('.chip').forEach(function (c) {
        c.setAttribute('aria-pressed', String(c === chip));
      });
      answers[key] = chip.textContent.trim();
      update();
    });

    function update() {
      var keys = Object.keys(answers);
      if (!out) return;

      if (!keys.length) {
        out.innerHTML = 'Réponds aux deux questions pour voir ta sélection.';
        if (cta) cta.hidden = true;
        return;
      }
      if (keys.length < 2) {
        out.innerHTML = 'Encore une question et on te montre la sélection.';
        if (cta) cta.hidden = true;
        return;
      }

      var count = 6 + (answers.bonnet ? answers.bonnet.length : 0) % 7;
      out.innerHTML = '<b>' + count + ' maillots</b> correspondent à « ' +
        answers.maintien + ' » en bonnet ' + answers.bonnet + '.';
      if (cta) cta.hidden = false;
    }

    update();
  }

  /* ----------------------------------------------------------------------
     8. Nuanciers produit
     ---------------------------------------------------------------------- */
  function initSwatches() {
    document.querySelectorAll('[data-swatches]').forEach(function (group) {
      group.addEventListener('click', function (e) {
        var sw = e.target.closest('.swatch');
        if (!sw) return;
        group.querySelectorAll('.swatch').forEach(function (s) {
          s.setAttribute('aria-pressed', String(s === sw));
        });
      });
    });
  }

  /* ----------------------------------------------------------------------
     9. Ajout panier — simulation pour la démo
     ---------------------------------------------------------------------- */
  function initCart() {
    var counter = document.querySelector('.cart-count');
    if (!counter) return;

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-add]');
      if (!btn) return;
      e.preventDefault();
      counter.textContent = String(parseInt(counter.textContent, 10) + 1);
      var label = btn.textContent;
      btn.textContent = 'Ajouté ✓';
      setTimeout(function () { btn.textContent = label; }, 1400);
    });
  }

  /* ----------------------------------------------------------------------
     10. Mode présentation — affiche les annotations de soutenance.
         Se mémorise d'une page à l'autre du prototype.
     ---------------------------------------------------------------------- */
  function initNotes() {
    var toggle = document.querySelector('.notes-toggle');
    if (!toggle) return;

    var KEY = 'anja-notes';
    var on = false;
    try { on = sessionStorage.getItem(KEY) === '1'; } catch (err) { /* navigation privée */ }

    function apply() {
      document.body.classList.toggle('show-notes', on);
      toggle.setAttribute('aria-pressed', String(on));
    }

    toggle.addEventListener('click', function () {
      on = !on;
      try { sessionStorage.setItem(KEY, on ? '1' : '0'); } catch (err) { /* ignore */ }
      apply();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'n' && e.key !== 'N') return;
      if (/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) return;
      toggle.click();
    });

    apply();
  }

  /* ----------------------------------------------------------------------
     11. Newsletter — retour visuel
     ---------------------------------------------------------------------- */
  function initNewsletter() {
    var form = document.querySelector('.news__form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button');
      btn.textContent = 'Merci !';
      form.querySelector('input').value = '';
      setTimeout(function () { btn.textContent = "Je m'inscris"; }, 2200);
    });
  }

  /* ---------------------------------------------------------------------- */
  function boot() {
    initAnnounce();
    initHeader();
    initMega();
    initDrawer();
    initSpotlight();
    initReveal();
    initFinder();
    initSwatches();
    initCart();
    initNotes();
    initNewsletter();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', boot)
    : boot();
})();
