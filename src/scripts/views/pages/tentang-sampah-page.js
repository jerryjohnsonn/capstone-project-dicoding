import BeritaSource from '../../data/berita-source';
import createBeritaTemplate from '../templates/template-creator';

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
        <div class="second d-flex col-lg-5 col-md-6 mt-3 text-center ">
            <img src="./page2/container1.svg" class="img-fluid" alt="">
        </div>
    </div>
</section>

<section id="jenis-sampah" class="py-5">
    <div class="container-tiga">
        <div class="row row-satu">
        <div class="d-flex col-lg-12 justify-content-center">
            <h3>Ada 3 jenis kategori sampah</h3>
        </div>
        </div>
        <div class="row row-kedua">
        <div class="col-lg-4">
            <div class="d-flex card-hijau card-danger mx-auto mt-4 container-fluid">
            <img src="./page2/danger.png" alt="danger-logo" />
            <span>B3</span>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="d-flex card-hijau card-organic mx-auto mt-4 container-fluid">
            <img src="./page2/organic.png" alt="organic-logo" />
            <span>Organik</span>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="d-flex card-hijau card-anorganic mx-auto mt-4 container-fluid">
            <img src="./page2/plastik.png" alt="kantongan-plastik" />
            <span>Anorganik</span>
            </div>
        </div>
        </div>
    </div>
</section>;

<!-- container 2 -->
<h1 class="header-text-container fs-1 text-center">Tahukah kamu?</h1>
<section id="berita"></section>

`;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const listBerita = await BeritaSource.beritaSampah();
    const beritaContainer = document.getElementById('berita');
    listBerita.forEach((berita) => {
      beritaContainer.innerHTML += createBeritaTemplate(berita);
    });
  },
};

export default TentangSampah;
