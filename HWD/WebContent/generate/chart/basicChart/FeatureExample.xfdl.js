(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BasicChart");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRainfall", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"rainfall\" type=\"FLOAT\" size=\"256\"/><Column id=\"mean\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">SYDNEY BOTANIC GARDENS</Col><Col id=\"rainfall\">94.1</Col><Col id=\"mean\">68.2</Col></Row><Row><Col id=\"name\">CHATSWOOD BOWLING CLUB</Col><Col id=\"rainfall\">78</Col><Col id=\"mean\">51</Col></Row><Row><Col id=\"name\">CONCORD GOLF CLUB</Col><Col id=\"rainfall\">11.2</Col><Col id=\"mean\">59.1</Col></Row><Row><Col id=\"name\">ABBOTSFORD</Col><Col id=\"rainfall\">59</Col><Col id=\"mean\">66.2</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">MARRICKVILLE GOLF CLUB</Col><Col id=\"rainfall\">56</Col><Col id=\"mean\">55.9</Col></Row><Row><Col id=\"name\">SYDNEY AIRPORT AMO</Col><Col id=\"rainfall\">66.6</Col><Col id=\"mean\">60.3</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">PENNANT HILLS</Col><Col id=\"rainfall\">53.2</Col><Col id=\"mean\">56.8</Col></Row><Row><Col id=\"name\">CONCORD</Col><Col id=\"rainfall\">16.6</Col><Col id=\"mean\">48.6</Col></Row><Row><Col id=\"name\">RANDWICK BOWLING CLUB</Col><Col id=\"rainfall\">122.6</Col><Col id=\"mean\">65.9</Col></Row><Row><Col id=\"name\">SANS SOUCI</Col><Col id=\"rainfall\">45</Col><Col id=\"mean\">61.5</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">TERREY HILLS AWS</Col><Col id=\"rainfall\">83.4</Col><Col id=\"mean\">63.9</Col></Row><Row><Col id=\"name\">SYDNEY</Col><Col id=\"rainfall\">80</Col><Col id=\"mean\">65.5</Col></Row><Row><Col id=\"name\">STRATHFIELD GOLF CLUB</Col><Col id=\"rainfall\">36</Col><Col id=\"mean\">45.3</Col></Row><Row><Col id=\"name\">LUCAS HEIGHTS</Col><Col id=\"rainfall\">28.9</Col><Col id=\"mean\">50.9</Col></Row><Row><Col id=\"name\">CASTLE COVE</Col><Col id=\"rainfall\">101</Col><Col id=\"mean\">69.2</Col></Row><Row><Col id=\"name\">PARRAMATTA NORTH</Col><Col id=\"rainfall\">33.6</Col><Col id=\"mean\">52.4</Col></Row><Row><Col id=\"name\">COLLAROY</Col><Col id=\"rainfall\">91.4</Col><Col id=\"mean\">66.2</Col></Row><Row><Col id=\"name\">BANKSTOWN AIRPORT AWS</Col><Col id=\"rainfall\">33.4</Col><Col id=\"mean\">43.6</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","1.82%","10",null,"80","1.82%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("BtnRotate","0","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("rotate axis");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnGrouping","BtnRotate:2","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("grouping bar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnStack","BtnGrouping:2","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("stack type");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnCategoryRotate","BtnStack:2","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("category angle");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnBarType","0","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("bar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineType","BtnBarType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("line");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineAreaType","BtnLineType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("area");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnCategoryOpposite","BtnCategoryRotate:2","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("category oppo.");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineBarType","BtnLineAreaType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("line+bar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineAreaBarType","BtnLineBarType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("line+area+bar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineShape","BtnCategoryOpposite:2","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("line shape");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnPointShape","BtnLineShape:2","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("point shape");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLinePointType","BtnLineAreaBarType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("line point");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnPointType","BtnLinePointType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("point");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnOppoAxis","BtnPointShape:1","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("valuexis oppo.");
            this.Div00.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","30","91",null,null,"30","25",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsRainfall");
            obj.set_enableanimation("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Basic Chart",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "bar, line, area",
            		"subtextalign": "right",
            		"subtextcolor": "gray",
            		"subtextfont": "italic 10pt \"Arial\"",
            		"textalign": "center",
            		"textcolor": "green"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"itemautofit": "false"
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "8"
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "8"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletext": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "9pt \"Arial\"",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"rangezoom": "true",
            		"opposite": "false"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"barvisible": "true",
            			"barsize": "80",
            			"itemtextvisible": "false",
            			"itemtextfont": "9pt \"Arial\"",
            			"valuecolumn": "bind:rainfall",
            			"itemtextcolor": "black",
            			"baropacity": "1",
            			"titletext": "rainfall"
            		},
            		{
            			"id": "series1",
            			"titletext": "mean",
            			"barvisible": true,
            			"barsize": "60",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "9pt \"Arial\"",
            			"valuecolumn": "bind:mean"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"titletext": "valueaxis",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "9pt \"Arial\"",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"rangezoom": "true"
            		}
            	],
            	"selection": {
            		"id": "selection",
            		"type": "xy",
            		"linestyle": "1px solid #525252",
            		"background": "#525252",
            		"opacity": "0.5"
            	},
            	"crosshair": {
            		"id": "crosshair",
            		"type": "xy",
            		"xlinestyle": "1px solid #525252",
            		"ylinestyle": "1px solid #525252",
            		"tooltiptype": "xy",
            		"visible": "true"
            	}
            });
            obj.set_categorycolumn("bind:name");
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

        this.Div00_BtnBarType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(true);
        		this.BasicChart00.seriesset[i].set_linevisible(false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLineType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(true);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLineAreaType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(true);
        		this.BasicChart00.seriesset[i].set_lineareavisible(true);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };


        this.Div00_BtnLineBarType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(i==0 ? false : true);
        		this.BasicChart00.seriesset[i].set_linevisible(i==0 ? true : false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLineAreaBarType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(i==0 ? false : true);
        		this.BasicChart00.seriesset[i].set_linevisible(i==0 ? true : false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(i==0 ? true : false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLinePointType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(true);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(true);
        	}
        };

        this.Div00_BtnRotate_onclick = function(obj,e)
        {
        	this.BasicChart00.set_rotateaxis(!this.BasicChart00.rotateaxis);
        };

        this.Div00_BtnGrouping_onclick = function(obj,e)
        {
        	this.BasicChart00.set_bargrouping(!this.BasicChart00.bargrouping);
        };

        this.Div00_BtnStack_onclick = function(obj,e)
        {
        	var type = this.BasicChart00.stacktype;
        	switch (type)
        	{
        	case "none":
        		this.BasicChart00.set_stacktype("normal");
        	break;
        	case "normal":
        		this.BasicChart00.set_stacktype("percent");
        	break;
        	case "percent":
        		this.BasicChart00.set_stacktype("none");
        	break;
        	}

        };

        this.Div00_BtnCategoryRotate_onclick = function(obj,e)
        {
        	var angle = this.BasicChart00.categoryaxis.labelrotate | 0;
        	angle -= 15;
        	this.BasicChart00.categoryaxis.set_labelrotate(angle);
        };

        this.Div00_BtnCategoryOpposite_onclick = function(obj,e)
        {
        	this.BasicChart00.categoryaxis.set_opposite(!this.BasicChart00.categoryaxis.opposite);
        };

        this.Div00_BtnLineShape_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		if ( this.BasicChart00.seriesset[i].linevisible)
        		{
        			var type = this.BasicChart00.seriesset[i].linetype;
        			switch (type)
        			{
        				case "":
        				case "segment":
        					this.BasicChart00.seriesset[i].set_linetype("step");
        					break;

        				case "step":
        					this.BasicChart00.seriesset[i].set_linetype("curve");
        					break;

        				case "curve":
        					this.BasicChart00.seriesset[i].set_linetype("segment");
        					break;
        			}
        		}
        	}
        };

        var shape_pos = 0, same_shape = true;
        this.Div00_BtnPointShape_onclick = function(obj,e)
        {
        	shape_pos++;

        	var cnt = this.BasicChart00.seriesset.length;
        	if (same_shape && shape_pos >= 5 || !same_shape && shape_pos >= (6-cnt))
        	{
        		shape_pos = 0; same_shape = !same_shape;
        	}

        	var shapeset = ["circle", "square", "diamond", "triangle", "cross"];
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		if (same_shape)
        		{
        			this.BasicChart00.seriesset[i].set_pointshape(shapeset[shape_pos]);
        		}
        		else
        		{
        			this.BasicChart00.seriesset[i].set_pointshape(shapeset[shape_pos + i]);
        		}
        	}

        };

        this.Div00_BtnPointType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(true);
        	}
        };

        this.Div00_BtnOppoAxis_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.valueaxes.length;
        	for (var i=0;i<cnt;i++)
        	{
        		var val = this.BasicChart00.valueaxes[i].opposite;
        		this.BasicChart00.valueaxes[i].set_opposite(!val);
        	}
        };


        this.BasicChart00_onmousemove = function(obj,e)
        {
        	var refobj = e.fromreferenceobject || obj;

        	this.StaDesc.set_text(refobj._type_name);

        	if (!this.StaDesc.visible)
        	{
        		this.StaDesc.set_visible(true);
        	}
        	this.StaDesc.move(obj.getOffsetLeft() + e.canvasx + 10, obj.getOffsetTop() + e.canvasy + 10);
        };

        this.BasicChart00_onmouseleave = function(obj,e)
        {
        	if (e.fromreferenceobject == obj)
        		this.StaDesc.set_visible(false);
        };

        this.BasicChart00_onmouseenter = function(obj,e)
        {
        	if (e.fromreferenceobject == obj)
        		this.StaDesc.set_visible(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.BtnRotate.addEventHandler("onclick",this.Div00_BtnRotate_onclick,this);
            this.Div00.form.BtnGrouping.addEventHandler("onclick",this.Div00_BtnGrouping_onclick,this);
            this.Div00.form.BtnStack.addEventHandler("onclick",this.Div00_BtnStack_onclick,this);
            this.Div00.form.BtnCategoryRotate.addEventHandler("onclick",this.Div00_BtnCategoryRotate_onclick,this);
            this.Div00.form.BtnBarType.addEventHandler("onclick",this.Div00_BtnBarType_onclick,this);
            this.Div00.form.BtnLineType.addEventHandler("onclick",this.Div00_BtnLineType_onclick,this);
            this.Div00.form.BtnLineAreaType.addEventHandler("onclick",this.Div00_BtnLineAreaType_onclick,this);
            this.Div00.form.BtnCategoryOpposite.addEventHandler("onclick",this.Div00_BtnCategoryOpposite_onclick,this);
            this.Div00.form.BtnLineBarType.addEventHandler("onclick",this.Div00_BtnLineBarType_onclick,this);
            this.Div00.form.BtnLineAreaBarType.addEventHandler("onclick",this.Div00_BtnLineAreaBarType_onclick,this);
            this.Div00.form.BtnLineShape.addEventHandler("onclick",this.Div00_BtnLineShape_onclick,this);
            this.Div00.form.BtnPointShape.addEventHandler("onclick",this.Div00_BtnPointShape_onclick,this);
            this.Div00.form.BtnLinePointType.addEventHandler("onclick",this.Div00_BtnLinePointType_onclick,this);
            this.Div00.form.BtnPointType.addEventHandler("onclick",this.Div00_BtnPointType_onclick,this);
            this.Div00.form.BtnOppoAxis.addEventHandler("onclick",this.Div00_BtnOppoAxis_onclick,this);
            this.BasicChart00.addEventHandler("onmousemove",this.BasicChart00_onmousemove,this);
            this.BasicChart00.addEventHandler("onmouseleave",this.BasicChart00_onmouseleave,this);
            this.BasicChart00.addEventHandler("onmouseenter",this.BasicChart00_onmouseenter,this);
        };

        this.loadIncludeScript("FeatureExample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
