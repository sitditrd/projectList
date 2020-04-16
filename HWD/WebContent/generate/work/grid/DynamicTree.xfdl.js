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
            this.set_titletext("트리그리드Drag&Drop");
            this.set_scrollbartype("autoindicator autoindicator");
            this.getSetter("classname").set("work004");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,960);
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
            
            // UI Components Initialize
            obj = new Static("staInfo","0","0",null,"80","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("트리 그리드 컬럼을 동적으로 생성합니다.\r\n왼쪽의 카테고리를 오른쪽의 그리드로 drag&drop 할 경우 컬럼이 동적으로 생성되며, 다양하게 활용할 수 있습니다.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","98","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("트리 -> 트리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTree","0","128",null,"240","50.92%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMenuOrg");
            obj.getSetter("useinputpanel").set("false");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"237\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"NAME\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","50.00%","128",null,"240","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMenuTarget");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_nodatatext("Tree 를 Drag 해서 Drop 하세요");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"103\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","383","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("트리 -> 그리드");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTree2","0","413",null,"240","50.92%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsMenuOrg2");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"none\" text=\"NAME\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList2","49.90%","413",null,"240","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj.set_nodatatext("Tree 를 Drag 해서 Drop 하세요");
            obj.set_binddataset("dsTreetoGrid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"LEVEL\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:LEVEL\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","668","410","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("트리 → 그리드 (특정 컬럼에 drag&drop)");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTree3","0","698",null,"240","50.92%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsMenuOrg4");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"none\" text=\"NAME\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList3","49.90%","698",null,"240","21",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsTreetoGrid2");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_nodatatext("Tree 를 Drag 해서 Drop 하세요");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"LEVEL\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:LEVEL\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
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
        /**
        *  nexacro 17 demo
        *  @MenuPath    grid > DynamicTree
        *  @FileName  DynamicTree.xfdl
        *  @Creator  presales
        *  @CreateDate  2020.02.06
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2020.02.06      presales                  최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
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
        this.fvDropFlag;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description Form onload
        */
        this.DynamicTree_onload = function(obj,e)
        {
        	this.dsOrg = this.dsMenuOrg;
        	this.dsTarget = this.dsMenuTarget;
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description ondragmove
        */
        this.DynamicTree_ondragmove = function(obj,e)
        {
        	this.stDragImg.move(e.clientx + 15, e.clienty + 15);
        };

        /**
         * @description ondrop
        */
        this.DynamicTree_ondrop = function(obj, e)
        {
        	this.stDragImg.set_visible(false);
        };

        /**
         * @description ondrag
        */
        this.fnOndrag = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "grdTree" : // 트리 -> 트리
        		case "grdTree2" : // 트리 -> 그리드
        		case "grdTree3" : // 트리 -> 그리드 (특정 컬럼에 drag&drop)
        			if (e.row > -1) {
        				if (obj.name == "grdTree") {
        					this.fvDropFlag = "트리";
        				} else if (obj.name == "grdTree2") {
        					this.fvDropFlag = "그리드";
        				} else {
        					this.fvDropFlag = "컬럼";
        				}

        				this.stDragImg.bringToFront();
        				this.stDragImg.set_text(obj.getCellText(e.row, e.cell));
        				this.stDragImg.set_visible(true);

        				return true;
        			}

        			return false;
        			break;
        	}
        };

        /**
         * @description ondrop
        */
        this.fnOndrop = function(obj, e)
        {
        	var i = 0;
        	var nInsertRow = -9;
        	var nRow = 0, nStart, nEnd = 0;

        	this.stDragImg.set_visible(false);

        	if (this.fvDropFlag == "트리" && obj.name != "grdList") {
        		return;
        	} else if (this.fvDropFlag == "그리드" && obj.name != "grdList2") {
        		return;
        	} else if (this.fvDropFlag == "컬럼" && obj.name != "grdList3") {
        		return;
        	}

        	switch (obj.name)
        	{
        		case "grdList" : // 트리 -> 트리
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
        			var nChildCount = nexacro.toNumber(this.grdTree.getTreeChildCount(nStart));

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

        		case "grdList2" : // 트리 -> 그리드
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
        			var nChildCount = nexacro.toNumber(this.grdTree2.getTreeChildCount(nStart));

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

        		case "grdList3" : // 트리 -> 그리드 (특정 컬럼에 drag&drop)
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
        			var nChildCount = nexacro.toNumber(this.grdTree3.getTreeChildCount(nStart));

        			if (nInsertRow >= 0)
        			{
        				sTargetLvl = this.dsTreetoGrid2.getColumn(nInsertRow, "LEVEL");

        				if (this.gfnIsNull(sTargetLvl)) {
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

        /**
         * @description ondragleave
        */
        this.fnOndragleave = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "grdTree" : // 트리 -> 트리
        			this.nRowBegin = nexacro.toNumber(obj.selectstartrow);
        			this.nRowFinish = nexacro.toNumber(obj.selectendrow);
        			break;

        		case "grdTree2" : // 트리 -> 그리드
        			this.nRowBegin2 = nexacro.toNumber(obj.selectstartrow);
        			this.nRowFinish2 = nexacro.toNumber(obj.selectendrow);
        			break;

        		case "grdTree3" : // 트리 -> 그리드 (특정 컬럼에 drag&drop)
        			this.nRowBegin4 = nexacro.toNumber(obj.selectstartrow);
        			this.nRowFinish4 = nexacro.toNumber(obj.selectendrow);
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DynamicTree_onload,this);
            this.addEventHandler("ondrop",this.DynamicTree_ondrop,this);
            this.addEventHandler("ondragmove",this.DynamicTree_ondragmove,this);
            this.addEventHandler("ondragenter",this.DynamicTree_ondragenter,this);
            this.grdTree.addEventHandler("ondrag",this.fnOndrag,this);
            this.grdTree.addEventHandler("ondragleave",this.fnOndragleave,this);
            this.grdTree.addEventHandler("onlbuttondown",this.gd_onlbuttondown,this);
            this.grdTree.addEventHandler("onlbuttonup",this.gd_onlbuttonup,this);
            this.grdList.addEventHandler("ondrop",this.fnOndrop,this);
            this.grdTree2.addEventHandler("ondrag",this.fnOndrag,this);
            this.grdTree2.addEventHandler("ondragleave",this.fnOndragleave,this);
            this.grdTree2.addEventHandler("onlbuttondown",this.gd_onlbuttondown,this);
            this.grdTree2.addEventHandler("onlbuttonup",this.gd_onlbuttonup,this);
            this.grdList2.addEventHandler("ondrop",this.fnOndrop,this);
            this.grdTree3.addEventHandler("ondrag",this.fnOndrag,this);
            this.grdTree3.addEventHandler("ondragleave",this.fnOndragleave,this);
            this.grdTree3.addEventHandler("onlbuttondown",this.gd_onlbuttondown,this);
            this.grdTree3.addEventHandler("onlbuttonup",this.gd_onlbuttonup,this);
            this.grdList3.addEventHandler("ondrop",this.fnOndrop,this);
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
