// main.mjs

import { getCharacters } from './Cards/getCards.mjs';
import { setupPagination } from './Pages/paginacion.mjs';
import { cardsByType } from './Cards/typeCards.mjs';

const main = document.querySelector('main');


const reset= document.querySelector('#resetButton');
const monsterFilters = document.getElementById('monsterFilters');
const spellFilters = document.getElementById('spellFilters');
const trapFilters = document.getElementById('trapFilters');
const atributo = document.querySelector('#atributo');
const typo = document.querySelector('#type');
const clase = document.querySelector('#clase');
const nivel = document.querySelector('#nivel');
const spell = document.querySelector('#spellType');
const trap = document.querySelector('#trapType');
const tipoSelect = document.querySelector('#tipo');
const search = document.querySelector('#searchInput');
const type = document.querySelector('#tipo');
const footer = document.querySelector('footer');

function inicio(){
    getCharacters();
    footer.style.display = 'block';
}

inicio();
const { initPagination } = setupPagination(getCharacters);
initPagination();


const filters = {
    id: null,
    name: null,
    attribute: null,
    type: null,
    monsterClass: null,
    level: null,
};

reset.addEventListener('click', () => {
    inicio();
    monsterFilters.style.display = 'none';
    spellFilters.style.display = 'none';
    trapFilters.style.display = 'none';
    reset.style.display = 'none';
    filters.id = null;
    filters.name = null;
    filters.attribute = null;
    filters.type = null;
    filters.monsterClass = null;
    filters.level = null;
    filters.spellType = null;
    filters.trapType = null;
    search.value = '';
    tipoSelect.value = 'null';
    atributo.value = 'null';
    typo.value = 'null';
    clase.value = 'null';
    nivel.value = 'null';
    spell.value = 'null';
    trap.value = 'null';
})

type.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        footer.style.display = 'none';
        filters.id= null;
        cardsByType(filters);
    } else {
        footer.style.display = 'none';
        filters.id= e.target.value;
        cardsByType(filters);
}});

tipoSelect.addEventListener('change', () => {
    const selectedType = tipoSelect.value;

    filters.type = null;
    filters.spellType = null;  
    filters.trapType = null;   
    monsterFilters.style.display = 'none';
    spellFilters.style.display = 'none';
    trapFilters.style.display = 'none';
    reset.style.display = 'none';

    if (selectedType === 'monster') {
        footer.style.display = 'none';
        monsterFilters.style.display = 'block';
        reset.style.display = 'block';
    } else if (selectedType === 'spell') {
        footer.style.display = 'none';
        spellFilters.style.display = 'block';
        reset.style.display = 'block';
    } else if (selectedType === 'trap') {
        footer.style.display = 'none';
        trapFilters.style.display = 'block';
        reset.style.display = 'block';
    }

    cardsByType(filters);
});


async function displayresult(result) {
    main.innerHTML = '';
    result.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `<img src="${card.card_images[0].image_url}" alt="${card.name}">`;
        main.appendChild(cardElement); 
    });
}


search.addEventListener('blur', (e) => {
    if (e.target.value === "") {
        inicio();
    } else {
        footer.style.display = 'none';
        filters.name = e.target.value;
        cardsByType(filters);
    }
});

search.addEventListener('keydown', (e) => {
    if (e.target.value === "") {
        inicio();
    } else if (e.key === "Enter") {
        footer.style.display = 'none';
        filters.name = e.target.value;
        cardsByType(filters);
    } else if (e.key === "Escape") {
        e.target.value = "";  
        inicio();
    }
});

atributo.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        footer.style.display = 'none';
        filters.attribute = null;
        cardsByType(filters);
    } else {
        footer.style.display = 'none';
        filters.attribute = e.target.value;
        cardsByType(filters);
    }
});


typo.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        footer.style.display = 'none';
        filters.type = null;
        cardsByType(filters);
    }else{
        footer.style.display = 'none';
        filters.type = e.target.value;
        cardsByType(filters);
    }
    
});

clase.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        footer.style.display = 'none';
        filters.monsterClass = null;
        cardsByType(filters);
    }else{
        footer.style.display = 'none';
        filters.monsterClass = e.target.value;
        cardsByType(filters);
    }
});

nivel.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        footer.style.display = 'none';
        filters.level = null;
        cardsByType(filters);
    }else{
        footer.style.display = 'none';
        filters.level = e.target.value;
        cardsByType(filters);
    } 
});

spell.addEventListener('change', (e) => {
    console.log(e.target.value); 
    if(e.target.value === "null"){
        footer.style.display = 'none';
        filters.type = null;
        cardsByType(filters);
    } else {
        footer.style.display = 'none';
        filters.type = e.target.value;
        cardsByType(filters);
    }
});

trap.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        filters.trapType = null;
    } else {
        footer.style.display = 'none';
        filters.trapType = e.target.value;
    }
    cardsByType(filters);
});


export {displayresult}