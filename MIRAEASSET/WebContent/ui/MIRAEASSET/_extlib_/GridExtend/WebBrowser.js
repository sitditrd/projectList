/**
 * @fileoverview Grid Cell WebBrowser 확장 모듈
 */
nexacro._CellWebBrowserControl = function (id, left, top, width, height, parent, displaymode, controlmode) {
	nexacro.WebBrowser.call(this, id, left, top, width, height, null, null, null, null, null, null, parent);

	this.tabstop = false;
	this._clickevt_able = true;
	this._displaymode = (displaymode) ? true : false;
	this._controlmode = (controlmode) ? true : false;
	this._view = parent._view;
	this._cellinfo = parent._refinfo;
	this._cellobj = parent;
	this._setControl();
};

var _pCellWebBrowser = nexacro._createPrototype(nexacro.Component, nexacro._CellWebBrowserControl);
nexacro._CellWebBrowserControl.prototype = _pCellWebBrowser;
_pCellWebBrowser._is_subcontrol = true;
_pCellWebBrowser._ifrm_elem = null;
_pCellWebBrowser.window = null;
_pCellWebBrowser.document = null;
_pCellWebBrowser.url = "";
_pCellWebBrowser.useurlhistory = false;
_pCellWebBrowser._url = "";
_pCellWebBrowser._blockLoadFlag = false;
_pCellWebBrowser._current_url = "";

_pCellWebBrowser.on_create_contents = function () {
	var control_elem = this.getElement();
	if (control_elem) {
		this._ifrm_elem = nexacro._Browser == "Runtime" ? new nexacro._WebBrowserPluginElement(control_elem) : control_elem;
		this._ifrm_elem.setElementSize(this._getClientWidth(), this._getClientHeight());
	}
};

_pCellWebBrowser.on_create_contents_command = function () {
	return "";
};

_pCellWebBrowser.on_attach_contents_handle = function (win) {
	this.on_created_contents(win);
	return;
};

_pCellWebBrowser.on_created_contents = function (win) {
	var ifrm_elem = this._ifrm_elem;
	if (ifrm_elem) {
		ifrm_elem.component = this;

		ifrm_elem.create(win);
		this.document = ifrm_elem._document;
		this.window = ifrm_elem._winodw;
	}
	if (this._url === "") {
		this._url = "about:blank";
	}
	this.on_apply_url();
};

_pCellWebBrowser.on_destroy_contents = function () {
	var ifrm_elem = this._ifrm_elem;
	if (ifrm_elem) {
		this.window = null;
		this.document = null;
		ifrm_elem.destroy();
		this._ifrm_elem = null;
	}
};

_pCellWebBrowser._updateAll = function (onlycontents, breadonly) {
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

_pCellWebBrowser._setProperty = function (onlycontrolprop) {
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
		var val = v.toString();

		// if (val != "about:blank" && val.match(/http:\/\/|file:\/\/|https:\/\//gi) == null) {
		// 	val = "http://" + val;
		// }

		this._url = val;
		this.url = v;

		this.on_apply_url();
	}
};

_pCellWebBrowser.on_apply_url = function () {
	if (this._url === "http://" || this._url === "file://" || this._url === "https://" || this._url === "") {
		return;
	}

	var ifrm_elem = this._ifrm_elem;
	if (ifrm_elem) {
		this._blockLoadFlag = false;
		//ifrm_elem._setUrl(this._url, this.useurlhistory);
		
		if (nexacro._Browser == "Runtime") {
			if (this._url == "about:blank") {
				ifrm_elem._setUrl(this._url, this.useurlhistory);
			}
			else {
				var doc = ifrm_elem.getProperty("document");

				if (doc) {
					var body = doc.getProperty("body");

					if (body) {
						body.setProperty("innerHTML", this._url);
						doc.setProperty("body", body);
						ifrm_elem.setProperty("document", doc);
					}
				}
			}
		}
		else {
			// var doc = ifrm_elem.handle.contentDocument;
			// doc.body.style.overflow = "hidden";
			// doc.body.style.maxHeight = this._getClientHeight();
			// doc.body.innerHTML = this._url;
			ifrm_elem.handle.style.maxHeight = this._getClientHeight();
			ifrm_elem.handle.innerHTML = this._url;
		}
	}
};