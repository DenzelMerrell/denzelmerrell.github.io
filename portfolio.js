let toggler = document.getElementsByClassName("toggler")[0];

let div_navigation = document.getElementsByClassName("div_navigation")[0];

window.addEventListener('resize', () => {
    if (window.innerWidth <= 813)
        div_navigation.style.zIndex = 0;
    else
        div_navigation.style.zIndex = 20;
});


toggler.addEventListener("click", () => {
    let div_navigation = document.getElementsByClassName("div_navigation")[0];
    if (!toggler.checked)
        div_navigation.style.zIndex = 0;
    else
        div_navigation.style.zIndex = 20;
})

