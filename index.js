function showLogin() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";

  document.querySelector(".tab-button.active").classList.remove("active");
  document.querySelector(".tab-button:nth-child(1)").classList.add("active");

}
function showSignUp() { 
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";

  document.querySelector(".tab-button.active").classList.remove("active");
  document.querySelector(".tab-button:nth-child(2)").classList.add("active");

}

function validateSignUpForm(){
  const password = document.getElementById('signup-password').value;
  if (password.length < 8) {
    alert('Password must be at least 8 characters.');
    return false;
  }
  return true;
}

document.addEventListener('DOMContentLoaded', function() {
  const signUpForm = document.querySelector('#signup-form form');
  signUpForm.addEventListener('submit', function(event) {
    if (!validateSignUpForm()) {
      event.preventDefault();
    }
  });
});




window.onload = function() {
  showLogin();

};

