<?php
// forget_password.php
header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST , DELETE , GET , OPTION');
header('Access-Control-Allow-Headers: Content-Type, Authorization'); 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "eventup";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $email = $data['email'];

    // Check if the email exists in the database
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        // Email exists
        echo json_encode(["success" => true, "message" => "Email exists. Proceed to reset password."]);
    } else {
        // Email does not exist
        echo json_encode(["success" => false, "message" => "Email not found"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
