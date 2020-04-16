//XJS=comLib_Date.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /************************************************************************************************
         * Name     : comLib_Date.xjs
         * Title    : 날짜 관련 함수
         * Desc     : 날짜 관련 함수
         * 작성자	: 투비소프트
         * 작성일	: 2018-04-05
         *************************************************************************************************
         *      수정일          이름          사유
         *************************************************************************************************
         *    2018.04.05        투비소프트       최초작성
         ************************************************************************************************/

        /************************************************************************************************
         ● gfn_isDate         : 날짜에 대한 형식 체크
         ● gfn_today          : 해당 PC의 오늘 날짜를 가져온다.
         ● gfn_todayTime      : 해당 PC의 오늘 날짜+시간를 가져온다.
         ● gfn_getYear        : 해당년도 구하기
         ● gfn_getYearMonth   : 해당년월 구하기
         ● gfn_getMonth       : 해당월 구하기
         ● gfn_getFirstDate   : 해당월의 시작 날짜를 yyyyMMdd형태로 구하기
         ● gfn_getLastDate    : 해당월의 마지막 날짜를 yyyyMMdd형태로 구하기
         ● gfn_getLastDateNum : 해당월의 마지막 날짜를 숫자로 구하기
         ● gfn_addDate        : 입력된 날자에 OffSet 으로 지정된 만큼의 일을 더한다.
         ● gfn_addMonth       : 입력된 날자에 OffSet 으로 지정된 만큼의 달을 더한다.
         ● gfn_dateTime       : MiPlatform에서 사용하던 Datetime형식으로 변환
         ● gfn_makeDate       : 년,월,일 숫자 값을 받아 년월일 string을 리턴한다.
         ● gfn_getDiffDay     : 2개의 날짜간의 Day count
         ● gfn_getDiffMonth   : 2개의 날짜간의 Month count
         ● gfn_getDay         : 입력된 날자로부터 요일을 구함
         ● gfn_getDayName     : 입력된 날자로부터 요일명을 구함
         ● gfn_strToDate      : String 타입의 형식을 날짜형식으로 변환
         ● gfn_isLeapYear     : 윤년여부 확인
         ● gfn_solar2Lunar    : 양력을 음력으로 변환해주는 함수 (처리가능 기간  1841 - 2043년)
         ● gfn_lunar2Solar    : 음력을 양력으로 변환해주는 함수 (처리가능 기간  1841 - 2043년)
         ● gfn_getHolidays    : 양력 nYear에 해당하는 년도의 법정 공휴일(양력) List 모두 구하기
         ● gfn_getClientDate  : 오늘 날짜를 가져오는 함수(클라이언트 PC기준)
         *************************************************************************************************/
        //include "lib::comLib_Comm.xjs";

        /************************************************************************************************
         * Function Name: gfn_isDate
         * Description  : 날짜에 대한 형식 체크
         * Arguments    : sDate  - 일자(yyyy-MM-dd 등)
         * Return       : boolean
         *************************************************************************************************/
        this.gfn_isDate = function (sDate)
        {
        	var stringWrapper = new String(sDate);
        	stringWrapper = stringWrapper.replace("/", "").replace("/", "");
        	stringWrapper = stringWrapper.replace("-", "").replace("-", "");
        	stringWrapper = stringWrapper.replace(".", "").replace(".", "");

        	if (stringWrapper.toString().length !== 8)
        	{
        		return false;
        	}

        	var iMonth = Math.floor(stringWrapper.slice(4, 6), 10);
        	var iDate = Math.floor(stringWrapper.slice(6, 8), 10);

        	if (iMonth < 1 || iMonth > 12)
        	{
        		return false;
        	}
        	if (iDate < 1 || iDate > this.gfn_getLastDateNum(stringWrapper))
        	{
        		return false;
        	}

        	return true;
        };

        /************************************************************************************************
         * Function Name: gfn_today
         * Description  : 해당 PC의 오늘 날짜를 가져온다.
         * Arguments    :
         * Return       : string 오늘 날짜
         *************************************************************************************************/
        this.gfn_today = function ()
        {
        	var sToday = "";
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + "";
        	var sMonth = objDate.getMonth() + 1;
        	var sDate = objDate.getDate();

        	if (sMonth.toString().length == 1)
        	{
        		sMonth = "0" + sMonth;
        	}

        	if (sDate.toString().length == 1)
        	{
        		sDate = "0" + sDate;
        	}

        	sToday = sToday + sMonth + sDate;

        	return sToday;
        };

        /************************************************************************************************
         * Function Name: gfn_todayTime
         * Description  : 해당 PC의 오늘 날짜와 시간를 가져온다.
         * Arguments    :
         * Return       : string 오늘 날짜+시간
         *************************************************************************************************/
        this.gfn_todayTime = function ()
        {
        	var strToday = "";
        	var objDate = new Date();

        	strToday = objDate.getFullYear().toString();
        	strToday += this.gfn_right("0" + (objDate.getMonth() + 1), 2);
        	strToday += this.gfn_right("0" + objDate.getDate(), 2);
        	strToday += this.gfn_right("0" + objDate.getHours(), 2);
        	strToday += this.gfn_right("0" + objDate.getMinutes(), 2);
        	strToday += this.gfn_right("0" + objDate.getSeconds(), 2);

        	return strToday;
        };

        /************************************************************************************************
         * Function Name: gfn_getYear
         * Description  : 해당년도 구하기
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : string yyyy형태의 년도 ( 예 : "2012" )
         *************************************************************************************************/
        this.gfn_getYear = function (sDate)
        {
        	if (this.gfn_isNull(sDate))
        	{
        		sDate = this.gfn_today();
        	}

        	return sDate.substr(0, 4);
        };

        /************************************************************************************************
         * Function Name: gfn_getYearMonth
         * Description  : 해당년월 구하기
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : string yyyyMM형태의 년월 ( 예 : "201211" )
         *************************************************************************************************/
        this.gfn_getYearMonth = function (sDate)
        {
        	if (this.gfn_isNull(sDate))
        	{
        		sDate = this.gfn_today();
        	}

        	return sDate.substr(0, 6);
        };

        /************************************************************************************************
         * Function Name: gfn_getMonth
         * Description  : 해당월 구하기
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : string MM형태의 년월 ( 예 : "11" )
         *************************************************************************************************/
        this.gfn_getMonth = function (sDate)
        {
        	if (this.gfn_isNull(sDate))
        	{
        		sDate = this.gfn_today();
        	}

        	return sDate.substr(4, 2);
        };

        /************************************************************************************************
         * Function Name: gfn_getFirstDate
         * Description  : 해당월의 시작 날짜를 yyyyMMdd형태로 구하기
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : string yyyyMMdd형태의 시작 날짜 ( 예 : "20121101" )
         *************************************************************************************************/
        this.gfn_getFirstDate = function (sDate)
        {
        	if (this.gfn_isNull(sDate))
        	{
        		sDate = this.gfn_today();
        	}

        	return sDate.substr(0, 6) + "01";
        };

        /************************************************************************************************
         * Function Name: gfn_getLastDate
         * Description  : 해당월의 마지막 날짜를 yyyyMMdd형태로 구하기
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : string yyyyMMdd형태의 마지막 날짜 ( 예 : "20160225" )
         *************************************************************************************************/
        this.gfn_getLastDate = function (sDate)
        {
        	if (this.gfn_isNull(sDate))
        	{
        		sDate = this.gfn_today();
        	}

        	var nLastDate = this.gfn_getLastDateNum(sDate);

        	return sDate.substr(0, 6) + nLastDate.toString();
        };

        /************************************************************************************************
         * Function Name: gfn_getLastDateNum
         * Description  : 해당월의 마지막 날짜를 숫자로 구하기
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : integer 마지막 날짜 숫자값 ( 예 : "30" )
         *************************************************************************************************/
        this.gfn_getLastDateNum = function (sDate)
        {
        	var nMonth,nLastDate;

        	if (this.gfn_isNull(sDate))
        	{
        		return -1;
        	}

        	nMonth = parseInt(sDate.substr(4, 2), 10);
        	if (nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7 || nMonth == 8 || nMonth == 10 || nMonth == 12)
        	{
        		nLastDate = 31;
        	}
        	else if (nMonth == 2)
        	{
        		if (this.gfn_isLeapYear(sDate) == true)
        		{
        			nLastDate = 29;
        		}
        		else
        		{
        			nLastDate = 28;
        		}
        	}
        	else
        	{
        		nLastDate = 30;
        	}

        	return nLastDate;
        };

        /************************************************************************************************
         * Function Name: gfn_addDate
         * Description  : 입력된 날자에 OffSet 으로 지정된 만큼의 일을 더한다.
         * Arguments    : sDate   - 일자(yyyyMMdd)
         nOffSet - 날짜로부터 증가 감소값. 지정하지 않으면 Default Value = 1 로 적용
         * Return       : string Date에 nOffset이 더해진 결과를 'yyyyMMdd'로 표현된 날자
         *************************************************************************************************/
        this.gfn_addDate = function (sDate, nOffSet)
        {
        	var nYear = parseInt(sDate.substr(0, 4));
        	var nMonth = parseInt(sDate.substr(4, 2));
        	var nDate = parseInt(sDate.substr(6, 2)) + nOffSet;

        	return this.gfn_dateTime(nYear, nMonth, nDate);
        };

        /************************************************************************************************
         * Function Name: gfn_addMonth
         * Description  : 입력된 날자에 OffSet 으로 지정된 만큼의 달을 더한다.
         * Arguments    : sDate  - 일자(yyyyMMdd)
         nOffSet  - 날짜로부터 증가 감소값. 지정하지 않으면 Default Value = 1 로 적용
         * Return       : string Date에 nOffset이 더해진 결과를 'yyyyMMdd'로 표현된 날자
         *************************************************************************************************/
        this.gfn_addMonth = function (sDate, nOffSet)
        {
        	var nYear = parseInt(sDate.substr(0, 4));
        	var nMonth = parseInt(sDate.substr(4, 2)) + nOffSet;
        	var nDate = parseInt(sDate.substr(6, 2));

        	return this.gfn_dateTime(nYear, nMonth, nDate);
        };

        /************************************************************************************************
         * Function Name: gfn_addYear
         * Description  : 입력된 날자에 OffSet 으로 지정된 만큼의 년을 더한다.
         * Arguments    : sDate  - 일자(yyyyMMdd)
         nOffSet  - 날짜로부터 증가 감소값. 지정하지 않으면 Default Value = 1 로 적용
         * Return       : string Date에 nOffset이 더해진 결과를 'yyyyMMdd'로 표현된 날자
         *************************************************************************************************/
        this.gfn_addYear = function (sDate, nOffSet)
        {
        	var nYear = parseInt(sDate.substr(0, 4)) + nOffSet;
        	var nMonth = parseInt(sDate.substr(4, 2));
        	var nDate = parseInt(sDate.substr(6, 2));

        	return this.gfn_dateTime(nYear, nMonth, nDate);
        };

        /*******************************************************************************
         * 함 수 명 	: gf_getOneMonthAfter
         * 함수설명 	: 한달후 날짜 구하는 함수.
         * 입    력 	: strDate(yyyyMMdd형태의 From 일자) ( 예 : "20121122" )
         * 결    과 	: string
         ******************************************************************************/
        function gf_getOneMonthAfter (strDate)
        {
        	if (strDate)
        	{
        		var date = gf_str2Date(strDate);
        		var d = (new Date(date)).addMonth(1);
        	}
        	else
        	{
        		var d = (new Date).addMonth(1);
        	}

        	var s = (new Date(d)).getFullYear()
        		 + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
        		 + (((new Date(d)).getDate()) + "").padLeft(2, '0');

        	return (s);
        }

        /************************************************************************************************
         * Function Name: gfn_dateTime
         * Description  : MiPlatform에서 사용하던 Datetime형식으로 변환 Date Type을 String으로 변환
         * Arguments    : nYear  - nYear (년도)
         nMonth - nMonth (월)
         nDate  - nDate (일)
         * Return       : string 조합한 날짜를 리턴
         *************************************************************************************************/
        this.gfn_dateTime = function (nYear, nMonth, nDate)
        {
        	if (nYear.toString().trim().length >= 5)
        	{
        		var sDate = new String(nYear);
        		var nYear = sDate.substr(0, 4);
        		var nMonth = sDate.substr(4, 2);
        		var nDate = ((sDate.substr(6, 2) == "") ? 1 : sDate.substr(6, 2));
        		var nHours = ((sDate.substr(8, 2) == "") ? 0 : sDate.substr(8, 2));
        		var nMinutes = ((sDate.substr(10, 2) == "") ? 0 : sDate.substr(10, 2));
        		var nSeconds = ((sDate.substr(12, 2) == "") ? 0 : sDate.substr(12, 2));
        		var objDate = new Date(parseInt(nYear), parseInt(nMonth) - 1, parseInt(nDate), parseInt(nHours), parseInt(nMinutes), parseInt(nSeconds));
        	}
        	else
        	{
        		var objDate = new Date(parseInt(nYear), parseInt(nMonth) - 1, parseInt(((nDate == null) ? 1 : nDate)));
        	}

        	var strYear = (objDate.getYear()).toString();
        	var strMonth = (objDate.getMonth() + 1).toString();
        	var strDate = objDate.getDate().toString();

        	if (strYear.length == 1)
        	{
        		strYear = "0" + strYear;
        	}

        	if (strMonth.length == 1)
        	{
        		strMonth = "0" + strMonth;
        	}

        	if (strDate.length == 1)
        	{
        		strDate = "0" + strDate;
        	}

        	return strYear + strMonth + strDate;
        };

        /************************************************************************************************
         * Function Name: gfn_makeDate
         * Description  : 년,월,일 숫자 값을 받아 년월일 string을 리턴한다.
         * Arguments    : nYear  - nYear (년도)
         nMonth - nMonth (월)
         nDate  - 날짜
         * Return       : string
         *************************************************************************************************/
        this.gfn_makeDate = function (nYear, nMonth, nDate)
        {
        	if (this.gfn_isNull(nYear) || this.gfn_isNull(nMonth) || this.gfn_isNull(nDate))
        	{
        		return "";
        	}

        	var objDate = new Date(nYear, nMonth - 1, nDate);
        	var sYear = objDate.getFullYear().toString();
        	var sMonth = this.gfn_right("0" + (objDate.getMonth() + 1), 2);
        	var sDate = this.gfn_right("0" + objDate.getDate(), 2);

        	return sYear + sMonth + sDate;
        };

        /************************************************************************************************
         * Function Name: gfn_getDiffDay
         * Description  : 2개의 날짜간의 Day count
         * Arguments    : sFdate - 시작일자
         sTdate - 종료일자
         * Return       : string 양 일자간의 Day count
         *************************************************************************************************/
        this.gfn_getDiffDay = function (sFdate, sTdate)
        {
        	sFdate = new String(sFdate);
        	sFdate = sFdate.split(" ").join("").split("-").join("").split("/").join("");
        	sTdate = new String(sTdate);
        	sTdate = sTdate.split(" ").join("").split("-").join("").split("/").join("");

        	sFdate = this.gfn_left(sFdate, 8);
        	sTdate = this.gfn_left(sTdate, 8);

        	if (sFdate.length != 8 || sTdate.length != 8
        		 || nexacro.isNumeric(sFdate) == false || nexacro.isNumeric(sTdate) == false
        		 || this.gfn_getDay(sFdate) == -1 || this.gfn_getDay(sTdate) == -1)
        	{
        		return null;
        	}

        	var nDiffDate = this.gfn_strToDate(sTdate) - this.gfn_strToDate(sFdate);
        	var nDay = 1000 * 60 * 60 * 24;

        	nDiffDate = parseInt(nDiffDate / nDay);

        	if (nDiffDate < 0)
        	{
        		nDiffDate = nDiffDate - 1;
        	}
        	else
        	{
        		nDiffDate = nDiffDate + 1;
        	}

        	return nDiffDate;
        };

        /************************************************************************************************
         * Function Name: gfn_getDiffMonth
         * Description  : 두 월간의 차이 월수 계산
         * Arguments    : sFdate - 시작일자
         sTdate - 종료일자
         * Return       : Integer 숫자 형태의 차이월수(sStartDate, sEndDate의 일은 포함하지 않고 계산)
         *************************************************************************************************/
        this.gfn_getDiffMonth = function (sStartDate, sEndDate)
        {
        	var nStartMon,nEndMon;

        	if (this.gfn_isNull(sStartDate) || this.gfn_isNull(sEndDate))
        	{
        		return NaN;
        	}

        	nStartMon = parseInt(sStartDate.substr(0, 4), 10) * 12 + parseInt(sStartDate.substr(4, 2), 10);
        	nEndMon = parseInt(sEndDate.substr(0, 4), 10) * 12 + parseInt(sEndDate.substr(4, 2), 10);

        	return (nEndMon - nStartMon);
        };

        /************************************************************************************************
         * Function Name: gfn_getDay
         * Description  : 입력된 날자로부터 요일을 구함
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : Integer 요일에 따른 숫자
         *************************************************************************************************/
        this.gfn_getDay = function (sDate)
        {
        	var objDate = this.gfn_strToDate(sDate);

        	return objDate.getDay();
        };

        /************************************************************************************************
         * Function Name: gfn_getDayName
         * Description  : 입력된 날자로부터 요일명을 구함
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : string 요일명
         *************************************************************************************************/
        this.gfn_getDayName = function (sDate)
        {
        	var objDayName = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
        	var objDate = this.gfn_getDay(sDate);

        	return objDayName[objDate];
        };

        /************************************************************************************************
         * Function Name: gfn_strToDate
         * Description  : String 타입의 형식을 날짜형식으로 변환
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : Date 날자
         *************************************************************************************************/
        this.gfn_strToDate = function (sDate)
        {
        	var nYear = parseInt(sDate.substr(0, 4));
        	var nMonth = parseInt(sDate.substr(4, 2)) - 1;
        	var nDate = parseInt(sDate.substr(6, 2));

        	return new Date(nYear, nMonth, nDate);
        };

        /************************************************************************************************
         * Function Name: gfn_isLeapYear
         * Description  : 윤년여부 확인
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : boolean
         *************************************************************************************************/
        this.gfn_isLeapYear = function (sDate)
        {
        	var ret;
        	var nY;

        	if (this.gfn_isNull(sDate))
        	{
        		return false;
        	}

        	nY = parseInt(sDate.substring(0, 4), 10);

        	if ((nY % 4) == 0)
        	{
        		if ((nY % 100) != 0 || (nY % 400) == 0)
        		{
        			ret = true;
        		}
        		else
        		{
        			ret = false;
        		}
        	}
        	else
        	{
        		ret = false;
        	}

        	return ret;
        };

        /************************************************************************************************
         * Function Name: gfn_solar2Lunar
         * Description  : 양력을 음력으로 변환해주는 함수 (처리가능 기간  1841 - 2043년)
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : string 음력날자 Flag(1 Byte) + (yyyyMMdd형태의 음력일자)
         ( Flag : 평달 = "0", 윤달 = "1" )
         *************************************************************************************************/
        this.gfn_solar2Lunar = function (sDate)
        {
        	var sMd = "31,0,31,30,31,30,31,31,30,31,30,31";
        	var aMd = new Array();

        	var aBaseInfo = new Array();
        	var aDt = new Array();

        	var td,td1,td2;
        	var mm,m1,m2;
        	var nLy,nLm,nLd;
        	var sLyoon;

        	if (this.gfn_isNull(sDate))
        	{
        		return "";
        	}

        	var sY = parseInt(sDate.substr(0, 4), 10);
        	var sM = parseInt(sDate.substr(4, 2), 10);
        	var sD = parseInt(sDate.substr(6, 2), 10);

        	if (sY < 1841 || sY > 2043)
        	{
        		return "";
        	}

        	aBaseInfo = this._solarBase();
        	aMd = sMd.split(",");

        	if (this.gfn_isLeapYear(sDate) == true)
        	{
        		aMd[1] = 29;
        	}
        	else
        	{
        		aMd[1] = 28;
        	}

        	td1 = 672069; //672069 = 1840 * 365 + 1840/4 - 1840/100 + 1840/400 + 23  //1840년까지 날수
        	td2 = (sY - 1) * 365 + parseInt((sY - 1) / 4) - parseInt((sY - 1) / 100) + parseInt((sY - 1) / 400); //1841년부터 작년까지의 날수

        	// 전월까지의 날수를 더함
        	for (var i = 0; i <= sM - 2; i++)
        	{
        		td2 = td2 + parseInt(aMd[i]);
        	}

        	td2 = td2 + sD; //현재일까지의 날수를 더함
        	td = td2 - td1 + 1; //양력현재일과 음력 1840년까지의 날수의 차이

        	// 1841년부터 음력날수를 계산
        	for (var i = 0; i <= sY - 1841; i++)
        	{
        		aDt[i] = 0;

        		for (var j = 0; j <= 11; j++)
        		{
        			switch (parseInt(aBaseInfo[i * 12 + j]))
        			{
        				case 1:
        					mm = 29;
        					break;
        				case 2:
        					mm = 30;
        					break;
        				case 3:
        					mm = 58; //29 + 29
        					break;
        				case 4:
        					mm = 59; //29 + 30
        					break;
        				case 5:
        					mm = 59; //30 + 29
        					break;
        				case 6:
        					mm = 60; //30 + 30
        					break;
        			}

        			aDt[i] = aDt[i] + mm;
        		}
        	}

        	// 1840년 이후의 년도를 계산 - 현재까지의 일수에서 위에서 계산된 1841년부터의 매년 음력일수를 빼가면수 년도를 계산
        	nLy = 0;

        	do {
        		td = td - aDt[nLy];
        		nLy = nLy + 1;
        	} while (td > aDt[nLy]);

        	nLm = 0;
        	sLyoon = "0"; //현재월이 윤달임을 표시할 변수 - 기본값 평달

        	do {
        		if (parseInt(aBaseInfo[nLy * 12 + nLm]) <= 2)
        		{
        			mm = parseInt(aBaseInfo[nLy * 12 + nLm]) + 28;
        			if (td > mm)
        			{
        				td = td - mm;
        				nLm = nLm + 1;
        			}
        			else
        			{
        				break;
        			}
        		}
        		else
        		{
        			switch (parseInt(aBaseInfo[nLy * 12 + nLm]))
        			{
        				case 3:
        					m1 = 29;
        					m2 = 29;
        					break;
        				case 4:
        					m1 = 29;
        					m2 = 30;
        					break;
        				case 5:
        					m1 = 30;
        					m2 = 29;
        					break;
        				case 6:
        					m1 = 30;
        					m2 = 30;
        					break;
        			}

        			if (td > m1)
        			{
        				td = td - m1;
        				if (td > m2)
        				{
        					td = td - m2;
        					nLm = nLm + 1;
        				}
        				else
        				{
        					sLyoon = "1";
        				}
        			}
        			else
        			{
        				break;
        			}
        		}
        	} while (1);

        	nLy = nLy + 1841;
        	nLm = nLm + 1;
        	nLd = td;

        	return sLyoon + nLy + this.gfn_right("0" + nLm, 2) + this.gfn_right("0" + nLd, 2);
        };

        /************************************************************************************************
         * Function Name: gfn_lunar2Solar
         * Description  : 음력을 양력으로 변환해주는 함수 (처리가능 기간  1841 - 2043년)
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : string yyyyMMdd형태의 양력일자
         *************************************************************************************************/
        this.gfn_lunar2Solar = function (sDate)
        {
        	var sMd = "31,0,31,30,31,30,31,31,30,31,30,31";

        	var aMd = new Array();
        	var aBaseInfo = new Array();

        	var nLy,nLm,nLd,sLflag;
        	var nSy,nSm,nSd;
        	var y1,m1,i,j,y2,y3;
        	var leap;

        	if (this.gfn_isNull(sDate))
        	{
        		return "";
        	}
        	if (sDate.length != 9)
        	{
        		return "";
        	}

        	sLflag = sDate.substr(0, 1);

        	nLy = parseInt(sDate.substr(1, 4), 10);
        	nLm = parseInt(sDate.substr(5, 2), 10);
        	nLd = parseInt(sDate.substr(7, 2), 10);

        	if (nLy < 1841 || nLy > 2043)
        	{
        		return "";
        	}
        	if (sLflag != "0" && sLflag != "1")
        	{
        		return "";
        	}

        	aBaseInfo = this._solarBase();
        	aMd = sMd.split(",");

        	if (this.gfn_isLeapYear(sDate.substr(1, 8)) == true)
        	{
        		aMd[1] = 29;
        	}
        	else
        	{
        		aMd[1] = 28;
        	}

        	y1 = nLy - 1841;
        	m1 = nLm - 1;
        	leap = 0;

        	if (parseInt(aBaseInfo[y1 * 12 + m1]) > 2)
        	{
        		leap = this.gfn_isLeapYear(nLy + "0101");
        	}

        	if (leap == 1)
        	{
        		switch (parseInt(aBaseInfo[y1 * 12 + m1]))
        		{
        			case 3:
        				mm = 29;
        				break;
        			case 4:
        				mm = 30;
        				break;
        			case 5:
        				mm = 29;
        				break;
        			case 6:
        				mm = 30;
        				break;
        		}
        	}
        	else
        	{
        		switch (parseInt(aBaseInfo[y1 * 12 + m1]))
        		{
        			case 1:
        				mm = 29;
        				break;
        			case 2:
        				mm = 30;
        				break;
        			case 3:
        				mm = 29;
        				break;
        			case 4:
        				mm = 29;
        				break;
        			case 5:
        				mm = 30;
        				break;
        			case 6:
        				mm = 30;
        				break;
        		}
        	}

        	td = 0;
        	for (var i = 0; i <= y1 - 1; i++)
        	{
        		for (var j = 0; j <= 11; j++)
        		{
        			switch (parseInt(aBaseInfo[i * 12 + j]))
        			{
        				case 1:
        					td = td + 29;
        					break;
        				case 2:
        					td = td + 30;
        					break;
        				case 3:
        					td = td + 58;
        					break;
        				case 4:
        					td = td + 59;
        					break;
        				case 5:
        					td = td + 59;
        					break;
        				case 6:
        					td = td + 60;
        					break;
        			}
        		}
        	}

        	for (var j = 0; j <= m1 - 1; j++)
        	{
        		switch (parseInt(aBaseInfo[y1 * 12 + j]))
        		{
        			case 1:
        				td = td + 29;
        				break;
        			case 2:
        				td = td + 30;
        				break;
        			case 3:
        				td = td + 58;
        				break;
        			case 4:
        				td = td + 59;
        				break;
        			case 5:
        				td = td + 59;
        				break;
        			case 6:
        				td = td + 60;
        				break;
        		}
        	}

        	if (leap == 1)
        	{
        		switch (parseInt(aBaseInfo[y1 * 12 + m1]))
        		{
        			case 3:
        				mm = 29;
        				break;
        			case 4:
        				mm = 29;
        				break;
        			case 5:
        				mm = 30;
        				break;
        			case 6:
        				mm = 30;
        				break;
        		}
        	}

        	td = td + nLd + 22;

        	if (sLflag == "1")
        	{
        		switch (parseInt(aBaseInfo[y1 * 12 + m1]))
        		{
        			case 3:
        				td = td + 29;
        				break;
        			case 4:
        				td = td + 30;
        				break;
        			case 5:
        				td = td + 29;
        				break;
        			case 6:
        				td = td + 30;
        				break;
        		}
        	}

        	y1 = 1840;

        	do {
        		y1 = y1 + 1;
        		leap = this.gfn_isLeapYear(y1 + "0101");

        		if (leap == 1)
        		{
        			y2 = 366;
        		}
        		else
        		{
        			y2 = 365;
        		}

        		if (td <= y2)
        		{
        			break;
        		}

        		td = td - y2;
        	} while (1);

        	nSy = y1;
        	aMd[1] = y2 - 337;
        	m1 = 0;

        	do {
        		m1 = m1 + 1;
        		if (td <= parseInt(aMd[m1 - 1]))
        		{
        			break;
        		}
        		td = td - parseInt(aMd[m1 - 1]);
        	} while (1);

        	nSm = m1;
        	nSd = td;
        	y3 = nSy;
        	td = y3 * 365 + parseInt(y3 / 4) - parseInt(y3 / 100) + parseInt(y3 / 400);

        	for (var i = 0; i <= nSm - 1; i++)
        	{
        		td = td + parseInt(aMd[i]);
        	}

        	td = td + nSd;

        	return y3 + this.gfn_right("0" + nSm, 2) + this.gfn_right("0" + nSd, 2);
        };

        /************************************************************************************************
         * Function Name: gfn_getHolidays
         * Description  : 양력 nYear에 해당하는 년도의 법정 공휴일(양력) List 모두 구하기
         * Arguments    : nYear  - 년도
         * Return       : Array 공휴일 List Array ==> 각 Array[i]="yyyyMMdd공휴일명" 으로 return
         *************************************************************************************************/
        this.gfn_getHolidays = function (nYear)
        {
        	var nYear;
        	var aHoliday = new Array();

        	if (this.gfn_isNull(nYear))
        	{
        		return aHoliday;
        	}

        	/* ===== 음력 체크 ===== */
        	// 구정
        	aHoliday[0] = this.gfn_lunar2Solar("0" + (nYear - 1) + "1230") + "설날";
        	aHoliday[1] = this.gfn_addDate(aHoliday[0], 1) + "설날";
        	aHoliday[2] = this.gfn_addDate(aHoliday[1], 1) + "설날";

        	// 석가탄신일
        	aHoliday[3] = this.gfn_lunar2Solar("0" + nYear + "0408") + "석가탄신일";

        	// 추석
        	aHoliday[4] = this.gfn_lunar2Solar("0" + nYear + "0814") + "추석";
        	aHoliday[5] = this.gfn_addDate(aHoliday[4], 1) + "추석";
        	aHoliday[6] = this.gfn_addDate(aHoliday[5], 1) + "추석";

        	/* ===== 양력 체크 ===== */
        	aHoliday[7] = nYear + "0101" + "신정";
        	aHoliday[8] = nYear + "0301" + "삼일절";
        	aHoliday[9] = nYear + "0505" + "어린이날";
        	aHoliday[10] = nYear + "0606" + "현충일";
        	aHoliday[11] = nYear + "0815" + "광복절";
        	aHoliday[12] = nYear + "1225" + "성탄절";

        	return aHoliday.sort();
        };

        this.gfn_isHoliday = function (sDate, arrHolidays)
        {
        	for (var i = 0; i < arrHolidays.length; i++)
        	{
        		if (arrHolidays[i].substr(0, 8) == sDate)
        		{
        			return arrHolidays[i].substr(8);
        		}
        	}

        	return "";
        };

        /************************************************************************************************
         * Function Name: _solarBase
         * Description  : 각 월별 음력 기준 정보를 처리하는 함수(처리가능 기간  1841 - 2043년) 단, 내부에서 사용하는 함수
         * Arguments    :
         * Return       : String 음력 기준정보
         *************************************************************************************************/
        this._solarBase = function ()
        {
        	var kk;

        	// 1841
        	kk = "1,2,4,1,1,2,1,2,1,2,2,1,";
        	kk += "2,2,1,2,1,1,2,1,2,1,2,1,";
        	kk += "2,2,2,1,2,1,4,1,2,1,2,1,";
        	kk += "2,2,1,2,1,2,1,2,1,2,1,2,";
        	kk += "1,2,1,2,2,1,2,1,2,1,2,1,";
        	kk += "2,1,2,1,5,2,1,2,2,1,2,1,";
        	kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
        	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
        	kk += "2,1,2,3,2,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,1,2,1,1,2,2,1,2,";

        	// 1851
        	kk += "2,2,1,2,1,1,2,1,2,1,5,2,";
        	kk += "2,1,2,2,1,1,2,1,2,1,1,2,";
        	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
        	kk += "1,2,1,2,1,2,5,2,1,2,1,2,";
        	kk += "1,1,2,1,2,2,1,2,2,1,2,1,";
        	kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
        	kk += "1,2,1,1,5,2,1,2,1,2,2,2,";
        	kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
        	kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
        	kk += "2,1,6,1,1,2,1,1,2,1,2,2,";

        	// 1861
        	kk += "1,2,2,1,2,1,2,1,2,1,1,2,";
        	kk += "2,1,2,1,2,2,1,2,2,3,1,2,";
        	kk += "1,2,2,1,2,1,2,2,1,2,1,2,";
        	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,1,2,4,1,2,2,1,2,2,1,";
        	kk += "2,1,1,2,1,1,2,2,1,2,2,2,";
        	kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
        	kk += "1,2,2,3,2,1,1,2,1,2,2,1,";
        	kk += "2,2,2,1,1,2,1,1,2,1,2,1,";
        	kk += "2,2,2,1,2,1,2,1,1,5,2,1,";

        	// 1871
        	kk += "2,2,1,2,2,1,2,1,2,1,1,2,";
        	kk += "1,2,1,2,2,1,2,1,2,2,1,2,";
        	kk += "1,1,2,1,2,4,2,1,2,2,1,2,";
        	kk += "1,1,2,1,2,1,2,1,2,2,2,1,";
        	kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
        	kk += "2,2,1,1,5,1,2,1,2,2,1,2,";
        	kk += "2,2,1,1,2,1,1,2,1,2,1,2,";
        	kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
        	kk += "2,2,4,2,1,2,1,1,2,1,2,1,";
        	kk += "2,1,2,2,1,2,2,1,2,1,1,2,";

        	// 1881
        	kk += "1,2,1,2,1,2,5,2,2,1,2,1,";
        	kk += "1,2,1,2,1,2,1,2,2,1,2,2,";
        	kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
        	kk += "2,1,1,2,3,2,1,2,2,1,2,2,";
        	kk += "2,1,1,2,1,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
        	kk += "2,2,1,5,2,1,1,2,1,2,1,2,";
        	kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
        	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
        	kk += "1,5,2,1,2,2,1,2,1,2,1,2,";

        	// 1891
        	kk += "1,2,1,2,1,2,1,2,2,1,2,2,";
        	kk += "1,1,2,1,1,5,2,2,1,2,2,2,";
        	kk += "1,1,2,1,1,2,1,2,1,2,2,2,";
        	kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,5,1,2,1,2,1,2,1,";
        	kk += "2,2,2,1,2,1,1,2,1,2,1,2,";
        	kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
        	kk += "2,1,5,2,2,1,2,1,2,1,2,1,";
        	kk += "2,1,2,1,2,1,2,2,1,2,1,2,";
        	kk += "1,2,1,1,2,1,2,5,2,2,1,2,";

        	// 1901
        	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
        	kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
        	kk += "1,2,1,2,3,2,1,1,2,2,1,2,";
        	kk += "2,2,1,2,1,1,2,1,1,2,2,1,";
        	kk += "2,2,1,2,2,1,1,2,1,2,1,2,";
        	kk += "1,2,2,4,1,2,1,2,1,2,1,2,";
        	kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
        	kk += "2,1,1,2,2,1,2,1,2,2,1,2,";
        	kk += "1,5,1,2,1,2,1,2,2,2,1,2,";
        	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";

        	// 1911
        	kk += "2,1,2,1,1,5,1,2,2,1,2,2,";
        	kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
        	kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
        	kk += "2,2,1,2,5,1,2,1,2,1,1,2,";
        	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
        	kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
        	kk += "2,3,2,1,2,2,1,2,2,1,2,1,";
        	kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
        	kk += "1,2,1,1,2,1,5,2,2,1,2,2,";
        	kk += "1,2,1,1,2,1,1,2,2,1,2,2,";

        	// 1921
        	kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
        	kk += "2,1,2,2,3,2,1,1,2,1,2,2,";
        	kk += "1,2,2,1,2,1,2,1,2,1,1,2,";
        	kk += "2,1,2,1,2,2,1,2,1,2,1,1,";
        	kk += "2,1,2,5,2,1,2,2,1,2,1,2,";
        	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
        	kk += "1,5,1,2,1,1,2,2,1,2,2,2,";
        	kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
        	kk += "1,2,2,1,1,5,1,2,1,2,2,1,";

        	// 1931
        	kk += "2,2,2,1,1,2,1,1,2,1,2,1,";
        	kk += "2,2,2,1,2,1,2,1,1,2,1,2,";
        	kk += "1,2,2,1,6,1,2,1,2,1,1,2,";
        	kk += "1,2,1,2,2,1,2,2,1,2,1,2,";
        	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,4,1,2,1,2,1,2,2,2,1,";
        	kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
        	kk += "2,2,1,1,2,1,4,1,2,2,1,2,";
        	kk += "2,2,1,1,2,1,1,2,1,2,1,2,";
        	kk += "2,2,1,2,1,2,1,1,2,1,2,1,";

        	// 1941
        	kk += "2,2,1,2,2,4,1,1,2,1,2,1,";
        	kk += "2,1,2,2,1,2,2,1,2,1,1,2,";
        	kk += "1,2,1,2,1,2,2,1,2,2,1,2,";
        	kk += "1,1,2,4,1,2,1,2,2,1,2,2,";
        	kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
        	kk += "2,1,1,2,1,1,2,1,2,2,1,2,";
        	kk += "2,5,1,2,1,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
        	kk += "2,2,1,2,1,2,3,2,1,2,1,2,";
        	kk += "2,1,2,2,1,2,1,1,2,1,2,1,";

        	// 1951
        	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
        	kk += "1,2,1,2,4,2,1,2,1,2,1,2,";
        	kk += "1,2,1,1,2,2,1,2,2,1,2,2,";
        	kk += "1,1,2,1,1,2,1,2,2,1,2,2,";
        	kk += "2,1,4,1,1,2,1,2,1,2,2,2,";
        	kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,2,1,1,5,2,1,2,2,";
        	kk += "1,2,2,1,2,1,1,2,1,2,1,2,";
        	kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
        	kk += "2,1,2,1,2,5,2,1,2,1,2,1,";

        	// 1961
        	kk += "2,1,2,1,2,1,2,2,1,2,1,2,";
        	kk += "1,2,1,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,2,3,2,1,2,1,2,2,2,1,";
        	kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
        	kk += "1,2,1,2,1,1,2,1,1,2,2,1,";
        	kk += "2,2,5,2,1,1,2,1,1,2,2,1,";
        	kk += "2,2,1,2,2,1,1,2,1,2,1,2,";
        	kk += "1,2,2,1,2,1,5,2,1,2,1,2,";
        	kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
        	kk += "2,1,1,2,2,1,2,1,2,2,1,2,";

        	// 1971
        	kk += "1,2,1,1,5,2,1,2,2,2,1,2,";
        	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
        	kk += "2,1,2,1,1,2,1,1,2,2,2,1,";
        	kk += "2,2,1,5,1,2,1,1,2,2,1,2,";
        	kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
        	kk += "2,2,1,2,1,2,1,5,2,1,1,2,";
        	kk += "2,1,2,2,1,2,1,2,1,2,1,1,";
        	kk += "2,2,1,2,1,2,2,1,2,1,2,1,";
        	kk += "2,1,1,2,1,6,1,2,2,1,2,1,";
        	kk += "2,1,1,2,1,2,1,2,2,1,2,2,";

        	// 1981
        	kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
        	kk += "2,1,2,3,2,1,1,2,2,1,2,2,";
        	kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
        	kk += "2,1,2,2,1,1,2,1,1,5,2,2,";
        	kk += "1,2,2,1,2,1,2,1,1,2,1,2,";
        	kk += "1,2,2,1,2,2,1,2,1,2,1,1,";
        	kk += "2,1,2,2,1,5,2,2,1,2,1,2,";
        	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
        	kk += "1,2,1,1,5,1,2,1,2,2,2,2,";

        	// 1991
        	kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
        	kk += "1,2,2,1,1,2,1,1,2,1,2,2,";
        	kk += "1,2,5,2,1,2,1,1,2,1,2,1,";
        	kk += "2,2,2,1,2,1,2,1,1,2,1,2,";
        	kk += "1,2,2,1,2,2,1,5,2,1,1,2,";
        	kk += "1,2,1,2,2,1,2,1,2,2,1,2,";
        	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,1,2,3,2,2,1,2,2,2,1,";
        	kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
        	kk += "2,2,1,1,2,1,1,2,1,2,2,1,";

        	// 2001
        	kk += "2,2,2,3,2,1,1,2,1,2,1,2,";
        	kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
        	kk += "2,2,1,2,2,1,2,1,1,2,1,2,";
        	kk += "1,5,2,2,1,2,1,2,2,1,1,2,";
        	kk += "1,2,1,2,1,2,2,1,2,2,1,2,";
        	kk += "1,1,2,1,2,1,5,2,2,1,2,2,";
        	kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
        	kk += "2,1,1,2,1,1,2,1,2,2,1,2,";
        	kk += "2,2,1,1,5,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";

        	// 2011
        	kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
        	kk += "2,1,6,2,1,2,1,1,2,1,2,1,";
        	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
        	kk += "1,2,1,2,1,2,1,2,5,2,1,2,";
        	kk += "1,2,1,1,2,1,2,2,2,1,2,2,";
        	kk += "1,1,2,1,1,2,1,2,2,1,2,2,";
        	kk += "2,1,1,2,3,2,1,2,1,2,2,2,";
        	kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
        	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
        	kk += "2,1,2,5,2,1,1,2,1,2,1,2,";

        	// 2021
        	kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
        	kk += "2,1,2,1,2,2,1,2,1,2,1,2,";
        	kk += "1,5,2,1,2,1,2,2,1,2,1,2,";
        	kk += "1,2,1,1,2,1,2,2,1,2,2,1,";
        	kk += "2,1,2,1,1,5,2,1,2,2,2,1,";
        	kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
        	kk += "1,2,1,2,1,1,2,1,1,2,2,2,";
        	kk += "1,2,2,1,5,1,2,1,1,2,2,1,";
        	kk += "2,2,1,2,2,1,1,2,1,1,2,2,";
        	kk += "1,2,1,2,2,1,2,1,2,1,2,1,";

        	// 2031
        	kk += "2,1,5,2,1,2,2,1,2,1,2,1,";
        	kk += "2,1,1,2,1,2,2,1,2,2,1,2,";
        	kk += "1,2,1,1,2,1,5,2,2,2,1,2,";
        	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
        	kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
        	kk += "2,2,1,2,1,4,1,1,2,1,2,2,";
        	kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
        	kk += "2,2,1,2,1,2,1,2,1,1,2,1,";
        	kk += "2,2,1,2,5,2,1,2,1,2,1,1,";
        	kk += "2,1,2,2,1,2,2,1,2,1,2,1,";

        	// 2041
        	kk += "2,1,1,2,1,2,2,1,2,2,1,2,";
        	kk += "1,5,1,2,1,2,1,2,2,2,1,2,";
        	kk += "1,2,1,1,2,1,1,2,2,1,2,2";

        	var arr = new Array();
        	arr = kk.split(",");

        	return arr;
        };

        /************************************************************************************************
         * Function Name: gfn_getClientDate
         * Description  : 오늘 날짜를 가져오는 함수(클라이언트 PC기준)
         * Arguments    : value : 리턴할 값을 지정(YYYY, MM, DD, HH, HH24, MI, SS, MIL)
         * Return       : String
         *************************************************************************************************/
        this.gfn_getClientDate = function (value)
        {
        	var date = new Date();

        	if (value.indexOf("YYYY") >= 0)
        	{
        		value = value.replace(/YYYY/g, date.getFullYear());
        	}

        	if (value.indexOf("MM") >= 0)
        	{
        		value = value.replace(/MM/g, (date.getMonth() + 1).toString().padLeft(2, "0"));
        	}

        	if (value.indexOf("DD") >= 0)
        	{
        		value = value.replace(/DD/g, date.getDate().toString().padLeft(2, "0"));
        	}

        	if (value.indexOf("HH24") >= 0)
        	{
        		value = value.replace(/HH24/g, date.getHours().toString().padLeft(2, "0"));
        	}

        	if (value.indexOf("HH") >= 0)
        	{
        		value = value.replace(/HH/g, (date.getHours() % 12).toString().padLeft(2, "0"));
        	}

        	if (value.indexOf("MI") >= 0)
        	{
        		value = value.replace(/MI/g, date.getMinutes().toString().padLeft(2, "0"));
        	}

        	if (value.indexOf("SS") >= 0)
        	{
        		value = value.replace(/SS/g, date.getSeconds().toString().padLeft(2, "0"));
        	}

        	if (value.indexOf("MIL") >= 0)
        	{
        		value = value.replace(/MIL/g, date.getMilliseconds().toString().padLeft(3, "0"));
        	}

        	if (value.indexOf("TIME") >= 0)
        	{
        		value = value.replace(/TIME/g, date.getTime().toString().padLeft(3, "0"));
        	}

        	return value;
        };

        /************************************************************************************************
         * Function Name: gfn_clock
         * Description  : Time processing
         * Arguments    : 없음
         * Return       : Date Time
         *************************************************************************************************/
        this.gfn_clock = function ()
        {
        	var sDateStr = this.gfn_todayTime();

        	var hh = sDateStr.substr(8, 2);
        	var mi = sDateStr.substr(10, 2);
        	var ss = sDateStr.substr(12, 2);
        	return hh + ":" + mi + ":" + ss;
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
