import { listProjects } from "./mock/projects.js";

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
                    <h2>${project.nome}</h2>
                    <img src="/assets/github-142-svgrepo-com (1).svg" alt="icon-github">
                </div>
                <h3>Descrição do projeto</h3>
                <p>${project.description}</p>
                <div class="portfolio__project__tecnology">
                    <span>${project.listTec.join(' ')}</span>
                </div>
                <a href="">Ver projeto</a>
                <img class="portfolio__project__image" src=${project.photo} alt="image-project">
            </div>
        `
    })
}
renderProjects(listProjects,".portfolio__projects")

