// Funcion para imprimir todas las cartas, sin filtro
const getCharacters = async (page = 1) => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    const cardsPerPage = 52; 
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    const res = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
    const info = await res.json();

    const cardsToDisplay = info.data.slice(start, end);
    //Crear div, se agrega carta y le da la clase 'card'
    cardsToDisplay.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <img src="${card.card_images[0].image_url}" alt="${card.name}">
        `;

        main.appendChild(cardElement);
    });
};

export { getCharacters };

