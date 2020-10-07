var distance = $('nav').offset().top,
    $window = $(window);

// console.log("width: " + $window.width())

// $window.scroll(function () {
//     if ($window.width() >= parseInt("786px")) {
//         if ($window.scrollTop() === distance) {
//             // When the navbar reaches the top of the page.
//             $('.div_navigation').css("height", "50px");
//             // $('nav ul').css("margin-top", "5px");
//             $('nav ul li a').css("font-size", "16px");
//         }
//         else {
//             $('nav').css("height", "30px");
//             $('nav ul').css("margin-top", "0px");
//             $('nav ul li a').css("font-size", "12px");
//         }
//     }
// });


// let div_hamburger = document.querySelector('.hamburger');

// div_hamburger.addEventListener('mouseOver', () => {
//     alert('clicked');
//     document.querySelector('body').classList.add('stopScroll');
// })



// Cache DOM

let h1_seeResume = document.querySelector('.section_resumeDropDown h1');
let section_resume = document.querySelector('.section_resume');
let h1_bottomCloseResume = document.querySelector('.section_resume div h1:last-child');

h1_seeResume.addEventListener('click', seeResume);

// h1_seeResume.addEventListener('mousedown', () => {
//     alert("llll");
// })

function seeResume() {
    alert("here");
    h1_seeResume.innerHTML = "Close <i class='icon ri-arrow-up-s-fill'</i>";
    h1_seeResume.removeEventListener('click', seeResume);
    h1_seeResume.addEventListener('click', closeResume);
    h1_bottomCloseResume.addEventListener('click', closeResume);

    section_resume.style.display = "block";

    // section_resume.animate([
    //     // keyframes
    //     { height: 0 },
    //     { height: "100%" }
    // ], {
    //     // timing options
    //     duration: 5,
    //     iterations: 2
    // })

    section_resume.style.height = "100%";
    section_resume.style.padding = "2rem 0";
    // h1_seeResume.style.paddingTop = "2rem";
    h1_seeResume.style.marginBottom = "2rem";


}

function closeResume() {
    h1_seeResume.innerHTML = "See Resume <i class='icon ri-arrow-down-s-fill'</i>";
    h1_seeResume.removeEventListener('click', closeResume);
    h1_seeResume.addEventListener('click', seeResume);


    section_resume.style.height = 0;
    section_resume.style.padding = "0";
    h1_seeResume.style.padding = "0";
}








