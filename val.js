const nam = document.getElementById("name");
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    if (nam.value == '' || nam.value == null) {
        nam.classList.add("java");
        e.preventDefault();
    }
})


