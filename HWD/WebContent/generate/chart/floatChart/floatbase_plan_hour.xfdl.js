(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("floatbase");
            this.set_titletext("New Form");
            this.getSetter("_isTimeData").set("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_browser_lanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"DATETIME\" size=\"256\"/><Column id=\"to\" type=\"DATETIME\" size=\"256\"/><Column id=\"percent\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">제우스</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201700</Col><Col id=\"percent\">인사총무팀</Col></Row><Row><Col id=\"Browser\">아프로디테</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201100</Col><Col id=\"percent\">제품구현그룹</Col></Row><Row><Col id=\"Browser\">포세이돈</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201100</Col><Col id=\"percent\">제품관리그룹</Col></Row><Row><Col id=\"Browser\">아테나</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201100</Col><Col id=\"percent\">NX14팀</Col></Row><Row><Col id=\"Browser\">아테나</Col><Col id=\"from\">201102201300</Col><Col id=\"to\">201102201500</Col><Col id=\"percent\">연구개발본부</Col></Row><Row><Col id=\"Browser\">아테나</Col><Col id=\"from\">201102201630</Col><Col id=\"to\">201102201800</Col><Col id=\"percent\">제품구현1그룹</Col></Row><Row><Col id=\"Browser\">헤르메스</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201100</Col><Col id=\"percent\">융합기술개발팀</Col></Row><Row><Col id=\"Browser\">에스티아</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201700</Col><Col id=\"percent\">일본사업팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FloatChart("FloatChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_browser_lanking");
            obj.set_isdatetimevalue("true");
            obj.set_rotateaxis("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "회의실 사용현황",
            		"textfont": "20pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt \"맑은 고딕\"",
            		"itemtextcolor": "#4c4c4c",
            		"visible": false
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"crosshair": {
            		"id": "crosshair",
            		"type": "xy",
            		"xlinestyle": "1px solid #525252",
            		"ylinestyle": "1px solid #525252",
            		"tooltiptype": "xy",
            		"visible": false
            	},
            	"selection": {
            		"id": "selection",
            		"type": "xy",
            		"linestyle": "1px solid #525252",
            		"background": "#525252",
            		"opacity": "0.5",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt \"맑은 고딕\"",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "11pt \"맑은 고딕\"",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"timelabelunitmask": "hh시",
            			"tickinterval": "",
            			"timelabelgroupmask": ""
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"positivebarlinestyle": "1px solid red",
            			"positivebarfillstyle": "#eb495c",
            			"negativebarlinestyle": "1px solid blue",
            			"negativebarfillstyle": "#5058eb",
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt \"맑은 고딕\"",
            			"autogradation": "none",
            			"barradius": "0",
            			"valuecolumn": "bind:from",
            			"value2column": "bind:to",
            			"itemtexttype": "text",
            			"itemtext": "expr:percent + \"  \" +  from.getHours() + \"-\" + to.getHours()",
            			"highlightbarvisible": "false"
            		}
            	]
            });
            obj.set_categorycolumn("bind:Browser");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("floatbase_plan_hour.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("floatbase_plan_hour.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
