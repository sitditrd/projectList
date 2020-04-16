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
            obj = new Static("Static33","265","95",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","265","133",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0","255",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("silver");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","311","134","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("232");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","311","96","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","265","57",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","311","58","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","265","67","46","85",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("가나\r\n다라\r\n마바\r\n사");
            obj.set_cssclass("sta_WF_InputBtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","265","223",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","265","261",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","311","262","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","311","224","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","265","185",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","311","186","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","265","195","46","85",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("가나\r\n다라\r\n마바\r\n사");
            obj.set_cssclass("sta_WF_InputBtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","775","262","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","775","224","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","775","186","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","265","479",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","265","517",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","311","518","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","311","480","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","265","441",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","311","442","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","265","451","46","85",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("가나\r\n다라\r\n마바\r\n사");
            obj.set_cssclass("sta_WF_InputBtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","543","442","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","543","480","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","543","518","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","775","518","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","775","480","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","775","442","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","1007","442","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","1007","480","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","1007","518","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","265","351",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","265","389",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","311","390","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("310");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","311","352","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","265","313",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","311","314","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","265","323","46","85",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("가나\r\n다라\r\n마바\r\n사");
            obj.set_cssclass("sta_WF_InputBtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","622","390","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","622","352","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","622","314","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","931","314","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","931","352","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","931","390","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("46");
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
            this.Static33.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static48.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static12.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static13.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static16.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static29.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static30.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static37.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static04.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static07.addEventHandler("onclick",this.Static07_onclick,this);
        };

        this.loadIncludeScript("layout_WF_Guide02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
