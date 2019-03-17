var favoriteDAO = new FavoriteDAO();

var favorites = favoriteDAO.listFavorite();
console.log(favorites);

var divContainer = document.getElementById("resultatFavorites");

if (!favorites || favorites.length == 0){
    divContainer.innerHTML = '<p>Vous n\'avez pas de cocktail favoris !</p>';
} else{
    var finalHtml = '';
    for (var i = 0; i < favorites.length; i++) {

        var html = '<div class="card mb-4 mx-auto" style="min-width: 18rem; max-width: 18rem;">' +
            '       <img src="' + favorites[i].strDrinkThumb + '" class="card-img-top" alt="' + favorites[i].strDrink + '">\n' +
            '       <div class="card-body text-center">\n' +
            '           <h5 class="card-title">' + favorites[i].strDrink + '</h5>\n' +
            '           <div class="" style="display: flex;' +
            '    align-items: center;">' +
            '               <button onclick="onButtonClick(' + favorites[i].idDrink + ')" id="buttonId' + favorites[i].idDrink + '" type="button" class="btn btn-sm btn-secondary mx-auto" data-toggle="modal" data-target="#modalId' + favorites[i].idDrink + '">Details</button>' +
            //'               <p onclick="favoriteDAO.addCocktail(' + favorites[i].idDrink + ',' + favorites[i].strDrink + ',' + favorites[i].strDrinkThumb + ')" id="fav-button' + favorites[i].idDrink + '" data-id="' + favorites[i].idDrink + '" class="fav-hover fav-non-select mx-auto"><span id="icon-fav"><i class="far fa-heart"></i></span></p>' +
            '           </div>' +
            '       </div>' +
            '   </div>';

        finalHtml += html;
    }

    divContainer.innerHTML = finalHtml;
}