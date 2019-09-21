(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_3_4");
            this.set_titletext("다양한 그리드 기능");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Code\">01</Col><Col id=\"Value\">서울</Col></Row><Row><Col id=\"Code\">02</Col><Col id=\"Value\">경기</Col></Row><Row><Col id=\"Code\">03</Col><Col id=\"Value\">대전</Col></Row><Row><Col id=\"Code\">04</Col><Col id=\"Value\">대구</Col></Row><Row><Col id=\"Code\">05</Col><Col id=\"Value\">부산</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Multi", this);
            obj.set_keystring("G:Column0,G:Column1");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column4\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column5\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">대분류1</Col><Col id=\"Column1\">중분류1-1</Col><Col id=\"Column2\">소분류1</Col><Col id=\"Column3\">1235</Col><Col id=\"Column4\">1658</Col><Col id=\"Column5\">8978</Col></Row><Row><Col id=\"Column0\">대분류1</Col><Col id=\"Column1\">중분류1-1</Col><Col id=\"Column2\">소분류2</Col><Col id=\"Column3\">6478</Col><Col id=\"Column4\">3215</Col><Col id=\"Column5\">5688</Col></Row><Row><Col id=\"Column0\">대분류1</Col><Col id=\"Column1\">중분류1-2</Col><Col id=\"Column2\">소분류3</Col><Col id=\"Column3\">6548</Col><Col id=\"Column4\">3128</Col><Col id=\"Column5\">2158</Col></Row><Row><Col id=\"Column0\">대분류2</Col><Col id=\"Column1\">중분류2-1</Col><Col id=\"Column2\">소분류4</Col><Col id=\"Column3\">5218</Col><Col id=\"Column4\">3218</Col><Col id=\"Column5\">3218</Col></Row><Row><Col id=\"Column0\">대분류2</Col><Col id=\"Column1\">중분류2-1</Col><Col id=\"Column2\">소분류5</Col><Col id=\"Column3\">3219</Col><Col id=\"Column4\">1328</Col><Col id=\"Column5\">3218</Col></Row><Row><Col id=\"Column0\">대분류2</Col><Col id=\"Column1\">중분류2-2</Col><Col id=\"Column2\">소분류6</Col><Col id=\"Column3\">6554</Col><Col id=\"Column4\">6218</Col><Col id=\"Column5\">4781</Col></Row><Row><Col id=\"Column0\">대분류2</Col><Col id=\"Column1\">중분류2-2</Col><Col id=\"Column2\">소분류7</Col><Col id=\"Column3\">2158</Col><Col id=\"Column4\">3218</Col><Col id=\"Column5\">3528</Col></Row><Row><Col id=\"Column0\">대분류3</Col><Col id=\"Column1\">중분류3-1</Col><Col id=\"Column2\">소분류8</Col><Col id=\"Column3\">3218</Col><Col id=\"Column4\">3218</Col><Col id=\"Column5\">2618</Col></Row><Row><Col id=\"Column0\">대분류3</Col><Col id=\"Column1\">중분류3-2</Col><Col id=\"Column2\">소분류9</Col><Col id=\"Column3\">2158</Col><Col id=\"Column4\">3218</Col><Col id=\"Column5\">6518</Col></Row><Row><Col id=\"Column0\">대분류3</Col><Col id=\"Column1\">중분류3-3</Col><Col id=\"Column2\">소분류10</Col><Col id=\"Column3\">6541</Col><Col id=\"Column4\">3218</Col><Col id=\"Column5\">3218</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Tree", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"string\" size=\"10\"/><Column id=\"UP_ID\" type=\"string\" size=\"10\"/><Column id=\"NM\" type=\"string\" size=\"50\"/><Column id=\"URL\" type=\"string\" size=\"200\"/><Column id=\"N_ICON\" type=\"string\" size=\"50\"/><Column id=\"LVL\" type=\"string\" size=\"1\"/><Column id=\"MENU_DESC\" type=\"string\" size=\"100\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">M001</Col><Col id=\"UP_ID\">M</Col><Col id=\"NM\">매출조회</Col><Col id=\"URL\"/><Col id=\"N_ICON\">img::menu01.png</Col><Col id=\"LVL\">0</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"Column0\">1235</Col><Col id=\"Column1\">1658</Col><Col id=\"Column2\">8978</Col></Row><Row><Col id=\"ID\">M0011</Col><Col id=\"UP_ID\">M001</Col><Col id=\"NM\">대용량데이터</Col><Col id=\"URL\">WORK::sample001.xfdl</Col><Col id=\"N_ICON\"/><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"Column0\">6478</Col><Col id=\"Column1\">3215</Col><Col id=\"Column2\">5688</Col></Row><Row><Col id=\"ID\">M0012</Col><Col id=\"UP_ID\">M001</Col><Col id=\"NM\">JQ그리드</Col><Col id=\"URL\">WORK::sample002.xfdl</Col><Col id=\"N_ICON\"/><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"Column0\">6548</Col><Col id=\"Column1\">3128</Col><Col id=\"Column2\">2158</Col></Row><Row><Col id=\"ID\">M0013</Col><Col id=\"UP_ID\">M001</Col><Col id=\"NM\">그리드상세</Col><Col id=\"URL\">WORK::sample003.xfdl</Col><Col id=\"N_ICON\"/><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"Column0\">5218</Col><Col id=\"Column1\">3218</Col><Col id=\"Column2\">3218</Col></Row><Row><Col id=\"ID\">M0014</Col><Col id=\"UP_ID\">M001</Col><Col id=\"NM\">그리드기능</Col><Col id=\"URL\">WORK::sample004.xfdl</Col><Col id=\"N_ICON\"/><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"Column0\">3219</Col><Col id=\"Column1\">1328</Col><Col id=\"Column2\">3218</Col></Row><Row><Col id=\"ID\">M002</Col><Col id=\"UP_ID\">M</Col><Col id=\"NM\">추세/통계</Col><Col id=\"URL\"/><Col id=\"N_ICON\">img::menu02.png</Col><Col id=\"LVL\">0</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"Column0\">6554</Col><Col id=\"Column1\">6218</Col><Col id=\"Column2\">4781</Col></Row><Row><Col id=\"ID\">M0021</Col><Col id=\"UP_ID\">M002</Col><Col id=\"NM\">추세/통계1</Col><Col id=\"URL\">WORK::work02_01.xfdl</Col><Col id=\"N_ICON\"/><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"Column0\">2158</Col><Col id=\"Column1\">3218</Col><Col id=\"Column2\">3528</Col></Row><Row><Col id=\"ID\">M0022</Col><Col id=\"UP_ID\">M002</Col><Col id=\"NM\">추세/통계2</Col><Col id=\"URL\"/><Col id=\"N_ICON\"/><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"Column0\">3218</Col><Col id=\"Column1\">3218</Col><Col id=\"Column2\">2618</Col></Row><Row><Col id=\"ID\">M0023</Col><Col id=\"UP_ID\">M002</Col><Col id=\"NM\">추세/통계3</Col><Col id=\"URL\"/><Col id=\"N_ICON\"/><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"Column0\">2158</Col><Col id=\"Column1\">3218</Col><Col id=\"Column2\">6518</Col></Row><Row><Col id=\"ID\">M003</Col><Col id=\"UP_ID\">M</Col><Col id=\"NM\">정책관리</Col><Col id=\"URL\"/><Col id=\"N_ICON\">img::menu03.png</Col><Col id=\"LVL\">0</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"Column0\">6541</Col><Col id=\"Column1\">3218</Col><Col id=\"Column2\">3218</Col></Row><Row><Col id=\"ID\">M0031</Col><Col id=\"UP_ID\">M003</Col><Col id=\"NM\">정책관리1</Col><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"N_ICON\"/><Col id=\"URL\"/><Col id=\"Column0\">1235</Col><Col id=\"Column1\">1658</Col><Col id=\"Column2\">8978</Col></Row><Row><Col id=\"ID\">M0032</Col><Col id=\"UP_ID\">M003</Col><Col id=\"NM\">정책관리2</Col><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"N_ICON\"/><Col id=\"URL\"/><Col id=\"Column0\">6478</Col><Col id=\"Column1\">3215</Col><Col id=\"Column2\">5688</Col></Row><Row><Col id=\"ID\">M0033</Col><Col id=\"UP_ID\">M003</Col><Col id=\"NM\">정책관리3</Col><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"N_ICON\"/><Col id=\"URL\"/><Col id=\"Column0\">6548</Col><Col id=\"Column1\">3128</Col><Col id=\"Column2\">2158</Col></Row><Row><Col id=\"ID\">M004</Col><Col id=\"UP_ID\">M</Col><Col id=\"NM\">관리자/사용자</Col><Col id=\"N_ICON\">img::menu04.png</Col><Col id=\"LVL\">0</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"URL\"/><Col id=\"Column0\">5218</Col><Col id=\"Column1\">3218</Col><Col id=\"Column2\">3218</Col></Row><Row><Col id=\"ID\">M0041</Col><Col id=\"UP_ID\">M004</Col><Col id=\"NM\">관리자/사용자1</Col><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"N_ICON\"/><Col id=\"URL\"/><Col id=\"Column0\">3219</Col><Col id=\"Column1\">1328</Col><Col id=\"Column2\">3218</Col></Row><Row><Col id=\"ID\">M0042</Col><Col id=\"UP_ID\">M004</Col><Col id=\"NM\">관리자/사용자2</Col><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"N_ICON\"/><Col id=\"URL\"/><Col id=\"Column0\">6554</Col><Col id=\"Column1\">6218</Col><Col id=\"Column2\">4781</Col></Row><Row><Col id=\"ID\">M0043</Col><Col id=\"UP_ID\">M004</Col><Col id=\"NM\">관리자/사용자3</Col><Col id=\"LVL\">1</Col><Col id=\"MENU_DESC\">...</Col><Col id=\"N_ICON\"/><Col id=\"URL\"/><Col id=\"Column0\">2158</Col><Col id=\"Column1\">3218</Col><Col id=\"Column2\">3528</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSkinCombo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" size=\"256\" type=\"STRING\"/><Column id=\"data\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">Kama</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">Office 2003</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">V2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"rdo\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"msk\" type=\"STRING\" size=\"256\"/><Column id=\"num\" type=\"INT\" size=\"256\"/><Column id=\"img\" type=\"STRING\" size=\"256\"/><Column id=\"cmb\" type=\"STRING\" size=\"256\"/><Column id=\"cal\" type=\"STRING\" size=\"256\"/><Column id=\"btn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">-1323</Col><Col id=\"cmb\">01</Col><Col id=\"cal\">20140813</Col><Col id=\"img\">imagerc::grid_img_red.png</Col><Col id=\"rdo\">1</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">123</Col><Col id=\"img\">imagerc::grid_img_blue.png</Col><Col id=\"cmb\">02</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">8904</Col><Col id=\"img\">imagerc::grid_img_blue.png</Col><Col id=\"cmb\">03</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">-465</Col><Col id=\"img\">imagerc::grid_img_red.png</Col><Col id=\"cmb\">04</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">3218</Col><Col id=\"img\">imagerc::grid_img_blue.png</Col><Col id=\"cmb\">05</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">6548</Col><Col id=\"img\">imagerc::grid_img_blue.png</Col><Col id=\"cmb\">01</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">8723</Col><Col id=\"img\">imagerc::grid_img_blue.png</Col><Col id=\"cmb\">02</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">-2185</Col><Col id=\"img\">imagerc::grid_img_red.png</Col><Col id=\"cmb\">03</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">654</Col><Col id=\"img\">imagerc::grid_img_blue.png</Col><Col id=\"cmb\">04</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">-1658</Col><Col id=\"img\">imagerc::grid_img_red.png</Col><Col id=\"cmb\">05</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","8","8","421","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 기능");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","66","469","41.68%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"체크\"/><Cell col=\"1\" text=\"라디오\"/><Cell col=\"2\" text=\"텍스트\"/><Cell col=\"3\" text=\"마스크\"/><Cell col=\"4\" text=\"숫자형\"/><Cell col=\"5\" text=\"이미지\"/><Cell col=\"6\" text=\"콤보\"/><Cell col=\"7\" text=\"달력\"/><Cell col=\"8\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"chk_grdRadio\" displaytype=\"checkboxcontrol\" text=\"bind:rdo\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:text\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:msk\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@-@@@\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:num\" cssclass=\"expr:num&lt;0?&quot;grd_WF_cellRed&quot;:&quot;grd_WF_cellBlue&quot;\" edittype=\"normal\" maskeditformat=\"###,###,##0\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:img\" displaytype=\"imagecontrol\"/><Cell col=\"6\" text=\"bind:cmb\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_combo\" combocodecol=\"Code\" combodatacol=\"Value\"/><Cell col=\"7\" text=\"bind:cal\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendarpopupsize=\"150 200\"/><Cell col=\"8\" text=\"ok\" edittype=\"button\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMulti","8","grdList:8","469","46.31%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_Multi");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"대분류\"/><Cell col=\"1\" rowspan=\"2\" text=\"중분류\"/><Cell col=\"2\" rowspan=\"2\" text=\"소분류\"/><Cell col=\"3\" colspan=\"3\" text=\"입력 필드\"/><Cell col=\"6\" rowspan=\"2\" text=\"계산값\"/><Cell row=\"1\" col=\"3\" text=\"값1\"/><Cell row=\"1\" col=\"4\" text=\"값2\"/><Cell row=\"1\" col=\"5\" text=\"값3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:dataset.getRowLevel(currow)==2?&quot;중계&quot;:Column1\" suppress=\"2\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==2?&quot;grd_WF_cellC&quot;:&quot;&quot;\"/><Cell col=\"2\" text=\"expr:dataset.getRowLevel(currow)==1?&quot;소계&quot;:Column2\" suppress=\"3\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==0?&quot;&quot;:&quot;grd_WF_cellC&quot;\"/><Cell col=\"3\" text=\"bind:Column3\" edittype=\"text\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==0?&quot;&quot;:&quot;grd_WF_cellC&quot;\"/><Cell col=\"4\" text=\"bind:Column4\" edittype=\"text\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==0?&quot;&quot;:&quot;grd_WF_cellC&quot;\"/><Cell col=\"5\" text=\"bind:Column5\" edittype=\"text\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==0?&quot;&quot;:&quot;grd_WF_cellC&quot;\"/><Cell col=\"6\" text=\"expr:Column3+Column4+Column5\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==0?&quot;&quot;:&quot;grd_WF_cellC&quot;\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;Column3&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;Column4&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;Column5&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;Column3+Column4+Column5&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTree","grdList:8","66",null,null,"0.79%","8",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_Tree");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LVL\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Minus","449","42","28","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("－");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Plus","417","42","28","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("＋");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,691,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsSkinCombo");
        };
        
        // User Script
        this.addIncludeScript("PoC_3_4.xfdl","lib::CommUtil.xjs");
        this.addIncludeScript("PoC_3_4.xfdl","lib::ext_CommEco.xjs");
        this.registerScript("PoC_3_4.xfdl", function() {
        this.executeIncludeScript("lib::CommUtil.xjs"); /*include "lib::CommUtil.xjs"*/;
        this.executeIncludeScript("lib::ext_CommEco.xjs"); /*include "lib::ext_CommEco.xjs"*/;

        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Plus" :
        			this.ds_list.insertRow(this.ds_list.rowposition+1);
        			break;

        		case "btn_Minus" :
        			this.ds_list.deleteRow(this.ds_list.rowposition);
        			break;
        	}
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	if(e.col == 1)
        		this.gfnRadioListClick(obj, this.ds_list, e.col, e.row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.btn_Minus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Plus.addEventHandler("onclick",this.comm_Click,this);
            this.ds_Multi.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };

        this.loadIncludeScript("PoC_3_4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
