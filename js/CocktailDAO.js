var CocktailDAO = function () {

    this.searchByIngridient = function lister(ingredient, callback) {
        var url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log("Reponse recherche ingredient : \n\n"+ this.responseText);
                callback(this.responseText);
            }
        });

        xhr.open("GET", url + ingredient);
        xhr.send(data);
    };



    this.searchByAlcohol = function lister(ingredient, callback) {
        var url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=';

        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log("Reponse recherche ingredient : \n\n"+ this.responseText);
            }
        });

        xhr.open("GET", url + ingredient);
        xhr.send(data);
    };

    this.searchByName = function lister(ingredient, callback) {
        var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log("Reponse recherche ingredient : \n\n"+ this.responseText);
            }
        });

        xhr.open("GET", url + ingredient);
        xhr.send(data);
    };

};
