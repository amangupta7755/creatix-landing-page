const toggel = document.getElementById("toggle");
const list = document.getElementById("list_item");
const btn = document.getElementById("header_btn");
toggel.addEventListener("click",() =>{
    list.classList.toggle("active");
    btn.classList.toggle("active");
});


// Play Button
const play = document.getElementById("play_btn");
const close = document.getElementById("close_btn");
const modal = document.getElementById("modal");
const frame = document.getElementById("video_frame");

play.addEventListener("click", ()=>{
    modal.classList.add("active");
    frame.src="https://www.youtube.com/embed/LsUdoy7EH7M?autoplay=1";
});
close.addEventListener("click", ()=>{
    modal.classList.remove("active");
    frame.src="";
});
document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape"){
        modal.classList.remove("active");
        frame.src="";
    }
});
modal.addEventListener("click",(e)=>{
    if(e.target === modal){
        modal.classList.remove("active");
        frame.src="";
    }
});


// scroll Animation
const reveals = document.querySelectorAll(".card, .cta, .heading");

window.addEventListener("scroll", ()=>{
    reveals.forEach(el=>{
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});