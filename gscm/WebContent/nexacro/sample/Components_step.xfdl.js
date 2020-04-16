(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("component_step");
            this.set_titletext("Step Pop");
            if (Form == this.constructor)
            {
                this._setFormPosition(184,155);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_positionstep("1");
            obj.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_positionstep("2");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Components_step.xfdl", function() {
        this.elapseTime = 3000;

        this.component_step_onload = function (obj, e)
        {
        	this.Static00.set_background('url("imagerc::img_cp_step01.png") no-repeat left top');
        	this.Static01.set_background('url("imagerc::img_cp_step02.png") no-repeat left top');
        	this.Static02.set_background('url("imagerc::img_cp_step03.png") no-repeat left top');

        	this.setTimer(0, this.elapseTime);
        };

        this.component_step_onstepchanged = function (obj, e)
        {
        	this.killTimer(0);
        	this.setTimer(0, this.elapseTime);
        };

        this.component_step_ontimer = function (obj, e)
        {
        	if (e.timerid == 0) {
        		//this.stepcontrol.stepIt(true, true); -> 17에서는 stepcontrol 대신 stepselector를 쓴다.
        		this.stepselector.stepIt(true, true);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.component_step_onload,this);
            this.addEventHandler("onstepchanged",this.component_step_onstepchanged,this);
            this.addEventHandler("ontimer",this.component_step_ontimer,this);
        };

        this.loadIncludeScript("Components_step.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
