var cocktailDAO = new CocktailDAO();
var favoriteDAO = new FavoriteDAO();

var finalHtml = "";
var recherche = " ";
var selectCat = document.getElementById("selectCategories");
var divResult = document.getElementById("resultSearchCategories");


var callbackCategoriesSelect = function (response) {
    var html = "<option selected=\"selected\" disabled>Chose your category</option>";

    var result = JSON.parse(response)['drinks'];

    for (var i = 0; i < result.length; i++) {
        html += "<option id='" + i + "'>" + result[i].strCategory + "</option>";
    }

    selectCat.innerHTML = html;
};


var callbackClickCat = function () {

    var value = selectCat[selectCat.selectedIndex].value;
    var valueWithoutSpace = value.split(" ").join("_");
    //console.log(valueWithoutSpace)

    cocktailDAO.searchByCategory(valueWithoutSpace, callbackCat);
};

var showPopUp = function (cocktail) {
    var cocktailDetail = JSON.parse(cocktail)['drinks'][0];
    console.log(cocktailDetail);

    var nbrIngredient = 0;
    if (cocktailDetail.strIngredient1 != "") nbrIngredient = 1;
    if (cocktailDetail.strIngredient2 != "") nbrIngredient = 2;
    if (cocktailDetail.strIngredient3 != "") nbrIngredient = 3;
    if (cocktailDetail.strIngredient4 != "") nbrIngredient = 4;
    if (cocktailDetail.strIngredient5 != "") nbrIngredient = 5;
    if (cocktailDetail.strIngredient6 != "") nbrIngredient = 6;
    if (cocktailDetail.strIngredient7 != "") nbrIngredient = 7;
    if (cocktailDetail.strIngredient8 != "") nbrIngredient = 8;
    if (cocktailDetail.strIngredient9 != "") nbrIngredient = 9;
    if (cocktailDetail.strIngredient10 != "") nbrIngredient = 10;
    if (cocktailDetail.strIngredient11 != "") nbrIngredient = 11;
    if (cocktailDetail.strIngredient12 != "") nbrIngredient = 12;
    if (cocktailDetail.strIngredient13 != "") nbrIngredient = 13;
    if (cocktailDetail.strIngredient14 != "") nbrIngredient = 14;
    if (cocktailDetail.strIngredient15 != "") nbrIngredient = 15;

    var modalHtml = '<div class="modal fade" id="modalId' + cocktailDetail.idDrink + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">\n' +
        '  <div class="modal-dialog modal-dialog-centered" role="document">' +
        '    <div class="modal-content">' +
        '      <div class="modal-header">' +
        '        <h5 class="modal-title" id="exampleModalLongTitle">' + cocktailDetail.strDrink + '</h5>\n' +
        '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
        '          <span aria-hidden="true">&times;</span>\n' +
        '        </button>\n' +
        '      </div>\n' +
        '      <div class="modal-body">\n' +
        '         <img src="' + cocktailDetail.strDrinkThumb + '" class="rounded mx-auto img-responsive w-100" alt="' + cocktailDetail.strDrink + '">' +
        '          <p class="mt-3 text-justify text-indent">' + cocktailDetail.strInstructions + '</p>' +
        '      <hr>' +
        '        <h5>Ingredients</h5><br>';
    /*'      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>';*/

    var listeHtml = "";
    var catHtml = "";
    var finHtml = "";
    var compteur = 0;
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient1 + ' <b><span style="margin-left: 2em">   ' + cocktailDetail.strMeasure1 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient2 + ' <b><span style="margin-left: 2em">   ' + cocktailDetail.strMeasure2 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient3 + ' <b><span style="margin-left: 2em">   ' + cocktailDetail.strMeasure3 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient4 + ' <b><span style="margin-left: 2em">   ' + cocktailDetail.strMeasure4 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient5 + ' <b><span style="margin-left: 2em">   ' + cocktailDetail.strMeasure5 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient6 + ' <b><span style="margin-left: 2em">   ' + cocktailDetail.strMeasure6 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient7 + ' <b><span style="margin-left: 2em">   ' + cocktailDetail.strMeasure7 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient8 + ' <b><span style="margin-left: 2em">   ' + cocktailDetail.strMeasure8 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient9 + ' <b><span style="margin-left: 2em">   ' + cocktailDetail.strMeasure9 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient10 + ' <b><span style="margin-left: 2em">  ' + cocktailDetail.strMeasure10 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient11 + ' <b><span style="margin-left: 2em">  ' + cocktailDetail.strMeasure11 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient12 + ' <b><span style="margin-left: 2em">' + cocktailDetail.strMeasure12 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient13 + ' <b><span style="margin-left: 2em">' + cocktailDetail.strMeasure13 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient14 + ' <b><span style="margin-left: 2em">' + cocktailDetail.strMeasure14 + '</span></b></li>';
    }
    if (compteur < nbrIngredient) {
        compteur += 1;
        listeHtml +=
            '<li>' + cocktailDetail.strIngredient15 + ' <b><span style="margin-left: 2em">' + cocktailDetail.strMeasure15 + '</span></b></li>';
    }

    listeHtml += '</ul>' +
        '<hr>';

    catHtml = '<div class="text-center"> <span class="badge badge-pill badge-primary">' + cocktailDetail.strCategory + '</span>' +
        '<span class="badge badge-pill badge-danger ml-3">' + cocktailDetail.strAlcoholic + '</span></div>';

    finHtml = '</div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>';

    finalHtml += modalHtml + listeHtml + catHtml + finHtml;
    document.getElementById("modalCustom").innerHTML = finalHtml
    $('#modalId' + cocktailDetail.idDrink).modal('show');


};

var onButtonClick = function (id) {
    console.log("Id cocktail clicked : " + id)
    cocktailDAO.findById(id, showPopUp)
};

var callbackAddFav = function (res) {
    var cocktailDetail = JSON.parse(res)['drinks'][0];
    favoriteDAO.addCocktail(cocktailDetail);
};

var clickFav = function (id) {
    var cocktail = cocktailDAO.findById(id,callbackAddFav);
};

var callbackCat = function (res) {

    while (divResult.firstChild) {
        divResult.removeChild(divResult.firstChild);
    }

    var resultatRechercheCategory = JSON.parse(res)['drinks'];
    console.log(resultatRechercheCategory);

    if (resultatRechercheCategory == null) {
        divResult.innerHTML = "<h5>No cocktail found with the category <i>" + recherche + "</i>.</h5>";
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

        for (var i = 0; i < resultatRechercheCategory.length; i++) {

            html = '';
            listeHtml = '<ul>';
            catHtml = '';
            finHtml = '';

            var id = resultatRechercheCategory[i].idDrink;
            var name = resultatRechercheCategory[i].strDrink;
            var img = resultatRechercheCategory[i].strDrinkThumb;

            //console.log("Nombre d'ingredients : " + nbrIngredient)

            html += '<div class="card mb-4 mx-auto" style="min-width: 18rem; max-width: 18rem;">' +
                '       <img src="' + resultatRechercheCategory[i].strDrinkThumb + '" class="card-img-top" alt="' + resultatRechercheCategory[i].strDrink + '">' +
                '       <div class="card-body text-center">\n' +
                '           <h5 class="card-title">' + resultatRechercheCategory[i].strDrink + '</h5>' +
                '           <div class="" style="display: flex; align-items: center;">' +
                '               <button onclick="onButtonClick(' + resultatRechercheCategory[i].idDrink + ')" id="buttonId' + resultatRechercheCategory[i].idDrink + '" type="button" class="btn btn-sm btn-secondary mx-auto" data-toggle="modal" data-target="#modalId' + resultatRechercheCategory[i].idDrink + '">Details</button>' +
                '               <p onclick="clickFav('+id+')" id="fav-button' + resultatRechercheCategory[i].idDrink + '" data-id="' + resultatRechercheCategory[i].idDrink + '" class="fav-hover fav-non-select mx-auto"><span id="icon-fav"><i class="far fa-heart"></i></span></p>' +
                '           </div>' +
                '       </div>' +
                '   </div>';
            /* +

                '<div class="modal fade" id="modalId' + resultatRechercheCategory[i].idDrink + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">\n' +
                '  <div class="modal-dialog modal-dialog-centered" role="document">' +
                '    <div class="modal-content">' +
                '      <div class="modal-header">' +
                '        <h5 class="modal-title" id="exampleModalLongTitle">' + resultatRechercheCategory[i].strDrink + '</h5>\n' +
                '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                '          <span aria-hidden="true">&times;</span>\n' +
                '        </button>\n' +
                '      </div>\n' +
                '      <div class="modal-body">\n' +
                '         <img src="' + resultatRechercheCategory[i].strDrinkThumb + '" class="rounded mx-auto img-responsive w-100" alt="' + resultatRechercheCategory[i].strDrink + '">' +
                '          <p class="mt-3 text-justify text-indent">' + resultatRechercheCategory[i].strInstructions + '</p>' +
                '      <hr>' +
                '        <h5>Ingredients</h5><br>'*/
            /*'      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</div>';*/


            finalHtml += html;

            divResult.innerHTML = finalHtml;

            //document.getElementById("buttonId" + resultatRechercheCategory[i].idDrink).addEventListener("click", onButtonClick)

        }
    }
};

var searchByName = function (text) {
    cocktailDAO.searchByName(text, callbackName)
};

cocktailDAO.getCategories(callbackCategoriesSelect);

document.getElementById("selectCategories").addEventListener("change", callbackClickCat);
