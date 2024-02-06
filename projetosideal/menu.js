const menuDiv = document.createElementById('menu mobile');
const btnAnimar = document.createElementById('btn-menu');

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
}