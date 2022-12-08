import 'regenerator-runtime';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/navbar.css';
import '../styles/tentang-sampah-main.css';
import '../styles/about-us-main.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import App from './views/app';
import NavigatorActive from './utils/navigator-active';

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  NavigatorActive.makeActive();
  app.renderPage();
});