const menuDiv=document.getElementById("menu-mobile"),btnAnimar=document.getElementById("btn-menu");btnAnimar.addEventListener("click",toggleMenu);function toggleMenu(){menuDiv.classList.toggle("abrir"),btnAnimar.classList.toggle("ativar")}function animarMenu(){const a=document.getElementById("btn-menu");a.classList.toggle("ativar")}
