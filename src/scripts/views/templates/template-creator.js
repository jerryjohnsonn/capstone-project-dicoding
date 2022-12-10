const createBeritaTemplate = (berita) => `
  <section class=" pt-5">
  <div class="row content justify-content-center mx-4">
      <div class="col-lg-5 col-md-6 mt-3 text-center d-flex">
          <img src="./page2/container2.svg" class="img-fluid" alt="">
      </div>
      <div class="d-flex col-lg-7 col-md-6 mt-3 ">
          <a class="pargph-text fs-5" href="${berita.link}" target="_blank">${berita.content}</a>
      </div>
  </div>
  </section>
`;

export default createBeritaTemplate;