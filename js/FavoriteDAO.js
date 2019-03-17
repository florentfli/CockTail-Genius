var FavoriteDAO = function () {

    var listeFavorites;

    var initialiser = function () {
        if (!listeFavorites) {
            listeFavorites = [];
        }
    };

    this.listFavorite = function () {
        if (localStorage['fav']) {

            listeFavorites = JSON.parse(localStorage['fav']);
            console.log(listeFavorites);
        }

        return listeFavorites;
    };

    this.addCocktail = function (Cocktail) {
        console.log("Ajout cocktaile favoris : "+Cocktail.strDrink);
        var listeFav = this.listFavorite();
        listeFav.push(Cocktail);
        localStorage['fav'] = JSON.stringify(listeFav);
    };

    initialiser();
};
