InboxSDK.load(1, 'sdk_appian-tasks_8f26985331').then(function(sdk) {
	// $(function() {

		var routeID = 'appian/tasks/assignedtome';
		var ERROR_CODE_NOT_AUTH = "APNX-1-4187-000";
		var DOMAIN_BASE = "https://navlabsdev.appiancloud.com/suite";
		var manifest = chrome.runtime.getManifest();
		var WEB_API_ROUTE = "/webapi/usertasklist";
		var TASK_LIST_ROUTE = "/tempo/tasks/assignedtome";
		var url = DOMAIN_BASE + WEB_API_ROUTE;

	sdk.Router.handleCustomRoute(routeID, function(customRouteView){
		displayContainer($(customRouteView.getElement()));
		// displayContainer($("#local-container"));
		displayWaiting();
		getTaskListData();

	});


function getTaskListData() {
	$.getJSON(url)
	.done(function(data) {
		if(data.error && data.error === ERROR_CODE_NOT_AUTH) {
			displayErrorNotAuth();
		} else {
			displayTaskList(data);        
		}
	})
	.fail(function(xhr, textStatus, errorThrown) {
		console.log("Error: " + errorThrown);
		console.log(xhr);
		if( xhr.status === 401 ) {
			displayErrorNotAuth();
		} else {
			displayGeneralError(xhr);
		}
	})
}

function displayContainer($parent) {
	$.get(chrome.extension.getURL('views/container.html'), function(template) {
		var rendered = Mustache.render(template, {
			title: "My Current Tasks",
			instructions: "View your active tasks and select one to open it in a new tab."
		});
		$parent.html(rendered);

		$( ".task-refresh-link" ).click(function() {
			displayWaiting();
			getTaskListData();
		});
	});
}

function displayWaiting() {
	renderTemplate('waiting.html');
}

function displayTaskList(data) {
	data["columnLabels"] = ["Task Name", "Received", "Assignee/Owner", "Status", "Process"];
	data["taskLinkRoute"] = DOMAIN_BASE + TASK_LIST_ROUTE;

	renderTemplate('taskList.html', data);
}

function displayErrorNotAuth() {
	renderTemplate('notAuthError.html', {
		taskLinkRoute: DOMAIN_BASE + TASK_LIST_ROUTE
	});
}

function displayGeneralError(data) {
	renderTemplate('error.html', data);
}

function renderTemplate(templateFile, data) {
	$.get(chrome.extension.getURL('/views/' + templateFile), function(template) {
		var rendered = Mustache.render(template, data);
		$( "#appian-task-list-target" ).html(rendered);
	});
}

sdk.NavMenu.addNavItem({
	name: 'Appian - My Tasks',
	routeID: routeID,
	routeParams: {state: 'TaskList'}
});

});