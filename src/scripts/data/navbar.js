class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<!-- Awal dari header -->
    <header>
      <!-- Awal dari navigator -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="navbar-brand">
            <img src="../public/company-logo.png" class="img-fluid company-image" alt="company-logo" />
            <span>Peduli Lingkungan</span>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Beranda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Tentang Sampah</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Jenis Sampah</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Kami</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- Akhir dari navigator -->
    </header>
    <!-- Akhir dari header -->`;
  }
}

customElements.define('nav-bar', Navbar);
