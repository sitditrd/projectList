(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("poc01");
            this.set_titletext("(주)매매실행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPush1", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"orderQty\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPush2", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"orderQty\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPush3", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPush4", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPush5", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new XPush("xpush", this);
            obj.set_layouturl("layout::push_message_layout.xml");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","5","5",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("MANUAL");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static35","1","5",null,"30","1",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_box01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","115","5","62","29",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("TRADER");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","358","5","50","29",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("증권사");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo00","193","8","143","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo01","418","8","233","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("전체");
            obj.set_value("01");
            obj.set_index("-1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("Radio00","1044","9","204","21",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_border("1px solid #e0e0e0");
            var Tab00_Tabpage1_form_Radio00_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Radio00_innerdataset", obj);
            Tab00_Tabpage1_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">ALL</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">BUY</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">SELL</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Radio00_innerdataset);
            obj.set_text("Normal");
            obj.set_value("0");
            obj.set_index("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnSearch","11","8","76","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic02");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","668","5","20","29",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("팀");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo02","698","8","123","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("전체");
            obj.set_value("01");
            obj.set_index("-1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","841","5","50","29",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("운용역");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo03","898","8","143","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("전체");
            obj.set_value("01");
            obj.set_index("-1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("Radio01","1251","9","204","21",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_border("1px solid #e0e0e0");
            var Tab00_Tabpage1_form_Radio01_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Radio01_innerdataset", obj);
            Tab00_Tabpage1_form_Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">ALL</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체결</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미체결</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Radio01_innerdataset);
            obj.set_text("Normal");
            obj.set_value("0");
            obj.set_index("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo04","1460","8","123","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("종목명순");
            obj.set_value("01");
            obj.set_index("-1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","40",null,null,"30.48%","525",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"지번\"/><Cell col=\"1\" text=\"매체\"/><Cell col=\"2\" text=\"주문지명\"/><Cell col=\"3\" text=\"VI\" border=\"1px solid #cacaca, 0px none\"/><Cell col=\"4\" text=\"EW\" border=\"1px solid #cacaca, 0px none\"/><Cell col=\"5\" text=\"억\"/><Cell col=\"6\" text=\"운용역\"/><Cell col=\"7\" text=\"블럭\"/><Cell col=\"8\" text=\"증권사\"/><Cell col=\"9\" text=\"주문조건\"/><Cell col=\"10\" text=\"체결율\"/><Cell col=\"11\" text=\"시분할\"/><Cell col=\"12\" text=\"메모\"/></Band><Band id=\"body\"><Cell text=\"bind:COL1\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"1\" text=\"bind:COL2\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"2\" text=\"bind:COL3\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"3\" text=\"bind:COL4\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"4\" text=\"bind:COL5\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"5\" text=\"bind:COL6\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"6\" text=\"bind:COL7\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"7\" text=\"bind:COL8\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"8\" text=\"bind:COL9\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"9\" text=\"bind:COL10\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"10\" expr=\"nexacro.round(COL12/COL11, 2) * 100 + '%'\" textAlign=\"right\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"11\" text=\"bind:COL13\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"12\" text=\"bind:COL14\" cssclass=\"expr:COL12==100?'cell_gray':''\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid01","Grid00:2","40","30.04%",null,null,"493",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"117\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"종목명\"/><Cell col=\"2\" text=\"B/S\"/><Cell col=\"3\" text=\"주문수량\"/><Cell col=\"4\" text=\"주문금액\"/><Cell col=\"5\" text=\"체결율\"/></Band><Band id=\"body\"><Cell text=\"bind:COL1\" cssclass=\"expr:COL6==100?'cell_gray':''\"/><Cell col=\"1\" text=\"bind:COL2\" cssclass=\"expr:COL6==100?'cell_gray':''\"/><Cell col=\"2\" text=\"bind:COL3\" cssclass=\"expr:COL6==100?'cell_gray':''\"/><Cell col=\"3\" text=\"bind:COL4\" cssclass=\"expr:COL6==100?'cell_gray':''\"/><Cell col=\"4\" text=\"bind:COL5\" cssclass=\"expr:COL6==100?'cell_gray':''\"/><Cell col=\"5\" expr=\"nexacro.round(COL6/COL4) * 100 + '%'\" textAlign=\"right\" cssclass=\"expr:COL6==100?'cell_gray':''\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid02","1",null,null,"235","1","220",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"48\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"20\"/><Column size=\"20\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"지번\"/><Cell col=\"2\" text=\"매체\"/><Cell col=\"3\" text=\"펀드\"/><Cell col=\"4\" text=\"코드\"/><Cell col=\"5\" text=\"종목명\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"실주문수량\"/><Cell col=\"9\" text=\"주문조건\"/><Cell col=\"10\" text=\"운용역\"/><Cell col=\"11\" text=\"증권사\"/><Cell col=\"12\" text=\"체결수량\"/><Cell col=\"13\" text=\"체결금액\"/><Cell col=\"14\" text=\"체결율\"/><Cell col=\"15\" text=\"단가\"/><Cell col=\"16\"/><Cell col=\"17\" text=\"주문방법\"/><Cell col=\"18\" text=\"주문낸수량\"/><Cell col=\"19\" text=\"운용역메모\"/><Cell col=\"20\" text=\"전송메모\"/><Cell col=\"21\" text=\"잔량\"/><Cell col=\"22\" text=\"시분할\"/><Cell col=\"23\" text=\"블럭\"/><Cell col=\"24\" text=\"트레이더메모\"/><Cell col=\"25\" text=\"주문상태\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:COL1\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"2\" text=\"bind:COL2\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"3\" text=\"bind:COL3\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"4\" text=\"bind:COL4\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"5\" text=\"bind:COL5\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"6\" text=\"bind:COL6\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"7\" text=\"bind:COL7\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"8\" text=\"bind:COL8\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"9\" text=\"bind:COL9\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"10\" text=\"bind:COL10\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"11\" text=\"bind:COL11\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"12\" text=\"bind:COL12\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"13\" text=\"bind:COL13\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"14\" expr=\"nexacro.round(COL12/COL8, 2) * 100 + '%'\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"15\" text=\"bind:COL14\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"16\" text=\"bind:COL15\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"17\" text=\"bind:COL16\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"18\" text=\"bind:COL8\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"19\" text=\"bind:COL18\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"20\" text=\"bind:COL19\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"21\" text=\"bind:COL20\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"22\" text=\"bind:COL21\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"23\" text=\"bind:COL22\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"24\" text=\"bind:COL23\" cssclass=\"expr:COL12==100?'cell_gray':''\"/><Cell col=\"25\" text=\"bind:COL24\" cssclass=\"expr:COL12==100?'cell_gray':''\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static30","1",null,null,"30","1","460",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_box01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04","935",null,"52","29",null,"460",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("증권사");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static05","1228",null,"50","29",null,"460",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("정렬");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo05","993",null,"213","24",null,"463",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo06","1278",null,"143","24",null,"463",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("1. 주문지-증권사-");
            obj.set_value("01");
            obj.set_index("-1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00_00","1426",null,"76","24",null,"463",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic02");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","1507",null,"76","24",null,"463",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic02");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("Radio03","214",null,"204","21",null,"464",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_border("1px solid #e0e0e0");
            var Tab00_Tabpage1_form_Radio03_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Radio03_innerdataset", obj);
            Tab00_Tabpage1_form_Radio03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">ALL</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">BUY</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">SELL</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Radio03_innerdataset);
            obj.set_text("Normal");
            obj.set_value("0");
            obj.set_index("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("Radio04","421",null,"204","21",null,"464",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_border("1px solid #e0e0e0");
            var Tab00_Tabpage1_form_Radio04_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Radio04_innerdataset", obj);
            Tab00_Tabpage1_form_Radio04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">ALL</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체결</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미체결</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Radio04_innerdataset);
            obj.set_text("Normal");
            obj.set_value("0");
            obj.set_index("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("Radio02","7",null,"204","21",null,"464",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_border("1px solid #e0e0e0");
            var Tab00_Tabpage1_form_Radio02_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Radio02_innerdataset", obj);
            Tab00_Tabpage1_form_Radio02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">주문지</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">종목</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Radio02_innerdataset);
            obj.set_text("Normal");
            obj.set_value("0");
            obj.set_index("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00","627",null,"114","21",null,"464",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit01","744",null,"174","21",null,"464",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static37","1",null,null,"30","30.48%","492",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_box01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tab("Tab00","1",null,"360","187",null,"30",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_tabindex("0");
            obj.set_tabjustify("true");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00.Tabpage1.form.Tab00);
            obj.set_text("종목");
            this.Tab00.Tabpage1.form.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","43","-1",null,"138","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #939393");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","82","20","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_background("#0000ff");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00.Tabpage1.form.Tab00);
            obj.set_text("지수");
            this.Tab00.Tabpage1.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00.Tabpage1.form.Tab00);
            obj.set_text("주문상세창");
            this.Tab00.Tabpage1.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00.Tabpage1.form.Tab00);
            obj.set_text("등락율");
            this.Tab00.Tabpage1.form.Tab00.addChild(obj.name, obj);

            obj = new Static("Static06","364",null,"107","31",null,"185",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("매도");
            obj.set_background("#f5bec7");
            obj.set_border("1px solid #a0a0a0");
            obj.set_textAlign("center");
            obj.set_color("#ff0000");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00","470",null,"107","31",null,"185",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_background("#bbb4d3");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","576",null,"107","31",null,"185",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("매수");
            obj.set_background("#c1ccf5");
            obj.set_border("1px solid #a0a0a0");
            obj.set_textAlign("center");
            obj.set_color("#0000ff");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_01","364",null,"107","27",null,"159",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_background("#f5bec7");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_01","470",null,"107","27",null,"159",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_background("#fbd7df");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","576",null,"107","27",null,"159",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_background("#eef4fe");
            obj.set_border("1px solid #a0a0a0");
            obj.set_text("↑");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_color("#ff0000");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","364",null,"107","27",null,"133",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_background("#faccd3");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_01_00","470",null,"107","27",null,"133",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_background("#fce1e8");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00","576",null,"107","27",null,"133",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_background("#e5edfe");
            obj.set_border("1px solid #a0a0a0");
            obj.set_text("↓");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_color("#0000ff");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_01_01","364",null,"107","27",null,"107",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_background("#fbd7df");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_01_01","470",null,"107","27",null,"107",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_background("#fdf3f7");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_01","576",null,"107","27",null,"107",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_background("#e5edfe");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00","364",null,"36","27",null,"81",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_background("#fde1e8");
            obj.set_border("1px solid #a0a0a0");
            obj.set_text("기준");
            obj.set_textAlign("center");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_01_00_00","470",null,"107","27",null,"81",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_background("#fef8fe");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00","576",null,"107","27",null,"81",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_background("#d3e7fb");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_01_01_00","364",null,"36","27",null,"55",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_background("#fdeef0");
            obj.set_border("1px solid #a0a0a0");
            obj.set_text("+4%");
            obj.set_textAlign("center");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_01_01_00","470",null,"107","27",null,"55",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_background("#eef4fe");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_01_00","576",null,"107","27",null,"55",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("48");
            obj.set_background("#d3dcfe");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00","364",null,"36","27",null,"29",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("49");
            obj.set_background("#fdf3f7");
            obj.set_border("1px solid #a0a0a0");
            obj.set_text("-4%");
            obj.set_textAlign("center");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_01_00_00_00","470",null,"107","27",null,"29",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("50");
            obj.set_background("#e5edfe");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00","576",null,"107","27",null,"29",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("51");
            obj.set_background("#c1ccf5");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_01","399",null,"72","27",null,"81",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("52");
            obj.set_background("#fde1e8");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_01_01_00_00","399",null,"72","27",null,"55",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("53");
            obj.set_background("#fdeef0");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00_00","399",null,"72","27",null,"29",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("54");
            obj.set_background("#fdf3f7");
            obj.set_border("1px solid #a0a0a0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tab("Tab01","686",null,null,"187","1","30",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_tabindex("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00.Tabpage1.form.Tab01);
            obj.set_text("주문");
            obj.set_background("#f8f8f8");
            this.Tab00.Tabpage1.form.Tab01.addChild(obj.name, obj);

            obj = new Radio("Radio00",null,"6","50","40","6",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage1_form_Tab01_Tabpage1_form_Radio00_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Tab01_Tabpage1_form_Radio00_innerdataset", obj);
            Tab00_Tabpage1_form_Tab01_Tabpage1_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">FIX</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수기</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Tab01_Tabpage1_form_Radio00_innerdataset);
            obj.set_text("FIX");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo00","11","51","113","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("단순CD");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo01","127","51","73","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("일반");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00","127","78",null,"24","50",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","11","104","103","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("남은수량");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","125","104","28","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("대비");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","157","104","70","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_value("100");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_00","231","104","18","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("%");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","250","104","130","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("7");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_01","389","104","28","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("금액");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit01","420","104",null,"24","143",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("8");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button10",null,"104","90","24","50",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("전송");
            obj.set_cssclass("btn_WF_basic01");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","456","132","154","21",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Tab00_Tabpage1_form_Tab01_Tabpage1_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Tab01_Tabpage1_form_Radio00_00_innerdataset", obj);
            Tab00_Tabpage1_form_Tab01_Tabpage1_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">ALL</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">BUY</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">SELL</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Tab01_Tabpage1_form_Radio00_00_innerdataset);
            obj.set_text("Normal");
            obj.set_value("0");
            obj.set_index("0");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button10_00","47","130","130","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("종목 주문 전송");
            obj.set_cssclass("btn_WF_basic01");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button10_00_00","181","130","130","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("주문지 전체전송");
            obj.set_cssclass("btn_WF_basic01");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button10_00_00_00","315","130","130","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab01.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("종목 전체전송");
            obj.set_cssclass("btn_WF_basic01");
            this.Tab00.Tabpage1.form.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00.Tabpage1.form.Tab01);
            obj.set_text("트레이더 취소");
            this.Tab00.Tabpage1.form.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00.Tabpage1.form.Tab01);
            obj.set_text("정정주문");
            this.Tab00.Tabpage1.form.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00.Tabpage1.form.Tab01);
            obj.set_text("운용역 취소접수");
            this.Tab00.Tabpage1.form.Tab01.addChild(obj.name, obj);

            obj = new Static("Static07","1",null,"70","28",null,"1",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("55");
            obj.set_text("알림");
            obj.set_border("1px solid #d5d5d5");
            obj.set_textAlign("center");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stcMessage","72",null,null,"28","0","1",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("56");
            obj.set_border("1px solid #d5d5d5");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("BASKET");
            this.Tab00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,840,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("poc01.xfdl", function() {
        this.rootContext = nexacro.getProjectPath() + "../";

        this.poc01_onload = function(obj,e)
        {
        	nexacro._OnceCallbackTimer.callonce(this, function()
        	{
        		this.xpush.set_iplist("http://14.63.224.112:10080, 14.63.224.112:10081");
        		this.xpush.connect("id", "pw");
        	}, 100);

        	this.transaction("ExecuteDataAdd", this.rootContext + "service/PushProvider1.jsp", "", "", "", "callback");
        	this.transaction("ExecuteEngageRate", this.rootContext + "service/PushProvider2.jsp", "", "", "", "callback");
        };

        this.callback = function(id, code, msg)
        {
        	if (id === "selectMasterData")
        	{
        		this.setMessge("주문지별 데이터가 조회되었습니다.");

        		// Row 추가
        		this.xpush.subscribe("LADD", "ADD", this, this.dsPush1, "replace", "pushCallback1");
        		this.xpush.subscribe("RADD", "ADD", this, this.dsPush2, "replace", "pushCallback2");

        		// 실시간 갱신 항목
        		this.xpush.subscribe("LCHE", "CHE", this, this.dsPush3, "replace", "pushCallback3");
        		this.xpush.subscribe("RCHE", "CHE", this, this.dsPush4, "replace", "pushCallback4");
        	}
        	else if (id === "selectDetailData")
        	{
        		this.setMessge("배분주문지별 데이터가 조회되었습니다.");

        		// 실시간 갱신 항목
        		this.xpush.subscribe("DCHE", "CHE", this, this.dsPush5, "replace", "pushCallback5");
        	}
        };

        this.pushCallback1 = function(row, col, colList, msgType, actionType, msgID)
        {
        	this.setMessge(this.dsPush1.getColumn(row, "code") + "번 주문지가 배분되었습니다.");

        	this.dsList1.set_enableevent(false);
        	var r = this.dsList1._appendRow();
        	this.dsList1.setColumn(r, "COL1", this.dsPush1.getColumn(row, "code"));
        	this.dsList1.setColumn(r, "COL3", this.dsPush1.getColumn(row, "name"));
        	this.dsList1.setColumn(r, "COL11", this.dsPush1.getColumn(row, "orderQty"));
        	this.dsList1.setColumn(r, "COL12", 0);
        	this.dsList1.set_enableevent(true);
        };

        this.pushCallback2 = function(row, col, colList, msgType, actionType, msgID)
        {
        	this.dsList2.set_enableevent(false);
        	var r = this.dsList2._appendRow();
        	this.dsList2.setColumn(r, "COL1", this.dsPush2.getColumn(row, "code"));
        	this.dsList2.setColumn(r, "COL2", this.dsPush2.getColumn(row, "name"));
        	this.dsList2.setColumn(r, "COL4", this.dsPush2.getColumn(row, "orderQty"));
        	this.dsList2.setColumn(r, "COL6", 0);
        	this.dsList2.set_enableevent(true);
        };

        this.pushCallback3 = function(row, col, colList, msgType, actionType, msgID)
        {
        	//trace("LCHE : " + this.dsPush3.getColumn(row, "code"));
        	this.dsList1.set_enableevent(false);
        	var r = this.dsList1.findRow("COL1", this.dsPush3.getColumn(row, "code"));
        	this.Tab00.Tabpage1.form.Grid00.blinkCell(r, 10, 3000, 1);
        	this.dsList1.setColumn(r, "COL12", this.dsPush3.getColumn(row, "qty"));
        	this.dsList1.set_enableevent(true);
        };

        this.pushCallback4 = function(row, col, colList, msgType, actionType, msgID)
        {
        	//trace("RCHE : " + this.dsPush4.getColumn(row, "code"));
        	this.dsList2.set_enableevent(false);
        	var r = this.dsList2.findRow("COL1", this.dsPush4.getColumn(row, "code"));
        	this.Tab00.Tabpage1.form.Grid01.blinkCell(r, 5, 3000, 1);
        	this.dsList2.setColumn(r, "COL6", this.dsPush4.getColumn(row, "qty"));
        	this.dsList2.set_enableevent(true);
        };

        this.pushCallback5 = function(row, col, colList, msgType, actionType, msgID)
        {
        	//trace("DCHE : " + this.dsPush5.getColumn(row, "code"));
        	this.dsList3.set_enableevent(false);
        	var r = this.dsList3.findRow("COL1", this.dsPush5.getColumn(row, "code"));
        	this.Tab00.Tabpage1.form.Grid02.blinkCell(r, 12, 3000, 1);
        	this.Tab00.Tabpage1.form.Grid02.blinkCell(r, 13, 3000, 1);
        	this.Tab00.Tabpage1.form.Grid02.blinkCell(r, 14, 3000, 1);
        	this.dsList3.setColumn(r, "COL13", this.dsList3.getColumn(r, "COL14"));
        	this.dsList3.setColumn(r, "COL12", this.dsPush5.getColumn(row, "qty"));
        	this.dsList3.set_enableevent(true);
        };

        this.Tab00_Tabpage1_Grid00_oncellclick = function(obj,e)
        {
        	this.dsList3.clearData();

        	this.transaction("selectDetailData", this.rootContext + "selectDetailData", "", "dsList3=output", "", "callback");
        };

        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :
        			this.dsList1.clearData();
        			this.dsList2.clearData();
        			this.dsList3.clearData();

        			this.transaction("selectMasterData", this.rootContext + "selectMasterData", "", "dsList1=output1 dsList2=output2", "", "callback");
        		break;
        	}
        };

        //=========================================================================================
        // XPush 오류코드 참고
        //=========================================================================================
        // e.action------------------------------------
        // XPushAction.AUTH (0) - connect()
        // XPushAction.BYEC (1) - disconnect()
        // XPushAction.ADDF (2) - subscribe()
        // XPushAction.DELF (3) - unsubscribe()
        // XPushAction.REQD (4) - requestMessage()
        // XPushAction.RECT (5) - sendResponse()
        // XPushAction.RGST (6) - reqisterDevice()
        // XPushAction.UNRG (7) - unreqisterDevice()
        // XPushAction.ADUI (8) - reqisterUser()
        // XPushAction.UNUI (9) - unreqisterUser()
        // XPushAction.MSGC (10) - requestMessageCount()
        // e.statuscode------------------------------------
        // -100 - Push 서버가 “Byec”를 보냈거나 서버와의 규약에 따라 종료되었습니다. (e.action이 -1임)
        // -101 - 타임아웃 처리되었습니다.
        // -200 - Command Auth Error. 현재 선택된 IP에 대해인증에 오류가 발생하였습니다.
        // -201 - iplist 속성에 등록되어 있는 Push 서버로의 접속이 모두 실패했습니다.
        // -202 - 데이터 전송 채널 인증(authentication)에 오류가 발생하였습니다.
        // -300 - 서버로의 접속에 실패했습니다.
        // -301 - 패킷 전송(send/recv) 오류가 발생하였습니다.
        // -302 - 이미 PUSH서버에 접속되어 있습니다.
        // -401 - X-PUSH 서버와 접속해제(disconnect) 요청을 실패했습니다.
        // -501 - X-PUSH 서버로부터 메시지 수신중단(suspend) 요청을 실패했습니다.
        // -601 - X-PUSH 서버로부터 메시지 수신 재시작(resume) 요청을 실패했습니다.
        // -701 - X-PUSH 서버로 topic 등록/등록해제 요청을 실패했습니다.
        // -801 - 메시지 포맷 버전 정보가 일치하지 않습니다.
        // -901 - 신뢰성 메시지에 대한 수신응답 전송에 실패했습니다.
        // -902 - 미수신 메시지 요청을 실패했습니다.
        // -1001 - X-PUSH 서버로 모바일 DeviceToken 정보 등록요청을 실패했습니다.
        // -1002 - X-PUSH 서버로 유저 topic 정보 등록요청(reqisterUser)이 실패했습니다.
        // -1003 - X-PUSH 서버로 유저 topic 정보 등록해제(unregisterUser)요청이 실패했습니다.
        // -1004 - 미수신 메시지 정보요청을 실패했습니다.
        // -1072 - 디바이스 등록(RGST)시 중복된 경우 발생. registerDevice 기등록 정상오류
        // -1092 - registerTopic 기등록 정상오류

        this.xpush_onsuccess = function(obj,e)
        {
        	switch (e.action)
        	{
        		//connect
        		case nexacro.XPushAction.AUTH:
        			this.setMessge("푸쉬 서버에 연결되었습니다.");
        		break;

        		default:
        	}
        };

        this.xpush_onerror = function(obj,e)
        {
        	this.setMessge(e.errormsg);
        };

        this.poc01_onbeforeclose = function(obj,e)
        {
        	this.xpush.disconnect();
        };

        this.setMessge = function(v)
        {
        	this.Tab00.Tabpage1.form.stcMessage.set_text(v);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.poc01_onload,this);
            this.addEventHandler("onbeforeclose",this.poc01_onbeforeclose,this);
            this.Tab00.Tabpage1.form.btnSearch.addEventHandler("onclick",this.comm_Click,this);
            this.Tab00.Tabpage1.form.Grid00.addEventHandler("oncellclick",this.Tab00_Tabpage1_Grid00_oncellclick,this);
            this.xpush.addEventHandler("onsuccess",this.xpush_onsuccess,this);
            this.xpush.addEventHandler("onerror",this.xpush_onerror,this);
        };

        this.loadIncludeScript("poc01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
