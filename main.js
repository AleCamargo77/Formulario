function validateEmail(email) {
  //   e.preventdefault();
  const emailValue = document.getElementById("email").value;
  const emailIsValid = emailValue.match(
    /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
  );

  console.log(emailValue);
}

try {
  const isValidateEmail = validateEmail(email);
  if (!isValidateEmail) {
    throw new Error("An error occurred");
  }
} catch (error) {
  console.log(error.message);
}

const play = document.getElementById("play");
// console.log(play);
play.addEventListener("click", validateEmail, validatePassword);

function validatePassword() {
  const passwordValue = document.getElementById("password").value;
  const paswordIsValid = passwordValue.match(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
  );

  if (paswordIsValid) {
    console.log(passwordValue);
  } else {
    throw new Error("Password invalid");
  }
}
