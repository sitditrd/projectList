(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_6");
            this.set_titletext("Canvas 화살표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">R00789</Col><Col id=\"Column1\">284100</Col><Col id=\"Column2\">10:46</Col><Col id=\"Column3\">10:49</Col></Row><Row><Col id=\"Column0\">R00788</Col><Col id=\"Column1\">283900</Col><Col id=\"Column2\">10:41</Col><Col id=\"Column3\">10:43</Col></Row><Row><Col id=\"Column0\">R00787</Col><Col id=\"Column1\">284100</Col><Col id=\"Column2\">10:31</Col><Col id=\"Column3\">10:33</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">R00786</Col><Col id=\"Column1\">MX7765</Col><Col id=\"Column2\">10:53</Col><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\">R00787</Col><Col id=\"Column1\">PK9125</Col><Col id=\"Column2\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\">R00785</Col><Col id=\"Column1\">PK9622</Col><Col id=\"Column2\">10:34</Col><Col id=\"Column3\">10:53</Col></Row><Row><Col id=\"Column0\">R00784</Col><Col id=\"Column1\">NP8252</Col><Col id=\"Column2\">10:36</Col><Col id=\"Column3\">10:56</Col></Row><Row><Col id=\"Column0\">R00782</Col><Col id=\"Column1\">NP9621</Col><Col id=\"Column2\">10:04</Col><Col id=\"Column3\">10:42</Col><Col id=\"Column4\">1356</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list03", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">R00777</Col><Col id=\"Column1\">PK9211</Col><Col id=\"Column2\">C60040L4CJ001</Col><Col id=\"Column3\">1-3-2</Col><Col id=\"Column4\">10:26</Col><Col id=\"Column5\">10:51</Col><Col id=\"Column6\">H5</Col><Col id=\"Column7\">343760</Col><Col id=\"Column8\">10:53</Col><Col id=\"Column9\">10:58</Col><Col id=\"Column10\">1662</Col></Row><Row><Col id=\"Column0\">R00780</Col><Col id=\"Column1\">PB0608</Col><Col id=\"Column2\">A04020LAXXZ</Col><Col id=\"Column3\">2-5-5</Col><Col id=\"Column4\">10:49</Col><Col id=\"Column6\">C1</Col><Col id=\"Column7\">343840</Col></Row><Row><Col id=\"Column0\">R00778</Col><Col id=\"Column1\">PK9566</Col><Col id=\"Column2\">AU2060Y7BA</Col><Col id=\"Column3\">3-7-7</Col><Col id=\"Column4\">10:34</Col><Col id=\"Column5\">10:50</Col><Col id=\"Column6\">A1</Col><Col id=\"Column7\">345920</Col><Col id=\"Column8\">10:52</Col><Col id=\"Column9\">10:56</Col><Col id=\"Column10\">1666</Col></Row><Row><Col id=\"Column0\">R00779</Col><Col id=\"Column1\">PK9619</Col><Col id=\"Column2\">A07025LAXXH</Col><Col id=\"Column3\">5-6-1</Col><Col id=\"Column4\">10:40</Col><Col id=\"Column5\">10:47</Col><Col id=\"Column6\">C1</Col><Col id=\"Column7\">344620</Col></Row><Row><Col id=\"Column0\">R00781</Col><Col id=\"Column1\">NP8252</Col><Col id=\"Column2\">C15110R8FR</Col><Col id=\"Column3\">4-13-12</Col><Col id=\"Column4\">10:59</Col><Col id=\"Column6\">B5</Col><Col id=\"Column7\">343220</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list04", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">R00777</Col><Col id=\"Column1\">PK9211</Col><Col id=\"Column2\">11:00</Col><Col id=\"Column3\"/><Col id=\"Column4\">0</Col></Row><Row><Col id=\"Column0\">R00775</Col><Col id=\"Column1\">PB0607</Col><Col id=\"Column2\">10:26</Col><Col id=\"Column3\">10:28</Col><Col id=\"Column4\">1621</Col></Row><Row><Col id=\"Column0\">R00778</Col><Col id=\"Column1\">PK9566</Col><Col id=\"Column2\">10:58</Col><Col id=\"Column3\">11:00</Col><Col id=\"Column4\">0</Col></Row><Row><Col id=\"Column0\">R00774</Col><Col id=\"Column1\">PK8250</Col><Col id=\"Column2\">10:13</Col><Col id=\"Column3\">10:19</Col><Col id=\"Column4\">1605</Col></Row><Row><Col id=\"Column0\">R00776</Col><Col id=\"Column1\">NP8251</Col><Col id=\"Column2\">10:42</Col><Col id=\"Column3\">10:52</Col><Col id=\"Column4\">1583</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list05", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">R00729</Col><Col id=\"Column1\">BZ</Col><Col id=\"Column2\">150354</Col><Col id=\"Column3\">01 03:35</Col><Col id=\"Column4\">R00789</Col></Row><Row><Col id=\"Column0\">R00632</Col><Col id=\"Column1\">A8</Col><Col id=\"Column2\">327900</Col><Col id=\"Column3\">31 06:20</Col><Col id=\"Column4\">R00695</Col></Row><Row><Col id=\"Column0\">R00628</Col><Col id=\"Column1\">A8</Col><Col id=\"Column2\">328400</Col><Col id=\"Column3\">31 06:20</Col><Col id=\"Column4\">R00674</Col></Row><Row><Col id=\"Column0\">R00625</Col><Col id=\"Column1\">A2</Col><Col id=\"Column2\">325300</Col><Col id=\"Column3\">31 06:19</Col><Col id=\"Column4\">R00668</Col></Row><Row><Col id=\"Column0\">R00521</Col><Col id=\"Column1\">BZ</Col><Col id=\"Column2\">295753</Col><Col id=\"Column3\">30 07:09</Col><Col id=\"Column4\">R00572</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list06", this);
            obj.set_keystring("G:Column0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">RH</Col><Col id=\"Column1\">R00775</Col><Col id=\"Column2\">PB0607</Col><Col id=\"Column3\">A04320LAGBZ</Col><Col id=\"Column4\">2-5-4</Col><Col id=\"Column5\">10:47</Col><Col id=\"Column6\">10:51</Col></Row><Row><Col id=\"Column0\">RH</Col><Col id=\"Column1\">R00773</Col><Col id=\"Column2\">PK9565</Col><Col id=\"Column3\">AU2060Y7BA</Col><Col id=\"Column4\">3-7-6</Col><Col id=\"Column5\">10:28</Col><Col id=\"Column6\">10:30</Col><Col id=\"Column7\">10:58</Col></Row><Row><Col id=\"Column0\">RH</Col><Col id=\"Column1\">NP8248</Col><Col id=\"Column2\">NP8248</Col><Col id=\"Column3\">C15110R8FR</Col><Col id=\"Column4\">4-13-8</Col><Col id=\"Column5\">09:10</Col><Col id=\"Column6\">09:12</Col><Col id=\"Column7\">09:22</Col><Col id=\"Column8\">1582</Col></Row><Row><Col id=\"Column0\">RH</Col><Col id=\"Column1\">NP8251</Col><Col id=\"Column2\">NP8251</Col><Col id=\"Column3\">C15110R8FR</Col><Col id=\"Column4\">4-13-11</Col><Col id=\"Column5\">10:59</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list07", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\">R00760</Col><Col id=\"Column6\">Mn0122</Col><Col id=\"Column7\">C23140J3CE5</Col><Col id=\"Column8\">5-5</Col><Col id=\"Column9\">09:10</Col><Col id=\"Column10\">0.50/0.50</Col><Col id=\"Column11\">10:28</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\">R00771</Col><Col id=\"Column6\">PB0606</Col><Col id=\"Column7\">A04020LAGBZ</Col><Col id=\"Column9\">10:52</Col><Col id=\"Column10\">1.34/1.35</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","10","39",null,"44","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid");
            obj.set_background("#f6f6f6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"44","70","35","15",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_btnR");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","5",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Canvas 화살표");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static04",null,"40","50","42","410",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회주기");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00",null,"45","80","33","327",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1분</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">5분</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">15분</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">25분</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">35분</Col></Row><Row><Col id=\"datacolumn\">45분</Col><Col id=\"codecolumn\">6</Col></Row><Row><Col id=\"datacolumn\">55분</Col><Col id=\"codecolumn\">7</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("1분");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"40","50","42","256",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("가동");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_background("#76fb55");
            obj.set_border("1px solid");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"40","50","42","206",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("대기");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_background("#fefe48");
            obj.set_border("1px solid");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"40","50","42","156",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("휴지");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_background("#f62ccd");
            obj.set_border("1px solid");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06",null,"40","50","42","106",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("고장");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_background("#fc1702");
            obj.set_border("1px solid");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list01","10","93",null,"123","72.28%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"준비동\"/><Cell col=\"1\" rowspan=\"2\" text=\"준비&#13;&#10;번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"순용선량\"/><Cell col=\"3\" rowspan=\"2\" text=\"개시&#13;&#10;일시\"/><Cell col=\"4\" rowspan=\"2\" text=\"완료&#13;&#10;일시\"/></Band><Band id=\"body\"><Cell text=\"expr:&quot;#&quot; + nexacro.toNumber(currow + 1)\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:Column1\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:Column2\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:Column3\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list02","28.02%","93",null,"171","45.25%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"탈류\"/><Cell col=\"1\" rowspan=\"2\" text=\"준비&#13;&#10;번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"예정&#13;&#10;번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"개시&#13;&#10;일시\"/><Cell col=\"4\" rowspan=\"2\" text=\"완료&#13;&#10;일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"용선&#13;&#10;온도\"/></Band><Band id=\"body\"><Cell text=\"expr:&quot;#&quot; + nexacro.toNumber(currow + 1)\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:Column1\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" text=\"bind:Column2\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:Column3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\" text=\"bind:Column4\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list03","55.35%","93",null,"171","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"선로\"/><Cell col=\"1\" rowspan=\"2\" text=\"Heat&#13;&#10;번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"예정&#13;&#10;번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"출강목표\"/><Cell col=\"4\" rowspan=\"2\" text=\"주조&#13;&#10;순위\"/><Cell col=\"5\" rowspan=\"2\" text=\"취련&#13;&#10;개시\"/><Cell col=\"6\" rowspan=\"2\" text=\"취련&#13;&#10;완료\"/><Cell col=\"7\" rowspan=\"2\" text=\"이차&#13;&#10;성린\"/><Cell col=\"8\" rowspan=\"2\" text=\"전장입량\"/><Cell col=\"9\" rowspan=\"2\" text=\"출강&#13;&#10;개시\"/><Cell col=\"10\" rowspan=\"2\" text=\"출강&#13;&#10;완료\"/><Cell col=\"11\" rowspan=\"2\" text=\"출강&#13;&#10;온도\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" verticalAlign=\"middle\" text=\"expr:&quot;#&quot; + nexacro.toNumber(currow + 1)\"/><Cell col=\"1\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:Column1\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" text=\"bind:Column2\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:Column3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\" text=\"bind:Column4\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"6\" text=\"bind:Column5\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"7\" text=\"bind:Column6\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"8\" text=\"bind:Column7\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:Column8\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"10\" text=\"bind:Column9\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"11\" text=\"bind:Column10\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list04","10","269",null,"171","72.28%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"BB\"/><Cell col=\"1\" rowspan=\"2\" text=\"Heat&#13;&#10;번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"예정&#13;&#10;번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"작업&#13;&#10;개시\"/><Cell col=\"4\" rowspan=\"2\" text=\"작업&#13;&#10;완료\"/><Cell col=\"5\" rowspan=\"2\" text=\"용강&#13;&#10;온도\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" verticalAlign=\"middle\" text=\"expr:&quot;#&quot; + nexacro.toNumber(currow + 1)\"/><Cell col=\"1\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:Column1\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" text=\"bind:Column2\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:Column3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\" text=\"bind:Column4\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list05","72.28%","269",null,"171","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"반송\"/><Cell col=\"1\" rowspan=\"2\" text=\"Heat&#13;&#10;번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"원인\"/><Cell col=\"3\" rowspan=\"2\" text=\"발생&#13;&#10;중량\"/><Cell col=\"4\" rowspan=\"2\" text=\"발생&#13;&#10;일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"대체&#13;&#10;Heat\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" verticalAlign=\"middle\" text=\"expr:&quot;#&quot; + nexacro.toNumber(currow + 1)\"/><Cell col=\"1\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:Column1\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" text=\"bind:Column2\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:Column3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\" text=\"bind:Column4\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_img01","28.22%","269",null,"171","28.12%",null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("stc_img01","17","57","30","64",null,null,null,null,null,null,this.div_img01.form);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::img01.png\') no-repeat center center");
            this.div_img01.addChild(obj.name, obj);

            obj = new Static("stc_img02","67","57","30","64",null,null,null,null,null,null,this.div_img01.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::img01.png\') no-repeat center center");
            this.div_img01.addChild(obj.name, obj);

            obj = new Static("stc_img03","117","57","30","64",null,null,null,null,null,null,this.div_img01.form);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::img01.png\') no-repeat center center");
            this.div_img01.addChild(obj.name, obj);

            obj = new Static("stc_img04",null,"57","30","64","117",null,null,null,null,null,this.div_img01.form);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::img01.png\') no-repeat center center");
            this.div_img01.addChild(obj.name, obj);

            obj = new Static("stc_img05",null,"57","30","64","67",null,null,null,null,null,this.div_img01.form);
            obj.set_taborder("4");
            obj.set_background("url(\'imagerc::img01.png\') no-repeat center center");
            this.div_img01.addChild(obj.name, obj);

            obj = new Static("stc_img06",null,"57","30","64","17",null,null,null,null,null,this.div_img01.form);
            obj.set_taborder("5");
            obj.set_background("url(\'imagerc::img01.png\') no-repeat center center");
            this.div_img01.addChild(obj.name, obj);

            obj = new Div("div_img02","10","443",null,"100","10",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_img07","113","33","60","64",null,null,null,null,null,null,this.div_img02.form);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::img02.png\') no-repeat center center");
            this.div_img02.addChild(obj.name, obj);

            obj = new Static("stc_img08","193","33","60","64",null,null,null,null,null,null,this.div_img02.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::img02.png\') no-repeat center center");
            this.div_img02.addChild(obj.name, obj);

            obj = new Static("stc_img09","273","33","60","64",null,null,null,null,null,null,this.div_img02.form);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::img02.png\') no-repeat center center");
            this.div_img02.addChild(obj.name, obj);

            obj = new Static("stc_img10",null,"33","60","64","227",null,null,null,null,null,this.div_img02.form);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::img02.png\') no-repeat center center");
            this.div_img02.addChild(obj.name, obj);

            obj = new Static("stc_img11",null,"33","60","64","148",null,null,null,null,null,this.div_img02.form);
            obj.set_taborder("4");
            obj.set_background("url(\'imagerc::img02.png\') no-repeat center center");
            this.div_img02.addChild(obj.name, obj);

            obj = new Div("div_img03","10","546",null,"100","10",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_img12","23","33","60","64",null,null,null,null,null,null,this.div_img03.form);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::img03.png\') no-repeat center center");
            this.div_img03.addChild(obj.name, obj);

            obj = new Static("stc_img13","103","33","60","64",null,null,null,null,null,null,this.div_img03.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::img03.png\') no-repeat center center");
            this.div_img03.addChild(obj.name, obj);

            obj = new Static("stc_img14","183","33","60","64",null,null,null,null,null,null,this.div_img03.form);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::img03.png\') no-repeat center center");
            this.div_img03.addChild(obj.name, obj);

            obj = new Static("stc_img15",null,"33","60","64","107",null,null,null,null,null,this.div_img03.form);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::img03.png\') no-repeat center center");
            this.div_img03.addChild(obj.name, obj);

            obj = new Static("stc_img16",null,"33","60","64","27",null,null,null,null,null,this.div_img03.form);
            obj.set_taborder("4");
            obj.set_background("url(\'imagerc::img03.png\') no-repeat center center");
            this.div_img03.addChild(obj.name, obj);

            obj = new Div("div_img04","10","649",null,"100","10",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_img17","113","33","60","64",null,null,null,null,null,null,this.div_img04.form);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::img04.png\') no-repeat center center");
            this.div_img04.addChild(obj.name, obj);

            obj = new Static("stc_img18","193","33","60","64",null,null,null,null,null,null,this.div_img04.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::img04.png\') no-repeat center center");
            this.div_img04.addChild(obj.name, obj);

            obj = new Static("stc_img19","273","33","60","64",null,null,null,null,null,null,this.div_img04.form);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::img04.png\') no-repeat center center");
            this.div_img04.addChild(obj.name, obj);

            obj = new Static("stc_img20",null,"33","60","64","227",null,null,null,null,null,this.div_img04.form);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::img04.png\') no-repeat center center");
            this.div_img04.addChild(obj.name, obj);

            obj = new Static("stc_img21",null,"33","60","64","148",null,null,null,null,null,this.div_img04.form);
            obj.set_taborder("4");
            obj.set_background("url(\'imagerc::img04.png\') no-repeat center center");
            this.div_img04.addChild(obj.name, obj);

            obj = new Grid("grd_list06","10","759",null,null,"58.61%","10",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" colspan=\"2\" text=\"정련\"/><Cell col=\"2\" rowspan=\"2\" text=\"Heat&#13;&#10;번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"예정&#13;&#10;번호\"/><Cell col=\"4\" rowspan=\"2\" text=\"출강목표\"/><Cell col=\"5\" rowspan=\"2\" text=\"주조&#13;&#10;순위\"/><Cell col=\"6\" rowspan=\"2\" text=\"도착&#13;&#10;시간\"/><Cell col=\"7\" rowspan=\"2\" text=\"게시&#13;&#10;시간\"/><Cell col=\"8\" rowspan=\"2\" text=\"완료&#13;&#10;시간\"/><Cell col=\"9\" rowspan=\"2\" text=\"용강&#13;&#10;온도\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:Column0\"/><Cell col=\"1\" textAlign=\"center\" verticalAlign=\"middle\" text=\"expr:&quot;#&quot; + crurrow + 1\"/><Cell col=\"2\" text=\"bind:Column1\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" text=\"bind:Column2\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:Column3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\" text=\"bind:Column4\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"6\" text=\"bind:Column5\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:Column6\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:Column7\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:Column8\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list07","41.98%","759",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"연주\"/><Cell col=\"1\" colspan=\"5\" text=\"대기 Heat\"/><Cell col=\"6\" colspan=\"7\" text=\"진행 Heat\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" text=\"Heat&#13;&#10;번호\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" text=\"예정&#13;&#10;번호\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" text=\"출강목표\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" text=\"주조&#13;&#10;순위\"/><Cell row=\"1\" col=\"5\" rowspan=\"2\" text=\"도착&#13;&#10;시간\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" text=\"Heat&#13;&#10;번호\"/><Cell row=\"1\" col=\"7\" rowspan=\"2\" text=\"예정&#13;&#10;번호\"/><Cell row=\"1\" col=\"8\" rowspan=\"2\" text=\"출강목표\"/><Cell row=\"1\" col=\"9\" rowspan=\"2\" text=\"주조&#13;&#10;순위\"/><Cell row=\"1\" col=\"10\" rowspan=\"2\" text=\"주조&#13;&#10;게시\"/><Cell row=\"1\" col=\"11\" rowspan=\"2\" text=\"주조속도\"/><Cell row=\"1\" col=\"12\" rowspan=\"2\" text=\"완료&#13;&#10;시간\"/></Band><Band id=\"body\"><Cell text=\"expr:&quot;#&quot; + currow + 1\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\" text=\"bind:Column10\"/><Cell col=\"12\" text=\"bind:Column11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,940,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PoC_6.xfdl", function() {
        this.PoC_6_onload = function(obj,e)
        {
        };

        this.fn_comBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btn_search" :
        			this.grd_list01.set_binddataset(this.ds_list01);
        			this.grd_list02.set_binddataset(this.ds_list02);
        			this.grd_list03.set_binddataset(this.ds_list03);
        			this.grd_list04.set_binddataset(this.ds_list04);
        			this.grd_list05.set_binddataset(this.ds_list05);
        			this.grd_list06.set_binddataset(this.ds_list06);
        			this.grd_list07.set_binddataset(this.ds_list07);
        			break;
        	}
        };

        this.fn_comStcOnMouseEnter = function(obj,e)
        {
        	var i;
        	var objName;
        	var id, canvasTop, canvasLeft, canvasTop2, canvasLeft2, canvasWidth2, canvasTop3, canvasLeft3, canvasLeft4, canvasTop4, canvasLeft5, canvasWidth5,
        	    canvasLeft6, canvasLeft7, canvasTop7, canvasLeft8, canvasWidth8, canvasLeft9;

        	for (i = this.components.length; i >= 0; i--)
        	{
        		if (this.all[i] == "[object CanvasComp]")
        		{
        			objName = this.all[i].name;
        			this.removeChild(objName);

        			i++;
        		}
        	}

        	id = "canvL_" + obj.name;

        	switch (obj.name)
        	{
        		case "stc_img01" :
        			canvasTop = nexacro.toNumber(this.div_img01.top) + (nexacro.toNumber(obj.top) + nexacro.toNumber(obj.height));
        			canvasLeft = this.div_img01.getOffsetLeft() + this.div_img01.form.stc_img01.getOffsetLeft();
        			break;

        		case "stc_img02" :
        			canvasTop = nexacro.toNumber(this.div_img01.top) + (nexacro.toNumber(obj.top) + nexacro.toNumber(obj.height));
        			canvasLeft = this.div_img01.getOffsetLeft() + this.div_img01.form.stc_img02.getOffsetLeft();
        			break;

        		case "stc_img03" :
        			canvasTop = nexacro.toNumber(this.div_img01.top) + (nexacro.toNumber(obj.top) + nexacro.toNumber(obj.height));
        			canvasLeft = this.div_img01.getOffsetLeft() + this.div_img01.form.stc_img03.getOffsetLeft();
        			break;
        	}

        	// Canvas Line 1 - objCanvas 생성
        	var objCanvas = new nexacro.CanvasComponent();
        	objCanvas.init(id, canvasLeft, canvasTop, 30, 69);
        	this.addChild(id, objCanvas);
        	objCanvas.show();
        	//objCanvas.set_border("1px solid");

        	// 좌표
        	var canvasContext = objCanvas._canvas;
        	var nX = canvasContext.width / 2;

        	canvasContext.setElementStrokeStyle("black");
        	canvasContext.setElementLineWidth(2);
        	canvasContext.beginPath(); // 새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.
        	canvasContext.moveTo(nX, 0);
        	canvasContext.lineTo(nX, 80); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.

        	canvasContext.closePath(); // 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
        	canvasContext.stroke(); // 윤곽선을 이용하여 도형을 그립니다.

        	// Canvas Line 2 - objCanvas 생성
        	var nLine2Left = 123;

        	id = "canvL2_" + obj.name;
        	canvasTop2 = this.div_img02.top;

        	switch (obj.name)
        	{
        		case "stc_img01" :
        			canvasLeft2 = this.div_img02.form.stc_img07.getOffsetLeft() + 40;
        			canvasWidth2 = objCanvas.left - nLine2Left;
        			break;

        		case "stc_img02" :
        			canvasLeft2 = this.div_img02.form.stc_img08.getOffsetLeft() + 40;
        			canvasWidth2 = objCanvas.left - (nLine2Left + 80);
        			break;

        		case "stc_img03" :
        			canvasLeft2 = this.div_img02.form.stc_img09.getOffsetLeft() + 40;
        			canvasWidth2 = objCanvas.left - (nLine2Left + 160);
        			break;
        	}

        	var objCanvas2 = new nexacro.CanvasComponent();
        	objCanvas2.init(id, canvasLeft2, canvasTop2, canvasWidth2, 30);
        	this.addChild(id, objCanvas2);
        	objCanvas2.show();
        	//objCanvas2.set_border("1px solid");

        	// 좌표
        	var canvasContext2 = objCanvas2._canvas;
        	var nX = 0;
        	var nY = objCanvas2.height;
        	var nX2 = objCanvas2.width;

        	canvasContext2.setElementStrokeStyle("black");
        	canvasContext2.setElementLineWidth(2);
        	canvasContext2.beginPath(); // 새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.
        	canvasContext2.moveTo(nX, nY / 2);
        	canvasContext2.lineTo(nX2 - 16, nY / 2); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.

        	canvasContext2.closePath(); // 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
        	canvasContext2.stroke(); // 윤곽선을 이용하여 도형을 그립니다.

        	// Canvas Line 3 - objCanvas 생성
        	id = "canvL3_" + obj.name;
        	canvasTop3 = nexacro.toNumber(objCanvas2.top) + 15;

        	switch (obj.name)
        	{
        		case "stc_img01" :
        			canvasLeft3 = this.div_img02.form.stc_img07.getOffsetLeft() + 35;
        			break;

        		case "stc_img02" :
        			canvasLeft3 = this.div_img02.form.stc_img08.getOffsetLeft() + 35;
        			break;

        		case "stc_img03" :
        			canvasLeft3 = this.div_img02.form.stc_img09.getOffsetLeft() + 35;
        			break;
        	}

        	var objCanvas3 = new nexacro.CanvasComponent();
        	objCanvas3.init(id, canvasLeft3, canvasTop3, 10, 100);
        	this.addChild(id, objCanvas3);
        	objCanvas3.show();


        	// 좌표
        	var canvasContext3 = objCanvas3._canvas;
        	var nX = canvasContext3.width / 2;
        	var nY = 0;

        	canvasContext3.setElementStrokeStyle("black");
        	canvasContext3.setElementLineWidth(2);

        	canvasContext3.beginPath(); // 새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.
        	canvasContext3.moveTo(nX, nY);
        	canvasContext3.lineTo(nX, 20); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        	canvasContext3.moveTo(5, 20);
        	canvasContext3.lineTo(0, 10); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        	canvasContext3.lineTo(10, 10); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        	canvasContext3.fillStyle = "black";
        	canvasContext3.fill();
        	canvasContext3.closePath(); // 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
        	canvasContext3.stroke(); // 윤곽선을 이용하여 도형을 그립니다.

        	// Canvas Line 4 - objCanvas 생성
        	id = "canvL4_" + obj.name;

        	switch (obj.name)
        	{
        		case "stc_img01" :
        			canvasLeft4 = this.div_img02.form.stc_img07.getOffsetLeft() + (this.div_img02.form.stc_img07.width / 2) + 5;
        			canvasTop4 = nexacro.toNumber(this.div_img02.top) + (nexacro.toNumber(this.div_img02.form.stc_img07.top) + nexacro.toNumber(this.div_img02.form.stc_img07.height) - 10);
        			break;

        		case "stc_img02" :
        			canvasLeft4 = this.div_img02.form.stc_img08.getOffsetLeft() + (this.div_img02.form.stc_img08.width / 2) + 5;
        			canvasTop4 = nexacro.toNumber(this.div_img02.top) + (nexacro.toNumber(this.div_img02.form.stc_img08.top) + nexacro.toNumber(this.div_img02.form.stc_img08.height) - 10);
        			break;

        		case "stc_img03" :
        			canvasLeft4 = this.div_img02.form.stc_img09.getOffsetLeft() + (this.div_img02.form.stc_img09.width / 2) + 5;
        			canvasTop4 = nexacro.toNumber(this.div_img02.top) + (nexacro.toNumber(this.div_img02.form.stc_img09.top) + nexacro.toNumber(this.div_img02.form.stc_img09.height) - 10);
        			break;
        	}

        	var objCanvas4 = new nexacro.CanvasComponent();
        	objCanvas4.init(id, canvasLeft4, canvasTop4, 10, 40);
        	this.addChild(id, objCanvas4);
        	objCanvas4.show();
        	//objCanvas4.set_border("1px solid");

        	// 좌표
        	var canvasContext4 = objCanvas4._canvas;
        	var nX = objCanvas4.width / 2;
        	var nY = 0;

        	canvasContext4.setElementStrokeStyle("black");
        	canvasContext4.setElementLineWidth(2);
        	canvasContext4.beginPath(); // 새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.
        	canvasContext4.moveTo(nX, nY);
        	canvasContext4.lineTo(nX, 31); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.

        	canvasContext4.closePath(); // 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
        	canvasContext4.stroke(); // 윤곽선을 이용하여 도형을 그립니다.

        	// Canvas Line 5 - objCanvas 생성
        	var nLine5Left = 47;

        	id = "canvL5_" + obj.name;
        	canvasTop5 = this.div_img03.top;

        	switch (obj.name)
        	{
        		case "stc_img01" :
        			canvasLeft5 = this.div_img03.form.stc_img12.getOffsetLeft() + 40;
        			canvasWidth5 = objCanvas2.left - nLine5Left;
        			break;

        		case "stc_img02" :
        			canvasLeft5 = this.div_img03.form.stc_img13.getOffsetLeft() + 40;
        			canvasWidth5 = objCanvas2.left - (nLine5Left + 80);
        			break;

        		case "stc_img03" :
        			canvasLeft5 = this.div_img03.form.stc_img14.getOffsetLeft() + 40;
        			canvasWidth5 = objCanvas2.left - (nLine5Left + 160);
        			break;
        	}

        	var objCanvas5 = new nexacro.CanvasComponent();
        	objCanvas5.init(id, canvasLeft5, canvasTop5, canvasWidth5, 30);
        	this.addChild(id, objCanvas5);
        	objCanvas5.show();
        	//objCanvas5.set_border("1px solid");

        	// 좌표
        	var canvasContext5 = objCanvas5._canvas;
        	var nX = 0;
        	var nY = objCanvas5.height;
        	var nX2 = objCanvas5.width;

        	canvasContext5.setElementStrokeStyle("black");
        	canvasContext5.setElementLineWidth(2);
        	canvasContext5.beginPath(); // 새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.
        	canvasContext5.moveTo(nX, nY / 2);
        	canvasContext5.lineTo(nX2 - 16, nY / 2); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.

        	canvasContext5.closePath(); // 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
        	canvasContext5.stroke(); // 윤곽선을 이용하여 도형을 그립니다.

        	// Canvas Line 6 - objCanva 생성
        	id = "canvL6_" + obj.name;
        	canvasTop6 = nexacro.toNumber(objCanvas5.top) + 15;

        	switch (obj.name)
        	{
        		case "stc_img01" :
        			canvasLeft6 = this.div_img03.form.stc_img12.getOffsetLeft() + 35;
        			break;

        		case "stc_img02" :
        			canvasLeft6 = this.div_img03.form.stc_img13.getOffsetLeft() + 35;
        			break;

        		case "stc_img03" :
        			canvasLeft6 = this.div_img03.form.stc_img14.getOffsetLeft() + 35;
        			break;
        	}

        	var objCanvas6 = new nexacro.CanvasComponent();
        	objCanvas6.init(id, canvasLeft6, canvasTop6, 10, 100);
        	this.addChild(id, objCanvas6);
        	objCanvas6.show();
        	//objCanvas6.set_border("1px solid");

        	// 좌표
        	var canvasContext6 = objCanvas6._canvas;
        	var nX = canvasContext6.width / 2;
        	var nY = 0;

        	canvasContext6.setElementStrokeStyle("black");
        	canvasContext6.setElementLineWidth(2);
        	canvasContext6.beginPath(); // 새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.
        	canvasContext6.moveTo(nX, nY);
        	canvasContext6.lineTo(nX, 20); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        	canvasContext6.moveTo(5, 20);
        	canvasContext6.lineTo(0, 10); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        	canvasContext6.lineTo(10, 10); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        	canvasContext6.fillStyle = "black";
        	canvasContext6.fill();
        	canvasContext6.closePath(); // 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
        	canvasContext6.stroke(); // 윤곽선을 이용하여 도형을 그립니다.

        	// Canvas Line 7 - objCanvas 생성
        	id = "canvL7_" + obj.name;

        	switch (obj.name)
        	{
        		case "stc_img01" :
        			canvasLeft7 = this.div_img03.form.stc_img12.getOffsetLeft() + (this.div_img03.form.stc_img12.width / 2) + 3;
        			canvasTop7 = nexacro.toNumber(this.div_img03.top) + (nexacro.toNumber(this.div_img03.form.stc_img12.top) + nexacro.toNumber(this.div_img03.form.stc_img12.height) + 2);
        			break;

        		case "stc_img02" :
        			canvasLeft7 = this.div_img03.form.stc_img13.getOffsetLeft() + (this.div_img03.form.stc_img13.width / 2) + 3;
        			canvasTop7 = nexacro.toNumber(this.div_img03.top) + (nexacro.toNumber(this.div_img03.form.stc_img13.top) + nexacro.toNumber(this.div_img03.form.stc_img13.height) + 2);
        			break;

        		case "stc_img03" :
        			canvasLeft7 = this.div_img03.form.stc_img14.getOffsetLeft() + (this.div_img03.form.stc_img14.width / 2) + 3;
        			canvasTop7 = nexacro.toNumber(this.div_img03.top) + (nexacro.toNumber(this.div_img03.form.stc_img14.top) + nexacro.toNumber(this.div_img03.form.stc_img14.height) + 2);
        			break;
        	}

        	var objCanvas7 = new nexacro.CanvasComponent();
        	objCanvas7.init(id, canvasLeft7, canvasTop7, 10, 40);
        	this.addChild(id, objCanvas7);
        	objCanvas7.show();
        	//objCanvas7.set_border("1px solid");

        	// 좌표
        	var canvasContext7 = objCanvas7._canvas;
        	var nX = objCanvas7.width / 2;
        	var nY = 0;

        	canvasContext7.setElementStrokeStyle("black");
        	canvasContext7.setElementLineWidth(2);
        	canvasContext7.beginPath(); // 새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.
        	canvasContext7.moveTo(nX, nY);
        	canvasContext7.lineTo(nX, 20); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.

        	canvasContext7.closePath(); // 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
        	canvasContext7.stroke(); // 윤곽선을 이용하여 도형을 그립니다.

        	// Canvas Line 8 - objCanvas 생성
        	var nLine8Left = 47;

        	id = "canvL8_" + obj.name;
        	canvasTop8 = this.div_img04.top;

        	switch (obj.name)
        	{
        		case "stc_img01" :
        			canvasLeft8 = this.div_img03.form.stc_img12.getOffsetLeft() + 38;
        			canvasWidth8 = objCanvas2.left - nLine8Left;
        			break;

        		case "stc_img02" :
        			canvasLeft8 = this.div_img03.form.stc_img13.getOffsetLeft() + 38;
        			canvasWidth8 = objCanvas2.left - (nLine8Left + 80);
        			break;

        		case "stc_img03" :
        			canvasLeft8 = this.div_img03.form.stc_img14.getOffsetLeft() + 38;
        			canvasWidth8 = objCanvas2.left - (nLine8Left + 160);
        			break;
        	}

        	var objCanvas8 = new nexacro.CanvasComponent();
        	objCanvas8.init(id, canvasLeft8, canvasTop8, canvasWidth8, 30);
        	this.addChild(id, objCanvas8);
        	objCanvas8.show();
        	//objCanvas8.set_border("1px solid");

        	// 좌표
        	var canvasContext8 = objCanvas8._canvas;
        	var nX = 0;
        	var nY = objCanvas8.height;
        	var nX2 = objCanvas8.width;

        	canvasContext8.setElementStrokeStyle("black");
        	canvasContext8.setElementLineWidth(2);
        	canvasContext8.beginPath(); // 새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.
        	canvasContext8.moveTo(nX, nY / 2);
        	canvasContext8.lineTo(nX2 - 14, nY / 2); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.

        	canvasContext8.closePath(); // 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
        	canvasContext8.stroke(); // 윤곽선을 이용하여 도형을 그립니다.

        	// Canvas Line 9 - objCanva 생성
        	id = "canvL9_" + obj.name;
        	canvasTop9 = nexacro.toNumber(objCanvas8.top) + 15;

        	switch (obj.name)
        	{
        		case "stc_img01" :
        			canvasLeft9 = this.div_img04.form.stc_img17.getOffsetLeft() + 35;
        			break;

        		case "stc_img02" :
        			canvasLeft9 = this.div_img04.form.stc_img18.getOffsetLeft() + 35;
        			break;

        		case "stc_img03" :
        			canvasLeft9 = this.div_img04.form.stc_img19.getOffsetLeft() + 35;
        			break;
        	}

        	var objCanvas9 = new nexacro.CanvasComponent();
        	objCanvas9.init(id, canvasLeft9, canvasTop9, 10, 30);
        	this.addChild(id, objCanvas9);
        	objCanvas9.show();
        	//objCanvas9.set_border("1px solid");

        	// 좌표
        	var canvasContext9 = objCanvas9._canvas;
        	//var nX = (canvasContext9.width / 2) - 2;
        	var nX = canvasContext9.width / 2;
        	var nY = 0;

        	canvasContext9.setElementStrokeStyle("black");
        	canvasContext9.setElementLineWidth(2);
        	canvasContext9.beginPath(); // 새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.
        	canvasContext9.moveTo(nX, nY);
        	canvasContext9.lineTo(nX, 20); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        	canvasContext9.moveTo(5, 20);
        	canvasContext9.lineTo(0, 10); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        	canvasContext9.lineTo(10, 10); // 현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        	canvasContext9.fillStyle = "black";
        	canvasContext9.fill();
        	canvasContext9.closePath(); // 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
        	canvasContext9.stroke(); // 윤곽선을 이용하여 도형을 그립니다.
        };

        this.div_img01_onmouseleave = function(obj,e)
        {
        	for (i = this.components.length; i >= 0; i--)
        	{
        		if (this.all[i] == "[object CanvasComp]")
        		{
        			objName = this.all[i].name;
        			this.removeChild(objName);
        			i++;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PoC_6_onload,this);
            this.btn_search.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.div_img01.addEventHandler("onmouseleave",this.div_img01_onmouseleave,this);
            this.div_img01.form.stc_img01.addEventHandler("onmouseenter",this.fn_comStcOnMouseEnter,this);
            this.div_img01.form.stc_img02.addEventHandler("onmouseenter",this.fn_comStcOnMouseEnter,this);
            this.div_img01.form.stc_img03.addEventHandler("onmouseenter",this.fn_comStcOnMouseEnter,this);
            this.div_img02.form.stc_img07.addEventHandler("onmouseenter",this.fn_comStcOnMouseEnter,this);
            this.div_img02.form.stc_img08.addEventHandler("onmouseenter",this.fn_comStcOnMouseEnter,this);
            this.div_img02.form.stc_img09.addEventHandler("onmouseenter",this.fn_comStcOnMouseEnter,this);
            this.div_img03.form.stc_img12.addEventHandler("onmouseenter",this.fn_comStcOnMouseEnter,this);
            this.div_img03.form.stc_img13.addEventHandler("onmouseenter",this.fn_comStcOnMouseEnter,this);
            this.div_img03.form.stc_img14.addEventHandler("onmouseenter",this.fn_comStcOnMouseEnter,this);
            this.div_img04.form.stc_img17.addEventHandler("onmouseenter",this.fn_comStcOnMouseEnter,this);
            this.div_img04.form.stc_img18.addEventHandler("onmouseenter",this.fn_comStcOnMouseEnter,this);
            this.div_img04.form.stc_img19.addEventHandler("onmouseenter",this.fn_comStcOnMouseEnter,this);
        };

        this.loadIncludeScript("PoC_6.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
