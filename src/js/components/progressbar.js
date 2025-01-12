import $ from 'jquery';

const $revealBar = $('.yellow-bar');

  $(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop(); // Текущая прокрутка сверху
    var documentHeight = $(document).height(); // Высота всего документа
    var windowHeight = $(window).height(); // Высота окна просмотра

    // Процент прокрутки
    var scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    // Начальная высота полосы (58px)
    // let initialHeight = 158;

    // Вычисляем оставшуюся высоту полосы, начиная с 58px
    // let remainingHeight = (windowHeight * (scrollPercent / 100)) + initialHeight;
    let remainingHeight = (windowHeight * (scrollPercent / 100));

    $revealBar.height(remainingHeight);
  });


function updateRightOffset(){
  const element = document.querySelector('.container');
  const viewportWidth = window.innerWidth;
  const computedStyle = window.getComputedStyle(element);
  const paddingRight = computedStyle.paddingRight;
  const containerWidth = element.getBoundingClientRect().width;
  const paddingRightValue = parseInt(paddingRight, 10);

  const offset = Math.max(0, (viewportWidth - containerWidth) / 2) + paddingRightValue;
  document.documentElement.style.setProperty('--element-offset-right', `${offset}px`)
}
updateRightOffset();
window.addEventListener('resize', updateRightOffset);
