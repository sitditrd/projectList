(function(){return function(){if(!this._is_form){return;}var obj=null;this.on_create=function(){this.set_name("SimpleDoughnut");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(768,480);}obj=new PieChart("PieChart00","0","0",null,null,"0","0",null,null,null,null,this);obj.set_taborder("0");obj.set_binddataset("gdsCountryLitres");obj.set_enableanimation("false");obj._setContents({"title":{"id":"title","text":"Simple Doughnut","textfont":"20pt/normal '맑은 고딕'","padding":"0px 0px 5px","subtext":"Doughnut Chart","subtextalign":"right","subtextcolor":"gray","subtextfont":"italic 8/normal \"Arial\""},"board":{"id":"board","visible":true,"text":"country Average Litres"},"tooltip":{"id":"tooltip","background":"#4b4b4b","linestyle":"0px none","textcolor":"#ffffff","textfont":"10pt/normal \"맑은 고딕\"","padding":"5px"},"seriesset":[{"id":"series0","radius":"60","itemtextvisible":true,"itemtextfont":"bold 10pt \"Arial\",\"맑은 고딕\"","valuecolumn":"bind:value","fillstyle":"#1abd9c,#1a85be,#1a67bf,#1a4cbf,#641ac0,#9a1ac0,#c2251b,#c2541b,#c2911d,#21c34d","itemtexttype":"text","selectindent":"20","selectcolumn":"bind:select","selectopacity":"1.0","itemtextguidelinestyle":"1px solid darkgray","itemtextguideopacity":"1","itemtextguidesize":"20","itemtext":"expr:country +  \": \" + (value/dataset.getSum(\"value\")*100).toFixed(2) + \"%\"","opacity":"0.8","linestyle":"1px solid white","selectlinestyle":"1px solid white","highlightopacity":"0.5","highlightvisible":"true","innerradius":"40","highlightfillstyle":"yellow","selecttype":"unselect","highlightfilltype":"false","autogradation":"center"}]});obj.set_categorycolumn("bind:country");this.addChild(obj.name,obj);obj=new Layout("default","",768,480,this,function(p){});obj.set_mobileorientation("landscape");this.addLayout(obj.name,obj);};this.loadPreloadList=function(){};this.on_initEvent=function(){};this.loadIncludeScript("doughnut_autogradient_center.xfdl");this.loadPreloadList();obj=null;};})();