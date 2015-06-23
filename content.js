InboxSDK.load(1, 'sdk_appian-tasks_8f26985331').then(function(sdk) {

	var routeID = 'appian/tasks/assignedtome';

	sdk.Router.handleCustomRoute(routeID, function(customRouteView){
		// var taskHtml = '<appian-task taskid="138768" id="appian-huja4x8622mrhpvi"><div class="GGID2ICBCJ"><div class="GGID2ICBBQB" aria-hidden="true" style="display: none;"><div class="GGID2ICBKPB"></div> <div class="GGID2ICBAQB"></div></div><div><div class="GGID2ICBA3" style="height: auto;"><div is-selectable="selectable"><div class="GGID2ICBPWB"><div is-selectable="selectable"><form> <div class="GGID2ICBNCC"><h2 class="appian-form-title GGID2ICBCDC" style="display: block;">Assign Customer Service Request to Case Worker</h2> <p class="GGID2ICBOCC">Please select a Case Worker for this Request</p></div> <div><div class="GGID2ICBPWB"><div is-selectable="selectable"><div class="GGID2ICBPWB"><div class="column_panel"><div is-selectable="selectable"><div class="GGID2ICBPWB"><div class="aui_FieldLayout" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBCB"><div class="aui_FieldLayout_Label GGID2ICBEGC GGID2ICBGE"><span class="noninput_label labelPosition-ABOVE" id="label-"></span><em class="GGID2ICBJB" style="display: none;">*</em></div><div class="aui_FieldLayout_MessageContainer GGID2ICBFGC"><p class="aui_FieldLayout_Instructions form_instructions GGID2ICBDGC" style="display: none;"></p></div><div class="GGID2ICBFB"><div class="aui_FieldLayout_InputContainer" is-selectable="selectable"><div><ul class="GGID2ICBCEC" role="status"> <li class="GGID2ICBJDC"><div class="GGID2ICBMDC"><div class="GGID2ICBODC"></div><div class="GGID2ICBAEC"></div></div><div class="accessibilityhidden" id="milestone_gwt-uid-26">Completed Step: Case Created</div><div class="GGID2ICBNDC" aria-labelledby="milestone_gwt-uid-26" aria-hidden="true">Case Created</div></li><li class="GGID2ICBHDC"><div class="GGID2ICBMDC"><div class="GGID2ICBODC"></div><div class="GGID2ICBAEC"></div></div><div class="accessibilityhidden" id="milestone_gwt-uid-27">Current Step: Pending Assignment</div><div class="GGID2ICBNDC" aria-labelledby="milestone_gwt-uid-27" aria-hidden="true">Pending Assignment</div></li><li class="GGID2ICBKDC"><div class="GGID2ICBMDC"><div class="GGID2ICBODC"></div><div class="GGID2ICBAEC"></div></div><div class="accessibilityhidden" id="milestone_gwt-uid-28">Pending Step: Researching</div><div class="GGID2ICBNDC" aria-labelledby="milestone_gwt-uid-28" aria-hidden="true">Researching</div></li><li class="GGID2ICBKDC"><div class="GGID2ICBMDC"><div class="GGID2ICBODC"></div><div class="GGID2ICBAEC"></div></div><div class="accessibilityhidden" id="milestone_gwt-uid-29">Pending Step: Pending Requester</div><div class="GGID2ICBNDC" aria-labelledby="milestone_gwt-uid-29" aria-hidden="true">Pending Requester</div></li><li class="GGID2ICBKDC"><div class="GGID2ICBMDC"><div class="GGID2ICBODC"></div><div class="GGID2ICBAEC"></div></div><div class="accessibilityhidden" id="milestone_gwt-uid-30">Pending Step: Solution</div><div class="GGID2ICBNDC" aria-labelledby="milestone_gwt-uid-30" aria-hidden="true">Solution</div></li><li class="GGID2ICBKDC"><div class="GGID2ICBMDC"><div class="GGID2ICBODC"></div><div class="GGID2ICBAEC"></div></div><div class="accessibilityhidden" id="milestone_gwt-uid-31">Pending Step: Closed</div><div class="GGID2ICBNDC" aria-labelledby="milestone_gwt-uid-31" aria-hidden="true">Closed</div></li></ul></div></div></div><div class="aui_FieldLayout_MessageContainer"></div><div></div></div></div></div><div class="GGID2ICBLY aui-Section GGID2ICBKY" is-selectable="selectable"><div class="GGID2ICBNY"><div class="aui-Section-Label GGID2ICBGY">Service Request Details</div> <div class="GGID2ICBGX"><a class="GGID2ICBJX GGID2ICBBY" href="#" is-selectable="unselectable" id="appian-component-1_2-404_6__case_app_sr_uiformassigntocaseworker_30-402-401_37__case_app_sr_uirequestdetailssection_0__sectionlayout_0-401_6-400-401-400_29-401_32__dynamiclink_0" title="Collapse"></a></div><div class="GGID2ICBIX"></div></div> <div class="GGID2ICBP-B GGID2ICBO-B GGID2ICBN-B" style="display: none;"></div> <div class="GGID2ICBMY GGID2ICBJY"><div is-selectable="selectable"><div class="GGID2ICBPWB"><div class="column_panel GGID2ICBHXB appianMultiColumnComponent GGID2ICBIXB"><div is-selectable="selectable"><div class="GGID2ICBPWB"><div style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui_FieldLayout" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBBGC"><span class="aui_FieldLayout_Label GGID2ICBOFC GGID2ICBGE"><span class="noninput_label labelPosition-ABOVE" id="label-Service-Request-Number">Service Request Number</span><em class="GGID2ICBJB" style="display: none;">*</em></span><div class="GGID2ICBFB"><div class="aui_FieldLayout_InputContainer" is-selectable="selectable"><p class="GGID2ICBG3 GGID2ICBN3 aui-Field-readonly" style="text-align: left;">Y098-4FJ1</p></div></div><div class="aui_FieldLayout_MessageContainer"><p class="aui_FieldLayout_Instructions form_instructions" style="display: none;"></p></div><div class="aui_FieldLayout_MessageContainer" aria-atomic="true" role=""></div><div></div></div></div></div></div><div style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui_FieldLayout" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBBGC"><span class="aui_FieldLayout_Label GGID2ICBOFC GGID2ICBGE"><span class="noninput_label labelPosition-ABOVE" id="label-Request-Type">Request Type</span><em class="GGID2ICBJB" style="display: none;">*</em></span><div class="GGID2ICBFB"><div class="aui_FieldLayout_InputContainer" is-selectable="selectable"><p class="GGID2ICBG3 GGID2ICBN3 aui-Field-readonly" style="text-align: left;">I need help with an Order</p></div></div><div class="aui_FieldLayout_MessageContainer"><p class="aui_FieldLayout_Instructions form_instructions" style="display: none;"></p></div><div class="aui_FieldLayout_MessageContainer" aria-atomic="true" role=""></div><div></div></div></div></div></div><div style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui_FieldLayout" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBBGC"><span class="aui_FieldLayout_Label GGID2ICBOFC GGID2ICBGE"><span class="noninput_label labelPosition-ABOVE" id="label-Request-Date---Time">Request Date &amp; Time</span><em class="GGID2ICBJB" style="display: none;">*</em></span><div class="GGID2ICBFB"><div class="aui_FieldLayout_InputContainer" is-selectable="selectable"><p class="GGID2ICBG3 GGID2ICBN3 aui-Field-readonly" style="text-align: left;">Jun 15, 2015, 6:06 PM</p></div></div><div class="aui_FieldLayout_MessageContainer"><p class="aui_FieldLayout_Instructions form_instructions" style="display: none;"></p></div><div class="aui_FieldLayout_MessageContainer" aria-atomic="true" role=""></div><div></div></div></div></div></div><div style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui_FieldLayout" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBBGC"><span class="aui_FieldLayout_Label GGID2ICBOFC GGID2ICBGE"><span class="noninput_label labelPosition-ABOVE" id="label-Requester-Name">Requester Name</span><em class="GGID2ICBJB" style="display: none;">*</em></span><div class="GGID2ICBFB"><div class="aui_FieldLayout_InputContainer" is-selectable="selectable"><p class="GGID2ICBG3 GGID2ICBN3 aui-Field-readonly" style="text-align: left;">Carl Nelson</p></div></div><div class="aui_FieldLayout_MessageContainer"><p class="aui_FieldLayout_Instructions form_instructions" style="display: none;"></p></div><div class="aui_FieldLayout_MessageContainer" aria-atomic="true" role=""></div><div></div></div></div></div></div><div class="aui_FieldLayout" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBBGC"><span class="aui_FieldLayout_Label GGID2ICBOFC GGID2ICBGE"><label class="labelPosition-ABOVE" for="rich-text-2387" id="label-Current-Status">Current Status</label><em class="GGID2ICBJB" style="display: none;">*</em></span><div class="GGID2ICBFB"><div class="aui_FieldLayout_InputContainer" is-selectable="selectable"><div class="GGID2ICBB4 aui-rich-text-display" id="rich-text-2387"><div style="text-align: left;">Pending Assignment</div></div></div></div><div class="aui_FieldLayout_MessageContainer"><p class="aui_FieldLayout_Instructions form_instructions" style="display: none;"></p></div><div class="aui_FieldLayout_MessageContainer"></div><div></div></div></div></div></div></div></div><div class="column_panel GGID2ICBHXB appianMultiColumnComponent GGID2ICBJXB"><div is-selectable="selectable"><div class="GGID2ICBPWB"><div class="aui_FieldLayout container" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBBGC"><span class="aui_FieldLayout_Label GGID2ICBOFC GGID2ICBGE"><span class="noninput_label labelPosition-ABOVE" id="label-Related-Customer">Related Customer</span><em class="GGID2ICBJB" style="display: none;">*</em></span><div class="GGID2ICBFB"><div class="aui_FieldLayout_InputContainer" is-selectable="selectable"><div class="GGID2ICBAT" style="text-align: left;"><div class="GGID2ICBPS"><a class="gwt-Anchor" is-selectable="unselectable" href="https://appswest.princetonblue.net:8443/suite/tempo/records/item/lMBLQgqCgA1JMf2dKTfcUavo7uX8KfVEr1W8zp9F9XlEqSLcxPVYaUnl1n7MK9qzV6WZW2J2D-ipxnCpgtqdZRvHKkV8rFoMGAoMPgnZ7D9c70UCw/view/summary">Sceptrum Apartments</a></div></div></div></div><div class="aui_FieldLayout_MessageContainer"><p class="aui_FieldLayout_Instructions form_instructions" style="display: none;"></p></div><div class="aui_FieldLayout_MessageContainer"></div><div></div></div></div></div><div class="aui_FieldLayout container" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBBGC"><span class="aui_FieldLayout_Label GGID2ICBOFC GGID2ICBGE"><span class="noninput_label labelPosition-ABOVE" id="label-Related-Order">Related Order</span><em class="GGID2ICBJB" style="display: none;">*</em></span><div class="GGID2ICBFB"><div class="aui_FieldLayout_InputContainer" is-selectable="selectable"><div class="GGID2ICBAT" style="text-align: left;"><div class="GGID2ICBPS"><a class="gwt-Anchor" is-selectable="unselectable" href="https://appswest.princetonblue.net:8443/suite/tempo/records/item/lMBLQgqCgA1JMf2dKTYcUavo10gH0g1H0ZJRmPmz6XpLlArEpwjbon0UU7txKTkHswVLN_3k6OCDczqUS6A8wxkst9EQ02zQVkuUA5i0OtpO1WqMQ/view/summary">B439-R8LI</a></div></div></div></div><div class="aui_FieldLayout_MessageContainer"><p class="aui_FieldLayout_Instructions form_instructions" style="display: none;"></p></div><div class="aui_FieldLayout_MessageContainer"></div><div></div></div></div></div><div style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui_FieldLayout" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBBGC"><span class="aui_FieldLayout_Label GGID2ICBOFC GGID2ICBGE"><span class="noninput_label labelPosition-ABOVE" id="label-Request-Comment">Request Comment</span><em class="GGID2ICBJB" style="display: none;">*</em></span><div class="GGID2ICBFB"><div class="aui_FieldLayout_InputContainer" is-selectable="selectable"><p class="GGID2ICBG3 GGID2ICBN3 aui-Field-readonly" style="text-align: left;">asdf</p></div></div><div class="aui_FieldLayout_MessageContainer"><p class="aui_FieldLayout_Instructions form_instructions" style="display: none;"></p></div><div class="aui_FieldLayout_MessageContainer" aria-atomic="true" role=""></div><div></div></div></div></div></div></div></div></div></div></div></div></div><div class="GGID2ICBLY aui-Section GGID2ICBKY" is-selectable="selectable"><div class="GGID2ICBNY"><div class="aui-Section-Label GGID2ICBGY">Select Case Worker</div> <div class="GGID2ICBGX"></div><div class="GGID2ICBIX"></div></div> <div class="GGID2ICBP-B GGID2ICBO-B GGID2ICBN-B" style="display: none;"></div> <div class="GGID2ICBMY"><div is-selectable="selectable"><div class="GGID2ICBPWB"><div class="column_panel GGID2ICBHXB appianMultiColumnComponent GGID2ICBIXB"><div is-selectable="selectable"><div class="GGID2ICBPWB"><div style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui_FieldLayout" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBBGC"><span class="aui_FieldLayout_Label GGID2ICBOFC GGID2ICBGE"><span class="noninput_label labelPosition-ABOVE" id="label-Available-Case-Workers">Available Case Workers</span><em class="GGID2ICBJB" style="display: inline;">*</em></span><div class="GGID2ICBFB"><div class="aui_FieldLayout_InputContainer" is-selectable="selectable"><select class="gwt-ListBox" is-selectable="unselectable" aria-required="true" aria-invalid="false" style="vertical-align: middle; text-align: left;"><option value="0">---Select a Case Worker---</option><option value="1">Stephen Singh</option><option value="2">Anthony Hill</option><option value="3">Joseph Clark</option><option value="4">Mary Lawson</option><option value="5">Deborah Geary</option><option value="6">Sharon White</option><option value="7">Mike James</option><option value="8">Brigid Kessler</option><option value="9">Daniel Nelson</option><option value="10">Kevin Reed</option><option value="11">Kenneth Lewis</option></select></div></div><div class="aui_FieldLayout_MessageContainer"><p class="aui_FieldLayout_Instructions form_instructions" style="display: block;">User with less workload automatically selected. You may override selection.</p></div><div class="aui_FieldLayout_MessageContainer" aria-atomic="true" role=""></div><div></div></div></div></div></div></div></div></div><div class="column_panel GGID2ICBHXB appianMultiColumnComponent GGID2ICBJXB"><div is-selectable="selectable"><div class="GGID2ICBPWB"><div is-selectable="selectable"><div class="aui_FieldLayout" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBCB"><div class="aui_FieldLayout_Label GGID2ICBEGC GGID2ICBGE"><span class="noninput_label labelPosition-ABOVE" id="label-Workload-per-Case-Worker">Workload per Case Worker</span><em class="GGID2ICBJB" style="display: none;">*</em></div><div class="aui_FieldLayout_MessageContainer GGID2ICBFGC"><p class="aui_FieldLayout_Instructions form_instructions GGID2ICBDGC" style="display: none;"></p></div><div class="GGID2ICBFB GGID2ICBKB"><div class="aui_FieldLayout_InputContainer" is-selectable="unselectable"><div class="aui-DataGrid-Container" is-selectable="selectable"><div class="gwt-Label GGID2ICBOKC" aria-hidden="true" style="display: none;"></div> <div class="aui-DataGrid-Table GGID2ICBNKC"><table __gwtcellbasedwidgetimpldispatchingfocus="true" __gwtcellbasedwidgetimpldispatchingblur="true" class="GGID2ICBKU striped" cellspacing="0" style="width: 100%; background-color: white;"><colgroup><col><col></colgroup><thead is-selectable="unselectable"><tr __gwt_header_row="0"><th colspan="1" class="GGID2ICBJT GGID2ICBHT sortable left" __gwt_column="column-gwt-uid-130" role="button" tabindex="-1" __gwt_header="header-gwt-uid-131" scope="col"><a href="#" onclick="return false;">Case Worker</a></th><th colspan="1" class="GGID2ICBJT sortable sortup GGID2ICBBU left" __gwt_column="column-gwt-uid-132" scope="col"><a href="#" aria-label="Sorted ascending" onclick="return false;">Task Workload</a></th></tr></thead><tfoot aria-hidden="true" style="display: none;"></tfoot><tbody><tr __gwt_row="0" __gwt_subrow="0" class="GGID2ICBDT"><td class="GGID2ICBCT GGID2ICBET GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-134" tabindex="0">Stephen Singh</div></td><td class="GGID2ICBCT GGID2ICBET GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-135">9</div></td></tr><tr __gwt_row="1" __gwt_subrow="0" class="GGID2ICBDU"><td class="GGID2ICBCT GGID2ICBEU GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-134">Joseph Clark</div></td><td class="GGID2ICBCT GGID2ICBEU GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-135">9</div></td></tr><tr __gwt_row="2" __gwt_subrow="0" class="GGID2ICBDT"><td class="GGID2ICBCT GGID2ICBET GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-134">Sharon White</div></td><td class="GGID2ICBCT GGID2ICBET GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-135">9</div></td></tr><tr __gwt_row="3" __gwt_subrow="0" class="GGID2ICBDU"><td class="GGID2ICBCT GGID2ICBEU GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-134">Daniel Nelson</div></td><td class="GGID2ICBCT GGID2ICBEU GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-135">9</div></td></tr><tr __gwt_row="4" __gwt_subrow="0" class="GGID2ICBDT"><td class="GGID2ICBCT GGID2ICBET GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-134">Kevin Reed</div></td><td class="GGID2ICBCT GGID2ICBET GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-135">9</div></td></tr></tbody><tbody style="display: none;"><tr><td align="center" colspan="2"><div><div aria-hidden="true" style="width: 100%; height: 100%; padding: 0px; margin: 0px; display: none;"><div aria-hidden="true" style="width: 100%; height: 100%; display: none;"><div class="gwt-Label">No items available</div></div></div><div aria-hidden="true" style="width: 100%; height: 100%; padding: 0px; margin: 0px; display: none;"><div aria-hidden="true" class="GGID2ICBCU" style="width: 100%; height: 100%; display: none;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mP4DwQACfsD/Wj6HMwAAAAASUVORK5CYII=" width="1" height="1" class="gwt-Image"></div></div></div></td></tr></tbody></table></div> <div class="aui-DataGridPager-Container"><table cellspacing="0" cellpadding="0" is-selectable="selectable"><tbody><tr><td align="left" class="GGID2ICBCKB GGID2ICBDKB" style="vertical-align: middle;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABTUlEQVR42r2UO26EQAyGOQtnyVlyllTQcADqUIA4A1Cl5QLQ8H4/Smf/0Xo1M7CskmKRRiPM7w/bY49hvOPZ9/1zXVea55mmaRI73mH/C8RcloW6rqOyLA8LdnyH7hXoYxxH4dS2LfV9f1iw4zt00D+FIR0IzyD6KopCpH8KQj2qqhJpQJwkCYVheIDEcSx26KCH3wE2DAPVdf1w0mFN01AQBGRZ1sMGPfwU0LZtXxDLEciwPM/JdV0BkmH8E/jLKXZ6rRiWpik5jkO2bZ/C7ql2CgxGHeZ5ngAx5AyGIBTYLcxvuV5caESWZZlI8Soy+CuNyj2kw9jB9/0DjPWHBsa4yHXTTxOtEEWRAkOvwe+0+/m4r/oMByLrns7qLfcfbsar7ufmhv5yPlFMnk95IvgnsKNRlaK/ujkwJpg9BmHH+/0aMv97r5m8jHc+v9PgJIofYq0vAAAAAElFTkSuQmCC" width="19" height="19" class="gwt-Image" role="button" aria-label="First page" aria-disabled="true" is-selectable="unselectable"></td><td align="left" class="GGID2ICBCKB GGID2ICBDKB" style="vertical-align: middle;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABOElEQVR42r1UO66DMBDkLJwlZ3lneRU0HID6NXAI6NJCjxAS//+n3GRQLMX2Ql5SxNLKsj0z8q5nbRjfGNu2/SzLQtM00TiO+4w19t8RMed5prZtqSgKLbCPc+BeCV2GYaA8z6lpGuq6TgvsQxQ44A/FkA6AnIgawAHPCqEeZVnuaXDkMAylNXDAg6eJ9X1PVVVpInVdk+/7ZNu2dgY80pWE1nX9BUkFp2lKruuSZVl7cDcGD/znFFu1VlEUkeM4+43OxMAD/1AsyzJN6N9i92v+qfVKkkRK8UgMjwC+ZFThIRXoed6hmMBrBka7cB6DBYIgYMWAB491v3huLp04jjVbPG7F9+o996voyTP3C3MDf9qfKCYMDMHnjhCOxz7OpaK/+jnQJug9IYQZ68c3ZH76r5kijG+OGyVGL0Z2EQ8bAAAAAElFTkSuQmCC" width="19" height="19" class="gwt-Image" role="button" aria-label="Previous page" aria-disabled="true" is-selectable="unselectable"></td><td align="left" class="GGID2ICBEKB" style="vertical-align: middle;"><div class="gwt-HTML" is-selectable="selectable">1-5 of 11</div></td><td align="left" class="GGID2ICBCKB" style="vertical-align: middle;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB80lEQVR42r2UPU/bUBSG+S39K5AgAWJF6tINCRbYqq4dqi5IzAx0r8rAUnVLMA1RAyr5IKQJ+YBgO47jGGNRUJPh7X0v8ZUviULFUEtHV/ee9zw+vuccz8z8j8frh58tx8eV2cPltStX7nn+75Dgbu7a7qNcs5ApWEgXe0gVXLlyz3P6qZsO8u8+Nq66OMxbOKrd47g1RK45GNlQGs8PT01QR/1EUBA8vGq1XRj5zggyVBDuj5tDBaQZeQfUM24MxvvIFk38aAy0bD5sf1JABRZGHfWMG8uqfunAOL/V3k5gIjmP9c13+F4Jn/hEduch6i1Hz871bk9+lk3tbiKbTSSlrbx+g69HDS1LGuMYr2Cd7g2yBTMmHIzBEskkFpaWsfslpRWGcYxXMFtsWPYIEL8fCVLAeSwsLuNbri1B9DPOjsO6vcDPlcZhUWaJkfFT942qVojcmQXGK1g/CFcrdRuZ2m+tHeKfubbxFumSr/kyoud+iTjGaxVtW57ssUmZvd/aEa3wR1U48hsFB4ybOIvVegdG+SbWZwPs7qX05o1AQke954eTp8BxAzF7Ng5KfS27p5+eLnpSR/3U+eRlshEzouRpAc1ePDy2gFi55zn92qU/9+ewxZg0211UGx1ULiy5NsUs8vzZP8Y0MKv1YsBLn78yFAmErQgG1AAAAABJRU5ErkJggg==" width="19" height="19" class="gwt-Image" role="button" aria-label="Next page" aria-disabled="false" is-selectable="unselectable"></td><td align="left" class="GGID2ICBCKB" style="vertical-align: middle;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB/UlEQVR42r2UTS8DQRjHfRZfhZKQuEocOEgkehDhIMFJonGRcHXowVGcJK5Uq+otaKWqtW2pfWm33do2qHB4zH/WzHa1KXGwyWR2Zp//L8/rdnX9x1Ox6ltasUoPapnuH02+44z730Ps595H3aJkRqNoXKNQokz7cZPvOOMe32HXGVR9Xsk+lChypdFR5pVOcx+edZb/oCi7P2TfYQf7tiDbbnTnCyYdXBrfIO9yB0zs4SuDYA9dCwz5iMVVOsk64sBa8AvkQvwzixRY3+Rn2MUSKs9ji1dKvkjhm5oU+nx95J+ep0iqJr0TMOEp7KHzeGdWaucXSZWDBKyHwQAcHhml3Wi2DcxZ0EEvYUbpiYfogFzPBHBgcIiC2/sMtkDLa14YdNBLmM4OKHtz0n1fIAEFcNw/K3MmIoBOb4aVynb19FrzVE945evrZ6GO0U4kQ5PwjIf57kbBdNBLmGXXJ1KKznuoGYY1OTVHoWuLi5EzJ0zHJpp+oVumg95T0YJW4b0jmhNeLa1u0LHyJsXwLLDuwsLxIkHXdhbTWYPCSZsbBrf3Whq3uZqwSysGm4J6+ykomjafvVCiIvPiVth9x3fYwb7jfCKZaMQjDDnLVUxpOC1w12AQi92rvFE9Sf/pz6GzMckVSoTQU3ca33NsFnH/4x+jExjV+jPgr88n1kL1nJCdAj4AAAAASUVORK5CYII=" width="19" height="19" class="gwt-Image" role="button" aria-label="Last page" aria-disabled="false" is-selectable="unselectable"></td></tr></tbody></table></div></div></div></div><div class="aui_FieldLayout_MessageContainer" aria-atomic="true" role=""></div><div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div> <div class="GGID2ICBLCC"> </div>  <div class="GGID2ICBD- GGID2ICBC- GGID2ICBB-" style="display: none;"></div> <div><div class="GGID2ICBPWB buttonContainer"><div class="GGID2ICBJJC button_layout" is-selectable="selectable"><div class="GGID2ICBKJC left"></div><div class="GGID2ICBMJC right"><button type="button" class="GGID2ICBLF GGID2ICBAG" is-selectable="unselectable">Submit</button></div></div></div></div> <abbr class="GGID2ICBADC" title="Required" style="display: none;">  * </abbr> <span class="GGID2ICBBDC" style="display: none;"> Required </span> </form></div></div></div></div></div></div></appian-task>'
		// var taskHtml = '<appian-task taskId="123" />'

		// var taskHtml = '<appian-task taskid="537058745" id="appian-jpb02c2zlu3anhfr"><div class="GGID2ICBCJ"><div class="GGID2ICBBQB" aria-hidden="true" style="display: none;"><div class="GGID2ICBKPB"></div> <div class="GGID2ICBAQB"></div></div><div><div class="GGID2ICBA3" style="height: auto;"><div is-selectable="selectable"><div class="GGID2ICBPWB"><div is-selectable="selectable"><form> <div class="GGID2ICBNCC"><h2 class="appian-form-title GGID2ICBCDC" style="display: block;">My Current Tasks</h2> <p class="GGID2ICBOCC">View your current tasks and select one to open and complete it in a new tab.</p></div> <div><div class="GGID2ICBPWB"><div is-selectable="selectable"><div class="GGID2ICBPWB"><div class="column_panel"><div is-selectable="selectable"><div class="GGID2ICBPWB"><div style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui_FieldLayout" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBBGC"><span class="aui_FieldLayout_Label GGID2ICBOFC GGID2ICBGE"><span class="noninput_label labelPosition-ABOVE" id="label-Status">Status</span><em class="GGID2ICBJB" style="display: none;">*</em></span><div class="GGID2ICBFB"><div class="aui_FieldLayout_InputContainer" is-selectable="selectable"><select class="gwt-ListBox" is-selectable="unselectable" aria-required="false" aria-invalid="false" style="vertical-align: middle; text-align: left;"><option value="0">All</option><option value="1">Assigned</option><option value="2">Accepted</option></select></div></div><div class="aui_FieldLayout_MessageContainer"><p class="aui_FieldLayout_Instructions form_instructions" style="display: none;"></p></div><div class="aui_FieldLayout_MessageContainer" aria-atomic="true" role=""></div><div></div></div></div></div></div><div is-selectable="selectable"><div class="aui_FieldLayout" is-selectable="selectable" style="margin: 0px; padding: 0px; border-width: 0px;"><div class="aui-LabelPositionAbove"><div class="GGID2ICBPWB aui_FieldLayout GGID2ICBCB"><div class="aui_FieldLayout_Label GGID2ICBEGC GGID2ICBGE"><span class="noninput_label labelPosition-ABOVE" id="label-Current-Tasks">Current Tasks</span><em class="GGID2ICBJB" style="display: none;">*</em></div><div class="aui_FieldLayout_MessageContainer GGID2ICBFGC"><p class="aui_FieldLayout_Instructions form_instructions GGID2ICBDGC" style="display: block;">A list of all tasks for the current user.</p></div><div class="GGID2ICBFB GGID2ICBKB"><div class="aui_FieldLayout_InputContainer" is-selectable="unselectable"><div class="aui-DataGrid-Container" is-selectable="selectable"><div class="gwt-Label GGID2ICBOKC" aria-hidden="true" style="display: none;"></div> <div class="aui-DataGrid-Table GGID2ICBNKC"><table __gwtcellbasedwidgetimpldispatchingfocus="true" __gwtcellbasedwidgetimpldispatchingblur="true" class="GGID2ICBKU striped" cellspacing="0" style="width: 100%; background-color: white;"><colgroup><col><col><col><col><col><col><col></colgroup><thead is-selectable="unselectable"><tr __gwt_header_row="0"><th colspan="1" class="GGID2ICBJT GGID2ICBHT sortable left" __gwt_column="column-gwt-uid-63" role="button" tabindex="-1" __gwt_header="header-gwt-uid-64" scope="col"><a href="#" onclick="return false;">Name</a></th><th colspan="1" class="GGID2ICBJT sortable sortdown left" __gwt_column="column-gwt-uid-65" role="button" tabindex="-1" scope="col"><a href="#" aria-label="Sorted descending" onclick="return false;">From</a></th><th colspan="1" class="GGID2ICBJT sortable left" __gwt_column="column-gwt-uid-67" role="button" tabindex="-1" __gwt_header="header-gwt-uid-68" scope="col"><a href="#" onclick="return false;">Received</a></th><th colspan="1" class="GGID2ICBJT sortable left" __gwt_column="column-gwt-uid-69" role="button" tabindex="-1" __gwt_header="header-gwt-uid-70" scope="col"><a href="#" onclick="return false;">Process</a></th><th colspan="1" class="GGID2ICBJT sortable left" __gwt_column="column-gwt-uid-71" role="button" tabindex="-1" __gwt_header="header-gwt-uid-72" scope="col"><a href="#" onclick="return false;">Priority</a></th><th colspan="1" class="GGID2ICBJT sortable left" __gwt_column="column-gwt-uid-73" role="button" tabindex="-1" __gwt_header="header-gwt-uid-74" scope="col"><a href="#" onclick="return false;">Status</a></th><th colspan="1" class="GGID2ICBJT sortable GGID2ICBBU left" __gwt_column="column-gwt-uid-75" __gwt_header="header-gwt-uid-76" scope="col"><a href="#" onclick="return false;">Completed</a></th></tr></thead><tfoot aria-hidden="true" style="display: none;"></tfoot><tbody><tr __gwt_row="0" __gwt_subrow="0" class="GGID2ICBDT"><td class="GGID2ICBCT GGID2ICBET GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-77" tabindex="0"><a href="https://appswest.princetonblue.net:8443/suite/tempo/tasks/task/142554" is-selectable="unselectable">List Parameters</a></div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-78">Corbin Page</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-79">Apr 07, 2015 18:30 PM</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-80">Add or Edit Parameters</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-81">Normal</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-82">Accepted</div></td><td class="GGID2ICBCT GGID2ICBET GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-83"></div></td></tr><tr __gwt_row="1" __gwt_subrow="0" class="GGID2ICBDU"><td class="GGID2ICBCT GGID2ICBEU GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-77"><a href="https://appswest.princetonblue.net:8443/suite/tempo/tasks/task/142578" is-selectable="unselectable">Download File</a></div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-78">Corbin Page</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-79">Apr 07, 2015 18:31 PM</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-80">Export Decision Tables Data</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-81">Normal</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-82">Accepted</div></td><td class="GGID2ICBCT GGID2ICBEU GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-83"></div></td></tr><tr __gwt_row="2" __gwt_subrow="0" class="GGID2ICBDT"><td class="GGID2ICBCT GGID2ICBET GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-77"><a href="https://appswest.princetonblue.net:8443/suite/tempo/tasks/task/142584" is-selectable="unselectable">IT Enablement</a></div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-78">Corbin Page</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-79">Apr 07, 2015 18:32 PM</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-80">ITServiceEnablement</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-81">Normal</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-82">Accepted</div></td><td class="GGID2ICBCT GGID2ICBET GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-83"></div></td></tr><tr __gwt_row="3" __gwt_subrow="0" class="GGID2ICBDU"><td class="GGID2ICBCT GGID2ICBEU GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-331" tabindex="0"><a href="https://appswest.princetonblue.net:8443/suite/tempo/tasks/task/138768" is-selectable="unselectable">Assign SR#Y098-4FJ1 to Case Worker</a></div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-332">Corbin Page</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-333">Jun 15, 2015 18:11 PM</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-334">Handle Order Request #Y098-4FJ1 for Sceptrum Apartments</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-335">Normal</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-336">Accepted</div></td><td class="GGID2ICBCT GGID2ICBEU GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-337"></div></td></tr><tr __gwt_row="4" __gwt_subrow="0" class="GGID2ICBDT"><td class="GGID2ICBCT GGID2ICBET GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-77"><a href="https://appswest.princetonblue.net:8443/suite/tempo/tasks/task/142983" is-selectable="unselectable">List Parameters</a></div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-78">Corbin Page</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-79">Apr 13, 2015 10:21 AM</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-80">Add or Edit Parameters</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-81">Normal</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-82">Accepted</div></td><td class="GGID2ICBCT GGID2ICBET GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-83"></div></td></tr><tr __gwt_row="5" __gwt_subrow="0" class="GGID2ICBDU"><td class="GGID2ICBCT GGID2ICBEU GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-77"><a href="https://appswest.princetonblue.net:8443/suite/tempo/tasks/task/143553" is-selectable="unselectable">Edit Decision Table</a></div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-78">Corbin Page</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-79">Apr 13, 2015 11:00 AM</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-80">Add and Edit Rules</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-81">Normal</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-82">Accepted</div></td><td class="GGID2ICBCT GGID2ICBEU GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-83"></div></td></tr><tr __gwt_row="6" __gwt_subrow="0" class="GGID2ICBDT"><td class="GGID2ICBCT GGID2ICBET GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-77"><a href="https://appswest.princetonblue.net:8443/suite/tempo/tasks/task/143564" is-selectable="unselectable">Edit Decision Table</a></div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-78">Corbin Page</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-79">Apr 13, 2015 11:05 AM</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-80">Add and Edit Rules</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-81">Normal</div></td><td class="GGID2ICBCT GGID2ICBET left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-82">Accepted</div></td><td class="GGID2ICBCT GGID2ICBET GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-83"></div></td></tr><tr __gwt_row="7" __gwt_subrow="0" class="GGID2ICBDU"><td class="GGID2ICBCT GGID2ICBEU GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-77"><a href="https://appswest.princetonblue.net:8443/suite/tempo/tasks/task/143593" is-selectable="unselectable">Display Data</a></div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-78">Corbin Page</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-79">Apr 13, 2015 11:15 AM</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-80">BusinessRuleTest_MillenniumRule</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-81">Normal</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-82">Accepted</div></td><td class="GGID2ICBCT GGID2ICBEU GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-83"></div></td></tr><tr __gwt_row="8" __gwt_subrow="0" class="GGID2ICBDT GGID2ICBKT"><td class="GGID2ICBCT GGID2ICBET GGID2ICBFT left GGID2ICBLT" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-77"><a href="https://appswest.princetonblue.net:8443/suite/tempo/tasks/task/143606" is-selectable="unselectable">Display Data</a></div></td><td class="GGID2ICBCT GGID2ICBET left GGID2ICBLT" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-78">Corbin Page</div></td><td class="GGID2ICBCT GGID2ICBET left GGID2ICBLT" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-79">Apr 13, 2015 11:17 AM</div></td><td class="GGID2ICBCT GGID2ICBET left GGID2ICBLT" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-80">BusinessRuleTest_MillenniumRule</div></td><td class="GGID2ICBCT GGID2ICBET left GGID2ICBLT" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-81">Normal</div></td><td class="GGID2ICBCT GGID2ICBET left GGID2ICBLT" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-82">Accepted</div></td><td class="GGID2ICBCT GGID2ICBET GGID2ICBPT left GGID2ICBLT" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-83"></div></td></tr><tr __gwt_row="9" __gwt_subrow="0" class="GGID2ICBDU"><td class="GGID2ICBCT GGID2ICBEU GGID2ICBFT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-77"><a href="https://appswest.princetonblue.net:8443/suite/tempo/tasks/task/143790" is-selectable="unselectable">Edit Decision Table</a></div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-78">Corbin Page</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-79">Apr 13, 2015 11:27 AM</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-80">Add and Edit Rules</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-81">Normal</div></td><td class="GGID2ICBCT GGID2ICBEU left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-82">Accepted</div></td><td class="GGID2ICBCT GGID2ICBEU GGID2ICBPT left" align="left"><div style="outline-style:none;" __gwt_cell="cell-gwt-uid-83"></div></td></tr></tbody><tbody style="display: none;"><tr><td align="center" colspan="7"><div><div aria-hidden="true" style="width: 100%; height: 100%; padding: 0px; margin: 0px; display: none;"><div aria-hidden="true" style="width: 100%; height: 100%; display: none;"><div class="gwt-Label">No items available</div></div></div><div aria-hidden="true" style="width: 100%; height: 100%; padding: 0px; margin: 0px; display: none;"><div aria-hidden="true" class="GGID2ICBCU" style="width: 100%; height: 100%; display: none;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mP4DwQACfsD/Wj6HMwAAAAASUVORK5CYII=" width="1" height="1" class="gwt-Image"></div></div></div></td></tr></tbody></table></div> <div class="aui-DataGridPager-Container"><table cellspacing="0" cellpadding="0" is-selectable="selectable"><tbody><tr><td align="left" class="GGID2ICBCKB GGID2ICBDKB" style="vertical-align: middle;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABTUlEQVR42r2UO26EQAyGOQtnyVlyllTQcADqUIA4A1Cl5QLQ8H4/Smf/0Xo1M7CskmKRRiPM7w/bY49hvOPZ9/1zXVea55mmaRI73mH/C8RcloW6rqOyLA8LdnyH7hXoYxxH4dS2LfV9f1iw4zt00D+FIR0IzyD6KopCpH8KQj2qqhJpQJwkCYVheIDEcSx26KCH3wE2DAPVdf1w0mFN01AQBGRZ1sMGPfwU0LZtXxDLEciwPM/JdV0BkmH8E/jLKXZ6rRiWpik5jkO2bZ/C7ql2CgxGHeZ5ngAx5AyGIBTYLcxvuV5caESWZZlI8Soy+CuNyj2kw9jB9/0DjPWHBsa4yHXTTxOtEEWRAkOvwe+0+/m4r/oMByLrns7qLfcfbsar7ufmhv5yPlFMnk95IvgnsKNRlaK/ujkwJpg9BmHH+/0aMv97r5m8jHc+v9PgJIofYq0vAAAAAElFTkSuQmCC" width="19" height="19" class="gwt-Image" role="button" aria-label="First page" aria-disabled="true" is-selectable="unselectable"></td><td align="left" class="GGID2ICBCKB GGID2ICBDKB" style="vertical-align: middle;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABOElEQVR42r1UO66DMBDkLJwlZ3lneRU0HID6NXAI6NJCjxAS//+n3GRQLMX2Ql5SxNLKsj0z8q5nbRjfGNu2/SzLQtM00TiO+4w19t8RMed5prZtqSgKLbCPc+BeCV2GYaA8z6lpGuq6TgvsQxQ44A/FkA6AnIgawAHPCqEeZVnuaXDkMAylNXDAg6eJ9X1PVVVpInVdk+/7ZNu2dgY80pWE1nX9BUkFp2lKruuSZVl7cDcGD/znFFu1VlEUkeM4+43OxMAD/1AsyzJN6N9i92v+qfVKkkRK8UgMjwC+ZFThIRXoed6hmMBrBka7cB6DBYIgYMWAB491v3huLp04jjVbPG7F9+o996voyTP3C3MDf9qfKCYMDMHnjhCOxz7OpaK/+jnQJug9IYQZ68c3ZH76r5kijG+OGyVGL0Z2EQ8bAAAAAElFTkSuQmCC" width="19" height="19" class="gwt-Image" role="button" aria-label="Previous page" aria-disabled="true" is-selectable="unselectable"></td><td align="left" class="GGID2ICBEKB" style="vertical-align: middle;"><div class="gwt-HTML" is-selectable="selectable">1-10 of 119</div></td><td align="left" class="GGID2ICBCKB" style="vertical-align: middle;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB80lEQVR42r2UPU/bUBSG+S39K5AgAWJF6tINCRbYqq4dqi5IzAx0r8rAUnVLMA1RAyr5IKQJ+YBgO47jGGNRUJPh7X0v8ZUviULFUEtHV/ee9zw+vuccz8z8j8frh58tx8eV2cPltStX7nn+75Dgbu7a7qNcs5ApWEgXe0gVXLlyz3P6qZsO8u8+Nq66OMxbOKrd47g1RK45GNlQGs8PT01QR/1EUBA8vGq1XRj5zggyVBDuj5tDBaQZeQfUM24MxvvIFk38aAy0bD5sf1JABRZGHfWMG8uqfunAOL/V3k5gIjmP9c13+F4Jn/hEduch6i1Hz871bk9+lk3tbiKbTSSlrbx+g69HDS1LGuMYr2Cd7g2yBTMmHIzBEskkFpaWsfslpRWGcYxXMFtsWPYIEL8fCVLAeSwsLuNbri1B9DPOjsO6vcDPlcZhUWaJkfFT942qVojcmQXGK1g/CFcrdRuZ2m+tHeKfubbxFumSr/kyoud+iTjGaxVtW57ssUmZvd/aEa3wR1U48hsFB4ybOIvVegdG+SbWZwPs7qX05o1AQke954eTp8BxAzF7Ng5KfS27p5+eLnpSR/3U+eRlshEzouRpAc1ePDy2gFi55zn92qU/9+ewxZg0211UGx1ULiy5NsUs8vzZP8Y0MKv1YsBLn78yFAmErQgG1AAAAABJRU5ErkJggg==" width="19" height="19" class="gwt-Image" role="button" aria-label="Next page" aria-disabled="false" is-selectable="unselectable"></td><td align="left" class="GGID2ICBCKB" style="vertical-align: middle;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB/UlEQVR42r2UTS8DQRjHfRZfhZKQuEocOEgkehDhIMFJonGRcHXowVGcJK5Uq+otaKWqtW2pfWm33do2qHB4zH/WzHa1KXGwyWR2Zp//L8/rdnX9x1Ox6ltasUoPapnuH02+44z730Ps595H3aJkRqNoXKNQokz7cZPvOOMe32HXGVR9Xsk+lChypdFR5pVOcx+edZb/oCi7P2TfYQf7tiDbbnTnCyYdXBrfIO9yB0zs4SuDYA9dCwz5iMVVOsk64sBa8AvkQvwzixRY3+Rn2MUSKs9ji1dKvkjhm5oU+nx95J+ep0iqJr0TMOEp7KHzeGdWaucXSZWDBKyHwQAcHhml3Wi2DcxZ0EEvYUbpiYfogFzPBHBgcIiC2/sMtkDLa14YdNBLmM4OKHtz0n1fIAEFcNw/K3MmIoBOb4aVynb19FrzVE945evrZ6GO0U4kQ5PwjIf57kbBdNBLmGXXJ1KKznuoGYY1OTVHoWuLi5EzJ0zHJpp+oVumg95T0YJW4b0jmhNeLa1u0LHyJsXwLLDuwsLxIkHXdhbTWYPCSZsbBrf3Whq3uZqwSysGm4J6+ykomjafvVCiIvPiVth9x3fYwb7jfCKZaMQjDDnLVUxpOC1w12AQi92rvFE9Sf/pz6GzMckVSoTQU3ca33NsFnH/4x+jExjV+jPgr88n1kL1nJCdAj4AAAAASUVORK5CYII=" width="19" height="19" class="gwt-Image" role="button" aria-label="Last page" aria-disabled="false" is-selectable="unselectable"></td></tr></tbody></table></div></div></div></div><div class="aui_FieldLayout_MessageContainer" aria-atomic="true" role=""></div><div></div></div></div></div></div></div></div></div></div></div></div></div> <div class="GGID2ICBLCC"> </div>  <div class="GGID2ICBD- GGID2ICBC- GGID2ICBB-" style="display: none;"></div> <div><div class="GGID2ICBPWB buttonContainer"></div></div> <abbr class="GGID2ICBADC" title="Required" style="display: none;">  * </abbr> <span class="GGID2ICBBDC" style="display: none;"> Required </span> </form></div></div></div></div></div></div></appian-task>';

		var contentDiv = customRouteView.getElement();
		$('body').toggleClass('appian-body');
		// $('.inboxsdk__custom_view_element').toggleClass('appian-body');
		// contentDiv.innerHTML = taskHtml;

		var container = createContainer();
		contentDiv.appendChild(container);

	});

function createContainer(){
	var parentContainerDiv  = document.createElement('div');
	parentContainerDiv.className = 'GGID2ICBFB GGID2ICBKB';

	var taskListTitle = 'My Current Tasks';
	var taskListInstructions = 'View your current tasks and select one to open it in a new tab.';
	var taskListTitleHtml = '<div class="GGID2ICBNCC"><h2 class="appian-form-title GGID2ICBCDC" style="display: block;">'+taskListTitle+'</h2> <p class="GGID2ICBOCC">'+taskListInstructions+'</p></div>'
	parentContainerDiv.innerHTML = taskListTitleHtml;

	var tableContainerDiv  = document.createElement('div');
	tableContainerDiv.className = 'aui-DataGrid-Table nl-table GGID2ICBNKC';

	var taskList = jsonData
	var tbl = createTaskListTable(taskList);

	tableContainerDiv.appendChild(tbl);
	parentContainerDiv.appendChild(tableContainerDiv);

	return parentContainerDiv;
}

function createTableHeader(){
	var thead  = document.createElement('thead');
	var tr  = document.createElement('tr');

	headerText = ["Name", "Received", "Assignee", "Process", "Status", "ID"];

	for(var i = 0; i < headerText.length; i++){
		var th  = document.createElement('th');
		th.innerText = headerText[i];
		tr.appendChild(th);
	}

	thead.appendChild(tr);
	return thead;
}

function createTaskListTable(taskList){
	var tbl  = document.createElement('table');
	tbl.appendChild(createTableHeader());
	var tbody  = document.createElement('tbody');

	for(var i = 0; i < taskList.data.length; i++){
		var tr = tbody.insertRow();
		for(var j = 0; j < taskList.columnConfigs.length; j++){
			var td = tr.insertCell();
			if(j===0) {
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