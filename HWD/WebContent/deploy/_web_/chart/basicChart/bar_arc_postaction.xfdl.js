(function(){return function(){if(!this._is_form){return;}var obj=null;this.on_create=function(){this.set_name("LayeredColumn");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(768,480);}obj=new Dataset("Dataset01",this);obj._setContents("<ColumnInfo><Column id=\"data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">33.2</Col><Col id=\"name\">서울</Col></Row><Row><Col id=\"data\">14.5</Col><Col id=\"name\">대전</Col></Row><Row><Col id=\"data\">11.8</Col><Col id=\"name\">대구</Col></Row><Row><Col id=\"data\">10.2</Col><Col id=\"name\">광주</Col></Row><Row><Col id=\"data\">12.3</Col><Col id=\"name\">부산</Col></Row><Row><Col id=\"data\">9.2</Col><Col id=\"name\">전주</Col></Row><Row><Col id=\"data\">4.7</Col><Col id=\"name\">인천</Col></Row><Row><Col id=\"data\">4.8</Col><Col id=\"name\">경기</Col></Row><Row><Col id=\"data\">4.9</Col><Col id=\"name\">강원</Col></Row></Rows>");this.addChild(obj.name,obj);obj=new BasicChart("BasicChart00","2","0",null,null,"18","0",null,null,null,null,this);obj.set_taborder("0");obj.set_binddataset("Dataset01");obj.set_bargrouping("false");obj.set_enableanimation("false");obj.set_rotateaxis("true");obj._setContents({"title":{"id":"title","text":"Bar Chart","textfont":"20pt/normal '맑은 고딕'","padding":"0px 0px 5px","visible":"false"},"legend":{"id":"legend","padding":"3px 10px 3px 10px","itemtextfont":"9pt '맑은 고딕'","itemtextcolor":"#4c4c4c","visible":false},"hrangebar":{"id":"hrangebar","trackbarpadding":"1px","background":"#eaeaea","linestyle":"1px solid #d5d5d5","trackbarlinestyle":"0px none","trackbarfillstyle":"#c9c9c9","size":"12","visible":false},"vrangebar":{"id":"vrangebar","trackbarpadding":"1px","background":"#eaeaea","linestyle":"1px solid #d5d5d5","trackbarlinestyle":"0px none","trackbarfillstyle":"#c9c9c9","size":"12","visible":false},"tooltip":{"id":"tooltip","background":"#4b4b4b","linestyle":"0px none","textcolor":"white","textfont":"10pt/normal '맑은 고딕'","padding":"5px"},"board":{"id":"board"},"categoryaxis":{"id":"categoryaxis","titletextcolor":"#4c4c4c","titletextfont":"bold 12pt '맑은 고딕'","labeltextcolor":"#6f6f6f","labeltextfont":"11pt '맑은 고딕'","axislinestyle":"1px solid #525252","ticklinestyle":"1px solid #525252","boardlinestyle":"1px solid #d0d0d0"},"seriesset":[{"id":"series0","titletext":"series","barvisible":true,"barsize":"50","itemtextvisible":true,"itemtextcolor":"#ffffff","itemtextfont":"bold 10pt '맑은 고딕'","valuecolumn":"bind:data","barfillstyle":"red","barlinestyle":"0px solid #ffffff"}],"valueaxes":[{"id":"valueaxis0","boardlinevisible":true,"labeltextcolor":"#6f6f6f","labeltextfont":"10pt/normal '맑은 고딕'","titletextcolor":"#4c4c4c","titletextfont":"bold 12pt '맑은 고딕'","ticklinestyle":"1px solid #525252","axislinestyle":"1px solid #525252","autotickscale":"10"}]});obj.set_categorycolumn("bind:name");this.addChild(obj.name,obj);obj=new Layout("default","",768,480,this,function(p){});obj.set_mobileorientation("landscape");this.addLayout(obj.name,obj);};this.loadPreloadList=function(){};this.registerScript("bar_arc_postaction.xfdl",function(){this.BasicChart00_ondrawend=function(obj,e){var pos,bound,item;var x,y,w,h,r,b,h_half,centerx,centery;for(var j=0;j<this.Dataset01.rowcount;j++ ){pos=obj.getSeriesPointPos(0,j);bound=pos.bound;y=bound.top;r=bound.right;h=bound.height;h_half=h*0.5;centerx=r+h_half;centery=y+h_half;item=obj.addUserControl("itemarc_"+j,"arc");item.setCenter(new nexacro.Point(centerx,centery));item.set_width(h*1.2);item.set_height(h*1.2);item.set_fillstyle("red");}obj.userControlDraw();};});this.on_initEvent=function(){this.BasicChart00.addEventHandler("ondrawend",this.BasicChart00_ondrawend,this);};this.loadIncludeScript("bar_arc_postaction.xfdl");this.loadPreloadList();obj=null;};})();