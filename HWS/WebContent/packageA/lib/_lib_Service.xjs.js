//XJS=_lib_Service.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
        ===============================================================================
         == 서비스 호출관련 공통함수들은 여기에 작성한다.
         ===============================================================================
         ● gfn_Transaction         :  공통 트랜잭션 함수
         ● gfn_TransactionCallBack :  공통 Callback 함수
         */
         var objApp = nexacro.getApplication() ;
         var objEnv = nexacro.getEnvironment();
        /******************************************************************************
         * Function Name: gfn_Transaction
         * Description  : 공통 트랜잭션 함수
         * Arguments    : svcID         Transaction 서비스ID(사용자지정)
         *                URL           Transaction 요청 경로
         *                inDatasets    송신 Dataset(복수일 경우 " "으로 구분)
         *                outDatasets   수신 Dataset(복수일 경우 " "으로 구분)
         *                argument      Dataset 외의 Transaction을 위한 인자값
         *                            a=b의 형태로 입력하고, 빈칸으로 구분
         *                callbackFunc  Callback 함수명
         *                showProgress  ProgressBar 표시여부(default:true)
         *                bAsync        비동기 여부를 지정합니다.(Default : true)
         *                bBinary       Binary 형태로 전송할 지 여부를 지정합니다.(Default : false)
         * Return       :
         ******************************************************************************/
        this.gfn_Transaction = function (svcID, URL, inDatasets, outDatasets, argument, callbackFunc, showProgress, bAsync, bBinary )
        {
        	if (this.gfn_isEmpty(showProgress) || showProgress == true)
        	{
        		objEnv.set_usewaitcursor(true);
        	} else {
        		objEnv.set_usewaitcursor(false);
        	}
        	if (this.gfn_isEmpty(bAsync))
        	{
        		bAsync = true;
        	}
        	if (this.gfn_isEmpty(bBinary))
        	{
        		bBinary = false;
        	}
        	if (this.gfn_isEmpty(argument))
        	{
        		argument = "";
        	}

        	var strChk = new String(showProgress);
        	if (strChk != 'true' && strChk != 'false')
        	{
        		trace("    form id = " + this.name + " svcId = " + svcID + " value = " + strChk);
        	}
        	objEnv.set_usewaitcursor(false);
        	// Async가 true면 커서를 지정한다.
        	//objEnv.set_usewaitcursor(true);
        	this.setWaitCursor(true); //커서 활성화.

        	var strSvcID = svcID + ":" + callbackFunc;
        	var strURL = URL;
        	var strInDatasets = inDatasets;
        	var strOutDatasets = outDatasets;
        	var strArgument = argument;
        	var strCallbackFunc = "gfn_TransactionCallBack";

        	var m_output = outDatasets;
        	// trace("strSvcID===================================" + strSvcID + " : " + jv_objDsResultOption);
        	var service = objEnv.services["svcurl"];
        	// http://localhost:8080/myapp/ ,/

        	this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArgument, strCallbackFunc, bAsync, bBinary);
        }

        /******************************************************************************
         * Function Name: gfn_TransactionCallBack
         * Description  : 공통 Callback 함수
         *                이 함수가 먼저 수행되고 사용자지정Callback함수가 수행된다
         * Arguments    : svcID         Transaction 서비스ID + : + Callback 함수명
         *                errorCode     에러코드
         *                errorMsg      에러 메시지
         * Return     :
         ******************************************************************************/
        this.gfn_TransactionCallBack = function (svcID, errorCode, errorMsg)
        {
        	objEnv.set_usewaitcursor(true);
        	this.setWaitCursor(false); //커서 비활성화.

        	var arrSvcID = svcID.split(":");

        	// 세션 만료 체크
        	if (errorCode == -99999)
        	{
        		// userNotify(-666666666,  "goLoginPage(true)");
        		this.lookupFunc("gfn_Alert").call("domain.session.timeout");
        		objApp.gfn_Exit();
        		return;
        	}

        	/*
        	 if (errorCode != 0) {
        	 if (arrSvcID.length > 3 && !gfn_isEmpty(arrSvcID[3])) {
        	 gfn_Alert(arrSvcID[3]);
        	 } else {
        	 gfn_Alert(errorMsg);
        	 }
        	 } else {
        	 if (arrSvcID.length > 2 && !gfn_isEmpty(arrSvcID[2])) {
        	 gfn_Alert(arrSvcID[2]);
        	 }
        	 }
        	 */

        	if (arrSvcID.length > 1 && !this.lookupFunc("gfn_isNull").call(arrSvcID[1]))
        	{
        		var strExpr = arrSvcID[1] + "('" + arrSvcID[0] + "', " + errorCode + ", '" + errorMsg + "')";
        		//trace("strExpr>>> " + strExpr);
        		eval(strExpr);
        	}
        }


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();