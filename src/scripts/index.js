import 'regenerator-runtime';
import App from './views/App';

import '../styles/landing-page/landing-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import './component/navbar';
import './component/custom-footer';

const app = new App({
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
