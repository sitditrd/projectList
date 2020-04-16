/**
 * @fileoverview Grid Cell Chart 확장 모듈
 */
nexacro._CellChartControl = function (id, left, top, width, height, parent, displaymode, controlmode) {
	nexacro.GraphicsControl.call(this, id, left, top, width, height, null, null, null, null, null, null, parent);

	this.tabstop = false;
	this._clickevt_able = true;
	this._displaymode = (displaymode) ? true : false;
	this._controlmode = (controlmode) ? true : false;
	this._view = parent._view;
	this._cellinfo = parent._refinfo;
	this._cellobj = parent;
	this._setControl();
};

var _pCellChart = nexacro._createPrototype(nexacro.Component, nexacro._CellChartControl);
nexacro._CellChartControl.prototype = _pCellChart;
_pCellChart._is_subcontrol = true;
_pCellChart.context = null;

_pCellChart.on_create_contents = function () {
	var control_elem = this.getElement();
	if (control_elem) {
		if (!this.context) {
			this.context = new nexacro.CanvasElement(control_elem);
		}
		var win = this._getWindow();
		this.context.create(win);
	}
};

_pCellChart.on_created_contents = function (win) {
	var pCanvas = this.context;
	if (pCanvas) {
		pCanvas.create(win);
	}
};

_pCellChart.on_destroy_contents = function () {
	if (this.context) {
		this.context.destroy();
		this.context = null;
	}
};

_pCellChart._updateAll = function (onlycontents, breadonly) {
	if (breadonly !== undefined) {
		if (this.on_apply_readonly) {
			this.on_apply_readonly(breadonly);
		}
		else {
			this._changeStatus("readonly", breadonly);
		}
	}
	if (!onlycontents) {
		this._apply_status(this._oldstatus, this._status, this._olduserstatus, this._userstatus);
	}

	this._setProperty();
};

_pCellChart._setProperty = function (onlycontrolprop) {
	var cellinfo = this._cellinfo;
	var cellobj = this._cellobj;
	var datarow = cellobj._getDataRow();

	if (onlycontrolprop) {
		return;
	}

	var v;
	if (this._displaymode == true) {
		v = cellinfo._getDisplayText(datarow);
	}
	else {
		v = cellinfo._getValue(datarow);
	}

	if (v != null) {
		var type = this._cellinfo.charttype;
		this.drawChart(type, v);
	}
};

_pCellChart._drawLine = function(ctx, startX, startY, endX, endY, color) {
	ctx.save();
	ctx.setElementStrokeStyle(nexacro.ColorObject(color));
	ctx.beginPath();
	ctx.moveTo(startX, startY);
	ctx.lineTo(endX, endY);
	ctx.stroke();
	ctx.restore();
};

_pCellChart._drawCircle = function(ctx, x, y, radius, color) {
	ctx.save();
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.setElementFillStyle(nexacro.ColorObject(color));
	ctx.fill();
	ctx.restore();
};

_pCellChart._drawRect = function(ctx, x, y, width, height, color) {
	ctx.save();
	ctx.setElementFillStyle(nexacro.ColorObject(color));
	ctx.fillRect(x, y, width, height);
	ctx.restore();
};

//캔버스 차트 만들기 함수
_pCellChart.drawChart = function(type, values) {
	var data = values.split(",");
	var height = this._adjust_height;
	var width = this._adjust_width;
	
	var bindcolumn = this._cellinfo.text._bindexpr;
	var max = this._view.getBindDataset().getMax(bindcolumn);
	var min = this._view.getBindDataset().getMin(bindcolumn);

	//Canvas Element 초기화
	this.context.setElementPosition(0, 0);
	this.context.setElementSize(width, height);
	this.context.clearRect(0, 0, width, height);

	//Canvas FillStyle 설정
	this.context.setElementFillStyle(nexacro.ColorObject("transparent"));

	//Canvas 배경색 설정
	this.context.drawFillRect(0, 0, width, height);

	if (type == 'horizontalbar') {
		max = Math.abs(max);
		min = Math.abs(min);
		max = max < min ? min : max;

		// Base line 그리기
		var x = Math.round(width / 2), y = 0;
		this._drawRect(this.context, x, y, 1, height, "#585858");

		// Bar 그리기
		var itemHeight = height / data.length;
		for (var i = 0, len = data.length; i < len; i++) {
			var itemWidth = Math.round((width / 2) * Math.abs(data[i]) / max);
			var x = Math.round(width/2), y = i * itemHeight + 3;

			if (data[i] < 0) {
				x = x - itemWidth;
			} else {
				x = x + 1;
			}
			
			var color = data[i] < 0 ? "#ff0000" : "#99ff33";
			this._drawRect(this.context, x, y, itemWidth, itemHeight - 6, color);
		}
	}

	var win = this._getWindow();
	this.context.create(win);
};