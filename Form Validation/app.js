const myForm = document.forms.myForm;
const username = myForm.username;
const email = myForm.email;
const password = myForm.password;
const confirmPass = myForm.confirmPassword;
let allgreen = false;
myForm.onsubmit = function (e) {
  let truevalue = false;
  e.preventDefault();
  checkPassword();
  checkUsername();
  checkEmail();
  // truevalue = display();
  // console.log(truevalue);
  // if (truevalue) {
  //   alert("welcome");
  // }
  // console.log(checkPassword());
  if (checkPassword() && checkUsername() && checkEmail()) {
    let popup = document.querySelector(".popup");
    popup.classList.add("popup-show");
    setTimeout(() => {
      popup.classList.remove("popup-show");
    }, 2000);
  }
};

// function display() {
//   for (let index = 0; index < myForm.length; index++) {
//     if (myForm[index].style.border === "2px solid lightgreen") {
//       return true;
//     }
//   }
// }
function checkUsername() {
  if (username.value.length < 3 || username.value.length > 256) {
    // document.getElementById("username").textContent =
    //   "please enter username above 3 characters and less than 256 characters";
    document.getElementById("username").style.visibility = "visible";
    // console.log(document.getElementById("username").textContent);
    username.style.border = "2px solid red";
    return false;
  } else {
    username.style.border = "2px solid lightgreen";
    document.getElementById("username").style.visibility = "hidden";
    return true;
    // allgreen = true;
  }
}
function checkEmail() {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.value.match(mailformat)) {
    document.getElementById("email").style.visibility = "visible";
    email.style.border = "2px solid red";
    return false;
  } else {
    email.style.border = "2px solid lightgreen";
    document.getElementById("email").style.visibility = "hidden";
    // allgreen = true;
    return true;
  }
}
function checkPassword() {
  console.log("hello");
  //   let error = document.getElementById("password");
  console.log(password.value.length);
  if (password.value.length < 6) {
    document.getElementById("password").style.visibility = "visible";
    // console.log(document.getElementById("password").textContent);
    password.style.border = "2px solid red";
  } else {
    password.style.border = "2px solid lightgreen";
    document.getElementById("password").style.visibility = "hidden";
    // allgreen = true;
    if (password.value !== confirmPass.value) {
      document.getElementById("confirmPassword").style.visibility = "visible";
      confirmPass.style.border = "2px solid red";
      return false;
    } else {
      confirmPass.style.border = "2px solid lightgreen";
      document.getElementById("confirmPassword").style.visibility = "hidden";
      // allgreen = true;
      return true;
    }
  }
}
