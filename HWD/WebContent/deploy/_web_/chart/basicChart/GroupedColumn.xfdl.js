(function(){return function(){if(!this._is_form){return;}var obj=null;this.on_create=function(){this.set_name("GroupedColumn");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(768,480);}obj=new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);obj.set_taborder("0");obj.set_binddataset("gdsRainfall");obj.set_enableanimation("true");obj._setContents({"title":{"id":"title","text":"Grouped Column","textfont":"20pt/normal '맑은 고딕'","padding":"0px 0px 5px","subtext":"Basic Chart > Column Chart","subtextcolor":"gray","subtextalign":"right","subtextfont":"italic 8/normal \"Arial\""},"legend":{"id":"legend","padding":"3px 10px 3px 10px","itemtextfont":"9pt '맑은 고딕'","itemtextcolor":"#4c4c4c","itemautofit":"true","align":"rightcenter","markertextgap":"5","markertype":"circle","verticalitemgap":"5","linestyle":"1px dashed #4c4c4c"},"tooltip":{"id":"tooltip","background":"#4b4b4b","linestyle":"0px none","textcolor":"white","textfont":"10pt/normal '맑은 고딕'","padding":"5px"},"board":{"id":"board"},"categoryaxis":{"id":"categoryaxis","titletextcolor":"#4c4c4c","titletextfont":"bold 12pt '맑은 고딕'","labeltextcolor":"#6f6f6f","labeltextfont":"9pt '맑은 고딕'","axislinestyle":"1px solid #525252","ticklinestyle":"1px solid #525252","boardlinestyle":"1px solid #d0d0d0","ticksize":"5","labelgap":"5","labelrotate":"-30"},"valueaxes":[{"id":"valueaxis0","boardlinevisible":true,"boardlinestyle":"1px solid #d0d0d0","labeltextcolor":"#6f6f6f","labeltextfont":"9pt/normal '맑은 고딕'","titletextcolor":"#4c4c4c","titletextfont":"bold 12pt '맑은 고딕'","ticklinestyle":"1px solid #525252","axislinestyle":"1px solid #525252","labelgap":"5","ticksize":"5"}],"hrangebar":{"id":"hrangebar","trackbarpadding":"1px","background":"transparent","linestyle":"0px solid #d5d5d5","trackbarlinestyle":"0px none","trackbarfillstyle":"#c9c9c9","size":"1","visible":true},"vrangebar":{"id":"vrangebar","trackbarpadding":"1px","background":"transparent","linestyle":"0px solid #d5d5d5","trackbarlinestyle":"0px none","trackbarfillstyle":"#c9c9c9","size":"1","visible":true},"seriesset":[{"id":"series0","titletext":"rainfall","barvisible":true,"barsize":"75","itemtextcolor":"#003860","itemtextfont":"normal 10/normal \"맑은 고딕\"","valuecolumn":"bind:rainfall","itemtextposition":"inside start","itemtextvisible":"true","itemtexttype":"number","barlinestyle":"1px solid #1abd9c","barfillstyle":"#1abd9c"},{"id":"series1","titletext":"mean","barvisible":true,"barsize":"75","itemtextcolor":"#003860","itemtextfont":"normal 10/normal \"맑은 고딕\"","valuecolumn":"bind:mean","itemtextposition":"inside start","itemtextvisible":"true","itemtexttype":"number","barlinestyle":"1px solid #1a85be","barfillstyle":"#1a85be"}]});obj.set_categorycolumn("bind:name");this.addChild(obj.name,obj);obj=new Layout("default","",768,480,this,function(p){});obj.set_mobileorientation("landscape");this.addLayout(obj.name,obj);};this.loadPreloadList=function(){};this.on_initEvent=function(){};this.loadIncludeScript("GroupedColumn.xfdl");this.loadPreloadList();obj=null;};})();