function validateUsername(name) {
  const username = userInputs.name.value;
  if (username === "") {
    const err = new Error("Nome de usuário inválido");
    err.input = "name";
    throw err;
  }
}

function validateEmail(email) {
  if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)) {
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
    const err = new Error("Senha inválida");
    err.input = "password";
    throw err;
  }
  const passwordValue = document.getElementById("password").value;
  const paswordIsValid = passwordValue.match(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
  );

  if (paswordIsValid) {
    console.log(passwordValue);
  } else {
    throw new Error("Password inválido");
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

    console.log(userInputs.email.value);
  } catch (err) {
    userInputs[err.input].classList.add("error");
    document.querySelector(`#${err.input}-error`).textContent = err.message;
    const nameErr = document.querySelector(`#${err.input}-logoError`);
    console.log(nameErr);
  }
});
