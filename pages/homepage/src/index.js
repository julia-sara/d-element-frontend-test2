//BURGER
(function () {
  const Button = document.querySelector(".burger-button");
  const BurgContainer = document.querySelector(".burger-container");
  Button.addEventListener("click", () => {
       BurgContainer.classList.toggle("burger-container_active");
  });
})();
//--BURGER

//MODAL
//Открыть модальное окно
document.getElementById("PetsItem1").addEventListener("click", function () {
  document.getElementById("ModalK").classList.add("open");
});

//Закрыть модальное окно при нажатии на кнопку
document
  .getElementById("closeModalBtnKat")
  .addEventListener("click", function () {
    document.getElementById("ModalK").classList.remove("open");
  });

//Закрыть модальное окно при нажатии на Еск
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("ModalK").classList.remove("open");
  }
});
//Закрыть модальное окно при нажатии на поле вне его
document
  .querySelector("#ModalK .ModalBox1")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.getElementById("ModalK").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});
//--MODAL