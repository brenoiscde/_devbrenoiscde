function removeLi(){
    if(window.innerWidth <= 1000){
        const liDepoimento = document.querySelector('ul li:nth-child(6)');
        if(liDepoimento){
            liDepoimento.remove()
        }
    }
    if(window.innerWidth <= 750){
        const liCarreira = document.querySelector('ul li:nth-child(5)');
        if(liCarreira){
            liCarreira.remove()
        }
    }
    if(window.innerWidth <= 635){
        const liHabilidades = document.querySelector('ul li:nth-child(3)');
        if(liHabilidades){
            liHabilidades.remove()
        }
    }
}
removeLi();
window.addEventListener('resize', removeLi);