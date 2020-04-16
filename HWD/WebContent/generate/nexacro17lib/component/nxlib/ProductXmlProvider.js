/**
 * @fileoverview 상품전문 관련 기능을 제공하는 클래스
 */
if (!JsNamespace.exist("ProductXmlProvider")) {
	/**
	 * JavaScript Library for nexacro Platform
	 * @namespace
	 * @name ProductXmlProvider
	 * @memberof! <global>
	 */
	JsNamespace.declare("ProductXmlProvider", {
		/** 현재 상품 전문 **/
		$xmlDom: null,
		
		/** 상품 전문 저장소 **/
		xmlDoms: {},
		
		/**
		 * 상품전문을 로드한다. 로드된 후 getCurrentXml()을 사용하여 상품전문 획득 가능
		 * @param panelId {String} 패널ID
		 * @param bizUrl {String} BIZ_URL
		 * @param productCode {String} 상품코드
		 * @param basisDate {String} 기준일(청약일)
		 * @param productVersion {String} 버전
		 * @param callbackFunc Callback 함수(있으면 비동기) 
		 */
		loadProductXml: function(panelId, bizUrl, productCode, basisDate, productVersion, callbackFunc) {
			var versionNo = Eco.isEmpty(productVersion) ? "1" : productVersion;
			var inputJson = {
				"productCode": productCode,
				"productVersion": productVersion,
				"basisDate": basisDate
			};
			
			var structData = {
				"inputJson": inputJson
			}
			
			var isUsingLocalCashe = !!u5.PQ_LOCAL_CACHE_XML;
			
			var dataUrl = "URLPQZ00007";	//공통
			if (panelId.indexOf("PNLPQP") === 0) {	//일반
				dataUrl = "URLPQZ00084";
			} else if (panelId.indexOf("PNLPQT") === 0) {	//장기
				dataUrl = "URLPQZ00085";
			} else if (panelId.indexOf("PNLPQV") === 0) {	//자동차
				dataUrl = "URLPQZ00086";
			}
			
			if (callbackFunc == null) {
				var execParam = {
					method: "jr",
					programCocd: "PGM_CODE",
					reqType: "URL",
					isDBTransaction: false,
					sourceName: "PQ",
					sourceExtension: "LOC",
					functionName: dataUrl,
					urlParameters: {},
					structure: structData,
					table: {},
					fout: {},
					outFilter: {},
					panelId: panelId
				};
				
				setBusy(true, "상품전문 조회 중...");
				var result = execute(bizUrl, execParam);
				setBusy(false);
				
				if (result.OUT_DATA[0].common.resultCode !== "0") {
					u5.error(result,OUT_DATA[0].common.errorMessage + "상품전문조회 오류");
				} else {
					ProductXmlProvider.addXmlDom(productCode, $(result.OUT_DATA[0].outputJson.productXml));
					ProductXmlProvider.setCurrentXmlDom(ProductXmlProvider.getXmlDom(productCode));
				}
			} else {
				if (isUsingLocalCashe) {
					var storageId = productCode + "_" + (Eco.isEmpty(basisDate) ? fnGetTody() : basisDate);
					sfmijs.getHugeStorage(storageId).selectUsingLike(function(storageIds) {
						if (Eco.isEmpty(storageIds)) {
							setBusy(true, "상품전문 조회 중...");
							execute(bizUrl, fnUrlOpt(panelId, dataUrl, "inputJson", inputJson, function(_result) {
								setBusy(false);
								if (_result.OUT_DATA[0].common.resultCode !== "0") {
									u5.error(_result.OUT_DATA[0].common.errorMessage + "상품전문조회 오류");
								} else {
									ProductXmlProvider.addXmlDom(productCode, $(_result.OUT_DATA[0].outputJson.productXml));
									ProductXmlProvider.setCurrentXmlDom(ProductXmlProvider.getXmlDom(productCode));
									
									ProductXmlProvider.saveToStorage(storageId, _result.OUT_DATA[0].outputJson.productXml, callbackFunc);
								}
							}));
						} else {
							sfmijs.getHugeStorage(storageId).select(function(storageXml) {
								ProductXmlProvider.addXmlDom(productCode, $(storageXml));
								ProductXmlProvider.setCurrentXmlDom(ProductXmlProvider.getXmlDom(productCode));
								
								callbackFunc();
							});
						}
					});
				} else {
					setBusy(true, "상품전문 조회 중...");
					execute(bizUrl, fnUrlOpt(panelId, dataUrl, "inputJson", inputJson, function(_result) {
						setBusy(false);
						if (_result.OUT_DATA[0].common.resultCode !== "0") {
							u5.error(_result.OUT_DATA[0].common.errorMessage + "상품전문조회 오류");
						} else {
							ProductXmlProvider.addXmlDom(productCode, $(_result.OUT_DATA[0].outputJson.productXml));
							ProductXmlProvider.setCurrentXmlDom(ProductXmlProvider.getXmlDom(productCode));
							
							callbackFunc();
						}
					}));
				}
			}
		},
		
		/**
		 * Local Storage에 상품전문 저장
		 * 
		 * @param storageId
		 * @param xml
		 * @param callbackFunc
		 */
		saveToStorage: function(storageId, xml, callbackFunc) {
			var storage = sfmijs.getHugeStorage(storageId);
			
			//이전일자 Cache 데이터 삭제
			sfmijs.getHugeStorage("").selectUsingLike(function(storageIds) {
				storageIds.forEach(function(id) {
					if (!$.sap.endsWith(id, fnGetToday())) {
						sfmijs.getHugeStorage(id).drop();
					}
				})
			});
			
			storage.insert(xml, function() {
				if (callbackFunc != null) {
					callbackFunc();
				}
			});
		},
		
		/**
		 * 상품전문을 로드한다. 로드된 후 getCurrentXml()을 사용하여 상품전문 획득 가능
		 * @param productCode {String} 상품코드
		 * @param path {String} 상품전문이 위치하는 경로 
		 */
		loadProductXmlByPath: function(productCode, path) {
			var xmlHttp = null;
			if (window.ActiveXObject || "ActiveXObject" in window) {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			} else {
				xmlHttp = new XMLHttpRequest();
			}
			
			xmlHttp.open("GET", path, false);
			xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
			xmlHttp.setRequestHeader('Access-Control-Allow-Methods', 'GET');
			xmlHttp.send("");
			
			var responseXML = xmlHttp.responseXML;
			
			var xmlString = null;
			if (window.ActiveXObject || "ActiveXObject" in window) {
				xmlString = responseXML.xml;
			} else {
				xmlString = (new XMLSerializer()).serializeToString(responseXML);
			}
			
			ProductXmlProvider.addXmlDom(productCode, $(xmlString));
			ProductXmlProvider.setCurrentXmlDom(ProductXmlProvider.getXmlDom(productCode));
		},
		
		/**
		 * 상품코드를 조정한다. (빈값을 "_"로 치환)
		 * @private
		 * @param productCode 상품코드
		 * @return 상품코드
		 */
		adjustProductCode: function(productCode) {
			return productCode.replace(/\s/g, "_");
		},
		
		/**
		 * 현재 상품전문을 설정한다.
		 * @param $xmlDom 상품전문
		 */
		setCurrentXmlDom: function($xmlDom) {
			ProductXmlProvider.$xmlDom = $xmlDom;
		},
		
		/**
		 * 현재 상품전문을 리턴한다.
		 * @return 상품전문 jquery selector
		 */
		getCurrentXmlDom: function() {
			return ProductXmlProvider.$xmlDom;
		},
		
		/**
		 * 상품전문을 추가한다.
		 * @param productCode 상품코드
		 * @param $xmlDom 상품전문
		 */
		addXmlDom: function(productCode, $xmlDom) {
			ProductXmlProvider.xmlDoms["KEY_" + ProductXmlProvider.adjustProductCode(productCode)] = $xmlDom;
		},
		
		/**
		 * 상품코드에 해당하는 상품전문을 리턴한다.
		 * @param productCode 상품코드
		 * @return 상품전문 jquery selector
		 */
		getXmlDom: function(productCode) {
			return ProductXmlProvider.xmlDoms["KEY_" + ProductXmlProvider.adjustProductCode(productCode)];
		}
	});
}