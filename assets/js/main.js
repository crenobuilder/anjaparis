/* ==========================================================================
   ANJA PARIS — Prototype structuré sur le modèle Polène
   Zéro dépendance.
   ========================================================================== */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     1. Bascule automatique placeholder → vraie photo.
        Chaque <img data-fallback> pointe vers un fichier attendu dans
        assets/images/. S'il n'existe pas encore, le dégradé reste visible.
        Le jour où le fichier est déposé au bon nom, il s'affiche seul,
        sans toucher au code. Voir assets/images/README.md.
     ---------------------------------------------------------------------- */
  function initImageFallback() {
    document.querySelectorAll('img[data-fallback]').forEach(function (img) {
      var wrap = img.closest('.ph');
      img.addEventListener('load', function () {
        img.classList.add('is-loaded');
        if (wrap) wrap.classList.add('has-real');
      });
      img.addEventListener('error', function () {
        img.remove(); // le fond en dégradé du .ph reste visible
      });
      // Si l'image est déjà en cache au chargement du script
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('is-loaded');
        if (wrap) wrap.classList.add('has-real');
      }
    });
  }

  /* ----------------------------------------------------------------------
     2. Barre d'annonce — rotation des messages
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
     3. Header — transparent sur le hero, opaque au scroll
     ---------------------------------------------------------------------- */
  function initHeader() {
    var header = document.querySelector('.header');
    if (!header) return;
    var hero = document.querySelector('.hero');
    var threshold = hero ? hero.offsetHeight - 110 : 80;

    function update() { header.classList.toggle('is-solid', window.scrollY > threshold); }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', function () {
      threshold = hero ? hero.offsetHeight - 110 : 80;
      update();
    });
    update();
  }

  /* ----------------------------------------------------------------------
     4. Mega-menu plein écran — ouverture au survol et au clavier
     ---------------------------------------------------------------------- */
  function initMega() {
    var items = document.querySelectorAll('.nav__item--has-mega');
    if (!items.length) return;

    items.forEach(function (item) {
      var link = item.querySelector('.nav__link');
      var timer;

      var mega = item.querySelector('.mega');
      function open() {
        clearTimeout(timer);
        items.forEach(function (o) { if (o !== item) o.classList.remove('is-open'); });
        item.classList.add('is-open');
        document.body.classList.add('is-locked');
        if (link) link.setAttribute('aria-expanded', 'true');
        if (mega) mega.setAttribute('aria-hidden', 'false');
      }
      function close(delay) {
        timer = setTimeout(function () {
          item.classList.remove('is-open');
          document.body.classList.remove('is-locked');
          if (link) link.setAttribute('aria-expanded', 'false');
          if (mega) mega.setAttribute('aria-hidden', 'true');
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
          // Toujours ouvrir, jamais fermer ici : à la souris, mouseenter a
          // déjà ouvert le panneau avant que le clic n'arrive, donc un
          // vrai toggle refermerait le menu au clic juste après l'avoir
          // ouvert au survol. Fermer reste possible via Échap, un clic
          // sur le fond du panneau, ou le fait de sortir la souris.
          open();
        });
      }
      item.querySelectorAll('.mega a').forEach(function (a) {
        a.addEventListener('click', function () { close(); });
      });

      // Le panneau occupe tout l'écran sous le header (comportement
      // voulu, façon Polène) : un clic sur son fond, hors lien, doit
      // le refermer — sinon rien sous le header n'est plus cliquable.
      if (mega) {
        mega.addEventListener('click', function (e) {
          if (e.target.closest('a')) return;
          close();
        });
        var closeBtn = mega.querySelector('.mega__close');
        if (closeBtn) {
          closeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            close();
          });
        }
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      items.forEach(function (item) {
        item.classList.remove('is-open');
        document.body.classList.remove('is-locked');
        var l = item.querySelector('.nav__link');
        if (l) l.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------------------
     5. Menu mobile
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
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ----------------------------------------------------------------------
     7. Carte produit flottante du hero — apparition différée
     ---------------------------------------------------------------------- */
  function initHeroTag() {
    var tag = document.querySelector('.hero__tag');
    if (!tag) return;
    if (reduced) { tag.classList.add('is-in'); return; }
    window.requestAnimationFrame(function () {
      setTimeout(function () { tag.classList.add('is-in'); }, 300);
    });
  }

  /* ----------------------------------------------------------------------
     8. Carrousel produits — drag horizontal + flèches, façon Polène
     ---------------------------------------------------------------------- */
  function initRails() {
    document.querySelectorAll('[data-rail]').forEach(function (wrap) {
      var rail = wrap.querySelector('.rail');
      var prev = wrap.querySelector('[data-rail-prev]');
      var next = wrap.querySelector('[data-rail-next]');
      if (!rail) return;

      // La capture de pointeur ne démarre qu'après un vrai glissement
      // (seuil dépassé) : un simple clic sur un bouton enfant (wishlist,
      // ajout rapide, lien produit) doit lui parvenir normalement.
      var isDown = false, startX = 0, startScroll = 0, moved = false, pointerId = null;
      var DRAG_THRESHOLD = 6;

      rail.addEventListener('pointerdown', function (e) {
        if (e.button !== undefined && e.button !== 0) return;
        isDown = true; moved = false; pointerId = e.pointerId;
        startX = e.clientX; startScroll = rail.scrollLeft;
      });
      rail.addEventListener('pointermove', function (e) {
        if (!isDown) return;
        var dx = e.clientX - startX;
        if (!moved && Math.abs(dx) > DRAG_THRESHOLD) {
          moved = true;
          rail.classList.add('is-dragging');
          try { rail.setPointerCapture(pointerId); } catch (err) { /* ignore */ }
        }
        if (moved) rail.scrollLeft = startScroll - dx;
      });
      function release(e) {
        isDown = false;
        rail.classList.remove('is-dragging');
        if (moved && pointerId != null) {
          try { rail.releasePointerCapture(pointerId); } catch (err) { /* ignore */ }
        }
      }
      rail.addEventListener('pointerup', release);
      rail.addEventListener('pointercancel', release);
      rail.addEventListener('pointerleave', function (e) { if (isDown && !moved) release(e); });
      rail.addEventListener('click', function (e) {
        if (moved) { e.preventDefault(); e.stopPropagation(); }
      }, true);

      function step() {
        var card = rail.querySelector('.card');
        return card ? card.getBoundingClientRect().width + 24 : 300;
      }
      function updateNav() {
        if (!prev || !next) return;
        prev.disabled = rail.scrollLeft <= 4;
        next.disabled = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 4;
      }
      if (prev) prev.addEventListener('click', function () {
        rail.scrollBy({ left: -step(), behavior: reduced ? 'auto' : 'smooth' });
      });
      if (next) next.addEventListener('click', function () {
        rail.scrollBy({ left: step(), behavior: reduced ? 'auto' : 'smooth' });
      });
      rail.addEventListener('scroll', updateNav, { passive: true });
      updateNav();
    });
  }

  /* ----------------------------------------------------------------------
     9. Ajout panier / liste d'envies — simulation pour la démo
     ---------------------------------------------------------------------- */
  function initCart() {
    var cartCount = document.querySelector('.cart-count');
    var wishCount = document.querySelector('.wish-count');

    document.addEventListener('click', function (e) {
      var add = e.target.closest('[data-add]');
      if (add) {
        e.preventDefault();
        if (cartCount) cartCount.textContent = String(parseInt(cartCount.textContent, 10) + 1);
        var label = add.textContent;
        add.textContent = 'Ajouté';
        setTimeout(function () { add.textContent = label; }, 1300);
        return;
      }
      var wish = e.target.closest('.card__wish');
      if (wish) {
        e.preventDefault();
        var active = wish.classList.toggle('is-active');
        if (wishCount) wishCount.textContent = String(Math.max(0, parseInt(wishCount.textContent, 10) + (active ? 1 : -1)));
      }
    });
  }

  /* ----------------------------------------------------------------------
     10. Mode présentation
     ---------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------
     11. Newsletter — retour visuel
     ---------------------------------------------------------------------- */
  function initNewsletter() {
    var form = document.querySelector('.news__form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button');
      var label = btn.textContent;
      btn.textContent = 'Merci !';
      form.querySelector('input').value = '';
      setTimeout(function () { btn.textContent = label; }, 2200);
    });
  }

  /* ----------------------------------------------------------------------
     12. Toast « démo » — liquid glass.
         Ce prototype tient sur deux pages ; tout ce qui devrait mener
         vers une page qui n'existe pas (catégories, footer, réseaux,
         recherche…) affiche ce toast au lieu de ne rien faire ou de
         casser. Les liens qui ont déjà un vrai comportement (mega-menu,
         ajout panier, ancres internes, lien vers l'autre page) sont
         explicitement exclus et continuent de fonctionner normalement.
     ---------------------------------------------------------------------- */
  function initDemoToast() {
    var toast = document.getElementById('demoToast');
    if (!toast) return;
    var closeBtn = toast.querySelector('.demo-toast__close');
    var hideTimer;

    function show() {
      clearTimeout(hideTimer);
      toast.classList.add('is-visible');
      hideTimer = setTimeout(hide, 3200);
    }
    function hide() {
      clearTimeout(hideTimer);
      toast.classList.remove('is-visible');
    }

    document.addEventListener('click', function (e) {
      var explicit = e.target.closest('[data-demo-trigger]');
      var deadLink = e.target.closest('a[href="#"]');
      if (deadLink && (deadLink.hasAttribute('data-add') || deadLink.hasAttribute('aria-expanded'))) {
        deadLink = null; // mega-menu trigger ou ajout panier : comportement déjà réel
      }
      var target = explicit || deadLink;
      if (!target) return;
      if (deadLink) e.preventDefault();
      show();
    });

    closeBtn.addEventListener('click', hide);
  }

  /* ---------------------------------------------------------------------- */
  function boot() {
    initImageFallback();
    initAnnounce();
    initHeader();
    initMega();
    initDrawer();
    initReveal();
    initHeroTag();
    initRails();
    initCart();
    initNewsletter();
    initDemoToast();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', boot)
    : boot();
})();
