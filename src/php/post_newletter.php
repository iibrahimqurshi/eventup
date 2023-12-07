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


if ($_SERVER["REQUEST_METHOD"] == "POST") {

// Get JSON POST data
$json = file_get_contents('php://input');
$data = json_decode($json, true);


$email = $data['email'] ?? '';

// Prepare and bind
for ($i=0; $i < 1; $i++) { 
    # code...
$stmt = $conn->prepare("INSERT INTO newsletter(email) VALUES (?)");
$stmt->bind_param("s", $email);

// Execute and respond
if ($stmt->execute()) {
    echo json_encode(["message" => "Successfully submitted"]);
} else {
    echo json_encode(["message" => "Submission failed"]);
}

$stmt->close();
$conn->close();
}


}else{
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}

?>