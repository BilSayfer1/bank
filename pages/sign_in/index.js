const emailInput = document.querySelector('.pochta');
const storedEmail = localStorage.getItem('email');
const storedPassword = localStorage.getItem('password');

if (storedEmail) {
    emailInput.value = storedEmail;
}

const registrButton = document.querySelector('.registr');
if (registrButton) {
    registrButton.onclick = () => {
        location.assign('/pages/sign_up/');
    };
}

const signInForm = document.forms.namedItem('enter');
if (signInForm) {
    signInForm.onsubmit = (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const passwordInput = document.querySelector('.parol');
        const password = passwordInput.value.trim();

        console.log('Сохранённый Email:', storedEmail);
        console.log('Сохранённый Пароль:', storedPassword);
        console.log('Введённый Email:', email);
        console.log('Введённый Пароль:', password);

        if (storedEmail === email && storedPassword === password) {
            location.assign('/');
        } else {
            alert('Что ты ле Жидкий нормально вводи пароль');
        }
    };
}
