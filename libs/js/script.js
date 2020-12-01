// ------- INITIAL LOAD -------

// fetch all employees
$.ajax({
    url: "libs/php/getAll.php",
    type: "GET",
    dataType: "json",
    success: function(result) {
        console.log(result);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
    },
});