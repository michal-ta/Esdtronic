var navBut = document.getElementsByClassName("navigation_buttons");
var langFlag = document.getElementsByClassName("navigation_language");

window.addEventListener("resize", function(){
    if(this.window.innerWidth<800){
        navBut.parentNode.removeChild(navBut);
    }
})
