const main = document.querySelector('main');
import { displayresult } from '../main.mjs';

const cardsByType = async (filters) => {
    console.log('Filtros aplicados:', filters); // Imprimir los filtros aplicados
    main.innerHTML = '';
    const res = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
    const info = await res.json();
    
    let result = info.data;

    if (filters.name) {
        console.log('Filtrando por nombre:', filters.name); 
        result = result.filter(card => card.name.toLowerCase().includes(filters.name)||card.desc.toLowerCase().includes(filters.name));
    }
    if(filters.id){
        console.log('Filtrando por ID:', filters.id); 
        result = result.filter(card => card.type.toLowerCase().includes(filters.id));
    }
    if (filters.attribute) {
        console.log('Filtrando por atributo:', filters.attribute); 
        result = result.filter(card => card.attribute.toLowerCase().includes(filters.attribute.toLowerCase()));
    }

    if (filters.type) {
        console.log('Filtrando por tipo:', filters.type); 
        result = result.filter(card => card.race.toLowerCase()===(filters.type.toLowerCase()));
    }

    if (filters.monsterClass) {
        console.log('Filtrando por clase:', filters.monsterClass); 
        result = result.filter(card => card.type.toLowerCase().includes(filters.monsterClass.toLowerCase()));
    }

    if (filters.level) {
        console.log('Filtrando por nivel:', filters.level); 
        result = result.filter(card => card.level === parseInt(filters.level) || card.linkval === parseInt(filters.level));
    }

    displayresult(result);
};


export { cardsByType };
