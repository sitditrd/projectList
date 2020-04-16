//XJS=rMateChartH5.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         * rMateChartH5 Kit for nexacro
         *     version : 3.0
         *     last modified : 2016.2.17
         *	   @4.0버전에 새롭게 생긴 외부 함수 추가
         */

        // 여러 차트가 생성되었을 경우 itemClickJsFunction등의 함수가 불려질때 이 변수에 해당함수를 부른 차트 객체가 저장됩니다.
        this.rMateChartCurrentChartObj;

        this.rMateChartChartIDArr = new Array();
        this.rMateChartScriptURLArr = new Array();
        this.rMateChartChartVarsArr = new Array();
        this.rMateChartLastInvokeID = new Array();

        // 차트 생성
        this.rMateChartCreate = function(chartObj, sURL, hURL, cVars) {
        	if (!this.rMateChartChartIDArr)
        		this.rMateChartChartIDArr = new Array();
        	if (!this.rMateChartScriptURLArr)
        		this.rMateChartScriptURLArr = new Array();
        	if (!this.rMateChartChartVarsArr)
        		this.rMateChartChartVarsArr = new Array();
        	if (!this.rMateChartLastInvokeID)
        		this.rMateChartLastInvokeID = new Array();
        	this.rMateChartChartIDArr.push(chartObj.name);
        	this.rMateChartScriptURLArr.push(sURL);
        	this.rMateChartChartVarsArr[this.rMateChartChartVarsArr.length] = cVars;
        	this.rMateChartLastInvokeID.push("");

        	chartObj.addEventHandler("onloadcompleted", this.rMateChart_DocumentComplete);
        	chartObj.addEventHandler("onusernotify", this.rMateChart_UserNotify);
        	chartObj.set_url(hURL);
        }

        // 차트 삭제
        this.rMateChartClear = function(chartObj) {
        	if (chartObj == null)
        		return;

        	chartObj.removeEventHandler("onloadcompleted", this.rMateChart_DocumentComplete);
        	chartObj.removeEventHandler("onusernotify", this.rMateChart_UserNotify);
        	chartObj.destroy();
        	chartObj = null;
        }

        // 레이아웃 설정
        this.rMateChartSetLayout = function(chartObj, x) {
        	if (chartObj._ifrm_elem._plugin_object) { // Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartSetLayout", x);
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSetLayout(x);
        }

        // 레이아웃 url 설정
        this.rMateChartSetLayoutURL = function(chartObj, u) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartSetLayoutURL", u);
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSetLayoutURL(u);
        }

        // 슬라이드 차트 레이아웃 설정
        this.rMateChartSetSlideLayoutSet = function(chartObj, x) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		if (typeof(x) == "string")
        			doc.callMethod("rMateChartSetSlideLayoutSet", x);
        		else {		// for array
        			var xstr = "[";
        			for (var i = 0; i < x.length; i++) {
        				if (typeof(x[i]) == "object") {
        					xstr += "{";
        					var pstr = "";
        					for (var propName in x[i]) {
        						if (pstr != "")
        							pstr += ",";
        						pstr += propName + ":";
        						if (typeof(x[i][propName]) == "string")
        							pstr += this.rMateChartEncodeParamStr(x[i][propName]);
        						else
        							pstr += x[i][propName];
        					}
        					xstr += pstr + "}";
        				} else
        					xstr += this.rMateChartEncodeParamStr(x[i].toString());
        				if (i < x.length - 1)
        					xstr += ",";
        			}
        			xstr += "]";
        			doc.callMethod("rMateChartSetSlideLayoutSet", xstr);
        		}
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSetSlideLayoutSet(x);
        }

        // 데이타 설정
        this.rMateChartSetData = function(chartObj, d) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		if (typeof(d) == "string")
        			doc.callMethod("rMateChartSetData", d);
        		else {		// for array
        			var xstr = "[";
        			for (var i = 0; i < d.length; i++) {
        				if (typeof(d[i]) == "object") {
        					xstr += "{";
        					var pstr = "";
        					for (var propName in d[i]) {
        						if (pstr != "")
        							pstr += ",";
        						pstr += propName + ":";
        						if (typeof(d[i][propName]) == "string")
        							pstr += this.rMateChartEncodeParamStr(d[i][propName]);
        						else
        							pstr += d[i][propName];
        					}
        					xstr += pstr + "}";
        				} else
        					xstr += this.rMateChartEncodeParamStr(d[i].toString());
        				if (i < d.length - 1)
        					xstr += ",";
        			}
        			xstr += "]";
        			doc.callMethod("rMateChartSetData", xstr);
        		}
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSetData(d);
        }

        // 데이타 url 설정
        this.rMateChartSetDataURL = function(chartObj, u) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartSetDataURL", u);
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSetDataURL(u);
        }

        // 슬라이드 차트 데이타 설정
        this.rMateChartSetSlideDataSet = function(chartObj, d) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		if (typeof(d) == "string")
        			doc.callMethod("rMateChartSetSlideDataSet", d);
        		else {
        			var xstr = this.rMateChartEncodeJavaScriptObj(d);
        			doc.callMethod("rMateChartSetSlideDataSet", xstr);
        		}
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSetSlideDataSet(d);
        }

        // 차트 이미지 가져오기 - HTML5모드에서만 정상 작동
        this.rMateChartGetSnapshot = function(chartObj) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartGetSnapshot");
        //		chartObj._ifrm_elem._plugin_object.callMethod("rMateChartGetSnapshot()");
        		var objHtmlElementCollection = chartObj.document.getElementById("invokeData");
        		return objHtmlElementCollection.value;
        	}
        	else	// HTML5
        		return chartObj._ifrm_elem._window.rMateChartGetSnapshot();
        }

        // 이미지 저장 - HTML5모드에서만 정상 작동
        this.rMateChartSaveAsImage = function(chartObj) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartSaveAsImage");
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSaveAsImage();
        }

        // legend 범례 전체 선택
        this.rMateChartLegendAllCheck = function(chartObj, b) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartLegendAllCheck", b);
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartLegendAllCheck(b);
        }

        // 프리로더 표시
        this.rMateChartShowAdditionalPreloader = function(chartObj) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartShowAdditionalPreloader");
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartShowAdditionalPreloader();
        }

        // 프리로더 지움
        this.rMateChartRemoveAdditionalPreloader = function(chartObj) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartRemoveAdditionalPreloader");
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartRemoveAdditionalPreloader();
        }

        // 데이터 에디터 표시
        this.rMateChartShowDataEditor = function(chartObj) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartShowDataEditor");
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartShowDataEditor();
        }

        // 데이터 에디터 지움
        this.rMateChartRemoveDataEditor = function(chartObj) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartRemoveDataEditor");
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartRemoveDataEditor();
        }

        //차트 데이터 가져오기
        this.rMateChartGetChartData = function(chartObj) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		return doc.callMethod("rMateChartGetChartData");
        	} else	// HTML5
        		return chartObj._ifrm_elem._window.rMateChartGetChartData();
        }

        /*
         * 스크롤바 기본 크기 변경하기
         * 유효 값 : arrowSize, scrollHeight, thumbHeight, thumbMinSize
         * @param {Object} size - 스크롤 변경될 크기 값 (array)
         */
        this.rMateChartChangeScrollBarSize = function(chartObj, a) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartSetDataURL", a);
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSetDataURL(a);
        }

        /**
         * 현재 출력되어지고 있는 차트의 데이터를 CSV 형태로 변환 후 반환합니다.
         * 반환 형태는 type 파라메터에 "horizontal", "vertical" 두 가지 형태를 설정합니다.
         * default : horizontal
         *
         * @param {String} type - 출력 형태
         *
         * @returns {String} CSV 데이터
         */
        this.rMateChartGetCSVData = function(chartObj,type){
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		return doc.callMethod("rMateChartGetCSVData", type);
        	} else	// HTML5
        		return chartObj._ifrm_elem._window.rMateChartGetCSVData(type);
        }

        /**
         * 드릴 다운에 관한 배열 데이터 삽입
         *
         * @memberOf rMateWrapper
         * @param {Object} data - 배열 데이터
         */
         this.rMateChartSetDataDrilldown = function(chartObj, data) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartSetDataDrilldown", data);
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSetDataDrilldown(data);
        }

        this.rMateChartSetDataDrilldownURL = function(chartObj, u) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartSetDataDrilldownURL", u);
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSetDataDrilldownURL(u);
        }

        this.rMateChartGetDrillDownDepth = function(chartObj){
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		return doc.callMethod("rMateChartGetDrillDownDepth");
        	} else	// HTML5
        		return chartObj._ifrm_elem._window.rMateChartGetDrillDownDepth();
        }

        this.rMateChartSliderPlay = function(chartObj) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartSliderPlay");
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSliderPlay();
        }

        this.rMateChartSliderPause = function(chartObj) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartSliderPause");
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSliderPause();
        }

        this.rMateChartSliderReset = function(chartObj) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartSliderReset");
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSliderReset();
        }

        /**
         * @public
         * 데이터의 타입을 설정합니다.
         *
         * @param {String} type - 데이터 타입
         */
        this.rMateChartSetDataType = function(chartObj, type) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartSetDataType", type);
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartSetDataType(type);
        }

        /**
         * @public
         * 특정 범례 아이템에 대하여 visible값을 설정합니다.
         *
         * @param {Number} index - 범례 아이템의 인덱스
         * @param {Boolean} value - 범례 아이템에 설정할 visible 값
         */
        this.rMateChartLegendCheck = function(chartObj, index , value) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartLegendCheck", index , value);
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartLegendCheck(index , value);
        }

        /**
         * @public
         * 데이터가 존재하지 않다는 창을 차트 위에 출력합니다.
         *
         * visible 파라메터가 true라면 차트의 외형을 보여준다.
         * visible 파라메터가 false라면 차트의 외형도 보여주지 않는다.
         *
         * @params {Booelan} visible - 데이터의 존재 유무에 따라 차트 외형을 보여 줄 것인지 말 것인지 flag
         * @params {String} text - 출력할 본문 문자열
         * @params {String} title - 출력할 타이틀 문자열
         */
         this.rMateChartHasNoData = function(chartObj, visible,text,title) {
        	if (chartObj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = chartObj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartHasNoData", visible,text,title);
        	} else	// HTML5
        		chartObj._ifrm_elem._window.rMateChartHasNoData(visible,text,title);
        } ;

        //////////////////////// for embeded ie ///////////////////////////////////////////////////////

        this.rMateChartEncodeParamStr = function(str) {
        	if (str == null)
        		return "null";

        	var ret = "'";
        	var rgExp1 = /'/g;
        	var rgExp2 = /\n/g;
        	ret += str.replace(rgExp1, "\\'").replace(rgExp2, "");
        	ret += "'";
        //trace("rMateChartEncodeParamStr:"+ret);
        	return ret;
        };

        this.rMateChartEncodeJavaScriptObj = function(obj) {
        	switch(typeof(obj)) {
        		case "number" :
        			return obj.toString();
        		case "boolean" :
        			return obj.toString();
        		case "string" :
        			return this.rMateChartEncodeParamStr(obj);
        		case "null" :
        			return "null";
        		case "undefined" :
        			return "undefined";
        		case "object" :
        			var xstr = "";
        			if (obj.length) {	// for array
        				xstr = "[";
        				for (var i = 0; i < obj.length; i++) {
        					if (i > 0)
        						xstr += ",";
        					xstr += this.rMateChartEncodeJavaScriptObj(obj[i]);
        				}
        				xstr += "]";
        			} else {
        				xstr += "{";
        				var pstr = "";
        				for (var propName in obj) {
        					if (pstr != "")
        						pstr += ",";
        					pstr += propName + ":";
        					pstr += this.rMateChartEncodeJavaScriptObj(obj[propName]);
        				}
        				xstr += pstr + "}";
        			}
        			return xstr;
        		default :
        			trace("rMateChartEncodeXML unknown type:"+typeof(obj));
        			return "undefined";
        	}
        	return "undefined";
        };

        this.rMateChartFindChartIDArr = function(id) {
        	if (id == null)
        		return -1;

        	for (var i = 0; i < this.rMateChartChartIDArr.length; i++) {
        		if (id == this.rMateChartChartIDArr[i])
        			return i;
        	}
        	return -1;
        };

        this.rMateChart_DocumentComplete = function(obj, e) {
        //trace("rMateChart_DocumentComplete");
        	var p;
        	if (obj["rMateChartCreate"]) {
        		p = obj;
        	} else {
        		p = obj;
        		if (p["parent"] && p["parent"]["rMateChartCreate"])
        			p = p.parent;
        		else {
        			if (p["parent"]["parent"] && p["parent"]["parent"]["rMateChartCreate"])
        				p = p.parent.parent;
        			else {
        				if (p["parent"]["parent"]["parent"] && p["parent"]["parent"]["parent"]["rMateChartCreate"])
        					p = p.parent.parent.parent;
        			}
        		}
        	}
        	if (!p) {
        		trace("rMateChart_UserNotify Can't find parent Form:"+obj.name);
        		return;
        	}

        	var chrarIdx = p.rMateChartFindChartIDArr.call(p, obj.name);
        	if (chrarIdx < 0) {
        		trace("rMateChart_DocumentComplete Can't find chart id:"+obj.name);
        		return;
        	}
        	if (obj._ifrm_elem._plugin_object) {	// Runtime
        		var doc = obj.getProperty("Document").getProperty("parentWindow");
        		doc.callMethod("rMateChartSetLicense", p.rMateChartH5License);
        		doc.callMethod("rMateChartCreate", obj.name, p.rMateChartScriptURLArr[chrarIdx], p.rMateChartChartVarsArr[chrarIdx], "100%", "100%", "#FFFFFF");
        	} else {		// HTML5
        		obj._ifrm_elem._window.rMateChartSetLicense(p.rMateChartH5License);
        		obj._ifrm_elem._window.rMateChartCreate(obj.name, p.rMateChartScriptURLArr[chrarIdx], p.rMateChartChartVarsArr[chrarIdx], '100%', '100%', '#FFFFFF');
        	}
        };

        this.rMateChart_UserNotify = function(obj, e) {
        //trace("rMateChart_UserNotify:"+obj.name+":"+e.userdata);
        	// 불려진 차트를 저장
        	var p;
        	if (obj["rMateChartCreate"]) {
        		p = obj;
        	} else {
        		p = obj;
        		if (p["parent"] && p["parent"]["rMateChartCreate"])
        			p = p.parent;
        		else {
        			if (p["parent"]["parent"] && p["parent"]["parent"]["rMateChartCreate"])
        				p = p.parent.parent;
        			else {
        				if (p["parent"]["parent"]["parent"] && p["parent"]["parent"]["parent"]["rMateChartCreate"])
        					p = p.parent.parent.parent;
        			}
        		}
        	}
        	if (!p) {
        		trace("rMateChart_UserNotify Can't find parent Form:"+obj.name);
        		return;
        	}

        	p.rMateChartCurrentChartObj = obj;

        	// invoked로 시작되는 경우에만 처리.
        	var req = e.userdata;
        	if (req.indexOf("invoked") != 0)
        		return;

        	//중복 발생하는 경우가 있어 invoke ID 비교
        	var chrarIdx = p.rMateChartFindChartIDArr.call(p, obj.name);
        	if (chrarIdx < 0) {
        		trace("rMateChart_UserNotify Can't find chart id:"+obj.name);
        		return;
        	}
        	if (req == p.rMateChartLastInvokeID[chrarIdx])
        		return;
        	p.rMateChartLastInvokeID[chrarIdx] = req;

        	if (obj._ifrm_elem._plugin_object) {	// Runtime
        		var objDocument = obj.getProperty("Document").getProperty("parentWindow");
        		var objHtmlElementCollection = objDocument.getProperty("invokeData");
        		req = objHtmlElementCollection;
        	} else {
        		var objDocument = obj.document;
        		var objHtmlElementCollection = objDocument.getElementById("invokeData");
        		req = objHtmlElementCollection.value;
        	}
        //trace(req);

        	var ret;
        	var hr;

        	if (req == null)
        		return;
        	if (req.indexOf("<") != 0)
        		return;

        	var xmlDoc, xmlParser;
        	var invoke, invokeName;
        	var args, argArr;
        	if (objDocument) {	// Runtime
        		xmlParser = new DomParser;
        		xmlParser.onParseError = p.rMateChartParseErrorHandler;
        		xmlDoc = xmlParser.parseFromString(req, "text/xml");

        		invoke = xmlDoc.getElementsByTagName("invoke");
        		if (invoke.length > 0) {
        			invokeName = invoke[0].getAttribute("name");
        		}

        		args = xmlDoc.getElementsByTagName("arguments");
        		if (args.length > 0 && args[0].childNodes && args[0].childNodes.length > 0) {
        			argArr = [];
        			for (i = 0; i < args[0].childNodes.length; i++) {
        				if (args[0].childNodes[i]) {
        					var arg = p.rMateChartParseArgNode.call(p, args[0].childNodes[i]);
        					argArr[i] = arg;
        				}
        			}
        		}
        	} else {	// HTML5
        		if (eval("window.DOMParser")) {
        			xmlParser = eval("new DOMParser()");
        			xmlDoc = xmlParser.parseFromString(req, "text/xml");
        		} else { // Internet Explorer
        			xmlDoc = eval("new ActiveXObject('Microsoft.XMLDOM')");
        			eval("xmlDoc.async = false;");
        			xmlDoc.loadXML(req);
        			if (xmlDoc.parseError.errorCode != 0) {
        				trace("rMateChart_UserNotify Parse Error: " + xmlDoc.parseError.reason + " (line: " + xmlDoc.parseError.line + ", linepos: " + xmlDoc.parseError.linepos + ")");
        				xmlDoc = null;
        				return;
        			}
        		}

        		invoke = xmlDoc.getElementsByTagName("invoke");
        		if (invoke.length > 0) {
        			invokeName = invoke[0].getAttribute("name");
        		}

        		args = xmlDoc.getElementsByTagName("arguments");
        		if (args.length > 0 && args[0].childNodes && args[0].childNodes.length > 0) {
        			argArr = [];
        			for (i = 0; i < args[0].childNodes.length; i++) {
        				if (args[0].childNodes[i]) {
        					var arg = p.rMateChartParseArgNode.call(p, args[0].childNodes[i]);
        					argArr[i] = arg;
        				}
        			}
        		}
        	}

        	if (typeof(p[invokeName]) == "function") {
        		var func = p[invokeName];
        		if (argArr && argArr.length > 0) {
        			ret = func.apply(p, argArr);
        		} else
        			ret = func.apply(p);
        		hr = 0;
        	} else
        		trace("rMateChart_UserNotify error : invalid invoke name "+invokeName);

        	xmlParser = null;
        	xmlDoc = null;

        	return hr;
        };

        this.rMateChartEncodeXML = function(value) {
        	var xstr;
        	switch(typeof(value)) {
        		case "number" :
        			return "<number>" + value + "</number>";
        		case "string" :
        			return "<string><"+"![CDATA[" + value + "]]" + "></string>";
        		case "null" :
        			return "<null/>";
        		case "undefined" :
        			return "<undefined/>";
        		case "boolean" :
        			if (value)
        				return "<true/>";
        			else
        				return "<false/>";
        		case "object" :
        			if (value.length) {	// for array
        				xstr = "<array>";
        				for (var iii = 0; iii < value.length; iii++) {
        					xstr += "<property id=\"" + iii + "\">";
        					xstr += this.rMateChartEncodeXML(value[iii]);
        					xstr += "</property>";
        				}
        				xstr += "</array>";
        			} else {
        				xstr = "<object>";
        				for(var propName in value) {
        					xstr += "<property id=\"" + propName + "\">";
        					xstr += this.rMateChartEncodeXML(value[propName]);
        					xstr += "</property>";
        				}
        				xstr += "</object>";
        			}
        			return xstr;
        		default :
        			trace("rMateChartEncodeXML unknown type:"+typeof(value));
        			return "<undefined/>";
        	}
        	return "<undefined/>";
        };

        this.getNodeText = function(node) {
        	if (node.childNodes.length > 0)
        		node = node.childNodes[0];
        	if (node.nodeValue)		// Runtime
        		return node.nodeValue;
        	else if (node.text)		// ie < 9
        		return node.text;
        	else if (node.textContent)	// ie 9
        		return node.textContent;
        	return null;
        };

        this.rMateChartParseArgNode = function(node) {
        	var nM = node.nodeName;
        //trace("rMateChartParseArgNode nM:"+nM);
        	switch(nM) {
        		case "number" :
        			return Number(this.getNodeText(node));
        		case "string" :
        			return unescape(this.getNodeText(node));
        		case "undefined" :
        			return undefined;
        		case "null" :
        			return null;
        		case "true" :
        			return true;
        		case "false" :
        			return false;
        		case "bool" :
        			if (this.getNodeText(node) == "true")
        				return true;
        			else
        				return false;
        		case "object" :
        			var obj = {};
        			if (node.childNodes && node.childNodes.length > 0) {
        				for (var ii = 0; ii < node.childNodes.length; ii++)
        					if (node.childNodes[ii].nodeName == "property")
        						obj[node.childNodes[ii].attributes.getNamedItem("id").value] = this.rMateChartParseArgNode(node.childNodes[ii].childNodes[0]);
        			}
        			return obj;
        		case "array" :
        			var arr = [];
        			if (node.childNodes && node.childNodes.length > 0) {
        				for (var iii = 0; iii < node.childNodes.length; iii++)
        					if (node.childNodes[iii].nodeName == "property")
        						arr[iii] = this.rMateChartParseArgNode(node.childNodes[iii].childNodes[0]);
        			}
        			return arr;
        		default :
        			trace("rMateChartParseArgNode unknown type:"+nM);
        	}
        	return null;
        };

        this.rMateChartParseErrorHandler = function(parser, parseException) {
            trace("rMateChartParseErrorHandler Parse Error: " + parseException.message + " (line: " + parseException.line + ", column: " + parseException.column + ")");
        };

        /*********************************************************************************************
        ** function name        : rMateChartDataSetToXml()
        ** function description : rMateChart용 data XML 형태로 리턴
        ** argument             : 데이타셋
        ** return Type          : String
        ** return description   : rMateChart용 data XML
        *********************************************************************************************/
        this.rMateChartDataSetToXml = function(obj) {
        	var dataStr = "<items>\n";
        	for (var i = 0; i < obj.rowcount; i++) {
        		dataStr += "<item>\n";
        		for (var j = 0; j < obj.getColCount(); j++) {
        			if (obj.getColumn(i,j) != null) {
        				dataStr += " <"+obj.getColID(j)+">"+this.rMateChartXmlEncoder(obj.getColumn(i,j).toString())+"</"+obj.getColID(j)+">\n";
        			}
        		}
        		dataStr += "</item>\n";
        	}
        	dataStr += "</items>";
        	return dataStr;
        };

        /*********************************************************************************************
        ** function name        : gf_ParseXmlData()
        ** function description : rMateChart용 data XML 형태로 리턴
        ** argument             : 데이타셋, 데이터컬럼
        ** return Type          : String
        ** return description   : rMateChart용 data XML
        *********************************************************************************************/
        this.rMateChartDataSetToXmlWithColumn = function(objDs, arrVal) {
        	if (arrVal == null)
        		return this.rMateChartDataSetToXml(objDs);

        	var arrStr = arrVal.split(",");
        	var rtnVal = "<items>";
        	for (var i = 0; i < objDs.rowcount; i++) {
        		rtnVal += "<item>";
        		for (var j = 0; j < arrStr.length; j++) {
        			rtnVal += "<" + arrStr[j] + ">" + this.rMateChartXmlEncoder(objDs.getColumn(i, arrStr[j]).toString()) + "</" + arrStr[j] + ">";
        		}
        		rtnVal += "</item>\n";
        	}
        	rtnVal += "</items>";
        	return rtnVal;
        };

        this.rMateChartXmlEncoder = function(str) {
        	var ret = "";
        	if (str != null && str.length > 0)
        		ret = str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;");
        	return ret;
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
