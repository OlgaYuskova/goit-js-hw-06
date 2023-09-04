const form = document.querySelector('.login-form');
const inputEl = document.querySelectorAll('input');

form.addEventListener('submit', onFormSubmit)
   
   
function onFormSubmit(event) { 
    event.preventDefault();
    
    inputEl.forEach( input => {
    if (input.value.trim() === '') { 
    alert("Error!!! при відправлені форми, поля не можуть бути пустими.")
    }
    })
  
    const formElements = event.currentTarget.elements

    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email,
        password
    }

    console.log(formData);

    form.reset()
};

