const About = {
  async render() {
    return `
    <!-- Awal dari main -->
    <main id="main-content">
      <div class="about-pedulilingkungan">
        <div class="d-flex pedulilingkungan-logo">
          <img src="../public/company-logo.svg" alt="company-logo" />
        </div>
        <div class="pedulilingkungan-description">
          <h1>Tentang Peduli Lingkungan</h1>
          <p>
            Peduli Lingkungan adalah sebuah website yang dibangun untuk memecahkan permasalahan sampah yang berserakan yang ada disekitar lingkungan kita. Peduli Lingkungan diharapkan dapat membantu menurunkan jumlah sampah dan juga menjadi
            solusi bagi pengguna yang tidak tau bagaimana dia harus mengolah sampah yang dia miliki.
          </p>
        </div>
      </div>
      <div class="about-team">
        <div class="team-description">
          <h1>Team Kami</h1>
          <p>
            Kami adalah sekelompok mahasiswa - mahasiswi Indonesia yang berfokus dalam dunia software developer khususnya dalam bidang Front-End dan Back End. Tujuan kami adalah untuk mambantu menurunkan jumlah sampah yang ada dilingkungan
            kita. Harapan utama dibuatnya Peduli Lingkungan adalah agar masyarakat tau bahwa tidak semua sampah yang ada dirumah nya itu tidak berguna, ada beberapa jenis sampah yang masih dapat di daur ulang dan hal itu dapat membantu
            penurunan jumlah sampah yang ada.
          </p>
        </div>
        <div class="team-profile">
          <div class="card" style="width: 18rem">
            <img src="../public/jerry.jpeg" class="card-img-top" alt="Jerry" />
            <div class="card-body">
              <h5 class="card-title">Jerry Johnson</h5>
              <p class="card-text">Frontend Developer | UI/UX Designer</p>
              <a href="https://www.linkedin.com/in/jerry-johnson-b77250208/" target="_blank" class="btn btn-primary">Connect</a>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <img src="../public/afiq.jpeg" class="card-img-top" alt="Afiq" />
            <div class="card-body">
              <h5 class="card-title">Muhammad Afiq</h5>
              <p class="card-text">Project Manager</p>
              <a href="https://www.linkedin.com/in/muhammad-afiq-2a097314b/" target="_blank" class="btn btn-primary">Connect</a>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <img src="../public/fajar.jpg" class="card-img-top" alt="Fajar" />
            <div class="card-body">
              <h5 class="card-title">Muhammad Fajar Febriansyah</h5>
              <p class="card-text">Frontend Developer | UI/UX Designer</p>
              <a href="https://www.linkedin.com/in/fajar-febriansyah-159349241/" target="_blank" class="btn btn-primary">Connect</a>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <img src="../public/fariz.JPG" class="card-img-top" alt="Fariz" />
            <div class="card-body">
              <h5 class="card-title">Muhammad Fariz Naufal Ramadhan</h5>
              <p class="card-text">Backend Developer</p>
              <a href="https://www.linkedin.com/in/m-fariz-naufal-r-813144213" target="_blank" class="btn btn-primary">Connect</a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- Akhir dari main -->
    `;
  },
};

export default About;
