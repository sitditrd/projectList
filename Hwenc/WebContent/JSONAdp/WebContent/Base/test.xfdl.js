(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("JSON 통신 테스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","8","43",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CtoS",null,"8","120","27","136",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Client->Server");
            this.addChild(obj.name, obj);

            obj = new Button("btn_StoC",null,"8","120","27","8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Server->Client");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Change",null,"8","120","27","264",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Txt_Change");
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
        this.registerScript("test.xfdl", function() {
        //Server -> Client
        this.fnStoCTransaction = function()
        {
        	this.transaction(
        						 "JSON"
        						,"jsonsvc::jsonTest.jsp"
        						,""
        						,"Dataset00=indata"
        						,""
        						,"fnCallBack"
        						,true
        						,2
        					);
        };

        //Client -> Server
        this.fnCtoSTransaction = function()
        {
        	this.transaction(
        						 "JSON"
        						,"jsonsvc::jsonTest.jsp"
        						,"indata=Dataset00:A"
        						,""
        						,"a=b"
        						,"fnCallBack"
        						,true
        						,2
        					);
        };

        this.fnCallBack = function(svcId, errCode, errMsg)
        {
        	if(errCode < 0)
        	{
        		this.alert("svcId : " + svcId + "\nerrCode : " + errCode + "\nerrMsg : " + errMsg);
        	}
        	else
        	{
        		if(svcId == "Common")
        		{
        			this.Grid00.createFormat();
        		}
        		else if(svcId == "JSON")
        		{
        			this.Grid00.createFormat();
        		}
        	}
        };

        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_CtoS" :
        			this.fnCtoSTransaction();
        			break;
        		case "btn_StoC" :
        			this.fnStoCTransaction();
        			break;
        		case "btn_Change" :
        			this.Dataset00.setColumn(0, 0, "$$$$$$$$$$$$$");
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_CtoS.addEventHandler("onclick",this.comm_Click,this);
            this.btn_StoC.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Change.addEventHandler("onclick",this.comm_Click,this);
        };

        this.loadIncludeScript("test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
