//XJS=lib_Form.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::lib_String.xjs");
        this.registerScript(path, function() {
        /*
         ===============================================================================
         == 폼과 관련된 공통함수들은 여기에 작성한다.
         ===============================================================================
         ● gfn_openMenu         : 메뉴 아이디를  기준으로 신규 윈도우 화면을
                                   생성하고 open 시킴
         ● gfn_openModalPopup   : Modal Dialog 실행
         ● gfn_activeFrame      : 윈도우 키를 기준으로 열려있는 화면 여부 확인
         ● gfn_openMenuRow      : gds_OpenMenu의 해당 Row의 정보를 기준으로 신규
                                   윈도우 화면을 생성하고 open 시킴
         ● gfn_addOpenMenuDs    : 신규 생성된 윈도우(프레임) 화면을 gds_OpenMenu에
                                   등록
         ● gfn_findData         : dataSet object에서 키에 해당되는 Row를 찾아서
                                   rowpostion 전달
         ● gfn_getLookupData    : dataSet object에서 키에 해당되는 Row를 찾아서
                                   칼럼값을 전달
         ● gfn_isNull           : 입력값이 null에 해당하는 경우 모두를 한번에 체크
         ● gfn_getMenuInfo      : menuid 를 기준으로 해당 메뉴의 칼럼값을 전달
         ● gfn_getFrameAguments : child Frame에 등록한 아규먼트를 반환
         ● gfn_ArrangeWin       : 열려있는 윈도우 화면을 정렬
         ● gfn_closeMenu        : 선택된 WINID 에 해당하는 화면을 Active
                                   (Tab/Frame/Menu)
         ● gfn_closeFrame       : 윈도우 타이틀 탭 닫힘 처리
         ● gfn_Today            : 오늘 날짜 가져오기
         */

        /************************
         *  공통 Script Include
         ************************/
        this.executeIncludeScript("lib::lib_String.xjs"); /*include "lib::lib_String.xjs"*/

        var objApp = nexacro.getApplication();

        /**********************************************************************************
         * Function Name: gfn_openMenu
         * Description  : 메뉴 아이디를  기준으로 신규 윈도우 화면을 생성하고 open 시킴
         * Arguments    : menuid: 메뉴아이디, bReload: Reload 여부, aArgs: 넘겨줄 Argument, favArgs:즐겨찾기에서 넘어왔을 경우체크
         * Return       : 없음
         **********************************************************************************/
        this.gfn_openMenu = function (menuid)
        {
        	if (this.gfn_isNull(menuid))
        	{
        		return;
        	}

        	var nRow = this.gfn_findData(objApp.gds_Menu, objApp.gv_MenuIdCol, menuid);
        	var winid = this.gfn_getLookupData(objApp.gds_OpenMenu, objApp.gv_MenuIdCol, menuid, objApp.gv_WinIdCol);

        	if (this.gfn_isNull(winid) == false)
        	{
        		if (this.gfn_activeFrame(winid) == true)
        		{
        			//gv_MdiFrame.form.fn_moveTab(winid);
        			return;
        		}
        	} else {
        		var rObj = gv_WorkFrame.removeChild("Mainform");

        		if(!this.gfn_isNull(rObj))
        			rObj.destroy();
        	}

        	if (objApp.gds_OpenMenu.rowcount >= 5)
        	{
        		this.alert("We can open maximum 5 screens only.");
        		return;
        	}

        	this.gfn_openMenuRow(menuid, nRow);
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

        	var popupLeft = 70;
        	var popupTop = 70;

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
        		childFrame.set_showstatusbar(false);
        	}
        	/* ===== Statusbar 옵션 추가 - End   ===== */
        	childFrame.set_openalign("center middle");
        	childFrame.set_autosize(false);
        	childFrame.set_dragmovetype("normal");
        	childFrame.set_border("3 solid #351b6f");
        	childFrame.set_border("normal");

        	// 동적으로 생성한 ChildFrame을 Modal Dialog로 보여줌.
        	childFrame.showModal(parentFrame, argumentsList, obj, popupCallback, true);

        	if (!this.gfn_isNull(bShowFrameTitle) || bShowFrameTitle)
        	{
        		// childframe 에 연결 된 Form titletext 를 적용하지 않기 위해 추가
        		// Popupid 를 결합한 Title 지정
        		//var sPopupTitle = "[" + popupId + "]" + " " + bShowFrameTitle;

        		childFrame.set_titletext(bShowFrameTitle);
        		childFrame.set_titlebarheight(28);
        	}
        	else
        	{
        		childFrame.set_showtitlebar(false);
        	}
        };

        /**********************************************************************************
         * Function Name: gfn_activeFrame
         * Description  : 윈도우 키를 기준으로 열려있는 화면 여부 확인
         * Arguments    : winid: 윈도우 생성 키, bReload: 화면 Reload여부, aArgs:전달인자
         * Return       : 열린화면이면 true 아니면 false
         **********************************************************************************/
        this.gfn_activeFrame = function (winid)
        {
        	var framesInfo = gv_WorkFrame.frames;

        	if(this.gfn_isNull(winid)){return true;}

        	if(framesInfo[winid])
        	{
        	    gv_MdiFrame.form.fn_moveTab(winid);
        		framesInfo[winid].setFocus();
        		gv_openMenuId = winid;
        		return true;
        	}

        	return false;
        };

        /**********************************************************************************
         * Function Name: gfn_openMenuRow
         * Description  : gds_OpenMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴
         * Arguments    : menuid: 메뉴아이디, nRow: gds_OpenMenu의 rowpostion, aArgs:전달인자
         * Return       : 없음
         **********************************************************************************/
        this.gfn_openMenuRow = function (menuid, nRow)
        {
        	var winid = "win" + menuid + "_" + objApp.gds_OpenMenu.getRowCount() + "_" + parseInt(Math.random() * 1000);

        	var objNewWin = new ChildFrame;
        	var strTitle;

        	objNewWin.init(winid, 0, 0, gv_WorkFrame.width, gv_WorkFrame.height);

        	objNewWin.arguments = [];
        	strTitle = this.gfn_getMenuInfo(menuid, "MENU_NM");
        	objNewWin.set_openstatus("maximize");

        	var sPageUrl = this.gfn_getLookupData(objApp.gds_Menu, objApp.gv_MenuIdCol, menuid, objApp.gv_MenuUrlCol);
        	var sMenuNm = this.gfn_getLookupData(objApp.gds_Menu, objApp.gv_MenuIdCol, menuid, objApp.gv_MenuNameCol);

        	gv_WorkFrame.addChild(winid, objNewWin);
        	this.gfn_addOpenMenuDs(winid, menuid, sMenuNm);

        	objNewWin.set_formurl("frame::Frame_Work.xfdl");
        	objNewWin.set_showtitlebar(false);
        	objNewWin.set_resizable(true);

        	objNewWin.arguments["winKey"]   =  winid;
        	objNewWin.arguments["menuId"]   =  menuid;
        	objNewWin.arguments["menuNm"]   =  sMenuNm;
        	objNewWin.arguments["pageUrl"]  =  sPageUrl;

        	objNewWin.show();
        	gv_MdiFrame.form.fn_addTab(winid, strTitle);
        	this.gfn_activeFrame(winid);
        };

        /**********************************************************************************
         * Function Name: gfn_addOpenMenuDs
         * Description  : 신규 생성된 윈도우(프레임) 화면을 gds_OpenMenu에 등록
         * Arguments    : winid: 윈도우아이디, menuid: 메뉴아이디, strTitle:타이틀
         * Return       : 없음
         **********************************************************************************/
        this.gfn_addOpenMenuDs = function (winid, menuid, strTitle)
        {
        	var curRow = objApp.gds_OpenMenu.addRow();
        	objApp.gds_OpenMenu.setColumn(curRow, objApp.gv_WinIdCol, winid);
         	objApp.gds_OpenMenu.setColumn(curRow, objApp.gv_MenuIdCol, menuid);
         	objApp.gds_OpenMenu.setColumn(curRow, objApp.gv_MenuNameCol, strTitle);
        };

        /**********************************************************************************
         * Function Name: gfn_findData
         * Description  : dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
         * Arguments    : ObjDs:dataset, strIdCol:키칼럼, strId:키값,
         strSubCol:서브키칼럼, strSubId:서브 키값
         * Return       : rowpostion
         **********************************************************************************/
        this.gfn_findData = function (ObjDs, strIdCol, strId)
        {
        	return ObjDs.findRowExpr(strIdCol + " == '" + strId + "'");
        };

        /**********************************************************************************
         * Function Name: gfn_getLookupData
         * Description  : dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
         * Arguments    : ObjDs:dataset, strIdCol:키칼럼, strId:키값,  strInfo: dataSet 칼럼,
         strSubCol:서브키칼럼, strSubId:서브 키값
         * Return       : 칼럼값
         **********************************************************************************/
        this.gfn_getLookupData = function (ObjDs, strIdCol, strId, strInfo)
        {
        	var strVal;
        	var curRow = this.gfn_findData(ObjDs, strIdCol, strId);

        	if (curRow < 0)
        	{
        		return "";
        	}

        	strVal = ObjDs.getColumn(curRow, strInfo);
        	if (this.gfn_isNull(strVal))
        	{
        		return "";
        	}

        	return strVal;
        };

        /*******************************************************************************
         * Function Name: gfn_isNull
         * Description  : 입력값이 null에 해당하는 경우 모두를 한번에 체크
         * Arguments    : Val : 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
         * Return       : Boolean,  Val이 undefined, null, NaN, "", Array.length = 0인 경우 = true
         이외의 경우 = false
         ******************************************************************************/
        this.gfn_isNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (Val == null)
        	{
        		return true;
        	}
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (Val.length == 0)
        	{
        		return true;
        	}

        	return false;
        };

        //////////////////////////////////////////////////////////
        /**********************************************************************************
         * Function Name: gfn_getMenuInfo
         * Description  : menuid 를 기준으로 해당 메뉴의 칼럼값을 전달
         * Arguments    : menuid: 메뉴아이디, menuInfo: 메뉴의 칼럼
         * Return       : 칼럼값
         **********************************************************************************/
        this.gfn_getMenuInfo = function (menuid, menuInfo)
        {
        	return this.gfn_getLookupData(objApp.gds_Menu, objApp.gv_MenuIdCol, menuid, menuInfo);
        };

        /**********************************************************************************
         * Function Name: gfn_getFrameAguments
         * Description  : child Frame에 등록한 아규먼트를 반환
         * Arguments    : winKey, pageUrl 등등
         * Return       : 반환값
         **********************************************************************************/
        this.gfn_getFrameAguments = function (sVal)
        {
            return this.getOwnerFrame().arguments[sVal];
        };

        /**********************************************************************************
         * Function Name: gfn_ArrangeWin
         * Description  : 열려있는 윈도우 화면을 정렬
         * Arguments    : strType: 정렬 타입
         * Return       : N/A
         **********************************************************************************/
        this.gfn_ArrangeWin = function(strType)
        {
        	// workFrame영역에 open된 childFrame 갯수
        	var iFramesCnt = gv_WorkFrame.frames.length;
        	//if (applicaton.gds_OpenMenu.getRowCount() < 1) return;
        	switch(strType)
        	{
        		case "maximize" :
        		for (var i=0; i<iFramesCnt; i++)
        		{
        			gv_WorkFrame.frames[i].set_openstatus("maximize");
        			gv_WorkFrame.frames[i].set_showtitlebar(false);
        			gv_WorkFrame.frames[i].set_border("0 solid #006666ff");
        		}


        	   break;
        	   case "closeAll" :
        		for (var i=iFramesCnt; i>=0; i--)
        		{
        			if( i > 0 ){
        				gv_MdiFrame.form.gfn_TabOnClose(gv_WorkFrame.frames[i-1].name);
        				if( i == 0 ){
        					gfn_callMain();
        				}
        			}
        		}
        	    break;
        	   case "hidden" :
        		for (i=0; i<iFramesCnt; i++)
        		{
        			gv_WorkFrame.frames[i].set_showtitlebar(true);
        			gv_WorkFrame.frames[i].set_border("1 solid #7f7f7bff");
        			gv_WorkFrame.frames[i].set_borderRadius("round 3 3");
        			gv_WorkFrame.frames[i].set_openstatus("minimize");
        		}

        		gv_WorkFrame.arrange(strType);
        	    break;
        	    default :
        		for (i=0; i<iFramesCnt; i++)
        		{
        			//if( gv_WorkFrame.frames[i].name != "MainForm" ){
        				gv_WorkFrame.frames[i].set_showtitlebar(true);
        				gv_WorkFrame.frames[i].set_border("1 solid #7f7f7bff");
        			//}

        			gv_WorkFrame.frames[i].set_borderRadius("round 3 3");
        			gv_WorkFrame.frames[i].set_openstatus("normal");
        		}

        		gv_WorkFrame.arrange(strType);
        	    break;

        	}
        };

        /***************************************************************************************
        * FUNCTION NAME : gfn_closeMenu
        * DESCRIPTION   : 선택된 WINID 에 해당하는 화면을 Active(Tab/Frame/Menu)
        * ARGUMENT      : sWinId - 화면 ChildFrame Object Name
                          bCloseFrame - Frame Close 여부
        * RETURN        :
        ***************************************************************************************/
        this.gfn_closeMenu= function(sWinID, bCloseFrame)
        {
        	if(this.gfn_isEmpty(bCloseFrame)) bCloseFrame = true;

        	var objActiveFrame='';
        	var sAcctiveWinID = "";
        	var nRow = objApp.gds_OpenMenu.findRow("WIN_ID", sWinID);

        	if(nRow > -1) objApp.gds_OpenMenu.deleteRow(nRow);

        	//trace( '### 3333333333'+ gv_WorkFrame.getActiveFrame());
        	if(gv_WorkFrame.getActiveFrame() != null)
        		objActiveFrame = gv_WorkFrame.getActiveFrame().name;

        	gv_MdiFrame.form.gfn_TabOnClose(sWinID);

        	if(objActiveFrame == sWinID && gds_OpenMenu.rowcount > 0){
        		if(nRow >= gds_OpenMenu.rowcount)
        			sAcctiveWinID = gds_OpenMenu.getColumn(gds_OpenMenu.rowcount-1, "WINID");
        		else
        			sAcctiveWinID = gds_OpenMenu.getColumn(nRow, "WINID");

        		gfn_activeMenu(sAcctiveWinID);
        	}
        	else{
        		gv_MdiFrame.form.btn_openMenuList.enable = false;
        		gv_MdiFrame.form.btn_prevTab.enable = false;
        		gv_MdiFrame.form.btn_nextTab.enable = false;
        		gv_MdiFrame.form.btn_MdiList.enable = false;
        		gv_MdiFrame.form.btn_max.enable = false;
        		gv_MdiFrame.form.btn_cas.enable = false;
        		gv_MdiFrame.form.btn_closeAll.enable = false;
        	}
        };

        /*****************************************************************************************
        * 함  수  명	: 	gfn_closeFrame
        * 입      력	: 	strID: 윈도우 생성키
        * 반      환	:   true/false 정상닫힘/닫힘취소
        * 기      능	: 	윈도우 타이틀 탭 닫힘 처리
        *****************************************************************************************/
        this.gfn_callMain = function()
        {
        	if(!objApp.gv_isLoad){
        		return;
        	}

        	var objNewWinMain = new ChildFrame;
        	objNewWinMain.init("Mainform", 0, 0, gv_WorkFrame.getOffsetWidth() - 0, gv_WorkFrame.getOffsetHeight() - 0);
        	gv_WorkFrame.addChild("Mainform", objNewWinMain);
        	objNewWinMain.set_formurl("frame::Main.xfdl");
        	objNewWinMain.set_dragmovetype("none");
        	objNewWinMain.set_showtitlebar(false);
        	objNewWinMain.set_resizable(false);
        	objNewWinMain.set_openstatus("maximize");
        	objNewWinMain.show();
        };

        /*****************************************************************************************
        * 함  수  명	: 	this.gfn_Today
        * 입      력	:
        * 반      환	:   오늘 날짜
        * 기      능	: 	오늘 날짜 가져오기
        *****************************************************************************************/
        this.gfn_Today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
