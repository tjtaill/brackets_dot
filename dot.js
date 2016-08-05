define(function (require, exports, module) {
    "use strict";   
    
    var register = function (CodeMirror) {
        CodeMirror.defineSimpleMode("dot", {
          // The start state contains the rules that are intially used
          start: [
            // The regex matches the token, the token property contains the type
            {regex: /"(?:[^\\]|\\.)*?"/, token: "string"},
            // You can match multiple tokens at once. Note that the captured
            // groups must span the whole string in this case    
            {regex: /(?:digraph|graph|node|edge|strict|subgraph)\b/,
             token: "keyword"},       
            {regex: /\/\/.*/, token: "comment"},   
            {regex: /\/\*/, token: "comment", next: "comment"},  
            {regex: /[\{\[\(]/, indent: true},
            {regex: /[\}\]\)]/, dedent: true},
            {regex: /[a-z$][\w$]*/, token: "variable"},   
          ],
          // The multi-line comment state.
          comment: [
            {regex: /.*?\*\//, token: "comment", next: "start"},
            {regex: /.*/, token: "comment"}
          ],
          // The meta property contains global information about the mode. It
          // can contain properties like lineComment, which are supported by
          // all modes, and also directives like dontIndentStates, which are
          // specific to simple modes.
          meta: {
            dontIndentStates: ["comment"],
            lineComment: "//"
          }
        });
     
    };
    exports.register = register;
   
});