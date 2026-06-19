/* ==========================================
   Wedding Invitation
   Veronica & Kirill
========================================== */

// ---------------- Loader ----------------

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1200);

});

// ---------------- Countdown ----------------

const weddingDate = new Date("2026-06-25T15:40:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateTimer() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const s = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    days.textContent = String(d).padStart(2, "0");
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");

}

updateTimer();

setInterval(updateTimer,1000);

// ---------------- Reveal Animation ----------------

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("reveal");

observer.observe(section);

});

// ---------------- Smooth Scroll ----------------

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// ---------------- RSVP ----------------

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Спасибо! Ваш ответ успешно отправлен ❤️");

form.reset();

});

// ---------------- Floating Hearts ----------------

function createHeart(){

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=4+Math.random()*4+"s";

heart.style.fontSize=16+Math.random()*20+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,1800);

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

if(playing){

music.pause();

musicBtn.innerHTML="🎵";

}else{

music.play();

musicBtn.innerHTML="⏸";

}

playing=!playing;

}