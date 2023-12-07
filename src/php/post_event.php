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
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Assigning POST data to variables
    $title = $data['title'] ?? '';;
    $category = $data['category'] ?? '';
    $price = $data['price'] ?? '';;
    $description = $data['description'] ?? '';
    $organizer = $data['organizer'] ?? '';
    $start_time = $data['start_time']?? '';
    $end_time = $data['end_time']?? '';
    $date = $data['date']?? '';
    $location = $data['location']?? '';
    $city = $data['city']?? '';
    $spaces = $data['spaces']?? '';



     // Prepare the SQL statement
     $stmt = $conn->prepare("INSERT INTO event(title, category, price, description, organizer, start_time, end_time, date, location, city, spaces) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

     // Bind parameters to the prepared statement
     $stmt->bind_param("ssisssssssi", $title,$category,$price,$description,$organizer,$start_time,$end_time,$date,$location,$city,$spaces);


    // Execute the prepared statement
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Event created successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();

}else{
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}




?>