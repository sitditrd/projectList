(function(){return function(){if(!this._is_form){return;}var obj=null;this.on_create=function(){this.set_name("RadarChart_Circle");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(768,480);}obj=new Dataset("ds_browser_lanking",this);obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"Perr\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"Perr\">5</Col></Row><Row><Col id=\"Browser\">Android</Col><Col id=\"Perr\">20</Col></Row><Row><Col id=\"Browser\">Samsung Internet</Col><Col id=\"Perr\">31</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"Perr\">35</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"Perr\">38</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"Perr\">57</Col></Row><Row><Col id=\"Browser\">UCBrowser</Col><Col id=\"Perr\">80</Col></Row><Row><Col id=\"Browser\">Safari</Col><Col id=\"Perr\">44</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"Perr\">55</Col></Row></Rows>");this.addChild(obj.name,obj);obj=new RadarChart("RadarChart00","0%","0%",null,null,"0%","0%",null,null,null,null,this);obj.set_taborder("1");obj.set_binddataset("ds_browser_lanking");obj.set_radius("80");obj.set_background("black");obj.set_radartype("circle");obj.set_enableanimation("true");obj._setContents({"title":{"id":"title","text":"Browser lanking","textfont":"bold 20pt/normal \"맑은 고딕\"","padding":"0px 0px 5px","subtext":"Circle type simple basic chart","subtextfont":"bold italic 10pt \"Arial\"","subtextcolor":"white","textcolor":"white"},"legend":{"id":"legend","padding":"3px 10px 3px 10px","itemtextfont":"9pt '맑은 고딕'","itemtextcolor":"white"},"tooltip":{"id":"tooltip","background":"#4b4b4b","linestyle":"0px none","textcolor":"#ffffff","textfont":"10pt/normal '맑은 고딕'","padding":"5px"},"board":{"id":"board"},"categoryaxis":{"id":"categoryaxis","labeltextcolor":"white","labeltextfont":"10pt '맑은 고딕'","axislinestyle":"gray"},"valueaxes":[{"id":"valueaxis","labeltextcolor":"white","labeltextfont":"10pt '맑은 고딕'","axislinestyle":"1px solid gray"}],"seriesset":[{"id":"series0","titletext":"Perr","linevisible":true,"itemtextvisible":true,"itemtextcolor":"skyblue","itemtextfont":"bold 12pt '맑은 고딕'","valuecolumn":"bind:Perr","pointsize":"10","linestyle":"1px solid skyblue"}]});obj.set_categorycolumn("bind:Browser");this.addChild(obj.name,obj);obj=new Layout("default","",768,480,this,function(p){});obj.set_mobileorientation("landscape");this.addLayout(obj.name,obj);};this.loadPreloadList=function(){};this.registerScript("RadarChart_Basic.xfdl",function(){});this.on_initEvent=function(){};this.loadIncludeScript("RadarChart_Basic.xfdl");this.loadPreloadList();obj=null;};})();