(function(){return function(){if(!this._is_form){return;}var obj=null;this.on_create=function(){this.set_name("PercentStackedColumn");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(768,480);}obj=new Dataset("Dataset00",this);obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column2\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">Alf</Col><Col id=\"Column1\">47</Col><Col id=\"Column2\">75</Col></Row><Row><Col id=\"category\">Bert</Col><Col id=\"Column1\">32</Col><Col id=\"Column2\">74</Col></Row><Row><Col id=\"category\">Craig</Col><Col id=\"Column1\">71</Col><Col id=\"Column2\">85</Col></Row><Row><Col id=\"category\">Dan</Col><Col id=\"Column1\">25</Col><Col id=\"Column2\">19</Col></Row><Row><Col id=\"category\">Edgar</Col><Col id=\"Column1\">23</Col><Col id=\"Column2\">71</Col></Row><Row><Col id=\"category\">Fred</Col><Col id=\"Column1\">81</Col><Col id=\"Column2\">59</Col></Row><Row><Col id=\"category\">Gary</Col><Col id=\"Column1\">43</Col><Col id=\"Column2\">130</Col></Row><Row><Col id=\"category\">Harry</Col><Col id=\"Column1\">23</Col><Col id=\"Column2\">20</Col></Row></Rows>");this.addChild(obj.name,obj);obj=new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);obj.set_taborder("0");obj.set_binddataset("Dataset00");obj.set_enableanimation("false");obj.set_bargrouping("true");obj.set_stacktype("none");obj._setContents({"title":{"id":"title","text":"Bar Chart","textfont":"20pt/normal '맑은 고딕'","padding":"0px 0px 5px","visible":"false"},"legend":{"id":"legend","padding":"3px 10px 3px 10px","itemtextfont":"9pt '맑은 고딕'","itemtextcolor":"#4c4c4c"},"hrangebar":{"id":"hrangebar","trackbarpadding":"1px","background":"#eaeaea","linestyle":"1px solid #d5d5d5","trackbarlinestyle":"0px none","trackbarfillstyle":"#c9c9c9","size":"12","visible":false},"vrangebar":{"id":"vrangebar","trackbarpadding":"1px","background":"#eaeaea","linestyle":"1px solid #d5d5d5","trackbarlinestyle":"0px none","trackbarfillstyle":"#c9c9c9","size":"12","visible":false},"tooltip":{"id":"tooltip","background":"#4b4b4b","linestyle":"0px none","textcolor":"white","textfont":"10pt/normal '맑은 고딕'","padding":"5px"},"board":{"id":"board"},"categoryaxis":{"id":"categoryaxis","titletextcolor":"#4c4c4c","titletextfont":"bold 12pt '맑은 고딕'","labeltextcolor":"#6f6f6f","labeltextfont":"11pt '맑은 고딕'","axislinestyle":"1px solid #525252","ticklinestyle":"1px solid #525252","boardlinestyle":"1px solid #d0d0d0"},"seriesset":[{"id":"series0","titletext":"TYPE A","barvisible":true,"barsize":"65","itemtextvisible":"false","itemtextcolor":"#003860","itemtextfont":"bold 12pt '맑은 고딕'","valuecolumn":"bind:Column1","barfillstyle":"#494949","barlinestyle":"1px solid #000000"},{"id":"series1","titletext":"TYPE B","barvisible":true,"barsize":"65","itemtextvisible":"false","itemtextcolor":"#003860","itemtextfont":"bold 12pt '맑은 고딕'","valuecolumn":"bind:Column2","barfillstyle":"#35A0DA","barlinestyle":"1px solid #000000"}],"valueaxes":[{"id":"valueaxis0","boardlinevisible":true,"boardlinestyle":"1px solid #d0d0d0","labeltextcolor":"#6f6f6f","labeltextfont":"10pt/normal '맑은 고딕'","titletextcolor":"#4c4c4c","titletextfont":"bold 12pt '맑은 고딕'","ticklinestyle":"1px solid #525252","axislinestyle":"1px solid #525252","visible":"true","autotickscale":"20"}]});obj.set_categorycolumn("bind:category");this.addChild(obj.name,obj);obj=new Layout("default","",768,480,this,function(p){});obj.set_mobileorientation("landscape");this.addLayout(obj.name,obj);};this.loadPreloadList=function(){};this.registerScript("bar_dualcolor_postaction.xfdl",function(){this.BasicChart00_ondrawend=function(obj,e){var pos,bound,item;var x,y,w,h;for(var i=0;i<2;i++ ){for(var j=0;j<this.Dataset00.rowcount;j++ ){pos=obj.getSeriesPointPos(i,j);bound=pos.bound;x=bound.left;y=bound.top;w=bound.width/2;h=bound.height;item=obj.addUserControl("itemrect_"+i+"_"+j,"rect");item.set_x(x);item.set_y(y);item.set_width(w);item.set_height(h);item.set_opacity(0.3);item.set_fillstyle("#ffffff");}}obj.userControlDraw();};});this.on_initEvent=function(){this.BasicChart00.addEventHandler("ondrawend",this.BasicChart00_ondrawend,this);};this.loadIncludeScript("bar_dualcolor_postaction.xfdl");this.loadPreloadList();obj=null;};})();