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

		var relatedActionHtml = '<script>https://appswest.princetonblue.net:8443/suite/tempo/tempo.nocache.js</script>' + 
		'<appian-related-action recordTypeUrlStub="case-app-customers" recordIdentifier="1" processModelUuid="0003daa1-7b50-8000-f92f-7f0000014e7a" />';

		var taskHtml = '<appian-task taskId="123" />'





		var contentDiv = customRouteView.getElement();
		// contentDiv.innerHTML = taskHtml;

		var taskList = jsonData

		var container = createContainer();

		var tbl = tableCreate(taskList);
		container.appendChild(tbl);
		contentDiv.appendChild(container);

	});

function createContainer(){
	var taskListDiv  = document.createElement('div');
	taskListDiv.className = 'appian-task-list';

	return taskListDiv;
}

function createTableHeader(){
	var thead  = document.createElement('thead');
	var tr  = document.createElement('tr');

	headerText = ["Task", "Start Time", "Process", "Status", "Assignee", "ID"];

	for(var i = 0; i < headerText.length; i++){
		var th  = document.createElement('th');
		th.innerText = headerText[i];
		tr.appendChild(th);
	}

	thead.appendChild(tr);
	return thead;
}

function tableCreate(taskList){
	var tbl  = document.createElement('table');
	tbl.style.width  = '80%';
	tbl.appendChild(createTableHeader());
	var tbody  = document.createElement('tbody');

	for(var i = 0; i < taskList.data.length; i++){
		var tr = tbody.insertRow();
		for(var j = 0; j < taskList.columnConfigs.length; j++){
			var td = tr.insertCell();
			if(j=0) {
				var link = document.createElement('a');
				link.href = '#';
				link.setAttribute('target', '_blank');
				link.appendChild(document.createTextNode(taskList.data[i]["c"+j.toString()]));
				td.appendChild(link);
			} else {
				td.appendChild(document.createTextNode(taskList.data[i]['c'+j.toString()]));
			}
		}
	}
	tbl.appendChild(tbody);

	return tbl;
}

sdk.NavMenu.addNavItem({
	name: 'Appian - My Tasks',
	routeID: routeID,
	routeParams: {state: 'Testing'}
});

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

var jsonData = {
	"startIndex" : 1,
	"batchSize" : 25,
	"sort" : [ {
		"field" : "c1",
		"ascending" : false
	} ],
	"totalCount" : 67,
	"data" : [ {
		"c0" : "Complete Portfolio checklist for BDKP1 Portfolio",
		"c1" : "5/6/2015 6:09 AM EDT",
		"c2" : "Complete Checklist for BDK Capital Trading Group - TMS Imagine Support Checklist Approvers",
		"c3" : 0,
		"c4" : "[Group:120]",
		"c5" : 268440508,
		"dp5" : null,
		"dp0" : 268440508,
		"dp1" : null,
		"dp2" : 268456769,
		"dp3" : 268456769,
		"dp4" : null
	}, {
		"c0" : "Complete Portfolio checklist for BDKP1 Portfolio",
		"c1" : "5/6/2015 6:09 AM EDT",
		"c2" : "Complete Checklist for BDK Capital Trading Group - TMS Murex Support Checklist Approvers",
		"c3" : 0,
		"c4" : "[Group:121]",
		"c5" : 268440514,
		"dp5" : null,
		"dp0" : 268440514,
		"dp1" : null,
		"dp2" : 268456770,
		"dp3" : 268456770,
		"dp4" : null
	}, {
		"c0" : "Review ANKERP1 Portfolio for Trading Group ANKER",
		"c1" : "5/5/2015 6:16 AM EDT",
		"c2" : "New Portfolio added by Deepti Parikh",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 268439469,
		"dp5" : null,
		"dp0" : 268439469,
		"dp1" : null,
		"dp2" : 268456698,
		"dp3" : 268456698,
		"dp4" : null
	}, {
		"c0" : "Review ARETP2 Portfolio for Trading Group ARETE",
		"c1" : "5/5/2015 5:22 AM EDT",
		"c2" : "New Portfolio added by Deborah Bilman",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 536877389,
		"dp5" : null,
		"dp0" : 536877389,
		"dp1" : null,
		"dp2" : 536893527,
		"dp3" : 536893527,
		"dp4" : null
	}, {
		"c0" : "Review ASDF Portfolio for Trading Group ELEVCAP",
		"c1" : "5/5/2015 3:41 AM EDT",
		"c2" : "New Portfolio added by Deborah Bilman",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 10365,
		"dp5" : null,
		"dp0" : 10365,
		"dp1" : null,
		"dp2" : 21388,
		"dp3" : 21388,
		"dp4" : null
	}, {
		"c0" : "Review BONP202 Portfolio for Trading Group BONELLO",
		"c1" : "5/5/2015 3:39 AM EDT",
		"c2" : "New Portfolio added by Deborah Bilman",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 268439241,
		"dp5" : null,
		"dp0" : 268439241,
		"dp1" : null,
		"dp2" : 268456647,
		"dp3" : 268456647,
		"dp4" : null
	}, {
		"c0" : "Review AVIKP1 Portfolio for Trading Group AVIKCAP",
		"c1" : "5/5/2015 3:19 AM EDT",
		"c2" : "New Portfolio added by Deepti Parikh",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 536877212,
		"dp5" : null,
		"dp0" : 536877212,
		"dp1" : null,
		"dp2" : 536893473,
		"dp3" : 536893473,
		"dp4" : null
	}, {
		"c0" : "Review AVIKP1 Portfolio for Trading Group AVIKCAP",
		"c1" : "5/5/2015 3:16 AM EDT",
		"c2" : "New Portfolio added by Deepti Parikh",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 536877201,
		"dp5" : null,
		"dp0" : 536877201,
		"dp1" : null,
		"dp2" : 536893473,
		"dp3" : 536893473,
		"dp4" : null
	}, {
		"c0" : "Review AVIKP1 Portfolio for Trading Group AVIKCAP",
		"c1" : "5/5/2015 2:51 AM EDT",
		"c2" : "New Portfolio added by Deepti Parikh",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 536876808,
		"dp5" : null,
		"dp0" : 536876808,
		"dp1" : null,
		"dp2" : 536893473,
		"dp3" : 536893473,
		"dp4" : null
	}, {
		"c0" : "Manage New Sub PM: Address Test",
		"c1" : "5/5/2015 10:38 AM EDT",
		"c2" : "Manage New Sub PM Portfolio for BOVO Trading Group",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 536879315,
		"dp5" : null,
		"dp0" : 536879315,
		"dp1" : null,
		"dp2" : 536893596,
		"dp3" : 536893596,
		"dp4" : null
	}, {
		"c0" : "Review BHPOR1 Portfolio for Trading Group BLUEHILL",
		"c1" : "5/21/2015 6:47 AM EDT",
		"c2" : "New Portfolio BHPOR1 added by Mark Meskin",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 5506,
		"dp5" : null,
		"dp0" : 5506,
		"dp1" : null,
		"dp2" : 22797,
		"dp3" : 22797,
		"dp4" : null
	}, {
		"c0" : "Review ASDFSADF Portfolio for Trading Group AVONCAP",
		"c1" : "5/21/2015 3:47 PM EDT",
		"c2" : "New Portfolio ASDFSADF added by Corbin Page",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 536875873,
		"dp5" : null,
		"dp0" : 536875873,
		"dp1" : null,
		"dp2" : 536894994,
		"dp3" : 536894994,
		"dp4" : null
	}, {
		"c0" : "Edit New Contract Details for asdfwqer Trading Group",
		"c1" : "5/21/2015 2:53 PM EDT",
		"c2" : "Manage NCD",
		"c3" : 1,
		"c4" : "ven_cpage",
		"c5" : 6981,
		"dp5" : null,
		"dp0" : 6981,
		"dp1" : null,
		"dp2" : 22879,
		"dp3" : 22879,
		"dp4" : null
	}, {
		"c0" : "Edit New Contract Details for asdf Trading Group",
		"c1" : "5/21/2015 2:25 PM EDT",
		"c2" : "Manage NCD",
		"c3" : 1,
		"c4" : "ven_cpage",
		"c5" : 6832,
		"dp5" : null,
		"dp0" : 6832,
		"dp1" : null,
		"dp2" : 22873,
		"dp3" : 22873,
		"dp4" : null
	}, {
		"c0" : "Review AESPOR1 Portfolio for Trading Group AESIR",
		"c1" : "5/21/2015 1:10 AM EDT",
		"c2" : "New Portfolio AESPOR1 added by Mark Meskin",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 268446846,
		"dp5" : null,
		"dp0" : 268446846,
		"dp1" : null,
		"dp2" : 268457957,
		"dp3" : 268457957,
		"dp4" : null
	}, {
		"c0" : "Review AVPOR1 Portfolio for Trading Group AVONCAP",
		"c1" : "5/21/2015 1:00 AM EDT",
		"c2" : "New Portfolio AVPOR1 added by Mark Meskin",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 5021,
		"dp5" : null,
		"dp0" : 5021,
		"dp1" : null,
		"dp2" : 22785,
		"dp3" : 22785,
		"dp4" : null
	}, {
		"c0" : "Review AESPOR2 Portfolio for Trading Group AESIR",
		"c1" : "5/21/2015 12:54 PM EDT",
		"c2" : "New Portfolio AESPOR2 added by Mark Meskin",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 268447931,
		"dp5" : null,
		"dp0" : 268447931,
		"dp1" : null,
		"dp2" : 268458025,
		"dp3" : 268458025,
		"dp4" : null
	}, {
		"c0" : "Review CP_TESTA Portfolio for Trading Group BAILEY",
		"c1" : "5/21/2015 12:19 PM EDT",
		"c2" : "New Portfolio CP_TESTA added by Patrick Tynan",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 5723,
		"dp5" : null,
		"dp0" : 5723,
		"dp1" : null,
		"dp2" : 22814,
		"dp3" : 22814,
		"dp4" : null
	}, {
		"c0" : "Edit New Contract Details for asrqwer Trading Group",
		"c1" : "5/20/2015 4:57 PM EDT",
		"c2" : "Manage NCD",
		"c3" : 1,
		"c4" : "ven_cpage",
		"c5" : 4738,
		"dp5" : null,
		"dp0" : 4738,
		"dp1" : null,
		"dp2" : 22776,
		"dp3" : 22776,
		"dp4" : null
	}, {
		"c0" : "Review CA12SW Portfolio for Trading Group CALDAR",
		"c1" : "5/19/2015 5:25 AM EDT",
		"c2" : "New Portfolio CA12SW added by Mark Meskin",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 13626,
		"dp5" : null,
		"dp0" : 13626,
		"dp1" : null,
		"dp2" : 22433,
		"dp3" : 22433,
		"dp4" : null
	}, {
		"c0" : "Review BOVOP10 Portfolio for Trading Group BOVO",
		"c1" : "5/19/2015 5:14 AM EDT",
		"c2" : "New Portfolio BOVOP10 added by Mark Meskin",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 268441410,
		"dp5" : null,
		"dp0" : 268441410,
		"dp1" : null,
		"dp2" : 268457718,
		"dp3" : 268457718,
		"dp4" : null
	}, {
		"c0" : "Complete Portfolio checklist for CPPORTB Portfolio",
		"c1" : "5/19/2015 12:10 PM EDT",
		"c2" : "Complete Checklist for Brellenthin/Mooney Trading Group - TMS Murex Support Checklist Approvers",
		"c3" : 0,
		"c4" : "[Group:121]",
		"c5" : 1464,
		"dp5" : null,
		"dp0" : 1464,
		"dp1" : null,
		"dp2" : 22574,
		"dp3" : 22574,
		"dp4" : null
	}, {
		"c0" : "Complete Portfolio checklist for CPPORTB Portfolio",
		"c1" : "5/19/2015 12:04 PM EDT",
		"c2" : "Complete Checklist for Brellenthin/Mooney Trading Group - TMS Murex Support Checklist Approvers",
		"c3" : 0,
		"c4" : "[Group:121]",
		"c5" : 1320,
		"dp5" : null,
		"dp0" : 1320,
		"dp1" : null,
		"dp2" : 22566,
		"dp3" : 22566,
		"dp4" : null
	}, {
		"c0" : "Pending Trader Report 18_05_2015",
		"c1" : "5/18/2015 10:38 AM EDT",
		"c2" : "Pending Trader Report 268457614",
		"c3" : 1,
		"c4" : "ven_cpage",
		"c5" : 268439614,
		"dp5" : null,
		"dp0" : 268439614,
		"dp1" : null,
		"dp2" : 268457614,
		"dp3" : 268457614,
		"dp4" : null
	}, {
		"c0" : "Review ANKER_CP Portfolio for Trading Group ANKER",
		"c1" : "5/18/2015 10:31 AM EDT",
		"c2" : "New Portfolio ANKER_CP added by Corbin Page",
		"c3" : 0,
		"c4" : "[Group:23]",
		"c5" : 9631,
		"dp5" : null,
		"dp0" : 9631,
		"dp1" : null,
		"dp2" : 22352,
		"dp3" : 22352,
		"dp4" : null
	} ],
	"identifiers" : [ 268440508, 268440514, 268439469, 536877389, 10365, 268439241, 536877212, 536877201, 536876808, 536879315, 5506, 536875873, 6981, 6832, 268446846, 5021, 268447931, 5723, 4738, 13626, 268441410, 1464, 1320, 268439614, 9631 ],
	"name" : "TEST My Tasks",
	"description" : "A list of all tasks for the current user.",
	"columnConfigs" : [ {
		"label" : "Id",
		"field" : "c5",
		"drilldownField" : "dp5",
		"configuredFormatting" : "NUMBER",
		"configuredDrilldown" : ""
	}, {
		"label" : "Name",
		"field" : "c0",
		"drilldownField" : "dp0",
		"configuredFormatting" : "NORMAL_TEXT",
		"configuredDrilldown" : ""
	}, {
		"label" : "Received",
		"field" : "c1",
		"drilldownField" : "dp1",
		"configuredFormatting" : "NORMAL_TEXT",
		"configuredDrilldown" : ""
	}, {
		"label" : "Process",
		"field" : "c2",
		"drilldownField" : "dp2",
		"configuredFormatting" : "NORMAL_TEXT",
		"configuredDrilldown" : ""
	}, {
		"label" : "Status",
		"field" : "c3",
		"drilldownField" : "dp3",
		"configuredFormatting" : "TASK_STATUS",
		"configuredDrilldown" : ""
	}, {
		"label" : "Assigned To",
		"field" : "c4",
		"drilldownField" : "dp4",
		"configuredFormatting" : "NORMAL_TEXT",
		"configuredDrilldown" : ""
	} ],
	"errorMessage" : null
}

});