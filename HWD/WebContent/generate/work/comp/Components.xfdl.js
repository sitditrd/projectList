(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("component");
            this.set_titletext("다양한 컴포넌트");
            this.set_visible("true");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,2805);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"label\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"label\">영업부</Col><Col id=\"value\">1</Col></Row><Row><Col id=\"label\">연구소</Col><Col id=\"value\">2</Col></Row><Row><Col id=\"label\">기술지원팀</Col><Col id=\"value\">3</Col></Row><Row><Col id=\"label\">개발팀</Col><Col id=\"value\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170101</Col><Col id=\"Column3\"/></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170202</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170303</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170404</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170505</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170606</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170707</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170808</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170909</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20171010</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"id\">1000</Col><Col id=\"caption\">대메뉴1</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"id\">1100</Col><Col id=\"caption\">중메뉴1</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"id\">1200</Col><Col id=\"caption\">중메뉴2</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"id\">2000</Col><Col id=\"caption\">대메뉴2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu01", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1000</Col><Col id=\"caption\">nexacro Menu01</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">1100</Col><Col id=\"caption\">중메뉴01</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">1110</Col><Col id=\"caption\">소메뉴01</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">1120</Col><Col id=\"caption\">소메뉴02</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">1130</Col><Col id=\"caption\">소메뉴03</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">1140</Col><Col id=\"caption\">소메뉴04</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">1150</Col><Col id=\"caption\">소메뉴05</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">1200</Col><Col id=\"caption\">중메뉴02</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">1300</Col><Col id=\"caption\">중메뉴03</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">2000</Col><Col id=\"caption\">nexacro Menu02</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"id\">1210</Col><Col id=\"caption\">중메뉴04</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"id\">1220</Col><Col id=\"caption\">중메뉴05</Col></Row><Row><Col id=\"id\">3000</Col><Col id=\"caption\">nexacro Menu03</Col><Col id=\"level\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">A1</Col><Col id=\"Column1\">A1</Col></Row><Row><Col id=\"Column0\">B2</Col><Col id=\"Column1\">B2</Col></Row><Row><Col id=\"Column1\">C3</Col><Col id=\"Column0\">C3</Col></Row><Row><Col id=\"Column1\">D4</Col><Col id=\"Column0\">D4</Col></Row><Row><Col id=\"Column1\">E5</Col><Col id=\"Column0\">E5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static12","0","1670",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_menu_bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","71","47.96%","202",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","71","47.96%","51",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","Static02:-80.00%","142","8.16%","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Search");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdObj","0","819",null,"259","20",null,null,null,null,null,this);
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_taborder("4");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"Edit\"/><Cell col=\"1\" text=\"Calendar\"/><Cell col=\"2\" text=\"Combo\"/><Cell col=\"3\" text=\"CheckBox\"/><Cell col=\"4\" text=\"TextArea\"/><Cell col=\"5\" text=\"Button\"/></Band><Band id=\"body\"><Cell displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:Column0\" editdisplay=\"display\"/><Cell col=\"1\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Column1\" calendardisplay=\"display\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column2\" combodataset=\"dsCombo\" combocodecol=\"Column0\" combodatacol=\"Column1\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\" displaytype=\"textareacontrol\" edittype=\"textarea\" textareaautoselect=\"true\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"bind:Column5\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"100\"/><Column size=\"160\"/><Column size=\"134\"/><Column size=\"100\"/><Column size=\"191\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"Edit\"/><Cell col=\"1\" text=\"Calendar\"/><Cell col=\"2\" text=\"Combo\"/><Cell col=\"3\" text=\"CheckBox\"/><Cell col=\"4\" text=\"TextArea\"/><Cell col=\"5\" text=\"Button\"/></Band><Band id=\"body\"><Cell displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:Column0\" editdisplay=\"display\"/><Cell col=\"1\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Column1\" calendardisplay=\"display\" calendarpopuptype=\"system\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column2\" combodataset=\"dsCombo\" combocodecol=\"Column0\" combodatacol=\"Column1\" combodisplay=\"display\" combopopuptype=\"center\" comboitemheight=\"100\" combopopupsize=\"350\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\" displaytype=\"textareacontrol\" edittype=\"textarea\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","1024","100","185","100",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","1248","100","185","100",null,null,null,null,null,null,this);
            obj.set_innerdataset("dsMenu");
            obj.set_captioncolumn("caption");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            obj.set_cssclass("pm_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","Button00:21","142","8.16%","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Push");
            obj.set_cssclass("btn_cp_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","Button03:19","142","8.16%","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Disabled");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","Static02:-80.00%","182","8.16%","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","Button05:20","182","8.16%","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Push");
            obj.set_cssclass("btn_cp_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","Button06:20","182","8.16%","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Disabled");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","Static02:-80.00%","222","8.16%","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_basic05");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","Button08:20","222","8.16%","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Push");
            obj.set_cssclass("btn_cp_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","Button09:20","222","8.16%","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Disabled");
            obj.set_cssclass("btn_WF_basic03");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","Static02:20","71",null,"202","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","Static01:20","71",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("CheckBox & Radio");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","Static02:85","142","142","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("CheckBox_Normal");
            obj.set_cssclass("chk_basic01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","Static02:85","222","142","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("CheckBox_Disable");
            obj.set_cssclass("chk_basic01");
            obj.set_enableevent("false");
            obj.set_enable("false");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01",null,"138","14.08%","121","7.45%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("rdo_basic01");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("value");
            obj.set_datacolumn("label");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","0","293","47.96%","214",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","0","293","47.96%","51",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Combo");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","Static56:20","293",null,"214","20",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","Static57:20","293",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","Static56:-95.96%","364","13.27%","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("cmb_basic01");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("value");
            obj.set_datacolumn("label");
            obj.set_itemheight("30");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","Combo01:20","364","130","125",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_cp_Combo");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","Static21:20","364","13.27%","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("value");
            obj.set_datacolumn("label");
            obj.set_cssclass("cmb_basic01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","Static56:25.11%","364","Static62:58.51%","122",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("value");
            obj.set_datacolumn("label");
            obj.set_cssclass("lst_basic01");
            obj.set_multiselect("true");
            obj.set_itemheight("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","0","527","31.33%","221",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","0","527","31.33%","51",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Edit");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","Static64:20","527","31.33%","221",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","Static66:20","527",null,"221","20",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","Static63:20","527","31.33%","51",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","Static65:20","527",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Spin");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static64:-80.46%","598","18.98%","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_displaynulltext("넥사크로");
            obj.set_value("넥사크로");
            obj.set_cssclass("ed_basic01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static64:-80.13%","647","18.98%","32",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_displaynulltext("넥사크로");
            obj.set_value("넥사크로");
            obj.set_cssclass("ed_basic02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","Static64:-80.46%","696","18.98%","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_displaynulltext("넥사크로");
            obj.set_value("넥사크로");
            obj.set_cssclass("ed_basic01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","Static64:26.06%","598","18.98%","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("msk_basic01");
            obj.set_value("123456789");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","Static64:26.06%","647","18.98%","32",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_value("123456789");
            obj.set_cssclass("msk_basic02");
            obj.set_maskchar("_");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","Static64:26.06%","696","18.98%","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("false");
            obj.set_value("123,456,789");
            obj.set_displaynulltext("123,456,789");
            obj.set_cssclass("msk_basic01");
            obj.set_type("number");
            obj.set_maskchar("_");
            obj.getSetter("mask").set("#,##0.00");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01","Static66:26.06%","598","18.98%","32",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sp_basic01");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02","Static66:26.06%","647","18.98%","32",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sp_basic02");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin03","Static66:26.06%","696","18.98%","32",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("false");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","0","1098","47.96%","285",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cp_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","0","1098","47.96%","51",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","Static69:20","1098",null,"285","20",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","Static70:20","1098",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","Static69:25.53%","1169","27.55%","194",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("txa_basic01");
            obj.set_displaynulltext("Yeah, TextArea it is!");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Calendar("calToday","Static69:-88.3%","1169","13.27%","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("cal_basic01");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("calToday01","Static69:-88.3%","1259","13.27%","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_type("spin");
            obj.set_cssclass("cal_basic01");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","1403","31.33%","247",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","Static03:20","1403","31.33%","247",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","Static06:20","1403",null,"247","20",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","1403","31.33%","51",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("Static");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","Static04:20","1403","31.33%","51",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Div");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","Static05:20","1403",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("GroupBox");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","Static03:-77.20%","1474","16.94%","60",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Static09");
            obj.set_background("#7b69d6");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("10pt Malgun gothic,Arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","Static03:-77.2%","1534","8.47%","30",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_background("#a17fe7");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","Static10:0","1534","8.47%","30",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_background("rgba(161,103,209,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","Static03:-76.55%","1572","163","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("<b v=\'true\'>동해물</b>과 <fc v=\'red\'>백두산</fc>이 마르고...");
            obj.set_usedecorate("true");
            obj.set_font("normal 10pt/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","Static03:-76.55%","1603","163","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("<u v=\'true\'>동해물</u>과 <s v=\'true\'>백두산</s>이 마르고...");
            obj.set_usedecorate("true");
            obj.set_font("normal 10pt/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","Static03:30.94%","1474","16.94%","156",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("DIV");
            obj.set_cssclass("div_basic01");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","Static06:31.92%","1473","16.94%","156",null,null,null,null,null,null,this);
            obj.set_text("Group");
            obj.set_taborder("62");
            obj.set_cssclass("grb_basic01");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu01","130","1671",null,"49","22",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_levelcolumn("level");
            obj.set_innerdataset("dsMenu01");
            obj.set_idcolumn("id");
            obj.set_captioncolumn("caption");
            obj.set_cssclass("menu_basic01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","20","1670","110","51",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("Menu");
            obj.set_cssclass("sta_menu_icon");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","0","768",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("Grid");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","Static02:85","182","142","32",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("CheckBox_Select");
            obj.set_cssclass("chk_basic01");
            obj.set_enable("true");
            obj.set_enableevent("false");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calToday03","calToday:79","1169","169","189",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Calendar("calToday02","Static69:-88.3%","1209","13.27%","30",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("cal_basic01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","Static69:-88.3%","1299","13.27%","30",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_type("spin");
            obj.set_cssclass("cal_basic01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"19","20","153","0",null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("Static00");
            obj.set_background("aqua");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","0","0",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("넥사크로 플랫폼은 약 40여가지의 컴포넌트를 제공함으로써 사용자에게 편리한 툴 환경을 제공합니다.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0","1752",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_menu_bg");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","1751",null,"175","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_cssclass("tab_basic01");
            obj.set_showextrabutton("true");
            obj.set_tabbuttonheight("32");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Tab00);
            obj.set_text("tabpage3");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage4",this.Tab00);
            obj.set_text("tabpage4");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static29","0","1946","31.33%","247",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","Static29:20","1946","31.33%","247",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","Static22:20","1946",null,"247","20",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","0","1946","31.33%","51",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("PopupDiv");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","Static23:20","1946","31.33%","51",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("PopupMenu");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","Static15:20","1946",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("Step");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","Static22:26.06%","2017","18.78%","155",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_url("comp::Components_step.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","Static29:-66.45%","2053","10.2%","60",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("click me");
            obj.set_cssclass("btn_cp_popDiv");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","Static29:40.07%","2054","10.2%","60",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("click me");
            obj.set_cssclass("btn_cp_popMenu");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","0","2213","31.33%","132",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","0","2213","31.33%","51",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("FileDownload");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","Static33:20","2213",null,"132","20",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","Static32:20","2213",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("FileUpload");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","Static33:-75.57%","2284","16.33%","40",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("FileDownload");
            obj.set_cssclass("filedown_basic01");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","Static33:36.16%","2284","45.92%","40",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("fileup_basic01");
            obj.set_itemheight("40");
            obj.set_buttonsize("160");
            obj.set_buttontext("FileUpload");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","2365",null,"190","20",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","0","2365",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","333","2470","177","65",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_image("URL(\'imagerc::nexa_BI.png\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","333","2436","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("stretch : fit");
            obj.set_cssclass("sta_cp_imageViewer");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","638","2470","177","65",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_image("URL(\'imagerc::nexa_BI.png\')");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","638","2436","155","24",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("stretch : fixaspectratio");
            obj.set_cssclass("sta_cp_imageViewer");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","28","2436","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("stretch : none");
            obj.set_cssclass("sta_cp_imageViewer");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","28","2470","177","65",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_image("URL(\'imagerc::nexa_BI.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","2575","31.33%","210",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","0","2575","31.33%","51",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("ProgressBar");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","Static18:-82.74%","2662","20.41%","35",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("56%");
            obj.set_cssclass("prg_basic01");
            obj.set_smooth("true");
            obj.set_pos("56");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar01","Static18:-82.74%","2708","20.41%","35",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("15/100");
            obj.set_cssclass("prg_basic01");
            obj.set_smooth("true");
            obj.set_pos("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","Static18:20","2575",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","Static19:20","2575",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("WebBrowser");
            obj.set_cssclass("sta_cp_box01");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webNotify","Static18:39.09%","2636","44.08%","138",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_border("1px solid rgba(203,203,203,1)");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktop",0,0,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("다양한 컴포넌트");
                p.set_visible("true");
                p.set_scrollbartype("autoindicator autoindicator");

                p.Static12.set_taborder("0");
                p.Static12.set_cssclass("sta_menu_bg");
                p.Static12.move("0","1670",null,"51","20",null);

                p.Static02.set_taborder("1");
                p.Static02.set_cssclass("sta_cp_box01");
                p.Static02.move("0","71","47.96%","202",null,null);

                p.Static01.set_taborder("2");
                p.Static01.set_text("Button");
                p.Static01.set_cssclass("sta_cp_box01");
                p.Static01.move("0","71","47.96%","51",null,null);

                p.Button00.set_taborder("3");
                p.Button00.set_text("Search");
                p.Button00.set_cssclass("btn_WF_basic01");
                p.Button00.move("Static02:-80.00%","142","8.16%","32",null,null);

                p.grdObj.set_binddataset("dsList");
                p.grdObj.set_autoenter("select");
                p.grdObj.set_autofittype("col");
                p.grdObj.set_taborder("4");
                p.grdObj.set_formatid("default");
                p.grdObj.move("0","819",null,"259","20",null);

                p.PopupDiv00.set_text("PopupDiv");
                p.PopupDiv00.set_background("rgba(255,255,255,1)");
                p.PopupDiv00.set_border("1px solid rgba(128,128,128,1)");
                p.PopupDiv00.move("1024","100","185","100",null,null);

                p.PopupMenu00.set_innerdataset("dsMenu");
                p.PopupMenu00.set_captioncolumn("caption");
                p.PopupMenu00.set_idcolumn("id");
                p.PopupMenu00.set_levelcolumn("level");
                p.PopupMenu00.set_cssclass("pm_basic01");
                p.PopupMenu00.move("1248","100","185","100",null,null);

                p.Button03.set_taborder("8");
                p.Button03.set_text("Push");
                p.Button03.set_cssclass("btn_cp_basic01");
                p.Button03.move("Button00:21","142","8.16%","32",null,null);

                p.Button04.set_taborder("9");
                p.Button04.set_text("Disabled");
                p.Button04.set_cssclass("btn_WF_basic01");
                p.Button04.set_enable("false");
                p.Button04.move("Button03:19","142","8.16%","32",null,null);

                p.Button05.set_taborder("10");
                p.Button05.set_text("Save");
                p.Button05.set_cssclass("btn_WF_basic03");
                p.Button05.move("Static02:-80.00%","182","8.16%","32",null,null);

                p.Button06.set_taborder("11");
                p.Button06.set_text("Push");
                p.Button06.set_cssclass("btn_cp_basic03");
                p.Button06.move("Button05:20","182","8.16%","32",null,null);

                p.Button07.set_taborder("12");
                p.Button07.set_text("Disabled");
                p.Button07.set_cssclass("btn_WF_basic02");
                p.Button07.set_enable("false");
                p.Button07.move("Button06:20","182","8.16%","32",null,null);

                p.Button08.set_taborder("13");
                p.Button08.set_text("Delete");
                p.Button08.set_cssclass("btn_WF_basic05");
                p.Button08.move("Static02:-80.00%","222","8.16%","32",null,null);

                p.Button09.set_taborder("14");
                p.Button09.set_text("Push");
                p.Button09.set_cssclass("btn_cp_basic04");
                p.Button09.move("Button08:20","222","8.16%","32",null,null);

                p.Button10.set_taborder("15");
                p.Button10.set_text("Disabled");
                p.Button10.set_cssclass("btn_WF_basic03");
                p.Button10.set_enable("false");
                p.Button10.move("Button09:20","222","8.16%","32",null,null);

                p.Static55.set_taborder("16");
                p.Static55.set_cssclass("sta_cp_box01");
                p.Static55.move("Static02:20","71",null,"202","20",null);

                p.Static54.set_taborder("17");
                p.Static54.set_text("CheckBox & Radio");
                p.Static54.set_cssclass("sta_cp_box01");
                p.Static54.move("Static01:20","71",null,"51","20",null);

                p.CheckBox01.set_taborder("18");
                p.CheckBox01.set_text("CheckBox_Normal");
                p.CheckBox01.set_cssclass("chk_basic01");
                p.CheckBox01.move("Static02:85","142","142","32",null,null);

                p.CheckBox03.set_taborder("19");
                p.CheckBox03.set_text("CheckBox_Disable");
                p.CheckBox03.set_cssclass("chk_basic01");
                p.CheckBox03.set_enableevent("false");
                p.CheckBox03.set_enable("false");
                p.CheckBox03.set_value("false");
                p.CheckBox03.move("Static02:85","222","142","32",null,null);

                p.Radio01.set_taborder("20");
                p.Radio01.set_cssclass("rdo_basic01");
                p.Radio01.set_innerdataset("dsCode");
                p.Radio01.set_codecolumn("value");
                p.Radio01.set_datacolumn("label");
                p.Radio01.move(null,"138","14.08%","121","7.45%",null);

                p.Static56.set_taborder("21");
                p.Static56.set_cssclass("sta_cp_box01");
                p.Static56.move("0","293","47.96%","214",null,null);

                p.Static57.set_taborder("22");
                p.Static57.set_text("Combo");
                p.Static57.set_cssclass("sta_cp_box01");
                p.Static57.move("0","293","47.96%","51",null,null);

                p.Static62.set_taborder("23");
                p.Static62.set_cssclass("sta_cp_box01");
                p.Static62.move("Static56:20","293",null,"214","20",null);

                p.Static61.set_taborder("24");
                p.Static61.set_text("ListBox");
                p.Static61.set_cssclass("sta_cp_box01");
                p.Static61.move("Static57:20","293",null,"51","20",null);

                p.Combo01.set_taborder("25");
                p.Combo01.set_cssclass("cmb_basic01");
                p.Combo01.set_innerdataset("dsCode");
                p.Combo01.set_codecolumn("value");
                p.Combo01.set_datacolumn("label");
                p.Combo01.set_itemheight("30");
                p.Combo01.set_text("Combo01");
                p.Combo01.move("Static56:-95.96%","364","13.27%","32",null,null);

                p.Static21.set_taborder("96");
                p.Static21.set_cssclass("sta_cp_Combo");
                p.Static21.move("Combo01:20","364","130","125",null,null);

                p.Combo03.set_taborder("26");
                p.Combo03.set_innerdataset("dsCode");
                p.Combo03.set_codecolumn("value");
                p.Combo03.set_datacolumn("label");
                p.Combo03.set_cssclass("cmb_basic01");
                p.Combo03.set_enable("false");
                p.Combo03.move("Static21:20","364","13.27%","32",null,null);

                p.ListBox01.set_taborder("27");
                p.ListBox01.set_innerdataset("dsCode");
                p.ListBox01.set_codecolumn("value");
                p.ListBox01.set_datacolumn("label");
                p.ListBox01.set_cssclass("lst_basic01");
                p.ListBox01.set_multiselect("true");
                p.ListBox01.set_itemheight("30");
                p.ListBox01.move("Static56:25.11%","364","Static62:58.51%","122",null,null);

                p.Static64.set_taborder("28");
                p.Static64.set_cssclass("sta_cp_box01");
                p.Static64.move("0","527","31.33%","221",null,null);

                p.Static63.set_taborder("29");
                p.Static63.set_text("Edit");
                p.Static63.set_cssclass("sta_cp_box01");
                p.Static63.move("0","527","31.33%","51",null,null);

                p.Static66.set_taborder("30");
                p.Static66.set_cssclass("sta_cp_box01");
                p.Static66.move("Static64:20","527","31.33%","221",null,null);

                p.Static68.set_taborder("31");
                p.Static68.set_cssclass("sta_cp_box01");
                p.Static68.move("Static66:20","527",null,"221","20",null);

                p.Static65.set_taborder("32");
                p.Static65.set_text("MaskEdit");
                p.Static65.set_cssclass("sta_cp_box01");
                p.Static65.move("Static63:20","527","31.33%","51",null,null);

                p.Static67.set_taborder("33");
                p.Static67.set_text("Spin");
                p.Static67.set_cssclass("sta_cp_box01");
                p.Static67.move("Static65:20","527",null,"51","20",null);

                p.Edit01.set_taborder("34");
                p.Edit01.set_displaynulltext("넥사크로");
                p.Edit01.set_value("넥사크로");
                p.Edit01.set_cssclass("ed_basic01");
                p.Edit01.move("Static64:-80.46%","598","18.98%","32",null,null);

                p.Edit02.set_taborder("35");
                p.Edit02.set_displaynulltext("넥사크로");
                p.Edit02.set_value("넥사크로");
                p.Edit02.set_cssclass("ed_basic02");
                p.Edit02.move("Static64:-80.13%","647","18.98%","32",null,null);

                p.Edit03.set_taborder("36");
                p.Edit03.set_displaynulltext("넥사크로");
                p.Edit03.set_value("넥사크로");
                p.Edit03.set_cssclass("ed_basic01");
                p.Edit03.set_enable("false");
                p.Edit03.move("Static64:-80.46%","696","18.98%","32",null,null);

                p.MaskEdit02.set_taborder("37");
                p.MaskEdit02.set_cssclass("msk_basic01");
                p.MaskEdit02.set_value("123456789");
                p.MaskEdit02.set_format("#,##0");
                p.MaskEdit02.move("Static64:26.06%","598","18.98%","32",null,null);

                p.MaskEdit03.set_taborder("38");
                p.MaskEdit03.set_value("123456789");
                p.MaskEdit03.set_cssclass("msk_basic02");
                p.MaskEdit03.set_maskchar("_");
                p.MaskEdit03.set_format("#,##0");
                p.MaskEdit03.move("Static64:26.06%","647","18.98%","32",null,null);

                p.MaskEdit04.set_taborder("39");
                p.MaskEdit04.set_enable("false");
                p.MaskEdit04.set_value("123,456,789");
                p.MaskEdit04.set_displaynulltext("123,456,789");
                p.MaskEdit04.set_cssclass("msk_basic01");
                p.MaskEdit04.set_type("number");
                p.MaskEdit04.set_maskchar("_");
                p.MaskEdit04.getSetter("mask").set("#,##0.00");
                p.MaskEdit04.move("Static64:26.06%","696","18.98%","32",null,null);

                p.Spin01.set_taborder("40");
                p.Spin01.set_cssclass("sp_basic01");
                p.Spin01.set_value("0");
                p.Spin01.move("Static66:26.06%","598","18.98%","32",null,null);

                p.Spin02.set_taborder("41");
                p.Spin02.set_cssclass("sp_basic02");
                p.Spin02.set_value("0");
                p.Spin02.move("Static66:26.06%","647","18.98%","32",null,null);

                p.Spin03.set_taborder("42");
                p.Spin03.set_enable("false");
                p.Spin03.set_value("0");
                p.Spin03.move("Static66:26.06%","696","18.98%","32",null,null);

                p.Static69.set_taborder("43");
                p.Static69.set_cssclass("sta_cp_box01");
                p.Static69.set_text("");
                p.Static69.move("0","1098","47.96%","285",null,null);

                p.Static70.set_taborder("44");
                p.Static70.set_text("Calendar");
                p.Static70.set_cssclass("sta_cp_box01");
                p.Static70.move("0","1098","47.96%","51",null,null);

                p.Static71.set_taborder("45");
                p.Static71.set_cssclass("sta_cp_box01");
                p.Static71.move("Static69:20","1098",null,"285","20",null);

                p.Static72.set_taborder("46");
                p.Static72.set_text("TextArea");
                p.Static72.set_cssclass("sta_cp_box01");
                p.Static72.move("Static70:20","1098",null,"51","20",null);

                p.TextArea01.set_taborder("47");
                p.TextArea01.set_cssclass("txa_basic01");
                p.TextArea01.set_displaynulltext("Yeah, TextArea it is!");
                p.TextArea01.set_wordWrap("char");
                p.TextArea01.move("Static69:25.53%","1169","27.55%","194",null,null);

                p.calToday.set_taborder("48");
                p.calToday.set_cssclass("cal_basic01");
                p.calToday.set_dateformat("yyyy-MM-dd");
                p.calToday.move("Static69:-88.3%","1169","13.27%","30",null,null);

                p.calToday01.set_taborder("49");
                p.calToday01.set_type("spin");
                p.calToday01.set_cssclass("cal_basic01");
                p.calToday01.set_dateformat("yyyy-MM-dd");
                p.calToday01.move("Static69:-88.3%","1259","13.27%","30",null,null);

                p.Static03.set_taborder("50");
                p.Static03.set_cssclass("sta_cp_box01");
                p.Static03.move("0","1403","31.33%","247",null,null);

                p.Static06.set_taborder("51");
                p.Static06.set_cssclass("sta_cp_box01");
                p.Static06.move("Static03:20","1403","31.33%","247",null,null);

                p.Static08.set_taborder("52");
                p.Static08.set_cssclass("sta_cp_box01");
                p.Static08.move("Static06:20","1403",null,"247","20",null);

                p.Static04.set_taborder("54");
                p.Static04.set_text("Static");
                p.Static04.set_cssclass("sta_cp_box01");
                p.Static04.move("0","1403","31.33%","51",null,null);

                p.Static05.set_taborder("55");
                p.Static05.set_text("Div");
                p.Static05.set_cssclass("sta_cp_box01");
                p.Static05.move("Static04:20","1403","31.33%","51",null,null);

                p.Static07.set_taborder("53");
                p.Static07.set_text("GroupBox");
                p.Static07.set_cssclass("sta_cp_box01");
                p.Static07.move("Static05:20","1403",null,"51","20",null);

                p.Static09.set_taborder("56");
                p.Static09.set_text("Static09");
                p.Static09.set_background("#7b69d6");
                p.Static09.set_color("rgba(255,255,255,1)");
                p.Static09.set_textAlign("center");
                p.Static09.set_verticalAlign("middle");
                p.Static09.set_font("10pt Malgun gothic,Arial");
                p.Static09.move("Static03:-77.20%","1474","16.94%","60",null,null);

                p.Static10.set_taborder("57");
                p.Static10.set_background("#a17fe7");
                p.Static10.move("Static03:-77.2%","1534","8.47%","30",null,null);

                p.Static11.set_taborder("58");
                p.Static11.set_background("rgba(161,103,209,1)");
                p.Static11.move("Static10:0","1534","8.47%","30",null,null);

                p.Static73.set_taborder("59");
                p.Static73.set_text("<b v=\'true\'>동해물</b>과 <fc v=\'red\'>백두산</fc>이 마르고...");
                p.Static73.set_usedecorate("true");
                p.Static73.set_font("normal 10pt/normal \"Malgun Gothic\",\"Arial\"");
                p.Static73.move("Static03:-76.55%","1572","163","28",null,null);

                p.Static74.set_taborder("60");
                p.Static74.set_text("<u v=\'true\'>동해물</u>과 <s v=\'true\'>백두산</s>이 마르고...");
                p.Static74.set_usedecorate("true");
                p.Static74.set_font("normal 10pt/normal \"Malgun Gothic\",\"Arial\"");
                p.Static74.move("Static03:-76.55%","1603","163","28",null,null);

                p.Div02.set_taborder("61");
                p.Div02.set_text("DIV");
                p.Div02.set_cssclass("div_basic01");
                p.Div02.move("Static03:30.94%","1474","16.94%","156",null,null);

                p.GroupBox01.set_text("Group");
                p.GroupBox01.set_taborder("62");
                p.GroupBox01.set_cssclass("grb_basic01");
                p.GroupBox01.move("Static06:31.92%","1473","16.94%","156",null,null);

                p.Menu01.set_taborder("63");
                p.Menu01.set_levelcolumn("level");
                p.Menu01.set_innerdataset("dsMenu01");
                p.Menu01.set_idcolumn("id");
                p.Menu01.set_captioncolumn("caption");
                p.Menu01.set_cssclass("menu_basic01");
                p.Menu01.set_fittocontents("width");
                p.Menu01.move("130","1671",null,"49","22",null);

                p.Static13.set_taborder("64");
                p.Static13.set_text("Menu");
                p.Static13.set_cssclass("sta_menu_icon");
                p.Static13.move("20","1670","110","51",null,null);

                p.Static20.set_taborder("95");
                p.Static20.set_text("Grid");
                p.Static20.set_cssclass("sta_cp_box01");
                p.Static20.move("0","768",null,"51","20",null);

                p.CheckBox02.set_taborder("97");
                p.CheckBox02.set_text("CheckBox_Select");
                p.CheckBox02.set_cssclass("chk_basic01");
                p.CheckBox02.set_enable("true");
                p.CheckBox02.set_enableevent("false");
                p.CheckBox02.set_value("true");
                p.CheckBox02.move("Static02:85","182","142","32",null,null);

                p.calToday03.set_taborder("98");
                p.calToday03.set_type("monthonly");
                p.calToday03.move("calToday:79","1169","169","189",null,null);

                p.calToday02.set_taborder("99");
                p.calToday02.set_cssclass("cal_basic01");
                p.calToday02.set_enable("false");
                p.calToday02.move("Static69:-88.3%","1209","13.27%","30",null,null);

                p.Calendar04.set_taborder("100");
                p.Calendar04.set_type("spin");
                p.Calendar04.set_cssclass("cal_basic01");
                p.Calendar04.set_enable("false");
                p.Calendar04.move("Static69:-88.3%","1299","13.27%","30",null,null);

                p.Static00.set_taborder("101");
                p.Static00.set_text("Static00");
                p.Static00.set_background("aqua");
                p.Static00.set_visible("false");
                p.Static00.move(null,"19","20","153","0",null);

                p.Static60.set_taborder("101");
                p.Static60.set_text("넥사크로 플랫폼은 약 40여가지의 컴포넌트를 제공함으로써 사용자에게 편리한 툴 환경을 제공합니다.");
                p.Static60.set_cssclass("sta_WF_box03");
                p.Static60.set_wordWrap("char");
                p.Static60.move("0","0",null,"51","20",null);

                p.Static14.set_taborder("0");
                p.Static14.set_cssclass("sta_menu_bg");
                p.Static14.move("0","1752",null,"34","20",null);

                p.Tab00.set_taborder("6");
                p.Tab00.set_tabindex("0");
                p.Tab00.getSetter("scrollbars").set("autoboth");
                p.Tab00.set_cssclass("tab_basic01");
                p.Tab00.set_showextrabutton("true");
                p.Tab00.set_tabbuttonheight("32");
                p.Tab00.move("0","1751",null,"175","20",null);

                p.Tab00.tabpage1.set_text("tabpage1");

                p.Tab00.tabpage2.set_text("tabpage2");

                p.Tab00.tabpage3.set_text("tabpage3");

                p.Tab00.tabpage4.set_text("tabpage4");

                p.Static29.set_taborder("66");
                p.Static29.set_cssclass("sta_cp_box01");
                p.Static29.move("0","1946","31.33%","247",null,null);

                p.Static22.set_taborder("65");
                p.Static22.set_cssclass("sta_cp_box01");
                p.Static22.move("Static29:20","1946","31.33%","247",null,null);

                p.Static31.set_taborder("67");
                p.Static31.set_cssclass("sta_cp_box01");
                p.Static31.move("Static22:20","1946",null,"247","20",null);

                p.Static23.set_taborder("70");
                p.Static23.set_text("PopupDiv");
                p.Static23.set_cssclass("sta_cp_box01");
                p.Static23.move("0","1946","31.33%","51",null,null);

                p.Static15.set_taborder("69");
                p.Static15.set_text("PopupMenu");
                p.Static15.set_cssclass("sta_cp_box01");
                p.Static15.move("Static23:20","1946","31.33%","51",null,null);

                p.Static30.set_taborder("68");
                p.Static30.set_text("Step");
                p.Static30.set_cssclass("sta_cp_box01");
                p.Static30.move("Static15:20","1946",null,"51","20",null);

                p.Div01.set_taborder("71");
                p.Div01.set_url("comp::Components_step.xfdl");
                p.Div01.set_text("");
                p.Div01.move("Static22:26.06%","2017","18.78%","155",null,null);

                p.Button01.set_taborder("72");
                p.Button01.set_text("click me");
                p.Button01.set_cssclass("btn_cp_popDiv");
                p.Button01.move("Static29:-66.45%","2053","10.2%","60",null,null);

                p.Button02.set_taborder("73");
                p.Button02.set_text("click me");
                p.Button02.set_cssclass("btn_cp_popMenu");
                p.Button02.move("Static29:40.07%","2054","10.2%","60",null,null);

                p.Static33.set_taborder("74");
                p.Static33.set_cssclass("sta_cp_box01");
                p.Static33.move("0","2213","31.33%","132",null,null);

                p.Static32.set_taborder("75");
                p.Static32.set_text("FileDownload");
                p.Static32.set_cssclass("sta_cp_box01");
                p.Static32.move("0","2213","31.33%","51",null,null);

                p.Static35.set_taborder("76");
                p.Static35.set_cssclass("sta_cp_box01");
                p.Static35.move("Static33:20","2213",null,"132","20",null);

                p.Static34.set_taborder("77");
                p.Static34.set_text("FileUpload");
                p.Static34.set_cssclass("sta_cp_box01");
                p.Static34.move("Static32:20","2213",null,"51","20",null);

                p.FileDownload00.set_taborder("78");
                p.FileDownload00.set_text("FileDownload");
                p.FileDownload00.set_cssclass("filedown_basic01");
                p.FileDownload00.move("Static33:-75.57%","2284","16.33%","40",null,null);

                p.FileUpload00.set_taborder("79");
                p.FileUpload00.set_cssclass("fileup_basic01");
                p.FileUpload00.set_itemheight("40");
                p.FileUpload00.set_buttonsize("160");
                p.FileUpload00.set_buttontext("FileUpload");
                p.FileUpload00.set_index("0");
                p.FileUpload00.move("Static33:36.16%","2284","45.92%","40",null,null);

                p.Static17.set_taborder("80");
                p.Static17.set_cssclass("sta_cp_box01");
                p.Static17.move("0","2365",null,"190","20",null);

                p.Static16.set_taborder("81");
                p.Static16.set_text("ImageViewer");
                p.Static16.set_cssclass("sta_cp_box01");
                p.Static16.move("0","2365",null,"51","20",null);

                p.ImageViewer01.set_taborder("82");
                p.ImageViewer01.set_image("URL(\'imagerc::nexa_BI.png\')");
                p.ImageViewer01.set_stretch("fit");
                p.ImageViewer01.move("333","2470","177","65",null,null);

                p.Static27.set_taborder("83");
                p.Static27.set_text("stretch : fit");
                p.Static27.set_cssclass("sta_cp_imageViewer");
                p.Static27.move("333","2436","125","24",null,null);

                p.ImageViewer02.set_taborder("84");
                p.ImageViewer02.set_image("URL(\'imagerc::nexa_BI.png\')");
                p.ImageViewer02.set_stretch("fixaspectratio");
                p.ImageViewer02.move("638","2470","177","65",null,null);

                p.Static28.set_taborder("85");
                p.Static28.set_text("stretch : fixaspectratio");
                p.Static28.set_cssclass("sta_cp_imageViewer");
                p.Static28.move("638","2436","155","24",null,null);

                p.Static26.set_taborder("86");
                p.Static26.set_text("stretch : none");
                p.Static26.set_cssclass("sta_cp_imageViewer");
                p.Static26.move("28","2436","125","24",null,null);

                p.ImageViewer00.set_taborder("87");
                p.ImageViewer00.set_image("URL(\'imagerc::nexa_BI.png\')");
                p.ImageViewer00.move("28","2470","177","65",null,null);

                p.Static18.set_taborder("88");
                p.Static18.set_cssclass("sta_cp_box01");
                p.Static18.move("0","2575","31.33%","210",null,null);

                p.Static19.set_taborder("89");
                p.Static19.set_text("ProgressBar");
                p.Static19.set_cssclass("sta_cp_box01");
                p.Static19.move("0","2575","31.33%","51",null,null);

                p.ProgressBar00.set_taborder("90");
                p.ProgressBar00.set_text("56%");
                p.ProgressBar00.set_cssclass("prg_basic01");
                p.ProgressBar00.set_smooth("true");
                p.ProgressBar00.set_pos("56");
                p.ProgressBar00.move("Static18:-82.74%","2662","20.41%","35",null,null);

                p.ProgressBar01.set_taborder("91");
                p.ProgressBar01.set_text("15/100");
                p.ProgressBar01.set_cssclass("prg_basic01");
                p.ProgressBar01.set_smooth("true");
                p.ProgressBar01.set_pos("15");
                p.ProgressBar01.move("Static18:-82.74%","2708","20.41%","35",null,null);

                p.Static24.set_taborder("92");
                p.Static24.set_cssclass("sta_cp_box01");
                p.Static24.move("Static18:20","2575",null,"210","20",null);

                p.Static25.set_taborder("93");
                p.Static25.set_text("WebBrowser");
                p.Static25.set_cssclass("sta_cp_box01");
                p.Static25.move("Static19:20","2575",null,"51","20",null);

                p.webNotify.set_taborder("94");
                p.webNotify.set_border("1px solid rgba(203,203,203,1)");
                p.webNotify.move("Static18:39.09%","2636","44.08%","138",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",480,6320,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static55.set_text("");
                p.Static55.move("20","390",null,"242","20",null);

                p.CheckBox01.move("8.13%","467","37.71%","32",null,null);

                p.CheckBox02.move("8.13%","517","37.71%","32",null,null);

                p.CheckBox03.move("8.13%","567","37.71%","32",null,null);

                p.Static54.move("20","390",null,"51","20",null);

                p.Static61.move("20","866",null,"51","20",null);

                p.Static62.move("20","866",null,"253","20",null);

                p.ListBox01.set_itemheight("40");
                p.ListBox01.move("23.13%","937","Static62:57.73%","162",null,null);

                p.Static65.move("20","1398",null,"51","20",null);

                p.Static67.move("20","1668",null,"51","20",null);

                p.Static66.move("20","1398",null,"260","20",null);

                p.Static68.set_text("");
                p.Static68.move("20","1668",null,"260","20",null);

                p.MaskEdit02.move("23.13%","1469","53.13%","50",null,null);

                p.MaskEdit03.move("23.13%","1524","53.13%","50",null,null);

                p.MaskEdit04.move("23.13%","1579","53.13%","50",null,null);

                p.Spin01.move("23.13%","1739","53.13%","50",null,null);

                p.Spin02.move("23.13%","1794","53.13%","50",null,null);

                p.Spin03.move("23.13%","1849","53.13%","50",null,null);

                p.calToday03.move(null,"2361","169","189","10.21%",null);

                p.calToday.set_popuptype("system");
                p.calToday.move("10.21%","2364","36.88%","40",null,null);

                p.calToday02.set_popuptype("system");
                p.calToday02.move("10.21%","2409","36.88%","40",null,null);

                p.calToday01.move("10.21%","2461","36.88%","40",null,null);

                p.Calendar04.move("10.21%","2506","36.88%","40",null,null);

                p.TextArea01.move("23.13%","2654","52.92%","194",null,null);

                p.Static71.set_text("");
                p.Static71.move("20","2583",null,"285","20",null);

                p.Static72.move("20","2583",null,"51","20",null);

                p.Static05.move("20","3185",null,"51","20",null);

                p.Static07.move("20","3495",null,"51","20",null);

                p.Static06.move("20","3185",null,"300","20",null);

                p.Static08.move("20","3495",null,"280","20",null);

                p.Static09.set_font("15pt \"Malgun Gothic\",\"Arial\",\"Helvetica\"");
                p.Static09.move("23.96%","2959","250","60",null,null);

                p.Static11.move("Static10:0","3019","125","43",null,null);

                p.Static10.move("23.96%","3019","125","43",null,null);

                p.Static73.set_font("normal 12pt/normal \"Malgun Gothic\",\"Arial\"");
                p.Static73.move("23.96%","3082","250","28",null,null);

                p.Static74.set_font("normal 12pt/normal \"Malgun Gothic\",\"Arial\"");
                p.Static74.move("23.96%","3118","250","28",null,null);

                p.GroupBox01.move("23.13%","3569","52.92%","180",null,null);

                p.Div02.move("23.13%","3256","52.92%","209",null,null);

                p.Static15.move("20","4301",null,"51","20",null);

                p.Static30.move("20","4558",null,"51","20",null);

                p.Static22.set_text("");
                p.Static22.move("20","4301",null,"247","20",null);

                p.Div01.move("150","4629","37.50%","155",null,null);

                p.Static31.set_text("");
                p.Static31.move("20","4558",null,"247","20",null);

                p.Static34.move("20","4994",null,"51","20",null);

                p.FileDownload00.move("31.25%","4898","37.50%","50",null,null);

                p.Static35.move("20","4994",null,"160","20",null);

                p.FileUpload00.set_itemheight("50");
                p.FileUpload00.set_buttonsize("160");
                p.FileUpload00.move("12.50%","5074",null,"50","12.50%",null);

                p.Static25.move("20","6004",null,"51","20",null);

                p.ProgressBar00.move("23.13%","5838","52.92%","46",null,null);

                p.ProgressBar01.move("23.13%","5894","52.92%","46",null,null);

                p.Static24.move("20","6004",null,"290","20",null);

                p.webNotify.move("14.38%","6082","70.63%","179",null,null);

                p.Static14.move("20","3785",null,"50","20",null);

                p.Static12.set_visible("false");
                p.Static12.move("20","3785",null,"51","20",null);

                p.grdObj.set_autofittype("none");
                p.grdObj.set_formatid("mobile");
                p.grdObj.set_autoenter("none");
                p.grdObj.move("20","1989",null,"289","20",null);

                p.Tab00.set_tabbuttonheight("40");
                p.Tab00.move("20","3785",null,"249","20",null);

                p.PopupDiv00.move("554","4150","185","100",null,null);

                p.PopupMenu00.move("778","4150","185","100",null,null);

                p.Radio01.move(null,"456","35.42%","154","40",null);

                p.Static56.set_text("");
                p.Static56.move("20","642",null,"214","20",null);

                p.Static57.move("20","642",null,"51","20",null);

                p.Combo01.set_popuptype("center");
                p.Combo01.set_popupsize("350");
                p.Combo01.set_itemheight("100");
                p.Combo01.move("8.13%","713","120","32",null,null);

                p.Static21.set_text("");
                p.Static21.move("Combo01:16","713","130","125",null,null);

                p.Combo03.move("Static21:15","713","120","32",null,null);

                p.Static64.move("20","1129",null,"259","20",null);

                p.Static63.move("20","1129",null,"51","20",null);

                p.Edit01.move("23.13%","1200","53.13%","50",null,null);

                p.Edit02.move("23.13%","1255","53.13%","50",null,null);

                p.Edit03.move("23.13%","1310","53.13%","50",null,null);

                p.Static69.move("20","2288",null,"285","20",null);

                p.Static70.move("20","2288",null,"51","20",null);

                p.Static03.move("20","2878",null,"297","20",null);

                p.Static04.move("20","2878",null,"51","20",null);

                p.Menu01.set_visible("false");
                p.Menu01.move("140","3786",null,"49","22",null);

                p.Static13.set_visible("false");
                p.Static13.move("30","3785","100","51",null,null);

                p.Static29.move("20","4044",null,"247","20",null);

                p.Static23.move("20","4044",null,"51","20",null);

                p.Button01.move("31.25%","4151","37.50%","70",null,null);

                p.Button02.set_text("click me");
                p.Button02.move("31.25%","4409","37.50%","70",null,null);

                p.Static33.move("20","4815",null,"169","20",null);

                p.Static32.move("20","4815",null,"51","20",null);

                p.Static17.move("20","5164",null,"570","20",null);

                p.Static16.move("20","5164",null,"51","20",null);

                p.ImageViewer01.move("31.67%","5466","177","65",null,null);

                p.Static27.move("30.63%","5416","183","40",null,null);

                p.ImageViewer02.move("31.67%","5626","177","65",null,null);

                p.Static28.move("27.92%","5576","213","40",null,null);

                p.Static26.set_text("stretch : none");
                p.Static26.move("30.63%","5256","183","40",null,null);

                p.ImageViewer00.move("31.67%","5306","177","65",null,null);

                p.Static18.move("20","5744",null,"250","20",null);

                p.Static19.move("20","5744",null,"51","20",null);

                p.Static20.move("20","1938",null,"51","20",null);

                p.Static00.move(null,"1927","112","10","38",null);

                p.Button08.move("Static02:-80.00%","306","16.67%","50",null,null);

                p.Button05.move("Static02:-80.00%","251","16.67%","50",null,null);

                p.Button00.move("Static02:-80.00%","196","16.67%","50",null,null);

                p.Static01.move("20","121",null,"51","20",null);

                p.Static02.move("20","121",null,"259","20",null);

                p.Static60.move("20","20",null,"80","20",null);

                p.Button03.move("Button00:21","196","16.67%","50",null,null);

                p.Button04.move("Button03:19","196","16.67%","50",null,null);

                p.Button06.move("Button05:21","251","16.67%","50",null,null);

                p.Button07.move("Button06:19","251","16.67%","50",null,null);

                p.Button09.move("Button08:21","306","16.67%","50",null,null);

                p.Button10.move("Button09:19","306","16.67%","50",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comp::Components_step.xfdl");
        };
        
        // User Script
        this.registerScript("Components.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    대메뉴 > 소메뉴
        *  @FileName    Components.xfdl
        *  @Creator     presales
        *  @CreateDate  2020/02/06
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2020/02/06          presales                  최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 load시 초기설정 event
        */
        this.component_onload = function (obj, e)
        {
        	var today = this.gfnGetDate();

        	this.calToday.set_value(today);
        	this.calToday01.set_value(today);
        	this.calToday03.set_value(today);
        	this.webNotify.set_url(nexacro.getProjectPath() + "../service/Sample.html");
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
        /**
        * fnSearch : 사용자 설정 이벤트
        * @param {String}  menuId	- 메뉴 ID
        * @param {String}  menuNm	- 메뉴명
        * @return : N/A
        * @example :
        */
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description Button OnClick Event
        */
        this.fnComBtnOnClick = function(obj,e)
        {
        	var x = 0;
        	var y;

        	switch (obj.name)
        	{
        		case "Button01" :
        			y = obj.getOffsetHeight();
        			this.PopupDiv00.trackPopupByComponent(obj, x, y);
        			break;

        		case "Button02" :
        			y = obj.getOffsetHeight();
        			this.PopupMenu00.trackPopupByComponent(obj, x, y);
        			break;

        		default :
        			var sMsg = " ======================================== " + "\n";
        				sMsg += "[Button OnClick Event]" + "\n";
        				sMsg += "1. Object Id : " + obj.id + "\n";
        				sMsg += "2. Object Text : " + obj.text + "\n";
        				sMsg += "3. Event Message : " + obj.text + " 호출!" + "\n";
        				sMsg += " ======================================== ";

        			alert(sMsg);
        	}
        };

        /**
         * @description Checkbox OnChanged Event
        */
        this.fnComChkOnChanged = function(obj,e)
        {
        	var sMsg = " ======================================== " + "\n";
        	    sMsg += "[Check OnChanged Event]" + "\n";
        	    sMsg += "1. Object Id : " + obj.id + "\n";
        		sMsg += "2. Object Text : " + obj.text + "\n";
        		sMsg += "3. Event Message : " + obj.text + " 호출!" + "\n";
        		sMsg += " ======================================== ";

        	alert(sMsg);
        };

        /**
         * @description Radiobox OnItemChanged Event
        */
        this.fnComOnItemChanged = function(obj,e)
        {
        	var sMsg = " ======================================== " + "\n";
        	    sMsg += "[Radio OnItemChanged Event]" + "\n";
        	    sMsg += "1. Object Id : " + obj.id + "\n";
        		sMsg += "2. Object Value : " + obj.value + "\n";
        		sMsg += "3. Object Text : " + obj.text + "\n";
        		sMsg += "4. Object Index : " + obj.index + "\n";
        		sMsg += "5. Event Message : " + obj.text + " 호출!" + "\n";
        		sMsg += " ======================================== ";

        	alert(sMsg);
        };

        /**
         * @description Combobox OnItemChanged Event
        */
        this.fnComCboOnItemChanged = function(obj,e)
        {
        	var sMsg = " ======================================== " + "\n";
        	    sMsg += "[Combo OnItemChanged Event]" + "\n";
        	    sMsg += "1. Object Id : " + obj.id + "\n";
        		sMsg += "2. Object Value : " + obj.value + "\n";
        		sMsg += "3. Object Text : " + obj.text + "\n";
        		sMsg += "4. Object Index : " + obj.index + "\n";
        		sMsg += "5. Event Message : " + obj.text + " 호출!" + "\n";
        		sMsg += " ======================================== ";

        	alert(sMsg);
        };

        /**
         * @description ListBox OnItemChanged Event
        */
        this.fnComListOnItemChanged = function(obj,e)
        {
        	var sMsg = " ======================================== " + "\n";
        	    sMsg += "[List OnItemChanged Event]" + "\n";
        	    sMsg += "1. Object Id : " + obj.id + "\n";
        		sMsg += "2. Object Value : " + obj.value + "\n";
        		sMsg += "3. Object Text : " + obj.text + "\n";
        		sMsg += "4. Object Index : " + obj.index + "\n";
        		sMsg += "5. Event Message : " + obj.text + " 호출!" + "\n";
        		sMsg += " ======================================== ";

        	alert(sMsg);
        };

        /**
         * @description Edit OnKeyUp Event
        */
        this.fnComEditOnKeyUp = function(obj,e)
        {
        	if (e.keycode == 13) {
        		var sMsg = " ======================================== " + "\n";
        			sMsg += "[Edit OnKeyUp Event]" + "\n";
        			sMsg += "1. Object Id : " + obj.id + "\n";
        			sMsg += "2. Object Value : " + obj.value + "\n";
        			sMsg += "3. Event Message : " + obj.value + " 호출!" + "\n";
        			sMsg += " ======================================== ";

        		alert(sMsg);
        	}
        };

        /**
         * @description MaskEdit OnKeyUp Event
        */
        this.fnComMskOnKeyUp = function(obj,e)
        {
        	if (e.keycode == 13) {
        		var sMsg = " ======================================== " + "\n";
        			sMsg += "[Edit OnKeyUp Event]" + "\n";
        			sMsg += "1. Object Id : " + obj.id + "\n";
        			sMsg += "2. Object Value : " + obj.value + "\n";
        			sMsg += "3. Event Message : " + obj.value + " 호출!" + "\n";
        			sMsg += " ======================================== ";

        		alert(sMsg);
        	}
        };

        /**
         * @description Spin OnKeyUp Event
        */
        this.fnComSpinOnKeyUp = function(obj,e)
        {
        	if (e.keycode == 13) {
        		var sMsg = " ======================================== " + "\n";
        			sMsg += "[Edit OnKeyUp Event]" + "\n";
        			sMsg += "1. Object Id : " + obj.id + "\n";
        			sMsg += "2. Object Value : " + obj.value + "\n";
        			sMsg += "3. Event Message : " + obj.value + " 호출!" + "\n";
        			sMsg += " ======================================== ";

        		alert(sMsg);
        	}
        };

        /**
         * @description Grid OnCellClick Event
        */
        this.fnComGridOnCellClick = function(obj,e)
        {
        	var nRow = e.row + 1;

        	if (e.col == 5) {
        		var sMsg = " ======================================== " + "\n";
        			sMsg += "[Grid OnCellClick Event]" + "\n";
        			sMsg += "1. Object Id : " + obj.id + "\n";
        			sMsg += "2. Object Row : " + nRow + "\n";
        			sMsg += "3. Event Message : " + nRow + " 번째 Row Cell Button 호출!" + "\n";
        			sMsg += " ======================================== ";

        		alert(sMsg);
        	}
        };

        /**
         * @description Calendar OnCellClick Event
        */
        this.fnComCalOnChanged = function(obj,e)
        {
        	var sMsg = " ======================================== " + "\n";
        		sMsg += "[Calendar OnChanged Event]" + "\n";
        		sMsg += "1. Object Id : " + obj.id + "\n";
        		sMsg += "2. Object Value : " + obj.value + "\n";
        		sMsg += "3. Event Message : " + obj.value + " 호출!" + "\n";
        		sMsg += " ======================================== ";

        	alert(sMsg);
        };

        /**
         * @description Calendar OnSpin Event
        */
        this.fnComCalOnSpin = function(obj,e)
        {
        	var sMsg = " ======================================== " + "\n";
        		sMsg += "[Calendar OnSpin Event]" + "\n";
        		sMsg += "1. Object Id : " + obj.id + "\n";
        		sMsg += "2. Object Value : " + e.postvalue + "\n";
        		sMsg += "3. Event Message : " + e.postvalue + " 호출!" + "\n";
        		sMsg += " ======================================== ";

        	alert(sMsg);
        };

        /**
         * @description TextArea OnKeyUp Event
        */
        this.fnComTxaOnKeyUp = function(obj,e)
        {
        	if (e.keycode == 13) {
        		var sMsg = " ======================================== " + "\n";
        			sMsg += "[TextArea OnKeyUp Event]" + "\n";
        			sMsg += "1. Object Id : " + obj.id + "\n";
        			sMsg += "2. Object Value : " + obj.value + "\n";
        			sMsg += "3. Event Message : " + obj.value + " 호출!" + "\n";
        			sMsg += " ======================================== ";

        		alert(sMsg);
        	}
        };

        /**
         * @description Static OnClick Event
        */
        this.fnComStcOnClick = function(obj,e)
        {
        	var sMsg = " ======================================== " + "\n";
        		sMsg += "[Static OnClick Event]" + "\n";
        		sMsg += "1. Object Id : " + obj.id + "\n";
        		sMsg += "2. Object Text : " + obj.text + "\n";
        		sMsg += "3. Event Message : " + obj.text + " 호출!" + "\n";
        		sMsg += " ======================================== ";

        	alert(sMsg);
        };

        /**
         * @description Tab OnChanged Event
        */
        this.fnComTabOnChanged = function(obj,e)
        {
        	var sMsg = " ======================================== " + "\n";
        		sMsg += "[Tab OnChanged Event]" + "\n";
        		sMsg += "1. Object Id : " + obj.id + "\n";
        		sMsg += "2. Object Page Index : " + e.postindex + "\n";
        		sMsg += "3. Object Page Id : " + obj.tabpages[e.postindex].id + "\n";
        		sMsg += "4. Object Page Text : " + obj.tabpages[e.postindex].text + "\n";
        		sMsg += "5. Event Message : " + obj.tabpages[e.postindex].text + " 호출!" + "\n";
        		sMsg += " ======================================== ";

        	alert(sMsg);
        };

        /**
         * @description Webbrowser onusernotify Event
        */
        this.webNotify_onusernotify = function(obj,e)
        {
        	if (system.navigatorname != "nexacro") {
        		alert(e.userdata);
        	} else {
        		trace(e.userdata);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.component_onload,this);
            this.Button00.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.grdObj.addEventHandler("oncellclick",this.fnComGridOnCellClick,this);
            this.PopupMenu00.addEventHandler("onmenuclick",this.PopupMenu00_onmenuclick,this);
            this.Button03.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Button04.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button05.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Button06.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Button07.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button08.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Button09.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Button10.addEventHandler("onclick",this.Button00_onclick,this);
            this.CheckBox01.addEventHandler("onchanged",this.fnComChkOnChanged,this);
            this.Radio01.addEventHandler("onitemchanged",this.fnComOnItemChanged,this);
            this.Combo01.addEventHandler("onitemchanged",this.fnComCboOnItemChanged,this);
            this.ListBox01.addEventHandler("onitemchanged",this.fnComListOnItemChanged,this);
            this.Edit01.addEventHandler("onkeyup",this.fnComEditOnKeyUp,this);
            this.Edit02.addEventHandler("onkeyup",this.fnComEditOnKeyUp,this);
            this.MaskEdit02.addEventHandler("onkeyup",this.fnComMskOnKeyUp,this);
            this.MaskEdit03.addEventHandler("onkeyup",this.fnComMskOnKeyUp,this);
            this.Spin01.addEventHandler("onkeyup",this.fnComSpinOnKeyUp,this);
            this.Spin02.addEventHandler("onkeyup",this.fnComSpinOnKeyUp,this);
            this.TextArea01.addEventHandler("onkeyup",this.fnComTxaOnKeyUp,this);
            this.calToday.addEventHandler("onchanged",this.fnComCalOnChanged,this);
            this.calToday01.addEventHandler("onspin",this.fnComCalOnSpin,this);
            this.Static09.addEventHandler("onclick",this.fnComStcOnClick,this);
            this.Static10.addEventHandler("onclick",this.fnComStcOnClick,this);
            this.Static11.addEventHandler("onclick",this.fnComStcOnClick,this);
            this.Menu01.addEventHandler("onmenuclick",this.Menu01_onmenuclick,this);
            this.calToday03.addEventHandler("onchanged",this.fnComCalOnChanged,this);
            this.Tab00.addEventHandler("onchanged",this.fnComTabOnChanged,this);
            this.Button01.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Button02.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.webNotify.addEventHandler("onusernotify",this.webNotify_onusernotify,this);
        };

        this.loadIncludeScript("Components.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
