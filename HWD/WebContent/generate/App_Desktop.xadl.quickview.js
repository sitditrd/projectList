(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
            // global dataset
            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_LVL\" type=\"INT\" size=\"22\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_ID\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_ID\">1000</Col><Col id=\"MENU_NM\">PoC 요건</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">1020</Col><Col id=\"MENU_NM\">가입설계</Col><Col id=\"MENU_URL\">Poc::hanwha01.xfdl</Col><Col id=\"PARENT_MENU_ID\">1000</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">1030</Col><Col id=\"MENU_NM\">완전판매 모니터링 현황</Col><Col id=\"PARENT_MENU_ID\">1000</Col><Col id=\"MENU_URL\">Poc::hanwha03.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">Grid Component</Col><Col id=\"PARENT_MENU_ID\">0</Col><Col id=\"MENU_ID\">2000</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NM\">다양한 그리드 기능</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"MENU_URL\">grid::Functions.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">2020</Col><Col id=\"MENU_NM\">다양한 그리드 표현</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"MENU_URL\">grid::CellTypes.xfdl</Col></Row><Row><Col id=\"MENU_NM\">다양한 그리드 활용</Col><Col id=\"MENU_URL\">grid::GridType.xfdl</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"MENU_ID\">2030</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">2040</Col><Col id=\"MENU_NM\">Excel Export/Import 처리</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"MENU_URL\">grid::ExcelFormula.xfdl</Col></Row><Row><Col id=\"MENU_NM\">동적 그리드</Col><Col id=\"MENU_ID\">2050</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"MENU_URL\">grid::Dynamic.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">2060</Col><Col id=\"MENU_NM\">동적 트리 그리드</Col><Col id=\"PARENT_MENU_ID\">2000</Col><Col id=\"MENU_URL\">grid::DynamicTree.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">2070</Col><Col id=\"MENU_NM\">개인화 처리</Col><Col id=\"MENU_URL\">grid::Personalization.xfdl</Col><Col id=\"PARENT_MENU_ID\">2000</Col></Row><Row><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">Component</Col><Col id=\"PARENT_MENU_ID\">0</Col><Col id=\"MENU_ID\">3000</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"MENU_ID\">3010</Col><Col id=\"MENU_NM\">다양한 컴포넌트</Col><Col id=\"MENU_URL\">comp::Components.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"MENU_ID\">3020</Col><Col id=\"MENU_NM\">컴포넌트 동적생성</Col><Col id=\"MENU_URL\">comp::DynamicComponent.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_URL\">comp::ComponentsArrange.xfdl</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"MENU_NM\">편리한 컴포넌트배치</Col><Col id=\"MENU_ID\">3030</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">3040</Col><Col id=\"MENU_NM\">Fit To Contents</Col><Col id=\"MENU_URL\">comp::FitToContents.xfdl</Col><Col id=\"PARENT_MENU_ID\">3000</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"MENU_ID\">3050</Col><Col id=\"MENU_NM\">파일 업/다운로드</Col><Col id=\"MENU_URL\">comp::FileUpDown.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_MENU_ID\">3000</Col><Col id=\"MENU_ID\">3060</Col><Col id=\"MENU_NM\">양방향 데이터 바인딩</Col><Col id=\"MENU_URL\">comp::TwoWayDataBinding.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">차트</Col><Col id=\"PARENT_MENU_ID\">0</Col><Col id=\"MENU_ID\">5000</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">5010</Col><Col id=\"MENU_NM\">nexacro Chart</Col><Col id=\"MENU_URL\">ext::nexacroChart.xfdl</Col><Col id=\"PARENT_MENU_ID\">5000</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">5020</Col><Col id=\"MENU_NM\">알차트(rChart)</Col><Col id=\"MENU_URL\">ext::rChart.xfdl</Col><Col id=\"PARENT_MENU_ID\">5000</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_ID\">5030</Col><Col id=\"MENU_NM\">알차트(rChart) 연동</Col><Col id=\"MENU_URL\">ext::rMateChart2.xfdl</Col><Col id=\"PARENT_MENU_ID\">5000</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gvWebUrl","http://localhost/HWD");
            this._addVariable("gvXeniUrl","http://localhost/nexacro17-xeni/");
            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("App_Desktop");
            this.set_screenid("desktop");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("Hanwha Smart Portal");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_layered("true");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);

            obj.set_formurl(nexacro._quickview_formurl);

            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };

		// script Compiler
        this.registerScript("App_Desktop.xadl", function() {

        /************************************************************************************************
         * Application Event 영역
         ************************************************************************************************/
        /**
         * Application onload
         */
        this.Application_onload = function(obj,e)
        {
        	//접속 환경별 서비스 URL 셋팅
        	var objEnv = nexacro.getEnvironment();
        	var objSvcUrl = objEnv.services["svcurl"];
        	var urlPath;

        	if (system.navigatorname == "nexacro")
        	{
        		if(objSvcUrl == null || objSvcUrl !='' || objSvcUrl!= undefined)
        		{
        			urlPath = "http://localhost/HWD/generate/";
        		}
        		else
        		{
        			urlPath = objSvcUrl;
        		}
        	}
        	else
        	{
        		var sXadl = nexacro.getApplication().xadl;

        		if(sXadl.indexOf("http://127.0.0.1/") > -1)
        		{
        			if(objSvcUrl == null || objSvcUrl !='' || objSvcUrl!= undefined)
        			{
        				urlPath = "http://localhost/HWD/generate/";
        			}
        			else
        			{
        				urlPath = objSvcUrl;
        			}
        		}
        		else
        		{
        			urlPath = window.location.protocol + "//" + window.location.host + "/HWD/generate/";
        		}
        	}

        	objEnv.services["svcurl"].set_url(urlPath);
        	objEnv.services["xeni"].set_url(urlPath);
        };

        /**
         * @description ESC 통신중단 방지
        */
        this.Application_onerror = function(obj,e)
        {
        	// 사용자가 ESC키를 눌렀을 경우 ESC통신 중단 방지처리
        	if (e.errorcode == -2147418039) {
        		return true;
        	}
        };
        });
        
        this.loadPreloadList();
        this.loadCss("xcssrc::component.xcss");
        this.loadCss("xcssrc::grid.xcss");
    };
}
)();
