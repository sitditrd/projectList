(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("grd_head_pop");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_COL", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISNEW\" type=\"STRING\" size=\"1\"/><Column id=\"FSTR\" type=\"STRING\" size=\"1024000\"/><Column id=\"FSTT\" type=\"STRING\" size=\"1024000\"/><Column id=\"FSEA\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_SORT", this);
            obj._setContents("<ColumnInfo><Column id=\"COL\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_SORT_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">+</Col><Col id=\"TYPE\">오름차순</Col></Row><Row><Col id=\"ID\">-</Col><Col id=\"TYPE\">내림차순</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FILTER", this);
            obj._setContents("<ColumnInfo><Column id=\"COL\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"STR\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">1</Col><Col id=\"STR\">모두 선택</Col><Col id=\"TYPE\">D</Col></Row><Row><Col id=\"CHK\">1</Col><Col id=\"STR\">값 없음</Col><Col id=\"TYPE\">D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FILTER_COND", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"10\"/><Column id=\"NM\" type=\"STRING\" size=\"50\"/></ColumnInfo><Rows><Row><Col id=\"CD\">00</Col></Row><Row><Col id=\"NM\">=</Col><Col id=\"CD\">01</Col></Row><Row><Col id=\"NM\">!=</Col><Col id=\"CD\">02</Col></Row><Row><Col id=\"NM\">&gt;</Col><Col id=\"CD\">03</Col></Row><Row><Col id=\"NM\">&gt;=</Col><Col id=\"CD\">04</Col></Row><Row><Col id=\"NM\">&lt;</Col><Col id=\"CD\">05</Col></Row><Row><Col id=\"NM\">&lt;=</Col><Col id=\"CD\">06</Col></Row><Row><Col id=\"NM\">시작문자</Col><Col id=\"CD\">11</Col></Row><Row><Col id=\"NM\">제외할 시작문자</Col><Col id=\"CD\">12</Col></Row><Row><Col id=\"NM\">끝 문자</Col><Col id=\"CD\">13</Col></Row><Row><Col id=\"NM\">제외할 끝 문자</Col><Col id=\"CD\">14</Col></Row><Row><Col id=\"NM\">포함</Col><Col id=\"CD\">15</Col></Row><Row><Col id=\"NM\">포함하지 않음</Col><Col id=\"CD\">16</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FILTER_ADD", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"10\"/><Column id=\"NM\" type=\"STRING\" size=\"50\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"NM\">그리고</Col></Row><Row><Col id=\"NM\">또는</Col><Col id=\"CD\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_pop_bg01");
            this.addChild(obj.name, obj);

            obj = new Static("StColNm","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Col Name");
            obj.set_cssclass("sta_pop_title01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","40","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_pop_close");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","50",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("BtnAdd","0","0","80","23",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("기준 추가");
            obj.set_cssclass("btn_WF_basic03");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("BtnDel","85","0","80","23",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("기준 삭제");
            obj.set_cssclass("btn_WF_basic03");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("BtnMSort",null,"0","80","23","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Ok");
            obj.set_cssclass("btn_WF_basic01");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","28",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_binddataset("DS_SORT");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"열\"/><Cell col=\"1\" text=\"정렬\"/></Band><Band id=\"body\"><Cell text=\"bind:COL\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"DS_COL\" combocodecol=\"ID\" combodatacol=\"NM\" combodisplayrowcount=\"10\"/><Cell col=\"1\" text=\"bind:TYPE\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"DS_SORT_TYPE\" combocodecol=\"ID\" combodatacol=\"TYPE\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","307","50",null,null,"-287","10",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("BtnMFilter","200","0","80","23",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Ok");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","28",null,null,"0","29",null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_binddataset("DS_FILTER");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"252\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:STR\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("St11","0","0","130","23",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("필터 선택");
            obj.set_cssclass("sta_WF_title02");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btnUserFilter","0","316","90","23",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("사용자지정");
            obj.set_cssclass("btn_WF_basic03");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","596","50",null,null,"-576","10",null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("BtnMFilter2","200","0","80","23",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("Ok");
            obj.set_cssclass("btn_WF_basic01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("St11","0","0","130","23",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_text("찾을 조건");
            obj.set_cssclass("sta_WF_title02");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("cboCond1","0","28","120","25",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_innerdataset("DS_FILTER_COND");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("cboVal1","124","28","120","25",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_innerdataset("DS_FILTER");
            obj.set_codecolumn("STR");
            obj.set_datacolumn("STR");
            obj.set_type("search");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("edVal1","124","28","97","25",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #777777 , 0px none , 1px solid #777777 , 1px solid #777777");
            this.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoType","65","65","150","25",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_innerdataset("DS_FILTER_ADD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_direction("vertical");
            obj.set_columncount("2");
            obj.set_text("그리고");
            obj.set_value("1");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("cboCond2","0","98","120","25",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_innerdataset("DS_FILTER_COND");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("cboVal2","124","98","120","25",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_innerdataset("DS_FILTER");
            obj.set_codecolumn("STR");
            obj.set_datacolumn("STR");
            obj.set_type("search");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("edVal2","124","98","97","25",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #777777 , 0px none , 1px solid #777777 , 1px solid #777777");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("BtnCancel",null,"0","30","40","29",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_cssclass("btn_pop_close");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("grd_head_pop.xfdl", function() {
        this.v_Keystring = "";
        this.v_Filterstring = "";
        this.gridNm;

        this.grd_head_pop_onload = function(obj,e)
        {
        	this.Div02.move(this.Div01.left, this.Div01.top);
        	this.Div03.move(this.Div01.left, this.Div01.top);
        };

        this.copyDataset = function(arrData, ds)
        {
        	ds.clearData();

        	for (var i = 0; i < arrData.length; i++)
        	{
        		var nRow = ds.addRow();
        		var data = arrData[i];

        		for (var k in data)
        		{
        			ds.setColumn(nRow, k, data[k]);
        		}
        	}
        };

        this.convertDataset = function(ds)
        {
        	var arrData = [];

        	for (var i = 0; i < ds.rowcount; i++)
        	{
        		var data = {};

        		for (var j = 0; j < ds.colcount; j++)
        		{
        			data[ds.getColID(j)] = ds.getColumn(i, j);
        		}

        		arrData.push(data);
        	}

        	return arrData;
        };

        this.setGridNm = function(strGridNm)
        {
        	this.gridNm = strGridNm;
        };

        this.fn_div_go = function(DivNm)
        {
        	if ( DivNm == "Div01" )
        	{
        		this.Div01.set_visible(true);
        		this.Div02.set_visible(false);
        		this.Div03.set_visible(false);

        		this.BtnCancel.set_visible(false);
        	}
        	else if ( DivNm == "Div02" )
        	{
        		this.DS_FILTER.filter("");
        		this.Div01.set_visible(false);
        		this.Div02.set_visible(true);
        		this.Div03.set_visible(false);

        		this.BtnCancel.set_visible(false);
        	}
        	else if ( DivNm == "Div03" )
        	{
        		this.Div01.set_visible(false);
        		this.Div02.set_visible(false);
        		this.Div03.set_visible(true);

        		this.BtnCancel.set_visible(true);
        	}
        };

        this.BtnCancel_onclick = function(obj,e)
        {
        	this.fn_div_go("Div02");
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        this.Div01_BtnAdd_onclick = function(obj,e)
        {
        	this.DS_SORT.addRow();
        };

        this.Div01_BtnDel_onclick = function(obj,e)
        {
        	if (this.DS_SORT.rowposition >= 0 && this.DS_SORT.rowposition < this.DS_SORT.rowcount)
        	{
        		this.DS_SORT.deleteRow(this.DS_SORT.rowposition);
        	}
        };

        this.Div01_BtnMSort_onclick = function(obj,e)
        {
        	this.v_Keystring = "S:";

        	for (var i = 0; i < this.DS_COL.rowcount; i++)
        	{
        		this.DS_COL.setColumn(i, "SORT", "");
        	}
        	var trow = 0;
        	for (var i = 0; i < this.DS_SORT.rowcount; i++)
        	{
        		if (nexacro._isNull(this.DS_SORT.getColumn(i, "COL")) == false && nexacro._isNull(this.DS_SORT.getColumn(i,"TYPE")) == false)
        		{
        			this.v_Keystring = this.v_Keystring + this.DS_SORT.getColumn(i, "TYPE");
        			this.v_Keystring = this.v_Keystring + this.DS_SORT.getColumn(i, "COL");
        			trow = this.DS_COL.findRow("ID", this.DS_SORT.getColumn(i, "COL"));
        			this.DS_COL.setColumn(trow, "SORT", this.DS_SORT.getColumn(i, "TYPE"));
        		}
        	}
        	this.DS_SORT.applyChange();

        	var gridObj = this.parent.parent.components[this.gridNm];
        	gridObj._colList = this.convertDataset(this.DS_COL);
        	gridObj._sortInfo = this.convertDataset(this.DS_SORT);

        	if (this.v_Keystring != "S:")
        	{
        		this.parent.closePopup("SM||" + this.gridNm + "||" + this.v_Keystring);
        	}
        	else
        	{
        		this.parent.closePopup("");
        	}
        };

        this.Div02_BtnMFilter_onclick = function(obj,e)
        {
        	this.Div03.form.cboCond1.set_value("");
        	this.Div03.form.cboVal1.set_value("");
        	this.Div03.form.edVal1.set_value("");
        	this.Div03.form.rdoType.set_value("");
        	this.Div03.form.cboCond2.set_value("");
        	this.Div03.form.cboVal2.set_value("");
        	this.Div03.form.edVal2.set_value("");

        	this.v_Filterstring = "";
        	var tNullVal = 0;
        	if (this.DS_FILTER.getColumn(0, "CHK") != "1")
        	{
        		for (var i = 1; i < this.DS_FILTER.rowcount; i++)
        		{
        			if (this.DS_FILTER.getColumn(i, "CHK") == "1")
        			{
        				if (this.DS_FILTER.getColumn(i, "STR") == "값 없음")
        				{
        					tNullVal = 1;
        				}
        				if (this.v_Filterstring != "")	this.v_Filterstring = this.v_Filterstring + "$$";
        				this.v_Filterstring = this.v_Filterstring + this.DS_FILTER.getColumn(i, "STR");
        			}
        		}

        		if (tNullVal == 1)
        		{
        			if (this.v_Filterstring != "") this.v_Filterstring = this.v_Filterstring + "$$";
        			this.v_Filterstring = this.v_Filterstring + "^^";
        		}
        	}
        	if (this.v_Filterstring == "" || this.v_Filterstring.length < 1)
        	{
        		this.v_Filterstring = "@@";
        	}

        	var gridObj = this.parent.parent.components[this.gridNm];
        	gridObj._colList = this.convertDataset(this.DS_COL);

        	this.parent.closePopup("FM||1||" + this.gridNm + "||" + this.v_Filterstring);
        };

        this.Div02_btnUserFilter_onclick = function(obj,e)
        {
        	this.fn_div_go("Div03");
        };

        this.Div03_BtnMFilter2_onclick = function(obj,e)
        {
        	for (var i = 0; i < this.DS_FILTER.rowcount;i++)
        	{
        		this.DS_FILTER.setColumn(i, "CHK", "1");
        	}

        	if (nexacro._isNull(this.Div03.form.cboCond1.value) || this.Div03.form.cboCond1.value == "00" || nexacro._isNull(this.Div03.form.edVal1.text))
        	{
        		this.Div03.form.cboCond1.set_value("");
        		this.Div03.form.edVal1.set_value("");
        	}

        	if (nexacro._isNull(this.Div03.form.cboCond2.value) || this.Div03.form.cboCond2.value == "00" || nexacro._isNull(this.Div03.form.edVal2.text))
        	{
        		this.Div03.form.cboCond2.set_value("");
        		this.Div03.form.edVal2.set_value("");
        	}

        	this.v_Filterstring = "";

        	this.v_Filterstring = this.v_Filterstring + this.Div03.form.cboCond1.value + "$#";
        	this.v_Filterstring = this.v_Filterstring + this.Div03.form.edVal1.text + "$#";
        	this.v_Filterstring = this.v_Filterstring + this.Div03.form.rdoType.value + "$#";
        	this.v_Filterstring = this.v_Filterstring + this.Div03.form.cboCond2.value + "$#";
        	this.v_Filterstring = this.v_Filterstring + this.Div03.form.edVal2.text;

        	var gridObj = this.parent.parent.components[this.gridNm];
        	gridObj._colList = this.convertDataset(this.DS_COL);

        	this.parent.closePopup("FM||2||" + this.gridNm + "||" + this.v_Filterstring);
        };

        this.DS_FILTER_oncolumnchanged = function(obj,e)
        {
        	if (e.row == 0)
        	{
        		if (e.columnid == "CHK")
        		{
        			obj.set_enableevent(false);
        			for (var i = 1; i < obj.rowcount;i++)
        			{
        				obj.setColumn(i, "CHK", e.newvalue);
        			}
        			obj.set_enableevent(true);
        		}
        	}
        	else
        	{
        		if (e.columnid == "CHK")
        		{
        			if (e.newvalue != "1")
        			{
        				obj.setColumn(0, "CHK", "0");
        			}
        		}
        	}
        };

        this.Div03_cboVal1_onitemchanged = function(obj,e)
        {
        	this.Div03.form.edVal1.set_value(e.posttext);
        };

        this.Div03_cboVal2_onitemchanged = function(obj,e)
        {
        	this.Div03.form.edVal2.set_value(e.posttext);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.grd_head_pop_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Div01.form.BtnAdd.addEventHandler("onclick",this.Div01_BtnAdd_onclick,this);
            this.Div01.form.BtnDel.addEventHandler("onclick",this.Div01_BtnDel_onclick,this);
            this.Div01.form.BtnMSort.addEventHandler("onclick",this.Div01_BtnMSort_onclick,this);
            this.Div02.form.BtnMFilter.addEventHandler("onclick",this.Div02_BtnMFilter_onclick,this);
            this.Div02.form.btnUserFilter.addEventHandler("onclick",this.Div02_btnUserFilter_onclick,this);
            this.Div03.form.BtnMFilter2.addEventHandler("onclick",this.Div03_BtnMFilter2_onclick,this);
            this.Div03.form.cboVal1.addEventHandler("onitemchanged",this.Div03_cboVal1_onitemchanged,this);
            this.Div03.form.cboVal2.addEventHandler("onitemchanged",this.Div03_cboVal2_onitemchanged,this);
            this.BtnCancel.addEventHandler("onclick",this.BtnCancel_onclick,this);
            this.DS_FILTER.addEventHandler("oncolumnchanged",this.DS_FILTER_oncolumnchanged,this);
        };

        this.loadIncludeScript("grd_head_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
