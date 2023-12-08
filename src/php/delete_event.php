<?php
// delete_event.php
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

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $eventId = $_GET['ID'];

    $stmt = $conn->prepare("DELETE FROM event WHERE ID = ?");
    $stmt->bind_param("i", $eventId);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Event deleted successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error deleting event"]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}

$conn->close();
?>
