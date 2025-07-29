let count = 0;
const countBtn = document.getElementById("countBtn");
const clickCount = document.getElementById("clickCount");

countBtn.addEventListener("click", () => {
  count++;
  clickCount.textContent = count;
});

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const faqToggle = document.querySelector(".faq-toggle");
const faqAnswer = document.querySelector(".faq-answer");

faqToggle.addEventListener("click", () => {
  faqAnswer.classList.toggle("hidden");
});

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = "Please fix the errors above.";
    formMessage.style.color = "red";
  }
});
