(function(){return function(){if(!this._is_form){return;}var obj=null;this.on_create=function(){this.set_name("GridFilterDiv");this.set_titletext("New Form");this.set_background("transparent");if(Form==this.constructor){this._setFormPosition(100,50);}obj=new Dataset("ds_codeOperater",this);obj.getSetter("firefirstcount").set("0");obj.set_useclientlayout("false");obj.set_updatecontrol("true");obj.set_enableevent("true");obj.set_loadkeymode("keep");obj.set_loadfiltermode("keep");obj.set_reversesubsum("false");obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">none</Col><Col id=\"nm\">없음</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">equal</Col><Col id=\"nm\">=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">notEqual</Col><Col id=\"nm\">&lt;&gt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">greaterThan</Col><Col id=\"nm\">&gt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">greaterThanOrEqual</Col><Col id=\"nm\">&gt;=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">lessThan</Col><Col id=\"nm\">&lt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">lessThanOrEqual</Col><Col id=\"nm\">&lt;=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">startWith</Col><Col id=\"nm\">시작문자</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">endWith</Col><Col id=\"nm\">종료문자</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">contains</Col><Col id=\"nm\">포함</Col><Col id=\"group\">String</Col></Row></Rows>");this.addChild(obj.name,obj);obj=new Dataset("ds_combo",this);obj.getSetter("firefirstcount").set("0");obj.set_useclientlayout("false");obj.set_updatecontrol("true");obj.set_enableevent("true");obj.set_loadkeymode("keep");obj.set_loadfiltermode("keep");obj.set_reversesubsum("false");obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"val\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(obj.name,obj);obj=new Combo("cmb_operater","0","62","95","20",null,null,null,null,null,null,this);obj.set_taborder("0");obj.set_tabstop("false");obj.set_innerdataset("ds_codeOperater");obj.set_codecolumn("cd");obj.set_datacolumn("nm");obj.set_background("transparent");this.addChild(obj.name,obj);obj=new Button("btn_filter","78","16","20","21",null,null,null,null,null,null,this);obj.set_taborder("1");obj.set_tabstop("false");obj.set_cssclass("GD_btnAdd_ft01");obj.set_cursor("hand");this.addChild(obj.name,obj);obj=new Edit("edt_filter","1","17","76","19",null,null,null,null,null,null,this);obj.set_taborder("2");obj.set_background("rgba(255,255,255,1)");obj.set_border("1px solid rgba(211,211,211,1)");obj.set_borderRadius("0px");this.addChild(obj.name,obj);obj=new PopupDiv("pdiv_combo","2","131","126","120",null,null,null,null,null,null,this);obj.set_text("PopupDiv00");obj.set_visible("false");obj.set_border("1px solid darkgreen");this.addChild(obj.name,obj);obj=new Grid("grd_combo","0","-1","126","120",null,null,null,null,null,null,this.pdiv_combo.form);obj.set_taborder("0");obj.set_binddataset("ds_combo");obj.set_autoenter("select");obj.set_autoupdatetype("itemselect");obj.set_selecttype("cell");obj.set_autofittype("col");obj.set_background("white");obj.set_border("0px none darkgreen");obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:text\" textAlign=\"left\" verticalAlign=\"middle\"/></Band></Format></Formats>");this.pdiv_combo.addChild(obj.name,obj);obj=new Calendar("cal_filter","0","90","94","20",null,null,null,null,null,null,this);obj.set_taborder("4");obj.set_tabstop("false");obj.set_borderRadius("0px");this.addChild(obj.name,obj);obj=new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});this.addLayout(obj.name,obj);};this.loadPreloadList=function(){};this.registerScript("GridFilterDiv_.xfdl",function(){this.GridFilterDiv_onload=function(obj,e){var imageSize=this.parent.parent.FILTER_ENABLE_IMAGE_SIZE;this.btn_filter.resize(imageSize[0],imageSize[1]);this.btn_filter.set_border("0px none #ffffff");this.btn_filter.set_background("url('"+this.parent.parent.FILTER_ENABLE_IMAGE_URL+"') no-repeat center center");this.cmb_operater.set_border("0px none #ffffff");this.resizeComps(obj.getOffsetWidth(),obj.getOffsetHeight());};this.GridFilterDiv_onsize=function(obj,e){this.resizeComps(e.cx,e.cy);};this.initValue=function(){this.edt_filter.set_value("");this.btn_filter.set_border("0px none #ffffff");this.btn_filter.set_background("url('"+this.parent.parent.FILTER_ENABLE_IMAGE_URL+"') no-repeat center center");this.cmb_operater.set_index( -1);this.cal_filter.set_value("");};this.resizeComps=function(formW,formH){var l,t,w,h,gap=2;var imageSize=this.parent.parent.FILTER_ENABLE_IMAGE_SIZE;l=gap;t=gap;w=formW-(gap*2)-imageSize[0];h=formH-(gap*2);this.edt_filter.move(l,t,w,h);this.cal_filter.move(l,t,w,h);l=l+w+gap;t=Math.round((formH-imageSize[1])/2);this.btn_filter.move(l,t);l=this.btn_filter.getOffsetLeft();t=this.btn_filter.getOffsetTop();w=this.btn_filter.getOffsetWidth();h=this.btn_filter.getOffsetBottom();this.cmb_operater.move(l,t,w,h);};this.setFilterType=function(){var grid=this.parent.grid;var type=this.parent.filterType;var column=this.parent.filterColumn;var bodyCellIndex=this.parent.bodyCellIndex;var filterData=this.parent.filterData;if(type=="combo"){this.edt_filter.set_visible(false);this.cal_filter.set_visible(false);var dsName=grid.getCellProperty("body",bodyCellIndex,"combodataset");var ds=this.gfn_Lookup(grid.parent,dsName);var codeColumn=grid.getCellProperty("body",bodyCellIndex,"combocodecol");var dataColumn=grid.getCellProperty("body",bodyCellIndex,"combodatacol");this.ds_combo.set_enableevent(false);this.ds_combo.deleteAll();var row;var defaultVal=this.gfnIsNull(filterData)?true:false;for(var i=0,len=ds.rowcount;i<len;i++ ){row=this.ds_combo.addRow();this.ds_combo.setColumn(row,"chk",(defaultVal?0:filterData[i]));this.ds_combo.setColumn(row,"text",ds.getColumn(i,dataColumn));this.ds_combo.setColumn(row,"val",ds.getColumn(i,codeColumn));}this.ds_combo.set_rowposition( -1);this.ds_combo.set_enableevent(true);}else if(type=="date"){this.edt_filter.set_visible(false);this.cal_filter.set_visible(true);}else if(type=="number"){this.edt_filter.set_visible(true);this.cal_filter.set_visible(false);this.edt_filter.set_inputtype("number");}else{this.edt_filter.set_visible(true);this.cal_filter.set_visible(false);this.edt_filter.set_inputtype("normal");}};this.edt_filter_onkeydown=function(obj,e){if(e.keycode==13){this.applyFilter(this.cmb_operater.value,obj.value,obj.value);}};this.edt_filter_onsetfocus=function(obj,e){obj.focusValue=obj.value;};this.edt_filter_onkillfocus=function(obj,e){if(obj.focusValue!=obj.value){this.applyFilter(this.cmb_operater.value,obj.value,obj.value);}};this.btn_filter_onclick=function(obj,e){var grid=this.parent.grid;var type=this.parent.filterType;if(type=="normal"){this.ds_codeOperater.filter("");this.cmb_operater.dropdown();}else if(type=="number"||type=="date"){this.ds_codeOperater.filter("group != 'String'");this.cmb_operater.dropdown();}else if(type=="combo"){var imageSize=this.parent.parent.FILTER_ENABLE_IMAGE_SIZE;var x=e.clientx+grid.getOffsetLeft()+1050-this.parent.posX;var y=e.clienty+grid.getOffsetTop()+165;var z=parseInt(this.getOffsetWidth()+1);var nNum=nexacro.round(0.76*z);this.pdiv_combo.set_width(z);this.pdiv_combo.trackPopupByComponent(obj, -nNum,22);}};this.cmb_operater_onitemclick=function(obj,e){var value;var type=this.parent.filterType;if(type=="normal"){value=this.edt_filter.value;}else if(type=="number"){value=parseInt(this.edt_filter.value);}else if(type=="date"){value=this.cal_filter.value;}this.applyFilter(e.itemvalue,value,value);};this.cal_filter_oncloseup=function(obj,e){if(e.prevalue!=e.postvalue){this.applyFilter(this.cmb_operater.value,e.postvalue,e.postvalue);}};this.pdiv_combo_oncloseup=function(obj,e){var value=[];var cnt=this.ds_combo.rowcount;var chk=0;var filterData=[];for(var i=0;i<cnt;i++ ){if(this.ds_combo.getColumn(i,"chk")==1){chk+=1;value.push(this.ds_combo.getColumn(i,"val"));}filterData.push(this.ds_combo.getColumn(i,"chk"));}if(chk==cnt){value=[];}this.applyFilter("equal",value,filterData);};this.applyFilter=function(operater,value,filterData){var grid=this.parent.grid;var column=this.parent.filterColumn;var headCellIndex=this.parent.headCellIndex;var ds=this.gfn_Lookup(grid.parent,grid.binddataset);var colType=ds.getColumnInfo(column).type;var filterString="";var str="";if(!this.gfnIsNull(value)){if(Object.prototype.toString.call(value)!='[object Array]'){value=[value];}var val;for(var i=0,len=value.length;i<len;i++ ){val=value[i];if(!this.gfnIsNull(operater)){if(!this.gfnIsNull(filterString)){filterString+=" || ";}filterString+=column;switch(operater){case 'equal':str="=="+(colType=="STRING"?nexacro.wrapQuote(val):val);break;case 'notEqual':str="!="+(colType=="STRING"?nexacro.wrapQuote(val):val);break;case 'greaterThan':str=">"+(colType=="STRING"?nexacro.wrapQuote(val):val);break;case 'greaterThanOrEqual':str=">="+(colType=="STRING"?nexacro.wrapQuote(val):val);break;case 'lessThan':str="<"+(colType=="STRING"?nexacro.wrapQuote(val):val);break;case 'lessThanOrEqual':str="<="+(colType=="STRING"?nexacro.wrapQuote(val):val);break;case 'startWith':str=".toString().substr(0, "+val.length+") == '"+val+"'";break;case 'endWith':str=".toString().substr("+column+".toString().length-"+val.length+") == '"+val+"'";break;case 'contains':str=".toString().search('"+val+"') > -1";break;}filterString+=str;}}}if(this.gfnIsNull(filterString)){this.btn_filter.set_background("url('"+this.parent.parent.FILTER_ENABLE_IMAGE_URL+"') no-repeat center center");}else{filterString="("+filterString+")";this.btn_filter.set_background("url('"+this.parent.parent.FILTER_APPLY_IMAGE_URL+"') no-repeat center center");}this.parent.parent.executeFilter(grid,headCellIndex,filterString,filterData);};this.gfn_Lookup=function(p,name){var o;while(p){o=p.components;if(o&&o[name]){return o[name];}o=p.objects;if(o&&o[name]){return o[name];}p=p.parent;}return null;};});this.on_initEvent=function(){this.addEventHandler("onload",this.GridFilterDiv_onload,this);this.addEventHandler("onsize",this.GridFilterDiv_onsize,this);this.cmb_operater.addEventHandler("onitemclick",this.cmb_operater_onitemclick,this);this.btn_filter.addEventHandler("onclick",this.btn_filter_onclick,this);this.edt_filter.addEventHandler("onsetfocus",this.edt_filter_onsetfocus,this);this.edt_filter.addEventHandler("onkillfocus",this.edt_filter_onkillfocus,this);this.edt_filter.addEventHandler("onkeydown",this.edt_filter_onkeydown,this);this.pdiv_combo.addEventHandler("oncloseup",this.pdiv_combo_oncloseup,this);this.cal_filter.addEventHandler("oncloseup",this.cal_filter_oncloseup,this);};this.loadIncludeScript("GridFilterDiv_.xfdl");this.loadPreloadList();obj=null;};})();