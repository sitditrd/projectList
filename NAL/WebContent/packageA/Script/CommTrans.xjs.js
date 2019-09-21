//XJS=CommTrans.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*******************************************************************************************
        	FILENAME	: CommTrans.xjs
        	TITLE		: 트랜잭션 공통화
        ********************************************************************************************
        	COMMENT  	:
        	HISTORY  	: 2019/06/27
        	AUTHOR  	: 안주환
        *******************************************************************************************/
        this.gfnTransaction = function(strSvcID, strURL, strInDatasets, strOutDatasets, strArgument, strCallbackFunc)
        {
        // 	this.transaction(
        // 						strSvcID,
        // 						strURL,
        // 						strInDatasets,
        // 						strOutDatasets,
        // 						strArgument,
        // 						strCallbackFunc
        // 					);

        	this.appTopFrame = nexacro.getApplication().mainframe.VFrameSet.TopFrame.Frame_Top;

        	//this.appTopFrame.setTimer(1, 1000);
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
