(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
    /***/
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/styles.scss":
    /*!*********************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/assets/scss/styles.scss ***!
      \*********************************************************************************************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsSrcAssetsScssStylesScss(module, exports, __webpack_require__) {
      // Imports
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
      /*! ../../../node_modules/css-loader/dist/runtime/api.js */
      "./node_modules/css-loader/dist/runtime/api.js");

      exports = ___CSS_LOADER_API_IMPORT___(true); // Module

      exports.push([module.i, "@charset \"UTF-8\";\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody {\n  font: 14px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n}\n:focus {\n  outline: 0;\n}\n.hidden {\n  display: none;\n}\n.todoapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n.new-todo,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.new-todo {\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n}\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n.toggle-all {\n  text-align: center;\n  border: none;\n  /* Mobile Safari */\n  opacity: 0;\n  position: absolute;\n}\n.toggle-all + label {\n  width: 60px;\n  height: 34px;\n  font-size: 0;\n  position: absolute;\n  top: -52px;\n  left: -13px;\n  transform: rotate(90deg);\n}\n.toggle-all + label:before {\n  content: \"❯\";\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n.toggle-all[checked=true] + label:before {\n  color: #737373;\n}\n.todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n.todo-list li:last-child {\n  border-bottom: none;\n}\n.todo-list li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n.todo-list li.editing .edit {\n  display: block;\n  width: 506px;\n  padding: 12px 16px;\n  margin: 0 0 0 43px;\n}\n.todo-list li.editing .view {\n  display: none;\n}\n.todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none;\n  /* Mobile Safari */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n}\n.todo-list li .toggle {\n  opacity: 0;\n}\n.todo-list li .toggle + label {\n  /*\n  \tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n  \tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n  */\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center left;\n}\n.todo-list li .toggle[checked=true] + label {\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E\");\n}\n.todo-list li label {\n  word-break: break-all;\n  padding: 15px 15px 15px 60px;\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s;\n}\n.todo-list li.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n.todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  transition: color 0.2s ease-out;\n}\n.todo-list li .destroy:hover {\n  color: #af5b5e;\n}\n.todo-list li .destroy:after {\n  content: \"×\";\n}\n.todo-list li:hover .destroy {\n  display: block;\n}\n.todo-list li .edit {\n  display: none;\n}\n.todo-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n.footer {\n  color: #777;\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n.footer:before {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n.todo-count {\n  float: left;\n  text-align: left;\n}\n.todo-count strong {\n  font-weight: 300;\n}\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n.filters li {\n  display: inline;\n}\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n.filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n.filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n.clear-completed,\nhtml .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.clear-completed:hover {\n  text-decoration: underline;\n}\n.info {\n  margin: 65px auto 0;\n  color: #bfbfbf;\n  font-size: 10px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n.info p {\n  line-height: 1;\n}\n.info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n.info a:hover {\n  text-decoration: underline;\n}\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .toggle-all,\n.todo-list li .toggle {\n    background: none;\n  }\n\n  .todo-list li .toggle {\n    height: 40px;\n  }\n}\n@media (max-width: 430px) {\n  .footer {\n    height: 50px;\n  }\n\n  .filters {\n    bottom: 10px;\n  }\n}", "", {
        "version": 3,
        "sources": ["styles.scss"],
        "names": [],
        "mappings": "AAAA,gBAAgB;AAAhB;;EAEC,SAAA;EACA,UAAA;AAED;AACA;EACC,SAAA;EACA,UAAA;EACA,SAAA;EACA,gBAAA;EACA,eAAA;EACA,wBAAA;EACA,oBAAA;EACA,oBAAA;EACA,cAAA;EACA,wBAAA;EACA,qBAAA;OAAA,gBAAA;EACA,mCAAA;EACA,kCAAA;AAED;AACA;EACC,yDAAA;EACA,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,cAAA;EACA,mCAAA;EACA,kCAAA;EACA,gBAAA;AAED;AACA;EACC,UAAA;AAED;AACA;EACC,aAAA;AAED;AACA;EACC,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,4EAAA;AAED;AAEA;EACC,kBAAA;EACA,gBAAA;EACA,cAAA;AACD;AAEA;EACC,kBAAA;EACA,gBAAA;EACA,cAAA;AACD;AAEA;EACC,kBAAA;EACA,gBAAA;EACA,cAAA;AACD;AAEA;EACC,kBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,8BAAA;EACA,0CAAA;EACA,uCAAA;EACA,kCAAA;AACD;AAEA;;EAEC,kBAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,oBAAA;EACA,oBAAA;EACA,kBAAA;EACA,SAAA;EACA,cAAA;EACA,YAAA;EACA,sBAAA;EACA,iDAAA;EACA,sBAAA;EACA,mCAAA;EACA,kCAAA;AACD;AAEA;EACC,4BAAA;EACA,YAAA;EACA,gCAAA;EACA,gDAAA;AACD;AAEA;EACC,kBAAA;EACA,UAAA;EACA,6BAAA;AACD;AAEA;EACC,kBAAA;EACA,YAAA;EAAc,kBAAA;EACd,UAAA;EACA,kBAAA;AAED;AACA;EACC,WAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EAEA,wBAAA;AAED;AACA;EACC,YAAA;EACA,eAAA;EACA,cAAA;EACA,4BAAA;AAED;AACA;EACC,cAAA;AAED;AACA;EACC,SAAA;EACA,UAAA;EACA,gBAAA;AAED;AACA;EACC,kBAAA;EACA,eAAA;EACA,gCAAA;AAED;AACA;EACC,mBAAA;AAED;AACA;EACC,mBAAA;EACA,UAAA;AAED;AACA;EACC,cAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AAED;AACA;EACC,aAAA;AAED;AACA;EACC,kBAAA;EACA,WAAA;EACA,kEAAA;EACA,YAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,cAAA;EACA,YAAA;EAAc,kBAAA;EACd,wBAAA;EACA,qBAAA;OAAA,gBAAA;AAGD;AAAA;EACC,UAAA;AAGD;AAAA;EACC;;;GAAA;EAIA,oUAAA;EACA,4BAAA;EACA,gCAAA;AAGD;AAAA;EACC,yaAAA;AAGD;AAAA;EACC,qBAAA;EACA,4BAAA;EACA,cAAA;EACA,gBAAA;EACA,sBAAA;AAGD;AAAA;EACC,cAAA;EACA,6BAAA;AAGD;AAAA;EACC,aAAA;EACA,kBAAA;EACA,MAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,+BAAA;AAGD;AAAA;EACC,cAAA;AAGD;AAAA;EACC,YAAA;AAGD;AAAA;EACC,cAAA;AAGD;AAAA;EACC,aAAA;AAGD;AAAA;EACC,mBAAA;AAGD;AAAA;EACC,WAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,6BAAA;AAGD;AAAA;EACC,WAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,gBAAA;EACA,4JAAA;AAGD;AAIA;EACC,WAAA;EACA,gBAAA;AADD;AAIA;EACC,gBAAA;AADD;AAIA;EACC,SAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,QAAA;EACA,OAAA;AADD;AAIA;EACC,eAAA;AADD;AAIA;EACC,cAAA;EACA,WAAA;EACA,gBAAA;EACA,qBAAA;EACA,6BAAA;EACA,kBAAA;AADD;AAIA;EACC,oCAAA;AADD;AAIA;EACC,oCAAA;AADD;AAIA;;EAEC,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;AADD;AAIA;EACC,0BAAA;AADD;AAIA;EACC,mBAAA;EACA,cAAA;EACA,eAAA;EACA,6CAAA;EACA,kBAAA;AADD;AAIA;EACC,cAAA;AADD;AAIA;EACC,cAAA;EACA,qBAAA;EACA,gBAAA;AADD;AAIA;EACC,0BAAA;AADD;AAIA;;;CAAA;AAIA;EACC;;IAEC,gBAAA;EADA;;EAID;IACC,YAAA;EADA;AACF;AAIA;EACC;IACC,YAAA;EAFA;;EAKD;IACC,YAAA;EAFA;AACF",
        "file": "styles.scss",
        "sourcesContent": ["@charset \"UTF-8\";\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n  font: 14px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n}\n\n:focus {\n  outline: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.todoapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n}\n\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n\n.toggle-all {\n  text-align: center;\n  border: none;\n  /* Mobile Safari */\n  opacity: 0;\n  position: absolute;\n}\n\n.toggle-all + label {\n  width: 60px;\n  height: 34px;\n  font-size: 0;\n  position: absolute;\n  top: -52px;\n  left: -13px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.toggle-all + label:before {\n  content: \"❯\";\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n\n.toggle-all[checked=true] + label:before {\n  color: #737373;\n}\n\n.todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n  border-bottom: none;\n}\n\n.todo-list li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n\n.todo-list li.editing .edit {\n  display: block;\n  width: 506px;\n  padding: 12px 16px;\n  margin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n  display: none;\n}\n\n.todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none;\n  /* Mobile Safari */\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.todo-list li .toggle {\n  opacity: 0;\n}\n\n.todo-list li .toggle + label {\n  /*\n  \tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n  \tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n  */\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center left;\n}\n\n.todo-list li .toggle[checked=true] + label {\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E\");\n}\n\n.todo-list li label {\n  word-break: break-all;\n  padding: 15px 15px 15px 60px;\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s;\n}\n\n.todo-list li.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n\n.todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  transition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n  color: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n  content: \"×\";\n}\n\n.todo-list li:hover .destroy {\n  display: block;\n}\n\n.todo-list li .edit {\n  display: none;\n}\n\n.todo-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n\n.footer {\n  color: #777;\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n  float: left;\n  text-align: left;\n}\n\n.todo-count strong {\n  font-weight: 300;\n}\n\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n\n.filters li {\n  display: inline;\n}\n\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.clear-completed:hover {\n  text-decoration: underline;\n}\n\n.info {\n  margin: 65px auto 0;\n  color: #bfbfbf;\n  font-size: 10px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n\n.info p {\n  line-height: 1;\n}\n\n.info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n\n.info a:hover {\n  text-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .toggle-all,\n.todo-list li .toggle {\n    background: none;\n  }\n\n  .todo-list li .toggle {\n    height: 40px;\n  }\n}\n@media (max-width: 430px) {\n  .footer {\n    height: 50px;\n  }\n\n  .filters {\n    bottom: 10px;\n  }\n}"]
      }]); // Exports

      module.exports = exports;
      /***/
    },

    /***/
    "./node_modules/css-loader/dist/runtime/api.js":
    /*!*****************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/api.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
      "use strict";
      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names

      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return "@media ".concat(item[2], " {").concat(content, "}");
            }

            return content;
          }).join('');
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names


        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

        var cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
          });
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)


      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
        return "/*# ".concat(data, " */");
      }
      /***/

    },

    /***/
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
      "use strict";

      var isOldIE = function isOldIE() {
        var memo;
        return function memorize() {
          if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
          }

          return memo;
        };
      }();

      var getTarget = function getTarget() {
        var memo = {};
        return function memorize(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        };
      }();

      var stylesInDom = [];

      function getIndexByIdentifier(identifier) {
        var result = -1;

        for (var i = 0; i < stylesInDom.length; i++) {
          if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var index = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
          };

          if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
          } else {
            stylesInDom.push({
              identifier: identifier,
              updater: addStyle(obj, options),
              references: 1
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function insertStyleElement(options) {
        var style = document.createElement('style');
        var attributes = options.attributes || {};

        if (typeof attributes.nonce === 'undefined') {
          var nonce = true ? __webpack_require__.nc : undefined;

          if (nonce) {
            attributes.nonce = nonce;
          }
        }

        Object.keys(attributes).forEach(function (key) {
          style.setAttribute(key, attributes[key]);
        });

        if (typeof options.insert === 'function') {
          options.insert(style);
        } else {
          var target = getTarget(options.insert || 'head');

          if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          }

          target.appendChild(style);
        }

        return style;
      }

      function removeStyleElement(style) {
        // istanbul ignore if
        if (style.parentNode === null) {
          return false;
        }

        style.parentNode.removeChild(style);
      }
      /* istanbul ignore next  */


      var replaceText = function replaceText() {
        var textStore = [];
        return function replace(index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join('\n');
        };
      }();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

        /* istanbul ignore if  */

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;

          if (childNodes[index]) {
            style.removeChild(childNodes[index]);
          }

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, options, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          style.setAttribute('media', media);
        } else {
          style.removeAttribute('media');
        }

        if (sourceMap && btoa) {
          css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
        } // For old IE

        /* istanbul ignore if  */


        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      var singleton = null;
      var singletonCounter = 0;

      function addStyle(obj, options) {
        var style;
        var update;
        var remove;

        if (options.singleton) {
          var styleIndex = singletonCounter++;
          style = singleton || (singleton = insertStyleElement(options));
          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);
        } else {
          style = insertStyleElement(options);
          update = applyToTag.bind(null, style, options);

          remove = function remove() {
            removeStyleElement(style);
          };
        }

        update(obj);
        return function updateStyle(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }

            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      module.exports = function (list, options) {
        options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page

        if (!options.singleton && typeof options.singleton !== 'boolean') {
          options.singleton = isOldIE();
        }

        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
          }

          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
          }

          var newLastIdentifiers = modulesToDom(newList, options);

          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];

            var _index = getIndexByIdentifier(_identifier);

            if (stylesInDom[_index].references === 0) {
              stylesInDom[_index].updater();

              stylesInDom.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/

    },

    /***/
    "./src/assets/scss/styles.scss":
    /*!*************************************!*\
      !*** ./src/assets/scss/styles.scss ***!
      \*************************************/

    /*! no static exports found */

    /***/
    function srcAssetsScssStylesScss(module, exports, __webpack_require__) {
      var api = __webpack_require__(
      /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

      var content = __webpack_require__(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--14-1!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/resolve-url-loader??ref--14-3!../../../node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */
      "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/styles.scss");

      content = content.__esModule ? content["default"] : content;

      if (typeof content === 'string') {
        content = [[module.i, content, '']];
      }

      var options = {};
      options.insert = "head";
      options.singleton = false;
      var update = api(content, options);
      module.exports = content.locals || {};
      /***/
    },

    /***/
    3:
    /*!*******************************************!*\
      !*** multi ./src/assets/scss/styles.scss ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\zain-todo-mvc\src\assets\scss\styles.scss */
      "./src/assets/scss/styles.scss");
      /***/
    }
  }, [[3, "runtime"]]]);
})();
//# sourceMappingURL=styles-es5.js.map