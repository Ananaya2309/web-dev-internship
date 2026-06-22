
const form = document.getElementById("registerForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

const success = document.getElementById("success");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirm = document.getElementById("toggleConfirm");


const strengthBar = document.getElementById("strengthBar");


password.addEventListener("input", function () {

    let value = password.value;
    let strength = 0;

    if (value.length >= 8) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[@$!%*?&]/.test(value)) strength++;

    if (strength === 1) {
        strengthBar.style.width = "25%";
        strengthBar.style.background = "red";
    }

    else if (strength === 2) {
        strengthBar.style.width = "50%";
        strengthBar.style.background = "orange";
    }

    else if (strength === 3) {
        strengthBar.style.width = "75%";
        strengthBar.style.background = "gold";
    }

    else if (strength === 4) {
        strengthBar.style.width = "100%";
        strengthBar.style.background = "limegreen";
    }

    else {
        strengthBar.style.width = "0%";
    }

});

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.innerHTML = "🙈";
    }

    else {
        password.type = "password";
        togglePassword.innerHTML = "👁️";
    }

});


toggleConfirm.addEventListener("click", function () {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        toggleConfirm.innerHTML = "🙈";
    }

    else {
        confirmPassword.type = "password";
        toggleConfirm.innerHTML = "👁️";
    }

});

form.addEventListener("submit", function (event) {

    event.preventDefault();

    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmError.innerText = "";
    success.innerText = "";

    let isValid = true;

    if (name.value.trim() === "") {

        nameError.innerText = "Name is required";
        isValid = false;

    }

    else if (name.value.trim().length < 3) {

        nameError.innerText = "Minimum 3 characters required";
        isValid = false;

    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.value.trim() === "") {

        emailError.innerText = "Email is required";
        isValid = false;

    }

    else if (!email.value.match(emailPattern)) {

        emailError.innerText = "Enter a valid email";
        isValid = false;

    }

    const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (password.value === "") {

        passwordError.innerText = "Password is required";
        isValid = false;

    }

    else if (!password.value.match(passwordPattern)) {

        passwordError.innerText =
        "Password must contain 8+ characters, uppercase, lowercase, number & special character";

        isValid = false;

    }

    if (confirmPassword.value === "") {

        confirmError.innerText = "Confirm your password";
        isValid = false;

    }

    else if (password.value !== confirmPassword.value) {

        confirmError.innerText = "Passwords do not match";
        isValid = false;

    }


    if (isValid) {

        success.innerHTML = " Registration Successful!";

        success.style.color = "#00ff99";
        success.style.fontSize = "22px";
        success.style.fontWeight = "bold";

        form.reset();

        strengthBar.style.width = "0%";

    }

});
