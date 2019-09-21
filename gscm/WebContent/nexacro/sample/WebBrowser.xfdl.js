(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WebBrowser");
            this.set_titletext("PDF 미리보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">개발_가이드</Col></Row><Row><Col id=\"Column0\">개발도구_가이드</Col></Row><Row><Col id=\"Column0\">고급_개발_가이드</Col></Row><Row><Col id=\"Column0\">넥사크로플랫폼_17_교육교재</Col></Row><Row><Col id=\"Column0\">배포_가이드</Col></Row><Row><Col id=\"Column0\">서버_설정_가이드</Col></Row><Row><Col id=\"Column0\">제품_정보</Col></Row><Row><Col id=\"Column0\">초보자를_위한_자습서</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stVal1","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("PDF 미리보기");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_List","10","90","270",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"파일명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_pdfPreView","290","90",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","50","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일 리스트");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","290","50","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("PDF PreView");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,691,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WebBrowser.xfdl", function() {
        this.WebBrowser_onload = function(obj,e)
        {
        };

        this.grid_List_oncellclick = function(obj,e)
        {
        	var nRowPos = this.dsList.rowposition;
        	var sUrl = "http://14.63.224.112/PoC/gscmSDS/service/file/";
        	var sFileNm = this.dsList.getColumn(nRowPos, "Column0");
        	var fullURl = sUrl + sFileNm + ".pdf";

        	this.web_pdfPreView.set_url(fullURl);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WebBrowser_onload,this);
            this.grid_List.addEventHandler("oncellclick",this.grid_List_oncellclick,this);
        };

        this.loadIncludeScript("WebBrowser.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
