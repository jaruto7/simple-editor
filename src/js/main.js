"use strict";

// Pobierz wszystkie przyciski i zapisz w zmiennych
const textarea = document.querySelector('.header__textarea--js');
const buttonDelete = document.querySelector('.button--delete-js');
const buttonLoad = document.querySelector('.button--load-js');
const buttonSave = document.querySelector('.button--save-js');

buttonSave.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(JSON.stringify(textarea.value));
  localStorage.setItem("textarea", textarea.value);
});

buttonLoad.addEventListener('click', (e) => {
  e.preventDefault();
  textarea.innerHTML = localStorage.getItem("textarea", e.target.value);
});

buttonDelete.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem("textarea");
});