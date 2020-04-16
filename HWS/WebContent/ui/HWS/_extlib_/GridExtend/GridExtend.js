/**
 * @fileoverview Grid 확장 모듈
 */
_pCellControl._createDisplayer = function (displayType) {
	var view = this._view;
	var cellinfo = this._refinfo;

	switch (displayType) {
		case "buttoncontrol":
			this._createButtonDisplayer();
			break;
		case "checkboxcontrol":
			this._createCheckboxDisplayer();
			break;
		case "imagecontrol":
			this._createImageDisplayer();
			break;
		case "treeitemcontrol":
			this._createTreeDisplayer();
			if (view) {
				view._treeCellinfo = cellinfo;
			}
			break;
		case "combocontrol":
			this._createComboDisplayer();
			break;
		case "calendarcontrol":
			this._createCalendarDisplayer();
			break;
		case "maskeditcontrol":
			this._createMaskEditDisplayer();
			break;
		case "textareacontrol":
			this._createTextAreaDisplayer();
			break;
		case "progressbarcontrol":
			this._createBarDisplayer();
			break;
		case "editcontrol":
			this._createEditDisplayer();
			break;
		// 차트 컨트롤 추가
		case "chartcontrol":
			this._createChartDisplayer();
			break;
		// 스파크라인 컨트롤 추가
		case "sparklinecontrol":
			this._createSparklineDisplayer();
			break;
		// 웹브라우저 컨트롤 추가
		case "webbrowsercontrol":
			this._createWebBrowserDisplayer();
			break;
		default:
			this._createTextDisplayer();
			break;
	}

	if (this._subComp) {
		this._subComp.on_changeUserStatus = function (changestatus, value, applyuserstatus, currentstatus, currentuserstatus) {
			if (this._displaymode) {
				if (changestatus == "nulltext" && value) {
					return changestatus;
				}
				else {
					return applyuserstatus;
				}
			}
			return applyuserstatus;
		};
	}

	this._curDisplayType = displayType;
	this.on_apply_textAlign(cellinfo.textAlign);
	this.on_apply_verticalAlign(cellinfo.verticalAlign);
};

_pCellControl._createChartDisplayer = function () {
	var control_elem = this._control_element;
	if (control_elem) {
		var rect = this._getControlRect();
		this._changeClientmode("normal");
		var controlComp = new nexacro._CellChartControl("cellchart", rect.left, rect.top, rect.width, rect.height, this, true);
		controlComp.createComponent(true);

		this._subComp = controlComp;
	}
};

_pCellControl._createSparklineDisplayer = function () {
	var control_elem = this._control_element;
	if (control_elem) {
		var rect = this._getControlRect();
		this._changeClientmode("normal");
		var controlComp = new nexacro._CellSparklineControl("cellsparkline", rect.left, rect.top, rect.width, rect.height, this, true);
		controlComp.createComponent(true);

		this._subComp = controlComp;
	}
};

_pCellControl._createWebBrowserDisplayer = function () {
	var control_elem = this._control_element;
	if (control_elem) {
		var rect = this._getControlRect();
		this._changeClientmode("normal");
		var controlComp = new nexacro._CellWebBrowserControl("cellwebbrowser", rect.left, rect.top, rect.width, rect.height, this, true);
		controlComp.createComponent(true);

		this._subComp = controlComp;
	}
};