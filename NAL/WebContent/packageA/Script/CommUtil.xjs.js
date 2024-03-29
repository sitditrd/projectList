//XJS=CommUtil.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {


        //if ( !Namespace.exist("commUtil") ){
        	this.commUtil = {
        		refform : this,
        		app :  nexacro.getApplication() ,


        		/*
        		 * 팝업화면을 호출
        		 * @param {comp} 	objOpener 		Opener가 될 Form 오브젝트
        		 * @param {string} 	sPopupId 		Popup의 고유 id
        		 * @param {string} 	sPopupUrl 		Form Url
        		 * @param {number} 	nLeft 			Form Left Position(-1로 하는 경우 중앙정렬)
        		 * @param {number} 	nTop 			Form TOP Position(-1로 하는 경우 중앙정렬)
        		 * @param {number} 	nWidth 			Form Width Position
        		 * @param {number} 	nHeight 		Form Height Position
        		 * @param {boolean} bModal 			Modal여부(true : Modal | false : Modeless)
        		 * @param {boolean} bAutosize 		Autosize 여부(true : Autosize 가능 | false : Autosize 불가)
        		 * @param {boolean} bResize 		Resize 여부(true : Resize 가능 | false : Resize 불가)
        		 * @param {*}		sArgument		Popup으로 전달된 Argment값(String, Number, Array, Dataset 가능)
        		 * @param {string}	sCallbackFunc 	팝업창이 닫힐때 실행되는 함수
        		 */
        		popup : function (objOpener, sPopupId, sPopupUrl, nLeft, nTop, nWidth, nHeight, bModal, bAutosize, bResize, sArgument, sCallbackFunc)
        		{
        			var parentFrame = this.refform.getOwnerFrame();

        			if (bModal) {
        				var childFrame = new ChildFrame;

        				if(nWidth > this.app.mainframe.getOffsetWidth()) {
        					nWidth = this.app.mainframe.getOffsetWidth();// - 50;
        				}

        				if(nHeight > this.app.mainframe.getOffsetHeight()) {
        					nHeight = this.app.mainframe.getOffsetHeight();// - 100;
        				}

        				//top, left가 -1인 경우 objOpener 기준 가운데로
        				if ( nLeft < 0 && nTop < 0) childFrame.set_openalign("center middle");

        				childFrame.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sPopupUrl);

        				childFrame.set_showtitlebar(false);
        				childFrame.set_autosize(bAutosize);
        				childFrame.set_resizable(bResize);

        // 				childFrame.set_showtitlebar(true);
        // 				childFrame.set_resizable(true);

        				childFrame.showModal(parentFrame, sArgument, objOpener, sCallbackFunc, false);
        			} else {
         				// Modeless의 경우 창이 이미 떠있으면 포커스만 이동

        				var arrPopFrame = nexacro.getPopupFrames();
        				// var objPopup = this.app.popupframes[sPopupId];


        				if (arrPopFrame.length>0)
        				{
        					var objPopup = arrPopFrame[0];

        					if ( !this.refform.gfnIsEmpty(objPopup) ) {
        						if ( objPopup.openstatus == "minimize" ) {
        							// objPopup.openstatus = "normal";
        							objPopup.set_openstatus ("normal");
        						}

        						objPopup.setFocus();
        						return;
        					}



        				}
        				//-4를 한 이유는 정확히는 모르겠으나 open할때 width, height를 right, buttom값에 넣으면 가장 비슷하게 화면이 나오나 화면이 열렸다가 좀 줄어든 현상이 있음.
        				//그리하여 테스르를 해보니 -4로 하면 줄어드는 현상이 없어서 작업해둠
        				//application.open(sPopupId, sPopupUrl, parentFrame, sArgument, "showtitlebar=true showstatusbar=false", nLeft, nTop, nWidth-4, nHeight-3, objOpener);
        				nexacro.open(sPopupId, sPopupUrl, parentFrame, sArgument, "showtitlebar=true showstatusbar=false", nLeft, nTop, nWidth-4, nHeight-3, objOpener);
        			}
        		},
        		/*
        		 * Drag&Drop으로 Dataset의 Data 이동
        		 * @param {comp} 	objFromDs 		값을 보내주는 Dataset
        		 * @param {comp} 	objToDs 		값을 받는 Dataset
        		 * @param {array} 	arrDragRow 		Drag로 선택한 ROW
        		 */
        		setMoveData : function(objFromDs, objToDs, arrDragRow)
        		{
        			var nRow;

        			for (var i=0; i<arrDragRow.length; i++)
        			{
        				nRow = objToDs.addRow();
        				objToDs.copyRow(nRow, objFromDs, arrDragRow[i]);
        			}

        			for (var i=arrDragRow.length-1; i>-1; i--)
        			{
        				objFromDs.deleteRow(arrDragRow[i]);
        			}
        		},

        /*******************************************************************************************
        	FUNCTION	: popupOrganization(objOpener, sPopupID, popupCallBack, [strKind, [arrOption])
        	DESCRIPTION	: 조직도(부서,직원) 검색
        	PARAMETERS	:
        		- @param {comp}		objOpener 		: Opener가 될 Form 오브젝트
        		- @param {string}	popID 			: 팝업창 고유의 아이디
        		- @param {string}	popupCallBack 	: 팝업창이 닫힐때 실행되는 함수
        		- @param {string}	strKind 		: "EMPS" : 사원 여러명 선택(default), "EMP" : 사원 한명 선택, "MEETING" : 회의실용, "SMS" : SMS용, "EMAIL" : EMAIL용,
        											  "SELF" : 넘겨주는 인자값 직접 지정(새로운 DIV FORM등록 시 필수)
        		- @param {array}	arrOption[]		: strKind가 "SELF" 일 때만 사용 (strKind에 종속적임)
        											  [0] - "BASE" : 회사 전화번호, "EMAIL" : Email주소, "CONTACT" : H-Phone번호 (직원리스트에 보여지는 컬럼 선택)
        											  [1] - "both" : 모두, "deptOnly" : 부서만, "empOnly" : 사원만
        											  [2] - "1" : 종사자, "3" : 퇴사자
        											  [3] - "T" : 사원, "C" : 공통, "O" : 외주
        											  [4] - TITLE
        											  [5] - URL
        											  (default : ["BASE", "both", "1", "T", "직원 선택", "Common::CO_SelectionEmployee.xfdl"])
        		- @param {*}		sArgument		Popup으로 전달된 Argment값(String, Number, Array, Dataset 가능)
        	RETURN		:
        *******************************************************************************************/
        		popupOrganization : function (objOpener, sPopupID, popupCallBack, strKind, arrOption, fired, sArgument)
        		{
        			var nWidth = 1142;
        			var sArgs = {};
        			if(sArgument)
        			{
        				sArgs = sArgument;
        			}
        			if(this.refform.gfnIsEmpty(objOpener)|| this.refform.gfnIsEmpty(sPopupID) || this.refform.gfnIsEmpty(popupCallBack))
        				return;

        			if(this.refform.gfnIsEmpty(fired)){
        				fired = "1";
        			}

        			switch(strKind)
        			{
        				case "EMP" :
        					arrOption = [strKind, "empOnly", fired, "T", "직원 선택", ""];
        					break;

        				case "EMPS" :
        					arrOption = [strKind, "empOnly", fired, "T", "직원 선택", "Common::CO_SelectionEmployee.xfdl"];
        					break;

        				case "EMAIL" :
        					arrOption = [strKind, "empOnly", "1", "T", "직원 선택", "Common::CO_EmailAddress.xfdl"];
        					break;

         				case "SMS" :
         					arrOption = [strKind, "empOnly", "1", "T", "직원 선택", "Common::CO_SelectionEmployee.xfdl"];
         					break;

        // 				case "MEETING" :
        // 					arrOption = [strKind, "empOnly", "1", "T", "회의 참석자", "Common::CO_MeetingParticipant.xfdl"];
        // 					break;

        				/*
        				case "DEPT" :
        					//arrOption = ["BASE", "empOnly", fired, "T", "직원 선택", "Common::CO_SelectionEmployee.xfdl"];
        					break;

        				case "DEPTS" :
        					//arrOption = ["BASE", "empOnly", fired, "T", "직원 선택", "Common::CO_SelectionEmployee.xfdl"];
        					break;
        				*/

        				case "SELF" :
        					break;
        			}

        			//strKind를 입력하지 않았거나, strKind가 SELF이면서 parameter를 넘겨주지 않았을 경우
        			if(this.refform.gfnIsEmpty(arrOption))
        				arrOption = ["BASE", "both", "1", "T", "직원 선택", "Common::CO_SelectionEmployee.xfdl"];

        			if(this.refform.gfnIsEmpty(arrOption[5]))
        				nWidth = 834; //div url을 지정해 주지 않았을 때

        			sArgs.pvArrayList = arrOption;

        			this.popup(objOpener, sPopupID, "Common::CO_Organization.xfdl", -1, -1, nWidth, 564, true, false, false, sArgs, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: popupProjectSearch()
        	DESCRIPTION	: 프로젝트 검색 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 		Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID		팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 	팝업창이 닫힐때 실행되는 함수
        		- @param {*}		sArgument		Popup으로 전달된 Argment값(String, Number, Array, Dataset 가능) : sProject 프로젝트 검색어[생략가능]
        	RETURN		:
        *******************************************************************************************/
        		popupProjectSearch : function (objOpener, sPopupID, popupCallBack, sArgument)
        		{
        			this.popup(objOpener, sPopupID, "Common::CE_ProjectSearch.xfdl", -1, -1, 830, 568, true, false, false, sArgument, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: popupClientSearch()
        	DESCRIPTION	: 고객사검색 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 		Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID		팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 	팝업창이 닫힐때 실행되는 함수
        		- @param {*}		sArgument		Popup으로 전달된 Argment값(String, Number, Array, Dataset 가능)
        	RETURN		:
        *******************************************************************************************/
        		popupClientSearch : function (objOpener, sPopupID, popupCallBack, sArgument)
        		{
        			this.popup(objOpener, sPopupID, "Common::CE_ClientSearch.xfdl", -1, -1, 500, 338, true, false, false, sArgument, popupCallBack);
        		},
        /*******************************************************************************************
        	FUNCTION	: popupCompanySearch()
        	DESCRIPTION	: 협력사검색 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 		Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID		팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 	팝업창이 닫힐때 실행되는 함수
        		- @param {*}		sArgument		Popup으로 전달된 Argment값(String, Number, Array, Dataset 가능)
        	RETURN		:
        *******************************************************************************************/
        		popupCompanySearch : function (objOpener, sPopupID, popupCallBack, sArgument)
        		{
        			this.popup(objOpener, sPopupID, "Common::CE_CompanySearch.xfdl", -1, -1, 830, 568, true, false, false, sArgument, popupCallBack);
        		},
        /*******************************************************************************************
        	FUNCTION	: popupContractSearch()
        	DESCRIPTION	: 계약정보검색 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 		Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID		팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 	팝업창이 닫힐때 실행되는 함수
        		- @param {*}		sArgument		Popup으로 전달된 Argment값(String, Number, Array, Dataset 가능)
        	RETURN		:
        *******************************************************************************************/
        		popupContractSearch : function (objOpener, sPopupID, popupCallBack, sArgument)
        		{
        			this.popup(objOpener, sPopupID, "Common::CE_ContractSearch.xfdl", -1, -1, 757, 578, true, false, false, sArgument, popupCallBack);
        		},
        /*******************************************************************************************
        	FUNCTION	: popupAddressBookSearch()
        	DESCRIPTION	: 담당자 검색 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 		Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID		팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 	팝업창이 닫힐때 실행되는 함수
        		- @param {*}		sArgument		Popup으로 전달된 Argment값(String, Number, Array, Dataset 가능)
        	RETURN		:
        *******************************************************************************************/
        		popupAddressBookSearch: function (objOpener, sPopupID, popupCallBack, sArgument)
        		{
        			this.popup(objOpener, sPopupID, "Common::CE_AddressBookSearch.xfdl", -1, -1, 910, 338, true, false, false, sArgument, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: popupProductSearch()
        	DESCRIPTION	: 제품 검색 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 		Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID		팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 	팝업창이 닫힐때 실행되는 함수
        		- @param {*}		sArgument		Popup으로 전달된 Argment값(String, Number, Array, Dataset 가능)
        	RETURN		:
        *******************************************************************************************/
        		popupProductSearch: function (objOpener, sPopupID, popupCallBack, sArgument)
        		{
        			this.popup(objOpener, sPopupID, "Common::CE_ProductSearch.xfdl", -1, -1, 860, 575, true, false, false, sArgument, popupCallBack);
        		},



        /*******************************************************************************************
        	FUNCTION	: popupProductSearch()
        	DESCRIPTION	: 제품 검색 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 		Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID		팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 	팝업창이 닫힐때 실행되는 함수
        		- @param {*}		sArgument		Popup으로 전달된 Argment값(String, Number, Array, Dataset 가능)
        	RETURN		:
        *******************************************************************************************/
        		popupProjectMM: function (objOpener, sPopupID, popupCallBack, sProjectCd, sProjectNm, sAuthType)
        		{
        			var sArgument = {pvProjectCd:sProjectCd, pvProjectNm:sProjectNm, pvAuthType:sAuthType};
        			this.popup(objOpener, sPopupID, "Common::CO_Project.xfdl", -1, -1, 1362, 647, true, false, false, sArgument, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: popupFindSiEmp()
        	DESCRIPTION	: 제품 검색 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 		Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID		팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 	팝업창이 닫힐때 실행되는 함수
        		- @param {*}		sArgument		Popup으로 전달된 Argment값(String, Number, Array, Dataset 가능)
        	RETURN		:
        *******************************************************************************************/
        		popupFindSiEmp: function (objOpener, sPopupID, popupCallBack, sArgument)
        		{
        			this.popup(objOpener, sPopupID, "Common::CO_FindSiEmp.xfdl", -1, -1,  856, 536, true, false, false, sArgument, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: popupSms(objOpener, sPopupID, popupCallBack)
        	DESCRIPTION	: SMS 팝업
        	PARAMETERS	:
        		-
        	RETURN		:
        *******************************************************************************************/
        		popupSms : function (objOpener, sPopupID, popupCallBack)
        		{
        			this.popup(objOpener, sPopupID, "Common::CS_SMS.xfdl", -1, -1, -1, -1, true, false, false, null, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: fnEmailPopup(objOpener, sPopupID, popupCallBack)
        	DESCRIPTION	: E-MAIL 팝업
        	PARAMETERS	:
        		-
        	RETURN		:
        *******************************************************************************************/
        		popupEmail : function (objOpener, sPopupID, popupCallBack)
        		{
        			this.popup(objOpener, sPopupID, "Common::CE_Email.xfdl", -1, -1, -1, -1, true, false, false, null, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: popupMeeting(objOpener, sPopupID, popupCallBack[, type])
        	DESCRIPTION	: 회의등록 팝업
        	PARAMETERS	:
        		- @param {comp} 				 objOpener 		Opener가 될 Form 오브젝트
        		- @param {string} 				 sPopupID		팝업창 고유의 아이디
        		- @param {string} 				 popupCallBack 	팝업창이 닫힐때 실행되는 함수
        		- @param {string|number|dataset} item			{string}  "multi" : 일괄등록
        														{number}  MTM_SEQ :  회의수정시 해당 회의의 MTM_SEQ
        														{dataset} 회의안건(MTMM
        		- @param {string} 				 sMode 			{string}  v : 보기모드
        														{string}  m : 수정모드
        														{string}  n : 등록모드
        														)
        	RETURN		:
        *******************************************************************************************/
        		popupMeeting : function (objOpener, sPopupID, popupCallBack, item, sMode)
        		{
        			if(this.refform.gfnIsEmpty(sMode)) sMode = "";
        			switch(typeof(item))
        			{
        				case "object"://ds MTMM
        					if( (this.refform.gfnXCompTypeOf(item) == "Dataset") || (this.refform.gfnIsArray(item)) )
        						this.popup(objOpener, sPopupID, "Working::WM_MeetingRegister.xfdl", -1, -1, 916, 629, true, false, false, {param : item}, popupCallBack);
        					break;

        				case "number"://MTM_SEQ - 수정화면
        					this.popup(objOpener, sPopupID, "Working::WM_MeetingRegister.xfdl", -1, -1, 916, 629, true, false, false, {param : item, pvMode:sMode}, popupCallBack);
        					break;

        				case "string"://
        					if(item == "multi")
        						this.popup(objOpener, sPopupID, "Working::WM_MeetingRegister.xfdl", -1, -1, 1202, 629, true, false, false, {param : true}, popupCallBack);
        					break;

        				default :
        					this.popup(objOpener, sPopupID, "Working::WM_MeetingRegister.xfdl", -1, -1, 916, 629, true, false, false, { param : false}, popupCallBack);
        					break;
        			}
        		},

        /*******************************************************************************************
        	FUNCTION	: popupMemo(objOpener, sPopupID, popupCallBack, [sSourceCd, [sSourceSeq])
        	DESCRIPTION	: 메모 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 		Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID		팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 	팝업창이 닫힐때 실행되는 함수
        		- @param {string} 	sSourceCd 		메모코드[생략가능]
        		- @param {string} 	sSourceSeq 		메모순번[생략가능]
        	RETURN		:
        *******************************************************************************************/
        		popupMemo : function (objOpener, sPopupID, popupCallBack, sSourceCd, sSourceSeq)
        		{
        			if(this.refform.gfnIsEmpty(sSourceCd))	sSourceCd = "";
        			if(this.refform.gfnIsEmpty(sSourceSeq))	sSourceSeq = "";

        			var sArgument = {pvSourceCd:sSourceCd,pvSourceSeq:sSourceSeq};
        			this.popup(objOpener, sPopupID, "Common::CM_MemoMM.xfdl", -1, -1, 886, 564, true, false, false, sArgument, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: popupFileMaster(sSourceCd, sSourceSeq, sStatusCd, sCallbackFunc, objOpener, bType)
        	DESCRIPTION	: 파일관리
        	PARAMETERS	:
        		- @param {string} 	sSourceCd 		파일을 저장하려는 소스의 코드 ( 출처 code )
        		- @param {string} 	sSourceSeq 		파일을 저장하려는 소스의 순번 ( 출처 key  ) : Insert 되지않은 Source에서 팝업 시 "" 또는 null 로 입력
        		- @param {string} 	sStatusCd 		파일 저장시점
        		- @param {string} 	sCallbackFunc	팝업창이 닫힐때 실행되는 함수
        		- @param {comp} 	objOpener 		Opener가 될 Form 오브젝트
        		- @param {boolean} 	bType 			Link Type의 파일첨부 가능여부
        	RETURN		:
        	    - 		 {dataset}	dsRtnArgs		저장된 파일들의 키(FM_SEQ) 들을 리턴
        *******************************************************************************************/
        		/*
        		popupFileMaster : function (sSourceCd, sSourceSeq, sStatusCd, sCallbackFunc, objOpener, bType)
        		{


        			// this.trace("Empty:"+nexacro.getApplication().gfnIsEmpty("A"));
        			if(this.refform.gfnIsEmpty(sSourceCd))		{ return trace("SOURCE_CD를 지정하세요.(필수항목)"); 		}
        			if(this.refform.gfnIsEmpty(sSourceSeq))		{ sSourceSeq = "0";										 		}
        			if(this.refform.gfnIsEmpty(sCallbackFunc))	{ return trace("CallBack Function을 지정하세요.(필수항목)"); }
        			if(this.refform.gfnIsEmpty(sStatusCd))		{ sStatusCd = ""; 												}
        			if(this.refform.gfnIsEmpty(bType))			{ bType = false; 												}

        			var sArgument = {SourceCd:sSourceCd,SourceSeq:sSourceSeq,StatusCd:sStatusCd,Type:bType};
        			this.popup(objOpener, "popFileManager", "Common::CF_FileMM.xfdl", -1, -1, 549, 500, true, false, false, sArgument, sCallbackFunc);
        		},
        		*/
        /*******************************************************************************************
        	FUNCTION	: popupFileMaster(objOpener, args, sCallbackFunc)
        	DESCRIPTION	: 파일관리
        	PARAMETERS	:
        		- @param {comp} 	objOpener 		Opener가 될 Form 오브젝트
        		- @param {object} 	args			 {string}  SOURCE_CD		: 파일을 저장하려는 소스의 코드 ( 출처 code )
        											,{string}  SOURCD_SEQ		: 파일을 저장하려는 소스의 순번 ( 출처 key  ) : Insert 되지않은 Source에서 팝업 시 "" 또는 null 로 입력
        											,{string}  STATUS_CD		: 파일 저장시점
        											,{boolean} USE_LINK_TYPE	: Link Type의 파일첨부 가능여부
        		- @param {string} 	sCallbackFunc	팝업창이 닫힐때 실행되는 함수
        	RETURN		:
        	    - 		 {dataset}	dsRtnArgs		저장된 파일들의 키(FM_SEQ) 들을 리턴
        *******************************************************************************************/
        		popupFileMaster : function (objOpener, args, sCallbackFunc)
        		{
        			if(!this.refform.gfnIsEmpty(args))
        			{
        				if(args.hasOwnProperty("SOURCE_CD"))
        				{
        					if(this.refform.gfnIsEmpty(args.SOURCE_CD))
        					{
        						return trace("SOURCE_CD를 지정하세요.(필수항목)");
        					}
        				}
        				if(args.hasOwnProperty("SOURCE_SEQ"))
        				{
        					if(this.refform.gfnIsEmpty(args.SOURCE_SEQ))
        					{
        						args.SOURCE_SEQ = "0";
        					}
        				}
        				if(args.hasOwnProperty("STATUS_CD"))
        				{
        					if(this.refform.gfnIsEmpty(args.STATUS_CD))
        					{
        						args.STATUS_CD = "";
        					}
        				}
        				if(this.refform.gfnIsEmpty(sCallbackFunc))
        				{
        					return trace("CallBack Function을 지정하세요.(필수항목)");
        				}
        				this.popup(objOpener, "popFileManager", "Common::CF_FileMM.xfdl", -1, -1, 549, 500, true, false, false, args, sCallbackFunc);
        			}

        		},
        /*******************************************************************************************
        	FUNCTION	: popupCategorySearch(objOpener, sPopupID, popupCallBack, sProduct, sCategoryType, [bCategoryTypevisible, [sMult])
        	DESCRIPTION	: 카테고리조회
        	PARAMETERS	:
        		- @param {comp} 	objOpener 				Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID				팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 			팝업창이 닫힐때 실행되는 함수
        		- @param {string} 	sProduct 				제품코드
        		- @param {string} 	sCategoryType			카테고리 타입
        		- @param {string} 	bCategoryTypeEnable		카테고리 타입 활성화 여부[생략가능 Default:true(활성화)][true:활성화 | false:비활성화]
        		- @param {string} 	sMult					다건/다중선택[생략가능 Default:S(단건)][S:단건 | M:다건]
        		- @param {boolean} 	bFixProduct				팝업창에서 제품 선택 가능여부
        	RETURN		:
        *******************************************************************************************/
        		popupCategorySearch : function (objOpener, sPopupID, popupCallBack, sProduct, sCategoryType, bCategoryTypeEnable, sMult, bFixProduct)
        		{
        			if (this.refform.gfnIsEmpty(bCategoryTypeEnable)) bCategoryTypeEnable = true;
        			if (this.refform.gfnIsEmpty(sMult)) sMult = "S";
        			if (this.refform.gfnIsEmpty(bFixProduct)) bFixProduct = false;

        			var sArgument = {pvProduct : sProduct, pvCategoryType : sCategoryType, pvCategoryTypeEnable : bCategoryTypeEnable, pvMult : sMult, pvFixProduct : bFixProduct};

        			this.popup(objOpener, sPopupID, "Common::CE_Category.xfdl", -1, -1, 800, 500, true, true, false, sArgument, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: popupBaseFunctionRegister(objOpener,sPopupID, popupCallBack, sMcSeq, sBfcSeq[, sLang])
        	DESCRIPTION	: Base기능관리
        	PARAMETERS	:
        		- @param {comp} 	objOpener 				Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID				팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 			팝업창이 닫힐때 실행되는 함수
        		- @param {string} 	sMcSeq 					일련번호MC
        		- @param {string} 	sBfcSeq 				일련번호BFC
        		- @param {string} 	sLang 					언어코드		[CM_CODE : LANGUAGE_CD]
        		- @param {string} 	sProductCode 			제품코드

        	RETURN		:
        *******************************************************************************************/
        		popupBaseFunctionRegister : function (objOpener, sPopupID, popupCallBack, sMcSeq, sBfcSeq, sPpSeq, sLang, sProductCode)
        		{
        			if (this.refform.gfnIsEmpty(sMcSeq)) 	{return trace("MC_SEQ를 지정하세요.(필수항목)");		}
        			if (this.refform.gfnIsEmpty(sPpSeq)) 	{return trace("PP_SEQ를 지정하세요.(필수항목)");	}
        			if (this.refform.gfnIsEmpty(sBfcSeq)) 	{return trace("BFC_SEQ를 지정하세요.(필수항목)");	}
        			if (this.refform.gfnIsEmpty(sLang)) 	{sLang = "KOR";											}

        			var sArgument = {pvMcSeq : sMcSeq, pvBfcSeq : sBfcSeq, pvLang : sLang, pvProductCode : sProductCode, pvPpSeq : sPpSeq};

        			this.popup(objOpener, sPopupID, "Project::PP_BaseFunctionRegister.xfdl", -1, -1, 1395, 706, true, false, false, sArgument, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: popupChangeReason(objOpener, sPopupID, popupCallBack)
        	DESCRIPTION	: 변경사유 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 				Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID				팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 			팝업창이 닫힐때 실행되는 함수
        	RETURN		:
        *******************************************************************************************/
        		popupChangeReason : function (objOpener, sPopupID, popupCallBack)
        		{
        			this.popup(objOpener, sPopupID, "Common::CommChangeReason.xfdl", -1, -1, 414, 188, true, false, false, "", popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: popupSearchSet(objOpener, sPopupID, popupCallBack, objDs)
        	DESCRIPTION	: 검색설정 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 				Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID				팝업창 고유의 아이디
        		- @param {string} 	popupCallBack 			팝업창이 닫힐때 실행되는 함수
        		- @param {string} 	objDs	 				검색설정 Dataset
        	RETURN		:
        *******************************************************************************************/
        		popupSearchSet : function (objOpener, sPopupID, popupCallBack, objDs)
        		{
        			var sArgument = {pvDataset : objDs};
        			this.popup(objOpener, sPopupID, "Common::CommSearchSetting.xfdl", -1, -1, 404, 242, true, false, false, sArgument, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: popuppRequestProduct(objOpener, sRcSeq, sRpSeq, popupCallBack)
        	DESCRIPTION	: 요구사항상세 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 				Opener가 될 Form 오브젝트
        		- @param {string} 	sRcSeq					고객요구사항번호
        		- @param {string} 	sRpSeq					제품요구사항번호
        		- @param {string} 	popupCallBack 			팝업창이 닫힐때 실행되는 함수
        		- @param {string} 	sCsSeq 					CS접수번호
        	RETURN		:
        *******************************************************************************************/
        		popuppRequestProduct : function (objOpener, sRcSeq, sRpSeq, popupCallBack, sCsSeq)
        		{
        			var sArgument = {pvRcSeq:sRcSeq, pvRpSeq:sRpSeq, pvCsSeq:sCsSeq};
        			this.popup(objOpener, "popRequestProduct_"+sRpSeq, "Project::PR_RequirementRegister.xfdl", -1, -1, 1300, 823, true, false, false, sArgument, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: popupRequestPriority(objOpener, sPopupID, sRpSeq, popupCallBack)
        	DESCRIPTION	: 최우선전환 팝업
        	PARAMETERS	:
        		- @param {comp} 	objOpener 				Opener가 될 Form 오브젝트
        		- @param {string} 	sPopupID				팝업창 고유의 아이디
        		- @param {string} 	sRpSeq					제품요구사항번호
        		- @param {string} 	popupCallBack 			팝업창이 닫힐때 실행되는 함수
        	RETURN		:
        *******************************************************************************************/
        		popupRequestPriority : function (objOpener, sPopupID, sRpSeq, popupCallBack)
        		{
        			var sArgument = {pvRpSeq:sRpSeq};
        			this.popup(objOpener, sPopupID, "Project::PR_RequirementPriority.xfdl", -1, -1, 550, 400, true, false, false, sArgument, popupCallBack);
        		},

        /*******************************************************************************************
        	FUNCTION	: getByteSize(str)
        	DESCRIPTION	: 문자열의 byte size를 return.
        	PARAMETERS	:
        		-
        	RETURN		:
        *******************************************************************************************/
        		getByteSize : function(str)
        		{
        			var size = 0;
        			var strLength = str.length;

        			for(var i = 0; i < strLength; i++){
        			  var byteStr = str.charAt(i);
        			  if(escape(byteStr).length > 4){
        				size += 2;
        			  }else{
        				size += 1;
        			  }
        			  //trace("CharSize : " + str.charAt(i) + " -> " + byteStr  + " -> " + escape(byteStr) + " -> " + (escape(byteStr).length>4?2:1) + " byte");
        			}
        			return size;
        		},

        /*******************************************************************************************
        	FUNCTION	: getClearHtmlTag(str)
        	DESCRIPTION	: HTML 태그 제거(정규식 적용)
        	PARAMETERS	:
        		-
        	RETURN		:
        *******************************************************************************************/
        		getClearHtmlTag : function(str)
        		{
        			var sRtn = str.replaceAll("<(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>","").replaceAll("\r|\n|&nbsp;","");
        			return sRtn;
        		},

        /*******************************************************************************************
        	FUNCTION	: getEmptyToValue(sVal, sReVal)
        	DESCRIPTION	: 값이 Empty인경우 요청값으로 치환해서 반환
        	PARAMETERS	:
        		-
        	RETURN		: sReVal
        *******************************************************************************************/
        		getEmptyToValue : function(sVal, sReVal)
        		{
        			if(this.refform.gfnIsEmpty(sVal)) {
        				return sReVal;
        			} else {
        				return sVal;
        			}
        		},

        /*******************************************************************************************
        	FUNCTION	: getAuthority(nAuthSeq)
        	DESCRIPTION	: 권한여부 확인
        	PARAMETERS	: 	nAuthSeq : 권한일련번호
        					bLeader : 권한리더확인용 (true : 해당권한의 리더여부판단)
        		-
        	RETURN		: 	true : 해당권한 있음
        					false	: 해당권한 없음
        *******************************************************************************************/
        		getAuthority : function(nAuthSeq, bLeader)
        		{
        			var nFindRow;
        			if(bLeader==undefined)
        				bLeader=false;

        			if(bLeader)
        			{
        				nFindRow = this.app.gdsAuthority.findRowExpr("ATM_SEQ == '"+nAuthSeq+"' && BLEADER == '1'");
        			}
        			else
        			{
        				nFindRow = this.app.gdsAuthority.findRowExpr("ATM_SEQ == '"+nAuthSeq+"'");
        			}
        			if(nFindRow >= 0)
        				return true;
        			else
        				return false;
        		},

        /*******************************************************************************************
        	FUNCTION	: getFormAuthority(strFormID, nAuthSeq)
        	DESCRIPTION	: 화면별 권한여부 확인
        	PARAMETERS	:
        		-
        	RETURN		: 	true : 해당권한 있음
        					false	: 해당권한 없음
        *******************************************************************************************/
        		getFormAuthority : function(strFormID, nAuthSeq)
        		{
        			var nFindRow = this.app.gdsFormAuthority.findRowExpr("FRM_SEQ == '"+strFormID+"' && FRMA_SEQ_IN == '"+nAuthSeq+"'");
        			if(nFindRow >= 0)
        				return true;
        			else
        				return false;
        		},

        /*******************************************************************************************
        	FUNCTION	: popupClose(objForm, objReturn)
        	DESCRIPTION	: 팝업화면 Close
        	PARAMETERS	:
        		- objReturn
        	RETURN		:
        *******************************************************************************************/
        		popupClose : function(objReturn)
        		{
        			if(this.refform.gfnIsEmpty(this.app.argPopupCallBack))
        			{
        				// application.argPopupCallBack = new Array();
        				this.app.argPopupCallBack = new Array();
        			}
        			//trace("popupClose : "+this.refform.getOwnerFrame().id);
        			if(this.refform.gfnXCompTypeOf(objReturn) == "Dataset"){
        				objReturn = (objReturn.saveXML()).toString();
        			}
        			// application.argPopupCallBack.push(objReturn);
        			this.app.argPopupCallBack.push(objReturn);
        			this.refform.close(objReturn);
        		},

        /*******************************************************************************************
        	FUNCTION	: popupReturn()
        	DESCRIPTION	: 팝업화면 Close Return값
        	PARAMETERS	:
        		- objReturn
        	RETURN		: 	objReturn
        *******************************************************************************************/
        		popupReturn : function()
        		{
        			//trace("popupReturn : "+application.argPopupCallBack.length);
        			if (!this.refform.gfnIsEmpty(this.app.argPopupCallBack[this.app.argPopupCallBack.length-1]))
        			{
        				var objReturn = this.app.argPopupCallBack[this.app.argPopupCallBack.length-1];
        				this.app.argPopupCallBack.pop();
        				return objReturn;
        			}
        			else
        				return;
        		},

        		isValidDomain : function(v)
        		{
        			var re =  /^((([0-9]{1,3}\.){3}[0-9]{1,3})|(([a-zA-Z0-9]+(([\-]?[a-zA-Z0-9]+)*\.)+)*[a-zA-Z]{2,}))$/;
        			return re.test(v);
        		},

        		isValidEmail : function(v)
        		{
        			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        			return re.test(v);
        		},

        		isValidIP : function(v)
        		{
        			var re = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        			return re.test(v);
        		}
        	}

        //}













        this.gfnToday = function(date, format){

        	var d, s = "", f = "";

        	if(!this.gfnIsUndefined(date) && date != null){
        		d = date;
        	} else {
        		d = new Date();
        	}

        	if(!this.gfnIsUndefined(format)){
        		f = format;
        	}

        	s +=  String(d.getFullYear())+f;
        	s += String((d.getMonth() + 1) ).padLeft(2,"0")+f;
        	s += String(d.getDate()).padLeft(2,"0");
        	return s;
        }

        this.gfnGetDate = function(pDate){
        	var d, s = "";
        	d = pDate;

        	if(!this.gfnIsDate(pDate)){
        		d = gfnStrToDate(String(pDate).substr(0,8));
        	}
        	s +=  String(d.getFullYear());
        	s += String((d.getMonth() + 1) ).padLeft(2,"0");
        	s += String(d.getDate()).padLeft(2,"0");
        	return s;
        }



        /*****************************************************************************************
         * 입력값을 체크하여 Null인경우 ""을 리턴, Null이 아니면 입력값을 반환하는 함수
         *
         * @param : sValue		문자열
         * @return: 변환된 문자열
         *****************************************************************************************/
        this.gfn_str_trim = function(sValue)
        {
        	if(sValue == null) {
        		return "";
        	}

        	if(new String(sValue).valueOf() == "undefined") {
        		return "";
        	}

        	if(new String(sValue) == null) {
        		return "";
        	}

        	return (new String(sValue)).replace(/^\s+|\s+$/g, '');
        }

        //수정여부
        this.gfnIsDsUpdate = function(ds, nRow){
        	if(this.gfnIsEmpty(nRow)){
        		for(var i=0; i<ds.getRowCount(); i++){
        			if(ds.getRowType(i) != Dataset.ROWTYPE_EMPTY && ds.getRowType(i) != Dataset.ROWTYPE_NORMAL){
        				return false;
        			}
        		}
        	}else{
        		if(ds.getRowType(nRow) != Dataset.ROWTYPE_EMPTY && ds.getRowType(nRow)!= Dataset.ROWTYPE_NORMAL){
        			return false;
        		}
        	}
        	return true;
        }

        this.gfnGetForm = function(strObj){
        	var thisForm = this.parent;
        	var rt_obj;
        	while(1){
        		rt_obj = thisForm.lookup(strObj);
        		if(!this.gfnIsEmpty(rt_obj)&&( this.gfnIsXComponent(rt_obj) || this.gfnIsFunction(eval(rt_obj)))){
        			if(this.gfnIsFunction(eval(rt_obj))){
        				rt_obj = thisForm.lookupFunc(strObj);
        			}
        			break;
        		}else{
        			if(thisForm.toString().toUpperCase()  == "[OBJECT FORM]"){
        				break;
        			}
        			thisForm = thisForm.parent;
        		}

        	}
        	return rt_obj;
        }


        /*********************************************************************
         * 함 수 명 : gfnSetComma(sValue)
         * 함수설명 : 입력받은 Number에 Comma 를 추가한다.
         * 입    력 : Number
         * 결    과 : String(Comma 를 포함하고 있는 숫자)
         *            정상 : Comma 가 포함하고 있는 Number Return
         *            Number 가 아닌 경우 : -1 Return
         *********************************************************************/
        this.gfnSetComma = function(sValue)
        {
        	var sSignStr = "";
        	var sValueStr = "";
        	var sDecimalStr = "";

        	sValue = sValue.toString();

        	var nLength = sValue.length;
        	var sReturnValue = -1;

        	if( nLength != 0 && nexacro.isNumeric(sValue) == true)
        	{
        		if(sValue.substr(0, 1)== "+" || sValue.substr(0, 1)== "-")
        		{
        			sSignStr = sValue.substr( 0, 1);
        			sValueStr = sValue.substr( 1);
        		}
        		else sValueStr = sValue;

        		var sTemp = sValueStr.split(".");
        		sValueStr = sTemp[0];

        		if(!this.gfnIsEmpty(sTemp[1]) )
        		{
        			sDecimalStr= "." + sTemp[1];
        		}

        		fToFloat = parseFloat(sValueStr);

        		sReturnValue = sSignStr + this.gfnNumFormat(fToFloat, 0)+ sDecimalStr;

        	}
        	else
        	{
        		sReturnValue = -1;
        	}

        	return sReturnValue;
        }

        this.gfnDsNullToBlank = function(obj, nRow){
        	obj.set_enableevent(false);
        	if(!this.gfnIsEmpty(nRow) )
        	{
        		for(var i=0;i<obj.getColCount(); i++){
        			if(this.gfnIsEmpty(obj.getColumn(nRow,i))){
        				obj.setColumn(nRow,i, "");
        			}
        		}
        	}else{
        		for(var i=0;i<obj.getColCount(); i++){
        			for(var j=0;j<obj.getRowCount(); j++){
        				if(this.gfnIsEmpty(obj.getColumn(j,i))){
        					obj.setColumn(j,i, "");
        				}
        			}
        		}
        		obj.applyChange();
        	}
        	obj.set_enableevent(true);
        }

        /******************************************************************************
         * 함수명        : NumFormat(dNumber);
         * 설명          : 입력된 실수를 문자열 표현법으로 표현하는 함수
         * argument       : dNumber    문자열로 출력할 실수
         *                  nDetail    출력시 소숫점 이하의 자릿수(Default : 0)
         * return         : 문자열로 바뀐 실수
         *                  출력되는 실수는 정수부분에 3자리마다 ',' 가 삽입됩니다.
         * NumFormat(12345.66)
         ******************************************************************************/
         this.gfnNumFormat = function(dNumber){
        	return nexacro.toNumber(dNumber).toLocaleString();
        }

        this.gfnNumCheck = function(strValue){
        	if(isNaN(strValue)){
        		return 0;
        	}
        	if(strValue=="Infinity"){
        		return	0;
        	}
        	if(this.gfnIsEmpty(strValue)){
        		return	0;
        	}
        	return strValue;
        }


        this.gfnDsNullToZero = function(obj, nRow){
        	obj.set_enableevent(false);
        	if(!this.gfnIsEmpty(nRow))
        	{
        		for(var i=0;i<obj.getColCount(); i++){
        			var strType = obj.getColumnInfo(i).type;
        			if(strType.toUpperCase() =="INT" ||	strType.toUpperCase() =="FLOAT"	||strType.toUpperCase() =="BIGDECIMAL"){
        				if(this.gfnIsEmpty(obj.getColumn(nRow,i))){
        					obj.setColumn(nRow,i, 0);
        				}
        			}
        		}
        	}else{
        		for(var i=0;i<obj.getColCount(); i++){
        			var strType = obj.getColumnInfo(i).type;
        			for(var j=0;j<obj.getRowCount(); j++){
        				if(strType.toUpperCase() =="INT" ||	strType.toUpperCase() =="FLOAT"	||strType.toUpperCase() =="BIGDECIMAL"){
        					if(this.gfnIsEmpty(obj.getColumn(j,i))){
        						obj.setColumn(j,i, 0);
        					}
        				}
        			}
        		}
        	}
        	obj.set_enableevent(true);
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
