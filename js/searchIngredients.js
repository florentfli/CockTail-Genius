var searchButton = document.getElementById("searchButton");
var searchInput = document.getElementById("searchInput");

var listenerClickSearchIngredients = function(){
    var searchText = searchInput.value;
    alert("Recherche ingredient : " + searchText)

    searchByIngredients(searchText)
};

var searchByIngredients = function (text) {

};

document.querySelector('#searchInput').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        listenerClickSearchIngredients();
    }
});
searchButton.addEventListener("click", listenerClickSearchIngredients);
