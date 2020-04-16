(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("left");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(160,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLeftMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","160",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_LF_bg01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","160","135",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LF_pic");
            obj.set_text("Kim Han Kook");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","134","54","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LF_icon01");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","53","134","54","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_LF_icon02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","106","134","54","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_LF_icon03");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",160,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("left.xfdl", function() {
        this.item_width, this.item_height = 31;
        this.interval_count = 0, this.interval_id;
        this.target_group, this.expanded_group;
        this.decrease, this.increase;

        this.left_onload = function(obj,e)
        {
        	this.createMenu();
        };

        this.createMenu = function()
        {
        	nexacro.getApplication().gdsMenu.filter("");
        	this.dsLeftMenu.copyData(nexacro.getApplication().gdsMenu);

        	this.item_width = this.getOffsetWidth() - 1;
        	var i, j, target_fn, menuId, menuNm, menu_item, menu_group, group_count = 0, item_count = 0, ds = this.dsLeftMenu;
        	var firstMenu;

        	for (i = 0, count = ds.rowcount; i < count; i++)
        	{
        		if (ds.getColumn(i, 'menuLvl') < 1)
        		{
        			item_count = 0;
        			menu_group = new Div();
        			menu_group.init('group'+group_count, 0, (169 + this.item_height*group_count), this.item_width, this.item_height);
        			menu_group.form.set_scrollbartype("none");
        			menu_group._index = group_count++;
        			menu_group.menuId = ds.getColumn(i, 'menuId');
        			this.addChild(menu_group.name, menu_group);
        			menu_group.show();
        		}
        		menu_item = new Button();
        		menuId = ds.getColumn(i, 'menuId');
        		menuNm = ds.getColumn(i, 'menuNm');
        		menu_item.init('menu'+menuId, 0, (this.item_height*item_count), this.item_width, this.item_height - 1);
        		menu_item.menuId = menuId;
        		menu_item.set_text(menuNm);
        		menu_item.set_cssclass('btn_LF_menu_sub');

        		target_fn = function(obj, e) {
        			this.parent.parent && this.parent.parent.gfnOpenMenu(obj.menuId);
        		};

        		if(item_count == 0){
        			menu_item.set_cssclass('btn_LF_menu');
        			target_fn = function(obj, e) {
        				this.target_group = obj.parent.parent;
        				this.expanded_group = this._expanded_group;
        				this.decrease = this.expanded_group ? this.expanded_group._item_count*this.item_height / 10 : 0;
        				this.increase = this.target_group._item_count*this.item_height / 10;
        				this.interval_id = this.setTimer();
        			};
        		}
        		menu_item.addEventHandler("onclick", target_fn, this);
        		menu_group._item_count = item_count++;
        		menu_group.addChild(menu_item.name, menu_item);
        		menu_item.show();

        		if (!firstMenu)
        		{
        			firstMenu = menu_item;
        		}
        	}

        	this._group_count = group_count;
        	this._expanded_group = null;
        	this.set_scrolltype("none");

        	firstMenu && firstMenu.click();
        };

        this.setMenu = function(menuId, menuNm)
        {
        	for(j = 0, count = this._group_count; j < count; j++)
        	{
        		if (this['group'+j].menuId == menuId)
        		{
        			this['group'+j].form.components['menu'+menuId].click();
        			break;
        		}
        	}
        };

        this.left_ontimer = function(obj,e)
        {
        	var i, tmp_g, gap = 0;
        	this.expanded_group = this._expanded_group;
        	if(this.expanded_group == this.target_group){
        		this.expanded_group.set_height(this.expanded_group.height-this.decrease);
        		for(i = this.expanded_group._index, gcount = this._group_count; i < gcount; i++){
        			gap = 0, tmp_g = this['group'+i];
        			if(this.expanded_group && tmp_g._index > this.expanded_group._index)
        			{
        				gap -= this.decrease;
        			}
        			tmp_g.set_top(tmp_g.top + gap);
        		}
        	}else{
        		this.expanded_group && this.expanded_group.set_height(this.expanded_group.height-this.decrease);
        		for(i = 0, gcount = this._group_count; i < gcount; i++){
        			gap = 0, tmp_g = this['group'+i];
        			if(this.expanded_group && tmp_g._index > this.expanded_group._index)
        			{
        				gap -= this.decrease;
        			}
        			if(tmp_g._index > this.target_group._index)
        			{
        				gap += this.increase;
        			}
        			tmp_g.set_top(tmp_g.top + gap);
        		}
        		this.target_group.set_height(this.target_group.height+this.increase);
        	}

        	if(++this.interval_count > 9){
        		this.killTimer(this.interval_id);
        		this.interval_count = 0;
        		this._expanded_group = this.expanded_group == this.target_group ? null : this.target_group;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.left_onload,this);
            this.addEventHandler("ontimer",this.left_ontimer,this);
        };

        this.loadIncludeScript("left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
