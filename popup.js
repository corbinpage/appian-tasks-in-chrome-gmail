$(function() {

  /* This function dynamically inserts an <appian-task> tag into the page with the user-specified taskId */
  function addTask() {
    var taskId = $("#new-task").val();
    if (taskId) {
      $('<appian-task />').attr("taskId", taskId).on("submit", handleSubmit).appendTo("#taskContent");
    }
  }

  /* This function is called by the submit event listener */
  function handleSubmit() {
    console.log("The task has been submitted!");
  }

  $( "#task-button" ).click(function() {
    console.log( "Button Clicked!");
    addTask();
  });

});


// 536871180
