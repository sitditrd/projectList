(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sub00");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_customerType", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">02</Col><Col id=\"Column1\">Individual Customer</Col></Row><Row><Col id=\"Column0\">03</Col><Col id=\"Column1\">Joint Venture Company</Col></Row><Row><Col id=\"Column0\">04</Col><Col id=\"Column1\">Private Business Owner</Col></Row><Row><Col id=\"Column0\">05</Col><Col id=\"Column1\">Foreign Investment Company</Col></Row><Row><Col id=\"Column0\">06</Col><Col id=\"Column1\">Household</Col></Row><Row><Col id=\"Column0\">07</Col><Col id=\"Column1\">State Enterprise</Col></Row><Row><Col id=\"Column0\">08</Col><Col id=\"Column1\">Cooperative</Col></Row><Row><Col id=\"Column0\">09</Col><Col id=\"Column1\">Financial Institution</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">Stock Company</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">Government &amp; Public Institution</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">Company Limited</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">Organization</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","5","4","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Select Customer Type");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","5","39",null,null,"10","36",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_customerType","16","48","404","173",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_customerType");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_rowcount("6");
            obj.set_columncount("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit",null,null,"60","24","10","5",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Exit");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,null,"60","24","74","5",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Clear");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,null,"60","24","138","5",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_basic05");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,270,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sub00.xfdl", function() {

        this.btn_clear_onclick = function(obj,e)
        {
        	this.rdo_customerType.set_index(-1);
        };

        this.btn_exit_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_ok_onclick = function(obj,e)
        {
        	this.close("OK");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
        };

        this.loadIncludeScript("sub00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
