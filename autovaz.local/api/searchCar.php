<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
require_once '../config.php';

$conn = getDBConnection();

// Получаем модель из запроса
$model = isset($_GET['model']) ? $_GET['model'] : '';

if (empty($model)) {
    echo json_encode([
        'success' => false,
        'message' => 'Не указана модель автомобиля'
    ]);
    exit;
}

// Поиск автомобиля по модели (регистронезависимый)
$sql = "SELECT * FROM cars WHERE LOWER(model) = LOWER(?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $model);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $car = $result->fetch_assoc();
    echo json_encode([
        'success' => true,
        'data' => $car
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Автомобиль не найден'
    ]);
}

$stmt->close();
$conn->close();
?>