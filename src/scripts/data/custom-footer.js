class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<footer class="footer">
    <div class="footer-set shadow-sm">
        <div class="row footer-top">
            <div class="col">
                <a class="footer-brand" href="#">
                    <div class="logo">
                        <img src="../public/landing-page-picture/green-city 1.png" alt="Logo">
                    </div>
                    <div class="title">
                        <h1>PeduliLingkungan</h1>
                        <p>Lingkungan Sehat Dan Bersih</p>
                    </div>
                </a>
            </div>
            <div class="col navigation-set">
                <div class="navigation">
                    <h1 class="row">Navigasi</h1>
                    <h3 class="row"><a href="#">Home</a></h3>
                    <h3 class="row"><a href="#">Tentang Sampah</a></h3>
                    <h3 class="row"><a href="#">About</a></h3>
                </div>
            </div>
            <div class="col">
                <div class="contact">
                    <h1 class="row">Kontak</h1>
                    <h3 class="row"><a href="#">Jerry</a></h3>
                    <h3 class="row"><a href="#">Fariz</a></h3>
                    <h3 class="row"><a href="#">Afiq</a></h3>
                    <h3 class="row"><a href="#">Fajar</a></h3>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>Copyright &copy; 2022 - PeduliLingkungan. All Rights Reserved</p>
    </div>
</footer>
`;
  }
}
customElements.define('custom-footer', CustomFooter);
