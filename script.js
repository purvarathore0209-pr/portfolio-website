console.log("Portfolio Started...");

var typed = new Typed(".multiple-text", {
    strings: [
        "Frontend Developer",
        "React Learner",
        "C++ Programmer",
        "Web Designer"
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1200,
    loop: true
});

const themeBtn = document.querySelector(".theme-toggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("dark-mode")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

};
AOS.init({
    duration:1000,
    once:true
});

// Animated Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();

});


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};