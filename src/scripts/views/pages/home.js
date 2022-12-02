const Home = {
  async render() {
    return `
    <!-- container-1 -->
    <section class="section-one">
        <div class="row">
            <div class="col">
                <div class="section-one-left">
                    <img class="img" src="" alt="">
                </div>
            </div>
            <div class="col">
                <div class="section-one-right">
                    <h2 class="section-one-title">Bergabung dengan Kami #PeduliLingkungan</h2>
                    <button type="button" class="btn btn-primary btn-lg">Get Started</button>
                </div>
            </div>
        </div>
    </section>

    <!-- container 2 -->
    <section class="section-two">
        <div class="row">
            <div class="col">
                <div class="section-two-left">
                    <img src="../public/landing-page-picture/container-2 img.png"
                        alt="mengapa kita harus menjaga sampah">
                </div>

            </div>
            <div class="col">
                <div class="section-two-right">
                    <h2 class="section-two-title">MENGAPA KITA HARUS MENJAGA KEBERSIHAN?</h2>
                    <p class="section-two-text">Alasan pentingnya dalam menjaga kebersihan lingkungan yang pertama
                        adalah untuk meningkatkan kesehatan manusia. Kondisi lingkungan yang tidak baik
                        berkaitan dengan lingkungan kesehatan, serta menimbulkan beberapa infeksi dan penyakit
                        akibat
                        kotornya suatu lingkungan</p>
                </div>

            </div>
        </div>
    </section>

    <!-- container 3 -->
    <section class="section-three">
        <h2 class="section-three-title">PeduliLingkungan <br> Hadir Menciptakan Dampak</h2>

        <div class="row">
            <div class="col">
                <div class="grid-style">
                    <img src="../public/landing-page-picture/lingkungan-img.png" alt="lingkungan">
                    <div class="descript-text-one">
                        <h1 class="descript-text">lingkungan</h1>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="grid-style"><img src="../public/landing-page-picture/ekonomi-img.png" alt="sosial">
                    <div class="descript-text-one">
                        <h1 class="descript-text">Ekonomi</h1>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <div class="row">
            <div class="col">
                <div class="grid-style"><img src="../public/landing-page-picture/sosial-img.png" alt="ekonomi">
                    <div class="descript-text-one">
                        <h1 class="descript-text">Sosial</h1>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="grid-style"><img src="../public/landing-page-picture/keseharan-img.png" alt="kesehatan">
                    <div class="descript-text-one">
                        <h1 class="descript-text">kesehatan</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Container 4 -->
    <section class="last-section">
        <div class="row">
            <div class="col last-descript">
                <h1>HIDUP SEHAT DENGAN KEBERSIHAN</h1>
                <h3>Bantu jaga kebersihan lingkungan</h3>
                <p>Kini dengan PeduliLingkungan dapat membantu dan menjaga kebersihan lingkungan Mari kita mulai
                    dengan belajar tentang sampah</p>
                <button>Tentang Sampah</button>
            </div>
            <div class="col">
                <img class="image-last" src="../public/landing-page-picture/container-4 img.png"
                    alt="hidup sehat dengan kebersihan">
            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
