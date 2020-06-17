function hamburgerToggle() {
    $('.hamburger').click(function () {
        $('.menuItems').toggle()
    })
}

// When the user scrolls the page, execute function
window.onscroll = function() {
    navScroll()
}


var navbar = document.querySelector(".customNav")
var sticky = navbar.offsetTop

function navScroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")

    } else {
        navbar.classList.remove("sticky")
    }
}

hamburgerToggle()