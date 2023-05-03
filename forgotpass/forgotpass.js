
const forgotPasswordForm = document.getElementById("forgotpassword");

forgotPasswordForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = "Password reset link has been sent to your email!";
    alert(message);
    window.location.href = "../login/login-page.html";
});