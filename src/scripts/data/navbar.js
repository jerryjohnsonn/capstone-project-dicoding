class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg fixed-top visible px-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/images/page-1/logo.svg" alt="Logo" width="50" height="50" class=" ">
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
                </div>`;
  }
}

customElements.define('nav-bar', Navbar);
