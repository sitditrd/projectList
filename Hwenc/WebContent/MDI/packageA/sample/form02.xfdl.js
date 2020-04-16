(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form02");
            this.set_titletext("엑셀 import/export");
            this.getSetter("classname").set("Work");
            this.getSetter("inheritanceid").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"communityId\" type=\"string\" size=\"32\"/><Column id=\"contents\" type=\"string\" size=\"32\"/><Column id=\"hitCount\" type=\"string\" size=\"32\"/><Column id=\"postId\" type=\"string\" size=\"32\"/><Column id=\"regDate\" type=\"datetime\" size=\"17\"/><Column id=\"regId\" type=\"string\" size=\"32\"/><Column id=\"searchCondition\" type=\"string\" size=\"32\"/><Column id=\"searchKeyword\" type=\"string\" size=\"32\"/><Column id=\"searchUseYn\" type=\"string\" size=\"32\"/><Column id=\"title\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"52","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","89","34","5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","57",null,"444","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("no").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"112\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"communityId\"/><Cell col=\"1\" text=\"contents\"/><Cell col=\"2\" text=\"hitCount\"/><Cell col=\"3\" text=\"postId\"/><Cell col=\"4\" text=\"regDate\"/><Cell col=\"5\" text=\"regId\"/><Cell col=\"6\" text=\"title\"/></Band><Band id=\"body\"><Cell text=\"bind:communityId\"/><Cell col=\"1\" text=\"bind:contents\"/><Cell col=\"2\" text=\"bind:hitCount\"/><Cell col=\"3\" text=\"bind:postId\"/><Cell col=\"4\" text=\"bind:regDate\"/><Cell col=\"5\" text=\"bind:regId\"/><Cell col=\"6\" text=\"bind:title\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelEx","0","508","90","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("excel export");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelImport","96","508","90","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("excel import");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("form02.xfdl", function() {

        this.fnSearch = function ()
         {
         	var strSvcId    = "search";
        	var strSvcUrl   = "svcurl::selectDataListVO.do";
        	var inData      = "";
        	var outData     = "dsList=output1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	//생략가능
        	var isAsync   = true;
        	var nDataType = 0;

        	this.transaction( strSvcId , strSvcUrl , inData , outData , strArg, callBackFnc, nDataType);
        };

        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	switch(svcID)
        	{
        		case "search":
         			//trace(this.dsList.saveXML());
        			break;
        	}
        };

        this.fnImportCallback = function(importId)
        {
        	trace(this.dsList.saveXML());
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.btnExcelEx_onclick = function(obj,e)
        {
        	this.exportExcel(this.Grid00);
        };

        this.btnExcelImport_onclick = function(obj,e)
        {
        	var range = "Head=!A1:G1;Body=!A2";
        	var dataset = "dsList";
        	var onsuccess = this.fnImportCallback;
        	this.importExcel(range, dataset, onsuccess);
        };

        /**
         * 엑셀 다운로드
         * @param  {Grid} grid Grid component
         */
        this.exportExcel = function(grid, onsuccess, onprogress)
        {
            var exportFileName = (new Date()).getTime();
        	var selecttype = grid.selecttype;

            grid.set_selecttype("row");
            if (Eco.isEmpty(this.exportObj))
            {
                this.exportObj = new ExcelExportObject();

                onsuccess && this.exportObj.addEventHandler("onsuccess", this.exportObj_onsuccess, this);
                onprogress && this.exportObj.addEventHandler("onerror", this.exportObj_onprogress, this);

                this.exportObj.set_exportmessageprocess("%d [ %d / %d ]");
                this.exportObj.set_exportuitype("exportprogress");
                this.exportObj.set_exporteventtype("itemrecord");
                this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
                this.exportObj.set_exportactivemode("active");
            }
            else
            {
                this.exportObj.clear();
            }

            //var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, grid, "Sheet1!A1", "allband", "allrecord", "", "allstyle", "", "color,background,font,cellline");
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, grid, "Sheet1!A1", "allband", "allrecord", "", "allstyle", "", "","", "");

            this.exportObj.set_exportfilename(exportFileName);
            this.exportObj.set_exporturl("xeniurl::XExportImport");
            this.exportObj.exportData();

            grid.set_selecttype(selecttype);
        };

        /**
         * 엑셀 업로드
         * @param  {Grid} grid Grid component
         */
        this.importExcel = function(range, dataset, onsuccess, onerror)
        {
            if (Eco.isEmpty(this.importObj))
            {
                this.importObj = new nexacro.ExcelImportObject("Import00", this);
                this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
                onsuccess && this.importObj.addEventHandler("onsuccess", this.importObj_onsuccess, this);
                onerror && this.importObj.addEventHandler("onerror", this.importObj_onerror, this);
            }

            this.importObj.set_importurl("xeniurl::XExportImport");
            this.importObj.importData("", "[command=getsheetdata;output=outDs;" + range + "]", "[" + dataset + "=outDs]");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.btnExcelEx.addEventHandler("onclick",this.btnExcelEx_onclick,this);
            this.btnExcelImport.addEventHandler("onclick",this.btnExcelImport_onclick,this);
        };

        this.loadIncludeScript("form02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
