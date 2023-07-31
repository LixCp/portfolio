'use strict'

// element toggle function

const elemToggleFunction = function (elem) {elem.classList.toggle('active')}

// sticky header
const header = document.querySelector('[data-header]')
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener('scroll' ,function (){
    if(window.scrollY >= 10 ){
        header.classList.add('active')
        goTopBtn.classList.add('active')
    }else{
        header.classList.remove('active')
        goTopBtn.classList.remove('active')
    }
})

// navbar toggle
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]'),
navbar = document.querySelector('[data-navbar]')

navToggleBtn.addEventListener('click',function(){
    elemToggleFunction(navToggleBtn)
    elemToggleFunction(navbar)
    elemToggleFunction(document.body)
})

// skills

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");
for (let i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].addEventListener("click", function () {
  
        elemToggleFunction(toggleBtnBox);
      for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunction(toggleBtns[i]); }
      elemToggleFunction(skillsBox);
  
    });
  }

// theme dark-light

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
    elemToggleFunction(themeToggleBtn);
    if (themeToggleBtn.classList.contains("active")) {
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");
    
        localStorage.setItem("theme", "light_theme");
    }else{
        document.body.classList.add("dark_theme");
        document.body.classList.remove("light_theme");
    
        localStorage.setItem("theme", "dark_theme");
    }
})
// local storage
if (localStorage.getItem("theme") === "light_theme") {
    themeToggleBtn.classList.add("active");
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
  } else {
    themeToggleBtn.classList.remove("active");
    document.body.classList.remove("light_theme");
    document.body.classList.add("dark_theme");
  }