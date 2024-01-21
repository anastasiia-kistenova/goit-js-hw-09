const form = document.querySelector(".feedback-form");
const input = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

input.value = localStorage.getItem(`${localStorageKey}-email`) ?? "";
textarea.value = localStorage.getItem(`${localStorageKey}-message`) ?? "";


form.addEventListener("input", (evt) => {
    localStorage.setItem(`${localStorageKey}-email`, input.value);
    localStorage.setItem(`${localStorageKey}-message`, textarea.value);
});

form.addEventListener("submit", (evt) => {
    if (input.value.trim() === "" || textarea.value.trim() === "") {
        return;
    }
  evt.preventDefault();
    console.log(`Email: ${input.value}`);
    console.log(`Message: ${textarea.value}`);
    
    localStorage.removeItem(`${localStorageKey}-email`);
    localStorage.removeItem(`${localStorageKey}-message`);
  form.reset();
});