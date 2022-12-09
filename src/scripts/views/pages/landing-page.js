const LandingPage = {
  async render() {
    return `
    <section class="first-content  mt-5 pt-5">
    <div class="row justify-content-center mx-4">
        <div class="col-lg-5 col-md-6 text-center ">
            <img src="./page1/container1.svg" class="img-thumbnail" alt=""">
        </div>
        <div class=" col-lg-7 col-md-6 ">
            <h1 class=" first-text fs-1 text-center">
            <span class="text">Bergabung Dengan Kami</span><br> #PeduliLingkungan
            </h1>
            <p class="text-content  fs-5 py-5">Barang dapat dikirim langsung ke gudang kami pada jam kerja
                atau
                barang
                juga dapat kami jemput di lokasi Anda dengan melakukan kontak terlebih dahulu. Untuk dokumen
                yang bersifat
                rahasia seperti arsip kantor, dapat dikirim langsung ke pabrik daur ulang untuk
                dimusnahkan/dilebur secara kimia dan dikawal oleh pihak perusahaan dengan minimum jumlah
                tertentu.
            </p>
            <div class="text-center">
                <a href="https://api.whatsapp.com/send?phone=6281381152120&text=Halo%20Admin,%20saya%20ingin%20mengantarkan%20sampah%20saya,%20gimana%20caranya?🗑"
                    type="button" class="btn mb-4 btn-primary btn-lg btn">Hubungi
                    Kami</a>
            </div>
            <p class="text-center text-end ">PEDULI LINGKUNGAN BEROPERASI SETIAP SENIN – SABTU
                JAM
                08.00-17.00 WIB
            </p>
        </div>
    </div>
</section>

<!-- container-2 -->
<section class="py-5 section-two ">
    <div class="section-content py-5">
        <div class="row content justify-content-center mt-5 mx-4">
            <div class="col-lg-5 col-md-6 mt-5 text-center">
                <img src="./page1/container2.svg" class="img-fluid" alt="">
            </div>
            <div class=" col-lg-7 col-md-6 mt-5">
                <h1 class="first-text text-light fs-1 text-center">
                    MENGAPA KITA HARUS MENJAGA <br> KEBERSIHAN?
                </h1> <br>
                <p class="text-content text-light fs-5 py-5">Alasan pentingnya dalam menjaga kebersihan
                    lingkungan yang
                    pertama adalah untuk meningkatkan
                    kesehatan manusia Kondisi lingkungan yang tidak baik berkaitan dengan lingkungan kesehatan,
                    serta menimbulkan beberapa infeksi dan penyakit akibat kotornya suatu lingkungan</p>
            </div>
        </div>
    </div>

</section>

<!-- container 3 -->
<section>
    <div class="row mx-4">
        <h1 class="first-text fs-1" style="color: #379237;">
            PeduliLingkungan <br>
            Hadir Menciptakan Dampak
        </h1>
    </div>
    <br>
    <div class="row gx-5s justify-content-center mx-4">
        <div class="col-xxl-3 col-lg-5 my-4 view  row-content text-center">
            <div class="img-container">
                <div class="hover hover-3 text-white rounded"><img src="./page1/lingkungan-img.svg" alt="">
                    <div class="hover-overlay"></div>
                    <div class="hover-3-content px-5 py-4">
                        <p class="hover-3-description fs-1 text-uppercase font-weight-light mb-0">lingkungan</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-lg-5 my-4 row-content text-center ">
            <div class="img-container">
                <div class="hover hover-3 text-white rounded"><img src="./page1/ekonomi-img.svg" alt="">
                    <div class="hover-overlay"></div>
                    <div class="hover-3-content px-5 py-4">
                        <p class="hover-3-description fs-1 text-uppercase font-weight-light mb-0">ekonomi</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-lg-5 my-4 row-content text-center">
            <div class="img-container">
                <div class="hover hover-3 text-white rounded"><img src="./page1/sosial-img.svg" alt="">
                    <div class="hover-overlay"></div>
                    <div class="hover-3-content px-5 py-4">
                        <p class="hover-3-description fs-1 text-uppercase font-weight-light mb-0">sosial</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-lg-5 my-4 row-content text-center">
            <div class="img-container">
                <div class="hover hover-3 text-white rounded"><img src="./page1/kesehatan-img.svg" alt="">
                    <div class="hover-overlay"></div>
                    <div class="hover-3-content px-5 py-4">
                        <p class="hover-3-description fs-1 text-uppercase font-weight-light mb-0">kesehatan</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- container 4 -->
<section class="py-5">
    <div class="row content justify-content-center mt-5 mx-4">
        <div class=" col-lg-7 col-md-6 mt-5 ">
            <h1 class="first-text fs-1" style="color:#379237">
                HIDUP SEHAT DENGAN KEBERSIHAN <br> <span class="fs-2" style="color:black">Bantu jaga kebersihan
                    lingkungan</span>
            </h1> <br>
            <p class="text-content fs-4 py-5">Kini dengan PeduliLingkungan dapat
                membantu dan menjaga kebersihan lingkungan
                Mari kita mulai dengan belajar tentang sampah</p>
            <div class="text-center">
                <a href="#/tentang-sampah" type="button" class="btn mb-4 btn-primary btn-lg btn">Tentang
                    Sampah</a>
            </div>
        </div>
        <div class="col-lg-5 col-md-6 mt-5 ">
            <img src="./page1/container4.svg" class="img-fluid" alt="">
        </div>

    </div>
</section>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {},
};

export default LandingPage;
