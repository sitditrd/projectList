(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ColumnResize");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가나다라마바사</Col><Col id=\"Column1\">가나다</Col><Col id=\"Column2\">가나다</Col><Col id=\"Column3\">ABCD</Col></Row><Row><Col id=\"Column1\">가나</Col><Col id=\"Column2\">가나다</Col><Col id=\"Column0\">가나다</Col><Col id=\"Column3\">AB</Col></Row><Row><Col id=\"Column2\">가나다라마바사</Col><Col id=\"Column1\">가나다</Col><Col id=\"Column0\">가나다</Col><Col id=\"Column3\">ABCD</Col></Row><Row><Col id=\"Column0\">가나다라마바사아자차</Col><Col id=\"Column1\">가나다</Col><Col id=\"Column2\">가나</Col><Col id=\"Column3\">ABCDEFGHIJKLM</Col></Row><Row><Col id=\"Column0\">가나다라마바사</Col><Col id=\"Column1\">AB</Col><Col id=\"Column2\">가나</Col><Col id=\"Column3\">한글가나다라마</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","29","54","381","236",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stTmp","30","3","63","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_fittocontents("width");
            obj.set_background("aqua");
            obj.set_text("dd");
            obj.set_wordWrap("none");
            obj.set_visible("false");
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
        this.registerScript("Z201812_2018120149-ColumnResize.xfdl", function() {
        this.Grid00_onheadclick = function(obj,e)
        {
        	var nMaxVal = 0;
        	var nCurrVal = 0;
        	var sMaxText = null;

        	for(var i=0; i<this.Dataset00.rowcount; i++)
        	{
        		nCurrVal = this.Dataset00.getColumn(i, e.col).length;

        		if(nCurrVal > nMaxVal)
        		{
        			nMaxVal = nCurrVal;
        			sMaxText = this.Dataset00.getColumn(i, e.col);
        		}
        	}

        	this.stTmp.set_text(sMaxText);
        	this.resetScroll();
        	this.Grid00.setFormatColProperty(e.col, "size", this.stTmp.getOffsetWidth()+10);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ColumnResize_onload,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
        };

        this.loadIncludeScript("Z201812_2018120149-ColumnResize.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
