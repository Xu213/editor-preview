(self.webpackChunkeditor_preview=self.webpackChunkeditor_preview||[]).push([[1147],{63601:function(e,t,a){"use strict";a.d(t,{Ak:function(){return r},LK:function(){return n}});var n=function(e){return new Promise((function(){}))},r=function(e,t){return new Promise((function(){}))}},11147:function(e,t,a){"use strict";a.r(t);a(47313);var n=a(31881),r=a.n(n),o=a(92229),i=a.n(o),l=a(287),p=a(46855),s=a(80003),d=a(63601),c=a(59091),u=a(46417);t.default=function(){var e=l,t=(0,c.Q)();t.id&&(0,d.LK)(t.id).then((function(t){e=t,console.log("getJson",t)}));var a="cxd",n="zh-CN";return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.ToastComponent,{theme:a,position:"top-right",locale:n},"toast"),(0,u.jsx)(s.AlertComponent,{theme:a,locale:n},"alert"),(0,p.render)(e,{},{fetcher:function(e){var t=e.url,a=e.method,n=e.data,o=e.responseType,i=e.config,l=e.headers;return(i=i||{}).withCredentials=!0,o&&(i.responseType=o),i.cancelExecutor&&(i.cancelToken=new(r().CancelToken)(i.cancelExecutor)),i.headers=l||{},"post"!==a&&"put"!==a&&"patch"!==a?(n&&(i.params=n),r()[a](t,i)):(n&&n instanceof FormData?(i.headers=i.headers||{},i.headers["Content-Type"]="multipart/form-data"):!n||"string"===typeof n||n instanceof Blob||n instanceof ArrayBuffer||(n=JSON.stringify(n),i.headers=i.headers||{},i.headers["Content-Type"]="application/json"),r()[a](t,n,i))},isCancel:function(e){return r().isCancel(e)},copy:function(e){i()(e),s.toast.success("\u5185\u5bb9\u5df2\u590d\u5236\u5230\u7c98\u8d34\u677f")},theme:a})]})}},92229:function(e,t,a){"use strict";var n=a(65063),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,o,i,l,p,s,d=!1;t||(t={}),a=t.debug||!1;try{if(i=n(),l=document.createRange(),p=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=r[t.format]||r.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),p.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(c){a&&console.error("unable to copy using execCommand: ",c),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(c){a&&console.error("unable to copy using clipboardData: ",c),a&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{p&&("function"==typeof p.removeRange?p.removeRange(l):p.removeAllRanges()),s&&document.body.removeChild(s),i()}return d}},65063:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},287:function(e){"use strict";e.exports=JSON.parse('{"type":"page","title":"\u589e\u5220\u6539\u67e5\u793a\u4f8b","remark":"bla bla bla","toolbar":[{"type":"button","actionType":"dialog","label":"\u65b0\u589e","icon":"fa fa-plus pull-left","primary":true,"dialog":{"title":"\u65b0\u589e","body":{"type":"form","name":"sample-edit-form","api":"post:/amis/api/sample","body":[{"type":"input-text","name":"engine","label":"Engine","required":true},{"type":"divider"},{"type":"input-text","name":"browser","label":"Browser","required":true},{"type":"divider"},{"type":"input-text","name":"platform","label":"Platform(s)","required":true},{"type":"divider"},{"type":"input-text","name":"version","label":"Engine version"},{"type":"divider"},{"type":"input-text","name":"grade","label":"CSS grade"}]}}}],"body":{"type":"crud","draggable":true,"api":"/amis/api/sample?waitSeconds=1","perPage":15,"keepItemSelectionOnPageChange":true,"maxKeepItemSelectionLength":11,"labelTpl":"${id} ${engine}","orderBy":"id","orderDir":"asc","filter":{"title":"\u6761\u4ef6\u641c\u7d22","submitText":"","body":[{"type":"input-text","name":"keywords","placeholder":"\u901a\u8fc7\u5173\u952e\u5b57\u641c\u7d22","addOn":{"label":"\u641c\u7d22","type":"submit"}},{"type":"plain","text":"\u8fd9\u91cc\u7684\u8868\u5355\u9879\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a"}]},"bulkActions":[{"label":"\u6279\u91cf\u5220\u9664","actionType":"ajax","api":"delete:/amis/api/sample/${ids|raw}","confirmText":"\u786e\u5b9a\u8981\u6279\u91cf\u5220\u9664?"},{"label":"\u6279\u91cf\u4fee\u6539","actionType":"dialog","dialog":{"title":"\u6279\u91cf\u7f16\u8f91","name":"sample-bulk-edit","body":{"type":"form","api":"/amis/api/sample/bulkUpdate2","body":[{"type":"hidden","name":"ids"},{"type":"input-text","name":"engine","label":"Engine"}]}}}],"quickSaveApi":"/amis/api/sample/bulkUpdate","quickSaveItemApi":"/amis/api/sample/$id","filterTogglable":true,"headerToolbar":["filter-toggler","bulkActions",{"type":"tpl","tpl":"\u5b9a\u5236\u5185\u5bb9\u793a\u4f8b\uff1a\u5f53\u524d\u6709 ${count} \u6761\u6570\u636e\u3002","className":"v-middle"},{"type":"link","href":"https://www.baidu.com","body":"\u767e\u5ea6\u4e00\u4e0b","htmlTarget":"_parent","className":"v-middle"},{"type":"columns-toggler","align":"right"},{"type":"drag-toggler","align":"right"},{"type":"pagination","align":"right"}],"footerToolbar":["statistics","switch-per-page","pagination"],"columns":[{"name":"id","label":"ID","width":20,"sortable":true,"type":"text","toggled":true,"remark":"Bla bla Bla"},{"name":"engine","label":"Rendering engine","sortable":true,"searchable":true,"popOver":{"body":"Popover \u5185\u5bb9\uff1a${platform}","trigger":"hover"},"popOverEnableOn":"this.id === 1","type":"text","toggled":true},{"name":"browser","label":"Browser","sortable":true,"type":"text","toggled":false},{"name":"platform","label":"Platform(s)","popOver":{"body":"Popover \u5185\u5bb9\uff1a${platform}"},"sortable":true,"type":"text","toggled":true},{"name":"version","label":"Engine version","quickEdit":true,"type":"text","toggled":true,"filterable":{"options":[{"label":"4","value":"4"},{"label":"5","value":"5"},{"label":"6","value":"6"}]},"classNameExpr":"<%= data.version < 5 ? \'bg-danger\' : \'\' %>"},{"type":"text","name":"grade","label":"CSS grade","quickEdit":{"saveImmediately":true,"mode":"inline","type":"select","options":["A","B","C","D","X"]}},{"type":"operation","label":"\u64cd\u4f5c","width":100,"buttons":[{"type":"button","icon":"fa fa-eye","actionType":"dialog","tooltip":"\u67e5\u770b","dialog":{"title":"\u67e5\u770b","body":{"type":"form","body":[{"type":"static","name":"engine","label":"Engine"},{"type":"divider"},{"type":"static","name":"browser","label":"Browser"},{"type":"divider"},{"type":"static","name":"platform","label":"Platform(s)"},{"type":"divider"},{"type":"static","name":"version","label":"Engine version"},{"type":"divider"},{"type":"static","name":"grade","label":"CSS grade"},{"type":"divider"},{"type":"html","html":"<p>\u6dfb\u52a0\u5176\u4ed6 <span>Html \u7247\u6bb5</span> \u9700\u8981\u652f\u6301\u53d8\u91cf\u66ff\u6362\uff08todo\uff09.</p>"}]}}},{"type":"button","icon":"fa fa-pencil","tooltip":"\u7f16\u8f91","actionType":"drawer","drawer":{"position":"left","size":"lg","title":"\u7f16\u8f91","body":{"type":"form","name":"sample-edit-form","api":"/amis/api/sample/$id","body":[{"type":"input-text","name":"engine","label":"Engine","required":true},{"type":"divider"},{"type":"input-text","name":"browser","label":"Browser","required":true},{"type":"divider"},{"type":"input-text","name":"platform","label":"Platform(s)","required":true},{"type":"divider"},{"type":"input-text","name":"version","label":"Engine version"},{"type":"divider"},{"type":"select","name":"grade","label":"CSS grade","options":["A","B","C","D","X"]}]}}},{"type":"button","icon":"fa fa-times text-danger","actionType":"ajax","tooltip":"\u5220\u9664","confirmText":"\u60a8\u786e\u8ba4\u8981\u5220\u9664?","api":"delete:/amis/api/sample/$id"}],"toggled":true}]}}')}}]);