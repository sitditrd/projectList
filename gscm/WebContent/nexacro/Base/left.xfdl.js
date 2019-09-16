(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("left");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(160,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">0</Col><Col id=\"Column0\">대메뉴01</Col></Row><Row><Col id=\"Column1\">0</Col><Col id=\"Column0\">대메뉴02</Col></Row><Row><Col id=\"Column1\">1</Col><Col id=\"Column0\">중메뉴01</Col></Row><Row><Col id=\"Column1\">2</Col><Col id=\"Column0\">소메뉴01</Col></Row><Row><Col id=\"Column1\">2</Col><Col id=\"Column0\">소메뉴02</Col></Row><Row><Col id=\"Column1\">2</Col><Col id=\"Column0\">소메뉴03</Col></Row><Row><Col id=\"Column1\">1</Col><Col id=\"Column0\">중메뉴02</Col></Row><Row><Col id=\"Column1\">2</Col><Col id=\"Column0\">소메뉴04</Col></Row><Row><Col id=\"Column1\">2</Col><Col id=\"Column0\">소메뉴05</Col></Row><Row><Col id=\"Column1\">2</Col><Col id=\"Column0\">소메뉴06</Col></Row><Row><Col id=\"Column1\">2</Col><Col id=\"Column0\">소메뉴06</Col></Row><Row><Col id=\"Column1\">0</Col><Col id=\"Column0\">대메뉴02</Col></Row><Row><Col id=\"Column1\">0</Col><Col id=\"Column0\">대메뉴03</Col></Row><Row><Col id=\"Column1\">0</Col><Col id=\"Column0\">대메뉴04</Col></Row><Row><Col id=\"Column1\">0</Col><Col id=\"Column0\">대메뉴05</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","160",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LF_bg01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","160","135",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LF_pic");
            obj.set_text("Kim Han Kook");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","134","54","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_LF_icon01");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","53","134","54","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_LF_icon02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","106","134","54","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_LF_icon03");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","169","159","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button00");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","0","200","159","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button00");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","0","261","159","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button00");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","0","231","159","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Button00");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","0","382","159","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Button00");
            obj.set_cssclass("btn_LF_menu");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","0","352","159","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Button00");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","0","322","159","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Button00");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","0","292","159","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Button00");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","413","159","277",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_LF_menu");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"31\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"treeitemcontrol\" treelevel=\"bind:Column1\" edittype=\"tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",160,720,this,function(p){});
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

        this.loadIncludeScript("left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
