//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.0.html	
//
//==============================================================================
//==============================================================================
// Object : nexacro.webSocketComponent
// Group : Component
//==============================================================================
if (!nexacro.webSocketComponent)
{
    //==============================================================================
    // nexacro.webSocketComponent
    //==============================================================================
    nexacro.webSocketComponent = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Static.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pwebSocketComponent = nexacro._createPrototype(nexacro.Static, nexacro.webSocketComponent);
    nexacro.webSocketComponent.prototype = _pwebSocketComponent;
    _pwebSocketComponent._type_name = "webSocketComponent";
   
   _pwebSocketComponent._event_list = {
		"getMessage" : 1
	};	
	
    /* internal variable */
	/*
    _pwebSocketComponent._is_focus_accept = true;          //focus를 받을지 여부	
	_pwebSocketComponent._is_scrollable = false;	       //scroll을 
    */

    /* status */
	/*
	
    _pwebSocketComponent._use_pushed_status = true;  //push status 를 지원하는지 여부
    _pwebSocketComponent._use_selected_status = true;  //select status를 지원하는지 여부
	_pwebSocketComponent._use_readonly_status = false;	//readonly status를 지원하는지 여부
    */
	
    /* accessibility */
    _pwebSocketComponent.accessibilityrole = "button";
   	
    //===============================================================
    // nexacro.webSocketComponent : Create & Destroy & Update
    //===============================================================
	
	/*
	 Description : createComponent 실행시 nexacro.ControlElement 를 생성 후 호출됨
	 Todo :
	 control이 있다면 create() & createComponent() 호출
	 return : 없음
    _pwebSocketComponent.on_create_contents = function ()
	{
		//control create 
		//control createComponent();		
	};
	*/
	
	/*
	 Description : on_created 실행시 호출됨
	               on_created() 는 component의 Element를 Node를 생성하여 실체화한다 
				   동적으로 component를 생성하면 호출됨
	 Todo :
	 control property 설정 및 control.on_created() 호출한다.
	 parameter : win (component 가 속한 nexacro._Window)
	 return : 없음
    _pwebSocketComponent.on_created_contents = function (win)
	{		 
	  	//control on_created(win);		
	};
	*/
	 
	 /*
	  Description : form load시 component를 innerhtml 형태로 string을 리턴함
	   on_created_contents 함수에서 element에서 설정한 코딩과 동일하게 작성함
	   container component가 내부 component를 일괄 생성될때 호출됨
	 Todo :
	 control 의 createCommand() 함수를 호출해 innerhtml 형태의 string을 만든다. 
	 parameter : 없음
	 return : string (control의 innerhtml형태의 string)
	 
    _pwebSocketComponent.on_create_contents_command = function ()
	{
		TODO:
		return control.createCommand();
	};
	*/
	
	/*
	 Description : innerhtml 이 생성된 후에 nexacro.Element의 handle에 실제 node handle을 attach함
	 Todo :
	 control 의 attachHandle() 함수를 호출해 nexacro.Element의 handle에 실제 node handle을 attach함
	 parameter : win (component 가 속한 nexacro._Window)
	 return : 없음
	 
    _pwebSocketComponent.on_attach_contents_handle = function (win)
	{
		TODO:
		control.attachHandle(win);
	};
	*/
	
	/*
	 Description : destroy 될때 호출되는 됨
	 Todo :
	 control 의 destroy() 함수를 호출해 
	 return : 없음
    _pwebSocketComponent.on_destroy_contents = function ()
	{
		TODO:
		control.destroy();
		control = null;
	};
	*/
	
    //===============================================================
    // nexacro.webSocketComponent : Override
    //===============================================================
	/* 
	Description : simple bind를 지원하기 위한 함수
	TODO :
	simple bind property를 설정함
	return : string (simple bind property)
	
    _pwebSocketComponent.on_getBindableProperties = function ()
    {
        return "value";
    };
    */
	
	/*
	Description : Component의 client size가 변경되었을 때 호출되는 함수
	TODO :
	control의 size 변경
	parameter : width(client width), height (client height)
	return : 없음
	
	_pwebSocketComponent.on_change_containerRect = function (width, height)
	{
		return nexacro.Static.on_change_containerRect.call(this, width, height);
	};
	*/
	
	/*
	Description : userstatus 가 변경될때 발생
	
	TODO :
	userstatus가 변경될때 처리할 코드를 구현함
	parameter : changestatus(변경할 userstatus), value (변경할 userstatus의 값)
	applyuserstatus(적용될 userstatus), currentstatus(현재 status), currentuserstatus(현재 userstatus)
	return : string (적용될 userstatus)
	
    _pwebSocketComponent.on_changeUserStatus = function (changestatus, value, applyuserstatus, currentstatus, currentuserstatus)
    {
        return applyuserstatus;
    };
	*/
	
	/*
	Description : status 가 변경될때 발생
	
	TODO :
	status가 변경될때 처리할 코드를 구현함
	parameter : changestatus(변경할 status), value (변경할 status의 값)
	applyuserstatus(적용될 status), currentstatus(현재 status), currentuserstatus(현재 userstatus)
	return : string (적용될 status)
	
	 _pwebSocketComponent.on_changeStatus = function (changestatus, value, applystatus, currentstatus, currentuserstatus)
    {
        return applystatus;
    };
	*/
	
	/*
	Description : fittocontents property 를 제공할때 사이즈를 리턴하는 함수
	
	TODO :
	component의 contents 사이즈를 리턴함	
	return : array (0: width, 1:height)
	
	 _pwebSocketComponent._on_getFitSize = function ()
    {
		//TODO
        //return [this._adjust_width, this._adjust_height];
    };
	*/
	
	/*
	Description : control로 사용될때 control의 id를 리턴함
	nexacro.Element의 idselector에 설정되는 값으로 node에 cssclass값에 적용됨
	
	TODO :
	control의 id를 리턴함
	return : string (control의 id)
	
	 _pwebSocketComponent.on_getIDCSSSelector = function ()
    {
		//TODO
        //return this.name;
    };
	*/
	
	/*
	Description : component의 cssclass property 값이 변경될때 호출됨
	control이 있을 경우 control의 cssclass 변경을 처리해야 함
	
	TODO :
	control이 있을 경우 control의 cssclass 변경을 처리해야 함
	return : 없음
	
	 _pwebSocketComponent.on_apply_prop_cssclass = function ()
    {
		//TODO
		//control.on_apply_cssclass();
    };
	*/
	
	/*
	Description : component의 text, expr property 값이 변경될때 호출됨
		
	TODO :
	component에서 개별 처리해야 할 내용이 있을 경우에 변경 처리해야함
	return : 없음
	
	 _pwebSocketComponent.on_apply_text = function (text)
    {
		//TODO
		//
    };
	*/
	
	/*
	Description : component의 enable property 값이 변경될때 호출됨
		
	TODO :
	control이 있을 경우 control의 enable을 처리해야 함
	return : 없음
	
	 _pwebSocketComponent.on_apply_prop_enable = function (v)
    {
		//TODO
		//control.on_apply_prop_enable();
    };
	*/
	
	/*
	Description : component의 accessibility label property 값이 없을 때 읽어줄값 을 정의함
		
	TODO :
	label 로 읽힐 값들을 재정의함
	
	return : 없음
	
	 _pwebSocketComponent.on_get_accessibility_label = function ()
    {
		//TODO
		return nexacro.Static.on_get_accessibility_label.call(this);
    };
	*/
	
	/*
	Description : component의 accessibility description property 값이 없을 때 읽어줄값 을 정의함
		
	TODO :
	descript 로 읽힐 값들을 재정의함
	
	return : 없음
	
	 _pwebSocketComponent.on_get_accessibility_description = function ()
    {
		//TODO
		return nexacro.Static.on_get_accessibility_description.call(this);
    };
	*/
	
	/*
	Description : component의 accessibility action property 값이 없을 때 읽어줄값 을 정의함
		
	TODO :
	action 로 읽힐 값들을 재정의함
	
	return : 없음
	
	 _pwebSocketComponent.on_get_accessibility_action = function ()
    {
		//TODO
		return nexacro.Static.on_get_accessibility_action.call(this);
    };
	*/
	
	/*
	Description : focus를 받았을때 setfocus event 발생후 호출됨 
	
	TODO :
	 개별 처리할 부분에 대한 재정의
	parameter : evt_name(이벤트 발생시점)
	
	 _pwebSocketComponent.on_apply_custom_setfocus= function (evt_name)
    {
       
    };
	*/
	
    //===============================================================
    // nexacro.webSocketComponent : Properties
    //===============================================================
	
	//property 추가 (property 추가시에는 아래와 같이 반드시 추가해야 한다.) 
	_pwebSocketComponent.url = "";
	_pwebSocketComponent.set_url = function(v)
	{
		_pwebSocketComponent.url = v;
	};
	
    //===============================================================
    // nexacro.webSocketComponent : Methods
    //===============================================================
    
	/*
	method 추가
	
	_pwebSocketComponent.usermethod = function ()
    {
		TODO:        
    };
	*/
	
	//char-ws.jsp 구현
	var wsocket;
	
	var gv_entryName;
	var gv_exitName;
	
	var gv_userName;
	var gv_totalCount;
	var gv_controlFlag = 0;
	
	_pwebSocketComponent.connect = function(){
		//wsocket = new WebSocket("ws://localhost:8080/example/chat-ws");  //로컬
		//wsocket = new WebSocket("ws://59.10.169.19:18080/example/chat-ws"); //개발서버
		//위 처럼 하면 사용자가 불편하거나 어려워 할 수 있기 때문에 아래와 같이 property를 사용하도록 한다.
		
		wsocket = new WebSocket(this.url); //property를 이용하여 url 지정.
		
		wsocket.onopen = this.onOpen;
		wsocket.onmessage = this.sendMessage;
		wsocket.onclose = this.onClose;
		wsocket.parent = this;
	}
	
	_pwebSocketComponent.disconnect = function() {
		wsocket.close();
		gv_totalCount--;
	}
	
	_pwebSocketComponent.onOpen = function(evt) {
		alert("연결되었습니다.");
	}
	
	_pwebSocketComponent.sendMessage = function(evt) {
		var data = evt.data;
		
		if(data.substring(0,4) == "msg:") {
			e = new nexacro.SmsEventInfo("onsendmessage", "", "", "userMessage:" + data.substring(4));
			this.parent._fire_getMessage(this.parent, e);
			
		}else if(data.substring(0, 9) == "userSize:") {
			var strTemp = data.split(":");
			
			var resTemp = strTemp[1].split(",");
			
			//입장 ID
			gv_entryName = resTemp[0];
			
			//총 인원 지정
			gv_totalCount = Number(resTemp[1]);
			
			//사용자 대화창 ID 지정
			var finalTemp = resTemp[2].split(" ");
			
			//사용자 대화창 ID가 마지막 ID로 중복되는 것을 방지하기 위함.
			if(gv_controlFlag == 0) {
				gv_userName = finalTemp[gv_totalCount-1];
				gv_controlFlag = 1;
			}
			
			e = new nexacro.SmsEventInfo("onsendmessage", "", "", "userSize:" + gv_entryName + "," + resTemp[1] + "," + resTemp[2]);
			this.parent._fire_getMessage(this.parent, e);
			
		}else if(data.substring(0,7) == "delete:") {
			var strTemp = data.split(":");
			
			var resTemp = strTemp[1].split(",");
			
			//퇴장 ID
			gv_exitName = resTemp[0];
		
			e = new nexacro.SmsEventInfo("onsendmessage", "", "", "delete:" + gv_exitName + "," + resTemp[1] + "," + resTemp[2]);
			this.parent._fire_getMessage(this.parent, e);
		}
	}
	
	_pwebSocketComponent._fire_getMessage = function (objSms, eSmsEventInfo) {
		return this.getMessage._fireEvent(this, eSmsEventInfo);
	};
	
	_pwebSocketComponent.onClose = function(evt) {
		alert("연결을 끊었습니다.");
	}
	
	_pwebSocketComponent.send = function(textMessage){
		wsocket.send("msg:" + gv_userName + ":" + textMessage);
	}
	
	_pwebSocketComponent.textMessage = function(textMessage) {
		this.send(textMessage);	
	}
	
    //===============================================================
    // nexacro.webSocketComponent : Events
    //===============================================================
	
	/*
	event 추가
	
	_pwebSocketComponent._event_list["onuserevent"] = 1;	
	nexacro.UserEventInfo = function (obj, id)
    {
        this.id = this.eventid = id || "onuserevent";
        this.fromobject = this.fromreferenceobject = obj;
    };
    var _pUserEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.UserEventInfo);
    nexacro.UserEventInfo.prototype = _pUserEventInfo;
    _pUserEventInfo._type_name = "UserEventInfo";

    delete _pUserEventInfo;
    _pUserEventInfo = null; 
	
    _pwebSocketComponent.on_fire_onuserevent = function (key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp)
    {
       if (this.onuserevent && this.onuserevent._has_handlers)
        {
            var evt = new nexacro.UserEventInfo(this, "onuserevent");
            return this.onuserevent._fireEvent(this, evt);
        }
    };
     */

    delete _pwebSocketComponent;
}


