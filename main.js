let next_review = document.querySelector(".next_review");
let prev_review = document.querySelector(".prev_review")
let slides = document.querySelectorAll(".slide");
let i = 0;

next_review.addEventListener("click", function () {
    
    ++i

    if (i >= slides.length) {    
        slides[i-1].classList.remove("showing");
        i = 0;
        slides[i].classList.add("showing");

    } else {
        slides[i-1].classList.remove("showing");
        slides[i].classList.add("showing");

    }
})
prev_review.addEventListener("click", function () {
    if (i == 0) {
        slides[i].classList.remove("showing")
        i = slides.length
        slides[i - 1].classList.add("showing")
        i--
    } else {
        slides[i].classList.remove("showing");
        slides[i - 1].classList.add("showing");
        i--
    }
    
})

let countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

const x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1550 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 890);
    + minutes + "m "  + seconds + "s ";
    document.getElementById('min').innerHTML = minutes + 'm : ';
    document.getElementById('sec').innerHTML =  seconds + 's';
}, 1000);