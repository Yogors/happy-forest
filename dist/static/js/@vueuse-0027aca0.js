import{V as L,h as I,f as T,W,X as D,Y as V,r as p,Z as k,i as z,n as N,w as g,c as y,_ as G}from"./@vue-c68d8595.js";function F(e){return L()?(I(e),!0):!1}function E(e){return typeof e=="function"?e():T(e)}const A=typeof window<"u",$=()=>{};function K(e,n){function t(...l){return new Promise((u,o)=>{Promise.resolve(e(()=>n.apply(this,l),{fn:n,thisArg:this,args:l})).then(u).catch(o)})}return t}function Q(e,n={}){let t,l,u=$;const o=r=>{clearTimeout(r),u(),u=$};return r=>{const i=E(e),s=E(n.maxWait);return t&&o(t),i<=0||s!==void 0&&s<=0?(l&&(o(l),l=null),Promise.resolve(r())):new Promise((c,v)=>{u=n.rejectOnCancel?v:c,s&&!l&&(l=setTimeout(()=>{t&&o(t),l=null,c(r())},s)),t=setTimeout(()=>{l&&o(l),l=null,c(r())},i)})}}function U(e,n){var t;if(typeof e=="number")return e+n;const l=((t=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",u=e.slice(l.length),o=parseFloat(l)+n;return Number.isNaN(o)?e:o+u}function q(...e){if(e.length!==1)return W(...e);const n=e[0];return typeof n=="function"?D(V(()=>({get:n,set:$}))):p(n)}function ie(e,n=200,t={}){return K(Q(n,t),e)}function H(e,n=!0){k()?z(e):n?e():N(e)}function w(e){var n;const t=E(e);return(n=t==null?void 0:t.$el)!=null?n:t}const O=A?window:void 0,C=A?window.document:void 0;function _(...e){let n,t,l,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,l,u]=e,n=O):[n,t,l,u]=e,!n)return $;Array.isArray(t)||(t=[t]),Array.isArray(l)||(l=[l]);const o=[],a=()=>{o.forEach(c=>c()),o.length=0},r=(c,v,d,m)=>(c.addEventListener(v,d,m),()=>c.removeEventListener(v,d,m)),i=g(()=>[w(n),E(u)],([c,v])=>{a(),c&&o.push(...t.flatMap(d=>l.map(m=>r(c,d,m,v))))},{immediate:!0,flush:"post"}),s=()=>{i(),a()};return F(s),s}function X(e){return typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0}function oe(...e){let n,t,l={};e.length===3?(n=e[0],t=e[1],l=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,t=e[0],l=e[1]):(n=e[0],t=e[1]):(n=!0,t=e[0]);const{target:u=O,eventName:o="keydown",passive:a=!1,dedupe:r=!1}=l,i=X(n);return _(u,o,c=>{c.repeat&&E(r)||i(c)&&t(c)},a)}function Y(){const e=p(!1);return k()&&z(()=>{e.value=!0}),e}function R(e){const n=Y();return y(()=>(n.value,!!e()))}function x(e,n={}){const{window:t=O}=n,l=R(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let u;const o=p(!1),a=()=>{u&&("removeEventListener"in u?u.removeEventListener("change",r):u.removeListener(r))},r=()=>{l.value&&(a(),u=t.matchMedia(q(e).value),o.value=!!(u!=null&&u.matches),u&&("addEventListener"in u?u.addEventListener("change",r):u.addListener(r)))};return G(r),F(()=>a()),o}const se={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function ae(e,n={}){function t(r,i){let s=e[r];return i!=null&&(s=U(s,i)),typeof s=="number"&&(s=`${s}px`),s}const{window:l=O}=n;function u(r){return l?l.matchMedia(r).matches:!1}const o=r=>x(`(min-width: ${t(r)})`,n),a=Object.keys(e).reduce((r,i)=>(Object.defineProperty(r,i,{get:()=>o(i),enumerable:!0,configurable:!0}),r),{});return Object.assign(a,{greater(r){return x(`(min-width: ${t(r,.1)})`,n)},greaterOrEqual:o,smaller(r){return x(`(max-width: ${t(r,-.1)})`,n)},smallerOrEqual(r){return x(`(max-width: ${t(r)})`,n)},between(r,i){return x(`(min-width: ${t(r)}) and (max-width: ${t(i,-.1)})`,n)},isGreater(r){return u(`(min-width: ${t(r,.1)})`)},isGreaterOrEqual(r){return u(`(min-width: ${t(r)})`)},isSmaller(r){return u(`(max-width: ${t(r,-.1)})`)},isSmallerOrEqual(r){return u(`(max-width: ${t(r)})`)},isInBetween(r,i){return u(`(min-width: ${t(r)}) and (max-width: ${t(i,-.1)})`)},current(){const r=Object.keys(e).map(i=>[i,o(i)]);return y(()=>r.filter(([,i])=>i.value).map(([i])=>i))}})}var M=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,ee=(e,n)=>{var t={};for(var l in e)Z.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&M)for(var l of M(e))n.indexOf(l)<0&&J.call(e,l)&&(t[l]=e[l]);return t};function te(e,n,t={}){const l=t,{window:u=O}=l,o=ee(l,["window"]);let a;const r=R(()=>u&&"MutationObserver"in u),i=()=>{a&&(a.disconnect(),a=void 0)},s=g(()=>w(e),v=>{i(),r.value&&u&&v&&(a=new MutationObserver(n),a.observe(v,o))},{immediate:!0}),c=()=>{i(),s()};return F(c),{isSupported:r,stop:c}}var j=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,le=(e,n)=>{var t={};for(var l in e)ne.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&j)for(var l of j(e))n.indexOf(l)<0&&re.call(e,l)&&(t[l]=e[l]);return t};function B(e,n,t={}){const l=t,{window:u=O}=l,o=le(l,["window"]);let a;const r=R(()=>u&&"ResizeObserver"in u),i=()=>{a&&(a.disconnect(),a=void 0)},s=y(()=>Array.isArray(e)?e.map(d=>w(d)):[w(e)]),c=g(s,d=>{if(i(),r.value&&u){a=new ResizeObserver(n);for(const m of d)m&&a.observe(m,o)}},{immediate:!0,flush:"post",deep:!0}),v=()=>{i(),c()};return F(v),{isSupported:r,stop:v}}function ce(e,n={}){const{reset:t=!0,windowResize:l=!0,windowScroll:u=!0,immediate:o=!0}=n,a=p(0),r=p(0),i=p(0),s=p(0),c=p(0),v=p(0),d=p(0),m=p(0);function b(){const S=w(e);if(!S){t&&(a.value=0,r.value=0,i.value=0,s.value=0,c.value=0,v.value=0,d.value=0,m.value=0);return}const h=S.getBoundingClientRect();a.value=h.height,r.value=h.bottom,i.value=h.left,s.value=h.right,c.value=h.top,v.value=h.width,d.value=h.x,m.value=h.y}return B(e,b),g(()=>w(e),S=>!S&&b()),u&&_("scroll",b,{capture:!0,passive:!0}),l&&_("resize",b,{passive:!0}),H(()=>{o&&b()}),{height:a,bottom:r,left:i,right:s,top:c,width:v,x:d,y:m,update:b}}function fe(e,n={width:0,height:0},t={}){const{window:l=O,box:u="content-box"}=t,o=y(()=>{var i,s;return(s=(i=w(e))==null?void 0:i.namespaceURI)==null?void 0:s.includes("svg")}),a=p(n.width),r=p(n.height);return B(e,([i])=>{const s=u==="border-box"?i.borderBoxSize:u==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;if(l&&o.value){const c=w(e);if(c){const v=l.getComputedStyle(c);a.value=parseFloat(v.width),r.value=parseFloat(v.height)}}else if(s){const c=Array.isArray(s)?s:[s];a.value=c.reduce((v,{inlineSize:d})=>v+d,0),r.value=c.reduce((v,{blockSize:d})=>v+d,0)}else a.value=i.contentRect.width,r.value=i.contentRect.height},t),g(()=>w(e),i=>{a.value=i?n.width:0,r.value=i?n.height:0}),{width:a,height:r}}const P=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function ve(e,n={}){const{document:t=C,autoExit:l=!1}=n,u=y(()=>{var f;return(f=w(e))!=null?f:t==null?void 0:t.querySelector("html")}),o=p(!1),a=y(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(f=>t&&f in t||u.value&&f in u.value)),r=y(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(f=>t&&f in t||u.value&&f in u.value)),i=y(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(f=>t&&f in t||u.value&&f in u.value)),s=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(f=>t&&f in t),c=R(()=>u.value&&t&&a.value!==void 0&&r.value!==void 0&&i.value!==void 0),v=()=>s?(t==null?void 0:t[s])===u.value:!1,d=()=>{if(i.value){if(t&&t[i.value]!=null)return t[i.value];{const f=u.value;if((f==null?void 0:f[i.value])!=null)return!!f[i.value]}}return!1};async function m(){if(c.value){if(r.value)if((t==null?void 0:t[r.value])!=null)await t[r.value]();else{const f=u.value;(f==null?void 0:f[r.value])!=null&&await f[r.value]()}o.value=!1}}async function b(){if(!c.value)return;d()&&await m();const f=u.value;a.value&&(f==null?void 0:f[a.value])!=null&&(await f[a.value](),o.value=!0)}async function S(){await(o.value?m():b())}const h=()=>{const f=d();(!f||f&&v())&&(o.value=f)};return _(t,P,h,!1),_(()=>w(u),P,h,!1),l&&F(m),{isSupported:c,isFullscreen:o,enter:b,exit:m,toggle:S}}function de(e=null,n={}){var t,l;const{document:u=C}=n,o=q((t=e??(u==null?void 0:u.title))!=null?t:null),a=e&&typeof e=="function";function r(i){if(!("titleTemplate"in n))return i;const s=n.titleTemplate||"%s";return typeof s=="function"?s(i):E(s).replace(/%s/g,i)}return g(o,(i,s)=>{i!==s&&u&&(u.title=r(typeof i=="string"?i:""))},{immediate:!0}),n.observe&&!n.titleTemplate&&u&&!a&&te((l=u.head)==null?void 0:l.querySelector("title"),()=>{u&&u.title!==o.value&&(o.value=r(u.title))},{childList:!0}),o}export{ve as a,fe as b,ae as c,se as d,_ as e,ie as f,ce as g,oe as o,de as u};
