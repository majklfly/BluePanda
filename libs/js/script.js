// draggable users between the departments
const dragAndDropFunctionality = () => {
    const draggables = document.querySelectorAll(".card-content-row");
    console.log(draggables);
    const containers = document.querySelectorAll(".card");

    draggables.forEach((draggable) => {
        draggable.addEventListener("dragstart", () => {
            console.log("started");
        });
    });
};

// makes an ajax call to insert a new department to the database
$("#insertNewEmployeeModal").on("shown.bs.modal", function(e) {
    $.ajax({
        url: "libs/php/getAllDepartments.php",
        type: "GET",
        dataType: "json",
        success: function(result) {
            result.data.map((item) => {
                $("#newEmployeeDepartment").append(
                    "<option value=" + item.id + ">" + item.name + "</option>"
                );
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
});

//get all employess to the form option
$("#insertDepartmentModal").on("shown.bs.modal", function(e) {
    $("#colorpicker1").spectrum({
        color: "#ff8810",
    });
    $("#colorpicker2").spectrum({
        color: "#ff5500",
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
            const departmentN = department.name.replace(/ /g, "");
            const card =
                "<article class='card' id=card" +
                department.id +
                "><div class='card-title' style='background-image: linear-gradient(to bottom right, " +
                department.firstColor +
                ", " +
                department.secondColor +
                ")'><h4>" +
                department.name +
                "</h4></div><div class='card-body' id=" +
                departmentN +
                "></div></article>";
            $(card).appendTo("#cardsContainer");
        });
        $.ajax({
            url: "libs/php/getAll.php",
            type: "GET",
            dataType: "json",
            success: function(result) {
                result.data.map((item) => {
                    const departmentName = item.department.replace(/ /g, "");
                    $("#" + departmentName).append(
                        "<div class='card-content-row' draggable='true'><i class='fas fa-grip-vertical'></i><h4 id='card-content-item'>&nbsp" +
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
        dragAndDropFunctionality();
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