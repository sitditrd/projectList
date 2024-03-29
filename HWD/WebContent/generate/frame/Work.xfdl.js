(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work");
            this.set_titletext("New Form");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,622);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWork","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,622,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    Frame > Work
        *  @FileName  Work.xfdl
        *  @Creator  presales
        *  @CreateDate  2020.02.05
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2020.02.05      presales                  최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.menuRow = -1; // 열린화면의 MENU Row

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description divWork에 해당화면을 Open해준다.
        */
        this.form_onload = function(obj, e)
        {
        	this.divWork.set_url(this.getOwnerFrame().arguments["MENU_URL"]);
        	var type = this.getOwnerFrame().arguments["FORM_ARGS"];

        	if(type == "Main")
        	{
        		var pForm = nexacro.getApplication().mainframe.VFrameSet.Main.form
        		pForm.fv_EndTime = this.gfn_CheckTime();
        		pForm.fv_DiffTime = this.gfn_diffTime(pForm.fv_StartTime, pForm.fv_EndTime, "ss");
        		pForm.Dataset02.setColumn(3, "Column0", pForm.fv_DiffTime);
        	}
        };

        /**
         * @description 화면 사이즈가 변경될때 사이즈 조절을 해준다.
        */
        this.form_onsize = function(obj, e)
        {
        // 	// 기준 사이즈 1000 * 622
        // 	var nCurWidth = this.getOffsetWidth();
        // 	var nCurHeight = this.getOffsetHeight();
        // 	var nFormHeight = this.divWork.__nFormHeight;
        //
        // 	// 세로사이즈
        // 	if (nCurHeight < 622) { // 100px정도 여유
        // 		// 스크롤설정
        // 		if (nFormHeight) {
        // 			this.divWork.setOffsetHeight(nFormHeight + 20);
        // 		} else {
        // 			this.divWork.setOffsetHeight(622);
        // 		}
        //
        // 		//this.divWork.form.resetScroll();
        // 	} else {
        // 		this.divWork.set_bottom(0);
        // 	}
        //
        // 	// 가로사이즈
        // 	if (nCurWidth < 1000) // 100px정도 여유
        // 	{
        // 		// 기준사이즈보다 작아지면 leftframe을 접어준다.
        // 		var hFrameset = nexacro.getApplication().mainframe.VFrameSet.HFrameSet;
        // 		hFrameset.set_separatesize("*");
        //
        // 		// div_work 세로 스크롤이 있는데 가로 스크롤이 생길경우, 세로 스크롤 설정을 다시 해준다.
        // 		if (nFormHeight) {
        // 			this.divWork.setOffsetHeight(nFormHeight + 20);
        // 		}
        //
        // 		// 스크롤설정
        // 		this.divWork.setOffsetWidth(1000);
        // 	}
        // 	else
        // 	{
        // 		this.divWork.set_right(0);
        // 	}

        	this.resetScroll();
        };

        /**
         * @description work화면이 종료될때 MDI탭 버튼도 삭제해준다.
        */
        this.Work_onclose = function(obj,e)
        {
        	this.gfnCloseMenu(obj.getOwnerFrame().name);
        };

        /**
         * @description 화면이 활성화되면 MDI탭  버튼에 포커스를 준다.
        */
        this.Work_onactivate = function(obj,e)
        {
        	nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.Tab.form.fnSetTabFocus("div" + this.getOwnerFrame().arguments["MENU_ID"]);
        	this.divWork.form.vscrollbar.set_pos(0); // 포커스가 입력가능한 컴포넌트(ex그리드)쪽으로 이동해서 스크롤이 움직이는것 조정
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onactivate",this.Work_onactivate,this);
            this.addEventHandler("onclose",this.Work_onclose,this);
            this.addEventHandler("ontimer",this.Work_ontimer,this);
            this.divWork.addEventHandler("onvscroll",this.divWork_onvscroll,this);
        };

        this.loadIncludeScript("Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
