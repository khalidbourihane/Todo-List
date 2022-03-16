<?php 

include 'config.php';

$sql = "SELECT * FROM tasks";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {

?>

<li>
    <span class="text"><?php echo $row['text']; ?></span>
    <i id="removeBtn" class="icon fa fa-trash" data-id="<?php echo $row['id']; ?>"></i>
    <i id="displaymodif" class="icon1 fa fa-gear" data-id="<?php echo $row['id']; ?>"></i>
</li>

<div id='modify-task' class="<?php echo $row['id']; ?>">
					<input type="text" class="modif" id="<?php echo $row['id']; ?>" value="<?php echo $row['text']; ?>">
                    <i id="ModifyBtn" class="icon3 fa fa-check" data-id="<?php echo $row['id']; ?>"></i>
                    </div>
<?php
    }
    echo '<div class="pending-text">You have ' . mysqli_num_rows($result) . ' pending tasks.</div>';
} else {
    echo "<li><span class='text'>Create Your First Task.</span></li>";
}

?>