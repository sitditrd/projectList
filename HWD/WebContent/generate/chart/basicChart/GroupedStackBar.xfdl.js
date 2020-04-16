(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GroupedStackBar");
            this.set_titletext("StackbarGroup");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsCostProfit");
            obj.set_rotateaxis("true");
            obj.set_enableanimation("false");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Stackbar Grouping",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "Basic Chart > Bar Chart"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"itemautofit": "true"
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
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "11pt '맑은 고딕'",
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
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"labeltype": "currency"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "profit1",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "10pt '맑은 고딕'",
            			"valuecolumn": "bind:profit",
            			"stacktype": "normal",
            			"stackbargroup": "profit",
            			"barlinestyle": "1px solid #1f77b4",
            			"barfillstyle": "#1f77b4",
            			"itemtextposition": "inside middle"
            		},
            		{
            			"id": "series1",
            			"titletext": "cost1",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "10pt '맑은 고딕'",
            			"valuecolumn": "bind:cost",
            			"stacktype": "normal",
            			"stackbargroup": "cost",
            			"barlinestyle": "1px solid #aec7e8",
            			"barfillstyle": "#aec7e8",
            			"itemtextposition": "inside middle"
            		},
            		{
            			"id": "series3",
            			"titletext": "profit2",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "10pt '맑은 고딕'",
            			"valuecolumn": "bind:profit1",
            			"stacktype": "normal",
            			"stackbargroup": "profit",
            			"barlinestyle": "1px solid #ff7f0e",
            			"barfillstyle": "#ff7f0e",
            			"itemtextposition": "inside middle"
            		},
            		{
            			"id": "series4",
            			"titletext": "cost2",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "10pt '맑은 고딕'",
            			"valuecolumn": "bind:cost1",
            			"stacktype": "normal",
            			"stackbargroup": "cost",
            			"barlinestyle": "1px solid #ffbb78",
            			"barfillstyle": "#ffbb78",
            			"itemtextposition": "inside middle"
            		}
            	]
            });
            obj.set_categorycolumn("bind:category");
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
        this.registerScript("GroupedStackBar.xfdl", function() {

        this.BasicChart00_onaxisclick = function(obj,e)
        {
        	if(e.fromreferenceobject instanceof nexacro.ChartAxisControl)
        	{
        		var index = this.fn_getAxisPos(e, e.fromreferenceobject);
        		if(index >= 0)
        		{
        			trace(index);
        		}
        	}
        };

        this.fn_getAxisPos = function(e, axis)
        {
        	var ticks = axis._ticks;
        	if(!ticks || ticks.length == 0) return -1;

        	var clickX = e.canvasx;
        	var clickY = e.canvasy;

        	var tick, labelElement, bounds;
        	for(var i=0;i<ticks.length;i++)
        	{
        		tick = ticks[i];
        		if(tick.labelElement)
        		{
        			bounds = tick.labelElement._bounds;
        			if(	(clickX >= bounds.left && clickX <= bounds.right) &&
        				(clickY >= bounds.top && clickY <= bounds.bottom) )
        			{
        				return i;
        			}
        		}
        	}
        	return  -1;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.BasicChart00.addEventHandler("onaxisclick",this.BasicChart00_onaxisclick,this);
        };

        this.loadIncludeScript("GroupedStackBar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
