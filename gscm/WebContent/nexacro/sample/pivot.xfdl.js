(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pivot_comp");
            this.set_titletext("피벗 그리드");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"50\"/><Column id=\"col2\" type=\"STRING\" size=\"50\"/><Column id=\"col3\" type=\"STRING\" size=\"50\"/><Column id=\"col4\" type=\"STRING\" size=\"50\"/><Column id=\"col5\" type=\"STRING\" size=\"50\"/><Column id=\"col6\" type=\"STRING\" size=\"50\"/><Column id=\"col7\" type=\"STRING\" size=\"50\"/><Column id=\"col8\" type=\"STRING\" size=\"50\"/><Column id=\"col9\" type=\"STRING\" size=\"50\"/><Column id=\"col10\" type=\"STRING\" size=\"50\"/><Column id=\"col11\" type=\"STRING\" size=\"50\"/><Column id=\"col12\" type=\"INT\" size=\"8\"/><Column id=\"col13\" type=\"INT\" size=\"8\"/><Column id=\"col14\" type=\"INT\" size=\"8\"/><Column id=\"col15\" type=\"INT\" size=\"8\"/><Column id=\"col16\" type=\"INT\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\">30,000건</Col><Col id=\"cnt\">30000</Col></Row><Row><Col id=\"text\">100,000건</Col><Col id=\"cnt\">100000</Col></Row><Row><Col id=\"text\">200,000건</Col><Col id=\"cnt\">200000</Col></Row><Row><Col id=\"cnt\">400000</Col><Col id=\"text\">400,000건</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","10","130",null,"44","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#f6f6f6");
            obj.set_text("");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","140","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회건수");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09",null,"140","63","25","282",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회시간");
            obj.set_cssclass("sta_cm_text12R");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCount","95","140","117","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCnt");
            obj.set_codecolumn("cnt");
            obj.set_datacolumn("text");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_text("30,000건");
            obj.set_value("30000");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stTranTime",null,"140","63","25","211",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_text12R");
            obj.set_text("초");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static10",null,"140","83","25","122",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("피벗 렌더시간");
            obj.set_cssclass("sta_cm_text12R");
            this.addChild(obj.name, obj);

            obj = new Static("stRenderTime",null,"140","63","25","52",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("초");
            obj.set_cssclass("sta_cm_text12R");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("search",null,"130","43","44","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_search01");
            this.addChild(obj.name, obj);

            obj = new NxPivot("NxPivot00","10","184",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsList");
            obj.set_text("");
            obj._setContents({"config":{
            	"fields": [],
            	"colAxis": [
            		{
            			"id": "col1",
            			"itemText": "년월일",
            			"type": "date",
            			"itemWidth": "100",
            			"sort": "ASC",
            			"aggregator": "CNT"
            		},
            		{
            			"id": "col9",
            			"itemText": "채널명",
            			"type": "string",
            			"itemWidth": "100",
            			"sort": "ASC",
            			"aggregator": "CNT"
            		}
            	],
            	"rowAxis": [
            		{
            			"id": "col3",
            			"itemText": "영업부명",
            			"type": "string",
            			"itemWidth": "100",
            			"sort": "ASC",
            			"aggregator": "CNT"
            		},
            		{
            			"id": "col5",
            			"itemText": "부서명",
            			"type": "string",
            			"itemWidth": "100",
            			"sort": "ASC",
            			"aggregator": "CNT"
            		}
            	],
            	"values": [
            		{
            			"id": "col13",
            			"itemText": "반품총매출액",
            			"type": "number",
            			"itemWidth": "100",
            			"sort": "ASC",
            			"aggregator": "SUM"
            		},
            		{
            			"id": "col14",
            			"itemText": "에누리금액",
            			"type": "number",
            			"itemWidth": "100",
            			"sort": "ASC",
            			"aggregator": "SUM"
            		},
            		{
            			"id": "col15",
            			"itemText": "프로모션금액",
            			"type": "number",
            			"itemWidth": "100",
            			"sort": "ASC",
            			"aggregator": "SUM"
            		},
            		{
            			"id": "col16",
            			"itemText": "순매출액",
            			"type": "number",
            			"itemWidth": "100",
            			"sort": "ASC",
            			"aggregator": "SUM"
            		},
            		{
            			"id": "col12",
            			"itemText": "총매출액",
            			"type": "number",
            			"itemWidth": "100",
            			"sort": "ASC",
            			"aggregator": "SUM"
            		}
            	],
            	"filters": []
            },
            "panel":{
            	"toolbar": {
            		"size": "28",
            		"padding": "3 3 3 3",
            		"gap": "2",
            		"buttonsize": "20",
            		"cssclass": "NxPivot_toolbarArea",
            		"lbuttons": {
            			"9d5d6862-9a9f-dc4f-383a-ebaacda08ec1": {
            				"type": "rowsstatus",
            				"id": "addnew",
            				"toggle": "1",
            				"togglevalue": "0",
            				"tooltip": "전체 row 펼치기,전체 row 접기",
            				"cssclass": "NxPivot_toolbarButton_rowstatus_expand,NxPivot_toolbarButton_rowstatus_collapse",
            				"align": "left"
            			},
            			"e98d42fb-8763-cba2-08f8-ebaad54eb13a": {
            				"type": "columnsstatus",
            				"id": "addnew",
            				"toggle": "1",
            				"togglevalue": "0",
            				"tooltip": "전체 column 펼치기, 전체 column 접기",
            				"cssclass": "NxPivot_toolbarButton_colstatus_expand,NxPivot_toolbarButton_colstatus_collapse",
            				"align": "left"
            			}
            		},
            		"rbuttons": {
            			"d5aa4f21-94f5-083d-4197-ebaadcae1c59": {
            				"type": "toolbarstatus",
            				"id": "addnew",
            				"toggle": "1",
            				"togglevalue": "0",
            				"tooltip": "패널접기, 패널 펼치기",
            				"cssclass": "NxPivot_toolbarButton_show, NxPivot_toolbarButton_hide",
            				"align": "right"
            			},
            			"938f5595-2cda-51f5-409a-ebaae39fd6e3": {
            				"type": "execute",
            				"id": "addnew",
            				"toggle": "0",
            				"tooltip": "실행",
            				"cssclass": "NxPivot_toolbarButton_execute",
            				"align": "right"
            			},
            			"7a5dea33-a3ce-7e3d-57fb-ebaaeafedc2d": {
            				"type": "initialization",
            				"id": "addnew",
            				"toggle": "0",
            				"tooltip": "초기화",
            				"cssclass": "NxPivot_toolbarButton_init",
            				"align": "right"
            			},
            			"9c1d7a87-78a8-8c26-3789-ebaaf28e5bd1": {
            				"type": "autoexecute",
            				"id": "addnew",
            				"toggle": "1",
            				"togglevalue": "0",
            				"tooltip": "자동 실행 중지,자동 실행 사용",
            				"cssclass": "NxPivot_toolbarButton_manual,NxPivot_toolbarButton_auto",
            				"align": "right"
            			}
            		}
            	},
            	"items": {
            		"size": "120",
            		"cssclass1": "NxPivot_axisArea1",
            		"cssclass2": "NxPivot_axisArea2",
            		"padding": "5 5 5 5",
            		"gap": "3",
            		"titlebarsize": "20",
            		"titlebarcssclass": "NxPivot_axisArea_title",
            		"indicatorwidth": "16",
            		"indicatorheight": "42",
            		"indicatorcssclass": "NxPivot_drag_indicator",
            		"item": {
            			"width": "150",
            			"height": "25",
            			"padding": "6 6 6 6",
            			"gap": "4",
            			"cssclass": "NxPivot_axisArea_item",
            			"sortasccssclass": "NxPivot_axisArea_item_asc",
            			"sortdesccssclass": "NxPivot_axisArea_item_desc",
            			"filtercssclass": "NxPivot_axisArea_item_filter",
            			"aggregatorcssclass": "NxPivot_axisArea_item_aggregator",
            			"settingcssclass": "NxPivot_axisArea_item_setting",
            			"namecssclass": "NxPivot_axisArea_item_name",
            			"sortsize": "14",
            			"filtersize": "14",
            			"aggregatorsize": "20",
            			"buttonsize": "14"
            		}
            	}
            },
            "settingpopup":{
            	"cssclass": "NxPivot_popup",
            	"width": "200",
            	"height": "200",
            	"padding": "10 10 10 10",
            	"buttonwidth": "50",
            	"buttonheight": "25",
            	"buttonalign": "center",
            	"okbuttoncssclass": "NxPivot_popup_submit",
            	"cancelbuttoncssclass": "NxPivot_popup_close",
            	"labelcssclass": "NxPivot_popup_subtitle",
            	"dateformat": "yyyy-MM-dd"
            }});
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("피벗 컴포넌트");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","50",null,"71","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Grid에 있는 데이터 정보를 보다 쉽게 보여주는 피벗 컴포넌트입니다.\r\nDrag&Drop으로 배치할 수 있으며, 정렬 및 Filter 처리를 할 수 있어 보다 쉽게 Grid의 데이터 정보를 확인할 수 있습니다.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"140","63","25","424",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회건수");
            obj.set_cssclass("sta_cm_text12R");
            this.addChild(obj.name, obj);

            obj = new Static("stTranCnt",null,"140","63","25","353",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_text12R");
            obj.set_text("건");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskTemp",null,"0","90","20","-1",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_visible("false");
            obj.set_format("###,###,###,###");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",950,780,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pivot.xfdl", function() {
        this.pivot_comp_onload = function(obj,e)
        {
        	if (this.parent.parent.parent.name=="divWork") {
        		this.parent.parent.parent.parent.gfnCheckFormRanderTime();
        	}
        };

        this.Button00_onclick = function(obj,e)
        {
        	var sId = "SEARCH";
        	var sURL = "http://14.63.224.112/gscm/service/pivot/PivotssvRead.jsp?rowcount="+this.cmbCount.value;
        	var sInDs = "";
        	var sOutDs = "dsList=output";
        	var sParam = "";
        	var sCallback = "fn_CallBack";

        	this.startTranTime = this.gfn_CheckTime();

        	this.transaction(sId, sURL, sInDs, sOutDs, sParam, sCallback);
        };

        this.fn_CallBack = function(sId, nErrorCd, sErrorMsg)
        {
        	if (nErrorCd < -1)
        	{
        		alert(nErrorCd + " : " + sErrorMsg);
        	}
        	else
        	{
        		if (sId == "SEARCH")
        		{
        			this.endTranTime = this.gfn_CheckTime();
        			this.NxPivot00.updateToDataset();
        			this.NxPivot00.render();
        		}
        	}
        };

        this.NxPivot00_onrender = function(obj, e)
        {
        	this.endRenderTime = this.gfn_CheckTime();

        	var nTranTime = this.gfn_diffTime(this.startTranTime, this.endTranTime, "ss");
        	var nRenderTime = this.gfn_diffTime(this.endTranTime, this.endRenderTime, "ss");

        	this.stTranTime.set_text(nTranTime + "초");
        	this.stRenderTime.set_text(nRenderTime + "초");

        	this.mskTemp.set_value(this.dsList.rowcount);
        	this.stTranCnt.set_text(this.mskTemp.text + "건");
        };

        /*********************************************************************
         * 함 수 명 	: gfn_CheckTime
         * 함수설명 	: 현재의 시간을 return 한다.
         * 입    력 	: 없음
         * 결    과 	: 현재의 시간을 return 한다.
         *********************************************************************/
        this.gfn_CheckTime = function()
        {
        	var objDate = new Date();
        	var strTime  = this.gfn_Right("0" + objDate.getHours(), 2);
        		strTime += this.gfn_Right("0" + objDate.getMinutes(), 2);
        		strTime += this.gfn_Right("0" + objDate.getSeconds(), 2);
        		strTime += this.gfn_Right("0" + objDate.getMilliseconds(), 3);

        	return strTime;
        };

        /*********************************************************************
         * 함 수 명 	: gfn_Right
         * 함수설명 	: 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
         * 입    력 	: strString	- 대상 문자열
         *			  	  nSize		- 얻어올 크기. [Default Value = 0]
         * 결    과 	: 오른쪽 부분이 얻어진 문자열.
         *********************************************************************/
        this.gfn_Right = function(strString, nSize)
        {
            var nStart 	= String(strString).length;
            var nEnd 	= Number(nStart) - Number(nSize);
            var rtnVal 	= strString.substring(nStart, nEnd);

            return rtnVal;
        };

        /*******************************************************************************
         * 함 수 명 	: gfn_diffTime
         * 함수설명 	: 두 시간간의 차이 계산
         * 입    력 	: sStartTime(HHmmss형태의 From 시간) 	( 예 : "033025" )
         *              : sEndTime(HHmmss형태의 To 시간) 		( 예 : "034025" )
         *              : sType(구하고자하는 타입(시, 분, 초)) ( 예 : "HH" )
         * 결    과 	: integer
        ******************************************************************************/
        this.gfn_diffTime = function(sStartTime, sEndTime, sType)
        {
        	this.nFrom_HH = parseInt(sStartTime.substring(0, 2));
        	this.nFrom_mm = parseInt(sStartTime.substring(2, 4));
        	this.nFrom_ss = parseInt(sStartTime.substring(4, 6));
        	this.nFrom_ms = parseInt(sStartTime.substring(6, 9));

        	this.nTo_HH = parseInt(sEndTime.substring(0, 2));
        	this.nTo_mm = parseInt(sEndTime.substring(2, 4));
        	this.nTo_ss = parseInt(sEndTime.substring(4, 6));
        	this.nTo_ms = parseInt(sEndTime.substring(6, 9));

        	this.nFromTotal_ss = (this.nFrom_HH * 3600) + (this.nFrom_mm * 60) + this.nFrom_ss+(this.nFrom_ms*0.001);
        	this.nToTotal_ss   = (this.nTo_HH * 3600) + (this.nTo_mm * 60) + this.nTo_ss+(this.nTo_ms*0.001);

        	if (sType == "HH")
        	{
        		return (Math.floor((this.nToTotal_ss - this.nFromTotal_ss) / 3600000));
        	} else if (sType == "mm") {
        		return (Math.floor((this.nToTotal_ss - this.nFromTotal_ss) / 60000));
        	} else if (sType == "ss") {
        		return nexacro.round(parseFloat(this.nToTotal_ss) - parseFloat(this.nFromTotal_ss), 3).toString();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pivot_comp_onload,this);
            this.search.addEventHandler("onclick",this.Button00_onclick,this);
            this.NxPivot00.addEventHandler("onrender",this.NxPivot00_onrender,this);
            this.Static07.addEventHandler("onclick",this.Static07_onclick,this);
            this.mskTemp.addEventHandler("onchanged",this.mskTemp_onchanged,this);
            this.dsList.addEventHandler("onload",this.dsList_onload,this);
        };

        this.loadIncludeScript("pivot.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
