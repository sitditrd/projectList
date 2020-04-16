(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comAlert");
            this.set_titletext("알림창");
            this.set_border("3px solid black");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnOk","21.33%",null,"55","25",null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","58.00%",null,"55","25",null,"9",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","21","36","260","68",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("미수신된 알림 메세지가 있습니다. \r\n확인하시겠습니까?");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,150,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comAlert.xfdl", function() {

        this.Arg;

        this.form_onload = function(obj,e)
        {
        	if(nexacro.getApplication().id == "nexacro17MDI"){
        		this.Arg = nexacro.getApplication().mainframe.VFrameSet.LoginFrame.form;
        	}else{
        		this.Arg = nexacro.getApplication().mainframe.ChildFrame.form.div_lgn.form;
        	}

        	trace("alert length :::::" + this.components.length);
        };

        this.btnOk_onclick = function(obj,e)
        {
        	for(var i in this.Arg.MsgCheck){
         		// 수신 확인 메시지 전송
         		this.Arg.XPush00.sendResponse(this.Arg.MsgCheck[i]);
         	}
        	var objFrame = new ChildFrame();
        	var objParentFrame = this.getOwnerFrame();
        	objFrame.init( "pushPopup", 0, 0, 400, 400 );
        	objFrame.set_formurl( "sample::pushPopup.xfdl" );
        	objFrame.set_overlaycolor("transparent");
        	objFrame.set_openalign("center middle");
        	objFrame.showModal( "pushPopup", objParentFrame, null, this, this.fn_callback );
        	this.close(true);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };

        this.loadIncludeScript("comAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
