//XJS=lib_Common.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::lib_String.xjs");
        this.addIncludeScript(path,"lib::lib_Form.xjs");
        this.registerScript(path, function() {
        /************************
         *  공통 Script Include
         ************************/
        this.executeIncludeScript("lib::lib_String.xjs"); /*include "lib::lib_String.xjs"*/;
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
