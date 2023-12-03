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



// Get JSON POST data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$telephone = $data['telephone'] ?? '';
$subject = $data['subject'] ?? '';
$message = $data['message'] ?? '';

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO contact(name, email, telephone, subject, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $email, $telephone, $subject, $message);

// Execute and respond
if ($stmt->execute()) {
    echo json_encode(["message" => "Successfully submitted"]);
} else {
    echo json_encode(["message" => "Submission failed"]);
}

$stmt->close();
$conn->close();



?>