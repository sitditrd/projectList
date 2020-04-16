//XJS=comLib_Comm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::comLib_Data.xjs");
        this.addIncludeScript(path,"lib::comLib_Date.xjs");
        this.addIncludeScript(path,"lib::comLib_Form.xjs");
        this.addIncludeScript(path,"lib::comLib_Grid.xjs");
        this.addIncludeScript(path,"lib::comLib_String.xjs");
        this.addIncludeScript(path,"lib::comLib_Util.xjs");
        this.addIncludeScript(path,"lib::comLib_Validation.xjs");
        this.registerScript(path, function() {
        /******************************************************************************
         * Name      : comLib_Comm.xjs
         * Title     : 공통 Library 통합
         * @desc     : 공통 Library 통합
         * 작성자	 : 투비소프트
         * 작성일	 : 2018-04-05
         ********************************************************************************/
        this.executeIncludeScript("lib::comLib_Data.xjs"); /*include "lib::comLib_Data.xjs"*/;
        this.executeIncludeScript("lib::comLib_Date.xjs"); /*include "lib::comLib_Date.xjs"*/;
        this.executeIncludeScript("lib::comLib_Form.xjs"); /*include "lib::comLib_Form.xjs"*/;
        this.executeIncludeScript("lib::comLib_Grid.xjs"); /*include "lib::comLib_Grid.xjs"*/;
        this.executeIncludeScript("lib::comLib_String.xjs"); /*include "lib::comLib_String.xjs"*/;
        this.executeIncludeScript("lib::comLib_Util.xjs"); /*include "lib::comLib_Util.xjs"*/;
        this.executeIncludeScript("lib::comLib_Validation.xjs"); /*include "lib::comLib_Validation.xjs"*/;

        this.getWeekOfYear = function(date)
        {
        	date = this.gfn_strToDate(date);

        	var onejan = new Date();

        	onejan.setYear(date.getFullYear());
        	onejan.setMonth(0);
        	onejan.setDate(1);

        	return Math.ceil((((date - onejan) / 86400000) + onejan.getDay()+1)/7);
        }


        /************************************************************************************************
         * Function Name: gfn_lPad
         * Description  : 자리수 만큼 왼쪽에 문자열 추가
         * Arguments    : sOrg - 원래 문자열
         sPad - Pad할 문자열
         nCnt - 자리수
         * Return       : String Pad된 문자열
         *************************************************************************************************/
        this.gfn_lPad = function (sOrg, sPad, nCnt)
        {
        	var i;
        	var nLength;
        	var sRet = "";

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}

        	if (this.gfn_isNull(sPad))
        	{
        		sPad = " ";
        	}

        	if (this.gfn_isNull(nCnt))
        	{
        		nCnt = 1;
        	}

        	for (i = 0; i < nCnt; i++)
        	{
        		sRet += sPad;
        	}

        	sRet += sOrg;

        	nLength = this.gfn_length(sOrg) > nCnt ? this.gfn_length(sOrg) : nCnt;

        	return this.gfn_right(sRet, nLength);
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
