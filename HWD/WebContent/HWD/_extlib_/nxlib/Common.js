/**
 * @fileoverview 삼성화재 공통 전역 함수 모듈
 */
if (!JsNamespace.exist("nxlib")) {
	/**
	 * JavaScript Library for nexacro Platform
	 * @namespace
	 * @name nxlib
	 * @memberof! <global>
	 */
	JsNamespace.declare("nxlib", {
		callMenu: function(menuInfo) {
			if (!menuInfo.menuId)	return;
			
			var objApp = nexacro.getApplication();
			var objForm = objApp.mainframe.childframe.form;
			
			objForm && objForm["gfnOpenMenu"].call(objForm, menuInfo);
		},

		callMenuM: function(menuInfo) {
			if (!menuInfo.menuId)	return;
			
			var objApp = nexacro.getApplication();
			var objForm = objApp.mainframe.childframe.form;
			var menuNm = objApp.gdsMenu.lookup("menuId", menuInfo.menuId, "menuNm");
			var menuUrl = objApp.gdsMenu.lookup("menuId", menuInfo.menuId, "menuUrl");

			objForm.divTop.form.staHome.set_visible(false);
			objForm.divTop.form.staNavi.set_visible(true);
			objForm.divTop.form.staNavi.set_text(menuNm);
			objForm.divMain.set_visible(false);
			objForm.divCenter.set_visible(true);

			objForm.divCenter.form.divWork.set_url(menuUrl);
			objForm.fnAction("MENU", false);
		},
		
		/**
         * 공통 트랜잭션 함수
         * @param {Form} form Form Object
         * @param {object} oData arguments
         * @param {string | function} callback callback 함수 또는 함수명
         * @return N/A
         * @example
         * var oDatas = {
         *    svcid: "searchList",
         *    url: "svcurl::searchList.do",
         *    inds: [
         *       "dsCond=dsCond"
         *    ],
         *    outds: [
         *       "dsUserInfo=dsUserInfo",
         *       "dsMessage=dsMessage",
         *       "dsConfig=dsUserInfo"
         *       ],
         *    args: [
         *        "arg1=abc",
         *        "arg2=test123"
         *    ],
         *    bAsync: true,
         *    nDataType: 0,
         *    bCompress:false,
         * };
         *
         * nxlib.transaction(this, oDatas, function() {
         *     //nexacro request callback function
         * });
         * @memberOf nxlib
         */
		transaction: function(form, oData, callback) {
			if (Eco.isEmpty(form) || Eco.isEmpty(oData)) {
                trace("[nxlib.transaction error] arguments를 확인하세요.");
                return;
            }

            var pThis = form;
            var oSvc = {
                oForm: pThis,
                svcid: oData.svcid,
                callback: callback
            };

            var sUrl = Eco.isEmpty(oData.url) ? "" : oData.url; //URL
            var inputDataset = Eco.isEmpty(oData.inds) ? "" : oData.inds.join(" "); //input dataset
            var outputDataset = Eco.isEmpty(oData.outds) ? "" : oData.outds.join(" "); //output dataset
            var strArgument = Eco.isEmpty(oData.args) ? "" : oData.args.join(" "); // argument  변환
            var bAsync = Eco.isEmpty(oData.bAsync) ? true : oData.bAsync; //비동기여부 (true: async  false: sync)
            var nDataType = Eco.isEmpty(oData.nDataType) ? 2 : oData.nDataType; //(0: XML타입, 1: 이진 타입, 2: SSV 타입, 4: JSON 타입)
            var bCompress = Eco.isEmpty(oData.bCompress) ? false : oData.bCompress;

            //sUrl = "svcurl::" + sUrl;

            if (!Eco.isFunction(pThis._transactionCallback)) {
                nexacro.Form.prototype._transactionCallback = function(oSvc, nErrorcode, strErrorMsg) {
                    var strSvcId = oSvc.svcid; // service id
                    var svcCallback = oSvc.callback; //callback 함수 또는 함수명

                    if (Eco.isEmpty(svcCallback)) return;

                    if (typeof svcCallback == "function") {
                        svcCallback.call(this, strSvcId, nErrorcode, strErrorMsg);
                    } else if (typeof svcCallback == "string") {
                        if (!Eco.isFunction(this[svcCallback])) return;
                        this[svcCallback].call(this, strSvcId, nErrorcode, strErrorMsg);
                    } else {
                        trace("[nxlib.transaction error] callback 함수 또는 함수명을 지정하세요.");
                    }
                };
            }

            pThis.transaction(oSvc, sUrl, inputDataset, outputDataset, strArgument, "_transactionCallback", bAsync, nDataType, bCompress);
		},

		openPopup: function(form, frameId, formUrl, objArgList, options, sPopupCallback, bModeless) {
			var nLeft = -1;
			var nTop = -1;
			var nWidth = 1;
			var nHeight = 1;
			var bShowTitle = true;
			var bShowStatus = false;
			var bLayered = false;
			var nOpacity = 100;
			var bAutoSize = true;
			var bResizable = true;
			var bRound = false;
			var bReload = false; //열려진 화면 일 때 reload 처리 유무
			var sDragMoveType = "all";
			var sTitleText = "";
			var objParentFrame = null;

			if (form) {
				objParentFrame = form.getOwnerFrame();
			} else {
				objParentFrame = nexacro.getApplication().mainframe;
			}

			//2016.05.10.    	sPopupCallback = (Eco.isEmpty(sPopupCallback)) ? "popupAfter" : sPopupCallback;
			options += "";
			var aVal = options.trim().split(" ");
			for (var i = 0; i < aVal.length; i++) {
				var aVal2 = aVal[i].trim().split("=");
				switch (aVal2[0]) {
					case "top":
						nTop = parseInt(aVal2[1]);
						break;
					case "left":
						nLeft = parseInt(aVal2[1]);
						break;
					case "width":
						nWidth = parseInt(aVal2[1]);
						break;
					case "height":
						nHeight = parseInt(aVal2[1]);
						break;
					case "title":
					case "titlebar":
					case "showtitlebar":
						bShowTitle = aVal2[1];
						break;
					case "titletext":
						sTitleText = aVal2[1];
						break;
					case "status":
					case "statusbar":
					case "showstatusbar":
						bShowStatus = aVal2[1];
						break;
					case "layered":
						bLayered = aVal2[1];
						break;
					case "opacity":
						nOpacity = aVal2[1];
						break;
					case "autosize":
						bAutoSize = aVal2[1];
						break;
					case "resizable":
						bResizable = aVal2[1];
						break;
					case "round":
						bRound = aVal2[1];
						break;
					case "reload":
						bReload = aVal2[1];
						break;
				}
			}
			var sOpenalign = "";
			sOpenalign = "center middle";

			if (nWidth == 1) nWidth = 600;
			if (nHeight == 1) nHeight = 500;

			if (nLeft == -1) {
				nLeft = (nexacro.getApplication().mainframe.width - nWidth) / 2;
				if (bModeless) nLeft += system.clientToScreenX(nexacro.getApplication().mainframe, 0);
			}
			if (nTop == -1) {
				nTop = (nexacro.getApplication().mainframe.height - nHeight) / 2;
				if (bModeless) nTop += system.clientToScreenY(nexacro.getApplication().mainframe, 0);
			}

			if (bModeless) {
				//열린 modeless 팝업 화면이 존재하면 focus 처리 후 리턴.
				var objPopFrams = nexacro.getPopupFrames();

				var objPopFrame = objPopFrams[frameId];
				if (objPopFrame) {
					objPopFrame.setFocus();
					if (bReload == "true") {
						//arguments 셋팅
						if (!Eco.isEmpty(objArgList)) {
							if (!objPopFrame.arguments) objPopFrame.arguments = {};

							for (var key in objArgList) {
								if (objArgList.hasOwnProperty(key)) {
									objPopFrame.arguments[key] = objArgList[key];
								}
							}
						}
						objPopFrame.form.reload();
					}
					return;
				}

				//modeless callback 값 setting
				//objArgList._close_callback = sPopupCallback;

				var sOpenStyle = "cssclass=Popup";

				if (bShowTitle == "false") sOpenStyle += "showtitlebar=false";
				if (bShowStatus == "true") sOpenStyle += " showstatusbar=true";
				if (bAutoSize == "false") sOpenStyle += " autosize=false";
				if (bResizable == "false") {
					sOpenStyle += " resizable=false";
				} else {
					sOpenStyle += " resizable=true";
				}
				nexacro.open(frameId, formUrl, objParentFrame, objArgList, sOpenStyle, nLeft, nTop, nWidth, nHeight, form);
			} else {
				newChild = new nexacro.ChildFrame;

				//trace( 'UI공통 newChild.init( '+frameId+', '+nLeft+', '+nTop+', '+nWidth+', '+nHeight+', null, null, '+formUrl+' )' );

				newChild.init(frameId, nLeft, nTop, nWidth, nHeight, null, null, formUrl);

				newChild.set_background("transparent");
				newChild.set_dragmovetype(sDragMoveType);
				newChild.set_showtitlebar(bShowTitle);
				newChild.set_autosize(bAutoSize);
				newChild.set_resizable(bResizable);
				newChild.set_titletext(sTitleText);
				newChild.set_showstatusbar(bShowStatus);
				newChild.set_openalign(sOpenalign);
				newChild.set_layered(bLayered);
				//newChild.set_cssclass("Popup");

				//		if(bRound) newChild.set_bordertype( "round 10 10" );
				newChild.set_opacity(nOpacity);

				//arguments 셋팅
				if (!Eco.isEmpty(objArgList)) {
					if (!newChild.arguments) newChild.arguments = {};
					for (var key in objArgList) {
						if (objArgList.hasOwnProperty(key)) newChild.arguments[key] = objArgList[key];
					}
				}

				newChild.showModal(objParentFrame, objArgList, form, sPopupCallback);
			}
		},

		openSlidePopup: function(form, frameId, formUrl, objArgList, options, sPopupCallback) {
			var nLeft = form.width;
			var nTargetLeft = nLeft;
			var nTop = 0;
			var nWidth = 400;
			var nHeight = form.height;

			options += "";
			var aVal = options.trim().split(" ");
			for (var i = 0; i < aVal.length; i++) {
				var aVal2 = aVal[i].trim().split("=");
				switch (aVal2[0]) {
					case "width":
						nWidth = parseInt(aVal2[1]);
						nLeft = form.width + nWidth;
						nTargetLeft = form.width - nWidth;
						break;
				}
			}
			
			if (!form.all["__aniSlidePop"]) {
				var objAni = new nexacro.Animation("__aniSlidePop", form);
				form.addChild("__aniSlidePop", objAni);
				
				form.__aniSlidePop.set_duration(200);
				form.__aniSlidePop.set_easing("linear");
			}

			// overlay create
			var objOverlay = new Static("__" + frameId + "_overlay", 0, 0, null, null, 0, 0);
			objOverlay.set_background("rgba(0,0,0,.5)");
			form.addChild(objOverlay.name, objOverlay);
			objOverlay.show();
			
			var newChild = new Div("__" + frameId + "_pop", nLeft, nTop, 0, nHeight);
			newChild.set_url(formUrl);
			newChild.set_opacity("0");
			
			//arguments 셋팅
			if (!Eco.isEmpty(objArgList)) {
				if (!newChild.arguments) newChild.arguments = {};
				for (var key in objArgList) {
					if (objArgList.hasOwnProperty(key)) newChild.arguments[key] = objArgList[key];
				}
			}

			form.addChild(newChild.name, newChild);
			newChild.show();
			
			newChild.form.close = function(arg) {
				var objDelete = form.removeChild("__" + frameId + "_pop");
				objDelete.destroy();
				objDelete = null;
				
				objDelete = form.removeChild("__" + frameId + "_overlay");
				objDelete.destroy();
				objDelete = null;
				
				form[sPopupCallback].call(form, frameId, arg);
			}
			
			form.__aniSlidePop.removeTarget("aniItem01");
			form.__aniSlidePop.addTarget("aniItem01", newChild, "left:'"+nTargetLeft+"px', width:'"+nWidth+"px', opacity:'100'");
			form.__aniSlidePop.play();
		},

		/**
         * 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
         * @public
         * @param {object} p 부모 컨테이너
         * @param {string} name 찾을 대상 이름
         * @return {object} 검색된 component, object
         * @memberOf nxlib
         */
        lookup: function(p, name) {
            var o;
            while (p) {
                o = p.components;
                if (o && o[name]) return o[name];

                o = p.objects;
                if (o && o[name]) return o[name];

                p = p.parent;
            }
            return null;
        },

		getNowAddDate: function(offset, sFormat) {
			if (Eco.isEmpty(sFormat)) sFormat = "yyyyMMdd";
			var dt = Eco.date.addDate(new Date(), offset);

			return Eco.date.getMaskFormatString(dt, sFormat);
		},

		getNowDate: function(sFormat) {
			if (Eco.isEmpty(sFormat)) sFormat = "yyyyMMdd";
			var dt = new Date();

			return Eco.date.getMaskFormatString(dt, sFormat);
		},
		
		/**
		 * 입력된 숫자에 3자리마다 콤마추가
		 * @param num
		 * @return String
		 */
		addMoneyCommas: function(num) {
			if (num == undefined) {
				return '0';
			}
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		},
		
		/**
		 * 입력된 숫자에 3자리마다 콤마추가(소숫점적용 버전)
		 * @param num
		 * @return String
		 */
		addMoneyCommas2: function(num) {
			if (num == undefined) {
				return '0';
			}
			
			var val = num.toString().replace(/^\s*/, '').replace(/\s*$/, '');
			if (nexacro.isNumeric(val)) {
				var parts = val.split(".");
				parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
				if (parts[0] === "")	parts[0] = "0";
				return parts.join(".");
			} else {
				return "0";
			}
		},
		
		/**
		 * 날짜를 입력받아 패턴에 맞게 변경 후 리턴
		 * @param sValue : 숫자 형태의 날짜 ex) 20190101
		 * @param pattern : 각 화면의 값, (별도 패턴 입력 가능)
		 * 
		 * @return 패턴이 적용된 날짜
		 */
		getDateFormat: function(sValue, pattern) {
			var dt = Eco.date.strToDate(sValue);
			return Eco.date.getMaskFormatString(dt, pattern);
		},
		
		/**
		 * 상품전문에서 find 결과를 반환한다.
		 * @param selector
		 * @returns
		 */
		getProductXml: function(selector) {
			var xml;
			if (Eco.isEmpty(selector)) {
				xml = ProductXmlProvider.getCurrentXmlDom();
			} else {
				xml = ProductXmlProvider.getCurrentXmlDom().find(selector);
			}
			return xml;
		},
		
		deleteComponents: function(obj) {
			var comps = obj.form.components;
			var objDelete;
			
			for (var i = comps.length - 1; i >= 0; i--) {
				objDelete = obj.removeChild(comps[i].name);
				objDelete.destroy();
				objDelete = null;
			}
		},
		
		createComboComponent: function(form, id, position, items, defaultValue) {
			var itemList = "<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows>";
			for (var i = 0, len = items.length; i < len; i++)
				itemList += "<Row><Col id=\"codecolumn\">" + items[i].code + "</Col><Col id=\"datacolumn\">" + items[i].text + "</Col></Row>";
			itemList += "</Rows>";
			
			var obj = new Combo(id, position.left, position.top, position.width, position.height, position.right, position.bottom);
			obj.set_codecolumn("codecolumn");
			obj.set_datacolumn("datacolumn");
			obj.set_value(defaultValue);
			
			var innerdataset = new nexacro.NormalDataset(id + "_innerdataset", obj);
			innerdataset._setContents(itemList);
			
			obj.set_innerdataset(innerdataset);
			form.addChild(obj.name, obj);
			obj.show();
		},
		
		createRadioComponent: function(form, id, position, items, defaultValue) {
			var itemList = "<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows>";
			for (var i = 0, len = items.length; i < len; i++)
				itemList += "<Row><Col id=\"codecolumn\">" + items[i].code + "</Col><Col id=\"datacolumn\">" + items[i].text + "</Col></Row>";
			itemList += "</Rows>";
			
			var obj = new Radio(id, position.left, position.top, position.width, position.height, position.right, position.bottom);
			obj.set_codecolumn("codecolumn");
			obj.set_datacolumn("datacolumn");
			obj.set_value(defaultValue);
			obj.set_direction("vertical");
			
			var innerdataset = new nexacro.NormalDataset(id + "_innerdataset", obj);
			innerdataset._setContents(itemList);
			
			obj.set_innerdataset(innerdataset);
			form.addChild(obj.name, obj);
			obj.show();
		},
		
		createEditComponent: function(form, id, position, defaultValue) {
			var obj = new Edit(id, position.left, position.top, position.width, position.height, position.right, position.bottom);
			obj.set_value(defaultValue);
			form.addChild(obj.name, obj);
			obj.show();
		},
		
		createLabelComponent: function(form, id, position, text) {
			var obj = new Static(id, position.left, position.top, position.width, position.height, position.right, position.bottom);
			obj.set_cssclass("sta_WF_labelBasic");
			obj.set_text(text);
			obj.set_wordWrap("char");
			form.addChild(obj.name, obj);
			obj.show();
		},
		
		createBackgroundComponent: function(form, id, position) {
			var obj = new Static(id, position.left, position.top, position.width, position.height, position.right, position.bottom);
			obj.set_cssclass("sta_WF_labelContent");
			form.addChild(obj.name, obj);
			obj.show();
		}
	});
}


if (!nexacro.TransModule) {
    nexacro.TransModule = function(name, parent) {
        if (!name) {
            name = "tranmodule_" + 'xxxx_yxxx'.replace(/[xy]/g,
                function(c) {
                    var r = Math.random() * 16 | 0,
                        v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
        }
        this.id = this.name = name;
        if (!parent) {
            parent = nexacro.getApplication().getActiveForm();
            if (!parent) {
                var popupframes = nexacro.getPopupFrames();
                var frames_len = popupframes ? popupframes.length : 0;
                for (var i = 0; i < frames_len; i++) {
                    var currwin = popupframes[i]._window;
                    if (currwin) {
                        var frame = currwin.getActiveFrame();
                        if (frame && frame.form instanceof nexacro.Form) {
                            parent = frame.form;
                            break;
                        }
                    }
                }

                if (!parent) {
                    currwin = nexacro.getApplication().mainframe._window;
                    var cur_focus_paths = currwin.getCurrentFocusPaths();
                    var cur_focus_paths_len = (cur_focus_paths ? cur_focus_paths.length : 0);
                    for (i = 0; i < cur_focus_paths_len; i++) {
                        var _comp = cur_focus_paths[i];
                        if (!_comp) {
                            continue;
                        }
                        if (_comp._is_form) {
                            parent = _comp;
                            break;
                        }
                    }
                }
            }
        }
        this.parent = parent;
        this.parent.addChild(this.name, this);

        var sUrl = nexacro.getApplication().xadl;
        var m = sUrl.match(/^(([^:\/?#]+:)?(?:\/\/(([^\/?#:]*)(?::([^\/?#:]*))?)))?([^?#]*)(\?[^#]*)?(#.*)?$/);
        /*
        			hash: m[8] || "",                    // #asd
        			host: m[3] || "",                    // localhost:257
        			hostname: m[4] || "",                // localhost
        			href: m[0] || "",                    // http://localhost:257/deploy/?asd=asd#asd
        			origin: m[1] || "",                  // http://localhost:257
        			pathname: m[6] || (m[1] ? "/" : ""), // /deploy/
        			port: m[5] || "",                    // 257
        			protocol: m[2] || "",                // http:
        			search: m[7] || ""                   // ?asd=asd
        */
        var sProtocol = m[2].toLowerCase().replace(":", "");
        if (sProtocol != "http" && sProtocol != "https") sProtocol = "http";
        this.protocol = sProtocol;
        this.baseTimeout = 30; // time in seconds
        this.timeOut = nexacro.getEnvironment().httptimeout;
        this.responseText = "";

        sProtocol = null;
        m = null;
    };
    var _pTransModule = nexacro.TransModule.prototype = nexacro._createPrototype(nexacro.Object, nexacro.TransModule);
    _pTransModule._type_name = "TransModule";
    _pTransModule.destroy = function() {
        if (this.parent) {
            var objDelete = this.parent.removeChild(this.name);

            if (objDelete) {
            	objDelete.destroy();
            	objDelete = null;
            }
        }

        return true;
    };
    _pTransModule.set_protocol = function(v) {
        if (!v || v == "") v = "http";
        v = v.toLowerCase();
        if (v != "http" && v != "https") v = "http";
        this.protocol = v;
    };
    _pTransModule.nexaTransCallback = function(pThis, svcId, callBack) {
        return function(status, data, cookie, fireerrorcode, returncode, locationurl) {
            if (status < 0) {
                if (status === -9) {
                    callBack.call(pThis, svcId, -1, "comm_cancel_byuser"); //콜백으로 전달!!!
                } else {
                    callBack.call(pThis, svcId, -1, "Error");
                }
            } else if (status === 0) {
                try {
                    callBack.call(pThis, svcId, 0, data);
                } catch (e) {
                    callBack.call(pThis, svcId, -1, data);
                } finally {
                    data = "";
                }
            }
        };
    };

    _pTransModule.callService = function(pThis, svcId, url, param, callBack) {
        var strJSON = JSON.stringify(param);
        var path = url;
        
        if (system.navigatorname === "nexacro") {
            nexacro.getEnvironment().set_httptimeout(this.baseTimeout);
            var bindfn = this.nexaTransCallback(pThis, svcId, callBack);
            var httpheaderstr = "Content-Type:application/json; charset=utf-8" + "\r\n";
            var failpass;
            var _handle = nexacro.__startLoad(path, bindfn, "text", "none", true, "", strJSON, 0, false, 1000, failpass, httpheaderstr);
            _handle = null;
        } else {
            var req;
            if (window.XDomainRequest) { // IE 8,9
                req = new XDomainRequest;
            } else if (window.XMLHttpRequest) {
                req = new XMLHttpRequest;
            } else {
                req = new ActiveXObject("MSXML2.XMLHTTP.3.0");
            }
            try {
                req.timeout = this.baseTimeout * 1000; // time in milliseconds        
                req.ontimeout = function(e) {
                    callBack.call(pThis, svcId, -1, "TIMEOUT"); //콜백으로 전달!!!
                    req = null;
                };
            } catch (e) {}
            var objForm = pThis;
            var reqEvt = function() {
                if (req.readyState === 4 && req.status === 200) {
                    try {
                        callBack.call(objForm, svcId, 0, req.responseText); //콜백으로 전달!!!
                    } catch (e) {
                        callBack.call(objForm, svcId, -1, req.responseText);
                    } finally {
                        req = null;
                    }
                }
            };
            if (window.XDomainRequest) {
                req.onload = reqEvt;
            } else {
                req.onreadystatechange = reqEvt;
            }
            req.onerror = function(e) {
                req = null;
                callBack.call(pThis, svcId, -1, "Error"); //콜백으로 전달!!!
            };
			req.open("POST", path);
            if (req.setRequestHeader) req.setRequestHeader("Content-Type", "application/json; charset=" + "utf-8");
            //req.withCredentials = true;
            req.send(strJSON);
        }
    };
}

/**
 * JavaScript 기본 유형(String, Number 등)의 기능을 확장하기 위한 함수
 * 
 * @param {Object} name 확장할 메소드 이름
 * @param {Object} func 함수 구현체
 */
Function.prototype.extend = function(name, func) {
	if (!this.prototype[name]) {
		Object.defineProperty(this.prototype, name, {enumerable: false, value: func});
	}
	return this;
};

Array.extend('contains', function(value) {
	if (this == null)	return false;
	for (var i = 0; i < this.length; i++) {
		if (this[i] == value) {
			return true;
		}
	}
	return false;
});

Array.extend('indexOf', function(value) {
	if (this == null)	return -1;
	for (var i = 0; i < this.length; i++) {
		if (this[i] == value) {
			return i;
		}
	}
	return -1;
});