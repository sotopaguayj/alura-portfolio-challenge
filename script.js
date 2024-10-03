//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
const input = document.querySelectorAll(".contacto__campo");
const placeholder = document.querySelectorAll(".contacto__placeholder");
const label = document.querySelectorAll(".contacto__label");

input.forEach((input, index) => {
  input.addEventListener("focus", () => {
    placeholder[index].classList.add("focused");
    label[index].classList.add("focused");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      placeholder[index].classList.remove("focused");
      label[index].classList.remove("focused");
    }
  });
});
