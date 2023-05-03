const forgotPasswordLink = document.getElementById("forgotpassword");

forgotPasswordLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "../forgotpass/forgotpass.html";
});

const signup = document.getElementById("signuppage")
signup.addEventListener("click", function (event){
  window.location.href = "../signup/signup-page.html"
});
