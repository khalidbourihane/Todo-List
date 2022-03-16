$(document).ready(function() {
    // Show Tasks
    function loadTasks() {
        $.ajax({
            url: "PhpFiles/show-tasks.php",
            type: "POST",
            success: function(data) {
                $("#tasks").html(data);
            }
        });
    }

    loadTasks();

    // Add Task
    $("#addbtn").on("click", function(e) {
        e.preventDefault();

        var task = $("#taskValue").val();

        if (task=="")
        {
            $(".Info-box").html("Type your task please !");
        }
        else{
            $(".Info-box").empty()
        $.ajax({
            url: "PhpFiles/add-task.php",
            type: "POST",
            data: {task: task},
            success: function(data) {
                loadTasks();
                $("#taskValue").val('');
                if (data == 0) {
                    alert("Something wrong went. Please try again.");
                    
                }
            }
        });
    }
    });

    // Remove Task
    $(document).on("click", "#removeBtn", function(e) {
        e.preventDefault();
        var id = $(this).data('id');
        
        $.ajax({
            url: "PhpFiles/remove-task.php",
            type: "POST",
            data: {id: id},
            success: function(data) {
                loadTasks();
                if (data == 0) {
                    alert("Something wrong went. Please try again.");
                }
            }
        });
    });

    // Modify Task
    $(document).on("click", "#displaymodif", function() {
       var idpop= $(this).data('id').toString();
       $("."+idpop).css("display", "block");
    });

    $(document).on("click", "#ModifyBtn", function(e) {
        e.preventDefault();
        var idpop= $(this).data('id').toString();
        var id = $(this).data('id');
        var modiftask = $("#"+idpop).val();
        $.ajax({
            url: "PhpFiles/Modify-task.php",
            type: "POST",
            data: {id: id,modiftask: modiftask},
            success: function(data) {
                loadTasks();
                if (data == 0) {
                    alert("Something wrong went. Please try again.");
                }
                else
                {

                }
            }
        });
    });

});