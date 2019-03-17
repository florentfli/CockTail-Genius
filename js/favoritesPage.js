var favoriteDAO = new FavoriteDAO();
var cocktailDAO = new CocktailDAO();
var favorites = favoriteDAO.listFavorite();

var divContainer = document.getElementById("resultatFavorites");

var callbackAddFav = function (res) {
    var cocktailDetail = JSON.parse(res)['drinks'][0];
    favoriteDAO.addCocktail(cocktailDetail);
};

var clickFav = function (id) {
    var buttonCocktailFav = $("#fav-button"+id);

    if (favoriteDAO.isInFavorite(id)){
        favoriteDAO.deleteCocktail(id);
        buttonCocktailFav.css('color','black');
    }else{
        cocktailDAO.findById(id,callbackAddFav);
        buttonCocktailFav.css('color','red');
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

    finalHtml = modalHtml + listeHtml + catHtml + finHtml;
    document.getElementById("modalCustom").innerHTML = finalHtml;
    $('#modalId' + cocktailDetail.idDrink).modal('show');

};

var onButtonClick = function (id) {
    console.log("Id cocktail clicked : " + id)
    cocktailDAO.findById(id, showPopUp)
};

if (!favorites || favorites.length == 0){
    divContainer.innerHTML = '<p>Vous n\'avez pas de cocktail favoris !</p>';
} else{
    var finalHtml = '';
    for (var i = 0; i < favorites.length; i++) {

        var color = 'black';
        var hoverClass = 'fav-hover';
        if (favoriteDAO.isInFavorite(favorites[i].idDrink)){
            color = 'red';
            hoverClass = 'non-fav-hover'
        }

        var html = '<div class="card mb-4 mx-auto" style="min-width: 18rem; max-width: 18rem;">' +
            '       <img src="' + favorites[i].strDrinkThumb + '" class="card-img-top" alt="' + favorites[i].strDrink + '">\n' +
            '       <div class="card-body text-center">\n' +
            '           <h5 class="card-title">' + favorites[i].strDrink + '</h5>\n' +
            '           <div class="" style="display: flex;' +
            '    align-items: center;">' +
            '               <button onclick="onButtonClick(' + favorites[i].idDrink + ')" id="buttonId' + favorites[i].idDrink + '" type="button" class="btn btn-sm btn-secondary mx-auto" data-toggle="modal" data-target="#modalId' + favorites[i].idDrink + '">Details</button>' +
            '               <p onclick="clickFav(' + favorites[i].idDrink + ')" id="fav-button' + favorites[i].idDrink + '" data-id="' + favorites[i].idDrink + '" style="color: '+color+'" class="fav-hover fav-non-select mx-auto"><span id="icon-fav"><i class="far fa-heart"></i></span></p>' +
            '           </div>' +
            '       </div>' +
            '   </div>';

        finalHtml += html;
    }

    divContainer.innerHTML = finalHtml;
}