var FavoriteDAO = function () {
    var listeFavorites;

    var initialiser = function () {
        if (!listeFavorites) {
            listeFavorites = [];
        }
        if (!localStorage['fav']) {
            localStorage.setItem('fav', JSON.stringify(listeFavorites))
        }
    };

    this.listFavorite = function () {
        listeFavorites=JSON.parse(localStorage['fav']);
        return listeFavorites;
    };

    this.addCocktail = function (Cocktail) {
        console.log("Ajout cocktaile favoris : " + Cocktail.strDrink);
        var listeFav = this.listFavorite();
        listeFav.push(Cocktail);
        localStorage['fav'] = JSON.stringify(listeFav);
    };

    this.deleteCocktail = function (id) {
        var listeFav = this.listFavorite();
        for (var i = 0; i < listeFav.length; i++) {
            if (listeFav[i].idDrink == id) {
                listeFav.splice(i, 1);
            }
        }
        localStorage['fav'] = JSON.stringify(listeFav);
    };

    this.isInFavorite = function (id) {
        var listeFav = this.listFavorite();
        for (var i = 0; i < listeFav.length; i++) {
            if (listeFav[i].idDrink == id) {
                console.log(id + " est dans favoris")
                return true;
            }
        }
        return false;
    };


    initialiser();
};
