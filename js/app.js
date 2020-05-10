// NOTE NAVBAR CHANGE ON SCROLL
let navbar = document.querySelector("nav");

function changeNavbar() {
  let height = scrollY;
  let logo = document.querySelector(".logo-img");

  if (height > 250) {
    navbar.classList = "nav";
    logo.style.width = "50px";
    logo.style.margin = "0 0 0 20px";
  } else {
    navbar.classList.remove("nav");
    logo.style.width = "100px";
  }

  if (height > 1750) {
    let slide1 = document.querySelector(".slide1");
    let slide2 = document.querySelector(".slide2");
    let slide3 = document.querySelector(".slide3");
    const cards = document.querySelectorAll(".card");
    slide1.classList.add("card1");
    slide2.classList.add("card2");
    slide3.classList.add("card3");
    cards.forEach((card) => {
      card.style.opacity = 1;
    });
  }
}
changeNavbar();
window.addEventListener("scroll", changeNavbar);

// ********************* NOTE smooth scrolling ************************
function smoothScroll(link, element, duration) {
  let target = document.querySelector(element);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  // let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}
let navLink1 = document.querySelector(".navLink1");
navLink1.addEventListener("click", function () {
  smoothScroll(this, ".home", 1000);
});
let navLink2 = document.querySelector(".navLink2");
navLink2.addEventListener("click", function () {
  smoothScroll(this, ".about", 1000);
});
let navLink3 = document.querySelector(".navLink3");
navLink3.addEventListener("click", function () {
  smoothScroll(this, ".services", 1000);
});
let navLink4 = document.querySelector(".navLink4");
navLink4.addEventListener("click", function () {
  smoothScroll(this, ".clients", 1000);
});
let navLink5 = document.querySelector(".navLink5");
navLink5.addEventListener("click", function () {
  smoothScroll(this, ".portfolio", 1000);
});
let navLink6 = document.querySelector(".navLink6");
navLink6.addEventListener("click", function () {
  smoothScroll(this, ".contact", 1000);
});

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
const removeDropdown = document
  .querySelector("body")
  .removeEventListener("click", languagesDropdown);

// *********************** NOTE APPLY FORM MODAL *************************
const applyBtn = document.querySelector(".apply-btn");
applyBtn.addEventListener("click", formModal);

function formModal() {
  modal.classList = "apply-modal";
  // navbar.style.display = "none";
}
const modal = document.querySelector(".apply");
modal.addEventListener("click", function () {
  modal.className = "apply";
  // navbar.style.display = "flex";
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
  experience.className = "";
  position.className = "";
  message.className = "";

  validateName(name.value);
  validatePhone(phone.value);
  // validateEmail(email.value);
  validateExperience(experience.value);
  validatePosition(position.value);
  validateMessage(message.value);

  // Show first error.
  if (allErrors.length > 0) {
    let firstError = allErrors.shift();
    showMessage.innerHTML = firstError;
    setTimeout(() => {
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
  setTimeout(() => {
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
function validateExperience(experience) {
  if (experience.length < 1) {
    allErrors.push("*Experience cannot be empty!");
    showMessage.style.color = "red";
    document.querySelector("#experience").className = "border-error";
    return;
  }
}
function validatePosition(position) {
  if (position.length < 1) {
    allErrors.push("*Position cannot be empty!");
    showMessage.style.color = "red";
    document.querySelector("#position").className = "border-error";
    return;
  }
}
function validateMessage(message) {
  if (message.length < 1) {
    allErrors.push("*Message cannot be empty!");
    showMessage.style.color = "red";
    document.querySelector("#message").className = "border-error";
    return;
  }
}
//  ***************** NOTE Slider for OUR CLIENTS section ***********
function clientsSlider() {
  let slidePerView;

  if (window.innerWidth < 860) slidePerView = 1;
  if (window.innerWidth > 861 && window.innerWidth < 1199) slidePerView = 2;
  if (window.innerWidth > 1200) slidePerView = 3;

  var glide = new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: slidePerView,
    autoplay: 2300,
    hoverpause: false,
    gap: 5,
  });
  glide.mount();
}
clientsSlider();
// ***************** NOTE PRODUCT GALLERY **********************
// const portfolioModal = document.querySelector(".portfolio-modal");
// const portfolioCards = document.querySelectorAll(".card");
// const gallery = document.querySelector(".gallery");
// portfolioCards.forEach((card) => {
//   card.addEventListener("click", function () {
//     portfolioModal.style.display = "block";
//     navbar.style.display = "none";
//     gallery.style.display = "grid";

// let current = document.querySelector(".current");
// let img = current.children[0];
// img.setAttribute(
//   "src",
//   "images/products/portfolio/Skirt_Caroll_Quitterie/KB05105F-02-jupe-femme-gris-moyen-quitterie.jpg"
// );
//   });
// });

// CLOSE MODAL
// portfolioModal.addEventListener("click", function () {
//   this.style.display = "none";
//   navbar.style.display = "flex";
// });
// // STOP PROPAGATION
// gallery.addEventListener("click", function (e) {
//   e.stopPropagation();
// });

function portfolioSlider() {
  let slidesPerView;

  if (window.innerWidth < 499) slidesPerView = 1;
  // if (window.innerWidth > 861 && window.innerWidth < 1199) slidesPerView = 2;
  if (window.innerWidth > 500 && window.innerWidth < 899) slidesPerView = 2;
  if (window.innerWidth > 900) slidesPerView = 3;

  var portfolio = new Glide(".portfolio-glide", {
    type: "slider",
    startAt: 0,
    perView: slidesPerView,
    autoplay: false,
    hoverpause: false,
    gap: 10,
  });
  portfolio.mount();
}
portfolioSlider();
window.addEventListener("resize", () => {
  portfolioSlider();
  // clientsSlider();
});

const portfolioModal = document.querySelector(".portfolio-modal");
const portfolioCards = document.querySelectorAll(".card");

function renderGallery(image) {
  portfolioModal.innerHTML = "";
  for (product of products) {
    if (image === product.images[0]) {
      let gallery = document.createElement("div");
      gallery.className = "gallery";
      gallery.addEventListener("click", function (e) {
        e.stopPropagation();
      });

      let current = document.createElement("div");
      let currentImg = document.createElement("img");
      currentImg.setAttribute("src", product.images[0]);
      currentImg.setAttribute("alt", product.description);

      let description = document.createElement("p");
      description.textContent = product.description;
      current.appendChild(currentImg);
      // current.appendChild(description);

      let thumbnails = document.createElement("div");
      for (let i = 0; i < product.images.length; i++) {
        thumbnails.innerHTML += `<div><img src="${product.images[i]}" alt="${product.description}" width="67.9"></div>`;
        // product.images[i].addEventListener("click", () => {
        //   currentImg.setAttribute("src", product.images[i]);
        //   currentImg.setAttribute("alt", product.description);
        // });
      }
      gallery.appendChild(current);
      gallery.appendChild(thumbnails);
      portfolioModal.appendChild(description);
      portfolioModal.appendChild(gallery);
      // console.log(product.images[2]);
      // console.log(image);
    }
  }
}
// const gallery = document.querySelector(".gallery");
portfolioCards.forEach((card) => {
  card.addEventListener("click", function (e) {
    const imgSrc = e.target.getAttribute("src");
    portfolioModal.style.display = "block";
    // navbar.style.display = "none";
    renderGallery(imgSrc);
  });
});

// CLOSE MODAL
portfolioModal.addEventListener("click", function () {
  this.style.display = "none";
  // navbar.style.display = "flex";
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
  company.className = "";
  email.className = "";
  country.className = "";
  message.className = "";

  validateContactName(name.value);
  validateCompanyName(company.value);
  validateEmail(email.value);
  validateCountry(country.value);
  validateMessage(message.value);

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
  company.value = "";
  email.value = "";
  country.value = "";
  message.value = "";

  function validateContactName(name) {
    if (name.length < 1) {
      contactErrors.push("*Name cannot be empty!");
      contactMessage.style.color = "red";
      document.querySelector("#contact-name").className = "border-error";
      return;
    }
  }
  function validateCompanyName(company) {
    if (company.length < 1) {
      contactErrors.push("*Company name cannot be empty!");
      contactMessage.style.color = "red";
      document.querySelector("#contact-company").className = "border-error";
      return;
    }
  }
  function validateEmail(email) {
    if (email.length < 1) {
      contactErrors.push("*Email cannot be empty!");
      contactMessage.style.color = "red";
      document.querySelector("#contact-email").className = "border-error";
      return;
    }
  }
  function validateCountry(country) {
    if (country.length < 1) {
      contactErrors.push("*Country cannot be empty!");
      contactMessage.style.color = "red";
      document.querySelector("#contact-country").className = "border-error";
      return;
    }
  }
  function validateMessage(message) {
    if (message.length < 1) {
      contactErrors.push("*Message cannot be empty!");
      contactMessage.style.color = "red";
      document.querySelector("#contact-message").className = "border-error";
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
