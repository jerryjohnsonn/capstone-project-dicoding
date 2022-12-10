const About = {
  async render() {
    return `
    <section class="mt-5 pt-2">
    <div class="row content justify-content-center mt-5 mx-4">
        <div class="col-lg-5 col-md-6 mt-5 text-center">
            <img src="./page3/container1.svg" class="img-fluid" alt="" width="320" height="320">
        </div>
        <div class="col-lg-7 col-md-6 mt-5">
            <h1 class="header-text-container fs-3 text-center">
                Tentang PeduliLingkungan
            </h1> <br>
            <p class="pargph-text fs-6 py-4 ">Peduli Lingkungan adalah sebuah website yang dibangun untuk
                memecahkan permasalahan sampah yang berserakan yang ada disekitar lingkungan kita. Peduli
                Lingkungan diharapkan dapat membantu menurunkan jumlah sampah dan juga menjadi solusi bagi
                pengguna yang tidak tau bagaimana dia harus mengolah sampah yang dia miliki.</p>
        </div>
    </div>
</section>

<!-- container 2 -->
<section class="py-5">
    <div class="row content justify-content-center mx-4">
        <h1 class="header-text-container fs-1 text-center">
            Tim Kami
        </h1> <br>
        <p class="pargph-text fs-6 py-5 text-center">Kami adalah sekelompok mahasiswa -
            mahasiswi
            Indonesia yang berfokus
            dalam dunia software developer khususnya dalam bidang Front-End dan Back End. Tujuan kami adalah
            untuk mambantu menurutkan jumlah sampah yang ada dilingkungan kita. Harapan utama dibuatnya Peduli
            Lingkungan adalah agar masyarakat tau bahwa tidak semua sampah yang ada dirumah nya itu tidak
            berguna, ada beberapa jenis sampah yang masih dapat di daur ulang dan hal itu dapat membantu
            penurutan jumlah sampah yang ada.</p>
    </div>
    <div class="row content justify-content-around mt-5 mx-4">
        <div class="col-md-4 d-flex justify-content-center my-4 ">
            <div class="card" style="width: 18rem;">
                <div class="card-header  text-center py-5">
                    <img src="./page3/afiq.svg" alt="" class="img-fluid img">
                    <div class="descript-card">
                        <h1 class="name text-center pt-3 pb-1">
                            Afiq
                        </h1>
                        <p class="tugas text-center pt-1 fs-5">Project Manajer</p><br>
                    </div>
                    <div class="d-grid">
                        <a href="https://www.linkedin.com/in/muhammad-afiq-2a097314b/" class="btn btn-primary fs-5" role="button">Connect</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center my-4 ">
            <div class="card" style="width: 18rem;">
                <div class="card-header text-center py-5">
                    <img src="./page3/jery.svg" alt="" class="img-fluid img">
                    <div class="descript-card">
                        <h1 class="name text-center pt-3 pb-1">
                            Jerry
                        </h1>
                        <p class="tugas text-center fs-5">Frontend Developer | UI/UX Designer</p>
                    </div>
                    <div class="d-grid">
                        <a href="https://www.linkedin.com/in/jerry-johnson-b77250208/" class="btn btn-primary fs-5" role="button">Connect</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row content justify-content-around mx-4">
        <div class="col-md-4 d-flex justify-content-center my-4 ">
            <div class="card" style="width: 18rem;">
                <div class="card-header text-center py-5">
                    <img src="./page3/fajar.svg" alt="" class="img-fluid img">
                    <div class="descript-card">
                        <h1 class="name text-center pt-3 pb-1">
                            Fajar
                        </h1>
                        <p class="tugas text-center fs-5">Frontend Developer | UI/UX Designer</p>
                    </div>
                    <div class="d-grid">
                        
                        <a href="https://www.linkedin.com/in/fajar-febriansyah-159349241/" class="btn btn-primary fs-5" role="button">
                            Connect
                        </a>
                       
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center my-4 ">
            <div class="card" style="width: 18rem;">
                <div class="card-header text-center py-5">
                    <img src="./page3/fariz.svg" alt="" class="img-fluid img">
                    <div class="descript-card">
                        <h1 class="name text-center pt-3 pb-1">
                            Fariz
                        </h1>
                        <p class="tugas text-center fs-5">Backend Developer | UI/UX Designer</p>
                    </div>
                    <div class="d-grid">
                        <a href="https://www.linkedin.com/in/m-fariz-naufal-r-813144213" class="btn btn-primary fs-5" role="button">
                            Connect
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
      `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {},
};

export default About;
