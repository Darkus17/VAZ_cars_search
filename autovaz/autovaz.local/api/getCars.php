<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
require_once '../config.php';

$conn = getDBConnection();

// Получаем все автомобили
$sql = "SELECT * FROM cars ORDER BY year";
$result = $conn->query($sql);

$cars = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $cars[] = $row;
    }
    echo json_encode([
        'success' => true,
        'data' => $cars
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Автомобили не найдены'
    ]);
}

$conn->close();
?>