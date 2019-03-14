var searchButton = document.getElementById("searchButton");
var searchInput = document.getElementById("searchInput");

var cocktailDAO = new CocktailDAO();
var recherche = null;

var finalHtml = "";

var divResult = document.getElementById("resultSearchName");


var listenerClickSearchName = function () {
    recherche = document.getElementById("searchInput").value;
    console.log("Name : " + recherche);
    searchByName(recherche)
};

var callBackFavClick = function (id) {
    var voiture = JSON.parse('{"favorites":{"id" : 1233}}');
    localStorage.setItem('fav', JSON.stringify(voiture));
    console.log("Callback click fav sur cocktail id : " + id);

    if (localStorage.getItem("fav") == null || localStorage.getItem("fav").length == 0) {
        console.log("Local storage vide");

        localStorage.setItem("fav", "");
    }

    var listeIdFavExistant = JSON.parse(localStorage.getItem("fav"));
    console.log(listeIdFavExistant);
    var tab = [];
    tab.push(listeIdFavExistant);
    listeIdFavExistant["favorites"].push({"id": 199999});
    //listeIdFavExistant["favorites"].push('{"id" : 183}');

    localStorage.setItem("fav", JSON.stringify(listeIdFavExistant));
    console.log(localStorage.getItem("fav"))
};

var callbackName = function (res) {

    while (divResult.firstChild) {
        divResult.removeChild(divResult.firstChild);
    }

    var resultatRechercheName = JSON.parse(res)['drinks'];

    if (resultatRechercheName == null) {
        divResult.innerHTML = "<h5>No cocktail found with the name <i>" + recherche + "</i>.</h5>";
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

        //console.log("Nombre de resultat : " + resultatRechercheName.length);

        for (var i = 0; i < resultatRechercheName.length; i++) {

            html = '';
            listeHtml = '<ul>';
            catHtml = '';
            finHtml = '';

            if (resultatRechercheName[i].strIngredient1 != "") nbrIngredient = 1;
            if (resultatRechercheName[i].strIngredient2 != "") nbrIngredient = 2;
            if (resultatRechercheName[i].strIngredient3 != "") nbrIngredient = 3;
            if (resultatRechercheName[i].strIngredient4 != "") nbrIngredient = 4;
            if (resultatRechercheName[i].strIngredient5 != "") nbrIngredient = 5;
            if (resultatRechercheName[i].strIngredient6 != "") nbrIngredient = 6;
            if (resultatRechercheName[i].strIngredient7 != "") nbrIngredient = 7;
            if (resultatRechercheName[i].strIngredient8 != "") nbrIngredient = 8;
            if (resultatRechercheName[i].strIngredient9 != "") nbrIngredient = 9;
            if (resultatRechercheName[i].strIngredient10 != "") nbrIngredient = 10;
            if (resultatRechercheName[i].strIngredient11 != "") nbrIngredient = 11;
            if (resultatRechercheName[i].strIngredient12 != "") nbrIngredient = 12;
            if (resultatRechercheName[i].strIngredient13 != "") nbrIngredient = 13;
            if (resultatRechercheName[i].strIngredient14 != "") nbrIngredient = 14;
            if (resultatRechercheName[i].strIngredient15 != "") nbrIngredient = 15;

            //console.log("Nombre d'ingredients : " + nbrIngredient)

            html += '<div class="card mb-4 mx-auto" style="min-width: 18rem; max-width: 18rem;">' +
                '       <img src="' + resultatRechercheName[i].strDrinkThumb + '" class="card-img-top" alt="' + resultatRechercheName[i].strDrink + '">\n' +
                '       <div class="card-body text-center">\n' +
                '           <h5 class="card-title">' + resultatRechercheName[i].strDrink + '</h5>\n' +
                '           <div class="" style="display: flex;' +
                '    align-items: center;">' +
                '               <button type="button" class="btn btn-sm btn-secondary mx-auto" data-toggle="modal" data-target="#modalId' + resultatRechercheName[i].idDrink + '">Details</button>' +
                '               <p onclick="callBackFavClick(' + resultatRechercheName[i].idDrink + ')" id="fav-button' + resultatRechercheName[i].idDrink + '" data-id="' + resultatRechercheName[i].idDrink + '" class="fav-hover fav-non-select mx-auto"><span id="icon-fav"><i class="far fa-heart"></i></span></p>' +
                '           </div>' +
                '       </div>' +
                '   </div>' +

                '<div class="modal fade" id="modalId' + resultatRechercheName[i].idDrink + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">\n' +
                '  <div class="modal-dialog modal-dialog-centered" role="document">' +
                '    <div class="modal-content">' +
                '      <div class="modal-header">' +
                '        <h5 class="modal-title" id="exampleModalLongTitle">' + resultatRechercheName[i].strDrink + '</h5>\n' +
                '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                '          <span aria-hidden="true">&times;</span>\n' +
                '        </button>\n' +
                '      </div>\n' +
                '      <div class="modal-body">\n' +
                '         <img src="' + resultatRechercheName[i].strDrinkThumb + '" class="rounded mx-auto img-responsive w-100" alt="' + resultatRechercheName[i].strDrink + '">' +
                '          <p class="mt-3 text-justify text-indent">' + resultatRechercheName[i].strInstructions + '</p>' +
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
                    '<li>' + resultatRechercheName[i].strIngredient1 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheName[i].strMeasure1 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient2 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheName[i].strMeasure2 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient3 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheName[i].strMeasure3 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient4 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheName[i].strMeasure4 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient5 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheName[i].strMeasure5 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient6 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheName[i].strMeasure6 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient7 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheName[i].strMeasure7 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient8 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheName[i].strMeasure8 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient9 + ' <b><span style="margin-left: 2em">   ' + resultatRechercheName[i].strMeasure9 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient10 + ' <b><span style="margin-left: 2em">  ' + resultatRechercheName[i].strMeasure10 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient11 + ' <b><span style="margin-left: 2em">  ' + resultatRechercheName[i].strMeasure11 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient12 + ' <b><span style="margin-left: 2em">' + resultatRechercheName[i].strMeasure12 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient13 + ' <b><span style="margin-left: 2em">' + resultatRechercheName[i].strMeasure13 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient14 + ' <b><span style="margin-left: 2em">' + resultatRechercheName[i].strMeasure14 + '</span></b></li>';
            }
            if (compteur < nbrIngredient) {
                compteur += 1;
                listeHtml +=
                    '<li>' + resultatRechercheName[i].strIngredient15 + ' <b><span style="margin-left: 2em">' + resultatRechercheName[i].strMeasure15 + '</span></b></li>';
            }

            listeHtml += '</ul>' +
                '<hr>';

            catHtml = '<div class="text-center"> <span class="badge badge-pill badge-primary">' + resultatRechercheName[i].strCategory + '</span>' +
                '<span class="badge badge-pill badge-danger ml-3">' + resultatRechercheName[i].strAlcoholic + '</span></div>';

            finHtml = '</div>\n' +
                '    </div>\n' +
                '  </div>\n' +
                '</div>';

            finalHtml += html + listeHtml + catHtml + finHtml;

            divResult.innerHTML = finalHtml;
        }
    }
};

var searchByName = function (text) {
    cocktailDAO.searchByName(text, callbackName)
};

var typeHandler = function (e) {
    searchInput.innerHTML = e.target.value;
    listenerClickSearchName();
};

searchInput.addEventListener('input', typeHandler);
searchInput.addEventListener('propertychange', typeHandler);

searchInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        listenerClickSearchName();
    }
});

searchButton.addEventListener("click", listenerClickSearchName);
