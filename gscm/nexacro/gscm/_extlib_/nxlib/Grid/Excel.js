/**
 * @fileoverview 그리드 엑셀 연계 기능 라이브러리
 */

/**
 * Grid head에 filer 기능 추가하기 초기화
 * @param {Form} form Form Object
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.initGridExcel = function(form, grid)
{
    // 대상이 이미 초기화 되었는지 확인
    if (grid.initGridExcel) return;

    /*
     * 1. head = 시트명  뿌릴 헤드값 A1 ~ G1
     * 2. body = 그리드 body에 뿌릴 excel sheet 번호
     */
    grid.importRange = "head=sheet1!A1:G1;body=sheet1!A2;";

    /*
     * 출력할 dataset 명
     */
    grid.importDataset = "dsList";

    grid.pForm = form;

    var ds = form.gridRClickDataset; // 우클릭 메뉴 데이터셋
    var row = -1;

    if (!Eco.isEmpty(ds))
    {
        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "excel");
        ds.setColumn(row, "id", "exportExcel");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "엑셀 다운로드");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "excel");
        ds.setColumn(row, "id", "importExcel");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "엑셀 업로드");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "");
        ds.setColumn(row, "id", "separatorExcel");
        ds.setColumn(row, "level", "");
        ds.setColumn(row, "caption", "-");
        ds.setColumn(row, "enable", "false");
    }

    grid.initGridExcel = true;
}

/**
 * 엑셀 다운로드
 * @param  {Grid} grid Grid component
 */
nxlib.grid.exportExcel = function(form, grid)
{
    var exportFileName = (new Date()).getTime();

    grid.set_selecttype("row");
    if (Eco.isEmpty(form.exportObj))
    {
        form.exportObj = new ExcelExportObject();

        form.exportObj.addEventHandler("onsuccess", nxlib.grid.exportObj_onsuccess, form);
        form.exportObj.addEventHandler("onerror", nxlib.grid.exportObj_onprogress, form);

        form.exportObj.set_exportmessageprocess("%d [ %d / %d ]");
        form.exportObj.set_exportuitype("exportprogress");
        form.exportObj.set_exporteventtype("itemrecord");
        form.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        form.exportObj.set_exportactivemode("active");
    }
    else
    {
        form.exportObj.clear();
    }

    var ret = form.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, grid, "Sheet1!A1", "allband", "allrecord", "", "allstyle", "", "color,background,font");
    //var ret = form.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, grid, "Sheet1!A1", "allband", "allrecord", "", "allstyle", "", "","", "cellline");

    form.exportObj.set_exportfilename(exportFileName);
    form.exportObj.set_exporturl("xeniurl::XExportImport");
    form.exportObj.exportData();
    grid.set_selecttype("area");
}

/**
 * 엑셀 다운로드 성공 시 이벤트
 * @param {object} obj ExcelExportObject
 * @param {object} e nexacro.ExcelExportEventInfo
 */
nxlib.grid.exportObj_onsuccess = function(obj, e)
{
    //trace("nxlib.grid.exportObj_onsuccess");
}

/**
 * 엑셀 다운로드 에러 발생 시 이벤트
 * @param {object} obj ExcelExportObject
 * @param {object} e nexacro.ExcelExportEventInfo
 */
nxlib.grid.exportObj_onprogress = function(obj, e)
{
    //trace("nxlib.grid.exportObj_onprogress");
}

/**
 * 엑셀 업로드
 * @param  {Grid} grid Grid component
 */
nxlib.grid.importExcel = function(form, grid)
{
    if (form.importObj == null)
    {
        form.importObj = new nexacro.ExcelImportObject("Import00", form);
        form.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        form.importObj.addEventHandler("onsuccess", nxlib.grid.importObj_onsuccess, form);
        form.importObj.addEventHandler("onerror", nxlib.grid.importObj_onerror, form);
    }

    form.importObj.set_importurl("xeniurl::XExportImport");
    form.importObj.importData("", "[command=getsheetdata;output=outDs;" + grid.importRange + "]", "[" + grid.importDataset + "=outDs]");
}

/**
 * 엑셀 업로드 성공 시 이벤트
 * @param {object} obj ExcelExportObject
 * @param {object} e nexacro.ExcelExportEventInfo
 */
nxlib.grid.importObj_onsuccess = function(obj, e)
{
    //trace("nxlib.grid.importObj_onsuccess");
    //  trace("\n"+this.successcount+"=========== onsuccess event start============");
    //  trace("\ne.eventid: " + e.eventid);
    //  trace("\ne.fromobject: " + e.fromobject);
    //  trace("\ne.fromreferenceobject: " + e.fromreferenceobject);
    //  trace("\ne.url: " +  e.url);
    //  trace("import success");
}

/**
 * 엑셀 업로드 에러 발생 시 이벤트
 * @param {object} obj ExcelExportObject
 * @param {object} e nexacro.ExcelExportEventInfo
 */
nxlib.grid.importObj_onerror = function(obj, e)
{
    //trace("nxlib.grid.importObj_onerror");
    //trace("Import00_onerror "+e.errormsg+"::"+e.eventid+"::"+e.errortype);
}

/**
 * import 범위를 지정한다.
 * @param {Grid} grid Grid component
 * @param {string} head 시트명  뿌릴 헤드값 A1 ~ G1
 * @param {string} body 그리드 body에 뿌릴 excel sheet 번호
 */
nxlib.grid.setImportRange = function(grid, head, body)
{
    grid.importRange = "head=" + head + ";body=" + body + ";";
}

/**
 * import할 데이타셋 명 지정
 * @param {Grid} grid Grid component
 * @param {string} name 데이타셋 이름
 */
nxlib.grid.setImportDataset = function(grid, name)
{
    grid.importDataset = name;
}

nxlib.grid.useExcel = true;