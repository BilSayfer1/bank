const emailInput = document.querySelector('.pochta');
const storedEmail = localStorage.getItem('email');
const storedPassword = localStorage.getItem('password');

if (storedEmail) {
    emailInput.value = storedEmail;
}

const registrButton = document.querySelector('.registr');
registrButton.onclick = () => {
    location.assign('/index.html');
};

const form = document.forms.namedItem('enter');
form.onsubmit = (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const passwordInput = document.querySelector('.parol');
    const password = passwordInput.value.trim();

    console.log('Сохранённый Email:', storedEmail);
    console.log('Сохранённый Пароль:', storedPassword);
    console.log('Введённый Email:', email);
    console.log('Введённый Пароль:', password);

    if (storedEmail === email && storedPassword === password) {
        location.assign('/pages/second_page/');
    } else {
        alert('Что ты ле Жидкий нормально вводи пароль')
    }
};