// Domain - repository, rules of getting and data management
class DataRepository {
    async getRandomCocktail() {
        // fetch ...
        const responseData = await Api.getRandom();
        return new Cocktail(responseData);
    }
}

class FakeRepository {
    async getRandomCocktail(){
        const responseData = await FakeApi.getRandom();
        return new Cocktail(responseData);
    }
}