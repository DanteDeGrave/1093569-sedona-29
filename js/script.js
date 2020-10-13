const modalWindow = document.querySelector('.modal');
const modalButton = document.querySelector('.search-hotels-button');

modalButton.addEventListener('click', function () {
  const isOpen = modalWindow.classList.contains('modal-open');
  modalWindow.classList.toggle('modal-close', isOpen);
  modalWindow.classList.toggle('modal-open', !isOpen);
});
