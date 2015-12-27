InboxSDK.load(1, 'sdk_appian-tasks_8f26985331').then(function(sdk) {
// $(function() {

	var routeID = 'appian/tasks/assignedtome';
	var ERROR_CODE_NOT_AUTH = "APNX-1-4187-000";
	var DOMAIN_BASE = "https://navlabsdev.appiancloud.com/suite";
	var environmentBase;
	var ENVIRONMENT_BASE_KEY = "environmentBase";
	var manifest = chrome.runtime.getManifest();
	var WEB_API_ROUTE = "/webapi/usertasklist";
	var TASK_LIST_ROUTE = "/tempo/tasks/assignedtome";
	var url = DOMAIN_BASE + WEB_API_ROUTE;

	sdk.Router.handleCustomRoute(routeID, function(customRouteView){
		displayContainer($(customRouteView.getElement()));
		// displayContainer($("#local-container"));  // For testing locally
		displayWaiting();
		getEnvironment();

		if(environmentBase) {
			getTaskListData();	
		} else {
			displayInputEnvironment()
		}

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
			console.log(xhr.status === 401);
			

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

			$( ".set-environment-link" ).click(function() {
				displayInputEnvironment();
				return false;
			});

			$( ".task-refresh-link" ).click(function() {
				displayWaiting();
				getTaskListData();
				return false;
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

	function displayInputEnvironment() {
		var template = 'inputEnvironment.html';

		$.get(chrome.extension.getURL('/views/' + template), function(display) {
			var rendered = Mustache.render(display);
			$( "#appian-task-list-target" ).html(rendered);

			$( "#save-env-base" ).click(function() {
				console.log("Save clicked");
				setEnvironment($( "#env-base" ).val());
				displayWaiting();
				getTaskListData();
			});

		});
	}

function validateEnvironment(envBase) {
// $( "#validateEnvBase" ).click(function() {
// 	if($( "#envBase" ).val() && validateEnvironment($( "#envBase" ).val())) {
// 		$(".form-group").addClass('has-success');
// 		$("#saveEnvBase").removeClass('disabled');
// 	} else {
// 		$(".form-group").addClass('has-error');
// 		console.log("Try again");
// 	}
// });
	return true;
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
		} 
	});
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