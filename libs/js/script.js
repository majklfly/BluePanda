// toggles the ligt/dark mode using checkbox
$("#checkboxContainer").on("click", function() {
    let currentValue = $(".checkbox").is(":checked");
    if (currentValue) {
        $(".checkbox").prop("checked", false);
        $("html").toggleClass("darkMode");
    } else {
        $(".checkbox").prop("checked", true);
        $("html").toggleClass("darkMode");
    }
});

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