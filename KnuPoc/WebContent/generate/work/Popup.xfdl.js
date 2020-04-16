(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","69",null,null,"10","54",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsUser");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","34.25%",null,null,"34","37.5%","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_escapebutton("true");
            obj.set_cssclass("btn_WF_btnR");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,"54","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("학생정보");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Popup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("Popup.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("Popup.xfdl", function() {
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/;

        this.Popup_onload = function(obj,e)
        {
        	this.dsUser.assign(this.parent.CheckUser);
        	this.Grid00.createFormat();
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.fnReturnOne(this.dsUser.rowposition);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        };

        this.fnReturnOne = function(row)
        {
        	var dsReturn = new nexacro.Dataset();
        	dsReturn.assign(this.dsUser);
        	dsReturn.clearData();
        	var newrow = dsReturn.addRow();
        	dsReturn.copyRow(newrow, this.dsUser, row);
        	this.commUtil.popupClose(dsReturn);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.dsUser.addEventHandler("onload",this.dsUser_onload,this);
        };

        this.loadIncludeScript("Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
