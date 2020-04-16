(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pushPopup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_01\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOPIC_ID\"/><Col id=\"DATA_01\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","5","5",null,null,"5","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("none");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"146\"/><Column size=\"412\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"종류\"/><Cell col=\"1\" text=\"수신메세지\"/></Band><Band id=\"body\"><Cell text=\"bind:TOPIC_ID\"/><Cell col=\"1\" text=\"bind:DATA_01\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","228","136","108",null,null,"5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,170,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pushPopup.xfdl", function() {
        var objDs = nexacro.getApplication().gdsMessage;
        this.pushPopup_onload = function(obj,e)
        {
        	this.ds00.appendData(objDs);
        };

        this.btn00_onclick = function(obj,e)
        {
        	this.close();
        };

        this.pushPopup_onclose = function(obj,e)
        {
        	this.ds00.clearData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pushPopup_onload,this);
            this.addEventHandler("onclose",this.pushPopup_onclose,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("pushPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
