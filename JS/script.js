const navigation = document.querySelector(".navigation");
const navigationLanguage = document.querySelector(".navigation_language");
const addedbutton=document.querySelector(".added");
const burgerMenu=document.querySelector(".navigation_buttons_burger");
const navButons=document.querySelector(".navigation_buttons");

/* showing flags inside of mobile version */
addedbutton.addEventListener("click" ,function(){
    navigationLanguage.classList.toggle("active");
});

/*togle burger menu */
burgerMenu.addEventListener("click", function(){
    console.log("clicked on burger menu");
    burgerMenu.classList.toggle("active");
    navButons.classList.toggle("actived");
})

navButons.addEventListener("click", function(){
    burgerMenu.classList.toggle("active");
    navButons.classList.toggle("actived");
})
