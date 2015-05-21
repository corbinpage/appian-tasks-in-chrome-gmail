InboxSDK.load(1, 'sdk_appian-tasks_8f26985331').then(function(sdk) {

	var routeID = 'helloWorld/:country';

	sdk.Router.handleCustomRoute(routeID, function(customRouteView){
		customRouteView.getElement().textContent = 'hello world! ' + customRouteView.getParams().country;
	});

	sdk.NavMenu.addNavItem({
		name: 'Hello Canada',
		routeID: routeID,
		routeParams: {country: 'Canada'}
	});

});