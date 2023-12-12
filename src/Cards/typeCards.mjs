//Funcion para agregar filtros 
const main = document.querySelector('main');
import { displayresult } from '../main.mjs';

const cardsByType = async (filters) => {
    console.log('Filtros aplicados:', filters); // Imprimir los filtros aplicados
    main.innerHTML = '';
    const res = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
    const info = await res.json();
    
    let result = info.data;
    //Si hay valor de name en el array de filtros, lo aplica a info
    if (filters.name) {
        result = result.filter(card => card.name.toLowerCase().includes(filters.name)||card.desc.toLowerCase().includes(filters.name));
    }
    //Si hay valor de id en el array de filtros, lo aplica a info
    if(filters.id){
        result = result.filter(card => card.type.toLowerCase().includes(filters.id));
    }
    //Si hay atributo de id en el array de filtros, lo aplica a info
    if (filters.attribute) {
        result = result.filter(card => card.attribute.toLowerCase().includes(filters.attribute));
    }
    //Si hay valor de tipo en el array de filtros, lo aplica a info
    if (filters.type) { 
        result = result.filter(card => card.race.toLowerCase()===(filters.type.toLowerCase()));
    }
    //Si hay valor de clase en el array de filtros, lo aplica a info
    if (filters.monsterClass) {
        result = result.filter(card => card.type.toLowerCase().includes(filters.monsterClass.toLowerCase()));
    }
    //Si hay valor de nivel en el array de filtros, lo aplica a info
    if (filters.level) { 
        result = result.filter(card => card.level === parseInt(filters.level) || card.linkval === parseInt(filters.level));
    }
    //Exporta info con todos los filtros que se hayan aplicado
    displayresult(result);
};


export { cardsByType };
