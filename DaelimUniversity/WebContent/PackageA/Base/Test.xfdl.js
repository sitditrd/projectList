(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00",null,"50","82","22","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","80",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Test.xfdl", function() {
        this.Button00_onclick = function(obj,e)
        {
        // 	var action = "select.do";
        //
        // 	this.transaction(
        // 		"select",
        // 		"http://localhost:8080/uiadapter17/" + action,
        // 		"",
        // 		"dsOutput=ds_list",
        // 		"",
        // 		"fn_callback"
        // 	);
        };

        this.fn_callback = function(svcId,nErrorCode,sErrMsg) {
        	if(nErrorCode < 0)
        	{
        		this.alert(id + ":" + sErrMsg); //실패시 sErrMsg를 띄운다.
        	}
        	else
        	{
        		if(svcId == "select")
        		{
        			this.alert(this.dsOutput.rowcount);
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("Test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
