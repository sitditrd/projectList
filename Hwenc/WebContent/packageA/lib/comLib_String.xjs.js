//XJS=comLib_String.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /************************************************************************************************
         * Name     : comLib_String.xjs
         * Title    : String 관련 함수
         * Desc     : String 관련 함수
         * 작성자	: 투비소프트
         * 작성일	: 2018-04-05
         *************************************************************************************************
         *      수정일          이름          사유
         *************************************************************************************************
         *    2018.04.05        투비소프트       최초작성
         ************************************************************************************************/

        /************************************************************************************************
         ● gfn_isNull          : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         ● gfn_isEmpty         : 입력값이 Null이거나 빈값인지 체크한다.
         ● gfn_isNotNull       : Null값 아닌지 여부
         ● gfn_isNullThenEmpty : 검증할 값이 Null일 경우에 ""(Empty-공백)을 반환한다.
         ● gfn_nvl             : 입력값이 존재하는지를 판단하여
                                  존재하는 경우 입력값을 그대로 반환, 그렇지 않으면
                                  두 번째 파라미터를 반환하는 함수
         ● gfn_toString        : 입력값을 String으로 변경한다.
         ● gfn_subStr          : 지정한 위치에서 시작하고 지정한 길이를 갖는 부분 문자열을 반환하는 함수
         ● gfn_length          : 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
         ● gfn_right           : 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
         ● gfn_left            : 문자열의 왼쪽부분을 지정한 길이만큼 Return 한다.
         ● gfn_replace         : 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
         ● gfn_setComma        : 숫자에 ","를 집어넣기
         ● gfn_split           : 특정 문자열을 기준으로 전체 문자열을 나누어서 하나의 배열(Array)로 만들어 반납하는 함수
         ● gfn_getFormat       : 문자 포맷 형식 변환 ( 해당 문자는 포맷에서 @ 사용)
         ● gfn_strToArr        : String을 쪼개어 Array로 만드는 함수
         ● gfn_indexOf         : 전체 문자열 중 특정 문자열이 포함된 위치를 반납
         ● gfn_pos             : 문자열의 위치를 대소문자 구별하여 찾는다
         ● gfn_posCase         : 문자열의 위치를 대소문자 구별없이 찾는다
         ● gfn_posReverse      : 문자열의 위치를 대소문자 구별하여 거꾸로 찾는다
         ● gfn_mid             : 시작글자와 끝글자에 해당하는 글자의 사이에 있는 가운데 글자를 대소문자를 구별하여 찾는다.
         ● gfn_midCase         : 시작글자와 끝글자에 해당하는 글자의 사이에 있는 가운데 글자를 대소문자를 구별없이 찾는다.
         ● gfn_midArray        : gfn_mid 함수와 동일하나 Return을 Array로 한다.
         ● gfn_midCaseArray    : gfn_midCase 함수와 동일하나 Return을 Array로 한다.
         ● gfn_trim            : 대소문자 구별하여 왼쪽, 오른쪽 문자열 삭제
         ● gfn_lTrim           : 대소문자 구별하여 왼쪽에서 문자열 삭제
         ● gfn_lTrimCase       : 대소문자 구별없이 왼쪽에서 문자열 삭제
         ● gfn_rTrim           : 소문자 구별하여 오른쪽에서 문자열 삭제
         ● gfn_rTrimCase       : 대소문자 구별없이 오른쪽에서 문자열 삭제
         ● gfn_lPad            : 자리수 만큼 왼쪽에 문자열 추가
         ● gfn_rPad            : 자리수 만큼 오른쪽에 문자열 추가
         ● gfn_strCount        : 대소문자 구별하여 문자개수 세기
         ● gfn_strCountCase    : 대소문자 구분없이 문자개수 세기
         ● gfn_htmlToChars     : html형식의 문자열에서 태그문자를 특수문자로 변형
         ● gfn_specToChars     : 특수문자가 들어있는 문자열에서 html형식의 문자로 변형
         ● gfn_lengthChk       : 제한된 글자 수를 체크하여 ... 표시
         *************************************************************************************************/

        /************************************************************************************************
         * Function Name : gfn_isNull
         * Description   : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * Arguments     : sValue - 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
         * Return        : Boolean sValue이 undefined, null, NaN, "", Array.length = 0인 경우 true
         *************************************************************************************************/
        this.gfn_isNull = function (sValue)
        {
        	if (new String(sValue).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (sValue == null)
        	{
        		return true;
        	}

        	var v_ChkStr = new String(sValue);

        	if (v_ChkStr == null)
        	{
        		return true;
        	}
        	if (v_ChkStr.toString().length == 0)
        	{
        		return true;
        	}

        	return false;
        };

        /************************************************************************************************
         * Function Name : gfn_isEmpty
         * Description   : 입력값이 Null이거나 빈값인지 체크한다.
         * Arguments     : sValue - 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
         * Return        : Boolean sValue이 undefined, null, NaN, "", Array.length = 0인 경우 true
         *************************************************************************************************/
        this.gfn_isEmpty = function (sValue)
        {
        	return this.gfn_isNull(sValue);
        };

        /************************************************************************************************
         * Function Name: gfn_isNullThen
         * Description  : Null값 아닌지 여부
         * Arguments    : String 검증할 값
         * Return       : Boolean
         *************************************************************************************************/
        this.gfn_isNotNull = function (value)
        {
        	if (this.gfn_isNull(value))
        	{
        		return false;
        	}
        	else
        	{
        		return true;
        	}
        };

        /************************************************************************************************
         * Function Name: gfn_isNullThenEmpty
         * Description  : 검증할 값이 Null일 경우에 ""(Empty-공백)을 반환한다.
         * Arguments    : sValue
         * Return       : true / false
         *************************************************************************************************/
        this.gfn_isNullThenEmpty = function (sValue)
        {
        	if (this.gfn_isNull(sValue))
        	{
        		return "";
        	}
        	else
        	{
        		return sValue;
        	}
        };

        /************************************************************************************************
         * Function Name: gfn_nvl
         * Description  : 입력값이 존재하는지를 판단하여
         존재하는 경우 입력값을 그대로 반환, 그렇지 않으면 두 번째 파라미터를 반환하는 함수
         * Arguments    : Val - 입력값
         newVal - Null일 경우 대체할 값
         * Return       : Null을 대치한 값
         *************************************************************************************************/
        this.gfn_nvl = function (Val, newVal)
        {
        	if (this.gfn_isNull(Val))
        	{
        		if (this.gfn_isNull(newVal))
        		{
        			newVal = "";
        		}
        		return newVal;
        	}

        	return Val;
        };

        /************************************************************************************************
         * Function Name: gfn_toString
         * Description  : 입력값을 String으로 변경
         * Arguments    : Val - 문자열
         * Return       : String 문자열
         *************************************************************************************************/
        this.gfn_toString = function (Val)
        {
        	if (this.gfn_isNull(Val))
        	{
        		return new String();
        	}

        	return new String(Val);
        };

        /************************************************************************************************
         * Function Name: gfn_subStr
         * Description  : 지정한 위치에서 시작하고 지정한 길이를 갖는 부분 문자열을 반환하는 함수
         * Arguments    : strString - 가운데 부문을 얻어올 원본 문자열
         nIndex    - 얻어올 첫 글자의 Index
         nSize     - Integer 얻어올 글자수 [Default length(해당 개채의 길이)]
         * Return       : String 문자열
         *************************************************************************************************/
        this.gfn_subStr = function (strString, nIndex, nSize)
        {
        	var retVal = "";
        	var arrArgument = this.gfn_subStr.arguments;

        	if (arrArgument.length >= 1)
        	{
        		strString = arrArgument[0];
        	}

        	if (arrArgument.length >= 2)
        	{
        		nIndex = parseInt(arrArgument[1], 10);
        	}

        	if (arrArgument.length >= 3)
        	{
        		nSize = parseInt(arrArgument[2], 10);
        	}
        	else
        	{
        		nSize = this.gfn_length(arrArgument[0]);
        	}

        	if (!this.gfn_isNull(strString))
        	{
        		retVal = strString.substr(nIndex, nSize);
        	}

        	return retVal;
        };

        /************************************************************************************************
         * Function Name: gfn_length
         * Description  : 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
         * Arguments    : Val - 문자열
         * Return       : Integer Type에 따라 구해진 길이
         *************************************************************************************************/
        this.gfn_length = function (Val)
        {
        	return this.gfn_toString(Val).length;
        };

        /************************************************************************************************
         * Function Name: gfn_right
         * Description  : 문자열의 오른쪽부분을 지정한 길이만큼 Return
         * Arguments    : Val - 오른 부분을 얻어올 원본 문자열
         nSize - 얻어올 크기. [Default Value = 0]
         * Return       : String 문자열
         *************************************************************************************************/
        this.gfn_right = function (Val, nSize)
        {
        	var nStart = this.gfn_toString(Val).length;
        	var nEnd = Number(nStart) - Number(nSize);
        	var rtnVal = Val.substring(nStart, nEnd);

        	return rtnVal;
        };

        /************************************************************************************************
         * Function Name: gfn_left
         * Description  : 문자열의 왼쪽부분을 지정한 길이만큼 Return
         * Arguments    : Val - 왼쪽 부분을 얻어올 원본 문자열
         nSize - 얻어올 크기. [Default Value = 0]
         * Return       : String 문자열
         *************************************************************************************************/
        this.gfn_left = function (Val, nSize)
        {
        	return this.gfn_toString(Val).substr(0, nSize);
        };

        /************************************************************************************************
         * Function Name: gfn_replace
         * Description  : 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
         * Arguments    : Val - 원본 문자열
         strOld - 원본 문자열에서 찾을 문자열
         strNew - 새로 바꿀 문자열
         * Return       : String 문자열
         *************************************************************************************************/
        this.gfn_replace = function (Val, strOld, strNew)
        {
        	var varRtnValue = "";
        	var arrArgument = this.gfn_replace.arguments;

        	if (this.gfn_isNull(arrArgument[0]))
        	{
        		return varRtnValue;
        	}

        	varRtnValue = arrArgument[0].toString().replace(arrArgument[1], arrArgument[2]);

        	return varRtnValue;
        };

        /************************************************************************************************
         * Function Name: gfn_setComma
         * Description  : 입력된 문자를 정부부분에 "," 를 집어넣기
         * Arguments    : strNumber - 문자열로 출력할 문자
         * Return       : String 정수부분에 3자리마다 ',' 가 삽입된 문자열
         *************************************************************************************************/
        this.gfn_setComma = function (strNumber)
        {
        	var strNumber = strNumber.toString();
        	var grouping = "\\3";
        	var thousands_sep = ",";

        	if (thousands_sep.length > 0)
        	{
        		var dec_buf = strNumber.split(""),dec_size = strNumber.length,out_size = (thousands_sep.length + 1) * strNumber.length,out_buf = [],cur_group = 0,d_size = dec_size,endpos = out_size,groupingIdx = 0,g;

        		grouping = grouping.split("");

        		while (grouping[groupingIdx] && d_size > 0)
        		{
        			g = grouping[groupingIdx];

        			if (g == "\\")
        			{
        				groupingIdx++;
        				g = parseInt(grouping[groupingIdx]);
        			}

        			if (g > 0)
        			{
        				cur_group = g;
        				while (g-- > 0 && d_size > 0)
        				{
        					out_buf[--endpos] = dec_buf[--d_size];
        				}

        				if (d_size > 0)
        				{
        					out_buf[--endpos] = thousands_sep;
        				}
        			}
        			else if (g == 0 && d_size > cur_group)
        			{
        				g = cur_group;

        				while (g-- > 0)
        				{
        					out_buf[--endpos] = dec_buf[--d_size];
        				}

        				if (d_size > 0)
        				{
        					out_buf[--endpos] = thousands_sep;
        				}
        			}
        			else if (g == 0 && d_size <= cur_group && d_size > 0)
        			{
        				g = d_size;

        				while (g-- > 0)
        				{
        					out_buf[--endpos] = dec_buf[--d_size];
        				}
        			}
        			else
        			{
        				break;
        			}
        		}

        		return out_buf.slice(endpos, out_size + endpos).join("");
        	}

        	return strNumber;
        };

        /************************************************************************************************
         * Function Name: gfn_split
         * Description  : 특정 문자열을 기준으로 전체 문자열을 나누어서 하나의 배열(Array)로 만들어 반납하는 함수
         * Arguments    :
         * Return       : Array 1 차원 배열
         *************************************************************************************************/
        this.gfn_split = function ()
        {
        	var rtnArr = new Array();
        	var arrArgument = this.gfn_split.arguments;

        	if (arrArgument.length < 1)
        	{
        	}
        	else if (arrArgument.length < 2)
        	{
        		if (!this.gfn_isNull(arrArgument[0]))
        		{
        			rtnArr[0] = arrArgument[0];
        		}
        	}
        	else if (arrArgument.length == 2)
        	{
        		if (!this.gfn_isNull(arrArgument[0]))
        		{
        			rtnArr = arrArgument[0].toString().split(arrArgument[1]);
        		}
        	}

        	return rtnArr;
        };

        /************************************************************************************************
         * Function Name: gfn_getFormat
         * Description  : 문자 포맷 형식 변환 ( 해당 문자는 포맷에서 @ 사용)
         * Arguments    : Val - 문자열
         strMask - 문자열 포맷, (@:문자, 포맷스트링("-", ",", ".")등
         * Return       : String 포맷된 문자
         *************************************************************************************************/
        this.gfn_getFormat = function (Val, strMask)
        {
        	var strRetVal = "";
        	var sUnit;

        	if (this.gfn_isNull(Val))
        	{
        		return "";
        	}

        	Val = this.gfn_toString(Val);

        	for (var i = 0; i < strMask.length; i++)
        	{
        		sUnit = strMask.substr(i, 1);

        		if (sUnit == "@")
        		{
        			strRetVal += Val.substr(0, 1);
        			Val = Val.substr(1);
        		}
        		else
        		{
        			strRetVal += sUnit;
        		}
        	}

        	return strRetVal;
        };

        /************************************************************************************************
         * Function Name: gfn_strToArr
         * Description  : String을 쪼개어 Array로 만드는 함수
         * Arguments    : sString - 문자열
         nSize   -  길이
         * Return       : 지정한 길이만큼 잘라서 만들어진 배열 ex) fn_strToArr("XPLATFORM", 3)
         *************************************************************************************************/
        this.gfn_strToArr = function (sString, nSize)
        {
        	if (nSize == null)
        	{
        		nSize = 0;
        	}
        	else
        	{
        		nSize = Number(nSize);
        	}

        	var arrArray = new Array();

        	for (var i = 0; i < sString.length; i += nSize)
        	{
        		arrArray.push(sString.substr(i, nSize));
        	}

        	return arrArray;
        };

        /************************************************************************************************
         * Function Name: gfn_indexOf
         * Description  : 전체 문자열 중 특정 문자열이 포함된 위치를 반납
         * Arguments    : Val - 원본 문자열
         strOld - 검사할 문자열
         index  - 시작순서
         * Return       : Integer 문자열이 포함된 위치의 index값
         *************************************************************************************************/
        this.gfn_indexOf = function (Val, strOld, index)
        {
        	if (this.gfn_isNull(index))
        	{
        		index = 0;
        	}

        	return this.gfn_toString(Val).indexOf(strOld, index);
        };

        /************************************************************************************************
         * Function Name: gfn_pos
         * Description  : 문자열의 위치를 대소문자 구별하여 찾는다
         * Arguments    : sOrg   - 원래 문자열
         sFind  - 찾고자 하는 문자열
         nStart - 검색 시작위치 (옵션 : Default=0)
         * Return       : Integer 찾고자 하는 문자열의 시작위치
         *************************************************************************************************/
        this.gfn_pos = function (sOrg, sFind, nStart)
        {
        	if (this.gfn_isNull(sOrg) || this.gfn_isNull(sFind))
        	{
        		return -1;
        	}

        	if (this.gfn_isNull(nStart))
        	{
        		nStart = 0;
        	}

        	return sOrg.indexOf(sFind, nStart);
        };

        /************************************************************************************************
         * Function Name: gfn_posCase
         * Description  : 문자열의 위치를 대소문자 구별없이 찾는다
         * Arguments    : sOrg   - 원래 문자열
         sFind  - 찾고자 하는 문자열
         nStart - 검색 시작위치 (옵션 : Default=0)
         * Return       : Integer 찾고자 하는 문자열의 시작위치
         *************************************************************************************************/
        this.gfn_posCase = function (sOrg, sFind, nStart)
        {
        	if (this.gfn_isNull(sOrg) || this.gfn_isNull(sFind))
        	{
        		return -1;
        	}

        	if (this.gfn_isNull(nStart))
        	{
        		nStart = 0;
        	}

        	return sOrg.toLowerCase().indexOf(sFind.toLowerCase(), nStart);
        };

        /************************************************************************************************
         * Function Name: gfn_posReverse
         * Description  : 문자열의 위치를 대소문자 구별하여 거꾸로 찾는다
         * Arguments    : sOrg   - 원래 문자열
         sFind  - 찾고자 하는 문자열( 예 : "bb" )
         nStart - 검색 시작위치 (옵션 : Default=문자열의 끝 )
         * Return       : Integer 찾고자 하는 문자열의 시작위치
         *************************************************************************************************/
        this.gfn_posReverse = function (sOrg, sFind, nStart)
        {
        	var pos;

        	if (this.gfn_isNull(sOrg) || this.gfn_isNull(sFind))
        	{
        		return -1;
        	}

        	if (this.gfn_isNull(nStart))
        	{
        		nStart = sOrg.length - 1;
        	}

        	for (pos = nStart; pos >= 0; pos--)
        	{
        		if (sOrg.substr(pos, sFind.length) == sFind)
        		{
        			break;
        		}
        	}

        	return pos;
        };

        /************************************************************************************************
         * Function Name: gfn_mid
         * Description  : 시작글자와 끝글자에 해당하는 글자의 사이에 있는 가운데 글자를 대소문자를 구별하여 찾는다.
         ( 예 : aaBBbbccdd에서 bb, dd사이의 글자 cc를 찾는다 )
         * Arguments    : sOrg   - 원래 문자열
         sStart - 찾고자 하는 시작 문자열(옵션 : Default = "")
         sEnd   - 찾고자 하는 끝 문자열 (옵션 : Default = "")
         nStart - 검색 시작위치 (옵션 : Default=0)
         * Return       : String 가운데 글자
         *************************************************************************************************/
        this.gfn_mid = function (sOrg, sStart, sEnd, nStart)
        {
        	var pos_start,pos_end,ret_str;

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}

        	if (this.gfn_isNull(sStart))
        	{
        		sStart = "";
        	}

        	if (this.gfn_isNull(sEnd))
        	{
        		sEnd = "";
        	}

        	if (this.gfn_isNull(nStart))
        	{
        		nStart = 0;
        	}

        	if (sStart == "")
        	{
        		pos_start = nStart;
        	}
        	else
        	{
        		pos_start = this.gfn_pos(sOrg, sStart, nStart);

        		if (pos_start < 0)
        		{
        			return "";
        		}
        	}

        	if (sEnd == "")
        	{
        		pos_end = sOrg.length;
        	}
        	else
        	{
        		pos_end = this.gfn_pos(sOrg, sEnd, pos_start + sStart.length, nStart);

        		if (pos_end < 0)
        		{
        			return "";
        		}
        	}

        	return sOrg.substring(pos_start + sStart.length, pos_end);
        };

        /************************************************************************************************
         * Function Name: gfn_midCase
         * Description  : 시작글자와 끝글자에 해당하는 글자의 사이에 있는 가운데 글자를 대소문자 구별없이 찾는다.
         ( 예 : aaBBbbccdd에서 bb, dd사이의 글자 cc를 찾는다 )
         * Arguments    : sOrg   - 원래 문자열
         sStart - 찾고자 하는 시작 문자열(옵션 : Default = "")
         sEnd   - 찾고자 하는 끝 문자열 (옵션 : Default = "")
         nStart - 검색 시작위치 (옵션 : Default=0)
         * Return       : String 가운데 글자
         *************************************************************************************************/
        this.gfn_midCase = function (sOrg, sStart, sEnd, nStart)
        {
        	var pos_start,pos_end,ret_str;

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}

        	if (this.gfn_isNull(sStart))
        	{
        		sStart = "";
        	}

        	if (this.gfn_isNull(sEnd))
        	{
        		sEnd = "";
        	}

        	if (this.gfn_isNull(nStart))
        	{
        		nStart = 0;
        	}

        	if (sStart == "")
        	{
        		pos_start = nStart;
        	}
        	else
        	{
        		pos_start = this.gfn_posCase(sOrg, sStart, nStart);

        		if (pos_start < 0)
        		{
        			return "";
        		}
        	}

        	if (sEnd == "")
        	{
        		pos_end = sOrg.length;
        	}
        	else
        	{
        		pos_end = this.gfn_posCase(sOrg, sEnd, pos_start + sStart.length, nStart);

        		if (pos_end < 0)
        		{
        			return "";
        		}
        	}

        	return sOrg.substring(pos_start + sStart.length, pos_end);
        };

        /************************************************************************************************
         * Function Name: gfn_midArray
         * Description  : 시작글자와 끝글자에 해당하는 글자의 사이에 있는 가운데 글자를 대소문자를 구별하여 찾는다.
         this.gfn_mid()함수와 동일하나 Return을 Array로 한다.
         * Arguments    : sOrg   - 원래 문자열
         sStart - 찾고자 하는 시작 문자열(옵션 : Default = "")
         sEnd   - 찾고자 하는 끝 문자열 (옵션 : Default = "")
         nStart - 검색 시작위치 (옵션 : Default=0)
         * Return       : Array  Array[0] = 가운데 글자
         Array[1] = sStart의 위치
         Array[2] = sEnd의 위치
         *************************************************************************************************/
        this.gfn_midArray = function (sOrg, sStart, sEnd, nStart)
        {
        	var pos_start,pos_end,ret_str;
        	var arr = new Array("", -1, -1);

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}

        	if (this.gfn_isNull(sStart))
        	{
        		sStart = "";
        	}

        	if (this.gfn_isNull(sEnd))
        	{
        		sEnd = "";
        	}

        	if (this.gfn_isNull(nStart))
        	{
        		nStart = 0;
        	}

        	if (sStart == "")
        	{
        		pos_start = nStart;
        	}
        	else
        	{
        		pos_start = this.gfn_pos(sOrg, sStart, nStart);

        		if (pos_start < 0)
        		{
        			return arr;
        		}
        	}

        	if (sEnd == "")
        	{
        		pos_end = sOrg.length;
        	}
        	else
        	{
        		pos_end = this.gfn_pos(sOrg, sEnd, pos_start + sStart.length, nStart);

        		if (pos_end < 0)
        		{
        			return arr;
        		}
        	}

        	arr[0] = sOrg.substring(pos_start + sStart.length, pos_end);
        	arr[1] = pos_start;
        	arr[2] = pos_end;

        	return arr;
        };

        /************************************************************************************************
         * Function Name: gfn_midCaseArray
         * Description  : 시작글자와 끝글자에 해당하는 글자의 사이에 있는 가운데 글자를 대소문자를 구별없이 찾는다.
         this.gfn_midCase()함수와 동일하나 Return을 Array로 한다.
         * Arguments    : sOrg   - 원래 문자열
         sStart - 찾고자 하는 시작 문자열(옵션 : Default = "")
         sEnd   - 찾고자 하는 끝 문자열 (옵션 : Default = "")
         nStart - 검색 시작위치 (옵션 : Default=0)
         * Return       : Array  Array[0] = 가운데 글자
         Array[1] = sStart의 위치
         Array[2] = sEnd의 위치
         *************************************************************************************************/
        this.gfn_midCaseArray = function (sOrg, sStart, sEnd, nStart)
        {
        	var pos_start,pos_end,ret_str;
        	var arr = new Array("", -1, -1);

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}

        	if (this.gfn_isNull(sStart))
        	{
        		sStart = "";
        	}

        	if (this.gfn_isNull(sEnd))
        	{
        		sEnd = "";
        	}

        	if (this.gfn_isNull(nStart))
        	{
        		nStart = 0;
        	}

        	if (sStart == "")
        	{
        		pos_start = nStart;
        	}
        	else
        	{
        		pos_start = this.gfn_posCase(sOrg, sStart, nStart);

        		if (pos_start < 0)
        		{
        			return arr;
        		}
        	}

        	if (sEnd == "")
        	{
        		pos_end = sOrg.length;
        	}
        	else
        	{
        		pos_end = this.gfn_posCase(sOrg, sEnd, pos_start + sStart.length, nStart);

        		if (pos_end < 0)
        		{
        			return arr;
        		}
        	}

        	arr[0] = sOrg.substring(pos_start + sStart.length, pos_end);
        	arr[1] = pos_start;
        	arr[2] = pos_end;

        	return arr;
        };

        /************************************************************************************************
         * Function Name: gfn_trim
         * Description  : 대소문자 구별하여 왼쪽, 오른쪽 문자열 삭제
         * Arguments    : sOrg   - 원래 문자열
         sTrim  - Trim할 문자열(옵션 : Default=" ")
         * Return       : String Trim된 문자열
         *************************************************************************************************/
        this.gfn_trim = function (sOrg, sTrim)
        {
        	var rtnVal = "";
        	if (this.gfn_isNull(sTrim))
        	{
        		sTrim = " ";
        	}

        	rtnVal = this.gfn_rTrim(sOrg, sTrim);
        	rtnVal = this.gfn_lTrim(rtnVal, sTrim);

        	return rtnVal;
        };

        /************************************************************************************************
         * Function Name: gfn_lTrim
         * Description  : 대소문자 구별하여 왼쪽에서 문자열 삭제
         * Arguments    : sOrg   - 원래 문자열
         sTrim  - Trim할 문자열(옵션 : Default=" ")
         * Return       : String Trim된 문자열
         *************************************************************************************************/
        this.gfn_lTrim = function (sOrg, sTrim)
        {
        	var chk,pos;

        	sOrg = this.gfn_toString(sOrg);

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}

        	if (this.gfn_isNull(sTrim))
        	{
        		sTrim = " ";
        	}

        	for (pos = 0; pos < sOrg.length; pos += sTrim.length)
        	{
        		if (sOrg.substr(pos, sTrim.length) != sTrim)
        		{
        			break;
        		}
        	}

        	return sOrg.substr(pos);
        };

        /************************************************************************************************
         * Function Name: gfn_lTrimCase
         * Description  : 대소문자 구별없이 왼쪽에서 문자열 삭제
         * Arguments    : sOrg   - 원래 문자열
         sTrim  - Trim할 문자열(옵션 : Default=" ")
         * Return       : String Trim된 문자열
         *************************************************************************************************/
        this.gfn_lTrimCase = function (sOrg, sTrim)
        {
        	var pos;

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}

        	if (this.gfn_isNull(sTrim))
        	{
        		sTrim = " ";
        	}

        	for (pos = 0; pos < sOrg.length; pos += sTrim.length)
        	{
        		if (sOrg.toLowerCase().substr(pos, sTrim.length) != sTrim.toLowerCase())
        		{
        			break;
        		}
        	}

        	return sOrg.substr(pos);
        };

        /************************************************************************************************
         * Function Name: gfn_rTrim
         * Description  : 대소문자 구별하여 오른쪽에서 문자열 삭제
         * Arguments    : sOrg   - 원래 문자열
         sTrim - Trim할 문자열(옵션 : Default=" ")
         * Return       : String Trim된 문자열
         *************************************************************************************************/
        this.gfn_rTrim = function (sOrg, sTrim)
        {
        	var pos,nStart;

        	sOrg = this.gfn_toString(sOrg);

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}

        	if (this.gfn_isNull(sTrim))
        	{
        		sTrim = " ";
        	}

        	for (pos = sOrg.length - sTrim.length; pos >= 0; pos -= sTrim.length)
        	{
        		if (sOrg.substr(pos, sTrim.length) != sTrim)
        		{
        			break;
        		}
        	}

        	return sOrg.substr(0, pos + sTrim.length);
        };

        /************************************************************************************************
         * Function Name: gfn_rTrimCase
         * Description  : 대소문자 구별없이 오른쪽에서 문자열 삭제
         * Arguments    : sOrg   - 원래 문자열
         sTrim - Trim할 문자열(옵션 : Default=" ")
         * Return       : String Trim된 문자열
         *************************************************************************************************/
        this.gfn_rTrimCase = function (sOrg, sTrim)
        {
        	var pos,nStart;

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}

        	if (this.gfn_isNull(sTrim))
        	{
        		sTrim = " ";
        	}

        	for (pos = sOrg.length - sTrim.length; pos >= 0; pos -= sTrim.length)
        	{
        		if (sOrg.toLowerCase().substr(pos, sTrim.length) != sTrim.toLowerCase())
        		{
        			break;
        		}
        	}

        	return sOrg.substr(0, pos + sTrim.length);
        };

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

        /************************************************************************************************
         * Function Name: gfn_rPad
         * Description  : 자리수 만큼 오른쪽에 문자열 추가
         * Arguments    : sOrg - 원래 문자열
         sPad - Pad할 문자열
         nCnt - 자리수
         * Return       : String Pad된 문자열
         *************************************************************************************************/
        this.gfn_rPad = function (sOrg, sPad, nCnt)
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

        	sRet += sOrg;

        	for (i = 0; i < nCnt; i++)
        	{
        		sRet += sPad;
        	}

        	nLength = this.gfn_length(sOrg) > nCnt ? this.gfn_length(sOrg) : nCnt;

        	return this.gfn_left(sRet, nLength);
        };

        /************************************************************************************************
         * Function Name: gfn_strCount
         * Description  : 대소문자 구별하여 문자개수 세기
         * Arguments    : sOrg - 원래 문자열
         sCnt - 개수를 셀 문자열
         * Return       : Integer 문자개수
         *************************************************************************************************/
        this.gfn_strCount = function (sOrg, sCnt)
        {
        	var i;
        	var nCnt = 0;
        	var sRet = "";

        	if (this.gfn_isNull(sOrg) || this.gfn_isNull(sCnt))
        	{
        		return -1;
        	}

        	for (i = 0; i < sOrg.length; i += sCnt.length)
        	{
        		if (sOrg.substr(i, sCnt.length) == sCnt)
        		{
        			nCnt++;
        		}
        	}

        	return nCnt;
        };

        /************************************************************************************************
         * Function Name: gfn_strCountCase
         * Description  : 대소문자 구분없이 문자개수 세기
         * Arguments    : sOrg - 원래 문자열
         sCnt - 개수를 셀 문자열
         * Return       : Integer 문자개수
         *************************************************************************************************/
        this.gfn_strCountCase = function (sOrg, sCnt)
        {
        	var i;
        	var nCnt = 0;
        	var sRet = "";

        	if (this.gfn_isNull(sOrg) || this.gfn_isNull(sCnt))
        	{
        		return -1;
        	}

        	for (i = 0; i < sOrg.length; i += sCnt.length)
        	{
        		if (sOrg.toLowerCase().substr(i, sCnt.length) == sCnt.toLowerCase())
        		{
        			nCnt++;
        		}
        	}

        	return nCnt;
        };

        /************************************************************************************************
         * Function Name: gfn_htmlToChars
         * Description  : html형식의 문자열에서 태그문자를 특수문자로 변형
         * Arguments    : str - html형식 문자열
         * Return       : String 변형문자열
         *************************************************************************************************/
        this.gfn_htmlToChars = function (str)
        {
        	str = "" + str;

        	if (this.gfn_isNull(str))
        	{
        		return "";
        	}

        	str = this.gfn_replace(str, "\&", '&amp;');
        	str = this.gfn_replace(str, "\'", '&apos;');
        	str = this.gfn_replace(str, "\"", '&quot;');
        	str = this.gfn_replace(str, "\'", '&#39;');
        	str = this.gfn_replace(str, "<", '&lt;');
        	str = this.gfn_replace(str, ">", '&gt;');

        	return str;
        };

        /************************************************************************************************
         * Function Name: gfn_specToChars
         * Description  : 특수문자가 들어있는 문자열에서 html형식의 문자로 변형
         * Arguments    : str - 특수문자 형식 문자열
         * Return       : String html형식의 문자
         *************************************************************************************************/
        this.gfn_specToChars = function (str)
        {
        	str = "" + str;

        	if (this.gfn_isNull(str))
        	{
        		return "";
        	}

        	str = this.gfn_replace(str, "\&amp;", '&');
        	str = this.gfn_replace(str, "\&quot;", '"');
        	str = this.gfn_replace(str, "\&#39;", '\'');
        	str = this.gfn_replace(str, "\&lt;", '<');
        	str = this.gfn_replace(str, "\&gt;", '>');

        	return str;
        };

        /************************************************************************************************
         * Function Name: gfn_lengthChk
         * Description  : 제한된 글자 수를 체크하여 ... 표시
         * Arguments    : sText - 원본 문자열
         nSize - 글자수 제한 길이
         * Return       : String
         *************************************************************************************************/
        this.gfn_lengthChk = function (sText, nSize)
        {
        	var sTargetText = sText;
        	var sTargetLength = this.gfn_length(sTargetText);
        	var sTargetLeft;
        	var sTargetPad;

        	if (sTargetLength > 5)
        	{
        		sTargetLeft = this.gfn_left(sTargetText, 5);
        		sTargetPad = this.gfn_rPad(sTargetLeft, "...", 8);
        	}

        	return sTargetPad;
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
