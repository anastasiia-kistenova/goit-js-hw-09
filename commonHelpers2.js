import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector(".feedback-form"),a=t.elements.email,l=t.elements.message,e="feedback-form-state";a.value=localStorage.getItem(`${e}-email`)??"";l.value=localStorage.getItem(`${e}-message`)??"";t.addEventListener("input",o=>{localStorage.setItem(`${e}-email`,a.value),localStorage.setItem(`${e}-message`,l.value)});t.addEventListener("submit",o=>{a.value.trim()===""||l.value.trim()===""||(o.preventDefault(),console.log(`Email: ${a.value}`),console.log(`Message: ${l.value}`),localStorage.removeItem(`${e}-email`),localStorage.removeItem(`${e}-message`),t.reset())});
//# sourceMappingURL=commonHelpers2.js.map