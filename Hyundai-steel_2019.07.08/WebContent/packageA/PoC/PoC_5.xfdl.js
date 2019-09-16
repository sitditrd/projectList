(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_5");
            this.set_titletext("막대모양 차트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"product\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"width\" type=\"STRING\" size=\"256\"/><Column id=\"thickness\" type=\"STRING\" size=\"256\"/><Column id=\"top\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"product\">부품_1</Col><Col id=\"time\">18</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_2</Col><Col id=\"time\">18</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_3</Col><Col id=\"time\">18</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_4</Col><Col id=\"time\">18</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_5</Col><Col id=\"time\">18</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_6</Col><Col id=\"time\">18</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_7</Col><Col id=\"time\">18</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_8</Col><Col id=\"time\">18</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_9</Col><Col id=\"time\">18</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_10</Col><Col id=\"time\">18</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_11</Col><Col id=\"time\">18</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_12</Col><Col id=\"time\">18</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_13</Col><Col id=\"time\">18</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_14</Col><Col id=\"time\">19</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_15</Col><Col id=\"time\">19</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_16</Col><Col id=\"time\">19</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_17</Col><Col id=\"time\">19</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_18</Col><Col id=\"time\">19</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_19</Col><Col id=\"time\">19</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">부품_20</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">부품_21</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">부품_22</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">부품_23</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">부품_24</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_25</Col><Col id=\"time\">19</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_26</Col><Col id=\"time\">19</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_27</Col><Col id=\"time\">20</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_28</Col><Col id=\"time\">20</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_29</Col><Col id=\"time\">20</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_30</Col><Col id=\"time\">20</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_31</Col><Col id=\"time\">20</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_32</Col><Col id=\"time\">20</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_33</Col><Col id=\"time\">20</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_34</Col><Col id=\"time\">20</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_35</Col><Col id=\"time\">20</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_36</Col><Col id=\"time\">20</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_37</Col><Col id=\"time\">20</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_38</Col><Col id=\"time\">20</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_39</Col><Col id=\"time\">20</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_40</Col><Col id=\"time\">21</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_41</Col><Col id=\"time\">21</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_42</Col><Col id=\"time\">21</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_43</Col><Col id=\"time\">21</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_44</Col><Col id=\"time\">21</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_45</Col><Col id=\"time\">21</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_46</Col><Col id=\"time\">21</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_47</Col><Col id=\"time\">21</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_48</Col><Col id=\"time\">21</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_49</Col><Col id=\"time\">21</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_50</Col><Col id=\"time\">21</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_51</Col><Col id=\"time\">21</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_52</Col><Col id=\"time\">21</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_53</Col><Col id=\"time\">22</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_54</Col><Col id=\"time\">22</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_55</Col><Col id=\"time\">22</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_56</Col><Col id=\"time\">22</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_57</Col><Col id=\"time\">22</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_58</Col><Col id=\"time\">22</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_59</Col><Col id=\"time\">22</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_60</Col><Col id=\"time\">22</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_61</Col><Col id=\"time\">22</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_62</Col><Col id=\"time\">22</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_63</Col><Col id=\"time\">22</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_64</Col><Col id=\"time\">22</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_65</Col><Col id=\"time\">23</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_66</Col><Col id=\"time\">23</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_67</Col><Col id=\"time\">23</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_68</Col><Col id=\"time\">23</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_69</Col><Col id=\"time\">23</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_70</Col><Col id=\"time\">23</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_71</Col><Col id=\"time\">23</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_72</Col><Col id=\"time\">23</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_73</Col><Col id=\"time\">23</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_74</Col><Col id=\"time\">23</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_75</Col><Col id=\"time\">23</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_76</Col><Col id=\"time\">23</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_77</Col><Col id=\"time\">23</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_78</Col><Col id=\"time\">0</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_79</Col><Col id=\"time\">0</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_80</Col><Col id=\"time\">0</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_81</Col><Col id=\"time\">0</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_82</Col><Col id=\"time\">0</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_83</Col><Col id=\"time\">0</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_84</Col><Col id=\"time\">0</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_85</Col><Col id=\"time\">0</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_86</Col><Col id=\"time\">0</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_87</Col><Col id=\"time\">0</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_88</Col><Col id=\"time\">1</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_89</Col><Col id=\"time\">1</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_90</Col><Col id=\"time\">1</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_91</Col><Col id=\"time\">1</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_92</Col><Col id=\"time\">1</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_93</Col><Col id=\"time\">1</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_94</Col><Col id=\"time\">1</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_95</Col><Col id=\"time\">1</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_96</Col><Col id=\"time\">1</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_97</Col><Col id=\"time\">1</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_98</Col><Col id=\"time\">1</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_99</Col><Col id=\"time\">1</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_100</Col><Col id=\"time\">2</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_101</Col><Col id=\"time\">2</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_102</Col><Col id=\"time\">2</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_103</Col><Col id=\"time\">2</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_104</Col><Col id=\"time\">2</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_105</Col><Col id=\"time\">2</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_106</Col><Col id=\"time\">2</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_107</Col><Col id=\"time\">2</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_108</Col><Col id=\"time\">2</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_109</Col><Col id=\"time\">2</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_110</Col><Col id=\"time\">2</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_111</Col><Col id=\"time\">2</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_112</Col><Col id=\"time\">3</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_113</Col><Col id=\"time\">3</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_114</Col><Col id=\"time\">3</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_115</Col><Col id=\"time\">3</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_116</Col><Col id=\"time\">3</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_117</Col><Col id=\"time\">3</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_118</Col><Col id=\"time\">3</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_119</Col><Col id=\"time\">3</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_120</Col><Col id=\"time\">3</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_121</Col><Col id=\"time\">3</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_122</Col><Col id=\"time\">3</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_123</Col><Col id=\"time\">3</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_124</Col><Col id=\"time\">4</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_125</Col><Col id=\"time\">4</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_126</Col><Col id=\"time\">4</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_127</Col><Col id=\"time\">4</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_128</Col><Col id=\"time\">4</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_129</Col><Col id=\"time\">4</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_130</Col><Col id=\"time\">4</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_131</Col><Col id=\"time\">4</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_132</Col><Col id=\"time\">4</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_133</Col><Col id=\"time\">4</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_134</Col><Col id=\"time\">4</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_135</Col><Col id=\"time\">4</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_136</Col><Col id=\"time\">5</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_137</Col><Col id=\"time\">5</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_138</Col><Col id=\"time\">5</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_139</Col><Col id=\"time\">5</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_140</Col><Col id=\"time\">5</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_141</Col><Col id=\"time\">5</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_142</Col><Col id=\"time\">5</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_143</Col><Col id=\"time\">5</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_144</Col><Col id=\"time\">5</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_145</Col><Col id=\"time\">5</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_146</Col><Col id=\"time\">5</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_147</Col><Col id=\"time\">5</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_148</Col><Col id=\"time\">6</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_149</Col><Col id=\"time\">6</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_150</Col><Col id=\"time\">6</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_151</Col><Col id=\"time\">6</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_152</Col><Col id=\"time\">6</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_153</Col><Col id=\"time\">6</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_154</Col><Col id=\"time\">6</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_155</Col><Col id=\"time\">6</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_156</Col><Col id=\"time\">6</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_157</Col><Col id=\"time\">6</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_158</Col><Col id=\"time\">6</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_159</Col><Col id=\"time\">6</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_160</Col><Col id=\"time\">7</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_161</Col><Col id=\"time\">7</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_162</Col><Col id=\"time\">7</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_163</Col><Col id=\"time\">7</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_164</Col><Col id=\"time\">7</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_165</Col><Col id=\"time\">7</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_166</Col><Col id=\"time\">7</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_167</Col><Col id=\"time\">7</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_168</Col><Col id=\"time\">7</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_169</Col><Col id=\"time\">7</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_170</Col><Col id=\"time\">7</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_171</Col><Col id=\"time\">7</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_172</Col><Col id=\"time\">8</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_173</Col><Col id=\"time\">8</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_174</Col><Col id=\"time\">8</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_175</Col><Col id=\"time\">8</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_176</Col><Col id=\"time\">8</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_177</Col><Col id=\"time\">8</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_178</Col><Col id=\"time\">8</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_179</Col><Col id=\"time\">8</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_180</Col><Col id=\"time\">8</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_181</Col><Col id=\"time\">8</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_182</Col><Col id=\"time\">8</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_183</Col><Col id=\"time\">8</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_184</Col><Col id=\"time\">9</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_185</Col><Col id=\"time\">9</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_186</Col><Col id=\"time\">9</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_187</Col><Col id=\"time\">9</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_188</Col><Col id=\"time\">9</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_189</Col><Col id=\"time\">9</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_190</Col><Col id=\"time\">9</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_191</Col><Col id=\"time\">9</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_192</Col><Col id=\"time\">9</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_193</Col><Col id=\"time\">9</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_194</Col><Col id=\"time\">9</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_195</Col><Col id=\"time\">9</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_196</Col><Col id=\"time\">10</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_197</Col><Col id=\"time\">10</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_198</Col><Col id=\"time\">10</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_199</Col><Col id=\"time\">10</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_200</Col><Col id=\"time\">10</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_201</Col><Col id=\"time\">10</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_202</Col><Col id=\"time\">10</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_203</Col><Col id=\"time\">10</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_204</Col><Col id=\"time\">10</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_205</Col><Col id=\"time\">10</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_206</Col><Col id=\"time\">10</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_207</Col><Col id=\"time\">10</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_208</Col><Col id=\"time\">11</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_209</Col><Col id=\"time\">11</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_210</Col><Col id=\"time\">11</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_211</Col><Col id=\"time\">11</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_212</Col><Col id=\"time\">11</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_213</Col><Col id=\"time\">11</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_214</Col><Col id=\"time\">11</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_215</Col><Col id=\"time\">11</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_216</Col><Col id=\"time\">11</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_217</Col><Col id=\"time\">11</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_218</Col><Col id=\"time\">11</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_219</Col><Col id=\"time\">11</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_220</Col><Col id=\"time\">12</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_221</Col><Col id=\"time\">12</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_222</Col><Col id=\"time\">12</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_223</Col><Col id=\"time\">12</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_224</Col><Col id=\"time\">12</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_225</Col><Col id=\"time\">12</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_226</Col><Col id=\"time\">12</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_227</Col><Col id=\"time\">12</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_228</Col><Col id=\"time\">12</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_229</Col><Col id=\"time\">12</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_230</Col><Col id=\"time\">12</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_231</Col><Col id=\"time\">12</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_232</Col><Col id=\"time\">13</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_233</Col><Col id=\"time\">13</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_234</Col><Col id=\"time\">13</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_235</Col><Col id=\"time\">13</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_236</Col><Col id=\"time\">13</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_237</Col><Col id=\"time\">13</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_238</Col><Col id=\"time\">13</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_239</Col><Col id=\"time\">13</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_240</Col><Col id=\"time\">13</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_241</Col><Col id=\"time\">13</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_242</Col><Col id=\"time\">13</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_243</Col><Col id=\"time\">13</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_244</Col><Col id=\"time\">14</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_245</Col><Col id=\"time\">14</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_246</Col><Col id=\"time\">14</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_247</Col><Col id=\"time\">14</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_248</Col><Col id=\"time\">14</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_249</Col><Col id=\"time\">14</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_250</Col><Col id=\"time\">14</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_251</Col><Col id=\"time\">14</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_252</Col><Col id=\"time\">14</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_253</Col><Col id=\"time\">14</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_254</Col><Col id=\"time\">14</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_255</Col><Col id=\"time\">14</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_256</Col><Col id=\"time\">15</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_257</Col><Col id=\"time\">15</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_258</Col><Col id=\"time\">15</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_259</Col><Col id=\"time\">15</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_260</Col><Col id=\"time\">15</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_261</Col><Col id=\"time\">15</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_262</Col><Col id=\"time\">15</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_263</Col><Col id=\"time\">15</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_264</Col><Col id=\"time\">15</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_265</Col><Col id=\"time\">15</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_266</Col><Col id=\"time\">15</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_267</Col><Col id=\"time\">15</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_268</Col><Col id=\"time\">15</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_269</Col><Col id=\"time\">15</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_270</Col><Col id=\"time\">16</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_271</Col><Col id=\"time\">16</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_272</Col><Col id=\"time\">16</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_273</Col><Col id=\"time\">16</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_274</Col><Col id=\"time\">16</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_275</Col><Col id=\"time\">16</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_276</Col><Col id=\"time\">16</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_277</Col><Col id=\"time\">16</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_278</Col><Col id=\"time\">16</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_279</Col><Col id=\"time\">16</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_280</Col><Col id=\"time\">16</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_281</Col><Col id=\"time\">16</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_282</Col><Col id=\"time\">16</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_283</Col><Col id=\"time\">16</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_284</Col><Col id=\"time\">16</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_285</Col><Col id=\"time\">17</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_286</Col><Col id=\"time\">17</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_287</Col><Col id=\"time\">17</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_288</Col><Col id=\"time\">17</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_289</Col><Col id=\"time\">17</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_290</Col><Col id=\"time\">17</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_291</Col><Col id=\"time\">17</Col><Col id=\"width\">1600</Col><Col id=\"thickness\">1</Col><Col id=\"top\">55</Col></Row><Row><Col id=\"product\">부품_292</Col><Col id=\"time\">17</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row><Row><Col id=\"product\">부품_293</Col><Col id=\"time\">17</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_294</Col><Col id=\"time\">17</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_295</Col><Col id=\"time\">17</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_296</Col><Col id=\"time\">17</Col><Col id=\"width\">600</Col><Col id=\"thickness\">25</Col><Col id=\"top\">120</Col></Row><Row><Col id=\"product\">부품_297</Col><Col id=\"time\">17</Col><Col id=\"width\">800</Col><Col id=\"thickness\">20</Col><Col id=\"top\">107</Col></Row><Row><Col id=\"product\">부품_298</Col><Col id=\"time\">17</Col><Col id=\"width\">1000</Col><Col id=\"thickness\">15</Col><Col id=\"top\">94</Col></Row><Row><Col id=\"product\">부품_299</Col><Col id=\"time\">17</Col><Col id=\"width\">1200</Col><Col id=\"thickness\">10</Col><Col id=\"top\">81</Col></Row><Row><Col id=\"product\">부품_300</Col><Col id=\"time\">17</Col><Col id=\"width\">1400</Col><Col id=\"thickness\">5</Col><Col id=\"top\">68</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_objList", this);
            obj._setContents("<ColumnInfo><Column id=\"obj\" type=\"STRING\" size=\"256\"/><Column id=\"objNm\" type=\"STRING\" size=\"256\"/><Column id=\"objLeft\" type=\"STRING\" size=\"256\"/><Column id=\"objTop\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list00", this);
            obj._setContents("<ColumnInfo><Column id=\"product\" type=\"STRING\" size=\"256\"/><Column id=\"width\" type=\"STRING\" size=\"256\"/><Column id=\"thickness\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"product\">1</Col><Col id=\"width\">20</Col><Col id=\"thickness\">90</Col><Col id=\"time\">1</Col></Row><Row><Col id=\"product\">2</Col><Col id=\"width\">40</Col><Col id=\"thickness\">50</Col><Col id=\"time\">1</Col></Row><Row><Col id=\"product\">3</Col><Col id=\"width\">40</Col><Col id=\"thickness\">50</Col><Col id=\"time\">1</Col></Row><Row><Col id=\"product\">4</Col><Col id=\"width\">40</Col><Col id=\"thickness\">50</Col><Col id=\"time\">1</Col></Row><Row><Col id=\"product\">5</Col><Col id=\"width\">50</Col><Col id=\"thickness\">50</Col><Col id=\"time\">1</Col></Row><Row><Col id=\"product\">6</Col><Col id=\"width\">20</Col><Col id=\"thickness\">110</Col><Col id=\"time\">2</Col></Row><Row><Col id=\"product\">7</Col><Col id=\"width\">10</Col><Col id=\"thickness\">130</Col><Col id=\"time\">2</Col></Row><Row><Col id=\"product\">8</Col><Col id=\"width\">30</Col><Col id=\"thickness\">70</Col><Col id=\"time\">2</Col></Row><Row><Col id=\"product\">9</Col><Col id=\"width\">10</Col><Col id=\"thickness\">65</Col><Col id=\"time\">2</Col></Row><Row><Col id=\"product\">10</Col><Col id=\"width\">35</Col><Col id=\"thickness\">120</Col><Col id=\"time\">2</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">11</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">12</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">13</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">14</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">15</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">16</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">17</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">18</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">19</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">20</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">21</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">22</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">23</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">24</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">25</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">26</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">27</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">28</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">29</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">30</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">31</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">32</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">33</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">34</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">35</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">36</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">37</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">38</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">39</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">40</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">41</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">42</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">43</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">44</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">45</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">46</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">47</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">48</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">49</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">50</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">51</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">52</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">53</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">54</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">55</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">56</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">57</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">58</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">59</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">60</Col></Row><Row><Col id=\"time\">13</Col><Col id=\"product\">61</Col></Row><Row><Col id=\"time\">13</Col><Col id=\"product\">62</Col></Row><Row><Col id=\"time\">13</Col><Col id=\"product\">63</Col></Row><Row><Col id=\"time\">13</Col><Col id=\"product\">64</Col></Row><Row><Col id=\"time\">13</Col><Col id=\"product\">65</Col></Row><Row><Col id=\"time\">14</Col><Col id=\"product\">66</Col></Row><Row><Col id=\"time\">14</Col><Col id=\"product\">67</Col></Row><Row><Col id=\"time\">14</Col><Col id=\"product\">68</Col></Row><Row><Col id=\"time\">14</Col><Col id=\"product\">69</Col></Row><Row><Col id=\"time\">14</Col><Col id=\"product\">70</Col></Row><Row><Col id=\"time\">15</Col><Col id=\"product\">71</Col></Row><Row><Col id=\"time\">15</Col><Col id=\"product\">72</Col></Row><Row><Col id=\"time\">15</Col><Col id=\"product\">73</Col></Row><Row><Col id=\"time\">15</Col><Col id=\"product\">74</Col></Row><Row><Col id=\"time\">15</Col><Col id=\"product\">75</Col></Row><Row><Col id=\"time\">16</Col><Col id=\"product\">76</Col></Row><Row><Col id=\"time\">16</Col><Col id=\"product\">77</Col></Row><Row><Col id=\"time\">16</Col><Col id=\"product\">78</Col></Row><Row><Col id=\"time\">16</Col><Col id=\"product\">79</Col></Row><Row><Col id=\"time\">16</Col><Col id=\"product\">80</Col></Row><Row><Col id=\"time\">17</Col><Col id=\"product\">81</Col></Row><Row><Col id=\"time\">17</Col><Col id=\"product\">82</Col></Row><Row><Col id=\"time\">17</Col><Col id=\"product\">83</Col></Row><Row><Col id=\"time\">17</Col><Col id=\"product\">84</Col></Row><Row><Col id=\"time\">17</Col><Col id=\"product\">85</Col></Row><Row><Col id=\"time\">18</Col><Col id=\"product\">86</Col></Row><Row><Col id=\"time\">18</Col><Col id=\"product\">87</Col></Row><Row><Col id=\"time\">18</Col><Col id=\"product\">88</Col></Row><Row><Col id=\"time\">18</Col><Col id=\"product\">89</Col></Row><Row><Col id=\"time\">18</Col><Col id=\"product\">90</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">91</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">92</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">93</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">94</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">95</Col></Row><Row><Col id=\"time\">20</Col><Col id=\"product\">96</Col></Row><Row><Col id=\"time\">20</Col><Col id=\"product\">97</Col></Row><Row><Col id=\"time\">20</Col><Col id=\"product\">98</Col></Row><Row><Col id=\"time\">20</Col><Col id=\"product\">99</Col></Row><Row><Col id=\"time\">20</Col><Col id=\"product\">100</Col></Row><Row><Col id=\"time\">21</Col><Col id=\"product\">101</Col></Row><Row><Col id=\"time\">21</Col><Col id=\"product\">102</Col></Row><Row><Col id=\"time\">21</Col><Col id=\"product\">103</Col></Row><Row><Col id=\"time\">21</Col><Col id=\"product\">104</Col></Row><Row><Col id=\"time\">21</Col><Col id=\"product\">105</Col></Row><Row><Col id=\"time\">22</Col><Col id=\"product\">106</Col></Row><Row><Col id=\"time\">22</Col><Col id=\"product\">107</Col></Row><Row><Col id=\"time\">22</Col><Col id=\"product\">108</Col></Row><Row><Col id=\"time\">22</Col><Col id=\"product\">109</Col></Row><Row><Col id=\"time\">22</Col><Col id=\"product\">110</Col></Row><Row><Col id=\"time\">23</Col><Col id=\"product\">111</Col></Row><Row><Col id=\"time\">23</Col><Col id=\"product\">112</Col></Row><Row><Col id=\"time\">23</Col><Col id=\"product\">113</Col></Row><Row><Col id=\"time\">23</Col><Col id=\"product\">114</Col></Row><Row><Col id=\"time\">23</Col><Col id=\"product\">115</Col></Row><Row><Col id=\"time\">0</Col><Col id=\"product\">116</Col></Row><Row><Col id=\"time\">0</Col><Col id=\"product\">117</Col></Row><Row><Col id=\"time\">0</Col><Col id=\"product\">118</Col></Row><Row><Col id=\"time\">0</Col><Col id=\"product\">119</Col></Row><Row><Col id=\"time\">0</Col><Col id=\"product\">120</Col></Row><Row><Col id=\"time\">1</Col><Col id=\"product\">121</Col></Row><Row><Col id=\"time\">1</Col><Col id=\"product\">122</Col></Row><Row><Col id=\"time\">1</Col><Col id=\"product\">123</Col></Row><Row><Col id=\"time\">1</Col><Col id=\"product\">124</Col></Row><Row><Col id=\"time\">1</Col><Col id=\"product\">125</Col></Row><Row><Col id=\"time\">2</Col><Col id=\"product\">126</Col></Row><Row><Col id=\"time\">2</Col><Col id=\"product\">127</Col></Row><Row><Col id=\"time\">2</Col><Col id=\"product\">128</Col></Row><Row><Col id=\"time\">2</Col><Col id=\"product\">129</Col></Row><Row><Col id=\"time\">2</Col><Col id=\"product\">130</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">131</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">132</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">133</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">134</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">135</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">136</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">137</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">138</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">139</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">140</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">141</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">142</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">143</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">144</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">145</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">146</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">147</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">148</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">149</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">150</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">151</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">152</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">153</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">154</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">155</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">156</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">157</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">158</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">159</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">160</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">161</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">162</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">163</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">164</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">165</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">166</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">167</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">168</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">169</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">170</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">171</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">172</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">173</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">174</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">175</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">176</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">177</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">178</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">179</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">180</Col></Row><Row><Col id=\"time\">13</Col><Col id=\"product\">181</Col></Row><Row><Col id=\"time\">13</Col><Col id=\"product\">182</Col></Row><Row><Col id=\"time\">13</Col><Col id=\"product\">183</Col></Row><Row><Col id=\"time\">13</Col><Col id=\"product\">184</Col></Row><Row><Col id=\"time\">13</Col><Col id=\"product\">185</Col></Row><Row><Col id=\"time\">14</Col><Col id=\"product\">186</Col></Row><Row><Col id=\"time\">14</Col><Col id=\"product\">187</Col></Row><Row><Col id=\"time\">14</Col><Col id=\"product\">188</Col></Row><Row><Col id=\"time\">14</Col><Col id=\"product\">189</Col></Row><Row><Col id=\"time\">14</Col><Col id=\"product\">190</Col></Row><Row><Col id=\"time\">15</Col><Col id=\"product\">191</Col></Row><Row><Col id=\"time\">15</Col><Col id=\"product\">192</Col></Row><Row><Col id=\"time\">15</Col><Col id=\"product\">193</Col></Row><Row><Col id=\"time\">15</Col><Col id=\"product\">194</Col></Row><Row><Col id=\"time\">15</Col><Col id=\"product\">195</Col></Row><Row><Col id=\"time\">16</Col><Col id=\"product\">196</Col></Row><Row><Col id=\"time\">16</Col><Col id=\"product\">197</Col></Row><Row><Col id=\"time\">16</Col><Col id=\"product\">198</Col></Row><Row><Col id=\"time\">16</Col><Col id=\"product\">199</Col></Row><Row><Col id=\"time\">16</Col><Col id=\"product\">200</Col></Row><Row><Col id=\"time\">17</Col><Col id=\"product\">201</Col></Row><Row><Col id=\"time\">17</Col><Col id=\"product\">202</Col></Row><Row><Col id=\"time\">17</Col><Col id=\"product\">203</Col></Row><Row><Col id=\"time\">17</Col><Col id=\"product\">204</Col></Row><Row><Col id=\"time\">17</Col><Col id=\"product\">205</Col></Row><Row><Col id=\"time\">18</Col><Col id=\"product\">206</Col></Row><Row><Col id=\"time\">18</Col><Col id=\"product\">207</Col></Row><Row><Col id=\"time\">18</Col><Col id=\"product\">208</Col></Row><Row><Col id=\"time\">18</Col><Col id=\"product\">209</Col></Row><Row><Col id=\"time\">18</Col><Col id=\"product\">210</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">211</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">212</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">213</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">214</Col></Row><Row><Col id=\"time\">19</Col><Col id=\"product\">215</Col></Row><Row><Col id=\"time\">20</Col><Col id=\"product\">216</Col></Row><Row><Col id=\"time\">20</Col><Col id=\"product\">217</Col></Row><Row><Col id=\"time\">20</Col><Col id=\"product\">218</Col></Row><Row><Col id=\"time\">20</Col><Col id=\"product\">219</Col></Row><Row><Col id=\"time\">20</Col><Col id=\"product\">220</Col></Row><Row><Col id=\"time\">21</Col><Col id=\"product\">221</Col></Row><Row><Col id=\"time\">21</Col><Col id=\"product\">222</Col></Row><Row><Col id=\"time\">21</Col><Col id=\"product\">223</Col></Row><Row><Col id=\"time\">21</Col><Col id=\"product\">224</Col></Row><Row><Col id=\"time\">21</Col><Col id=\"product\">225</Col></Row><Row><Col id=\"time\">22</Col><Col id=\"product\">226</Col></Row><Row><Col id=\"time\">22</Col><Col id=\"product\">227</Col></Row><Row><Col id=\"time\">22</Col><Col id=\"product\">228</Col></Row><Row><Col id=\"time\">22</Col><Col id=\"product\">229</Col></Row><Row><Col id=\"time\">22</Col><Col id=\"product\">230</Col></Row><Row><Col id=\"time\">23</Col><Col id=\"product\">231</Col></Row><Row><Col id=\"time\">23</Col><Col id=\"product\">232</Col></Row><Row><Col id=\"time\">23</Col><Col id=\"product\">233</Col></Row><Row><Col id=\"time\">23</Col><Col id=\"product\">234</Col></Row><Row><Col id=\"time\">23</Col><Col id=\"product\">235</Col></Row><Row><Col id=\"time\">0</Col><Col id=\"product\">236</Col></Row><Row><Col id=\"time\">0</Col><Col id=\"product\">237</Col></Row><Row><Col id=\"time\">0</Col><Col id=\"product\">238</Col></Row><Row><Col id=\"time\">0</Col><Col id=\"product\">239</Col></Row><Row><Col id=\"time\">0</Col><Col id=\"product\">240</Col></Row><Row><Col id=\"time\">1</Col><Col id=\"product\">241</Col></Row><Row><Col id=\"time\">1</Col><Col id=\"product\">242</Col></Row><Row><Col id=\"time\">1</Col><Col id=\"product\">243</Col></Row><Row><Col id=\"time\">1</Col><Col id=\"product\">244</Col></Row><Row><Col id=\"time\">1</Col><Col id=\"product\">245</Col></Row><Row><Col id=\"time\">2</Col><Col id=\"product\">246</Col></Row><Row><Col id=\"time\">2</Col><Col id=\"product\">247</Col></Row><Row><Col id=\"time\">2</Col><Col id=\"product\">248</Col></Row><Row><Col id=\"time\">2</Col><Col id=\"product\">249</Col></Row><Row><Col id=\"time\">2</Col><Col id=\"product\">250</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">251</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">252</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">253</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">254</Col></Row><Row><Col id=\"time\">3</Col><Col id=\"product\">255</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">256</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">257</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">258</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">259</Col></Row><Row><Col id=\"time\">4</Col><Col id=\"product\">260</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">261</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">262</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">263</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">264</Col></Row><Row><Col id=\"time\">5</Col><Col id=\"product\">265</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">266</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">267</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">268</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">269</Col></Row><Row><Col id=\"time\">6</Col><Col id=\"product\">270</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">271</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">272</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">273</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">274</Col></Row><Row><Col id=\"time\">7</Col><Col id=\"product\">275</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">276</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">277</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">278</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">279</Col></Row><Row><Col id=\"time\">8</Col><Col id=\"product\">280</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">281</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">282</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">283</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">284</Col></Row><Row><Col id=\"time\">9</Col><Col id=\"product\">285</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">286</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">287</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">288</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">289</Col></Row><Row><Col id=\"time\">10</Col><Col id=\"product\">290</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">291</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">292</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">293</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">294</Col></Row><Row><Col id=\"time\">11</Col><Col id=\"product\">295</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">296</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">297</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">298</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">299</Col></Row><Row><Col id=\"time\">12</Col><Col id=\"product\">300</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGantt","186","93",null,"240","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid #c7c7c7");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dateTime","10","93","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_info01","66","stc_dateTime:0","120","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_info02","66","div_info01:0","120","100",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","divGantt:10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"product\"/><Cell col=\"2\" text=\"width\"/><Cell col=\"3\" text=\"thickness\"/><Cell col=\"4\" text=\"time\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:product\" padding=\"0px 0px 0px 5px\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:width\" textAlign=\"right\" padding=\"0px 5px 0px 0px\"/><Cell col=\"3\" text=\"bind:thickness\" textAlign=\"right\" padding=\"0px 5px 0px 0px\"/><Cell col=\"4\" text=\"bind:time\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","39",null,"44","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_border("1px solid");
            obj.set_background("#f6f6f6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"44","70","35","15",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_btnR");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hide","61","40","35","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_expand");
            obj.set_background("#e7eaee");
            this.addChild(obj.name, obj);

            obj = new Static("stc_sideWidth","10","stc_dateTime:0","56","100",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("폭");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("stc_sideThick","10","stc_sideWidth:0","56","100",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("두께");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","11","40","50","42",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("차트");
            obj.set_cssclass("sta_WF_table_required");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","5",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("막대모양 차트");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PoC_5.xfdl","lib::comLib_Comm.xjs");
        this.registerScript("PoC_5.xfdl", function() {
        this.executeIncludeScript("lib::comLib_Comm.xjs"); /*include "lib::comLib_Comm.xjs"*/;

        // 변수 초기화
        this.arrinfo01 = new Array("1600","1400","1200","1000","800", "600"); // 폭(왼쪽 Div 표현)
        this.arrinfo02 = new Array("1","5","10","15","20", "25"); // 두께(왼쪽 Div 표현)
        this.arrTime = new Array("18", "19", "20", "21", "22", "23", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"); // 시간(메인 Div 표현)
        this.arrRowInfo = new Array(); // 선택 된 Button 정보

        // 시간표에 사용되는 static 컴포넌트 정보
        this.staWidth = 50;
        this.staHeight = 3;
        this.staLeft = 0;
        this.staRight = 0;
        this.staTop = 0;

        // 차트영역 접기 펼치기
        this.orgDateTimeHeight = this.stc_dateTime.height;
        this.orgSideWidthHeight = this.stc_sideWidth.height;
        this.orgSideThickHeight = this.stc_sideThick.height;
        this.orgInnfo01Height = this.div_info01.height;
        this.orgInnfo02Height = this.div_info02.height;
        this.orgGanttHeight = this.divGantt.height;

        this.PoC_5_onload = function(obj,e)
        {
        	this.stc_dateTime.set_text(this.gfn_todayTime());

        	// 막대 차트 초기 셋팅
        	this.initGantt();
        };

        this.initGantt = function()
        {
        	var objStatic01 = "";
        	var objStatic01_1 = "";
        	var objStatic02 = "";
        	var objStatic02_2 = "";
        	var objStatic03 = "";

        	var strStaticId01 = "";
        	var strStaticId01_1 = "";
        	var strStaticId02 = "";
        	var strStaticId02_2 = "";
        	var strStaticId03 = "";
        	var strText = "";
        	var strArea = 0;
        	var strClass = "sta_WF_box02L";

        	var i, j;

        	for (i = 0; i < 6; i++)
        	{
        		strClass = "sta_WF_box02L";
        		strStaticId01 = "title" + "_" + this.arrinfo01[i];
        		strStaticId01_1 = "titleVal" + "_" + this.arrinfo01[i];
        		strStaticId02 = "title" + "_" + this.arrinfo02[i];
        		strStaticId02_2 = "titleVal" + "_" + this.arrinfo02[i];

        		objStatic01 = new Static();
        		objStatic01.init(strStaticId01, null, this.staTop + 15, this.staWidth, this.staHeight, this.staRight);
        		objStatic01.set_cssclass(strClass);

        		objStatic01_1 = new Static();
        		objStatic01_1.init(strStaticId01_1, null, this.staTop + 10, 50, 15, nexacro.toNumber(this.staRight + 55));
        		objStatic01_1.set_text(this.arrinfo01[i]);
        		objStatic01_1.set_textAlign("right");
        		objStatic01_1.set_cssclass("sta_base");

        		objStatic02 = new Static();
        		objStatic02.init(strStaticId02, null, this.staTop + 15, this.staWidth, this.staHeight, this.staRight);
        		objStatic02.set_cssclass(strClass);

        		objStatic02_2 = new Static();
        		objStatic02_2.init(strStaticId02_2, null, this.staTop + 10, 50, 15, nexacro.toNumber(this.staRight + 55));
        		objStatic02_2.set_text(this.arrinfo02[i]);
        		objStatic02_2.set_textAlign("right");
        		objStatic02_2.set_cssclass("sta_base");

        		this.div_info01.addChild(strStaticId01, objStatic01);
        		this.div_info01.addChild(strStaticId01_1, objStatic01_1);
        		this.div_info02.addChild(strStaticId02, objStatic02);
        		this.div_info02.addChild(strStaticId02_2, objStatic02_2);

        		objStatic01.show();
        		objStatic01_1.show();
        		objStatic02.show();
        		objStatic02_2.show();

        		this.staTop += this.staHeight + 10;
        	}

        	// 차트 그리기 (title, color를 설정하며 그리기)
        	for (j = 0; j < this.arrTime.length; j++)
        	{
        		strText = this.arrTime[j];
        		strClass = "sta_WF_box01L";
        		strStaticId03 = "stc_" + this.arrTime[j];

        		objStatic03 = new Static();
        		objStatic03.init(strStaticId03, this.staLeft, 0, 100, 39);
        		objStatic03.set_cssclass(strClass);
        		if (this.arrTime[j] == "1" || this.arrTime[j] == "2" || this.arrTime[j] == "3" || this.arrTime[j] == "4" || this.arrTime[j] == "5"
        		    || this.arrTime[j] == "6" || this.arrTime[j] == "7" || this.arrTime[j] == "8" || this.arrTime[j] == "9" || this.arrTime[j] == "0") {
        			objStatic03.set_text("0" + strText + "시");
        		} else {
        			objStatic03.set_text(strText + "시");
        		}
        		objStatic03.set_textAlign("center");

        		this.divGantt.addChild(strStaticId03, objStatic03);
        		objStatic03.show();

        		this.staLeft += 100;
        	}

        	this.div_info01.form.resetScroll();
        	this.div_info02.form.resetScroll();
        	this.divGantt.form.resetScroll();
        };

        this.fn_comBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btn_search" :
        			this.Grid01.set_binddataset(this.ds_list);

        			// 조회
        			this.set_Schedules();
        			break;

        		case "btn_hide" :
        			var sBtnCssClass = obj.cssclass;

        			if (sBtnCssClass == "btn_WF_expand") {
        				this.stc_dateTime.set_height(0);
        				this.stc_sideWidth.set_height(0);
        				this.stc_sideThick.set_height(0);

        				this.div_info01.set_height(0);
        				this.div_info02.set_height(0);
        				this.divGantt.set_height(0);

        				obj.set_cssclass("btn_WF_expandUp");
        			} else {
        				this.stc_dateTime.set_height(this.orgDateTimeHeight);
        				this.stc_sideWidth.set_height(this.orgSideWidthHeight);
        				this.stc_sideThick.set_height(this.orgSideThickHeight);

        				this.div_info01.set_height(this.orgInnfo01Height);
        				this.div_info02.set_height(this.orgInnfo02Height);
        				this.divGantt.set_height(this.orgGanttHeight);

        				obj.set_cssclass("btn_WF_expand");
        			}

        			this.resetScroll();
        			break;
        	}
        };

        this.set_Schedules = function()
        {
        	var nLeft = 5;
        	var nWidth = 5;
        	var nTop = 0;
        	var nHeight = 100;
        	var objStatic, objButton;
        	var strBtnId, strStaticName, strTime, strArea;
        	var sWidth;
        	var i, j;

        	for (i = 0; i < this.arrTime.length; i++)
        	{
        		strArea = this.arrTime[i];
        		strStaticName = "stc_" + this.arrTime[i];
        		objStatic = this.divGantt.form.components[strStaticName];

        		for (j = 0; j < this.ds_list.getRowCount(); j++)
        		{
        			strBtnId = this.ds_list.getColumn(j, "product");
        			strTime = this.ds_list.getColumn(j, "time");

        			if (strArea == strTime) {
        				// Grid에서 row chage 후 다시 그리기 위함
        				this.divGantt.form.removeChild(strBtnId);

        				nTop = this.ds_list.getColumn(j, "top");

        				objButton = new Button();
        				objButton.init(strBtnId, nLeft, nTop, nWidth, nHeight);
        				objButton.set_cssclass("btn_WF_gantt09");

        				objButton.addEventHandler("onclick", this.btn_onclick, this);

        				this.divGantt.addChild(strBtnId, objButton);

        				objButton.show();

        				nLeft += 5;
        			} else {
        				nLeft = objStatic.getOffsetLeft() + 5;
        			}
        		}
        	}

        	// select Row 해제
        	this.Grid01.selectRow(0, false);
        };

        this.btn_onclick = function(obj,e)
        {
        	var i;
        	var strCssClass = obj.cssclass;
        	var sColVal, sColIdx;

        	if (strCssClass == "btn_WF_gantt09")
        	{
        		obj.set_cssclass("btn_WF_ganttSub");

        		var nAddRow = this.ds_objList.addRow();
        		this.ds_objList.setColumn(nAddRow, "obj", obj);
        		this.ds_objList.setColumn(nAddRow, "objNm", obj.name);

        		sColVal = this.ds_objList.getColumn(nAddRow, "objNm");
        		sColIdx = this.ds_list.findRow("product", sColVal);

        		this.Grid01.selectRow(sColIdx, true);
        		this.Grid01.setCellPos(sColIdx);
        	}
        	else
        	{
        		obj.set_cssclass("btn_WF_gantt09");

        		var strColNm;
        		for (i = 0; i < this.ds_objList.getRowCount(); i++)
        		{
        			strColNm = this.ds_objList.getColumn(i, "objNm");
        			sColIdx = this.ds_list.findRow("product", strColNm);

        			if (strColNm == obj.name) {
        				this.ds_objList.deleteRow(i);
        			}
        		}

        		this.Grid01.selectRow(sColIdx, false);
        		this.Grid01.setCellPos(sColIdx);
        		this.resetScroll();
        	}
        };

        /*********************************************************************
         * 함 수 명 	: gfn_IsNull
         * 함수설명 	: NULL 여부 체크
         * 입    력 	: 문자열
         * 결    과 	: Boolean형의 여부	- null = true, Not Null = false
         *********************************************************************/
        this.gfn_IsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

        	var v_ChkStr = new String(sValue);

            if (v_ChkStr == null) return true;
            if (v_ChkStr.toString().length == 0) return true;

            return false;
        };

        /******************************************************************************
         * Function Name: gfn_SetMoveData
         * Description  : Dataset의 Data 이동
         * Arguments    : objFromDs		{object} 		값을 보내주는 Dataset
        				  objToDs		{object} 		값을 받는 Dataset
        				  FromRow		{array,number} 	보내주는 ROW
        				  nToRow		{number} 		받는 ROW
        				  sMoveType		{stirng]		Move Type(A : add row | I : insert row[default]);
         * Return       : d없음
         ******************************************************************************/
        this.gfn_SetMoveData = function(objFromDs, objToDs, FromRow, nToRow, sMoveType)
        {
        	if (this.gfn_IsNull(nToRow)) {
        		nToRow = -1;
        	}

        	var arrFromRow;
        	var nRow;
        	var nInsertRow = nToRow;
        	var i;

        	if (FromRow == -1) return;

        	if (typeof(FromRow) == "number") {
        		arrFromRow = [];
        		arrFromRow.push(FromRow);
        	} else {
        		arrFromRow = FromRow;
        	}

        	for (i = 0; i < arrFromRow.length; i++)
        	{
        		if (nToRow > -1)
        		{
        			if (sMoveType == "I") {
        				nRow = objToDs.insertRow(nInsertRow);
        			} else {
        				nRow = objToDs.addRow();
        			}
        		}
        		else
        		{
        			nRow = objToDs.addRow();
        		}

        		objToDs.copyRow(nRow, objFromDs, arrFromRow[i]);

        		nInsertRow++;
        	}

        	for (i = arrFromRow.length-1; i > -1; i--)
        	{
        		objFromDs.deleteRow(arrFromRow[i]);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PoC_5_onload,this);
            this.divGantt.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_info01.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_info02.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.btn_search.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_hide.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_list00.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };

        this.loadIncludeScript("PoC_5.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
