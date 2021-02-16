/* =============================================================== */
// DEALING WITH MENU HEADER
let menu = document.querySelector(".header-stl .menu i");

let navbar = document.querySelector(".nav");

menu.addEventListener("click", function(e) {

    navbar.classList.toggle("open");

});

/* =============================================================== */
// DEALING WITH STICKY HEADER
window.addEventListener("scroll", function() {

    let header = document.querySelector(".header");

    if (this.scrollY > 100) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

/* =============================================================== */
// DEALING WITH SKILLS PROGRESS ANIMATION
let mySkills = document.querySelector(".skills");

window.addEventListener("scroll", function(e) {

    let skillOffsetTop = mySkills.offsetTop;

    let skillOuterHeight = mySkills.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillOffsetTop + skillOuterHeight - windowHeight)) {

        let skills = document.querySelectorAll(".skills-progress .progress .path-prg span");

        skills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });
    }

});

/* =============================================================== */
// DEALING WITH SWITCHING BETWEEN SECTION SMOOTHLY

const bullets = document.querySelectorAll(".bullets-nav .bullet");
const anmScroll = document.querySelectorAll(".header-content .animate-scroll");
const btnScroll = document.querySelectorAll(".hero-content .content button");
const links = document.querySelectorAll(".header-stl .nav li a");

function smoothScroll(element) {
    element.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })

        });

    })
}

smoothScroll(bullets);
smoothScroll(anmScroll);
smoothScroll(btnScroll);
smoothScroll(links);

/* =============================================================== */
// DEALING WITH POP UP BOX

const openBtnModal = document.querySelectorAll("[data-modal-open]");
const closeBtnModal = document.querySelectorAll("[data-modal-close]");

openBtnModal.forEach(button => {

    button.addEventListener("click", function(e) {

        // Create an element
        let overlayBox = document.createElement("div");

        // Add Class To the Overlay Box
        overlayBox.className = "overlay-box";

        // Set the Overlay Box Inside The Body
        document.body.appendChild(overlayBox);

        let modal = document.querySelector(".modal");

        modal.classList.add("show-modal");

    });

});

closeBtnModal.forEach(button => {

    button.addEventListener("click", function(e) {

        // Remove the class from the modal
        let modal = document.querySelector(".modal");
        modal.classList.remove("show-modal");
        // Remove The class of overla box
        document.querySelector(".overlay-box").classList.remove("overlay-box");

    });

});
