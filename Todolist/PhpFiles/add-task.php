<?php 

include 'config.php';

$task = $_POST['task'];

$sql = "INSERT INTO tasks (text) VALUES ('$task')";
$result = mysqli_query($conn, $sql);

if ($result) {
    echo 1;
} else {
    echo 0;
}

?>