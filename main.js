const navToggle=document.querySelector(".nav-toggle");
const linksSlide=document.querySelector(".links_slide")
const rotate90=document.getElementById("rotated")
const dropBouns=document.getElementById("droping")

let i=1;
navToggle.addEventListener('click',function(){

if(i%2==0)
    {
        i++;
        dropBouns.classList.remove("up")
        rotate90.classList.remove("rotates1")
        rotate90.style.transition="1s"
       
    }
    else
    {
        i++;
       dropBouns.classList.add("up")
       rotate90.classList.add("rotates1")



    }

})