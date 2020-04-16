(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_2_1");
            this.set_titletext("Javascript Library 연동");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","8","8","421","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("3rd Party 연동");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("div_tail01","10","40",null,"120","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"6","32","26","10",null,null,null,null,null,this.div_tail01.form);
            obj.set_taborder("0");
            obj.set_text("...");
            obj.set_cssclass("btn_WF_basic02");
            this.div_tail01.addChild(obj.name, obj);

            obj = new Div("div_tail02","10","167",null,"120","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"6","32","26","10",null,null,null,null,null,this.div_tail02.form);
            obj.set_taborder("0");
            obj.set_text("...");
            obj.set_cssclass("btn_WF_basic02");
            this.div_tail02.addChild(obj.name, obj);

            obj = new Div("div_tail03","10","293",null,"120","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("blue");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"6","32","26","10",null,null,null,null,null,this.div_tail03.form);
            obj.set_taborder("0");
            obj.set_text("...");
            obj.set_cssclass("btn_WF_basic02");
            this.div_tail03.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,691,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PoC_2_1.xfdl","lib::CommUtil.xjs");
        this.registerScript("PoC_2_1.xfdl", function() {
        this.executeIncludeScript("lib::CommUtil.xjs"); /*include "lib::CommUtil.xjs"*/;

        this.status = "normal";

        this.PoC_2_1_onload = function(obj,e)
        {
        	this.fn_initAni();
        };

        this.Button_onclick = function(obj,  e)
        {
        	this.fn_runAni(obj.parent.parent);
        };

        this.fn_initAni = function ()
        {
        	var i;
        	var objDiv;
        	for(i=1;i<4;i++)
        	{
        		objDiv = this.components["div_tail0"+i];
        		objDiv.orgLeft = objDiv.left;
        		objDiv.orgTop = objDiv.top;
        		objDiv.orgWidth = objDiv.width;
        		objDiv.orgHeight = objDiv.height;
        	}
        	this.divRight.orgLeft = this.divRight.left;
        	this.divRight.orgTop = this.divRight.top;
        	this.divRight.orgWidth = this.divRight.width;
        	this.divRight.orgHeight = this.divRight.height;
        };

        this.fn_runAni = function (obj)
        {
        	var i;
        	var objDiv;
        	var nTop = this.Static01.getOffsetHeight() + 8;
        	var nLeft = 8;
        	var nMaxHeight = 350;
        	var nMinHeight = 50;

        	for(i=1;i<4;i++)
        	{
        		objDiv = this.components["div_tail0"+i];
        		//objDiv.set_top(nTop);
        		$(this.jquerid(objDiv)).animate({"left" : "8px"}, {"duration":1000, "queue": false}).animate({"top" : nTop} );

        		if(objDiv.name==obj.name)
        		{
        			$(this.jquerid(objDiv)).animate({"height" : "350px"}, {"duration":1000, "queue": false});
        			//objDiv.set_height(nMaxHeight);
        			nTop = nTop+nMaxHeight+7;

        		}else
        		{
        			$(this.jquerid(objDiv)).animate({"height" : "50px"}, {"duration":1000, "queue": false});
        			//objDiv.set_height(nMinHeight);
        			nTop = nTop+nMinHeight+7;
        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PoC_2_1_onload,this);
            this.div_tail01.form.Button00.addEventHandler("onclick",this.Button_onclick,this);
            this.div_tail02.form.Button00.addEventHandler("onclick",this.Button_onclick,this);
            this.div_tail03.form.Button00.addEventHandler("onclick",this.Button_onclick,this);
        };

        this.loadIncludeScript("PoC_2_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
