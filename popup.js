$(function() {

  var DOMAIN_BASE = "https://navlabsdev.appiancloud.com/suite";
  var WEB_API_ROUTE = "/webapi/usertasklist";
  var TASK_LIST_ROUTE = "/tempo/tasks/task/";
  var USERNAME = "corbin@nav-labs.com";
  var ERROR_CODE_NOT_AUTH = "APNX-1-4187-000";
  var ENVIRONMENT_BASE_KEY = "envBase";

  var $targetContainer = $("#task-list-container");
  var environmentBase;


  function run() {
    if(environmentBase) {
      getTaskList();
    } else {
      getEnvironment();
    }
  }

  function getTaskList() {
    var url = "https://api.myjson.com/bins/476fx"; // 3 Tasks
    // var url = "https://api.myjson.com/bins/402ch"; // No Tasks
    // var url = "https://api.myjson.com/bins/2ac4h"; // Not authenticated
    // var url = "https://navlabsdev.appiancloud.com/suite/webapi/usertasklist?username=cpage";
    // var url = environmentBase + WEB_API_ROUTE;

    $.getJSON(url)
    .done(function(data) {
      // console.log(data);
      if(data.error && data.error === ERROR_CODE_NOT_AUTH) {
        displayErrorNotAuth(data);
      } else {
        displayTaskList(data);        
      }
    })
    .fail(function(xhr, textStatus, errorThrown) {
      console.log(xhr);
      console.log(textStatus);
      console.log(errorThrown);

      displayGeneralError(xhr);
    })
  }

  function validateEnvironment(envBase) {
    return true;
  }

  function addEventListeners() {
    $( "#validateEnvBase" ).click(function() {

      if($( "#envBase" ).val() && validateEnvironment($( "#envBase" ).val())) {
        $(".form-group").addClass('has-success');
        $("#saveEnvBase").removeClass('disabled');
      } else {
        $(".form-group").addClass('has-error');
        console.log("Try again");
      }
    });

    $( "#saveEnvBase" ).click(function() {
      setEnvironment($( "envBase" ).val());
      $("#no-perm").addClass('hidden');
      getTaskList()
    });
  }

  function setEnvironment(envBase) {
    environmentBase = envBase;
    var keyStore = {};
    keyStore[ENVIRONMENT_BASE_KEY] = envBase;
    chrome.storage.sync.set(keyStore);
  }

  function getEnvironment() {
    chrome.storage.sync.get(ENVIRONMENT_BASE_KEY, function(items){
      if(items && items[ENVIRONMENT_BASE_KEY]){ 
        environmentBase = items[ENVIRONMENT_BASE_KEY];
        getTaskList()
      } else {
        displayInputEnvironment();
      }
    });
  }

  function displayTaskList(data) {
    data["columnLabels"] = ["Task Name", "Received", "Assignee/Owner", "Status", "Process"];
    data["taskLinkRoute"] = DOMAIN_BASE + TASK_LIST_ROUTE;

    $.get('views/taskList.html', function(template) {
      var rendered = Mustache.render(template, {
        title: "My Current Tasks",
        instructions: "View your active tasks and select one to open it in a new tab.",
        data: data
      });
      $($targetContainer).html(rendered);
    });
  }

  function displayErrorNotAuth(data) {
    data["showNotAuthSection"] = true;

    $.get('views/error.html', function(template) {
      var rendered = Mustache.render(template, {
        title: data.title,
        instructions: data.message
      });
      $($targetContainer).html(rendered);
    });
  }

  function displayInputEnvironment() {
    addEventListeners();
    $("#no-perm").removeClass('hidden');
  }

  function displayGeneralError(data) {
    $.get('views/error.html', function(template) {
      var rendered = Mustache.render(template, {
        title: "Error: " + data.status,
        instructions: data.responseText
      });
      $($targetContainer).html(rendered);
    });
  }

  run();

  setEnvironment("CPage");
  getEnvironment();

});