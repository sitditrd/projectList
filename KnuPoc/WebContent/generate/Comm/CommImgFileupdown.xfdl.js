(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CommImgFileupdown");
            this.set_titletext("이미지미리보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(134,174);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"prog\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filetype\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"tranfilesize\" type=\"INT\" size=\"256\"/><Column id=\"prog\" type=\"INT\" size=\"256\"/><Column id=\"rmimg\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"filekey\" type=\"STRING\" size=\"256\"/><Column id=\"downcnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"city\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">홍길동</Col><Col id=\"city\">seoul</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","171","-1","458","248",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#f4f8fc");
            obj.set_border("1px solid #bad3ec");
            obj.set_borderRadius("10px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","171","252","458","248",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#f4f8fc");
            obj.set_border("1px solid #bad3ec");
            obj.set_borderRadius("10px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUpload","188","47","424","169",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_borderRadius("5px");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"292\"/><Column size=\"80\"/></Columns><Rows><Row size=\"34\"/><Row size=\"34\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:fileimg\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:filename\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:rmimg\" displaytype=\"imagecontrol\"/><Cell row=\"1\" col=\"1\" text=\"expr:(prog &lt; 100)?((prog &lt; 0)?'Error!':prog + '%'):'완료'\" displaytype=\"expr:(prog &lt; 100)?((prog &lt; 0)?'normal':'progressbarcontrol'):'normal'\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"48\"/><Column size=\"362\"/><Column size=\"48\"/></Columns><Rows><Row size=\"48\"/></Rows><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"bind:fileimg\"/><Cell col=\"1\" text=\"expr:comp.parent.parent.getFileNameWithSize(dataset, currow)\"/><Cell col=\"2\" text=\"bind:rmimg\" displaytype=\"imagecontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","345","11","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#1abd9c");
            obj.set_font("bold 10px \"antialias\"");
            obj.set_color("#ffffff");
            obj.set_icon("URL(\"theme://images/file_btn_AddFiles.png\")");
            obj.set_iconPosition("left");
            obj.set_textPadding("0px 0px 0px 10px");
            obj.set_text("Add Files");
            obj.set_borderRadius("5px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","443","11","92","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#eb707e");
            obj.set_font("bold 10px \"antialias\"");
            obj.set_color("#ffffff");
            obj.set_icon("URL(\"theme://images/file_btn_DeleteAll.png\")");
            obj.set_iconPosition("left");
            obj.set_textPadding("0px 0px 0px 10px");
            obj.set_text("Delete All");
            obj.set_borderRadius("5px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","543","11","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#298ae1");
            obj.set_font("bold 10px \"antialias\"");
            obj.set_color("#ffffff");
            obj.set_icon("URL(\"theme://images/file_btn_Save.png\")");
            obj.set_iconPosition("left");
            obj.set_textPadding("0px 0px 0px 10px");
            obj.set_text("Save");
            obj.set_borderRadius("5px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staHelpMessage_bak","194","52","413","159",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_border("1px dashed #aac9e7");
            obj.set_borderRadius("10px");
            obj.set_text("마우스로 파일을 끌어오세요");
            obj.set_color("#8e8e8e");
            obj.set_font("14px/normal \"돋움\"");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgLoading","639","0","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("URL(\"theme://images/loading.gif\")");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDownload","188","268","424","216",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_borderRadius("5px");
            obj.set_binddataset("dsDownload");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"292\"/></Columns><Rows><Row size=\"34\"/><Row size=\"34\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:fileimg\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:filename\"/><Cell row=\"1\" col=\"1\" text=\"expr:(prog &lt; 100)?((prog &lt; 0)?'Error!':prog + '%'):'완료'\" displaytype=\"expr:(prog &lt; 100)?((prog &lt; 0)?'normal':'progressbarcontrol'):'normal'\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"48\"/><Column size=\"362\"/></Columns><Rows><Row size=\"48\"/></Rows><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"bind:fileimg\"/><Cell col=\"1\" text=\"bind:filename\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","0","163","226",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("0px none");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("staHelpMessage","0","0","163","226",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사진을\r\n끌어오세요.");
            obj.set_textAlign("center");
            obj.set_border("2px dashed");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",134,174,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("이미지미리보기");

                p.sta00.set_taborder("0");
                p.sta00.set_background("#f4f8fc");
                p.sta00.set_border("1px solid #bad3ec");
                p.sta00.set_borderRadius("10px");
                p.sta00.set_visible("false");
                p.sta00.move("171","-1","458","248",null,null);

                p.sta01.set_taborder("1");
                p.sta01.set_background("#f4f8fc");
                p.sta01.set_border("1px solid #bad3ec");
                p.sta01.set_borderRadius("10px");
                p.sta01.set_visible("false");
                p.sta01.move("171","252","458","248",null,null);

                p.grdUpload.set_taborder("7");
                p.grdUpload.set_borderRadius("5px");
                p.grdUpload.set_binddataset("dsUpload");
                p.grdUpload.set_autofittype("col");
                p.grdUpload.set_visible("false");
                p.grdUpload.move("188","47","424","169",null,null);

                p.btn00.set_taborder("4");
                p.btn00.set_background("#1abd9c");
                p.btn00.set_font("bold 10px \"antialias\"");
                p.btn00.set_color("#ffffff");
                p.btn00.set_icon("URL(\"theme://images/file_btn_AddFiles.png\")");
                p.btn00.set_iconPosition("left");
                p.btn00.set_textPadding("0px 0px 0px 10px");
                p.btn00.set_text("Add Files");
                p.btn00.set_borderRadius("5px");
                p.btn00.set_visible("false");
                p.btn00.move("345","11","90","25",null,null);

                p.btn01.set_taborder("5");
                p.btn01.set_background("#eb707e");
                p.btn01.set_font("bold 10px \"antialias\"");
                p.btn01.set_color("#ffffff");
                p.btn01.set_icon("URL(\"theme://images/file_btn_DeleteAll.png\")");
                p.btn01.set_iconPosition("left");
                p.btn01.set_textPadding("0px 0px 0px 10px");
                p.btn01.set_text("Delete All");
                p.btn01.set_borderRadius("5px");
                p.btn01.set_visible("false");
                p.btn01.move("443","11","92","25",null,null);

                p.btn02.set_taborder("6");
                p.btn02.set_background("#298ae1");
                p.btn02.set_font("bold 10px \"antialias\"");
                p.btn02.set_color("#ffffff");
                p.btn02.set_icon("URL(\"theme://images/file_btn_Save.png\")");
                p.btn02.set_iconPosition("left");
                p.btn02.set_textPadding("0px 0px 0px 10px");
                p.btn02.set_text("Save");
                p.btn02.set_borderRadius("5px");
                p.btn02.set_visible("false");
                p.btn02.move("543","11","70","25",null,null);

                p.staHelpMessage_bak.set_taborder("2");
                p.staHelpMessage_bak.set_background("#ffffff");
                p.staHelpMessage_bak.set_border("1px dashed #aac9e7");
                p.staHelpMessage_bak.set_borderRadius("10px");
                p.staHelpMessage_bak.set_text("마우스로 파일을 끌어오세요");
                p.staHelpMessage_bak.set_color("#8e8e8e");
                p.staHelpMessage_bak.set_font("14px/normal \"돋움\"");
                p.staHelpMessage_bak.set_textAlign("center");
                p.staHelpMessage_bak.set_visible("false");
                p.staHelpMessage_bak.move("194","52","413","159",null,null);

                p.imgLoading.set_taborder("3");
                p.imgLoading.set_background("URL(\"theme://images/loading.gif\")");
                p.imgLoading.set_visible("false");
                p.imgLoading.move("639","0","200","60",null,null);

                p.grdDownload.set_taborder("8");
                p.grdDownload.set_borderRadius("5px");
                p.grdDownload.set_binddataset("dsDownload");
                p.grdDownload.set_autofittype("col");
                p.grdDownload.set_visible("false");
                p.grdDownload.move("188","268","424","216",null,null);

                p.ImageViewer00.set_taborder("10");
                p.ImageViewer00.set_border("0px none");
                p.ImageViewer00.set_stretch("fit");
                p.ImageViewer00.move("0","0","163","226",null,null);

                p.staHelpMessage.set_taborder("9");
                p.staHelpMessage.set_text("사진을\r\n끌어오세요.");
                p.staHelpMessage.set_textAlign("center");
                p.staHelpMessage.set_border("2px dashed");
                p.staHelpMessage.set_background("transparent");
                p.staHelpMessage.move("0","0","163","226",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",460,200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta01.move("630","252","458","248",null,null);

                p.grdDownload.move("647","268","424","216",null,null);

                p.sta00.move("630","-1","458","248",null,null);

                p.grdUpload.move("647","47","424","169",null,null);

                p.btn00.move("804","11","90","25",null,null);

                p.btn01.move("901","11","92","25",null,null);

                p.btn02.move("998","11","70","25",null,null);

                p.staHelpMessage_bak.move("653","52","413","159",null,null);

                p.staHelpMessage.move("0","0",null,"200","0",null);

                p.ImageViewer00.move("0","0",null,"200","0",null);
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
        this.registerScript("CommImgFileupdown.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    샘플 > 파일 업/다운로드
        *  @FileName 	sampleFileUpDownloadForHTML5.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.11.16
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.11.16     	consulting 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fileConfig = {};
        this.gds_stuInfo = nexacro.getApplication().gds_stuInfo;
        //아이콘별 확장자 목록.
        this.iconInfo = {
        		file_icon_ZIP: ["zip","rar","7z"],
        		file_icon_IMG: ["jpg", "jpeg", "gif", "png", "bmp"],
        		file_icon_TXT: ["txt", "xml"],
        		file_icon_DOC: ["doc", "docx"],
        		file_icon_XLS: ["xls", "xlsx"],
        		file_icon_PPT: ["ppt", "pptx"],
        		file_icon_PDF: ["pdf"],
        		file_icon_ETC: ["etc"] //위 확장자 목록에 일치하지 않을 경우. default icon
        	};

        //확장자별 아이콘 정보
        this.extToIcon = {};

        //XHR2 진행처리용
        this.tranFiles = {
        	added : [],				// 업로드 파일 정보
        	downloaded : [],		// 다운로드 파일 정보
        	transferFileSize : 0,	// 현재까지 전송된 파일 크기
        	transferFileIndex : 0,	// 현재 전송중인 파일 인덱스
        	preFileSizeSum : 0		// 현재까지 전송된 파일크기 합계
        };

        this.extUp;
        this.extDown;
        this.transferType = "all";

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.CommImgFileupdown_onload = function(obj,e)
        {
        	var sURL = "http://14.63.224.112/KnuPoc/";

        	this.fileConfig = {
        		host : sURL + "service/",
        		uploadUrl : "file/uploadFile.jsp?path=image&strNo=" + this.gds_stuInfo.getColumn(0, "STUDENT_NO"),
        		downloadUrl : "file/downloadFile.jsp?path=image&fileName=",
        		deleteUrl : "file/deleteFile.jsp?path=image",
        		downImage : "theme://images/img_file.png",
        		delImage : "theme://images/btn_del.png",
        		allowTypes : ["jpg","jpeg","gif","png","bmp","txt","zip","7z","gzip","doc","docx","ppt","pptx","xls","xlsx","pdf"],
        		maxCount : 10,
        		maxSize : "200MB",
        		maxTotalSize : "200MB"
        	};

        	this.initFile();
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 파일업/다운로드 관련 초기화
        */
        this.initFile = function ()
        {
        	//확장자별 파일아이콘 설정.
        	this.initExtToIcon();

        	//==============================================
        	//	파일 업로드 컴포넌트 생성 및 설정
        	//==============================================
        	var name = this.gfnGetUniqueId("extUpload_");
        	var extUp = new nexacro.ExtFileUpload(name, this);
        	this.addChild(extUp.name, extUp);
        	this.extUp = extUp;

        	this.extUp.set_multiselect(true);
        	this.extUp.setResponseZone(this, this.staHelpMessage, this.grdUpload);//	먼지모르게씀

        	// == Event 설정 ==
        	//	파일 다이얼로그를 통해 파일을 선택했을 때 발생하는 이벤트입니다
        	this.extUp.addEventHandler("onchange", this.extUpload_onchange, this);
        	//통신 성공시에 발생하는 이벤트입니다
        	this.extUp.addEventHandler("onsuccess", this.extUpload_onsuccess, this);
            //통신 오류 시 발생하는 이벤트입니다.
        	this.extUp.addEventHandler("onerror", this.fileUpload_onerror, this);
        	//HTML5 Only : XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
        	this.extUp.addEventHandler("onprogress", this.extUpload_onprogress, this);
        	//HTML5 Only : XMLHttpRequest 통신시 readystate 속성 변경 event
        	this.extUp.addEventHandler("onreadystatechange", this.extUpload_onreadystatechange, this);
        	this.extUp.show();

        	//==============================================
        	//	파일 다운로드 컴포넌트 생성 및 설정
        	//==============================================
        	var name = this.gfnGetUniqueId("extDownload_");
        	var extDown = new nexacro.ExtFileDownload(name, this);
        	this.addChild(extDown.name, extDown);
        	this.extDown = extDown;

        	// == Event 설정 ==
            //통신 성공시에 발생하는 이벤트입니다
            this.extDown.addEventHandler("onsuccess", this.extDownload_onsuccess, this);
            //통신 오류 시 발생하는 이벤트입니다.
        	this.extDown.addEventHandler("onerror", this.extDownload_onerror, this);
        	//HTML5 Only : XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
        	this.extDown.addEventHandler("onprogress", this.extDownload_onprogress, this);
        	this.extDown.show();
        	system.navigatorname

        	//==============================================
        	//	브라우저별 기능 표시
        	//==============================================
        	//Drag and Drop 미지원 브라우저 확인.
        	if(this.extUp.support.FileAPI == false)
        	{
        		this.staHelpMessage.set_visible(false);

        		this.staSupportDnd.set_color("red");
        		this.staSupportDnd.set_text("• Drag and Drop 미지원");
        	}

        	//XHR2와 FileAPI 지원하지 않을 경우 그리드 format 변경. ex) file 전송량 표시용 progress bar
        	if (!this.extUp.support.XHR2)
        	{
        		this.grdUpload.setFormat("format1");
        		this.grdDownload.setFormat("format1");

        		this.staSupportPgb.set_color("red");
        		this.staSupportPgb.set_text("• ProgressBar 미지원");
        	}


        	//Multiple File Selection.
        	if (!this.extUp.support.MultipleInput)
        	{
        		this.staSupportMulti.set_color("red");
        		this.staSupportMulti.set_text("• File 다중선택 미지원");
        	}
        };

        /**
         * @description 확장자별 파일 아이콘 설정
        */
        this.initExtToIcon = function ()
        {
        	var extToIcon = this.extToIcon;
        	var iconInfo = this.iconInfo;
        	var name, len;
        	var i;

        	for (name in iconInfo)
        	{
        		len = iconInfo[name].length;

        		for (i = 0; i < len; i++)
        		{
        			extToIcon[iconInfo[name][i]] = name;
        		}
        	}
        };

        /**
         * @description 다운로드 파일의 확장자에 해당하는 이미지 설정.
        */
        this.setDownloadFileIcon = function()
        {
        	var ds = this.dsDownload;
        	var count = ds.rowcount;
        	var fileName, icon;
        	var i;

        	for (i = 0; i < count; i++)
        	{
        		fileName = ds.getColumn(i, "filename");

        		icon = this.getFileIcon(fileName);
        		ds.setColumn(i, "fileimg", icon);
        	}
        };

        /**
         * @description 파일 확장자에 해당하는 이미지경로 반환.
         * @param {string} fileName file name
        */
        this.getFileIcon = function(fileName)
        {
        	if (this.gfnIsNull(fileName)) return;

        	fileName = fileName.toLowerCase();

        	var ext = (/[.]/.exec(fileName)) ? /[^.]+$/.exec(fileName) : undefined;
        	var icon = this.extToIcon[ext];

        	if (icon == undefined) ext = "etc";

        	return "theme://images/" + this.extToIcon[ext] + ".png";
        };

        /**
         * @description 파일 유효성검증
        */
        this.validateFile = function(cond)
        {
        	var rtn = 1;

        	this.gfnEach(cond, function(prop, val, object)
        	{
        		var result = "";

        		if (prop == "name")
        		{
        			var fileExt = val.slice(val.lastIndexOf(".")+1).toLowerCase();

        			if (!this.gfnContains(this.fileConfig.allowTypes, fileExt)) {
        				alert("'" + fileExt + "' 유형의 파일은 업로드가 불가능합니다. [" + val + "]");
        				rtn = 0;
        				return false;
        			}
        		}
        		else if (prop == "length")
        		{
        			if (val >= this.fileConfig.maxCount) {
        				alert(this.fileConfig.maxCount + "건 이상의 파일 업로드는 허용되지 않습니다.");
        				rtn = -1;
        				return false;
        			}
        		}
        		else if (prop == "size")
        		{
        			if (!isNaN(val) && (val >= this.sizeToByte(this.fileConfig.maxSize))) {
        				alert(this.fileConfig.maxSize + " 이상의 파일 업로드는 허용되지 않습니다.");
        				rtn = 0;
        				return false;
        			}
        		}
        		else if (prop == "totalSize")
        		{
        			if (!isNaN(val) && (val >= this.sizeToByte(this.fileConfig.maxTotalSize))) {
        				alert(this.fileConfig.maxTotalSize + " 이상의 파일 업로드는 허용되지 않습니다.");
        				rtn = -1;
        				return false;
        			}
        		}
        	}, this);

        	return rtn;
        };

        /**
         * @description size를 byte로 변환처리한다.
        */
        this.sizeToByte = function(fileSize)
        {
        	var unit = fileSize.match(/[^\d]+/g),
        		size = fileSize.match(/\d+/);

        	unit = unit ? unit[0].toLowerCase() : "";
        	size = size ? size[0] : fileSize;

        	if (unit == "mb")  {
        		return size * 1024 * 1024;
        	} else if (unit == "gb") {
        		return size * 1024 * 1024 * 1024;
        	} else if (unit == "tb") {
        		return size * 1024 * 1024 * 1024 * 1024;
        	} else if (unit == "") {
        		return size;
        	} else {
        		return fileSize;
        	}
        };

        /**
         * @description 파일업로드수행
        */
        this.uploadFiles = function ()
        {
        	var i, len, rowtype,
        		type, fileid, addFileLen,
        		ds_files = this.dsUpload;

        	var extUp = this.extUp;
        	addFileLen = extUp.getAddedFileLength() || 0;

        	if (addFileLen > 0)
        	{
        		if (!extUp.support.XHR2 || !extUp.support.FileAPI)
        		{
        			if (!this.imgLoading.visible) {
        				var topform = this.gfnGetTopLevelForm(this);
        				var l = Math.round((topform.getOffsetWidth() - this.imgLoading.getOffsetWidth())/2);
        				var t = Math.round((topform.getOffsetHeight() - this.imgLoading.getOffsetHeight())/2);

        				this.imgLoading.move(l, t, this.imgLoading.getOffsetWidth(), this.imgLoading.getOffsetHeight());
        				this.imgLoading.set_visible(true);
        			}
        		}

        		this.initProgressbar("upload");
        		this.fileConfig.uploadUrl = "file/uploadFile.jsp?path=image&strNo=" + this.gds_stuInfo.getColumn(0, "STUDENT_NO");
        		var url = this.fileConfig.host + this.fileConfig.uploadUrl;

        		/*
        		런타임에서는 url parameter 설정만 가능!

        		HTML5는 아래 내용 참고
        			//  upload files
        			//  @param {=string} path upload url 정보. default는 상단의 extUp.set_uploadurl()에서 설정한 정보.
        			//  @param {string} inDatasetsParam input dataset 정보
        			//  @param {string} outDatasetsParam output dataset 정보
        			//  @param {string} transferType 전송유형.(all: 대상파일을 한번에 전송(defalut), each: 개별 전송)
        			//  @param {number} datatype data 전송방식. 0:XML, 1:Binary(Runtime only), 2:SSV

        			ds_download에 output dataset 결과는 extUpload_onsuccess 이벤트의 e.datasets에서 수신한다.
        		*/

        		trace("url ::"+ url);
        		//[전체전송]
        		var rtn = this.extUp.upload(url, "ds_input=dsUpload ds_temp=ds_temp ds_fileInfo=gds_stuInfo","ds_output=ds_output", this.transferType, 0);
        		//[개별전송]
        		//this.transferType = "all";
        		//extUp.upload(url, "ds_input=ds_input","", this.transferType, 0);
        	}
        };

        /**
         * @description 파일 다운로드 수행
        */
        this.downloadFile = function (row)
        {
        	if (this.gfnIsNull(row) || row < 0) {
        		return;
        	}

        	var dsDownload = this.dsDownload;
        	var	fileId,
        		fileName,
        		fileSize = 0,
        		fileInfo,
        		downloadUrl;

        	var tranFiles = this.tranFiles;
        	tranFiles.downloaded = [];

        	//progressbar 초기화
        	dsDownload.setColumn(row, "prog", 0);

        	fileId = dsDownload.getColumn(row, "fileid");
        	fileName = dsDownload.getColumn(row, "filename");
        	fileSize = dsDownload.getColumn(row, "filesize");
        	fileInfo = {"id": fileId, "name": fileName, "size": fileSize, "row": row};

        	tranFiles.downloaded.push(fileInfo);

        	var downloadUrl = this.fileConfig.host + this.fileConfig.downloadUrl;
        	var encodeFileName = escape(encodeURIComponent(fileName));
        	//download file
        	//@param {=string} url 다운로드 fullPath url
        	//@param {string} filename 파일저장시 적용할 file name.(지원가능한 브라우저만 적용됨. 런타임 미지원)
        	//@return {boolean} 다운로드 성공여부
        	this.extDown.download(downloadUrl + encodeFileName, fileName);
        };

        /**
         * @description 진행바 초기화
        */
        this.initProgressbar = function(type)
        {
        	if (type == "upload") {
        		this.tranFiles.preFileSizeSum = 0;
        		this.tranFiles.transferFileIndex = 0;
        	}
        };

        /**
         * @description 데이터셋 업데이트 여부 확인
        */
        this.isUpdateDataset = function (ds)
        {
        	if (this.gfnIsNull(ds)) {
        		return false;
        	}

        	if (ds.getRowCount() < 1) return false;

        	if (ds.getDeletedRowCount() > 0) {
        		return true;
        	}

        	if (ds.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)") > -1) {
        		return true;
        	}

        	return false;
        };


        /**
         * @descriptio 파일 삭제
         * @param {number} row 삭제대상 row
        */
        this.removeFile = function(row)
        {
        	this.grdUpload.set_enableredraw(false);

        	if (this.gfnIsNull(row) || row < 0) {
        		return;
        	}

        	var dsFiles = this.dsUpload;

        	//해당 row의 rowtype이 normal이면 서버에서 삭제로직 추가.
        	//업로드가 성공한 후에는 ExtFileUpload에 존재하는 파일 정보가 사라진 상태.
        	if (dsFiles.getRowType(row) == 2) //수정된 상태
        	{
        		var fileId = dsFiles.getColumn(row, "fileid");

        		//ExtFileUpDownload에서 내부적으로 가지고 있는 file정보 삭제.
        		this.extUp.removeFile(fileId);
        		dsFiles.deleteRow(row);
        	}
        	else
        	{
        		dsFiles.deleteRow(row);
        		//업로드된 파일은 서버에서 삭제하기 위한 별도처리 필요.
        		alert("업로드된 파일을 서버에서 삭제하기 위한 별도처리 필요.");
        	}

        	this.grdUpload.set_enableredraw(true);
        };

        /**
         * @description 트랜스파일인포 초기화
        */
        this.resetTranFilesInfo = function()
        {
        	var downFiles = this.tranFiles.downloaded;

        	this.gfnRemoveAt(downFiles, 0);		// 다운 파일 삭제
        	this.tranFiles.downloaded = [];
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 파일추가버튼이벤트
        */
        this.btn00_onclick = function(obj,e)
        {
        	this.extUp.addFiles();

        	if (this.staHelpMessage.visible) this.staHelpMessage.set_visible(false);
        };

        /**
         * @description 전체삭제버튼이벤트
        */
        this.btn01_onclick = function(obj,e)
        {
        	this.grdUpload.set_enableredraw(false);
        	this.extUp.removeAll();
        	this.dsUpload.clearData();
        	this.grdUpload.set_enableredraw(true);
        };

        /**
         * @description 저장버튼이벤트
        */
        this.btn02_onclick = function(obj,e)
        {
        	if (!this.isUpdateDataset(this.dsUpload)) {
        		alert("변경된 내역이 없습니다");
        	} else {
        		this.uploadFiles();
        	}
        };

        /**
         * @description 개별삭제이벤트
        */
        this.grdUpload_oncellclick = function(obj,e)
        {
        	var rmCellIdx = 2;

        	if (e.col == rmCellIdx) {
        		this.removeFile(e.row);
        	}
        };

        /**
         * @description 그리드 다운로드 더블클릭시 다운로드 실행
        */
        this.grdDownload_oncelldblclick = function(obj,e)
        {
        	this.downloadFile(e.row);
        };

        //=======================================================================================================================================
        //              ExtFileUpload Event
        //=======================================================================================================================================
        /**
         * @description 파일업로드 컴포넌트 체인지 이벤트
        */
        this.extUpload_onchange = function(obj, e)
        {

        	trace("<<<<<<<<<<<extUpload_onchange 함수실행>>>>>>>>>>>");
        	trace("obj : " + obj);
        	trace("e : " + e);


        	var ds = this.dsUpload;
        	var index = e.index;
         	var fileList = e.files;
         	var fileCount = fileList.length;
         	var fileSupport = (this.extUp.support.XHR2 && this.extUp.support.FileAPI);
        	var i;

        	for (i = 0; i < fileCount; i++)
        	{
        		var file = fileList[i];
        		var fileId   = file.id;
        		var fileName = file.name;
                var fileSize = file.size;
                var fileType = file.type;
                var fileFullpath = file.fullpath; 	//RUMTIME만 제공됨(HTML5는 빈문자열 반환). 2016.02.02
        		var dsCount = ds.getRowCount();
        		var cond;

        		if (fileSupport) {
        			var totalSize = ds.getSum("filesize") + fileSize;
        			cond = {"name" : fileName, "length" : dsCount, "size" : fileSize, "totalSize" : totalSize};
        		} else {
        			cond = {"name" : fileName, "length" : dsCount};
        		}

        		var valid = this.validateFile(cond);

        		//파일 유형 에러
        		if (valid == 0) {
        			this.extUp.removeFile(fileId);
        			return;
        		} else if (valid == -1) { //최대 파일첨부가능 건수 또는 size 에러.
        			this.extUp.removeFile(fileId);
        			return;
        		}

        		var findRow = ds.findRow("filename", fileName);

        		if (findRow > -1) {
        			alert("Duplicate name exists." + fileName);
        			this.extUp.removeFile(fileId);
        			return;
        		}

        		// 업로드 파일 정보 데이타 구성
        		var addidx = ds.addRow();
        		var downImage = this.getFileIcon(fileName);

        		ds.setColumn(addidx, "fileimg", downImage);
        		ds.setColumn(addidx, "fileid", fileId);
        		ds.setColumn(addidx, "filename", fileName);

        		if (fileSize > 0) {
        			ds.setColumn(addidx, "filesize", fileSize);
        		}

        		ds.setColumn(addidx, "filetype", fileType);
        		ds.setColumn(addidx, "prog", 0);
        		ds.setColumn(addidx, "rmimg", this.fileConfig.delImage);
        	}

        	this.uploadFiles(); // 이미지 미리보기
        };

        /**
         * @description 파일업로드 성공!
        */
        this.extUpload_onsuccess = function(obj, e)
        {
        	//e.fildId는 개별전송("each")시 수신.
        	if (this.imgLoading.visible) {
        		this.imgLoading.set_visible(false);
        	}

        	this.dsUpload.applyChange();
        	trace(e.datasets[0].saveXML());

        	this.gds_stuInfo.setColumn(0, "FILE_NAME", e.datasets[0].getColumn(0, "filename"));
        	this.gds_stuInfo.setColumn(0, "FILE_SIZE", e.datasets[0].getColumn(0, "filesize"));
        	this.gds_stuInfo.setColumn(0, "INSERT_DATE", e.datasets[0].getColumn(0, "filedate"));

        	if (e.datasets)
        	{
        		var outputDatasets = e.datasets;
        		if (outputDatasets.length == 0) return;

        		var outDs = outputDatasets[0];
        		var ds = this.dsDownload;

        		//개별전송 처리로직
        		if (this.transferType == "each")
        		{
        			if (this.extUp.support.XHR2)
        			{
        				var row = ds.addRow();
        				ds.copyRow(row, outDs, 0);

        				//개별파일 전송시. "each"
        				var fileId = e.fileId;
        				if (fileId){
        					var ds = this.dsUpload;
        					var row = ds.findRow("filename", fileId);
        					//trace("### [개별전송] extUpload_onsuccess :" +" e.fileId=" + e.fileId);
        					ds.setColumn(row, "prog", 100);
        				}
        			}
        			else
        			{
        				ds.copyData(outDs);
        			}
        		}
        		else
        		{
        			ds.copyData(outDs);
        		}
        	}

        	this.setDownloadFileIcon();

        	// 이미지 미리보기
        	//this.ImageViewer00.bringToFront();
        	//trace(" >>> " + "http://localhost/nexaPoC/upload/nexacro/" + ds.getColumn(0, "filename"));
        	this.ImageViewer00.set_image("http://14.63.224.112/KnuPoc/upload/tempImage/" + this.gds_stuInfo.getColumn(0, "FILE_NAME"));
        };

        /**
         * @description [HTML5 Only] XMLHttpRequest 통신시 readystate 속성 변경 event
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {ExtFileReadystateChangEventInfo} e ExtFileReadystateChangEventInfo
        */
        this.extUpload_onreadystatechange = function(obj, e)
        {
        	if (e.readyState == 4)
        	{
        		if (e.status != 200)
        		{
        			//trace("extUpload_onreadystatechange > Fail request!!");
        			//TODO
        			//에러 발생에 따른 UI 처리

        			var ds = this.dsUpload;
        			var count = ds.rowcount;
        			var i;

        			for (i = 0; i < count; i++)
        			{
        				ds.setColumn(i, "prog", -1);
        			}

        		}
        		else if (e.status == 200)
        		{
        		}
        	}
        };

        /**
         * @description [HTML5 Only] XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
         * file upload & download 진행시 progress bar 처리용
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {ExtFileProgress} e ExtFileProgress
        */
        this.extUpload_onprogress = function(obj,e)
        {
        	var addedFile = obj.getAddedFile(),
        		addedFileLength = addedFile.length || 0;

        	if (e.lengthComputable && (addedFileLength > 0))
        	{
        		//개별파일 전송시. "each"
        		var fileId = e.fileId;
        		if (fileId)
        		{
        			var currentFileSize = e.loaded; // 현재까지 전송된 전체 사이즈
        			var totalFileSize = e.total;   // 전체 사이즈

        			var ds = this.dsUpload;
        			var row = ds.findRow("filename", fileId);
        			var transferFileRate = Math.floor((currentFileSize / totalFileSize) * 100);

        			ds.setColumn(row, "prog", transferFileRate);
        			ds.setColumn(row, "filesize", totalFileSize);
        			ds.setColumn(row, "tranfilesize", currentFileSize);

        			return;
        		}

        		var transferFileSize,			// 파일 전송 사이즈
        			transferFileRate,			// 파일 전송 진행율
        			transferFile,				// 파일
        			currentFileId,				// 파일 ID
        			currentFileSize,			// 파일 크기
        			currentFileName,			// 파일명
        			ds_files = this.dsUpload,
        			dsRow = -1;

        		var tranFiles = this.tranFiles;
        		// 현재까지 전송된 전체 사이즈
        		tranFiles.transferFileSize = e.loaded;

        		// 현재까지 전송된 크기가 이전파일 크기 합계보다 크면 진행바 상태 표시를 반복 수행
        		while ((tranFiles.transferFileSize > tranFiles.preFileSizeSum) && (tranFiles.transferFileIndex < addedFileLength))
        		{
        			currentFileId = addedFile[tranFiles.transferFileIndex].id;
        			dsRow = ds_files.findRow("fileid", currentFileId);

        			transferFile = addedFile[tranFiles.transferFileIndex].file;
        			currentFileSize = transferFile.size;
        			currentFileName = transferFile.name;

        			ds_files.setColumn(dsRow, "filesize", currentFileSize);

        			transferFileSize = tranFiles.transferFileSize - tranFiles.preFileSizeSum;
        			transferFileRate = Math.floor((transferFileSize / currentFileSize) * 100);

        			// 현재 파일 전송이 완료되지 않은 경우는 다음 onStatus 이벤트 호출 대기
        			if (transferFileRate < 100) {
        				ds_files.setColumn(dsRow, "prog", transferFileRate);
        				ds_files.setColumn(dsRow, "tranfilesize", transferFileSize);
        				break;
        			}

        			// 현재 파일 전송 완료 또는 초과하는 경우는 현재 전송파일 완료 진행 처리후 while 반복문 로직 수행
        			if (transferFileRate >= 100)
        			{
        				transferFileSize = currentFileSize;	// 현재 파일 전송 사이즈
        				transferFileRate = 100;	// 현재 파일 전송 진행율

        				ds_files.setColumn(dsRow, "prog", transferFileRate);
        				ds_files.setColumn(dsRow, "filesize", currentFileSize);
        				ds_files.setColumn(dsRow, "tranfilesize", transferFileSize);

        				// 다음 전송 파일 정보 설정
        				tranFiles.preFileSizeSum += currentFileSize;	// 이전 파일 사이즈 합계
        				tranFiles.transferFileIndex++;

        				if (tranFiles.transferFileIndex >= addedFileLength) {
        					break;
        				}
        			}
        		}
        	}
        };

        //=======================================================================================================================================
        //              ExtFileDownload Event
        //=======================================================================================================================================
        /**
         * @description 통신 오류 시 발생하는 이벤트입니다
        */
        this.extDownload_onerror = function(obj, e)
        {
          //런타임에서 e.errortype; <-- 원하는 type이 아닌 error object 가 전송됨.
        	//trace("An error occurred: extDownload_onerror index=" + e.index  + ", errortype=" + e.errortype   + "\n, statuscode=" + e.statuscode + ", requesturi=" + e.requesturi);
        	this.resetTranFilesInfo();

        	if (this.imgLoading.visible) {
        		this.imgLoading.set_visible(false);
        	}
        };

        /**
         * @description 다운로드 성공시에 발생하는 이벤트입니다
        */
        this.extDownload_onsuccess = function(obj, e)
        {
        	//trace("	 ★ extFileDownload_onsuccess url=" + e.url);

        	this.resetTranFilesInfo();

        	if (this.imgLoading.visible) {
        		this.imgLoading.set_visible(false);
        	}

        	if (!this.gfnIsNull(e.url)) {
        		alert("Successfully downloaded.");
        	} else {
        		alert("다운로드 실패");
        	}
        };

        /**
         * @description [HTML5 Only] XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
         * file upload & download 진행시 progress bar 처리용
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {ExtFileProgress} e ExtFileProgress
        */
        this.extDownload_onprogress = function(obj,e)
        {
        	if (e.lengthComputable)
        	{
        		var status,									 // 파일 전송 진행율
        			currentFileSize,						 // 파일 크기
        			transferCurrentFileSize,				 // 파일 전송 사이즈
        			downFiles = this.tranFiles.downloaded,	 // 다운로드 대상 파일 목록
        			currentRow = -1,
        			dsDownload = this.dsDownload;

        		status = Math.floor((e.loaded / e.total) * 100);

        		currentFileSize = downFiles[0].size;
        		currentRow = downFiles[0].row;

        		transferCurrentFileSize = Math.floor(currentFileSize * (status / 100));
        		dsDownload.setColumn(currentRow, "prog", status);
        		dsDownload.setColumn(currentRow, "filesize", currentFileSize);
        		dsDownload.setColumn(currentRow, "tranfilesize", transferCurrentFileSize);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CommImgFileupdown_onload,this);
            this.grdUpload.addEventHandler("oncellclick",this.grdUpload_oncellclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.grdDownload.addEventHandler("oncelldblclick",this.grdDownload_oncelldblclick,this);
        };

        this.loadIncludeScript("CommImgFileupdown.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
