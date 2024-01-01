import{r as wt}from"./index-12b8b6ac.js";var U=typeof Map=="function"&&Map.prototype,N=Object.getOwnPropertyDescriptor&&U?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,I=U&&N&&typeof N.get=="function"?N.get:null,et=U&&Map.prototype.forEach,K=typeof Set=="function"&&Set.prototype,C=Object.getOwnPropertyDescriptor&&K?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,L=K&&C&&typeof C.get=="function"?C.get:null,rt=K&&Set.prototype.forEach,$t=typeof WeakMap=="function"&&WeakMap.prototype,w=$t?WeakMap.prototype.has:null,Et=typeof WeakSet=="function"&&WeakSet.prototype,$=Et?WeakSet.prototype.has:null,Mt=typeof WeakRef=="function"&&WeakRef.prototype,nt=Mt?WeakRef.prototype.deref:null,Wt=Boolean.prototype.valueOf,It=Object.prototype.toString,Lt=Function.prototype.toString,_t=String.prototype.match,Q=String.prototype.slice,s=String.prototype.replace,Rt=String.prototype.toUpperCase,at=String.prototype.toLowerCase,st=RegExp.prototype.test,it=Array.prototype.concat,u=Array.prototype.join,kt=Array.prototype.slice,ot=Math.floor,z=typeof BigInt=="function"?BigInt.prototype.valueOf:null,B=Object.getOwnPropertySymbols,F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,m=typeof Symbol=="function"&&typeof Symbol.iterator=="object",o=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===m||"symbol")?Symbol.toStringTag:null,gt=Object.prototype.propertyIsEnumerable,ft=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function lt(t,e){if(t===1/0||t===-1/0||t!==t||t&&t>-1e3&&t<1e3||st.call(/e/,e))return e;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof t=="number"){var a=t<0?-ot(-t):ot(t);if(a!==t){var i=String(a),r=Q.call(e,i.length+1);return s.call(i,n,"$&_")+"."+s.call(s.call(r,/([0-9]{3})/g,"$&_"),/_$/,"")}}return s.call(e,n,"$&_")}var H=wt,ut=H.custom,ct=St(ut)?ut:null,Zt=function t(e,n,a,i){var r=n||{};if(y(r,"quoteStyle")&&r.quoteStyle!=="single"&&r.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(y(r,"maxStringLength")&&(typeof r.maxStringLength=="number"?r.maxStringLength<0&&r.maxStringLength!==1/0:r.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var c=y(r,"customInspect")?r.customInspect:!0;if(typeof c!="boolean"&&c!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(y(r,"indent")&&r.indent!==null&&r.indent!=="	"&&!(parseInt(r.indent,10)===r.indent&&r.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(y(r,"numericSeparator")&&typeof r.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var v=r.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return mt(e,r);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var f=String(e);return v?lt(e,f):f}if(typeof e=="bigint"){var p=String(e)+"n";return v?lt(e,p):p}var _=typeof r.depth>"u"?5:r.depth;if(typeof a>"u"&&(a=0),a>=_&&_>0&&typeof e=="object")return V(e)?"[Array]":"[Object]";var S=Xt(r,a);if(typeof i>"u")i=[];else if(ht(i,e)>=0)return"[Circular]";function l(h,M,Ot){if(M&&(i=kt.call(i),i.push(M)),Ot){var tt={depth:r.depth};return y(r,"quoteStyle")&&(tt.quoteStyle=r.quoteStyle),t(h,tt,a+1,i)}return t(h,r,a+1,i)}if(typeof e=="function"&&!pt(e)){var G=zt(e),X=W(e,l);return"[Function"+(G?": "+G:" (anonymous)")+"]"+(X.length>0?" { "+u.call(X,", ")+" }":"")}if(St(e)){var Y=m?s.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):F.call(e);return typeof e=="object"&&!m?O(Y):Y}if(Kt(e)){for(var d="<"+at.call(String(e.nodeName)),R=e.attributes||[],E=0;E<R.length;E++)d+=" "+R[E].name+"="+vt(qt(R[E].value),"double",r);return d+=">",e.childNodes&&e.childNodes.length&&(d+="..."),d+="</"+at.call(String(e.nodeName))+">",d}if(V(e)){if(e.length===0)return"[]";var k=W(e,l);return S&&!Gt(k)?"["+J(k,S)+"]":"[ "+u.call(k,", ")+" ]"}if(Tt(e)){var q=W(e,l);return!("cause"in Error.prototype)&&"cause"in e&&!gt.call(e,"cause")?"{ ["+String(e)+"] "+u.call(it.call("[cause]: "+l(e.cause),q),", ")+" }":q.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+u.call(q,", ")+" }"}if(typeof e=="object"&&c){if(ct&&typeof e[ct]=="function"&&H)return H(e,{depth:_-a});if(c!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(Ft(e)){var Z=[];return et&&et.call(e,function(h,M){Z.push(l(M,e,!0)+" => "+l(h,e))}),yt("Map",I.call(e),Z,S)}if(Jt(e)){var x=[];return rt&&rt.call(e,function(h){x.push(l(h,e))}),yt("Set",L.call(e),x,S)}if(Ht(e))return P("WeakMap");if(Ut(e))return P("WeakSet");if(Vt(e))return P("WeakRef");if(Nt(e))return O(l(Number(e)));if(Bt(e))return O(l(z.call(e)));if(Ct(e))return O(Wt.call(e));if(Dt(e))return O(l(String(e)));if(!At(e)&&!pt(e)){var A=W(e,l),b=ft?ft(e)===Object.prototype:e instanceof Object||e.constructor===Object,T=e instanceof Object?"":"null prototype",j=!b&&o&&Object(e)===e&&o in e?Q.call(g(e),8,-1):T?"Object":"",dt=b||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",D=dt+(j||T?"["+u.call(it.call([],j||[],T||[]),": ")+"] ":"");return A.length===0?D+"{}":S?D+"{"+J(A,S)+"}":D+"{ "+u.call(A,", ")+" }"}return String(e)};function vt(t,e,n){var a=(n.quoteStyle||e)==="double"?'"':"'";return a+t+a}function qt(t){return s.call(String(t),/"/g,"&quot;")}function V(t){return g(t)==="[object Array]"&&(!o||!(typeof t=="object"&&o in t))}function At(t){return g(t)==="[object Date]"&&(!o||!(typeof t=="object"&&o in t))}function pt(t){return g(t)==="[object RegExp]"&&(!o||!(typeof t=="object"&&o in t))}function Tt(t){return g(t)==="[object Error]"&&(!o||!(typeof t=="object"&&o in t))}function Dt(t){return g(t)==="[object String]"&&(!o||!(typeof t=="object"&&o in t))}function Nt(t){return g(t)==="[object Number]"&&(!o||!(typeof t=="object"&&o in t))}function Ct(t){return g(t)==="[object Boolean]"&&(!o||!(typeof t=="object"&&o in t))}function St(t){if(m)return t&&typeof t=="object"&&t instanceof Symbol;if(typeof t=="symbol")return!0;if(!t||typeof t!="object"||!F)return!1;try{return F.call(t),!0}catch{}return!1}function Bt(t){if(!t||typeof t!="object"||!z)return!1;try{return z.call(t),!0}catch{}return!1}var Pt=Object.prototype.hasOwnProperty||function(t){return t in this};function y(t,e){return Pt.call(t,e)}function g(t){return It.call(t)}function zt(t){if(t.name)return t.name;var e=_t.call(Lt.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}function ht(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0,a=t.length;n<a;n++)if(t[n]===e)return n;return-1}function Ft(t){if(!I||!t||typeof t!="object")return!1;try{I.call(t);try{L.call(t)}catch{return!0}return t instanceof Map}catch{}return!1}function Ht(t){if(!w||!t||typeof t!="object")return!1;try{w.call(t,w);try{$.call(t,$)}catch{return!0}return t instanceof WeakMap}catch{}return!1}function Vt(t){if(!nt||!t||typeof t!="object")return!1;try{return nt.call(t),!0}catch{}return!1}function Jt(t){if(!L||!t||typeof t!="object")return!1;try{L.call(t);try{I.call(t)}catch{return!0}return t instanceof Set}catch{}return!1}function Ut(t){if(!$||!t||typeof t!="object")return!1;try{$.call(t,$);try{w.call(t,w)}catch{return!0}return t instanceof WeakSet}catch{}return!1}function Kt(t){return!t||typeof t!="object"?!1:typeof HTMLElement<"u"&&t instanceof HTMLElement?!0:typeof t.nodeName=="string"&&typeof t.getAttribute=="function"}function mt(t,e){if(t.length>e.maxStringLength){var n=t.length-e.maxStringLength,a="... "+n+" more character"+(n>1?"s":"");return mt(Q.call(t,0,e.maxStringLength),e)+a}var i=s.call(s.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Qt);return vt(i,"single",e)}function Qt(t){var e=t.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return n?"\\"+n:"\\x"+(e<16?"0":"")+Rt.call(e.toString(16))}function O(t){return"Object("+t+")"}function P(t){return t+" { ? }"}function yt(t,e,n,a){var i=a?J(n,a):u.call(n,", ");return t+" ("+e+") {"+i+"}"}function Gt(t){for(var e=0;e<t.length;e++)if(ht(t[e],`
`)>=0)return!1;return!0}function Xt(t,e){var n;if(t.indent==="	")n="	";else if(typeof t.indent=="number"&&t.indent>0)n=u.call(Array(t.indent+1)," ");else return null;return{base:n,prev:u.call(Array(e+1),n)}}function J(t,e){if(t.length===0)return"";var n=`
`+e.prev+e.base;return n+u.call(t,","+n)+`
`+e.prev}function W(t,e){var n=V(t),a=[];if(n){a.length=t.length;for(var i=0;i<t.length;i++)a[i]=y(t,i)?e(t[i],t):""}var r=typeof B=="function"?B(t):[],c;if(m){c={};for(var v=0;v<r.length;v++)c["$"+r[v]]=r[v]}for(var f in t)y(t,f)&&(n&&String(Number(f))===f&&f<t.length||m&&c["$"+f]instanceof Symbol||(st.call(/[^\w$]/,f)?a.push(e(f,t)+": "+e(t[f],t)):a.push(f+": "+e(t[f],t))));if(typeof B=="function")for(var p=0;p<r.length;p++)gt.call(t,r[p])&&a.push("["+e(r[p])+"]: "+e(t[r[p]],t));return a}export{Zt as o};
