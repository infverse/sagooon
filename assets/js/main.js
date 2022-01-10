const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

const skillsContent = document.getElementsByClassName("skills__content");
console.log(skillsContent);
const skillsHeader = document.querySelectorAll(".skills__header");
console.log(skillsHeader);

// function toggleSkills() {
//   let itemClass = this.parentNode.className;
//   console.log(itemClass);
//   for (i = 0; i < skillsContent.length; i++) {
//     skillsContent[i].className = "skills_content skills__close";
//   }
//   if (itemClass === "skills__content skills__close") {
//     this.parentNode.className = "skills__content skills__open";
//   }
// }

// document.querySelector(".skills_content")

function toggleSkills() {
  let target = this.parentElement;
  //   let isClose = this.parentElement.classList.include("skills__close");
  let isClose = [...this.parentElement.classList].includes("skills__close");
  console.log(isClose);

  target.classList.toggle("skills__close");
}

skillsHeader.forEach((eL) => {
  eL.addEventListener("click", toggleSkills);
});
