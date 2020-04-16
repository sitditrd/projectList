(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PROVIDER");
            this.set_titletext("Employees");
            if (Form == this.constructor)
            {
                this._setFormPosition(862,623);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("RadioDs", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Action\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Action\">PUSH</Col><Col id=\"Code\">1</Col></Row><Row><Col id=\"Action\">RELI</Col><Col id=\"Code\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSend", this);
            obj._setContents("<ColumnInfo><Column id=\"host\" type=\"STRING\" size=\"256\"/><Column id=\"port\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"topicType\" type=\"STRING\" size=\"256\"/><Column id=\"topicID\" type=\"STRING\" size=\"256\"/><Column id=\"messages\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"host\">localhost</Col><Col id=\"port\">10082</Col><Col id=\"topicType\">NOTI</Col><Col id=\"id\">tobesoft</Col><Col id=\"pw\">xpush</Col><Col id=\"topicID\">GROUP</Col><Col id=\"messages\">메세지전송</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResponse", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","37","89","726","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("div_WF_searchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","260","10","95","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("UserID:");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","400","10","62","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("PW:");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","30","10","21","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("IP:");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","144","10","37","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Port:");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","66","166","167","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Topic Type (Message Type)");
            obj.set_cssclass("sta_WF_table_required");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","232","166","282","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","232","256","483","164",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","66","203","167","41",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Topic ID (Message Group)");
            obj.set_cssclass("sta_WF_table_required");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","113","256","120","164",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("메시지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","258","286","417","100",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_scrollbarbarminsize("20");
            obj.set_scrollbarbaroutsize("20");
            obj.set_scrollbarsize("10");
            obj.set_scrollbartrackbarsize("25");
            obj.set_value("메시지전송");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","514","163","201","81",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","580","95","136","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_direction("vertical");
            obj.set_innerdataset("RadioDs");
            obj.set_datacolumn("Action");
            obj.set_codecolumn("Code");
            obj.set_text("RELI");
            obj.set_value("2");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","485","430","124","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("메세지 전송");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","220","103","60","17",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("10082");
            obj.set_text("10082");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","350","103","72","16",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("tobesoft");
            obj.set_text("tobesoft");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","466","102","60","17",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("xpush");
            obj.set_text("xpush");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","260","179","162","18",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("NOTI");
            obj.set_text("NOTI");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","100","102","72","17",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("14.63.224.112");
            obj.set_text("14.63.224.112");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","336","430","124","29",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("사용자 등록");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","113","241","120","41",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("User ID");
            obj.set_cssclass("sta_WF_table_required");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("UserID","261","250","162","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"39","2",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","40","21","7",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","10","10","264","16",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("X-PUSH Provider");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo00","260","214","162","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbo00_innerdataset = new nexacro.NormalDataset("cbo00_innerdataset", obj);
            cbo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GROUP</Col><Col id=\"datacolumn\">GROUP</Col></Row><Row><Col id=\"codecolumn\">T01</Col><Col id=\"datacolumn\">T01</Col></Row><Row><Col id=\"codecolumn\">T02</Col><Col id=\"datacolumn\">T02</Col></Row><Row><Col id=\"codecolumn\">T03</Col><Col id=\"datacolumn\">T03</Col></Row><Row><Col id=\"codecolumn\">T04</Col><Col id=\"datacolumn\">T04</Col></Row><Row><Col id=\"codecolumn\">ADMIN</Col><Col id=\"datacolumn\">ADMIN</Col></Row></Rows>");
            obj.set_innerdataset(cbo00_innerdataset);
            obj.set_text("GROUP");
            obj.set_value("GROUP");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",862,623,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample_provider.xfdl", function() {
        var topicType = this.Edit05.value;
        var topicID = this.Edit06.value;
        this.Arg = nexacro.getApplication().mainframe.VFrameSet.LoginFrame.form;
        this.Button05_onclick = function(obj,e)
        {
         	var ip = this.Edit01.value;
         	var port = this.Edit02.value;
          	var id = this.Edit03.value;
          	var pw = this.Edit04.value;
         	var messages = this.TextArea00.value;
        	topicType = this.Edit05.value;
        	topicID = this.Edit06.value;

        	this.dsSend.setColumn(0, "host", ip);
        	this.dsSend.setColumn(0,"port",port);
        	this.dsSend.setColumn(0,"id",id);
        	this.dsSend.setColumn(0,"pw",pw);
        	this.dsSend.setColumn(0,"topicType",topicType);
        	this.dsSend.setColumn(0,"topicID",topicID);
        	this.dsSend.setColumn(0,"messages", messages);

        	var url = "http://14.63.224.112:80/xpush-provider-api/xpush/v1/api/send";
        	//var arg="ip="+ip + " port="+port +" id="+id + " pw="+pw + " messages="+messages + " topicType="+topicType +" topicID="+topicID;
        	var arg = "";

        	var callback = "fn_callback";
        	var inDataSet = "inDs01=dsSend:U";
        	var outDataSet = "";
        	var serviceId = "providerService";
        	this.transaction(serviceId , url , inDataSet , outDataSet , arg , callback);
        };



        this.fn_callback = function(serviceID, errorCode, errorMessage)
        {
        	if(errorCode == 0){
        		this.alert("메세지 전송에 성공하였습니다");
        	}else{
        		this.alert("메세지 전송에 실패하였습니다. 원인 :: " + errorMessage);
        	}
        }

        // this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	topicType = this.Edit05.value;
        // 	topicID = this.Edit06.value;
        // };

        this.Button01_onclick = function(obj,e)
        {
        	trace("topicType ::" + topicType + "topicID ::" + topicID);
        	this.Arg.XPush00.registerTopicWithUserID(topicType, topicID, this.UserID.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.EMPLOYEES_onload,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnSearch,this);
        };

        this.loadIncludeScript("sample_provider.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
