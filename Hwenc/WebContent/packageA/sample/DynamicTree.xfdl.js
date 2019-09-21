(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DynamicTree");
            this.set_titletext("트리그리드");
            this.getSetter("classname").set("work004");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenuTarget", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"160\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuOrg", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"160\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">투비소프트</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"NAME\">사업본부</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">사업그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">사업1팀(제조)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업2팀(공공)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업3팀(금융)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업4팀(전략)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술융합그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">프리세일즈팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술융합팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">교육서비스팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기획마케팅팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술지원본부</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">제품컨설팅그룹</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">제품컨설팅그룹</Col><Col id=\"LEVEL\">4</Col></Row><Row><Col id=\"NAME\">UX컨설팅팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">디자인팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">제품컨설팅1팀(제조)</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">제품컨설팅2팀(공공)</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">제품컨설팅3팀(금융)</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">기술지원그룹</Col><Col id=\"LEVEL\">4</Col></Row><Row><Col id=\"NAME\">기술지원팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">테크솔루션팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">일본사업지원팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">서버솔루션팀</Col><Col id=\"LEVEL\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTreetoGrid", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"160\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuOrg2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"160\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">투비소프트</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"NAME\">사업본부</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">사업그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">사업1팀(제조)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업2팀(공공)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업3팀(금융)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업4팀(전략)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술융합그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">프리세일즈팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술융합팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">교육서비스팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기획마케팅팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술지원본부</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">제품컨설팅그룹</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">제품컨설팅그룹</Col><Col id=\"LEVEL\">4</Col></Row><Row><Col id=\"NAME\">UX컨설팅팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">디자인팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">제품컨설팅1팀(제조)</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">제품컨설팅2팀(공공)</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">제품컨설팅3팀(금융)</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">기술지원그룹</Col><Col id=\"LEVEL\">4</Col></Row><Row><Col id=\"NAME\">기술지원팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">테크솔루션팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">일본사업지원팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">서버솔루션팀</Col><Col id=\"LEVEL\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTreetoGrid2", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"160\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuOrg4", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"160\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">투비소프트</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"NAME\">사업본부</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">사업그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">사업1팀(제조)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업2팀(공공)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업3팀(금융)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업4팀(전략)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술융합그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">프리세일즈팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술융합팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">교육서비스팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기획마케팅팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술지원본부</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">제품컨설팅그룹</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">제품컨설팅그룹</Col><Col id=\"LEVEL\">4</Col></Row><Row><Col id=\"NAME\">UX컨설팅팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">디자인팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">제품컨설팅1팀(제조)</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">제품컨설팅2팀(공공)</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">제품컨설팅3팀(금융)</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">기술지원그룹</Col><Col id=\"LEVEL\">4</Col></Row><Row><Col id=\"NAME\">기술지원팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">테크솔루션팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">일본사업지원팀</Col><Col id=\"LEVEL\">5</Col></Row><Row><Col id=\"NAME\">서버솔루션팀</Col><Col id=\"LEVEL\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col></Row><Row><Col id=\"Column0\">02</Col></Row><Row><Col id=\"Column0\">03</Col></Row><Row><Col id=\"Column0\">04</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static05","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("동적 트리 그리드");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","50","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("트리 -> 트리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("gd_tree","10","80",null,"170","50.10%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMenuOrg");
            obj.getSetter("useinputpanel").set("false");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"237\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"NAME\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("gd_list","50.10%","80",null,"170","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMenuTarget");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_nodatatext("Tree 를 Drag 해서 Drop 하세요");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"103\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","260","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("트리 -> 그리드");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","10","290",null,"170","50.10%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsMenuOrg2");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"none\" text=\"NAME\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","50.10%","290",null,"170","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj.set_nodatatext("Tree 를 Drag 해서 Drop 하세요");
            obj.set_binddataset("dsTreetoGrid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"LEVEL\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:LEVEL\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","470","410","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("트리 → 그리드 (특정 컬럼에 drag&drop)");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04","10","500",null,"170","50.10%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsMenuOrg4");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"none\" text=\"NAME\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05","50.10%","500",null,"170","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsTreetoGrid2");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_nodatatext("Tree 를 Drag 해서 Drop 하세요");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"LEVEL\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:LEVEL\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stDragImg","909","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_cssclass("sta_grd_move");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMenuTarget");
            this._addPreloadList("data","","dsTreetoGrid");
            this._addPreloadList("data","","dsTreetoGrid2");
        };
        
        // User Script
        this.registerScript("DynamicTree.xfdl", function() {
        this.nRowBegin = 0;
        this.nRowFinish = 0;
        this.nRowBegin2 = 0;
        this.nRowFinish2 = 0;
        this.nRowBegin3 = 0;
        this.nRowFinish3 = 0;
        this.nRowBegin4 = 0;
        this.nRowFinish4 = 0;
        this.dsOrg = null;
        this.dsTarget = null;

        this.DynamicTree_onload = function(obj,e)
        {
        	this.dsOrg = this.dsMenuOrg;
        	this.dsTarget = this.dsMenuTarget;
        }

        this.DynamicTree_ondragmove = function(obj,e)
        {
        	this.stDragImg.move(e.clientx + 15, e.clienty + 15);
        }

        this.DynamicTree_ondrop = function(obj,e)
        {
        	this.stDragImg.set_visible(false);
        }

        // Grid Drag Event
        this.fn_ondrag = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "gd_tree" : // 트리 -> 트리
        		case "Grid02" : // 트리 -> 그리드
        		case "Grid04" : // 트리 -> 그리드 (특정 컬럼에 drag&drop)
        			if (e.row > -1) {
        				this.stDragImg.bringToFront();
        				this.stDragImg.set_text(obj.getCellText(e.row, e.cell));
        				this.stDragImg.set_visible(true);

        				return true;
        			}
        			return false;
        			break;
        	}
        };

        // Grid Drop Event
        this.fn_ondrop = function(obj,e)
        {
        	var i = 0;
        	var nInsertRow = -9;
        	var nRow = 0, nStart, nEnd = 0;

        	this.stDragImg.set_visible(false);

        	switch (obj.name)
        	{
        		case "gd_list" : // 트리 -> 트리
        			if (e.row != -9) {
        				nInsertRow = e.row;
        			}

        			if (this.nRowBegin < this.nRowFinish) {
        				nStart = this.nRowBegin;
        				nEnd = this.nRowFinish;
        			} else {
        				nStart = this.nRowFinish;
        				nEnd = this.nRowBegin;
        			}

        			var sTargetLvl = 0;
        			this.dsTarget.set_enableevent(false);
        			var nChildCount = nexacro.toNumber(this.gd_tree.getTreeChildCount(nStart));

        			if (nInsertRow >= 0) {
        				sTargetLvl = this.dsTarget.getColumn(nInsertRow, "LEVEL");
        			}

        			if (nChildCount > 0)
        			{
        				var sLvl = this.dsOrg.getColumn(nStart, "LEVEL");
        				var nMenuSubFinish = 0;
        				nMenuSubFinish = this.dsOrg.findRow("LEVEL", sLvl, nStart + 1);

        				if (nMenuSubFinish > -1) {
        					nMenuSubFinish--;
        				} else {
        					nMenuSubFinish = this.dsOrg.rowcount - 1;
        				}

        				sLvl = sTargetLvl;

        				for (i = nStart; i <= nMenuSubFinish; i++)
        				{
        					if (nInsertRow >= 0)
        					{
        						nRow = this.dsTarget.insertRow(nInsertRow);
        						nInsertRow++;
        						this.dsTarget.copyRow(nRow, this.dsOrg, i);

        						sLvl = this.dsOrg.getColumn(i, "LEVEL");

        						if (sTargetLvl >= this.dsOrg.getColumn(i, "LEVEL")) {
        							sLvl++;
        						}

        						this.dsTarget.setColumn(nRow, "LEVEL", sLvl);
        					} else {
        						nRow = this.dsTarget.addRow();
        						this.dsTarget.copyRow(nRow, this.dsOrg, i);
        					}
        				}
        			}
        			else
        			{
        				for (i = nStart; i <= nEnd; i++)
        				{
        					if (nInsertRow >= 0) {
        						nRow = this.dsTarget.insertRow(nInsertRow);
        						nInsertRow++;
        					} else {
        						nRow = this.dsTarget.addRow();
        					}

        					this.dsTarget.copyRow(nRow, this.dsOrg, i);
        					this.dsTarget.setColumn(nRow, "LEVEL", sTargetLvl);
        				}
        			}
        			this.dsTarget.set_enableevent(true);
        			break;

        		case "Grid03" : // 트리 -> 그리드
        			if (e.row != -9) {
        				nInsertRow = e.row;
        			}

        			if (this.nRowBegin2 < this.nRowFinish2)
        			{
        				nStart = this.nRowBegin2;
        				nEnd = this.nRowFinish2;
        			} else {
        				nStart = this.nRowFinish2;
        				nEnd = this.nRowBegin2;
        			}

        			var sTargetLvl = 0;
        			this.dsTreetoGrid.set_enableevent(false);
        			var nChildCount = nexacro.toNumber(this.Grid02.getTreeChildCount(nStart));

        			if (nInsertRow >= 0) {
        				sTargetLvl = this.dsTreetoGrid.getColumn(nInsertRow, "LEVEL");
        			}

        			if (nChildCount > 0)
        			{
        				var sLvl = this.dsMenuOrg2.getColumn(nStart, "LEVEL");
        				var nMenuSubFinish = 0;
        				nMenuSubFinish = this.dsMenuOrg2.findRow("LEVEL", sLvl, nStart+1);

        				if (nMenuSubFinish > -1) {
        					nMenuSubFinish--;
        				} else {
        					nMenuSubFinish = this.dsMenuOrg2.rowcount - 1;
        				}

        				sLvl = sTargetLvl;

        				for (i = nStart; i<= nMenuSubFinish; i++)
        				{
        					if (nInsertRow >= 0)
        					{
        						nRow = this.dsTreetoGrid.insertRow(nInsertRow);
        						nInsertRow++;
        						this.dsTreetoGrid.copyRow(nRow, this.dsMenuOrg2, i);
        						sLvl = this.dsMenuOrg2.getColumn(i, "LEVEL");

        						if (sTargetLvl >= this.dsMenuOrg2.getColumn(i, "LEVEL")) {
        							sLvl++;
        						}

        						this.dsTreetoGrid.setColumn(nRow, "LEVEL", sLvl);
        					}
        					else
        					{
        						nRow = this.dsTreetoGrid.addRow();
        						this.dsTreetoGrid.copyRow(nRow, this.dsMenuOrg2, i);
        					}
        				}
        			}
        			else
        			{
        				for (i = nStart; i<= nEnd; i++)
        				{
        					if (nInsertRow >= 0) {
        						nRow = this.dsTreetoGrid.insertRow(nInsertRow);
        						nInsertRow++;
        					} else {
        						nRow = this.dsTreetoGrid.addRow();
        					}

        					this.dsTreetoGrid.copyRow(nRow, this.dsMenuOrg2, i);
        					this.dsTreetoGrid.setColumn(nRow, "LEVEL", sTargetLvl);
        				}
        			}
        			this.dsTreetoGrid.set_enableevent(true);
        			break;

        		case "Grid05" : // 트리 -> 그리드 (특정 컬럼에 drag&drop)
        			if (e.row != -9) {
        				nInsertRow = e.row;
        			}

        			if (this.nRowBegin4 < this.nRowFinish4) {
        				nStart = this.nRowBegin4;
        				nEnd = this.nRowFinish4;
        			} else {
        				nStart = this.nRowFinish4;
        				nEnd = this.nRowBegin4;
        			}

        			var sTargetLvl = 0;
        			this.dsTreetoGrid2.set_enableevent(false);
        			var nChildCount = nexacro.toNumber(this.Grid04.getTreeChildCount(nStart));

        			if (nInsertRow >= 0)
        			{
        				sTargetLvl = this.dsTreetoGrid2.getColumn(nInsertRow, "LEVEL");

        				if (this.gfn_IsNull(sTargetLvl)) {
        					sTargetLvl = this.dsMenuOrg4.getColumn(nStart, "LEVEL");
        				}
        			}

        			if (nChildCount > 0)
        			{
        				var sLvl = this.dsMenuOrg4.getColumn(nStart, "LEVEL");
        				var nMenuSubFinish = 0;
        				nMenuSubFinish = this.dsMenuOrg4.findRow("LEVEL", sLvl, nStart+1);

        				if (nMenuSubFinish > -1) {
        					nMenuSubFinish--;
        				} else {
        					nMenuSubFinish = this.dsMenuOrg4.rowcount - 1;
        				}

        				sLvl = sTargetLvl;

        				for (i = nStart; i<= nMenuSubFinish; i++)
        				{
        					if (nInsertRow >= 0)
        					{
        						if (nRow >= this.dsTreetoGrid2.rowcount - 1) {
        							nRow = this.dsTreetoGrid2.insertRow(nInsertRow);
        						} else {
        							nRow = nInsertRow;
        						}
        						nInsertRow++;
        						this.dsTreetoGrid2.copyRow(nRow, this.dsMenuOrg4, i);

        						sLvl = this.dsMenuOrg4.getColumn(i, "LEVEL");

        						this.dsTreetoGrid2.setColumn(nRow, "LEVEL", sLvl);
        					}
        					else
        					{
        						nRow = this.dsTreetoGrid2.addRow();
        						this.dsTreetoGrid2.copyRow(nRow, this.dsMenuOrg4, i);
        					}
        				}
        			}
        			else
        			{
        				for (i = nStart; i<= nEnd; i++)
        				{
        					if (nInsertRow >= 0)
        					{
        						if (nRow > this.dsTreetoGrid2.rowcount) {
        							nRow = this.dsTreetoGrid2.insertRow(nInsertRow);
        						} else {
        							nRow = nInsertRow;
        						}
        						nInsertRow++;
        					}
        					else
        					{
        						nRow = this.dsTreetoGrid2.addRow();
        					}

        					this.dsTreetoGrid2.copyRow(nRow, this.dsMenuOrg4, i);
        					this.dsTreetoGrid2.setColumn(nRow, "LEVEL", sTargetLvl);
        				}
        			}
        			this.dsTreetoGrid2.set_enableevent(true);
        			break;
        	}
        };

        this.fn_ondragleave = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "gd_tree" : // 트리 -> 트리
        			this.nRowBegin = nexacro.toNumber(obj.selectstartrow);
        			this.nRowFinish = nexacro.toNumber(obj.selectendrow);
        			break;

        		case "Grid02" : // 트리 -> 그리드
        			this.nRowBegin2 = nexacro.toNumber(obj.selectstartrow);
        			this.nRowFinish2 = nexacro.toNumber(obj.selectendrow);
        			break;

        		case "Grid04" : // 트리 -> 그리드 (특정 컬럼에 drag&drop)
        			this.nRowBegin4 = nexacro.toNumber(obj.selectstartrow);
        			this.nRowFinish4 = nexacro.toNumber(obj.selectendrow);
        			break;
        	}
        };

        this.gfn_IsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DynamicTree_onload,this);
            this.addEventHandler("ondrop",this.DynamicTree_ondrop,this);
            this.addEventHandler("ondragmove",this.DynamicTree_ondragmove,this);
            this.addEventHandler("ondragenter",this.DynamicTree_ondragenter,this);
            this.gd_tree.addEventHandler("ondrag",this.fn_ondrag,this);
            this.gd_tree.addEventHandler("ondragleave",this.fn_ondragleave,this);
            this.gd_tree.addEventHandler("onlbuttondown",this.gd_onlbuttondown,this);
            this.gd_tree.addEventHandler("onlbuttonup",this.gd_onlbuttonup,this);
            this.gd_list.addEventHandler("ondrop",this.fn_ondrop,this);
            this.Grid02.addEventHandler("ondrag",this.fn_ondrag,this);
            this.Grid02.addEventHandler("ondragleave",this.fn_ondragleave,this);
            this.Grid02.addEventHandler("onlbuttondown",this.gd_onlbuttondown,this);
            this.Grid02.addEventHandler("onlbuttonup",this.gd_onlbuttonup,this);
            this.Grid03.addEventHandler("ondrop",this.fn_ondrop,this);
            this.Grid04.addEventHandler("ondrag",this.fn_ondrag,this);
            this.Grid04.addEventHandler("ondragleave",this.fn_ondragleave,this);
            this.Grid04.addEventHandler("onlbuttondown",this.gd_onlbuttondown,this);
            this.Grid04.addEventHandler("onlbuttonup",this.gd_onlbuttonup,this);
            this.Grid05.addEventHandler("ondrop",this.fn_ondrop,this);
            this.dsMenuTarget.addEventHandler("oncolumnchanged",this.ds_menuauth_oncolumnchanged,this);
            this.dsTreetoGrid.addEventHandler("oncolumnchanged",this.ds_menuauth_oncolumnchanged,this);
            this.dsTreetoGrid2.addEventHandler("oncolumnchanged",this.ds_menuauth_oncolumnchanged,this);
        };

        this.loadIncludeScript("DynamicTree.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
