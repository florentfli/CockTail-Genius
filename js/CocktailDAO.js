var CocktailDAO = function () {

    this.searchByIngridient = function(ingredient, callback) {
        var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });

        xhr.open("GET", url + ingredient);
        xhr.send(data);
    };

    this.findById = function (id, callback) {
        var url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log("Reponse recherche ingredient : \n\n"+ this.responseText);
                callback(this.responseText);
            }
        });

        xhr.open("GET", url + id);
        xhr.send(data);
    }


    this.searchByCategory = function (category, callback) {
        var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log("Reponse recherche categorie : \n\n"+ this.responseText);
                callback(this.responseText)
            }
        });

        xhr.open("GET", url + category);
        xhr.send(data);
    };


    this.searchByAlcohol = function lister(alcoholic, callback) {
        var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=';

        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText)
            }
        });

        xhr.open("GET", url + alcoholic);
        xhr.send(data);
    };

    this.searchByName = function lister(ingredient, callback) {
        var url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log("Reponse recherche ingredient : \n\n"+ this.responseText);
                callback(this.responseText)
            }
        });

        xhr.open("GET", url + ingredient);
        xhr.send(data);
    };

    this.getCategories = function (callback) {
        var url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log("Reponse recherche ingredient : \n\n" + this.responseText);
                callback(this.responseText)
            }
        });

        xhr.open("GET", url);
        xhr.send(data);
    }

};
