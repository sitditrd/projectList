(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_3_2");
            this.set_titletext("Copy & Paste, Excel Import & Export");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col><Col id=\"Column1\">건축공사</Col></Row><Row><Col id=\"Column0\">01.37</Col><Col id=\"Column1\">온돌마루공사</Col></Row><Row><Col id=\"Column0\">01.37.01</Col><Col id=\"Column1\">아파트동</Col></Row><Row><Col id=\"Column1\">재료분리대(바닥)</Col><Col id=\"Column2\">SST'L, W=45</Col><Col id=\"Column3\">M</Col><Col id=\"Column6\"> - </Col><Col id=\"Column7\">11</Col><Col id=\"Column8\"> 5,000 </Col><Col id=\"Column9\"> 55,000 </Col><Col id=\"Column10\"> 5,000 </Col><Col id=\"Column11\"> 55,000 </Col><Col id=\"Column12\"> 4,500 </Col><Col id=\"Column13\"> 49,500 </Col><Col id=\"Column14\"> 500 </Col><Col id=\"Column15\"> 5,500 </Col><Col id=\"Column16\"> - </Col><Col id=\"Column17\"> - </Col><Col id=\"Column18\"> - </Col><Col id=\"Column19\"> - </Col><Col id=\"Column20\"> - </Col><Col id=\"Column21\"> - </Col><Col id=\"Column22\"> - </Col><Col id=\"Column23\"> - </Col><Col id=\"Column24\"> - </Col><Col id=\"Column25\"> - </Col><Col id=\"Column26\">A001</Col></Row><Row><Col id=\"Column1\">재료분리대(바닥)</Col><Col id=\"Column2\">AL,참스라인C-SOL(실버)11MM</Col><Col id=\"Column3\">M</Col><Col id=\"Column6\"> - </Col><Col id=\"Column7\">1504</Col><Col id=\"Column8\"> 5,000 </Col><Col id=\"Column9\"> 7,520,000 </Col><Col id=\"Column10\"> 5,000 </Col><Col id=\"Column11\"> 7,520,000 </Col><Col id=\"Column12\"> 4,500 </Col><Col id=\"Column13\"> 6,768,000 </Col><Col id=\"Column14\"> 500 </Col><Col id=\"Column15\"> 752,000 </Col><Col id=\"Column16\"> - </Col><Col id=\"Column17\"> - </Col><Col id=\"Column18\"> - </Col><Col id=\"Column19\"> - </Col><Col id=\"Column20\"> - </Col><Col id=\"Column21\"> - </Col><Col id=\"Column22\"> - </Col><Col id=\"Column23\"> - </Col><Col id=\"Column24\"> - </Col><Col id=\"Column25\"> - </Col><Col id=\"Column26\">A002</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">재료분리대(바닥)</Col><Col id=\"Column2\">L자형 황동줄눈</Col><Col id=\"Column3\">M</Col><Col id=\"Column6\"> - </Col><Col id=\"Column7\">169</Col><Col id=\"Column8\"> 5,000 </Col><Col id=\"Column9\"> 845,000 </Col><Col id=\"Column10\"> 5,000 </Col><Col id=\"Column11\"> 845,000 </Col><Col id=\"Column12\"> 4,500 </Col><Col id=\"Column13\"> 760,500 </Col><Col id=\"Column14\"> 500 </Col><Col id=\"Column15\"> 84,500 </Col><Col id=\"Column16\"> - </Col><Col id=\"Column17\"> - </Col><Col id=\"Column18\"> - </Col><Col id=\"Column19\"> - </Col><Col id=\"Column20\"> - </Col><Col id=\"Column21\"> - </Col><Col id=\"Column22\"> - </Col><Col id=\"Column23\"> - </Col><Col id=\"Column24\"> - </Col><Col id=\"Column25\"> - </Col><Col id=\"Column26\">A003</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">온돌마루A</Col><Col id=\"Column2\">130m2/ 워시오크</Col><Col id=\"Column3\">M2</Col><Col id=\"Column6\"> - </Col><Col id=\"Column7\">24290</Col><Col id=\"Column8\"> 21,600 </Col><Col id=\"Column9\"> 524,664,000 </Col><Col id=\"Column10\"> 21,600 </Col><Col id=\"Column11\"> 524,664,000 </Col><Col id=\"Column12\"> 18,000 </Col><Col id=\"Column13\"> 437,220,000 </Col><Col id=\"Column14\"> 3,600 </Col><Col id=\"Column15\"> 87,444,000 </Col><Col id=\"Column16\"> - </Col><Col id=\"Column17\"> - </Col><Col id=\"Column18\"> - </Col><Col id=\"Column19\"> - </Col><Col id=\"Column20\"> - </Col><Col id=\"Column21\"> - </Col><Col id=\"Column22\"> - </Col><Col id=\"Column23\"> - </Col><Col id=\"Column24\"> - </Col><Col id=\"Column25\"> - </Col><Col id=\"Column26\">A004</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">온돌마루A</Col><Col id=\"Column2\">131m2/ 워시오크</Col><Col id=\"Column3\">M2</Col><Col id=\"Column6\"> - </Col><Col id=\"Column7\">11684</Col><Col id=\"Column8\"> 21,600 </Col><Col id=\"Column9\"> 252,374,400 </Col><Col id=\"Column10\"> 21,600 </Col><Col id=\"Column11\"> 252,374,400 </Col><Col id=\"Column12\"> 18,000 </Col><Col id=\"Column13\"> 210,312,000 </Col><Col id=\"Column14\"> 3,600 </Col><Col id=\"Column15\"> 42,062,400 </Col><Col id=\"Column16\"> - </Col><Col id=\"Column17\"> - </Col><Col id=\"Column18\"> - </Col><Col id=\"Column19\"> - </Col><Col id=\"Column20\"> - </Col><Col id=\"Column21\"> - </Col><Col id=\"Column22\"> - </Col><Col id=\"Column23\"> - </Col><Col id=\"Column24\"> - </Col><Col id=\"Column25\"> - </Col><Col id=\"Column26\">A005</Col></Row><Row><Col id=\"Column1\">온돌마루A</Col><Col id=\"Column2\">146m2/ 오크M</Col><Col id=\"Column3\">M2</Col><Col id=\"Column6\"> - </Col><Col id=\"Column7\">20280</Col><Col id=\"Column8\"> 21,600 </Col><Col id=\"Column9\"> 438,048,000 </Col><Col id=\"Column10\"> 21,600 </Col><Col id=\"Column11\"> 438,048,000 </Col><Col id=\"Column12\"> 18,000 </Col><Col id=\"Column13\"> 365,040,000 </Col><Col id=\"Column14\"> 3,600 </Col><Col id=\"Column15\"> 73,008,000 </Col><Col id=\"Column16\"> - </Col><Col id=\"Column17\"> - </Col><Col id=\"Column18\"> - </Col><Col id=\"Column19\"> - </Col><Col id=\"Column20\"> - </Col><Col id=\"Column21\"> - </Col><Col id=\"Column22\"> - </Col><Col id=\"Column23\"> - </Col><Col id=\"Column24\"> - </Col><Col id=\"Column25\"> - </Col><Col id=\"Column26\">A006</Col></Row><Row><Col id=\"Column1\">온돌마루A</Col><Col id=\"Column2\">148Am2/ 오크M</Col><Col id=\"Column3\">M2</Col><Col id=\"Column6\"> - </Col><Col id=\"Column7\">13338</Col><Col id=\"Column8\"> 21,600 </Col><Col id=\"Column9\"> 288,100,800 </Col><Col id=\"Column10\"> 21,600 </Col><Col id=\"Column11\"> 288,100,800 </Col><Col id=\"Column12\"> 18,000 </Col><Col id=\"Column13\"> 240,084,000 </Col><Col id=\"Column14\"> 3,600 </Col><Col id=\"Column15\"> 48,016,800 </Col><Col id=\"Column16\"> - </Col><Col id=\"Column17\"> - </Col><Col id=\"Column18\"> - </Col><Col id=\"Column19\"> - </Col><Col id=\"Column20\"> - </Col><Col id=\"Column21\"> - </Col><Col id=\"Column22\"> - </Col><Col id=\"Column23\"> - </Col><Col id=\"Column24\"> - </Col><Col id=\"Column25\"> - </Col><Col id=\"Column26\">A007</Col></Row><Row><Col id=\"Column1\">온돌마루A</Col><Col id=\"Column2\">148Bm2/ 오크M</Col><Col id=\"Column3\">M2</Col><Col id=\"Column6\"> - </Col><Col id=\"Column7\">13751</Col><Col id=\"Column8\"> 21,600 </Col><Col id=\"Column9\"> 297,021,600 </Col><Col id=\"Column10\"> 21,600 </Col><Col id=\"Column11\"> 297,021,600 </Col><Col id=\"Column12\"> 18,000 </Col><Col id=\"Column13\"> 247,518,000 </Col><Col id=\"Column14\"> 3,600 </Col><Col id=\"Column15\"> 49,503,600 </Col><Col id=\"Column16\"> - </Col><Col id=\"Column17\"> - </Col><Col id=\"Column18\"> - </Col><Col id=\"Column19\"> - </Col><Col id=\"Column20\"> - </Col><Col id=\"Column21\"> - </Col><Col id=\"Column22\"> - </Col><Col id=\"Column23\"> - </Col><Col id=\"Column24\"> - </Col><Col id=\"Column25\"> - </Col><Col id=\"Column26\">A008</Col></Row><Row><Col id=\"Column1\">온돌마루A</Col><Col id=\"Column2\">163m2/ 월넛L</Col><Col id=\"Column3\">M2</Col><Col id=\"Column6\"> - </Col><Col id=\"Column7\">11681</Col><Col id=\"Column8\"> 22,500 </Col><Col id=\"Column9\"> 262,822,500 </Col><Col id=\"Column10\"> 22,500 </Col><Col id=\"Column11\"> 262,822,500 </Col><Col id=\"Column12\"> 18,900 </Col><Col id=\"Column13\"> 220,770,900 </Col><Col id=\"Column14\"> 3,600 </Col><Col id=\"Column15\"> 42,051,600 </Col><Col id=\"Column16\"> - </Col><Col id=\"Column17\"> - </Col><Col id=\"Column18\"> - </Col><Col id=\"Column19\"> - </Col><Col id=\"Column20\"> - </Col><Col id=\"Column21\"> - </Col><Col id=\"Column22\"> - </Col><Col id=\"Column23\"> - </Col><Col id=\"Column24\"> - </Col><Col id=\"Column25\"> - </Col><Col id=\"Column26\">A009</Col></Row><Row><Col id=\"Column1\">온돌마루A</Col><Col id=\"Column2\">178m2/ 월넛L</Col><Col id=\"Column3\">M2</Col><Col id=\"Column6\"> - </Col><Col id=\"Column7\">12608</Col><Col id=\"Column8\"> 22,500 </Col><Col id=\"Column9\"> 283,680,000 </Col><Col id=\"Column10\"> 22,500 </Col><Col id=\"Column11\"> 283,680,000 </Col><Col id=\"Column12\"> 18,900 </Col><Col id=\"Column13\"> 238,291,200 </Col><Col id=\"Column14\"> 3,600 </Col><Col id=\"Column15\"> 45,388,800 </Col><Col id=\"Column16\"> - </Col><Col id=\"Column17\"> - </Col><Col id=\"Column18\"> - </Col><Col id=\"Column19\"> - </Col><Col id=\"Column20\"> - </Col><Col id=\"Column21\"> - </Col><Col id=\"Column22\"> - </Col><Col id=\"Column23\"> - </Col><Col id=\"Column24\"> - </Col><Col id=\"Column25\"> - </Col><Col id=\"Column26\">A010</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new ExcelExportObject("ExcelExportObject", this);
            this.addChild(obj.name, obj);


            obj = new ExcelImportObject("ExcelImportObject", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","8","8","421","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 기능");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","Static01:8",null,"45.56%","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMain");
            obj.set_selecttype("multiarea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"65\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"4\" text=\"한화건설\"/><Cell col=\"1\" rowspan=\"4\" text=\"분류1\"/><Cell col=\"2\" rowspan=\"4\" text=\"분류2\"/><Cell col=\"3\" rowspan=\"4\" text=\"번호\"/><Cell col=\"4\" colspan=\"3\" text=\"한화건설\"/><Cell col=\"7\" colspan=\"19\" text=\"한화건설\"/><Cell col=\"26\" rowspan=\"4\" text=\"기타\"/><Cell row=\"1\" col=\"4\" rowspan=\"3\" text=\"한화건설\"/><Cell row=\"1\" col=\"5\" rowspan=\"3\" text=\"한화건설\"/><Cell row=\"1\" col=\"6\" rowspan=\"3\" text=\"한화건설\"/><Cell row=\"1\" col=\"7\" rowspan=\"3\" text=\"한화건설\"/><Cell row=\"1\" col=\"8\" rowspan=\"3\" text=\"한화건설\"/><Cell row=\"1\" col=\"9\" rowspan=\"3\" text=\"한화건설\"/><Cell row=\"1\" col=\"10\" colspan=\"8\" text=\"한화건설\"/><Cell row=\"1\" col=\"18\" rowspan=\"2\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"1\" col=\"20\" rowspan=\"2\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"1\" col=\"22\" rowspan=\"2\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"1\" col=\"24\" rowspan=\"2\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"2\" col=\"10\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"2\" col=\"12\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"2\" col=\"14\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"2\" col=\"16\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"3\" col=\"10\" text=\"A\"/><Cell row=\"3\" col=\"11\" text=\"B\"/><Cell row=\"3\" col=\"12\" text=\"C\"/><Cell row=\"3\" col=\"13\" text=\"D\"/><Cell row=\"3\" col=\"14\" text=\"E\"/><Cell row=\"3\" col=\"15\" text=\"F\"/><Cell row=\"3\" col=\"16\" text=\"G\"/><Cell row=\"3\" col=\"17\" text=\"H\"/><Cell row=\"3\" col=\"18\" text=\"I\"/><Cell row=\"3\" col=\"19\" text=\"J\"/><Cell row=\"3\" col=\"20\" text=\"K\"/><Cell row=\"3\" col=\"21\" text=\"L\"/><Cell row=\"3\" col=\"22\" text=\"M\"/><Cell row=\"3\" col=\"23\" text=\"N\"/><Cell row=\"3\" col=\"24\" text=\"O\"/><Cell row=\"3\" col=\"25\" text=\"P\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"expr:currow &lt;= 1 ? 'Expr_Case_Background_Yellow' : currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"3\" text=\"bind:Column3\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"4\" text=\"bind:Column4\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"5\" text=\"bind:Column5\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"6\" text=\"bind:Column6\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"7\" text=\"bind:Column7\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"8\" text=\"bind:Column8\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"9\" text=\"bind:Column9\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"10\" text=\"bind:Column10\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"11\" text=\"bind:Column11\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"12\" text=\"bind:Column12\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"13\" text=\"bind:Column13\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"14\" text=\"bind:Column14\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"15\" text=\"bind:Column15\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"16\" text=\"bind:Column16\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"17\" text=\"bind:Column17\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"18\" text=\"bind:Column18\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"19\" text=\"bind:Column19\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"20\" text=\"bind:Column20\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"21\" text=\"bind:Column21\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"22\" text=\"bind:Column22\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"23\" text=\"bind:Column23\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"24\" text=\"bind:Column24\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"25\" text=\"bind:Column25\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"26\" text=\"bind:Column26\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Import",null,"12","84","22","8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Import");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Export",null,"12","84","22","99",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Export");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","8","Grid00:8",null,"45.56%","8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsOutput");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"65\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"4\" text=\"한화건설\"/><Cell col=\"1\" rowspan=\"4\" text=\"분류1\"/><Cell col=\"2\" rowspan=\"4\" text=\"분류2\"/><Cell col=\"3\" rowspan=\"4\" text=\"번호\"/><Cell col=\"4\" colspan=\"3\" text=\"한화건설\"/><Cell col=\"7\" colspan=\"19\" text=\"한화건설\"/><Cell col=\"26\" rowspan=\"4\" text=\"기타\"/><Cell row=\"1\" col=\"4\" rowspan=\"3\" text=\"한화건설\"/><Cell row=\"1\" col=\"5\" rowspan=\"3\" text=\"한화건설\"/><Cell row=\"1\" col=\"6\" rowspan=\"3\" text=\"한화건설\"/><Cell row=\"1\" col=\"7\" rowspan=\"3\" text=\"한화건설\"/><Cell row=\"1\" col=\"8\" rowspan=\"3\" text=\"한화건설\"/><Cell row=\"1\" col=\"9\" rowspan=\"3\" text=\"한화건설\"/><Cell row=\"1\" col=\"10\" colspan=\"8\" text=\"한화건설\"/><Cell row=\"1\" col=\"18\" rowspan=\"2\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"1\" col=\"20\" rowspan=\"2\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"1\" col=\"22\" rowspan=\"2\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"1\" col=\"24\" rowspan=\"2\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"2\" col=\"10\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"2\" col=\"12\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"2\" col=\"14\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"2\" col=\"16\" colspan=\"2\" text=\"한화건설\"/><Cell row=\"3\" col=\"10\" text=\"A\"/><Cell row=\"3\" col=\"11\" text=\"B\"/><Cell row=\"3\" col=\"12\" text=\"C\"/><Cell row=\"3\" col=\"13\" text=\"D\"/><Cell row=\"3\" col=\"14\" text=\"E\"/><Cell row=\"3\" col=\"15\" text=\"F\"/><Cell row=\"3\" col=\"16\" text=\"G\"/><Cell row=\"3\" col=\"17\" text=\"H\"/><Cell row=\"3\" col=\"18\" text=\"I\"/><Cell row=\"3\" col=\"19\" text=\"J\"/><Cell row=\"3\" col=\"20\" text=\"K\"/><Cell row=\"3\" col=\"21\" text=\"L\"/><Cell row=\"3\" col=\"22\" text=\"M\"/><Cell row=\"3\" col=\"23\" text=\"N\"/><Cell row=\"3\" col=\"24\" text=\"O\"/><Cell row=\"3\" col=\"25\" text=\"P\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"expr:currow &lt;= 1 ? 'Expr_Case_Background_Yellow' : currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"3\" text=\"bind:Column3\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"4\" text=\"bind:Column4\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"5\" text=\"bind:Column5\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"6\" text=\"bind:Column6\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"7\" text=\"bind:Column7\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"8\" text=\"bind:Column8\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"9\" text=\"bind:Column9\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"10\" text=\"bind:Column10\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"11\" text=\"bind:Column11\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"12\" text=\"bind:Column12\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"13\" text=\"bind:Column13\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"14\" text=\"bind:Column14\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"15\" text=\"bind:Column15\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"16\" text=\"bind:Column16\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"17\" text=\"bind:Column17\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"18\" text=\"bind:Column18\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"19\" text=\"bind:Column19\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"20\" text=\"bind:Column20\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"21\" text=\"bind:Column21\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"22\" text=\"bind:Column22\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"23\" text=\"bind:Column23\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"24\" text=\"bind:Column24\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"25\" text=\"bind:Column25\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/><Cell col=\"26\" text=\"bind:Column26\" cssclass=\"expr:currow == 2 ? 'Expr_Case_Background_Orange' : ''\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PoC_3_2.xfdl","lib::excel.xjs");
        this.registerScript("PoC_3_2.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : Copy & Paste / Excel Import, Export
        * 03. 화면설명 :
        * 04. 작성일   : 2018.09.05
        * 05. 작성자   : 안주환
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("lib::excel.xjs"); /*include "lib::excel.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.PoC_3_2_onload = function(obj,e)
        {
        	this.fn_setCPGrid(this.Grid00);
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * Excel 관련 function 처리
        ************************************************************************************************/
        //Excel Export
        this.fn_export = function(grid)
        {
        	this.ExcelExportObject.clear();

        	var sFileNm = "ExcelExportFile";
        	var constExportItemType = nexacro.ExportItemTypes.GRID;
        	var varExportSource = grid;
        	var strRange = "Sheet1!A1";
        	var strExportHead = "allband";
        	var strExportSelect = "allrecord";
        	var strExportMerge = "suppress";
        	var strExportValue = "allstyle";
        	var strExportImage = "none";
        	var strExceptStyle = "";
        	var strExportSize = "both";

        	var ret = this.ExcelExportObject.addExportItem(constExportItemType, varExportSource, strRange, strExportHead, strExportSelect, strExportMerge, strExportValue, strExportImage, strExceptStyle, strExportSize);

        	this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL);
        	this.ExcelExportObject.set_exportfilename(sFileNm);
        	this.ExcelExportObject.set_exporturl("http://localhost/nexacro17-xeni/XExportImport");
        	this.ExcelExportObject.exportData();
        }

        this.ExcelExportObject_onsuccess = function(obj,e)
        {
        	this.alert("Excel Export Success !!");
        };

        this.ExcelExportObject_onerror = function(obj,e)
        {
        	this.alert( "Excel Export Error Type:[" + e.errortype + "] Error Msg:["+e.errormsg+"]");
        };

        //Excel Import
        this.fn_import = function()
        {
        	this.ExcelImportObject.set_importtype(nexacro.ImportTypes.EXCEL);
        	this.ExcelImportObject.set_importurl("http://localhost/nexacro17-xeni/XImport");
        	this.ExcelImportObject.set_importfilemode("local");
        	this.ExcelImportObject.importData("", "[command=getsheetdata;output=outDs;body=!A5;]", "[dsOutput=outDs]");
        }

        this.ExcelImportObject_onsuccess = function(obj,e)
        {
        	this.alert("Excel Import Success !!");
        	this.Grid01.set_binddataset("dsOutput");
        	this.Grid01.set_autofittype("col");
        };

        this.ExcelImportObject_onerror = function(obj,e)
        {
        	this.alert( "Excel Import Error Type:["+ e.errortype + "] Error Msg:["+e.errormsg+"]");
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Export" :
        			this.fn_export(this.Grid00);
        			break;
        		case "btn_Import" :
        			this.fn_import();
        			break;
        	}
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PoC_3_2_onload,this);
            this.btn_Import.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Export.addEventHandler("onclick",this.comm_Click,this);
            this.ExcelExportObject.addEventHandler("onerror",this.ExcelExportObject_onerror,this);
            this.ExcelExportObject.addEventHandler("onsuccess",this.ExcelExportObject_onsuccess,this);
            this.ExcelImportObject.addEventHandler("onerror",this.ExcelImportObject_onerror,this);
            this.ExcelImportObject.addEventHandler("onsuccess",this.ExcelImportObject_onsuccess,this);
        };

        this.loadIncludeScript("PoC_3_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
