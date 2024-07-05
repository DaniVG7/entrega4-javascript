//lazy load
const sections = document.querySelectorAll("[data-src]");
for (const section of sections) {
  const RESPONSE = await fetch(section.dataset.src);
  const MAIN_CONTENT = await RESPONSE.text();
  section.outerHTML = MAIN_CONTENT;
}


//validaciones
inputEmail.addEventListener("blur", function () {
  let email = document.getElementById("inputEmail").value;
  let emailPattern = /@gmail\.?/i;
  let emailWarning = document.getElementById("emailWarning");

  if (!email) {
    emailWarning.innerHTML = "Please enter a valid email❗"; // Mostramos este mensaje si el campo está vacío
    emailWarning.style.display = "block";
    return 0;
  }
  if (emailPattern.test(email)) { // si se cumple el patern de la variable que creamos (es @gmail), mostramos esta advertencia
    emailWarning.style.display = "block";
    emailWarning.innerHTML = "The email domain cannot be gmail❗";
  } else {
    emailWarning.style.display = "none";
  }
});


inputPhone.addEventListener("blur", function () {
  let phone = document.getElementById("inputPhone").value;
  let phonePattern = /^[679]\d{8}(\s.*)?$/;
  let phoneWarning = document.getElementById("phoneWarning");
  if (!phone) {                             //Si el usuario pone algo en el campo de telefono ejecutamos la siguiente validación...
    phoneWarning.innerHTML = "This field cannot be empty❗";
    phoneWarning.style.display = "block"; // Mostramos este mensaje si el campo está vacío
    return 0;
  }
  if (!phonePattern.test(phone)) {
    phoneWarning.style.display = "block";
    phoneWarning.innerHTML = "Phone number must start with 6, 7 or 9 and be 9 digits long. You can add the country extension after the phone number leaving an space between them❗";
  } else {
    phoneWarning.style.display = "none";
  }
});


//Añadir un evento on submit al formulario para evitar el envío si hay errores
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  let emailError = emailWarning.style.display === "block";
  let phoneError = phoneWarning.style.display === "block";

  if (emailError || phoneError) {
    event.preventDefault();             // Prevenir el envío del formulario si hay errores
    alert("Please fill all the fields correctly❗");
  }
});

