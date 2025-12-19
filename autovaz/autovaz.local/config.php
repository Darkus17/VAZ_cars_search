<?php
// Конфигурация базы данных
define('DB_HOST', 'MySQL-8.4');
define('DB_USER', 'root');
define('DB_PASS', ''); // Измени на свой пароль
define('DB_NAME', 'auto_catalog');

// Создаем соединение с базой данных
function getDBConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    // Проверяем соединение
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Устанавливаем кодировку UTF-8
    $conn->set_charset("utf8");
    
    return $conn;
}
?>