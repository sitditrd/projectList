(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridFilterPop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(150,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_codeLogic", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">and</Col><Col id=\"nm\">그리고</Col></Row><Row><Col id=\"cd\">or</Col><Col id=\"nm\">또는</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"val\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_default", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"logic\" type=\"STRING\" size=\"256\"/><Column id=\"operater\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_codeOperater", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\"/><Col id=\"nm\">없음</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">equal</Col><Col id=\"nm\">=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">notEqual</Col><Col id=\"nm\">&lt;&gt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">greaterThan</Col><Col id=\"nm\">&gt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">greaterThanOrEqual</Col><Col id=\"nm\">&gt;=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">lessThan</Col><Col id=\"nm\">&lt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">lessThanOrEqual</Col><Col id=\"nm\">&lt;=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">startWith</Col><Col id=\"nm\">시작문자</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">endWith</Col><Col id=\"nm\">종료문자</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">contains</Col><Col id=\"nm\">포함</Col><Col id=\"group\">String</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_filterItem","4","5",null,null,"5","6",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_combo");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"조건\"/><Cell col=\"2\" text=\"값\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == 0 ? 'normal' : 'combo'\" edittype=\"expr:currow == 0 ?  'none' : 'combo'\" text=\"bind:logic\" combodataset=\"ds_codeLogic\" combocodecol=\"cd\" combodatacol=\"nm\" combodisplay=\"expr:currow == 0 ?  'edit' : 'display'\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:operater\" combodataset=\"ds_codeOperater\" combocodecol=\"cd\" combodatacol=\"nm\" combodisplayrowcount=\"10\" combodisplay=\"display\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:value\" editautoselect=\"true\" editdisplay=\"display\" textAlign=\"left\" verticalAlign=\"middle\"/></Band></Format><Format id=\"combo\"><Columns><Column size=\"30\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:text\" textAlign=\"left\" verticalAlign=\"middle\"/></Band></Format><Format id=\"date\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"조건\"/><Cell col=\"2\" text=\"값\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == 0 ? 'normal' : 'combo'\" edittype=\"expr:currow == 0 ?  'none' : 'combo'\" text=\"bind:logic\" combodataset=\"ds_codeLogic\" combocodecol=\"cd\" combodatacol=\"nm\" combodisplay=\"expr:currow == 0 ?  'edit' : 'display'\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:operater\" combodataset=\"ds_codeOperater\" combocodecol=\"cd\" combodatacol=\"nm\" combodisplayrowcount=\"10\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:value\" editautoselect=\"true\" editdisplay=\"edit\" calendardisplay=\"display\" calendardisplaynulltype=\"nulltext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","31","74","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_conf");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","75","74","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_conf");
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
        this.registerScript("GridFilterPop.xfdl", function() {
        /*
         * Grid Filter Sample at XPLATFORM
         *
         * Copyright (c) 2014 EcoSystem of TOBESOFT
         * Licensed Free under XPLATFORM.
         */

        /**
         * 필터 정보를 화면에 표시
         * @param {string} filterType 필터 type
         * @param {array} filterData 필터 지정값
         * @param {*=} refData 필터 참조값
         */
        this.setFilterInfo = function (filterType, filterData, refData)
        {
        	this.ds_codeOperater.filter("");

        	// 필터정보가 있다면 표시하고 아니면 기본값 지정
        	if (filterType == "combo")
        	{
        		this.ds_combo.set_enableevent(false);
        		this.ds_combo.deleteAll();

        		var ds = refData.dataset;
        		var code = refData.codeColumn;
        		var data = refData.dataColumn;
        		var defaultVal = this.gfnIsNull(filterData) ? true : false;
        		var row;
        		for (var i = 0,len = ds.rowcount; i < len; i++)
        		{
        			row = this.ds_combo.addRow();
        			this.ds_combo.setColumn(row, "chk", (defaultVal ? 0 : filterData[i]));
        			this.ds_combo.setColumn(row, "text", ds.getColumn(i, data));
        			this.ds_combo.setColumn(row, "val", ds.getColumn(i, code));
        		}
        		this.ds_combo.set_rowposition(-1);
        		this.ds_combo.set_enableevent(true);

        		this.grd_filterItem.set_formatid("combo");
        		this.grd_filterItem.set_binddataset("ds_combo");

        		this.btn_add.set_visible(false);
        		this.btn_delete.set_visible(false);
        	}
        	else
        	{
        		if (filterType == "date" || filterType == "number")
        		{
        			this.ds_codeOperater.filter("group != 'String'");
        		}

        		var data,row;
        		this.ds_default.set_enableevent(false);
        		this.ds_default.deleteAll();

        		if (this.gfnIsNull(filterData))
        		{
        			row = this.ds_default.addRow();
        			this.ds_default.setColumn(row, "logic", "");
        			this.ds_default.setColumn(row, "operater", "equal");
        			this.ds_default.setColumn(row, "value", "");
        		}
        		else
        		{
        			for (var i = 0,len = filterData.length; i < len; i++)
        			{
        				data = filterData[i];
        				row = this.ds_default.addRow();
        				this.ds_default.setColumn(row, "logic", data.logic);
        				this.ds_default.setColumn(row, "operater", data.operater);
        				this.ds_default.setColumn(row, "value", data.value);
        			}
        		}
        		this.ds_default.set_enableevent(true);

        		if (filterType == "date")
        		{
        			this.grd_filterItem.set_formatid("date");
        		}
        		else
        		{
        			this.grd_filterItem.set_formatid("default");
        		}

        		this.grd_filterItem.set_binddataset("ds_default");

        		this.btn_add.move(191, 146);
        		this.btn_delete.move(235, 146);

        		this.btn_add.set_visible(true);
        		this.btn_delete.set_visible(true);

        		this.grd_filterItem.setCellPos(1);
        	}
        };

        /**
         * oncolumnchanged event handler - combo type 필터 적용
         * @param {Dataset} obj 이벤트가 발생한 Dataset
         * @param {DSColChangeEventInfo} e DSColChangeEventInfo
         */
        this.ds_combo_oncolumnchanged = function (obj, e)
        {
        	var grid = this.grid;
        	var ds = this.gfn_Lookup(grid.parent, grid.binddataset);
        	var headCellIndex = this.filterHeadCellIndex;
        	var column = this.filterColumn;
        	var colType = ds.getColumnInfo(column).type;

        	// filter string 생성
        	var chk;
        	var chkCount = 0;
        	var filterData = [];
        	var filterString = "";
        	for (var i = 0,len = obj.rowcount; i < len; i++)
        	{
        		chk = obj.getColumn(i, "chk");

        		filterData.push(chk);

        		if (chk == 1)
        		{
        			chkCount++;
        			if (!this.gfnIsNull(filterString))
        			{
        				filterString += " || ";
        			}

        			if (colType == "STRING")
        			{
        				filterString += column + "==" + nexacro.wrapQuote(obj.getColumn(i, "val"));
        			}
        			else
        			{
        				filterString += column + "==" + obj.getColumn(i, "val");
        			}
        		}
        	}

        	if (chkCount == 0 || obj.rowcount == chkCount)
        	{
        		filterString = "";
        	}
        	else
        	{
        		if (!this.gfnIsNull(filterString))
        		{
        			filterString = "(" + filterString + ")";
        		}
        	}

        	// 필터 실행
        	this.parent.executeFilter(grid, headCellIndex, filterString, filterData);
        };

        /**
         * onclick event handler - 필터 조건 추가
         * @param {Button} obj 이벤트가 발생한 Button
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.btn_add_onclick = function (obj, e)
        {
        	if (obj.formatid != "combo")
        	{
        		var ds = this.objects[grd_filterItem.binddataset];
        		ds.set_enableevent(false);
        		var row = ds.addRow();
        		if (row == 0)
        		{
        			ds.setColumn(row, "logic", "");
        		}
        		else
        		{
        			ds.setColumn(row, "logic", "and");
        		}
        		ds.setColumn(row, "operater", "equal");
        		ds.setColumn(row, "value", "");
        		ds.set_enableevent(true);
        	}
        };

        /**
         * onclick event handler - 필터 조건 삭제
         * @param {Button} obj 이벤트가 발생한 Button
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.btn_delete_onclick = function (obj, e)
        {
        	if (obj.formatid != "combo")
        	{
        		var ds = this.objects[grd_filterItem.binddataset];

        		// row가 1개일 경우 삭제하지 않는다.
        		if (ds.rowcount == 1)
        		{
        			return;
        		}

        		ds.set_enableevent(false);
        		ds.deleteRow(ds.rowposition);
        		ds.set_enableevent(true);
        	}
        };

        /**
         * oncolumnchanged event handler - combo를 제외한 type 필터 적용
         * @param {Dataset} obj 이벤트가 발생한 Dataset
         * @param {DSColChangeEventInfo} e DSColChangeEventInfo
         */
        this.ds_default_oncolumnchanged = function (obj, e)
        {
        	var grid = this.grid;
        	var ds = this.gfn_Lookup(grid.parent, grid.binddataset);
        	var headCellIndex = this.filterHeadCellIndex;
        	var column = this.filterColumn;
        	var colType = ds.getColumnInfo(column).type;

        	// filter string 생성
        	var logic,operater,value,str;
        	var filterData = [];
        	var filterString = "";
        	for (var i = 0,len = obj.rowcount; i < len; i++)
        	{
        		logic = obj.getColumn(i, "logic");
        		operater = obj.getColumn(i, "operater");
        		value = obj.getColumn(i, "value");

        		if (i > 0 && this.gfnIsNull(logic))
        		{
        			continue;
        		}
        		if (this.gfnIsNull(operater) || this.gfnIsNull(value))
        		{
        			continue;
        		}

        		filterData.push({
        			logic : logic,
        			operater : operater,
        			value : value
        		});

        		if (i > 0)
        		{
        			filterString += (logic == "and" ? " && " : " || ");
        		}

        		filterString += column;

        		switch (operater)
        		{
        			case 'equal':
        				str = "==" + (colType == "STRING" ? nexacro.wrapQuote(value) : value);
        				break;
        			case 'notEqual':
        				str = "!=" + (colType == "STRING" ? nexacro.wrapQuote(value) : value);
        				break;
        			case 'greaterThan':
        				str = ">" + (colType == "STRING" ? nexacro.wrapQuote(value) : value);
        				break;
        			case 'greaterThanOrEqual':
        				str = ">=" + (colType == "STRING" ? nexacro.wrapQuote(value) : value);
        				break;
        			case 'lessThan':
        				str = "<" + (colType == "STRING" ? nexacro.wrapQuote(value) : value);
        				break;
        			case 'lessThanOrEqual':
        				str = "<=" + (colType == "STRING" ? nexacro.wrapQuote(value) : value);
        				break;
        			case 'startWith':
        				str = ".toString().substr(0, " + value.length + ") == '" + value + "'";
        				break;
        			case 'endWith':
        				str = ".toString().substr(" + column + ".toString().length-" + value.length + ") == '" + value + "'";
        				break;
        			case 'contains':
        				str = ".toString().search('" + value + "') > -1";
        				break;
        		}

        		filterString += str;
        	}

        	if (!this.gfnIsNull(filterString))
        	{
        		filterString = "(" + filterString + ")";
        	}

        	// 필터 실행
        	this.parent.executeFilter(grid, headCellIndex, filterString, filterData);
        };




        /**
         * 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
         * @public
         * @param {xpComp} p 찾을 대상
         * @param {string} name 찾을 대상 이름
         * @return {xpComp} 검색된 component, object
         * @example
         *
         * // this = Form
         * // Form 에 Button11 존재
         * trace(Base.XPComp.lookup(this, "Button11"));	// output : [object Button]
         *
         * // Button12 는 Div01 에 존재하지 않으나 Div01 의 상위 컴포넌트인 Form 에 존재
         * trace(Base.XPComp.lookup(Div01, "Button11"));	// output : [object Button]
         *
         * @memberOf Base.XPComp
         */
        this.gfn_Lookup = function (p, name)
        {
        	var o;
        	while (p)
        	{
        		o = p.components;
        		if (o && o[name])
        		{
        			return o[name];
        		}

        		o = p.objects;
        		if (o && o[name])
        		{
        			return o[name];
        		}

        		p = p.parent;
        	}
        	return null;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_filterItem.addEventHandler("onheadclick",this.grd_filterItem_onheadclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.ds_combo.addEventHandler("oncolumnchanged",this.ds_combo_oncolumnchanged,this);
            this.ds_default.addEventHandler("oncolumnchanged",this.ds_default_oncolumnchanged,this);
        };

        this.loadIncludeScript("GridFilterPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
