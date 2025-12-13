const grid = document.querySelector('.work_grid');

function criaDiv(){
    const criarDiv = document.createElement('div');
    return criarDiv;
}

const gridWorks = [ //here will add my projects 
{name: 'hematologicCount', link: "#", backrgound_img: "#"},
{name: 'passwordGenerator', link: "#", backrgound_img: "#"},
];

document.addEventListener('DOMContentLoaded', function(){
    for(let i = 0; i < gridWorks.length; i++){
        
    let {name, link, backrgound_img} = gridWorks[i];
    let workWindow = criaDiv();
    grid.appendChild(workWindow);
    workWindow.style.backgroundImage = backrgound_img;

    }
});