const homeLink = document.getElementById("evmss");
homeLink.addEventListener("click", reloadPage);
function reloadPage() {
  window.location.reload();
}

document.getElementById("login").addEventListener("click", function() {
  window.location.href = "../loginpage/login.html";
});


