//Стандартный бургер
import { disableScroll } from '../functions/disable-scroll.js';
import { enableScroll } from '../functions/enable-scroll.js';

(function () {
  const progressLine = document.querySelector('.progress-container')
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const logo = document.querySelector('.logo');

  let keys = {
    ESC: 27,
  }
  //ДОСТУПНОСТЬ МЕНЮ ============================
  function hideMenu(e){
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    menu?.classList.toggle('menu--active');
    burger?.classList.toggle('burger--active');
    logo?.classList.toggle('logo--active');
    progressLine?.classList.toggle('progress-hede');
    enableScroll();
    burger.focus();
  }
  function showMenu() {
    burger?.setAttribute('aria-expanded', 'true');
    burger?.setAttribute('aria-label', 'Закрыть меню');
    menu?.classList.toggle('menu--active');
    burger?.classList.toggle('burger--active');
    logo?.classList.toggle('logo--active');
    progressLine?.classList.toggle('progress-hede');
    disableScroll();
  }
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === keys.ESC) {
      hideMenu();
    }
  });
  burger?.addEventListener('click', (e) => {
    if (menu?.classList.contains('menu--active')) {
      hideMenu()
    } else {
      showMenu();
    }
  });
  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    enableScroll();
  });
})();

