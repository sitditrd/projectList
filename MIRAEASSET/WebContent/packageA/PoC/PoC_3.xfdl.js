(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_3");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBubble01", this);
            obj.set_keystring("");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">CONG.DE</Col><Col id=\"Column1\">25</Col><Col id=\"Column2\">225.75</Col><Col id=\"Column3\">5330025</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">18.40</Col><Col id=\"Column6\">576.36</Col><Col id=\"Column7\">101.75</Col></Row><Row><Col id=\"Column7\">101.75</Col><Col id=\"Column0\">CONG.DE</Col><Col id=\"Column1\">25</Col><Col id=\"Column2\">225.75</Col><Col id=\"Column3\">5330025</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">18.40</Col><Col id=\"Column6\">576.36</Col></Row><Row><Col id=\"Column6\">189.23</Col><Col id=\"Column5\">10.24</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column3\">5330025</Col><Col id=\"Column2\">225.75</Col><Col id=\"Column1\">4</Col><Col id=\"Column0\">BMWG.DE</Col><Col id=\"Column7\">109.45</Col></Row><Row><Col id=\"Column0\">BMWG.DE</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">225.75</Col><Col id=\"Column3\">5330025</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">10.24</Col><Col id=\"Column6\">189.23</Col><Col id=\"Column7\">109.45</Col></Row><Row><Col id=\"Column6\">564.12</Col><Col id=\"Column5\">98.22</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column3\">2236503</Col><Col id=\"Column2\">90.42</Col><Col id=\"Column1\">4</Col><Col id=\"Column0\">CP.TO</Col><Col id=\"Column7\">27.55</Col></Row><Row><Col id=\"Column0\">ATOS.PA</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">225.75</Col><Col id=\"Column3\">5330025</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">18.40</Col><Col id=\"Column6\">576.36</Col><Col id=\"Column7\">101.75</Col></Row><Row><Col id=\"Column0\">ATRP.PA</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">225.75</Col><Col id=\"Column3\">5330025</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">10.24</Col><Col id=\"Column6\">189.23</Col><Col id=\"Column7\">109.45</Col></Row><Row><Col id=\"Column0\">CNR.TO</Col><Col id=\"Column1\">67</Col><Col id=\"Column2\">90.42</Col><Col id=\"Column3\">2236503</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">98.22</Col><Col id=\"Column6\">564.12</Col><Col id=\"Column7\">27.55</Col></Row><Row><Col id=\"Column0\">ADEN.VX</Col><Col id=\"Column1\">19</Col><Col id=\"Column2\">225.75</Col><Col id=\"Column3\">5330025</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">18.40</Col><Col id=\"Column6\">576.36</Col><Col id=\"Column7\">101.75</Col></Row><Row><Col id=\"Column0\">BMO.TO</Col><Col id=\"Column1\">49</Col><Col id=\"Column2\">225.75</Col><Col id=\"Column3\">1578359</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">10.24</Col><Col id=\"Column6\">189.23</Col><Col id=\"Column7\">109.45</Col></Row><Row><Col id=\"Column0\">ALSO.PA</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">90.42</Col><Col id=\"Column3\">946346</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">98.22</Col><Col id=\"Column6\">564.12</Col><Col id=\"Column7\">27.55</Col></Row><Row><Col id=\"Column0\">BK.N</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">225.75</Col><Col id=\"Column3\">470844</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">18.40</Col><Col id=\"Column6\">576.36</Col><Col id=\"Column7\">101.75</Col></Row><Row><Col id=\"Column0\">BK.N</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">225.75</Col><Col id=\"Column3\">470844</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">18.40</Col><Col id=\"Column6\">576.36</Col><Col id=\"Column7\">101.75</Col></Row><Row><Col id=\"Column0\">T.N</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">225.75</Col><Col id=\"Column3\">410784</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">10.24</Col><Col id=\"Column6\">189.23</Col><Col id=\"Column7\">109.45</Col></Row><Row><Col id=\"Column0\">ACM.N</Col><Col id=\"Column1\">54</Col><Col id=\"Column2\">90.42</Col><Col id=\"Column3\">874280</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">98.22</Col><Col id=\"Column6\">564.12</Col><Col id=\"Column7\">27.55</Col></Row><Row><Col id=\"Column0\">CAT.N</Col><Col id=\"Column1\">73</Col><Col id=\"Column2\">225.75</Col><Col id=\"Column3\">5330025</Col><Col id=\"Column4\">BARX</Col><Col id=\"Column5\">18.40</Col><Col id=\"Column6\">576.36</Col><Col id=\"Column7\">101.75</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBubble02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">44%</Col><Col id=\"Column2\">15175624</Col><Col id=\"Column3\">-0.18</Col><Col id=\"Column4\">-43.23</Col><Col id=\"Column5\">-0.01</Col><Col id=\"Column0\">CONSUMER ...</Col></Row><Row><Col id=\"Column1\">27%</Col><Col id=\"Column2\">9329941</Col><Col id=\"Column3\">37.15</Col><Col id=\"Column4\">-12.33</Col><Col id=\"Column5\">-10.17</Col><Col id=\"Column0\">INDUSTRIALS</Col></Row><Row><Col id=\"Column1\">11%</Col><Col id=\"Column2\">3840667</Col><Col id=\"Column3\">64.93</Col><Col id=\"Column4\">-224.55</Col><Col id=\"Column5\">-39.13</Col><Col id=\"Column0\">TECHNOLOGY</Col></Row><Row><Col id=\"Column1\">8%</Col><Col id=\"Column2\">2669853</Col><Col id=\"Column3\">4.43</Col><Col id=\"Column4\">-4.56</Col><Col id=\"Column5\">6.26</Col><Col id=\"Column0\">BASIC MATE...</Col></Row><Row><Col id=\"Column1\">7%</Col><Col id=\"Column2\">2493291</Col><Col id=\"Column3\">4.73</Col><Col id=\"Column4\">190164</Col><Col id=\"Column5\">-7.40</Col><Col id=\"Column0\">FINALCIALS</Col></Row><Row><Col id=\"Column1\">3%</Col><Col id=\"Column2\">674280</Col><Col id=\"Column3\">9.13</Col><Col id=\"Column4\">33.12</Col><Col id=\"Column5\">8.06</Col><Col id=\"Column0\">TELECOMMU...</Col></Row><Row><Col id=\"Column1\">1%</Col><Col id=\"Column2\">189990</Col><Col id=\"Column3\">5.36</Col><Col id=\"Column4\">12.01</Col><Col id=\"Column5\">-7.06</Col><Col id=\"Column0\">HEALTHCARE</Col></Row><Row><Col id=\"Column1\">0%</Col><Col id=\"Column2\">32549</Col><Col id=\"Column3\">-23.56</Col><Col id=\"Column4\">13.654</Col><Col id=\"Column5\">70.29</Col><Col id=\"Column0\">UTILITES</Col></Row><Row><Col id=\"Column1\">0%</Col><Col id=\"Column2\">0</Col><Col id=\"Column0\">ENERGY</Col></Row><Row><Col id=\"Column1\">0%</Col><Col id=\"Column2\">0</Col><Col id=\"Column0\">CONSUMER ...</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPie", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">708</Col><Col id=\"Column2\">689</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">53%</Col><Col id=\"Column0\">Buy</Col></Row><Row><Col id=\"Column1\">473</Col><Col id=\"Column2\">457</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">47%</Col><Col id=\"Column0\">Sell</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","8","6","56.72%","38.06%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser01","WebBrowser00:8","6","41.25%","38.06%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","WebBrowser00:8","31.33%","59.03%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsBubble01");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"139\"/><Column size=\"160\"/><Column size=\"157\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"115\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"%Exec\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"AvgPrx\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"Execval\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"4\" text=\"Broker\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"5\" text=\"Perf V Arr&#13;&#10;bps\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"6\" text=\"Peft V VWAP&#13;&#10;bps\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"7\" text=\"Perl V POC&#13;&#10;bps\" font=\"normal 10px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:Column5\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:Column6\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:Column7\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","Grid00:8","WebBrowser00:8","25.00%","59.03%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsBubble02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"98\"/><Column size=\"98\"/><Column size=\"98\"/><Column size=\"98\"/><Column size=\"98\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"% of&#13;&#10;Total\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"ExecVal\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"Perf V Arr&#13;&#10;bps\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"4\" text=\"Perf V VWAP&#13;&#10;bps\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"5\" text=\"Perf V PDC&#13;&#10;bps\" font=\"normal 10px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:Column5\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","Grid01:8","WebBrowser01:8","41.25%","59.03%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPie");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"24\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"97\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Expected&#13;&#10;Val (M)\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"Remain&#13;&#10;Val (M)\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"% of&#13;&#10;Side\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"4\" text=\"% of&#13;&#10;Total\" font=\"normal 10px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"right\"/></Band></Format></Formats>");
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
        this.registerScript("PoC_3.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 요건 3
        * 03. 화면설명 :
        * 04. 작성일   : 2019.11.12
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


        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.PoC_3_onload = function(obj,e)
        {
        	var rootPath = nexacro.getProjectPath();
        	this.WebBrowser00.set_url(rootPath + "../service/rChart/Samples/Bubble_3D_Transparency.html");
        	this.WebBrowser01.set_url(rootPath + "../service/rChart/Samples/Pie_2D.html");
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PoC_3_onload,this);
        };

        this.loadIncludeScript("PoC_3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
