const TentangSampah = {
  async render() {
    return `
    <section class="pt-5">

    <div class="row .mikir content justify-content-center mt-5 mx-4">
        <div class="first col-lg-7 col-md-6 mt-3 ">
            <h1 class="header-text-container fs-1">
                Kenali dan pilah sampah yuk!
            </h1> <br>
            <p class="pargph-text fs-5 py-1 ">Alasan pentingnya dalam menjaga kebersihan
                lingkungan yang
                pertama adalah untuk meningkatkan
                kesehatan manusia Kondisi lingkungan yang tidak baik berkaitan dengan lingkungan kesehatan,
                serta menimbulkan beberapa infeksi dan penyakit akibat kotornya suatu lingkungan</p>
        </div>
        <div class="second col-lg-5 col-md-6 mt-3 text-center ">
            <img src="./page2/container1.svg" class="img-fluid" alt="">
        </div>
    </div>
</section>

<!-- container 2 -->
<section class=" pt-5">
    <h1 class="header-text-container fs-1 text-center">
        Tahukah kamu?
    </h1>
    <div class="row content justify-content-center mx-4">
        <div class="col-lg-5 col-md-6 mt-3 text-center ">
            <img src="./page2/container2.svg" class="img-fluid" alt="">
        </div>
        <div class=" col-lg-7 col-md-6 mt-3 ">
            <p class="pargph-text fs-5 py-1 ">Setiap harinya, DKI Jakarta menghasilkan sampah sebanyak 7,2 ton.
                Secara umum, sampah organik mendominasi komposisi sampah di Jakarta sebesar 53,75%. Lalu, sampah
                kertas menjadi sampah anorganik yang memiliki kontribusi terbesar terhadap komposisi sampah
                keseluruhan dengan 14,02%.
            </p>
        </div>
    </div>
</section>

<!-- container 3 -->
<section class="pt-5">
    <div class="mikir row content justify-content-center mx-4">
        <div class="first col-lg-7 col-md-6 mt-3 ">
            <p class="pargph-text fs-5 py-5">Fakta menarik tentang sampah yaitu keberadaan sampah plastik yang
                ada dilaut. Jumlah sampah yang ada dilaut seluruh dunia diperkirakan 9 juta ton setiap tahunnya
                dan 80% merupakan sampah berbahan plastik. Senyawa kimia sebagai bahan utama plastik membuatnya
                tahan lama dari berbagai kekuatan alam.

            </p>
        </div>
        <div class="second col-lg-5 col-md-6 py-3 mt-3 text-center ">
            <img src="./page2/container3.svg" class="img-fluid" alt="">
        </div>
    </div>
</section>

<!-- container 4 -->
<section class="pt-5">
    <div class="row content justify-content-center mx-4">
        <div class="col-lg-5 col-md-6 mt-3 text-center "> 
            <img src="./page2/container4.svg" class="img-fluid py-1" alt="">
        </div>
        <div class="col-lg-7 col-md-6 mt-3 ">
            <p class="pargph-text fs-5 py-1">Fakta lainnya yang menarik tentang sampah adalah sampah dapat
                diolah menjadi listrik. Di negara negara maju seperti Denmark, Swiss, Amerika dan Prancis.
                Mereka telah memaksimalkan proses pengolahan sampah. Tidak hanya
                mengatasi bau busuk saja tapi sudah mengubah sampah – sampah ini menjadi energi listrik, dengan
                menggunakan metode <strong>3R (Reduce, Recycle , Reuse)
            </p>
        </div>
    </div>
</section>

<section id="jenis-sampah" class="py-5">
            <div class="row mx-4">
                <h1 class="header-text-container text-center fs-1">
                    Ada 3 jenis kategori sampah:
                </h1>
            </div>
            <br>
            <div class="row gx-5s justify-content-center mx-4">
                <div class="col-lg-4 my-4 row-content text-center ">
                    <div class="img-container">
                        <div class="hover-1 hover-2 text-white rounded"><img src="./page2/b3.svg" alt="">
                            <div class="hover-overlay-1"></div>
                            <div class="hover-2-content px-5 py-4">
                                <p class="hover-2-description text-uppercase mb-0">Sampah Beracun
                                    Contohnya: Baterai , produk kimia seperti parfum, pembersih lantai , dll </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 my-4 row-content text-center">
                    <div class="img-container">
                        <div class="hover-1 hover-2 text-white rounded"><img src="./page2/organik.svg" alt="">
                            <div class="hover-overlay-1"></div>
                            <div class="hover-2-content px-5 py-4">
                                <p class="hover-2-description text-uppercase mb-0">Sampah Organik
                                    Contohnya: Sisa makanan, kulit bawang, kulit pisang, dan sejenisnya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 my-4 row-content text-center">
                    <div class="img-container">
                        <div class="hover-1 hover-2 text-white rounded"><img src="./page2/anorganik.svg" alt="">
                            <div class="hover-overlay-1"></div>
                            <div class="hover-2-content px-5 py-4">
                                <p class="hover-2-description text-uppercase mb-0">Sampah Anorganik
                                    Contohnya: Plastik, botol kaca, botol plastik, dll</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {},
};

export default TentangSampah;
