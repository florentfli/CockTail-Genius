var searchButton = document.getElementById("searchButton");
var searchInput = document.getElementById("searchInput");

var cocktailDAO = new CocktailDAO();

var listenerClickSearchIngredients = function () {
    var searchText = searchInput.value;
    alert("Recherche ingredient : " + searchText)
    console.log("Ingredient : " + searchText);

    searchByIngredients(searchText)
};


var callbackIngredient = function (res) {
    var resultatRechercheIngredient = JSON.parse(res)['drinks'];

    if (resultatRechercheIngredient == null) {
        document.getElementById("resultSearchIngredients").innerHTML = "<h5>Aucun Cocktail ne corespond à votre recherche.</h5>";
    } else {
        var html = '';

        console.log("Nombre de resultat : " + resultatRechercheIngredient.length);
        for (var i = 0; i < resultatRechercheIngredient.length; i++) {
            html += '<div class="card mb-4 mx-auto" style="min-width: 18rem; max-width: 18rem;">' +
                '  <img src="' + resultatRechercheIngredient[i].strDrinkThumb + '" class="card-img-top" alt="' + resultatRechercheIngredient[i].strDrink + '">\n' +
                '  <div class="card-body">\n' +
                '    <h5 class="card-title">' + resultatRechercheIngredient[i].strDrink + '</h5>\n' +
                '    <p class="card-text text-align-center">' + resultatRechercheIngredient[i].strInstructions + '</p>\n' +
                '    <a href="../html/detail.html?id=' + resultatRechercheIngredient[i].idDrink + '" class="btn btn-primary">Detail</a>\n' +
                '  </div>\n' +
                '</div>';
        }
        document.getElementById("resultSearchIngredients").innerHTML = html;
    }

    console.log("Finit");
};

var searchByIngredients = function (text) {
    cocktailDAO.searchByIngridient(text, callbackIngredient)
};

document.querySelector('#searchInput').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        listenerClickSearchIngredients();
    }
});
searchButton.addEventListener("click", listenerClickSearchIngredients);
