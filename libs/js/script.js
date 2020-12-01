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

// fetch all departments
$.ajax({
    url: "libs/php/getAllDepartments.php",
    type: "GET",
    dataType: "json",
    success: function(result) {
        result.data.map((department, index) => {
            console.log("department", department);
            const card =
                "<article class='card' style='max-width: 18rem;'><div class='card-header'>" +
                department.name +
                "</div><div class='card-content' id='department" +
                department.name +
                "'></div></article>";
            $(card)
                .appendTo("#cardsContainer")
                .queue(function() {});
        });
        if ($(".card").length) {
            console.log("updated");
            $.ajax({
                url: "libs/php/getAll.php",
                type: "GET",
                dataType: "json",
                success: function(result) {
                    console.log("employees", result);

                    result.data.map((item) => {
                        console.log($("#Sales").length);
                        $("#department" + item.department).append(
                            "<h3 id='card-content-item'>" +
                            item.firstName +
                            " " +
                            item.lastName +
                            "</h3>"
                        );
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR);
                },
            });
        }

        console.log(result);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
    },
});