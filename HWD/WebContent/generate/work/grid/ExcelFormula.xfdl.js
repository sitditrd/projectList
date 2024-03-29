(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ExcelFormula");
            this.set_titletext("엑셀수식Export");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,1030);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOut", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column3\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column4\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column5\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column6\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column7\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column8\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column9\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column10\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column11\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column12\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column13\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">투비소프트 A 그룹</Col><Col id=\"Column1\">A-A 팀</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">100000</Col><Col id=\"Column4\">50000</Col><Col id=\"Column5\">100000</Col><Col id=\"Column6\">100000</Col><Col id=\"Column7\">50000</Col><Col id=\"Column8\">180000</Col><Col id=\"Column9\">180000</Col><Col id=\"Column10\">90000</Col><Col id=\"Column11\">90000</Col><Col id=\"Column12\">110000</Col><Col id=\"Column13\">55000</Col></Row><Row><Col id=\"Column0\">투비소프트 A 그룹</Col><Col id=\"Column1\">A-B 팀</Col><Col id=\"Column2\">110000</Col><Col id=\"Column3\">220000</Col><Col id=\"Column4\">110000</Col><Col id=\"Column5\">100000</Col><Col id=\"Column6\">110000</Col><Col id=\"Column7\">55000</Col><Col id=\"Column8\">180000</Col><Col id=\"Column9\">180000</Col><Col id=\"Column10\">90000</Col><Col id=\"Column11\">90000</Col><Col id=\"Column12\">370000</Col><Col id=\"Column13\">185000</Col></Row><Row><Col id=\"Column0\">투비소프트 A 그룹</Col><Col id=\"Column1\">A-C 팀</Col><Col id=\"Column2\">135000</Col><Col id=\"Column3\">270000</Col><Col id=\"Column4\">135000</Col><Col id=\"Column5\">50000</Col><Col id=\"Column6\">100000</Col><Col id=\"Column7\">50000</Col><Col id=\"Column8\">65000</Col><Col id=\"Column9\">210000</Col><Col id=\"Column10\">105000</Col><Col id=\"Column11\">920000</Col><Col id=\"Column12\">660000</Col><Col id=\"Column13\">330000</Col></Row><Row><Col id=\"Column0\">투비소프트 A 그룹</Col><Col id=\"Column1\">A-D 팀</Col><Col id=\"Column2\">500000</Col><Col id=\"Column3\">180000</Col><Col id=\"Column4\">90000</Col><Col id=\"Column5\">250000</Col><Col id=\"Column6\">130000</Col><Col id=\"Column7\">65000</Col><Col id=\"Column8\">180000</Col><Col id=\"Column9\">140000</Col><Col id=\"Column10\">70000</Col><Col id=\"Column11\">280000</Col><Col id=\"Column12\">860000</Col><Col id=\"Column13\">430000</Col></Row><Row><Col id=\"Column0\">투비소프트 A 그룹</Col><Col id=\"Column1\">A-E 팀</Col><Col id=\"Column2\">400000</Col><Col id=\"Column3\">100000</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">50000</Col><Col id=\"Column6\">300000</Col><Col id=\"Column7\">150000</Col><Col id=\"Column8\">0</Col><Col id=\"Column9\">0</Col><Col id=\"Column10\">0</Col><Col id=\"Column11\">90000</Col><Col id=\"Column12\">970000</Col><Col id=\"Column13\">485000</Col></Row><Row><Col id=\"Column0\">투비소프트 A 그룹</Col><Col id=\"Column1\">A-F 팀</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">200000</Col><Col id=\"Column6\">400000</Col><Col id=\"Column7\">200000</Col><Col id=\"Column8\">0</Col><Col id=\"Column9\">0</Col><Col id=\"Column10\">0</Col><Col id=\"Column11\">570000</Col><Col id=\"Column12\">920000</Col><Col id=\"Column13\">460000</Col></Row><Row><Col id=\"Column0\">투비소프트 B 그룹</Col><Col id=\"Column1\">B-A 팀</Col><Col id=\"Column2\">1000</Col><Col id=\"Column3\">500</Col><Col id=\"Column4\">50000</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">100000</Col><Col id=\"Column7\">50000</Col><Col id=\"Column8\">5000</Col><Col id=\"Column9\">150000</Col><Col id=\"Column10\">75000</Col><Col id=\"Column11\">7</Col><Col id=\"Column12\">700000</Col><Col id=\"Column13\">350000</Col></Row><Row><Col id=\"Column0\">투비소프트 B 그룹</Col><Col id=\"Column1\">B-B 팀</Col><Col id=\"Column2\">500</Col><Col id=\"Column3\">50</Col><Col id=\"Column4\">200000</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">400000</Col><Col id=\"Column7\">200000</Col><Col id=\"Column8\">100000</Col><Col id=\"Column9\">180000</Col><Col id=\"Column10\">90000</Col><Col id=\"Column11\">28</Col><Col id=\"Column12\">280000</Col><Col id=\"Column13\">140000</Col></Row><Row><Col id=\"Column0\">투비소프트 B 그룹</Col><Col id=\"Column1\">B-C 팀</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">250000</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">500000</Col><Col id=\"Column7\">250000</Col><Col id=\"Column8\">150000</Col><Col id=\"Column9\">180000</Col><Col id=\"Column10\">90000</Col><Col id=\"Column11\">57</Col><Col id=\"Column12\">570000</Col><Col id=\"Column13\">285000</Col></Row><Row><Col id=\"Column0\">투비소프트 B 그룹</Col><Col id=\"Column1\">B-D 팀</Col><Col id=\"Column2\">100</Col><Col id=\"Column3\">1000</Col><Col id=\"Column4\">250000</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">400000</Col><Col id=\"Column7\">200000</Col><Col id=\"Column8\">100000</Col><Col id=\"Column9\">160000</Col><Col id=\"Column10\">80000</Col><Col id=\"Column11\">81</Col><Col id=\"Column12\">810000</Col><Col id=\"Column13\">405000</Col></Row><Row><Col id=\"Column0\">투비소프트 B 그룹</Col><Col id=\"Column1\">B-E 팀</Col><Col id=\"Column2\">4500</Col><Col id=\"Column3\">14000</Col><Col id=\"Column4\">15000</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">100000</Col><Col id=\"Column7\">50000</Col><Col id=\"Column8\">25000</Col><Col id=\"Column9\">0</Col><Col id=\"Column10\">0</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">0</Col><Col id=\"Column13\">0</Col></Row><Row><Col id=\"Column0\">투비소프트 B 그룹</Col><Col id=\"Column1\">B-F 팀</Col><Col id=\"Column2\">9900</Col><Col id=\"Column3\">20000</Col><Col id=\"Column4\">10000</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">100000</Col><Col id=\"Column7\">50000</Col><Col id=\"Column8\">25000</Col><Col id=\"Column9\">0</Col><Col id=\"Column10\">0</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">0</Col><Col id=\"Column13\">0</Col></Row><Row><Col id=\"Column0\">투비소프트 C 그룹</Col><Col id=\"Column1\">C-A 팀</Col><Col id=\"Column2\">900</Col><Col id=\"Column3\">1000</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">48</Col><Col id=\"Column9\">480000</Col><Col id=\"Column10\">240000</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">140000</Col><Col id=\"Column13\">70000</Col></Row><Row><Col id=\"Column0\">투비소프트 C 그룹</Col><Col id=\"Column1\">C-B 팀</Col><Col id=\"Column2\">700</Col><Col id=\"Column3\">800</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">4500</Col><Col id=\"Column7\">9500</Col><Col id=\"Column8\">10000</Col><Col id=\"Column9\">17000</Col><Col id=\"Column10\">240000</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">430000</Col><Col id=\"Column13\">215000</Col></Row><Row><Col id=\"Column0\">투비소프트 C 그룹</Col><Col id=\"Column1\">C-C 팀</Col><Col id=\"Column2\">300</Col><Col id=\"Column3\">400</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">5500</Col><Col id=\"Column7\">7500</Col><Col id=\"Column8\">8000</Col><Col id=\"Column9\">9000</Col><Col id=\"Column10\">245000</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">690000</Col><Col id=\"Column13\">345000</Col></Row><Row><Col id=\"Column0\">투비소프트 C 그룹</Col><Col id=\"Column1\">C-D 팀</Col><Col id=\"Column2\">600</Col><Col id=\"Column3\">500</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">3500</Col><Col id=\"Column7\">8500</Col><Col id=\"Column8\">8000</Col><Col id=\"Column9\">7000</Col><Col id=\"Column10\">255000</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">160000</Col><Col id=\"Column13\">80000</Col></Row><Row><Col id=\"Column0\">투비소프트 C 그룹</Col><Col id=\"Column1\">C-E 팀</Col><Col id=\"Column2\">100</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">2500</Col><Col id=\"Column7\">6500</Col><Col id=\"Column8\">9000</Col><Col id=\"Column9\">4000</Col><Col id=\"Column10\">350000</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">90000</Col><Col id=\"Column13\">0</Col></Row><Row><Col id=\"Column0\">투비소프트 C 그룹</Col><Col id=\"Column1\">C-F 팀</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">200</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">1500</Col><Col id=\"Column7\">3500</Col><Col id=\"Column8\">4000</Col><Col id=\"Column9\">10000</Col><Col id=\"Column10\">150000</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">75000</Col><Col id=\"Column13\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOut02", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column3\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column4\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column5\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column6\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column7\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column8\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column9\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column10\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column11\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column12\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column13\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">투비소프트 A 그룹</Col><Col id=\"Column1\">A-A 팀</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">100000</Col><Col id=\"Column4\">50000</Col><Col id=\"Column5\">100000</Col><Col id=\"Column6\">100000</Col><Col id=\"Column7\">50000</Col><Col id=\"Column8\">180000</Col><Col id=\"Column9\">180000</Col><Col id=\"Column10\">90000</Col><Col id=\"Column11\">90000</Col><Col id=\"Column12\">110000</Col><Col id=\"Column13\">55000</Col></Row><Row><Col id=\"Column0\">투비소프트 A 그룹</Col><Col id=\"Column1\">A-B 팀</Col><Col id=\"Column2\">110000</Col><Col id=\"Column3\">220000</Col><Col id=\"Column4\">110000</Col><Col id=\"Column5\">100000</Col><Col id=\"Column6\">110000</Col><Col id=\"Column7\">55000</Col><Col id=\"Column8\">180000</Col><Col id=\"Column9\">180000</Col><Col id=\"Column10\">90000</Col><Col id=\"Column11\">90000</Col><Col id=\"Column12\">370000</Col><Col id=\"Column13\">185000</Col></Row><Row><Col id=\"Column0\">투비소프트 A 그룹</Col><Col id=\"Column1\">A-C 팀</Col><Col id=\"Column2\">135000</Col><Col id=\"Column3\">270000</Col><Col id=\"Column4\">135000</Col><Col id=\"Column5\">50000</Col><Col id=\"Column6\">100000</Col><Col id=\"Column7\">50000</Col><Col id=\"Column8\">65000</Col><Col id=\"Column9\">210000</Col><Col id=\"Column10\">105000</Col><Col id=\"Column11\">920000</Col><Col id=\"Column12\">660000</Col><Col id=\"Column13\">330000</Col></Row><Row><Col id=\"Column0\">투비소프트 A 그룹</Col><Col id=\"Column1\">A-D 팀</Col><Col id=\"Column2\">500000</Col><Col id=\"Column3\">180000</Col><Col id=\"Column4\">90000</Col><Col id=\"Column5\">250000</Col><Col id=\"Column6\">130000</Col><Col id=\"Column7\">65000</Col><Col id=\"Column8\">180000</Col><Col id=\"Column9\">140000</Col><Col id=\"Column10\">70000</Col><Col id=\"Column11\">280000</Col><Col id=\"Column12\">860000</Col><Col id=\"Column13\">430000</Col></Row><Row><Col id=\"Column0\">투비소프트 A 그룹</Col><Col id=\"Column1\">A-E 팀</Col><Col id=\"Column2\">400000</Col><Col id=\"Column3\">100000</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">50000</Col><Col id=\"Column6\">300000</Col><Col id=\"Column7\">150000</Col><Col id=\"Column8\">0</Col><Col id=\"Column9\">0</Col><Col id=\"Column10\">0</Col><Col id=\"Column11\">90000</Col><Col id=\"Column12\">970000</Col><Col id=\"Column13\">485000</Col></Row><Row><Col id=\"Column0\">투비소프트 A 그룹</Col><Col id=\"Column1\">A-F 팀</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">200000</Col><Col id=\"Column6\">400000</Col><Col id=\"Column7\">200000</Col><Col id=\"Column8\">0</Col><Col id=\"Column9\">0</Col><Col id=\"Column10\">0</Col><Col id=\"Column11\">570000</Col><Col id=\"Column12\">920000</Col><Col id=\"Column13\">460000</Col></Row><Row><Col id=\"Column0\">투비소프트 B 그룹</Col><Col id=\"Column1\">B-A 팀</Col><Col id=\"Column2\">1000</Col><Col id=\"Column3\">500</Col><Col id=\"Column4\">50000</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">100000</Col><Col id=\"Column7\">50000</Col><Col id=\"Column8\">5000</Col><Col id=\"Column9\">150000</Col><Col id=\"Column10\">75000</Col><Col id=\"Column11\">7</Col><Col id=\"Column12\">700000</Col><Col id=\"Column13\">350000</Col></Row><Row><Col id=\"Column0\">투비소프트 B 그룹</Col><Col id=\"Column1\">B-B 팀</Col><Col id=\"Column2\">500</Col><Col id=\"Column3\">50</Col><Col id=\"Column4\">200000</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">400000</Col><Col id=\"Column7\">200000</Col><Col id=\"Column8\">100000</Col><Col id=\"Column9\">180000</Col><Col id=\"Column10\">90000</Col><Col id=\"Column11\">28</Col><Col id=\"Column12\">280000</Col><Col id=\"Column13\">140000</Col></Row><Row><Col id=\"Column0\">투비소프트 B 그룹</Col><Col id=\"Column1\">B-C 팀</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">250000</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">500000</Col><Col id=\"Column7\">250000</Col><Col id=\"Column8\">150000</Col><Col id=\"Column9\">180000</Col><Col id=\"Column10\">90000</Col><Col id=\"Column11\">57</Col><Col id=\"Column12\">570000</Col><Col id=\"Column13\">285000</Col></Row><Row><Col id=\"Column0\">투비소프트 B 그룹</Col><Col id=\"Column1\">B-D 팀</Col><Col id=\"Column2\">100</Col><Col id=\"Column3\">1000</Col><Col id=\"Column4\">250000</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">400000</Col><Col id=\"Column7\">200000</Col><Col id=\"Column8\">100000</Col><Col id=\"Column9\">160000</Col><Col id=\"Column10\">80000</Col><Col id=\"Column11\">81</Col><Col id=\"Column12\">810000</Col><Col id=\"Column13\">405000</Col></Row><Row><Col id=\"Column0\">투비소프트 B 그룹</Col><Col id=\"Column1\">B-E 팀</Col><Col id=\"Column2\">4500</Col><Col id=\"Column3\">14000</Col><Col id=\"Column4\">15000</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">100000</Col><Col id=\"Column7\">50000</Col><Col id=\"Column8\">25000</Col><Col id=\"Column9\">0</Col><Col id=\"Column10\">0</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">0</Col><Col id=\"Column13\">0</Col></Row><Row><Col id=\"Column0\">투비소프트 B 그룹</Col><Col id=\"Column1\">B-F 팀</Col><Col id=\"Column2\">9900</Col><Col id=\"Column3\">20000</Col><Col id=\"Column4\">10000</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">100000</Col><Col id=\"Column7\">50000</Col><Col id=\"Column8\">25000</Col><Col id=\"Column9\">0</Col><Col id=\"Column10\">0</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">0</Col><Col id=\"Column13\">0</Col></Row><Row><Col id=\"Column0\">투비소프트 C 그룹</Col><Col id=\"Column1\">C-A 팀</Col><Col id=\"Column2\">900</Col><Col id=\"Column3\">1000</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">48</Col><Col id=\"Column9\">480000</Col><Col id=\"Column10\">240000</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">140000</Col><Col id=\"Column13\">70000</Col></Row><Row><Col id=\"Column0\">투비소프트 C 그룹</Col><Col id=\"Column1\">C-B 팀</Col><Col id=\"Column2\">700</Col><Col id=\"Column3\">800</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">4500</Col><Col id=\"Column7\">9500</Col><Col id=\"Column8\">10000</Col><Col id=\"Column9\">17000</Col><Col id=\"Column10\">240000</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">430000</Col><Col id=\"Column13\">215000</Col></Row><Row><Col id=\"Column0\">투비소프트 C 그룹</Col><Col id=\"Column1\">C-C 팀</Col><Col id=\"Column2\">300</Col><Col id=\"Column3\">400</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">5500</Col><Col id=\"Column7\">7500</Col><Col id=\"Column8\">8000</Col><Col id=\"Column9\">9000</Col><Col id=\"Column10\">245000</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">690000</Col><Col id=\"Column13\">345000</Col></Row><Row><Col id=\"Column0\">투비소프트 C 그룹</Col><Col id=\"Column1\">C-D 팀</Col><Col id=\"Column2\">600</Col><Col id=\"Column3\">500</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">3500</Col><Col id=\"Column7\">8500</Col><Col id=\"Column8\">8000</Col><Col id=\"Column9\">7000</Col><Col id=\"Column10\">255000</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">160000</Col><Col id=\"Column13\">80000</Col></Row><Row><Col id=\"Column0\">투비소프트 C 그룹</Col><Col id=\"Column1\">C-E 팀</Col><Col id=\"Column2\">100</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">2500</Col><Col id=\"Column7\">6500</Col><Col id=\"Column8\">9000</Col><Col id=\"Column9\">4000</Col><Col id=\"Column10\">350000</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">90000</Col><Col id=\"Column13\">0</Col></Row><Row><Col id=\"Column0\">투비소프트 C 그룹</Col><Col id=\"Column1\">C-F 팀</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">200</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">0</Col><Col id=\"Column6\">1500</Col><Col id=\"Column7\">3500</Col><Col id=\"Column8\">4000</Col><Col id=\"Column9\">10000</Col><Col id=\"Column10\">150000</Col><Col id=\"Column11\">0</Col><Col id=\"Column12\">75000</Col><Col id=\"Column13\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdExcel","0","147",null,"400","20",null,null,null,null,null,this);
            obj.set_cssclass("grd_excel");
            obj.set_taborder("2");
            obj.set_binddataset("dsOut");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"그룹\"/><Cell col=\"1\" rowspan=\"2\" text=\"팀\"/><Cell col=\"2\" colspan=\"12\" text=\"월별 매출\"/><Cell col=\"14\" rowspan=\"2\" text=\"총매출\"/><Cell row=\"1\" col=\"2\" text=\"1월\"/><Cell row=\"1\" col=\"3\" text=\"2월\"/><Cell row=\"1\" col=\"4\" text=\"3월\"/><Cell row=\"1\" col=\"5\" text=\"4월\"/><Cell row=\"1\" col=\"6\" text=\"5월\"/><Cell row=\"1\" col=\"7\" text=\"6월\"/><Cell row=\"1\" col=\"8\" text=\"7월\"/><Cell row=\"1\" col=\"9\" text=\"8월\"/><Cell row=\"1\" col=\"10\" text=\"9월\"/><Cell row=\"1\" col=\"11\" text=\"10월\"/><Cell row=\"1\" col=\"12\" text=\"11월\"/><Cell row=\"1\" col=\"13\" text=\"12월\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:Column0\" suppress=\"1\" treelevel=\"bind:T_LVL\" background=\"#e2e9f5\"/><Cell col=\"1\" text=\"bind:Column1\" background=\"#e2e9f5\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" text=\"bind:Column2\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"3\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column3\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"4\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column4\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"5\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column5\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"6\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column6\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"7\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column7\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"8\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column8\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"9\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column9\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"10\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column10\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"11\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column11\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"12\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column12\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"13\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column13\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"14\" displaytype=\"normal\" background=\"RGBA(244,145,122,1)\" text=\"expr:&quot;=SUM(C&quot;+(currow+3)+&quot;:N&quot;+(currow+3)+&quot;)&quot;\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo","0","0",null,"80","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("그리드 Format 및 데이터를 엑셀/한셀에서 엑셀 함수를 사용하여 가져오기(Import), 엑셀/한셀에서 내보내기(Export) 처리가 가능합니다. (SUM, IF, AND, OR, MATCH, SEARCH 등)");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","109","431","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀");
            obj.set_cssclass("sta_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btnImport",null,"109","90","30","113",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("가져오기");
            obj.set_cssclass("btn_WF_excelInput");
            this.addChild(obj.name, obj);

            obj = new Button("btnExport",null,"109","90","30","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("내보내기");
            obj.set_cssclass("btn_WF_excelOutput");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHancel","0","608",null,"400","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsOut02");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_cssclass("grd_excel");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"그룹\"/><Cell col=\"1\" rowspan=\"2\" text=\"팀\"/><Cell col=\"2\" colspan=\"12\" text=\"월별 매출\"/><Cell col=\"14\" rowspan=\"2\" text=\"총매출\"/><Cell row=\"1\" col=\"2\" text=\"1월\"/><Cell row=\"1\" col=\"3\" text=\"2월\"/><Cell row=\"1\" col=\"4\" text=\"3월\"/><Cell row=\"1\" col=\"5\" text=\"4월\"/><Cell row=\"1\" col=\"6\" text=\"5월\"/><Cell row=\"1\" col=\"7\" text=\"6월\"/><Cell row=\"1\" col=\"8\" text=\"7월\"/><Cell row=\"1\" col=\"9\" text=\"8월\"/><Cell row=\"1\" col=\"10\" text=\"9월\"/><Cell row=\"1\" col=\"11\" text=\"10월\"/><Cell row=\"1\" col=\"12\" text=\"11월\"/><Cell row=\"1\" col=\"13\" text=\"12월\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:Column0\" suppress=\"1\" treelevel=\"bind:T_LVL\" background=\"#e2e9f5\"/><Cell col=\"1\" text=\"bind:Column1\" background=\"#e2e9f5\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" text=\"bind:Column2\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"3\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column3\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"4\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column4\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"5\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column5\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"6\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column6\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"7\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column7\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"8\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column8\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"9\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column9\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"10\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column10\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"11\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column11\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"12\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column12\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"13\" displaytype=\"number\" editfilter=\"number\" text=\"bind:Column13\" textAlign=\"right\" background=\"rgba(254,245,243,1)\"/><Cell col=\"14\" displaytype=\"normal\" background=\"RGBA(244,145,122,1)\" text=\"expr:&quot;=SUM(C&quot;+(currow+3)+&quot;:N&quot;+(currow+3)+&quot;)&quot;\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","570","431","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("한셀 2014");
            obj.set_cssclass("sta_WF_hancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnHanImport",null,"570","90","30","113",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("가져오기");
            obj.set_cssclass("btn_WF_hancelInput");
            this.addChild(obj.name, obj);

            obj = new Button("btnHanExport",null,"570","90","30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("내보내기");
            obj.set_cssclass("btn_WF_hancelOutput");
            this.addChild(obj.name, obj);

            obj = new Combo("cboRowCnt",null,"109","200","30","206",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboRowCnt_innerdataset = new nexacro.NormalDataset("cboRowCnt_innerdataset", obj);
            cboRowCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">expr:&quot;=SUM(C&quot;+(currow+3)+&quot;:N&quot;+(currow+3)+&quot;)&quot;</Col><Col id=\"datacolumn\">SUM</Col></Row><Row><Col id=\"codecolumn\">=IF(AND(C3&lt;100,J3&gt;100),TRUE,FALSE)</Col><Col id=\"datacolumn\">IF</Col></Row><Row><Col id=\"codecolumn\">=AND(C3&lt;100,J3&gt;100)</Col><Col id=\"datacolumn\">AND</Col></Row><Row><Col id=\"codecolumn\">=OR(C3&lt;100,J3&gt;100)</Col><Col id=\"datacolumn\">OR</Col></Row><Row><Col id=\"codecolumn\">=MATCH(C3,C3:C19,0)</Col><Col id=\"datacolumn\">MATCH</Col></Row><Row><Col id=\"codecolumn\">=SEARCH(C3,C3)</Col><Col id=\"datacolumn\">SEARCH</Col></Row></Rows>");
            obj.set_innerdataset(cboRowCnt_innerdataset);
            obj.set_text("");
            obj.set_value("[ 수식을 선택하세요. ]");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboRowCnt01",null,"570","200","30","206",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboRowCnt01_innerdataset = new nexacro.NormalDataset("cboRowCnt01_innerdataset", obj);
            cboRowCnt01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">expr:&quot;=SUM(C&quot;+(currow+3)+&quot;:N&quot;+(currow+3)+&quot;)&quot;</Col><Col id=\"datacolumn\">SUM</Col></Row><Row><Col id=\"codecolumn\">=IF(AND(C3&lt;100,J3&gt;100),TRUE,FALSE)</Col><Col id=\"datacolumn\">IF</Col></Row><Row><Col id=\"codecolumn\">=AND(C3&lt;100,J3&gt;100)</Col><Col id=\"datacolumn\">AND</Col></Row><Row><Col id=\"codecolumn\">=OR(C3&lt;100,J3&gt;100)</Col><Col id=\"datacolumn\">OR</Col></Row><Row><Col id=\"codecolumn\">=MATCH(C3,C3:C19,0)</Col><Col id=\"datacolumn\">MATCH</Col></Row><Row><Col id=\"codecolumn\">=SEARCH(C3,C3)</Col><Col id=\"datacolumn\">SEARCH</Col></Row></Rows>");
            obj.set_innerdataset(cboRowCnt01_innerdataset);
            obj.set_text("수식을 선택하세요.");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ExcelFormula.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    grid > ExcelFormula
        *  @FileName  ExcelFormula.xfdl
        *  @Creator  presales
        *  @CreateDate  2020.02.06
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2020.02.06      presales                  최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.exportUrl;
        this.importUrl;
        this.exportType; // Grid 속성 selecttype 변경을 위함

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.ExcelFormula_onload = function(obj,e)
        {
        	this.exportUrl = nexacro.getApplication().gvXeniUrl + "XExportImport";
        	this.importUrl = nexacro.getApplication().gvXeniUrl + "XImport";
        };

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
         * @description 사용자 버튼 클릭 이벤트
         */

        this.fnComBtnOnClick = function (obj, e)
        {
        	switch (obj.name)
        	{
        		case "btnExport":
        			this.exportType = "Excel";
        			/* Export 시 selecttype 이 area, multiarea, treecell 일 경우 Header 정보는
        			 표현안됨 (selecttype 을 "row" 로 변경 후 처리)*/
        			this.grdHancel.set_selecttype("row");

        			var arrObjGrid = new Array(this.grdHancel);
        			var objComboData = this.cboRowCnt.text;

        			this.fnExportExcel(arrObjGrid, this.exportType, objComboData);
        			break;
        		case "btnImport":
        			this.fnImportExcel("Sheet1", "A3", "dsOut", "Excel");
        			break;
        		case "btnHanExport":
        			this.exportType = "Hancell";

        			/* Export 시 selecttype 이 area, multiarea, treecell 일 경우 Header 정보는
        			 표현안됨 (selecttype 을 "row" 로 변경 후 처리)*/
        			this.grdExcel.set_selecttype("row");

        			var arrObjGrid = new Array(this.grdExcel);
        			var objComboData = this.cboRowCnt01.text;

        			this.fnExportExcel(arrObjGrid, this.exportType, objComboData);
        			break;
        		case "btnHanImport":
        			this.fnImportExcel("Sheet1", "A3", "dsOut02", "Hancell");
        			break;
        	}
        };

        /**
         * @description 콤보 컴포넌트 변경 이벤트
         */

        this.fn_comCboOnItemChanged = function(obj,e)
        {
        	var objGrid = "";

        	switch (obj.name)
        	{
        		case "cboRowCnt" :
        			objGrid = this.grdHancel;
        			break;

        		case "cboRowCnt01" :
        			objGrid = this.grdExcel;
        			break;
        	}

        	objGrid.setCellProperty("body", 14 ,"text", e.postvalue);
        };


        /**
         * Excel Export
         * @param {arrObjGrid} Export 할 Grid가 들어있는 배열
         * @param {strType} Excel Type (Excel / 한셀)
         * @param {strComboData} 선택된 수식값
         */
        this.fnExportExcel = function (arrObjGrid, strType, strComboData)
        {
        	var exportObj;

        	exportObj = new ExcelExportObject("Export00", this); //ExcelExport 객체 생성

        	// 내보내기 할 엑셀 형식 지정
        	if (strType == "Excel") {
        		exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	} else {
        		exportObj.set_exporttype(nexacro.ExportTypes.HANCELL2014);
        	}

        	exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this); //onsuccess 이벤트 연결
        	exportObj.addEventHandler("onerror", this.Export00_onerror, this); //onerror 이벤트 연결

        	// 하나의 파일에 여러 시트 출력
        	var objGrid;
        	var i, nMax;
        	var strSheetName;
        	var strFileName = "ExportData(" + strComboData + ")";

        	nMax = arrObjGrid.length;

        	for (i = 0; i < nMax; i++)
        	{
        		objGrid = arrObjGrid[i];
        		strSheetName = "Sheet" + (i + 1);

        		exportObj.addExportItem(nexacro.ExportItemTypes.GRID, objGrid, strSheetName + "!A1", "allband", "", "merge");
        	}
        	//trace("this.exportUrl = " + this.exportUrl);
        	exportObj.set_exportfilename(strFileName);
        	exportObj.set_exporturl(this.exportUrl);
        	exportObj.exportData();
        };

        this.Export00_onsuccess = function (obj, e)
        {
        	// trace(obj.name + ":" + e.eventid);
        	// trace("\ne.eventid/e.fromobject/e.fromreferenceobject/e.url: " + e.eventid+"/"+e.fromobject+"/"+e.fromreferenceobject+"/"+e.url);

        	if (this.exportType == "Excel") {
        		this.grdHancel.set_selecttype("area");
        	} else {
        		this.grdExcel.set_selecttype("area");
        	}
        };

        this.Export00_onerror = function (obj, e)
        {
        // 	 trace(obj.name + ":" + e.eventid);
        // 	 trace("\ne.eventid: " + "e.eventID : " + e.eventid);
        // 	 trace("\ne.fromobject: " + e.fromobject);
        // 	 trace("\ne.fromreferenceobject: " + e.fromreferenceobject);
        // 	 trace("\ne.errorcode: " +  e.errorcode);
        // 	 trace("\ne.errormsg: " + e.errormsg);
        };

        /**
         * Excel Import
         * @param {strSheetName} Sheet 명
         * @param {strSheetArea} Sheet 정보
         * @param {strDsName} Dataset Object
         * @param {strType} Excel Type (Excel / 한셀)
         */
        this.fnImportExcel = function (strSheetName, strSheetArea, strDsName, strType)
        {
        	var importObjExcel,importObjHancell;
        	var param2 = strSheetName + "!" + strSheetArea;
        	var param3 = strDsName + "=output1";

        	if (strType == "Excel") {
        		importObjExcel = new ExcelImportObject("Import00", this);
        		importObjExcel.set_importurl(this.importUrl);

        		importObjExcel.set_importtype(nexacro.ImportTypes.EXCEL2007);

        		importObjExcel.addEventHandler("onsuccess", this.fn_ImportOnSuccess, this);
        		importObjExcel.addEventHandler("onerror", this.fn_ImportOnError, this);

        		importObjExcel.set_importfilemode("local");
        		importObjExcel.importData("", param2, param3);

        		importObjExcel = null;
        	} else {
        		importObjHancell = new ExcelImportObject("Import01", this);
        		importObjHancell.set_importurl(this.importUrl);

        		importObjHancell.set_importtype(nexacro.ImportTypes.HANCELL2014);

        		importObjHancell.addEventHandler("onsuccess", this.fn_ImportOnSuccess, this);
        		importObjHancell.addEventHandler("onerror", this.fn_ImportOnError, this);

        		importObjHancell.set_importfilemode("local");
        		importObjHancell.importData("", param2, param3);

        		importObjHancell = null;
        	}
        };

        this.fn_ImportOnSuccess = function (obj, e)
        {
        	// trace(obj.name + ":" + e.eventid);
        };

        this.fn_ImportOnError = function (obj, e)
        {
        	// trace(obj.name + ":" + e.eventid);
        	// trace("\ne.fromobject: " + e.fromobject);
        	// trace("\ne.fromreferenceobject: " + e.fromreferenceobject);
        	// trace("\ne.errorcode: " +  e.errorcode);
        	// trace("\ne.errormsg: " + e.errormsg);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ExcelFormula_onload,this);
            this.btnImport.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnExport.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnHanImport.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnHanExport.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.cboRowCnt.addEventHandler("onitemchanged",this.fn_comCboOnItemChanged,this);
            this.cboRowCnt01.addEventHandler("onitemchanged",this.fn_comCboOnItemChanged,this);
        };

        this.loadIncludeScript("ExcelFormula.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
