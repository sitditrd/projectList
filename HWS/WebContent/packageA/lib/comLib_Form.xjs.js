//XJS=comLib_Form.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /************************************************************************************************
         * Name     : comLib_Form.xjs
         * Title    : FORM 관련 함수
         * Desc     : FORM 관련 함수
         * 작성자	: 투비소프트
         * 작성일	: 2018-04-05
         *************************************************************************************************
         *      수정일          이름          사유
         *************************************************************************************************
         *    2018.04.05        투비소프트       최초작성
         ************************************************************************************************/

        /************************************************************************************************
         ● gfn_newChildFrame     : 신규 ChildFrame 생성
         ● gfn_openModalPopup    : Modal Dialog 실행
         ● gfn_openModalessPopup : Modaless Dialog 실행
         ● gfn_getCenterPos      : Modaless Dialog 중앙 위치 로직
         ● gfn_getMessage        : 메세지 값을 문자열 치환하여 메세지 내용을 조회한다.
         ● gfn_alert             : 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을 생성해서 해당 값을 보여주는 함수
         ● gfn_confirm           : 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을 생성해서 해당 값을 보여주는 함수
         ● gfn_popupOpen         : 팝업화면위치 부모 창 중간 위치 시키는 함수
         ● gfn_isCompFind        : 프로그램의 특정 컴포넌트를 컴포넌트의 id값을 이용하여 찾아내는 함수
         ● gfn_isCompEnVis       : 콤포넌트를 배열로 받아 Enable과 Visible 값을 변경한다.
         ● gfn_setEnableCtrl     : 화면안의 컨트롤을 활성화 또는 비활성화 처리
         ● gfn_getThisUrl        : 화면내에서 자기 자신화면의 Url을 얻어온다.
         ● gfn_getObjType        : Object의 type을 문자열로 얻어온다.
         ● gfn_getComBtnRgt      : 버튼 권한 체크
         ● gfn_setComBtnRgt      : 버튼 권한 설정
         ● gfn_callMskType       : Component MaskEdit Type 설정
         ● gfn_goForm            : Form 이동
         *************************************************************************************************/
        //include "lib::comLib_Comm.xjs";

        /* =================================== Frame 관련 함수 Start ================================= */
        var lv_btnTpSe = new Array();

        /************************************************************************************************
         * Function Name: gfn_newChildFrame
         * Description  : 신규 ChildFrame 생성
         * Arguments    : sID     - Popup Form의 ID
         sURL    - Popup Form  URL
         sArg    - Popup Form으로 전달될 Argument
         nLeft   - Popup Form Left Position
         nTop    - Popup Form Top Position
         nWidth  - Popup Form Width
         nHeight - Popup Form Height
         sStyle  - Popup Form 기본 유형
         sProp   - Chile Frame의 모든 Property를 설정
         * Return       : ChildFrame 객체
         *************************************************************************************************/
        this.gfn_newChildFrame = function (sID, sURL, sArg, nLeft, nTop, nWidth, nHeight, sStyle, sProp)
        {
        	var newChild;
        	var nTop = 70;

        	newChild = new ChildFrame;
        	newChild.init(sID, nLeft, nTop, nWidth, nHeight, null, null, sURL);

        	// 색상정보 6자리 + 투명도 2자리
        	newChild.set_overlaycolor("#ffffff39");
        	newChild.set_border("2 solid #2b3948");

        	// 크기
        	if (this.gfn_isNull(nWidth) || this.gfn_isNull(nHeight))
        	{
        		newChild.set_autosize(true);
        	}
        	else
        	{
        		newChild.set_autosize(false);
        	}
        	// trace("autosize : " + newChild.autosize);

        	// 위치
        	if (this.gfn_isNull(nLeft) || this.gfn_isNull(nTop))
        	{
        		newChild.set_openalign("center middle");
        	}
        	// trace("openalign : " + newChild.openalign);

        	// Style 지정
        	if (this.gfn_isNull(sStyle) == false)
        	{
        		var aStyle = this.gfn_split2(sStyle, ",", "=");
        		for (var i = 0; i < aStyle.length; i++)
        		{
        			newChild.style[aStyle[i][0]] = aStyle[i][1];
        		}
        	}

        	// Prop 지정
        	if (this.gfn_isNull(sProp) == false)
        	{
        		var aProp = this.gfn_split2(sProp, ",", "=");
        		for (var i = 0; i < aProp.length; i++)
        		{
        			newChild[aProp[i][0]] = aProp[i][1];
        		}
        	}

        	return newChild;
        };

        /************************************************************************************************
         * Function Name: gfn_openModalPopup
         * Description  : Modal Dialog 실행
         ex) this.gfn_openModalPopup("commPopPostNoSearchPopOpen", "", "TB_Test::test001.xfdl","popupCallback",300,200,  this);
         * Arguments    : popupId          - Popup Form의 ID
         argumentsList    - Popup Form으로 전달될 Argument
         popupUrl         - Popup Form  URL
         popupCallback    - Popup Form Callback
         popupWidth       - Popup Form Width
         popupHeight      - Popup Form Height
         obj              - 현재 타겟 Form
         bShowFrameTitle  - Popup Title Text
         bShowFrameStatus - Popup Statusbar 사용 유무 (default : false)
         * Return       : ChildFrame 객체
         *************************************************************************************************/
        this.gfn_openModalPopup = function (popupId, argumentsList, popupUrl, popupCallback, popupWidth, popupHeight, obj, bShowFrameTitle, bShowFrameStatus, sPopupType)
        {
        	// 현재 구동되는 정보를 업데이트 한다.
        	var appUrl = nexacro.getApplication().xadl;
        	var childFrame = new ChildFrame();
        	var parentFrame = this.getOwnerFrame();
        	var sShowStatus = "";
        	var sOpenPopupType = "Modal";

        	if (!this.gfn_isNull(sPopupType))
        	{
        		sOpenPopupType = sPopupType;
        	}

        	// TO-DO 팝업사이즈 미지정 시 디폴트 값 적용
        	if (this.gfn_isNull(popupWidth))
        	{
        		popupWidth = 400;
        	}

        	if (this.gfn_isNull(popupHeight))
        	{
        		popupHeight = 350;
        	}

        	if (this.gfn_isNull(bShowFrameStatus) || bShowFrameStatus == false)
        	{
        		sShowStatus = false;
        	}
        	else if (bShowFrameStatus == true)
        	{
        		sShowStatus = true;
        	}

        	var popupLeft = "";
        	var popupTop = "";

        	// 팝업 포지션 값 위치 설정
        	if (sOpenPopupType == "Modal")
        	{
        		popupLeft = 70;
        		popupTop = 70;
        	}
        	else if (sOpenPopupType == "Modeless")
        	{
        		var bType = system.isPrimaryMonitor(1);
        		if (bType)
        		{
        			var objRect = system.getScreenRect(1);
        			popupLeft = objRect.left;
        			popupTop = objRect.top;
        			// trace(popupLeft + "     " + popupTop + "       " + popupWidth + "      " + popupHeight);
        		}
        	}

        	/* ===== Statusbar 옵션 추가 - Start ===== */
        	if (sShowStatus == true)
        	{
        		childFrame.init(popupId, popupLeft, popupTop, nexacro.toNumber(popupWidth) + 4, nexacro.toNumber(popupHeight) + 20 + 4 + 25, null, null, popupUrl);
        		childFrame.set_statusbarheight(25);
        		childFrame.set_showstatusbar(true);
        	}
        	else
        	{
        		childFrame.init(popupId, popupLeft, popupTop, nexacro.toNumber(popupWidth) + 4, nexacro.toNumber(popupHeight) + 20 + 4, null, null, popupUrl);
        	}
        	/* ===== Statusbar 옵션 추가 - End   ===== */

        	childFrame.set_openalign("center middle");
        	childFrame.set_autosize(false);
        	childFrame.set_showtitlebar(false);
        	childFrame.set_dragmovetype("normal");

        	// 색상정보 6자리 + 투명도 2자리
        	// childFrame.style.set_overlaycolor("#ffffff39");

        	if (!this.gfn_isNull(bShowFrameTitle) || bShowFrameTitle)
        	{
        		childFrame.set_border("3 solid #351b6f");
        		childFrame.set_border("normal");
        	}
        	else
        	{
        		childFrame.set_border("3 solid #351b6f");
        		childFrame.set_border("normal");
        	}

        	if (sOpenPopupType == "Modal")
        	{
        		// 동적으로 생성한 ChildFrame을 Modal Dialog로 보여줌.
        		childFrame.showModal(parentFrame, argumentsList, obj, popupCallback, true);

        		if (!this.gfn_isNull(bShowFrameTitle) || bShowFrameTitle)
        		{
        			// childframe 에 연결 된 Form titletext 를 적용하지 않기 위해 추가
        			// Popupid 를 결합한 Title 지정
        			var sPopupTitle = "[" + popupId + "]" + " " + bShowFrameTitle;

        			childFrame.set_titletext(sPopupTitle);
        			childFrame.set_titlebarheight(28);
        			childFrame.set_top(5);

        // 			childFrame.titlebar.maxbutton.set_visible(false);
        // 			childFrame.titlebar.minbutton.set_visible(false);
        // 			childFrame.titlebar.normalbutton.set_visible(false);
        		}
        		else
        		{
        			childFrame.set_showtitlebar(false);
        		}
        	}
        	else if (sOpenPopupType == "Modeless")
        	{
        		// childFrame.set_openstatus("maximize");
        		childFrame.set_openstatus("normal");
        		childFrame.showModeless(parentFrame, argumentsList, obj, popupCallback, true);
        	}
        };

        this.gfn_setFormTitleTxt = function (oForm)
        {
        	oForm.set_titletext("");
        };

        /************************************************************************************************
         * Function Name: gfn_openModalessPopup
         * Description  : Modaless Dialog 실행
         * Arguments    : sID              - Popup Form의 ID
         sURL             - Popup Form  URL
         sArg             - Popup Form으로 전달될 Argument
         nWidth           - Popup Form Width
         nHeight          - Popup Form Height
         bShowFrameStatus - Popup Statusbar 사용유무 (default : false)
         * Return       : 없음
         *************************************************************************************************/
        this.gfn_openModalessPopup = function (sID, sURL, sArg, nWidth, nHeight, bShowFrameStatus)
        {
        	var sShowStatus = "";

        	if (this.gfn_isNull(bShowFrameStatus) || bShowFrameStatus == false)
        	{
        		sShowStatus = false;
        	}
        	else if (bShowFrameStatus == true)
        	{
        		sShowStatus = true;
        	}
        	var objMyFrame = this.getOwnerFrame();
        	// var objMyFrame = "";
        	var popupLeft = 0;
        	var popupTop = 0;
        	var sOpt = "";

        	if (sShowStatus == false)
        	{
        		sOpt = "showtitlebar=true showstatusbar=false";
        	}
        	else if (sShowStatus == true)
        	{
        		sOpt = "showtitlebar=true showstatusbar=true";
        	}
        	var sRtnPos = this.gfn_getCenterPos(nWidth, nHeight, sShowStatus);
        	for (var i = 0; i < nexacro.getPopupFrames().length; i++)
        	{
        		if (nexacro.getPopupFrames()[i].name == sID)
        		{
        			alert("화면이 열려있습니다.");
        			nexacro.getPopupFrames()[i].form.setFocus();
        			return false;
        		}
        	}

        	// 신규 Modeless 팝업 호출
        	// application.open(sID, sURL, objMyFrame, sArg, sOpt, popupLeft, popupTop, nWidth, nHeight, this);
        	nexacro.open(sID, sURL, objMyFrame, sArg, sOpt, sRtnPos[0], sRtnPos[1]);
        };

        /************************************************************************************************
         * Function Name: gfn_getCenterPos
         * Description  : Modaless Dialog 중앙 위치 로직
         * Arguments    : nWidth      - Popup Width
         nHeight     - Popup Height
         sShowStatus - Popup Statusbar 사용유무 (default : false)
         * Return       : X 좌표 / Y좌표
         *************************************************************************************************/
        this.gfn_getCenterPos = function (nWidth, nHeight, sShowStatus)
        {
        	var nCursorX = system.getCursorX();
        	var nCursorY = system.getCursorY();
        	var nMonitorIndex = system.getMonitorIndex(nCursorX, nCursorY);

        	var sRes = system.getScreenResolution(nMonitorIndex).split(" ");
        	var nMonitorWidth = new Number(sRes[0]);
        	var nMonitorHeight = new Number(sRes[1]);

        	var arrRet = new Array();
        	arrRet[0] = Math.round((nMonitorWidth - nWidth) / 2);
        	if (sShowStatus == false)
        	{
        		arrRet[1] = Math.round((nMonitorHeight - nHeight) / 2) - 30; //작업 표시줄 30
        	}
        	else if (sShowStatus == true)
        	{
        		arrRet[1] = Math.round((nMonitorHeight - nHeight) / 2) + 35; //작업 표시줄 25
        	}

        	return arrRet;
        };

        /************************************************************************************************
         * Function Name: gfn_openXpModalessPopup
         * Description  : XP 연동 Modaless Dialog 실행
         * Arguments    : sID     - Popup Form의 ID
         sURL    - Popup Form  URL
         sArg    - Popup Form으로 전달될 Argument
         nWidth  - Popup Form Width
         nHeight - Popup Form Height
         * Return       : 없음
         *************************************************************************************************/
        this.gfn_openXpModalessPopup = function (sPGM_ID, sURL, sArg, nWidth, nHeight)
        {
        	// var objMyFrame = this.getOwnerFrame();
        	var objMyFrame = "";
        	var popupLeft = -10000;
        	var popupTop = 0;
        	var sOpt = "showtitlebar=false";
        	var sPOPUP_ID = this.gfn_getColumnExpr(nexacro.getApplication().gds_xpPopup, "PGM_ID == '" + sPGM_ID + "'", "POPUP_ID");
        	var xpPopupRow = -1;
        	var newPopupId = "popupId";

        	if (this.gfn_isNotNull(sPGM_ID))
        	{
        		if (this.gfn_isNotNull(sPOPUP_ID))
        		{
        			for (var i = 0; i < nexacro.getPopupFrames().length; i++)
        			{
        				if (nexacro.getPopupFrames()[i].name == sPOPUP_ID)
        				{
        					nexacro.getPopupFrames()[i].set_height(nexacro.toNumber(nHeight) + 52);
        					nexacro.getPopupFrames()[i].set_width(nexacro.toNumber(nWidth) + 20);

        					nexacro.getPopupFrames()[i].set_left(0);
        					// application.popupframes[i].form.fn_callXpMenu(sArg);
        					// application.popupframes[i].set_visible(true);
        					nexacro.getPopupFrames()[i].form.setFocus();
        				}
        			}
        		}
        		else
        		{
        			xpPopupRow = nexacro.getApplication().gds_xpPopup.findRowExpr("PGM_ID == ''");
        			sPOPUP_ID = nexacro.getApplication().gds_xpPopup.getColumn(xpPopupRow, "POPUP_ID");
        			nexacro.getApplication().gds_xpPopup.setColumn(xpPopupRow, "PGM_ID", sPGM_ID);
        			for (var i = 0; i < nexacro.getPopupFrames().length; i++)
        			{
        				if (nexacro.getPopupFrames()[i].name == sPOPUP_ID)
        				{
        					nexacro.getPopupFrames()[i].set_height(nexacro.toNumber(nHeight) + 52);
        					nexacro.getPopupFrames()[i].set_width(nexacro.toNumber(nWidth) + 20);

        					nexacro.getPopupFrames()[i].set_left(0);
        					// application.popupframes[i].set_visible(true);

        					nexacro.getPopupFrames()[i].form.fn_callXpMenu(sPGM_ID);
        					nexacro.getPopupFrames()[i].form.setFocus();
        				}
        			}
        		}
        	}

        	xpPopupRow = nexacro.getApplication().gds_xpPopup.findRow("PGM_ID", "");

        	if (xpPopupRow < 0)
        	{
        		// 신규 Modeless 팝업 호출
        		if (nexacro.getApplication().gds_xpPopup.rowcount > 0)
        		{
        			var maxPopupId = nexacro.getApplication().gds_xpPopup.getMax("POPUP_ID");
        			newPopupId += Number(this.gfn_toString(maxPopupId).substring(this.gfn_length(newPopupId))) + 1;
        		}
        		else
        		{
        			newPopupId += "1";
        		}
        		nexacro.getApplication().gds_xpPopup.addRow();
        		nexacro.getApplication().gds_xpPopup.setColumn(nexacro.getApplication().gds_xpPopup.rowcount - 1, "POPUP_ID", newPopupId);
        		nexacro.getApplication().gds_xpPopup.setColumn(nexacro.getApplication().gds_xpPopup.rowcount - 1, "PGM_ID", "");
        		nexacro.open(newPopupId, sURL, objMyFrame, sArg, sOpt, popupLeft, popupTop, nWidth, nHeight, this);
        	}
        };

        /************************************************************************************************
         * Function Name: gfn_getMessage
         * Description  : 메세지 값을 문자열 치환하여 메세지 내용을 조회한다.
         * Arguments    : strMsgId - 메세지ID
         sArgs  - 문자(아이디^패스워드)
         * Return       : string 메세지
         *************************************************************************************************/
        this.gfn_getMessage = function (strMsgId, sArgs)
        {
        	var strTxtPrefix = "$";

        	if (this.gfn_isNull(strMsgId))
        	{
        		return "";
        	}

        	var nRow = nexacro.getApplication().gds_message.findRow("MSG_CD", strMsgId);
        	if (nRow < 0)
        	{
        		return strMsgId;
        	}

        	var sRtnMsg = nexacro.getApplication().gds_message.getColumn(nRow, "MSG_CN");
        	if (this.gfn_isNull(sArgs))
        	{
        		return sRtnMsg;
        	}

        	var aArgs = this.gfn_split(sArgs, "^");

        	for (var i = 0; i < aArgs.length; i++)
        	{
        		var strVal = aArgs[i];
        		sRtnMsg = this.gfn_replace(sRtnMsg, strTxtPrefix + (i + 1), strVal);
        	}

        	return sRtnMsg;
        };

        /************************************************************************************************
         * Function Name: gfn_alert
         * Description  : 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창으로 해당 값을 보여주는 함수
         * Arguments    : objParent  - 메세지 팝업창의 띄울 부모화면 (this)
         strMsgId   - 메세지ID
         strMsg     - 메세지값으로 치환될 String
         strTitle   - 타이틀 치환될 String (생략 가능)
         strMsgType - 메세지 종류 : error, question, warning, information
         * Return       : 없음
         *************************************************************************************************/
        this.gfn_alert = function (objParent, strMsgId, strMsg, strTitle, strMsgType)
        {
        	// strMsgType : "default", "error", "question", "warning", "information" (default)
        	var strMsg = this.gfn_getMessage(strMsgId, strMsg);

        	if (this.gfn_isNull(strMsgType))
        	{
        		strMsgType = "information";
        	}

        	if (this.gfn_isNull(strTitle))
        	{
        		strTitle = "Alert";
        	}

        	var param = {
        		'MSG_TYPE' : strMsgType,
        		'MSG_TITLE' : strTitle,
        		'MSG_TEXT' : strMsg
        	};

        	var nPop_W = 322;
        	var nPop_H = 205;


        	// 줄 바꿈 처리
        	strMsg = strMsg.replace("@", String.fromCharCode(13) + String.fromCharCode(10));
        	// this.gfn_popupOpen("alert_msg", param, "ComForm::CmmnAlertForm.xfdl","", nPop_W, nPop_H, objParent, false);

        	var objChildFrame = new ChildFrame;
        	var objParentFrame = this.getOwnerFrame();
        	objChildFrame.init("alert_msg", 0, 0, nPop_W, nPop_H, 0, 0, "ComForm::CmmnAlertForm.xfdl");
        	objChildFrame.set_openalign("center middle"); //추가
        	objChildFrame.set_overlaycolor("#ffffff39");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_border("0 none");
        	objChildFrame.set_border("normal");

        	var varRet = system.showModalSync(objChildFrame, "alert_msg", objParentFrame, param, this);

        	if (varRet == true)
        	{
        		return;
        	}
        };

        /************************************************************************************************
         * Function Name: gfn_confirm
         * Description	: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을
         *				  생성해서 해당 값을 보여주는 함수
         * @param		: objParent - 메세지 팝업창의 띄울 부모화면 (this)
         *                (주의!! 반듯이 값이 있어야함, null일경우 팝업에서 메세지를 띄울때 뒤로 숨을 수도 있음)
         *				  strMsgId - 메세지 ID, callback function이 호출될때 전달됨
         *				  strMsg - 메세지값으로 치환될 String
         *				  strTitle - 타이틀 치환될 String (생략 가능)
         *				  strMsgType- 메세지 종류 : "error", "question", "warning", "information" (default)
         * @Return 		: 팝업에 해당 메세지값을 표현 (예-YES, 아니오-NO (default)
         *************************************************************************************************/
        this.gfn_confirm = function (objParent, strMsgId, strMsg, strTitle, strMsgType)
        {
        	// strMsgType : "default", "error", "question", "warning", "information" (default)

        	if (this.gfn_isNull(strMsgType))
        	{
        		strMsgType = "information";
        	}

        	if (this.gfn_isNull(strTitle))
        	{
        		strTitle = "Confirm";
        	}

        	var param = {
        		'MSG_TYPE' : strMsgType,
        		'MSG_TITLE' : strTitle,
        		'MSG_TEXT' : strMsg,
        		'MSG_ID' : strMsgId
        	};

        	var nPop_W = 354;
        	var nPop_H = 205;

        	// this.gfn_popupOpen(strMsgId, param, "ComForm::CmmnConfirmForm.xfdl",strCallback, nPop_W, nPop_H,  objParent, false);

        	var objChildFrame = new ChildFrame;
        	var objParentFrame = this.getOwnerFrame();
        	objChildFrame.init(strMsgId, 0, 0, nPop_W, nPop_H, 0, 0, "ComForm::CmmnConfirmForm.xfdl");
        	objChildFrame.set_openalign("center middle"); //추가
        	objChildFrame.set_overlaycolor("#ffffff39");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_border("0 none");
        	objChildFrame.set_border("normal");

        	system.showModalSync(objChildFrame, strMsgId, objParentFrame, param, this);
        };

        /************************************************************************************************
         * Function Name: gfn_popupOpen
         * Description  : 팝업화면 위치 부모 창 중간 위치
         * Arguments    : popupId, argumentsList, popupUrl, popupCallback, nLeft, nTop, nRight, nBottom
         * Return       :
         *************************************************************************************************/
        // this.gfn_popupOpen = function(popupId, argumentsList, popupUrl, popupCallback, popupWidth, popupHeight, obj, bShowFrameTitle)
        this.gfn_popupOpen = function (popupId, argumentsList, popupUrl, popupWidth, popupHeight, obj, bShowFrameTitle)
        {
        	// 현재 구동되는 정보를 업데이트 한다.
        	var appUrl = nexacro.getApplication().xadl;
        	var childFrame = new ChildFrame;
        	var parentFrame = this.getOwnerFrame();

        	// TO-DO 팝업사이즈 미지정 시 디폴트 값 적용
        	if (this.gfn_isNull(popupWidth))
        	{
        		popupWidth = 400;
        	}

        	if (this.gfn_isNull(popupHeight))
        	{
        		popupHeight = 350;
        	}

        	var popupLeft = 70;
        	var popupTop = 70;

        	childFrame.set_openalign("center middle");
        	childFrame.init(popupId, popupLeft, popupTop, popupWidth + 4, popupHeight + 20 + 4, null, null, popupUrl);
        	childFrame.set_autosize(false);

        	// 색상정보 6자리 + 투명도 2자리
        	childFrame.set_overlaycolor("#ffffff39");

        	if (this.gfn_isNull(bShowFrameTitle) || bShowFrameTitle)
        	{
        		childFrame.set_border("2 solid #1e518d");
        		childFrame.set_border("round 5 5");
        	}
        	else
        	{
        		childFrame.set_border("0 none");
        		childFrame.set_border("normal");
        	}

        	// 동적으로 생성한 ChildFrame을 Modal Dialog로 보여줌.
        	// childFrame.showModal(parentFrame, argumentsList, obj, popupCallback, true);
        	var rtnVal = childFrame.showModal(parentFrame, argumentsList, obj, true);

        	if (this.gfn_isNull(bShowFrameTitle) || bShowFrameTitle)
        	{
        		childFrame.titlebar.set_height(25);
        		childFrame.form.set_top(5);

        		childFrame.titlebar.set_background("#1181c8 URL('Img::bg_POP_title.png') repeat");
        		childFrame.titlebar.titleicon.set_icon("URL('Img::ico_POP_bullet.png')");
        		childFrame.titlebar.closebutton.set_background("transparent");
        		childFrame.titlebar.closebutton.set_cursor("hand");
        		childFrame.titlebar.closebutton.set_image("URL('Img::ico_POP_close.png')");

        		childFrame.titlebar.maxbutton.set_visible(false);
        		childFrame.titlebar.minbutton.set_visible(false);
        		childFrame.titlebar.normalbutton.set_visible(false);
        	}
        	else
        	{
        		childFrame.set_showtitlebar(false);
        	}

        	return rtnVal;
        };

        /************************************************************************************************
         * Function Name: gfn_isCompFind
         * Description  : 컴포넌트의 id값으로 Component를 찾아내는 함수
         * Arguments    : Obj - 컴포넌트 container
         id  - component Id
         * Return       : Component Object
         *************************************************************************************************/
        this.gfn_isCompFind = function (Obj, id)
        {
        	if (Obj.name == id)
        	{
        		return Obj;
        	}
        };

        /************************************************************************************************
         * Function Name: gfn_isCompEnVis
         * Description  : 콤포넌트를 배열로 받아 Enable과 Visible 값을 변경
         * Arguments    : componentArray - Array로 받는 Component 배열
         gubun          - visible/enable/readonly/value
         value          - true/false
         componentGubun - ALL/S/D
         * Return       : Component Object
         *************************************************************************************************/
        this.gfn_isCompEnVis = function (componentArray, gubun, value, componentGubun)
        {
        	if (componentArray.length == 0)
        	{
        		return;
        	}

        	if (this.gfn_isNull(componentArray) || this.gfn_isNull(gubun))
        	{
        		return "";
        	}

        	var inIndex = -1;
        	var inArray = new Array();

        	if (componentGubun == "ALL" || this.gfn_isNull(componentGubun))
        	{
        		inArray = componentArray;
        	}
        	else if (componentGubun == "S" || componentGubun == "D")
        	{
        		for (var index = 0; index < componentArray.length; index++)
        		{
        			if (componentArray[index].name.substr(0, 2) == componentGubun + "_")
        			{
        				inIndex += 1;
        				inArray.getSetter(inIndex).set(componentArray[index]);
        			}
        		}
        	}

        	if (gubun == "visible")
        	{
        		for (var index = 0; index < inArray.length; index++)
        		{
        			inArray[index].set_visible(value);
        		}
        	}
        	else if (gubun == "enable")
        	{
        		for (var index = 0; index < inArray.length; index++)
        		{
        			inArray[index].set_enable(value);
        		}
        	}
        	else if (gubun == "readonly")
        	{
        		for (var index = 0; index < inArray.length; index++)
        		{
        			inArray[index].set_readonly(value);
        		}
        	}
        	else if (gubun == "value")
        	{
        		for (var index = 0; index < inArray.length; index++)
        		{
        			inArray[index].set_value(value);
        		}
        	}
        };

        /************************************************************************************************
         * Function Name: gfn_setEnableCtrl
         * Description  : 컨트롤을 활성화 또는 비활성화 처리
         * Arguments    : obj     - Component
         bEnable - boolean
         * Return       : 없음
         *************************************************************************************************/
        this.gfn_setEnableCtrl = function (obj, bEnable)
        {
        	var strType = obj.toString().toUpperCase();

        	switch (strType)
        	{
        		case "[OBJECT TAB]":
        		case "[OBJECT DIV]":
        		case "[OBJECT ACTIVEX]":
        			obj.set_enable(bEnable);
        			break;
        		case "[OBJECT TABPAGE]":
        			obj.Parent.removeChild(obj.name);
        			break;
        		case "[OBJECT GRID]":
        		case "[OBJECT LISTBOX]":
        			obj.set_readonly(!(bEnable));
        			obj.set_enableevent(bEnable);
        			break;
        		case "[OBJECT EDIT]":
        		case "[OBJECT CALENDAR]":
        		case "[OBJECT MASKEDIT]":
        		case "[OBJECT TEXTAREA]":
        			obj.set_readonly(!(bEnable));
        			break;
        		default:
        			obj.set_enable(bEnable);
        			obj.set_enableevent(bEnable);
        			break;
        	}
        };

        /************************************************************************************************
         * Function Name: gfn_getThisUrl
         * Description  : 화면내에서 자기 자신화면의 Url을 얻어온다.
         * Arguments    : 없음
         * Return       : string url( 절대경로 또는 Service::a.xfdl 형태로 return됨 )
         *************************************************************************************************/
        this.gfn_getThisUrl = function ()
        {
        	var this_url,parent_type;

        	// Division, Tab, PopupDiv인 경우에는 따로 처리해야 함
        	parent_type = this.gfn_getObjType(this.parent);

        	if (parent_type == "Div" || parent_type == "PopupDiv" || parent_type == "TabPage")
        	{
        		this_url = this.parent.url;
        	}
        	else
        	{
        		this_url = this.getOwnerFrame().formurl;
        	}

        	return this_url;
        };

        /************************************************************************************************
         * Function Name: gfn_getObjType
         * Description  : Object의 type을 문자열로 얻어온다.
         * Arguments    : obj - type을 얻어올 Object
         * Return       : string Object의 type문자열(예 : "MainFrame", "ChildFrame", "Form", "Button",...)
         *************************************************************************************************/
        this.gfn_getObjType = function (oObj)
        {
        	var sType;
        	if (this.gfn_isNull(oObj))
        	{
        		return "";
        	}

        	sType = oObj.toString().valueOf().substr(1, 6);

        	if (sType.toLowerCase() == "object")
        	{
        		return this.gfn_mid(oObj.toString().valueOf(), " ", "]");
        	}

        	return "";
        };

        /************************************************************************************************
         * Function Name: gfn_getComBtnRgt
         * Description  : 버튼 권한 체크
         * Arguments    : sForm : Form Id
         * Return       : 없음
         *************************************************************************************************/
        this.gfn_getComBtnRgt = function (sFormId)
        {
        	var i;
        	var sRgtId;

        	for (i = 0; i <= nexacro.getApplication().gds_rgt.rowcount; i++)
        	{
        		sRgtId = nexacro.getApplication().gds_rgt.getColumn(i, "RGT_ID"); //권한 체크

        		switch (sRgtId)
        		{
        			case "RGT00001":
        				// 시스템관리자
        				lv_btnTpSe[i] = nexacro.getApplication().gds_rgt.getColumn(i, "BTON_TP_SE");
        				// trace(lv_btnTpSe[i]);
        				break;
        		}
        	}
        	this.gfn_setComBtnRgt(sFormId, lv_btnTpSe);
        };

        /************************************************************************************************
         * Function Name: gfn_setComBtnRgt
         * Description  : 버튼 권한 설정
         * Arguments    : sForm 			: Form Id
         sBtnTpSe 		    : BTON_TP_SE - 버튼 Type Code
         * Return       : 없음
         *************************************************************************************************/
        this.gfn_setComBtnRgt = function (sForm, sBtnTpSe)
        {
        	var i,j;
        	var sBtnChk;
        	// trace(sForm + "    " + sBtnTpSe);

        	for (i = 0; i <= sForm.all.length; i++)
        	{
        		sBtnChk = sForm.all[i];

        		if (sBtnChk == "[object Button]")
        		{
        			if (sBtnChk.name == "btn_search" || sBtnChk.name == "btn_save" || sBtnChk.name == "btn_modify" || sBtnChk.name == "btn_delete")
        			{
        				sBtnChk.set_enable(false);
        			}

        			for (j = 0; j <= sBtnTpSe.length; j++)
        			{
        				if (sBtnTpSe[j] == "SELECT")
        				{
        					// 조회 권한
        					if (sBtnChk.name == "btn_search")
        					{
        						sBtnChk.set_enable(true);
        					}
        				}
        				else if (sBtnTpSe[j] == "SAVE")
        				{
        					// 저장 권한
        					if (sBtnChk.name == "btn_save")
        					{
        						sBtnChk.set_enable(true);
        					}
        				}
        				else if (sBtnTpSe[j] == "MODIFY")
        				{
        					// 수정 권한
        					if (sBtnChk.name == "btn_modify")
        					{
        						sBtnChk.set_enable(true);
        					}
        				}
        				else if (sBtnTpSe[j] == "DELETE")
        				{
        					// 삭제 권한
        					if (sBtnChk.name == "btn_delete")
        					{
        						sBtnChk.set_enable(true);
        					}
        				}
        			}
        		}
        	}
        };

        /**********************************************************************************
         * Function Name: gfn_getCommonCode
         * Description  : 공통코드 받아오기
         * Arguments    : strCommGrpCd	- 그룹코드
         strDataset	- 매핑 데이타셋
         strDefaultCd	- 기본값 코드
         strDefaultNm	- 기본값 코드명
         * Return       :
         **********************************************************************************/
        this.gfn_getCommonCode = function (strIn, strDataset, strDefaultCd, strDefaultNm)
        {
        	var svcID = "tmCommonAct";
        	var URL = "svcUrl::EyouService.do";
        	var inDatasets = "ds_in=" + strIn;
        	var outDatasets = strDataset + "=result";
        	var argument = "_SERVICE_=tmCommonAct _METHOD=getComCode";
        	var callbackFunc = "";

        	this.gfn_transaction(svcID, URL, inDatasets, outDatasets, argument, callbackFunc, false, false);

        	if (this.gfn_isNull(strDefaultNm))
        	{
        		var nRow = this[strDataset].insertRow(0);
        		this[strDataset].setColumn(nRow, "CODENAME", strDefaultNm);
        		this[strDataset].setColumn(nRow, "CODE", this.gfn_isNullThenEmpty(strDefaultCd));
        	}
        };

        /**********************************************************************************
         * Function Name: gfn_setCommonCode
         * Description  : component의 dataset 매핑(userproperty에 commGrpCd 추가 후 그룹코드 입력(ex-DH3)
         * Arguments    : objCmpt		- component
         strDataset    -
         strDefaultCd	- 기본값 코드
         strDefaultNm	- 기본값 코드명
         nIndex		- component 초기 인덱스
         * Return       :
         **********************************************************************************/
        this.gfn_setCommonCode = function (objCmpt, strGrpCode, strDefaultCd, strDefaultNm, nIndex)
        {
        	// trace("strGrpCode = " + strGrpCode);
        	var strDataset = objCmpt.innerdataset;
        	var strCommGrpCd = strGrpCode;
        	var strDataset = "ds_code_" + strGrpCode;

        	var datasetObject = new Dataset(strDataset);
        	this.addChild(strDataset, datasetObject);
        	datasetObject.addColumn("CODE");
        	datasetObject.addColumn("CODENAME");

        	objCmpt.set_innerdataset(strDataset);
        	objCmpt.set_codecolumn("CODE");
        	objCmpt.set_datacolumn("CODENAME");

        	// trace(strDataset);
        	// trace(strCommGrpCd);

        	var svcID = "tmCommonAct";
        	var URL = "svcUrl::EyouService.do";
        	var inDatasets = "";
        	var outDatasets = strDataset + "=result";
        	var argument = "_SERVICE_=tmCommonAct _METHOD=getComCode codeType=" + strGrpCode;
        	var callbackFunc = "";

        	this.gfn_transaction(svcID, URL, inDatasets, outDatasets, argument, callbackFunc, false, false);

        	if (this.gfn_isNotNull(strDefaultNm))
        	{
        		var nRow = this[strDataset].insertRow(0);
        		this[strDataset].setColumn(nRow, "CODENAME", strDefaultNm);
        		this[strDataset].setColumn(nRow, "CODE", this.gfn_isNullThenEmpty(strDefaultCd));
        	}

        	if (this.gfn_isNotNull(nIndex))
        	{
        		objCmpt.set_index(nIndex);
        	}

        	objCmpt.set_cursor("hand");
        };

        /*******************************************************************************
         * Function Name: gfn_callMskType
         * Description	: Component MaskEdit Type 설정
         * Arguments	: objComp - Object MaskEdit
         * Return 		: None
         ********************************************************************************/
        this.gfn_callMskType = function (objComp)
        {
        	var sGetValue = "";

        	for (var i = 0; i < objComp.length; i++)
        	{
        		if (this.gfn_isNull(objComp[i].value))
        		{
        			objComp[i].set_maskchar(" ");
        		}

        		switch (objComp[i].mskType)
        		{
        			case "J":
        				// 주민등록번호
        			case "SN":
        				// 주민등록번호S2
        				sGetValue = objComp[i].value;
        				objComp[i].set_type("string");

        				if (objComp[i].mskType == "SN")
        				{
        					objComp[i].set_mask("######-#{######}");
        				}
        				else
        				{
        					objComp[i].set_mask("######-#######");
        				}

        				objComp[i].set_value(sGetValue);
        				break;
        			case "J1":
        				// 주민등록번호1
        				sGetValue = this.gfn_left(objComp[i].value, 6);

        				objComp[i].set_type("string");
        				objComp[i].set_mask("######");

        				objComp[i].set_value(sGetValue);
        				break;
        			case "J2":
        				// 주민등록번호2
        				sGetValue = this.gfn_right(objComp[i].value, 7);

        				objComp[i].set_type("string");
        				objComp[i].set_mask("#######");

        				objComp[i].set_value(sGetValue);
        				break;
        			case "T":
        				// 전화번호
        				break;
        			case "TN":
        				// 전화번호1
        			case "HN":
        				// 핸드폰
        				objComp[i].set_type("string");
        				objComp[i].set_mask("###-{####}-####");

        				objComp[i].set_value(objComp[i].value);
        				break;
        			case "TN1":
        				// 전화번호2
        				objComp[i].set_type("string");
        				objComp[i].set_mask("##-{####}-####");

        				objComp[i].set_value(objComp[i].value);
        				break;
        			case "PN":
        				// 여권번호
        				objComp[i].set_type("string");
        				objComp[i].set_mask("###{#####}");

        				objComp[i].set_value(objComp[i].value);
        				break;
        			case "C":
        				// 사업자번호
        			case "C2":
        				// 사업자번호2
        				sGetValue = objComp[i].value;
        				objComp[i].set_type("string");

        				if (objComp[i].mskType == "C2")
        				{
        					objComp[i].set_mask("###-{##}-#####");
        				}
        				else
        				{
        					objComp[i].set_mask("###-##-#####");
        				}

        				objComp[i].set_value(sGetValue);
        				break;
        			case "D":
        				// 날짜
        				objComp[i].set_type("string");
        				objComp[i].set_mask("####-##-##");

        				objComp[i].set_value(objComp[i].value);
        				break;
        			case "MD":
        				// 년, 월
        			case "YM":
        				// 년, 월
        			case "Y":
        				// 년
        				objComp[i].set_type("string");

        				if (!this.gfn_isNull(objComp[i].value))
        				{
        					if (objComp[i].mskType == "MD")
        					{
        						sGetValue = objComp[i].value.substr(2, 4);

        						objComp[i].set_mask("##-##");
        					}
        					else if (objComp[i].mskType == "YM")
        					{
        						sGetValue = objComp[i].value.substr(0, 6);
        						objComp[i].set_mask("####-##");
        					}
        					else if (objComp[i].mskType == "Y")
        					{
        						sGetValue = objComp[i].value.substr(0, 4);
        						objComp[i].set_mask("####");
        					}
        				}

        				objComp[i].set_value(sGetValue);
        				break;
        			case "HM":
        				// 시, 분
        			case "MS":
        				// 시, 분, 초
        			case "DT":
        				// 년, 월, 일, 시, 분, 초
        				var sTime = this.gfn_todayTime();
        				objComp[i].set_type("string");

        				if (objComp[i].mskType == "HM")
        				{
        					sGetValue = sTime.substr(8, 4);
        					objComp[i].set_mask("##:##");
        				}
        				else if (objComp[i].mskType == "MS")
        				{
        					sGetValue = sTime.substr(8, 6);
        					objComp[i].set_mask("##:##:##");
        				}
        				else if (objComp[i].mskType == "DT")
        				{
        					sGetValue = sTime;
        					objComp[i].set_mask("####-##-## ##:##:##");
        				}

        				objComp[i].set_value(sGetValue);
        				break;
        			case "P":
        				// 우편번호
        				objComp[i].set_type("string");
        				objComp[i].set_mask("###-###");

        				objComp[i].set_value(objComp[i].value);
        				break;
        			case "AN":
        				// 계좌번호
        				objComp[i].set_type("string");
        				objComp[i].set_mask("{####}#######");
        				objComp[i].set_value(objComp[i].value);
        				break;
        			case "CN":
        				// 신용카드번호
        				objComp[i].set_type("string");
        				objComp[i].set_mask("####-{####}-{####}-####");
        				objComp[i].set_value(objComp[i].value);
        				break;
        			case "LN":
        				// 운전면허번호
        				objComp[i].set_type("string");
        				objComp[i].set_mask("##-###{###}-{##}");
        				objComp[i].set_value(objComp[i].value);
        				break;
        		}
        	}
        };

        /*******************************************************************************
         * Function Name: gfn_goForm
         * Description	: Form 이동
         * Arguments	: sFormPath - 이동할 Form Path
         * Return 		: None
         ********************************************************************************/
        this.gfn_goForm = function (sFormPath)
        {
        	if (!this.gfn_isNull(sFormPath))
        	{
        		nexacro.getApplication().getActiveForm().divTempWork.set_url(sFormPath);
        		nexacro.getApplication().getActiveForm().divTempWork.set_visible(true);
        		nexacro.getApplication().getActiveForm().divWork.set_visible(false);
        	}
        	else if (this.gfn_isNull(sFormPath))
        	{
        		nexacro.getApplication().getActiveForm().divTempWork.set_url("");
        		nexacro.getApplication().getActiveForm().divTempWork.set_visible(false);
        		nexacro.getApplication().getActiveForm().divWork.set_visible(true);
        	}
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
