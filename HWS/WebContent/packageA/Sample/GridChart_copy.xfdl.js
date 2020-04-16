(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridChart");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj.set_reversesubsum("true");
            obj.set_keystring("G:Column0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Finance</Col><Col id=\"Column1\">0.003</Col></Row><Row><Col id=\"Column0\">Technology Services</Col><Col id=\"Column1\">-0.017</Col></Row><Row><Col id=\"Column0\">Electronic Technology</Col><Col id=\"Column1\">0.004</Col></Row><Row><Col id=\"Column0\">Retail Trade</Col><Col id=\"Column1\">-0.002</Col></Row><Row><Col id=\"Column0\">Producer Manufacturing</Col><Col id=\"Column1\">0.001</Col></Row><Row><Col id=\"Column0\">Finance</Col><Col id=\"Column1\">0.003</Col></Row><Row><Col id=\"Column0\">Technology Services</Col><Col id=\"Column1\">-0.017</Col></Row><Row><Col id=\"Column0\">Electronic Technology</Col><Col id=\"Column1\">0.004</Col></Row><Row><Col id=\"Column0\">Retail Trade</Col><Col id=\"Column1\">-0.002</Col></Row><Row><Col id=\"Column0\">Producer Manufacturing</Col><Col id=\"Column1\">0.001</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Active&#13;&#10;Contribution\"/><Cell col=\"2\" text=\"Active&#13;&#10;Contribution&#13;&#10;Chart\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"expr:1-dataset.getRowLevel(currow)\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column1\" charttype=\"horizontalbar\" displaytype=\"chartcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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

        this.loadIncludeScript("GridChart_copy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
