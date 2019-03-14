var cocktailDAO = new CocktailDAO();
var finalHtml = "";
var recherche = "lol";

var selectAlcohol = document.getElementById("selectAlcohol");
var divResult = document.getElementById("resultSearchAlcohol");


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

var callbackClickAlcohol = function () {

    var value = selectAlcohol[selectAlcohol.selectedIndex].value;
    var valueWithoutSpace = value.split(" ").join("_");
    console.log(valueWithoutSpace)

    cocktailDAO.searchByAlcohol(valueWithoutSpace, callbackAlcohol);
};

var callbackAlcohol = function (res) {

    var resultatAlcohol = JSON.parse(res)['drinks'];
    console.log(resultatAlcohol);

    var html = '';
    var listeHtml = '<ul>';
    var catHtml = '';
    var finHtml = '';
    finalHtml = '';

    for (var i = 0; i < resultatAlcohol.length; i++) {

        html = '';
        listeHtml = '<ul>';
        catHtml = '';
        finHtml = '';

        //console.log("Nombre d'ingredients : " + nbrIngredient)

        html += '<div class="card mb-4 mx-auto" style="min-width: 18rem; max-width: 18rem;">' +
            '       <img src="' + resultatAlcohol[i].strDrinkThumb + '" class="card-img-top" alt="' + resultatAlcohol[i].strDrink + '">\n' +
            '       <div class="card-body text-center">\n' +
            '           <h5 class="card-title">' + resultatAlcohol[i].strDrink + '</h5>\n' +
            '           <div class="" style="display: flex;' +
            '    align-items: center;">' +
            '               <button onclick="onButtonClick(' + resultatAlcohol[i].idDrink + ')" id="buttonId' + resultatAlcohol[i].idDrink + '" type="button" class="btn btn-sm btn-secondary mx-auto" data-toggle="modal" data-target="#modalId' + resultatAlcohol[i].idDrink + '">Details</button>' +
            '               <p onclick="callBackFavClick(' + resultatAlcohol[i].idDrink + ')" id="fav-button' + resultatAlcohol[i].idDrink + '" data-id="' + resultatAlcohol[i].idDrink + '" class="fav-hover fav-non-select mx-auto"><span id="icon-fav"><i class="far fa-heart"></i></span></p>' +
            '           </div>' +
            '       </div>' +
            '   </div>';


        finalHtml += html;
        divResult.innerHTML = finalHtml;

        //document.getElementById("buttonId" + resultatRechercheCategory[i].idDrink).addEventListener("click", onButtonClick)

    }

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

var searchByName = function (text) {
    cocktailDAO.searchByName(text, callbackName)
};

document.getElementById("selectAlcohol").addEventListener("change", callbackClickAlcohol);
