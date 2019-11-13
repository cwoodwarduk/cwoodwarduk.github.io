function hamburgerToggle() {
    $('.hamburger').click(function () {
        $('.menuItems').toggle()
    })
}

// When the user scrolls the page, execute function
window.onscroll = function() {
    navScroll()
}


var navbar = document.querySelector(".navbar")
var sticky = navbar.offsetTop
function navScroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")

    } else {
        navbar.classList.remove("sticky")
    }
}

//get button
var emailButton = document.querySelector('.email')
//add event listener
    emailButton.addEventListener('click', function(e) {
        //find the element that has the text you want.
        var content = e.target.textContent;

        // try {
        //     // Now that we've selected the text, execute the copy command
        // var copyTo = document.createElement('<textarea>')
        // copyTo.value = emailButton
        // document.body.appendChild(copyTo)
        // copyTo.select()
        document.execCommand('copy')
        console.log(content)
        // document.removeChild(copyTo)
    })

hamburgerToggle()