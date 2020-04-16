(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work001_002_Tab01");
            this.set_titletext("개인별 옵션등록 Tab01");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(963,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","12","12",null,null,"12","12",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"180\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"옵션항목\"/><Cell col=\"2\" text=\"적용평형\"/><Cell col=\"3\" text=\"선택코드\"/><Cell col=\"4\" text=\"선택\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",963,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Work001_002_Tab01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
