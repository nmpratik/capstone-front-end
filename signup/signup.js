const signup = document.getElementById("register")
signup.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "../login/login-page.html";
});