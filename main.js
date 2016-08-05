/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets */

define(function (require, exports, module) {
    "use strict";

    var LanguageManager = brackets.getModule("language/LanguageManager");
    var CodeMirror = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror");
    var dot = require("./dotlanguage");
    var AppInit	= brackets.getModule("utils/AppInit")
    
   
    function registerDotLanaguage() {
        
        dot.register(CodeMirror);
        
        CodeMirror.defineMIME('text/x-dot', 'dot');

        LanguageManager.defineLanguage("dot", {
                name: "DOT",
                mode: "dot",
                fileExtensions: ["dot"],
                blockComment: ["/*", "*/"],
                lineComment: ["//"]
            });
    }
    
    AppInit.appReady(function() {
       registerDotLanaguage(); 
    });
   
});
