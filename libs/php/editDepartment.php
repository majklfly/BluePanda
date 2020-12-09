<?php

	// example use from browser
	// http://localhost/companydirectory/libs/php/insertDepartment.php?name=New%20Department&locationID=1

	// remove next two lines for production
	
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);

	include("config.php");

	header('Content-Type: application/json; charset=UTF-8');

	$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port, $cd_socket);

	if (mysqli_connect_errno()) {
		
		$output['status']['code'] = "300";
		$output['status']['name'] = "failure";
		$output['status']['description'] = "database unavailable";
		$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output);

		exit;

	}

	$result = false;
    
    if (strlen($_POST['name']) > 1) {
        $query = 'UPDATE department SET name = "' . $_POST['name'] . '" WHERE id = ' . $_POST['departmentId'];
		$response = $conn->query($query);
        if (!$response) {
            $result = false;
        } else {
			$result = true;
		};
	};
	
	if ($_POST['locations'] != "0") {
        $query = 'UPDATE department SET locationID = ' . $_POST['locations'] . ' WHERE id = ' . $_POST['departmentId'];
		$response = $conn->query($query);
        if (!$response) {
            $result = false;
        } else {
			$result = true;
		};
    };
	
	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		header("Location: ../../index.html?message=employeeEditError");

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = [];

	header("Location: ../../index.html?message=departmentEdited");
	
	mysqli_close($conn);

	echo json_encode($output); 