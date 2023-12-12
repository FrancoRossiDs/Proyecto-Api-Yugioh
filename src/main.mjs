// Imports al main.mjs
import { getCharacters } from './Cards/getCards.mjs';
import { setupPagination } from './Pages/paginacion.mjs';
import { cardsByType } from './Cards/typeCards.mjs';

const main = document.querySelector('main');

//Referencias
const reset = document.querySelector('#resetButton');
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

//Funcion para mostrar todas las cartas y mostrar los botones de cambiar entre páginas
function inicio() {
    getCharacters();
    footer.style.display = 'block';
}
//Inicializacion del paginado inicial
inicio();
const { initPagination } = setupPagination(getCharacters);
initPagination();

//Array de los filtros inicializado como null
const filters = {
    id: null,
    name: null,
    attribute: null,
    type: null,
    monsterClass: null,
    level: null,
};

//Escucha del evento del boton Reset, resetea el valor del buscador y de los filtros
reset.addEventListener('click', () => {
    inicio();
    //Reset de los filtros anteriores y justo a sus valores
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

//Escucha del evento del cambio del id de la carta
type.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        footer.style.display = 'none';
        filters.id = null;
        cardsByType(filters);
    } else {
        footer.style.display = 'none';
        filters.id = e.target.value;
        cardsByType(filters);
    }
});

//Escucha del evento del cambio del filtro de id=tipo(Mosntruo, Magia, Trampa)
tipoSelect.addEventListener('change', () => {
    const selectedType = tipoSelect.value;

    filters.type = null;
    filters.spellType = null;
    filters.trapType = null;
    monsterFilters.style.display = 'none';
    spellFilters.style.display = 'none';
    trapFilters.style.display = 'none';
    reset.style.display = 'none';

    //adaptacion del codigo ante cada opcion, se agregan mas filtros y se quitan los otros
    if (selectedType === 'monster') {
        footer.style.display = 'none';
        monsterFilters.style.display = 'block';
        reset.style.display = 'block';
    } else if (selectedType === 'spell') {
        filters.attribute = null;
        filters.monsterClass = null;
        filters.level = null;
        footer.style.display = 'none';
        spellFilters.style.display = 'block';
        reset.style.display = 'block';
    } else if (selectedType === 'trap') {
        filters.attribute = null;
        filters.monsterClass = null;
        filters.level = null;
        footer.style.display = 'none';
        trapFilters.style.display = 'block';
        reset.style.display = 'block';
    }

    cardsByType(filters);
});

//Funcion para mostrar las cartas filtrados con sus filtros
async function displayresult(result) {
    main.innerHTML = '';
    result.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `<img src="${card.card_images[0].image_url}" alt="${card.name}">`;
        main.appendChild(cardElement);
    });
}

//Escucha del evento cuando se ingresa un valor a la barra de búsqueda y se presiona el botón de buscar
search.addEventListener('blur', (e) => {
    if (e.target.value === "") {
        inicio();
    } else {
        //Al ingresar un valor en la barra de busqueda se resetean los filtros 
        filters.attribute = null;
        filters.monsterClass = null;
        filters.level = null;
        filters.type = null;
        filters.spellType = null;
        filters.trapType = null;
        tipoSelect.value = 'null';
        atributo.value = 'null';
        typo.value = 'null';
        clase.value = 'null';
        nivel.value = 'null';
        spell.value = 'null';
        trap.value = 'null';
        footer.style.display = 'none';
        filters.name = e.target.value;
        cardsByType(filters);
    }
});

//Escucha del evento cuando se ingresa un valor a la barra de búsqueda y se presiona el Enter
search.addEventListener('keydown', (e) => {
    if (e.target.value === "") {
        inicio();
    } else if (e.key === "Enter") {
        //Al ingresar un valor en la barra de busqueda se resetean los filtros 
        filters.attribute = null;
        filters.monsterClass = null;
        filters.level = null;
        filters.type = null;
        filters.spellType = null;
        filters.trapType = null;
        tipoSelect.value = 'null';
        atributo.value = 'null';
        typo.value = 'null';
        clase.value = 'null';
        nivel.value = 'null';
        spell.value = 'null';
        trap.value = 'null';
        footer.style.display = 'none';
        filters.name = e.target.value;
        cardsByType(filters);
    } else if (e.key === "Escape") {
        e.target.value = "";
        inicio();
    }
});

//Escucha del evento cuando se ingresa el valor del atributo de la carta
atributo.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        //Se quita el footer y se actualiza el array de los filtros y se envia al filtro de las paginas
        footer.style.display = 'none';
        filters.attribute = null;
        cardsByType(filters);
    } else {
         //Se quita el footer y se actualiza el array de los filtros y se envia al filtro de las paginas
        footer.style.display = 'none';
        filters.attribute = e.target.value;
        cardsByType(filters);
    }
});

//Escucha del evento cuando se ingresa el valor del tipo de la carta
typo.addEventListener('change', (e) => {
    if (e.target.value === "null") {
         //Se quita el footer y se actualiza el array de los filtros y se envia al filtro de las paginas
        footer.style.display = 'none';
        filters.type = null;
        cardsByType(filters);
    } else {
         //Se quita el footer y se actualiza el array de los filtros y se envia al filtro de las paginas
        footer.style.display = 'none';
        filters.type = e.target.value;
        cardsByType(filters);
    }

});

//Escucha del evento cuando se ingresa el valor de la clase de la carta
clase.addEventListener('change', (e) => {
    if (e.target.value === "null") {
         //Se quita el footer y se actualiza el array de los filtros y se envia al filtro de las paginas
        footer.style.display = 'none';
        filters.monsterClass = null;
        cardsByType(filters);
    } else {
         //Se quita el footer y se actualiza el array de los filtros y se envia al filtro de las paginas
        footer.style.display = 'none';
        filters.monsterClass = e.target.value;
        cardsByType(filters);
    }
});

//Escucha del evento cuando se ingresa el valor del nivel de la carta
nivel.addEventListener('change', (e) => {
    if (e.target.value === "null") {
         //Se quita el footer y se actualiza el array de los filtros y se envia al filtro de las paginas
        footer.style.display = 'none';
        filters.level = null;
        cardsByType(filters);
    } else {
         //Se quita el footer y se actualiza el array de los filtros y se envia al filtro de las paginas
        footer.style.display = 'none';
        filters.level = e.target.value;
        cardsByType(filters);
    }
});

//Escucha del evento cuando se ingresa el subfiltro de las cartas mágicas
spell.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value === "null") {
        footer.style.display = 'none';
        filters.type = null;
        cardsByType(filters);
    } else {
         //Se quita el footer y se actualiza el array de los filtros y se envia al filtro de las paginas
        footer.style.display = 'none';
        filters.type = e.target.value;
        cardsByType(filters);
    }
});

//Escucha del evento cuando se ingresa el subfiltro de las cartas trampa
trap.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        footer.style.display = 'none';
        filters.type = null;
        cardsByType(filters);
    } else {
         //Se quita el footer y se actualiza el array de los filtros y se envia al filtro de las paginas
        footer.style.display = 'none';
        filters.type = e.target.value;
        cardsByType(filters);
    }
    cardsByType(filters);
});

//Export de la funcion para imprimir las cartas para recibir los filtros
export { displayresult }
