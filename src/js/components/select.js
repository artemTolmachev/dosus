import {currentText} from '../components/langueges-text.js';

  const langButtons = document.querySelectorAll("[data-btn]");
  let selectHeaders = document.querySelectorAll('.select__head');
  const allLangs = ["ru", "en"];
  let currentLang = localStorage.getItem('language') || checkBroserLang() || "ru";


  function changeLang() {
    for (const key in currentText) {
      const elem = document.querySelector(`[data-lang=${key}]`);
      const inputValue = document.querySelector(`[data-submit=${key}]`)
      if (elem) {
        elem.innerHTML = currentText[key][currentLang];
      }
      if (inputValue) {
        inputValue.value = currentText[key][currentLang];
      }
    }
  }
  changeLang();
  selectHeaders.forEach(header => {
    header.addEventListener('click', selectToggle);
  });

  langButtons.forEach(btn => {
    btn.addEventListener('click', langChoose);
  });

  function selectToggle() {
    const perentElement = this.parentElement;
    perentElement.classList.toggle('is-active');
    perentElement.setAttribute('aria-expanded', true);
  }

  function langChoose(event) {
    let value = this.dataset.btn;
    let select = this.closest('.select');
    select.classList.remove('is-active');
    currentLang = value;

    // let text = this.innerText,
    //   select = this.closest('.select'),
    //   currentText = select.querySelector('.select__current');
    // currentText.innerText = text;
    // select.classList.remove('is-active');

    ActiveAtributClassReset();
    ActiveClassAtribut(this);
    localStorage.setItem('language', event.target.dataset.btn)
    changeLang();
  }

  function ActiveClassAtribut(button){
    button.setAttribute('aria-selected', true);
    button.classList.add('active-select');
  }

  function ActiveAtributClassReset() {
    langButtons.forEach(btn => {
      btn.setAttribute('aria-selected', false);
      btn.classList.remove('active-select')
    })
  }

  // Закрытие при клике вне селекта
  document.addEventListener('click', (e) => {
    let selects = document.querySelectorAll('.select-header');
    selects.forEach(select => {
      if (!select.contains(e.target)) {
        select.classList.remove('is-active');
        select.setAttribute('aria-expanded', 'false');
      }
    });
  });

  //при загрузке навешиваем активный класс исходя из текущего языка currentLang
  function checkActiveLangButton() {
    switch (currentLang) {
      case "ru":
        document
          .querySelector('[data-btn="ru"]')
          .classList.add('active-select');
        break;
      case "en":
        document
          .querySelector('[data-btn="en"]')
          .classList.add('active-select');
        break;
      default:
      case "ru":
        document
          .querySelector('[data-btn="ru"]')
          .classList.add('active-select');
        break;
    }
  }
  //Проверяем есть ли один из списка наших языков в бра
  function checkBroserLang() {
    const navLang = navigator.language.slice(0, 2).toLowerCase();
    const result = allLangs.some(elem => {
      return elem === navLang;
    })
    if (result) {
      return navLang
    }
  }
  window.addEventListener('load', checkActiveLangButton);




