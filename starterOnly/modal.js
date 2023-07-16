function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close, .btn-close");
const submitBtn = document.querySelectorAll(".btn-submit");

/*
-----------------------
  Modal control start
-----------------------
*/
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  document.querySelectorAll("html")[0].scrollTop = 0;
  document.querySelectorAll("body")[0].style.overflow = "hidden";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
  document.querySelectorAll("body")[0].style.overflow = "auto";
}
/*
---------------------
  Modal control end
---------------------
*/

/*
----------------------
  Form control start
----------------------  
*/
submitBtn.forEach((btn) => btn.addEventListener("click", validate));

// Form submit validation
function validate(e) {
  e.preventDefault();
  let formLock = false;

  // First name check
  const tagFirst = document.getElementById("first");
  const valueFirst = tagFirst.value;
  if (valueFirst.length <= 2) {
    tagFirst.parentNode.dataset.errorVisible = true;
    formLock = true;
  } else {
    tagFirst.parentNode.dataset.errorVisible = false;
  }

  // Last name check
  const tagLast = document.getElementById("last");
  const valueLast = tagLast.value;
  if (valueLast.length <= 2) {
    tagLast.parentNode.dataset.errorVisible = true;
    formLock = true;
  } else {
    tagLast.parentNode.dataset.errorVisible = false;
  }

  // Email check
  const tagEmail = document.getElementById("email");
  const valueEmail = tagEmail.value;
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(valueEmail)) {
    tagEmail.parentNode.dataset.errorVisible = true;
    formLock = true;
  } else {
    tagEmail.parentNode.dataset.errorVisible = false;
  }

  // Birthdate check
  const tagBirthdate = document.getElementById("birthdate");
  const valueBirthdate = tagBirthdate.value;
  if (valueBirthdate.length == 0) {
    tagBirthdate.parentNode.dataset.errorVisible = true;
    formLock = true;
  } else {
    tagBirthdate.parentNode.dataset.errorVisible = false;
  }

  // Quantity check
  const tagQuantity = document.getElementById("quantity");
  const valueQuantity = tagQuantity.value;
  if (valueQuantity == "") {
    tagQuantity.parentNode.dataset.errorVisible = true;
    formLock = true;
  } else {
    tagQuantity.parentNode.dataset.errorVisible = false;
  }

  // Location check
  const radiosWrapper = document.getElementById("locations-wrapper");
  const radiosLocation = document.querySelectorAll(
    ".locations-wrapper .checkbox-input"
  );
  var locationLock = false;
  for (var i = 0, len = radiosLocation.length; i < len; i++) {
    if (radiosLocation[i].checked) {
      locationLock = true;
    }
  }

  if (!locationLock) {
    radiosWrapper.dataset.errorVisible = true;
    formLock = true;
  } else {
    radiosWrapper.dataset.errorVisible = false;
  }

  // CGU check
  const tagCGU = document.getElementById("checkbox1");

  if (!tagCGU.checked) {
    tagCGU.parentNode.dataset.errorVisible = true;
    formLock = true;
  } else {
    tagCGU.parentNode.dataset.errorVisible = false;
  }

  if (!formLock) {
    document.getElementById("confirm").style.display = "block";
    document.querySelectorAll(".content")[0].style.overflow = "hidden";
    document.querySelectorAll(".content")[0].scrollTop = 0;
  }
}
/*
--------------------- 
  Form control end
---------------------
*/
