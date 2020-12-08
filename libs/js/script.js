//graph modal setting
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["London", "Paris", "New York", "Munich", "Rome"],
        datasets: [{
            label: "# of Employees",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        }, ],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }, ],
        },
    },
});

// reads the vars in the url
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split("&"),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split("=");

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ?
                true :
                decodeURIComponent(sParameterName[1]);
        }
    }
};

var message = getUrlParameter("message");
if (message) {
    $("#messageModal").modal("show");
    switch (message) {
        case "queryFailed":
            $("#message").html(
                "This name is already in the database. Please insert an unique name."
            );
            break;
        case "departmentInserted":
            $("#message").html("New department has been inserted.");
            break;
        case "employeeInserted":
            $("#message").html("New employee has been inserted.");
            break;
    }
}

//get details of each employee
$("#employeeDetailModal").on("shown.bs.modal", function(e) {
    const name = $(e.relatedTarget).data("id");
    $.ajax({
        url: "libs/php/employeeDetail.php",
        type: "GET",
        dataType: "json",
        data: {
            lastName: name,
        },
        success: function(result) {
            console.log(result.data[0]);
            $("#employeeFirstName").html(result.data[0].firstName);
            $("#employeeLastName").html(result.data[0].lastName);
            $("#employeeEmail").html(result.data[0].email);
            $("#employeeLocation").html(result.data[0].name);
            if (result.data[0].jobTitle) {
                $("#employeeJobTitle").html(result.data[0].jobTitle);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
});

// draggable users between the departments functionality
const dragAndDropFunctionality = (selectors) => {
    let selectorsString = "";
    selectors.map((item) => {
        selectorsString += item + ", ";
    });
    const cleanedSelectors = selectorsString.slice(0, -2);
    $(cleanedSelectors).sortable({
        connectWith: ".card-body",
        receive: function(event, ui) {
            const name = $(ui.item).attr("id");
            const lastName = name.split("_")[1];
            console.log(ui.element);
            $.ajax({
                url: "libs/php/employeeChangesDepartment.php",
                type: "POST",
                dataType: "json",
                data: {
                    lastName: lastName,
                    departmentName: event.target.id.replace("_", " "),
                },
                success: function(result) {
                    console.log(result);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR);
                },
            });
        },
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
    $.ajax({
        url: "libs/php/getAllLocations.php",
        type: "GET",
        dataType: "json",
        success: function(result) {
            console.log(result);
            result.data.map((item) => {
                $("#departmentLocation").append(
                    "<option value=" + item.id + ">" + item.name + "</option>"
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
            const departmentN = department.name.replace(/ /g, "_");
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
                let tableSelectors = [];
                result.data.map((item) => {
                    const departmentName = item.department.replace(/ /g, "_");
                    tableSelectors.push("#" + departmentName);
                    $("#" + departmentName).append(
                        "<div class='card-content-row' id=" +
                        item.firstName +
                        "_" +
                        item.lastName +
                        "><i class='fas fa-grip-vertical'></i><h4 id='card-content-item'>&nbsp" +
                        item.firstName +
                        " " +
                        item.lastName +
                        "</h4><i class='fas fa-info-circle' data-toggle='modal' data-target='#employeeDetailModal' data-id=" +
                        item.lastName +
                        "></i></div>"
                    );
                });
                let unique = [...new Set(tableSelectors)];
                dragAndDropFunctionality(unique);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
            },
        });
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