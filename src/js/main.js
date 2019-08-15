// Pobierz wszystkie przyciski i inne elementy, i zapisz je w zmiennych
const textarea = document.querySelector('.form__message--js');
const buttonDelete = document.querySelector('.form__button--delete-js');
const buttonLoad = document.querySelector('.form__button--load-js');
const buttonSave = document.querySelector('.form__button--save-js');

// Nasłuchuj zdarzenie na kliknięcie przycisku Save przez użytkownika
buttonSave.addEventListener('click', (e) => {
  // Nie pozwól odświeżyć się stronie po kliknięciu 
  e.preventDefault();
  // Zapisz dane do local storage które zostaną przechowane nawet jeśli strona zostanie zamknięta
  localStorage.setItem("textarea", textarea.value);
});

// Nasłuchuj zdarzenie na kliknięcie przycisku Load przez użytkownika
buttonLoad.addEventListener('click', (e) => {
  // Nie pozwól odświeżyć się stronie po kliknięciu 
  e.preventDefault();
  // Pobierz dane z local storage i wyświetl w obszarze textarea
  textarea.innerHTML = localStorage.getItem("textarea", e.target.value);
});

// Nasłuchuj zdarzenie na kliknięcie przycisku Delete przez użytkownika
buttonDelete.addEventListener('click', (e) => {
  // Nie pozwól odświeżyć się stronie po kliknięciu 
  e.preventDefault();
  //Usuń trwałe dane z local storage
  localStorage.removeItem("textarea");
});