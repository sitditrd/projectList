(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SimpleLine");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPie", this);
            obj._setContents("<ColumnInfo><Column id=\"country\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"valuedata\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"country\">Czech Republic</Col><Col id=\"value\">356.9</Col><Col id=\"select\"/><Col id=\"data\">test1</Col><Col id=\"valuedata\">100</Col></Row><Row><Col id=\"country\">Ireland</Col><Col id=\"value\">54</Col><Col id=\"select\"/><Col id=\"data\">tes2</Col><Col id=\"valuedata\">10</Col></Row><Row><Col id=\"country\">Germany</Col><Col id=\"value\">115.8</Col><Col id=\"select\">1</Col><Col id=\"data\">test3</Col><Col id=\"valuedata\">200.11</Col></Row><Row><Col id=\"country\">Australia</Col><Col id=\"value\">109.9</Col><Col id=\"select\"/><Col id=\"data\">test4</Col><Col id=\"valuedata\">19.1</Col></Row><Row><Col id=\"country\">Austria</Col><Col id=\"value\">108.3</Col><Col id=\"select\"/><Col id=\"data\">test5</Col><Col id=\"valuedata\">30.12</Col></Row><Row><Col id=\"country\">UK</Col><Col id=\"value\">65</Col><Col id=\"select\"/><Col id=\"data\">test6</Col><Col id=\"valuedata\">10</Col></Row><Row><Col id=\"country\">Belgium</Col><Col id=\"value\">110</Col><Col id=\"select\"/><Col id=\"data\">test7</Col><Col id=\"valuedata\">19.100</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","1.95%","10",null,"80","1.95%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("BtnSelType","0","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("select type");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnRadius","BtnSelType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("radius");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnInnerRadius","BtnRadius:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("innerradius");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnAngle270","BtnInnerRadius:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("angle(0, 270)");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnAngleHalf","BtnAngle270:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("angle(upper half)");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnAngle90","BtnAngleHalf:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("angle(90,270)");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnAngleFull","BtnAngle90:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("angle full");
            this.Div00.addChild(obj.name, obj);

            obj = new PieChart("PieChart00","30","91",null,null,"30","25",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsPie");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Country Average Litres",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "Pie Chart",
            		"subtextalign": "right",
            		"subtextcolor": "lightgray"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"itemautofit": "true"
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"radius": "60",
            			"itemtextvisible": true,
            			"itemtextfont": "bold 10pt \"Arial\",\"맑은 고딕\"",
            			"valuecolumn": "bind:value",
            			"fillstyle": "#1abd9c,#1a85be,#1a67bf,#1a4cbf,#641ac0,#9a1ac0,#c2251b,#c2541b,#c2911d,#21c34d",
            			"itemtexttype": "text",
            			"selecttype": "bind",
            			"selectindent": "20",
            			"selectcolumn": "bind:select",
            			"selectopacity": "1.0",
            			"itemtextguidelinestyle": "1px solid darkgray",
            			"itemtextguideopacity": "1",
            			"itemtextguidesize": "20",
            			"itemtext": "expr:country +  \": \" + (value/dataset.getSum(\"value\")*100).toFixed(2) + \"%\"",
            			"opacity": "0.8",
            			"linestyle": "1px solid white",
            			"selectlinestyle": "1px solid white",
            			"highlightfillstyle": "yellow",
            			"highlightopacity": "0.5",
            			"highlightvisible": "true"
            		}
            	]
            });
            obj.set_categorycolumn("bind:country");
            this.addChild(obj.name, obj);

            obj = new Static("StaDesc","480","430","370","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_text("description");
            obj.set_background("lightyellow");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FeatureExample.xfdl", function() {

        this.Div00_BtnSelType_onclick = function(obj,e)
        {
        	var type = this.PieChart00.seriesset[0].selecttype;
        	switch (type)
        	{
        	case "unselect":
        		this.PieChart00.seriesset[0].set_selecttype("select");
        		break;

        	case "select":
        		this.PieChart00.seriesset[0].set_selecttype("bind");
        		break;

        	case "bind":
        		this.PieChart00.seriesset[0].set_selecttype("unselect");
        		break;
        	}
        };

        this.Div00_BtnRadius_onclick = function(obj,e)
        {
        	var radius = this.PieChart00.seriesset[0].radius;
        	if (radius == 60) this.PieChart00.seriesset[0].set_radius(70);
        	else this.PieChart00.seriesset[0].set_radius(60);
        };

        this.Div00_BtnInnerRadius_onclick = function(obj,e)
        {
        	var radius = this.PieChart00.seriesset[0].innerradius | 0;
        	if (radius == 0)
        	{
        		this.PieChart00.seriesset[0].set_innerradius(35);
        		this.PieChart00.board.set_text("Average");
        	}
        	else
        	{
        		this.PieChart00.seriesset[0].set_innerradius();
        		this.PieChart00.board.set_text("");
        	}
        };

        this.Div00_BtnAngle270_onclick = function(obj,e)
        {
        	this.PieChart00.seriesset[0].set_startangle(0);
        	this.PieChart00.seriesset[0].set_endangle(270);
        };

        this.Div00_BtnAngleHalf_onclick = function(obj,e)
        {
        	this.PieChart00.seriesset[0].set_startangle(270);
        	this.PieChart00.seriesset[0].set_endangle(180);
        };

        this.Div00_BtnAngle90_onclick = function(obj,e)
        {
        	this.PieChart00.seriesset[0].set_startangle(90);
        	this.PieChart00.seriesset[0].set_endangle(270);
        };

        this.Div00_BtnAngleFull_onclick = function(obj,e)
        {
        	this.PieChart00.seriesset[0].set_startangle();
        	this.PieChart00.seriesset[0].set_endangle();
        };

        this.PieChart00_onmouseenter = function(obj,e)
        {
        	if (e.fromreferenceobject == obj)
        		this.StaDesc.set_visible(true);
        };

        this.PieChart00_onmouseleave = function(obj,e)
        {
        	if (e.fromreferenceobject == obj)
        		this.StaDesc.set_visible(false);
        };

        this.PieChart00_onmousemove = function(obj,e)
        {
        	var refobj = e.fromreferenceobject || obj;

        	this.StaDesc.set_text(refobj._type_name);

        	if (!this.StaDesc.visible)
        	{
        		this.StaDesc.set_visible(true);
        	}
        	this.StaDesc.move(obj.getOffsetLeft() + e.canvasx + 10, obj.getOffsetTop() + e.canvasy + 10);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.BtnSelType.addEventHandler("onclick",this.Div00_BtnSelType_onclick,this);
            this.Div00.form.BtnRadius.addEventHandler("onclick",this.Div00_BtnRadius_onclick,this);
            this.Div00.form.BtnInnerRadius.addEventHandler("onclick",this.Div00_BtnInnerRadius_onclick,this);
            this.Div00.form.BtnAngle270.addEventHandler("onclick",this.Div00_BtnAngle270_onclick,this);
            this.Div00.form.BtnAngleHalf.addEventHandler("onclick",this.Div00_BtnAngleHalf_onclick,this);
            this.Div00.form.BtnAngle90.addEventHandler("onclick",this.Div00_BtnAngle90_onclick,this);
            this.Div00.form.BtnAngleFull.addEventHandler("onclick",this.Div00_BtnAngleFull_onclick,this);
            this.PieChart00.addEventHandler("onmouseenter",this.PieChart00_onmouseenter,this);
            this.PieChart00.addEventHandler("onmouseleave",this.PieChart00_onmouseleave,this);
            this.PieChart00.addEventHandler("onmousemove",this.PieChart00_onmousemove,this);
        };

        this.loadIncludeScript("FeatureExample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
