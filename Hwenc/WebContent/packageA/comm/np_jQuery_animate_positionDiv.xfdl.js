(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample002_tail");
            this.set_titletext("F15_ver02");
            this.getSetter("classname").set("sample002_tail");
            if (Form == this.constructor)
            {
                this._setFormPosition(283,149);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">A</Col><Col id=\"Column1\">Google</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">B</Col><Col id=\"Column1\">Naver</Col><Col id=\"Column2\">2</Col></Row><Row><Col id=\"Column0\">C</Col><Col id=\"Column1\">Daum</Col><Col id=\"Column2\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","32",null,null,"1","1",null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"32","1",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text(" Title(Mouse Click)");
            obj.set_background("darkslateblue");
            obj.set_color("white");
            obj.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("np_jQuery_animate_positionDiv.xfdl", function() {
        this.Static00_onclick = function(obj,  e)
        {
        	this.parent.parent.divclick(this.parent);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };

        this.loadIncludeScript("np_jQuery_animate_positionDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
