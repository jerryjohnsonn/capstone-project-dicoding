import 'regenerator-runtime';
// eslint-disable-next-line import/extensions
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/root.css';
import '../styles/responsive.css';
import '../styles/navbar.css';
import '../styles/landing-page-main.css';
import '../styles/tentang-sampah-main.css';
import '../styles/about-us-main.css';
import '../styles/footer.css';

// component
import './component/navbar';
import './component/footer';

// import '../styles/responsive.css';
import App from './views/app';
import NavigatorActive from './utils/navigator-active';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  NavigatorActive.makeActive();
  app.renderPage();
  swRegister();
});
