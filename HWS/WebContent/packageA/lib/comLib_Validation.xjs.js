//XJS=comLib_Validation.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /************************************************************************************************
         * Name     : comLib_Validation.xjs
         * Title    : Validation 관련 함수
         * Desc     : Validation 관련 함수
         * 작성자	: 투비소프트
         * 작성일	: 2018-04-05
         *************************************************************************************************
         *      수정일          이름          사유
         *************************************************************************************************
         *    2018.04.05        투비소프트       최초작성
         ************************************************************************************************/

        /************************************************************************************************
         ● gfn_dsValidCheck   : DataSet 내의 데이터 무결성을 검사하는 함수
         ● gfn_itemCheck      : Column별 Validation Check
         ● gfn_itemValueCheck : Check 항목별 DataSet 데이터 무결성을 검사하는 함수
         *************************************************************************************************/

        /**********************************************************************************
         * Function Name: gfn_dsValidCheck
         * Description  : DataSet 내의 데이터 무결성을 검사하는 함수
         * Arguments    : obj        - Validation 체크 대상 Grid / Dataset
         objDsValid - Check Info Dataset
         bAll       - true : 전체, false : 변경된 row만
         * Return       : boolean
         **********************************************************************************/
        this.gfn_dsValidCheck = function (obj, objDsValid, bAll)
        {
        	if (this.gfn_isNull(bAll))
        	{
        		bAll = false;
        	}

        	var sObjType = this.gfn_getObjType(obj);
        	if (sObjType == "Grid")
        	{
        		var objGrd = obj;
        		var objDs = objGrd.getBindDataset();
        	}
        	else if (sObjType == "Dataset")
        	{
        		var objDs = obj;
        	}
        	else
        	{
        		alert("첫번째 Argument에는 Grid or Dataset이 와야 합니다.");
        		return;
        	}

        	var nRowCnt = objDs.rowcount;
        	var nColCnt = objDs.getColCount();

        	for (var i = 0; i < nRowCnt; i++)
        	{
        		for (var j = 0; j < nColCnt; j++)
        		{
        			// trace(j+" 해당값 : " + objDs.getColumn(i,j) + " / RowType : " + objDs.getRowType(i));
        			// 모든 row를 검사하거나, 아미면 Row Type이 insert(2), update(4)일 경우에만
        			if (bAll || (bAll == false && (objDs.getRowType(i) == 2 || objDs.getRowType(i) == 4)))
        			{
        				// Validation 체크
        				var rtnVal = this.gfn_itemCheck(i, j, objDs, objDsValid);
        				if (rtnVal != true)
        				{
        					// Message 처리
        					// alert(rtnVal);

        					// Error 위치로 setFocus 처리
        					objDs.set_rowposition(i);

        					var strColNm = objDs.getColID(j);
        					// Grid setFocus 처리
        					if (sObjType == "Grid" && objDsValid.getColumn(0, strColNm).indexOf("focus") == -1)
        					{
        						objGrd.setCellPos(objGrd.getBindCellIndex("Body", objDs.getColID(j)));
        						objGrd.showEditor(true);
        						objGrd.setFocus();
        					}
        					// Validation에 focus가 있는 경우 Component로 setFocus 처리
        					else if (objDsValid.getColumn(0, strColNm).indexOf("focus") > -1)
        					{
        						var arrItem1 = objDsValid.getColumn(0, strColNm).split(",");
        						var arrItem2 = new Array();
        						for (var i = 0; i < arrItem1.length; i++)
        						{
        							arrItem2 = arrItem1[i].split(":");
        							if (arrItem2[0] == "focus")
        							{
        								eval(arrItem2[1]).setFocus();
        							}
        						}
        					}
        					return false;
        				}
        			}
        		}
        	}
        	return true;
        };

        /**********************************************************************************
         * Function Name: gfn_itemCheck
         * Description  : Column별 Validation Check
         * Arguments    : rowPos     - Check Dataset의 Row Position
         colIdx     - Check Dataset의 Row Column
         objDs      - Check Dataset
         objDsValid - Check Info Dataset
         * Return       : boolean
         **********************************************************************************/
        this.gfn_itemCheck = function (rowPos, colIdx, objDs, objDsValid)
        {
        	var arrItem = new Array();
        	var arrItem2 = new Array();

        	var strColNm = objDs.getColID(colIdx);
        	var strCol = objDsValid.getColumn(0, strColNm);

        	if (this.gfn_isNull(strCol))
        	{
        		return true;
        	}

        	var value = objDs.getColumn(rowPos, colIdx);
        	arrItem = strCol.split(",");

        	var rtnVal;
        	for (var k = 0; k < arrItem.length; k++)
        	{
        		// trace("item value : "+arrItem[k]);
        		rtnVal = this.gfn_itemValueCheck(rowPos, arrItem[k], value, objDs, colIdx);

        		if (rtnVal == "SKIP")
        		{
        			return true;
        		}
        		else if (rtnVal != true)
        		{
        			alert(rtnVal);
        			return false;
        		}
        	}

        	return true;
        };

        /**********************************************************************************
         * Function Name: gfn_itemValueCheck
         * Description  : Check 항목별 DataSet 데이터 무결성을 검사하는 함수
         * Arguments    : rowPos     - Check Dataset의 Row Position
         Value      - Validation Check 항목
         itemValue  - 체크 대상 Vlaue
         objDs      - Check Dataset
         colIdx     - Column Index
         * Return       : boolean
         **********************************************************************************/
        this.gfn_itemValueCheck = function (rowPos, Value, itemValue, objDs, colIdx)
        {
        	var arrItem2 = new Array();
        	var rtnVal = true;
        	arrItem2 = Value.split(":");

        	// trace("arrItem2 : " + arrItem2);
        	switch (arrItem2[0])
        	{
        		// Alert시 칼럼 표시 명칭 - title:아이디
        		case "title":
        			strTitle = arrItem2[1];
        			break;
        			// 필수체크 - required:true
        		case "required":
        			// 필수입력항목 여부
        			if (arrItem2[1] == "true")
        			{
        				if (this.gfn_isNull(this.gfn_trim(itemValue)))
        				{
        					rtnVal = this.gfn_getMessage("msg.err.validator.required", strTitle); //$1 은(는) 필수 입력 항목입니다.
        				}
        			}
        			else
        			{
        				return "SKIP";
        			}
        			break;
        			// 최대 size 크기 - maxlength:7
        		case "maxlength":
        			if (!this.gfn_isNull(itemValue))
        			{
        				if (itemValue.length > parseInt(arrItem2[1]))
        				{
        					rtnVal = this.gfn_getMessage("msg.err.validator.maxlength", strTitle + "^" + arrItem2[1]); //$1 의 입력값의 길이는 $2 이하이어야 합니다.
        				}
        			}
        			break;
        			// 최소 size 크기 - minlength:7
        		case "minlength":
        			if (!this.gfn_isNull(itemValue))
        			{
        				if (itemValue.length < parseInt(arrItem2[1]))
        				{
        					rtnVal = this.gfn_getMessage("msg.err.validator.minlength", strTitle + "^" + arrItem2[1]); //$1 의 입력값의 길이는 $2 이상이어야 합니다.
        				}
        			}
        			break;
        			// 최대 size 크기(Byte) - maxlengthB:7
        		case "maxlengthB":
        			if (this.lookupFunc("gfn_lengthByte").call(itemValue) > parseInt(arrItem2[1]))
        			{
        				rtnVal = this.gfn_getMessage("msg.err.validator.maxlength", strTitle + "^" + arrItem2[1]); //$1 의 입력값의 길이는 $2 이하이어야 합니다.
        			}
        			break;
        			// 최소 size 크기(Byte) - minlengthB:7
        		case "minlengthB":
        			if (this.lookupFunc("gfn_lengthByte").call(itemValue) < parseInt(arrItem2[1]))
        			{
        				rtnVal = this.gfn_getMessage("msg.err.validator.minlength", strTitle + "^" + arrItem2[1]); //$1 의 입력값의 길이는 $2 이상이어야 합니다.
        			}
        			break;
        			// 숫자 여부 - digits:true
        		case "digits":
        			if (!this.lookupFunc("gfn_isNum").call(itemValue))
        			{
        				rtnVal = this.gfn_getMessage("msg.err.validator.chknumber.n", strTitle); //$1 은(는) 숫자만 입력 가능합니다.
        			}
        			break;
        			// 해당 숫자 이하 - min:7
        		case "min":
        			if (parseFloat(itemValue) < parseFloat(arrItem2[1]))
        			{
        				rtnVal = this.gfn_getMessage("msg.err.validator.fromnum", strTitle + "^" + arrItem2[1]); //$1 은(는) $2 이상의 숫자만 입력 가능합니다.
        			}
        			break;
        			// 해당 숫자 이상 - max:7
        		case "max":
        			if (parseFloat(itemValue) > parseFloat(arrItem2[1]))
        			{
        				rtnVal = this.gfn_getMessage("msg.err.validator.tonum", strTitle + "^" + arrItem2[1]); //$1 은(는) $2 이하의 숫자만 입력 가능합니다.
        			}
        			break;
        			// 소숫점 자리수 비교 - declimit:3
        		case "declimit":
        			if (!this.gfn_isNull(itemValue))
        			{
        				var isExistDot = itemValue.indexOf(".");
        				if (isExistDot == -1)
        				{
        					rtnVal = this.gfn_getMessage("msg.err.validator.declimit", strTitle + "^" + arrItem2[1]); //$1 은(는) 소숫점 $2 자리로 구성되어야 합니다.
        				}
        				else
        				{
        					var decLen = itemValue.substr(isExistDot + 1, itemValue.length);
        					if (decLen.length != parseInt(arrItem2[1]))
        					{
        						rtnVal = this.gfn_getMessage("msg.err.validator.declimit", strTitle + "^" + arrItem2[1]); //$1 은(는) 소숫점 $2 자리로 구성되어야 합니다.
        					}
        				}
        			}
        			break;
        			// 날짜 년월일 체크 - date:true
        		case "date":
        			if (!this.gfn_isNull(this.gfn_trim(itemValue, "")))
        			{
        				if (!this.lookupFunc("gfn_isDate").call(itemValue))
        				{
        					rtnVal = this.gfn_getMessage("msg.err.validator.date", strTitle); //$1 : 유효하지 않은 날짜 형식입니다.
        				}
        			}
        			break;
        			// 타 칼럼값과 작은 값인지 비교 - comparemax:Column4:시작일
        		case "comparemax":
        			if (parseFloat(itemValue) < parseFloat(objDs.getColumn(rowPos, arrItem2[1])))
        			{
        				rtnVal = this.gfn_getMessage("msg.err.validator.comparemax", strTitle + "^" + arrItem2[2]); //$1 이(가) $2 보다 작습니다.
        			}
        			break;
        			// 타 칼럼값과 큰 값인지 비교 - comparemin:Column6:종료일
        		case "comparemin":
        			if (parseFloat(itemValue) > parseFloat(objDs.getColumn(rowPos, arrItem2[1])))
        			{
        				rtnVal = this.gfn_getMessage("msg.err.validator.comparemax", strTitle + "^" + arrItem2[2]); //$1 이(가) $2 보다 큽니다.
        			}
        			break;
        			// 시작일과 종료일 간의 조회 범위 설정 값 비교 - comparerange:Column:10
        		case "comparerange":
        			var nFromDt = parseFloat(itemValue);
        			var nToDt = parseFloat(objDs.getColumn(rowPos, arrItem2[1]));
        			var nFlagDt = arrItem2[2];
        			var nRangDt = this.gfn_getDiffDay(nFromDt, nToDt);
        			// trace("nFlagDt = " + nFlagDt);
        			// trace(nFromDt + "   " + nToDt + "    " + nFlagDt + "     " + nRangDt);
        			if (nRangDt > nFlagDt)
        			{
        				rtnVal = this.gfn_getMessage("msg.err.validator.comparerange", arrItem2[2]); //$1 이(가) $2 보다 큽니다.
        			}
        			break;
        			// 타 칼럼값과 같은 값인지 비교 - equalto:Column5:금액1
        		case "equalto":
        			if (parseInt(itemValue) != parseInt(objDs.getColumn(rowPos, arrItem2[1])))
        			{
        				rtnVal = this.gfn_getMessage("msg.err.validator.equalto", strTitle + "^" + arrItem2[2]); //$1 이(가) $2 와(과) 틀립니다.
        			}
        			break;
        			// 사이의 값인지 비교 - range:40:100
        		case "range":
        			if (parseInt(itemValue) < parseInt(arrItem2[1]) || parseInt(itemValue) > parseInt(arrItem2[2]))
        			{
        				rtnVal = this.gfn_getMessage("msg.err.validator.range", strTitle + "^" + arrItem2[1] + "^" + arrItem2[2]); //$1 은(는) $2 와(과) $3 사이의 값입니다.
        			}
        			break;
        			// 코드값이 목록내의 값인지 비교 - code:1:2:3
        		case "code":
        			if (!this.gfn_isNull(itemValue))
        			{
        				for (var i = 1; i < arrItem2.length; i++)
        				{
        					if (parseInt(itemValue) == parseInt(arrItem2[i]))
        					{
        						return true;
        					}
        				}
        				rtnVal = this.gfn_getMessage("msg.err.validator.code", strTitle + "^" + Value.split("code:").join("")); //$1 은(는) $2 의 값이어야 합니다.
        			}
        			break;
        			// 이메일 여부 체크 - isEmail:true
        		case "isEmail":
        			if (!this.lookupFunc("gfn_isEmail").call(itemValue))
        			{
        				rtnVal = this.gfn_getMessage("msg.err.validator.email"); //e-mail이 잘못된 형태로 입력 되었습니다.
        			}
        			break;
        			// 주민번호 체크 - jumin:true
        		case "jumin":
        			if (!this.lookupFunc("gfn_isJuminNo").call(itemValue))
        			{
        				rtnVal = this.gfn_getMessage("msg.err.juminNo");
        			}
        			break;
        			// 날짜 년월 체크 - dateym:true
        		case "dateym":
        			if (!this.gfn_isNull(this.gfn_trim(itemValue, "")))
        			{
        				if (!this.gfn_isDate(itemValue + "01"))
        				{
        					rtnVal = this.gfn_getMessage("msg.err.validator.dateym", strTitle);
        				}
        			}
        			break;
        		default:
        			return rtnVal;
        			break;
        	}
        	// end switch
        	return rtnVal;
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
