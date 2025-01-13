import { listProjects } from "./mock/projects.js";

const iconTheme = document.querySelector('.icon-theme');
const buttonChangeTheme = document.querySelector('.button-theme');
const html = document.querySelector('html');
const iconInstaHome = document.querySelector('.insta-home'); 
const inconLikedinHome = document.querySelector('.linkedin-home');
const iconGitHub = document.querySelector('.github-home');

buttonChangeTheme.addEventListener('click', ()=>{
    let srcImage = iconTheme.getAttribute('src');
    if (srcImage == '/assets/sun-2-svgrepo-com.svg'){
        html.setAttribute('theme', 'light');
        iconTheme.setAttribute('src', "/assets/moon-svgrepo-com.svg");
        iconInstaHome.setAttribute('src', '/assets/instagram-black.svg')
        inconLikedinHome.setAttribute('src', '/assets/linkedin-black-com.svg');
        iconGitHub.setAttribute('src', '/assets/github-black.svg')
    }
    else{
        html.setAttribute('theme', 'dark');
        iconTheme.setAttribute('src', "/assets/sun-2-svgrepo-com.svg");
        iconInstaHome.setAttribute('src', '/assets/instagram-svgrepo-com.svg')
        inconLikedinHome.setAttribute('src', '/assets/linkedin-svgrepo-com.svg');
        iconGitHub.setAttribute('src', '/assets/github.svg')
    }
}) 

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

function renderProjects(projects, divProjects){
    let divProjetcts = document.querySelector(divProjects);
    divProjetcts.innerHTML += projects.map((project)=>{
        return`
            <div class="portfolio__project">
                <div class="portfolio__project__header">
                    <h2 class="portfolio__header__title">${project.nome}</h2>
                    <a href=${project.linkGihubProject} target="_blank"><img src="/assets/github.svg" alt="icon-github"></a>
                </div>
                <h3>Descrição do projeto</h3>
                <p>${project.description}</p>
                <div class="portfolio__project__tecnology">
                    <span>${project.listTec.join(" ")}</span>
                </div>
                <a class="portfolio__project__ver-projeto" href=${project.linkProject} target= "_blank" >Ver projeto</a>
                <img class="portfolio__project__image" src=${project.photo} alt="image-project">
            </div>
        `
    })
}
renderProjects(listProjects,".portfolio__projects");


