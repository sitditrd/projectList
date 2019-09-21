(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_7");
            this.set_titletext("기타");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","8","40","1263","226",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","8","40","208","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Project 종류");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none");
            obj.set_background("#f4f4f4");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","216","40","185","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","8","80","208","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Project 체계");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none");
            obj.set_background("#f4f4f4");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","216","80",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("  영업&지원 > System 개선");
            obj.set_textAlign("left");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","8","120","208","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("KPI");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none");
            obj.set_background("#f4f4f4");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","216","120","185","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","8","160","208","63",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("부서명");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none");
            obj.set_background("#f4f4f4");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","216","160","369","63",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","8","223","208","43",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("방법론");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none");
            obj.set_background("#f4f4f4");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","216","223","369","43",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,1px solid,1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","146","53","12","14",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","124","133","12","14",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            obj.getSetter("Validation").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","131","238","12","14",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Project_Type","224","49","168","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("Validation").set("Project 종류");
            var cmb_Project_Type_innerdataset = new nexacro.NormalDataset("cmb_Project_Type_innerdataset", obj);
            cmb_Project_Type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">업무 인프라 확산</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제조 경쟁력 강화</Col></Row></Rows>");
            obj.set_innerdataset(cmb_Project_Type_innerdataset);
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","401","40","184","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Project 분류");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            obj.getSetter("Validation").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","528","54","12","14",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","585","40","233","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Classification","592","48","216","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.getSetter("Validation").set("Project 분류");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_Classification_innerdataset = new nexacro.NormalDataset("cmb_Classification_innerdataset", obj);
            cmb_Classification_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">업무 인프라 확산</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제조 경쟁력 강화</Col></Row></Rows>");
            obj.set_innerdataset(cmb_Classification_innerdataset);
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","818","40","184","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Project 등급");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","945","54","12","14",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","1002","40",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Grade","1009","48","251","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.getSetter("Validation").set("Project 등급");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_Grade_innerdataset = new nexacro.NormalDataset("cmb_Grade_innerdataset", obj);
            cmb_Grade_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">업무 인프라 확산</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제조 경쟁력 강화</Col></Row></Rows>");
            obj.set_innerdataset(cmb_Grade_innerdataset);
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","401","120","184","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("BigY 1");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","585","120","233","41",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","592","127","216","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","818","120","184","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("BigY 2");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","1002","120",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04","1009","127","251","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05","225","233","88","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.getSetter("Validation").set("방법론");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo05_innerdataset = new nexacro.NormalDataset("Combo05_innerdataset", obj);
            Combo05_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">업무 인프라 확산</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제조 경쟁력 강화</Col></Row></Rows>");
            obj.set_innerdataset(Combo05_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","585","159","184","64",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("기간");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","769","159",null,"64","8",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","585","223","184","43",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Process");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,1px solid,1px solid");
            obj.set_background("#f4f4f4");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","769","223",null,"43","8",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,1px solid,1px solid");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo07","776","232","179","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new CalendarWeekDouble("CalendarWeekDouble00","786","169","191","46",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo06","224","129","168","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.getSetter("Validation").set("KPI");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo06_innerdataset = new nexacro.NormalDataset("Combo06_innerdataset", obj);
            Combo06_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">업무 인프라 확산</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제조 경쟁력 강화</Col></Row></Rows>");
            obj.set_innerdataset(Combo06_innerdataset);
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","733","50",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"275","84","22","7",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PoC_7.xfdl","lib::CommUtil.xjs");
        this.addIncludeScript("PoC_7.xfdl","lib::ext_CommEco.xjs");
        this.registerScript("PoC_7.xfdl", function() {
        this.executeIncludeScript("lib::CommUtil.xjs"); /*include "lib::CommUtil.xjs"*/;
        this.executeIncludeScript("lib::ext_CommEco.xjs"); /*include "lib::ext_CommEco.xjs"*/;

        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Save" :
        			var arrMatrix = new Array();

        			if(this.gfnValidation(this, arrMatrix))
        				alert("저장되었습니다.");
        			else
        			{
        				alert(arrMatrix.join(",\n") + "은 반드시 입력해야 합니다.");
        				arrMatrix = new Array();
        			}
        		break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.cmb_Project_Type.addEventHandler("onitemchanged",this.cmb_Project_Type_onitemchanged,this);
            this.btn_Save.addEventHandler("onclick",this.comm_Click,this);
        };

        this.loadIncludeScript("PoC_7.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
