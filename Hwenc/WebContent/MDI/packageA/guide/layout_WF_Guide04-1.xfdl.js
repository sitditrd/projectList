(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("layout_WF_Guide01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static07","0","18",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","19","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","56",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","94",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","57","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","95","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","149",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_InputBgT");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","150","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","187",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","0","225",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0","188","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","0","226","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","620","150","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","620","188","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","620","226","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","282",null,"29","1",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","283","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","0","320",null,"29","1",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","358",null,"29","1",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0","321","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","0","359","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","412","283","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","412","321","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","412","359","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","825","359","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","825","321","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","825","283","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","410",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","0","411","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","0","448",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","486",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","0","449","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","0","487","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","310","411","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","310","449","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","310","487","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","620","487","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","620","449","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","620","411","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","930","411","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","930","449","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","930","487","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","0","548",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","0","549","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","0","586",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","0","624",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","0","587","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","0","625","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","248","549","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","248","587","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","248","625","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","496","625","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","496","587","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","496","549","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","744","549","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","744","587","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","744","625","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","992","549","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","992","587","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","992","625","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1240,818,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static07.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static10.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static11.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static12.addEventHandler("onclick",this.Static12_onclick,this);
            this.Static17.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static20.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static21.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static30.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static33.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static46.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static49.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static50.addEventHandler("onclick",this.Static07_onclick,this);
        };

        this.loadIncludeScript("layout_WF_Guide04-1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
