(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("top");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,48);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">0</Col><Col id=\"Column0\">Top Menu01</Col></Row><Row><Col id=\"Column1\">1</Col><Col id=\"Column0\">Sub Menu01</Col></Row><Row><Col id=\"Column1\">1</Col><Col id=\"Column0\">Sub Menu02</Col></Row><Row><Col id=\"Column1\">1</Col><Col id=\"Column0\">Sub Menu03</Col></Row><Row><Col id=\"Column1\">2</Col><Col id=\"Column0\">3Depth Menu01</Col></Row><Row><Col id=\"Column1\">2</Col><Col id=\"Column0\">3Depth Menu02</Col></Row><Row><Col id=\"Column1\">2</Col><Col id=\"Column0\">3Depth Menu03</Col></Row><Row><Col id=\"Column1\">0</Col><Col id=\"Column0\">Top Menu02</Col></Row><Row><Col id=\"Column1\">0</Col><Col id=\"Column0\">Top Menu03</Col></Row><Row><Col id=\"Column1\">0</Col><Col id=\"Column0\">Top Menu04</Col></Row><Row><Col id=\"Column1\">0</Col><Col id=\"Column0\">Top Menu05</Col></Row><Row><Col id=\"Column0\">Top Menu06</Col><Col id=\"Column1\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TP_bg01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TP_logo");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","140","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Top Menu01");
            obj.set_cssclass("btn_TP_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","40","40","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TP_menuIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","260","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Top Menu02");
            obj.set_cssclass("btn_TP_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","500","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Top Menu04");
            obj.set_cssclass("btn_TP_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","380","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Top Menu03");
            obj.set_cssclass("btn_TP_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","740","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Top Menu06");
            obj.set_cssclass("btn_TP_menu");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","620","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Top Menu05");
            obj.set_cssclass("btn_TP_menu");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","140","104","815","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("Dataset00");
            obj.set_captioncolumn("Column0");
            obj.set_idcolumn("Column2");
            obj.set_levelcolumn("Column1");
            obj.set_userdatacolumn("Column0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,48,this,function(p){});
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

        this.loadIncludeScript("top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
