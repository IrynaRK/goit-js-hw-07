// Отримуємо форму
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  // Отримуємо значення полів та очищаємо їх від пробілів
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // Перевіряємо, чи заповнені всі поля
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  // Створюємо об'єкт з даними
  const formData = { email, password };

  // Виводимо об'єкт у консоль
  console.log(formData);

  // Очищаємо форму
  form.reset();
});
