var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);


function searchCountries() {
    var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
         url: url + countryName,
         method: 'GET',
         success: showCountriesList
     });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<li>').text("Country name: " + item.name).appendTo(countriesList);
        $('<li>').text("Capital: " + item.capital).appendTo(countriesList);
        $('<li>').text("Population: " + item.population).appendTo(countriesList);
        $('<li>').text(item.altSpellings).appendTo(countriesList);
        $('<li>').text("Country code: " + item.alpha3Code).appendTo(countriesList);
        $('<p>').text("-----").appendTo(countriesList);     
    });
}

        
