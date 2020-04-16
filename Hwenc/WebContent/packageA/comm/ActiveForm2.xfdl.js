(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ActiveForm2");
            this.set_titletext("Static 동적생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1263,86);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","4","0",null,"86","-4",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("beige");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static81","0","1","112","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static82","112","1","40","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static83","152","1","352","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("기타항목");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static84","354","15","12","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static85","503","1","192","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("현수준");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static86","619","16","12","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static87","817","16","12","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static88","695","1","192","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("목표수준");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static89","887","1","192","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("실적");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static90","1079","1",null,"42","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("달성율");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static91","0","43","112","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static92","112","43","40","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","125","55","15","17",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("CheckBox00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static93","152","43","352","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static94","503","43","191","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static95","695","43","193","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static96","887","43","194","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static97","1079","43",null,"42","-1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","162","51","333","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit04","516","51","172","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit05","705","51","173","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit06","896","51","174","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit09","1088","51",null,"27","9",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1263,86,this,function(p){});
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

        };

        this.loadIncludeScript("ActiveForm2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
