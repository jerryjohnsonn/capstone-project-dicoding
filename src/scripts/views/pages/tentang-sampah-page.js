const TentangSampah = {
  async render() {
    return `
      <div class="container-all">
        <!-- Awal dari container-1 -->
        <h3>Kenali dan pilah sampah yuk!</h3>
        <div class="container-satu">
          <div class="row">
            <div class="col-lg-6">
              <p>Sebelumnya apakah kalian semua sudah paham mengenai jenis-jenis sampah? Jika belum, sebenarnya penting sekali untuk <strong>mengelompokkan sampah berdasarkan jenisnya</strong></p>
            </div>
            <div class="col-lg-6 image-1-container justify-content-end">
              <img src="../public/picture-tong-sampah.jpg" alt="picture-tong-sampah" class="image-tong-sampah mx-auto my-auto" />
            </div>
          </div>
        </div>

        <!-- Akhir dari container-1 -->

        <!-- Awal dari container-2 -->

        <div class="container-dua">
          <div class="row row-judul">
            <div class="d-flex col-lg-12 justify-content-center">
              <h3>Tahukah Kamu?</h3>
            </div>
          </div>

          <div class="row row-satu">
            <div class="d-flex col-lg-6">
              <img src="../public/picture-1.jpg" class="image-1 mx-auto" alt="did-you-know?" />
            </div>
            <div class="d-flex col-lg-6">
              <p>
                Setiap harinya, DKI Jakarta <strong>menghasilkan sampah sebanyak 7,2 ton</strong>. Secara umum, sampah organik mendominasi komposisi sampah di Jakarta sebesar 53,75%. Lalu, sampah kertas menjadi sampah anorganik yang
                memiliki kontribusi terbesar terhadap komposisi sampah keseluruhan dengan 14,02%.
              </p>
            </div>
          </div>
          <div class="row row-dua">
            <div class="d-flex col-lg-6">
              <p>
                Fakta menarik tentang sampah yaitu keberadaan sampah plastik yang ada dilaut. <strong>Jumlah sampah yang ada dilaut seluruh dunia diperkirakan 9 juta ton</strong> setiap tahunnya dan 80% merupakan sampah berbahan plastik.
                Senyawa kimia sebagai bahan utama plastik membuatnya tahan lama dari berbagai kekuatan alam.
              </p>
            </div>
            <div class="d-flex col-lg-6">
              <img src="../public/picture-2.png" class="image-2 mx-auto" alt="gambar-sampah-perahu" />
            </div>
          </div>
          <div class="row row-ketiga">
            <div class="d-flex col-lg-6">
              <img src="../public/picture-3.jpg" class="image-3 mx-auto" alt="gambar-lampu-hidup" />
            </div>
            <div class="d-flex col-lg-6">
              <p>
                Fakta lainnya yang menarik tentang sampah adalah sampah dapat diolah menjadi listrik. Di negara negara maju seperti Denmark, Swiss, Amerika dan Prancis. Mereka telah memaksimalkan proses pengolahan sampah. Tidak hanya
                mengatasi bau busuk saja tapi sudah mengubah sampah – sampah ini menjadi energi listrik, dengan menggunakan metode <strong>3R (Reduce, Recycle , Reuse)</strong>
              </p>
            </div>
          </div>
        </div>

        <!-- Akhir dari container-2 -->

        <!-- Awal dari container-3 -->

        <div class="container-tiga">
          <div class="row row-satu">
            <div class="d-flex col-lg-12 justify-content-center">
              <h3>Ada 3 jenis kategori sampah</h3>
            </div>
          </div>
          <div class="row row-kedua">
            <div class="col-lg-4">
              <div class="d-flex card-hijau card-danger mx-auto mt-4 container-fluid">
                <img src="../public/danger.png" alt="danger-logo" />
                <span>B3</span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="d-flex card-hijau card-organic mx-auto mt-4 container-fluid">
                <img src="../public/organic.png" alt="organic-logo" />
                <span>Organik</span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="d-flex card-hijau card-anorganic mx-auto mt-4 container-fluid">
                <img src="../public/plastik.png" alt="kantongan-plastik" />
                <span>Anorganik</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Akhir dari container-3 -->
      </div>
    `;
  },
};

export default TentangSampah;