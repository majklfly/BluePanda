$("#btnSearchWiki").click(function() {
    $.ajax({
        url: "libs/php/getWikiResults.php",
        type: "GET",
        dataType: "json",
        data: {
            q: $("#wikiSearchInput").val(),
        },
        success: function(result) {
            console.log(result);

            if (result.status.name == "ok") {
                $("#title").html(result["data"][0]["title"]);
                $("#content").html(result["data"][0]["summary"]);
                $("#labelCapitalCity").html("");
                $("#capitalCity").html("");
                $("#labelContinent").html("");
                $("#continent").html("");
                $("#labelPopulation").html("");
                $("#population").html("");
                $("#labelCurrencyCode").html("");
                $("#currencyCode").html("");
                $("#labelLanguage").html("");
                $("#language").html("");
                $("#labelArea").html("");
                $("#areaInSqKm").html("");
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        },
    });
});

$("#btnSearchCountry").click(function() {
    $.ajax({
        url: "libs/php/getCountryInfoResults.php",
        type: "GET",
        dataType: "json",
        data: {
            country: $("#countryInfoSearch").val(),
        },
        success: function(result) {
            console.log(result);

            if (result.status.name == "ok") {
                $("#title").html(result["data"][0]["countryName"]);
                $("#content").html("");
                $("#labelCapitalCity").html("Capital City: ");
                $("#capitalCity").html(result["data"][0]["capital"]);
                $("#labelContinent").html("Continent: ");
                $("#continent").html(result["data"][0]["continentName"]);
                $("#labelPopulation").html("Population: ");
                $("#population").html(result["data"][0]["population"]);
                $("#labelCurrencyCode").html("Currency Code: ");
                $("#currencyCode").html(result["data"][0]["currencyCode"]);
                $("#labelLanguage").html("Languages: ");
                $("#language").html(result["data"][0]["languages"]);
                $("#labelArea").html("Area in SqKm: ");
                $("#areaInSqKm").html(result["data"][0]["areaInSqKm"]);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        },
    });
});

$("#btnSearchNeighbours").click(function() {
    $.ajax({
        url: "libs/php/getNeighbours.php",
        type: "GET",
        dataType: "json",
        data: {
            country: $("#selCountry").val(),
        },
        success: function(result) {
            console.log(result);

            let countries = "";

            result.data.map((country) => (countries += country.countryName + ", "));

            if (result.status.name == "ok") {
                $("#title").html("Neighbours");
                $("#content").html(countries);
                $("#labelCapitalCity").html("");
                $("#capitalCity").html("");
                $("#labelContinent").html("");
                $("#continent").html("");
                $("#labelPopulation").html("");
                $("#population").html("");
                $("#labelCurrencyCode").html("");
                $("#currencyCode").html("");
                $("#labelLanguage").html("");
                $("#language").html("");
                $("#labelArea").html("");
                $("#areaInSqKm").html("");
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        },
    });
});