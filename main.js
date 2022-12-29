function validateUsername(name) {
  const username = userInputs.name.value;
  if (username === "") {
    const err = new Error("Nome de usuário inválido");
    err.input = "name";
    throw err;
  }
}

function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const err = new Error("Email inválido");
    err.input = "email";
    throw err;
  }
}

function validatePassword(password) {
  if (
    password.length < 8 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/\d/) ||
    !password.match(/[^a-zA-Z\s0-9]/)
  ) {
    const err = new Error(
      "Insira uma letra minúscula, maiúscula e caracter especial."
    );

    err.input = "password";
    throw err;
  }
}

function resetFormStyles(inputs) {
  Object.entries(inputs).forEach(([key, value]) => {
    value.classList.remove("success", "error");
    document.querySelector(`#${key}-error`).textContent = "";
  });
  const logoName = document.getElementById("nameSuc");
  logoName.style.visibility = "hidden";
  const logoEmail = document.getElementById("emailSuc");
  logoEmail.style.visibility = "hidden";
  const logoPass = document.getElementById("passSuc");
  logoPass.style.visibility = "hidden";
  const nameErr = document.getElementById("name-logoError");
  nameErr.style.visibility = "hidden";
  const emailErr = document.getElementById("email-logoError");
  emailErr.style.visibility = "hidden";
  const passwordErr = document.getElementById("password-logoError");
  passwordErr.style.visibility = "hidden";
}

const userInputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
};

const form = document.getElementById("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  resetFormStyles(userInputs);
  try {
    validateUsername(userInputs.name.value);
    userInputs.name.classList.add("success");
    const logoName = document.getElementById("nameSuc");
    logoName.style.visibility = "visible";

    validateEmail(userInputs.email.value);
    userInputs.email.classList.add("success");
    const logoEmail = document.getElementById("emailSuc");
    logoEmail.style.visibility = "visible";

    validatePassword(userInputs.password.value);
    userInputs.password.classList.add("success");
    const logoPass = document.getElementById("passSuc");
    logoPass.style.visibility = "visible";
  } catch (err) {
    userInputs[err.input].classList.add("error");
    document.querySelector(`#${err.input}-error`).textContent = err.message;
    const nameErr = document.querySelector(`#${err.input}-logoError`);
    nameErr.style.visibility = "visible";
  }
});
