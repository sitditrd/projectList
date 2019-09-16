(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SalesPlanFilter");
            this.set_titletext("Sales Filter");
            if (Form == this.constructor)
            {
                this._setFormPosition(180,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sales", this);
            obj._setContents("<ColumnInfo><Column id=\"lvl\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lvl\">0</Col><Col id=\"name\">ALL</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">NORTH AMERICA</Col></Row><Row><Col id=\"name\">SEA-CBD</Col><Col id=\"lvl\">2</Col></Row><Row><Col id=\"lvl\">3</Col><Col id=\"name\">B2B-HOSP</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SECA</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SEM</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">STA</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EMPLOYEE_ID", this);
            obj._setContents("<ColumnInfo><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FIRST_NAME", this);
            obj._setContents("<ColumnInfo><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LAST_NAME", this);
            obj._setContents("<ColumnInfo><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EMAIL", this);
            obj._setContents("<ColumnInfo><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_JOB_ID", this);
            obj._setContents("<ColumnInfo><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MANAGER_ID", this);
            obj._setContents("<ColumnInfo><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DEPARTMENT_ID", this);
            obj._setContents("<ColumnInfo><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0",null,"122","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_sales");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj.set_cssclass("grd_WF_noneLine");
            obj.set_visible("true");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"268\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treecheck=\"bind:chk\" treelevel=\"bind:lvl\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","130",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("EMP_ID");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcmb_EMPLOYEEID","86","130",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_listcolinfo("datacolumn|100");
            var mcmb_EMPLOYEEID_innerdataset = new nexacro.NormalDataset("mcmb_EMPLOYEEID_innerdataset", obj);
            mcmb_EMPLOYEEID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">101</Col><Col id=\"datacolumn\">101</Col></Row><Row><Col id=\"codecolumn\">102</Col><Col id=\"datacolumn\">102</Col></Row><Row><Col id=\"codecolumn\">103</Col><Col id=\"datacolumn\">103</Col></Row><Row><Col id=\"codecolumn\">104</Col><Col id=\"datacolumn\">104</Col></Row><Row><Col id=\"codecolumn\">105</Col><Col id=\"datacolumn\">105</Col></Row><Row><Col id=\"codecolumn\">106</Col><Col id=\"datacolumn\">106</Col></Row><Row><Col id=\"codecolumn\">107</Col><Col id=\"datacolumn\">107</Col></Row><Row><Col id=\"codecolumn\">108</Col><Col id=\"datacolumn\">108</Col></Row><Row><Col id=\"codecolumn\">109</Col><Col id=\"datacolumn\">109</Col></Row><Row><Col id=\"codecolumn\">110</Col><Col id=\"datacolumn\">110</Col></Row><Row><Col id=\"codecolumn\">111</Col><Col id=\"datacolumn\">111</Col></Row><Row><Col id=\"codecolumn\">112</Col><Col id=\"datacolumn\">112</Col></Row><Row><Col id=\"codecolumn\">113</Col><Col id=\"datacolumn\">113</Col></Row><Row><Col id=\"codecolumn\">114</Col><Col id=\"datacolumn\">114</Col></Row><Row><Col id=\"codecolumn\">115</Col><Col id=\"datacolumn\">115</Col></Row><Row><Col id=\"codecolumn\">116</Col><Col id=\"datacolumn\">116</Col></Row><Row><Col id=\"codecolumn\">117</Col><Col id=\"datacolumn\">117</Col></Row><Row><Col id=\"codecolumn\">118</Col><Col id=\"datacolumn\">118</Col></Row><Row><Col id=\"codecolumn\">119</Col><Col id=\"datacolumn\">119</Col></Row><Row><Col id=\"codecolumn\">120</Col><Col id=\"datacolumn\">120</Col></Row><Row><Col id=\"codecolumn\">121</Col><Col id=\"datacolumn\">121</Col></Row><Row><Col id=\"codecolumn\">122</Col><Col id=\"datacolumn\">122</Col></Row><Row><Col id=\"codecolumn\">123</Col><Col id=\"datacolumn\">123</Col></Row><Row><Col id=\"codecolumn\">124</Col><Col id=\"datacolumn\">124</Col></Row><Row><Col id=\"codecolumn\">125</Col><Col id=\"datacolumn\">125</Col></Row><Row><Col id=\"codecolumn\">126</Col><Col id=\"datacolumn\">126</Col></Row><Row><Col id=\"codecolumn\">127</Col><Col id=\"datacolumn\">127</Col></Row><Row><Col id=\"codecolumn\">128</Col><Col id=\"datacolumn\">128</Col></Row><Row><Col id=\"codecolumn\">129</Col><Col id=\"datacolumn\">129</Col></Row><Row><Col id=\"codecolumn\">130</Col><Col id=\"datacolumn\">130</Col></Row><Row><Col id=\"codecolumn\">131</Col><Col id=\"datacolumn\">131</Col></Row><Row><Col id=\"codecolumn\">132</Col><Col id=\"datacolumn\">132</Col></Row><Row><Col id=\"codecolumn\">133</Col><Col id=\"datacolumn\">133</Col></Row><Row><Col id=\"codecolumn\">134</Col><Col id=\"datacolumn\">134</Col></Row><Row><Col id=\"codecolumn\">135</Col><Col id=\"datacolumn\">135</Col></Row><Row><Col id=\"codecolumn\">136</Col><Col id=\"datacolumn\">136</Col></Row><Row><Col id=\"codecolumn\">137</Col><Col id=\"datacolumn\">137</Col></Row><Row><Col id=\"codecolumn\">138</Col><Col id=\"datacolumn\">138</Col></Row><Row><Col id=\"codecolumn\">139</Col><Col id=\"datacolumn\">139</Col></Row><Row><Col id=\"codecolumn\">140</Col><Col id=\"datacolumn\">140</Col></Row><Row><Col id=\"codecolumn\">141</Col><Col id=\"datacolumn\">141</Col></Row><Row><Col id=\"codecolumn\">142</Col><Col id=\"datacolumn\">142</Col></Row><Row><Col id=\"codecolumn\">143</Col><Col id=\"datacolumn\">143</Col></Row><Row><Col id=\"codecolumn\">144</Col><Col id=\"datacolumn\">144</Col></Row><Row><Col id=\"codecolumn\">145</Col><Col id=\"datacolumn\">145</Col></Row><Row><Col id=\"codecolumn\">146</Col><Col id=\"datacolumn\">146</Col></Row><Row><Col id=\"codecolumn\">147</Col><Col id=\"datacolumn\">147</Col></Row><Row><Col id=\"codecolumn\">148</Col><Col id=\"datacolumn\">148</Col></Row><Row><Col id=\"codecolumn\">149</Col><Col id=\"datacolumn\">149</Col></Row><Row><Col id=\"codecolumn\">150</Col><Col id=\"datacolumn\">150</Col></Row><Row><Col id=\"codecolumn\">151</Col><Col id=\"datacolumn\">151</Col></Row><Row><Col id=\"codecolumn\">152</Col><Col id=\"datacolumn\">152</Col></Row><Row><Col id=\"codecolumn\">153</Col><Col id=\"datacolumn\">153</Col></Row><Row><Col id=\"codecolumn\">154</Col><Col id=\"datacolumn\">154</Col></Row><Row><Col id=\"codecolumn\">155</Col><Col id=\"datacolumn\">155</Col></Row><Row><Col id=\"codecolumn\">156</Col><Col id=\"datacolumn\">156</Col></Row><Row><Col id=\"codecolumn\">157</Col><Col id=\"datacolumn\">157</Col></Row><Row><Col id=\"codecolumn\">158</Col><Col id=\"datacolumn\">158</Col></Row><Row><Col id=\"codecolumn\">159</Col><Col id=\"datacolumn\">159</Col></Row><Row><Col id=\"codecolumn\">160</Col><Col id=\"datacolumn\">160</Col></Row><Row><Col id=\"codecolumn\">161</Col><Col id=\"datacolumn\">161</Col></Row><Row><Col id=\"codecolumn\">162</Col><Col id=\"datacolumn\">162</Col></Row><Row><Col id=\"codecolumn\">163</Col><Col id=\"datacolumn\">163</Col></Row><Row><Col id=\"codecolumn\">164</Col><Col id=\"datacolumn\">164</Col></Row><Row><Col id=\"codecolumn\">165</Col><Col id=\"datacolumn\">165</Col></Row><Row><Col id=\"codecolumn\">166</Col><Col id=\"datacolumn\">166</Col></Row><Row><Col id=\"codecolumn\">167</Col><Col id=\"datacolumn\">167</Col></Row><Row><Col id=\"codecolumn\">168</Col><Col id=\"datacolumn\">168</Col></Row><Row><Col id=\"codecolumn\">169</Col><Col id=\"datacolumn\">169</Col></Row><Row><Col id=\"codecolumn\">170</Col><Col id=\"datacolumn\">170</Col></Row><Row><Col id=\"codecolumn\">171</Col><Col id=\"datacolumn\">171</Col></Row><Row><Col id=\"codecolumn\">172</Col><Col id=\"datacolumn\">172</Col></Row><Row><Col id=\"codecolumn\">173</Col><Col id=\"datacolumn\">173</Col></Row><Row><Col id=\"codecolumn\">174</Col><Col id=\"datacolumn\">174</Col></Row><Row><Col id=\"codecolumn\">175</Col><Col id=\"datacolumn\">175</Col></Row><Row><Col id=\"codecolumn\">176</Col><Col id=\"datacolumn\">176</Col></Row><Row><Col id=\"codecolumn\">177</Col><Col id=\"datacolumn\">177</Col></Row><Row><Col id=\"codecolumn\">178</Col><Col id=\"datacolumn\">178</Col></Row><Row><Col id=\"codecolumn\">179</Col><Col id=\"datacolumn\">179</Col></Row><Row><Col id=\"codecolumn\">180</Col><Col id=\"datacolumn\">180</Col></Row><Row><Col id=\"codecolumn\">181</Col><Col id=\"datacolumn\">181</Col></Row><Row><Col id=\"codecolumn\">182</Col><Col id=\"datacolumn\">182</Col></Row><Row><Col id=\"codecolumn\">183</Col><Col id=\"datacolumn\">183</Col></Row><Row><Col id=\"codecolumn\">184</Col><Col id=\"datacolumn\">184</Col></Row><Row><Col id=\"codecolumn\">185</Col><Col id=\"datacolumn\">185</Col></Row><Row><Col id=\"codecolumn\">186</Col><Col id=\"datacolumn\">186</Col></Row><Row><Col id=\"codecolumn\">187</Col><Col id=\"datacolumn\">187</Col></Row><Row><Col id=\"codecolumn\">188</Col><Col id=\"datacolumn\">188</Col></Row><Row><Col id=\"codecolumn\">189</Col><Col id=\"datacolumn\">189</Col></Row><Row><Col id=\"codecolumn\">190</Col><Col id=\"datacolumn\">190</Col></Row><Row><Col id=\"codecolumn\">191</Col><Col id=\"datacolumn\">191</Col></Row><Row><Col id=\"codecolumn\">192</Col><Col id=\"datacolumn\">192</Col></Row><Row><Col id=\"codecolumn\">193</Col><Col id=\"datacolumn\">193</Col></Row><Row><Col id=\"codecolumn\">194</Col><Col id=\"datacolumn\">194</Col></Row><Row><Col id=\"codecolumn\">195</Col><Col id=\"datacolumn\">195</Col></Row><Row><Col id=\"codecolumn\">196</Col><Col id=\"datacolumn\">196</Col></Row><Row><Col id=\"codecolumn\">197</Col><Col id=\"datacolumn\">197</Col></Row><Row><Col id=\"codecolumn\">198</Col><Col id=\"datacolumn\">198</Col></Row><Row><Col id=\"codecolumn\">199</Col><Col id=\"datacolumn\">199</Col></Row><Row><Col id=\"codecolumn\">200</Col><Col id=\"datacolumn\">200</Col></Row><Row><Col id=\"codecolumn\">201</Col><Col id=\"datacolumn\">201</Col></Row><Row><Col id=\"codecolumn\">202</Col><Col id=\"datacolumn\">202</Col></Row><Row><Col id=\"codecolumn\">203</Col><Col id=\"datacolumn\">203</Col></Row><Row><Col id=\"codecolumn\">204</Col><Col id=\"datacolumn\">204</Col></Row><Row><Col id=\"codecolumn\">205</Col><Col id=\"datacolumn\">205</Col></Row><Row><Col id=\"codecolumn\">206</Col><Col id=\"datacolumn\">206</Col></Row></Rows>");
            obj.set_innerdataset(mcmb_EMPLOYEEID_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","156",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("FIRST_NAME");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","182",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("LAST_NAME");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","208",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("EMAIL");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","234",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("PHONE_NUM");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","260",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("HIRE_DATE");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","286",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("JOB_ID");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcmb_FIRSTNAME","86","156",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_listcolinfo("datacolumn|100");
            var mcmb_FIRSTNAME_innerdataset = new nexacro.NormalDataset("mcmb_FIRSTNAME_innerdataset", obj);
            mcmb_FIRSTNAME_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Steven</Col><Col id=\"datacolumn\">Steven</Col></Row><Row><Col id=\"codecolumn\">Nancy</Col><Col id=\"datacolumn\">Nancy</Col></Row><Row><Col id=\"codecolumn\">Jose Manuel</Col><Col id=\"datacolumn\">Jose Manuel</Col></Row><Row><Col id=\"codecolumn\">Sigal</Col><Col id=\"datacolumn\">Sigal</Col></Row><Row><Col id=\"codecolumn\">Shanta</Col><Col id=\"datacolumn\">Shanta</Col></Row><Row><Col id=\"codecolumn\">Mozhe</Col><Col id=\"datacolumn\">Mozhe</Col></Row><Row><Col id=\"codecolumn\">Michael</Col><Col id=\"datacolumn\">Michael</Col></Row><Row><Col id=\"codecolumn\">Ki</Col><Col id=\"datacolumn\">Ki</Col></Row><Row><Col id=\"codecolumn\">Peter</Col><Col id=\"datacolumn\">Peter</Col></Row><Row><Col id=\"codecolumn\">Alberto</Col><Col id=\"datacolumn\">Alberto</Col></Row><Row><Col id=\"codecolumn\">Christopher</Col><Col id=\"datacolumn\">Christopher</Col></Row><Row><Col id=\"codecolumn\">Lindsey</Col><Col id=\"datacolumn\">Lindsey</Col></Row><Row><Col id=\"codecolumn\">Ellen</Col><Col id=\"datacolumn\">Ellen</Col></Row><Row><Col id=\"codecolumn\">Jean</Col><Col id=\"datacolumn\">Jean</Col></Row><Row><Col id=\"codecolumn\">Timothy</Col><Col id=\"datacolumn\">Timothy</Col></Row><Row><Col id=\"codecolumn\">Britney</Col><Col id=\"datacolumn\">Britney</Col></Row><Row><Col id=\"codecolumn\">Samuel</Col><Col id=\"datacolumn\">Samuel</Col></Row><Row><Col id=\"codecolumn\">Hermann</Col><Col id=\"datacolumn\">Hermann</Col></Row><Row><Col id=\"codecolumn\">Shelley</Col><Col id=\"datacolumn\">Shelley</Col></Row><Row><Col id=\"codecolumn\">John</Col><Col id=\"datacolumn\">John</Col></Row><Row><Col id=\"codecolumn\">Guy</Col><Col id=\"datacolumn\">Guy</Col></Row><Row><Col id=\"codecolumn\">Payam</Col><Col id=\"datacolumn\">Payam</Col></Row><Row><Col id=\"codecolumn\">Julia</Col><Col id=\"datacolumn\">Julia</Col></Row><Row><Col id=\"codecolumn\">Hazel</Col><Col id=\"datacolumn\">Hazel</Col></Row><Row><Col id=\"codecolumn\">Louise</Col><Col id=\"datacolumn\">Louise</Col></Row><Row><Col id=\"codecolumn\">William</Col><Col id=\"datacolumn\">William</Col></Row><Row><Col id=\"codecolumn\">Jonathon</Col><Col id=\"datacolumn\">Jonathon</Col></Row><Row><Col id=\"codecolumn\">Jack</Col><Col id=\"datacolumn\">Jack</Col></Row><Row><Col id=\"codecolumn\">Martha</Col><Col id=\"datacolumn\">Martha</Col></Row><Row><Col id=\"codecolumn\">Girard</Col><Col id=\"datacolumn\">Girard</Col></Row><Row><Col id=\"codecolumn\">Donald</Col><Col id=\"datacolumn\">Donald</Col></Row><Row><Col id=\"codecolumn\">Diana</Col><Col id=\"datacolumn\">Diana</Col></Row><Row><Col id=\"codecolumn\">Karen</Col><Col id=\"datacolumn\">Karen</Col></Row><Row><Col id=\"codecolumn\">Kevin</Col><Col id=\"datacolumn\">Kevin</Col></Row><Row><Col id=\"codecolumn\">Laura</Col><Col id=\"datacolumn\">Laura</Col></Row><Row><Col id=\"codecolumn\">Renske</Col><Col id=\"datacolumn\">Renske</Col></Row><Row><Col id=\"codecolumn\">Eleni</Col><Col id=\"datacolumn\">Eleni</Col></Row><Row><Col id=\"codecolumn\">Oliver</Col><Col id=\"datacolumn\">Oliver</Col></Row><Row><Col id=\"codecolumn\">Clara</Col><Col id=\"datacolumn\">Clara</Col></Row><Row><Col id=\"codecolumn\">Harrison</Col><Col id=\"datacolumn\">Harrison</Col></Row><Row><Col id=\"codecolumn\">Tayler</Col><Col id=\"datacolumn\">Tayler</Col></Row><Row><Col id=\"codecolumn\">Sundita</Col><Col id=\"datacolumn\">Sundita</Col></Row><Row><Col id=\"codecolumn\">Alyssa</Col><Col id=\"datacolumn\">Alyssa</Col></Row><Row><Col id=\"codecolumn\">Kimberely</Col><Col id=\"datacolumn\">Kimberely</Col></Row><Row><Col id=\"codecolumn\">Sarah</Col><Col id=\"datacolumn\">Sarah</Col></Row><Row><Col id=\"codecolumn\">Lex</Col><Col id=\"datacolumn\">Lex</Col></Row><Row><Col id=\"codecolumn\">Irene</Col><Col id=\"datacolumn\">Irene</Col></Row><Row><Col id=\"codecolumn\">TJ</Col><Col id=\"datacolumn\">TJ</Col></Row><Row><Col id=\"codecolumn\">Gerald</Col><Col id=\"datacolumn\">Gerald</Col></Row><Row><Col id=\"codecolumn\">Charles</Col><Col id=\"datacolumn\">Charles</Col></Row><Row><Col id=\"codecolumn\">Alana</Col><Col id=\"datacolumn\">Alana</Col></Row><Row><Col id=\"codecolumn\">Bruce</Col><Col id=\"datacolumn\">Bruce</Col></Row><Row><Col id=\"codecolumn\">Den</Col><Col id=\"datacolumn\">Den</Col></Row><Row><Col id=\"codecolumn\">Curtis</Col><Col id=\"datacolumn\">Curtis</Col></Row><Row><Col id=\"codecolumn\">Nanette</Col><Col id=\"datacolumn\">Nanette</Col></Row><Row><Col id=\"codecolumn\">Anthony</Col><Col id=\"datacolumn\">Anthony</Col></Row><Row><Col id=\"codecolumn\">Kelly</Col><Col id=\"datacolumn\">Kelly</Col></Row><Row><Col id=\"codecolumn\">Pat</Col><Col id=\"datacolumn\">Pat</Col></Row><Row><Col id=\"codecolumn\">Trenna</Col><Col id=\"datacolumn\">Trenna</Col></Row><Row><Col id=\"codecolumn\">Patrick</Col><Col id=\"datacolumn\">Patrick</Col></Row><Row><Col id=\"codecolumn\">Danielle</Col><Col id=\"datacolumn\">Danielle</Col></Row><Row><Col id=\"codecolumn\">Amit</Col><Col id=\"datacolumn\">Amit</Col></Row><Row><Col id=\"codecolumn\">Winston</Col><Col id=\"datacolumn\">Winston</Col></Row><Row><Col id=\"codecolumn\">Douglas</Col><Col id=\"datacolumn\">Douglas</Col></Row><Row><Col id=\"codecolumn\">Neena</Col><Col id=\"datacolumn\">Neena</Col></Row><Row><Col id=\"codecolumn\">David</Col><Col id=\"datacolumn\">David</Col></Row><Row><Col id=\"codecolumn\">Daniel</Col><Col id=\"datacolumn\">Daniel</Col></Row><Row><Col id=\"codecolumn\">Shelli</Col><Col id=\"datacolumn\">Shelli</Col></Row><Row><Col id=\"codecolumn\">Jason</Col><Col id=\"datacolumn\">Jason</Col></Row><Row><Col id=\"codecolumn\">Joshua</Col><Col id=\"datacolumn\">Joshua</Col></Row><Row><Col id=\"codecolumn\">Randall</Col><Col id=\"datacolumn\">Randall</Col></Row><Row><Col id=\"codecolumn\">Janette</Col><Col id=\"datacolumn\">Janette</Col></Row><Row><Col id=\"codecolumn\">Mattea</Col><Col id=\"datacolumn\">Mattea</Col></Row><Row><Col id=\"codecolumn\">Lisa</Col><Col id=\"datacolumn\">Lisa</Col></Row><Row><Col id=\"codecolumn\">Elizabeth</Col><Col id=\"datacolumn\">Elizabeth</Col></Row><Row><Col id=\"codecolumn\">Jennifer</Col><Col id=\"datacolumn\">Jennifer</Col></Row><Row><Col id=\"codecolumn\">Vance</Col><Col id=\"datacolumn\">Vance</Col></Row><Row><Col id=\"codecolumn\">Alexander</Col><Col id=\"datacolumn\">Alexander</Col></Row><Row><Col id=\"codecolumn\">Valli</Col><Col id=\"datacolumn\">Valli</Col></Row><Row><Col id=\"codecolumn\">Ismael</Col><Col id=\"datacolumn\">Ismael</Col></Row><Row><Col id=\"codecolumn\">Luis</Col><Col id=\"datacolumn\">Luis</Col></Row><Row><Col id=\"codecolumn\">Matthew</Col><Col id=\"datacolumn\">Matthew</Col></Row><Row><Col id=\"codecolumn\">Adam</Col><Col id=\"datacolumn\">Adam</Col></Row><Row><Col id=\"codecolumn\">James</Col><Col id=\"datacolumn\">James</Col></Row><Row><Col id=\"codecolumn\">Stephen</Col><Col id=\"datacolumn\">Stephen</Col></Row><Row><Col id=\"codecolumn\">Allan</Col><Col id=\"datacolumn\">Allan</Col></Row><Row><Col id=\"codecolumn\">Sarath</Col><Col id=\"datacolumn\">Sarath</Col></Row><Row><Col id=\"codecolumn\">Sundar</Col><Col id=\"datacolumn\">Sundar</Col></Row><Row><Col id=\"codecolumn\">Nandita</Col><Col id=\"datacolumn\">Nandita</Col></Row><Row><Col id=\"codecolumn\">Alexis</Col><Col id=\"datacolumn\">Alexis</Col></Row><Row><Col id=\"codecolumn\">Susan</Col><Col id=\"datacolumn\">Susan</Col></Row></Rows>");
            obj.set_innerdataset(mcmb_FIRSTNAME_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","312",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("SALARY");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","338",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("MANAGER_ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","364",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("DEPART_ID");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcmb_LASTNAME","86","182",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_listcolinfo("datacolumn|100");
            var mcmb_LASTNAME_innerdataset = new nexacro.NormalDataset("mcmb_LASTNAME_innerdataset", obj);
            mcmb_LASTNAME_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Greenberg</Col><Col id=\"datacolumn\">Greenberg</Col></Row><Row><Col id=\"codecolumn\">Markle</Col><Col id=\"datacolumn\">Markle</Col></Row><Row><Col id=\"codecolumn\">Marlow</Col><Col id=\"datacolumn\">Marlow</Col></Row><Row><Col id=\"codecolumn\">Gee</Col><Col id=\"datacolumn\">Gee</Col></Row><Row><Col id=\"codecolumn\">Philtanker</Col><Col id=\"datacolumn\">Philtanker</Col></Row><Row><Col id=\"codecolumn\">Stiles</Col><Col id=\"datacolumn\">Stiles</Col></Row><Row><Col id=\"codecolumn\">Rajs</Col><Col id=\"datacolumn\">Rajs</Col></Row><Row><Col id=\"codecolumn\">Bates</Col><Col id=\"datacolumn\">Bates</Col></Row><Row><Col id=\"codecolumn\">Dellinger</Col><Col id=\"datacolumn\">Dellinger</Col></Row><Row><Col id=\"codecolumn\">Perkins</Col><Col id=\"datacolumn\">Perkins</Col></Row><Row><Col id=\"codecolumn\">Mavris</Col><Col id=\"datacolumn\">Mavris</Col></Row><Row><Col id=\"codecolumn\">Weiss</Col><Col id=\"datacolumn\">Weiss</Col></Row><Row><Col id=\"codecolumn\">Mallin</Col><Col id=\"datacolumn\">Mallin</Col></Row><Row><Col id=\"codecolumn\">Errazuriz</Col><Col id=\"datacolumn\">Errazuriz</Col></Row><Row><Col id=\"codecolumn\">Hall</Col><Col id=\"datacolumn\">Hall</Col></Row><Row><Col id=\"codecolumn\">Tuvault</Col><Col id=\"datacolumn\">Tuvault</Col></Row><Row><Col id=\"codecolumn\">Bloom</Col><Col id=\"datacolumn\">Bloom</Col></Row><Row><Col id=\"codecolumn\">Johnson</Col><Col id=\"datacolumn\">Johnson</Col></Row><Row><Col id=\"codecolumn\">Fleaur</Col><Col id=\"datacolumn\">Fleaur</Col></Row><Row><Col id=\"codecolumn\">Sullivan</Col><Col id=\"datacolumn\">Sullivan</Col></Row><Row><Col id=\"codecolumn\">Geoni</Col><Col id=\"datacolumn\">Geoni</Col></Row><Row><Col id=\"codecolumn\">Bull</Col><Col id=\"datacolumn\">Bull</Col></Row><Row><Col id=\"codecolumn\">Cabrio</Col><Col id=\"datacolumn\">Cabrio</Col></Row><Row><Col id=\"codecolumn\">Dilly</Col><Col id=\"datacolumn\">Dilly</Col></Row><Row><Col id=\"codecolumn\">OConnell</Col><Col id=\"datacolumn\">OConnell</Col></Row><Row><Col id=\"codecolumn\">Fay</Col><Col id=\"datacolumn\">Fay</Col></Row><Row><Col id=\"codecolumn\">Chen</Col><Col id=\"datacolumn\">Chen</Col></Row><Row><Col id=\"codecolumn\">Raphaely</Col><Col id=\"datacolumn\">Raphaely</Col></Row><Row><Col id=\"codecolumn\">Nayer</Col><Col id=\"datacolumn\">Nayer</Col></Row><Row><Col id=\"codecolumn\">Mikkilineni</Col><Col id=\"datacolumn\">Mikkilineni</Col></Row><Row><Col id=\"codecolumn\">Davies</Col><Col id=\"datacolumn\">Davies</Col></Row><Row><Col id=\"codecolumn\">Grant</Col><Col id=\"datacolumn\">Grant</Col></Row><Row><Col id=\"codecolumn\">Austin</Col><Col id=\"datacolumn\">Austin</Col></Row><Row><Col id=\"codecolumn\">Pataballa</Col><Col id=\"datacolumn\">Pataballa</Col></Row><Row><Col id=\"codecolumn\">Lorentz</Col><Col id=\"datacolumn\">Lorentz</Col></Row><Row><Col id=\"codecolumn\">Popp</Col><Col id=\"datacolumn\">Popp</Col></Row><Row><Col id=\"codecolumn\">Ladwig</Col><Col id=\"datacolumn\">Ladwig</Col></Row><Row><Col id=\"codecolumn\">Matos</Col><Col id=\"datacolumn\">Matos</Col></Row><Row><Col id=\"codecolumn\">Partners</Col><Col id=\"datacolumn\">Partners</Col></Row><Row><Col id=\"codecolumn\">Bernstein</Col><Col id=\"datacolumn\">Bernstein</Col></Row><Row><Col id=\"codecolumn\">Vishney</Col><Col id=\"datacolumn\">Vishney</Col></Row><Row><Col id=\"codecolumn\">Greene</Col><Col id=\"datacolumn\">Greene</Col></Row><Row><Col id=\"codecolumn\">Banda</Col><Col id=\"datacolumn\">Banda</Col></Row><Row><Col id=\"codecolumn\">Hutton</Col><Col id=\"datacolumn\">Hutton</Col></Row><Row><Col id=\"codecolumn\">Baer</Col><Col id=\"datacolumn\">Baer</Col></Row><Row><Col id=\"codecolumn\">Gietz</Col><Col id=\"datacolumn\">Gietz</Col></Row><Row><Col id=\"codecolumn\">Kochhar</Col><Col id=\"datacolumn\">Kochhar</Col></Row><Row><Col id=\"codecolumn\">De Haan</Col><Col id=\"datacolumn\">De Haan</Col></Row><Row><Col id=\"codecolumn\">Hunold</Col><Col id=\"datacolumn\">Hunold</Col></Row><Row><Col id=\"codecolumn\">Sciarra</Col><Col id=\"datacolumn\">Sciarra</Col></Row><Row><Col id=\"codecolumn\">Khoo</Col><Col id=\"datacolumn\">Khoo</Col></Row><Row><Col id=\"codecolumn\">Kaufling</Col><Col id=\"datacolumn\">Kaufling</Col></Row><Row><Col id=\"codecolumn\">Vollman</Col><Col id=\"datacolumn\">Vollman</Col></Row><Row><Col id=\"codecolumn\">Landry</Col><Col id=\"datacolumn\">Landry</Col></Row><Row><Col id=\"codecolumn\">Tucker</Col><Col id=\"datacolumn\">Tucker</Col></Row><Row><Col id=\"codecolumn\">McEwen</Col><Col id=\"datacolumn\">McEwen</Col></Row><Row><Col id=\"codecolumn\">Doran</Col><Col id=\"datacolumn\">Doran</Col></Row><Row><Col id=\"codecolumn\">Taylor</Col><Col id=\"datacolumn\">Taylor</Col></Row><Row><Col id=\"codecolumn\">Livingston</Col><Col id=\"datacolumn\">Livingston</Col></Row><Row><Col id=\"codecolumn\">Gates</Col><Col id=\"datacolumn\">Gates</Col></Row><Row><Col id=\"codecolumn\">Whalen</Col><Col id=\"datacolumn\">Whalen</Col></Row><Row><Col id=\"codecolumn\">King</Col><Col id=\"datacolumn\">King</Col></Row><Row><Col id=\"codecolumn\">Ernst</Col><Col id=\"datacolumn\">Ernst</Col></Row><Row><Col id=\"codecolumn\">Urman</Col><Col id=\"datacolumn\">Urman</Col></Row><Row><Col id=\"codecolumn\">Tobias</Col><Col id=\"datacolumn\">Tobias</Col></Row><Row><Col id=\"codecolumn\">Fripp</Col><Col id=\"datacolumn\">Fripp</Col></Row><Row><Col id=\"codecolumn\">Bissot</Col><Col id=\"datacolumn\">Bissot</Col></Row><Row><Col id=\"codecolumn\">Olson</Col><Col id=\"datacolumn\">Olson</Col></Row><Row><Col id=\"codecolumn\">Rogers</Col><Col id=\"datacolumn\">Rogers</Col></Row><Row><Col id=\"codecolumn\">Patel</Col><Col id=\"datacolumn\">Patel</Col></Row><Row><Col id=\"codecolumn\">Russell</Col><Col id=\"datacolumn\">Russell</Col></Row><Row><Col id=\"codecolumn\">Lee</Col><Col id=\"datacolumn\">Lee</Col></Row><Row><Col id=\"codecolumn\">Ande</Col><Col id=\"datacolumn\">Ande</Col></Row><Row><Col id=\"codecolumn\">Bell</Col><Col id=\"datacolumn\">Bell</Col></Row><Row><Col id=\"codecolumn\">McCain</Col><Col id=\"datacolumn\">McCain</Col></Row><Row><Col id=\"codecolumn\">Hartstein</Col><Col id=\"datacolumn\">Hartstein</Col></Row><Row><Col id=\"codecolumn\">Baida</Col><Col id=\"datacolumn\">Baida</Col></Row><Row><Col id=\"codecolumn\">Himuro</Col><Col id=\"datacolumn\">Himuro</Col></Row><Row><Col id=\"codecolumn\">Colmenares</Col><Col id=\"datacolumn\">Colmenares</Col></Row><Row><Col id=\"codecolumn\">Atkinson</Col><Col id=\"datacolumn\">Atkinson</Col></Row><Row><Col id=\"codecolumn\">Zlotkey</Col><Col id=\"datacolumn\">Zlotkey</Col></Row><Row><Col id=\"codecolumn\">Olsen</Col><Col id=\"datacolumn\">Olsen</Col></Row><Row><Col id=\"codecolumn\">Sully</Col><Col id=\"datacolumn\">Sully</Col></Row><Row><Col id=\"codecolumn\">Marvins</Col><Col id=\"datacolumn\">Marvins</Col></Row><Row><Col id=\"codecolumn\">Ozer</Col><Col id=\"datacolumn\">Ozer</Col></Row><Row><Col id=\"codecolumn\">Kumar</Col><Col id=\"datacolumn\">Kumar</Col></Row><Row><Col id=\"codecolumn\">Abel</Col><Col id=\"datacolumn\">Abel</Col></Row><Row><Col id=\"codecolumn\">Sarchand</Col><Col id=\"datacolumn\">Sarchand</Col></Row><Row><Col id=\"codecolumn\">Everett</Col><Col id=\"datacolumn\">Everett</Col></Row><Row><Col id=\"codecolumn\">Jones</Col><Col id=\"datacolumn\">Jones</Col></Row><Row><Col id=\"codecolumn\">Walsh</Col><Col id=\"datacolumn\">Walsh</Col></Row><Row><Col id=\"codecolumn\">Feeney</Col><Col id=\"datacolumn\">Feeney</Col></Row><Row><Col id=\"codecolumn\">Faviet</Col><Col id=\"datacolumn\">Faviet</Col></Row><Row><Col id=\"codecolumn\">Mourgos</Col><Col id=\"datacolumn\">Mourgos</Col></Row><Row><Col id=\"codecolumn\">Seo</Col><Col id=\"datacolumn\">Seo</Col></Row><Row><Col id=\"codecolumn\">Vargas</Col><Col id=\"datacolumn\">Vargas</Col></Row><Row><Col id=\"codecolumn\">Cambrault</Col><Col id=\"datacolumn\">Cambrault</Col></Row><Row><Col id=\"codecolumn\">Smith</Col><Col id=\"datacolumn\">Smith</Col></Row><Row><Col id=\"codecolumn\">Sewall</Col><Col id=\"datacolumn\">Sewall</Col></Row><Row><Col id=\"codecolumn\">Fox</Col><Col id=\"datacolumn\">Fox</Col></Row><Row><Col id=\"codecolumn\">Chung</Col><Col id=\"datacolumn\">Chung</Col></Row><Row><Col id=\"codecolumn\">Higgins</Col><Col id=\"datacolumn\">Higgins</Col></Row></Rows>");
            obj.set_innerdataset(mcmb_LASTNAME_innerdataset);
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcmb_EMAIL","86","208",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_listcolinfo("datacolumn|100");
            var mcmb_EMAIL_innerdataset = new nexacro.NormalDataset("mcmb_EMAIL_innerdataset", obj);
            mcmb_EMAIL_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">AHUNOLD</Col><Col id=\"datacolumn\">AHUNOLD</Col></Row><Row><Col id=\"codecolumn\">DAUSTIN</Col><Col id=\"datacolumn\">DAUSTIN</Col></Row><Row><Col id=\"codecolumn\">DRAPHEAL</Col><Col id=\"datacolumn\">DRAPHEAL</Col></Row><Row><Col id=\"codecolumn\">AKHOO</Col><Col id=\"datacolumn\">AKHOO</Col></Row><Row><Col id=\"codecolumn\">MWEISS</Col><Col id=\"datacolumn\">MWEISS</Col></Row><Row><Col id=\"codecolumn\">AFRIPP</Col><Col id=\"datacolumn\">AFRIPP</Col></Row><Row><Col id=\"codecolumn\">KMOURGOS</Col><Col id=\"datacolumn\">KMOURGOS</Col></Row><Row><Col id=\"codecolumn\">SSEWALL</Col><Col id=\"datacolumn\">SSEWALL</Col></Row><Row><Col id=\"codecolumn\">CVISHNEY</Col><Col id=\"datacolumn\">CVISHNEY</Col></Row><Row><Col id=\"codecolumn\">WSMITH</Col><Col id=\"datacolumn\">WSMITH</Col></Row><Row><Col id=\"codecolumn\">JFLEAUR</Col><Col id=\"datacolumn\">JFLEAUR</Col></Row><Row><Col id=\"codecolumn\">JDELLING</Col><Col id=\"datacolumn\">JDELLING</Col></Row><Row><Col id=\"codecolumn\">JDILLY</Col><Col id=\"datacolumn\">JDILLY</Col></Row><Row><Col id=\"codecolumn\">RPERKINS</Col><Col id=\"datacolumn\">RPERKINS</Col></Row><Row><Col id=\"codecolumn\">HBAER</Col><Col id=\"datacolumn\">HBAER</Col></Row><Row><Col id=\"codecolumn\">SHIGGINS</Col><Col id=\"datacolumn\">SHIGGINS</Col></Row><Row><Col id=\"codecolumn\">LSMITH</Col><Col id=\"datacolumn\">LSMITH</Col></Row><Row><Col id=\"codecolumn\">DGREENE</Col><Col id=\"datacolumn\">DGREENE</Col></Row><Row><Col id=\"codecolumn\">LOZER</Col><Col id=\"datacolumn\">LOZER</Col></Row><Row><Col id=\"codecolumn\">EABEL</Col><Col id=\"datacolumn\">EABEL</Col></Row><Row><Col id=\"codecolumn\">JWHALEN</Col><Col id=\"datacolumn\">JWHALEN</Col></Row><Row><Col id=\"codecolumn\">LDEHAAN</Col><Col id=\"datacolumn\">LDEHAAN</Col></Row><Row><Col id=\"codecolumn\">DLORENTZ</Col><Col id=\"datacolumn\">DLORENTZ</Col></Row><Row><Col id=\"codecolumn\">DFAVIET</Col><Col id=\"datacolumn\">DFAVIET</Col></Row><Row><Col id=\"codecolumn\">SSTILES</Col><Col id=\"datacolumn\">SSTILES</Col></Row><Row><Col id=\"codecolumn\">JPATEL</Col><Col id=\"datacolumn\">JPATEL</Col></Row><Row><Col id=\"codecolumn\">RMATOS</Col><Col id=\"datacolumn\">RMATOS</Col></Row><Row><Col id=\"codecolumn\">PVARGAS</Col><Col id=\"datacolumn\">PVARGAS</Col></Row><Row><Col id=\"codecolumn\">AERRAZUR</Col><Col id=\"datacolumn\">AERRAZUR</Col></Row><Row><Col id=\"codecolumn\">PHALL</Col><Col id=\"datacolumn\">PHALL</Col></Row><Row><Col id=\"codecolumn\">GGEONI</Col><Col id=\"datacolumn\">GGEONI</Col></Row><Row><Col id=\"codecolumn\">DOCONNEL</Col><Col id=\"datacolumn\">DOCONNEL</Col></Row><Row><Col id=\"codecolumn\">MHARTSTE</Col><Col id=\"datacolumn\">MHARTSTE</Col></Row><Row><Col id=\"codecolumn\">WGIETZ</Col><Col id=\"datacolumn\">WGIETZ</Col></Row><Row><Col id=\"codecolumn\">SKING</Col><Col id=\"datacolumn\">SKING</Col></Row><Row><Col id=\"codecolumn\">NKOCHHAR</Col><Col id=\"datacolumn\">NKOCHHAR</Col></Row><Row><Col id=\"codecolumn\">NGREENBE</Col><Col id=\"datacolumn\">NGREENBE</Col></Row><Row><Col id=\"codecolumn\">LPOPP</Col><Col id=\"datacolumn\">LPOPP</Col></Row><Row><Col id=\"codecolumn\">JNAYER</Col><Col id=\"datacolumn\">JNAYER</Col></Row><Row><Col id=\"codecolumn\">RLADWIG</Col><Col id=\"datacolumn\">RLADWIG</Col></Row><Row><Col id=\"codecolumn\">DLEE</Col><Col id=\"datacolumn\">DLEE</Col></Row><Row><Col id=\"codecolumn\">SANDE</Col><Col id=\"datacolumn\">SANDE</Col></Row><Row><Col id=\"codecolumn\">SKUMAR</Col><Col id=\"datacolumn\">SKUMAR</Col></Row><Row><Col id=\"codecolumn\">BEVERETT</Col><Col id=\"datacolumn\">BEVERETT</Col></Row><Row><Col id=\"codecolumn\">KFEENEY</Col><Col id=\"datacolumn\">KFEENEY</Col></Row><Row><Col id=\"codecolumn\">BERNST</Col><Col id=\"datacolumn\">BERNST</Col></Row><Row><Col id=\"codecolumn\">VPATABAL</Col><Col id=\"datacolumn\">VPATABAL</Col></Row><Row><Col id=\"codecolumn\">JCHEN</Col><Col id=\"datacolumn\">JCHEN</Col></Row><Row><Col id=\"codecolumn\">JMURMAN</Col><Col id=\"datacolumn\">JMURMAN</Col></Row><Row><Col id=\"codecolumn\">STOBIAS</Col><Col id=\"datacolumn\">STOBIAS</Col></Row><Row><Col id=\"codecolumn\">KCOLMENA</Col><Col id=\"datacolumn\">KCOLMENA</Col></Row><Row><Col id=\"codecolumn\">MATKINSO</Col><Col id=\"datacolumn\">MATKINSO</Col></Row><Row><Col id=\"codecolumn\">JAMRLOW</Col><Col id=\"datacolumn\">JAMRLOW</Col></Row><Row><Col id=\"codecolumn\">GCAMBRAU</Col><Col id=\"datacolumn\">GCAMBRAU</Col></Row><Row><Col id=\"codecolumn\">COLSEN</Col><Col id=\"datacolumn\">COLSEN</Col></Row><Row><Col id=\"codecolumn\">JKING</Col><Col id=\"datacolumn\">JKING</Col></Row><Row><Col id=\"codecolumn\">MMARVINS</Col><Col id=\"datacolumn\">MMARVINS</Col></Row><Row><Col id=\"codecolumn\">HBLOOM</Col><Col id=\"datacolumn\">HBLOOM</Col></Row><Row><Col id=\"codecolumn\">AHUTTON</Col><Col id=\"datacolumn\">AHUTTON</Col></Row><Row><Col id=\"codecolumn\">JLIVINGS</Col><Col id=\"datacolumn\">JLIVINGS</Col></Row><Row><Col id=\"codecolumn\">NSARCHAN</Col><Col id=\"datacolumn\">NSARCHAN</Col></Row><Row><Col id=\"codecolumn\">TGATES</Col><Col id=\"datacolumn\">TGATES</Col></Row><Row><Col id=\"codecolumn\">VJONES</Col><Col id=\"datacolumn\">VJONES</Col></Row><Row><Col id=\"codecolumn\">ISCIARRA</Col><Col id=\"datacolumn\">ISCIARRA</Col></Row><Row><Col id=\"codecolumn\">GHIMURO</Col><Col id=\"datacolumn\">GHIMURO</Col></Row><Row><Col id=\"codecolumn\">LBISSOT</Col><Col id=\"datacolumn\">LBISSOT</Col></Row><Row><Col id=\"codecolumn\">TJOLSON</Col><Col id=\"datacolumn\">TJOLSON</Col></Row><Row><Col id=\"codecolumn\">MROGERS</Col><Col id=\"datacolumn\">MROGERS</Col></Row><Row><Col id=\"codecolumn\">KGEE</Col><Col id=\"datacolumn\">KGEE</Col></Row><Row><Col id=\"codecolumn\">JRUSSEL</Col><Col id=\"datacolumn\">JRUSSEL</Col></Row><Row><Col id=\"codecolumn\">EZLOTKEY</Col><Col id=\"datacolumn\">EZLOTKEY</Col></Row><Row><Col id=\"codecolumn\">OTUVAULT</Col><Col id=\"datacolumn\">OTUVAULT</Col></Row><Row><Col id=\"codecolumn\">AMCEWEN</Col><Col id=\"datacolumn\">AMCEWEN</Col></Row><Row><Col id=\"codecolumn\">LDORAN</Col><Col id=\"datacolumn\">LDORAN</Col></Row><Row><Col id=\"codecolumn\">CJOHNSON</Col><Col id=\"datacolumn\">CJOHNSON</Col></Row><Row><Col id=\"codecolumn\">WTAYLOR</Col><Col id=\"datacolumn\">WTAYLOR</Col></Row><Row><Col id=\"codecolumn\">MSULLIVA</Col><Col id=\"datacolumn\">MSULLIVA</Col></Row><Row><Col id=\"codecolumn\">ABULL</Col><Col id=\"datacolumn\">ABULL</Col></Row><Row><Col id=\"codecolumn\">ACABRIO</Col><Col id=\"datacolumn\">ACABRIO</Col></Row><Row><Col id=\"codecolumn\">AWALSH</Col><Col id=\"datacolumn\">AWALSH</Col></Row><Row><Col id=\"codecolumn\">PKAUFLIN</Col><Col id=\"datacolumn\">PKAUFLIN</Col></Row><Row><Col id=\"codecolumn\">IMIKKILI</Col><Col id=\"datacolumn\">IMIKKILI</Col></Row><Row><Col id=\"codecolumn\">SMARKLE</Col><Col id=\"datacolumn\">SMARKLE</Col></Row><Row><Col id=\"codecolumn\">JMALLIN</Col><Col id=\"datacolumn\">JMALLIN</Col></Row><Row><Col id=\"codecolumn\">TRAJS</Col><Col id=\"datacolumn\">TRAJS</Col></Row><Row><Col id=\"codecolumn\">KPARTNER</Col><Col id=\"datacolumn\">KPARTNER</Col></Row><Row><Col id=\"codecolumn\">NCAMBRAU</Col><Col id=\"datacolumn\">NCAMBRAU</Col></Row><Row><Col id=\"codecolumn\">ABANDA</Col><Col id=\"datacolumn\">ABANDA</Col></Row><Row><Col id=\"codecolumn\">EBATES</Col><Col id=\"datacolumn\">EBATES</Col></Row><Row><Col id=\"codecolumn\">JTAYLOR</Col><Col id=\"datacolumn\">JTAYLOR</Col></Row><Row><Col id=\"codecolumn\">KCHUNG</Col><Col id=\"datacolumn\">KCHUNG</Col></Row><Row><Col id=\"codecolumn\">SBELL</Col><Col id=\"datacolumn\">SBELL</Col></Row><Row><Col id=\"codecolumn\">SMCCAIN</Col><Col id=\"datacolumn\">SMCCAIN</Col></Row><Row><Col id=\"codecolumn\">DGRANT</Col><Col id=\"datacolumn\">DGRANT</Col></Row><Row><Col id=\"codecolumn\">SMAVRIS</Col><Col id=\"datacolumn\">SMAVRIS</Col></Row><Row><Col id=\"codecolumn\">SBAIDA</Col><Col id=\"datacolumn\">SBAIDA</Col></Row><Row><Col id=\"codecolumn\">SVOLLMAN</Col><Col id=\"datacolumn\">SVOLLMAN</Col></Row><Row><Col id=\"codecolumn\">JLANDRY</Col><Col id=\"datacolumn\">JLANDRY</Col></Row><Row><Col id=\"codecolumn\">HPHILTAN</Col><Col id=\"datacolumn\">HPHILTAN</Col></Row><Row><Col id=\"codecolumn\">JSEO</Col><Col id=\"datacolumn\">JSEO</Col></Row><Row><Col id=\"codecolumn\">CDAVIES</Col><Col id=\"datacolumn\">CDAVIES</Col></Row><Row><Col id=\"codecolumn\">PTUCKER</Col><Col id=\"datacolumn\">PTUCKER</Col></Row><Row><Col id=\"codecolumn\">DBERNSTE</Col><Col id=\"datacolumn\">DBERNSTE</Col></Row><Row><Col id=\"codecolumn\">PSULLY</Col><Col id=\"datacolumn\">PSULLY</Col></Row><Row><Col id=\"codecolumn\">TFOX</Col><Col id=\"datacolumn\">TFOX</Col></Row><Row><Col id=\"codecolumn\">KGRANT</Col><Col id=\"datacolumn\">KGRANT</Col></Row><Row><Col id=\"codecolumn\">PFAY</Col><Col id=\"datacolumn\">PFAY</Col></Row></Rows>");
            obj.set_innerdataset(mcmb_EMAIL_innerdataset);
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcmb_JOBID","86","286",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_listcolinfo("datacolumn|100");
            var mcmb_JOBID_innerdataset = new nexacro.NormalDataset("mcmb_JOBID_innerdataset", obj);
            mcmb_JOBID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">IT_PROG</Col><Col id=\"datacolumn\">IT_PROG</Col></Row><Row><Col id=\"codecolumn\">AC_MGR</Col><Col id=\"datacolumn\">AC_MGR</Col></Row><Row><Col id=\"codecolumn\">AC_ACCOUNT</Col><Col id=\"datacolumn\">AC_ACCOUNT</Col></Row><Row><Col id=\"codecolumn\">ST_MAN</Col><Col id=\"datacolumn\">ST_MAN</Col></Row><Row><Col id=\"codecolumn\">PU_MAN</Col><Col id=\"datacolumn\">PU_MAN</Col></Row><Row><Col id=\"codecolumn\">AD_ASST</Col><Col id=\"datacolumn\">AD_ASST</Col></Row><Row><Col id=\"codecolumn\">AD_VP</Col><Col id=\"datacolumn\">AD_VP</Col></Row><Row><Col id=\"codecolumn\">SH_CLERK</Col><Col id=\"datacolumn\">SH_CLERK</Col></Row><Row><Col id=\"codecolumn\">FI_ACCOUNT</Col><Col id=\"datacolumn\">FI_ACCOUNT</Col></Row><Row><Col id=\"codecolumn\">FI_MGR</Col><Col id=\"datacolumn\">FI_MGR</Col></Row><Row><Col id=\"codecolumn\">PU_CLERK</Col><Col id=\"datacolumn\">PU_CLERK</Col></Row><Row><Col id=\"codecolumn\">SA_MAN</Col><Col id=\"datacolumn\">SA_MAN</Col></Row><Row><Col id=\"codecolumn\">MK_MAN</Col><Col id=\"datacolumn\">MK_MAN</Col></Row><Row><Col id=\"codecolumn\">PR_REP</Col><Col id=\"datacolumn\">PR_REP</Col></Row><Row><Col id=\"codecolumn\">AD_PRES</Col><Col id=\"datacolumn\">AD_PRES</Col></Row><Row><Col id=\"codecolumn\">SA_REP</Col><Col id=\"datacolumn\">SA_REP</Col></Row><Row><Col id=\"codecolumn\">MK_REP</Col><Col id=\"datacolumn\">MK_REP</Col></Row><Row><Col id=\"codecolumn\">ST_CLERK</Col><Col id=\"datacolumn\">ST_CLERK</Col></Row><Row><Col id=\"codecolumn\">HR_REP</Col><Col id=\"datacolumn\">HR_REP</Col></Row></Rows>");
            obj.set_innerdataset(mcmb_JOBID_innerdataset);
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcmb_MANAGERID","86","338",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_listcolinfo("datacolumn|100");
            var mcmb_MANAGERID_innerdataset = new nexacro.NormalDataset("mcmb_MANAGERID_innerdataset", obj);
            mcmb_MANAGERID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">123</Col><Col id=\"datacolumn\">123</Col></Row><Row><Col id=\"codecolumn\">120</Col><Col id=\"datacolumn\">120</Col></Row><Row><Col id=\"codecolumn\">121</Col><Col id=\"datacolumn\">121</Col></Row><Row><Col id=\"codecolumn\">147</Col><Col id=\"datacolumn\">147</Col></Row><Row><Col id=\"codecolumn\">108</Col><Col id=\"datacolumn\">108</Col></Row><Row><Col id=\"codecolumn\">148</Col><Col id=\"datacolumn\">148</Col></Row><Row><Col id=\"codecolumn\">149</Col><Col id=\"datacolumn\">149</Col></Row><Row><Col id=\"codecolumn\">205</Col><Col id=\"datacolumn\">205</Col></Row><Row><Col id=\"codecolumn\">102</Col><Col id=\"datacolumn\">102</Col></Row><Row><Col id=\"codecolumn\">201</Col><Col id=\"datacolumn\">201</Col></Row><Row><Col id=\"codecolumn\">101</Col><Col id=\"datacolumn\">101</Col></Row><Row><Col id=\"codecolumn\">114</Col><Col id=\"datacolumn\">114</Col></Row><Row><Col id=\"codecolumn\">124</Col><Col id=\"datacolumn\">124</Col></Row><Row><Col id=\"codecolumn\">145</Col><Col id=\"datacolumn\">145</Col></Row><Row><Col id=\"codecolumn\">146</Col><Col id=\"datacolumn\">146</Col></Row><Row><Col id=\"codecolumn\">103</Col><Col id=\"datacolumn\">103</Col></Row><Row><Col id=\"codecolumn\">122</Col><Col id=\"datacolumn\">122</Col></Row></Rows>");
            obj.set_innerdataset(mcmb_MANAGERID_innerdataset);
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcmb_DEPARTMENTID","86","364",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_listcolinfo("datacolumn|100");
            var mcmb_DEPARTMENTID_innerdataset = new nexacro.NormalDataset("mcmb_DEPARTMENTID_innerdataset", obj);
            mcmb_DEPARTMENTID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">90</Col><Col id=\"datacolumn\">90</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">70</Col><Col id=\"datacolumn\">70</Col></Row><Row><Col id=\"codecolumn\">110</Col><Col id=\"datacolumn\">110</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">80</Col><Col id=\"datacolumn\">80</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">40</Col></Row><Row><Col id=\"codecolumn\">60</Col><Col id=\"datacolumn\">60</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row></Rows>");
            obj.set_innerdataset(mcmb_DEPARTMENTID_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PHONENUMBER","86","234",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HIREDATE","86","260",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SALARY","86","312",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",180,380,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SalesPlanFilter.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SalesPlanFilter.xfdl","Script::ext_CommEco.xjs");
        this.addIncludeScript("SalesPlanFilter.xfdl","Script::excel.xjs");
        this.registerScript("SalesPlanFilter.xfdl", function() {
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/
        this.executeIncludeScript("Script::excel.xjs"); /*include "Script::excel.xjs"*/

        this.sDayWeekViewPoint = "WEEK"; // DAY, WEEK

        this.SalesPlanFilter_onload = function(obj,e)
        {
        	//this.fn_formInit();
        };

        this.fn_formInit = function()
        {
        	this.chk_planComp.set_value(true);
        	this.btn_week.set_visible(true);
        	this.btn_day.set_visible(false);

        	nxlib.setDsParam(this, "viewpoint", this.sDayWeekViewPoint);

        	var oDatas = {
        		svcid: "selectWeek",
        		url: "demand/plananalysis/sales/selectweeklist.do",
        		outds: [
        			"ds_curplan=ds_curplan",
        			"ds_preplan=ds_preplan"
        		]
        	};

        	nxlib.transaction(this, oDatas);
        };

        this.fn_compareCheck = function()
        {
        	if (this.chk_planComp.isChecked())
        	{
        		this.cld_Date.setStartDate(this.ds_preplan.getColumn(this.cmb_prePlan.index, "effstartdate"));
        	}
        	else
        	{
        		this.cld_Date.setStartDate(this.ds_curplan.getColumn(this.cmb_curPlan.index, "effstartdate"));
        	}
        };

        this.fn_defaultCurPlan = function()
        {
        	if (this.sDayWeekViewPoint == "DAY")
        	{
        		for (var i = 0; i < this.ds_curplan.rowcount; i++)
        		{
        			if (this.ds_curplan.getColumn(i, "planseq") != 4)
        			{
        				this.cmb_curPlan.set_index(i);
        				return;
        			}
        		}
        	}
        	else
        	{
        		for (var i = 0; i < this.ds_curplan.rowcount; i++)
        		{
        			if (this.ds_curplan.getColumn(i, "planseq") == 4
        				|| this.ds_curplan.getColumn(i, "planseq") == 2
        				|| this.ds_curplan.getColumn(i, "planseq") == 1)
        			{
        				this.cmb_curPlan.set_index(i);
        				return;
        			}
        		}
        	}
        };

        this.fn_prePlanFilter = function(cmb_curPlanIndex)
        {
        	var sPreplanText = this.cmb_prePlan.text;
        	var sFilterExpr = " planindex > " + this.ds_curplan.getColumn(cmb_curPlanIndex, "planindex");

        	this.ds_preplan.filter(sFilterExpr);
        	this.ds_preplan.set_keystring("S:+planindex");

        	var iPos = this.ds_preplan.findRow("planid", sPreplanText);

        	// preplan 은 이미 더 작은 week를 선택하고 있는경우는 그대로 유지
        	if (iPos < 0 || this.ds_preplan.getColumn(iPos, "planweek") >= this.ds_curplan.getColumn(cmb_curPlanIndex, "planweek"))
        	{
        		for (var i = 0; i <= this.ds_preplan.rowcount; i++)
        		{
        			if (this.ds_preplan.getColumn(i, "planseq") == "4" && this.sDayWeekViewPoint == "WEEK")
        			{
        				iPos = i;
        				if (this.ds_preplan.getColumn(i, "planweek") < this.ds_curplan.getColumn(cmb_curPlanIndex, "planweek"))
        				break;
        			}
        			if (this.ds_preplan.getColumn(i, "planseq") != "4" && this.sDayWeekViewPoint == "DAY")
        			{
        				iPos = i;
        				break;
        			}
        		}
        	}

        	if (iPos < 0) iPos = 0;
        	this.cmb_prePlan.index = iPos;
        	this.fn_compareCheck();
        	this.cld_Date.setEndDate(this.ds_curplan.getColumn(this.cmb_curPlan.index, "effenddate"));
        };

        this.fn_setParam = function()
        {
        	nxlib.setDsParam(this.fv_objBizForm, "startdate", this.cld_Date.getStartDate());
        	nxlib.setDsParam(this.fv_objBizForm, "enddate", this.cld_Date.getEndDate());
        	nxlib.setDsParam(this.fv_objBizForm, "preplanid", this.cmb_prePlan.text);
        	nxlib.setDsParam(this.fv_objBizForm, "curplanid", this.cmb_curPlan.text);
        	nxlib.setDsParam(this.fv_objBizForm, "plancompare", this.chk_planComp.value);
        };

        this.chk_planComp_onclick = function(obj,e)
        {
        	this.fn_compareCheck();
        };

        this.cmb_prePlan_onitemchanged = function(obj,e)
        {
        	this.cld_Date.setStartDate(this.ds_preplan.getColumn(e.preindex, "effstartdate"));
        };

        this.cmb_curPlan_onitemchanged = function(obj,e)
        {
        	this.fn_prePlanFilter(e.preindex);
        };

        this.ds_currentdate_onload = function(obj,e)
        {
        	this.cld_Date.setStartDate(Eco.date.addDate(obj.getColumn(0, "day"), -16));
        	this.cld_Date.setEndDate(Eco.date.addDate(obj.getColumn(0, "day"), 130));
        };

        this.btn_week_onclick = function(obj,e)
        {
        	if (obj.visible)
        	{
        		this.btn_week.set_visible(false);
        		this.btn_day.set_visible(true);
        		this.sDayWeekViewPoint = "DAY";

        		nxlib.setDsParam(this, "viewpoint", this.sDayWeekViewPoint);

        		var oDatas = {
        			svcid: "selectWeek",
        			url: "demand/plananalysis/sales/selectweeklist.do",
        			outds: [
        				"ds_curplan=ds_curplan",
        				"ds_preplan=ds_preplan"
        			]
        		};

        		nxlib.transaction(this, oDatas);
        	}
        };

        this.btn_day_onclick = function(obj,e)
        {
        	if (obj.visible)
        	{
        		this.btn_week.set_visible(true);
        		this.btn_day.set_visible(false);
        		this.sDayWeekViewPoint = "WEEK";

        		nxlib.setDsParam(this, "viewpoint", this.sDayWeekViewPoint);

        		var oDatas = {
        			svcid: "selectWeek",
        			url: "demand/plananalysis/sales/selectweeklist.do",
        			outds: [
        				"ds_curplan=ds_curplan",
        				"ds_preplan=ds_preplan"
        			]
        		};

        		nxlib.transaction(this, oDatas);
        	}
        };

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.fnInitParam = function(ds)
        {
        	ds.clearData();
        };

        this.comm_Change = function(obj, e)
        {
        	//trace(this.parent.name); //divFilter
        	//trace(this.parent.parent.name); //filter_std
        	//trace(this.parent.parent.parent.name); //divLeft
        	//trace(this.parent.parent.parent.parent.name); //InheritStyle02

        	//var objGrid = this.parent.parent.parent.parent.all["divWork"].form.all["grd_SM"];
        	var workForm = this.parent.parent.parent.parent.all["divWork"].form;

        	var keyValue = obj.name.split("_");

        	if(keyValue[1] == "EMPLOYEEID")
        	{
        		var nValue = obj.getText().split("^");

        		this.fnInitParam(this.ds_EMPLOYEE_ID);

        		if(!this.gfnIsEmpty(nValue[0]))
        		{
        			for(var i=0; i<nValue.length; i++)
        			{
        				var nRow = this.ds_EMPLOYEE_ID.addRow();

        				this.ds_EMPLOYEE_ID.setColumn(nRow, "CAPTION", nValue[i]);
        			}
        		}
        	}
        	else if(keyValue[1] == "FIRSTNAME")
        	{
        		var nValue = obj.getText().split("^");

        		this.fnInitParam(this.ds_FIRST_NAME);

        		if(!this.gfnIsEmpty(nValue[0]))
        		{
        			for(var i=0; i<nValue.length; i++)
        			{
        				var nRow = this.ds_FIRST_NAME.addRow();

        				this.ds_FIRST_NAME.setColumn(nRow, "CAPTION", nValue[i]);
        			}
        		}
        	}
        	else if(keyValue[1] == "LASTNAME")
        	{
        		var nValue = obj.getText().split("^");

        		this.fnInitParam(this.ds_LAST_NAME);

        		if(!this.gfnIsEmpty(nValue[0]))
        		{
        			for(var i=0; i<nValue.length; i++)
        			{
        				var nRow = this.ds_LAST_NAME.addRow();

        				this.ds_LAST_NAME.setColumn(nRow, "CAPTION", nValue[i]);
        			}
        		}
        	}
        	else if(keyValue[1] == "EMAIL")
        	{
        		var nValue = obj.getText().split("^");

        		this.fnInitParam(this.ds_EMAIL);

        		if(!this.gfnIsEmpty(nValue[0]))
        		{
        			for(var i=0; i<nValue.length; i++)
        			{
        				var nRow = this.ds_EMAIL.addRow();

        				this.ds_EMAIL.setColumn(nRow, "CAPTION", nValue[i]);
        			}
        		}
        	}
        	else if(keyValue[1] == "JOBID")
        	{
        		var nValue = obj.getText().split("^");

        		this.fnInitParam(this.ds_JOB_ID);

        		if(!this.gfnIsEmpty(nValue[0]))
        		{
        			for(var i=0; i<nValue.length; i++)
        			{
        				var nRow = this.ds_JOB_ID.addRow();

        				this.ds_JOB_ID.setColumn(nRow, "CAPTION", nValue[i]);
        			}
        		}
        	}
        	else if(keyValue[1] == "MANAGERID")
        	{
        		var nValue = obj.getText().split("^");

        		this.fnInitParam(this.ds_MANAGER_ID);

        		if(!this.gfnIsEmpty(nValue[0]))
        		{
        			for(var i=0; i<nValue.length; i++)
        			{
        				var nRow = this.ds_MANAGER_ID.addRow();

        				this.ds_MANAGER_ID.setColumn(nRow, "CAPTION", nValue[i]);
        			}
        		}
        	}
        	else if(keyValue[1] == "DEPARTMENTID")
        	{
        		var nValue = obj.getText().split("^");

        		this.fnInitParam(this.ds_DEPARTMENT_ID);

        		if(!this.gfnIsEmpty(nValue[0]))
        		{
        			for(var i=0; i<nValue.length; i++)
        			{
        				var nRow = this.ds_DEPARTMENT_ID.addRow();

        				this.ds_DEPARTMENT_ID.setColumn(nRow, "CAPTION", nValue[i]);
        			}
        		}
        	}

        	//데이터 조회
        	workForm.fnSetFilter();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SalesPlanFilter_onload,this);
            this.mcmb_EMPLOYEEID.addEventHandler("onitemchanged",this.comm_Change,this);
            this.mcmb_FIRSTNAME.addEventHandler("onitemchanged",this.comm_Change,this);
            this.mcmb_LASTNAME.addEventHandler("onitemchanged",this.comm_Change,this);
            this.mcmb_EMAIL.addEventHandler("onitemchanged",this.comm_Change,this);
            this.mcmb_JOBID.addEventHandler("onitemchanged",this.comm_Change,this);
            this.mcmb_MANAGERID.addEventHandler("onitemchanged",this.comm_Change,this);
            this.mcmb_DEPARTMENTID.addEventHandler("onitemchanged",this.comm_Change,this);
        };

        this.loadIncludeScript("SalesPlanFilter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();