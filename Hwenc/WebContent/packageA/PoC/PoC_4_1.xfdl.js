(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_4_1");
            this.set_titletext("일반 컴포넌트 지원여부 확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"rdo\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"msk\" type=\"STRING\" size=\"256\"/><Column id=\"num\" type=\"INT\" size=\"256\"/><Column id=\"img\" type=\"STRING\" size=\"256\"/><Column id=\"cmb\" type=\"STRING\" size=\"256\"/><Column id=\"cal\" type=\"STRING\" size=\"256\"/><Column id=\"btn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">-1323</Col><Col id=\"cmb\">01</Col><Col id=\"cal\">20140813</Col><Col id=\"img\">imagerc::grid_img_red.png</Col><Col id=\"rdo\">1</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">123</Col><Col id=\"img\">imagerc::grid_img_blue.png</Col><Col id=\"cmb\">02</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">8904</Col><Col id=\"img\">imagerc::grid_img_blue.png</Col><Col id=\"cmb\">03</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">-465</Col><Col id=\"img\">imagerc::grid_img_red.png</Col><Col id=\"cmb\">04</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">3218</Col><Col id=\"img\">imagerc::grid_img_blue.png</Col><Col id=\"cmb\">05</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">6548</Col><Col id=\"img\">imagerc::grid_img_blue.png</Col><Col id=\"cmb\">01</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">8723</Col><Col id=\"img\">imagerc::grid_img_blue.png</Col><Col id=\"cmb\">02</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">-2185</Col><Col id=\"img\">imagerc::grid_img_red.png</Col><Col id=\"cmb\">03</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">654</Col><Col id=\"img\">imagerc::grid_img_blue.png</Col><Col id=\"cmb\">04</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row><Row><Col id=\"text\">가나다라</Col><Col id=\"msk\">123456</Col><Col id=\"num\">-1658</Col><Col id=\"img\">imagerc::grid_img_red.png</Col><Col id=\"cmb\">05</Col><Col id=\"cal\">20140813</Col><Col id=\"btn\"/><Col id=\"rdo\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


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


            obj = new Dataset("dsContents", this);
            obj.set_preload("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idx\">1</Col><Col id=\"contents\">&lt;a href='&quot;http://www.miplatform.co.kr'&gt;Hello, this customer support center.&lt;/a&gt;</Col></Row><Row><Col id=\"idx\">2</Col><Col id=\"contents\">Welcome to Nexacro</Col></Row><Row><Col id=\"idx\">3</Col><Col id=\"contents\">Good Morning</Col></Row></Rows>");
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


            obj = new Dataset("Dataset01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">0</Col><Col id=\"Column5\">1</Col><Col id=\"Column4\">Column１</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column2\">0</Col><Col id=\"Column5\">2</Col><Col id=\"Column4\">Column２</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">Column３</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","10","50","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","100","200","172",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","733","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일반 컴포넌트 지원여부 확인");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","70","132","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","70","175","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_hotkey("CTRL+S");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","70","218","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","220","50","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Label");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","220","100","200","172",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cp_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","238","111","163","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static");
            obj.set_background("rgba(136,70,191,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("10pt Malgun gothic,Arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","238","171","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("rgba(101,31,160,1)");
            obj.set_text("Text 변경");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("yellow");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","322","171","79","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("rgba(161,103,209,1)");
            obj.set_text("Text 원복");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("yellow");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","238","209","163","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("<b v=\'true\'>동해물</b>과 <fc v=\'red\'>백두산</fc>이 마르고...");
            obj.set_usedecorate("true");
            obj.set_font("10pt Malgun gothic,Arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","238","240","163","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("<u v=\'true\'>동해물</u>과 <s v=\'true\'>백두산</s>이 마르고...");
            obj.set_usedecorate("true");
            obj.set_font("10pt Malgun gothic,Arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","430","50","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Radio");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","430","100","200","172",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cp_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","481","111","98","150",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">프리세일즈팀</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">영업부</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">컨설팅</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">기술지원팀</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">연구소</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_text("프리세일즈팀");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","640","50","360","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","640","100","360","172",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cp_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","749","132","142","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("CheckBox_Normal");
            obj.set_cssclass("chk_basic01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","749","175","142","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("CheckBox_Select");
            obj.set_cssclass("chk_basic01");
            obj.set_value("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","749","218","142","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("CheckBox_Disable");
            obj.set_cssclass("chk_basic01");
            obj.set_value("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","10","282","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Combo");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","10","332","200","140",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cp_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","45","388","130","29",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_itemheight("30");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">프리세일즈팀</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">영업부</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">컨설팅</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">기술지원팀</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">연구소</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_text("프리세일즈팀");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","220","282","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Edit");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","220","332","200","140",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","430","282","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","430","332","200","140",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","640","282","360","50",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","640","332","360","140",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","10","482","990","50",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","10","532","990","148",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cp_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","250","388","140","29",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_value("Only, English!!");
            obj.set_rtl("true");
            obj.set_text("Only, English!!");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","460","388","140","29",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_value("123456789");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","670","343","300","118",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_displaynulltext("Yeah, TextArea it is!");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","143","596","130","29",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_showmonthspin("false");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","470","596","130","29",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","796","543","169","127",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_type("monthonly");
            obj.set_headheight("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","51","596","92","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Type - Spin");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","370","596","92","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Type - Normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","696","596","92","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Type - Monthly");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","8","0","733","50",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("일반 컴포넌트 지원여부 확인");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","8","0","733","50",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("일반 컴포넌트 지원여부 확인");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","8","0","733","50",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("일반 컴포넌트 지원여부 확인");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","8","76","987","151",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","8","38","108","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","109","85","155","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("stretch : none");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_cp_imageViewer");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","396","85","155","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("stretch : fit");
            obj.set_cssclass("sta_cp_imageViewer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","683","85","155","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("stretch : fixaspectratio");
            obj.set_cssclass("sta_cp_imageViewer");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","664","117","193","101",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_stretch("fixaspectratio");
            obj.set_positionstep("1");
            obj.set_image("url(\'imagerc::nexa_BI.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","378","117","193","100",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_stretch("fit");
            obj.set_positionstep("1");
            obj.set_image("url(\'imagerc::nexa_BI.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","88","117","193","100",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_positionstep("1");
            obj.set_image("url(\'imagerc::nexa_BI.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","8","235","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("ProgressBar");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","8","274","987","180",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_text("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","16","322","970","27",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("prg_basic01");
            obj.set_smooth("false");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar01","16","406","970","27",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("prg_basic01");
            obj.set_smooth("true");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","8","500","987","163",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_text("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","8","462","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Slider");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Progressbar_Type1","16","284","149","29",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Click (Smooth : false)");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_cssclass("btn_WF_basic03");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Progressbar_Type2","16","368","149","29",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("Click (Smooth : true)");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_cssclass("btn_WF_basic03");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Type1_Stop","173","284","85","29",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Stop");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Type2_Stop","173","368","85","29",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("Stop");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Type1_Init","266","284","85","29",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("Init");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_TP_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Type2_Init","266","368","85","29",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("Init");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_TP_menu");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bar00","371","553","239","17",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_background("url(\'imagerc::img_RT_priceBar.png\') no-repeat left center");
            obj.set_text("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bar","379","553","239","17",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_background("url(\'imagerc::img_RT_priceBar.png\') no-repeat left center");
            obj.set_text("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_label","340","579","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_background("url(\'imagerc::img_RT_numTag.png\') no-repeat center center");
            obj.set_text("0");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_padding("8px 0px 0px");
            obj.set_color("#ffffff");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_point","355","544","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_positionstep("1");
            obj.set_background("url(\'imagerc::btn_RT_price.png\') no-repeat center center");
            obj.set_border("0px solid transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","8","384","116","30",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("FileDownload");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","8","48","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("FileUpload");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"44","67","31","164",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("추가");
            obj.set_positionstep("2");
            obj.set_cssclass("btn_TP_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"44","67","31","89",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("삭제");
            obj.set_positionstep("2");
            obj.set_cssclass("btn_TP_menu");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","84",null,"249","12",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_nodatatext("파일을 드래그하여 첨부 할 수 있습니다.");
            obj.set_positionstep("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_URL\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_URL\"/><Cell col=\"3\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"44","67","31","16",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("전송");
            obj.set_positionstep("2");
            obj.set_cssclass("btn_TP_menu");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","8","420",null,null,"12","10",null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_binddataset("dsDownload");
            obj.set_autofittype("col");
            obj.set_positionstep("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_URL\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_URL\"/><Cell col=\"3\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDonwload",null,"382","100","31","13",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("다운로드");
            obj.set_positionstep("2");
            obj.set_cssclass("btn_TP_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"382","108","31","121",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("리스트 불러오기");
            obj.set_positionstep("2");
            obj.set_cssclass("btn_TP_menu");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","12","45",null,null,"8","-2",null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_tabindex("0");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("그리드");
            obj.set_formscrolltype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grdList","4","4","473","47.39%",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"체크\"/><Cell col=\"1\" text=\"라디오\"/><Cell col=\"2\" text=\"텍스트\"/><Cell col=\"3\" text=\"마스크\"/><Cell col=\"4\" text=\"숫자형\"/><Cell col=\"5\" text=\"이미지\"/><Cell col=\"6\" text=\"콤보\"/><Cell col=\"7\" text=\"달력\"/><Cell col=\"8\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"chk_grdRadio\" displaytype=\"checkboxcontrol\" text=\"bind:rdo\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:text\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:msk\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@-@@@\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:num\" cssclass=\"expr:num&lt;0?&quot;grd_WF_cellRed&quot;:&quot;grd_WF_cellBlue&quot;\" edittype=\"normal\" maskeditformat=\"###,###,##0\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:img\" displaytype=\"imagecontrol\"/><Cell col=\"6\" text=\"bind:cmb\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_combo\" combocodecol=\"Code\" combodatacol=\"Value\"/><Cell col=\"7\" text=\"bind:cal\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendarpopupsize=\"150 200\"/><Cell col=\"8\" text=\"ok\" edittype=\"button\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdMulti","4","grdList:8","473","49.24%",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Multi");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"대분류\"/><Cell col=\"1\" rowspan=\"2\" text=\"중분류\"/><Cell col=\"2\" rowspan=\"2\" text=\"소분류\"/><Cell col=\"3\" colspan=\"3\" text=\"입력 필드\"/><Cell col=\"6\" rowspan=\"2\" text=\"계산값\"/><Cell row=\"1\" col=\"3\" text=\"값1\"/><Cell row=\"1\" col=\"4\" text=\"값2\"/><Cell row=\"1\" col=\"5\" text=\"값3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:dataset.getRowLevel(currow)==2?&quot;중계&quot;:Column1\" suppress=\"2\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==2?&quot;grd_WF_cellC&quot;:&quot;&quot;\"/><Cell col=\"2\" text=\"expr:dataset.getRowLevel(currow)==1?&quot;소계&quot;:Column2\" suppress=\"3\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==0?&quot;&quot;:&quot;grd_WF_cellC&quot;\"/><Cell col=\"3\" text=\"bind:Column3\" edittype=\"text\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==0?&quot;&quot;:&quot;grd_WF_cellC&quot;\"/><Cell col=\"4\" text=\"bind:Column4\" edittype=\"text\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==0?&quot;&quot;:&quot;grd_WF_cellC&quot;\"/><Cell col=\"5\" text=\"bind:Column5\" edittype=\"text\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==0?&quot;&quot;:&quot;grd_WF_cellC&quot;\"/><Cell col=\"6\" text=\"expr:Column3+Column4+Column5\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==0?&quot;&quot;:&quot;grd_WF_cellC&quot;\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;Column3&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;Column4&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;Column5&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;Column3+Column4+Column5&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdTree","grdList:6","167",null,null,"6","12",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_Tree");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\"/></Band><Band id=\"body\"><Cell text=\"bind:NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LVL\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid01","grdList:8","4",null,"155","0.4%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset01");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"123\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Title\"/><Cell col=\"2\" text=\"Agree\"/><Cell col=\"3\" text=\"Approve\"/><Cell col=\"4\" text=\"Dismiss\"/><Cell col=\"5\" text=\"Hold\"/></Band><Band id=\"body\"><Cell text=\"bind:Column5\"/><Cell col=\"1\" text=\"bind:Column4\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column0\" cssclass=\"chk_grdRadio\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column1\" cssclass=\"chk_grdRadio\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column2\" cssclass=\"chk_grdRadio\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column3\" cssclass=\"chk_grdRadio\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("웹 에디터");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"174","148","33","10",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Save to Dataset");
            obj.set_edge("url(\"theme://Images\\btn_WF_common_N.png\") 5px 5px");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("Grid00","4","38","600","101",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsContents");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"481\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"idx\" font=\"10pt &quot;Arial&quot;\"/><Cell col=\"1\" text=\"contents\" font=\"10pt &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:idx\"/><Cell col=\"1\" text=\"bind:contents\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new WebBrowser("web","4","215",null,null,"10","8",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit00","153","147","65","26",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_font("bold 9 돋움");
            obj.set_readonly("true");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static02","4","4","421","26",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("Displaying CKEditor in webbrowser");
            obj.set_cssclass("sta_WF_title02");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static03","4","147","141","26",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("Dataset row count");
            obj.set_cssclass("sta_WF_title02");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static04","4","181","525","26",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("when clicking on the rows of the above Grid, these will be displayed here below");
            obj.set_cssclass("sta_WF_title02");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,"174","148","33","166",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("Add to Dataset");
            obj.set_edge("url(\"theme://Images\\btn_WF_common_N.png\") 5px 5px");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,687,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsContents");
            this._addPreloadList("data","","dsSkinCombo");
        };
        
        // User Script
        this.addIncludeScript("PoC_4_1.xfdl","lib::CommUtil.xjs");
        this.addIncludeScript("PoC_4_1.xfdl","lib::ext_CommEco.xjs");
        this.registerScript("PoC_4_1.xfdl", function() {
        this.executeIncludeScript("lib::CommUtil.xjs"); /*include "lib::CommUtil.xjs"*/;
        this.executeIncludeScript("lib::ext_CommEco.xjs"); /*include "lib::ext_CommEco.xjs"*/;

        /*
        	StepIndex : 1
        */
        this.sOrgText01;
        this.sOrgText02;
        this.sMsg = "";

        /*
        	StepIndex : 2
        */
        /* service url : 사용경로 지정 */
        this.saveUrl = "http://14.63.224.112/Hwenc/service/";
        this.folderName = "fileSample";	//file directory

        this.fv_clickPointX; // 포인트 버튼 X 좌표
        this.fv_clickPointY; // 포인트 버튼 Y 좌표
        this.ary_BarInterval = new Array(); //좌표값을 담을 배열.

        this.fv_Progress_Type1_Pos = 1;
        this.fv_Progress_Type2_Pos = 1;
        this.fv_Progress_Type1_KillFlag = 0;
        this.fv_Progress_Type2_KillFlag = 0;

        /*
        	StepIndex : 4
        */
        var docWeb;

        this.PoC_4_onload = function(obj,e)
        {
        	this.fnFormInit();
        };

        this.fnFormInit = function()
        {
        	/*
        		StepIndex : 1
        	*/
        	this.sOrgText01 = this.Static08.text;
        	this.sOrgText02 = this.Static12.text;

        	/*
        		StepIndex : 2
        	*/
        	this.nLastRight = this.stc_bar.getOffsetRight();
        	this.nLastLeft  = this.stc_bar.getOffsetLeft();

        	/*
        		StepIndex : 4
        	*/
        	this.Tab00.Tabpage2.form.web.set_url("http://14.63.224.112/Hwenc/service/cktest.jsp");

        	this.fnSetInterval();
        };

        // Button
        this.fn_comBtnOnClick = function(obj,e)
        {
        	var sBtnTxt = obj.text;

        	switch (obj.name)
        	{
        		case "Button00" :
        		case "Button05" :
        		case "Button08" :
        			this.sMsg = "[[ " + sBtnTxt + " Button Onclic Event 실행" + " ]]" + "\n";
        			this.sMsg += sBtnTxt + "이(가) 실행되었습니다.";
        			break;
        	}

        	alert(this.sMsg);
        };

        // Static
        this.fn_comStcOnClick = function(obj,e)
        {
        	var sChangeText01 = "<b v='true'>최고의</b> <fc v='red'>UI</fc> 플랫폼";
        	var sChangeText02 = "<u v='true'>최고의</u> <s v='true'>파트너</s> 투비소프트";

        	switch (obj.name)
        	{
        		case "Static06" :
        			this.Static08.set_text(sChangeText01);
        			this.Static12.set_text(sChangeText02);
        			break;

        		case "Static07" :
        			this.Static08.set_text(this.sOrgText01);
        			this.Static12.set_text(this.sOrgText02);
        			break;
        	}
        };

        // Radio
        this.fn_comRdoOnItemChange = function(obj,e)
        {
        	var sRdoTxt = e.posttext;

        	switch (obj.name)
        	{
        		case "Radio01" :
        			this.sMsg = "[[ Radio ItemChange Event 실행 ]]" + "\n";
        			this.sMsg += sRdoTxt + "가(이) 선택되었습니다.";
        			break;
        	}

        	alert(this.sMsg);
        };

        // CheckBox
        this.fn_comChkOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "CheckBox01" :
        			var sChkVal = obj.value;
        			this.sMsg = "[[ CheckBox Click Event 실행 ]]" + "\n";

        			if (sChkVal == true) {
        				this.sMsg += "체크 되었습니다.";
        			} else {
        				this.sMsg += "체크해제 되었습니다.";
        			}

        			obj.set_value(sChkVal);
        			break;
        	}

        	alert(this.sMsg);
        };

        // Combo
        this.fn_comCboCanItemChange = function(obj,e)
        {
        	var sCboVal = e.posttext;

        	switch (obj.name)
        	{
        		case "Combo01" :
        			this.sMsg = "[[ Combo ItemChange Event 실행 ]]" + "\n";
        			this.sMsg += sCboVal + "이(가) 선택되었습니다.";
        			break;
        	}

        	alert(this.sMsg);
        };

        // Edit
        this.fn_comEditOnInput = function(obj,e)
        {
        	var sFlag = obj.inputtype;

        	switch (obj.name)
        	{
        		case "Edit00" :
        // 			if (sFlag != "english") {
        // 				alert("영문만 입력할 수 있습니다.");
        // 				return;
        // 			}
        			break;
        	}
        };

        this.PoC_4_onkeydown = function(obj,e)
        {
        	var nStepIdx = this.getStepIndex();

        	if (nStepIdx == 0)
        	{
        		if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(1);
        		}
        	}
        	else if (nStepIdx == 1)
        	{
        		if (e.keycode == 37) { // KeyBoard 중간 <-
        			this.setStepIndex(0);
        		} else if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(2);
        		}
        	}
        	else if (nStepIdx == 2)
        	{
        		if (e.keycode == 37) { // KeyBoard 중간 <-
        			this.setStepIndex(1);
        		}
        		 else if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(3);
        		}
        	}
        };

        this.btn_point_ondrag = function(obj,e)
        {
        	this.fv_clickPointX = e.canvasx;
        	this.fv_clickPointY = e.canvasy;
        	return true;
        };

        this.fnSetInterval = function()
        {
        	var nBarWidth = this.stc_bar00.width;

        	var nInterval = nBarWidth / 10;

        	//좌표값을 10영역으로 분할.
        	for(var i=1; i<=10; i++)
        	{
        		this.ary_BarInterval.push(nInterval * i);
        	}
        };

        this.PoC_4_ondragmove = function(obj,e)
        {
        	var nX = e.clientx - this.fv_clickPointX;
        	var nY = this.btn_point.getOffsetTop();
        	var c_nX = nX - this.stc_bar00.getOffsetLeft();

        	//trace("nX = " + nX + " >>> " + "nY = " + nY);
        	//trace("this.nLastRight = " + this.nLastRight + " >>> " + "this.nLastLeft = " + this.nLastLeft);

        	if (this.nLastRight < nX) {
        		this.stc_label.set_text("10,000");
        		return;
        	} else if (this.nLastLeft > nX) {
        		this.stc_label.set_text("0");
        			return;
        	}

        	if (c_nX >= this.ary_BarInterval[0] && c_nX <= this.ary_BarInterval[1]) {
        		this.stc_label.set_text("1,000");
        	} else if(c_nX >= this.ary_BarInterval[1] && c_nX <= this.ary_BarInterval[2]) {
        		this.stc_label.set_text("2,000");
        	} else if(c_nX >= this.ary_BarInterval[2] && c_nX <= this.ary_BarInterval[3]) {
        		this.stc_label.set_text("3,000");
        	} else if(c_nX >= this.ary_BarInterval[3] && c_nX <= this.ary_BarInterval[4]) {
        		this.stc_label.set_text("4,000");
        	} else if(c_nX >= this.ary_BarInterval[4] && c_nX <= this.ary_BarInterval[5]) {
        		this.stc_label.set_text("5,000");
        	} else if(c_nX >= this.ary_BarInterval[5] && c_nX <= this.ary_BarInterval[6]) {
        		this.stc_label.set_text("6,000");
        	} else if(c_nX >= this.ary_BarInterval[6] && c_nX <= this.ary_BarInterval[7]) {
        		this.stc_label.set_text("7,000");
        	} else if(c_nX >= this.ary_BarInterval[7] && c_nX <= this.ary_BarInterval[8]) {
        		this.stc_label.set_text("8,000");
        	} else if(c_nX >= this.ary_BarInterval[8] && c_nX <= this.ary_BarInterval[9]) {
        		this.stc_label.set_text("9,000");
        	}

        	//버튼 위치값 조절
        	this.btn_point.move(nX - 18, nY);

        	//상태값 조절
        	nY = this.stc_label.getOffsetTop();
        	this.stc_label.move(nX - 33, nY);

        	//stc_bar의 width 사이즈 조절
        	this.stc_bar.setOffsetWidth(c_nX);
        	this.stc_bar.set_background('url("imagerc::img_RT_priceBar_O.png") no-repeat left center');
        };

        this.F03_onkeydown = function(obj,e)
        {
        	var nStepIdx = this.getStepIndex();

        	if (nStepIdx == 0)
        	{
        		if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(1);
        		}
        	}
        	else if (nStepIdx == 1)
        	{
        		if (e.keycode == 37) { // KeyBoard 중간 <-
        			this.setStepIndex(0);
        		} else if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(2);
        		}
        	}
        	else if (nStepIdx == 2)
        	{
        		if (e.keycode == 37) { // KeyBoard 중간 <-
        			this.setStepIndex(1);
        		}
        		 else if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(3);
        		}
        	}
        };

        //추가
        this.btnAdd_onclick = function(obj,e)
        {
        	//file dialog open
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        //삭제
        this.btnDel_onclick = function(obj,e)
        {
        	//selected file delete
        	var chk = this.Grid00.getCellPropertyValue(0, 0, "text");
        	var length = this.dsUpload.rowcount;

        	if(chk == 1)
        	{
        		//전체삭제
        		for(var i=0; i<length; i++)
        		{
        			this.dsUpload.deleteRow((this.dsUpload.rowcount-1));

        			var objFileList = this.fileUpTrans.filelist[(this.dsUpload.rowcount-1)];		//selected file search
        			this.fileUpTrans.removeFile(objFileList);			//filelist remove
        		}
        	}
        	else
        	{
        		//단건삭제
        		var nRow = this.dsUpload.rowposition;
        		this.dsUpload.deleteRow(nRow);

        		var objFileList = this.fileUpTrans.filelist[nRow];	//selected file search
        		this.fileUpTrans.removeFile(objFileList);			//filelist remove
        	}
        };

        //저장
        this.btnSave_onclick = function(obj,e)
        {
        	//file upload 실행
        	this.uploadfile();
        };

        //리스트 불러오기
        this.btnSearch_onclick = function(obj,e)
        {
        	//search attach file list
        	this.transaction("list", this.saveUrl + "fileDownload_servlet_list_XML.jsp", "", "dsDownload=dsList", "filefolder="+this.folderName, "callback_transaction", "false", "0")
        };

        //전체 다운로드
        this.btnDonwload_onclick = function(obj,e)
        {
        	if(this.dsDownload.getCaseCount("CHK == '1'") < 1)
        	{
        		alert("반드시 항목 1개를 선택해야 합니다.");
        	}
        	else
        	{
        		if(this.dsDownload.getCaseCount("CHK == '1'") > 1)
        		{
        			this.downloadfileAll();
        		}
        		else
        		{
        			var nRow = this.dsDownload.findRow("CHK", 1);
        			this.downloadfile(nRow);
        		}
        	}
        };

        //upload Grid oncelldbclick
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	//단건 처리 필요 시 추가구현 : playnexacro 참조
        };

        //upload Grid ondrop
        this.Grid00_ondrop = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		this.addFileList(e.filelist);
        	}
        };

        this.callback_transaction = function(svcId, errCode, errMsg)
        {
        	if(svcId == "list")
        	{
        		this.dsDownload.set_enableevent(false);

        		this.dsDownload.addColumn("CHK", "STRING", 255);

        		for(var i=0; i<this.dsDownload.getRowCount(); i++)
        		{
        			this.dsDownload.setColumn(i, "CHK", 0);
        			this.dsDownload.setColumn(i,"FiLE_SIZE",this.cutFileSize(this.dsDownload.getColumn(i,"FiLE_SIZE")));
        		}

        		this.dsDownload.set_enableevent(true);
        	}
        };

        this.fileDialog_onclose = function(obj, e)
        {
        	this.addFileList(e.virtualfiles);
        };

        this.fileList_onsuccess = function(obj, e)
        {
        	//getFileSize() call --> reason : 9
        	if (e.reason == 9)
        	{
        		var nRowIdx = this.dsUpload.addRow();
        		this.dsUpload.setColumn(nRowIdx, "FILE_NAME", obj.filename);
        		this.dsUpload.setColumn(nRowIdx, "FiLE_SIZE", this.cutFileSize(e.filesize));
        		this.dsUpload.setColumn(nRowIdx, "FILE_URL", obj.fullpath);
        	}
        }

        this.fileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.fileUpTrans_onerror = function(obj,e)
        {
        	trace(e.errormsg);
        };

        this.fileUpTrans_onprogress = function(obj,e)
        {
        	//progress 처리 미구현	 : playnexacro 참조
        	//trace(e.loaded);
        };

        this.fileUpTrans_onsuccess = function(obj, e)
        {
        	var objCallDs = e.datasets[0];

        	for(var i=0; i<objCallDs.getRowCount(); i++)
        	{
        		this.dsUpload.setColumn(i, "FILE_URL", objCallDs.getColumn(i,"savePath"));
        	}

        	alert("전송완료");
        };

        this.fileDownTrans_onerror = function(obj,e)
        {
        	trace("error : " + e.errormsg);
        };

        this.fileDownTrans_onsuccess = function(obj,e)
        {
        	trace(e.targetfullpath);
        };

        // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_file(s)_size
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };

        /*
        //별첨
        2019년 06월 정기배포 변경 사항

        기존에는 Content-Disposition 헤더의 name 필드 값에 Virtual의 id값이 설정되어, 멀티파일 업로드의 제한이 있었음.
        따라서 06월 정기배포에서는 FileUpTransfer를 통한 멀티파트 파일 전송 요청 시 Content-Disposition 헤더의 name 필드 값을 설정할 수 있는 기능이 추가됨.

        * addFile(strId, objVFile) 메소드 첫번째 파라메터가 "strID"로 변경되고, 기존 파라메터가 두번째 파라메타로 동작합니다.
        -> 기존에는 Virtual 오브젝트만 설정할 수 있었습니다. (addFile(objVFile))
        -> strID에 설정한 값이 파일 업로드 시 Content-Disposition 헤더의 name으로 사용됩니다.

        * removeFile(strID) 메소드의 파라미터가 "strID"로 변경되었습니다.
        -> 기존에는 Virtual 오브젝트를 설정할 수 있었습니다.
        -> 파일 추가 시 설정했던 strID 값을 설정해야 합니다.

        * filelist 속성이 "{ ID : VirtualFile }" 형태의 Collection으로 변경되었습니다.
        -> 기존에는 VirtualFile 오브젝트 배열이었습니다.
        */

        this.fns4 = function()
        {
        	return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
        };

        this.fnGetUUID = function ()
        {
        	return this.fns4() + this.fns4() + '-' + this.fns4() + '-' + this.fns4() + '-' + this.fns4() + '-' + this.fns4() + this.fns4() + this.fns4();
        };

        this.addFileList = function(filelists)
        {
        	//array type virtualfile List
        	var vFile, strId;
        	var len = filelists.length;
        	for (var i = 0; i < len; i++)
        	{
        		strId = this.fnGetUUID();
        		vFile = filelists[i];
        		this.fileUpTrans.addFile(strId, vFile);

        		vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.fileList_onerror, this);

        		vFile.open(null, VirtualFile.openRead);
        		vFile.getFileSize();	//return file size
        		vFile.close();
        	}
        }

        this.uploadfile = function()
        {
        	//file upload
        	this.fileUpTrans.upload(this.saveUrl +"fileUpload_postdatatest.jsp?filefolder=" + this.folderName);
        }

        this.downloadfile = function(nRow)
        {
        	this.fileDownTrans.clearPostDataList();

        	this.fileDownTrans.set_downloadfilename(this.dsDownload.getColumn(nRow, "FILE_NAME"));	//runtime 전용 프로퍼티

        	this.fileDownTrans.setPostData(
        		"filepath",
        		this.dsDownload.getColumn(nRow, "FILE_URL")
        	);
        	this.fileDownTrans.setPostData(
        		"filename",
        		this.dsDownload.getColumn(nRow, "FILE_NAME")
        	);
        	this.fileDownTrans.setPostData(
        		"filefolder",
        		"fileSample"
        	);

        	this.fileDownTrans.download(this.saveUrl + "fileDownload_postdatatest.jsp");
        }

        this.downloadfileAll = function()
        {
        	this.fileDownTrans.clearPostDataList();

        	var arrNameList = new Array();

        	for(var i=0; i<this.dsDownload.getRowCount(); i++)
        	{
        		//fileDownload_postdatatestAll.jsp -> request.getParameter("filenamelist");
        		if(this.dsDownload.getColumn(i, "CHK") == 1)
        			arrNameList.push(this.dsDownload.getColumn(i, "FILE_NAME"));
        	}

        	this.fileDownTrans.set_downloadfilename("fileSample.zip");	//runtime 전용 프로퍼티

        // 	this.fileDownTrans.setPostData(
        // 		"filefolder",
        // 		"fileSample"
        // 	);

        	this.fileDownTrans.setPostData(
        		"filenamelist",
        		arrNameList
        	);

        	this.fileDownTrans.download(this.saveUrl + "fileDownload_postdatatestAll.jsp?filefolder=" + "fileSample");
        }

        this.Grid00_onheadclick = function(obj,e)
        {
        	if(e.col == 0)
        	{
        		var chk = obj.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 0)
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);

        			for(var i=0; i<this.dsUpload.rowcount; i++)
        			{
        				this.dsUpload.setColumn(i, "CHK", 1);
        			}
        		}
        		else
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);

        			for(var i=0; i<this.dsUpload.rowcount; i++)
        			{
        				this.dsUpload.setColumn(i, "CHK", 0);
        			}
        		}
        	}
        };

        this.Grid01_onheadclick = function(obj,e)
        {
        	if(e.col == 0)
        	{
        		var chk = obj.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 0)
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);

        			for(var i=0; i<this.dsDownload.rowcount; i++)
        			{
        				this.dsDownload.setColumn(i, "CHK", 1);
        			}
        		}
        		else
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);

        			for(var i=0; i<this.dsDownload.rowcount; i++)
        			{
        				this.dsDownload.setColumn(i, "CHK", 0);
        			}
        		}
        	}
        };

        //progressbar 구현
        this.PoC_4_ontimer = function(obj,e)
        {
        	trace("this.ProgressBar00.pos : " + this.ProgressBar00.pos);
        	trace("this.ProgressBar01.pos : " + this.ProgressBar01.pos);

        	if(this.ProgressBar00.pos == 100)
        	{
        		this.killTimer(1);
        		this.fv_Progress_Type1_Pos = 1;

        		if(this.fv_Progress_Type1_KillFlag != 1)
        			this.alert("Upload Success!!!");

        		this.fv_Progress_Type1_KillFlag = 1;
        	}

        	if(this.ProgressBar01.pos == 100)
        	{
        		this.killTimer(2);
        		this.fv_Progress_Type2_Pos = 1;

        		if(this.fv_Progress_Type2_KillFlag != 1)
        			this.alert("Upload Success!!!");

        		this.fv_Progress_Type2_KillFlag = 1;
        	}

        	if(this.fv_Progress_Type1_KillFlag != 1)
        		if(e.timerid == 1) {
        			var nPos = this.fv_Progress_Type1_Pos++ * 10;
        			this.ProgressBar00.set_text(nPos + "%")
        			this.ProgressBar00.set_pos(nPos);
        		}

        	if(this.fv_Progress_Type2_KillFlag != 1)
        		if(e.timerid == 2) {
        			var nPos = this.fv_Progress_Type2_Pos++ * 10;
        			this.ProgressBar01.set_text(nPos + "/100")
        			this.ProgressBar01.set_pos(nPos);
        		}
        };

        this.web_onloadcompleted = function(obj, e)
        {
        	docWeb = this.Tab00.Tabpage2.form.web.getProperty("document");

        	this.Tab00.Tabpage2.form.Edit00.set_value(this.dsContents.rowcount);
        };

        this.fnSave = function()
        {
        	docWeb.getProperty("editorGetBtn").callMethod("click");

        	var editorData = docWeb.getProperty("editorData").getProperty("value");

        	this.dsContents.set_enableevent(false);

        	this.dsContents.setColumn(this.dsContents.rowposition, "contents", editorData);

        	this.dsContents.set_enableevent(true);

        	this.Tab00.Tabpage2.form.Edit00.set_value(this.dsContents.rowcount);
        };

        this.fnAdd = function()
        {
        	var nRow = this.dsContents.addRow();

        	this.dsContents.setColumn(nRow, "idx", this.dsContents.rowcount);

        };

        this.Grid00_oncellclick = function(obj, e)
        {
        	if(docWeb.getProperty("frmCkEditor") == undefined)
        	{
        		docWeb = this.Tab00.Tabpage2.form.web.getProperty("document").getProperty("all");
        	}
        	if(this.dsContents.getColumn(this.dsContents.rowposition,"contents") != null)
        	{
        		docWeb.getProperty("editorData").setProperty("value", this.dsContents.getColumn(this.dsContents.rowposition,"contents"));
        	}
        	else
        	{
        		docWeb.getProperty("editorData").setProperty("value","");
        	}

        	docWeb.getProperty("editorSetBtn").callMethod("click");
        };

        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Progressbar_Type1" :
        			this.setTimer(1, 200);
        			this.fv_Progress_Type1_KillFlag = 0;
        			break;
        		case "btn_Progressbar_Type2" :
        			this.setTimer(2, 500);
        			this.fv_Progress_Type2_KillFlag = 0;
        			break;
        		case "btn_Type1_Stop" :
        			this.killTimer(1);
        			break;
        		case "btn_Type2_Stop" :
        			this.killTimer(2);
        			break;
        		case "btn_Type1_Init" :
        			this.killTimer(1);
        			this.ProgressBar00.set_text("");
        			this.ProgressBar00.set_pos(0);
        			this.fv_Progress_Type1_Pos=1;
        			this.fv_Progress_Type1_KillFlag = 0;
        			break;
        		case "btn_Type2_Init" :
        			this.killTimer(2);
        			this.ProgressBar01.set_text("");
        			this.ProgressBar01.set_pos(0);
        			this.fv_Progress_Type2_Pos=1;
        			this.fv_Progress_Type2_KillFlag = 0;
        			break;
        		case "btn_Add" :
        			this.fnAdd();
        			break;
        		case "btn_Save" :
        			this.fnSave();
        			break;
        	}
        };

        this.grdList_oncellclick = function(obj, e)
        {
        	if(e.col == 1)
        		this.gfnRadioListClick(obj, this.ds_list, e.col, e.row);
        };

        this.Tab00_Tabpage1_Grid01_oncellclick = function(obj,e)
        {
        	if(e.col == 2 || e.col == 3 || e.col == 4 || e.col == 5)
        		this.gfnRadioListClick(obj, this.Dataset01, e.col, e.row);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PoC_4_onload,this);
            this.addEventHandler("onkeydown",this.PoC_4_onkeydown,this);
            this.addEventHandler("ontimer",this.PoC_4_ontimer,this);
            this.addEventHandler("ondragmove",this.PoC_4_ondragmove,this);
            this.Button00.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Button05.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Button08.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Static06.addEventHandler("onclick",this.fn_comStcOnClick,this);
            this.Static07.addEventHandler("onclick",this.fn_comStcOnClick,this);
            this.Radio01.addEventHandler("canitemchange",this.fn_comRdoOnItemChange,this);
            this.CheckBox01.addEventHandler("onclick",this.fn_comChkOnClick,this);
            this.CheckBox02.addEventHandler("onclick",this.fn_comChkOnClick,this);
            this.CheckBox03.addEventHandler("onclick",this.fn_comChkOnClick,this);
            this.Combo01.addEventHandler("canitemchange",this.fn_comCboCanItemChange,this);
            this.Edit00.addEventHandler("oninput",this.fn_comEditOnInput,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.btn_Progressbar_Type1.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Progressbar_Type2.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Type1_Stop.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Type2_Stop.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Type1_Init.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Type2_Init.addEventHandler("onclick",this.comm_Click,this);
            this.btn_point.addEventHandler("ondrag",this.btn_point_ondrag,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.Grid00.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.Grid01.addEventHandler("onheadclick",this.Grid01_onheadclick,this);
            this.btnDonwload.addEventHandler("onclick",this.btnDonwload_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.Tab00.Tabpage1.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.Tab00.Tabpage1.form.Grid01.addEventHandler("onlbuttonup",this.Grid01_onlbuttonup,this);
            this.Tab00.Tabpage1.form.Grid01.addEventHandler("oncellclick",this.Tab00_Tabpage1_Grid01_oncellclick,this);
            this.Tab00.Tabpage2.form.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.Tab00.Tabpage2.form.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Tab00.Tabpage2.form.web.addEventHandler("onloadcompleted",this.web_onloadcompleted,this);
            this.Tab00.Tabpage2.form.btn_Add.addEventHandler("onclick",this.comm_Click,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileDownTrans.addEventHandler("onerror",this.fileDownTrans_onerror,this);
            this.fileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_Multi.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };

        this.loadIncludeScript("PoC_4_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
