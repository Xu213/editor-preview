"use strict";var Worker,workerAdd=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Worker=require("worker_threads").Worker}catch(e){}var node_worker_1={};node_worker_1.default=Worker?function(t,n,e,r,i){var s=!1,o=new Worker(t+workerAdd,{eval:!0}).on("error",(function(t){return i(t,null)})).on("message",(function(t){return i(null,t)})).on("exit",(function(t){t&&!s&&i(new Error("exited with code "+t),null)}));return o.postMessage(e,r),o.terminate=function(){return s=!0,Worker.prototype.terminate.call(o)},o}:function(t,n,e,r,i){setImmediate((function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)}));var s=function(){};return{terminate:s,postMessage:s}};var u8=Uint8Array,u16=Uint16Array,u32=Uint32Array,fleb=new u8([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fdeb=new u8([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),clim=new u8([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),freb=function(t,n){for(var e=new u16(31),r=0;r<31;++r)e[r]=n+=1<<t[r-1];var i=new u32(e[30]);for(r=1;r<30;++r)for(var s=e[r];s<e[r+1];++s)i[s]=s-e[r]<<5|r;return[e,i]},_a=freb(fleb,2),fl=_a[0],revfl=_a[1];fl[28]=258,revfl[258]=28;for(var _b=freb(fdeb,0),fd=_b[0],revfd=_b[1],rev=new u16(32768),i=0;i<32768;++i){var x=(43690&i)>>>1|(21845&i)<<1;x=(61680&(x=(52428&x)>>>2|(13107&x)<<2))>>>4|(3855&x)<<4,rev[i]=((65280&x)>>>8|(255&x)<<8)>>>1}var hMap=function(t,n,e){for(var r=t.length,i=0,s=new u16(n);i<r;++i)t[i]&&++s[t[i]-1];var o,a=new u16(n);for(i=0;i<n;++i)a[i]=a[i-1]+s[i-1]<<1;if(e){o=new u16(1<<n);var f=15-n;for(i=0;i<r;++i)if(t[i])for(var u=i<<4|t[i],l=n-t[i],c=a[t[i]-1]++<<l,h=c|(1<<l)-1;c<=h;++c)o[rev[c]>>>f]=u}else for(o=new u16(r),i=0;i<r;++i)t[i]&&(o[i]=rev[a[t[i]-1]++]>>>15-t[i]);return o},flt=new u8(288);for(i=0;i<144;++i)flt[i]=8;for(i=144;i<256;++i)flt[i]=9;for(i=256;i<280;++i)flt[i]=7;for(i=280;i<288;++i)flt[i]=8;var fdt=new u8(32);for(i=0;i<32;++i)fdt[i]=5;var flm=hMap(flt,9,0),flrm=hMap(flt,9,1),fdm=hMap(fdt,5,0),fdrm=hMap(fdt,5,1),max=function(t){for(var n=t[0],e=1;e<t.length;++e)t[e]>n&&(n=t[e]);return n},bits=function(t,n,e){var r=n/8|0;return(t[r]|t[r+1]<<8)>>(7&n)&e},bits16=function(t,n){var e=n/8|0;return(t[e]|t[e+1]<<8|t[e+2]<<16)>>(7&n)},shft=function(t){return(t+7)/8|0},slc=function(t,n,e){(null==n||n<0)&&(n=0),(null==e||e>t.length)&&(e=t.length);var r=new(2==t.BYTES_PER_ELEMENT?u16:4==t.BYTES_PER_ELEMENT?u32:u8)(e-n);return r.set(t.subarray(n,e)),r};exports.FlateErrorCode={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14};var ec=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],err=function(t,n,e){var r=new Error(n||ec[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,err),!e)throw r;return r},inflt=function(t,n,e){var r=t.length;if(!r||e&&e.f&&!e.l)return n||new u8(0);var i=!n||e,s=!e||e.i;e||(e={}),n||(n=new u8(3*r));var o=function(t){var e=n.length;if(t>e){var r=new u8(Math.max(2*e,t));r.set(n),n=r}},a=e.f||0,f=e.p||0,u=e.b||0,l=e.l,c=e.d,h=e.m,p=e.n,v=8*r;do{if(!l){a=bits(t,f,1);var d=bits(t,f+1,3);if(f+=3,!d){var b=t[(D=shft(f)+4)-4]|t[D-3]<<8,y=D+b;if(y>r){s&&err(0);break}i&&o(u+b),n.set(t.subarray(D,y),u),e.b=u+=b,e.p=f=8*y,e.f=a;continue}if(1==d)l=flrm,c=fdrm,h=9,p=5;else if(2==d){var g=bits(t,f,31)+257,m=bits(t,f+10,15)+4,w=g+bits(t,f+5,31)+1;f+=14;for(var z=new u8(w),x=new u8(19),S=0;S<m;++S)x[clim[S]]=bits(t,f+3*S,7);f+=3*m;var k=max(x),A=(1<<k)-1,U=hMap(x,k,1);for(S=0;S<w;){var D,T=U[bits(t,f,A)];if(f+=15&T,(D=T>>>4)<16)z[S++]=D;else{var I=0,M=0;for(16==D?(M=3+bits(t,f,3),f+=2,I=z[S-1]):17==D?(M=3+bits(t,f,7),f+=3):18==D&&(M=11+bits(t,f,127),f+=7);M--;)z[S++]=I}}var Z=z.subarray(0,g),C=z.subarray(g);h=max(Z),p=max(C),l=hMap(Z,h,1),c=hMap(C,p,1)}else err(1);if(f>v){s&&err(0);break}}i&&o(u+131072);for(var E=(1<<h)-1,_=(1<<p)-1,G=f;;G=f){var F=(I=l[bits16(t,f)&E])>>>4;if((f+=15&I)>v){s&&err(0);break}if(I||err(2),F<256)n[u++]=F;else{if(256==F){G=f,l=null;break}var P=F-254;if(F>264){var O=fleb[S=F-257];P=bits(t,f,(1<<O)-1)+fl[S],f+=O}var L=c[bits16(t,f)&_],N=L>>>4;L||err(3),f+=15&L;C=fd[N];if(N>3){O=fdeb[N];C+=bits16(t,f)&(1<<O)-1,f+=O}if(f>v){s&&err(0);break}i&&o(u+131072);for(var W=u+P;u<W;u+=4)n[u]=n[u-C],n[u+1]=n[u+1-C],n[u+2]=n[u+2-C],n[u+3]=n[u+3-C];u=W}}e.l=l,e.p=G,e.b=u,e.f=a,l&&(a=1,e.m=h,e.d=c,e.n=p)}while(!a);return u==n.length?n:slc(n,0,u)},wbits=function(t,n,e){e<<=7&n;var r=n/8|0;t[r]|=e,t[r+1]|=e>>>8},wbits16=function(t,n,e){e<<=7&n;var r=n/8|0;t[r]|=e,t[r+1]|=e>>>8,t[r+2]|=e>>>16},hTree=function(t,n){for(var e=[],r=0;r<t.length;++r)t[r]&&e.push({s:r,f:t[r]});var i=e.length,s=e.slice();if(!i)return[et,0];if(1==i){var o=new u8(e[0].s+1);return o[e[0].s]=1,[o,1]}e.sort((function(t,n){return t.f-n.f})),e.push({s:-1,f:25001});var a=e[0],f=e[1],u=0,l=1,c=2;for(e[0]={s:-1,f:a.f+f.f,l:a,r:f};l!=i-1;)a=e[e[u].f<e[c].f?u++:c++],f=e[u!=l&&e[u].f<e[c].f?u++:c++],e[l++]={s:-1,f:a.f+f.f,l:a,r:f};var h=s[0].s;for(r=1;r<i;++r)s[r].s>h&&(h=s[r].s);var p=new u16(h+1),v=ln(e[l-1],p,0);if(v>n){r=0;var d=0,b=v-n,y=1<<b;for(s.sort((function(t,n){return p[n.s]-p[t.s]||t.f-n.f}));r<i;++r){var g=s[r].s;if(!(p[g]>n))break;d+=y-(1<<v-p[g]),p[g]=n}for(d>>>=b;d>0;){var m=s[r].s;p[m]<n?d-=1<<n-p[m]++-1:++r}for(;r>=0&&d;--r){var w=s[r].s;p[w]==n&&(--p[w],++d)}v=n}return[new u8(p),v]},ln=function(t,n,e){return-1==t.s?Math.max(ln(t.l,n,e+1),ln(t.r,n,e+1)):n[t.s]=e},lc=function(t){for(var n=t.length;n&&!t[--n];);for(var e=new u16(++n),r=0,i=t[0],s=1,o=function(t){e[r++]=t},a=1;a<=n;++a)if(t[a]==i&&a!=n)++s;else{if(!i&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(i),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(i);s=1,i=t[a]}return[e.subarray(0,r),n]},clen=function(t,n){for(var e=0,r=0;r<n.length;++r)e+=t[r]*n[r];return e},wfblk=function(t,n,e){var r=e.length,i=shft(n+2);t[i]=255&r,t[i+1]=r>>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<r;++s)t[i+s+4]=e[s];return 8*(i+4+r)},wblk=function(t,n,e,r,i,s,o,a,f,u,l){wbits(n,l++,e),++i[256];for(var c=hTree(i,15),h=c[0],p=c[1],v=hTree(s,15),d=v[0],b=v[1],y=lc(h),g=y[0],m=y[1],w=lc(d),z=w[0],x=w[1],S=new u16(19),k=0;k<g.length;++k)S[31&g[k]]++;for(k=0;k<z.length;++k)S[31&z[k]]++;for(var A=hTree(S,7),U=A[0],D=A[1],T=19;T>4&&!U[clim[T-1]];--T);var I,M,Z,C,E=u+5<<3,_=clen(i,flt)+clen(s,fdt)+o,G=clen(i,h)+clen(s,d)+o+14+3*T+clen(S,U)+(2*S[16]+3*S[17]+7*S[18]);if(E<=_&&E<=G)return wfblk(n,l,t.subarray(f,f+u));if(wbits(n,l,1+(G<_)),l+=2,G<_){I=hMap(h,p,0),M=h,Z=hMap(d,b,0),C=d;var F=hMap(U,D,0);wbits(n,l,m-257),wbits(n,l+5,x-1),wbits(n,l+10,T-4),l+=14;for(k=0;k<T;++k)wbits(n,l+3*k,U[clim[k]]);l+=3*T;for(var P=[g,z],O=0;O<2;++O){var L=P[O];for(k=0;k<L.length;++k){var N=31&L[k];wbits(n,l,F[N]),l+=U[N],N>15&&(wbits(n,l,L[k]>>>5&127),l+=L[k]>>>12)}}}else I=flm,M=flt,Z=fdm,C=fdt;for(k=0;k<a;++k)if(r[k]>255){N=r[k]>>>18&31;wbits16(n,l,I[N+257]),l+=M[N+257],N>7&&(wbits(n,l,r[k]>>>23&31),l+=fleb[N]);var W=31&r[k];wbits16(n,l,Z[W]),l+=C[W],W>3&&(wbits16(n,l,r[k]>>>5&8191),l+=fdeb[W])}else wbits16(n,l,I[r[k]]),l+=M[r[k]];return wbits16(n,l,I[256]),l+M[256]},deo=new u32([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),et=new u8(0),dflt=function(t,n,e,r,i,s){var o=t.length,a=new u8(r+o+5*(1+Math.ceil(o/7e3))+i),f=a.subarray(r,a.length-i),u=0;if(!n||o<8)for(var l=0;l<=o;l+=65535){var c=l+65535;c>=o&&(f[u>>3]=s),u=wfblk(f,u+1,t.subarray(l,c))}else{for(var h=deo[n-1],p=h>>>13,v=8191&h,d=(1<<e)-1,b=new u16(32768),y=new u16(d+1),g=Math.ceil(e/3),m=2*g,w=function(n){return(t[n]^t[n+1]<<g^t[n+2]<<m)&d},z=new u32(25e3),x=new u16(288),S=new u16(32),k=0,A=0,U=(l=0,0),D=0,T=0;l<o;++l){var I=w(l),M=32767&l,Z=y[I];if(b[M]=Z,y[I]=M,D<=l){var C=o-l;if((k>7e3||U>24576)&&C>423){u=wblk(t,f,0,z,x,S,A,U,T,l-T,u),U=k=A=0,T=l;for(var E=0;E<286;++E)x[E]=0;for(E=0;E<30;++E)S[E]=0}var _=2,G=0,F=v,P=M-Z&32767;if(C>2&&I==w(l-P))for(var O=Math.min(p,C)-1,L=Math.min(32767,l),N=Math.min(258,C);P<=L&&--F&&M!=Z;){if(t[l+_]==t[l+_-P]){for(var W=0;W<N&&t[l+W]==t[l+W-P];++W);if(W>_){if(_=W,G=P,W>O)break;var q=Math.min(P,W-2),B=0;for(E=0;E<q;++E){var H=l-P+E+32768&32767,Y=H-b[H]+32768&32767;Y>B&&(B=Y,Z=H)}}}P+=(M=Z)-(Z=b[M])+32768&32767}if(G){z[U++]=268435456|revfl[_]<<18|revfd[G];var R=31&revfl[_],j=31&revfd[G];A+=fleb[R]+fdeb[j],++x[257+R],++S[j],D=l+_,++k}else z[U++]=t[l],++x[t[l]]}}u=wblk(t,f,s,z,x,S,A,U,T,l-T,u),!s&&7&u&&(u=wfblk(f,u+1,et))}return slc(a,0,r+shft(u)+i)},crct=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var e=n,r=9;--r;)e=(1&e&&-306674912)^e>>>1;t[n]=e}return t}(),crc=function(){var t=-1;return{p:function(n){for(var e=t,r=0;r<n.length;++r)e=crct[255&e^n[r]]^e>>>8;t=e},d:function(){return~t}}},adler=function(){var t=1,n=0;return{p:function(e){for(var r=t,i=n,s=0|e.length,o=0;o!=s;){for(var a=Math.min(o+2655,s);o<a;++o)i+=r+=e[o];r=(65535&r)+15*(r>>16),i=(65535&i)+15*(i>>16)}t=r,n=i},d:function(){return(255&(t%=65521))<<24|t>>>8<<16|(255&(n%=65521))<<8|n>>>8}}},dopt=function(t,n,e,r,i){return dflt(t,null==n.level?6:n.level,null==n.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(t.length)))):12+n.mem,e,r,!i)},mrg=function(t,n){var e={};for(var r in t)e[r]=t[r];for(var r in n)e[r]=n[r];return e},wcln=function(t,n,e){for(var r=t(),i=t.toString(),s=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<r.length;++o){var a=r[o],f=s[o];if("function"==typeof a){n+=";"+f+"=";var u=a.toString();if(a.prototype)if(-1!=u.indexOf("[native code]")){var l=u.indexOf(" ",8)+1;n+=u.slice(l,u.indexOf("(",l))}else for(var c in n+=u,a.prototype)n+=";"+f+".prototype."+c+"="+a.prototype[c].toString();else n+=u}else e[f]=a}return[n,e]},ch=[],cbfs=function(t){var n=[];for(var e in t)t[e].buffer&&n.push((t[e]=new t[e].constructor(t[e])).buffer);return n},wrkr=function(t,n,e,r){var i;if(!ch[e]){for(var s="",o={},a=t.length-1,f=0;f<a;++f)s=(i=wcln(t[f],s,o))[0],o=i[1];ch[e]=wcln(t[a],s,o)}var u=mrg({},ch[e][1]);return node_worker_1.default(ch[e][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",e,u,cbfs(u),r)},bInflt=function(){return[u8,u16,u32,fleb,fdeb,clim,fl,fd,flrm,fdrm,rev,ec,hMap,max,bits,bits16,shft,slc,err,inflt,inflateSync,pbf,gu8]},bDflt=function(){return[u8,u16,u32,fleb,fdeb,clim,revfl,revfd,flm,flt,fdm,fdt,rev,deo,et,hMap,wbits,wbits16,hTree,ln,lc,clen,wfblk,wblk,shft,slc,dflt,dopt,deflateSync,pbf]},gze=function(){return[gzh,gzhl,wbytes,crc,crct]},guze=function(){return[gzs,gzl]},zle=function(){return[zlh,wbytes,adler]},zule=function(){return[zlv]},pbf=function(t){return postMessage(t,[t.buffer])},gu8=function(t){return t&&t.size&&new u8(t.size)},cbify=function(t,n,e,r,i,s){var o=wrkr(e,r,i,(function(t,n){o.terminate(),s(t,n)}));return o.postMessage([t,n],n.consume?[t.buffer]:[]),function(){o.terminate()}},astrm=function(t){return t.ondata=function(t,n){return postMessage([t,n],[t.buffer])},function(n){return t.push(n.data[0],n.data[1])}},astrmify=function(t,n,e,r,i){var s,o=wrkr(t,r,i,(function(t,e){t?(o.terminate(),n.ondata.call(n,t)):(e[1]&&o.terminate(),n.ondata.call(n,t,e[0],e[1]))}));o.postMessage(e),n.push=function(t,e){n.ondata||err(5),s&&n.ondata(err(4,0,1),null,!!e),o.postMessage([t,s=e],[t.buffer])},n.terminate=function(){o.terminate()}},b2=function(t,n){return t[n]|t[n+1]<<8},b4=function(t,n){return(t[n]|t[n+1]<<8|t[n+2]<<16|t[n+3]<<24)>>>0},b8=function(t,n){return b4(t,n)+4294967296*b4(t,n+4)},wbytes=function(t,n,e){for(;e;++n)t[n]=e,e>>>=8},gzh=function(t,n){var e=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&wbytes(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),e){t[3]=8;for(var r=0;r<=e.length;++r)t[r+10]=e.charCodeAt(r)}},gzs=function(t){31==t[0]&&139==t[1]&&8==t[2]||err(6,"invalid gzip data");var n=t[3],e=10;4&n&&(e+=t[10]|2+(t[11]<<8));for(var r=(n>>3&1)+(n>>4&1);r>0;r-=!t[e++]);return e+(2&n)},gzl=function(t){var n=t.length;return(t[n-4]|t[n-3]<<8|t[n-2]<<16|t[n-1]<<24)>>>0},gzhl=function(t){return 10+(t.filename&&t.filename.length+1||0)},zlh=function(t,n){var e=n.level,r=0==e?0:e<6?1:9==e?3:2;t[0]=120,t[1]=r<<6|(r?32-2*r:1)},zlv=function(t){(8!=(15&t[0])||t[0]>>>4>7||(t[0]<<8|t[1])%31)&&err(6,"invalid zlib data"),32&t[1]&&err(6,"invalid zlib data: preset dictionaries not supported")};function AsyncCmpStrm(t,n){return n||"function"!=typeof t||(n=t,t={}),this.ondata=n,t}var Deflate=function(){function t(t,n){n||"function"!=typeof t||(n=t,t={}),this.ondata=n,this.o=t||{}}return t.prototype.p=function(t,n){this.ondata(dopt(t,this.o,0,0,!n),n)},t.prototype.push=function(t,n){this.ondata||err(5),this.d&&err(4),this.d=n,this.p(t,n||!1)},t}();exports.Deflate=Deflate;var AsyncDeflate=function(){return function(t,n){astrmify([bDflt,function(){return[astrm,Deflate]}],this,AsyncCmpStrm.call(this,t,n),(function(t){var n=new Deflate(t.data);onmessage=astrm(n)}),6)}}();function deflate(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),cbify(t,n,[bDflt],(function(t){return pbf(deflateSync(t.data[0],t.data[1]))}),0,e)}function deflateSync(t,n){return dopt(t,n||{},0,0)}exports.AsyncDeflate=AsyncDeflate,exports.deflate=deflate,exports.deflateSync=deflateSync;var Inflate=function(){function t(t){this.s={},this.p=new u8(0),this.ondata=t}return t.prototype.e=function(t){this.ondata||err(5),this.d&&err(4);var n=this.p.length,e=new u8(n+t.length);e.set(this.p),e.set(t,n),this.p=e},t.prototype.c=function(t){this.d=this.s.i=t||!1;var n=this.s.b,e=inflt(this.p,this.o,this.s);this.ondata(slc(e,n,this.s.b),this.d),this.o=slc(e,this.s.b-32768),this.s.b=this.o.length,this.p=slc(this.p,this.s.p/8|0),this.s.p&=7},t.prototype.push=function(t,n){this.e(t),this.c(n)},t}();exports.Inflate=Inflate;var AsyncInflate=function(){return function(t){this.ondata=t,astrmify([bInflt,function(){return[astrm,Inflate]}],this,0,(function(){var t=new Inflate;onmessage=astrm(t)}),7)}}();function inflate(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),cbify(t,n,[bInflt],(function(t){return pbf(inflateSync(t.data[0],gu8(t.data[1])))}),1,e)}function inflateSync(t,n){return inflt(t,n)}exports.AsyncInflate=AsyncInflate,exports.inflate=inflate,exports.inflateSync=inflateSync;var Gzip=function(){function t(t,n){this.c=crc(),this.l=0,this.v=1,Deflate.call(this,t,n)}return t.prototype.push=function(t,n){Deflate.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){this.c.p(t),this.l+=t.length;var e=dopt(t,this.o,this.v&&gzhl(this.o),n&&8,!n);this.v&&(gzh(e,this.o),this.v=0),n&&(wbytes(e,e.length-8,this.c.d()),wbytes(e,e.length-4,this.l)),this.ondata(e,n)},t}();exports.Gzip=Gzip,exports.Compress=Gzip;var AsyncGzip=function(){return function(t,n){astrmify([bDflt,gze,function(){return[astrm,Deflate,Gzip]}],this,AsyncCmpStrm.call(this,t,n),(function(t){var n=new Gzip(t.data);onmessage=astrm(n)}),8)}}();function gzip(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),cbify(t,n,[bDflt,gze,function(){return[gzipSync]}],(function(t){return pbf(gzipSync(t.data[0],t.data[1]))}),2,e)}function gzipSync(t,n){n||(n={});var e=crc(),r=t.length;e.p(t);var i=dopt(t,n,gzhl(n),8),s=i.length;return gzh(i,n),wbytes(i,s-8,e.d()),wbytes(i,s-4,r),i}exports.AsyncGzip=AsyncGzip,exports.AsyncCompress=AsyncGzip,exports.gzip=gzip,exports.compress=gzip,exports.gzipSync=gzipSync,exports.compressSync=gzipSync;var Gunzip=function(){function t(t){this.v=1,Inflate.call(this,t)}return t.prototype.push=function(t,n){if(Inflate.prototype.e.call(this,t),this.v){var e=this.p.length>3?gzs(this.p):4;if(e>=this.p.length&&!n)return;this.p=this.p.subarray(e),this.v=0}n&&(this.p.length<8&&err(6,"invalid gzip data"),this.p=this.p.subarray(0,-8)),Inflate.prototype.c.call(this,n)},t}();exports.Gunzip=Gunzip;var AsyncGunzip=function(){return function(t){this.ondata=t,astrmify([bInflt,guze,function(){return[astrm,Inflate,Gunzip]}],this,0,(function(){var t=new Gunzip;onmessage=astrm(t)}),9)}}();function gunzip(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),cbify(t,n,[bInflt,guze,function(){return[gunzipSync]}],(function(t){return pbf(gunzipSync(t.data[0]))}),3,e)}function gunzipSync(t,n){return inflt(t.subarray(gzs(t),-8),n||new u8(gzl(t)))}exports.AsyncGunzip=AsyncGunzip,exports.gunzip=gunzip,exports.gunzipSync=gunzipSync;var Zlib=function(){function t(t,n){this.c=adler(),this.v=1,Deflate.call(this,t,n)}return t.prototype.push=function(t,n){Deflate.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){this.c.p(t);var e=dopt(t,this.o,this.v&&2,n&&4,!n);this.v&&(zlh(e,this.o),this.v=0),n&&wbytes(e,e.length-4,this.c.d()),this.ondata(e,n)},t}();exports.Zlib=Zlib;var AsyncZlib=function(){return function(t,n){astrmify([bDflt,zle,function(){return[astrm,Deflate,Zlib]}],this,AsyncCmpStrm.call(this,t,n),(function(t){var n=new Zlib(t.data);onmessage=astrm(n)}),10)}}();function zlib(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),cbify(t,n,[bDflt,zle,function(){return[zlibSync]}],(function(t){return pbf(zlibSync(t.data[0],t.data[1]))}),4,e)}function zlibSync(t,n){n||(n={});var e=adler();e.p(t);var r=dopt(t,n,2,4);return zlh(r,n),wbytes(r,r.length-4,e.d()),r}exports.AsyncZlib=AsyncZlib,exports.zlib=zlib,exports.zlibSync=zlibSync;var Unzlib=function(){function t(t){this.v=1,Inflate.call(this,t)}return t.prototype.push=function(t,n){if(Inflate.prototype.e.call(this,t),this.v){if(this.p.length<2&&!n)return;this.p=this.p.subarray(2),this.v=0}n&&(this.p.length<4&&err(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),Inflate.prototype.c.call(this,n)},t}();exports.Unzlib=Unzlib;var AsyncUnzlib=function(){return function(t){this.ondata=t,astrmify([bInflt,zule,function(){return[astrm,Inflate,Unzlib]}],this,0,(function(){var t=new Unzlib;onmessage=astrm(t)}),11)}}();function unzlib(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),cbify(t,n,[bInflt,zule,function(){return[unzlibSync]}],(function(t){return pbf(unzlibSync(t.data[0],gu8(t.data[1])))}),5,e)}function unzlibSync(t,n){return inflt((zlv(t),t.subarray(2,-4)),n)}exports.AsyncUnzlib=AsyncUnzlib,exports.unzlib=unzlib,exports.unzlibSync=unzlibSync;var Decompress=function(){function t(t){this.G=Gunzip,this.I=Inflate,this.Z=Unzlib,this.ondata=t}return t.prototype.push=function(t,n){if(this.ondata||err(5),this.s)this.s.push(t,n);else{if(this.p&&this.p.length){var e=new u8(this.p.length+t.length);e.set(this.p),e.set(t,this.p.length)}else this.p=t;if(this.p.length>2){var r=this,i=function(){r.ondata.apply(r,arguments)};this.s=31==this.p[0]&&139==this.p[1]&&8==this.p[2]?new this.G(i):8!=(15&this.p[0])||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(i):new this.Z(i),this.s.push(this.p,n),this.p=null}}},t}();exports.Decompress=Decompress;var AsyncDecompress=function(){function t(t){this.G=AsyncGunzip,this.I=AsyncInflate,this.Z=AsyncUnzlib,this.ondata=t}return t.prototype.push=function(t,n){Decompress.prototype.push.call(this,t,n)},t}();function decompress(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),31==t[0]&&139==t[1]&&8==t[2]?gunzip(t,n,e):8!=(15&t[0])||t[0]>>4>7||(t[0]<<8|t[1])%31?inflate(t,n,e):unzlib(t,n,e)}function decompressSync(t,n){return 31==t[0]&&139==t[1]&&8==t[2]?gunzipSync(t,n):8!=(15&t[0])||t[0]>>4>7||(t[0]<<8|t[1])%31?inflateSync(t,n):unzlibSync(t,n)}exports.AsyncDecompress=AsyncDecompress,exports.decompress=decompress,exports.decompressSync=decompressSync;var fltn=function(t,n,e,r){for(var i in t){var s=t[i],o=n+i,a=r;Array.isArray(s)&&(a=mrg(r,s[1]),s=s[0]),s instanceof u8?e[o]=[s,a]:(e[o+="/"]=[new u8(0),a],fltn(s,o,e,r))}},te="undefined"!=typeof TextEncoder&&new TextEncoder,td="undefined"!=typeof TextDecoder&&new TextDecoder,tds=0;try{td.decode(et,{stream:!0}),tds=1}catch(e){}var dutf8=function(t){for(var n="",e=0;;){var r=t[e++],i=(r>127)+(r>223)+(r>239);if(e+i>t.length)return[n,slc(t,e-1)];i?3==i?(r=((15&r)<<18|(63&t[e++])<<12|(63&t[e++])<<6|63&t[e++])-65536,n+=String.fromCharCode(55296|r>>10,56320|1023&r)):n+=1&i?String.fromCharCode((31&r)<<6|63&t[e++]):String.fromCharCode((15&r)<<12|(63&t[e++])<<6|63&t[e++]):n+=String.fromCharCode(r)}},DecodeUTF8=function(){function t(t){this.ondata=t,tds?this.t=new TextDecoder:this.p=et}return t.prototype.push=function(t,n){if(this.ondata||err(5),n=!!n,this.t)return this.ondata(this.t.decode(t,{stream:!0}),n),void(n&&(this.t.decode().length&&err(8),this.t=null));this.p||err(4);var e=new u8(this.p.length+t.length);e.set(this.p),e.set(t,this.p.length);var r=dutf8(e),i=r[0],s=r[1];n?(s.length&&err(8),this.p=null):this.p=s,this.ondata(i,n)},t}();exports.DecodeUTF8=DecodeUTF8;var EncodeUTF8=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||err(5),this.d&&err(4),this.ondata(strToU8(t),this.d=n||!1)},t}();function strToU8(t,n){if(n){for(var e=new u8(t.length),r=0;r<t.length;++r)e[r]=t.charCodeAt(r);return e}if(te)return te.encode(t);var i=t.length,s=new u8(t.length+(t.length>>1)),o=0,a=function(t){s[o++]=t};for(r=0;r<i;++r){if(o+5>s.length){var f=new u8(o+8+(i-r<<1));f.set(s),s=f}var u=t.charCodeAt(r);u<128||n?a(u):u<2048?(a(192|u>>6),a(128|63&u)):u>55295&&u<57344?(a(240|(u=65536+(1047552&u)|1023&t.charCodeAt(++r))>>18),a(128|u>>12&63),a(128|u>>6&63),a(128|63&u)):(a(224|u>>12),a(128|u>>6&63),a(128|63&u))}return slc(s,0,o)}function strFromU8(t,n){if(n){for(var e="",r=0;r<t.length;r+=16384)e+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return e}if(td)return td.decode(t);var i=dutf8(t),s=i[0];return i[1].length&&err(8),s}exports.EncodeUTF8=EncodeUTF8,exports.strToU8=strToU8,exports.strFromU8=strFromU8;var dbf=function(t){return 1==t?3:t<6?2:9==t?1:0},slzh=function(t,n){return n+30+b2(t,n+26)+b2(t,n+28)},zh=function(t,n,e){var r=b2(t,n+28),i=strFromU8(t.subarray(n+46,n+46+r),!(2048&b2(t,n+8))),s=n+46+r,o=b4(t,n+20),a=e&&4294967295==o?z64e(t,s):[o,b4(t,n+24),b4(t,n+42)],f=a[0],u=a[1],l=a[2];return[b2(t,n+10),f,u,i,s+b2(t,n+30)+b2(t,n+32),l]},z64e=function(t,n){for(;1!=b2(t,n);n+=4+b2(t,n+2));return[b8(t,n+12),b8(t,n+4),b8(t,n+20)]},exfl=function(t){var n=0;if(t)for(var e in t){var r=t[e].length;r>65535&&err(9),n+=r+4}return n},wzh=function(t,n,e,r,i,s,o,a){var f=r.length,u=e.extra,l=a&&a.length,c=exfl(u);wbytes(t,n,null!=o?33639248:67324752),n+=4,null!=o&&(t[n++]=20,t[n++]=e.os),t[n]=20,n+=2,t[n++]=e.flag<<1|(s<0&&8),t[n++]=i&&8,t[n++]=255&e.compression,t[n++]=e.compression>>8;var h=new Date(null==e.mtime?Date.now():e.mtime),p=h.getFullYear()-1980;if((p<0||p>119)&&err(10),wbytes(t,n,p<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>>1),n+=4,-1!=s&&(wbytes(t,n,e.crc),wbytes(t,n+4,s<0?-s-2:s),wbytes(t,n+8,e.size)),wbytes(t,n+12,f),wbytes(t,n+14,c),n+=16,null!=o&&(wbytes(t,n,l),wbytes(t,n+6,e.attrs),wbytes(t,n+10,o),n+=14),t.set(r,n),n+=f,c)for(var v in u){var d=u[v],b=d.length;wbytes(t,n,+v),wbytes(t,n+2,b),t.set(d,n+4),n+=4+b}return l&&(t.set(a,n),n+=l),n},wzf=function(t,n,e,r,i){wbytes(t,n,101010256),wbytes(t,n+8,e),wbytes(t,n+10,e),wbytes(t,n+12,r),wbytes(t,n+16,i)},ZipPassThrough=function(){function t(t){this.filename=t,this.c=crc(),this.size=0,this.compression=0}return t.prototype.process=function(t,n){this.ondata(null,t,n)},t.prototype.push=function(t,n){this.ondata||err(5),this.c.p(t),this.size+=t.length,n&&(this.crc=this.c.d()),this.process(t,n||!1)},t}();exports.ZipPassThrough=ZipPassThrough;var ZipDeflate=function(){function t(t,n){var e=this;n||(n={}),ZipPassThrough.call(this,t),this.d=new Deflate(n,(function(t,n){e.ondata(null,t,n)})),this.compression=8,this.flag=dbf(n.level)}return t.prototype.process=function(t,n){try{this.d.push(t,n)}catch(e){this.ondata(e,null,n)}},t.prototype.push=function(t,n){ZipPassThrough.prototype.push.call(this,t,n)},t}();exports.ZipDeflate=ZipDeflate;var AsyncZipDeflate=function(){function t(t,n){var e=this;n||(n={}),ZipPassThrough.call(this,t),this.d=new AsyncDeflate(n,(function(t,n,r){e.ondata(t,n,r)})),this.compression=8,this.flag=dbf(n.level),this.terminate=this.d.terminate}return t.prototype.process=function(t,n){this.d.push(t,n)},t.prototype.push=function(t,n){ZipPassThrough.prototype.push.call(this,t,n)},t}();exports.AsyncZipDeflate=AsyncZipDeflate;var Zip=function(){function t(t){this.ondata=t,this.u=[],this.d=1}return t.prototype.add=function(t){var n=this;if(this.ondata||err(5),2&this.d)this.ondata(err(4+8*(1&this.d),0,1),null,!1);else{var e=strToU8(t.filename),r=e.length,i=t.comment,s=i&&strToU8(i),o=r!=t.filename.length||s&&i.length!=s.length,a=r+exfl(t.extra)+30;r>65535&&this.ondata(err(11,0,1),null,!1);var f=new u8(a);wzh(f,0,t,e,o,-1);var u=[f],l=function(){for(var t=0,e=u;t<e.length;t++){var r=e[t];n.ondata(null,r,!1)}u=[]},c=this.d;this.d=0;var h=this.u.length,p=mrg(t,{f:e,u:o,o:s,t:function(){t.terminate&&t.terminate()},r:function(){if(l(),c){var t=n.u[h+1];t?t.r():n.d=1}c=1}}),v=0;t.ondata=function(e,r,i){if(e)n.ondata(e,r,i),n.terminate();else if(v+=r.length,u.push(r),i){var s=new u8(16);wbytes(s,0,134695760),wbytes(s,4,t.crc),wbytes(s,8,v),wbytes(s,12,t.size),u.push(s),p.c=v,p.b=a+v+16,p.crc=t.crc,p.size=t.size,c&&p.r(),c=1}else c&&l()},this.u.push(p)}},t.prototype.end=function(){var t=this;2&this.d?this.ondata(err(4+8*(1&this.d),0,1),null,!0):(this.d?this.e():this.u.push({r:function(){1&t.d&&(t.u.splice(-1,1),t.e())},t:function(){}}),this.d=3)},t.prototype.e=function(){for(var t=0,n=0,e=0,r=0,i=this.u;r<i.length;r++){e+=46+(f=i[r]).f.length+exfl(f.extra)+(f.o?f.o.length:0)}for(var s=new u8(e+22),o=0,a=this.u;o<a.length;o++){var f=a[o];wzh(s,t,f,f.f,f.u,-f.c-2,n,f.o),t+=46+f.f.length+exfl(f.extra)+(f.o?f.o.length:0),n+=f.b}wzf(s,t,this.u.length,e,n),this.ondata(null,s,!0),this.d=2},t.prototype.terminate=function(){for(var t=0,n=this.u;t<n.length;t++){n[t].t()}this.d=2},t}();function zip(t,n,r){r||(r=n,n={}),"function"!=typeof r&&err(7);var i={};fltn(t,"",i,n);var s=Object.keys(i),o=s.length,a=0,f=0,u=o,l=new Array(o),c=[],h=function(){for(var t=0;t<c.length;++t)c[t]()},p=function(t,n){mt((function(){r(t,n)}))};mt((function(){p=r}));var v=function(){var t=new u8(f+22),n=a,r=f-a;f=0;for(var i=0;i<u;++i){var s=l[i];try{var o=s.c.length;wzh(t,f,s,s.f,s.u,o);var c=30+s.f.length+exfl(s.extra),h=f+c;t.set(s.c,h),wzh(t,a,s,s.f,s.u,o,f,s.m),a+=16+c+(s.m?s.m.length:0),f=h+o}catch(e){return p(e,null)}}wzf(t,a,l.length,r,n),p(null,t)};o||v();for(var d=function(t){var n=s[t],r=i[n],u=r[0],d=r[1],b=crc(),y=u.length;b.p(u);var g=strToU8(n),m=g.length,w=d.comment,z=w&&strToU8(w),x=z&&z.length,S=exfl(d.extra),k=0==d.level?0:8,A=function(e,r){if(e)h(),p(e,null);else{var i=r.length;l[t]=mrg(d,{size:y,crc:b.d(),c:r,f:g,m:z,u:m!=n.length||z&&w.length!=x,compression:k}),a+=30+m+S+i,f+=76+2*(m+S)+(x||0)+i,--o||v()}};if(m>65535&&A(err(11,0,1),null),k)if(y<16e4)try{A(null,deflateSync(u,d))}catch(e){A(e,null)}else c.push(deflate(u,d,A));else A(null,u)},b=0;b<u;++b)d(b);return h}function zipSync(t,n){n||(n={});var e={},r=[];fltn(t,"",e,n);var i=0,s=0;for(var o in e){var a=e[o],f=a[0],u=a[1],l=0==u.level?0:8,c=(S=strToU8(o)).length,h=u.comment,p=h&&strToU8(h),v=p&&p.length,d=exfl(u.extra);c>65535&&err(11);var b=l?deflateSync(f,u):f,y=b.length,g=crc();g.p(f),r.push(mrg(u,{size:f.length,crc:g.d(),c:b,f:S,m:p,u:c!=o.length||p&&h.length!=v,o:i,compression:l})),i+=30+c+d+y,s+=76+2*(c+d)+(v||0)+y}for(var m=new u8(s+22),w=i,z=s-i,x=0;x<r.length;++x){var S=r[x];wzh(m,S.o,S,S.f,S.u,S.c.length);var k=30+S.f.length+exfl(S.extra);m.set(S.c,S.o+k),wzh(m,i,S,S.f,S.u,S.c.length,S.o,S.m),i+=16+k+(S.m?S.m.length:0)}return wzf(m,i,r.length,z,w),m}exports.Zip=Zip,exports.zip=zip,exports.zipSync=zipSync;var UnzipPassThrough=function(){function t(){}return t.prototype.push=function(t,n){this.ondata(null,t,n)},t.compression=0,t}();exports.UnzipPassThrough=UnzipPassThrough;var UnzipInflate=function(){function t(){var t=this;this.i=new Inflate((function(n,e){t.ondata(null,n,e)}))}return t.prototype.push=function(t,n){try{this.i.push(t,n)}catch(e){this.ondata(e,null,n)}},t.compression=8,t}();exports.UnzipInflate=UnzipInflate;var AsyncUnzipInflate=function(){function t(t,n){var e=this;n<32e4?this.i=new Inflate((function(t,n){e.ondata(null,t,n)})):(this.i=new AsyncInflate((function(t,n,r){e.ondata(t,n,r)})),this.terminate=this.i.terminate)}return t.prototype.push=function(t,n){this.i.terminate&&(t=slc(t,0)),this.i.push(t,n)},t.compression=8,t}();exports.AsyncUnzipInflate=AsyncUnzipInflate;var Unzip=function(){function t(t){this.onfile=t,this.k=[],this.o={0:UnzipPassThrough},this.p=et}return t.prototype.push=function(t,n){var e=this;if(this.onfile||err(5),this.p||err(4),this.c>0){var r=Math.min(this.c,t.length),i=t.subarray(0,r);if(this.c-=r,this.d?this.d.push(i,!this.c):this.k[0].push(i),(t=t.subarray(r)).length)return this.push(t,n)}else{var s=0,o=0,a=void 0,f=void 0;this.p.length?t.length?((f=new u8(this.p.length+t.length)).set(this.p),f.set(t,this.p.length)):f=this.p:f=t;for(var u=f.length,l=this.c,c=l&&this.d,h=function(){var t,n=b4(f,o);if(67324752==n){s=1,a=o,p.d=null,p.c=0;var r=b2(f,o+6),i=b2(f,o+8),c=2048&r,h=8&r,v=b2(f,o+26),d=b2(f,o+28);if(u>o+30+v+d){var b=[];p.k.unshift(b),s=2;var y,g=b4(f,o+18),m=b4(f,o+22),w=strFromU8(f.subarray(o+30,o+=30+v),!c);4294967295==g?(t=h?[-2]:z64e(f,o),g=t[0],m=t[1]):h&&(g=-1),o+=d,p.c=g;var z={name:w,compression:i,start:function(){if(z.ondata||err(5),g){var t=e.o[i];t||z.ondata(err(14,"unknown compression type "+i,1),null,!1),(y=g<0?new t(w):new t(w,g,m)).ondata=function(t,n,e){z.ondata(t,n,e)};for(var n=0,r=b;n<r.length;n++){var s=r[n];y.push(s,!1)}e.k[0]==b&&e.c?e.d=y:y.push(et,!0)}else z.ondata(null,et,!0)},terminate:function(){y&&y.terminate&&y.terminate()}};g>=0&&(z.size=g,z.originalSize=m),p.onfile(z)}return"break"}if(l){if(134695760==n)return a=o+=12+(-2==l&&8),s=3,p.c=0,"break";if(33639248==n)return a=o-=4,s=3,p.c=0,"break"}},p=this;o<u-4;++o){if("break"===h())break}if(this.p=et,l<0){var v=s?f.subarray(0,a-12-(-2==l&&8)-(134695760==b4(f,a-16)&&4)):f.subarray(0,o);c?c.push(v,!!s):this.k[+(2==s)].push(v)}if(2&s)return this.push(f.subarray(o),n);this.p=f.subarray(o)}n&&(this.c&&err(13),this.p=null)},t.prototype.register=function(t){this.o[t.compression]=t},t}();exports.Unzip=Unzip;var mt="function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout?setTimeout:function(t){t()};function unzip(t,n,e){e||(e=n,n={}),"function"!=typeof e&&err(7);var r=[],i=function(){for(var t=0;t<r.length;++t)r[t]()},s={},o=function(t,n){mt((function(){e(t,n)}))};mt((function(){o=e}));for(var a=t.length-22;101010256!=b4(t,a);--a)if(!a||t.length-a>65558)return o(err(13,0,1),null),i;var f=b2(t,a+8);if(f){var u=f,l=b4(t,a+16),c=4294967295==l||65535==u;if(c){var h=b4(t,a-12);(c=101075792==b4(t,h))&&(u=f=b4(t,h+32),l=b4(t,h+48))}for(var p=n&&n.filter,v=function(n){var e=zh(t,l,c),u=e[0],h=e[1],v=e[2],d=e[3],b=e[4],y=e[5],g=slzh(t,y);l=b;var m=function(t,n){t?(i(),o(t,null)):(n&&(s[d]=n),--f||o(null,s))};if(!p||p({name:d,size:h,originalSize:v,compression:u}))if(u)if(8==u){var w=t.subarray(g,g+h);if(h<32e4)try{m(null,inflateSync(w,new u8(v)))}catch(a){m(a,null)}else r.push(inflate(w,{size:v},m))}else m(err(14,"unknown compression type "+u,1),null);else m(null,slc(t,g,g+h));else m(null,null)},d=0;d<u;++d)v()}else o(null,{});return i}function unzipSync(t,n){for(var e={},r=t.length-22;101010256!=b4(t,r);--r)(!r||t.length-r>65558)&&err(13);var i=b2(t,r+8);if(!i)return{};var s=b4(t,r+16),o=4294967295==s||65535==i;if(o){var a=b4(t,r-12);(o=101075792==b4(t,a))&&(i=b4(t,a+32),s=b4(t,a+48))}for(var f=n&&n.filter,u=0;u<i;++u){var l=zh(t,s,o),c=l[0],h=l[1],p=l[2],v=l[3],d=l[4],b=l[5],y=slzh(t,b);s=d,f&&!f({name:v,size:h,originalSize:p,compression:c})||(c?8==c?e[v]=inflateSync(t.subarray(y,y+h),new u8(p)):err(14,"unknown compression type "+c):e[v]=slc(t,y,y+h))}return e}exports.unzip=unzip,exports.unzipSync=unzipSync;