<?php

header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$servername = "localhost";
$username = "root"; 
$password = "";
$dbname = "eventup"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if 'id' parameter is set in the URL query string
if (isset($_GET['ID'])) {
    $eventId = $_GET['ID'];

    // Prepare SQL statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM event WHERE ID = ?");
    $stmt->bind_param("i", $eventId); // 'i' specifies the variable type is integer

    // Execute the statement
    $stmt->execute();

    // Get the result of the query
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        // Fetch result as an associative array
        $event = $result->fetch_assoc();

        // Return event details as JSON
        echo json_encode(["success" => true, "event" => $event]);
    } else {
        // Event not found
        echo json_encode(["success" => false, "message" => "Event not found"]);
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
} else {
    // ID parameter not provided in URL
    echo json_encode(["success" => false, "message" => "Event ID not provided"]);
}
?>