document.getElementById("login-submit").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email").value;
  const userPassword = document.getElementById("user-password").value;

  if (userEmail === "alamin@gmail.com" && userPassword === "alamin") {
    window.location.href = "banking.html";
  } else {
    alert("Email/Password is incorrect");
  }
});
