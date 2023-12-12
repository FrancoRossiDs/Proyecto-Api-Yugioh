// Funcion para paginar las cartas solo cuando son todas, sin filtro
const setupPagination = (getCharacters) => {
    let currentPage = 1;

    const updatePage = (page) => {
        currentPage = page;
        getCharacters(currentPage);
    };

    const initPagination = () => {
        const prevButton = document.querySelector('#prevButton');
        const nextButton = document.querySelector('#nextButton');

        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                updatePage(currentPage - 1);
            }
        });

        nextButton.addEventListener('click', () => {
            const totalPages = 10; 
            if (currentPage < totalPages) {
                updatePage(currentPage + 1);
            }
        });
    };

    return { initPagination };
};

export { setupPagination };
