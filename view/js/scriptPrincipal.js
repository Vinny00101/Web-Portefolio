let ButtonOpenMenu = document.getElementById('OpenMenu');
let MenuOpen = document.getElementById('infor-Menu');

var MediaQuery = window.matchMedia('(max-width: 800px)');


const verificarOpenMenu = (e) => {
    if (!e.matches){
        ButtonOpenMenu.innerHTML = '<i class="fas fa-bars"></i>';
        MenuOpen.style.display = 'none'; 
    }
}

MediaQuery.addListener(verificarOpenMenu);

const OpenMenu = () => {
    
    if (MenuOpen.style.display == 'flex'){
        ButtonOpenMenu.innerHTML = '<i class="fas fa-bars"></i>';
        MenuOpen.style.display = 'none';
    }else{
        ButtonOpenMenu.innerHTML = '<i class="fas fa-times"></i>';
        MenuOpen.style.display = 'flex' 
    }
}

const navegation = (event, divID) => {
    event.preventDefault();
    div = document.getElementById(divID);
    if(div){
        div.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, null, ' ');
    }
}