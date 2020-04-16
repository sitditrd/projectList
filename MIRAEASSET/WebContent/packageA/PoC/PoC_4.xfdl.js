(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_4");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAll", this);
            obj._setContents("<ColumnInfo><Column id=\"ROUTE\" type=\"STRING\" size=\"256\"/><Column id=\"SIDE\" type=\"STRING\" size=\"256\"/><Column id=\"SYMBOL\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALVAL\" type=\"STRING\" size=\"256\"/><Column id=\"OPENVAL\" type=\"STRING\" size=\"256\"/><Column id=\"ON\" type=\"STRING\" size=\"256\"/><Column id=\"OFF\" type=\"STRING\" size=\"256\"/><Column id=\"LQNT\" type=\"STRING\" size=\"256\"/><Column id=\"POSIT\" type=\"STRING\" size=\"256\"/><Column id=\"BOX\" type=\"STRING\" size=\"256\"/><Column id=\"BIDS\" type=\"STRING\" size=\"256\"/><Column id=\"LURINEX\" type=\"STRING\" size=\"256\"/><Column id=\"IOIS\" type=\"STRING\" size=\"256\"/><Column id=\"SHOWIOIS\" type=\"STRING\" size=\"256\"/><Column id=\"UNGENCY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST\" type=\"STRING\" size=\"256\"/><Column id=\"ADV\" type=\"STRING\" size=\"256\"/><Column id=\"RODADV\" type=\"STRING\" size=\"256\"/><Column id=\"SPREADBPS\" type=\"STRING\" size=\"256\"/><Column id=\"DVCAPSON\" type=\"STRING\" size=\"256\"/><Column id=\"ESMAILS\" type=\"STRING\" size=\"256\"/><Column id=\"CORPACT\" type=\"STRING\" size=\"256\"/><Column id=\"NEWS\" type=\"STRING\" size=\"256\"/><Column id=\"ALPHATOCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"STALPHA\" type=\"STRING\" size=\"256\"/><Column id=\"ALPHASTATEGY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">BP.L</Col><Col id=\"TOTAL\">705600</Col><Col id=\"TOTALVAL\">8000</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">5.63</Col><Col id=\"ADV\">%2.28</Col><Col id=\"RODADV\">%6.15</Col><Col id=\"SPREADBPS\">12.17</Col><Col id=\"ALPHATOCLOSE\">-1.00</Col><Col id=\"STALPHA\">-1.00</Col><Col id=\"ALPHASTATEGY\">Muri.M</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">BSX.N</Col><Col id=\"TOTAL\">8000</Col><Col id=\"TOTALVAL\">66000</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">Low</Col><Col id=\"LAST\">30.45</Col><Col id=\"ADV\">%0.25</Col><Col id=\"RODADV\">%4.57</Col><Col id=\"SPREADBPS\">37.84</Col><Col id=\"ALPHATOCLOSE\">-3.00</Col><Col id=\"STALPHA\">-3.00</Col><Col id=\"ALPHASTATEGY\">BacHowd</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">CAT.N</Col><Col id=\"TOTAL\">66000</Col><Col id=\"TOTALVAL\">78000</Col><Col id=\"OPENVAL\">311400</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">126.82</Col><Col id=\"ADV\">%5.20</Col><Col id=\"RODADV\">%108.28</Col><Col id=\"SPREADBPS\">57.74</Col><Col id=\"ALPHATOCLOSE\">10.00</Col><Col id=\"STALPHA\">10.00</Col><Col id=\"ALPHASTATEGY\">AlphaR</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">CAT.N</Col><Col id=\"TOTAL\">78000</Col><Col id=\"TOTALVAL\">45000</Col><Col id=\"OPENVAL\">56000</Col><Col id=\"UNGENCY\">Low</Col><Col id=\"LAST\">126.92</Col><Col id=\"ADV\">%6.15</Col><Col id=\"RODADV\">%15.60</Col><Col id=\"SPREADBPS\">57.73</Col><Col id=\"ALPHATOCLOSE\">-3.00</Col><Col id=\"STALPHA\">-3.00</Col><Col id=\"ALPHASTATEGY\">Bacidbad</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">CNR.TO</Col><Col id=\"TOTAL\">45000</Col><Col id=\"TOTALVAL\">582500</Col><Col id=\"OPENVAL\">1024800</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">100.30</Col><Col id=\"ADV\">%4.57</Col><Col id=\"RODADV\">%135.19</Col><Col id=\"SPREADBPS\">19.58</Col><Col id=\"ALPHATOCLOSE\">20.00</Col><Col id=\"STALPHA\">20.00</Col><Col id=\"ALPHASTATEGY\">AlphaS</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">CONG.DE</Col><Col id=\"TOTAL\">582500</Col><Col id=\"TOTALVAL\">83430</Col><Col id=\"OPENVAL\">705600</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">215.65</Col><Col id=\"ADV\">%108.28</Col><Col id=\"RODADV\">%29.03</Col><Col id=\"SPREADBPS\">24.57</Col><Col id=\"ALPHATOCLOSE\">1.00</Col><Col id=\"STALPHA\">1.00</Col><Col id=\"ALPHASTATEGY\">10PctXLAM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">CONG.DE</Col><Col id=\"TOTAL\">83430</Col><Col id=\"TOTALVAL\">406000</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">215.55</Col><Col id=\"ADV\">%15.60</Col><Col id=\"RODADV\">%7.14</Col><Col id=\"SPREADBPS\">24.57</Col><Col id=\"ALPHATOCLOSE\">7.00</Col><Col id=\"STALPHA\">7.00</Col><Col id=\"ALPHASTATEGY\">XGPocPOM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">CP.TO</Col><Col id=\"TOTAL\">406000</Col><Col id=\"TOTALVAL\">311400</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">206.14</Col><Col id=\"ADV\">%135.19</Col><Col id=\"RODADV\">%314.91</Col><Col id=\"SPREADBPS\">63.62</Col><Col id=\"ALPHATOCLOSE\">1.00</Col><Col id=\"STALPHA\">1.00</Col><Col id=\"ALPHASTATEGY\">10PotXlAOM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">DD.N</Col><Col id=\"TOTAL\">311400</Col><Col id=\"TOTALVAL\">56000</Col><Col id=\"OPENVAL\">705600</Col><Col id=\"UNGENCY\">Low</Col><Col id=\"LAST\">12.25</Col><Col id=\"ADV\">%29.03</Col><Col id=\"RODADV\">%3.79</Col><Col id=\"SPREADBPS\">0.73</Col><Col id=\"ALPHATOCLOSE\">0.73</Col><Col id=\"STALPHA\">0.73</Col><Col id=\"ALPHASTATEGY\">Muri.M</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">DUK.N</Col><Col id=\"TOTAL\">56000</Col><Col id=\"TOTALVAL\">1024800</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">84.57</Col><Col id=\"ADV\">%7.14</Col><Col id=\"RODADV\">%17.44</Col><Col id=\"SPREADBPS\">13.59</Col><Col id=\"ALPHATOCLOSE\">10.52</Col><Col id=\"STALPHA\">10.52</Col><Col id=\"ALPHASTATEGY\">BacHowd</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">ELE.MC</Col><Col id=\"TOTAL\">1024800</Col><Col id=\"TOTALVAL\">705600</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">19.65</Col><Col id=\"ADV\">%314.91</Col><Col id=\"RODADV\">%14.59</Col><Col id=\"SPREADBPS\">1.05</Col><Col id=\"ALPHATOCLOSE\">1.05</Col><Col id=\"STALPHA\">1.05</Col><Col id=\"ALPHASTATEGY\">AlphaR</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">EMR.N</Col><Col id=\"TOTAL\">705600</Col><Col id=\"TOTALVAL\">8000</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">5.63</Col><Col id=\"ADV\">%3.79</Col><Col id=\"RODADV\">%0.79</Col><Col id=\"SPREADBPS\">23.57</Col><Col id=\"ALPHATOCLOSE\">32.00</Col><Col id=\"STALPHA\">32.00</Col><Col id=\"ALPHASTATEGY\">Bacidbad</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">ENB.TO</Col><Col id=\"TOTAL\">8000</Col><Col id=\"TOTALVAL\">66000</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">30.45</Col><Col id=\"ADV\">%17.44</Col><Col id=\"RODADV\">%17.44</Col><Col id=\"SPREADBPS\">56.36</Col><Col id=\"ALPHATOCLOSE\">11.00</Col><Col id=\"STALPHA\">11.00</Col><Col id=\"ALPHASTATEGY\">AlphaS</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">ENI.MI</Col><Col id=\"TOTAL\">66000</Col><Col id=\"TOTALVAL\">8000</Col><Col id=\"OPENVAL\">311400</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">126.82</Col><Col id=\"ADV\">%14.59</Col><Col id=\"RODADV\">%14.59</Col><Col id=\"SPREADBPS\">47.84</Col><Col id=\"ALPHATOCLOSE\">13.00</Col><Col id=\"STALPHA\">13.00</Col><Col id=\"ALPHASTATEGY\">10PctXLAM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">G.TO</Col><Col id=\"TOTAL\">78000</Col><Col id=\"TOTALVAL\">66000</Col><Col id=\"OPENVAL\">56000</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">126.92</Col><Col id=\"ADV\">%0.79</Col><Col id=\"RODADV\">%0.79</Col><Col id=\"SPREADBPS\">9.50</Col><Col id=\"ALPHATOCLOSE\">22.00</Col><Col id=\"STALPHA\">22.00</Col><Col id=\"ALPHASTATEGY\">XGPocPOM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">GEN.CO</Col><Col id=\"TOTAL\">45000</Col><Col id=\"TOTALVAL\">78000</Col><Col id=\"OPENVAL\">1024800</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">100.30</Col><Col id=\"ADV\">%2.28</Col><Col id=\"RODADV\">%6.15</Col><Col id=\"SPREADBPS\">12.17</Col><Col id=\"ALPHATOCLOSE\">34.00</Col><Col id=\"STALPHA\">34.00</Col><Col id=\"ALPHASTATEGY\">10PotXlAOM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">GM.N</Col><Col id=\"TOTAL\">582500</Col><Col id=\"TOTALVAL\">45000</Col><Col id=\"OPENVAL\">705600</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">215.65</Col><Col id=\"ADV\">%0.25</Col><Col id=\"RODADV\">%4.57</Col><Col id=\"SPREADBPS\">37.84</Col><Col id=\"ALPHATOCLOSE\">65.00</Col><Col id=\"STALPHA\">65.00</Col><Col id=\"ALPHASTATEGY\">Muri.M</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">GSK.L</Col><Col id=\"TOTAL\">83430</Col><Col id=\"TOTALVAL\">582500</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">215.55</Col><Col id=\"ADV\">%5.20</Col><Col id=\"RODADV\">%108.28</Col><Col id=\"SPREADBPS\">57.74</Col><Col id=\"ALPHATOCLOSE\">63.00</Col><Col id=\"STALPHA\">63.00</Col><Col id=\"ALPHASTATEGY\">BacHowd</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">HEIN.AS</Col><Col id=\"TOTAL\">406000</Col><Col id=\"TOTALVAL\">83430</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">206.14</Col><Col id=\"ADV\">%6.15</Col><Col id=\"RODADV\">%15.60</Col><Col id=\"SPREADBPS\">57.73</Col><Col id=\"ALPHATOCLOSE\">-3.00</Col><Col id=\"STALPHA\">-3.00</Col><Col id=\"ALPHASTATEGY\">AlphaR</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">HON.N</Col><Col id=\"TOTAL\">311400</Col><Col id=\"TOTALVAL\">406000</Col><Col id=\"OPENVAL\">705600</Col><Col id=\"UNGENCY\">Low</Col><Col id=\"LAST\">12.25</Col><Col id=\"ADV\">%4.57</Col><Col id=\"RODADV\">%135.19</Col><Col id=\"SPREADBPS\">19.58</Col><Col id=\"ALPHATOCLOSE\">10.00</Col><Col id=\"STALPHA\">10.00</Col><Col id=\"ALPHASTATEGY\">Bacidbad</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">JARD.SI</Col><Col id=\"TOTAL\">56000</Col><Col id=\"TOTALVAL\">311400</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">84.57</Col><Col id=\"ADV\">%108.28</Col><Col id=\"RODADV\">%29.03</Col><Col id=\"SPREADBPS\">24.57</Col><Col id=\"ALPHATOCLOSE\">-3.00</Col><Col id=\"STALPHA\">-3.00</Col><Col id=\"ALPHASTATEGY\">AlphaS</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">KMB.N</Col><Col id=\"TOTAL\">1024800</Col><Col id=\"TOTALVAL\">56000</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">19.65</Col><Col id=\"ADV\">%15.60</Col><Col id=\"RODADV\">%7.14</Col><Col id=\"SPREADBPS\">24.57</Col><Col id=\"ALPHATOCLOSE\">20.00</Col><Col id=\"STALPHA\">20.00</Col><Col id=\"ALPHASTATEGY\">10PctXLAM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">JARD.SI</Col><Col id=\"TOTAL\">705600</Col><Col id=\"TOTALVAL\">1024800</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">5.63</Col><Col id=\"ADV\">%135.19</Col><Col id=\"RODADV\">%314.91</Col><Col id=\"SPREADBPS\">63.62</Col><Col id=\"ALPHATOCLOSE\">1.00</Col><Col id=\"STALPHA\">1.00</Col><Col id=\"ALPHASTATEGY\">XGPocPOM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">LLY.N</Col><Col id=\"TOTAL\">8000</Col><Col id=\"TOTALVAL\">705600</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">30.45</Col><Col id=\"ADV\">%29.03</Col><Col id=\"RODADV\">%3.79</Col><Col id=\"SPREADBPS\">0.73</Col><Col id=\"ALPHATOCLOSE\">7.00</Col><Col id=\"STALPHA\">7.00</Col><Col id=\"ALPHASTATEGY\">10PotXlAOM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">MCD.N</Col><Col id=\"TOTAL\">66000</Col><Col id=\"TOTALVAL\">8000</Col><Col id=\"OPENVAL\">311400</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">126.82</Col><Col id=\"ADV\">%7.14</Col><Col id=\"RODADV\">%17.44</Col><Col id=\"SPREADBPS\">13.59</Col><Col id=\"ALPHATOCLOSE\">1.00</Col><Col id=\"STALPHA\">1.00</Col><Col id=\"ALPHASTATEGY\">Muri.M</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">MIMC.N</Col><Col id=\"TOTAL\">78000</Col><Col id=\"TOTALVAL\">66000</Col><Col id=\"OPENVAL\">56000</Col><Col id=\"UNGENCY\">Low</Col><Col id=\"LAST\">126.92</Col><Col id=\"ADV\">%314.91</Col><Col id=\"RODADV\">%14.59</Col><Col id=\"SPREADBPS\">1.05</Col><Col id=\"ALPHATOCLOSE\">0.73</Col><Col id=\"STALPHA\">0.73</Col><Col id=\"ALPHASTATEGY\">BacHowd</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">NA.TO</Col><Col id=\"TOTAL\">45000</Col><Col id=\"TOTALVAL\">8000</Col><Col id=\"OPENVAL\">1024800</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">100.30</Col><Col id=\"ADV\">%3.79</Col><Col id=\"RODADV\">%0.79</Col><Col id=\"SPREADBPS\">23.57</Col><Col id=\"ALPHATOCLOSE\">10.52</Col><Col id=\"STALPHA\">10.52</Col><Col id=\"ALPHASTATEGY\">AlphaR</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">GSK.L</Col><Col id=\"TOTAL\">582500</Col><Col id=\"TOTALVAL\">66000</Col><Col id=\"OPENVAL\">705600</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">215.65</Col><Col id=\"ADV\">%17.44</Col><Col id=\"RODADV\">%17.44</Col><Col id=\"SPREADBPS\">56.36</Col><Col id=\"ALPHATOCLOSE\">1.05</Col><Col id=\"STALPHA\">1.05</Col><Col id=\"ALPHASTATEGY\">Bacidbad</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">HEIN.AS</Col><Col id=\"TOTAL\">83430</Col><Col id=\"TOTALVAL\">78000</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">215.55</Col><Col id=\"ADV\">%14.59</Col><Col id=\"RODADV\">%14.59</Col><Col id=\"SPREADBPS\">47.84</Col><Col id=\"ALPHATOCLOSE\">32.00</Col><Col id=\"STALPHA\">32.00</Col><Col id=\"ALPHASTATEGY\">AlphaS</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">HON.N</Col><Col id=\"TOTAL\">406000</Col><Col id=\"TOTALVAL\">45000</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">206.14</Col><Col id=\"ADV\">%0.79</Col><Col id=\"RODADV\">%0.79</Col><Col id=\"SPREADBPS\">9.50</Col><Col id=\"ALPHATOCLOSE\">11.00</Col><Col id=\"STALPHA\">11.00</Col><Col id=\"ALPHASTATEGY\">10PctXLAM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">JARD.SI</Col><Col id=\"TOTAL\">311400</Col><Col id=\"TOTALVAL\">582500</Col><Col id=\"OPENVAL\">705600</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">12.25</Col><Col id=\"ADV\">%2.28</Col><Col id=\"RODADV\">%6.15</Col><Col id=\"SPREADBPS\">56.36</Col><Col id=\"ALPHATOCLOSE\">13.00</Col><Col id=\"STALPHA\">13.00</Col><Col id=\"ALPHASTATEGY\">XGPocPOM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">KMB.N</Col><Col id=\"TOTAL\">56000</Col><Col id=\"TOTALVAL\">83430</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">Low</Col><Col id=\"LAST\">84.57</Col><Col id=\"ADV\">%0.25</Col><Col id=\"RODADV\">%4.57</Col><Col id=\"SPREADBPS\">47.84</Col><Col id=\"ALPHATOCLOSE\">22.00</Col><Col id=\"STALPHA\">22.00</Col><Col id=\"ALPHASTATEGY\">10PotXlAOM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">JARD.SI</Col><Col id=\"TOTAL\">1024800</Col><Col id=\"TOTALVAL\">406000</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">19.65</Col><Col id=\"ADV\">%5.20</Col><Col id=\"RODADV\">%108.28</Col><Col id=\"SPREADBPS\">9.50</Col><Col id=\"ALPHATOCLOSE\">34.00</Col><Col id=\"STALPHA\">34.00</Col><Col id=\"ALPHASTATEGY\">Muri.M</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">LLY.N</Col><Col id=\"TOTAL\">705600</Col><Col id=\"TOTALVAL\">311400</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">5.63</Col><Col id=\"ADV\">%6.15</Col><Col id=\"RODADV\">%15.60</Col><Col id=\"SPREADBPS\">12.17</Col><Col id=\"ALPHATOCLOSE\">65.00</Col><Col id=\"STALPHA\">65.00</Col><Col id=\"ALPHASTATEGY\">BacHowd</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">MCD.N</Col><Col id=\"TOTAL\">8000</Col><Col id=\"TOTALVAL\">56000</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">30.45</Col><Col id=\"ADV\">%4.57</Col><Col id=\"RODADV\">%135.19</Col><Col id=\"SPREADBPS\">37.84</Col><Col id=\"ALPHATOCLOSE\">63.00</Col><Col id=\"STALPHA\">63.00</Col><Col id=\"ALPHASTATEGY\">AlphaR</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">MIMC.N</Col><Col id=\"TOTAL\">66000</Col><Col id=\"TOTALVAL\">1024800</Col><Col id=\"OPENVAL\">311400</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">126.82</Col><Col id=\"ADV\">%108.28</Col><Col id=\"RODADV\">%29.03</Col><Col id=\"SPREADBPS\">57.74</Col><Col id=\"ALPHATOCLOSE\">-3.00</Col><Col id=\"STALPHA\">-3.00</Col><Col id=\"ALPHASTATEGY\">Bacidbad</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">NA.TO</Col><Col id=\"TOTAL\">78000</Col><Col id=\"TOTALVAL\">705600</Col><Col id=\"OPENVAL\">56000</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">126.92</Col><Col id=\"ADV\">%15.60</Col><Col id=\"RODADV\">%7.14</Col><Col id=\"SPREADBPS\">57.73</Col><Col id=\"ALPHATOCLOSE\">10.00</Col><Col id=\"STALPHA\">10.00</Col><Col id=\"ALPHASTATEGY\">AlphaS</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">GM.N</Col><Col id=\"TOTAL\">45000</Col><Col id=\"TOTALVAL\">8000</Col><Col id=\"OPENVAL\">1024800</Col><Col id=\"UNGENCY\">Low</Col><Col id=\"LAST\">100.30</Col><Col id=\"ADV\">%135.19</Col><Col id=\"RODADV\">%314.91</Col><Col id=\"SPREADBPS\">19.58</Col><Col id=\"ALPHATOCLOSE\">-3.00</Col><Col id=\"STALPHA\">-3.00</Col><Col id=\"ALPHASTATEGY\">10PctXLAM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">GSK.L</Col><Col id=\"TOTAL\">582500</Col><Col id=\"TOTALVAL\">66000</Col><Col id=\"OPENVAL\">705600</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">215.65</Col><Col id=\"ADV\">%29.03</Col><Col id=\"RODADV\">%3.79</Col><Col id=\"SPREADBPS\">24.57</Col><Col id=\"ALPHATOCLOSE\">20.00</Col><Col id=\"STALPHA\">20.00</Col><Col id=\"ALPHASTATEGY\">XGPocPOM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">HEIN.AS</Col><Col id=\"TOTAL\">83430</Col><Col id=\"TOTALVAL\">311400</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">215.55</Col><Col id=\"ADV\">%7.14</Col><Col id=\"RODADV\">%17.44</Col><Col id=\"SPREADBPS\">24.57</Col><Col id=\"ALPHATOCLOSE\">1.00</Col><Col id=\"STALPHA\">1.00</Col><Col id=\"ALPHASTATEGY\">10PotXlAOM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">HON.N</Col><Col id=\"TOTAL\">406000</Col><Col id=\"TOTALVAL\">56000</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">206.14</Col><Col id=\"ADV\">%314.91</Col><Col id=\"RODADV\">%14.59</Col><Col id=\"SPREADBPS\">63.62</Col><Col id=\"ALPHATOCLOSE\">7.00</Col><Col id=\"STALPHA\">7.00</Col><Col id=\"ALPHASTATEGY\">Muri.M</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">JARD.SI</Col><Col id=\"TOTAL\">311400</Col><Col id=\"TOTALVAL\">1024800</Col><Col id=\"OPENVAL\">705600</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">12.25</Col><Col id=\"ADV\">%3.79</Col><Col id=\"RODADV\">%0.79</Col><Col id=\"SPREADBPS\">0.73</Col><Col id=\"ALPHATOCLOSE\">1.00</Col><Col id=\"STALPHA\">1.00</Col><Col id=\"ALPHASTATEGY\">BacHowd</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">KMB.N</Col><Col id=\"TOTAL\">56000</Col><Col id=\"TOTALVAL\">705600</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">Medium</Col><Col id=\"LAST\">84.57</Col><Col id=\"ADV\">%17.44</Col><Col id=\"RODADV\">%17.44</Col><Col id=\"SPREADBPS\">13.59</Col><Col id=\"ALPHATOCLOSE\">0.73</Col><Col id=\"STALPHA\">0.73</Col><Col id=\"ALPHASTATEGY\">AlphaR</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">JARD.SI</Col><Col id=\"TOTAL\">1024800</Col><Col id=\"TOTALVAL\">8000</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">Low</Col><Col id=\"LAST\">19.65</Col><Col id=\"ADV\">%14.59</Col><Col id=\"RODADV\">%14.59</Col><Col id=\"SPREADBPS\">1.05</Col><Col id=\"ALPHATOCLOSE\">10.52</Col><Col id=\"STALPHA\">10.52</Col><Col id=\"ALPHASTATEGY\">Bacidbad</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">LLY.N</Col><Col id=\"TOTAL\">406000</Col><Col id=\"TOTALVAL\">66000</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">206.14</Col><Col id=\"ADV\">%0.79</Col><Col id=\"RODADV\">%0.79</Col><Col id=\"SPREADBPS\">23.57</Col><Col id=\"ALPHATOCLOSE\">1.05</Col><Col id=\"STALPHA\">1.05</Col><Col id=\"ALPHASTATEGY\">AlphaS</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">MCD.N</Col><Col id=\"TOTAL\">311400</Col><Col id=\"TOTALVAL\">705600</Col><Col id=\"OPENVAL\">705600</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">12.25</Col><Col id=\"ADV\">%17.44</Col><Col id=\"RODADV\">%17.44</Col><Col id=\"SPREADBPS\">56.36</Col><Col id=\"ALPHATOCLOSE\">32.00</Col><Col id=\"STALPHA\">32.00</Col><Col id=\"ALPHASTATEGY\">10PctXLAM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">BUY</Col><Col id=\"SYMBOL\">MIMC.N</Col><Col id=\"TOTAL\">56000</Col><Col id=\"TOTALVAL\">8000</Col><Col id=\"OPENVAL\">8000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">84.57</Col><Col id=\"ADV\">%14.59</Col><Col id=\"RODADV\">%14.59</Col><Col id=\"SPREADBPS\">47.84</Col><Col id=\"ALPHATOCLOSE\">11.00</Col><Col id=\"STALPHA\">11.00</Col><Col id=\"ALPHASTATEGY\">XGPocPOM</Col></Row><Row><Col id=\"ROUTE\">ROUTE</Col><Col id=\"SIDE\">SELL</Col><Col id=\"SYMBOL\">NA.TO</Col><Col id=\"TOTAL\">1024800</Col><Col id=\"TOTALVAL\">66000</Col><Col id=\"OPENVAL\">66000</Col><Col id=\"UNGENCY\">High</Col><Col id=\"LAST\">19.65</Col><Col id=\"ADV\">%0.79</Col><Col id=\"RODADV\">%0.79</Col><Col id=\"SPREADBPS\">9.50</Col><Col id=\"ALPHATOCLOSE\">13.00</Col><Col id=\"STALPHA\">13.00</Col><Col id=\"ALPHASTATEGY\">10PotXlAOM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"ICON\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBICON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CAPTION\">BSSCreateWave</Col></Row><Row><Col id=\"CAPTION\">MergeParentOrders</Col></Row><Row><Col id=\"CAPTION\">TradePair</Col></Row><Row><Col id=\"CAPTION\">BAM_Paris</Col></Row><Row><Col id=\"CAPTION\">ManuaProgramConfiguration</Col></Row><Row><Col id=\"CAPTION\">---------------------------------</Col></Row><Row><Col id=\"CAPTION\">FactorNeutralTrade</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">ALGO</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">CASH</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">---------------------------------</Col><Col id=\"SUBICON\"/></Row><Row><Col id=\"CAPTION\">DMA</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">FAST</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">CLOSE</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">DARK</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">SLOW</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">MEDIUM</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">---------------------------------</Col></Row><Row><Col id=\"CAPTION\">WAVE</Col><Col id=\"ICON\">imagerc::img_pop_wave.png</Col></Row><Row><Col id=\"CAPTION\">CANCEL</Col><Col id=\"ICON\">imagerc::img_pop_cancel.png</Col></Row><Row><Col id=\"CAPTION\">REPLACE</Col><Col id=\"ICON\">imagerc::img_pop_replace.png</Col></Row><Row><Col id=\"CAPTION\">INDICATION</Col><Col id=\"ICON\">imagerc::img_pop_filAt.png</Col></Row><Row><Col id=\"CAPTION\">---------------------------------</Col></Row><Row><Col id=\"CAPTION\">ADD ORDER</Col><Col id=\"ICON\">imagerc::img_pop_order.png</Col></Row><Row><Col id=\"CAPTION\">HOLD</Col><Col id=\"ICON\">imagerc::img_pop_hold.png</Col></Row><Row><Col id=\"CAPTION\">UNHOLD</Col><Col id=\"ICON\">imagerc::img_pop_unhold.png</Col></Row><Row><Col id=\"CAPTION\">SET STRIKE PX</Col><Col id=\"ICON\">imagerc::img_pop_strike.png</Col></Row><Row><Col id=\"CAPTION\">EXECUTE CROSSES</Col><Col id=\"ICON\">imagerc::img_pop_execute.png</Col></Row><Row><Col id=\"CAPTION\">ACCQUIRE</Col><Col id=\"ICON\">imagerc::img_pop_accquire.png</Col></Row><Row><Col id=\"CAPTION\">ASSIGN</Col></Row><Row><Col id=\"CAPTION\">FILE</Col><Col id=\"MENU_CD\">10050</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">EDIT</Col><Col id=\"MENU_CD\">10040</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">DATA</Col><Col id=\"MENU_CD\">10030</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">HDNG</Col><Col id=\"MENU_CD\">10020</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">CUSTOM</Col><Col id=\"MENU_CD\">10010</Col><Col id=\"SUBICON\">imagerc::img_pop_orderG.png</Col></Row><Row><Col id=\"CAPTION\">Execute</Col></Row><Row><Col id=\"CAPTION\">ExportAllocations</Col></Row><Row><Col id=\"CAPTION\">FDSCompare</Col></Row><Row><Col id=\"CAPTION\">FIFDSUP</Col></Row><Row><Col id=\"CAPTION\">FIMOE</Col></Row><Row><Col id=\"CAPTION\">FxMultiOrderRFQRouter</Col></Row><Row><Col id=\"CAPTION\">FlEvenCrosses</Col></Row><Row><Col id=\"CAPTION\">FilterBssToOutBoundTicket</Col></Row><Row><Col id=\"CAPTION\">FluxCapacitor</Col></Row><Row><Col id=\"CAPTION\">GS_pam</Col></Row><Row><Col id=\"CAPTION\">CUSTOMIZE MENU</Col></Row><Row><Col id=\"CAPTION\">DEPLOY SUMMERY</Col></Row><Row><Col id=\"CAPTION\">SCROLLING</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopSubMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CAPTION\">Execute</Col><Col id=\"MENU_CD\">10010</Col></Row><Row><Col id=\"CAPTION\">ExportAllocations</Col><Col id=\"MENU_CD\">10010</Col></Row><Row><Col id=\"CAPTION\">FDSCompare</Col><Col id=\"MENU_CD\">10010</Col></Row><Row><Col id=\"CAPTION\">FIFDSUP</Col><Col id=\"MENU_CD\">10010</Col></Row><Row><Col id=\"CAPTION\">FIMOE</Col><Col id=\"MENU_CD\">10010</Col></Row><Row><Col id=\"CAPTION\">FXMultiOrderRFQRouter</Col><Col id=\"MENU_CD\">10010</Col></Row><Row><Col id=\"CAPTION\">FIEvenCrosses</Col><Col id=\"MENU_CD\">10010</Col></Row><Row><Col id=\"CAPTION\">FIlterBssToOutboundTicket</Col><Col id=\"MENU_CD\">10010</Col></Row><Row><Col id=\"CAPTION\">FlusCapacitor</Col><Col id=\"MENU_CD\">10010</Col></Row><Row><Col id=\"CAPTION\">GS_Pana</Col><Col id=\"MENU_CD\">10010</Col></Row><Row><Col id=\"CAPTION\">------------------------</Col><Col id=\"MENU_CD\">10010</Col></Row><Row><Col id=\"CAPTION\">Customize...</Col><Col id=\"MENU_CD\">10010</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCpPopSubMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"Icon\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSub02", this);
            obj._setContents("<ColumnInfo><Column id=\"CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"SPLIT\" type=\"STRING\" size=\"256\"/><Column id=\"RESTRIBUTION\" type=\"STRING\" size=\"256\"/><Column id=\"SYMBOL\" type=\"STRING\" size=\"256\"/><Column id=\"ORDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"EXEC\" type=\"INT\" size=\"256\"/><Column id=\"EXECQTY\" type=\"STRING\" size=\"256\"/><Column id=\"AVGPRX\" type=\"STRING\" size=\"256\"/><Column id=\"ORDPRX\" type=\"STRING\" size=\"256\"/><Column id=\"ORDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDSTAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SYMBOL\">HEIN.AS</Col><Col id=\"ORDQTY\">196000</Col><Col id=\"EXEC\">10</Col><Col id=\"EXECQTY\">20571</Col><Col id=\"AVGPRX\">16.48</Col><Col id=\"ORDPRX\">0.00</Col><Col id=\"ORDTYPE\">MARKET</Col><Col id=\"SENDTYPE\">112821</Col><Col id=\"ORDSTAGE\">PARTIAL</Col><Col id=\"CANCEL\">Cancel</Col><Col id=\"SPLIT\">Split</Col></Row><Row><Col id=\"RESTRIBUTION\">BARC</Col><Col id=\"SYMBOL\">HEIN.AS</Col><Col id=\"ORDQTY\">392000</Col><Col id=\"EXEC\">10</Col><Col id=\"EXECQTY\">41143</Col><Col id=\"AVGPRX\">16.48</Col><Col id=\"ORDPRX\">0.00</Col><Col id=\"ORDTYPE\">MARKET</Col><Col id=\"SENDTYPE\">112821</Col><Col id=\"ORDSTAGE\">PARTIAL</Col><Col id=\"CANCEL\">Cancel</Col><Col id=\"SPLIT\">Split</Col></Row><Row><Col id=\"SYMBOL\">HEIN.AS</Col><Col id=\"ORDQTY\">99000</Col><Col id=\"EXEC\">10</Col><Col id=\"EXECQTY\">10296</Col><Col id=\"AVGPRX\">16.48</Col><Col id=\"ORDPRX\">0.00</Col><Col id=\"ORDTYPE\">MARKET</Col><Col id=\"SENDTYPE\">112822</Col><Col id=\"ORDSTAGE\">PARTIAL</Col><Col id=\"CANCEL\">Cancel</Col><Col id=\"SPLIT\">Split</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("icon_sample", this);
            obj._setContents("<ColumnInfo><Column id=\"icon\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\">WAVE</Col><Col id=\"icon\">imagerc::img_pop_wave.png</Col></Row><Row><Col id=\"text\">CANCEL</Col><Col id=\"icon\">imagerc::img_pop_cancel.png</Col></Row><Row><Col id=\"text\">REPLACE</Col><Col id=\"icon\">imagerc::img_pop_replace.png</Col></Row><Row><Col id=\"text\">INDICATION</Col><Col id=\"icon\">imagerc::img_pop_filAt.png</Col></Row><Row><Col id=\"text\">ADD ORDER</Col><Col id=\"icon\">imagerc::img_pop_order.png</Col></Row><Row><Col id=\"text\">HOLD</Col><Col id=\"icon\">imagerc::img_pop_hold.png</Col></Row><Row><Col id=\"text\">UNHOLD</Col><Col id=\"icon\">imagerc::img_pop_unhold.png</Col></Row><Row><Col id=\"text\">SET STRIKE PX</Col><Col id=\"icon\">imagerc::img_pop_strike.png</Col></Row><Row><Col id=\"text\">EXECUTE CROSSES</Col><Col id=\"icon\">imagerc::img_pop_execute.png</Col></Row><Row><Col id=\"text\">ACCQUIRE</Col><Col id=\"icon\">imagerc::img_pop_accquire.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PopupDiv("PopupDiv00","1297","2","506","719",null,null,null,null,null,null,this);
            obj.set_text("");
            obj.set_visible("false");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","0","231","717",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsPopMenu");
            obj.set_autofittype("col");
            obj.set_border("2px solid gray");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"10\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell colspan=\"3\" border=\"0px none\"><Cell displaytype=\"imagecontrol\" text=\"bind:ICON\"/><Cell col=\"1\" text=\"bind:CAPTION\"/><Cell col=\"2\" displaytype=\"imagecontrol\" text=\"bind:SUBICON\"/></Cell></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Div("divMenu1","9","192","208","310",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Grid("Grid00","5","5",null,null,"5","5",null,null,null,null,this.PopupDiv00.form.divMenu1.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCpPopSubMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\" style=\"border:0 none #808080ff ;selectline:0 none #808080ff ;cellline:0 none #808080ff ;\"><Cell colspan=\"2\" border=\"0px none\"><Cell/><Cell col=\"1\" text=\"bind:CAPTION\"/></Cell></Band></Format></Formats>");
            this.PopupDiv00.form.divMenu1.addChild(obj.name, obj);

            obj = new Tab("Tab00","8","8",null,null,"8","224",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("All");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsAll");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Quick\"/><Cell col=\"1\" text=\"ROUTE\"/><Cell col=\"2\" text=\"SIDE\"/><Cell col=\"3\" text=\"SYMBOL\"/><Cell col=\"4\" text=\"TOTAL\"/><Cell col=\"5\" text=\"FLAG\"/><Cell col=\"6\" text=\"TOTALVAL\"/><Cell col=\"7\" text=\"OPENVAL\"/><Cell col=\"8\" text=\"ON\"/><Cell col=\"9\" text=\"OFF\"/><Cell col=\"10\" text=\"LQNT\"/><Cell col=\"11\" text=\"POSIT\"/><Cell col=\"12\" text=\"BOX\"/><Cell col=\"13\" text=\"BIDS\"/><Cell col=\"14\" text=\"LURINEX\"/><Cell col=\"15\" text=\"IOIS\"/><Cell col=\"16\" text=\"SHOWIOIS\"/><Cell col=\"17\" text=\"UNGENCY\"/><Cell col=\"18\" text=\"LAST\"/><Cell col=\"19\" text=\"ADV\"/><Cell col=\"20\" text=\"RODADV\"/><Cell col=\"21\" text=\"SPREADBPS\"/><Cell col=\"22\" text=\"DVCAPSON\"/><Cell col=\"23\" text=\"ESMAILS\"/><Cell col=\"24\" text=\"CORPACT\"/><Cell col=\"25\" text=\"NEWS\"/><Cell col=\"26\" text=\"ALPHATOCLOSE\"/><Cell col=\"27\" text=\"STALPHA\"/><Cell col=\"28\" text=\"ALPHASTATEGY\"/></Band><Band id=\"body\"><Cell displaytype=\"imagecontrol\" edittype=\"none\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\" background=\"url('imagerc::img_grd_quick.png') no-repeat center center\"/><Cell col=\"1\" text=\"bind:ROUTE\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\" padding=\"0px 0px 0px 22px\" background=\"url('imagerc::img_WF_route.png') no-repeat left center\"/><Cell col=\"2\" text=\"bind:SIDE\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"3\" text=\"bind:SYMBOL\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"4\" text=\"bind:TOTAL\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"5\" text=\"bind:FLAG\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\" displaytype=\"imagecontrol\"/><Cell col=\"6\" text=\"bind:TOTALVAL\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"7\" text=\"bind:OPENVAL\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"8\" text=\"ON\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"9\" text=\"OFF\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"10\" text=\"bind:LQNT\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\" displaytype=\"imagecontrol\" background=\"url('imagerc::img_grd_lqnt.png') no-repeat center center\"/><Cell col=\"11\" text=\"bind:POSIT\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\" displaytype=\"imagecontrol\" background=\"url('imagerc::img_grd_posit.png') no-repeat center center\"/><Cell col=\"12\" text=\"bind:BOX\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"13\" text=\"bind:BIDS\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\" displaytype=\"imagecontrol\" background=\"url('imagerc::img_grd_bids.png') no-repeat center center\"/><Cell col=\"14\" text=\"bind:LURINEX\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"15\" text=\"bind:IOIS\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\" progressbarblocksize=\"10\"/><Cell col=\"16\" text=\"Show ]O[s\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"17\" text=\"bind:UNGENCY\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"18\" text=\"bind:LAST\" cssclass=\"expr:LAST == 5.63 ? 'Expr_Case_Background_bRed' : LAST == 17.53 ? 'Expr_Case_Background_bOrange' : 'Expr_Case_Background_Yellow'\"/><Cell col=\"19\" text=\"bind:ADV\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"20\" text=\"bind:RODADV\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"21\" text=\"bind:SPREADBPS\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"22\" text=\"bind:DVCAPSON\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\" displaytype=\"imagecontrol\"/><Cell col=\"23\" text=\"bind:ESMAILS\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\" displaytype=\"imagecontrol\"/><Cell col=\"24\" text=\"bind:CORPACT\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\" displaytype=\"imagecontrol\"/><Cell col=\"25\" text=\"bind:NEWS\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\" displaytype=\"imagecontrol\"/><Cell col=\"26\" text=\"bind:ALPHATOCLOSE\" cssclass=\"expr:ALPHATOCLOSE &gt; 20 &amp;&amp;  ALPHATOCLOSE &lt; 30 ? 'Expr_Case_Background_bYellow' : ALPHATOCLOSE &gt; 30 &amp;&amp;  ALPHATOCLOSE &lt; 40 ? 'Expr_Case_Background_bsOrange' : ALPHATOCLOSE &gt; 40 ? 'Expr_Case_Background_bRed' : SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"27\" text=\"bind:STALPHA\" cssclass=\"expr:STALPHA &gt; 20 &amp;&amp;  STALPHA &lt; 30 ? 'Expr_Case_Background_bYellow' : STALPHA &gt; 30 &amp;&amp;  STALPHA &lt; 40 ? 'Expr_Case_Background_bsOrange' : STALPHA &gt; 40 ? 'Expr_Case_Background_bRed' : SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/><Cell col=\"28\" text=\"bind:ALPHASTATEGY\" cssclass=\"expr:SIDE == &quot;SELL&quot; ? 'Expr_Case_Background_Orange' : 'Expr_Case_Background_Blue'\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("All Open");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("All Working");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("All Completed");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("My Open");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.Tab00);
            obj.set_text("Equity Desk");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.Tab00);
            obj.set_text("Americas");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.Tab00);
            obj.set_text("APAC");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage9",this.Tab00);
            obj.set_text("EMEA");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage10",this.Tab00);
            obj.set_text("SplitMerge");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage11",this.Tab00);
            obj.set_text("AutoRouted");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage12",this.Tab00);
            obj.set_text("Worked Manualy");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage13",this.Tab00);
            obj.set_text("Futures");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage14",this.Tab00);
            obj.set_text("Options Desk");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage15",this.Tab00);
            obj.set_text("FK");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage16",this.Tab00);
            obj.set_text("OTC");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage17",this.Tab00);
            obj.set_text("Fixed Income Desk");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage18",this.Tab00);
            obj.set_text("Roll&Spreads");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tab("Tab00_00_00","8","Tab00:8","98.75%",null,null,"8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00_00_00);
            obj.set_text("All");
            this.Tab00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.Tab00_00_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSub02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CANCEL\"/><Cell col=\"1\" text=\"SPLIT\"/><Cell col=\"2\" text=\"RESTRIBUTION\"/><Cell col=\"3\" text=\"SYMBOL\"/><Cell col=\"4\" text=\"ORDQTY\"/><Cell col=\"5\" text=\"EXEC\"/><Cell col=\"6\" text=\"EXECQTY\"/><Cell col=\"7\" text=\"AVGPRX\"/><Cell col=\"8\" text=\"ORDPRX\"/><Cell col=\"9\" text=\"ORDTYPE\"/><Cell col=\"10\" text=\"SENDTYPE\"/><Cell col=\"11\" text=\"ORDSTAGE\"/></Band><Band id=\"body\"><Cell text=\"Cancel\" displaytype=\"normal\" edittype=\"none\" cssclass=\"Expr_Case_Background_Orange\" background=\"url('imagerc::img_grd_cancel.png') no-repeat left center\" padding=\"0px 0px 0px 20px\"/><Cell col=\"1\" text=\"Split\" displaytype=\"normal\" edittype=\"none\" cssclass=\"Expr_Case_Background_Orange\" background=\"url('imagerc::img_grd_split.png') no-repeat left center\" padding=\"0px 0px 0px 20px\"/><Cell col=\"2\" text=\"bind:RESTRIBUTION\" cssclass=\"Expr_Case_Background_Orange\"/><Cell col=\"3\" text=\"bind:SYMBOL\" cssclass=\"Expr_Case_Background_Orange\"/><Cell col=\"4\" text=\"bind:ORDQTY\" cssclass=\"Expr_Case_Background_Orange\"/><Cell col=\"5\" text=\"bind:EXEC\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\" progressbarblocksize=\"10\" cssclass=\"Expr_Case_Background_Orange\"/><Cell col=\"6\" text=\"bind:EXECQTY\" cssclass=\"Expr_Case_Background_Orange\"/><Cell col=\"7\" text=\"bind:AVGPRX\" cssclass=\"Expr_Case_Background_Orange\"/><Cell col=\"8\" text=\"bind:ORDPRX\" cssclass=\"Expr_Case_Background_Orange\"/><Cell col=\"9\" text=\"bind:ORDTYPE\" cssclass=\"Expr_Case_Background_Orange\"/><Cell col=\"10\" text=\"bind:SENDTYPE\" cssclass=\"Expr_Case_Background_Orange\"/><Cell col=\"11\" text=\"bind:ORDSTAGE\" cssclass=\"Expr_Case_Background_Orange\"/></Band></Format></Formats>");
            this.Tab00_00_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00_00_00);
            obj.set_text("Staged");
            this.Tab00_00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00_00_00);
            obj.set_text("Canceled");
            this.Tab00_00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00_00_00);
            obj.set_text("Rejects");
            this.Tab00_00_00.addChild(obj.name, obj);

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
        this.addIncludeScript("PoC_4.xfdl","lib::lib_Form.xjs");
        this.addIncludeScript("PoC_4.xfdl","lib::CommUtil.xjs");
        this.registerScript("PoC_4.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 요건 4
        * 03. 화면설명 :
        * 04. 작성일   : 2019.11.11
        * 05. 작성자   : 안주환
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;
        this.executeIncludeScript("lib::CommUtil.xjs"); /*include "lib::CommUtil.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.fv_Row;

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/


        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.PopupDiv00_Grid00_oncelldblclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup();
        	this.commUtil.popup(this, "PopupSample", "comm::commPopup.xfdl", -1, -1, null, null, true, true, false, null, "fnPopupCallBack");
        };

        this.PopupDiv00_divMenu1_Grid00_oncelldblclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup();
        	this.commUtil.popup(this, "PopupSample", "comm::commPopup.xfdl", -1, -1, null, null, true, true, false, null, "fnPopupCallBack");
        };

        this.fnPopupCallBack = function(popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "PopupSample" :
        			break;
        	}
        }

        this.Tab00_Tabpage1_Grid00_onrbuttondown = function(obj,e)
        {
        	var x = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(nexacro.Application.mainframe, 0))+10;
        	var y = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(nexacro.Application.mainframe, 0))+10;

        	this.xPos = x;
        	this.yPos = y;

        	this.PopupDiv00.trackPopup(x,y);
        };

        this.PopupDiv00_Grid00_onmousemove = function(obj, e)
        {
        	if(this.fv_Row != e.row)
        	{
        		var nLeft = obj.getOffsetLeft() + obj.getOffsetWidth() - 18;
        		var nTop = e.canvasy - 258;

        		this.fv_Row = e.row;

        		this.PopupDiv00.form.divMenu1.set_visible(true);
        		this.PopupDiv00.form.divMenu1.move(nLeft, nTop);

        		sMENU_CD = this.dsPopMenu.getColumn(this.fv_Row, "MENU_CD");

        		this.dsPopSubMenu.filter("MENU_CD == '" + sMENU_CD + "'");

        		this.dsCpPopSubMenu.copyData(this.dsPopSubMenu, true);

        		if(this.dsCpPopSubMenu.rowcount == 0)
        		{
        			this.PopupDiv00.form.divMenu1.set_visible(false);
        			return;
        		}

        		this.dsPopSubMenu.filter("");
        		this.PopupDiv00.form.divMenu1.resize(this.PopupDiv00.form.divMenu1.getOffsetWidth(), 24 * this.dsCpPopSubMenu.rowcount + 13);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.PopupDiv00.form.Grid00.addEventHandler("onmousemove",this.PopupDiv00_Grid00_onmousemove,this);
            this.PopupDiv00.form.Grid00.addEventHandler("oncelldblclick",this.PopupDiv00_Grid00_oncelldblclick,this);
            this.PopupDiv00.form.divMenu1.form.Grid00.addEventHandler("onkillfocus",this.divMenu1_Grid00_onkillfocus,this);
            this.PopupDiv00.form.divMenu1.form.Grid00.addEventHandler("oncelldblclick",this.PopupDiv00_divMenu1_Grid00_oncelldblclick,this);
            this.Tab00.Tabpage1.form.Grid00.addEventHandler("onrbuttondown",this.Tab00_Tabpage1_Grid00_onrbuttondown,this);
        };

        this.loadIncludeScript("PoC_4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
