<?php
// Include database connection
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

// SQL query to fetch all events
$query = "SELECT * FROM event";
$result = $conn->query($query);

// Check for and handle query errors
if (!$result) {
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
    exit;
}

// Fetch all events
$events = array();
while ($row = $result->fetch_assoc()) {
    $events[] = $row;
}

// Return events as JSON
echo json_encode(["success" => true, "events" => $events]);

// Close the database connection
$conn->close();
?>
