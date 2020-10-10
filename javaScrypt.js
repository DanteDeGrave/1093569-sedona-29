let modalWindow = document.querySelector('.modal');
let modalButton = document.querySelector('.search-hotels-button');

modalButton.onclick = function (){
  modalWindow.classList.toggle('modal-closed');
};
