// Digitálny Kabinet — jednoduché interakcie stránky
// Netreba nič meniť, pokiaľ nepridávaš novú funkcionalitu.

document.addEventListener('DOMContentLoaded', function () {

  // Rok v pätičke
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobilné menu (hamburger)
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Zatvor menu po kliknutí na odkaz (na mobile)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Jemné objavenie sa prvkov pri scrollovaní
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

});
