(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Calendar");
            this.set_titletext("다양한 형태의 컴포넌트");
            this.set_stepshowtype("action");
            this.set_stepitemsize("0");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_day", this);
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"text_color\" type=\"STRING\" size=\"256\"/><Column id=\"back_color\" type=\"STRING\" size=\"256\"/><Column id=\"border_color\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"date\">20180907</Col><Col id=\"text_color\">orange</Col><Col id=\"back_color\">blue</Col><Col id=\"border_color\">1px solid red</Col></Row><Row><Col id=\"date\">20180910</Col><Col id=\"text_color\">red</Col><Col id=\"back_color\">yellow</Col><Col id=\"border_color\">1px solid red</Col></Row><Row><Col id=\"date\">20180914</Col><Col id=\"text_color\">yellow</Col><Col id=\"back_color\">olive</Col><Col id=\"border_color\">2px solid skyblue</Col></Row><Row><Col id=\"date\">20180922</Col><Col id=\"text_color\">green</Col><Col id=\"back_color\">red</Col><Col id=\"border_color\">1px solid red</Col></Row><Row><Col id=\"date\">20180928</Col><Col id=\"text_color\">blue</Col><Col id=\"back_color\">yellow</Col><Col id=\"border_color\">1px solid red</Col></Row><Row><Col id=\"date\">20180930</Col><Col id=\"text_color\">silver</Col><Col id=\"back_color\">yellow</Col><Col id=\"border_color\">2px solid skyblue</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_progress", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1000</Col></Row><Row><Col id=\"Column0\">500</Col></Row><Row><Col id=\"Column0\">300</Col></Row><Row><Col id=\"Column0\">200</Col></Row><Row><Col id=\"Column0\">850</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PERCENT\" type=\"STRING\" size=\"256\"/><Column id=\"DECORATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"IMAGE\">imagerc::img_na_korea.png</Col><Col id=\"PERCENT\">20</Col><Col id=\"DECORATE\">&lt;fs v='14'&gt; nexacro&lt;/fs&gt; platform</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col><Col id=\"IMAGE\">imagerc::img_na_canada.png</Col><Col id=\"PERCENT\">40</Col><Col id=\"DECORATE\">&lt;fc v='red'&gt; nexacro&lt;/fc&gt; platform</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"IMAGE\">imagerc::img_na_usa.png</Col><Col id=\"PERCENT\">70</Col><Col id=\"DECORATE\">&lt;b v='true'&gt; nexacro&lt;/b&gt; platform </Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col><Col id=\"IMAGE\">imagerc::img_na_korea.png</Col><Col id=\"PERCENT\">100</Col><Col id=\"DECORATE\">&lt;u v='true'&gt; nexacro&lt;/u&gt; platform </Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">CC001</Col><Col id=\"IMAGE\">imagerc::img_na_canada.png</Col><Col id=\"PERCENT\">90</Col><Col id=\"DECORATE\">&lt;s v='true'&gt; nexacro &lt;/s&gt; platform</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">CC002</Col><Col id=\"IMAGE\">imagerc::img_na_china.png</Col><Col id=\"PERCENT\">30</Col><Col id=\"DECORATE\">&lt;l v='tel:010-1234-5678'&gt; Phone Call &lt;/l&gt;</Col></Row><Row><Col id=\"FULL_NAME\">Cameron</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20010303</Col><Col id=\"SALARY\">86000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">CC003</Col><Col id=\"IMAGE\">imagerc::img_na_usa.png</Col><Col id=\"PERCENT\">50</Col><Col id=\"DECORATE\">&lt;l v='mailto:help@tobesoft.com'&gt; Send Mail &lt;/l&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"label\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"label\">영업부</Col><Col id=\"value\">1</Col></Row><Row><Col id=\"label\">연구소</Col><Col id=\"value\">2</Col></Row><Row><Col id=\"label\">기술지원팀</Col><Col id=\"value\">3</Col></Row><Row><Col id=\"label\">개발팀</Col><Col id=\"value\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170101</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170202</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170303</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170404</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170505</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170606</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170707</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170808</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20170909</Col></Row><Row><Col id=\"Column4\">가나다라마바사</Col><Col id=\"Column5\">Button</Col><Col id=\"Column2\">[Undefined]</Col><Col id=\"Column1\">20171010</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"id\">1000</Col><Col id=\"caption\">대메뉴1</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"id\">1100</Col><Col id=\"caption\">중메뉴1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"id\">1110</Col><Col id=\"caption\">소메뉴1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"id\">1120</Col><Col id=\"caption\">소메뉴2</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"id\">1200</Col><Col id=\"caption\">중메뉴2</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"id\">2000</Col><Col id=\"caption\">대메뉴2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu01", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1000</Col><Col id=\"caption\">nexacro Menu01</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">1100</Col><Col id=\"caption\">중메뉴01</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">1110</Col><Col id=\"caption\">소메뉴01</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">1120</Col><Col id=\"caption\">소메뉴02</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">1130</Col><Col id=\"caption\">소메뉴03</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">1140</Col><Col id=\"caption\">소메뉴04</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">1150</Col><Col id=\"caption\">소메뉴05</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">1200</Col><Col id=\"caption\">중메뉴02</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">1300</Col><Col id=\"caption\">중메뉴03</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">2000</Col><Col id=\"caption\">nexacro Menu02</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"id\">1210</Col><Col id=\"caption\">중메뉴04</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"id\">1220</Col><Col id=\"caption\">중메뉴05</Col></Row><Row><Col id=\"id\">3000</Col><Col id=\"caption\">nexacro Menu03</Col><Col id=\"level\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">A1</Col><Col id=\"Column1\">A1</Col></Row><Row><Col id=\"Column0\">B2</Col><Col id=\"Column1\">B2</Col></Row><Row><Col id=\"Column1\">C3</Col><Col id=\"Column0\">C3</Col></Row><Row><Col id=\"Column1\">D4</Col><Col id=\"Column0\">D4</Col></Row><Row><Col id=\"Column1\">E5</Col><Col id=\"Column0\">E5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">Open Work</Col><Col id=\"group\">PM</Col><Col id=\"code\">01</Col></Row><Row><Col id=\"data\">Closed</Col><Col id=\"group\">PM</Col><Col id=\"code\">02</Col></Row><Row><Col id=\"data\">Draft</Col><Col id=\"group\">PM</Col><Col id=\"code\">03</Col></Row><Row><Col id=\"data\">Unreleased</Col><Col id=\"group\">PM</Col><Col id=\"code\">04</Col></Row><Row><Col id=\"data\">Released</Col><Col id=\"group\">CM</Col><Col id=\"code\">05</Col></Row><Row><Col id=\"data\">Assigned</Col><Col id=\"group\">CM</Col><Col id=\"code\">06</Col></Row><Row><Col id=\"data\">OP Complete</Col><Col id=\"group\">CM</Col><Col id=\"code\">07</Col></Row><Row><Col id=\"data\">WO Complete</Col><Col id=\"group\">CM</Col><Col id=\"code\">08</Col></Row><Row><Col id=\"data\">In Progress</Col><Col id=\"group\"/><Col id=\"code\">09</Col></Row><Row><Col id=\"data\">Qualification</Col><Col id=\"group\"/><Col id=\"code\">10</Col></Row><Row><Col id=\"data\">Cancelled</Col><Col id=\"group\"/><Col id=\"code\">11</Col></Row><Row><Col id=\"data\">Pre_Estimated</Col><Col id=\"group\"/><Col id=\"code\">12</Col></Row><Row><Col id=\"data\">Pre-Esimating</Col><Col id=\"group\"/><Col id=\"code\">13</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"productname\" type=\"STRING\" size=\"256\"/><Column id=\"itemname\" type=\"STRING\" size=\"256\"/><Column id=\"measurename\" type=\"STRING\" size=\"256\"/><Column id=\"w201801\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201802\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201803\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201804\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"mJAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201805\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201806\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201807\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201808\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"mFEB\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"productname\">Total</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">Total</Col></Row><Row><Col id=\"productname\">Total</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">Total</Col></Row><Row><Col id=\"productname\">Total</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">Total</Col></Row><Row><Col id=\"productname\">Total</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">Total</Col></Row><Row><Col id=\"productname\">Total</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">Total</Col></Row><Row><Col id=\"productname\">Total</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">Total</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">DK-SBR510/DMG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">DK-SBR510/DMG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">DK-SBR510/DMG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">DK-SBR510/DMG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">DK-SBR510/DMG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">DK-SBR510/DMG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200/XFO</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200/XFO</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200/XFO</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200/XFO</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200/XFO</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200/XFO</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/EUR</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/EUR</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/EUR</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/EUR</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/EUR</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/EUR</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XAA</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XAA</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XAA</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XAA</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XAA</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XAA</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XBG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XBG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XBG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XBG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XBG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XBG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XSA</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XSA</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XSA</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XSA</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XSA</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200B/XSA</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/CHN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/EUR</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/EUR</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/EUR</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/EUR</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/EUR</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/EUR</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/XBG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/XBG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/XBG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/XBG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/XBG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-AD200W/XBG</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BH270B/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BH270B/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BH270B/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BH270B/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BH270B/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BH270B/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BH270W/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BH270W/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BH270W/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BH270W/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BH270W/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BH270W/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BS300/EAN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BS300/EAN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BS300/EAN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BS300/EAN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BS300/EAN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BS300/EAN</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">GC FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BS300/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">RTF</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BS300/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP2 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BS300/UPC</Col></Row><Row><Col id=\"productname\">AUDIO Player</Col><Col id=\"measurename\">AP1 FCST</Col><Col id=\"w201801\">10000</Col><Col id=\"w201802\">20000</Col><Col id=\"w201803\">30000</Col><Col id=\"w201804\">10000</Col><Col id=\"mFEB\">90000</Col><Col id=\"w201805\">30000</Col><Col id=\"w201806\">10000</Col><Col id=\"w201807\">20000</Col><Col id=\"w201808\">30000</Col><Col id=\"mJAN\">70000</Col><Col id=\"itemname\">YA-BS300/UPC</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-BS300/UPC</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-BS300/UPC</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DCT10SBGSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DCT10SBGSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DCT10SBGSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DCT10SBGSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DCT10SBGSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DCT10SBGSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DCU10SBGSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DCU10SBGSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DCU10SBGSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DCU10SBGSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DCU10SBGSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DCU10SBGSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DS200/CHN</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DS200/CHN</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DS200/CHN</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DS200/CHN</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DS200/CHN</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-DS200/CHN</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410BEGSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410BEGSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410BEGSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410BEGSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410BEGSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410BEGSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410SBCSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410SBCSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410SBCSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410SBCSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410SBCSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410SBCSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410SWCSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410SWCSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410SWCSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410SWCSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410SWCSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410SWCSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410WEGSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410WEGSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410WEGSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410WEGSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410WEGSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EC410WEGSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EF310T/UPC</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EF310T/UPC</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EF310T/UPC</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EF310T/UPC</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EF310T/UPC</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EF310T/UPC</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EF310W/UPC</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EF310W/UPC</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EF310W/UPC</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EF310W/UPC</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EF310W/UPC</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EF310W/UPC</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EFE310/WWD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EFE310/WWD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EFE310/WWD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EFE310/WWD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EFE310/WWD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EFE310/WWD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EH500SBCSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EH500SBCSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EH500SBCSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EH500SBCSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EH500SBCSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EH500SBCSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EH600SBCSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EH600SBCSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EH600SBCSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EH600SBCSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EH600SBCSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EH600SBCSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP340SBCSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP340SBCSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP340SBCSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP340SBCSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP340SBCSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP340SBCSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP340SWCSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP340SWCSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP340SWCSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP340SWCSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP340SWCSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP340SWCSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP360G/UPC</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP360G/UPC</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP360G/UPC</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP360G/UPC</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP360G/UPC</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP360G/UPC</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP360L/UPC</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP360L/UPC</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP360L/UPC</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP360L/UPC</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP360L/UPC</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP360L/UPC</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP370B/UPC</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP370B/UPC</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP370B/UPC</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP370B/UPC</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP370B/UPC</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP370B/UPC</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP370W/UPC</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP370W/UPC</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP370W/UPC</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP370W/UPC</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP370W/UPC</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP370W/UPC</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SGCSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SGCSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SGCSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SGCSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SGCSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SGCSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SKCSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SKCSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SKCSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SKCSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SKCSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SKCSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SPCSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SPCSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SPCSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SPCSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SPCSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP380SPCSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP450/UPC</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP450/UPC</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP450/UPC</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP450/UPC</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP450/UPC</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP450/UPC</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500BEGSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500BEGSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500BEGSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500BEGSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500BEGSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500BEGSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SBCSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SBCSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SBCSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SBCSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SBCSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SBCSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SBSSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SBSSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SBSSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SBSSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SBSSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SBSSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SWCSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SWCSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SWCSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SWCSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SWCSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SWCSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SWSSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SWSSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SWSSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SWSSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SWSSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500SWSSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500WEGSTD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500WEGSTD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500WEGSTD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500WEGSTD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500WEGSTD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-EP500WEGSTD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-F1CA/XAA</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-F1CA/XAA</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-F1CA/XAA</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-F1CA/XAA</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-F1CA/XAA</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-F1CA/XAA</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/CHN</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/CHN</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/CHN</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/CHN</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/CHN</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/CHN</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/EUR</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/EUR</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/EUR</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/EUR</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/EUR</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/EUR</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XAA</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XAA</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XAA</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XAA</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XAA</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XAA</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XBG</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XBG</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XBG</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XBG</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XBG</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XBG</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XSA</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XSA</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XSA</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XSA</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XSA</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510B/XSA</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510R/XBG</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510R/XBG</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510R/XBG</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510R/XBG</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510R/XBG</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SBR510R/XBG</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210B/XAA</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210B/XAA</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210B/XAA</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210B/XAA</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210B/XAA</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210B/XAA</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210B/XBG</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210B/XBG</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210B/XBG</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210B/XBG</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210B/XBG</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210B/XBG</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/CHN</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/CHN</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/CHN</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/CHN</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/CHN</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/CHN</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/EUR</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/EUR</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/EUR</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/EUR</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/EUR</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/EUR</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XAA</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XAA</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XAA</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XAA</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XAA</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XAA</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XBG</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XBG</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XBG</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XBG</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XBG</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XBG</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XSA</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XSA</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XSA</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XSA</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XSA</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QB/XSA</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/CHN</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/CHN</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/CHN</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/CHN</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/CHN</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/CHN</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/EUR</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/EUR</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/EUR</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/EUR</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/EUR</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/EUR</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XAA</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XAA</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XAA</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XAA</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XAA</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XAA</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XBG</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XBG</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XBG</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XBG</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XBG</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XBG</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XSA</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XSA</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XSA</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XSA</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XSA</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210QW/XSA</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/CHN</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/CHN</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/CHN</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/CHN</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/CHN</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/CHN</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/XAA</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/XAA</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/XAA</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/XAA</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/XAA</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/XAA</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/XBG</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/XBG</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/XBG</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/XBG</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/XBG</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-SD210W/XBG</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-U5PACK/WWD</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-U5PACK/WWD</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-U5PACK/WWD</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-U5PACK/WWD</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-U5PACK/WWD</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YA-U5PACK/WWD</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YASCT10</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YASCT10</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YASCT10</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YASCT10</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YASCT10</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YASCT10</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-S2QW/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-S2QW/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-S2QW/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-S2QW/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-S2QW/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-S2QW/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAL/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAL/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAL/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAL/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAL/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAL/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAP/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAP/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAP/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAP/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAP/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAP/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAR/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAR/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAR/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAR/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAR/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAR/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAW/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAW/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAW/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAW/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAW/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JAW/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQL/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQL/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQL/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQL/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQL/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQL/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQP/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQP/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQP/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQP/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQP/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQP/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQR/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQR/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQR/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQR/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQR/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQR/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQW/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQW/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQW/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQW/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQW/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQW/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQWH/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQWH/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQWH/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQWH/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQWH/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">AUDIO Player</Col><Col id=\"itemname\">YP-U5JQWH/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-CP3AB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-CP3AB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-CP3AB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-CP3AB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-CP3AB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-CP3AB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCP/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCP/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCP/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCP/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCP/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCP/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCS/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCS/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCS/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCS/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCS/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JCS/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JEB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JEB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JEB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JEB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JEB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JEB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JEP/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JEP/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JEP/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JEP/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JEP/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JEP/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JES/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JES/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JES/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JES/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JES/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R0JES/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JCB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JCB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JCB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JCB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JCP/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JCP/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JCP/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JCP/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JCP/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JCP/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JEB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JEB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JEB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JEB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JEB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JEB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JEP/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JEP/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JEP/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JEP/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JEP/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JEP/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JNB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JNB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JNB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JNB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JNB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JNB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JNP/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JNP/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JNP/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JNP/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JNP/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">Mini PMP</Col><Col id=\"itemname\">YP-R1JNP/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">Sub Total</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P2JAB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P2JAB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P2JAB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P2JAB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P2JAB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P2JAB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JAB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JAB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JAB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JAB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JAB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JAB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JAS/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JAS/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JAS/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JAS/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JAS/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JAS/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JCB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JCB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JCB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JCB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JCS/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JCS/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JCS/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JCS/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JCS/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JCS/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JEB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JEB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JEB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JEB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JEB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JEB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JES/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JES/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JES/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JES/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JES/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JES/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JNB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JNB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JNB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JNB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JNB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JNB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JNS/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JNS/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JNS/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JNS/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JNS/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-P3JNS/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q1JCB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q1JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q1JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q1JCB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q1JCB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q1JCB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JAB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JAB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JAB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JAB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JAB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JAB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JAW/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JAW/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JAW/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JAW/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JAW/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JAW/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JCB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JCB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JCB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JCB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JCW/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JCW/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JCW/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JCW/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JCW/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JCW/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JEB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JEB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JEB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JEB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JEB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JEB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JEW/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JEW/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JEW/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JEW/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JEW/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-Q2JEW/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JAB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JAB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JAB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JAB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JAB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JAB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JAR/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JAR/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JAR/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JAR/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JAR/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JAR/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JCB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JCB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JCB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JCB/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JCW/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JCW/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JCW/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JCW/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JCW/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-S3JCW/XEF</Col></Row><Row><Col id=\"measurename\">GC FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-T10JCB/XEF</Col></Row><Row><Col id=\"measurename\">RTF</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-T10JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP2 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-T10JCB/XEF</Col></Row><Row><Col id=\"measurename\">AP1 FCST</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-T10JCB/XEF</Col></Row><Row><Col id=\"measurename\">CONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-T10JCB/XEF</Col></Row><Row><Col id=\"measurename\">UNCONFIRMED ORDS</Col><Col id=\"productname\">VIDEO Player</Col><Col id=\"itemname\">YP-T10JCB/XEF</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dimensionid", this);
            obj._setContents("<ColumnInfo><Column id=\"dimensionid\" type=\"STRING\" size=\"256\"/><Column id=\"dimensiontype\" type=\"STRING\" size=\"256\"/><Column id=\"dimensionname\" type=\"STRING\" size=\"256\"/><Column id=\"fixchk\" type=\"STRING\" size=\"256\"/><Column id=\"colsize\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dimensionid\">sales</Col><Col id=\"fixchk\">0</Col><Col id=\"colsize\">70</Col><Col id=\"level\">0</Col><Col id=\"dimensionname\">Sales</Col><Col id=\"dimensiontype\">sales</Col></Row><Row><Col id=\"dimensionid\">product</Col><Col id=\"fixchk\">0</Col><Col id=\"colsize\">80</Col><Col id=\"level\">0</Col><Col id=\"dimensionname\">Product</Col><Col id=\"dimensiontype\">product</Col></Row><Row><Col id=\"dimensionid\">item</Col><Col id=\"fixchk\">0</Col><Col id=\"colsize\">100</Col><Col id=\"level\">0</Col><Col id=\"dimensiontype\">item</Col><Col id=\"dimensionname\">ITEM</Col></Row><Row><Col id=\"dimensionid\">site</Col><Col id=\"fixchk\">0</Col><Col id=\"colsize\">120</Col><Col id=\"level\">0</Col><Col id=\"dimensionname\">Site</Col><Col id=\"dimensiontype\">site</Col></Row><Row><Col id=\"dimensionname\">Plan</Col><Col id=\"dimensionid\">plan</Col><Col id=\"dimensiontype\">plan</Col><Col id=\"fixchk\">1</Col><Col id=\"colsize\">60</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"dimensionid\">measure</Col><Col id=\"fixchk\">1</Col><Col id=\"colsize\">120</Col><Col id=\"dimensionname\">Category</Col><Col id=\"level\">0</Col><Col id=\"dimensiontype\">measure</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dimension", this);
            obj._setContents("<ColumnInfo><Column id=\"dimensionid\" type=\"STRING\" size=\"256\"/><Column id=\"dimensiontype\" type=\"STRING\" size=\"256\"/><Column id=\"dimensionname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dimensionid\">sales</Col><Col id=\"dimensionname\">Sales</Col><Col id=\"dimensiontype\">sales</Col></Row><Row><Col id=\"dimensionid\">product</Col><Col id=\"dimensiontype\">product</Col><Col id=\"dimensionname\">Product</Col></Row><Row><Col id=\"dimensionid\">item</Col><Col id=\"dimensiontype\">item</Col><Col id=\"dimensionname\">Item</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_week", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"week\" type=\"STRING\" size=\"256\"/><Column id=\"monthname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">1</Col><Col id=\"week\">201801</Col><Col id=\"monthname\">JAN</Col></Row><Row><Col id=\"month\">1</Col><Col id=\"week\">201802</Col><Col id=\"monthname\">JAN</Col></Row><Row><Col id=\"month\">1</Col><Col id=\"week\">201803</Col><Col id=\"monthname\">JAN</Col></Row><Row><Col id=\"month\">1</Col><Col id=\"week\">201804</Col><Col id=\"monthname\">JAN</Col></Row><Row><Col id=\"month\">2</Col><Col id=\"week\">201805</Col><Col id=\"monthname\">FEB</Col></Row><Row><Col id=\"month\">2</Col><Col id=\"week\">201806</Col><Col id=\"monthname\">FEB</Col></Row><Row><Col id=\"month\">2</Col><Col id=\"week\">201807</Col><Col id=\"monthname\">FEB</Col></Row><Row><Col id=\"month\">2</Col><Col id=\"week\">201808</Col><Col id=\"monthname\">FEB</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("Calendar00","10","96","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_locale("");
            obj.set_value("20180901");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_trailing","10","174","149","175",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_locale("");
            obj.set_value("20180901");
            obj.set_usetrailingday("true");
            obj.set_type("monthonly");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_today","10","544","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_locale("");
            obj.set_value("20180901");
            obj.set_positionstep("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_lastday","10","602","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_locale("");
            obj.set_value("20180901");
            obj.set_positionstep("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","10","403","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_positionstep("3");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">normal</Col><Col id=\"datacolumn\">normal</Col></Row><Row><Col id=\"codecolumn\">spin</Col><Col id=\"datacolumn\">spin</Col></Row><Row><Col id=\"codecolumn\">monthonly</Col><Col id=\"datacolumn\">month</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("normal");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","325","96","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_positionstep("3");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">normal</Col><Col id=\"datacolumn\">normal</Col></Row><Row><Col id=\"codecolumn\">center</Col><Col id=\"datacolumn\">center</Col></Row><Row><Col id=\"codecolumn\">none</Col><Col id=\"datacolumn\">none</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_value("normal");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_popup","490","96","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_locale("");
            obj.set_value("20180901");
            obj.set_type("normal");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","325","174","149","175",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_locale("");
            obj.set_value("20180901");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_innerdataset("ds_day");
            obj.set_backgroundcolumn("back_color");
            obj.set_bordercolumn("border_color");
            obj.set_datecolumn("date");
            obj.set_textcolorcolumn("text_color");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","479","174","369","175",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_day");
            obj.set_autofittype("col");
            obj.set_positionstep("3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"22\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"date\"/><Cell col=\"1\" colspan=\"3\" text=\"color\"/><Cell row=\"1\" col=\"1\" text=\"text\"/><Cell row=\"1\" col=\"2\" text=\"background\"/><Cell row=\"1\" col=\"3\" text=\"border\"/></Band><Band id=\"body\"><Cell text=\"bind:date\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:text_color\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:back_color\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:border_color\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","140","226","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Trailing Day - usetrailingday");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","481","202","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Date Calculation");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","369","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Calendar Type - type");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","325","140","202","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Anniversary - innerdataset");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_tra","169","174","56","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("0");
            obj.set_rowcount("2");
            obj.set_positionstep("3");
            var rdo_tra_innerdataset = new nexacro.NormalDataset("rdo_tra_innerdataset", obj);
            rdo_tra_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(rdo_tra_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_longformat","390","437","184","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("20180901");
            obj.set_locale("ko_KR");
            obj.set_dateformat("LONGDATE");
            obj.set_editformat("SHORTDATE");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_local","325","403","323","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_positionstep("3");
            var rdo_local_innerdataset = new nexacro.NormalDataset("rdo_local_innerdataset", obj);
            rdo_local_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ko_KR</Col><Col id=\"datacolumn\">Korean</Col></Row><Row><Col id=\"codecolumn\">ja_JP</Col><Col id=\"datacolumn\">Japanese</Col></Row><Row><Col id=\"codecolumn\">en_US</Col><Col id=\"datacolumn\">English </Col></Row><Row><Col id=\"datacolumn\">German </Col><Col id=\"codecolumn\">de_DE</Col></Row></Rows>");
            obj.set_innerdataset(rdo_local_innerdataset);
            obj.set_value("ko_KR");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","325","369","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Localization - dateformat, editformat, locale");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","325","437","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("long date");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","584","437","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("short date");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_shortformat","649","437","184","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("20180901");
            obj.set_locale("ko_KR");
            obj.set_dateformat("SHORTDATE");
            obj.set_editformat("SHORTDATE");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","10","515","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Today");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","10","573","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Last day");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","325","481","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Basic Method");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","325","515","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_locale("");
            obj.set_value("20180901");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_hotkey("");
            obj.set_positionstep("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_year","495","515","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("getYear()");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month","590","515","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("getMonth()");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_day","685","516","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("getDay()");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_select","325","544","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_locale("");
            obj.set_value("20180901");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_hotkey("");
            obj.set_positionstep("3");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","495","544","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("setCaretPos()");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_type","10","437","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_locale("");
            obj.set_value("20180901");
            obj.set_type("normal");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("다양한 형태의 컴포넌트(Calendar)");
            obj.set_cssclass("sta_WF_title01");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","50","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Basic Usage");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","325","50","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Calendar PopupType - popuptype");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("다양한 형태의 컴포넌트(Bar Chart & 확장컴포넌트)");
            obj.set_cssclass("sta_WF_title01");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","50","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Bar Chart");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list01","10","80",null,"236","10",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_binddataset("ds_data");
            obj.set_enable("true");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("4");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"60\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"text\"/><Cell col=\"1\" text=\"progressbar&#13;&#10;control\"/><Cell col=\"2\" text=\"mask\"/><Cell col=\"3\" text=\"decoratetext\"/><Cell col=\"4\" text=\"number\"/><Cell col=\"5\" text=\"currency\"/><Cell col=\"6\" text=\"combotext\"/><Cell col=\"7\" text=\"date\"/><Cell col=\"8\" text=\"checkbox&#13;&#10;control\"/><Cell col=\"9\" text=\"button&#13;&#10;control\"/><Cell col=\"10\" text=\"image&#13;&#10;control\"/><Cell col=\"11\" text=\"none\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:PERCENT\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" maskedittype=\"string\" maskeditformat=\"AA-###\" displaytype=\"mask\"/><Cell col=\"3\" text=\"bind:DECORATE\" displaytype=\"decoratetext\" progressbarsmooth=\"true\"/><Cell col=\"4\" text=\"bind:SALARY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:SALARY\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"7\" text=\"bind:HIRE_DATE\" displaytype=\"date\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" checkboxsize=\"18\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:FULL_NAME\" displaytype=\"buttoncontrol\" checkboxsize=\"18\"/><Cell col=\"10\" text=\"bind:IMAGE\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\"/><Cell col=\"11\" text=\"bind:FULL_NAME\" displaytype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list02","10","326",null,"195","10",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_binddataset("ds_data");
            obj.set_enable("true");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("4");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"40\"/><Column size=\"30\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Emp ID\"/><Cell col=\"1\" text=\"Emp Name\"/><Cell col=\"2\" colspan=\"4\" text=\"Gender\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" edittype=\"mask\" expandshow=\"show\" expandsize=\"24\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" colspan=\"4\"><Cell displaytype=\"imagecontrol\" text=\"expr:GENDER == &quot;M&quot; ? &quot;imagerc::img_radio_s.png&quot; : &quot;imagerc::img_radio_n.png&quot;\" imagestretch=\"none\" verticalAlign=\"\" expr=\"\" checkboxsize=\"18\"/><Cell col=\"1\" text=\"Male\"/><Cell col=\"2\" text=\"expr:GENDER == &quot;M&quot; ? &quot;imagerc::img_radio_n.png&quot; : &quot;imagerc::img_radio_s.png&quot;\" displaytype=\"imagecontrol\"/><Cell col=\"3\" text=\"Female\"/></Cell></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","10","50","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","10","80","338","150",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_BT_bg01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","38","102","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","38","142","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","38","182","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("btn_push03","138","182","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Push_3");
            obj.set_cssclass("btn_cp_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("btn_push02","138","142","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("Push_2");
            obj.set_cssclass("btn_cp_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_push01","138","102","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("Push_1");
            obj.set_cssclass("btn_cp_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","238","102","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("Disabled");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","238","142","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("Disabled");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","238","182","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("Disabled");
            obj.set_cssclass("btn_WF_basic03");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","358","50","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("CheckBox & Radio");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","358","80","338","150",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_BT_bg01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","378","99","142","23",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("CheckBox_Normal");
            obj.set_cssclass("chk_basic01");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02","542","95","138","121",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("rdo_basic01");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("value");
            obj.set_datacolumn("label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","378","142","142","23",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("CheckBox_Select");
            obj.set_cssclass("chk_basic01");
            obj.set_enable("true");
            obj.set_enableevent("false");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","378","185","142","23",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("CheckBox_Disable");
            obj.set_cssclass("chk_basic01");
            obj.set_enableevent("false");
            obj.set_enable("false");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","706","80",null,"150","10",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_BT_bg01");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","768","94","170","122",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("value");
            obj.set_datacolumn("label");
            obj.set_cssclass("lst_basic01");
            obj.set_multiselect("true");
            obj.set_itemheight("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","706","50","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","10","230","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","10","260","338","150",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_BT_bg01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","20","274","130","29",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("cmb_basic01");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("value");
            obj.set_datacolumn("label");
            obj.set_itemheight("30");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","170","274","130","123",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_cp_Combo");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","20","313","130","29",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("value");
            obj.set_datacolumn("label");
            obj.set_cssclass("cmb_basic01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","358","230","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","358","260","338","150",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_BT_bg01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","434","272","186","29",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_displaynulltext("넥사크로");
            obj.set_value("넥사크로");
            obj.set_cssclass("ed_basic01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","434","321","186","29",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_displaynulltext("넥사크로");
            obj.set_value("넥사크로");
            obj.set_cssclass("ed_basic02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","434","370","186","29",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_displaynulltext("넥사크로");
            obj.set_value("넥사크로");
            obj.set_cssclass("ed_basic01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","706","230","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","706","260",null,"150","10",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_BT_bg01");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","760","270","186","29",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_value("123,456,789");
            obj.set_displaynulltext("123,456,789");
            obj.set_cssclass("msk_basic01");
            obj.set_type("number");
            obj.getSetter("mask").set("#,##0.00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","760","319","186","29",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_value("123,456,789");
            obj.set_displaynulltext("123,456,789");
            obj.set_cssclass("msk_basic02");
            obj.set_type("number");
            obj.set_maskchar("_");
            obj.getSetter("mask").set("#,##0.00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","760","368","186","29",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_enable("false");
            obj.set_value("123,456,789");
            obj.set_displaynulltext("123,456,789");
            obj.set_cssclass("msk_basic01");
            obj.set_type("number");
            obj.set_maskchar("_");
            obj.getSetter("mask").set("#,##0.00");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","10","410","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","10","440",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_BT_bg01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","448",null,null,"20","18",null,null,null,null,this);
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_basic01");
            obj.set_taborder("74");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"Edit\"/><Cell col=\"1\" text=\"Calendar\"/><Cell col=\"2\" text=\"Combo\"/><Cell col=\"3\" text=\"CheckBox\"/><Cell col=\"4\" text=\"TextArea\"/><Cell col=\"5\" text=\"Button\"/></Band><Band id=\"body\"><Cell displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:Column0\" editdisplay=\"display\"/><Cell col=\"1\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Column1\" calendardisplay=\"display\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column2\" combodataset=\"dsCombo\" combocodecol=\"Column0\" combodatacol=\"Column1\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\" displaytype=\"textareacontrol\" edittype=\"textarea\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","10","50","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","10","82","338","220",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","19","97","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("cal_basic01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","19","137","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("cal_basic01");
            obj.set_enable("false");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","19","187","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_type("spin");
            obj.set_cssclass("cal_basic01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar05","19","227","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_type("spin");
            obj.set_cssclass("cal_basic01");
            obj.set_enable("false");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar06","167","97","169","189",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_type("monthonly");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","358","50","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","358","82","338","220",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","427","95","200","194",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("txa_basic01");
            obj.set_displaynulltext("Yeah, TextArea it is!");
            obj.set_wordWrap("char");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","706","50","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","706","82",null,"220","10",null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","772","114","163","60",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("Static");
            obj.set_background("rgba(136,70,191,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("10pt Malgun gothic,Arial");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","772","174","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_background("rgba(101,31,160,1)");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","856","174","79","30",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_background("rgba(161,103,209,1)");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","772","212","163","28",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("<b v=\'true\'>동해물</b>과 <fc v=\'red\'>백두산</fc>이 마르고...");
            obj.set_usedecorate("true");
            obj.set_font("10pt Malgun gothic,Arial");
            obj.set_positionstep("1");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","772","243","163","28",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("<u v=\'true\'>동해물</u>과 <s v=\'true\'>백두산</s>이 마르고...");
            obj.set_usedecorate("true");
            obj.set_font("10pt Malgun gothic,Arial");
            obj.set_positionstep("1");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","10","302","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("Div");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","10","332","338","180",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","96","344","166","156",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("DIV");
            obj.set_cssclass("div_basic01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","358","302","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("GroupBox");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","358","332","338","180",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","427","344","200","156",null,null,null,null,null,null,this);
            obj.set_text("Group");
            obj.set_taborder("97");
            obj.set_cssclass("grb_basic01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","715","302","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("Step");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","706","332",null,"180","10",null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","772","345","163","155",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","10","522",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","39","576","110","51",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("Menu");
            obj.set_cssclass("sta_menu_icon");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu01","216","577",null,"49","11",null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_levelcolumn("level");
            obj.set_innerdataset("dsMenu01");
            obj.set_idcolumn("id");
            obj.set_captioncolumn("caption");
            obj.set_fittocontents("width");
            obj.set_cssclass("gd_LT_menu");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","10","50",null,"87","10",null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_cssclass("tab_basic01");
            obj.set_showextrabutton("true");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Tab00);
            obj.set_text("tabpage3");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage4",this.Tab00);
            obj.set_text("tabpage4");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static48","10","137","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("PopupDiv");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","10","167","338","100",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","363","137","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("PopupMenu");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","363","167","338","100",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","711","137","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("ProgressBar");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","711","167",null,"100","5",null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_text("");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popMenu","482","187","100","60",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("click me");
            obj.set_cssclass("btn_cp_popMenu");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","10","267","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("FileDownload");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","10","297","338","220",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","363","267","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("FileUpload");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","363","297","338","220",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","711","267","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("WebBrowser");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","711","297",null,"220","5",null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_text("");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","99","387","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("FileDownload");
            obj.set_cssclass("filedown_basic01");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","376","387","313","40",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_cssclass("fileup_basic01");
            obj.set_itemheight("40");
            obj.set_buttonsize("140");
            obj.set_buttontext("FileUpload");
            obj.set_positionstep("2");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","10","517","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","10","547",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_cssclass("sta_BT_bg01");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","444","597","177","65",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_image("URL(\"imagerc::nexa_BI.png\")");
            obj.set_stretch("fit");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","470","568","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("stretch : fit");
            obj.set_cssclass("sta_cp_imageViewer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","781","568","155","24",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("stretch : fixaspectratio");
            obj.set_cssclass("sta_cp_imageViewer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","117","568","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("stretch : none");
            obj.set_cssclass("sta_cp_imageViewer");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","91","597","177","65",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_image("URL(\"imagerc::nexa_BI.png\")");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","380","740","185","100",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_border("1px solid rgba(128,128,128,1)");
            obj.getSetter("positionstep").set("2");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","575","740","185","100",null,null,null,null,null,null,this);
            obj.set_innerdataset("dsMenu");
            obj.set_captioncolumn("caption");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            obj.set_cssclass("pm_basic01");
            obj.set_background("#f7f7f7");
            obj.set_border("1px solid #cbcbcb");
            obj.set_borderRadius("0px");
            obj.set_color("#222222");
            obj.set_cursor("pointer");
            obj.getSetter("positionstep").set("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","10","521","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("확장 컴포넌트");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getDate","136","579","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("getDate");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getWeek","136","614","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("getWeek");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setDate","136","649","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("setDate");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","10","551","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("CalendarWeekSingle");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","734","551","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("MultiCombo");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","735","578","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("dsCombo00");
            obj.set_listcolinfo("data|100");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","734","716","266","148",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_binddataset("dsCombo00");
            obj.set_positionstep("4");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"data\"/><Cell col=\"2\" text=\"group\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:data\"/><Cell col=\"2\" text=\"bind:group\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","260","551","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("CalendarWeekDouble");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getStartDate","474","579","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("getStartDate");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getStartWeek","474","614","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("getStartWeek");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setStartDate","474","649","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("setStartDate");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getEndDate","590","579","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("getEndDate");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getEndWeek","590","614","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("getEndWeek");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setEndDate","590","649","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("setEndDate");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new CalendarWeekDouble("CalendarWeekDouble00","260","577","200","45",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("다양한 형태의 컴포넌트(기본컴포넌트)");
            obj.set_cssclass("sta_WF_title01");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("다양한 형태의 컴포넌트(기본컴포넌트)");
            obj.set_cssclass("sta_WF_title01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("다양한 형태의 컴포넌트(기본컴포넌트)");
            obj.set_cssclass("sta_WF_title01");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popDiv","129","187","100","60",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("click me");
            obj.set_cssclass("btn_cp_popDiv");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","778","177","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("35%");
            obj.set_cssclass("prg_basic01");
            obj.set_smooth("false");
            obj.set_positionstep("2");
            obj.set_pos("35");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar01","778","222","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("75/100");
            obj.set_cssclass("prg_basic01");
            obj.set_smooth("true");
            obj.set_positionstep("2");
            obj.set_pos("75");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","718","317","280","180",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_border("1px solid rgba(203,203,203,1)");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","770","597","177","65",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_image("URL(\"imagerc::nexa_BI.png\")");
            obj.set_stretch("fixaspectratio");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new CalendarWeekSingle("CalendarWeekSingle00","17","584","98","20",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,691,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("5");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Component.xfdl", function() {
        this.nStepPos;

        this.Comp_Calendar_onload = function(obj,e)
        {
        	var sToday = this.fn_Today();
        	var sLastDay = this.fn_LastDay(sToday);

        	this.cal_today.set_value(sToday);
        	this.cal_lastday.set_value(sLastDay);

        	this.Calendar00.set_value(sToday);
        	this.Calendar01.set_value(sToday);
        	this.Calendar02.set_value(sToday);

        	this.Div01.set_url("sample::Components_step.xfdl");
        	this.WebBrowser00.set_url("http://14.63.224.112/gscm/service/Sample.html");

        	this.setFocus();
        };

        this.Comp_Calendar_onkeydown = function(obj,e)
        {
        	var nStepIdx = this.getStepIndex();

        	if (nStepIdx == 0)
        	{
        		if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(1);
        		}
        	}
        	else if (nStepIdx == 1)
        	{
        		if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(2);
        		} else if (e.keycode == 37) { // KeyBoard 중간 <-
        			this.setStepIndex(0);
        		}
        	}
        	else if (nStepIdx == 2)
        	{
        		if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(3);
        		} else if (e.keycode == 37) { // KeyBoard 중간 <-
        			this.setStepIndex(1);
        		}
        	}
        	else if (nStepIdx == 3)
        	{
        		if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(4);
        		} else if (e.keycode == 37) { // KeyBoard 중간 <-
        			this.setStepIndex(2);
        		}
        	}
        	else if (nStepIdx == 4)
        	{
        		if (e.keycode == 37) { // KeyBoard 중간 <-
        			this.setStepIndex(3);
        		}
        	}
        };

        this.Comp_Calendar_ontimer = function(obj,e)
        {
        	if (e.timerid == 1)
        	{
        		if (this.nStepPos > 100) {
        			this.nStepPos = this.nStepPos / 10;
        		}

        		if (this.ProgressBar00.pos == this.nStepPos) {
        			this.killTimer(1);
        		}

        		this.ProgressBar00.getNumSetter("pos").postInc();
        	}
        };

        this.fn_comBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btn_year" :
        			alert(this.cal_date.getYear());
        			break;

        		case "btn_month" :
        			alert(this.cal_date.getMonth());
        			break;

        		case "btn_day" :
        			alert(this.cal_date.getDay());
        			break;

        		case "btn_select" :
        			this.cal_select.setFocus();
        			this.cal_select.setCaretPos(10);
        			break;

        		case "btn_search" :
        		case "btn_save" :
        		case "btn_delete" :
        		case "btn_push01" :
        		case "btn_push02" :
        		case "btn_push03" :
        			alert(obj.text);
        			break;

        		case "btn_popDiv" :
        			var x = 0;
        			var y = obj.getOffsetHeight();
        			this.PopupDiv00.trackPopupByComponent(obj, x, y);
        			break;

        		case "btn_popMenu" :
        			var x = 0;
        			var y = obj.getOffsetHeight();
        			this.PopupMenu00.trackPopupByComponent(obj, x, y);
        			break;

        		case "btn_getDate" :
        			alert(this.CalendarWeekSingle00.getDate());
        			break;

        		case "btn_getWeek" :
        			alert(this.CalendarWeekSingle00.getWeek());
        			break;

        		case "btn_setDate" :
        			this.CalendarWeekSingle00.setDate("20180914");
        			break;

        		case "btn_getStartDate" :
        			alert(this.CalendarWeekDouble00.getStartDate());
        			break;

        		case "btn_getStartWeek" :
        			alert(this.CalendarWeekDouble00.getStartWeek());
        			break;

        		case "btn_setStartDate" :
        			this.CalendarWeekDouble00.setStartDate("20180914");
        			break;

        		case "btn_getEndDate" :
        			alert(this.CalendarWeekDouble00.getEndDate());
        			break;

        		case "btn_getEndWeek" :
        			alert(this.CalendarWeekDouble00.getEndWeek());
        			break;

        		case "btn_setEndDate" :
        			this.CalendarWeekDouble00.setEndDate("20180914");
        			break;
        	}
        };

        this.fn_comRdoOnItemChanged = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "Radio01" :
        			this.cal_popup.set_popuptype(e.postvalue);
        			break;

        		case "rdo_tra" :
        			this.cal_trailing.set_usetrailingday(obj.value);
        			break;

        		case "Radio00" :
        			this.cal_type.set_type(e.postvalue);

        			if (e.postvalue == "monthonly") {
        			} else {
        				this.cal_type.set_width(160);
        				this.cal_type.set_height(25);
        			}
        			break;

        		case "rdo_local" :
        			this.cal_longformat.set_locale(obj.value);
        			this.cal_shortformat.set_locale(obj.value);
        			break;
        	}
        };

        this.fn_comGrdOnCellClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "grd_list" :
        			var nRow = e.row + 1;

        			if (e.col == 5) {
        				alert(nRow + "번째 Row Button Event 호출!");
        			}
        			break;

        		case "grd_list01" :
        			if (e.cell == 9)
        			{
        				var sDept = this.ds_data.getColumn(e.row, "EMPL_ID");
        				var sFullName = this.ds_data.getColumn(e.row, "FULL_NAME");
        				var sGender = this.ds_data.getColumn(e.row, "GENDER");
        				var sKorGender;

        				if (sGender == "W") {
        					sKorGender = "여성";
        				} else if (sGender == "M") {
        					sKorGender = "남성";
        				}

        				var sAlertMsg = "[사용자 정보]" + "\n" + "\n"
        				              + "사용자명 : " + sFullName + " (" + sDept + ")" + "\n"
        							  + "성별 : " + sKorGender;

        				alert(sAlertMsg);
        			}
        			break;

        		case "grd_list02" :
        			if (e.cell == 2)
        			{
        				var objDs = obj.getBindDataset();
        				var sValue = objDs.getColumn(e.row, "GENDER");

        				if (e.col == 2 && sValue == "W") {
        					objDs.setColumn(e.row, "GENDER", "M");
        				} else if (e.col == 4 && sValue == "M") {
        					objDs.setColumn(e.row, "GENDER", "W");
        				}
        			}
        			break;
        	}
        };

        this.grd_list02_onexpandup = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);

        	var objChild = new ChildFrame("popEmp", nLeft, nTop, 400, 400);
        	objChild.set_formurl("sample::Pop_EmpSearch.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");
        };

        this.fn_callback_pop = function(strID, vArgu)
        {
        	var sRtnVal = vArgu.split("|", vArgu.length);
         	var sEmpId = sRtnVal[0];
         	var sEmpNm = sRtnVal[1];

        	var nRowPos = this.ds_data.rowposition;
        	this.ds_data.setColumn(nRowPos, "EMPL_ID", sEmpId);
        	this.ds_data.setColumn(nRowPos, "FULL_NAME", sEmpNm);
        }

        this.fn_Today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        };

        this.fn_LastDay = function(sDate)
        {
        	var dDate = new Date(parseInt(sDate.substr(0,4)), parseInt(sDate.substr(4,2)), "01");
        	dDate = dDate.addDate(-1);

        	var objDate  = new Date(dDate);
        	var sRtn = objDate.getFullYear()
                     + (objDate.getMonth()+1).toString().padLeft(2, "0")
                     +  objDate.getDate().toString().padLeft(2, "0");

        	return sRtn;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown",this.Comp_Calendar_onkeydown,this);
            this.addEventHandler("onload",this.Comp_Calendar_onload,this);
            this.addEventHandler("ontimer",this.Comp_Calendar_ontimer,this);
            this.Radio00.addEventHandler("onitemchanged",this.fn_comRdoOnItemChanged,this);
            this.Radio01.addEventHandler("onitemchanged",this.fn_comRdoOnItemChanged,this);
            this.rdo_tra.addEventHandler("onitemchanged",this.fn_comRdoOnItemChanged,this);
            this.rdo_local.addEventHandler("onitemchanged",this.fn_comRdoOnItemChanged,this);
            this.btn_year.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_month.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_day.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_select.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.grd_list01.addEventHandler("oncellclick",this.fn_comGrdOnCellClick,this);
            this.grd_list02.addEventHandler("oncellclick",this.fn_comGrdOnCellClick,this);
            this.grd_list02.addEventHandler("onexpandup",this.grd_list02_onexpandup,this);
            this.btn_search.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_save.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_delete.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Button04.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button07.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button10.addEventHandler("onclick",this.Button00_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.fn_comGrdOnCellClick,this);
            this.btn_popMenu.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_getDate.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_getWeek.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_setDate.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.MultiCombo00.addEventHandler("onitemchanged",this.MultiCombo00_onitemchanged,this);
            this.btn_getStartDate.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_getStartWeek.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_setStartDate.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_getEndDate.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_getEndWeek.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_setEndDate.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_popDiv.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
        };

        this.loadIncludeScript("Component.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
