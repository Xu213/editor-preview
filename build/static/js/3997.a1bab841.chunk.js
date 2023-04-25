/*! For license information please see 3997.a1bab841.chunk.js.LICENSE.txt */
(self.webpackChunkeditor_preview=self.webpackChunkeditor_preview||[]).push([[3997],{13997:function(e,t){var r,i,n;i=[],r=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,i=t.IS_PAPA_WORKER||!1,n={},s=0,a={parse:function(r,i){var o=(i=i||{}).dynamicTyping||!1;if(w(o)&&(i.dynamicTypingFunction=o,o={}),i.dynamicTyping=o,i.transform=!!w(i.transform)&&i.transform,i.worker&&a.WORKERS_SUPPORTED){var h=function(){if(!a.WORKERS_SUPPORTED)return!1;var r,i,o=(r=t.URL||t.webkitURL||null,i=e.toString(),a.BLOB_URL||(a.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",i,")();"],{type:"text/javascript"})))),h=new t.Worker(o);return h.onmessage=_,h.id=s++,n[h.id]=h}();return h.userStep=i.step,h.userChunk=i.chunk,h.userComplete=i.complete,h.userError=i.error,i.step=w(i.step),i.chunk=w(i.chunk),i.complete=w(i.complete),i.error=w(i.error),delete i.worker,void h.postMessage({input:r,config:i,workerId:h.id})}var c=null;return a.NODE_STREAM_INPUT,"string"==typeof r?(r=function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}(r),c=i.download?new u(i):new d(i)):!0===r.readable&&w(r.read)&&w(r.on)?c=new l(i):(t.File&&r instanceof File||r instanceof Object)&&(c=new f(i)),c.stream(r)},unparse:function(e,t){var r=!1,i=!0,n=",",s="\r\n",o='"',h=o+o,u=!1,f=null,d=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(u=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");f=t.columns}void 0!==t.escapeChar&&(h=t.escapeChar+o),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(d=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var l=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return c(null,e,u);if("object"==typeof e[0])return c(f||Object.keys(e[0]),e,u)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||f),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),c(e.fields||[],e.data||[],u);throw new Error("Unable to serialize unrecognized input");function c(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,h=!Array.isArray(t[0]);if(o&&i){for(var u=0;u<e.length;u++)0<u&&(a+=n),a+=g(e[u],u);0<t.length&&(a+=s)}for(var f=0;f<t.length;f++){var d=o?e.length:t[f].length,l=!1,c=o?0===Object.keys(t[f]).length:0===t[f].length;if(r&&!o&&(l="greedy"===r?""===t[f].join("").trim():1===t[f].length&&0===t[f][0].length),"greedy"===r&&o){for(var p=[],_=0;_<d;_++){var m=h?e[_]:_;p.push(t[f][m])}l=""===p.join("").trim()}if(!l){for(var y=0;y<d;y++){0<y&&!c&&(a+=n);var v=o&&h?e[y]:y;a+=g(t[f][v],y)}f<t.length-1&&(!r||0<d&&!c)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var i=!1;d&&"string"==typeof e&&d.test(e)&&(e="'"+e,i=!0);var s=e.toString().replace(l,h);return(i=i||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(s,a.BAD_DELIMITERS)||-1<s.indexOf(n)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?o+s+o:s}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=g,a.ParserHandle=c,a.NetworkStreamer=u,a.FileStreamer=f,a.StringStreamer=d,a.ReadableStreamStreamer=l,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var r=e.config||{},i=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)i.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},r)})})),n(),this;function n(){if(0!==i.length){var t,r,n,h,u=i[0];if(w(e.before)){var f=e.before(u.file,u.inputElem);if("object"==typeof f){if("abort"===f.action)return t="AbortError",r=u.file,n=u.inputElem,h=f.reason,void(w(e.error)&&e.error({name:t},r,n,h));if("skip"===f.action)return void s();"object"==typeof f.config&&(u.instanceConfig=o.extend(u.instanceConfig,f.config))}else if("skip"===f)return void s()}var d=u.instanceConfig.complete;u.instanceConfig.complete=function(e){w(d)&&d(e,u.file,u.inputElem),s()},a.parse(u.file,u.instanceConfig)}else w(e.complete)&&e.complete()}function s(){i.splice(0,1),n()}}}function h(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new c(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var h=o.meta.cursor;this._finished||(this._partialLine=s.substring(h-this._baseIndex),this._baseIndex=h),o&&o.data&&(this._rowCount+=o.data.length);var u=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)t.postMessage({results:o,workerId:a.WORKER_ID,finished:u});else if(w(this._config.chunk)&&!r){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!u||!w(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),u||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){w(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),h.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var i in e)t.setRequestHeader(i,e[i])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function f(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),h.call(this,e);var i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);i||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function d(e){var t;h.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function l(e){h.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=k((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=k((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=k((function(){this._streamCleanUp(),i=!0,this._streamData("")}),this),this._streamCleanUp=k((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function c(e){var t,r,i,n=Math.pow(2,53),s=-n,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,h=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,u=this,f=0,d=0,l=!1,c=!1,_=[],m={data:[],errors:[],meta:{}};if(w(e.step)){var y=e.step;e.step=function(t){if(m=t,E())b();else{if(b(),0===m.data.length)return;f+=t.data.length,e.preview&&f>e.preview?r.abort():(m.data=m.data[0],y(m,u))}}}function k(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function b(){return m&&i&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines&&(m.data=m.data.filter((function(e){return!k(e)}))),E()&&function(){if(m)if(Array.isArray(m.data[0])){for(var t=0;E()&&t<m.data.length;t++)m.data[t].forEach(r);m.data.splice(0,1)}else m.data.forEach(r);function r(t,r){w(e.transformHeader)&&(t=e.transformHeader(t,r)),_.push(t)}}(),function(){if(!m||!e.header&&!e.dynamicTyping&&!e.transform)return m;function t(t,r){var i,n=e.header?{}:[];for(i=0;i<t.length;i++){var s=i,a=t[i];e.header&&(s=i>=_.length?"__parsed_extra":_[i]),e.transform&&(a=e.transform(a,s)),a=R(s,a),"__parsed_extra"===s?(n[s]=n[s]||[],n[s].push(a)):n[s]=a}return e.header&&(i>_.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+_.length+" fields but parsed "+i,d+r):i<_.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+_.length+" fields but parsed "+i,d+r)),n}var r=1;return!m.data.length||Array.isArray(m.data[0])?(m.data=m.data.map(t),r=m.data.length):m.data=t(m.data,0),e.header&&m.meta&&(m.meta.fields=_),d+=r,m}()}function E(){return e.header&&0===_.length}function R(t,r){return i=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[i]&&(e.dynamicTyping[i]=e.dynamicTypingFunction(i)),!0===(e.dynamicTyping[i]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<n)return!0}return!1}(r)?parseFloat(r):h.test(r)?new Date(r):""===r?null:r):r;var i}function C(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),m.errors.push(n)}this.parse=function(n,s,o){var h=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(n,h)),i=!1,e.delimiter)w(e.delimiter)&&(e.delimiter=e.delimiter(n),m.meta.delimiter=e.delimiter);else{var u=function(t,r,i,n,s){var o,h,u,f;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var d=0;d<s.length;d++){var l=s[d],c=0,p=0,_=0;u=void 0;for(var m=new g({comments:n,delimiter:l,newline:r,preview:10}).parse(t),y=0;y<m.data.length;y++)if(i&&k(m.data[y]))_++;else{var v=m.data[y].length;p+=v,void 0!==u?0<v&&(c+=Math.abs(v-u),u=v):u=v}0<m.data.length&&(p/=m.data.length-_),(void 0===h||c<=h)&&(void 0===f||f<p)&&1.99<p&&(h=c,o=l,f=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);u.successful?e.delimiter=u.bestDelimiter:(i=!0,e.delimiter=a.DefaultDelimiter),m.meta.delimiter=e.delimiter}var f=v(e);return e.preview&&e.header&&f.preview++,t=n,r=new g(f),m=r.parse(t,s,o),b(),l?{meta:{paused:!0}}:m||{meta:{paused:!1}}},this.paused=function(){return l},this.pause=function(){l=!0,r.abort(),t=w(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){u.streamer._halted?(l=!1,u.streamer.parseChunk(t,!0)):setTimeout(u.resume,3)},this.aborted=function(){return c},this.abort=function(){c=!0,r.abort(),m.meta.aborted=!0,w(e.complete)&&e.complete(m),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,r=(e=e||{}).delimiter,i=e.newline,n=e.comments,s=e.step,o=e.preview,h=e.fastMode,u=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=","),n===r)throw new Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==i&&"\r"!==i&&"\r\n"!==i&&(i="\n");var f=0,d=!1;this.parse=function(a,l,c){if("string"!=typeof a)throw new Error("Input must be a string");var g=a.length,_=r.length,m=i.length,y=n.length,v=w(s),k=[],b=[],E=[],R=f=0;if(!a)return Q();if(e.header&&!l){var C=a.split(i)[0].split(r),S=[],O={},x=!1;for(var I in C){var A=C[I];w(e.transformHeader)&&(A=e.transformHeader(A,I));var T=A,D=O[A]||0;for(0<D&&(x=!0,T=A+"_"+D),O[A]=D+1;S.includes(T);)T=T+"_"+D;S.push(T)}if(x){var L=a.split(i);L[0]=S.join(r),a=L.join(i)}}if(h||!1!==h&&-1===a.indexOf(t)){for(var F=a.split(i),j=0;j<F.length;j++){if(E=F[j],f+=E.length,j!==F.length-1)f+=i.length;else if(c)return Q();if(!n||E.substring(0,y)!==n){if(v){if(k=[],B(E.split(r)),J(),d)return Q()}else B(E.split(r));if(o&&o<=j)return k=k.slice(0,o),Q(!0)}}return Q()}for(var z=a.indexOf(r,f),M=a.indexOf(i,f),U=new RegExp(p(u)+p(t),"g"),P=a.indexOf(t,f);;)if(a[f]!==t)if(n&&0===E.length&&a.substring(f,f+y)===n){if(-1===M)return Q();f=M+m,M=a.indexOf(i,f),z=a.indexOf(r,f)}else if(-1!==z&&(z<M||-1===M))E.push(a.substring(f,z)),f=z+_,z=a.indexOf(r,f);else{if(-1===M)break;if(E.push(a.substring(f,M)),H(M+m),v&&(J(),d))return Q();if(o&&k.length>=o)return Q(!0)}else for(P=f,f++;;){if(-1===(P=a.indexOf(t,P+1)))return c||b.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:k.length,index:f}),W();if(P===g-1)return W(a.substring(f,P).replace(U,t));if(t!==u||a[P+1]!==u){if(t===u||0===P||a[P-1]!==u){-1!==z&&z<P+1&&(z=a.indexOf(r,P+1)),-1!==M&&M<P+1&&(M=a.indexOf(i,P+1));var q=K(-1===M?z:Math.min(z,M));if(a.substr(P+1+q,_)===r){E.push(a.substring(f,P).replace(U,t)),a[f=P+1+q+_]!==t&&(P=a.indexOf(t,f)),z=a.indexOf(r,f),M=a.indexOf(i,f);break}var N=K(M);if(a.substring(P+1+N,P+1+N+m)===i){if(E.push(a.substring(f,P).replace(U,t)),H(P+1+N+m),z=a.indexOf(r,f),P=a.indexOf(t,f),v&&(J(),d))return Q();if(o&&k.length>=o)return Q(!0);break}b.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:k.length,index:f}),P++}}else P++}return W();function B(e){k.push(e),R=f}function K(e){var t=0;if(-1!==e){var r=a.substring(P+1,e);r&&""===r.trim()&&(t=r.length)}return t}function W(e){return c||(void 0===e&&(e=a.substring(f)),E.push(e),f=g,B(E),v&&J()),Q()}function H(e){f=e,B(E),E=[],M=a.indexOf(i,f)}function Q(e){return{data:k,errors:b,meta:{delimiter:r,linebreak:i,aborted:d,truncated:!!e,cursor:R+(l||0)}}}function J(){s(Q()),k=[],b=[]}},this.abort=function(){d=!0},this.getCharIndex=function(){return f}}function _(e){var t=e.data,r=n[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){i=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(w(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!i);a++);delete t.results}else w(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!i&&m(t.workerId,t.results)}function m(e,t){var r=n[e];w(r.userComplete)&&r.userComplete(t),r.terminate(),delete n[e]}function y(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=v(e[r]);return t}function k(e,t){return function(){e.apply(t,arguments)}}function w(e){return"function"==typeof e}return i&&(t.onmessage=function(e){var r=e.data;if(void 0===a.WORKER_ID&&r&&(a.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var i=a.parse(r.input,r.config);i&&t.postMessage({workerId:a.WORKER_ID,results:i,finished:!0})}}),(u.prototype=Object.create(h.prototype)).constructor=u,(f.prototype=Object.create(h.prototype)).constructor=f,(d.prototype=Object.create(d.prototype)).constructor=d,(l.prototype=Object.create(h.prototype)).constructor=l,a},void 0===(n="function"===typeof r?r.apply(t,i):r)||(e.exports=n)}}]);