(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("logIn");
            this.set_titletext("LogIn Frame");
            this.set_background("#23384b");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,951);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new XPush("XPush00", this);
            obj.set_layouturl("push_url::push_message_layout.xml");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_login","41%","32.18%","230","338",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","0","0",null,"65","0",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("5");
            obj.set_cssclass("img_LF_Logo");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_userId","0","88",null,"58","0",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_LOGIN_FieldBg");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_pwd","0","154",null,"58","0",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_LOGIN_FieldBg");
            this.div_login.addChild(obj.name, obj);

            obj = new ImageViewer("img_userId","0","104","30","29",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("8");
            obj.set_cssclass("img_LF_LogId");
            this.div_login.addChild(obj.name, obj);

            obj = new ImageViewer("img_pwd","0","170","30","29",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("9");
            obj.set_cssclass("img_LF_LogPwd");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_userId","40","108",null,"21","0",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_cssclass("edi_LOGIN_IdPwd");
            obj.set_displaynulltext("아이디 입력");
            obj.set_inputmode("normal");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_pwd","40","174",null,"21","0",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_cssclass("edi_LOGIN_IdPwd");
            obj.set_displaynulltext("비밀번호 입력");
            obj.set_password("true");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_login","0",null,null,"45","0","0",null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.set_cssclass("btn_LOGIN_Action");
            this.div_login.addChild(obj.name, obj);

            obj = new CheckBox("chk_userId","33","230","78","28",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_text("아이디저장");
            obj.set_cssclass("chk_LOGIN_IdSave");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_question",null,"233","50","23","33",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("4");
            obj.set_text("문의하기");
            obj.set_cssclass("sta_LOGIN_Help");
            this.div_login.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","ScreenDeskTop",1278,951,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("logIn.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.Qualifyier;
        this.countVal;
        this.MsgCheck = [];
        this.strId;
        this.strPw;

        this.logIn_onload = function(obj,e)
        {
        	if(nexacro.getApplication().id == "nexacro17MDI"){
        		this.Qualifyier = nexacro.getApplication().mainframe.VFrameSet.TopFrame.form;
            }
        	this.div_login.form.set_scrollbartype("none");
        	this.logIn_onsize();
        	this.div_login.form.edt_userId.setFocus();
        };

        this.logIn_ontimer = function(obj,e)
        {
        // 	this.objApp.mainframe.VFrameSet.TopFrame.set_formurl("frame::top.xfdl");
        // 	this.objApp.mainframe.VFrameSet.OpenMenuFrame.set_formurl("frame::openMenu.xfdl");
        // 	this.objApp.mainframe.VFrameSet.HomeFrame.set_formurl("frame::home.xfdl");

        	this.nTemp = this.countVal;

        	//timerid가 1일때만 수행
        	if(e.timerid == 1)
        	{
        		if(!(this.nTemp > this.countVal))
        		{
        			this.killTimer(1);
        			var objFrame = new ChildFrame();
        				var objParentFrame = this.getOwnerFrame();
        				objFrame.init( "comAlert", 0, 0, 400, 400 );
        				objFrame.set_formurl( "sample::comAlert.xfdl" );
        				objFrame.set_overlaycolor("transparent");
        				objFrame.set_openalign("center middle");
        				objFrame.showModal( "comAlert", objParentFrame, null, this, this.fn_callback );
        		}
        	}
        };

        this.logIn_onsize = function(obj,e)
        {
        	var nLeft = (this.objApp.mainframe.width / 2) - Math.round((this.div_login.form.getOffsetWidth()) / 2);
        	var nTop = (this.objApp.mainframe.height / 2) - Math.round((this.div_login.form.getOffsetHeight()) / 2);

        	if (nLeft <= 0)
        	{
        		this.div_login.form.setOffsetLeft(0);
        	}
        	else
        	{
        		this.div_login.setOffsetLeft(nLeft);
        		this.div_login.setOffsetTop(nTop);
        	}
        };

        this.div_login_btn_login_onclick = function(obj,e)
        {
        	this.fn_dologin();
        };

        this.fn_dologin = function()
        {
        	this.strId = this.div_login.form.edt_userId.value;
        	this.strPw = this.div_login.form.edt_pwd.value;

        	if(nexacro.getApplication().id == "nexacro17MDI")
        	{
        		this.objApp.mainframe.VFrameSet.set_separatesize("0,64,33,*,0");
        	}else{
        		this.getOwnerFrame().form.div_lgn.set_visible(false);
        	}
        	this.objApp.gdsMessage.clearData();
        	//Push server ip 셋팅(전용브라우저 10081, HTML 10080// ip 변경은 xpush 설치경로/conf/xpush_config.xml 수정)
        	if(system.navigatorname == "nexacro"){
        		this.XPush00.set_iplist("tcp://14.63.224.112:10081");
        	}else{
        		this.XPush00.set_iplist("http://14.63.224.112:10080");
        	}

        	this.XPush00.connect(this.div_login.form.edt_userId.value);

        	//메뉴생성
        	if(nexacro.getApplication().id == "nexacro17MDI"){
        		this.Qualifyier.initTopMenu();
        		this.Qualifyier.div_top.form.img_userInfo.set_image("URL('theme://images/test_admin.jpg')");
        		if(this.strId.indexOf("user0") > -1){
        			this.Qualifyier.div_top.form.div_topBtn.form.btn_3001.set_visible(false);
        			this.Qualifyier.div_top.form.img_userInfo.set_image("URL('theme://images/test_person2.jpg')");
        		}else{
        			this.Qualifyier.initTopMenu();
        		}
        	}
        }

        this.XPush00_onerror = function(obj,e)
        {
        // 	alert("XPush00_onerror Event\n" +
        // 		" - action: " + e.action + "\n" +
        // 		" - errormsg: " + e.errormsg + "\n" +
        // 		" - errortype: " + e.errortype + "\n" +
        // 		" - eventid: " + e.eventid + "\n" +
        // 		" - message: " + e.message + "\n" +
        // 		" - serverip: " + e.serverip + "\n" +
        // 		" - serverport: " + e.serverport + "\n");

        	if (e.message != null)
        	{
        		trace("e.message != null\n" +
                  "e.message.messagetype: " + e.message.messagetype + "\n" +
                  "e.message.messagekey: " + e.message.messagekey + "\n" +
                  "e.message.messageid: " + e.message.messageid + "\n");
        	}
        };

        this.XPush00_onsuccess = function(obj,e)
        {
        // 	trace("XPush00_onsuccess Event\n" +
        // 		" - action: " + e.action + "\n" +
        // 		" - eventid: " + e.eventid + "\n" +
        // 		" - e.message: " + e.message + "\n" +
        // 		" - e.returnvalue : " + e.returnvalue +
        // 		" - serverip: " + e.serverip + "\n" +
        // 		" - serverport: " + e.serverport + "\n"
        // 		);

        	if (e.message != null)
        	  {
        // 		trace("e.message != null\n" +
        // 			  "e.message.messagetype: " + e.message.messagetype + "\n" +
        // 			  "e.message.messagekey: " + e.message.messagekey + "\n" +
        // 			  "e.message.messageid: " + e.message.messageid + "\n");

        // 		if(e.message.returnvalue != undefined || e.message.returnvalue != null)
        // 		{
        // 		  var returnvalue = e.message.returnvalue;
        // 		  for(var i = 0; i < returnvalue.length; i++)
        // 			trace("index:" + i + " : " + returnvalue[i].topictype + " : " + returnvalue[i].topicid + " : " + returnvalue[i].count);
        // 		}
        	  }

        	if (e.action == 10 && e.message != null)//requestMessageCount() 메소드로 미수신된 신뢰성 메시지 갯수요청에 성공했을 때
        	{
        		this.countVal = e.returnvalue;
        		//alert("e.message != null\n" +
        // 		trace("e.message != null\n" +
        // 			" - e.message.messagekey: " + e.message.messagekey + "\n" +
        // 			" - e.message.messageid: " + e.message.messageid + "\n" +
        // 			" - e.message.returnvalue: " + e.message.returnvalue + "\n" +
        // 			" - e.message.devicetoken: " + e.message.devicetoken);
        // 		if(e.message.returnvalue != undefined || e.message.returnvalue != null) {
        // 			var returnvalue = e.message.returnvalue;
        // 			for(var i = 0; i < returnvalue.length; i++) {
        // 				alert("index:" + i + " : " + returnvalue[i].topictype + " : " + returnvalue[i].topicid + " : " + returnvalue[i].count);
        // 				//trace("index:" + i + " : " + returnvalue[i].topictype + " : " + returnvalue[i].topicid + " : " + returnvalue[i].count);
        // 			}
        //		}
        	}
        	if( e.action == 0) {//connect() 메소드로 Push 서버 연결에 성공했을 때
        		/*trace("connection success");*/

        		/*Push server에 토픽 등록 */
        		/* layout id와 데이터셋 컬럼명 이 동일해야함 */
        		/* 첫번째 컬럼명은 topic_id  */
        		if(this.div_login.form.edt_userId.value == "admin"){
        			this.XPush00.subscribe( "NOTI", "ADMIN",  this, this.objApp.gdsMessage,  "insert", "fn_PushCallback"  );
        		}else{
        			this.XPush00.subscribe( "NOTI", "GROUP",  this, this.objApp.gdsMessage,  "insert", "fn_PushCallback"  );
        		}
        	}
        	if(e.action == 1){//disconnect() 메소드로 Push 서버의 연결해제에 성공했을 때
        		//alert("Xpush 연결 해제");
        	}
        	if( e.action == 2) {//subscribe() 메소드로 Topic 추가에 성공했을 때
        		//alert("subscrive success");
        		/* 미수신 메시지 요청 */
        		this.XPush00.requestMessage(e.message.messagetype, e.message.messagekey);
        	}if(e.action == 4) {//requestMessage() 메소드로 미수신 메시지 요청에 성공했을 때

        	}
        	//admin 사용자 등록 성공
        	if(e.action == 8) {//registerTopicWithUserID() 메소드로 미수신 메시지 요청에 성공했을 때
        		this.alert("사용자 등록에 성공했습니다");
        	}
        };

        this.fn_PushCallback = function (Row, ChangeColumn, AllColumns, Type, ActionType, MessageId)
        {
        // 	trace("fn_PushCallback\n" +
        // 		" - ActionType : " + ActionType + "\n" +
        // 		" - Row : " + Row + "\n" +
        // 		" - MessageId : " + MessageId + "\n" );

        	this.MsgCheck.push(MessageId);
        	this.setTimer(1, 1000)

        	if (ActionType == "PUSH") {
        		trace("------------------------------");
        		trace(this.objApp.gdsMessage.getColumn(Row, "TOPIC_ID"));
        		trace(this.objApp.gdsMessage.getColumn(Row, "DATA_01"));
        		trace(this.objApp.gdsMessage.getColumn(Row, "DATA_02"));
        	}

        	if (ActionType == "RELI") {
        		trace("------------------------------");
        		trace(this.objApp.gdsMessage.getColumn(Row, "TOPIC_ID"));
        		trace(this.objApp.gdsMessage.getColumn(Row, "DATA_01"));
        		trace(this.objApp.gdsMessage.getColumn(Row, "DATA_02"));
        		trace(this.objApp.gdsMessage.saveXML());
        	}
        }

        this.logIn_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_dologin();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.logIn_onload,this);
            this.addEventHandler("onsize",this.logIn_onsize,this);
            this.addEventHandler("ontimer",this.logIn_ontimer,this);
            this.addEventHandler("onkeydown",this.logIn_onkeydown,this);
            this.div_login.form.edt_userId.addEventHandler("oninput",this.div_login_edt_userId_oninput,this);
            this.div_login.form.btn_login.addEventHandler("onclick",this.div_login_btn_login_onclick,this);
            this.div_login.form.sta_question.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.XPush00.addEventHandler("onerror",this.XPush00_onerror,this);
            this.XPush00.addEventHandler("onsuccess",this.XPush00_onsuccess,this);
        };

        this.loadIncludeScript("logIn.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
