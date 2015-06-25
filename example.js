
$(function() {
  loadPermissions();
  initializeRoute($("body"));
});

var appianUrl = "";
var needPermissionsBool = true;

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

function loadPermissions() {
  chrome.storage.local.get('appianUrl', function(result){
    appianUrl = result;
    if($.isEmptyObject(appianUrl)) {
      needPermissionsBool = true;
    } else {
      needPermissionsBool = false;
    }
  });  
}

function initializeRoute($parentDiv) {
  if(needPermissionsBool) {
    populateInputPermissionUI($parentDiv);
  } else {
    populateTaskListUI($parentDiv);
  }
}

function populateInputPermissionUI($parentDiv) {
  $parentDiv.append($("<div>", {id:    "nl-gtaskList-container",
                    class: "nl-gtaskList-container"}));
  $("#nl-gtaskList-container")
  .append($("<form>").
          .append($("<input>")
                  .attr("id","input-permission-text")
                  .attr("type","text"))
          .append($("<input>").attr("id","input-permission-button")
                  .attr("type","button")
                  .attr("value","Submit")))

  $(function() {
    $('#input-permission-button').click(function() {
        appianUrl = $('#input-permission-text').val();
      });
  });
}

function populateTaskListUI($parentDiv){
  $parentDiv.append($("<div>", {id:    "nl-gtaskList-container",
                    class: "nl-gtaskList-container"}));

  var url = "https://api.myjson.com/bins/3ex3g";
  // var headers;

  $.getJSON(url)
  .done(function(data) {
    populateSuccess(data);
  })
  .fail(function(xhr, textStatus, errorThrown) {
    console.log(xhr);
    console.log(textStatus);
    console.log(errorThrown);
    populateContainerHeader(textStatus, errorThrown);
  })
  // .always(function() {
  //   
  // });

}

function populateSuccess(data) {
  var taskListTitle = "My Current Tasks";
  var taskListInstructions = "View your current tasks and select one to open it in a new tab.";
  populateContainerHeader(taskListTitle, taskListInstructions);

  $("#nl-gtaskList-container").append($("<div>")
                                      .addClass("nl-gtaskList-table-container")
                                      .attr("id","nl-gtaskList-table-container"));

  if(data.totalCount <= 0) {
    $("#nl-gtaskList-table-container").append($("<p>")
                                              .append($("<em>")
                                                      .text("No tasks available in your Task list.   :-(")));
  } else {
    createTaskListTable(data);
  }

}

// function populateError(data) {
//   populateContainerHeader("Error Occurred", data.errorMessage);
// }

function populateContainerHeader(title, instructions) {
  $("#nl-gtaskList-container").append($("<div>")
                                      .append($("<h2>")
                                              .addClass("appian-form-title")
                                              .text(title))
                                      .append($("<p>")
                                              .addClass("appian-form-instructions")
                                              .text(instructions)));
}

function createTableHeader(){
  headerText = ["Task Name", "Received", "Assignee/Owner", "Status", "Process", "ID"];
  var $tr = $("<tr>");

  $.each(headerText, function( index, value ){
    $tr.append($("<th>").text(value));
  });

  return $("<thead>").append($tr);
}

function createTaskListTable(taskData){
  var $tbody  = $("<tbody>");

  $.each(taskData.data, function(i, row ){
    var $tr = $("<tr>");
    cols = ["c0","c1","c2","c3","c4","c5",]

    $.each(cols, function(j, col){
      if(j==0) {
        $tr.append($("<td>").append($("<a>").attr("href","#").text(row[col])));  
      } else {
        $tr.append($("<td>").text(row[col]));        
      }
    });

    $tbody.append($tr);
  });

  var $tbl  = $('<table>').prepend(createTableHeader()).append($tbody);
  $("#nl-gtaskList-table-container").append($tbl);
}
