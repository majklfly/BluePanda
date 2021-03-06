//handles search input to get update the list of employees
$("#searchButton").on("click", function() {
    $("#loadingListAnimation").css("display", "block");
    $(".employeesList").css("display", "none");
    $(".employeeListRow").remove();
    const regExp = $("#regExp").val();
    $.ajax({
        url: "libs/php/getLastNameRegExp.php",
        type: "POST",
        dataType: "json",
        data: {
            regExp: regExp,
        },
        success: function(result) {
            if (result.data.length > 0) {
                result.data.map((item) => {
                    $(".employeesList").append(
                        "<div class='list-group-item list-group-item-action employeeListRow' data-toggle='modal' data-target='#employeeDetailModal' data-id=" +
                        item.lastName +
                        "><p class='employeeListItemShort'>" +
                        item.firstName +
                        "</p><p class='employeeListItemShort'>" +
                        item.lastName +
                        "</p><p class='employeeListItemLong'>" +
                        item.email +
                        "</p><p class='employeeListItemLong'>" +
                        item.department +
                        "</p><p class='employeeListItemShort'>" +
                        item.location +
                        "</p></div>"
                    );
                });
                $("#loadingListAnimation").css("display", "none");
                $(".employeesList").css("display", "block");
            } else {
                $("#loadingListAnimation").css("display", "none");
                $(".employeesList").css("display", "block");
                $("#emptySearchMessage").html(
                    "No search results have been found. Please update searching criteria."
                );
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
});

//organize the list based on location
$("#orderByLocationButton").on("click", function() {
    $("#loadingListAnimation").css("display", "block");
    $(".employeesList").css("display", "none");
    $(".employeeListRow").remove();
    $.ajax({
        url: "libs/php/getAllOrderedBy.php",
        type: "GET",
        dataType: "json",
        data: {
            orderBy: "l.name",
        },
        success: function(result) {
            result.data.map((item) => {
                $(".employeesList").append(
                    "<div class='list-group-item list-group-item-action employeeListRow' data-toggle='modal' data-target='#employeeDetailModal' data-id=" +
                    item.lastName +
                    "><p class='employeeListItemShort'>" +
                    item.firstName +
                    "</p><p class='employeeListItemShort'>" +
                    item.lastName +
                    "</p><p class='employeeListItemLong'>" +
                    item.email +
                    "</p><p class='employeeListItemLong'>" +
                    item.department +
                    "</p><p class='employeeListItemShort'>" +
                    item.location +
                    "</p></div>"
                );
            });
            $("#loadingListAnimation").css("display", "none");
            $(".employeesList").css("display", "block");
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
});

// organize the list based on last Name
$("#orderByNameButton").on("click", function() {
    $("#loadingListAnimation").css("display", "block");
    $(".employeesList").css("display", "none");
    $(".employeeListRow").remove();
    $.ajax({
        url: "libs/php/getAllOrderedBy.php",
        type: "GET",
        dataType: "json",
        data: {
            orderBy: "p.lastName",
        },
        success: function(result) {
            result.data.map((item) => {
                $(".employeesList").append(
                    "<div class='list-group-item list-group-item-action employeeListRow' data-toggle='modal' data-target='#employeeDetailModal' data-id=" +
                    item.lastName +
                    "><p class='employeeListItemShort'>" +
                    item.firstName +
                    "</p><p class='employeeListItemShort'>" +
                    item.lastName +
                    "</p><p class='employeeListItemLong'>" +
                    item.email +
                    "</p><p class='employeeListItemLong'>" +
                    item.department +
                    "</p><p class='employeeListItemShort'>" +
                    item.location +
                    "</p></div>"
                );
            });
            $("#loadingListAnimation").css("display", "none");
            $(".employeesList").css("display", "block");
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
});

// organize the list based on department
$("#orderByDepartmentButton").on("click", function() {
    $("#loadingListAnimation").css("display", "block");
    $(".employeesList").css("display", "none");
    $(".employeeListRow").remove();
    $.ajax({
        url: "libs/php/getAllOrderedBy.php",
        type: "GET",
        dataType: "json",
        data: {
            orderBy: "d.id",
        },
        success: function(result) {
            result.data.map((item) => {
                $(".employeesList").append(
                    "<div class='list-group-item list-group-item-action employeeListRow' data-toggle='modal' data-target='#employeeDetailModal' data-id=" +
                    item.lastName +
                    "><p class='employeeListItemShort'>" +
                    item.firstName +
                    "</p><p class='employeeListItemShort'>" +
                    item.lastName +
                    "</p><p class='employeeListItemLong'>" +
                    item.email +
                    "</p><p class='employeeListItemLong'>" +
                    item.department +
                    "</p><p class='employeeListItemShort'>" +
                    item.location +
                    "</p></div>"
                );
            });
            $("#loadingListAnimation").css("display", "none");
            $(".employeesList").css("display", "block");
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
});

//shows/hides the list of all employees
$("#menuIconContainer4").on("click", function(e) {
    if ($("#cardsContainer").css("display") === "block") {
        $("#loadingListAnimation").css("display", "block");
        $(".employeesList").css("display", "none");
        $("#listActive").css("display", "flex");
        $("#listPassive").css("display", "none");
        $("#cardsContainer").css("display", "none");
        $("#employeesListContainer").css("display", "block");
        $.ajax({
            url: "libs/php/getAll.php",
            type: "GET",
            dataType: "json",
            data: {
                lastName: name,
            },
            success: function(result) {
                result.data.map((item) => {
                    $(".employeesList").append(
                        "<div class='list-group-item list-group-item-action employeeListRow' data-toggle='modal' data-target='#employeeDetailModal' data-id=" +
                        item.lastName +
                        "><p class='employeeListItemShort'>" +
                        item.firstName +
                        "</p><p class='employeeListItemShort'>" +
                        item.lastName +
                        "</p><p class='employeeListItemLong'>" +
                        item.email +
                        "</p><p class='employeeListItemLong'>" +
                        item.department +
                        "</p><p class='employeeListItemShort'>" +
                        item.location +
                        "</p></div>"
                    );
                });
                $("#loadingListAnimation").css("display", "none");
                $(".employeesList").css("display", "block");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
            },
        });
    } else {
        $("#listActive").css("display", "none");
        $("#listPassive").css("display", "flex");
        $("#cardsContainer").css("display", "block");
        $("#employeesListContainer").css("display", "none");
    }
});

// show form to edit the employee on a click
$("#employeeEditButton").on("click", function() {
    if ($("#userEditContainer").css("display") === "none") {
        $("#userDetailsContainer").css("display", "none");
        $("#userEditContainer").css("display", "flex");
        $("#employeeEditButton").html("Hide edit options");
        // adding unique lastName to the id of the submit button
        const lastName = localStorage.getItem("lastName");
        $("#SubmitProfileChange").attr("value", lastName);
    } else {
        $("#userDetailsContainer").css("display", "block");
        $("#userEditContainer").css("display", "none");
        $("#employeeEditButton").html("Show edit options");
    }
});

//removing URL parameters without refreshing page
const cleaningURLParameters = () => {
    // get the string following the ?
    var query = window.location.search.substring(1);

    // is there anything there ?
    if (query.length) {
        // are the new history methods available ?
        if (window.history != undefined && window.history.pushState != undefined) {
            // if pushstate exists, add a new state to the history, this changes the url without reloading the page

            window.history.pushState({}, document.title, window.location.pathname);
        }
    }
};

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
            $("#messageAnimationContainer").append(
                "<lottie-player id='messageAnimation' src='libs/img/errorAnimation.json' background='transparent' speed='1' autoplay></lottie-player>"
            );
            $("#message").html(
                "This name is already in the database. Please insert an unique name."
            );
            cleaningURLParameters();
            break;
        case "departmentInserted":
            $("#messageAnimationContainer").append(
                "<lottie-player id='messageAnimation' src='libs/img/successAnimation.json' background='transparent' speed='1' autoplay></lottie-player>"
            );
            $("#message").html("New department has been inserted.");
            cleaningURLParameters();
            break;
        case "employeeInserted":
            $("#messageAnimationContainer").append(
                "<lottie-player id='messageAnimation' src='libs/img/successAnimation.json' background='transparent' speed='1' autoplay></lottie-player>"
            );
            $("#message").html("New employee has been inserted.");
            cleaningURLParameters();
            break;
        case "employeeEdited":
            $("#messageAnimationContainer").append(
                "<lottie-player id='messageAnimation' src='libs/img/successAnimation.json' background='transparent' speed='1' autoplay></lottie-player>"
            );
            $("#message").html("Employee has been edited.");
            cleaningURLParameters();
            break;
        case "employeeEditError":
            $("#messageAnimationContainer").append(
                "<lottie-player id='messageAnimation' src='libs/img/errorAnimation.json' background='transparent' speed='1' autoplay></lottie-player>"
            );
            $("#message").html("Please insert data or report a problem.");
            cleaningURLParameters();
            break;
        case "locationInserted":
            $("#messageAnimationContainer").append(
                "<lottie-player id='messageAnimation' src='libs/img/successAnimation.json' background='transparent' speed='1' autoplay></lottie-player>"
            );
            $("#message").html("New Location has been insterted.");
            cleaningURLParameters();
            break;
        case "locationDeleted":
            $("#messageAnimationContainer").append(
                "<lottie-player id='messageAnimation' src='libs/img/successAnimation.json' background='transparent' speed='1' autoplay></lottie-player>"
            );
            $("#message").html("Location has been deleted.");
            cleaningURLParameters();
            break;
        case "departmentDeleted":
            $("#messageAnimationContainer").append(
                "<lottie-player id='messageAnimation' src='libs/img/successAnimation.json' background='transparent' speed='1' autoplay></lottie-player>"
            );
            $("#message").html("Department has been deleted.");
            cleaningURLParameters();
            break;
        case "departmentEdited":
            $("#messageAnimationContainer").append(
                "<lottie-player id='messageAnimation' src='libs/img/successAnimation.json' background='transparent' speed='1' autoplay></lottie-player>"
            );
            $("#message").html("Department has been Edited.");
            cleaningURLParameters();
            break;
    }
}

const renderPieChart = (result) => {
    let London = 0;
    let Paris = 0;
    let New_York = 0;
    let Munich = 0;
    let Rome = 0;
    result.data.map((item) => {
        switch (item.location) {
            case "London":
                London += 1;
            case "Paris":
                Paris++;
            case "New York":
                New_York++;
            case "Munich":
                Munich++;
            case "Rome":
                Rome++;
        }
    });
    var ctx = document.getElementById("locationChart");
    var myChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["London", "Paris", "New York", "Munich", "Rome"],
            datasets: [{
                label: "# of Employees",
                data: [London, Paris, New_York, Munich, Rome],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: "rgba(0, 0, 0, 0)",
            }, ],
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        display: false,
                    },
                    gridLines: {
                        display: false,
                    },
                }, ],
                yAxes: [{
                    ticks: {
                        display: false,
                    },
                    gridLines: {
                        display: false,
                    },
                }, ],
            },
        },
    });
};

const renderBarChart = (result) => {
    const keys = [];
    const values = [];
    const departmentsArray = [];
    result.data.map((item) => {
        departmentsArray.push(item.department);
    });
    if (departmentsArray) {
        var arr = departmentsArray;
        var uniqs = arr.reduce((acc, val) => {
            acc[val] = acc[val] === undefined ? 1 : (acc[val] += 1);
            return acc;
        }, {});
        for (const [key, value] of Object.entries(uniqs)) {
            keys.push(key);
            values.push(value);
        }
        var ctx = document.getElementById("departmentChart");
        var myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: keys,
                datasets: [{
                    label: "# of Employees",
                    data: values,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 150, 132, 0.2)",
                        "rgba(54, 162, 24, 0.2)",
                        "rgba(172, 206, 86, 0.2)",
                        "rgba(75, 140, 192, 0.2)",
                        "rgba(72, 102, 255, 0.2)",
                        "rgba(255, 159, 210, 0.2)",
                        "rgba(172, 106, 86, 0.2)",
                        "rgba(183, 140, 192, 0.2)",
                        "rgba(72, 255, 255, 0.2)",
                        "rgba(255, 159, 52, 0.2)",
                    ],
                    borderColor: "rgba(0, 0, 0, 0)",
                }, ],
            },
            options: {
                scales: {
                    xAxes: [{}],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        },
                    }, ],
                },
            },
        });
    }
};

//checks if location contains any location before deleted
$("#deleteLocationModal").on("shown.bs.modal", function(e) {
    const locationID = localStorage.getItem("locationId");
    let departmentsCount = 0;
    $.ajax({
        url: "libs/php/getAllDepartments.php",
        type: "GET",
        dataType: "json",
        success: function(result) {
            result.data.map((item) => {
                if (item.locationID === locationID) {
                    departmentsCount++;
                }
            });
            if (departmentsCount > 0) {
                $("#deleteLocationMessage").html(
                    "This location contains departments. Please relocate them first."
                );
                $("#deleteLocationConfirmButton").css("display", "none");
            } else {
                $("#deleteLocationMessage").html(
                    "Are you sure you would like to delete this location?"
                );
                $("#deleteLocationConfirmButton").css("display", "block");
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
});

$("#deleteLocationConfirmButton").on("click", function() {
    const locationId = parseInt(localStorage.getItem("locationId"));
    console.log(locationId);
    $.ajax({
        url: "libs/php/deleteLocation.php",
        type: "POST",
        data: {
            locationId: locationId,
        },
        success: function(result) {
            history.pushState({ message: "locationDeleted" },
                "title 1",
                "?message=locationDeleted"
            );
            window.location.reload();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
});

// cleaning the employee profile on close
$("#deleteLocationModal").on("hidden.bs.modal", function() {
    $("#deleteLocationMessage").html(" ");
});

//render statistic data of the company
$("#locationModal").on("shown.bs.modal", function(e) {
    $.ajax({
        url: "libs/php/getAllLocations.php",
        type: "GET",
        dataType: "json",
        success: function(result) {
            result.data.map((item, index) => {
                const i = index + 1;
                $("#locationsList").append(
                    "<li class='list-group-item locationRow'>" +
                    i +
                    ") " +
                    item.name +
                    "<i class='fas fa-times deleteLocationButton' id=" +
                    item.id +
                    "></i></li>"
                );
            });
            $("#newLocationForm").css("display", "block");
            // hides modal on confirmation delete
            $(".deleteLocationButton").on("click", function(e) {
                const id = e.currentTarget.id;
                localStorage.setItem("locationId", id);
                $("#locationModal").modal("hide");
                $("#deleteLocationModal").modal("show");
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
});

// cleaning the location modal on close
$("#locationModal").on("hidden.bs.modal", function() {
    $(".locationRow").remove();
    $("#newLocationForm").css("display", "none");
});

//render statistic data of the company
$("#graphsModal").on("shown.bs.modal", function(e) {
    $.ajax({
        url: "libs/php/getAll.php",
        type: "GET",
        dataType: "json",
        data: {
            lastName: name,
        },
        success: function(result) {
            renderPieChart(result);
            renderBarChart(result);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
});

// hides modal on confirmation delete
$("#DeleteButton").on("click", function() {
    $("#employeeDetailModal").modal("hide");
});

//get details of each employee
$("#employeeDetailModal").on("shown.bs.modal", function(e) {
    $("#loadingAnimation").css("display", "block");
    $("#employeeDetails").css("display", "none");
    const name = $(e.relatedTarget).data("id");
    localStorage.setItem("lastName", name);
    $.ajax({
        url: "libs/php/employeeDetail.php",
        type: "GET",
        dataType: "json",
        data: {
            lastName: name,
        },
        success: function(result) {
            $("#employeeFirstName").html(result.data[0].firstName);
            $("#employeeLastName").html(result.data[0].lastName);
            $("#employeeEmail").html(result.data[0].email);
            $("#employeeLocation").html(result.data[0].name);
            if (result.data[0].jobTitle) {
                $("#employeeJobTitle").html(result.data[0].jobTitle);
            } else {
                $("#employeeJobTitle").html("---");
            }
            // handling deleting profile on press
            $("#employeeDeleteButton").on("click", function(e) {
                $.ajax({
                    url: "libs/php/deleteEmployee.php",
                    type: "POST",
                    data: {
                        lastName: name,
                    },
                    success: function(result) {
                        window.location.reload();
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                    },
                });
            });
            $("#loadingAnimation").css("display", "none");
            $("#employeeDetails").css("display", "block");
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
});

// cleaning the employee profile on close
$("#employeeDetailModal").on("hidden.bs.modal", function() {
    $("#loadingAnimation").css("display", "block");
    $("#employeeDetails").css("display", "none");
});

// draggable users between the departments functionality
const dragAndDropFunctionality = (selectors) => {
    let selectorsString = "";
    $.ajax({
        url: "libs/php/getAllDepartments.php",
        type: "GET",
        dataType: "json",
        success: function(result) {
            result.data.map((item) => {
                selectorsString += "#" + item.name.replace(/ /g, "_") + ", ";
            });
            const cleanedSelectors = selectorsString.slice(0, -2);
            $(cleanedSelectors).sortable({
                connectWith: ".card-body",
                receive: function(event, ui) {
                    const name = $(ui.item).attr("id");
                    const lastName = name.split("_")[1];
                    $.ajax({
                        url: "libs/php/employeeChangesDepartment.php",
                        type: "POST",
                        dataType: "json",
                        data: {
                            lastName: lastName,
                            departmentName: event.target.id.replace("_", " "),
                        },
                        success: function(result) {},
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.log(jqXHR);
                        },
                    });
                },
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
};

// provide data for edit Department modal
$("#deleteDepartmentModal").on("shown.bs.modal", function(e) {
    const id = localStorage.getItem("departmentId");
    $.ajax({
        url: "libs/php/getEmployeesByDepartmentId.php",
        type: "GET",
        dataType: "json",
        data: {
            id: id,
        },
        success: function(result) {
            if (result.data.length !== 0) {
                $("#deleteDepartmentMessage").html(
                    "This department still has employees. Please relocate them to a different department."
                );
            } else {
                $("#deleteDepartmentMessage").html(
                    "Are you sure you would like to delete this department?"
                );
                $("#confirmDeleteDepartmentButton").css("display", "block");
            }
            $("#confirmDeleteDepartmentButton").on("click", function() {
                const departmentId = parseInt(localStorage.getItem("departmentId"));
                $.ajax({
                    url: "libs/php/deleteDepartmentByID.php",
                    type: "POST",
                    dataType: "json",
                    data: {
                        departmentId: departmentId,
                    },
                    success: function(result) {
                        history.pushState({ message: "departmentDeleted" },
                            "title 1",
                            "?message=departmentDeleted"
                        );
                        window.location.reload();
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                    },
                });
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
    $("#deleteDepartmentButton").on("click", function() {
        $("#editDepartmentModal").modal("hide");
        $("#deleteDepartmentModal").modal("show");
    });
});

// cleaning the employee profile on close
$("#deleteDepartmentModal").on("hidden.bs.modal", function() {
    $("#deleteDepartmentMessage").html(" ");
    $("#confirmDeleteDepartmentButton").css("display", "none");
});

//provide data for edit Department modal
$("#editDepartmentModal").on("shown.bs.modal", function(e) {
    const departmentId = localStorage.getItem("departmentId");
    $(".updateSettings").attr("value", departmentId);
    $(".locationOpt").remove();
    $.ajax({
        url: "libs/php/getAllLocations.php",
        type: "GET",
        dataType: "json",
        success: function(result) {
            result.data.map((item) => {
                $("#locationsEditSelect").append(
                    "<option class='locationOpt' value=" +
                    item.id +
                    ">" +
                    item.name +
                    "</option>"
                );
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
    });
    $("#deleteDepartmentButton").on("click", function() {
        $("#editDepartmentModal").modal("hide");
        $("#deleteDepartmentModal").modal("show");
    });
});

// makes an ajax call to insert a new department to the database
$("#insertNewEmployeeModal").on("shown.bs.modal", function(e) {
    $(".departmentOpts").remove();
    $.ajax({
        url: "libs/php/getAllDepartments.php",
        type: "GET",
        dataType: "json",
        success: function(result) {
            result.data.map((item) => {
                $("#newEmployeeDepartment").append(
                    "<option class='departmentOpts' value=" +
                    item.id +
                    ">" +
                    item.name +
                    "</option>"
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
    $(".locationopt").remove();
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
                    "<option class='locationopt' value=" +
                    item.id +
                    ">" +
                    item.name +
                    "</option>"
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

$("#menuIconContainer3").on("mouseenter", function() {
    $("#locationPassive").css("display", "none");
    $("#locationActive").css("display", "flex");
});

$("#menuIconContainer3").on("mouseleave", function() {
    $("#locationPassive").css("display", "flex");
    $("#locationActive").css("display", "none");
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
                "</h4><i class='fas fa-cog departmentEditPassive' data-toggle='modal' data-target='#editDepartmentModal' id=" +
                department.id +
                "></i></div><div class='card-body' id=" +
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
                $(".departmentEditPassive").on("click", function(e) {
                    localStorage.setItem("departmentId", e.currentTarget.id);
                });
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

// functions runned on leave
$(window).bind("beforeunload", function() {
    localStorage.clear();
});