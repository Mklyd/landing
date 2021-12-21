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

x = 30
y = +new Date()

document.querySelector(".minutes").innerHTML = x + ':'
document.querySelector(".seconds").innerHTML = ' ' + y