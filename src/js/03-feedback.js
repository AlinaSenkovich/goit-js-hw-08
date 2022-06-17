import throttle from "lodash.throttle";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onFormInput, 500));

const formData = {};

function onFormInput (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm (event) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (data) {
      email.value = data.email;
      message.value = data.message;
    }
  })();

    