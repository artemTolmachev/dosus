const inputs = document.querySelectorAll('.input-wrapper');
const placeholder = document.querySelector('.fake-placeholder');


inputs.forEach(inputWrapper => {
  const input = inputWrapper.querySelector('.form__input');
  const placeholder = inputWrapper.querySelector('.fake-placeholder');

  input.addEventListener("focus", () => {
    placeholder.classList.add("fake-placeholder-active");
    input.classList.add("input-active");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      placeholder.classList.remove("fake-placeholder-active");
      input.classList.remove("input-active");
    }
  });
})

