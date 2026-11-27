(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal elements as they scroll into view
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Count-up numbers
  var counters = document.querySelectorAll('.count');
  function countUp(el) {
    var to = parseInt(el.getAttribute('data-to'), 10) || 0;
    if (reduce || to <= 1) { el.textContent = to; return; }
    var start = null, dur = 1200;
    function step(t) {
      if (!start) start = t;
      var k = Math.min((t - start) / dur, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    }
    el.textContent = 0;
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { countUp(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { co.observe(c); });
  }

  // Nav, progress bar, back-to-top
  var nav = document.querySelector('.topnav');
  var toTop = document.querySelector('.to-top');
  var bar = document.querySelector('.progress span');
  var hero = document.querySelector('.hero');
  function onScroll() {
    var y = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.setProperty('--p', h > 0 ? y / h : 0);
    var past = y > (hero ? hero.offsetHeight - 80 : 300);
    if (nav) nav.classList.toggle('show', past);
    if (toTop) toTop.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Highlight the current section in the nav
  var links = {};
  document.querySelectorAll('.topnav ul a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove('active'); });
          var a = links[e.target.id];
          if (a) {
            a.classList.add('active');
            if (a.scrollIntoView && nav && nav.classList.contains('show')) {
              a.parentNode.parentNode.scrollTo({ left: a.offsetLeft - 20, behavior: reduce ? 'auto' : 'smooth' });
            }
          }
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { so.observe(s); });
  }

  // Ripple on buttons
  if (!reduce) {
    document.querySelectorAll('.btn').forEach(function (b) {
      b.addEventListener('pointerdown', function (ev) {
        var r = b.getBoundingClientRect(), d = Math.max(r.width, r.height);
        var s = document.createElement('span');
        s.className = 'ripple';
        s.style.width = s.style.height = d + 'px';
        s.style.left = (ev.clientX - r.left - d / 2) + 'px';
        s.style.top = (ev.clientY - r.top - d / 2) + 'px';
        b.appendChild(s);
        setTimeout(function () { s.remove(); }, 650);
      });
    });
  }
})();
