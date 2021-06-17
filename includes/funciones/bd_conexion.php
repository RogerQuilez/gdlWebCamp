<?php
    // Para conectar un pagina web con tu base de datos
    $conn = new mysqli('localhost', 'root', 'root', 'gdlwebcamp');

    if($conn->connect_error) {
        echo $error -> $conn->connect_error;
    }

?>