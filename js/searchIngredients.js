var searchButton = document.getElementById("searchButton");
var searchInput = document.getElementById("searchInput");

var cocktailDAO = new CocktailDAO();
var recherche = null;

var finalHtml = "";

var divResult = document.getElementById("resultSearchIngredients");


var listenerClickSearchIngredients = function () {
    recherche = document.getElementById("searchInput").value;
    console.log("Ingredient : " + recherche);
    searchByIngredients(recherche)
};

var callbackIngredient = function (res) {

    var resultatRechercheIngredient = JSON.parse(res)['drinks'];

    if (resultatRechercheIngredient == null) {
        divResult.innerHTML = "<h5>No cocktail found with the ingrdient <i>" + recherche + "</i>.</h5>";
    } else if (recherche == "") {
        while (divResult.firstChild) {
            divResult.removeChild(divResult.firstChild);
        }
    } else {

        var html = '';
        var listeHtml = '<ul>';
        var nbrIngredient = 0;
        var catHtml = '';
        var finHtml = '';
        finalHtml = '';

        //console.log("Nombre de resultat : " + resultatRechercheIngredient.length);

        for (var i = 0; i < resultatRechercheIngredient.length; i++) {

            html = '';
            listeHtml = '<ul>';
            catHtml = '';
            finHtml = '';

            if (resultatRechercheIngredient[i].strIngredient1 != "") nbrIngredient = 1;
            if (resultatRechercheIngredient[i].strIngredient2 != "") nbrIngredient = 2;
            if (resultatRechercheIngredient[i].strIngredient3 != "") nbrIngredient = 3;
            if (resultatRechercheIngredient[i].strIngredient4 != "") nbrIngredient = 4;
            if (resultatRechercheIngredient[i].strIngredient5 != "") nbrIngredient = 5;
            if (resultatRechercheIngredient[i].strIngredient6 != "") nbrIngredient = 6;
            if (resultatRechercheIngredient[i].strIngredient7 != "") nbrIngredient = 7;
            if (resultatRechercheIngredient[i].strIngredient8 != "") nbrIngredient = 8;
            if (resultatRechercheIngredient[i].strIngredient9 != "") nbrIngredient = 9;
            if (resultatRechercheIngredient[i].strIngredient10 != "") nbrIngredient = 10;
            if (resultatRechercheIngredient[i].strIngredient11 != "") nbrIngredient = 11;
            if (resultatRechercheIngredient[i].strIngredient12 != "") nbrIngredient = 12;
            if (resultatRechercheIngredient[i].strIngredient13 != "") nbrIngredient = 13;
            if (resultatRechercheIngredient[i].strIngredient14 != "") nbrIngredient = 14;
            if (resultatRechercheIngredient[i].strIngredient15 != "") nbrIngredient = 15;

            //console.log("Nombre d'ingredients : " + nbrIngredient)

            html += '<div class="card mb-4 mx-auto" style="min-width: 18rem; max-width: 18rem;">' +
                '       <img src="' + resultatRechercheIngredient[i].strDrinkThumb + '" class="card-img-top" alt="' + resultatRechercheIngredient[i].strDrink + '">\n' +
                '       <div class="card-body text-center">\n' +
                '           <h5 class="card-title">' + resultatRechercheIngredient[i].strDrink + '</h5>\n' +
                '           <div class="" style="display: flex;' +
                '    align-items: center;">' +
                '               <button type="button" class="btn btn-sm btn-secondary mx-auto" data-toggle="modal" data-target="#modalId' + resultatRechercheIngredient[i].idDrink + '">Details</button>' +
                '               <p class="fav-hover fav-non-select mx-auto"><span><i class="far fa-heart"></i></span></p>' +
                '           </div>' +
                '       </div>' +
                '   </div>' +

                '<div class="modal fade" id="modalId' + resultatRechercheIngredient[i].idDrink + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">\n' +
                '  <div class="modal-dialog modal-dialog-centered" role="document">' +
                '    <div class="modal-content">' +
                '      <div class="modal-header">' +
                '        <h5 class="modal-title" id="exampleModalLongTitle">' + resultatRechercheIngredient[i].strDrink + '</h5>\n' +
                '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                '          <span aria-hidden="true">&times;</span>\n' +
                '        </button>\n' +
                '      </div>\n' +
                '      <div class="modal-body">\n' +
                '         <img src="' + resultatRechercheIngredient[i].strDrinkThumb + '" class="rounded mx-auto img-responsive w-100" alt="' + resultatRechercheIngredient[i].strDrink + '">' +
                '          <p class="mt-3 text-justify text-indent">' + resultatRechercheIngredient[i].strInstructions + '</p>' +
                '      <hr>' +
                '        <h5>Ingredients</h5><br>';
            /*'      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</div>';*/


            var compteur = 0;
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient1 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheIngredient[i].strMeasure1 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient2 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheIngredient[i].strMeasure2 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient3 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheIngredient[i].strMeasure3 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient4 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheIngredient[i].strMeasure4 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient5 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheIngredient[i].strMeasure5 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient6 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheIngredient[i].strMeasure6 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient7 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheIngredient[i].strMeasure7 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient8 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheIngredient[i].strMeasure8 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient9 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheIngredient[i].strMeasure9 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient10 + ' <b><span style="margin-left: 2em">  ' + resultatRechercheIngredient[i].strMeasure10 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient11 + ' <b><span style="margin-left: 2em">  ' + resultatRechercheIngredient[i].strMeasure11 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient12 + ' <b><span style="margin-left: 2em">' + resultatRechercheIngredient[i].strMeasure12 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient13 + ' <b><span style="margin-left: 2em">' + resultatRechercheIngredient[i].strMeasure13 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient14 + ' <b><span style="margin-left: 2em">' + resultatRechercheIngredient[i].strMeasure14 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheIngredient[i].strIngredient15 + ' <b><span style="margin-left: 2em">' + resultatRechercheIngredient[i].strMeasure15 + '</span></b></li>';
            }

            listeHtml += '</ul>' +
                '<hr>';

            catHtml = '<div class="text-center"> <span class="badge badge-pill badge-primary">' + resultatRechercheIngredient[i].strCategory + '</span>' +
                '<span class="badge badge-pill badge-danger ml-3">' + resultatRechercheIngredient[i].strAlcoholic + '</span></div>';

            finHtml = '</div>\n' +
                '    </div>\n' +
                '  </div>\n' +
                '</div>';

            finalHtml += html + listeHtml + catHtml + finHtml;

        }

        while (divResult.firstChild) {
            divResult.removeChild(divResult.firstChild);
        }
        divResult.innerHTML = finalHtml;
    }
};

var searchByIngredients = function (text) {
    cocktailDAO.searchByIngridient(text, callbackIngredient)
};

var typeHandler = function (e) {
    searchInput.innerHTML = e.target.value;
    listenerClickSearchIngredients();
};

searchInput.addEventListener('input', typeHandler);
searchInput.addEventListener('propertychange', typeHandler);

searchInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        listenerClickSearchIngredients();
    }
});
searchButton.addEventListener("click", listenerClickSearchIngredients);
