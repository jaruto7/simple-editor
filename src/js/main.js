// Pobierz wszystkie przyciski i inne elementy, i zapisz je w zmiennych
const textarea = document.querySelector('.header__textarea--js');
const buttonDelete = document.querySelector('.button--delete-js');
const buttonLoad = document.querySelector('.button--load-js');
const buttonSave = document.querySelector('.button--save-js');

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