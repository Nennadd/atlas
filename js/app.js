// NOTE NAVBAR CHANGE ON SCROLL
let navbar = document.querySelector("nav");
function changeNavbar() {
  let height = scrollY;
  let logo = document.querySelector(".logo-img");

  if (height > 250) {
    navbar.classList = "nav";
    logo.style.width = "60px";
    logo.style.margin = "0";
  } else {
    navbar.classList.remove("nav");
    logo.style.width = "100px";
  }

  if (height > 1700) {
    const cards = document.querySelectorAll(".card");
    cards[0].classList.add("card1");
    cards[1].classList.add("card2");
    cards[2].classList.add("card3");
  }
}
changeNavbar();
window.addEventListener("scroll", changeNavbar);
// ********************* NOTE Languages dropdown ***********************
let languages = document.querySelector(".language");
let arrow = document.querySelector(".language-arrow");

languages.addEventListener("click", languagesDropdown);
function languagesDropdown() {
  langDiv = document.querySelector(".languages");
  if (langDiv.classList.contains("languages-show")) {
    langDiv.classList.remove("languages-show");
    arrow.style.rotate = "0deg";
  } else {
    langDiv.classList.add("languages-show");
    arrow.style.rotate = "-540deg";
  }
}
// NOTE Languages dropdown on mouseenter
// languages.addEventListener("mouseenter", function () {
//   langDiv = document.querySelector(".languages");

//   langDiv.classList.add("languages-show");
//   arrow.style.rotate = "-540deg";
// });
// NOTE Languages dropdown on mouseleave
// languages.addEventListener("mouseleave", function () {
//   langDiv = document.querySelector(".languages");

//   langDiv.classList.remove("languages-show");
//   arrow.style.rotate = "0deg";
// });
const removeDropdown = document
  .querySelector("body")
  .removeEventListener("click", languagesDropdown);
// *********************** NOTE APPLY FORM MODAL *************************
const applyBtn = document.querySelector(".apply-btn");
applyBtn.addEventListener("click", formModal);

function formModal() {
  modal.classList = "apply-modal";
  navbar.style.display = "none";
}
const modal = document.querySelector(".apply");
modal.addEventListener("click", function () {
  modal.className = "apply";
  navbar.style.display = "flex";
});
const modalForm = document.querySelector(".apply-form");
modalForm.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Validate form inputs
const submitBtn = document.querySelector(".apply-button");
let showMessage = document.querySelector("small");
let allErrors = [];
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  showMessage.innerHTML = "";
  allErrors = [];
  const name = document.querySelector("#name");
  const phone = document.querySelector("#phone");
  const email = document.querySelector("#email");
  const experience = document.querySelector("#experience");
  const position = document.querySelector("#position");
  const message = document.querySelector("#message");
  name.className = "";
  phone.className = "";
  email.className = "";

  validateName(name.value);
  validatePhone(phone.value);
  validateEmail(email.value);

  // Show first error.
  if (allErrors.length > 0) {
    let firstError = allErrors.shift();
    showMessage.innerHTML = firstError;
    let clearMessage = setTimeout(() => {
      showMessage.innerHTML = "";
    }, 3000);
    return;
  }
  let applyFormData = {};
  applyFormData.name = name.value;
  applyFormData.phone = phone.value;
  applyFormData.email = email.value;
  applyFormData.experience = experience.value;
  applyFormData.position = position.value;
  applyFormData.message = message.value;

  // JSON data for the server
  const applyData = JSON.stringify(applyFormData);

  showMessage.textContent = "Message sent !";
  showMessage.style.color = "green";
  let clearMessage = setTimeout(() => {
    showMessage.innerHTML = "";
  }, 3000);
  name.value = "";
  phone.value = "";
  email.value = "";
  experience.value = "";
  position.value = "";
  message.value = "";
});

function validateName(name) {
  if (name.length < 1) {
    allErrors.push("*Name cannot be empty!");
    showMessage.style.color = "red";
    document.querySelector("#name").className = "border-error";
    return;
  }
}
function validatePhone(phone) {
  if (phone.length < 1) {
    allErrors.push("*Please, enter phone number!");
    showMessage.style.color = "red";
    document.querySelector("#phone").className = "border-error";
    return;
  }
}
function validateEmail(email) {
  if (email.length < 1) {
    allErrors.push("*Email cannot be empty!");
    showMessage.style.color = "red";
    document.querySelector("#email").className = "border-error";
    return;
  }
}
//  ***************** NOTE Slider for OUR CLIENTS section ***********
var glide = new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  autoplay: 2300,
  hoverpause: false,
  gap: 5,
});
glide.mount();

// ***************** NOTE PRODUCT GALLERY **********************
const portfolioModal = document.querySelector(".portfolio-modal");
const portfolioCards = document.querySelectorAll(".card");
const gallery = document.querySelector(".gallery");
portfolioCards.forEach((card) => {
  card.addEventListener("click", function () {
    portfolioModal.style.display = "block";
    navbar.style.display = "none";
    gallery.style.display = "grid";

    // let current = document.querySelector(".current");
    // let img = current.children[0];
    // img.setAttribute(
    //   "src",
    //   "images/products/portfolio/Skirt_Caroll_Quitterie/KB05105F-02-jupe-femme-gris-moyen-quitterie.jpg"
    // );
  });
});

// CLOSE MODAL
portfolioModal.addEventListener("click", function () {
  this.style.display = "none";
  navbar.style.display = "flex";
});
// STOP PROPAGATION
gallery.addEventListener("click", function (e) {
  e.stopPropagation();
});

// ***************** NOTE CONTACT FORM **************************
const button = document.querySelector(".submit-btn");
let contactMessage = document.querySelector(".contact-message");
let contactErrors = [];
button.addEventListener("click", function (e) {
  e.preventDefault();
  contactErrors = [];
  contactMessage.innerHTML = "";

  const name = document.querySelector("#contact-name");
  const company = document.querySelector("#contact-company");
  const email = document.querySelector("#contact-email");
  const country = document.querySelector("#contact-country");
  const message = document.querySelector("#contact-message");
  name.className = "";

  validateContactName(name.value);

  // Show first error.
  if (contactErrors.length > 0) {
    let firstError = contactErrors.shift();
    contactMessage.innerHTML = firstError;
    setTimeout(() => {
      contactMessage.innerHTML = "";
    }, 2500);
    return;
  }

  contactMessage.textContent = "Message sent !";
  contactMessage.style.color = "green";
  setTimeout(() => {
    contactMessage.innerHTML = "";
  }, 2500);
  name.value = "";

  function validateContactName(name) {
    if (name.length < 1) {
      contactErrors.push("*Name cannot be empty!");
      contactMessage.style.color = "red";
      document.querySelector("#contact-name").className = "border-error";
      return;
    }
  }
});

// ***************** NOTE MAP ***********************************
var mymap = L.map("mapid", {
  center: [44.81, 20.3801],
  zoom: 13,
  scrollWheelZoom: false,
});
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibmVubmFkZCIsImEiOiJjazk3cWhkYjkwcXJhM2xtcHNsYjZ5a3Q5In0.K6OXQ0tbM5m5Zuaz0r9S9w",
  }
).addTo(mymap);
var marker = L.marker([44.81, 20.3801]).addTo(mymap);