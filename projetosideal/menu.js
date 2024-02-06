const btnMobile = document.getElementById("btn-mobile");
const menuDesktop = document.querySelector(".menu.desktop");

function toggleMenu() {
    menuDesktop.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
