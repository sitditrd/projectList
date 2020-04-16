/**
 * @fileoverview Grid Cell Sparkline 확장 모듈
 */
nexacro._CellSparklineControl = function (id, left, top, width, height, parent, displaymode, controlmode) {
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

var _pCellSparkline = nexacro._createPrototype(nexacro.Component, nexacro._CellSparklineControl);
nexacro._CellSparklineControl.prototype = _pCellSparkline;
_pCellSparkline._is_subcontrol = true;
_pCellSparkline.context = null;
_pCellSparkline.options = {};

_pCellSparkline.on_create_contents = function () {
	var control_elem = this.getElement();
	if (control_elem) {
		if (!this.context) {
			this.context = new nexacro.CanvasElement(control_elem);
		}
		var win = this._getWindow();
		this.context.create(win);

		if (this._cellinfo["sparklineoptions"]) {
			this.options = this._cellinfo.sparklineoptions;
		}
	}
};

_pCellSparkline._updateAll = function (onlycontents, breadonly) {
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

_pCellSparkline._setProperty = function (onlycontrolprop) {
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
		var options = this.options;

		if (!options["type"])	options.type = "line";
		if (!options["backgroundcolor"])	options.backgroundcolor = "transparent";
		if (!options["color"])	options.color = "#376092";
		if (!options["mincolor"])	options.mincolor = "#0000d0";
		if (!options["maxcolor"])	options.maxcolor = "#d00000";
		if (!options["wincolor"])	options.wincolor = "#0000d0";
		if (!options["losscolor"])	options.losscolor = "#d00000";
		
		this.sparkline(v, options);
	}
};

_pCellSparkline._drawLine = function(ctx, startX, startY, endX, endY, color) {
	ctx.save();
	ctx.setElementStrokeStyle(nexacro.ColorObject(color));
	ctx.beginPath();
	ctx.moveTo(startX, startY);
	ctx.lineTo(endX, endY);
	ctx.stroke();
	ctx.restore();
};

_pCellSparkline._drawCircle = function(ctx, x, y, radius, color) {
	ctx.save();
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.setElementFillStyle(nexacro.ColorObject(color));
	ctx.fill();
	ctx.restore();
};

_pCellSparkline._drawRect = function(ctx, x, y, width, height, color) {
	ctx.save();
	ctx.setElementFillStyle(nexacro.ColorObject(color));
	ctx.fillRect(x, y, width, height);
	ctx.restore();
};

//캔버스 차트 만들기 함수
_pCellSparkline.sparkline = function(values, options) {
	var data = values.split(",");
	var height = this._adjust_height -3;
	var width = this._adjust_width;
	var max = Math.max.apply(Math, data);
	var min = Math.min.apply(Math, data);

	//Canvas Element 초기화
	this.context.setElementPosition(0, 0);
	this.context.setElementSize(width, height);
	this.context.clearRect(0, 0, width, height);

	//Canvas FillStyle 설정
	this.context.setElementFillStyle(nexacro.ColorObject(options.backgroundcolor));

	//Canvas 배경색 설정
	this.context.drawFillRect(0, 0, width, height);

	if (options.type == 'line') {
		var _getPoints = function(pos, data, min, max) {
			var x, y;
			var result = [];
			var left = pos.x + 3, width = pos.width - 6, top = pos.y + 3, height = pos.height - 6, gap = max - min;
			for (var k = 0, len = data.length; k < len; k++) {
				var i = Number(data[k]);
				x = left + k / (len - 1) * width;
				y = top + (isNaN(i) || 0 == gap ? height : (1 - (i - min) / gap) * height);
				result.push(x, y);
			}
			return result;
		};
		
		this.context.setElementLineWidth(1);

		var points = _getPoints({x: 0, y: 0, width: width, height: height}, data, min, max);
		for (var i = 0, len = data.length; i < len - 1; i++) {
			var x = points[2 * i], y = points[2 * i + 1];
			var nextX = points[2 * (i + 1)], nextY = points[2 * (i + 1) + 1];

			this._drawLine(this.context, x, y, nextX, nextY, options.color);

			if (data[i] == min) {
				this._drawCircle(this.context, x, y, 2, options.mincolor);
			}
			else if (data[i] == max) {
				this._drawCircle(this.context, x, y, 2, options.maxcolor);
			}
			else if (i == len - 2) {
				this._drawCircle(this.context, nextX, nextY, 2, options.color);
			}
		}
	} else if (options.type == 'column') {
		var itemWidth = width / data.length;
		for (var i = 0, len = data.length; i < len; i++) {
			var itemHeight = Math.round(height * data[i] / max);
			var x = i * itemWidth + 3;
			var y = height - itemHeight - 3;
			var color = data[i] == min ? options.mincolor : data[i] == max ? options.maxcolor : options.color;
			this._drawRect(this.context, x, y, itemWidth - 3, itemHeight, color);
		}
	} else if (options.type == 'winloss') {
		var itemWidth = width / data.length;
		var itemHeight = Math.round(height / 2);
		for (var i = 0, len = data.length; i < len; i++) {
			if (!data[i] || data[i] === 0)	continue;

			var x = i * itemWidth + 3;
			var y = data[i] > 0 ? 0 : itemHeight;	//height - itemHeight - 3;
			var color = data[i] < 0 ? options.losscolor : data[i] > 0 ? options.wincolor : options.color;
			this._drawRect(this.context, x, y, itemWidth - 3, itemHeight, color);
		}
	}

	var win = this._getWindow();
	this.context.create(win);
};