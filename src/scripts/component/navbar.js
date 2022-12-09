class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<!-- Awal dari header -->
    <nav class="navbar navbar-expand-lg fixed-top visible px-3">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="./page1/logo.svg" alt="Logo" width="50" height="50" class=" ">
            <span class="brand-text fs-3">PeduliLingkungan</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link py-3 fs-6" aria-current="page" href="#/">Beranda</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link py-3 fs-6" href="#/tentang-sampah">Tentang Sampah</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link py-3 fs-6" href="#/jenis-sampah">Jenis Sampah</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link py-3 fs-6" href="#/kami">Kami</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- off canvas -->
<div class="offcanvas offcanvas-end pt-3 bg-lig" tabindex="-1" id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel">

    <div class="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <h5 class="offcanvas-title px-5" id="offcanvasExampleLabel">
            <span class="brand-text mx-5 fs-3">PeduliLingkungan</span>
        </h5>

    </div>
    <div class="offcanvas-body mt-4">
        <div class="row justify-content-center">
            <a id="active" class="text-center offcanvas-item py-3 fs-5" aria-current="page"
                href="#/">Beranda</a>
        </div>
        <div class="row justify-content-center">
            <a id="active" class="text-center offcanvas-item mt-3 py-3 fs-5" href="#/tentang-sampah">Tentang
                Sampah</a>
        </div>
        <div class="row justify-content-center">
            <a id="active" class="text-center offcanvas-item mt-3 py-3 fs-5" href="#/jenis-sampah">Jenis
                Sampah</a>
        </div>
        <div class="row justify-content-center">
            <a id="active" class="text-center offcanvas-item mt-3 py-3 fs-5" href="#/kami">Kami</a>
        </div>

    </div>
</div>`;
  }
}

customElements.define('nav-bar', Navbar);
