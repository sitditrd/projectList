(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comGridSortPop");
            this.set_titletext("Grid 우 클릭 Sork 팝업");
            this.set_scrollbartype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_columnNotSelect", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"index\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_item", this);
            obj._setContents("<ColumnInfo><Column id=\"column\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"index\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"INT\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">1</Col><Col id=\"nm\">오름차순</Col></Row><Row><Col id=\"cd\">2</Col><Col id=\"nm\">내림차순</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_column", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"index\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_pop_bgBox01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","63","5","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","107","5","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_up","151","5","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("위로");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down","195","5","48","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아래로");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_item","6","31","238","240",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_item");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_color("#373c43ff");
            obj.set_border("0 none #808080,0 none #808080,1 solid #bbbbbbff,0 none #808080");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목\"/><Cell col=\"1\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:column\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_column\" combocodecol=\"cd\" combodatacol=\"nm\"/><Cell col=\"1\" text=\"bind:status\" combodataset=\"ds_status\" combocodecol=\"cd\" combodatacol=\"nm\" displaytype=\"combotext\" edittype=\"combo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply","203","275","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",250,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("Grid 우 클릭 Sort팝업");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comGridSortPop.xfdl", function() {
        /*
        * Grid Sort Sample at XPLATFORM
        *
        * Copyright (c) 2014 EcoSystem of TOBESOFT
        * Licensed Free under XPLATFORM.
        */

        /**
        * onclick Event Handler
        * @param {Button} obj Event가 발생한 Button Component
        * @param {ClickEventInfo} e ClickEventInfo
        */
        this.fn_comBtn = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btn_add": // 항목 추가
        			this.ds_item.addRow();
        			break;

        		case "btn_delete": // 항목 삭제
        			this.ds_item.deleteRow(this.ds_item.rowposition);
        			break;

        		case "btn_up": // 항목 위로
        			var rowposition = this.ds_item.rowposition;
        			if (rowposition > 0)
        			{
        				this.ds_item.exchangeRow(rowposition, rowposition-1);
        			}
        			break;

        		case "btn_down": // 항목 아래로
        			var rowposition = this.ds_item.rowposition;
        			if (rowposition < this.ds_item.rowcount-1)
        			{
        				this.ds_item.exchangeRow(rowposition, rowposition+1);
        			}
        			break;

        		case "btn_apply": // 정렬 적용
        			var items = [], index, status;

        			for (var i = 0, len = this.ds_item.rowcount; i < len; i++)
        			{
        				index = this.ds_item.getColumn(i, "index");
        				status = this.ds_item.getColumn(i, "status");

        				if (this.gfn_IsEmpty(index) || this.gfn_IsEmpty(status)) continue;

        				items.push({
        						index: index,
        						status: parseInt(status)
        					});
        			}

        			this.parent.closePopup(items);
        			break;
        	}
        };

        /**
        * oncolumnchanged event handler
        * @param {Dataset} obj 이벤트가 발생한 Dataset
        * @param {DSColChangeEventInfo} e DSColChangeEventInfo
        */
        this.ds_item_oncolumnchanged = function(obj, e)
        {
        	if (e.columnid == "column")
        	{
        		this.ds_item.setColumn(e.row, "index", this.ds_column.lookup("cd", e.newvalue, "index"));
        	}
        }

        /**
        * 소팅 정보를 화면에 표시
        * @param {Grid} grid 소트 대상 Grid
        * @param {array} cells Cell 별 소트 정보
        */
        this.setSortInfo = function(grid, cells)
        {
        	var cellInfos = grid.cellInfos;
        	var sortItems = grid.sortItems;
        	var columnName, cellInfo, index, status, text, row, cell;

        	// 컬럼 정보 구성
        	this.ds_column.deleteAll();
        	for (var i = 0; i < cells.length; i++)
        	{
        		cell = cells[i];
        		row = this.ds_column.addRow();
        		this.ds_column.setColumn(row, "cd", cell.column);
        		this.ds_column.setColumn(row, "nm", cell.text);
        		this.ds_column.setColumn(row, "index", cell.index);
        	}

        	// 현재 소팅 정보 표시
        	this.ds_item.deleteAll();

        	if (!this.gfn_IsEmpty(sortItems))
        	{
        		for (var i = 0, len = sortItems.length; i < len; i++)
        		{
        			columnName = sortItems[i];
        			cellInfo = cellInfos[columnName];
        			index = cellInfo.index;
        			status = cellInfo.status;
        			text = cellInfo.text;

        			if (status > 0)
        			{
        				row = this.ds_item.addRow();
        				this.ds_item.setColumn(row, "column", columnName);
        				this.ds_item.setColumn(row, "status", status);
        				this.ds_item.setColumn(row, "index", index);
        			}
        		}
        	}
        }

        /**
        * value의 빈값 여부 반환.
        * <pre>
        * 1. null, undefined type : true 반환
        * 2. string, array type : length 가 0인 경우 true 반환
        * 3. object type : 하위 속성이 존재할 경우 true 반환
        * 4. boolean, number, date type : false 반환
        * </pre>
        * @param {*} value 확인할 value.
        * @return {boolean} empty 여부.
        * @example
        * var a;	// undefined
        * trace(this.gfn_IsEmpty(a));	// output : true
        *
        * var a = null;	// null
        * trace(this.gfn_IsEmpty(a));	// output : true
        *
        * var a = "";	// string
        * trace(this.gfn_IsEmpty(a));	// output : true
        *
        * var a = "abc";	// string
        * trace(this.gfn_IsEmpty(a));	// output : false
        *
        * var a = [];	// array
        * trace(this.gfn_IsEmpty(a));	// output : true
        *
        * var a = [1,2,3];	// array
        * trace(this.gfn_IsEmpty(a));	// output : false
        *
        * var a = new Array();	// array
        * trace(this.gfn_IsEmpty(a));	// output : true
        *
        * var a = new Array(3);	// array
        * trace(this.gfn_IsEmpty(a));	// output : false
        *
        * var a = {};	// object
        * trace(this.gfn_IsEmpty(a));	// output : true
        *
        * var a = {a:'1', b:'2'};	// object
        * trace(this.gfn_IsEmpty(a));	// output : false
        *
        * var a = new Object();	// object
        * trace(this.gfn_IsEmpty(a));	// output : true
        *
        * var a = new Object();	// object
        * a.test = "abc";
        * trace(this.gfn_IsEmpty(a));	// output : false
        *
        * var a = true;	// boolean
        * trace(this.gfn_IsEmpty(a));	// output : false
        *
        * var a = 0;	// number
        * trace(this.gfn_IsEmpty(a));	// output : false
        *
        * var a = new Date();	// date
        * trace(this.gfn_IsEmpty(a));	// output : false
        *
        * @memberOf Base
        */
        this.gfn_IsEmpty = function(value)
        {
        	// null, undefined ==> true
        	if (value == null || value == undefined) return true;

        	// String, Array ==> length == 0
        	if (this.gfn_IsString(value) || this.gfn_IsArray(value))
        	{
        		return value.length == 0 ? true : false;
        	}
        	else if (this.gfn_IsObject(value))
        	{
        		for (var p in value)
        		{
        			if (value.hasOwnProperty(p))
        			{
        				return false;
        			}
        		}
        		return true;
        	}

        	return false;
        }

        /**
        * value의 undefined 여부 반환.
        * @param {*} value 확인할 value.
        * @return {boolean} undefined 여부.
        * @example
        * var a;
        * trace(Base.isUndefined(a));	// output : true
        *
        * var a = "";
        * trace(Base.isUndefined(a));	// output : false
        * @memberOf Base
        */
        this.gfn_IsUndefined = function(value)
        {
        	return value === undefined;
        }

        /**
        * value의 string 여부 반환
        * @param {*} value 확인할 value.
        * @return {boolean} string 여부.
        * @example
        * trace(Base.isString("test string!!!"));	// output : true
        * trace(Base.isString(1234));	// output : false
        * @memberOf Base
        */
        this.gfn_IsString = function(value)
        {
        	return typeof value == 'string';
        }

        /**
        * value의 number 여부 반환.
        * @param {*} value 확인할 value.
        * @return {boolean} number 여부.
        * @example
        * trace(Base.isNumber(1234));	// output : true
        * trace(Base.isNumber("1234"));	// output : false
        * @memberOf Base
        */
        this.gfn_IsNumber = function(value) {
        	return typeof value == 'number' && isFinite(value);
        }

        /**
        * value의 Date 여부 반환.
        * @param {date} value 확인할 value.
        * @return {boolean} Date 여부.
        * @example
        * var a = new Date();
        * trace(Base.isDate(a));	// output : true
        *
        * var a = "20130501";
        * trace(Base.isDate(a));	// output : false
        * @memberOf Base
        */
        this.gfn_IsDate = function(value)
        {
        	//아래내용을 9.2 Rumtiem 지원안함.
        	//그리고 성능이슈가 발생할 수 있음(느림).
        	//그런데 많은 곳에서 사용하고 있음.
        	//return toString.call(value) === '[object Date]';
        	//return Object.prototype.toString.call(value) === '[object Date]';
        	//typeof보다는 느리지만 아래처럼 사용하는것과는 대동소이?

        	if (typeof value == 'object' && value instanceof Date) {
        		return true;
        	}

        	return false;
        }

        /**
        * value의 Array 여부 반환.
        * @param {*} value 확인할 value.
        * @return {boolean} Array 여부.
        * @example
        * var a = new Array();
        * trace(this.gfn_IsArray(a));	// output : true
        *
        * var a = [1,2,3];
        * trace(this.gfn_IsArray(a));	// output : true
        * @memberOf Base
        */
        this.gfn_IsArray = function(value)
        {
        	//TODO
        	/*
        	V13에서는 아래처럼하자(또는 HTML5)
        	return Object.prototype.toString.call( value ) === '[object Array]';
        	*/

        	if (value == null || value == undefined) return false;

        	// constructor 에 접근시 XP Comp 는 에러발생
        	if (this.gfn_IsXpComponent(value)) return false;

        	return typeof value == "object" &&
        	'constructor' in value &&
        	value.constructor == Array;
        }

        /**
        * value의 Object 여부 반환.
        * @param {*} value 확인할 value.
        * @return {boolean} Object 여부.
        * @example
        * var o = new Object();
        * trace(Base.isObject(o));	// output : true
        *
        * var o = {};
        * trace(Base.isObject(o));	// output : true
        *
        * var o = [1,2,3];
        * trace(Base.isObject(o));	// output : false
        *
        * var o = new Button();
        * trace(Base.isObject(o));	// output : false
        *
        * var o = new Rect();
        * trace(Base.isObject(o));	// output : false
        *
        * @memberOf Base
        */
        this.gfn_IsObject = function(value)
        {
        	if (value == null || value == undefined) return false;

        	// constructor 에 접근시 XP Comp 는 에러발생
        	if (this.gfn_IsXpComponent(value)) return false;

        	//신규추가 2013.11.27 pbh. 데이터셋과 같은 xp object 거르기.
        	if (!this.gfn_IsEmpty(value._type))
        	{
        		if (value._type.substr(0, 4) == "TOBE")  return false;
        	}

        	return typeof value == "object" &&
        	'constructor' in value &&
        	value.constructor == Object;
        }

        /**
        * value의 XPLATFORM component 여부 반환.
        * @param {*} value 확인할 value.
        * @return {boolean} XPLATFORM component 여부.
        * @example
        * var a = new Button();
        * trace(Base.isXpComponent(a));	// output : true
        *
        * var a = new Rect();
        * trace(Base.isXpComponent(a));	// output : false
        *
        * var a = new Dataset();
        * trace(Base.isXpComponent(a));	// output : false
        * @memberOf Base
        */
        this.gfn_IsXpComponent = function(value)
        {
        	// value를 리턴함 [2013.05.07 - lyh]
        	//return value && value.currentstyle;

        	if (value == null || value == undefined) return false;

        	return value instanceof nexacro.Component;
        }

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
        this.gfn_Lookup = function(p, name)
        {
        	var o;
        	while (p)
        	{
        		o = p.components;
        		if (o && o[name]) return o[name];

        		o = p.objects;
        		if (o && o[name]) return o[name];

        		p = p.parent;
        	}

        	return null;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_add.addEventHandler("onclick",this.fn_comBtn,this);
            this.btn_delete.addEventHandler("onclick",this.fn_comBtn,this);
            this.btn_up.addEventHandler("onclick",this.fn_comBtn,this);
            this.btn_down.addEventHandler("onclick",this.fn_comBtn,this);
            this.btn_apply.addEventHandler("onclick",this.fn_comBtn,this);
            this.ds_item.addEventHandler("oncolumnchanged",this.ds_item_oncolumnchanged,this);
        };

        this.loadIncludeScript("comGridSortPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
