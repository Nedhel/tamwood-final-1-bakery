//This function is for open the modal menu when is a small device
function openMenu(x) {
    x.classList.toggle("change");
    document.getElementById("menusmall").classList.toggle("show");
}

function changeTestimonial(n) {
    let testimonials = document.querySelectorAll(".testimonial");
    let current = null;
    let flag = true;
    testimonials.forEach((testimonial, index) => {
        if (testimonial.classList.contains("show") && flag) {
            current = index + n;
            if (current >= 0 && current <= 2) {
                testimonials[index].classList.remove("show");
                testimonials[current].classList.add("show");
                flag = false;
            }
        }
    });
}

//When the page is loaded I add the events
window.addEventListener("load", () => {
    document.getElementById("banner-img").style.transform = "scale(100%)";
    let currenY = 0;
    //This events works when you use the scroll
    window.addEventListener("scroll", () => {
        let y = window.scrollY;
        if (y < currenY) {
            document.getElementById("navbar").style.transform =
                "translateY(0px)";
            currenY = y;
        } else {
            document.getElementById("navbar").style.transform =
                "translateY(-150px)";

            currenY = y;
        }
        if (y == 0) {
            console.log(y);
            document.getElementById("banner-img").style.transform =
                "scale(100%)";
        } else {
            document.getElementById("banner-img").style.transform =
                "scale(110%)";
        }
    });
});
