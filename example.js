
$(function() {
  loadPermissions();
});

var appianUrl = "Empty";
var needAppianUrl = true;

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

function loadPermissions() {
  chrome.storage.local.get("appianUrl", function(result){
    if($.isEmptyObject(result)) {
      needAppianUrl = true;
      initializeRoute($("body"));
    } else {
      appianUrl = result["appianUrl"];
      needAppianUrl = false;
      initializeRoute($("body"));
    }
  });  
}

function initializeRoute($parentDiv) {
  populateParentContainer($parentDiv);
  if(needAppianUrl) {
    populateInputPermissionUI($parentDiv);
  } else {
    populateTaskListUI();
  }
}

function populateInputPermissionUI($parentDiv) {
  populateContainer();
  $("#nl-gtaskList-container")
  .append($("<form>")
          .append($("<input>")
                  .attr("id","input-permission-text")
                  .attr("type","text")
                  .attr("value",appianUrl))
          .append($("<input>").attr("id","input-permission-button")
                  .attr("type","button")
                  .attr("value","Submit")))
          // .append($("<a>", {
          //   href: "#",
          //   id: "input-appian-url",
          //   "data-type": "text",
          //   "data-pk": "1",
          //   "data-placeholder": "Required",
          //   "data-title": "Enter Appian URL (http..suite/)",
          //   class: "editable editable-click editable-empty"
          // }).val(appianUrl)))


  $(function() {
    $('#input-permission-button').click(function() {
      var input = $('#input-permission-text').val();
      chrome.storage.local.set({"appianUrl": input})
      appianUrl = input;
      initializeRoute($parentDiv);
    });
  });
}

function populateTaskListUI(){
  populateContainer();
  // var url = "https://api.myjson.com/bins/3ex3g";
  var url = appianUrl;
  // var headers;

  $.getJSON(url)
  .done(function(data) {
    populateSuccess(data);
  })
  .fail(function(xhr, textStatus, errorThrown) {
    console.log(xhr);
    console.log(textStatus);
    console.log(errorThrown);
    populateContainerHeader(textStatus, xhr["status"]+" "+xhr["responseText"]+": "+errorThrown);
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

function populateParentContainer($parentDiv) {
  $parentDiv.empty();
  $parentDiv.append($("<div>", {id: "nl-gtaskList-parent-container",
                    class: "nl-gtaskList-parent-container"}));

  $("#nl-gtaskList-parent-container").append($("<input>", {
    id: "view-permission-button",
    type: "button",
    value: "Settings"})
  );

  $(function() {
    $("#view-permission-button").click(function() {
      $('#nl-gtaskList-container').empty();
      populateInputPermissionUI($parentDiv);
    });
  });
}

function populateContainer() {
  $("#nl-gtaskList-parent-container").append($("<div>", {
    id:    "nl-gtaskList-container",
    class: "nl-gtaskList-container"})
  );
}

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
