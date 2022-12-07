const NavigatorActive = {
  makeActive() {
    const navButton = document.querySelectorAll('.nav-link');
    for (let i = 0; i < navButton.length; i++) {
      navButton[i].addEventListener('click', () => {
        const current = document.getElementsByClassName('active');
        current[0].classList.remove('active');

        navButton[i].classList.add('active');
      });
    }

    const anchorTag = document.querySelectorAll('.navigation');
    for (let i = 0; i < anchorTag.length; i++) {
      anchorTag[i].addEventListener('click', () => {
        const current = document.getElementsByClassName('active');
        current[0].classList.remove('active');

        navButton[i].classList.add('active');
      });
    }
  },
};

export default NavigatorActive;
