var typed = new Typed(".auto-input",{
     strings: ["Web Desiner","Web Developer","Computer Engineer"],
     typeSpeed: 100,
     backSpeed: 30,
     loop: true
})

let nav = document.querySelector("nav")
window.onscroll=()=>{
   if(window.scrollY>=100){
       nav.classList.add("active")
   }
   else{
        nav.classList.remove("active")
    }
}



/*skill-section-start*/

/*html-skill-start*/
{let number = document.getElementById("number-1");
let counter = 0;
setInterval(() => {
    if(counter == 90){
        clearInterval();
    }
    else {
        counter +=1;
        number.innerHTML = counter + "%";
    }  
},20);
}
/*html-skill-end*/

/*php-skill-start*/
{let number = document.getElementById("number-2");
let counter = 0;
setInterval(() => {
    if(counter == 60){
        clearInterval();
    }
    else {
        counter +=1;
        number.innerHTML = counter + "%";
    }  
},28);
}
/*php-skill-end*/

/*java-script-skill-start*/
{let number = document.getElementById("number-3");
let counter = 0;
setInterval(() => {
    if(counter == 70){
        clearInterval();
    }
    else {
        counter +=1;
        number.innerHTML = counter + "%";
    }  
},25);
}
/*java-script-skill-end*/

/*wordpress-skill-start*/
{let number = document.getElementById("number-4");
let counter = 0;
setInterval(() => {
    if(counter == 85){
        clearInterval();
    }
    else {
        counter +=1;
        number.innerHTML = counter + "%";
    }  
},20);
}
/*wordpress-skill-end*/

/*skill-section-end*/


/*work-section-start*/
$(".work-section-btn").click(function(){
    $(".work-section .more-img").slideToggle("slow")
})
/*work-section-end*/
 
/*--contact-section-start--*/

/*--contact-section-end--*/