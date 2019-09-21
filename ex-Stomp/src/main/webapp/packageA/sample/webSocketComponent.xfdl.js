(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("webSocketComponent");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new webSocketComponent("webSocketComponent00", this);
            obj.set_url("ws://localhost:8080/ex-Stomp/chat-ws");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","8","8",null,"90","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00",null,"98","252",null,"8","97",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","8","98",null,null,"TextArea00:0","97",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","8",null,null,"90","8","8",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","16","TextArea01:23",null,"42","268",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","Edit00:41","TextArea00:21","188","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전송");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","28","31","65","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("현재 참여자");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","101","31","25","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("( )");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","142","31","9","45",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("|");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","159","31","1096","45",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_color("black");
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
        this.registerScript("webSocketComponent.xfdl", function() {
        this.webSocketComponent_onload = function(obj,e)
        {
        	this.webSocketComponent00.connect();
        	this.Edit00.setFocus();
        };

        this.webSocketComponent00_getMessage = function(obj,e)
        {
        	var arrList = new Array();
        	var arrList2 = new Array();

        	var strRtn = e.message;
        	var entryId = "";
        	var exitId = "";

        	var strTemp = "";
        	var resTemp = "";

        	arrList = strRtn.split(":");

        	if(arrList[0] == "userSize")
        	{
        		//인원 수, 사용자 ID 지정
        		arrList2 = arrList[1].split(",");

        		//입장 ID 지정
        		entryId = arrList2[0];

        		//인원 수 지정
        		this.Static02.set_text("( "+arrList2[1]+" )");

        		//사용자 ID 지정
        		this.Static06.set_text(arrList2[2]);

        		//TextArea00 초기화 작업
        		this.TextArea00.set_value("");

        		this.TextArea01.insertText(entryId + " 님이 연결되었습니다.\n");

        		strTemp = arrList2[2];

        		for(var i=0; i<strTemp.length; i++)
        		{
        			if(strTemp.charAt(i) == " ")
        			{
        				this.TextArea00.insertText(resTemp + " 님\n");
        				resTemp = "";
        			}
        			else
        			{
        				resTemp += strTemp.charAt(i);
        			}
        		}

        	}
        	else if(arrList[0] == "delete")
        	{
        		strTemp = "";
        		resTemp = "";

        		//인원 수, 사용자 ID 지정
        		arrList2 = arrList[1].split(",");

        		//입장 ID 지정
        		exitId = arrList2[0];

        		//인원 수 지정
        		this.Static02.set_text("( "+arrList2[1]+" )");

        		//사용자 ID 지정
        		this.Static06.set_text(arrList2[2]);

        		//TextArea00 초기화 작업
        		this.TextArea00.set_value("");

        		this.TextArea01.insertText(exitId + " 님이 퇴장하셨습니다.\n");

        		strTemp = arrList2[2];

        		for(var i=0; i<strTemp.length; i++)
        		{
        			if(strTemp.charAt(i) == " ")
        			{
        				this.TextArea00.insertText(resTemp + " 님\n");
        				resTemp = "";
        			}
        			else
        			{
        				resTemp += strTemp.charAt(i);
        			}
        		}

        	}
        	else if(arrList[0] == "userMessage")
        	{
        		this.TextArea01.insertText(arrList[1] + " : " + arrList[2] + "\n");
        		this.TextArea01.setFocus(); //자동개행 효과.
        	}
        };

        this.Button00_onclick = function(obj,e)
        {
        	var textMessage = this.Edit00.value;
        	this.webSocketComponent00.textMessage(textMessage);
        	this.Edit00.set_value("");
        };

        this.Edit00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		var textMessage = this.Edit00.value;
        		this.webSocketComponent00.textMessage(textMessage);
        		this.Edit00.set_value("");
        	}
        };

        this.TextArea01_onkeydown = function(obj,e)
        {
        	this.Edit00.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.webSocketComponent_onload,this);
            this.TextArea00.addEventHandler("onkeydown",this.TextArea01_onkeydown,this);
            this.TextArea01.addEventHandler("onkeydown",this.TextArea01_onkeydown,this);
            this.Edit00.addEventHandler("onkeydown",this.Edit00_onkeydown,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.webSocketComponent00.addEventHandler("getMessage",this.webSocketComponent00_getMessage,this);
        };

        this.loadIncludeScript("webSocketComponent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
