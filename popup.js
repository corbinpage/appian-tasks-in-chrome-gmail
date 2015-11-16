$(function() {

  var DOMAIN_BASE = "https://navlabsdev.appiancloud.com/suite";
  var WEB_API_ROUTE = "/webapi/usertasklist?username=cpage";
  var TASK_LIST_ROUTE = "/tempo/tasks/task/";
  var USERNAME = "corbin@nav-labs.com";

  function run() {
    var url = "https://api.myjson.com/bins/3i6o9";
    // var url = "https://navlabsdev.appiancloud.com/suite/webapi/usertasklist?username=cpage";
    var output;

    $.getJSON(url)
    .done(function(data) {
      renderSuccess($("#task-list-container"), data[0]);
    })
    .fail(function(xhr, textStatus, errorThrown) {
      console.log(xhr);
      console.log(textStatus);
      console.log(errorThrown);

      renderError($("#task-list-container"), xhr);
    })

  }

  function renderSuccess($target, data) {
    data["columnLabels"] = ["Task Name", "Received", "Assignee/Owner", "Status", "Process"];
    data["columnIds"] = ["c0","c1","c2","c3","c4"];

    console.log(data);

    $.get('views/taskList.html', function(template) {
      var rendered = Mustache.render(template, {
        title: "My Current Tasks",
        instructions: "View your current tasks and select one to open it in a new tab.",
        data: data
      });
      $($target).html(rendered);
    });
  }

  function renderError($target, data) {
    $.get('views/error.html', function(template) {
      var rendered = Mustache.render(template, {
        title: "Error: " + data.status,
        instructions: data.responseText
      });
      $($target).html(rendered);
    });
  }

  run();

});