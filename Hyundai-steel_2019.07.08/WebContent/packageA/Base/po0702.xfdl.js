(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("poctest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds2M", this);
            obj._setContents("<ColumnInfo><Column id=\"Gang\" type=\"STRING\" size=\"256\"/><Column id=\"Cast\" type=\"STRING\" size=\"256\"/><Column id=\"AssignNum\" type=\"STRING\" size=\"256\"/><Column id=\"FinGoals\" type=\"STRING\" size=\"256\"/><Column id=\"Thickness\" type=\"STRING\" size=\"256\"/><Column id=\"Width\" type=\"STRING\" size=\"256\"/><Column id=\"Variable\" type=\"STRING\" size=\"256\"/><Column id=\"LD\" type=\"STRING\" size=\"256\"/><Column id=\"HC\" type=\"STRING\" size=\"256\"/><Column id=\"LC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Gang\">N40087</Col><Col id=\"Cast\">H309</Col><Col id=\"AssignNum\">H8631</Col><Col id=\"FinGoals\">A0705DLAFR</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">Z</Col></Row><Row><Col id=\"Gang\">N40089</Col><Col id=\"Cast\">H309</Col><Col id=\"AssignNum\">O3229</Col><Col id=\"FinGoals\">A0705DLAFXXB</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">N</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">Z</Col></Row><Row><Col id=\"Gang\">N40091</Col><Col id=\"Cast\">H309</Col><Col id=\"AssignNum\">O3206</Col><Col id=\"FinGoals\">A0705DLAABD</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">N</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row/><Row><Col id=\"Gang\">N400103</Col><Col id=\"Cast\">H367</Col><Col id=\"AssignNum\">H8553</Col><Col id=\"FinGoals\">C008130FTXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1140</Col><Col id=\"Variable\">N</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N400106</Col><Col id=\"Cast\">H367</Col><Col id=\"AssignNum\">H8554</Col><Col id=\"FinGoals\">C008130FTXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1090</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N400111</Col><Col id=\"Cast\">H367</Col><Col id=\"AssignNum\">H8555</Col><Col id=\"FinGoals\">C008130FTXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">990</Col><Col id=\"Variable\">N</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N400115</Col><Col id=\"Cast\">H367</Col><Col id=\"AssignNum\">H8555</Col><Col id=\"FinGoals\">C008130FTXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">990</Col><Col id=\"Variable\">N</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N400120</Col><Col id=\"Cast\">H367</Col><Col id=\"AssignNum\">H8556</Col><Col id=\"FinGoals\">A04020LAXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1350</Col><Col id=\"Variable\">N</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N400124</Col><Col id=\"Cast\">H367</Col><Col id=\"AssignNum\">H8556</Col><Col id=\"FinGoals\">A04020LAXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1350</Col><Col id=\"Variable\">N</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N400129</Col><Col id=\"Cast\">H367</Col><Col id=\"AssignNum\">H8556</Col><Col id=\"FinGoals\">A04020LAXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1350</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row/><Row><Col id=\"Gang\">N400134</Col><Col id=\"Cast\">H353</Col><Col id=\"AssignNum\">O3220</Col><Col id=\"FinGoals\">C092220L50C</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1030</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">C</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N400139</Col><Col id=\"Cast\">H353</Col><Col id=\"AssignNum\">O3221</Col><Col id=\"FinGoals\">C092220L50C</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1000</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">C</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N400142</Col><Col id=\"Cast\">H353</Col><Col id=\"AssignNum\">O3222</Col><Col id=\"FinGoals\">C092220L50C</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1000</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">C</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N400147</Col><Col id=\"Cast\">H353</Col><Col id=\"AssignNum\">O3223</Col><Col id=\"FinGoals\">C092220L50C</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">900</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">C</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N400150</Col><Col id=\"Cast\">H353</Col><Col id=\"AssignNum\">O3224</Col><Col id=\"FinGoals\">C092220L50C</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">900</Col><Col id=\"Variable\">N</Col><Col id=\"LD\">3</Col><Col id=\"HC\">C</Col><Col id=\"LC\">C</Col></Row><Row/><Row/><Row><Col id=\"Gang\">N400158</Col><Col id=\"Cast\">H372</Col><Col id=\"AssignNum\">O3225</Col><Col id=\"FinGoals\">A04020LAXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1310</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N400162</Col><Col id=\"Cast\">H372</Col><Col id=\"AssignNum\">O3226</Col><Col id=\"FinGoals\">A04020LAXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1310</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N400165</Col><Col id=\"Cast\">H372</Col><Col id=\"AssignNum\">H8625</Col><Col id=\"FinGoals\">A04020LAXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1310</Col><Col id=\"Variable\">N</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N400173</Col><Col id=\"Cast\">H372</Col><Col id=\"AssignNum\">H8626</Col><Col id=\"FinGoals\">A04020LAXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1250</Col><Col id=\"Variable\">N</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N400177</Col><Col id=\"Cast\">H372</Col><Col id=\"AssignNum\">H8627</Col><Col id=\"FinGoals\">A04020LAXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1210</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"AssignNum\"/></Row><Row><Col id=\"Gang\">N400182</Col><Col id=\"Cast\">H342</Col><Col id=\"AssignNum\">H8628</Col><Col id=\"FinGoals\">C092220L50C</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1120</Col><Col id=\"Variable\">N</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">H</Col></Row><Row><Col id=\"Gang\">N400186</Col><Col id=\"Cast\">H342</Col><Col id=\"AssignNum\">H8629</Col><Col id=\"FinGoals\">C092220L50C</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1170</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">H</Col></Row><Row><Col id=\"Gang\">N400189</Col><Col id=\"Cast\">H342</Col><Col id=\"AssignNum\">H8629</Col><Col id=\"FinGoals\">C092220L50C</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1170</Col><Col id=\"Variable\">N</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">H</Col></Row><Row><Col id=\"Gang\">N400164</Col><Col id=\"Cast\">H342</Col><Col id=\"AssignNum\">H8629</Col><Col id=\"FinGoals\">C092220L50C</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1070</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">H</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds1M", this);
            obj._setContents("<ColumnInfo><Column id=\"Gang\" type=\"STRING\" size=\"256\"/><Column id=\"Cast\" type=\"STRING\" size=\"256\"/><Column id=\"AssignNum\" type=\"STRING\" size=\"256\"/><Column id=\"FinGoals\" type=\"STRING\" size=\"256\"/><Column id=\"Thickness\" type=\"STRING\" size=\"256\"/><Column id=\"Width\" type=\"STRING\" size=\"256\"/><Column id=\"Variable\" type=\"STRING\" size=\"256\"/><Column id=\"LD\" type=\"STRING\" size=\"256\"/><Column id=\"HC\" type=\"STRING\" size=\"256\"/><Column id=\"LC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Gang\">N40064</Col><Col id=\"Cast\">H360</Col><Col id=\"AssignNum\">H8643</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1420</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40069</Col><Col id=\"Cast\">H360</Col><Col id=\"AssignNum\">H8644</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1340</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40072</Col><Col id=\"Cast\">H360</Col><Col id=\"AssignNum\">H8645</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1300</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40075</Col><Col id=\"Cast\">H360</Col><Col id=\"AssignNum\">H8646</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40080</Col><Col id=\"Cast\">H360</Col><Col id=\"AssignNum\">H8647</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40084</Col><Col id=\"Cast\">H360</Col><Col id=\"AssignNum\">H8648</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">3</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row/><Row><Col id=\"Gang\">N40083</Col><Col id=\"Cast\">H269</Col><Col id=\"AssignNum\">H8649</Col><Col id=\"FinGoals\">S45090LBXX1</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">V</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40085</Col><Col id=\"Cast\">H269</Col><Col id=\"AssignNum\">H8650</Col><Col id=\"FinGoals\">S45090LBXX1</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">V</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40088</Col><Col id=\"Cast\">H269</Col><Col id=\"AssignNum\">H8651</Col><Col id=\"FinGoals\">S45090LBXX1</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">C</Col><Col id=\"LC\">B</Col></Row><Row/><Row><Col id=\"Gang\">N400DT</Col><Col id=\"Cast\">H312</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"AssignNum\">H8662</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1140</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40113</Col><Col id=\"Cast\">H312</Col><Col id=\"AssignNum\">H8663</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1140</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40117</Col><Col id=\"Cast\">H312</Col><Col id=\"AssignNum\">H8664</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1140</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40122</Col><Col id=\"Cast\">H312</Col><Col id=\"AssignNum\">H8665</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1140</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40129</Col><Col id=\"Cast\">H312</Col><Col id=\"AssignNum\">H8666</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1140</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40131</Col><Col id=\"Cast\">H312</Col><Col id=\"AssignNum\">H8667</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1140</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row/><Row><Col id=\"Gang\">N40141</Col><Col id=\"Cast\">H375</Col><Col id=\"AssignNum\">H8670</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"LC\">Z</Col><Col id=\"HC\">H</Col></Row><Row><Col id=\"Gang\">N40145</Col><Col id=\"Cast\">H375</Col><Col id=\"AssignNum\">H8671</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">Z</Col></Row><Row><Col id=\"Gang\">N40149</Col><Col id=\"Cast\">H375</Col><Col id=\"AssignNum\">H8672</Col><Col id=\"FinGoals\">A04020LAXXZ</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">Z</Col></Row><Row><Col id=\"Gang\">N40152</Col><Col id=\"Cast\">H375</Col><Col id=\"AssignNum\">H8673</Col><Col id=\"FinGoals\">A04020LAXXZ</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1270</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">Z</Col></Row><Row><Col id=\"Gang\">N40155</Col><Col id=\"Cast\">H375</Col><Col id=\"AssignNum\">H8680</Col><Col id=\"FinGoals\">A04020LAXXZ</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1170</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">Z</Col></Row><Row/><Row><Col id=\"AssignNum\">O3228</Col><Col id=\"Gang\">N40159</Col><Col id=\"Cast\">H369</Col><Col id=\"FinGoals\">AJ6030FTXX</Col><Col id=\"Thickness\">225</Col><Col id=\"Variable\">·</Col><Col id=\"Width\">1170</Col><Col id=\"LD\">1</Col><Col id=\"LC\">C</Col><Col id=\"HC\">H</Col></Row><Row><Col id=\"Gang\">N40163</Col><Col id=\"Cast\">H369</Col><Col id=\"AssignNum\">H8696</Col><Col id=\"FinGoals\">AJ6030FTXX</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1170</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40166</Col><Col id=\"Cast\">H369</Col><Col id=\"AssignNum\">H8697</Col><Col id=\"FinGoals\">AJ6030FTXX</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1130</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40170</Col><Col id=\"Cast\">H369</Col><Col id=\"AssignNum\">H8698</Col><Col id=\"FinGoals\">AJ6030FTXX</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1050</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40174</Col><Col id=\"Cast\">H369</Col><Col id=\"AssignNum\">H8699</Col><Col id=\"FinGoals\">AJ6030FTXX</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1050</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row/><Row/><Row><Col id=\"Gang\">N40181</Col><Col id=\"Cast\">H346</Col><Col id=\"AssignNum\">H8616</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1120</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"LC\">E</Col><Col id=\"HC\">H</Col></Row><Row><Col id=\"Gang\">N40185</Col><Col id=\"Cast\">H346</Col><Col id=\"AssignNum\">H8617</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">1020</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">1</Col><Col id=\"LC\">E</Col><Col id=\"HC\">H</Col></Row><Row><Col id=\"Gang\">N40189</Col><Col id=\"Cast\">H346</Col><Col id=\"AssignNum\">H8618</Col><Col id=\"FinGoals\">AU1010JAFT8</Col><Col id=\"Thickness\">225</Col><Col id=\"Width\">970</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">1</Col><Col id=\"LC\">E</Col><Col id=\"HC\">H</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds3M", this);
            obj._setContents("<ColumnInfo><Column id=\"Gang\" type=\"STRING\" size=\"256\"/><Column id=\"Cast\" type=\"STRING\" size=\"256\"/><Column id=\"AssignNum\" type=\"STRING\" size=\"256\"/><Column id=\"FinGoals\" type=\"STRING\" size=\"256\"/><Column id=\"Thickness\" type=\"STRING\" size=\"256\"/><Column id=\"Width\" type=\"STRING\" size=\"256\"/><Column id=\"Variable\" type=\"STRING\" size=\"256\"/><Column id=\"LD\" type=\"STRING\" size=\"256\"/><Column id=\"HC\" type=\"STRING\" size=\"256\"/><Column id=\"LC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row><Col id=\"Gang\">N40066</Col><Col id=\"Cast\">H343</Col><Col id=\"AssignNum\">O3137</Col><Col id=\"FinGoals\">C06105J3CE4</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1430</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">G</Col></Row><Row><Col id=\"Gang\">N40070</Col><Col id=\"Cast\">H343</Col><Col id=\"AssignNum\">O3138</Col><Col id=\"FinGoals\">C06105J3CE4</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1430</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">G</Col></Row><Row><Col id=\"Gang\">N40077</Col><Col id=\"Cast\">H343</Col><Col id=\"AssignNum\">O3139</Col><Col id=\"FinGoals\">C06105J3CE4</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1430</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">E</Col></Row><Row><Col id=\"Gang\">N40081</Col><Col id=\"Cast\">H343</Col><Col id=\"AssignNum\">O3140</Col><Col id=\"FinGoals\">C06105J3CE4</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1430</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">E</Col></Row><Row><Col id=\"Gang\">N40086</Col><Col id=\"Cast\">H343</Col><Col id=\"AssignNum\">O3141</Col><Col id=\"FinGoals\">C06105J3CE4</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1430</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">E</Col></Row><Row/><Row><Col id=\"Gang\">N40094</Col><Col id=\"Cast\">H349</Col><Col id=\"AssignNum\">O3161</Col><Col id=\"FinGoals\">AJ1060Y7BA</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1420</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">3</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40097</Col><Col id=\"Cast\">H349</Col><Col id=\"AssignNum\">O3162</Col><Col id=\"FinGoals\">AJ1060Y7BA</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1420</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">3</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40100</Col><Col id=\"Cast\">H349</Col><Col id=\"FinGoals\">AJ1060Y7BA</Col><Col id=\"AssignNum\">O3163</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1420</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">3</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40102</Col><Col id=\"Cast\">H349</Col><Col id=\"AssignNum\">O3164</Col><Col id=\"FinGoals\">AJ1060Y7BA</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1420</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40105</Col><Col id=\"Cast\">H349</Col><Col id=\"AssignNum\">O3165</Col><Col id=\"FinGoals\">AJ1060Y7BA</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1420</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40110</Col><Col id=\"Cast\">H349</Col><Col id=\"AssignNum\">O3166</Col><Col id=\"FinGoals\">AJ1060Y7BA</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1420</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\"/><Col id=\"Cast\"/><Col id=\"AssignNum\"/><Col id=\"FinGoals\"/><Col id=\"Thickness\"/><Col id=\"Width\"/><Col id=\"Variable\"/><Col id=\"LD\"/><Col id=\"HC\"/><Col id=\"LC\"/></Row><Row><Col id=\"Gang\">N40121</Col><Col id=\"Cast\">H348</Col><Col id=\"AssignNum\">O3155</Col><Col id=\"FinGoals\">AU1010FAFT8</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1690</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40126</Col><Col id=\"Cast\">H348</Col><Col id=\"AssignNum\">O3156</Col><Col id=\"FinGoals\">AU1010FAFT8</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1690</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"LC\">A</Col><Col id=\"HC\">C</Col></Row><Row><Col id=\"Gang\">N40130</Col><Col id=\"Cast\">H348</Col><Col id=\"AssignNum\">O3157</Col><Col id=\"FinGoals\">AU1010FAFT8</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1690</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"LC\">A</Col><Col id=\"HC\">C</Col></Row><Row><Col id=\"Gang\">N40132</Col><Col id=\"Cast\">H348</Col><Col id=\"AssignNum\">O3158</Col><Col id=\"FinGoals\">AU1010FAFT8</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1690</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40135</Col><Col id=\"Cast\">H348</Col><Col id=\"AssignNum\">O3159</Col><Col id=\"FinGoals\">AU1010FAFT8</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1690</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40138</Col><Col id=\"Cast\">H348</Col><Col id=\"AssignNum\">O3160</Col><Col id=\"FinGoals\">AU1010FAFT7</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1690</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row/><Row><Col id=\"Gang\">N40144</Col><Col id=\"Cast\">H364</Col><Col id=\"AssignNum\">O3213</Col><Col id=\"FinGoals\">AU1010FAFT8</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1600</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"AssignNum\">O3214</Col><Col id=\"Gang\">N40148</Col><Col id=\"Cast\">H364</Col><Col id=\"FinGoals\">AU1010FAFT8</Col><Col id=\"Thickness\">250</Col><Col id=\"Variable\">·</Col><Col id=\"Width\">1600</Col><Col id=\"LD\">2</Col><Col id=\"LC\">A</Col><Col id=\"HC\">C</Col></Row><Row><Col id=\"Gang\">N40151</Col><Col id=\"Cast\">H364</Col><Col id=\"AssignNum\">O3215</Col><Col id=\"FinGoals\">AU1010FAFT8</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1600</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40153</Col><Col id=\"Cast\">H364</Col><Col id=\"AssignNum\">O3216</Col><Col id=\"FinGoals\">AU1010FAFT8</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1600</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40157</Col><Col id=\"Cast\">H364</Col><Col id=\"AssignNum\">O3217</Col><Col id=\"FinGoals\">AU1010FAFT8</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1600</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40161</Col><Col id=\"Cast\">H364</Col><Col id=\"AssignNum\">O3218</Col><Col id=\"FinGoals\">AU1010FAFT7</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1600</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row/><Row/><Row><Col id=\"Gang\">N40168</Col><Col id=\"Cast\">H354</Col><Col id=\"AssignNum\">O3176</Col><Col id=\"FinGoals\">A04020LFTX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1360</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40172</Col><Col id=\"Cast\">H354</Col><Col id=\"AssignNum\">O3177</Col><Col id=\"FinGoals\">A04020LFTX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1360</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"LC\">B</Col><Col id=\"HC\">H</Col></Row><Row><Col id=\"Gang\">N40176</Col><Col id=\"Cast\">H354</Col><Col id=\"AssignNum\">O3178</Col><Col id=\"FinGoals\">A04020LFTX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1360</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"LC\">B</Col><Col id=\"HC\">H</Col></Row><Row><Col id=\"Gang\">N40179</Col><Col id=\"Cast\">H354</Col><Col id=\"AssignNum\">O3179</Col><Col id=\"FinGoals\">A04020LFTX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1360</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"LC\">B</Col><Col id=\"HC\">H</Col></Row><Row><Col id=\"Gang\">N40180</Col><Col id=\"Cast\">H354</Col><Col id=\"AssignNum\">O3180</Col><Col id=\"FinGoals\">A04020LFTX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1360</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40183</Col><Col id=\"Cast\">H354</Col><Col id=\"AssignNum\">O3181</Col><Col id=\"FinGoals\">A04020LFTX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1360</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40188</Col><Col id=\"Cast\">H354</Col><Col id=\"AssignNum\">O3182</Col><Col id=\"FinGoals\">A04020LFTX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1360</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds4M", this);
            obj._setContents("<ColumnInfo><Column id=\"Gang\" type=\"STRING\" size=\"256\"/><Column id=\"Cast\" type=\"STRING\" size=\"256\"/><Column id=\"AssignNum\" type=\"STRING\" size=\"256\"/><Column id=\"FinGoals\" type=\"STRING\" size=\"256\"/><Column id=\"Thickness\" type=\"STRING\" size=\"256\"/><Column id=\"Width\" type=\"STRING\" size=\"256\"/><Column id=\"Variable\" type=\"STRING\" size=\"256\"/><Column id=\"LD\" type=\"STRING\" size=\"256\"/><Column id=\"HC\" type=\"STRING\" size=\"256\"/><Column id=\"LC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row><Col id=\"Gang\">N40071</Col><Col id=\"Cast\">P831</Col><Col id=\"AssignNum\">R9037</Col><Col id=\"FinGoals\">C15135L5FR</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40076</Col><Col id=\"Cast\">P831</Col><Col id=\"AssignNum\">R9038</Col><Col id=\"FinGoals\">C15135L5FRA</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40079</Col><Col id=\"Cast\">P831</Col><Col id=\"AssignNum\">W5019</Col><Col id=\"FinGoals\">C15135L5FR</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40083</Col><Col id=\"Cast\">P831</Col><Col id=\"AssignNum\">R9039</Col><Col id=\"FinGoals\">C15135L5FR</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40085</Col><Col id=\"Cast\">P831</Col><Col id=\"AssignNum\">W5020</Col><Col id=\"FinGoals\">C15135L5FR</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40088</Col><Col id=\"Cast\">P831</Col><Col id=\"AssignNum\">R9040</Col><Col id=\"FinGoals\">C15135L5FR</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40090</Col><Col id=\"Cast\">P831</Col><Col id=\"AssignNum\">R9041</Col><Col id=\"FinGoals\">C15135L5FR</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40092</Col><Col id=\"Cast\">P831</Col><Col id=\"AssignNum\">R9042</Col><Col id=\"FinGoals\">C15135L5FR</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">H</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40096</Col><Col id=\"Cast\">P831</Col><Col id=\"FinGoals\">C15135L5FR</Col><Col id=\"AssignNum\">W5021</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">B</Col></Row><Row><Col id=\"Gang\">N40098</Col><Col id=\"Cast\">P831</Col><Col id=\"AssignNum\">R9043</Col><Col id=\"FinGoals\">C15135L5FR</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">B</Col></Row><Row/><Row/><Row><Col id=\"Gang\">N40108</Col><Col id=\"Cast\">P829</Col><Col id=\"AssignNum\">R9030</Col><Col id=\"FinGoals\">C07150C3FX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">H</Col></Row><Row><Col id=\"Gang\">N40112</Col><Col id=\"Cast\">P829</Col><Col id=\"AssignNum\">R9031</Col><Col id=\"FinGoals\">C07150C3FX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">H</Col></Row><Row><Col id=\"Gang\">N40116</Col><Col id=\"Cast\">P829</Col><Col id=\"AssignNum\">R9032</Col><Col id=\"FinGoals\">C07150C3FTA</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"LC\">H</Col><Col id=\"HC\">C</Col></Row><Row><Col id=\"Gang\">N40118</Col><Col id=\"Cast\">P829</Col><Col id=\"AssignNum\">R9033</Col><Col id=\"FinGoals\">C07150C3FTA</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"LC\">H</Col><Col id=\"HC\">C</Col></Row><Row><Col id=\"Gang\">N40123</Col><Col id=\"Cast\">P829</Col><Col id=\"AssignNum\">R9034</Col><Col id=\"FinGoals\">C07150C3FTA</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">H</Col></Row><Row><Col id=\"Gang\">N40127</Col><Col id=\"Cast\">P829</Col><Col id=\"AssignNum\">R9035</Col><Col id=\"FinGoals\">C07150C3FTA</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">H</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Day", this);
            obj._setContents("<ColumnInfo><Column id=\"Hour\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Hour\">00</Col></Row><Row><Col id=\"Hour\">01</Col></Row><Row><Col id=\"Hour\">02</Col></Row><Row><Col id=\"Hour\">03</Col></Row><Row><Col id=\"Hour\">04</Col></Row><Row><Col id=\"Hour\">05</Col></Row><Row><Col id=\"Hour\">06</Col></Row><Row><Col id=\"Hour\">07</Col></Row><Row><Col id=\"Hour\">08</Col></Row><Row><Col id=\"Hour\">09</Col></Row><Row><Col id=\"Hour\">10</Col></Row><Row><Col id=\"Hour\">11</Col></Row><Row><Col id=\"Hour\">12</Col></Row><Row><Col id=\"Hour\">13</Col></Row><Row><Col id=\"Hour\">14</Col></Row><Row><Col id=\"Hour\">15</Col></Row><Row><Col id=\"Hour\">16</Col></Row><Row><Col id=\"Hour\">17</Col></Row><Row><Col id=\"Hour\">18</Col></Row><Row><Col id=\"Hour\">19</Col></Row><Row><Col id=\"Hour\">20</Col></Row><Row><Col id=\"Hour\">21</Col></Row><Row><Col id=\"Hour\">22</Col></Row><Row><Col id=\"Hour\">23</Col></Row><Row><Col id=\"Hour\">24</Col></Row><Row><Col id=\"Hour\">00</Col></Row><Row><Col id=\"Hour\">01</Col></Row><Row><Col id=\"Hour\">02</Col></Row><Row><Col id=\"Hour\">03</Col></Row><Row><Col id=\"Hour\">04</Col></Row><Row><Col id=\"Hour\">05</Col></Row><Row><Col id=\"Hour\">06</Col></Row><Row><Col id=\"Hour\">07</Col></Row><Row><Col id=\"Hour\">08</Col></Row><Row><Col id=\"Hour\">09</Col></Row><Row><Col id=\"Hour\">10</Col></Row><Row><Col id=\"Hour\">11</Col></Row><Row><Col id=\"Hour\">12</Col></Row><Row><Col id=\"Hour\">13</Col></Row><Row><Col id=\"Hour\">14</Col></Row><Row><Col id=\"Hour\">15</Col></Row><Row><Col id=\"Hour\">16</Col></Row><Row><Col id=\"Hour\">17</Col></Row><Row><Col id=\"Hour\">18</Col></Row><Row><Col id=\"Hour\">19</Col></Row><Row><Col id=\"Hour\">20</Col></Row><Row><Col id=\"Hour\">21</Col></Row><Row><Col id=\"Hour\">22</Col></Row><Row><Col id=\"Hour\">23</Col></Row><Row><Col id=\"Hour\">24</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds5M", this);
            obj._setContents("<ColumnInfo><Column id=\"Gang\" type=\"STRING\" size=\"256\"/><Column id=\"Cast\" type=\"STRING\" size=\"256\"/><Column id=\"AssignNum\" type=\"STRING\" size=\"256\"/><Column id=\"FinGoals\" type=\"STRING\" size=\"256\"/><Column id=\"Thickness\" type=\"STRING\" size=\"256\"/><Column id=\"Width\" type=\"STRING\" size=\"256\"/><Column id=\"Variable\" type=\"STRING\" size=\"256\"/><Column id=\"LD\" type=\"STRING\" size=\"256\"/><Column id=\"HC\" type=\"STRING\" size=\"256\"/><Column id=\"LC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Gang\">N40065</Col><Col id=\"Cast\">H363</Col><Col id=\"AssignNum\">O3209</Col><Col id=\"FinGoals\">A04020LAXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1380</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">4</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40068</Col><Col id=\"Cast\">H363</Col><Col id=\"AssignNum\">O3210</Col><Col id=\"FinGoals\">A04020LAXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1380</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40074</Col><Col id=\"Cast\">H363</Col><Col id=\"AssignNum\">O3211</Col><Col id=\"FinGoals\">A04020LAXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1380</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40078</Col><Col id=\"Cast\">H363</Col><Col id=\"AssignNum\">O3212</Col><Col id=\"FinGoals\">A04020LAXX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1380</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row><Col id=\"Gang\">N40101</Col><Col id=\"Cast\">H328</Col><Col id=\"AssignNum\">H8605</Col><Col id=\"FinGoals\">A07140Y6XX2</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40104</Col><Col id=\"Cast\">H328</Col><Col id=\"AssignNum\">H8606</Col><Col id=\"FinGoals\">A07140Y6XX2</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40109</Col><Col id=\"Cast\">H328</Col><Col id=\"AssignNum\">H8607</Col><Col id=\"FinGoals\">A07140Y6XX2</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40114</Col><Col id=\"Cast\">H328</Col><Col id=\"AssignNum\">H8608</Col><Col id=\"FinGoals\">A07140Y6XX2</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40119</Col><Col id=\"Cast\">H328</Col><Col id=\"AssignNum\">H8609</Col><Col id=\"FinGoals\">A07140Y6XX2</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1200</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">2</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40125</Col><Col id=\"Cast\">H328</Col><Col id=\"AssignNum\">H8610</Col><Col id=\"FinGoals\">A07140Y6XX2</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1200</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">1</Col><Col id=\"LC\">C</Col><Col id=\"HC\">H</Col></Row><Row><Col id=\"Gang\"/><Col id=\"Cast\"/><Col id=\"AssignNum\"/><Col id=\"FinGoals\"/><Col id=\"Thickness\"/><Col id=\"Width\"/><Col id=\"Variable\"/><Col id=\"LD\"/><Col id=\"LC\"/><Col id=\"HC\"/></Row><Row><Col id=\"Gang\">N40133</Col><Col id=\"Cast\">H345</Col><Col id=\"AssignNum\">O3142</Col><Col id=\"FinGoals\">AU3010LFT6</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1850</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40136</Col><Col id=\"Cast\">H345</Col><Col id=\"AssignNum\">O3143</Col><Col id=\"FinGoals\">AU3010LFT7</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1850</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40137</Col><Col id=\"Cast\">H345</Col><Col id=\"AssignNum\">O3144</Col><Col id=\"FinGoals\">AU3010LFT7</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1800</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">4</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40138</Col><Col id=\"Cast\">H345</Col><Col id=\"AssignNum\">O3145</Col><Col id=\"FinGoals\">AU3010LFT6</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1750</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">4</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40139</Col><Col id=\"Cast\">H345</Col><Col id=\"AssignNum\">O3146</Col><Col id=\"FinGoals\">AU3010LFT6</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1650</Col><Col id=\"Variable\">Y</Col><Col id=\"LD\">4</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40140</Col><Col id=\"Cast\">H345</Col><Col id=\"AssignNum\">O3147</Col><Col id=\"FinGoals\">AU3010LFT6</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1650</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">H</Col><Col id=\"LC\">A</Col></Row><Row/><Row><Col id=\"Gang\">N40154</Col><Col id=\"Cast\">H291</Col><Col id=\"AssignNum\">O2975</Col><Col id=\"FinGoals\">C06080J3XX1</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1550</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40156</Col><Col id=\"Cast\">H291</Col><Col id=\"AssignNum\">O2976</Col><Col id=\"FinGoals\">C06080J3XX1</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1550</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row><Col id=\"Gang\">N40160</Col><Col id=\"Cast\">H291</Col><Col id=\"AssignNum\">O2977</Col><Col id=\"FinGoals\">C06080J3XX1</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1550</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">H</Col><Col id=\"LC\">C</Col></Row><Row/><Row><Col id=\"Gang\">N40164</Col><Col id=\"Cast\">M567</Col><Col id=\"AssignNum\">M3886</Col><Col id=\"FinGoals\">C02150C3FX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2000</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"LC\">H</Col><Col id=\"HC\">C</Col></Row><Row><Col id=\"Gang\">N40167</Col><Col id=\"Cast\">M567</Col><Col id=\"AssignNum\">M3886</Col><Col id=\"FinGoals\">C02150C3FX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2000</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"LC\">H</Col><Col id=\"HC\">C</Col></Row><Row><Col id=\"Gang\">N40171</Col><Col id=\"Cast\">M567</Col><Col id=\"AssignNum\">M3886</Col><Col id=\"FinGoals\">C02150C3FX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2000</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"LC\">H</Col><Col id=\"HC\">C</Col></Row><Row><Col id=\"Gang\">N40175</Col><Col id=\"Cast\">M567</Col><Col id=\"AssignNum\">M3886</Col><Col id=\"FinGoals\">C02150C3FX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2000</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"LC\">H</Col><Col id=\"HC\">C</Col></Row><Row><Col id=\"Gang\">N40178</Col><Col id=\"Cast\">M567</Col><Col id=\"AssignNum\">M3886</Col><Col id=\"FinGoals\">C02150C3FX</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">2000</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"LC\">H</Col><Col id=\"HC\">C</Col></Row><Row/><Row><Col id=\"Gang\">N40184</Col><Col id=\"Cast\">H356</Col><Col id=\"AssignNum\">O3191</Col><Col id=\"FinGoals\">AU201FAFT9</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1320</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40188</Col><Col id=\"Cast\">H356</Col><Col id=\"AssignNum\">O3192</Col><Col id=\"FinGoals\">AU201FAFT9</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1320</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row><Row><Col id=\"Gang\">N40192</Col><Col id=\"Cast\">H356</Col><Col id=\"AssignNum\">O3193</Col><Col id=\"FinGoals\">AU201FAFT9</Col><Col id=\"Thickness\">250</Col><Col id=\"Width\">1320</Col><Col id=\"Variable\">·</Col><Col id=\"LD\">4</Col><Col id=\"HC\">C</Col><Col id=\"LC\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("cntLine","0","910","100.00%","2",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","10","390","56",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1","0","18","54",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_border("1px none black, 1px solid black, 1px none black, 1px none black");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","24","-3","364","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("1M/C(C:10,H:51)");
            obj.set_border("1px none black, 1px none black, 1px solid black");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","17","22","60","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("강번");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","80","21","35","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("CA\r\nST");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","117","21","45","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("배정\r\n번호");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","159","21","90","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("출강목표");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","250","21","26","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("두\r\n께");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","277","21","35","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("폭");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","310","21","20","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("가\r\n변");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","331","21","17","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("L\r\nD");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","349","21","17","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("H\r\nC");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","367","21","20","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("정\r\n란");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","Div00:5","10","370","56",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2","-3","365","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("2M/C(C:10,H:51)");
            obj.set_border("1px none black, 1px none black, 1px solid black");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","22","60","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("강번");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","60","21","35","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("CA\r\nST");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","95","21","45","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("배정\r\n번호");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","140","21","90","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("출강목표");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","229","22","26","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("두\r\n께");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","256","21","35","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("폭");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static08","291","22","20","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("가\r\n변");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static09","311","21","17","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("L\r\nD");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","326","22","17","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("H\r\nC");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","346","21","20","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("정\r\n란");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","Div01:5","10","370","56",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2","-3","365","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("3M/C(C:10,H:51)");
            obj.set_border("1px none black, 1px none black, 1px solid black");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","0","22","60","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("강번");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","60","21","35","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("CA\r\nST");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","95","21","45","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("배정\r\n번호");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","140","21","90","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("출강목표");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","229","22","26","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("두\r\n께");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","256","21","35","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("폭");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static08","291","22","20","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("가\r\n변");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static09","311","21","17","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("L\r\nD");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static10","326","22","17","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("H\r\nC");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static11","346","21","20","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("정\r\n란");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","Div02:5","10","370","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2","-3","365","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("4M/C(C:10,H:51)");
            obj.set_border("1px none black, 1px none black, 1px solid black");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","0","22","60","32",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("강번");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","60","21","35","32",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("CA\r\nST");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","95","21","45","32",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("배정\r\n번호");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","140","21","90","32",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("출강목표");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","229","22","26","32",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_text("두\r\n께");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static07","256","21","35","32",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_text("폭");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static08","291","22","20","32",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_text("가\r\n변");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static09","311","21","17","32",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_text("L\r\nD");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static10","326","22","17","32",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_text("H\r\nC");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static11","346","21","20","32",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_text("정\r\n란");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div04","Div03:5","10","370","56",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2","-3","365","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("5M/C(C:10,H:51)");
            obj.set_border("1px none black, 1px none black, 1px solid black");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02","0","22","60","32",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_text("강번");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static03","60","21","35","32",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_text("CA\r\nST");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static04","95","21","45","32",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_text("배정\r\n번호");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static05","140","21","90","32",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_text("출강목표");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static06","229","22","26","32",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_text("두\r\n께");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static07","256","21","35","32",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("6");
            obj.set_text("폭");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static08","291","22","20","32",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("7");
            obj.set_text("가\r\n변");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static09","311","21","17","32",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("8");
            obj.set_text("L\r\nD");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static10","326","22","17","32",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("9");
            obj.set_text("H\r\nC");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            obj.set_textAlign("center");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static11","346","21","20","32",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("10");
            obj.set_text("정\r\n란");
            obj.set_textAlign("center");
            this.Div04.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("po0702.xfdl", function() {
        this.poctest_onload = function(obj,e)
        {
        	this.fn_Cnt();
        };
        /*******************************************************************************
         * Function Name: fn_Cnt
         * Description  : 화면 Onload 시 번호 생성
         * Arguments    :
         ******************************************************************************/
        this.fn_Cnt = function(){
        	var i;
        	var DayHourNum = 0;
        	var cntBot = 0;
        	for(i=0; i<this.ds_Day.rowcount; i++){
        		this.sta_cntNum = new Static();
        		Sta_1M = new Static();
        		var objId = "cnt" + i;
        		if(cntBot > 0){
        			this.sta_cntNum.init(objId, 10, this.components["cnt" + (i-1)].getOffsetBottom(), 20, 20, null, null);
        		}else{
        			this.sta_cntNum.init(objId, 10, 67, 20, 20, null, null);
        		}
        		this.sta_cntNum.set_text(this.ds_Day.getColumn(i, "Hour"));
        		cntBot= this.sta_cntNum.getOffsetBottom();
        		this.sta_cntNum.set_border("1px solid #999999, 1px solid #999999, 0px none");
        		this.sta_cntNum.set_background("#d7f7f6");
        		this.sta_cntNum.set_textAlign("center")

        		this.addChild(objId, this.sta_cntNum);
        		this.sta_cntNum.show();
        		this.sta_cntNum.addEventHandler("onmouseenter", this.fn_Cntline,this)
        		this.sta_cntNum.addEventHandler("onmouseleave", this.fn_delCntline,this)
        	}

         	this.fn_1MData();
         	this.fn_2MData();
         	this.fn_3MData();
         	this.fn_4MData();
        	this.fn_5MData();
        	this.fn_rowback();
        	this.resetScroll();
        }

        this.fn_1MData = function(){
        	var i;
        	// 강번
        	var col1ID;
        	var col1_static;
        	for(i=0; i<this.ds1M.rowcount; i++){
        		col1ID = "1Mfirstcol_" + i;
        		col1_static = new Static();
        		if(col1ID == "1Mfirstcol_0"){
        			col1_static.init(col1ID, this.components["cnt" + i].getOffsetLeft() + 20, 67, 60, 20, null, null);
        		}else{
        			col1_static.init(col1ID, this.components["cnt" + (i-1)].getOffsetLeft() + 20, this.components["cnt"+i].getOffsetTop(), 60, 20, null, null);
        			}
        		col1_static.set_text(this.ds1M.getColumn(i, "Gang"));
        		col1_static.set_textAlign("center");
        		col1_static.set_border("1px solid black, 0px none");
        		if(col1_static.text.indexOf("40084") >-1){
        			col1_static.set_color("red");
        		}else if(col1_static.text.indexOf("40083") >-1){
        			col1_static.set_color("blue");
        		}
        		col1_static.addEventHandler("onmouseenter", this.fn_MouseOver, this);
        		this.addChild(col1ID, col1_static);
        		col1_static.show();
        	}
        	this.fn_RemoveRow("1Mfirstcol_");
        	this.fn_MouseOver(col1_static);
        	//Cast
        	var col2ID;
        	var col2_static;
        	for(i=0; i<this.ds1M.rowcount; i++){
        		col2ID = "1MSecondcol_" + i;
        		col2_static = new Static();
        		if(col2ID == "1MSecondcol_0"){
        			col2_static.init(col2ID, col1_static.getOffsetLeft() + 60, 67, 35, 20, null, null);
        		}else{
        			col2_static.init(col2ID, col1_static.getOffsetLeft() + 60, this.components["cnt"+i].getOffsetTop(), 35, 20, null, null);
        			}
        		col2_static.set_text(this.ds1M.getColumn(i, "Cast"));
        		col2_static.set_border("1px solid black, 0px none");
        		if(col2ID == "1MSecondcol_5"){col2_static.set_color("red")}
        		else if(col2ID == "1MSecondcol_7"){col2_static.set_color("blue")}
        		col2_static.set_textAlign("center");
        		col2_static.addEventHandler("onmouseenter", this.fn_MouseOver, this);
        		this.addChild(col2ID, col2_static);
        		col2_static.show();

        	}
        	this.fn_RemoveRow("1MSecondcol_", this.ds1M);
        	//배정번호
        	var col3ID;
        	var col3_static;
        	for(i=0; i<this.ds1M.rowcount; i++){
        		col3ID = "1MThird_" + i;
        		col3_static = new Static();
        		if(col3ID == "1MThird_0"){
        			col3_static.init(col3ID, col2_static.getOffsetLeft()+ 35, 67, 45, 20, null, null);

        		}else{
        			col3_static.init(col3ID, col2_static.getOffsetLeft() + 35, this.components["cnt"+i].getOffsetTop(), 45, 20, null, null);
        			}
        		col3_static.set_text(this.ds1M.getColumn(i, "AssignNum"));
        		col3_static.set_textAlign("center");
        		col3_static.set_color("red");
        		col3_static.set_border("1px solid black, 0px none");
        		if(col3_static.text.indexOf("H864")> -1 || col3_static.text.indexOf("H867")> -1){
        			col3_static.set_color("black");
        		}else if(col1_static.text.indexOf("4006") >-1 ||col1_static.text.indexOf("4007") >-1 ||col1_static.text.indexOf("40080") >-1){
        			col3_static.set_background("#a2a6ab");
        		}
        		this.addChild(col3ID, col3_static);
        		col3_static.show();
        	}
        	this.fn_RemoveRow("1MThird_");
        	//출강목표
        	var col4ID;
        	var col4_static;
        	for(i=0; i<this.ds1M.rowcount; i++){
        		col4ID = "1MForth_" + i;
        		col4_static = new Static();
        		if(col4ID == "1MForth_0"){
        			col4_static.init(col3ID, col3_static.getOffsetLeft()+ 45, 67, 90, 20, null, null);
        		}else{
        			col4_static.init(col3ID, col3_static.getOffsetLeft() + 45, this.components["cnt"+i].getOffsetTop(), 90, 20, null, null);
        			}
        		col4_static.set_border("1px solid black, 0px none");
        		col4_static.set_text(this.ds1M.getColumn(i, "FinGoals"));
        		col4_static.set_textAlign("center");
        		if(col4_static.text.indexOf("AU1010")> -1 ){
        			col4_static.set_color("#31e620");
        		}
        		this.addChild(col4ID, col4_static);
        		col4_static.show();
        	}
        	this.fn_RemoveRow("1MForth_");
        	//두께
        	var col5ID;
        	var col5_static;
        	for(i=0; i<this.ds1M.rowcount; i++){
        		col5ID = "1MFifth_" + i;
        		col5_static = new Static();
        		if(col5ID == "1MFifth_0"){
        			col5_static.init(col5ID, col4_static.getOffsetLeft()+ 90, 67, 26, 20, null, null);
        		}else{
        			col5_static.init(col5ID, col4_static.getOffsetLeft() + 90, this.components["cnt"+i].getOffsetTop(), 26, 20, null, null);
        			}
        		//col5_static.set_border("0px none, 0px none, 1px solid black");
        		col5_static.set_border("1px solid black, 0px none");
        		col5_static.set_text(this.ds1M.getColumn(i, "Thickness"));
        		col5_static.set_color("#014d8f");
        		col5_static.set_textAlign("center");

        		this.addChild(col5ID, col5_static);
        		col5_static.show();
        	}
        	this.fn_RemoveRow("1MFifth_");
        	//폭
        	var col6ID;
        	var col6_static;
        	for(i=0; i<this.ds1M.rowcount; i++){
        		col6ID = "1MSixth_" + i;
        			col6_static = new Static();
        			if(col6ID == "1MSixth_0"){
        				col6_static.init(col5ID, col5_static.getOffsetLeft()+ 26, 67, 35, 20, null, null);
        			}else{
        				col6_static.init(col5ID, col5_static.getOffsetLeft() + 26, this.components["cnt"+i].getOffsetTop(), 35, 20, null, null);
        				}
        			//col6_static.set_border("0px none, 0px none, 1px solid black");
        			col6_static.set_border("1px solid black, 0px none");
        			col6_static.set_text(this.ds1M.getColumn(i, "Width"));
        			if(col6_static.text.indexOf("113") > -1 || col6_static.text.indexOf("117") > -1 || col6_static.text.indexOf("105") > -1){
        				col6_static.set_color("red");
        			}else if(col1_static.text.indexOf("4006") >-1 ||col1_static.text.indexOf("4007") >-1 ||col1_static.text.indexOf("40080") >-1){
        				col6_static.set_background("#a2a6ab");
        			}
        			col6_static.set_textAlign("center")
        			this.addChild(col6ID, col6_static);
        			col6_static.show();
        	}
        	this.fn_RemoveRow("1MSixth_");
        	//가변
        	var col7ID;
        	var col7_static;
        	for(i=0; i<this.ds1M.rowcount; i++){
        		col7ID = "1MSeventh_" + i;
        			col7_static = new Static();
        			if(col7ID == "1MSeventh_0"){
        				col7_static.init(col7ID, col6_static.getOffsetLeft()+ 35, 67, 26, 20, null, null);
        			}else{
        				col7_static.init(col5ID, col6_static.getOffsetLeft() + 35, this.components["cnt"+i].getOffsetTop(), 26, 20, null, null);
        			}
        			//col7_static.set_border("0px none, 0px none, 1px solid black");
        			col7_static.set_border("1px solid black, 0px none");
        			col7_static.set_text(this.ds1M.getColumn(i, "Variable"));
        			col7_static.set_textAlign("center")

        			this.addChild(col7ID, col7_static);
        			col7_static.show();
        	}
        	this.fn_RemoveRow("1MSeventh_");
        	//LD
        	var col8ID;
        	var col8_static;
        	for(i=0; i<this.ds1M.rowcount; i++){
        		col8ID = "1MEighth_" + i;
        			col8_static = new Static();
        			if(col8ID == "1MEighth_0"){
        				col8_static.init(col8ID, col7_static.getOffsetLeft()+ 20, 67, 17, 20, null, null);
        			}else{
        				col8_static.init(col8ID, col7_static.getOffsetLeft()+ 20, this.components["cnt"+i].getOffsetTop(), 17, 20, null, null);
        			}
        			//col8_static.set_border("0px none, 0px none, 1px solid black");
        			col8_static.set_border("1px solid black, 0px none")
        			col8_static.set_text(this.ds1M.getColumn(i, "LD"));
        			col8_static.set_textAlign("center")

        			this.addChild(col8ID, col8_static);
        			col8_static.show();
        	}
        	this.fn_RemoveRow("1MEighth_");
        	//HC
        	var col9ID;
        	var col9_static;
        	for(i=0; i<this.ds1M.rowcount; i++){
        		col9ID = "1MNinth_" + i;
        			col9_static = new Static();
        			if(col9ID == "1MNinth_0"){
        				col9_static.init(col9ID, col8_static.getOffsetLeft()+17, 67, 17, 20, null, null);
        			}else{
        				col9_static.init(col9ID, col8_static.getOffsetLeft()+17, this.components["cnt"+i].getOffsetTop(), 17, 20, null, null);
        				}
        			//col9_static.set_border("0px none, 0px none, 1px solid black");
        			col9_static.set_border("1px solid black, 0px none")
        			col9_static.set_text(this.ds1M.getColumn(i, "HC"));
        			if(col9ID =="1MNinth_12" || col9ID =="1MNinth_15"){
        				col9_static.set_color("#02eded");
        			}else if(i>10 && i<17){
        				col9_static.set_color("#b811af");
        			}else if(col1_static.text.indexOf("4006") >-1 ||col1_static.text.indexOf("4007") >-1 ||col1_static.text.indexOf("40080") >-1){
        				col9_static.set_background("#a2a6ab");
        			}
        			col9_static.set_textAlign("center")
        			this.addChild(col9ID, col9_static);
        			col9_static.show();
        	}
        	this.fn_RemoveRow("1MNinth_");
        	//정란
        	var col10ID;
        	var col10_static;
        	for(i=0; i<this.ds1M.rowcount; i++){
        		col10ID = "1MTenth_" + i;
        			col10_static = new Static();
        			if(col10ID == "1MTenth_0"){
        				col10_static.init(col10ID, col9_static.getOffsetLeft()+col9_static.getOffsetHeight()-3, 67, 20, 20, null, null);
        			}else{
        				col10_static.init(col10ID, col9_static.getOffsetLeft()+col9_static.getOffsetHeight()-3, this.components["cnt"+i].getOffsetTop(), 20, 20, null, null);
        				}
        			//col10_static.set_border("0px none, 0px none, 1px solid black");
        			col10_static.set_border("1px solid black, 0px none")
        			col10_static.set_text(this.ds1M.getColumn(i, "LC"));
        			if(this.ds1M.getColumn(i, "LC") == "A" || this.ds1M.getColumn(i, "LC") == "B"){
        				col10_static.set_color("red");
        			}else if(col1_static.text.indexOf("4006") >-1 ||col1_static.text.indexOf("4007") >-1 ||col1_static.text.indexOf("40080") >-1){
        				col10_static.set_background("#a2a6ab");
        			}
        			col10_static.set_textAlign("center")
        			this.addChild(col10ID, col10_static);
        			col10_static.show();
        	}
        	this.fn_RemoveRow("1MTenth_");
        }

        this.fn_2MData = function(){
        	var i;
        	// 강번
        	var col1ID;
        	var col1_static;
        	for(i=0; i<this.ds2M.rowcount; i++){
        		col1ID = "2Mfirstcol_" + i;
        		col1_static = new Static();
        		if(col1ID == "2Mfirstcol_0"){
        			col1_static.init(col1ID, this.Div01.getOffsetLeft(), this.Div01.getOffsetBottom(), 60, 20, null, null);
        		}else{
        			col1_static.init(col1ID, this.Div01.getOffsetLeft(), this.components["2Mfirstcol_" + (i-1)].getOffsetBottom(), 60, 20, null, null);
        			}
        		col1_static.set_border("1px solid black, 0px none");
        		col1_static.set_text(this.ds2M.getColumn(i, "Gang"));
        		col1_static.set_textAlign("center");
        		if(col1_static.text.indexOf("40087") >-1){
        			col1_static.set_color("red");
        		}else if(col1_static.text.indexOf("4009") >-1){
        			col1_static.set_color("blue");
        		}
        		col1_static.addEventHandler("onmouseenter", this.fn_MouseOver, this);
        		this.addChild(col1ID, col1_static);
        		col1_static.show();
        	}
        	this.fn_RemoveRow("2Mfirstcol_");
        	this.fn_MouseOver(col1_static);
        	//Cast
        	var col2ID;
        	var col2_static;
        	for(i=0; i<this.ds2M.rowcount; i++){
        		col2ID = "2MSecondcol_" + i;
        		col2_static = new Static();
        		if(col2ID == "2MSecondcol_0"){
        			col2_static.init(col2ID, col1_static.getOffsetLeft() + 60, this.Div01.getOffsetBottom(), 35, 20, null, null);
        		}else{
        			col2_static.init(col2ID, col1_static.getOffsetLeft() + 60, this.components["2MSecondcol_" + (i-1)].getOffsetBottom(), 35, 20, null, null);
        			}
        		col2_static.set_border("1px solid black, 0px none");
        		col2_static.set_text(this.ds2M.getColumn(i, "Cast"));
        		if(col2_static.text.indexOf("H309") >-1){
        			col2_static.set_color("blue");
        		}
        		col2_static.set_textAlign("center");
        		col2_static.addEventHandler("onmouseenter", this.fn_MouseOver, this);
        		this.addChild(col2ID, col2_static);
        		col2_static.show();
        	}
        	this.fn_RemoveRow("2MSecondcol_");
        	//배정번호
        	var col3ID;
        	var col3_static;
        	for(i=0; i<this.ds2M.rowcount; i++){
        		col3ID = "2MThird_" + i;
        		col3_static = new Static();
        		if(col3ID == "2MThird_0"){
        			col3_static.init(col3ID, col2_static.getOffsetLeft()+ 35, this.Div01.getOffsetBottom(), 45, 20, null, null);
        		}else{
        			col3_static.init(col3ID, col2_static.getOffsetLeft() + 35, this.components["2MThird_" + (i-1)].getOffsetBottom(), 45, 20, null, null);
        			}
        		col3_static.set_border("1px solid black, 0px none");
        		col3_static.set_text(this.ds2M.getColumn(i, "AssignNum"));
        		col3_static.set_textAlign("center");
        		if(col3_static.text.indexOf("H855")> -1 || col3_static.text.indexOf("O322")> -1){
        			col3_static.set_color("red");
        		}
        		this.addChild(col3ID, col3_static);
        		col3_static.show();
        	}
        	this.fn_RemoveRow("2MThird_");
        	//출강목표
        	var col4ID;
        	var col4_static;
        	for(i=0; i<this.ds2M.rowcount; i++){
        		col4ID = "2MForth_" + i;
        		col4_static = new Static();
        		if(col4ID == "2MForth_0"){
        			col4_static.init(col3ID, col3_static.getOffsetLeft()+ 45, this.Div01.getOffsetBottom(), 90, 20, null, null);
        		}else{
        			col4_static.init(col3ID, col3_static.getOffsetLeft() + 45, this.components["2MForth_" + (i-1)].getOffsetBottom(), 90, 20, null, null);
        			}
        		col4_static.set_border("1px solid black, 0px none");
        		col4_static.set_text(this.ds2M.getColumn(i, "FinGoals"));
        		col4_static.set_textAlign("center");
        		if(col4_static.text.indexOf("L50C")> -1 ){
        			col4_static.set_color("#000000");
        		}else if(col4_static.text.indexOf("AFR") >-1 || col4_static.text.indexOf("AABD") > -1 || col4_static.text.indexOf("LAXX") > -1){
        			col4_static.set_color("#31e620");
        		}
        		this.addChild(col4ID, col4_static);
        		col4_static.show();
        	}
        	this.fn_RemoveRow("2MForth_");
        	//두께
        	var col5ID;
        	var col5_static;
        	for(i=0; i<this.ds2M.rowcount; i++){
        		col5ID = "2MFifth_" + i;
        		col5_static = new Static();
        		if(col5ID == "2MFifth_0"){
        			col5_static.init(col5ID, col4_static.getOffsetLeft()+ 90, this.Div01.getOffsetBottom(), 26, 20, null, null);
        		}else{
        			col5_static.init(col5ID, col4_static.getOffsetLeft() + 90, this.components["2MFifth_" + (i-1)].getOffsetBottom(), 26, 20, null, null);
        			}
        		col5_static.set_border("1px solid black, 0px none");
        		col5_static.set_text(this.ds2M.getColumn(i, "Thickness"));
        		col5_static.set_color("#014d8f");
        		col5_static.set_textAlign("center");
        		this.addChild(col5ID, col5_static);
        		col5_static.show();
        	}
        	this.fn_RemoveRow("2MFifth_");
        	//폭
        	var col6ID;
        	var col6_static;
        	for(i=0; i<this.ds2M.rowcount; i++){
        		col6ID = "2MSixth_" + i;
        			col6_static = new Static();
        			if(col6ID == "2MSixth_0"){
        				col6_static.init(col5ID, col5_static.getOffsetLeft()+ 26, this.Div01.getOffsetBottom(), 35, 20, null, null);
        			}else{
        				col6_static.init(col5ID, col5_static.getOffsetLeft() + 26, this.components["2MSixth_" + (i-1)].getOffsetBottom(), 35, 20, null, null);
        				}
        			col6_static.set_border("1px solid black, 0px none");
        			col6_static.set_text(this.ds2M.getColumn(i, "Width"));
        			if(col6_static.text.indexOf("13") > -1 || col6_static.text.indexOf("1000") > -1 || col6_static.text.indexOf("900") > -1){
        			col6_static.set_color("red");
        			}
        			col6_static.set_textAlign("center")
        			this.addChild(col6ID, col6_static);
        			col6_static.show();
        	}
        	this.fn_RemoveRow("2MSixth_");
        	//가변
        	var col7ID;
        	var col7_static;
        	for(i=0; i<this.ds2M.rowcount; i++){
        		col7ID = "2MSeventh_" + i;
        			col7_static = new Static();
        			if(col7ID == "2MSeventh_0"){
        				col7_static.init(col7ID, col6_static.getOffsetLeft()+ 35, this.Div01.getOffsetBottom(), 26, 20, null, null);
        			}else{
        				col7_static.init(col5ID, col6_static.getOffsetLeft() + 35, this.components["2MSeventh_" + (i-1)].getOffsetBottom(), 26, 20, null, null);
        				}
        			col7_static.set_border("1px solid black, 0px none");
        			col7_static.set_text(this.ds2M.getColumn(i, "Variable"));
        			if(this.ds2M.getColumn(i, "Width") == "1090"){
        			col7_static.set_color("red");
        			}
        			col7_static.set_textAlign("center")
        			this.addChild(col7ID, col7_static);
        			col7_static.show();
        	}
        	this.fn_RemoveRow("2MSeventh_");
        	//LD
        	var col8ID;
        	var col8_static;
        	for(i=0; i<this.ds2M.rowcount; i++){
        		col8ID = "2MEighth_" + i;
        			col8_static = new Static();
        			if(col8ID == "2MEighth_0"){
        				col8_static.init(col8ID, col7_static.getOffsetLeft()+ 20, this.Div01.getOffsetBottom(), 17, 20, null, null);
        			}else{
        				col8_static.init(col8ID, col7_static.getOffsetLeft()+ 20, this.components["2MEighth_" + (i-1)].getOffsetBottom(), 17, 20, null, null);
        				}
        			col8_static.set_border("1px solid black, 0px none");
        			col8_static.set_text(this.ds2M.getColumn(i, "LD"));
        			col8_static.set_textAlign("center")
        			this.addChild(col8ID, col8_static);
        			col8_static.show();
        	}
        	this.fn_RemoveRow("2MEighth_");
        	//HC
        	var col9ID;
        	var col9_static;
        	for(i=0; i<this.ds2M.rowcount; i++){
        		col9ID = "2MNinth_" + i;
        			col9_static = new Static();
        			if(col9ID == "2MNinth_0"){
        				col9_static.init(col9ID, col8_static.getOffsetLeft()+17, this.Div01.getOffsetBottom(), 17, 20, null, null);
        			}else{
        				col9_static.init(col9ID, col8_static.getOffsetLeft()+17, this.components["2MNinth_" + (i-1)].getOffsetBottom(), 17, 20, null, null);
        				}
        			col9_static.set_border("1px solid black, 0px none");
        			col9_static.set_text(this.ds2M.getColumn(i, "HC"));

        			if(this.ds2M.getColumn(i, "FinGoals") == "A04020LAXX" && this.ds2M.getColumn(i, "HC") == "H"){
        			col9_static.set_color("#438f17");
        			}
        			col9_static.set_textAlign("center")
        			this.addChild(col9ID, col9_static);
        			col9_static.show();
        	}
        	this.fn_RemoveRow("2MNinth_");
        	//정란
        	var col10ID;
        	var col10_static;
        	for(i=0; i<this.ds2M.rowcount; i++){
        		col10ID = "2MTenth_" + i;
        			col10_static = new Static();
        			if(col10ID == "2MTenth_0"){
        				col10_static.init(col10ID, col9_static.getOffsetLeft()+col9_static.getOffsetHeight()-3, this.Div01.getOffsetBottom(), 20, 20, null, null);
        			}else{
        				col10_static.init(col10ID, col9_static.getOffsetLeft()+col9_static.getOffsetHeight()-3, this.components["2MTenth_" + (i-1)].getOffsetBottom(), 20, 20, null, null);
        				}
        			col10_static.set_border("1px solid black, 0px none");
        			col10_static.set_text(this.ds2M.getColumn(i, "LC"));
        			if(this.ds2M.getColumn(i, "LC") == "A"){
        				col10_static.set_color("#fffff");
        			}else{
        				col10_static.set_color("red");
        			}
        			col10_static.set_textAlign("center")
        			this.addChild(col10ID, col10_static);
        			col10_static.show();
        	}
        	this.fn_RemoveRow("2MTenth_");
        }

        this.fn_3MData = function(){
        	var i;
        	// 강번
        	var col1ID;
        	var col1_static;
        	for(i=0; i<this.ds3M.rowcount; i++){
        		col1ID = "3Mfirstcol_" + i;
        		col1_static = new Static();
        		if(col1ID == "3Mfirstcol_0"){
        			col1_static.init(col1ID, this.Div02.getOffsetLeft(), this.Div02.getOffsetBottom(), 60, 20, null, null);
        		}else{
        			col1_static.init(col1ID, this.Div02.getOffsetLeft(), this.components["3Mfirstcol_" + (i-1)].getOffsetBottom(), 60, 20, null, null);
        			}
        		col1_static.set_border("1px solid black, 0px none");
        		col1_static.set_text(this.ds3M.getColumn(i, "Gang"));
        		col1_static.set_textAlign("center");
        		if(col1_static.text.indexOf("40081") >-1){
        			col1_static.set_color("red");
        		}else if(col1_static.text.indexOf("40086") >-1){
        			col1_static.set_color("pink");
        		}
        		col1_static.addEventHandler("onmouseenter", this.fn_MouseOver, this);
        		this.addChild(col1ID, col1_static);
        		col1_static.show();
        	}
        	this.fn_RemoveRow("3Mfirstcol_");
        	this.fn_MouseOver(col1_static);
        	//Cast
        	var col2ID;
        	var col2_static;
        	for(i=0; i<this.ds3M.rowcount; i++){
        		col2ID = "3MSecondcol_" + i;
        		col2_static = new Static();
        		if(col2ID == "3MSecondcol_0"){
        			col2_static.init(col2ID, col1_static.getOffsetLeft() + 60, this.Div02.getOffsetBottom(), 35, 20, null, null);
        		}else{
        			col2_static.init(col2ID, col1_static.getOffsetLeft() + 60, this.components["3MSecondcol_" + (i-1)].getOffsetBottom(), 35, 20, null, null);
        			}
        		col2_static.set_border("1px solid black, 0px none");
        		col2_static.set_text(this.ds3M.getColumn(i, "Cast"));
        		if(i==6){col2_static.set_color("red");}else if(i==7){col2_static.set_color("pink");}
        		col2_static.set_textAlign("center");
        		col2_static.addEventHandler("onmouseenter", this.fn_MouseOver, this);
        		this.addChild(col2ID, col2_static);
        		col2_static.show();
        	}
        	this.fn_RemoveRow("3MSecondcol_");
        	//배정번호
        	var col3ID;
        	var col3_static;
        	for(i=0; i<this.ds3M.rowcount; i++){
        		col3ID = "3MThird_" + i;
        		col3_static = new Static();
        		if(col3ID == "3MThird_0"){
        			col3_static.init(col3ID, col2_static.getOffsetLeft()+ 35, this.Div02.getOffsetBottom(), 45, 20, null, null);
        		}else{
        			col3_static.init(col3ID, col2_static.getOffsetLeft() + 35, this.components["3MThird_" + (i-1)].getOffsetBottom(), 45, 20, null, null);
        			}
        		col3_static.set_border("1px solid black, 0px none");
        		col3_static.set_text(this.ds3M.getColumn(i, "AssignNum"));
        		col3_static.set_textAlign("center");
        		if(i>8 && i<32)
        		{
        			col3_static.set_color("red");
        			if(i>8 && i<28)
        			{
        				if(i==21){col3_static.set_background("#ffffff");}
        				else{col3_static.set_background("yellow");}
        			}
        		}
        		this.addChild(col3ID, col3_static);
        		col3_static.show();
        	}
        	this.fn_RemoveRow("3MThird_");
        	//출강목표
        	var col4ID;
        	var col4_static;
        	for(i=0; i<this.ds3M.rowcount; i++){
        		col4ID = "3MForth_" + i;
        		col4_static = new Static();
        		if(col4ID == "3MForth_0"){
        			col4_static.init(col3ID, col3_static.getOffsetLeft()+ 45, this.Div02.getOffsetBottom(), 90, 20, null, null);
        		}else{
        			col4_static.init(col3ID, col3_static.getOffsetLeft() + 45, this.components["3MForth_" + (i-1)].getOffsetBottom(), 90, 20, null, null);
        			}
        		col4_static.set_border("1px solid black, 0px none");
        		col4_static.set_text(this.ds3M.getColumn(i, "FinGoals"));
        		col4_static.set_textAlign("center");
        		if(col4_static.text.indexOf("AU1010")> -1 ){
        			col4_static.set_color("#31e620");
        		}
        		this.addChild(col4ID, col4_static);
        		col4_static.show();
        	}
        	this.fn_RemoveRow("3MForth_");
        	//두께
        	var col5ID;
        	var col5_static;
        	for(i=0; i<this.ds3M.rowcount; i++){
        		col5ID = "3MFifth_" + i;
        		col5_static = new Static();
        		if(col5ID == "3MFifth_0"){
        			col5_static.init(col5ID, col4_static.getOffsetLeft()+ 90, this.Div02.getOffsetBottom(), 26, 20, null, null);
        		}else{
        			col5_static.init(col5ID, col4_static.getOffsetLeft() + 90, this.components["3MFifth_" + (i-1)].getOffsetBottom(), 26, 20, null, null);
        			}
        		col5_static.set_border("1px solid black, 0px none");
        		col5_static.set_text(this.ds3M.getColumn(i, "Thickness"));
        		col5_static.set_color("#014d8f");
        		col5_static.set_textAlign("center");
        		this.addChild(col5ID, col5_static);
        		col5_static.show();
        	}
        	this.fn_RemoveRow("3MFifth_");
        	//폭
        	var col6ID;
        	var col6_static;
        	for(i=0; i<this.ds3M.rowcount; i++){
        		col6ID = "3MSixth_" + i;
        			col6_static = new Static();
        			if(col6ID == "3MSixth_0"){
        				col6_static.init(col5ID, col5_static.getOffsetLeft()+ 26, this.Div02.getOffsetBottom(), 35, 20, null, null);
        			}else{
        				col6_static.init(col5ID, col5_static.getOffsetLeft() + 26, this.components["3MSixth_" + (i-1)].getOffsetBottom(), 35, 20, null, null);
        				}
        			col6_static.set_border("1px solid black, 0px none");
        			col6_static.set_text(this.ds3M.getColumn(i, "Width"));
        			if(col6_static.text.indexOf("113") > -1 || col6_static.text.indexOf("117") > -1 || col6_static.text.indexOf("105") > -1){
        			col6_static.set_color("red");
        			}
        			col6_static.set_textAlign("center")
        			this.addChild(col6ID, col6_static);
        			col6_static.show();
        	}
        	this.fn_RemoveRow("3MSixth_");
        	//가변
        	var col7ID;
        	var col7_static;
        	for(i=0; i<this.ds3M.rowcount; i++){
        		col7ID = "3MSeventh_" + i;
        			col7_static = new Static();
        			if(col7ID == "3MSeventh_0"){
        				col7_static.init(col7ID, col6_static.getOffsetLeft()+ 35, this.Div02.getOffsetBottom(), 26, 20, null, null);
        			}else{
        				col7_static.init(col5ID, col6_static.getOffsetLeft() + 35, this.components["3MSeventh_" + (i-1)].getOffsetBottom(), 26, 20, null, null);
        				}
        			col7_static.set_border("1px solid black, 0px none");
        			col7_static.set_text(this.ds3M.getColumn(i, "Variable"));
        			col7_static.set_textAlign("center")
        			this.addChild(col7ID, col7_static);
        			col7_static.show();
        	}
        	this.fn_RemoveRow("3MSeventh_");
        	//LD
        	var col8ID;
        	var col8_static;
        	for(i=0; i<this.ds3M.rowcount; i++){
        		col8ID = "3MEighth_" + i;
        			col8_static = new Static();
        			if(col8ID == "3MEighth_0"){
        				col8_static.init(col8ID, col7_static.getOffsetLeft()+ 20, this.Div02.getOffsetBottom(), 17, 20, null, null);
        			}else{
        				col8_static.init(col8ID, col7_static.getOffsetLeft()+ 20, this.components["3MEighth_" + (i-1)].getOffsetBottom(), 17, 20, null, null);
        				}
        			col8_static.set_border("1px solid black, 0px none");
        			col8_static.set_text(this.ds3M.getColumn(i, "LD"));
        			col8_static.set_textAlign("center")
        			this.addChild(col8ID, col8_static);
        			col8_static.show();
        	}
        	this.fn_RemoveRow("3MEighth_");
        	//HC
        	var col9ID;
        	var col9_static;
        	for(i=0; i<this.ds3M.rowcount; i++){
        		col9ID = "3MNinth_" + i;
        			col9_static = new Static();
        			if(col9ID == "3MNinth_0"){
        				col9_static.init(col9ID, col8_static.getOffsetLeft()+17, this.Div02.getOffsetBottom(), 17, 20, null, null);
        			}else{
        				col9_static.init(col9ID, col8_static.getOffsetLeft()+17, this.components["3MNinth_" + (i-1)].getOffsetBottom(), 17, 20, null, null);
        				}
        			col9_static.set_border("1px solid black, 0px none");
        			col9_static.set_text(this.ds3M.getColumn(i, "HC"));
        			if(col9ID =="3MNinth_12" || col9ID =="3MNinth_15"){
        				col9_static.set_color("#02eded");
        			}else if(i>10 && i<17){
        				col9_static.set_color("#b811af");
        			}else if(i>30 && i<37){col9_static.set_color("#0f7306");}
        			col9_static.set_textAlign("center")
        			this.addChild(col9ID, col9_static);
        			col9_static.show();
        	}
        	this.fn_RemoveRow("3MNinth_");
        	//정란
        	var col10ID;
        	var col10_static;
        	for(i=0; i<this.ds3M.rowcount; i++){
        		col10ID = "3MTenth_" + i;
        			col10_static = new Static();
        			if(col10ID == "3MTenth_0"){
        				col10_static.init(col10ID, col9_static.getOffsetLeft()+col9_static.getOffsetHeight()-3, this.Div02.getOffsetBottom(), 20, 20, null, null);
        			}else{
        				col10_static.init(col10ID, col9_static.getOffsetLeft()+col9_static.getOffsetHeight()-3, this.components["3MTenth_" + (i-1)].getOffsetBottom(), 20, 20, null, null);
        				}
        			col10_static.set_border("1px solid black, 0px none");
        			col10_static.set_text(this.ds3M.getColumn(i, "LC"));
        			if(this.ds3M.getColumn(i, "LC") == "E"){
        				col10_static.set_color("red");
        			}
        			col10_static.set_textAlign("center")
        			this.addChild(col10ID, col10_static);
        			col10_static.show();
        	}
        	this.fn_RemoveRow("3MTenth_");
        }

        this.fn_4MData = function(){
        	var i;
        	// 강번
        	var col1ID;
        	var col1_static;
        	for(i=0; i<this.ds4M.rowcount; i++){
        		col1ID = "4Mfirstcol_" + i;
        		col1_static = new Static();
        		if(col1ID == "4Mfirstcol_0"){
        			col1_static.init(col1ID, this.Div03.getOffsetLeft(), this.Div03.getOffsetBottom(), 60, 20, null, null);
        		}else{
        			col1_static.init(col1ID, this.Div03.getOffsetLeft(), this.components["4Mfirstcol_" + (i-1)].getOffsetBottom(), 60, 20, null, null);
        			}
        		col1_static.set_border("1px solid black, 0px none");
        		col1_static.set_text(this.ds4M.getColumn(i, "Gang"));
        		col1_static.set_textAlign("center");
        		if(i==7){col1_static.set_color("red");
        		}else if(i==8){
        			col1_static.set_color("pink");
        		}else if(i==9 || i==10){
        			col1_static.set_color("blue");
        		}
        		col1_static.addEventHandler("onmouseenter", this.fn_MouseOver, this);
        		this.addChild(col1ID, col1_static);
        		col1_static.show();
        	}
        	this.fn_RemoveRow("4Mfirstcol_");
        	this.fn_MouseOver(col1_static);
        	//Cast
        	var col2ID;
        	var col2_static;
        	for(i=0; i<this.ds4M.rowcount; i++){
        		col2ID = "4MSecondcol_" + i;
        		col2_static = new Static();
        		if(col2ID == "4MSecondcol_0"){
        			col2_static.init(col2ID, col1_static.getOffsetLeft() + 60, this.Div03.getOffsetBottom(), 35, 20, null, null);
        		}else{
        			col2_static.init(col2ID, col1_static.getOffsetLeft() + 60, this.components["4MSecondcol_" + (i-1)].getOffsetBottom(), 35, 20, null, null);
        			}
        		col2_static.set_border("1px solid black, 0px none");
        		col2_static.set_text(this.ds4M.getColumn(i, "Cast"));
        		if(i==7){col2_static.set_color("red");
        		}else if(i==8){
        			col2_static.set_color("pink");
        		}else if(i==9 || i==10){
        			col2_static.set_color("blue");
        		}
        		col2_static.set_textAlign("center");
        		col2_static.addEventHandler("onmouseenter", this.fn_MouseOver, this);
        		this.addChild(col2ID, col2_static);
        		col2_static.show();
        	}
        	this.fn_RemoveRow("4MSecondcol_");
        	//배정번호
        	var col3ID;
        	var col3_static;
        	for(i=0; i<this.ds4M.rowcount; i++){
        		col3ID = "4MThird_" + i;
        		col3_static = new Static();
        		if(col3ID == "4MThird_0"){
        			col3_static.init(col3ID, col2_static.getOffsetLeft()+ 35, this.Div03.getOffsetBottom(), 45, 20, null, null);
        		}else{
        			col3_static.init(col3ID, col2_static.getOffsetLeft() + 35, this.components["4MThird_" + (i-1)].getOffsetBottom(), 45, 20, null, null);
        			}
        		col3_static.set_border("1px solid black, 0px none");
        		col3_static.set_text(this.ds4M.getColumn(i, "AssignNum"));
        		col3_static.set_textAlign("center");
        		if(i==15 || i==16)
        		{
        			col3_static.set_background("pink");
        		}
        		this.addChild(col3ID, col3_static);
        		col3_static.show();
        	}
        	this.fn_RemoveRow("4MThird_");
        	//출강목표
        	var col4ID;
        	var col4_static;
        	for(i=0; i<this.ds4M.rowcount; i++){
        		col4ID = "4MForth_" + i;
        		col4_static = new Static();
        		if(col4ID == "4MForth_0"){
        			col4_static.init(col3ID, col3_static.getOffsetLeft()+ 45, this.Div03.getOffsetBottom(), 90, 20, null, null);
        		}else{
        			col4_static.init(col3ID, col3_static.getOffsetLeft() + 45, this.components["4MForth_" + (i-1)].getOffsetBottom(), 90, 20, null, null);
        			}
        		col4_static.set_border("1px solid black, 0px none");
        		col4_static.set_text(this.ds4M.getColumn(i, "FinGoals"));
        		col4_static.set_textAlign("center");
        		if(col4_static.text.indexOf("AU1010")> -1 ){
        			col4_static.set_color("#31e620");
        		}
        		this.addChild(col4ID, col4_static);
        		col4_static.show();
        	}
        	this.fn_RemoveRow("4MForth_");
        	//두께
        	var col5ID;
        	var col5_static;
        	for(i=0; i<this.ds4M.rowcount; i++){
        		col5ID = "4MFifth_" + i;
        		col5_static = new Static();
        		if(col5ID == "4MFifth_0"){
        			col5_static.init(col5ID, col4_static.getOffsetLeft()+ 90, this.Div03.getOffsetBottom(), 26, 20, null, null);
        		}else{
        			col5_static.init(col5ID, col4_static.getOffsetLeft() + 90, this.components["4MFifth_" + (i-1)].getOffsetBottom(), 26, 20, null, null);
        			}
        		col5_static.set_border("1px solid black, 0px none");
        		col5_static.set_text(this.ds4M.getColumn(i, "Thickness"));
        		col5_static.set_color("#014d8f");
        		col5_static.set_textAlign("center");
        		this.addChild(col5ID, col5_static);
        		col5_static.show();
        	}
        	this.fn_RemoveRow("4MFifth_");
        	//폭
        	var col6ID;
        	var col6_static;
        	for(i=0; i<this.ds4M.rowcount; i++){
        		col6ID = "4MSixth_" + i;
        			col6_static = new Static();
        			if(col6ID == "4MSixth_0"){
        				col6_static.init(col5ID, col5_static.getOffsetLeft()+ 26, this.Div03.getOffsetBottom(), 35, 20, null, null);
        			}else{
        				col6_static.init(col5ID, col5_static.getOffsetLeft() + 26, this.components["4MSixth_" + (i-1)].getOffsetBottom(), 35, 20, null, null);
        				}
        			col6_static.set_border("1px solid black, 0px none");
        			col6_static.set_text(this.ds4M.getColumn(i, "Width"));
        			if(i>14 && i<21)
        			{
        			col6_static.set_color("red");
        			}
        			col6_static.set_textAlign("center")
        			this.addChild(col6ID, col6_static);
        			col6_static.show();
        	}
        	this.fn_RemoveRow("4MSixth_");
        	//가변
        	var col7ID;
        	var col7_static;
        	for(i=0; i<this.ds4M.rowcount; i++){
        		col7ID = "4MSeventh_" + i;
        			col7_static = new Static();
        			if(col7ID == "4MSeventh_0"){
        				col7_static.init(col7ID, col6_static.getOffsetLeft()+ 35, this.Div03.getOffsetBottom(), 26, 20, null, null);
        			}else{
        				col7_static.init(col5ID, col6_static.getOffsetLeft() + 35, this.components["4MSeventh_" + (i-1)].getOffsetBottom(), 26, 20, null, null);
        				}
        			col7_static.set_border("1px solid black, 0px none");
        			col7_static.set_text(this.ds4M.getColumn(i, "Variable"));
        			col7_static.set_textAlign("center")
        			this.addChild(col7ID, col7_static);
        			col7_static.show();
        	}
        	this.fn_RemoveRow("4MSeventh_");
        	//LD
        	var col8ID;
        	var col8_static;
        	for(i=0; i<this.ds4M.rowcount; i++){
        		col8ID = "4MEighth_" + i;
        			col8_static = new Static();
        			if(col8ID == "4MEighth_0"){
        				col8_static.init(col8ID, col7_static.getOffsetLeft()+ 20, this.Div03.getOffsetBottom(), 17, 20, null, null);
        			}else{
        				col8_static.init(col8ID, col7_static.getOffsetLeft()+ 20, this.components["4MEighth_" + (i-1)].getOffsetBottom(), 17, 20, null, null);
        				}
        			col8_static.set_border("1px solid black, 0px none");
        			col8_static.set_text(this.ds4M.getColumn(i, "LD"));
        			col8_static.set_textAlign("center")
        			this.addChild(col8ID, col8_static);
        			col8_static.show();
        	}
        	this.fn_RemoveRow("4MEighth_");
        	//HC
        	var col9ID;
        	var col9_static;
        	for(i=0; i<this.ds4M.rowcount; i++){
        		col9ID = "4MNinth_" + i;
        			col9_static = new Static();
        			if(col9ID == "4MNinth_0"){
        				col9_static.init(col9ID, col8_static.getOffsetLeft()+17, this.Div03.getOffsetBottom(), 17, 20, null, null);
        			}else{
        				col9_static.init(col9ID, col8_static.getOffsetLeft()+17, this.components["4MNinth_" + (i-1)].getOffsetBottom(), 17, 20, null, null);
        				}
        			col9_static.set_border("1px solid black, 0px none");
        			col9_static.set_text(this.ds4M.getColumn(i, "HC"));
        			col9_static.set_textAlign("center")
        			this.addChild(col9ID, col9_static);
        			col9_static.show();
        	}
        	this.fn_RemoveRow("4MNinth_");
        	//정란
        	var col10ID;
        	var col10_static;
        	for(i=0; i<this.ds4M.rowcount; i++){
        		col10ID = "4MTenth_" + i;
        			col10_static = new Static();
        			if(col10ID == "4MTenth_0"){
        				col10_static.init(col10ID, col9_static.getOffsetLeft()+col9_static.getOffsetHeight()-3, this.Div03.getOffsetBottom(), 20, 20, null, null);
        			}else{
        				col10_static.init(col10ID, col9_static.getOffsetLeft()+col9_static.getOffsetHeight()-3, this.components["4MTenth_" + (i-1)].getOffsetBottom(), 20, 20, null, null);
        				}
        			col10_static.set_border("1px solid black, 0px none");
        			col10_static.set_text(this.ds4M.getColumn(i, "LC"));
        			if(this.ds4M.getColumn(i, "LC") == "H" || this.ds4M.getColumn(i, "LC") == "B"){
        				if(i==12)
        				{
        					col10_static.set_color("black");
        				}else{
        					col10_static.set_color("red");
        				}
        			}
        			col10_static.set_textAlign("center")
        			this.addChild(col10ID, col10_static);
        			col10_static.show();
        	}
        	this.fn_RemoveRow("4MTenth_");
        }

        this.fn_5MData = function(){
        	var i;
        	// 강번
        	var col1ID;
        	var col1_static;
        	for(i=0; i<this.ds5M.rowcount; i++){
        		col1ID = "5Mfirstcol_" + i;
        		col1_static = new Static();
        		if(col1ID == "5Mfirstcol_0"){
        			col1_static.init(col1ID, this.Div04.getOffsetLeft(), this.Div04.getOffsetBottom(), 60, 20, null, null);
        		}else{
        			col1_static.init(col1ID, this.Div04.getOffsetLeft(), this.components["5Mfirstcol_" + (i-1)].getOffsetBottom(), 60, 20, null, null);
        			}
        		col1_static.set_border("1px solid black, 0px none");
        		col1_static.set_text(this.ds5M.getColumn(i, "Gang"));
        		col1_static.set_textAlign("center");

        		col1_static.addEventHandler("onmouseenter", this.fn_MouseOver, this);
        		this.addChild(col1ID, col1_static);
        		col1_static.show();
        	}
        	this.fn_RemoveRow("5Mfirstcol_");
        	this.fn_MouseOver(col1_static);
        	//Cast
        	var col2ID;
        	var col2_static;
        	for(i=0; i<this.ds5M.rowcount; i++){
        		col2ID = "5MSecondcol_" + i;
        		col2_static = new Static();
        		if(col2ID == "5MSecondcol_0"){
        			col2_static.init(col2ID, col1_static.getOffsetLeft() + 60, this.Div04.getOffsetBottom(), 35, 20, null, null);
        		}else{
        			col2_static.init(col2ID, col1_static.getOffsetLeft() + 60, this.components["5MSecondcol_" + (i-1)].getOffsetBottom(), 35, 20, null, null);
        			}
        		col2_static.set_border("1px solid black, 0px none");
        		col2_static.set_text(this.ds5M.getColumn(i, "Cast"));

        		col2_static.set_textAlign("center");
        		col2_static.addEventHandler("onmouseenter", this.fn_MouseOver, this);
        		this.addChild(col2ID, col2_static);
        		col2_static.show();
        	}
        	this.fn_RemoveRow("5MSecondcol_");
        	//배정번호
        	var col3ID;
        	var col3_static;
        	for(i=0; i<this.ds5M.rowcount; i++){
        		col3ID = "5MThird_" + i;
        		col3_static = new Static();
        		if(col3ID == "5MThird_0"){
        			col3_static.init(col3ID, col2_static.getOffsetLeft()+ 35, this.Div04.getOffsetBottom(), 45, 20, null, null);
        		}else{
        			col3_static.init(col3ID, col2_static.getOffsetLeft() + 35, this.components["5MThird_" + (i-1)].getOffsetBottom(), 45, 20, null, null);
        			}
        		col3_static.set_border("1px solid black, 0px none");
        		col3_static.set_text(this.ds5M.getColumn(i, "AssignNum"));
        		col3_static.set_textAlign("center");
        		if(i>11 && i<25){col3_static.set_color("red");}else if(i>29 && i<35){col3_static.set_background("pink");}
        		this.addChild(col3ID, col3_static);
        		col3_static.show();
        	}
        	this.fn_RemoveRow("5MThird_");
        	//출강목표
        	var col4ID;
        	var col4_static;
        	for(i=0; i<this.ds5M.rowcount; i++){
        		col4ID = "5MForth_" + i;
        		col4_static = new Static();
        		if(col4ID == "5MForth_0"){
        			col4_static.init(col3ID, col3_static.getOffsetLeft()+ 45, this.Div04.getOffsetBottom(), 90, 20, null, null);
        		}else{
        			col4_static.init(col3ID, col3_static.getOffsetLeft() + 45, this.components["5MForth_" + (i-1)].getOffsetBottom(), 90, 20, null, null);
        			}
        		col4_static.set_border("1px solid black, 0px none");
        		col4_static.set_text(this.ds5M.getColumn(i, "FinGoals"));
        		col4_static.set_textAlign("center");
        		if(col4_static.text.indexOf("C0")> -1 )
        		{
        			col4_static.set_color("black");
        		}else
        		{
        			col4_static.set_color("31e620");
        		}
        		this.addChild(col4ID, col4_static);
        		col4_static.show();
        	}
        	this.fn_RemoveRow("5MForth_");
        	//두께
        	var col5ID;
        	var col5_static;
        	for(i=0; i<this.ds5M.rowcount; i++){
        		col5ID = "5MFifth_" + i;
        		col5_static = new Static();
        		if(col5ID == "5MFifth_0"){
        			col5_static.init(col5ID, col4_static.getOffsetLeft()+ 90, this.Div04.getOffsetBottom(), 26, 20, null, null);
        		}else{
        			col5_static.init(col5ID, col4_static.getOffsetLeft() + 90, this.components["5MFifth_" + (i-1)].getOffsetBottom(), 26, 20, null, null);
        			}
        		col5_static.set_border("1px solid black, 0px none");
        		col5_static.set_text(this.ds5M.getColumn(i, "Thickness"));
        		col5_static.set_color("#014d8f");
        		col5_static.set_textAlign("center");
        		this.addChild(col5ID, col5_static);
        		col5_static.show();
        	}
        	this.fn_RemoveRow("5MFifth_");
        	//폭
        	var col6ID;
        	var col6_static;
        	for(i=0; i<this.ds5M.rowcount; i++){
        		col6ID = "5MSixth_" + i;
        			col6_static = new Static();
        			if(col6ID == "5MSixth_0"){
        				col6_static.init(col5ID, col5_static.getOffsetLeft()+ 26, this.Div04.getOffsetBottom(), 35, 20, null, null);
        			}else{
        				col6_static.init(col5ID, col5_static.getOffsetLeft() + 26, this.components["5MSixth_" + (i-1)].getOffsetBottom(), 35, 20, null, null);
        				}
        			col6_static.set_border("1px solid black, 0px none");
        			col6_static.set_text(this.ds5M.getColumn(i, "Width"));
        			if(col6_static.text.indexOf("12") > -1 || col6_static.text.indexOf("13") > -1)
        			{
        				col6_static.set_color("red");
        			}
        			col6_static.set_textAlign("center")
        			this.addChild(col6ID, col6_static);
        			col6_static.show();
        	}
        	this.fn_RemoveRow("5MSixth_");
        	//가변
        	var col7ID;
        	var col7_static;
        	for(i=0; i<this.ds5M.rowcount; i++){
        		col7ID = "5MSeventh_" + i;
        			col7_static = new Static();
        			if(col7ID == "5MSeventh_0"){
        				col7_static.init(col7ID, col6_static.getOffsetLeft()+ 35, this.Div04.getOffsetBottom(), 26, 20, null, null);
        			}else{
        				col7_static.init(col5ID, col6_static.getOffsetLeft() + 35, this.components["5MSeventh_" + (i-1)].getOffsetBottom(), 26, 20, null, null);
        				}
        			col7_static.set_border("1px solid black, 0px none");
        			col7_static.set_text(this.ds5M.getColumn(i, "Variable"));
        			col7_static.set_textAlign("center")
        			this.addChild(col7ID, col7_static);
        			col7_static.show();
        	}
        	this.fn_RemoveRow("5MSeventh_");
        	//LD
        	var col8ID;
        	var col8_static;
        	for(i=0; i<this.ds5M.rowcount; i++){
        		col8ID = "5MEighth_" + i;
        			col8_static = new Static();
        			if(col8ID == "5MEighth_0"){
        				col8_static.init(col8ID, col7_static.getOffsetLeft()+ 20, this.Div04.getOffsetBottom(), 17, 20, null, null);
        			}else{
        				col8_static.init(col8ID, col7_static.getOffsetLeft()+ 20, this.components["5MEighth_" + (i-1)].getOffsetBottom(), 17, 20, null, null);
        				}
        			col8_static.set_border("1px solid black, 0px none");
        			col8_static.set_text(this.ds5M.getColumn(i, "LD"));
        			col8_static.set_textAlign("center")
        			this.addChild(col8ID, col8_static);
        			col8_static.show();
        	}
        	this.fn_RemoveRow("5MEighth_");
        	//HC
        	var col9ID;
        	var col9_static;
        	for(i=0; i<this.ds5M.rowcount; i++){
        		col9ID = "5MNinth_" + i;
        			col9_static = new Static();
        			if(col9ID == "5MNinth_0"){
        				col9_static.init(col9ID, col8_static.getOffsetLeft()+17, this.Div04.getOffsetBottom(), 17, 20, null, null);
        			}else{
        				col9_static.init(col9ID, col8_static.getOffsetLeft()+17, this.components["5MNinth_" + (i-1)].getOffsetBottom(), 17, 20, null, null);
        				}
        			col9_static.set_border("1px solid black, 0px none");
        			col9_static.set_text(this.ds5M.getColumn(i, "HC"));
        			if(col9ID =="5MNinth_12" || col9ID =="5MNinth_15"){
        				col9_static.set_color("#02eded");
        			}else if(i>10 && i<17){
        				col9_static.set_color("#b811af");
        			}else if(i>18 && i<25){
        				if(i==24){col9_static.set_color("#438f17");}
        				else{col9_static.set_color("#02eded");}
        			}
        			col9_static.set_textAlign("center")
        			this.addChild(col9ID, col9_static);
        			col9_static.show();
        	}
        	this.fn_RemoveRow("5MNinth_");
        	//정란
        	var col10ID;
        	var col10_static;
        	for(i=0; i<this.ds5M.rowcount; i++){
        		col10ID = "5MTenth_" + i;
        			col10_static = new Static();
        			if(col10ID == "5MTenth_0"){
        				col10_static.init(col10ID, col9_static.getOffsetLeft()+col9_static.getOffsetHeight()-3, this.Div04.getOffsetBottom(), 20, 20, null, null);
        			}else{
        				col10_static.init(col10ID, col9_static.getOffsetLeft()+col9_static.getOffsetHeight()-3, this.components["5MTenth_" + (i-1)].getOffsetBottom(), 20, 20, null, null);
        				}
        			col10_static.set_border("1px solid black, 0px none");
        			col10_static.set_text(this.ds5M.getColumn(i, "LC"));
        			if(this.ds5M.getColumn(i, "LC") == "C"){
        				col10_static.set_color("red");
        			}
        			col10_static.set_textAlign("center")
        			this.addChild(col10ID, col10_static);
        			col10_static.show();
        	}
        	this.fn_RemoveRow("5MTenth_");
        }
        /*******************************************************************************
         * Function Name: fn_RemoveRow
         * Description  : 빈칸 만들기
         * Arguments    : delArg-Static ID
         ******************************************************************************/
        this.fn_RemoveRow = function(delArg){
        	var i;
        	var delId = delArg;
        	var quli = delId.slice(0,1);
        	switch(quli) {
        	case "1":
        		for(i=0; i<this.ds1M.rowcount; i++){
        			if(this.components[delId+i].text == ""){
        			this.components[delId+i].destroy();
        			}
        		}
        		break;
        	case "2":
        		for(i=0; i<this.ds2M.rowcount; i++){
        			if(this.components[delId+i].text == ""){
        				this.components[delId+i].destroy();
        			}
        		}
        		break;
        	case "3":
        		for(i=0; i<this.ds3M.rowcount; i++){
        			if(this.components[delId+i].text == ""){
        				this.components[delId+i].destroy();
        			}
        		}
        		break;
        	case "4":
        		for(i=0; i<this.ds4M.rowcount; i++){
        			if(this.components[delId+i].text == ""){
        				this.components[delId+i].destroy();
        			}
        		}
        		break;
        	case "5":
        		for(i=0; i<this.ds5M.rowcount; i++){
        			if(this.components[delId+i].text == ""){
        				this.components[delId+i].destroy();
        			}
        		}
        		break;
        	}
        }
        this.fn_MouseOver = function (objStatic){
        	objStatic.set_tooltiptext("tooltip 텍스트 test 입니다. \n 출하: 09년 11월 10일 08시~ 09년 11월 11일 10시");
        };
        /*******************************************************************************
         * Function Name: fn_Cntline, fn_delCntline
         * Description  : 수평선 표출, 지우기
         * Arguments    : obj:nexacro.Static, e:nexacro.MoveEventInfo
         ******************************************************************************/
        this.fn_Cntline = function (obj, e){
        	this.cntLine.set_visible(true);
        	this.cntLine.set_left(obj.getOffsetHeight()+5);
        	this.cntLine.set_top((obj.getOffsetTop()+obj.getOffsetBottom())/2);
        };
        this.fn_delCntline = function (obj, e){
        	this.cntLine.set_visible(false);
        };

        this.fn_rowback = function ()
        {
        	var back1 = new Static("back1",31 ,"Div00:1px", 368, 120);
        	var back2 = new Static("back2","Div01:5px", "Div02:60px", 365, 60);
        	var back3 = new Static("back3","Div03:5px","Div04:1px", 370, 80);
        	back1.set_background("#e1e2e3");
        	back2.set_background("#e1e2e3");
        	back3.set_background("#e1e2e3");

        	this.addChild("back1", back1);
        	this.addChild("back2", back2);
        	this.addChild("back3", back3);

        	back1.show();back2.show();back3.show();
        	back1.sendToBack();back2.sendToBack();back3.sendToBack();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.poctest_onload,this);
            this.Div01.form.Static01.addEventHandler("onclick",this.Div01_Static01_onclick,this);
        };

        this.loadIncludeScript("po0702.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
