(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FileUpDown");
            this.set_titletext("New Form");
            this.set_border("");
            this.set_background("");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","0","470","116","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("FileDownload");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","0","89","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("FileUpload");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"91","69","30","93",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileUpload","0","127",null,"320","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_nodatatext("파일을 드래그하여 첨부 할 수 있습니다.");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\" band=\"left\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"80\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_URL\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_URL\"/><Cell col=\"3\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"91","69","30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전송");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileDownload","0","510",null,"320","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsDownload");
            obj.set_autofittype("col");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_URL\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_URL\"/><Cell col=\"3\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDonwload",null,"474","106","30","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전체 다운로드");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"474","106","30","132",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("리스트 불러오기");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"91","69","30","167",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","0","0",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            obj.set_text("넥사크로는 파일 업로드, 다운로드 처리를 Windows 탐색기에서 원하는 파일을 Drag&Drop으로 처리할 수 있습니다.");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktop",980,850,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_border("");
                p.set_background("");
                p.set_scrollbartype("autoindicator autoindicator");

                p.Static02.set_taborder("0");
                p.Static02.set_text("FileDownload");
                p.Static02.set_cssclass("sta_WF_title02");
                p.Static02.set_positionstep("0");
                p.Static02.move("0","470","116","30",null,null);

                p.Static56.set_taborder("1");
                p.Static56.set_text("FileUpload");
                p.Static56.set_cssclass("sta_WF_title02");
                p.Static56.set_positionstep("0");
                p.Static56.move("0","89","100","30",null,null);

                p.btnDel.set_taborder("2");
                p.btnDel.set_text("삭제");
                p.btnDel.set_positionstep("0");
                p.btnDel.set_cssclass("btn_WF_basic01");
                p.btnDel.move(null,"91","69","30","93",null);

                p.grdFileUpload.set_taborder("3");
                p.grdFileUpload.set_binddataset("dsUpload");
                p.grdFileUpload.set_autofittype("col");
                p.grdFileUpload.set_nodatatext("파일을 드래그하여 첨부 할 수 있습니다.");
                p.grdFileUpload.set_positionstep("0");
                p.grdFileUpload.move("0","127",null,"320","20",null);

                p.btnSave.set_taborder("4");
                p.btnSave.set_text("전송");
                p.btnSave.set_positionstep("0");
                p.btnSave.set_cssclass("btn_WF_basic01");
                p.btnSave.move(null,"91","69","30","20",null);

                p.grdFileDownload.set_taborder("5");
                p.grdFileDownload.set_binddataset("dsDownload");
                p.grdFileDownload.set_autofittype("col");
                p.grdFileDownload.set_positionstep("0");
                p.grdFileDownload.move("0","510",null,"320","20",null);

                p.btnDonwload.set_taborder("6");
                p.btnDonwload.set_text("전체 다운로드");
                p.btnDonwload.set_positionstep("0");
                p.btnDonwload.set_cssclass("btn_WF_basic01");
                p.btnDonwload.move(null,"474","106","30","20",null);

                p.btnSearch.set_taborder("7");
                p.btnSearch.set_text("리스트 불러오기");
                p.btnSearch.set_positionstep("0");
                p.btnSearch.set_cssclass("btn_WF_basic03");
                p.btnSearch.move(null,"474","106","30","132",null);

                p.btnAdd.set_taborder("8");
                p.btnAdd.set_text("추가");
                p.btnAdd.set_cssclass("btn_WF_basic01");
                p.btnAdd.move(null,"91","69","30","167",null);

                p.Static60.set_taborder("9");
                p.Static60.set_cssclass("sta_WF_box03");
                p.Static60.set_wordWrap("char");
                p.Static60.set_text("넥사크로는 파일 업로드, 다운로드 처리를 Windows 탐색기에서 원하는 파일을 Drag&Drop으로 처리할 수 있습니다.");
                p.Static60.move("0","0",null,"51","20",null);
            	}
            );
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,1050,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static60.set_text("넥사크로는 파일 업로드, 다운로드 처리를 Windows\r\n탐색기에서 원하는 파일을 Drag&Drop으로 처리할 수 있습니다.");
                p.Static60.move("20","20",null,"100","20",null);

                p.Static02.set_text("FileDownload");
                p.Static02.move("20","592","220","40",null,null);

                p.Static56.move("20","144","220","40",null,null);

                p.btnDel.move(null,"194","90","46","115",null);

                p.grdFileUpload.set_cssclass("grd_WF_FileUpload");
                p.grdFileUpload.move("20","247",null,"320","20",null);

                p.btnSave.move(null,"194","90","46","20",null);

                p.grdFileDownload.set_cssclass("grd_WF_FileDownload");
                p.grdFileDownload.move("20","697",null,"320","20",null);

                p.btnDonwload.move(null,"644","126","46","20",null);

                p.btnSearch.move(null,"644","150","46","151",null);

                p.btnAdd.move(null,"194","90","46","210",null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FileUpDown.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    대메뉴 > 소메뉴
        *  @FileName    FileUpDown.xfdl
        *  @Creator     presales
        *  @CreateDate  2019/10/16
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2019/10/16          presales                  최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        /* service url : 사용경로 지정 */
        //this.saveUrl = nexacro.getProjectPath();
        this.saveUrl = nexacro.getApplication().gvWebUrl;
        this.folderName = "fileSample";	// file directory

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * fnAddFileList : fileUpTrans객체에 파일을 추가한다.
        * @param {Array}  filelists	- 파일 리스트
        * @return : N/A
        * @example :
        */
        this.fnAddFileList = function(filelists)
        {
        	//array type virtualfile List
        	var vFile, strId;
        	var len = filelists.length;
        	for (var i = 0; i < len; i++)
        	{
        		strId = this.gfnGetUniqueId();
        		vFile = filelists[i];
        		this.fileUpTrans.addFile(strId, vFile);

        		vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.fileList_onerror, this);

        		vFile.open(null, VirtualFile.openRead);
        		vFile.getFileSize();	//return file size
        		vFile.close();
        	}
        }

        /**
        * fnUploadFile : 파일 업로드
        * @return : N/A
        * @example :
        */
        this.fnUploadFile = function()
        {
        	//file upload
        	var uploadUrl = this.saveUrl +"/service/fileUpload_postdatatest.jsp?filefolder=" + this.folderName;
        	this.fileUpTrans.upload(uploadUrl);
        }

        /**
        * fnDownloadFile : 파일 다운로드
        * @return : N/A
        * @example :
        */
        this.fnDownloadFile = function(i)
        {
        	this.fileDownTrans.clearPostDataList();

        	this.fileDownTrans.set_downloadfilename(this.dsDownload.getColumn(i, "FILE_NAME"));	//runtime 전용 프로퍼티

        	this.fileDownTrans.setPostData(
        		"filepath",
        		this.dsDownload.getColumn(i, "FILE_URL")
        	);
        	this.fileDownTrans.setPostData(
        		"filename",
        		this.dsDownload.getColumn(i, "FILE_NAME")
        	);
        	this.fileDownTrans.setPostData(
        		"filefolder",
        		"fileSample"
        	);

        	this.fileDownTrans.download(this.saveUrl + "/service/fileDownload_postdatatest.jsp");
        }


        /**
        * fnDownloadFileAll : 파일 전체 다운로드
        * @return : N/A
        * @example :
        */
        this.fnDownloadFileAll = function()
        {
        	this.fileDownTrans.clearPostDataList();

        	var arrNameList = new Array();

        	for(var i=0; i < this.dsDownload.getRowCount(); i++)
        	{
        		//fileDownload_postdatatestAll.jsp -> request.getParameter("filenamelist");
        		if(this.dsDownload.getColumn(i, "CHK") == 1)
        			arrNameList.push(this.dsDownload.getColumn(i, "FILE_NAME"));
        	}

        	this.fileDownTrans.set_downloadfilename("fileSample.zip");	//runtime 전용 프로퍼티

        // 	this.fileDownTrans.setPostData(
        // 		"filefolder",
        // 		"fileSample"
        // 	);

        	this.fileDownTrans.setPostData(
        		"filenamelist",
        		arrNameList
        	);

        	this.fileDownTrans.download(this.saveUrl + "/service/fileDownload_postdatatestAll.jsp?filefolder=" + "fileSample");
        }

        /**
        * fnGetFileSize : 파일 크기에 맞는 파일 사이즈를 표시한다.
        * @param {String}  filesize	- 파일사이즈
        * @return : N/A
        * @example :
        * https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_file(s)_size
        */
        this.fnGetFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /**
        * fnCallbackTransaction :
        * @param {String}  svcId	- 서비스 ID
        * @param {String}  errCode	- 에러코드
        * @param {String}  errMsg	- 에러메세지
        * @return : N/A
        * @example :
        */
        this.fnCallbackTransaction = function(svcId, errCode, errMsg)
        {
        	if(svcId == "list")
        	{
        		this.dsDownload.set_enableevent(false);

        		this.dsDownload.addColumn("CHK", "STRING", 255);

        		for(var i=0; i<this.dsDownload.getRowCount(); i++)
        		{
        			this.dsDownload.setColumn(i, "CHK", 0);
        			this.dsDownload.setColumn(i,"FiLE_SIZE",this.fnGetFileSize(this.dsDownload.getColumn(i,"FiLE_SIZE")));
        		}

        		this.dsDownload.set_enableevent(true);
        	}
        };


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * @description 파일 추가
        */
        this.btnAdd_onclick = function(obj,e)
        {
        	//file dialog open
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };


        /**
         * @description 파일 삭제
        */
        this.btnDel_onclick = function(obj,e)
        {
        	//selected file delete
        	var chk = this.grdFileUpload.getCellPropertyValue(0, 0, "text");
        	var length = this.dsUpload.rowcount;

        	if(chk == 1)
        	{
        		//전체삭제
        		for(var i=0; i<length; i++)
        		{
        			this.dsUpload.deleteRow((this.dsUpload.rowcount-1));

        			var objFileList = this.fileUpTrans.filelist[(this.dsUpload.rowcount-1)];		//selected file search
        			this.fileUpTrans.removeFile(objFileList);			//filelist remove
        		}
        	}
        	else
        	{
        		//단건삭제
        		var nRow = this.dsUpload.rowposition;
        		this.dsUpload.deleteRow(nRow);

        		var objFileList = this.fileUpTrans.filelist[nRow];	//selected file search
        		this.fileUpTrans.removeFile(objFileList);			//filelist remove
        	}
        };


        /**
         * @description 파일 전송
        */
        this.btnSave_onclick = function(obj,e)
        {
        	//file upload 실행
        	this.setWaitCursor(true);
        	this.fnUploadFile();
        };

        /**
         * @description 리스트 불러오기
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	//search attach file list
        	this.transaction("list", this.saveUrl + "/service/fileDownload_servlet_list_XML.jsp", "", "dsDownload=dsList", "filefolder="+this.folderName, "fnCallbackTransaction", "false", "0")
        };


        /**
         * @description 전체 다운로드
        */
        this.btnDonwload_onclick = function(obj,e)
        {
        	if(this.dsDownload.getCaseCount("CHK == '1'") < 1)
        	{
        		alert("반드시 항목 1개를 선택해야 합니다.");
        	}
        	else
        	{
        		if(this.dsDownload.getCaseCount("CHK == '1'") > 1)
        		{
        			this.fnDownloadFileAll();
        		}
        		else
        		{
        			var nRow = this.dsDownload.filterRow("CHK", 1);
        			this.fnDownloadFile(nRow);
        		}
        	}
        };

        /**
         * @description 파일업로드 그리드 셀 더블클릭 이벤트
        */
        this.grdFileUpload_oncelldblclick = function(obj,e)
        {

        };

        /**
         * @description 파일업로드 그리드 마우스 드랍 이벤트
        */
        this.grdFileUpload_ondrop = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		this.fnAddFileList(e.filelist);
        	}
        };


        /**
         * @description 파일업로드 전체선택 이벤트
        */
        this.grdFileUpload_onheadclick = function(obj,e)
        {
        	if(e.col == 0)
        	{
        		var chk = obj.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 0)
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);

        			for(var i=0; i<this.dsUpload.rowcount; i++)
        			{
        				this.dsUpload.setColumn(i, "CHK", 1);
        			}
        		}
        		else
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);

        			for(var i=0; i<this.dsUpload.rowcount; i++)
        			{
        				this.dsUpload.setColumn(i, "CHK", 0);
        			}
        		}
        	}
        };


        /**
         * @description 파일다운로드 닫았을 때 이벤트
        */
        this.fileDialog_onclose = function(obj,e)
        {
        	this.fnAddFileList(e.virtualfiles);
        	//this.grdFileUpload.setFocus();
        };

        /**
         * @description 파일추가 성공
        */
        this.fileList_onsuccess = function(obj, e)
        {
        	//getFileSize() call --> reason : 9
        	if (e.reason == 9)
        	{
        		var nRowIdx = this.dsUpload.addRow();
        		this.dsUpload.setColumn(nRowIdx, "FILE_NAME", obj.filename);
        		this.dsUpload.setColumn(nRowIdx, "FiLE_SIZE", this.fnGetFileSize(e.filesize));
        		this.dsUpload.setColumn(nRowIdx, "FILE_URL", obj.fullpath);
        	}
        }

        /**
         * @description 파일추가 실패
        */
        this.fileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        /**
         * @description 업로드 성공
        */
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	this.setWaitCursor(false);
        	var objCallDs = e.datasets[0];

        	for(var i=0; i<objCallDs.getRowCount(); i++)
        	{
        		this.dsUpload.setColumn(i, "FILE_URL",objCallDs.getColumn(i,"savePath"));
        	}

        	alert("전송완료");
        };


        /**
         * @description 업로드 실패
        */
        this.fileUpTrans_onerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	alert(e.errortype + ">>" + e.errormsg);
        };


        /**
         * @description 다운로드 그리드 전체체크
        */
        this.grdFileDownload_onheadclick = function(obj,e)
        {
        	if(e.col == 0)
        	{
        		var chk = obj.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 0)
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);

        			for(var i=0; i<this.dsDownload.rowcount; i++)
        			{
        				this.dsDownload.setColumn(i, "CHK", 1);
        			}
        		}
        		else
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);

        			for(var i=0; i<this.dsDownload.rowcount; i++)
        			{
        				this.dsDownload.setColumn(i, "CHK", 0);
        			}
        		}
        	}
        };

        /**
         * @description 다운로드 그리드 파일 다운로드
        */
        this.grdFileDownload_oncelldblclick = function(obj,e)
        {
        	this.fnDownloadFile(e.row);
        };

        /**
         * @description 다운로드 성공
        */
        this.fileDownTrans_onsuccess = function(obj,e)
        {
        	trace(e.targetfullpath);
        };

        /**
         * @description 다운로드 실패
        */
        this.fileDownTrans_onerror = function(obj,e)
        {
        	trace("error : " + e.errormsg);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.grdFileUpload.addEventHandler("oncelldblclick",this.grdFileUpload_oncelldblclick,this);
            this.grdFileUpload.addEventHandler("ondrop",this.grdFileUpload_ondrop,this);
            this.grdFileUpload.addEventHandler("onheadclick",this.grdFileUpload_onheadclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.grdFileDownload.addEventHandler("oncelldblclick",this.grdFileDownload_oncelldblclick,this);
            this.grdFileDownload.addEventHandler("onheadclick",this.grdFileDownload_onheadclick,this);
            this.btnDonwload.addEventHandler("onclick",this.btnDonwload_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onerror",this.fileDownTrans_onerror,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
        };

        this.loadIncludeScript("FileUpDown.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
