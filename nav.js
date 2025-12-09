
// Inject header and footer into pages to keep files DRY
document.addEventListener('DOMContentLoaded', function(){
  var header = `
  <header class="site-header">
    <div class="container header-inner">
      <div class="brand">
        <a href="/"><img src="logo.png" alt="Logo" class="logo"></a>
        <div class="brand-text">
          <h1>Faber Authorized Service Center</h1>
          <p class="sub">Attingal · Certified Faber Service</p>
        </div>
      </div>
      <nav class="nav-actions">
        <a class="nav-link" href="/contact.html">Contact</a>
        <a class="nav-link" href="/services.html">Services</a>
        <a class="nav-link btn" href="/booking.html">Book</a>
      </nav>
    </div>
  </header>`;

  var footer = `
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© 2025 Faber Authorized Service Center — Attingal</div>
      <div><a href="/booking.html" class="btn btn-small">Book Service</a></div>
    </div>
  </footer>`;

  var headerTargets = document.querySelectorAll('[data-inject="header"]');
  headerTargets.forEach(function(t){ t.innerHTML = header; });
  var footerTargets = document.querySelectorAll('[data-inject="footer"]');
  footerTargets.forEach(function(t){ t.innerHTML = footer; });
});
