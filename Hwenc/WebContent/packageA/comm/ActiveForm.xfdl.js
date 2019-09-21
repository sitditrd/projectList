(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ActiveForm");
            this.set_titletext("Staic 동적생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1263,88);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","1",null,"86","-1",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("beige");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","0","0","112","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static65","112","0","40","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66","152","0","352","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("필수항목");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static67","354","14","12","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static68","503","0","192","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("현수준");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static69","619","15","12","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static71","695","0","192","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("목표수준");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static73","887","0","192","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("실적");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static75","1079","0",null,"42","1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("달성율");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static72","0","42","112","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static74","112","42","40","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","125","54","15","17",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("CheckBox00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static76","152","42","351","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static77","503","42","192","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static78","695","42","193","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static79","887","42","194","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static80","1079","42",null,"42","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","162","51","334","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","513","51","172","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","704","51","174","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit07","896","51","174","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit08","1088","51",null,"27","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static70","817","15","12","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1263,88,this,function(p){});
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

        this.loadIncludeScript("ActiveForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
