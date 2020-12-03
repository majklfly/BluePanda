//get all employess to the form option
$("#insertDepartmentModal").on("shown.bs.modal", function(e) {
    $("#colorpicker1").spectrum({
        color: "#ff8810",
    });
    $("#colorpicker2").spectrum({
        color: "#ff5500",
    });
    $.ajax({
        url: "libs/php/getAll.php",
        type: "GET",
        dataType: "json",
        success: function(result) {
            result.data.map((item) => {
                $("#employeesList").append(
                    "<option>" + item.lastName + " " + item.firstName + "</option>"
                );
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
});

//toggle the visibility of icons in the menu
$("#menuIconContainer1").on("mouseenter", function() {
    $("#buildingPassive").css("display", "none");
    $("#buildingActive").css("display", "flex");
});

$("#menuIconContainer1").on("mouseleave", function() {
    $("#buildingPassive").css("display", "flex");
    $("#buildingActive").css("display", "none");
});

$("#menuIconContainer2").on("mouseenter", function() {
    $("#employeePassive").css("display", "none");
    $("#employeeActive").css("display", "flex");
});

$("#menuIconContainer2").on("mouseleave", function() {
    $("#employeePassive").css("display", "flex");
    $("#employeeActive").css("display", "none");
});

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
            const card =
                "<article class='card' id=card" +
                department.id +
                "><div class='card-title' style='background-image: linear-gradient(to bottom right, " +
                department.firstColor +
                ", " +
                department.secondColor +
                ")'><h4>" +
                department.name +
                "</h4></div><div class='card-body' id='department" +
                department.name +
                "'></div></article>";
            $(card)
                .appendTo("#cardsContainer")
                .queue(function() {});
        });
        if ($(".card").length) {
            $.ajax({
                url: "libs/php/getAll.php",
                type: "GET",
                dataType: "json",
                success: function(result) {
                    result.data.map((item) => {
                        $("#department" + item.department).append(
                            "<div class='card-content-row'><i class='fas fa-grip-vertical'></i><h4 id='card-content-item'>&nbsp" +
                            item.firstName +
                            " " +
                            item.lastName +
                            "</h4></div>"
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

// setup the header and animation
$(document).ready(function() {
    $("body").heroFade();
});

// recalculates the position of card position
var width = $(window).width();
$(window).on("resize", function() {
    if ($(this).width() !== width) {
        width = $(this).width();
        window.location.reload();
    }
});