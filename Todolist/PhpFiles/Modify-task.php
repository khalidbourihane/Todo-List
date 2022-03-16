<?php 

include 'config.php';

$id = $_POST['id'];
$modiftask = $_POST['modiftask'];

$sql = "UPDATE tasks SET text='$modiftask' WHERE id='$id'";
$result = mysqli_query($conn, $sql);


if ($result) {
    echo 1;
} else {
    echo 0;
}

?>