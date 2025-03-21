// Оголошення об'єкта formData
const formData = {
    email: "",
    message: ""
};

// Отримання посилань на елементи форми
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Перевірка локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
});

// Відстеження змін у формі через подію input
form.addEventListener('input', (event) => {
    if (event.target.name === 'email') {
        formData.email = event.target.value.trim();
    } else if (event.target.name === 'message') {
        formData.message = event.target.value.trim();
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Обробка події submit форми
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formData.email = "";
        formData.message = "";
        emailInput.value = "";
        messageInput.value = "";
    }
});