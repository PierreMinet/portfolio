<?php

// Set response type to JSON

header('Content-Type: application/json');


// Double check if the method is POST, else rejects it

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}


// Reads raw body of request, then turns the JSON string into a PHP variable with an associative array

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid JSON']);
  exit;
}

$servername = "";
$username = "";
$password = "";
$dbname = "";


// Set up connection

$conn = new mysqli($servername, $username, $password, $dbname);


// Check for errors

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// Retrieve datas from the decoded json and sanitize them

$firstName = trim($data['firstName'] ?? '');
$lastName  = trim($data['lastName'] ?? '');
$mail      = trim($data['mail'] ?? '');
$message   = trim($data['message'] ?? '');


// Check fields

if (!$firstName || !$lastName || !$mail || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required']);
    exit;
}


// Check if the mail address is a valid one

if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}



// Convert all values to strings to prevent safety issues
// Send the datas to the database

$stmt = $conn->prepare("INSERT INTO contact (firstName, lastName, mail, message) VALUES (?, ?, ?, ?)");

if (!$stmt) {
  http_response_code(500);
  echo json_encode(['error' => 'Failed to prepare statement']);
  exit;
}

$stmt->bind_param("ssss", $firstName, $lastName, $mail, $message);


// Connection status

if ($stmt->execute()) {
  echo json_encode(['success' => true]);
} else {
  http_response_code(500);
  echo json_encode(['error' => 'Failed to insert data']);
}

$stmt->close();
$conn->close();

?>