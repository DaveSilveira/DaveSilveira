const grid = document.querySelector('.work_grid')
grid.innerHTML = '<p>teste</p>'

function criaDiv(){
    const criarDiv = document.createElement('div');
    return criarDiv;
}

const gridWorks = [
{name: 'hematologicCount', link: "#", backrgound_img: "#"},
{name: 'passwordGenerator', link: "#", backrgound_img: "#"},
]

grid.addEventListener('onload', function(){
    grid.innerHTML = 'teste2'
});