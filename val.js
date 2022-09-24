const nam = document.getElementById("name");
const last = document.getElementById("last");
const form = document.getElementById('form');
const password = document.getElementById("password");
const email = document.getElementById("email");
const error1 = document.getElementById("first-error");
const error2 = document.getElementById("second-error");
const error4 = document.getElementById("fourth-error");



form.addEventListener('submit', (e) => {
    if (nam.value == '' || nam.value == null) {
        nam.classList.add("java");
        error1.classList.add("appear");
        e.preventDefault();
    }
    if (last.value == '' || last.value == null) {
        last.classList.add("java");
        error2.classList.add("appear");
        e.preventDefault();
    }
    if (password.value == '' || password.value == null || password.value == 'Password' || password.value == 'password') {
        password.classList.add("java");
        error4.classList.add("appear");
        e.preventDefault();
    }
    
    
  
})


