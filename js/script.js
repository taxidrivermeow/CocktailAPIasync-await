//DOM elements, listener, buttons etc. - Presentation
(() => {
    const getRandomBtn = document.getElementById('getRandomCocktail');
    const contentRes = document.getElementById('contentRes');

    const dataRepository = new DataRepository();

    getRandomBtn.addEventListener('click', async () => {
        const data = await dataRepository.getRandomCocktail(); //Cocktail
        contentRes.textContent = `${data.name} - ${data.id} - ${data.category} - ${data.alc}`;
    });

})();