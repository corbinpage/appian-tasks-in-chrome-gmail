var ERROR_CODE_NOT_AUTH = "APNX-1-4187-000";

InboxSDK.load(1, 'sdk_appian-tasks_8f26985331').then(function(sdk) {

	var routeID = 'appian/tasks/assignedtome';

	sdk.Router.handleCustomRoute(routeID, function(customRouteView){
		displayContainer($(customRouteView.getElement()));
		displayWaiting();
		displayFormatted();

		var DOMAIN_BASE = "https://navlabsdev.appiancloud.com/suite";
		var WEB_API_ROUTE = "/webapi/usertasklist";
		var url = DOMAIN_BASE + WEB_API_ROUTE;

		console.log("Starting query");

		$.getJSON("https://navlabsdev.appiancloud.com/suite/webapi/usertasklist")
		.done(function(data) {
			console.log("Success");			
			console.log(data);
			if(data.error && data.error === ERROR_CODE_NOT_AUTH) {
				displayErrorNotAuth(data);
			} else {
				displayTaskList(data);        
			}
		})
		.fail(function(xhr, textStatus, errorThrown) {
			console.log("Error");
			console.log(xhr);
			console.log(textStatus);
			console.log(errorThrown);

			if( xhr.status === 401 ) {
				displayErrorNotAuth(xhr);
			} else {
				displayGeneralError(xhr);
			}
		})

		

	});

	function displayFormatted() {
		$.get(chrome.extension.getURL('views/taskListPopulated.html'), function(template) {
			var rendered = Mustache.render(template, {
				title: "My Current Tasks",
				instructions: "View your active tasks and select one to open it in a new tab."
			});
			$( "#appian-task-list-target2" ).html(rendered);
		});
	}

	function displayContainer($parent) {
		$.get(chrome.extension.getURL('views/container.html'), function(template) {
			var rendered = Mustache.render(template, {
				title: "My Current Tasks",
				instructions: "View your active tasks and select one to open it in a new tab."
			});
			$parent.html(rendered);
		});
	}

	function displayWaiting() {
		var rendered = "<p>Waiting..</p>"
		$( "#appian-task-list-target" ).html(rendered);
	}


	function displayTaskList(data) {
		data["columnLabels"] = ["Task Name", "Received", "Assignee/Owner", "Status", "Process"];
		data["taskLinkRoute"] = DOMAIN_BASE + TASK_LIST_ROUTE;

		$.get(chrome.extension.getURL('views/taskList.html'), function(template) {
			var rendered = Mustache.render(template, {
				title: "My Current Tasks",
				instructions: "View your active tasks and select one to open it in a new tab.",
				data: data
			});
			$( "#appian-task-list-target" ).html(rendered);
		});
	}

	function displayErrorNotAuth(data) {
	// console.log("Not Authenticated Error");
	data["showNotAuthSection"] = true;

	$.get(chrome.extension.getURL('/views/error.html'), function(template) {
		var rendered = Mustache.render(template, {
			title: data.status,
			instructions: data.responseText
		});
		$($( "#appian-task-list-target" )).html(rendered);
	});

}

function displayGeneralError(data) {
	// console.log("General Error");
	$.get(chrome.extension.getURL('views/error.html'), function(template) {
		var rendered = Mustache.render(template, {
			title: "Error: " + data.status,
			instructions: data.responseText
		});
		$( "#appian-task-list-target" ).html(rendered);
	});
}

sdk.NavMenu.addNavItem({
	name: 'Appian - My Tasks',
	routeID: routeID,
	routeParams: {state: 'Testing'}
});

});