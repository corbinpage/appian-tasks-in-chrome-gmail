InboxSDK.load(1, 'sdk_appian-tasks_8f26985331').then(function(sdk) {

	var routeID = 'appian/tasks/assignedtome';

	sdk.Router.handleCustomRoute(routeID, function(customRouteView){
		var large = '<script src="https://appswest.princetonblue.net:8443/suite/tempo/tempo.nocache.js"></script>' +
								'<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>' +
								'<script>' +
								'  /* This function dynamically inserts an <appian-task> tag into the page with the user-specified taskId */' +
								'  function addTask() {' +
								'    var taskId = $("#new-task").val();' +
								'    if (taskId) {' +
								'      $("<appian-task />").attr("taskId", taskId).on("submit", handleSubmit).appendTo("#taskContent");' +
								'    }' +
								'  }' +
								'  /* This function is called by the submit event listener */' +
								'  function handleSubmit() {' +
								'    alert("The task has been submitted!");' +
								'  }' +
								'</script>' +
								'<div id="inputs">' +
								'  <input id="new-task" /><button onclick="return addTask();">New Task</button>' +
								'</div>' +
								'<div id="taskContent"></div>';

		var contentDiv = customRouteView.getElement();

		$.get('taskDataJson.json', function(jsonData) {
			console.log(jsonData);
						contentDiv.innerText = jsonData;
			   		// $('#div').html(data.replace('n','<br />'));
					},'text');


		// contentDiv.innerHTML = large;




			});

	sdk.NavMenu.addNavItem({
		name: 'Appian - My Tasks',
		routeID: routeID,
		routeParams: {state: 'Testing'}
	});

});