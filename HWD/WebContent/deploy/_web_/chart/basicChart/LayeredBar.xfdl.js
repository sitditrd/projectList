(function(){return function(){if(!this._is_form){return;}var obj=null;this.on_create=function(){this.set_name("LayeredBar");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(768,480);}obj=new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);obj.set_taborder("0");obj.set_binddataset("gdsRainfall");obj.set_bargrouping("false");obj.set_rotateaxis("true");obj.set_enableanimation("true");obj._setContents({"title":{"id":"title","text":"Layered Bar","textfont":"20pt/normal '맑은 고딕'","padding":"0px 0px 5px","subtext":"Basic Chart > Bar Chart","subtextcolor":"gray","subtextalign":"right","subtextfont":"italic 8/normal \"Arial\""},"legend":{"id":"legend","padding":"3px 10px 3px 10px","itemtextfont":"9pt '맑은 고딕'","itemtextcolor":"#4c4c4c","itemautofit":"true","align":"bottomcenter","markertextgap":"5","markertype":"circle","verticalitemgap":"5"},"tooltip":{"id":"tooltip","background":"#4b4b4b","linestyle":"0px none","textcolor":"white","textfont":"10pt/normal '맑은 고딕'","padding":"5px"},"board":{"id":"board"},"categoryaxis":{"id":"categoryaxis","titletextcolor":"#4c4c4c","titletextfont":"bold 12pt '맑은 고딕'","labeltextcolor":"#6f6f6f","labeltextfont":"9pt '맑은 고딕'","axislinestyle":"1px solid #525252","ticklinestyle":"1px solid #525252","boardlinestyle":"1px solid #d0d0d0","ticksize":"5","labelgap":"5"},"valueaxes":[{"id":"valueaxis0","boardlinevisible":true,"boardlinestyle":"1px solid #d0d0d0","labeltextcolor":"#6f6f6f","labeltextfont":"9pt/normal '맑은 고딕'","titletextcolor":"#4c4c4c","titletextfont":"bold 12pt '맑은 고딕'","ticklinestyle":"1px solid #525252","axislinestyle":"1px solid #525252","labelgap":"5","ticksize":"5"}],"seriesset":[{"id":"series0","titletext":"rainfall","barvisible":true,"barsize":"75","itemtextcolor":"orangered","itemtextfont":"normal 500 10pt/normal \"맑은 고딕\"","valuecolumn":"bind:rainfall","itemtextposition":"inside start","itemtextvisible":"true","itemtexttype":"number","barlinestyle":"1px solid #1abd9c","barfillstyle":"#1abd9c","baropacity":"0.4"},{"id":"series1","titletext":"mean","barvisible":true,"barsize":"40","valuecolumn":"bind:mean","itemtextposition":"inside start","barlinestyle":"1px solid #1a85be","barfillstyle":"#1a85be","baropacity":"0.8"}]});obj.set_categorycolumn("bind:name");this.addChild(obj.name,obj);obj=new Layout("default","",768,480,this,function(p){});obj.set_mobileorientation("landscape");this.addLayout(obj.name,obj);};this.loadPreloadList=function(){};this.on_initEvent=function(){};this.loadIncludeScript("LayeredBar.xfdl");this.loadPreloadList();obj=null;};})();