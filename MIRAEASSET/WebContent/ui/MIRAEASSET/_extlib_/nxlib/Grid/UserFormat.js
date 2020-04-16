/**
 * @fileoverview 그리드 포맷 저장 기능 라이브러리
 */

/**
 * 해당 Grid의 저장된 포맷 로드
 * @param {Form} form Form Object
 * @param {Grid} grid Grid object
 * @return N/A
 * @memberOf nxlib.grid
 */
nxlib.grid.initGridUserFormat = function(form, grid)
{
    // 대상이 이미 초기화 되었는지 확인
    if (grid.initGridUserFormat) return;

    grid.originFormat = grid.getCurFormatString();
    var savedFormatId = nxlib.grid.getPathName(grid, form);
    var savedFormats = application.getPrivateProfile(savedFormatId);

    if (!nexacro._isUndefined(savedFormats))
    {
        // 정렬 기능 사용 시 정렬 마크 제거
        if (nxlib.grid.useSort)
        {
            grid.set_formats(("<Formats>" + savedFormats + "</Formats>").replace(nxlib.grid.MARKER[0], "").replace(nxlib.grid.MARKER[1], ""));
        }
        else
        {
            grid.set_formats("<Formats>" + savedFormats + "</Formats>");
        }
    }

    // 컬럼 숨기기 기능 사용 시 숨겨진 컬럼 정보도 로드
    if (nxlib.grid.useColumnHiding)
    {
        var savedHidingInfoId = savedFormatId + "ColumnHidingInfo";
        var hidingInfos = application.getPrivateProfile(savedHidingInfoId);

        if (!Eco.isEmpty(hidingInfos) && hidingInfos != "undefined")
        {

            nxlib.grid.setHidingInfos(grid, hidingInfos);
        }
    }

    var ds = form.gridRClickDataset; // 우클릭 메뉴 데이터셋
    var row = -1;

    if (ds)
    {
        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "userFormat");
        ds.setColumn(row, "id", "saveUserFormat");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "현재 포맷 저장");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "userFormat");
        ds.setColumn(row, "id", "removeUserFormat");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "포맷 원복");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "");
        ds.setColumn(row, "id", "separatorUserFormat");
        ds.setColumn(row, "level", "");
        ds.setColumn(row, "caption", "-");
        ds.setColumn(row, "enable", "false");
    }

    grid.initGridUserFormat = true;
}

/**
 * 해당 Grid의 포맷 저장
 * @param {Form} form Form Object
 * @param {Grid} grid Grid object
 * @return {boolean} 실행 결과
 * @memberOf nxlib.grid
 */
nxlib.grid.saveGridUserFormat = function(form, grid)
{
    var savedFormatId = nxlib.grid.getPathName(grid, form);

    // 컬럼 숨기기 기능 사용 시 숨겨진 컬럼 정보도 저장
    if (nxlib.grid.useColumnHiding)
    {
        var savedHidingInfoId = savedFormatId + "ColumnHidingInfo";
        var hidingInfos = nxlib.grid.getHidingInfos(grid);

        application.setPrivateProfile(savedHidingInfoId, hidingInfos);
    }

    return application.setPrivateProfile(savedFormatId, grid.getCurFormatString());
}

/**
 * 해당 Grid의 저장된 포맷 삭제
 * @param {Form} form Form Object
 * @param {Grid} grid Grid object
 * @return {boolean} 실행 결과
 * @memberOf nxlib.grid
 */
nxlib.grid.removeGridUserFormat = function(form, grid)
{
    var savedFormatId = nxlib.grid.getPathName(grid, form);

    // 컬럼 숨기기 기능 사용 시 컬럼 전체 표시 호출
    if (nxlib.grid.useColumnHiding)
    {
        nxlib.grid.showGridColumnAll(grid);
        var savedHidingInfoId = savedFormatId + "ColumnHidingInfo";
        application.setPrivateProfile(savedHidingInfoId, "");
        grid._hidingInfos = [];
    }

    grid.set_formats("<Formats>" + grid.originFormat + "</Formats>");
    return application.setPrivateProfile(savedFormatId, "");
}

/**
 * ChildFrame에 속한 계층 위치의 정보까지 명칭으로 얻는다.
 * @param {XComp} obj nexacro component.
 * @param {XComp=} refParent 계층 구조에서 중단할 상위 nexacro component
 * @return {string} obj 계층 구조의 명칭(xpform_Div00_Button01)
 * @memberOf nxlib.grid
 */
nxlib.grid.getPathName = function(obj, refParent)
{
    var c = obj,
        arr = [];
    while (c)
    {
        if (c instanceof ChildFrame) break;
        //if (refParent && c === refParent) break;
        arr.push(c.name);
        c = c.parent;
    }
    arr = arr.reverse();
    return arr.join("_");
}

nxlib.grid.useUserFormat = true;