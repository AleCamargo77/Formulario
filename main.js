function validateEmail() {
  //   e.preventdefault();
  const email = document.getElementById("email").value;
  const emailIsValid = email.match(
    /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
  );

  if (emailIsValid) {
    console.log(email);
  } else {
    throw new Error("Email invalid");
  }
}

try {
  if (emailIsValid) {
    console.log(email);
  }
} catch (error) {
  console.log("An error ocurred");
}

const play = document.getElementById("play");
console.log(play);
play.addEventListener("click", validateEmail);
