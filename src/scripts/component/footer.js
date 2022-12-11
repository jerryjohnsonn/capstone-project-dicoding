class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="first-footer">
    <div class="footer-header">
      <div>
        <h1>PeduliLingkungan</h1>
        <p>Lingkungan bersih dan sehat</p>
      </div>
    </div>
    <div class="footer-navigation">
      <h1>Navigasi</h1>
      <div class="navigation-list">
        <ul>
          <li>
            <a class="navigation" href="#">Home</a>
          </li>
          <li>
            <a class="navigation" href="#/tentang-sampah">Tentang Sampah</a>
          </li>
          <li>
            <a class="navigation" href="#/kami">Kami</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-contact">
      <h1>Kontak</h1>
      <div class="contact-list">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/jerry-johnson-b77250208/" target="_blank">Jerry</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/m-fariz-naufal-r-813144213" target="_blank">Fariz</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/muhammad-afiq-2a097314b/" target="_blank">Afiq</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/fajar-febriansyah-159349241/" target="_blank">Fajar</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-address">
      <h1>Alamat</h1>
      <p>Jl. Rawa Simprug, Kebayoran Lama Jakarta Selatan. 12220</p>
    </div>
  </div>
  <hr />
  <div class="copyright">
    <p>Copyright © 2022 - PeduliLingkungan. All Rights Reserved.</p>
  </div>
    `;
  }
}

customElements.define('custom-footer', Footer);
