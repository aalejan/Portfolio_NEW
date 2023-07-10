import "./style.css";
import emailJs from "emailjs-com";

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  // Toggle Nav
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var serviceID = "service_4r45bgq";
    var templateID = "template_pi9yffq";
    var userID = "AG9C97xFIiLokwZb0";

    emailJs.sendForm(serviceID, templateID, "#contactForm", userID).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Oops... " + JSON.stringify(error));
      }
    );
  });
