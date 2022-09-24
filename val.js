const nam = document.getElementById("name");
const last = document.getElementById("last");
const form = document.getElementById('form');
const password = document.getElementById("password");
const email = document.getElementById("email");



form.addEventListener('submit', (e) => {
    if (nam.value == '' || nam.value == null) {
        nam.classList.add("java");
        e.preventDefault();
    }
    if (last.value == '' || last.value == null) {
        last.classList.add("java");
        e.preventDefault();
    }
    if (password.value == '' || password.value == null || password.value == 'Password' || password.value == 'password') {
        password.classList.add("java");
        e.preventDefault();
    }
    
  
})


