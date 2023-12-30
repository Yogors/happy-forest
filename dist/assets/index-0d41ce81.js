import{i as No,a as Pt,r as jo,d as V,b as U,u as Wo,h as u,c as v,e as S,f as P,g as Pe,j as Xo,k as cn,l as qo,m as On,n as F,w as $t,o as be,t as ge,p as I,q as Ko,s as _e,v as Lt,x as Nn,y as at,z as dn,L as jn,T as Ut,A as un,B as Dt,N as Et,C as Oe,D as Yo,E as et,F as hn,G as Wn,H as Go,I as rt,J as Ne,K as Fe,M as je,O as tt,P as Ve,Q as ut,R as nt,S as We,U as ft,V as yt,W as Qt,X as en,Y as tn,Z as Zo,_ as fn,$ as Jo,a0 as de,a1 as Qo,a2 as ot,a3 as Xn,a4 as oe,a5 as Ie,a6 as ht,a7 as ea,a8 as ae,a9 as pn,aa as qn,ab as ta,ac as na,ad as oa,ae as aa,af as It,ag as ra,ah as Kn,ai as Ht,aj as la,ak as ia,al as sa,am as ca,an as da,ao as Yn,ap as Gn,aq as ua,ar as ha,as as fa,at as pa,au as ba,av as Ze,aw as Te,ax as Sn,ay as zn,az as Wt,aA as Ee,aB as Xt,aC as ma,aD as va,aE as ga,aF as _a,aG as xa,aH as qt,aI as Mt,aJ as Rn,aK as wa,aL as ya,aM as ze,aN as Q,aO as Ca,aP as ka,aQ as m,aR as N,aS as D,aT as j,aU as y,aV as r,aW as ye,aX as re,aY as Ot,aZ as f,a_ as Be,a$ as O,b0 as Xe,b1 as Ct,b2 as xe,b3 as $a,b4 as Sa,b5 as Ae,b6 as Zn,b7 as Nt,b8 as za,b9 as Jn,ba as Qn,bb as Ra,bc as eo,bd as to,be as pt,bf as Ma,bg as Ba,bh as Bt,bi as Ta,bj as bn,bk as lt,bl as St,bm as nn,bn as mn,bo as Fa,bp as Aa,bq as no,br as Mn,bs as vn,bt as Pa,bu as Da,bv as Ea,bw as Ia,bx as oo,by as Va,bz as La,bA as Ua,bB as Ha}from"./index-f0d39408.js";import{c as Oa,a as Bn,u as qe,b as on,V as Na,d as ja,e as Wa,f as Tn,o as Xa,_ as qa,g as gn}from"./Dropdown-7b57b6fc.js";import{_ as bt,u as Ka}from"./use-loading-7860c377.js";import{C as Ya,B as Ga,_ as Za}from"./index.vue_vue_type_script_setup_true_lang-ceccb13e.js";import{_ as Ke}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as Ja}from"./GradientText-afef6380.js";import{_ as _n,u as ao,a as ro,b as lo}from"./Grid-b16fbd58.js";import{A as io,_ as so,a as zt,b as Qa,c as xn}from"./Scrollbar-876c5c92.js";import{f as Vt}from"./format-length-c9d165c6.js";import{_ as it,a as er}from"./toggle-lang.vue_vue_type_script_setup_true_lang-6c763523.js";var tr=/\s/;function nr(e){for(var t=e.length;t--&&tr.test(e.charAt(t)););return t}var or=/^\s+/;function ar(e){return e&&e.slice(0,nr(e)+1).replace(or,"")}var Fn=0/0,rr=/^[-+]0x[0-9a-f]+$/i,lr=/^0b[01]+$/i,ir=/^0o[0-7]+$/i,sr=parseInt;function An(e){if(typeof e=="number")return e;if(No(e))return Fn;if(Pt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Pt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ar(e);var n=lr.test(e);return n||ir.test(e)?sr(e.slice(2),n?2:8):rr.test(e)?Fn:+e}var cr=function(){return jo.Date.now()};const Kt=cr;var dr="Expected a function",ur=Math.max,hr=Math.min;function fr(e,t,n){var o,a,l,i,s,d,b=0,g=!1,_=!1,p=!0;if(typeof e!="function")throw new TypeError(dr);t=An(t)||0,Pt(n)&&(g=!!n.leading,_="maxWait"in n,l=_?ur(An(n.maxWait)||0,t):l,p="trailing"in n?!!n.trailing:p);function w(k){var L=o,B=a;return o=a=void 0,b=k,i=e.apply(B,L),i}function z(k){return b=k,s=setTimeout(R,t),g?w(k):i}function T(k){var L=k-d,B=k-b,X=t-L;return _?hr(X,l-B):X}function A(k){var L=k-d,B=k-b;return d===void 0||L>=t||L<0||_&&B>=l}function R(){var k=Kt();if(A(k))return M(k);s=setTimeout(R,T(k))}function M(k){return s=void 0,p&&o?w(k):(o=a=void 0,i)}function E(){s!==void 0&&clearTimeout(s),b=0,o=d=a=s=void 0}function H(){return s===void 0?i:M(Kt())}function $(){var k=Kt(),L=A(k);if(o=arguments,a=this,d=k,L){if(s===void 0)return z(d);if(_)return clearTimeout(s),s=setTimeout(R,t),w(d)}return s===void 0&&(s=setTimeout(R,t)),i}return $.cancel=E,$.flush=H,$}var pr="Expected a function";function Yt(e,t,n){var o=!0,a=!0;if(typeof e!="function")throw new TypeError(pr);return Pt(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),fr(e,t,{leading:o,maxWait:t,trailing:a})}function br(e){return e.nodeType===9?null:e.parentNode}function co(e){if(e===null)return null;const t=br(e);if(t===null)return null;if(t.nodeType===9)return document.documentElement;if(t.nodeType===1){const{overflow:n,overflowX:o,overflowY:a}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+a+o))return t}return co(t)}function mr(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function uo(e,t,n){t/=100,n/=100;const o=t*Math.min(n,1-n)+n;return[e,o?(2-2*n/o)*100:0,o*100]}function At(e,t,n){t/=100,n/=100;const o=n-n*t/2,a=Math.min(o,1-o);return[e,a?(n-o)/a*100:0,o*100]}function He(e,t,n){t/=100,n/=100;let o=(a,l=(a+e/60)%6)=>n-n*t*Math.max(Math.min(l,4-l,1),0);return[o(5)*255,o(3)*255,o(1)*255]}function an(e,t,n){e/=255,t/=255,n/=255;let o=Math.max(e,t,n),a=o-Math.min(e,t,n),l=a&&(o==e?(t-n)/a:o==t?2+(n-e)/a:4+(e-t)/a);return[60*(l<0?l+6:l),o&&a/o*100,o*100]}function rn(e,t,n){e/=255,t/=255,n/=255;let o=Math.max(e,t,n),a=o-Math.min(e,t,n),l=1-Math.abs(o+o-a-1),i=a&&(o==e?(t-n)/a:o==t?2+(n-e)/a:4+(e-t)/a);return[60*(i<0?i+6:i),l?a/l*100:0,(o+o-a)*50]}function ln(e,t,n){t/=100,n/=100;let o=t*Math.min(n,1-n),a=(l,i=(l+e/30)%12)=>n-o*Math.max(Math.min(i-3,9-i,1),-1);return[a(0)*255,a(8)*255,a(4)*255]}const vr=Bn(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Bn("&::-webkit-scrollbar",{width:0,height:0})]),gr=V({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=U(null);function t(a){!(a.currentTarget.offsetWidth<a.currentTarget.scrollWidth)||a.deltaY===0||(a.currentTarget.scrollLeft+=a.deltaY+a.deltaX,a.preventDefault())}const n=Wo();return vr.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Oa,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...a){var l;(l=e.value)===null||l===void 0||l.scrollTo(...a)}})},render(){return u("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});function Pn(e){return e.nodeName==="#document"}const _r=V({name:"Remove",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),xr=v("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[S(">",[v("input",[S("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),S("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),v("button",[S("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[P("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),S("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[P("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),S("*",[S("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[S(">",[v("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("base-selection",[v("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),P("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),S("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[S(">",[v("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v("base-selection",[v("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),P("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),wr={},ho=V({name:"InputGroup",props:wr,setup(e){const{mergedClsPrefixRef:t}=Pe(e);return Xo("-input-group",xr,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:`${e}-input-group`},this.$slots)}}),yr=e=>{const{popoverColor:t,textColor2:n,primaryColorHover:o,primaryColorPressed:a}=e;return Object.assign(Object.assign({},qo),{color:t,textColor:n,iconColor:n,iconColorHover:o,iconColorPressed:a,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},Cr={name:"BackTop",common:cn,self:yr},kr=Cr,$r=u("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},u("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},u("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},u("g",{transform:"translate(120.000000, 4285.000000)"},u("g",{transform:"translate(7.000000, 126.000000)"},u("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},u("g",{transform:"translate(4.000000, 2.000000)"},u("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),u("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),Sr=v("back-top",`
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`,[On(),F("transition-disabled",{transition:"none !important"}),v("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),S("svg",{pointerEvents:"none"}),S("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[v("base-icon",{color:"var(--n-icon-color-hover)"})]),S("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[v("base-icon",{color:"var(--n-icon-color-pressed)"})])]),zr=Object.assign(Object.assign({},_e.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),Rr=V({name:"BackTop",inheritAttrs:!1,props:zr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Pe(e),o=U(null),a=U(!1);$t(()=>{const{value:H}=o;if(H===null){a.value=!1;return}a.value=H>=e.visibilityHeight});const l=U(!1);be(a,H=>{var $;l.value&&(($=e["onUpdate:show"])===null||$===void 0||$.call(e,H))});const i=ge(e,"show"),s=qe(i,a),d=U(!0),b=U(null),g=I(()=>({right:`calc(${Vt(e.right)} + ${Ko.value})`,bottom:Vt(e.bottom)}));let _,p;be(s,H=>{var $,k;l.value&&(H&&(($=e.onShow)===null||$===void 0||$.call(e)),(k=e.onHide)===null||k===void 0||k.call(e))});const w=_e("BackTop","-back-top",Sr,kr,e,t);function z(){var H;if(p)return;p=!0;const $=((H=e.target)===null||H===void 0?void 0:H.call(e))||mr(e.listenTo)||co(b.value);if(!$)return;_=$===document.documentElement?document:$;const{to:k}=e;typeof k=="string"&&document.querySelector(k),_.addEventListener("scroll",A),A()}function T(){(Pn(_)?document.documentElement:_).scrollTo({top:0,behavior:"smooth"})}function A(){o.value=(Pn(_)?document.documentElement:_).scrollTop,l.value||Oe(()=>{l.value=!0})}function R(){d.value=!1}Lt(()=>{z(),d.value=s.value}),Nn(()=>{_&&_.removeEventListener("scroll",A)});const M=I(()=>{const{self:{color:H,boxShadow:$,boxShadowHover:k,boxShadowPressed:L,iconColor:B,iconColorHover:X,iconColorPressed:ee,width:Z,height:ne,iconSize:J,borderRadius:ue,textColor:le},common:{cubicBezierEaseInOut:pe}}=w.value;return{"--n-bezier":pe,"--n-border-radius":ue,"--n-height":ne,"--n-width":Z,"--n-box-shadow":$,"--n-box-shadow-hover":k,"--n-box-shadow-pressed":L,"--n-color":H,"--n-icon-size":J,"--n-icon-color":B,"--n-icon-color-hover":X,"--n-icon-color-pressed":ee,"--n-text-color":le}}),E=n?at("back-top",void 0,M,e):void 0;return{placeholderRef:b,style:g,mergedShow:s,isMounted:dn(),scrollElement:U(null),scrollTop:o,DomInfoReady:l,transitionDisabled:d,mergedClsPrefix:t,handleAfterEnter:R,handleScroll:A,handleClick:T,cssVars:n?void 0:M,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender}},render(){const{mergedClsPrefix:e}=this;return u("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},u(jn,{to:this.to,show:this.mergedShow},{default:()=>u(Ut,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),this.mergedShow?u("div",un(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),Dt(this.$slots.default,()=>[u(Et,{clsPrefix:e},{default:()=>$r})])):null}})}))}}),Mr=v("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[S("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),S("a",`
 color: inherit;
 text-decoration: inherit;
 `),v("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[v("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),S("&:not(:last-child)",[F("clickable",[P("link",`
 cursor: pointer;
 `,[S("&:hover",`
 background-color: var(--n-item-color-hover);
 `),S("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),P("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[S("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[v("icon",`
 color: var(--n-item-text-color-hover);
 `)]),S("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[v("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),P("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),S("&:last-child",[P("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[v("icon",`
 color: var(--n-item-text-color-active);
 `)]),P("separator",`
 display: none;
 `)])])]),fo=hn("n-breadcrumb"),Br=Object.assign(Object.assign({},_e.props),{separator:{type:String,default:"/"}}),Tr=V({name:"Breadcrumb",props:Br,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Pe(e),o=_e("Breadcrumb","-breadcrumb",Mr,Yo,e,t);et(fo,{separatorRef:ge(e,"separator"),mergedClsPrefixRef:t});const a=I(()=>{const{common:{cubicBezierEaseInOut:i},self:{separatorColor:s,itemTextColor:d,itemTextColorHover:b,itemTextColorPressed:g,itemTextColorActive:_,fontSize:p,fontWeightActive:w,itemBorderRadius:z,itemColorHover:T,itemColorPressed:A,itemLineHeight:R}}=o.value;return{"--n-font-size":p,"--n-bezier":i,"--n-item-text-color":d,"--n-item-text-color-hover":b,"--n-item-text-color-pressed":g,"--n-item-text-color-active":_,"--n-separator-color":s,"--n-item-color-hover":T,"--n-item-color-pressed":A,"--n-item-border-radius":z,"--n-font-weight-active":w,"--n-item-line-height":R}}),l=n?at("breadcrumb",void 0,a,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),u("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},u("ul",null,this.$slots))}}),Fr=(e=Go?window:null)=>{const t=()=>{const{hash:a,host:l,hostname:i,href:s,origin:d,pathname:b,port:g,protocol:_,search:p}=(e==null?void 0:e.location)||{};return{hash:a,host:l,hostname:i,href:s,origin:d,pathname:b,port:g,protocol:_,search:p}},n=()=>{o.value=t()},o=U(t());return Lt(()=>{e&&(e.addEventListener("popstate",n),e.addEventListener("hashchange",n))}),Wn(()=>{e&&(e.removeEventListener("popstate",n),e.removeEventListener("hashchange",n))}),o},Ar={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},Pr=V({name:"BreadcrumbItem",props:Ar,setup(e,{slots:t}){const n=rt(fo,null);if(!n)return()=>null;const{separatorRef:o,mergedClsPrefixRef:a}=n,l=Fr(),i=I(()=>e.href?"a":"span"),s=I(()=>l.value.href===e.href?"location":null);return()=>{const{value:d}=a;return u("li",{class:[`${d}-breadcrumb-item`,e.clickable&&`${d}-breadcrumb-item--clickable`]},u(i.value,{class:`${d}-breadcrumb-item__link`,"aria-current":s.value,href:e.href,onClick:e.onClick},t),u("span",{class:`${d}-breadcrumb-item__separator`,"aria-hidden":"true"},Dt(t.separator,()=>{var b;return[(b=e.separator)!==null&&b!==void 0?b:o.value]})))}}});function Dr(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function kt(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Er(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Ir(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Vr={rgb:{hex(e){return Ne(Fe(e))},hsl(e){const[t,n,o,a]=Fe(e);return je([...rn(t,n,o),a])},hsv(e){const[t,n,o,a]=Fe(e);return tt([...an(t,n,o),a])}},hex:{rgb(e){return Ve(Fe(e))},hsl(e){const[t,n,o,a]=Fe(e);return je([...rn(t,n,o),a])},hsv(e){const[t,n,o,a]=Fe(e);return tt([...an(t,n,o),a])}},hsl:{hex(e){const[t,n,o,a]=ut(e);return Ne([...ln(t,n,o),a])},rgb(e){const[t,n,o,a]=ut(e);return Ve([...ln(t,n,o),a])},hsv(e){const[t,n,o,a]=ut(e);return tt([...uo(t,n,o),a])}},hsv:{hex(e){const[t,n,o,a]=nt(e);return Ne([...He(t,n,o),a])},rgb(e){const[t,n,o,a]=nt(e);return Ve([...He(t,n,o),a])},hsl(e){const[t,n,o,a]=nt(e);return je([...At(t,n,o),a])}}};function po(e,t,n){return n=n||kt(e),n?n===t?e:Vr[n][t](e):null}const dt="12px",Lr=12,Je="6px",Ur=6,Hr="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Or=V({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function n(l){t.value&&(We("mousemove",document,o),We("mouseup",document,a),o(l))}function o(l){const{value:i}=t;if(!i)return;const{width:s,left:d}=i.getBoundingClientRect(),b=Er((l.clientX-d-Ur)/(s-Lr)*360);e.onUpdateHue(b)}function a(){var l;ft("mousemove",document,o),ft("mouseup",document,a),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,handleMouseDown:n}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-slider`,style:{height:dt,borderRadius:Je}},u("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Hr,height:dt,borderRadius:Je,position:"relative"},onMousedown:this.handleMouseDown},u("div",{style:{position:"absolute",left:Je,right:Je,top:0,bottom:0}},u("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${Je})`,borderRadius:Je,width:dt,height:dt}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:Je,width:dt,height:dt}})))))}}),xt="12px",Nr=12,Qe="6px",jr=V({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function n(l){!t.value||!e.rgba||(We("mousemove",document,o),We("mouseup",document,a),o(l))}function o(l){const{value:i}=t;if(!i)return;const{width:s,left:d}=i.getBoundingClientRect(),b=(l.clientX-d)/(s-Nr);e.onUpdateAlpha(Ir(b))}function a(){var l;ft("mousemove",document,o),ft("mouseup",document,a),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,railBackgroundImage:I(()=>{const{rgba:l}=e;return l?`linear-gradient(to right, rgba(${l[0]}, ${l[1]}, ${l[2]}, 0) 0%, rgba(${l[0]}, ${l[1]}, ${l[2]}, 1) 100%)`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:xt,borderRadius:Qe},onMousedown:this.handleMouseDown},u("div",{style:{borderRadius:Qe,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},u("div",{class:`${e}-color-picker-checkboard`}),u("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&u("div",{style:{position:"absolute",left:Qe,right:Qe,top:0,bottom:0}},u("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Qe})`,borderRadius:Qe,width:xt,height:xt}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:Ve(this.rgba),borderRadius:Qe,width:xt,height:xt}}))))}}),Tt="12px",Ft="6px",Wr=V({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function n(l){t.value&&(We("mousemove",document,o),We("mouseup",document,a),o(l))}function o(l){const{value:i}=t;if(!i)return;const{width:s,height:d,left:b,bottom:g}=i.getBoundingClientRect(),_=(g-l.clientY)/d,p=(l.clientX-b)/s,w=100*(p>1?1:p<0?0:p),z=100*(_>1?1:_<0?0:_);e.onUpdateSV(w,z)}function a(){var l;ft("mousemove",document,o),ft("mouseup",document,a),(l=e.onComplete)===null||l===void 0||l.call(e)}return{palleteRef:t,handleColor:I(()=>{const{rgba:l}=e;return l?`rgb(${l[0]}, ${l[1]}, ${l[2]})`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},u("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),u("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&u("div",{class:`${e}-color-picker-handle`,style:{width:Tt,height:Tt,borderRadius:Ft,left:`calc(${this.displayedSv[0]}% - ${Ft})`,bottom:`calc(${this.displayedSv[1]}% - ${Ft})`}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Ft,width:Tt,height:Tt}})))}}),wn=hn("n-color-picker");function Xr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function qr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function Kr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function Yr(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Gr(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const Zr={paddingSmall:"0 4px"},Dn=V({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=U(""),{themeRef:n}=rt(wn,null);$t(()=>{t.value=o()});function o(){const{value:i}=e;if(i===null)return"";const{label:s}=e;return s==="HEX"?i:s==="A"?`${Math.floor(i*100)}%`:String(Math.floor(i))}function a(i){t.value=i}function l(i){let s,d;switch(e.label){case"HEX":d=Yr(i),d&&e.onUpdateValue(i),t.value=o();break;case"H":s=qr(i),s===!1?t.value=o():e.onUpdateValue(s);break;case"S":case"L":case"V":s=Kr(i),s===!1?t.value=o():e.onUpdateValue(s);break;case"A":s=Gr(i),s===!1?t.value=o():e.onUpdateValue(s);break;case"R":case"G":case"B":s=Xr(i),s===!1?t.value=o():e.onUpdateValue(s);break}}return{mergedTheme:n,inputValue:t,handleInputChange:l,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return u(_n,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Zr,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Jr=V({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?Ne:yt)(n));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=n,e.onUpdateValue((o?tt:tn)(a));break;case"rgb":a[t]=n,e.onUpdateValue((o?Ve:en)(a));break;case"hsl":a[t]=n,e.onUpdateValue((o?je:Qt)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return u("div",{class:`${e}-color-picker-input`},u("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),u(ho,null,{default:()=>{const{mode:n,valueArr:o,showAlpha:a}=this;if(n==="hex"){let l=null;try{l=o===null?null:(a?Ne:yt)(o)}catch{}return u(Dn,{label:"HEX",showAlpha:a,value:l,onUpdateValue:i=>{this.handleUnitUpdateValue(0,i)}})}return(n+(a?"a":"")).split("").map((l,i)=>u(Dn,{label:l.toUpperCase(),value:o===null?null:o[i],onUpdateValue:s=>{this.handleUnitUpdateValue(i,s)}}))}}))}}),Qr=V({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:n}=rt(wn,null);return()=>{const{hsla:o,value:a,clsPrefix:l,onClick:i,disabled:s}=e,d=t.label||n.value;return u("div",{class:[`${l}-color-picker-trigger`,s&&`${l}-color-picker-trigger--disabled`],onClick:s?void 0:i},u("div",{class:`${l}-color-picker-trigger__fill`},u("div",{class:`${l}-color-picker-checkboard`}),u("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?je(o):""}}),a&&o?u("div",{class:`${l}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},d?d(a):a):null))}}});function el(e,t){if(t==="hsv"){const[n,o,a,l]=nt(e);return Ve([...He(n,o,a),l])}return e}function tl(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}const nl=V({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=I(()=>e.swatches.map(l=>{const i=kt(l);return{value:l,mode:i,legalValue:el(l,i)}}));function n(l){const{mode:i}=e;let{value:s,mode:d}=l;return d||(d="hex",/^[a-zA-Z]+$/.test(s)?s=tl(s):(Zo("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),d===i?s:po(s,i,d)}function o(l){e.onUpdateColor(n(l))}function a(l,i){l.key==="Enter"&&o(i)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>u("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:n=>{this.handleSwatchKeyDown(n,t)}},u("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),ol=V({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=kt(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(n){var o;const a=n.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,po(a.toUpperCase(),e.mode,"hex")),n.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-preview__preview`},u("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),u("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),al=S([v("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),v("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[On(),v("input",`
 text-align: center;
 `)]),v("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[S("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),v("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[P("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),S("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),v("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[P("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),v("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[P("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[F("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),v("color-picker-preview",`
 display: flex;
 `,[P("sliders",`
 flex: 1 0 auto;
 `),P("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),P("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),P("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),v("color-picker-input",`
 display: flex;
 align-items: center;
 `,[v("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),P("mode",`
 width: 72px;
 text-align: center;
 `)]),v("color-picker-control",`
 padding: 12px;
 `),v("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[v("button","margin-left: 8px;")]),v("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[P("value",`
 white-space: nowrap;
 position: relative;
 `),P("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),F("disabled","cursor: not-allowed"),v("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[S("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),v("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[v("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[P("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),S("&:focus",`
 outline: none;
 `,[P("fill",[S("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),rl=Object.assign(Object.assign({},_e.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:on.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ll=V({name:"ColorPicker",props:rl,setup(e,{slots:t}){const n=U(null);let o=null;const a=fn(e),{mergedSizeRef:l,mergedDisabledRef:i}=a,{localeRef:s}=ao("global"),{mergedClsPrefixRef:d,namespaceRef:b,inlineThemeDisabled:g}=Pe(e),_=_e("ColorPicker","-color-picker",al,Jo,e,d);et(wn,{themeRef:_,renderLabelRef:ge(e,"renderLabel"),colorPickerSlots:t});const p=U(e.defaultShow),w=qe(ge(e,"show"),p);function z(c){const{onUpdateShow:x,"onUpdate:show":W}=e;x&&oe(x,c),W&&oe(W,c),p.value=c}const{defaultValue:T}=e,A=U(T===void 0?Dr(e.modes,e.showAlpha):T),R=qe(ge(e,"value"),A),M=U([R.value]),E=U(0),H=I(()=>kt(R.value)),{modes:$}=e,k=U(kt(R.value)||$[0]||"rgb");function L(){const{modes:c}=e,{value:x}=k,W=c.findIndex(q=>q===x);~W?k.value=c[(W+1)%c.length]:k.value="rgb"}let B,X,ee,Z,ne,J,ue,le;const pe=I(()=>{const{value:c}=R;if(!c)return null;switch(H.value){case"hsv":return nt(c);case"hsl":return[B,X,ee,le]=ut(c),[...uo(B,X,ee),le];case"rgb":case"hex":return[ne,J,ue,le]=Fe(c),[...an(ne,J,ue),le]}}),he=I(()=>{const{value:c}=R;if(!c)return null;switch(H.value){case"rgb":case"hex":return Fe(c);case"hsv":return[B,X,Z,le]=nt(c),[...He(B,X,Z),le];case"hsl":return[B,X,ee,le]=ut(c),[...ln(B,X,ee),le]}}),ce=I(()=>{const{value:c}=R;if(!c)return null;switch(H.value){case"hsl":return ut(c);case"hsv":return[B,X,Z,le]=nt(c),[...At(B,X,Z),le];case"rgb":case"hex":return[ne,J,ue,le]=Fe(c),[...rn(ne,J,ue),le]}}),De=I(()=>{switch(k.value){case"rgb":case"hex":return he.value;case"hsv":return pe.value;case"hsl":return ce.value}}),Ce=U(0),fe=U(1),me=U([0,0]);function we(c,x){const{value:W}=pe,q=Ce.value,K=W?W[3]:1;me.value=[c,x];const{showAlpha:Y}=e;switch(k.value){case"hsv":G((Y?tt:tn)([q,c,x,K]),"cursor");break;case"hsl":G((Y?je:Qt)([...At(q,c,x),K]),"cursor");break;case"rgb":G((Y?Ve:en)([...He(q,c,x),K]),"cursor");break;case"hex":G((Y?Ne:yt)([...He(q,c,x),K]),"cursor");break}}function ke(c){Ce.value=c;const{value:x}=pe;if(!x)return;const[,W,q,K]=x,{showAlpha:Y}=e;switch(k.value){case"hsv":G((Y?tt:tn)([c,W,q,K]),"cursor");break;case"rgb":G((Y?Ve:en)([...He(c,W,q),K]),"cursor");break;case"hex":G((Y?Ne:yt)([...He(c,W,q),K]),"cursor");break;case"hsl":G((Y?je:Qt)([...At(c,W,q),K]),"cursor");break}}function Re(c){switch(k.value){case"hsv":[B,X,Z]=pe.value,G(tt([B,X,Z,c]),"cursor");break;case"rgb":[ne,J,ue]=he.value,G(Ve([ne,J,ue,c]),"cursor");break;case"hex":[ne,J,ue]=he.value,G(Ne([ne,J,ue,c]),"cursor");break;case"hsl":[B,X,ee]=ce.value,G(je([B,X,ee,c]),"cursor");break}fe.value=c}function G(c,x){x==="cursor"?o=c:o=null;const{nTriggerFormChange:W,nTriggerFormInput:q}=a,{onUpdateValue:K,"onUpdate:value":Y}=e;K&&oe(K,c),Y&&oe(Y,c),W(),q(),A.value=c}function $e(c){G(c,"input"),Oe(ve)}function ve(c=!0){const{value:x}=R;if(x){const{nTriggerFormChange:W,nTriggerFormInput:q}=a,{onComplete:K}=e;K&&K(x);const{value:Y}=M,{value:se}=E;c&&(Y.splice(se+1,Y.length,x),E.value=se+1),W(),q()}}function Ue(){const{value:c}=E;c-1<0||(G(M.value[c-1],"input"),ve(!1),E.value=c-1)}function Ye(){const{value:c}=E;c<0||c+1>=M.value.length||(G(M.value[c+1],"input"),ve(!1),E.value=c+1)}function gt(){G(null,"input"),z(!1)}function st(){const{value:c}=R,{onConfirm:x}=e;x&&x(c),z(!1)}const _t=I(()=>E.value>=1),ct=I(()=>{const{value:c}=M;return c.length>1&&E.value<c.length-1});be(w,c=>{c||(M.value=[R.value],E.value=0)}),$t(()=>{if(!(o&&o===R.value)){const{value:c}=pe;c&&(Ce.value=c[0],fe.value=c[3],me.value=[c[1],c[2]])}o=null});const Me=I(()=>{const{value:c}=l,{common:{cubicBezierEaseInOut:x},self:{textColor:W,color:q,panelFontSize:K,boxShadow:Y,border:se,borderRadius:te,dividerColor:Se,[de("height",c)]:Ge,[de("fontSize",c)]:jt}}=_.value;return{"--n-bezier":x,"--n-text-color":W,"--n-color":q,"--n-panel-font-size":K,"--n-font-size":jt,"--n-box-shadow":Y,"--n-border":se,"--n-border-radius":te,"--n-height":Ge,"--n-divider-color":Se}}),C=g?at("color-picker",I(()=>l.value[0]),Me,e):void 0;function h(){var c;const{value:x}=he,{value:W}=Ce,{internalActions:q,modes:K,actions:Y}=e,{value:se}=_,{value:te}=d;return u("div",{class:[`${te}-color-picker-panel`,C==null?void 0:C.themeClass.value],onDragstart:Se=>{Se.preventDefault()},style:g?void 0:Me.value},u("div",{class:`${te}-color-picker-control`},u(Wr,{clsPrefix:te,rgba:x,displayedHue:W,displayedSv:me.value,onUpdateSV:we,onComplete:ve}),u("div",{class:`${te}-color-picker-preview`},u("div",{class:`${te}-color-picker-preview__sliders`},u(Or,{clsPrefix:te,hue:W,onUpdateHue:ke,onComplete:ve}),e.showAlpha?u(jr,{clsPrefix:te,rgba:x,alpha:fe.value,onUpdateAlpha:Re,onComplete:ve}):null),e.showPreview?u(ol,{clsPrefix:te,mode:k.value,color:he.value&&yt(he.value),onUpdateColor:Se=>{G(Se,"input")}}):null),u(Jr,{clsPrefix:te,showAlpha:e.showAlpha,mode:k.value,modes:K,onUpdateMode:L,value:R.value,valueArr:De.value,onUpdateValue:$e}),((c=e.swatches)===null||c===void 0?void 0:c.length)&&u(nl,{clsPrefix:te,mode:k.value,swatches:e.swatches,onUpdateColor:Se=>{G(Se,"input")}})),Y!=null&&Y.length?u("div",{class:`${te}-color-picker-action`},Y.includes("confirm")&&u(Ie,{size:"small",onClick:st,theme:se.peers.Button,themeOverrides:se.peerOverrides.Button},{default:()=>s.value.confirm}),Y.includes("clear")&&u(Ie,{size:"small",onClick:gt,disabled:!R.value,theme:se.peers.Button,themeOverrides:se.peerOverrides.Button},{default:()=>s.value.clear})):null,t.action?u("div",{class:`${te}-color-picker-action`},{default:t.action}):q?u("div",{class:`${te}-color-picker-action`},q.includes("undo")&&u(Ie,{size:"small",onClick:Ue,disabled:!_t.value,theme:se.peers.Button,themeOverrides:se.peerOverrides.Button},{default:()=>s.value.undo}),q.includes("redo")&&u(Ie,{size:"small",onClick:Ye,disabled:!ct.value,theme:se.peers.Button,themeOverrides:se.peerOverrides.Button},{default:()=>s.value.redo})):null)}return{mergedClsPrefix:d,namespace:b,selfRef:n,hsla:ce,rgba:he,mergedShow:w,mergedDisabled:i,isMounted:dn(),adjustedTo:on(e),mergedValue:R,handleTriggerClick(){z(!0)},handleClickOutside(c){var x;!((x=n.value)===null||x===void 0)&&x.contains(Qo(c))||z(!1)},renderPanel:h,cssVars:g?void 0:Me,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),u("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},u(Na,null,{default:()=>[u(ja,null,{default:()=>u(Qr,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),u(Wa,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===on.tdkey,to:this.adjustedTo},{default:()=>u(Ut,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?ot(this.renderPanel(),[[Xn,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),il=v("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[ht("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[ht("no-title",`
 display: flex;
 align-items: center;
 `)]),P("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),F("title-position-left",[P("line",[F("left",{width:"28px"})])]),F("title-position-right",[P("line",[F("right",{width:"28px"})])]),F("dashed",[P("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),F("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),P("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),ht("dashed",[P("line",{backgroundColor:"var(--n-color)"})]),F("dashed",[P("line",{borderColor:"var(--n-color)"})]),F("vertical",{backgroundColor:"var(--n-color)"})]),sl=Object.assign(Object.assign({},_e.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),mt=V({name:"Divider",props:sl,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Pe(e),o=_e("Divider","-divider",il,ea,e,t),a=I(()=>{const{common:{cubicBezierEaseInOut:i},self:{color:s,textColor:d,fontWeight:b}}=o.value;return{"--n-bezier":i,"--n-color":s,"--n-text-color":d,"--n-font-weight":b}}),l=n?at("divider",void 0,a,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{$slots:t,titlePlacement:n,vertical:o,dashed:a,cssVars:l,mergedClsPrefix:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{role:"separator",class:[`${i}-divider`,this.themeClass,{[`${i}-divider--vertical`]:o,[`${i}-divider--no-title`]:!t.default,[`${i}-divider--dashed`]:a,[`${i}-divider--title-position-${n}`]:t.default&&n}],style:l},o?null:u("div",{class:`${i}-divider__line ${i}-divider__line--left`}),!o&&t.default?u(ae,null,u("div",{class:`${i}-divider__title`},this.$slots),u("div",{class:`${i}-divider__line ${i}-divider__line--right`})):null)}}),cl=V({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=U(!!e.show),n=U(null),o=rt(pn);let a=0,l="",i=null;const s=U(!1),d=U(!1),b=I(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:g,mergedRtlRef:_}=Pe(e),p=qn("Drawer",_,g),w=L=>{d.value=!0,a=b.value?L.clientY:L.clientX,l=document.body.style.cursor,document.body.style.cursor=b.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",M),document.body.addEventListener("mouseleave",H),document.body.addEventListener("mouseup",E)},z=()=>{i!==null&&(window.clearTimeout(i),i=null),d.value?s.value=!0:i=window.setTimeout(()=>{s.value=!0},300)},T=()=>{i!==null&&(window.clearTimeout(i),i=null),s.value=!1},{doUpdateHeight:A,doUpdateWidth:R}=o,M=L=>{var B,X;if(d.value)if(b.value){let ee=((B=n.value)===null||B===void 0?void 0:B.offsetHeight)||0;const Z=a-L.clientY;ee+=e.placement==="bottom"?Z:-Z,A(ee),a=L.clientY}else{let ee=((X=n.value)===null||X===void 0?void 0:X.offsetWidth)||0;const Z=a-L.clientX;ee+=e.placement==="right"?Z:-Z,R(ee),a=L.clientX}},E=()=>{d.value&&(a=0,d.value=!1,document.body.style.cursor=l,document.body.removeEventListener("mousemove",M),document.body.removeEventListener("mouseup",E),document.body.removeEventListener("mouseleave",H))},H=E;$t(()=>{e.show&&(t.value=!0)}),be(()=>e.show,L=>{L||E()}),Nn(()=>{E()});const $=I(()=>{const{show:L}=e,B=[[It,L]];return e.showMask||B.push([Xn,e.onClickoutside,void 0,{capture:!0}]),B});function k(){var L;t.value=!1,(L=e.onAfterLeave)===null||L===void 0||L.call(e)}return ta(I(()=>e.blockScroll&&t.value)),et(na,n),et(oa,null),et(aa,null),{bodyRef:n,rtlEnabled:p,mergedClsPrefix:o.mergedClsPrefixRef,isMounted:o.isMountedRef,mergedTheme:o.mergedThemeRef,displayed:t,transitionName:I(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:k,bodyDirectives:$,handleMousedownResizeTrigger:w,handleMouseenterResizeTrigger:z,handleMouseleaveResizeTrigger:T,isDragging:d,isHoverOnResizeTrigger:s}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?ot(u("div",{role:"none"},u(ra,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>u(Ut,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>ot(u("div",un(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?u("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?u("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):u(Kn,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[It,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:dl,cubicBezierEaseOut:ul}=Ht;function hl({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-right"}={}){return[S(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${dl}`}),S(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${ul}`}),S(`&.${n}-transition-enter-to`,{transform:"translateX(0)"}),S(`&.${n}-transition-enter-from`,{transform:"translateX(100%)"}),S(`&.${n}-transition-leave-from`,{transform:"translateX(0)"}),S(`&.${n}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:fl,cubicBezierEaseOut:pl}=Ht;function bl({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-left"}={}){return[S(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${fl}`}),S(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${pl}`}),S(`&.${n}-transition-enter-to`,{transform:"translateX(0)"}),S(`&.${n}-transition-enter-from`,{transform:"translateX(-100%)"}),S(`&.${n}-transition-leave-from`,{transform:"translateX(0)"}),S(`&.${n}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:ml,cubicBezierEaseOut:vl}=Ht;function gl({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-top"}={}){return[S(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${ml}`}),S(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${vl}`}),S(`&.${n}-transition-enter-to`,{transform:"translateY(0)"}),S(`&.${n}-transition-enter-from`,{transform:"translateY(-100%)"}),S(`&.${n}-transition-leave-from`,{transform:"translateY(0)"}),S(`&.${n}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:_l,cubicBezierEaseOut:xl}=Ht;function wl({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-bottom"}={}){return[S(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${_l}`}),S(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${xl}`}),S(`&.${n}-transition-enter-to`,{transform:"translateY(0)"}),S(`&.${n}-transition-enter-from`,{transform:"translateY(100%)"}),S(`&.${n}-transition-leave-from`,{transform:"translateY(0)"}),S(`&.${n}-transition-leave-to`,{transform:"translateY(100%)"})]}const yl=S([v("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[hl(),bl(),gl(),wl(),F("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),F("native-scrollbar",[v("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),P("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[F("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),v("drawer-content-wrapper",`
 box-sizing: border-box;
 `),v("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[F("native-scrollbar",[v("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),v("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),v("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),v("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[P("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),v("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),F("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[P("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),F("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[P("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),F("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[P("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),F("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[P("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),S("body",[S(">",[v("drawer-container",{position:"fixed"})])]),v("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[S("> *",{pointerEvents:"all"})]),v("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[F("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),la({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Cl=Object.assign(Object.assign({},_e.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),kl=V({name:"Drawer",inheritAttrs:!1,props:Cl,setup(e){const{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:o}=Pe(e),a=dn(),l=_e("Drawer","-drawer",yl,ia,e,t),i=U(e.defaultWidth),s=U(e.defaultHeight),d=qe(ge(e,"width"),i),b=qe(ge(e,"height"),s),g=I(()=>{const{placement:$}=e;return $==="top"||$==="bottom"?"":Vt(d.value)}),_=I(()=>{const{placement:$}=e;return $==="left"||$==="right"?"":Vt(b.value)}),p=$=>{const{onUpdateWidth:k,"onUpdate:width":L}=e;k&&oe(k,$),L&&oe(L,$),i.value=$},w=$=>{const{onUpdateHeight:k,"onUpdate:width":L}=e;k&&oe(k,$),L&&oe(L,$),s.value=$},z=I(()=>[{width:g.value,height:_.value},e.drawerStyle||""]);function T($){const{onMaskClick:k,maskClosable:L}=e;L&&M(!1),k&&k($)}const A=sa();function R($){var k;(k=e.onEsc)===null||k===void 0||k.call(e),e.show&&e.closeOnEsc&&da($)&&!A.value&&M(!1)}function M($){const{onHide:k,onUpdateShow:L,"onUpdate:show":B}=e;L&&oe(L,$),B&&oe(B,$),k&&!$&&oe(k,$)}et(pn,{isMountedRef:a,mergedThemeRef:l,mergedClsPrefixRef:t,doUpdateShow:M,doUpdateHeight:w,doUpdateWidth:p});const E=I(()=>{const{common:{cubicBezierEaseInOut:$,cubicBezierEaseIn:k,cubicBezierEaseOut:L},self:{color:B,textColor:X,boxShadow:ee,lineHeight:Z,headerPadding:ne,footerPadding:J,bodyPadding:ue,titleFontSize:le,titleTextColor:pe,titleFontWeight:he,headerBorderBottom:ce,footerBorderTop:De,closeIconColor:Ce,closeIconColorHover:fe,closeIconColorPressed:me,closeColorHover:we,closeColorPressed:ke,closeIconSize:Re,closeSize:G,closeBorderRadius:$e,resizableTriggerColorHover:ve}}=l.value;return{"--n-line-height":Z,"--n-color":B,"--n-text-color":X,"--n-box-shadow":ee,"--n-bezier":$,"--n-bezier-out":L,"--n-bezier-in":k,"--n-header-padding":ne,"--n-body-padding":ue,"--n-footer-padding":J,"--n-title-text-color":pe,"--n-title-font-size":le,"--n-title-font-weight":he,"--n-header-border-bottom":ce,"--n-footer-border-top":De,"--n-close-icon-color":Ce,"--n-close-icon-color-hover":fe,"--n-close-icon-color-pressed":me,"--n-close-size":G,"--n-close-color-hover":we,"--n-close-color-pressed":ke,"--n-close-icon-size":Re,"--n-close-border-radius":$e,"--n-resize-trigger-color-hover":ve}}),H=o?at("drawer",void 0,E,e):void 0;return{mergedClsPrefix:t,namespace:n,mergedBodyStyle:z,handleMaskClick:T,handleEsc:R,mergedTheme:l,cssVars:o?void 0:E,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender,isMounted:a}},render(){const{mergedClsPrefix:e}=this;return u(jn,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),ot(u("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?u(Ut,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?u("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,u(cl,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[ca,{zIndex:this.zIndex,enabled:this.show}]])}})}}),$l={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Sl=V({name:"DrawerContent",props:$l,setup(){const e=rt(pn,null);e||Yn("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function n(){t(!1)}return{handleCloseClick:n,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:n,mergedTheme:o,bodyStyle:a,bodyContentStyle:l,headerStyle:i,footerStyle:s,scrollbarProps:d,closable:b,$slots:g}=this;return u("div",{role:"none",class:[`${t}-drawer-content`,n&&`${t}-drawer-content--native-scrollbar`]},g.header||e||b?u("div",{class:`${t}-drawer-header`,style:i,role:"none"},u("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},g.header!==void 0?g.header():e),b&&u(Gn,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,n?u("div",{class:`${t}-drawer-body`,style:a,role:"none"},u("div",{class:`${t}-drawer-body-content-wrapper`,style:l,role:"none"},g)):u(Kn,Object.assign({themeOverrides:o.peerOverrides.Scrollbar,theme:o.peers.Scrollbar},d,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:l}),g),g.footer?u("div",{class:`${t}-drawer-footer`,style:s,role:"none"},g.footer()):null)}}),zl=e=>{const{textColorDisabled:t}=e;return{iconColorDisabled:t}},Rl=ua({name:"InputNumber",common:cn,peers:{Button:ha,Input:fa},self:zl}),Ml=Rl,Bl=e=>{const{primaryColor:t,opacityDisabled:n,borderRadius:o,textColor3:a}=e,l="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},pa),{iconColor:a,textColor:"white",loadingColor:t,opacityDisabled:n,railColor:l,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${ba(t,{alpha:.2})}`})},Tl={name:"Switch",common:cn,self:Bl},Fl=Tl;function Al(e){return e==null||typeof e=="string"&&e.trim()===""?null:Number(e)}function Pl(e){return e.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^\.\d+$/.test(e))}function Gt(e){return e==null?!0:!Number.isNaN(e)}function En(e,t){return e==null?"":t===void 0?String(e):e.toFixed(t)}function Zt(e){if(e===null)return null;if(typeof e=="number")return e;{const t=Number(e);return Number.isNaN(t)?null:t}}const Dl=S([v("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),v("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),In=800,Vn=100,El=Object.assign(Object.assign({},_e.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),Il=V({name:"InputNumber",props:El,setup(e){const{mergedBorderedRef:t,mergedClsPrefixRef:n,mergedRtlRef:o}=Pe(e),a=_e("InputNumber","-input-number",Dl,Ml,e,n),{localeRef:l}=ao("InputNumber"),i=fn(e),{mergedSizeRef:s,mergedDisabledRef:d,mergedStatusRef:b}=i,g=U(null),_=U(null),p=U(null),w=U(e.defaultValue),z=ge(e,"value"),T=qe(z,w),A=U(""),R=h=>{const c=String(h).split(".")[1];return c?c.length:0},M=h=>{const c=[e.min,e.max,e.step,h].map(x=>x===void 0?0:R(x));return Math.max(...c)},E=Ze(()=>{const{placeholder:h}=e;return h!==void 0?h:l.value.placeholder}),H=Ze(()=>{const h=Zt(e.step);return h!==null?h===0?1:Math.abs(h):1}),$=Ze(()=>{const h=Zt(e.min);return h!==null?h:null}),k=Ze(()=>{const h=Zt(e.max);return h!==null?h:null}),L=h=>{const{value:c}=T;if(h===c){X();return}const{"onUpdate:value":x,onUpdateValue:W,onChange:q}=e,{nTriggerFormInput:K,nTriggerFormChange:Y}=i;q&&oe(q,h),W&&oe(W,h),x&&oe(x,h),w.value=h,K(),Y()},B=({offset:h,doUpdateIfValid:c,fixPrecision:x,isInputing:W})=>{const{value:q}=A;if(W&&Pl(q))return!1;const K=(e.parse||Al)(q);if(K===null)return c&&L(null),null;if(Gt(K)){const Y=R(K),{precision:se}=e;if(se!==void 0&&se<Y&&!x)return!1;let te=parseFloat((K+h).toFixed(se??M(K)));if(Gt(te)){const{value:Se}=k,{value:Ge}=$;if(Se!==null&&te>Se){if(!c||W)return!1;te=Se}if(Ge!==null&&te<Ge){if(!c||W)return!1;te=Ge}return e.validator&&!e.validator(te)?!1:(c&&L(te),te)}}return!1},X=()=>{const{value:h}=T;if(Gt(h)){const{format:c,precision:x}=e;c?A.value=c(h):h===null||x===void 0||R(h)>x?A.value=En(h,void 0):A.value=En(h,x)}else A.value=String(h)};X();const ee=Ze(()=>B({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),Z=Ze(()=>{const{value:h}=T;if(e.validator&&h===null)return!1;const{value:c}=H;return B({offset:-c,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),ne=Ze(()=>{const{value:h}=T;if(e.validator&&h===null)return!1;const{value:c}=H;return B({offset:+c,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function J(h){const{onFocus:c}=e,{nTriggerFormFocus:x}=i;c&&oe(c,h),x()}function ue(h){var c,x;if(h.target===((c=g.value)===null||c===void 0?void 0:c.wrapperElRef))return;const W=B({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(W!==!1){const Y=(x=g.value)===null||x===void 0?void 0:x.inputElRef;Y&&(Y.value=String(W||"")),T.value===W&&X()}else X();const{onBlur:q}=e,{nTriggerFormBlur:K}=i;q&&oe(q,h),K(),Oe(()=>{X()})}function le(h){const{onClear:c}=e;c&&oe(c,h)}function pe(){const{value:h}=ne;if(!h){$e();return}const{value:c}=T;if(c===null)e.validator||L(Ce());else{const{value:x}=H;B({offset:x,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function he(){const{value:h}=Z;if(!h){G();return}const{value:c}=T;if(c===null)e.validator||L(Ce());else{const{value:x}=H;B({offset:-x,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const ce=J,De=ue;function Ce(){if(e.validator)return null;const{value:h}=$,{value:c}=k;return h!==null?Math.max(0,h):c!==null?Math.min(0,c):0}function fe(h){le(h),L(null)}function me(h){var c,x,W;!((c=p.value)===null||c===void 0)&&c.$el.contains(h.target)&&h.preventDefault(),!((x=_.value)===null||x===void 0)&&x.$el.contains(h.target)&&h.preventDefault(),(W=g.value)===null||W===void 0||W.activate()}let we=null,ke=null,Re=null;function G(){Re&&(window.clearTimeout(Re),Re=null),we&&(window.clearInterval(we),we=null)}function $e(){Ue&&(window.clearTimeout(Ue),Ue=null),ke&&(window.clearInterval(ke),ke=null)}function ve(){G(),Re=window.setTimeout(()=>{we=window.setInterval(()=>{he()},Vn)},In),We("mouseup",document,G,{once:!0})}let Ue=null;function Ye(){$e(),Ue=window.setTimeout(()=>{ke=window.setInterval(()=>{pe()},Vn)},In),We("mouseup",document,$e,{once:!0})}const gt=()=>{ke||pe()},st=()=>{we||he()};function _t(h){var c,x;if(h.key==="Enter"){if(h.target===((c=g.value)===null||c===void 0?void 0:c.wrapperElRef))return;B({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((x=g.value)===null||x===void 0||x.deactivate())}else if(h.key==="ArrowUp"){if(!ne.value||e.keyboard.ArrowUp===!1)return;h.preventDefault(),B({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&pe()}else if(h.key==="ArrowDown"){if(!Z.value||e.keyboard.ArrowDown===!1)return;h.preventDefault(),B({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&he()}}function ct(h){A.value=h,e.updateValueOnInput&&!e.format&&!e.parse&&e.precision===void 0&&B({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}be(T,()=>{X()});const Me={focus:()=>{var h;return(h=g.value)===null||h===void 0?void 0:h.focus()},blur:()=>{var h;return(h=g.value)===null||h===void 0?void 0:h.blur()}},C=qn("InputNumber",o,n);return Object.assign(Object.assign({},Me),{rtlEnabled:C,inputInstRef:g,minusButtonInstRef:_,addButtonInstRef:p,mergedClsPrefix:n,mergedBordered:t,uncontrolledValue:w,mergedValue:T,mergedPlaceholder:E,displayedValueInvalid:ee,mergedSize:s,mergedDisabled:d,displayedValue:A,addable:ne,minusable:Z,mergedStatus:b,handleFocus:ce,handleBlur:De,handleClear:fe,handleMouseDown:me,handleAddClick:gt,handleMinusClick:st,handleAddMousedown:Ye,handleMinusMousedown:ve,handleKeyDown:_t,handleUpdateDisplayedValue:ct,mergedTheme:a,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:I(()=>{const{self:{iconColorDisabled:h}}=a.value,[c,x,W,q]=Fe(h);return{textColorTextDisabled:`rgb(${c}, ${x}, ${W})`,opacityDisabled:`${q}`}})})},render(){const{mergedClsPrefix:e,$slots:t}=this,n=()=>u(Sn,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>Dt(t["minus-icon"],()=>[u(Et,{clsPrefix:e},{default:()=>u(_r,null)})])}),o=()=>u(Sn,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>Dt(t["add-icon"],()=>[u(Et,{clsPrefix:e},{default:()=>u(io,null)})])});return u("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},u(_n,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var a;return this.showButton&&this.buttonPlacement==="both"?[n(),Te(t.prefix,l=>l?u("span",{class:`${e}-input-number-prefix`},l):null)]:(a=t.prefix)===null||a===void 0?void 0:a.call(t)},suffix:()=>{var a;return this.showButton?[Te(t.suffix,l=>l?u("span",{class:`${e}-input-number-suffix`},l):null),this.buttonPlacement==="right"?n():null,o()]:(a=t.suffix)===null||a===void 0?void 0:a.call(t)}}))}}),Vl=v("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[P("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),P("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),P("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),v("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[zn({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),P("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),P("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),P("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),S("&:focus",[P("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),F("round",[P("rail","border-radius: calc(var(--n-rail-height) / 2);",[P("button","border-radius: calc(var(--n-button-height) / 2);")])]),ht("disabled",[ht("icon",[F("rubber-band",[F("pressed",[P("rail",[P("button","max-width: var(--n-button-width-pressed);")])]),P("rail",[S("&:active",[P("button","max-width: var(--n-button-width-pressed);")])]),F("active",[F("pressed",[P("rail",[P("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),P("rail",[S("&:active",[P("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),F("active",[P("rail",[P("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),P("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[P("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[zn()]),P("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),F("active",[P("rail","background-color: var(--n-rail-color-active);")]),F("loading",[P("rail",`
 cursor: wait;
 `)]),F("disabled",[P("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ll=Object.assign(Object.assign({},_e.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let wt;const yn=V({name:"Switch",props:Ll,setup(e){wt===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?wt=CSS.supports("width","max(1px)"):wt=!1:wt=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Pe(e),o=_e("Switch","-switch",Vl,Fl,e,t),a=fn(e),{mergedSizeRef:l,mergedDisabledRef:i}=a,s=U(e.defaultValue),d=ge(e,"value"),b=qe(d,s),g=I(()=>b.value===e.checkedValue),_=U(!1),p=U(!1),w=I(()=>{const{railStyle:B}=e;if(B)return B({focused:p.value,checked:g.value})});function z(B){const{"onUpdate:value":X,onChange:ee,onUpdateValue:Z}=e,{nTriggerFormInput:ne,nTriggerFormChange:J}=a;X&&oe(X,B),Z&&oe(Z,B),ee&&oe(ee,B),s.value=B,ne(),J()}function T(){const{nTriggerFormFocus:B}=a;B()}function A(){const{nTriggerFormBlur:B}=a;B()}function R(){e.loading||i.value||(b.value!==e.checkedValue?z(e.checkedValue):z(e.uncheckedValue))}function M(){p.value=!0,T()}function E(){p.value=!1,A(),_.value=!1}function H(B){e.loading||i.value||B.key===" "&&(b.value!==e.checkedValue?z(e.checkedValue):z(e.uncheckedValue),_.value=!1)}function $(B){e.loading||i.value||B.key===" "&&(B.preventDefault(),_.value=!0)}const k=I(()=>{const{value:B}=l,{self:{opacityDisabled:X,railColor:ee,railColorActive:Z,buttonBoxShadow:ne,buttonColor:J,boxShadowFocus:ue,loadingColor:le,textColor:pe,iconColor:he,[de("buttonHeight",B)]:ce,[de("buttonWidth",B)]:De,[de("buttonWidthPressed",B)]:Ce,[de("railHeight",B)]:fe,[de("railWidth",B)]:me,[de("railBorderRadius",B)]:we,[de("buttonBorderRadius",B)]:ke},common:{cubicBezierEaseInOut:Re}}=o.value;let G,$e,ve;return wt?(G=`calc((${fe} - ${ce}) / 2)`,$e=`max(${fe}, ${ce})`,ve=`max(${me}, calc(${me} + ${ce} - ${fe}))`):(G=Wt((Ee(fe)-Ee(ce))/2),$e=Wt(Math.max(Ee(fe),Ee(ce))),ve=Ee(fe)>Ee(ce)?me:Wt(Ee(me)+Ee(ce)-Ee(fe))),{"--n-bezier":Re,"--n-button-border-radius":ke,"--n-button-box-shadow":ne,"--n-button-color":J,"--n-button-width":De,"--n-button-width-pressed":Ce,"--n-button-height":ce,"--n-height":$e,"--n-offset":G,"--n-opacity-disabled":X,"--n-rail-border-radius":we,"--n-rail-color":ee,"--n-rail-color-active":Z,"--n-rail-height":fe,"--n-rail-width":me,"--n-width":ve,"--n-box-shadow-focus":ue,"--n-loading-color":le,"--n-text-color":pe,"--n-icon-color":he}}),L=n?at("switch",I(()=>l.value[0]),k,e):void 0;return{handleClick:R,handleBlur:E,handleFocus:M,handleKeyup:H,handleKeydown:$,mergedRailStyle:w,pressed:_,mergedClsPrefix:t,mergedValue:b,checked:g,mergedDisabled:i,cssVars:n?void 0:k,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:o,onRender:a,$slots:l}=this;a==null||a();const{checked:i,unchecked:s,icon:d,"checked-icon":b,"unchecked-icon":g}=l,_=!(Xt(d)&&Xt(b)&&Xt(g));return u("div",{role:"switch","aria-checked":n,class:[`${e}-switch`,this.themeClass,_&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},u("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},Te(i,p=>Te(s,w=>p||w?u("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},u("div",{class:`${e}-switch__rail-placeholder`},u("div",{class:`${e}-switch__button-placeholder`}),p),u("div",{class:`${e}-switch__rail-placeholder`},u("div",{class:`${e}-switch__button-placeholder`}),w)):null)),u("div",{class:`${e}-switch__button`},Te(d,p=>Te(b,w=>Te(g,z=>u(ma,null,{default:()=>this.loading?u(va,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(w||p)?u("div",{class:`${e}-switch__button-icon`,key:w?"checked-icon":"icon"},w||p):!this.checked&&(z||p)?u("div",{class:`${e}-switch__button-icon`,key:z?"unchecked-icon":"icon"},z||p):null})))),Te(i,p=>p&&u("div",{key:"checked",class:`${e}-switch__checked`},p)),Te(s,p=>p&&u("div",{key:"unchecked",class:`${e}-switch__unchecked`},p)))))}}),Cn=hn("n-tabs"),bo={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Ul=V({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:bo,setup(e){const t=rt(Cn,null);return t||Yn("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return u("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Hl=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},_a(bo,["displayDirective"])),sn=V({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Hl,setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:o,closableRef:a,tabStyleRef:l,tabChangeIdRef:i,onBeforeLeaveRef:s,triggerRef:d,handleAdd:b,activateTab:g,handleClose:_}=rt(Cn);return{trigger:d,mergedClosable:I(()=>{if(e.internalAddable)return!1;const{closable:p}=e;return p===void 0?a.value:p}),style:l,clsPrefix:t,value:n,type:o,handleClose(p){p.stopPropagation(),!e.disabled&&_(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){b();return}const{name:p}=e,w=++i.id;if(p!==n.value){const{value:z}=s;z?Promise.resolve(z(e.name,n.value)).then(T=>{T&&i.id===w&&g(p)}):g(p)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:o,label:a,tab:l,value:i,mergedClosable:s,style:d,trigger:b,$slots:{default:g}}=this,_=a??l;return u("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?u("div",{class:`${t}-tabs-tab-pad`}):null,u("div",Object.assign({key:n,"data-name":n,"data-disabled":o?!0:void 0},un({class:[`${t}-tabs-tab`,i===n&&`${t}-tabs-tab--active`,o&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:b==="click"?this.activateTab:void 0,onMouseenter:b==="hover"?this.activateTab:void 0,style:e?void 0:d},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),u("span",{class:`${t}-tabs-tab__label`},e?u(ae,null,u("div",{class:`${t}-tabs-tab__height-placeholder`}," "),u(Et,{clsPrefix:t},{default:()=>u(io,null)})):g?g():typeof _=="object"?_:ga(_??n)),s&&this.type==="card"?u(Gn,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:o}):null))}}),Ol=v("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[F("segment-type",[v("tabs-rail",[S("&.transition-disabled","color: red;",[v("tabs-tab",`
 transition: none;
 `)])])]),F("top",[v("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),F("left",[v("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),F("left, right",`
 flex-direction: row;
 `,[v("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),v("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),F("right",`
 flex-direction: row-reverse;
 `,[v("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),v("tabs-bar",`
 left: 0;
 `)]),F("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[v("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),v("tabs-bar",`
 top: 0;
 `)]),v("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[v("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[v("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[F("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),S("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),F("flex",[v("tabs-nav",{width:"100%"},[v("tabs-wrapper",{width:"100%"},[v("tabs-tab",{marginRight:0})])])]),v("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[P("prefix, suffix",`
 display: flex;
 align-items: center;
 `),P("prefix","padding-right: 16px;"),P("suffix","padding-left: 16px;")]),F("top, bottom",[v("tabs-nav-scroll-wrapper",[S("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),S("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),F("shadow-start",[S("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),F("shadow-end",[S("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),F("left, right",[v("tabs-nav-scroll-wrapper",[S("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),S("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),F("shadow-start",[S("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),F("shadow-end",[S("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),v("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[v("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[S("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),S("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),v("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),v("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),v("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),v("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[F("disabled",{cursor:"not-allowed"}),P("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),P("label",`
 display: flex;
 align-items: center;
 `)]),v("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[S("&.transition-disabled",`
 transition: none;
 `),F("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),v("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),v("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[S("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),S("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),S("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),S("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),S("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),v("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),F("line-type, bar-type",[v("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[S("&:hover",{color:"var(--n-tab-text-color-hover)"}),F("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),F("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),v("tabs-nav",[F("line-type",[F("top",[P("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-bar",`
 bottom: -1px;
 `)]),F("left",[P("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),v("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),v("tabs-bar",`
 right: -1px;
 `)]),F("right",[P("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),v("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),v("tabs-bar",`
 left: -1px;
 `)]),F("bottom",[P("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),v("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),v("tabs-bar",`
 top: -1px;
 `)]),P("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),v("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),v("tabs-bar",`
 border-radius: 0;
 `)]),F("card-type",[P("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),v("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[F("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[P("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ht("disabled",[S("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),F("closable","padding-right: 8px;"),F("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),F("disabled","color: var(--n-tab-text-color-disabled);")]),v("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),F("left, right",[v("tabs-wrapper",`
 flex-direction: column;
 `,[v("tabs-tab-wrapper",`
 flex-direction: column;
 `,[v("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),F("top",[F("card-type",[v("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[F("active",`
 border-bottom: 1px solid #0000;
 `)]),v("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),F("left",[F("card-type",[v("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[F("active",`
 border-right: 1px solid #0000;
 `)]),v("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),F("right",[F("card-type",[v("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[F("active",`
 border-left: 1px solid #0000;
 `)]),v("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),F("bottom",[F("card-type",[v("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[F("active",`
 border-top: 1px solid #0000;
 `)]),v("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Nl=Object.assign(Object.assign({},_e.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),jl=V({name:"Tabs",props:Nl,setup(e,{slots:t}){var n,o,a,l;const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=Pe(e),d=_e("Tabs","-tabs",Ol,xa,e,i),b=U(null),g=U(null),_=U(null),p=U(null),w=U(null),z=U(!0),T=U(!0),A=Tn(e,["labelSize","size"]),R=Tn(e,["activeName","value"]),M=U((o=(n=R.value)!==null&&n!==void 0?n:e.defaultValue)!==null&&o!==void 0?o:t.default?(l=(a=qt(t.default())[0])===null||a===void 0?void 0:a.props)===null||l===void 0?void 0:l.name:null),E=qe(R,M),H={id:0},$=I(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});be(E,()=>{H.id=0,X(),ee()});function k(){var C;const{value:h}=E;return h===null?null:(C=b.value)===null||C===void 0?void 0:C.querySelector(`[data-name="${h}"]`)}function L(C){if(e.type==="card")return;const{value:h}=g;if(h&&C){const c=`${i.value}-tabs-bar--disabled`,{barWidth:x,placement:W}=e;if(C.dataset.disabled==="true"?h.classList.add(c):h.classList.remove(c),["top","bottom"].includes(W)){if(B(["top","maxHeight","height"]),typeof x=="number"&&C.offsetWidth>=x){const q=Math.floor((C.offsetWidth-x)/2)+C.offsetLeft;h.style.left=`${q}px`,h.style.maxWidth=`${x}px`}else h.style.left=`${C.offsetLeft}px`,h.style.maxWidth=`${C.offsetWidth}px`;h.style.width="8192px",h.offsetWidth}else{if(B(["left","maxWidth","width"]),typeof x=="number"&&C.offsetHeight>=x){const q=Math.floor((C.offsetHeight-x)/2)+C.offsetTop;h.style.top=`${q}px`,h.style.maxHeight=`${x}px`}else h.style.top=`${C.offsetTop}px`,h.style.maxHeight=`${C.offsetHeight}px`;h.style.height="8192px",h.offsetHeight}}}function B(C){const{value:h}=g;if(h)for(const c of C)h.style[c]=""}function X(){if(e.type==="card")return;const C=k();C&&L(C)}function ee(C){var h;const c=(h=w.value)===null||h===void 0?void 0:h.$el;if(!c)return;const x=k();if(!x)return;const{scrollLeft:W,offsetWidth:q}=c,{offsetLeft:K,offsetWidth:Y}=x;W>K?c.scrollTo({top:0,left:K,behavior:"smooth"}):K+Y>W+q&&c.scrollTo({top:0,left:K+Y-q,behavior:"smooth"})}const Z=U(null);let ne=0,J=null;function ue(C){const h=Z.value;if(h){ne=C.getBoundingClientRect().height;const c=`${ne}px`,x=()=>{h.style.height=c,h.style.maxHeight=c};J?(x(),J(),J=null):J=x}}function le(C){const h=Z.value;if(h){const c=C.getBoundingClientRect().height,x=()=>{document.body.offsetHeight,h.style.maxHeight=`${c}px`,h.style.height=`${Math.max(ne,c)}px`};J?(J(),J=null,x()):J=x}}function pe(){const C=Z.value;C&&(C.style.maxHeight="",C.style.height="")}const he={value:[]},ce=U("next");function De(C){const h=E.value;let c="next";for(const x of he.value){if(x===h)break;if(x===C){c="prev";break}}ce.value=c,Ce(C)}function Ce(C){const{onActiveNameChange:h,onUpdateValue:c,"onUpdate:value":x}=e;h&&oe(h,C),c&&oe(c,C),x&&oe(x,C),M.value=C}function fe(C){const{onClose:h}=e;h&&oe(h,C)}function me(){const{value:C}=g;if(!C)return;const h="transition-disabled";C.classList.add(h),X(),C.classList.remove(h)}let we=0;function ke(C){var h;if(C.contentRect.width===0&&C.contentRect.height===0||we===C.contentRect.width)return;we=C.contentRect.width;const{type:c}=e;(c==="line"||c==="bar")&&me(),c!=="segment"&&Ye((h=w.value)===null||h===void 0?void 0:h.$el)}const Re=Yt(ke,64);be([()=>e.justifyContent,()=>e.size],()=>{Oe(()=>{const{type:C}=e;(C==="line"||C==="bar")&&me()})});const G=U(!1);function $e(C){var h;const{target:c,contentRect:{width:x}}=C,W=c.parentElement.offsetWidth;if(!G.value)W<x&&(G.value=!0);else{const{value:q}=p;if(!q)return;W-x>q.$el.offsetWidth&&(G.value=!1)}Ye((h=w.value)===null||h===void 0?void 0:h.$el)}const ve=Yt($e,64);function Ue(){const{onAdd:C}=e;C&&C(),Oe(()=>{const h=k(),{value:c}=w;!h||!c||c.scrollTo({left:h.offsetLeft,top:0,behavior:"smooth"})})}function Ye(C){if(!C)return;const{placement:h}=e;if(h==="top"||h==="bottom"){const{scrollLeft:c,scrollWidth:x,offsetWidth:W}=C;z.value=c<=0,T.value=c+W>=x}else{const{scrollTop:c,scrollHeight:x,offsetHeight:W}=C;z.value=c<=0,T.value=c+W>=x}}const gt=Yt(C=>{Ye(C.target)},64);et(Cn,{triggerRef:ge(e,"trigger"),tabStyleRef:ge(e,"tabStyle"),paneClassRef:ge(e,"paneClass"),paneStyleRef:ge(e,"paneStyle"),mergedClsPrefixRef:i,typeRef:ge(e,"type"),closableRef:ge(e,"closable"),valueRef:E,tabChangeIdRef:H,onBeforeLeaveRef:ge(e,"onBeforeLeave"),activateTab:De,handleClose:fe,handleAdd:Ue}),Xa(()=>{X(),ee()}),$t(()=>{const{value:C}=_;if(!C)return;const{value:h}=i,c=`${h}-tabs-nav-scroll-wrapper--shadow-start`,x=`${h}-tabs-nav-scroll-wrapper--shadow-end`;z.value?C.classList.remove(c):C.classList.add(c),T.value?C.classList.remove(x):C.classList.add(x)});const st=U(null);be(E,()=>{if(e.type==="segment"){const C=st.value;C&&Oe(()=>{C.classList.add("transition-disabled"),C.offsetWidth,C.classList.remove("transition-disabled")})}});const _t={syncBarPosition:()=>{X()}},ct=I(()=>{const{value:C}=A,{type:h}=e,c={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[h],x=`${C}${c}`,{self:{barColor:W,closeIconColor:q,closeIconColorHover:K,closeIconColorPressed:Y,tabColor:se,tabBorderColor:te,paneTextColor:Se,tabFontWeight:Ge,tabBorderRadius:jt,tabFontWeightActive:ko,colorSegment:$o,fontWeightStrong:So,tabColorSegment:zo,closeSize:Ro,closeIconSize:Mo,closeColorHover:Bo,closeColorPressed:To,closeBorderRadius:Fo,[de("panePadding",C)]:Rt,[de("tabPadding",x)]:Ao,[de("tabPaddingVertical",x)]:Po,[de("tabGap",x)]:Do,[de("tabGap",`${x}Vertical`)]:Eo,[de("tabTextColor",h)]:Io,[de("tabTextColorActive",h)]:Vo,[de("tabTextColorHover",h)]:Lo,[de("tabTextColorDisabled",h)]:Uo,[de("tabFontSize",C)]:Ho},common:{cubicBezierEaseInOut:Oo}}=d.value;return{"--n-bezier":Oo,"--n-color-segment":$o,"--n-bar-color":W,"--n-tab-font-size":Ho,"--n-tab-text-color":Io,"--n-tab-text-color-active":Vo,"--n-tab-text-color-disabled":Uo,"--n-tab-text-color-hover":Lo,"--n-pane-text-color":Se,"--n-tab-border-color":te,"--n-tab-border-radius":jt,"--n-close-size":Ro,"--n-close-icon-size":Mo,"--n-close-color-hover":Bo,"--n-close-color-pressed":To,"--n-close-border-radius":Fo,"--n-close-icon-color":q,"--n-close-icon-color-hover":K,"--n-close-icon-color-pressed":Y,"--n-tab-color":se,"--n-tab-font-weight":Ge,"--n-tab-font-weight-active":ko,"--n-tab-padding":Ao,"--n-tab-padding-vertical":Po,"--n-tab-gap":Do,"--n-tab-gap-vertical":Eo,"--n-pane-padding-left":Mt(Rt,"left"),"--n-pane-padding-right":Mt(Rt,"right"),"--n-pane-padding-top":Mt(Rt,"top"),"--n-pane-padding-bottom":Mt(Rt,"bottom"),"--n-font-weight-strong":So,"--n-tab-color-segment":zo}}),Me=s?at("tabs",I(()=>`${A.value[0]}${e.type[0]}`),ct,e):void 0;return Object.assign({mergedClsPrefix:i,mergedValue:E,renderedNames:new Set,tabsRailElRef:st,tabsPaneWrapperRef:Z,tabsElRef:b,barElRef:g,addTabInstRef:p,xScrollInstRef:w,scrollWrapperElRef:_,addTabFixed:G,tabWrapperStyle:$,handleNavResize:Re,mergedSize:A,handleScroll:gt,handleTabsResize:ve,cssVars:s?void 0:ct,themeClass:Me==null?void 0:Me.themeClass,animationDirection:ce,renderNameListRef:he,onAnimationBeforeLeave:ue,onAnimationEnter:le,onAnimationAfterEnter:pe,onRender:Me==null?void 0:Me.onRender},_t)},render(){const{mergedClsPrefix:e,type:t,placement:n,addTabFixed:o,addable:a,mergedSize:l,renderNameListRef:i,onRender:s,paneWrapperClass:d,paneWrapperStyle:b,$slots:{default:g,prefix:_,suffix:p}}=this;s==null||s();const w=g?qt(g()).filter($=>$.type.__TAB_PANE__===!0):[],z=g?qt(g()).filter($=>$.type.__TAB__===!0):[],T=!z.length,A=t==="card",R=t==="segment",M=!A&&!R&&this.justifyContent;i.value=[];const E=()=>{const $=u("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},M?null:u("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),T?w.map((k,L)=>(i.value.push(k.props.name),Jt(u(sn,Object.assign({},k.props,{internalCreatedByPane:!0,internalLeftPadded:L!==0&&(!M||M==="center"||M==="start"||M==="end")}),k.children?{default:k.children.tab}:void 0)))):z.map((k,L)=>(i.value.push(k.props.name),Jt(L!==0&&!M?Hn(k):k))),!o&&a&&A?Un(a,(T?w.length:z.length)!==0):null,M?null:u("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return u("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},A&&a?u(Rn,{onResize:this.handleTabsResize},{default:()=>$}):$,A?u("div",{class:`${e}-tabs-pad`}):null,A?null:u("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},H=R?"top":n;return u("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${l}-size`,M&&`${e}-tabs--flex`,`${e}-tabs--${H}`],style:this.cssVars},u("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${H}`,`${e}-tabs-nav`]},Te(_,$=>$&&u("div",{class:`${e}-tabs-nav__prefix`},$)),R?u("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},T?w.map(($,k)=>(i.value.push($.props.name),u(sn,Object.assign({},$.props,{internalCreatedByPane:!0,internalLeftPadded:k!==0}),$.children?{default:$.children.tab}:void 0))):z.map(($,k)=>(i.value.push($.props.name),k===0?$:Hn($)))):u(Rn,{onResize:this.handleNavResize},{default:()=>u("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(H)?u(gr,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:E}):u("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},E()))}),o&&a&&A?Un(a,!0):null,Te(p,$=>$&&u("div",{class:`${e}-tabs-nav__suffix`},$))),T&&(this.animated&&(H==="top"||H==="bottom")?u("div",{ref:"tabsPaneWrapperRef",style:b,class:[`${e}-tabs-pane-wrapper`,d]},Ln(w,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ln(w,this.mergedValue,this.renderedNames)))}});function Ln(e,t,n,o,a,l,i){const s=[];return e.forEach(d=>{const{name:b,displayDirective:g,"display-directive":_}=d.props,p=z=>g===z||_===z,w=t===b;if(d.key!==void 0&&(d.key=b),w||p("show")||p("show:lazy")&&n.has(b)){n.has(b)||n.add(b);const z=!p("if");s.push(z?ot(d,[[It,w]]):d)}}),i?u(wa,{name:`${i}-transition`,onBeforeLeave:o,onEnter:a,onAfterEnter:l},{default:()=>s}):s}function Un(e,t){return u(sn,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function Hn(e){const t=ya(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Jt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}function Wl(e,t,n){return Xl(e,t).map(l=>vo(l,n))}function Xl(e,t){const n=[];return t.some(o=>{const a=e.includes(o.routeName);return a&&n.push(...mo(e,o)),a}),n}function mo(e,t){const n=[];return e===t.routeName&&n.push(t),e.includes(t.routeName)&&t.children&&t.children.length&&(n.push(t),n.push(...t.children.map(o=>mo(e,o)).flat(1))),n}function vo(e,t){var a;const n=!!(e.children&&e.children.length),o={key:e.routeName,label:e.label,routeName:e.routeName,disabled:e.routePath===t,hasChildren:n,i18nTitle:e.i18nTitle};return e.icon&&(o.icon=e.icon),n&&(o.options=(a=e.children)==null?void 0:a.map(l=>vo(l,t))),o}const ql=[{label:"红色系",data:[{label:"绾",color:"#A98175"},{label:"檀",color:"#B36D61"},{label:"栗色",color:"#60281E"},{label:"玄",color:"#622A1D"},{label:"胭脂",color:"#9D2933"},{label:"殷红",color:"#BE002F"},{label:"枣红",color:"#C32136"},{label:"赤",color:"#C3272B"},{label:"绯红",color:"#C83C23"},{label:"赫赤",color:"#C91F37"},{label:"樱桃红",color:"#C93756"},{label:"茜色",color:"#CB3A56"},{label:"海棠红",color:"#DB5A6B"},{label:"酡红",color:"#DC3023"},{label:"妃色",color:"#ED5736"},{label:"嫣红",color:"#EF7A82"},{label:"品红",color:"#F00056"},{label:"石榴红",color:"#F20C00"},{label:"银红",color:"#F05654"},{label:"彤",color:"#F35336"},{label:"桃红",color:"#F47983"},{label:"酡颜",color:"#F9906F"},{label:"洋红",color:"#FF0097"},{label:"大红",color:"#FF2121"},{label:"火红",color:"#FF2D51"},{label:"炎",color:"#FF3300"},{label:"朱红",color:"#FF4C00"},{label:"丹",color:"#FF4E20"},{label:"粉红",color:"#FFB3A7"},{label:"藕荷",color:"#E4C6D0"},{label:"藕",color:"#EDD1D8"},{label:"水红",color:"#F3D3E7"},{label:"鱼肚白",color:"#FCEFE8"}]},{label:"橙色系",data:[{label:"褐色",color:"#6E511E"},{label:"棕黑",color:"#7C4B00"},{label:"赭色",color:"#955539"},{label:"棕红",color:"#9B4400"},{label:"赭",color:"#9C5333"},{label:"驼色",color:"#A88462"},{label:"棕色",color:"#B25D25"},{label:"茶色",color:"#B35C44"},{label:"琥珀",color:"#CA6924"},{label:"黄栌",color:"#E29C45"},{label:"橙色",color:"#FA8C35"},{label:"橘红",color:"#FF7500"},{label:"橘黄",color:"#FF8936"},{label:"杏红",color:"#FF8C31"},{label:"橙黄",color:"#FFA400"},{label:"杏黄",color:"#FFA631"},{label:"姜黄",color:"#FFC773"}]},{label:"黄色系",data:[{label:"黧",color:"#5D513C"},{label:"黎",color:"#75664D"},{label:"棕绿",color:"#827100"},{label:"秋色",color:"#896C39"},{label:"苍黄",color:"#A29B7C"},{label:"乌金",color:"#A78E44"},{label:"棕黄",color:"#AE7000"},{label:"昏黄",color:"#C89B40"},{label:"枯黄",color:"#D3B17D"},{label:"秋香色",color:"#D9B611"},{label:"金",color:"#EACD76"},{label:"牙",color:"#EEDEB0"},{label:"缃色",color:"#F0C239"},{label:"赤金",color:"#F2BE45"},{label:"鸭黄",color:"#FAFF72"},{label:"鹅黄",color:"#FFF143"},{label:"缟",color:"#F2ECDE"},{label:"象牙白",color:"#FFFBF0"}]},{label:"绿色系",data:[{label:"竹青",color:"#789262"},{label:"黯",color:"#41555D"},{label:"黛绿",color:"#426666"},{label:"松花绿",color:"#057748"},{label:"绿沈",color:"#0C8918"},{label:"深绿",color:"#009900"},{label:"青葱",color:"#0AA344"},{label:"铜绿",color:"#549688"},{label:"苍翠",color:"#519A73"},{label:"松柏绿",color:"#21A675"},{label:"葱青",color:"#0EB83A"},{label:"油绿",color:"#00BC12"},{label:"绿",color:"#00E500"},{label:"草绿",color:"#40DE5A"},{label:"豆青",color:"#96CE54"},{label:"豆绿",color:"#9ED048"},{label:"葱绿",color:"#9ED900"},{label:"葱黄",color:"#A3D900"},{label:"柳绿",color:"#AFDD22"},{label:"嫩绿",color:"#BDDD22"},{label:"柳黄",color:"#C9DD22"},{label:"松花",color:"#BCE672"},{label:"樱草色",color:"#EAFF56"}]},{label:"青色系",data:[{label:"水",color:"#88ADA6"},{label:"青碧",color:"#48C0A3"},{label:"碧",color:"#1BD1A5"},{label:"石青",color:"#7BCFA6"},{label:"青翠",color:"#00E079"},{label:"青",color:"#00E09E"},{label:"碧绿",color:"#2ADD9C"},{label:"玉",color:"#2EDFA3"},{label:"翡翠",color:"#3DE1AD"},{label:"缥",color:"#7FECAD"},{label:"碧蓝",color:"#3EEDE7"},{label:"湖绿",color:"#25F8CD"},{label:"艾绿",color:"#A4E2C6"},{label:"青白",color:"#C0EBD7"},{label:"水绿",color:"#D4F2E7"},{label:"鸭卵青",color:"#E0EEE8"},{label:"素",color:"#E0F0E9"},{label:"荼白",color:"#F3F9F1"}]},{label:"蓝色系",data:[{label:"藏蓝",color:"#3B2E7E"},{label:"宝蓝",color:"#4B5CC4"},{label:"绀青",color:"#003371"},{label:"藏青",color:"#2E4E7E"},{label:"靛蓝",color:"#065279"},{label:"靛青",color:"#177CB0"},{label:"群青",color:"#4C8DAE"},{label:"蓝",color:"#44CEF6"},{label:"湖蓝",color:"#30DFF3"},{label:"蔚蓝",color:"#70F3FF"},{label:"月白",color:"#D6ECF0"},{label:"水蓝",color:"#D2F0F4"},{label:"莹白",color:"#E3F9FD"},{label:"雪白",color:"#F0FCFF"}]},{label:"紫色系",data:[{label:"黛",color:"#4A4266"},{label:"紫檀",color:"#4C211B"},{label:"紫棠",color:"#56004F"},{label:"黛紫",color:"#574266"},{label:"绛紫",color:"#8C4356"},{label:"紫酱",color:"#815463"},{label:"酱紫",color:"#815476"},{label:"黝",color:"#6B6882"},{label:"青莲",color:"#801DAE"},{label:"紫",color:"#8D4BBB"},{label:"雪青",color:"#B0A4E3"},{label:"丁香",color:"#CCA4E3"}]},{label:"灰色系",data:[{label:"黑",color:"#000000"},{label:"漆黑",color:"#161823"},{label:"象牙黑",color:"#312520"},{label:"乌黑",color:"#392F41"},{label:"玄青",color:"#3D3B4F"},{label:"缁",color:"#493131"},{label:"黝黑",color:"#665757"},{label:"鸦青",color:"#424C50"},{label:"黛蓝",color:"#425066"},{label:"苍黑",color:"#395260"},{label:"墨",color:"#50616D"},{label:"灰",color:"#808080"},{label:"苍",color:"#75878A"},{label:"墨灰",color:"#758A99"},{label:"苍青",color:"#7397AB"},{label:"蓝灰",color:"#A1AFC9"},{label:"老银",color:"#BACAC6"},{label:"蟹壳青",color:"#BBCDC5"},{label:"苍白",color:"#D1D9E0"},{label:"淡青",color:"#D3E0F3"},{label:"银白",color:"#E9E7EF"},{label:"霜",color:"#E9F1F6"},{label:"铅白",color:"#F0F0F4"},{label:"精白",color:"#FFFFFF"}]}],go=ql;function Kl(e){return go.some(t=>t.data.some(o=>o.color===e))}function kn(){const e=ze(),t=Q(),n=Ca(ka),o=I(()=>{const g="vertical",_="horizontal";return t.layout.mode.includes(g)?g:_}),a=n.smaller("sm"),l={vertical:{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!0},"vertical-mix":{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!1},horizontal:{showLogo:!0,showHeaderMenu:!0,showMenuCollapse:!1},"horizontal-mix":{showLogo:!0,showHeaderMenu:!1,showMenuCollapse:!0}},i=I(()=>l[t.layout.mode]),s=I(()=>t.layout.mode!=="horizontal"),d=I(()=>{const{width:g,mixWidth:_,mixChildMenuWidth:p}=t.sider,w=t.layout.mode==="vertical-mix";let z=w?_:g;return w&&e.mixSiderFixed&&(z+=p),z}),b=I(()=>{const{collapsedWidth:g,mixCollapsedWidth:_,mixChildMenuWidth:p}=t.sider,w=t.layout.mode==="vertical-mix";let z=w?_:g;return w&&e.mixSiderFixed&&(z+=p),z});return be(a,g=>{g&&e.setSiderCollapse(!0)},{immediate:!0}),{mode:o,isMobile:a,headerProps:i,siderVisible:s,siderWidth:d,siderCollapsedWidth:b}}const Yl={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Gl=D("path",{fill:"currentColor",d:"m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"},null,-1),Zl=[Gl];function Jl(e,t){return m(),N("svg",Yl,Zl)}const _o={name:"ant-design-setting-outlined",render:Jl},Ql={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},ei=D("path",{fill:"currentColor",d:"m563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"},null,-1),ti=[ei];function ni(e,t){return m(),N("svg",Ql,ti)}const oi={name:"ant-design-close-outlined",render:ni},ai=V({name:"DrawerButton",__name:"index",setup(e){const t=ze();return(n,o)=>{const a=oi,l=_o,i=Ie;return m(),j(i,{type:"primary",class:ye([[{"!right-330px":r(t).settingDrawerVisible},r(t).settingDrawerVisible?"ease-out":"ease-in"],"fixed top-360px right-14px z-10000 w-42px h-42px !p-0 transition-all duration-300"]),onClick:r(t).toggleSettingDrawerVisible},{default:y(()=>[r(t).settingDrawerVisible?(m(),j(a,{key:0,class:"text-24px"})):(m(),j(l,{key:1,class:"text-24px"}))]),_:1},8,["class","onClick"])}}}),ri={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},li=D("path",{fill:"currentColor",d:"M12.04 8.04h-.09l-1.6 4.55h3.29z"},null,-1),ii=D("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3 14.41l-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2c-.38 0-.72-.24-.84-.59z"},null,-1),si=[li,ii];function ci(e,t){return m(),N("svg",ri,si)}const di={name:"ic-round-hdr-auto",render:ci},ui={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},hi=D("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9z"},null,-1),fi=[hi];function pi(e,t){return m(),N("svg",ui,fi)}const bi={name:"ic-baseline-do-not-disturb",render:pi},mi={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},vi=D("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),gi=[vi];function _i(e,t){return m(),N("svg",mi,gi)}const xo={name:"mdi-moon-waning-crescent",render:_i},xi={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},wi=D("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),yi=[wi];function Ci(e,t){return m(),N("svg",xi,yi)}const wo={name:"mdi-white-balance-sunny",render:Ci},ki={class:"flex-y-center justify-between"},ie=V({name:"SettingMenu",__name:"index",props:{label:{}},setup(e){return(t,n)=>(m(),N("div",ki,[D("span",null,re(t.label),1),Ot(t.$slots,"default")]))}}),$i=V({name:"DarkMode",__name:"index",setup(e){const t=Q();return(n,o)=>{const a=mt,l=wo,i=xo,s=yn,d=bi,b=di,g=bt;return m(),N(ae,null,[f(a,{"title-placement":"center"},{default:y(()=>[Be(re(r(O)("message.themeConfig.darkMode.title")),1)]),_:1}),f(g,{vertical:"",size:"large"},{default:y(()=>[f(ie,{label:r(O)("message.themeConfig.darkMode.darkTheme")},{default:y(()=>[f(s,{value:r(t).darkMode,"onUpdate:value":r(t).setDarkMode},{checked:y(()=>[f(l,{class:"text-14px text-white"})]),unchecked:y(()=>[f(i,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.darkMode.followSystem")},{default:y(()=>[f(s,{value:r(t).followSystemTheme,"onUpdate:value":r(t).setFollowSystemTheme},{checked:y(()=>[f(d,{class:"text-14px text-white"})]),unchecked:y(()=>[f(b,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.darkMode.dark_side")},{default:y(()=>[f(s,{value:r(t).sider.inverted,"onUpdate:value":r(t).setSiderInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.darkMode.dark_header")},{default:y(()=>[f(s,{value:r(t).header.inverted,"onUpdate:value":r(t).setHeaderInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.darkMode.dark_bottom")},{default:y(()=>[f(s,{value:r(t).footer.inverted,"onUpdate:value":r(t).setFooterInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Si=V({name:"LayoutCard",__name:"layout-card",props:{mode:{},label:{},checked:{type:Boolean}},setup(e){const t=e,n={vertical:{placement:"bottom-start",headerClass:"",menuClass:"w-1/3 h-full",mainClass:"w-2/3 h-3/4"},"vertical-mix":{placement:"bottom",headerClass:"",menuClass:"w-1/4 h-full",mainClass:"w-2/3 h-3/4"},horizontal:{placement:"bottom",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-full h-3/4"},"horizontal-mix":{placement:"bottom-end",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-2/3 h-3/4"}},o=I(()=>n[t.mode]);return(a,l)=>{const i=qa;return m(),N("div",{class:ye(["border-2px rounded-6px cursor-pointer hover:border-primary",[a.checked?"border-primary":"border-transparent"]])},[f(i,{placement:o.value.placement,trigger:"hover"},{trigger:y(()=>[D("div",{class:ye(["layout-card__shadow gap-6px w-96px h-64px p-6px rd-4px",[a.mode.includes("vertical")?"flex":"flex-col"]])},[Ot(a.$slots,"default",{},void 0,!0)],2)]),default:y(()=>[D("span",null,re(a.label),1)]),_:3},8,["placement"])],2)}}}),zi=Ke(Si,[["__scopeId","data-v-e2b400d3"]]),Le=e=>($a("data-v-eaed32ef"),e=e(),Sa(),e),Ri=Le(()=>D("div",{class:"w-18px h-full bg-primary:50 rd-4px"},null,-1)),Mi=Le(()=>D("div",{class:"flex-1 flex-col gap-6px"},[D("div",{class:"h-16px bg-primary rd-4px"}),D("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Bi=Le(()=>D("div",{class:"w-8px h-full bg-primary:50 rd-4px"},null,-1)),Ti=Le(()=>D("div",{class:"w-16px h-full bg-primary:50 rd-4px"},null,-1)),Fi=Le(()=>D("div",{class:"flex-1 flex-col gap-6px"},[D("div",{class:"h-16px bg-primary rd-4px"}),D("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Ai=Le(()=>D("div",{class:"h-16px bg-primary rd-4px"},null,-1)),Pi=Le(()=>D("div",{class:"flex-1 flex gap-6px"},[D("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Di=Le(()=>D("div",{class:"h-16px bg-primary rd-4px"},null,-1)),Ei=Le(()=>D("div",{class:"flex-1 flex gap-6px"},[D("div",{class:"w-18px bg-primary:50 rd-4px"}),D("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Ii=V({name:"LayoutMode",__name:"index",setup(e){const t=Q();return(n,o)=>{const a=mt,l=bt;return m(),N(ae,null,[f(a,{"title-placement":"center"},{default:y(()=>[Be(re(r(O)("message.themeConfig.layoutMode.title")),1)]),_:1}),f(l,{justify:"space-around",wrap:!0,size:24,class:"px-12px"},{default:y(()=>[(m(!0),N(ae,null,Xe(r(t).layout.modeList,i=>(m(),j(r(zi),{key:i.value,mode:i.value,label:r(Ct).get("lang")==="en"?i.labelEn:i.label,checked:i.value===r(t).layout.mode,onClick:s=>r(t).setLayoutMode(i.value)},{default:y(()=>[i.value==="vertical"?(m(),N(ae,{key:0},[Ri,Mi],64)):xe("",!0),i.value==="vertical-mix"?(m(),N(ae,{key:1},[Bi,Ti,Fi],64)):xe("",!0),i.value==="horizontal"?(m(),N(ae,{key:2},[Ai,Pi],64)):xe("",!0),i.value==="horizontal-mix"?(m(),N(ae,{key:3},[Di,Ei],64)):xe("",!0)]),_:2},1032,["mode","label","checked","onClick"]))),128))]),_:1})],64)}}}),Vi=Ke(Ii,[["__scopeId","data-v-eaed32ef"]]),Li={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ui=D("path",{fill:"currentColor",d:"M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"},null,-1),Hi=[Ui];function Oi(e,t){return m(),N("svg",Li,Hi)}const Ni={name:"ic-outline-check",render:Oi},yo=V({name:"ColorCheckbox",__name:"color-checkbox",props:{color:{},checked:{type:Boolean},iconClass:{default:"text-14px"}},setup(e){const t=e,n=["#ffffff","#fff","rgb(255,255,255)"],o=I(()=>n.includes(t.color));return(a,l)=>{const i=Ni;return m(),N("div",{class:"flex-center w-20px h-20px rounded-2px shadow cursor-pointer",style:Ae({backgroundColor:a.color})},[a.checked?(m(),j(i,{key:0,class:ye([a.iconClass,o.value?"text-gray-700":"text-white"])},null,8,["class"])):xe("",!0)],4)}}}),ji={class:"flex-x-center"},Wi={class:"text-center"},Xi=V({name:"ColorModal",__name:"color-modal",props:{visible:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const n=Q();function o(){t("close")}return(a,l)=>{const i=Ja,s=ro,d=lo,b=Ul,g=jl,_=Zn;return m(),j(_,{show:a.visible,preset:"card",class:"w-640px h-480px","z-index":10001,onClose:o},{default:y(()=>[D("div",ji,[f(i,{type:"primary",size:24},{default:y(()=>[Be("中国传统颜色")]),_:1})]),f(g,null,{default:y(()=>[(m(!0),N(ae,null,Xe(r(go),p=>(m(),j(b,{key:p.label,name:p.label,tab:p.label},{default:y(()=>[f(d,{cols:8,"x-gap":16,"y-gap":8},{default:y(()=>[(m(!0),N(ae,null,Xe(p.data,w=>(m(),j(s,{key:w.label},{default:y(()=>[f(yo,{class:"!w-full !h-36px !rounded-4px",color:w.color,checked:w.color===r(n).themeColor,"icon-class":"text-20px",onClick:z=>r(n).setThemeColor(w.color)},null,8,["color","checked","onClick"]),D("p",Wi,re(w.label),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["name","tab"]))),128))]),_:1})]),_:1},8,["show"])}}}),qi=V({name:"ThemeColorSelect",__name:"index",setup(e){const t=Q(),{bool:n,setTrue:o,setFalse:a}=Nt(),l=I(()=>Kl(t.themeColor)),i=I(()=>l.value?"primary":"default");return(s,d)=>{const b=mt,g=ro,_=lo,p=ll,w=Ie,z=bt;return m(),N(ae,null,[f(b,{"title-placement":"center"},{default:y(()=>[Be(re(r(O)("message.themeConfig.SystemTheme.title")),1)]),_:1}),f(_,{cols:8,"x-gap":8,"y-gap":12},{default:y(()=>[(m(!0),N(ae,null,Xe(r(t).themeColorList,T=>(m(),j(g,{key:T,class:"flex-x-center"},{default:y(()=>[f(r(yo),{color:T,checked:T===r(t).themeColor,onClick:A=>r(t).setThemeColor(T)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),f(z,{vertical:!0,class:"pt-12px"},{default:y(()=>[f(p,{value:r(t).themeColor,"show-alpha":!1,onUpdateValue:r(t).setThemeColor},null,8,["value","onUpdateValue"]),f(w,{block:!0,type:i.value,onClick:r(o)},{default:y(()=>[Be(re(r(O)("message.themeConfig.SystemTheme.moreColor")),1)]),_:1},8,["type","onClick"])]),_:1}),f(r(Xi),{visible:r(n),onClose:r(a)},null,8,["visible","onClose"])],64)}}}),Ki=V({name:"PageFunc",__name:"index",setup(e){const t=Q();return(n,o)=>{const a=mt,l=so,i=yn,s=Il,d=bt;return m(),N(ae,null,[f(a,{"title-placement":"center"},{default:y(()=>[Be(re(r(O)("message.themeConfig.InterfaceFunction.title")),1)]),_:1}),f(d,{vertical:"",size:"large"},{default:y(()=>[f(ie,{label:r(O)("message.themeConfig.InterfaceFunction.scrollMode")},{default:y(()=>[f(l,{class:"w-120px",size:"small",value:r(t).scrollMode,options:r(t).scrollModeList,"label-field":r(Ct).get("lang")==="en"?"labelEn":"label","onUpdate:value":r(t).setScrollMode},null,8,["value","options","label-field","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceFunction.FixedHeader")},{default:y(()=>[f(i,{value:r(t).fixedHeaderAndTab,"onUpdate:value":r(t).setIsFixedHeaderAndTab},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceFunction.TopMenuLocation")},{default:y(()=>[f(l,{class:"w-120px",size:"small",value:r(t).menu.horizontalPosition,options:r(t).menu.horizontalPositionList,"label-field":r(Ct).get("lang")==="en"?"labelEn":"label","onUpdate:value":r(t).setHorizontalMenuPosition},null,8,["value","options","label-field","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceFunction.headHeight")},{default:y(()=>[f(s,{class:"w-120px",size:"small",value:r(t).header.height,step:1,"onUpdate:value":r(t).setHeaderHeight},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceFunction.tabHeight")},{default:y(()=>[f(s,{class:"w-120px",size:"small",value:r(t).tab.height,step:1,"onUpdate:value":r(t).setTabHeight},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceFunction.tabCache")},{default:y(()=>[f(i,{value:r(t).tab.isCache,"onUpdate:value":r(t).setTabIsCache},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceFunction.sidebarWidth")},{default:y(()=>[f(s,{class:"w-120px",size:"small",value:r(t).sider.width,step:10,"onUpdate:value":r(t).setSiderWidth},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceFunction.sidebarMixedWidth")},{default:y(()=>[f(s,{class:"w-120px",size:"small",value:r(t).sider.mixWidth,step:5,"onUpdate:value":r(t).setMixSiderWidth},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceFunction.showFooter")},{default:y(()=>[f(i,{value:r(t).footer.visible,"onUpdate:value":r(t).setFooterVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceFunction.fixedFooter")},{default:y(()=>[f(i,{value:r(t).footer.fixed,"onUpdate:value":r(t).setFooterIsFixed},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceFunction.bottomRight")},{default:y(()=>[f(i,{value:r(t).footer.right,"onUpdate:value":r(t).setFooterIsRight},null,8,["value","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Yi=V({name:"PageView",__name:"index",setup(e){const t=Q();return(n,o)=>{const a=mt,l=yn,i=so,s=bt;return m(),N(ae,null,[f(a,{"title-placement":"center"},{default:y(()=>[Be(re(r(O)("message.themeConfig.InterfaceDisplay.title")),1)]),_:1}),f(s,{vertical:"",size:"large"},{default:y(()=>[f(ie,{label:r(O)("message.themeConfig.InterfaceDisplay.breadCrumbs")},{default:y(()=>[f(l,{value:r(t).header.crumb.visible,"onUpdate:value":r(t).setHeaderCrumbVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceDisplay.breadCrumbsIcons")},{default:y(()=>[f(l,{value:r(t).header.crumb.showIcon,"onUpdate:value":r(t).setHeaderCrumbIconVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceDisplay.multipleTabs")},{default:y(()=>[f(l,{value:r(t).tab.visible,"onUpdate:value":r(t).setTabVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceDisplay.multipleTabsStyle")},{default:y(()=>[f(i,{class:"w-120px",size:"small",value:r(t).tab.mode,options:r(t).tab.modeList,"label-field":r(Ct).get("lang")==="en"?"labelEn":"label","onUpdate:value":r(t).setTabMode},null,8,["value","options","label-field","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceDisplay.pageSwitchAnimate")},{default:y(()=>[f(l,{value:r(t).page.animate,"onUpdate:value":r(t).setPageIsAnimate},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),f(ie,{label:r(O)("message.themeConfig.InterfaceDisplay.pageSwitchAnimateType")},{default:y(()=>[f(i,{class:"w-120px",size:"small",value:r(t).page.animateMode,options:r(t).page.animateModeList,"label-field":r(Ct).get("lang")==="en"?"labelEn":"label","onUpdate:value":r(t).setPageAnimateMode},null,8,["value","options","label-field","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Gi=V({name:"ThemeConfig",__name:"index",setup(e){const t=Q(),n=U(),o=U(a());function a(){return JSON.stringify(t.$state)}function l(){var d;t.resetThemeStore(),(d=window.$message)==null||d.success(O("message.themeConfig.tips.resetTip"))}function i(){if(!n.value)return;new Ya(n.value).on("success",()=>{var b;(b=window.$dialog)==null||b.success({title:O("message.common.tips.operationSuccessful"),content:`${O("message.themeConfig.tips.copyTip")} src/settings/theme.json！`,positiveText:O("message.common.confirm")})})}const s=be(()=>t.$state,()=>{o.value=a()},{deep:!0});return Lt(()=>{i()}),Wn(()=>{s()}),(d,b)=>{const g=mt,_=Ie,p=bt;return m(),N(ae,null,[f(g,{"title-placement":"center"},{default:y(()=>[Be(re(r(O)("message.themeConfig.themeConfig.title")),1)]),_:1}),ot(D("textarea",{id:"themeConfigCopyTarget","onUpdate:modelValue":b[0]||(b[0]=w=>o.value=w),class:"absolute opacity-0"},null,512),[[za,o.value]]),f(p,{vertical:""},{default:y(()=>[D("div",{ref_key:"copyRef",ref:n,"data-clipboard-target":"#themeConfigCopyTarget"},[f(_,{type:"primary",block:!0},{default:y(()=>[Be(re(r(O)("message.themeConfig.themeConfig.copyTheme")),1)]),_:1})],512),f(_,{type:"warning",block:!0,onClick:l},{default:y(()=>[Be(re(r(O)("message.themeConfig.themeConfig.resetTheme")),1)]),_:1})]),_:1})],64)}}}),Zi=V({name:"SettingDrawer",__name:"index",setup(e){const t=ze(),n={}.VITE_VERCEL==="Y";return(o,a)=>{const l=Sl,i=kl;return m(),N(ae,null,[f(i,{show:r(t).settingDrawerVisible,"display-directive":"show",width:330,onMaskClick:r(t).closeSettingDrawer},{default:y(()=>[f(l,{title:r(O)("message.common.themeConfig"),"native-scrollbar":!1},{default:y(()=>[f(r($i)),f(r(Vi)),f(r(qi)),f(r(Ki)),f(r(Yi)),f(r(Gi))]),_:1},8,["title"])]),_:1},8,["show","onMaskClick"]),r(n)?(m(),j(r(ai),{key:0})):xe("",!0)],64)}}}),vt=V({name:"DarkModeContainer",__name:"dark-mode-container",props:{inverted:{type:Boolean,default:!1}},setup(e){return(t,n)=>(m(),N("div",{class:ye(["dark:bg-dark dark:text-white dark:text-opacity-82 transition-all",t.inverted?"bg-#001428 text-white":"bg-white text-#333639"])},[Ot(t.$slots,"default")],2))}}),$n=V({name:"GlobalLogo",__name:"index",props:{showTitle:{type:Boolean}},setup(e){const t=Jn("root");return(n,o)=>{const a=Ra,l=Qn("router-link");return m(),j(l,{to:r(t),class:"flex-center w-full nowrap-hidden"},{default:y(()=>[f(a,{class:"text-32px text-primary"}),ot(D("h2",{class:"pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out"},re(r(O)("message.system.title")),513),[[It,n.showTitle]])]),_:1},8,["to"])}}}),Ji={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Qi=D("path",{fill:"currentColor",d:"M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"},null,-1),es=[Qi];function ts(e,t){return m(),N("svg",Ji,es)}const Co={name:"uil-search",render:ts},ns={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},os=D("path",{fill:"currentColor",d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"},null,-1),as=[os];function rs(e,t){return m(),N("svg",ns,as)}const ls={name:"ant-design-enter-outlined",render:rs},is={class:"pb-12px"},ss=["onMouseenter"],cs={class:"flex-1 ml-5px"},ds=V({name:"SearchResult",__name:"search-result",props:{value:{},options:{}},emits:["update:value","enter"],setup(e,{emit:t}){const n=e,o=Q(),a=I({get(){return n.value},set(s){t("update:value",s)}});async function l(s){a.value=s.path}function i(){t("enter")}return(s,d)=>{const b=eo,g=ls,_=zt;return m(),j(_,null,{default:y(()=>[D("div",is,[(m(!0),N(ae,null,Xe(s.options,p=>{var w,z,T;return m(),N("div",{key:p.path,class:"bg-#e5e7eb dark:bg-dark h-56px mt-8px px-14px rounded-4px cursor-pointer flex-y-center justify-between",style:Ae({background:p.path===a.value?r(o).themeColor:"",color:p.path===a.value?"#fff":""}),onClick:i,onMouseenter:A=>l(p)},[f(b,{icon:p.meta.icon,"local-icon":p.meta.localIcon},null,8,["icon","local-icon"]),D("span",cs,re((w=p.meta)!=null&&w.i18nTitle?r(O)((z=p.meta)==null?void 0:z.i18nTitle):(T=p.meta)==null?void 0:T.title),1),f(g,{class:"icon text-20px p-2px mr-3px"})],44,ss)}),128))])]),_:1})}}}),us={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},hs=D("path",{fill:"currentColor",d:"M1 7h6v2H3v2h4v2H3v2h4v2H1V7m10 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H9v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2m8 0h2a2 2 0 0 1 2 2v1h-2V9h-2v6h2v-1h2v1c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2Z"},null,-1),fs=[hs];function ps(e,t){return m(),N("svg",us,fs)}const bs={name:"mdi-keyboard-esc",render:ps},ms={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},vs=D("path",{fill:"currentColor",d:"M7.03 13.92h4V5l2.01-.03v8.95h3.99l-5 5Z"},null,-1),gs=[vs];function _s(e,t){return m(),N("svg",ms,gs)}const xs={name:"mdi-arrow-down-thin",render:_s},ws={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ys=D("path",{fill:"currentColor",d:"M7.03 9.97h4v8.92l2.01.03V9.97h3.99l-5-5Z"},null,-1),Cs=[ys];function ks(e,t){return m(),N("svg",ws,Cs)}const $s={name:"mdi-arrow-up-thin",render:ks},Ss={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},zs=D("path",{fill:"currentColor",d:"M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7h-2Z"},null,-1),Rs=[zs];function Ms(e,t){return m(),N("svg",Ss,Rs)}const Bs={name:"mdi-keyboard-return",render:Ms},Ts={class:"px-24px h-44px flex-y-center"},Fs={class:"mr-14px flex-y-center"},As={class:"mr-14px flex-y-center"},Ps={class:"flex-y-center"},Ds=V({name:"SearchFooter",__name:"search-footer",setup(e){return(t,n)=>{const o=Bs,a=$s,l=xs,i=bs;return m(),N("div",Ts,[D("span",Fs,[f(o,{class:"icon text-20px p-2px mr-6px"}),D("span",null,re(r(O)("message.common.confirm")),1)]),D("span",As,[f(a,{class:"icon text-20px p-2px mr-5px"}),f(l,{class:"icon text-20px p-2px mr-6px"}),D("span",null,re(r(O)("message.common.tab")),1)]),D("span",Ps,[f(i,{class:"icon text-20px p-2px mr-6px"}),D("span",null,re(r(O)("message.common.close")),1)])])}}}),Es=Ke(Ds,[["__scopeId","data-v-b07b5315"]]),Is={class:"mt-20px"},Vs=V({name:"SearchModal",__name:"search-modal",props:{value:{type:Boolean}},emits:["update:value"],setup(e,{emit:t}){const n=e,{isMobile:o}=kn(),a=to(),l=pt(),i=U(""),s=U(""),d=Ma([]),b=U(),g=Ba(p,300),_=I({get(){return n.value},set(R){t("update:value",R)}});be(_,async R=>{var M;R&&(await Oe(),(M=b.value)==null||M.focus())});function p(){var R;d.value=l.searchMenus.filter(M=>{var H,$,k;const E=(H=M.meta)!=null&&H.i18nTitle?O(($=M.meta)==null?void 0:$.i18nTitle):(k=M.meta)==null?void 0:k.title;return i.value&&E.toLocaleLowerCase().includes(i.value.toLocaleLowerCase().trim())}),((R=d.value)==null?void 0:R.length)>0?s.value=d.value[0].path:s.value=""}function w(){_.value=!1,setTimeout(()=>{d.value=[],i.value=""},200)}function z(){const{length:R}=d.value;if(R===0)return;const M=d.value.findIndex(E=>E.path===s.value);M===0?s.value=d.value[R-1].path:s.value=d.value[M-1].path}function T(){const{length:R}=d.value;if(R===0)return;const M=d.value.findIndex(E=>E.path===s.value);M+1===R?s.value=d.value[0].path:s.value=d.value[M+1].path}function A(){var E;const{length:R}=d.value;if(R===0||s.value==="")return;const M=d.value.find(H=>H.path===s.value);(E=M==null?void 0:M.meta)!=null&&E.href?window.open(s.value,"__blank"):(a.push(s.value),w())}return Bt("Escape",w),Bt("Enter",A),Bt("ArrowUp",z),Bt("ArrowDown",T),(R,M)=>{const E=Co,H=_n,$=Ie,k=ho,L=Qa,B=Zn;return m(),j(B,{show:_.value,"onUpdate:show":M[2]||(M[2]=X=>_.value=X),segmented:{footer:"soft"},closable:!1,preset:"card","footer-style":"padding: 0; margin: 0",class:ye(["fixed left-0 right-0",[r(o)?"wh-full top-0px rounded-0":"w-630px top-50px"]]),onAfterLeave:w},{footer:y(()=>[r(o)?xe("",!0):(m(),j(Es,{key:0}))]),default:y(()=>[f(k,null,{default:y(()=>[f(H,{ref_key:"inputRef",ref:b,value:i.value,"onUpdate:value":M[0]||(M[0]=X=>i.value=X),clearable:"",placeholder:r(O)("message.common.tips.searchTips"),onInput:r(g)},{prefix:y(()=>[f(E,{class:"text-15px text-#c2c2c2"})]),_:1},8,["value","placeholder","onInput"]),r(o)?(m(),j($,{key:0,type:"primary",ghost:"",onClick:w},{default:y(()=>[Be(re(r(O)("message.common.cancel")),1)]),_:1})):xe("",!0)]),_:1}),D("div",Is,[d.value.length===0?(m(),j(L,{key:0,description:r(O)("message.common.tips.emptyData")},null,8,["description"])):(m(),j(ds,{key:1,value:s.value,"onUpdate:value":M[1]||(M[1]=X=>s.value=X),options:d.value,onEnter:A},null,8,["value","options"]))])]),_:1},8,["show","class"])}}}),Ls=V({name:"GlobalSearch",__name:"index",setup(e){const{bool:t,toggle:n}=Nt(),o=Q();function a(){n()}return(l,i)=>{const s=Co,d=it;return m(),N("div",null,[f(d,{class:"w-40px h-full","tooltip-content":r(O)("message.common.search"),inverted:r(o).header.inverted,onClick:a},{default:y(()=>[f(s,{class:"text-20px"})]),_:1},8,["tooltip-content","inverted"]),f(r(Vs),{value:r(t),"onUpdate:value":i[0]||(i[0]=b=>Ta(t)?t.value=b:null)},null,8,["value"])])}}}),Us={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Hs=bn('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M7 9L4 12L7 15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M19 12H10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path></g>',1),Os=[Hs];function Ns(e,t){return m(),N("svg",Us,Os)}const js={name:"line-md-menu-fold-left",render:Ns},Ws={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Xs=bn('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M21 9L18 12L21 15"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M14 12H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="16;0"></animate></path></g>',1),qs=[Xs];function Ks(e,t){return m(),N("svg",Ws,qs)}const Ys={name:"line-md-menu-unfold-left",render:Ks},Gs=V({name:"MenuCollapse",__name:"menu-collapse",setup(e){const t=ze(),n=Q();return(o,a)=>{const l=Ys,i=js,s=it;return m(),j(s,{class:"w-40px h-full",inverted:r(n).header.inverted,onClick:r(t).toggleSiderCollapse},{default:y(()=>[r(t).siderCollapse?(m(),j(l,{key:0,class:"text-16px"})):(m(),j(i,{key:1,class:"text-16px"}))]),_:1},8,["inverted","onClick"])}}}),Zs=V({name:"GlobalBreadcrumb",__name:"global-breadcrumb",setup(e){const t=lt(),n=Q(),o=pt(),{routerPush:a}=St(),l=I(()=>Wl(t.name,o.menus,Jn("root")).map(s=>{var d;return{...s,label:s.i18nTitle?O(s.i18nTitle):s.label,options:(d=s.options)==null?void 0:d.map(b=>({...b,label:b.i18nTitle?O(b.i18nTitle):b.label}))}}));function i(s){a({name:s})}return(s,d)=>{const b=gn,g=Pr,_=Tr;return m(),j(_,{class:"px-12px"},{default:y(()=>[(m(!0),N(ae,null,Xe(l.value,p=>(m(),j(g,{key:p.key},{default:y(()=>[p.hasChildren?(m(),j(b,{key:0,options:p.options,onSelect:i},{default:y(()=>[D("span",null,[r(n).header.crumb.showIcon?(m(),j(nn(p.icon),{key:0,class:"inline-block align-text-bottom mr-4px text-16px"})):xe("",!0),D("span",null,re(p.label),1)])]),_:2},1032,["options"])):(m(),N(ae,{key:1},[r(n).header.crumb.showIcon?(m(),j(nn(p.icon),{key:0,class:ye(["inline-block align-text-bottom mr-4px text-16px",{"text-#BBBBBB":r(n).header.inverted}])},null,8,["class"])):xe("",!0),D("span",{class:ye({"text-#BBBBBB":r(n).header.inverted})},re(p.label),3)],64))]),_:2},1024))),128))]),_:1})}}}),Js={class:"flex-1-hidden h-full px-10px"},Qs=V({name:"HeaderMenu",__name:"header-menu",setup(e){const t=lt(),n=pt(),o=Q(),{routerPush:a}=St(),l=I(()=>mn(n.menus)),i=I(()=>{var d;return(d=t.meta)!=null&&d.activeMenu?t.meta.activeMenu:t.name});function s(d,b){a(b.routePath)}return(d,b)=>{const g=xn,_=zt;return m(),N("div",Js,[f(_,{"x-scrollable":!0,class:"flex-1-hidden h-full","content-class":"h-full"},{default:y(()=>[D("div",{class:"flex-y-center h-full",style:Ae({justifyContent:r(o).menu.horizontalPosition})},[f(g,{value:i.value,mode:"horizontal",options:l.value,inverted:r(o).header.inverted,"onUpdate:value":s},null,8,["value","options","inverted"])],4)]),_:1})])}}}),ec=Ke(Qs,[["__scopeId","data-v-bd84ad3a"]]),tc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},nc=D("path",{fill:"currentColor",d:"M21 3v6h-2V6.41l-3.29 3.3l-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3l1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29l-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29l-1.41-1.42L5 17.59V15H3v6z"},null,-1),oc=[nc];function ac(e,t){return m(),N("svg",tc,oc)}const rc={name:"gridicons-fullscreen",render:ac},lc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ic=D("path",{fill:"currentColor",d:"M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z"},null,-1),sc=[ic];function cc(e,t){return m(),N("svg",lc,sc)}const dc={name:"gridicons-fullscreen-exit",render:cc},uc=V({name:"FullScreen",__name:"full-screen",setup(e){const{isFullscreen:t,toggle:n}=Fa(),o=Q();return(a,l)=>{const i=dc,s=rc,d=it;return m(),j(d,{class:"w-40px h-full","tooltip-content":r(O)("message.common.fullscreen"),inverted:r(o).header.inverted,onClick:r(n)},{default:y(()=>[r(t)?(m(),j(i,{key:0,class:"text-18px"})):(m(),j(s,{key:1,class:"text-18px"}))]),_:1},8,["tooltip-content","inverted","onClick"])}}}),hc=V({name:"DarkModeSwitch",__name:"dark-mode-switch",props:{dark:{type:Boolean,default:!1}},emits:["update:dark"],setup(e,{emit:t}){const n=e,o=I({get(){return n.dark},set(l){t("update:dark",l)}});function a(l){const i=l.clientX,s=l.clientY,d=Math.hypot(Math.max(i,innerWidth-i),Math.max(s,innerHeight-s));if(!document.startViewTransition){o.value=!o.value;return}document.startViewTransition(()=>{o.value=!o.value}).ready.then(()=>{const g=[`circle(0px at ${i}px ${s}px)`,`circle(${d}px at ${i}px ${s}px)`];document.documentElement.animate({clipPath:o.value?g:[...g].reverse()},{duration:300,easing:"ease-in",pseudoElement:o.value?"::view-transition-new(root)":"::view-transition-old(root)"})})}return(l,i)=>{const s=xo,d=wo;return m(),N("div",{class:"flex-center text-18px cursor-pointer",onClick:a},[o.value?(m(),j(s,{key:0})):(m(),j(d,{key:1}))])}}}),fc=V({name:"ThemeMode",__name:"theme-mode",setup(e){const t=Q();return(n,o)=>{const a=hc,l=it;return m(),j(l,{class:"w-40px",inverted:r(t).header.inverted,"tooltip-content":r(O)("message.common.themeMode")},{default:y(()=>[f(a,{dark:r(t).darkMode,class:"wh-full","onUpdate:dark":r(t).setDarkMode},null,8,["dark","onUpdate:dark"])]),_:1},8,["inverted","tooltip-content"])}}}),pc={class:"inline-block",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 134.49 134.49"},bc=bn('<path d="M134.49 67.25A67.25 67.25 0 1167.25 0a67.23 67.23 0 0167.24 67.25" fill="#f3f3f2"></path><path fill="#f1caae" d="M64.47 103.16zm2.4-13.01c8.11-6.21 11-10.25 12.24-11a17.94 17.94 0 01-.69-4.23c-4 3.34-5.73 4.49-11 4.31-5.69.19-7.28-1.15-12-5.14l-.07-.09a19 19 0 01-.72 5.14c1.23.75 4.13 4.79 12.24 11.01z"></path><path d="M61.56 121.66c.31-2 .61-4 .9-5.91v-.11c.93-6 1.7-10.86 2-12.48a1.17 1.17 0 01-.36-.34.6.6 0 01-.09-.13c-.16-.36-.32-.69-.48-1 0-.06-.07-.13-.1-.2a16.73 16.73 0 01-2-4.43c0-.15 0-.3-.07-.46a4 4 0 00-1 2.65c.33 3.56-10.83-9.56-10.65-14.6a38.55 38.55 0 01-4 1.9 219.52 219.52 0 0015.85 35.11zm-37.93-27.6h-.09.05s.03.01.04 0zM73.3 99.2a4 4 0 00-1-2.64c0 .16 0 .31-.06.46A7.17 7.17 0 0172 98a27.91 27.91 0 01-1.71 3.52l-.11.21c-.16.31-.32.65-.48 1a1 1 0 01-.09.13 1.1 1.1 0 01-.37.34c.29 1.6 1.06 6.35 2 12.32a2.34 2.34 0 000 .26c.23 1.54.48 3.15.73 4.81a208.85 208.85 0 0015.5-34.21A37.69 37.69 0 0184 84.7c0 5.12-11 18.03-10.7 14.5zm36.4-5.09a5.22 5.22 0 01.63.11l-.73-.28s.08.06.1.17z" fill="#9d9d9d"></path><path d="M23.6 94.09h-.05a4.67 4.67 0 00-.84.15c-3 .81-5.08 8.11-6.94 16.26a67.51 67.51 0 0016.1 13.93 33.36 33.36 0 00-.42-4.63c-1.13-6.25-8.79-24.87-7.85-25.71zm94.03 17.67c-2-8.62-4-16.67-7.21-17.52h-.09a5.22 5.22 0 00-.63-.11c.39 1.91-6.82 19.65-7.91 25.69a34.76 34.76 0 00-.44 5.4" fill="#959494"></path><path d="M71.29 119.06h-1.65v-3.73h1.58v.15c-.92-6-1.69-10.72-2-12.32l-.1.07a1.29 1.29 0 01-.28.08v.09H68l-.89.06h-.56l-.88-.06h-.86v-.09a1.2 1.2 0 01-.27-.08l-.11-.07c-.29 1.62-1.06 6.44-2 12.48v-.31h1.59v3.73h-1.56v-3.31c-.29 1.87-.59 3.86-.9 5.91 0-.34.1-.69.15-1v1.28l.75 1.25v-2.62h1.65v3.73h-1c.57.91 1.14 1.78 1.7 2.58v-1.09h1.69v2.82c.25-.29.5-.6.75-.91v-1.91h1.42c.34-.48.68-1 1-1.49v-3.73h1.65v1.22l.73-1.22c-.25-1.66-.5-3.27-.73-4.81zm-1.65-13.74c.15.91.33 2 .53 3.3h-.53zm0 4.79h.77c.18 1.16.38 2.4.58 3.73h-1.35zm-3.14-5.22v3.73h-1.65v-3.73zm-2.39 9h-1.36c.21-1.33.4-2.57.59-3.73h.77zm0-5.22h-.54l.54-3.31zm2.39 15.66h-1.65v-3.73h1.65zm0-5.22h-1.65v-3.73h1.65zm0-5.22h-1.65v-3.73h1.65zm2.39 10.44h-1.64v-3.73h1.64zm0-5.22h-1.64v-3.73h1.64zm0-5.22h-1.64v-3.73h1.64zm0-5.22h-1.64v-3.73h1.64z" fill="#f0f0f0"></path><path d="M63.53 101.69zm-2.12-5.14zm10.86.51A7.17 7.17 0 0172 98a7.17 7.17 0 00.27-.94zm.07-.5zm-2.13 5.14zm-5.63 1.53a1.2 1.2 0 00.27.08v-3.64h1.65v3.73h-.79l.88.06h.56l.89-.06h-.79v-3.73h1.64v3.64a1.29 1.29 0 00.28-.08l.1-.07a1.1 1.1 0 00.37-.34v-3.15h1.64c-.29.57-.62 1.16-1 1.82A27.91 27.91 0 0072 98v-1.85c-.23-.29-.48-.57-.74-.86v2.89h-1.62v-3.73h.82c-.55-.52-1.11-1-1.63-1.49h-1.58v-1.5a3.56 3.56 0 01-.38-.47 2.79 2.79 0 01-.37.47V93h-1.59c-.52.47-1.08 1-1.62 1.49h.82v3.73h-1.65v-2.93c-.27.28-.52.57-.75.86V98a7.13 7.13 0 01-.23-.91 16.73 16.73 0 002 4.43c-.34-.65-.67-1.25-1-1.82h1.64v3.15a1.17 1.17 0 00.36.34zm2.67-8.78h1.64v3.73h-1.64zm-2.4 0h1.65v3.73h-1.65z" fill="#fff"></path><path fill="#040000" d="M66.5 99.67h-1.65v3.73h1.65v-3.73zm-1.65 5.22h1.65v3.73h-1.65zm0-10.44h1.65v3.73h-1.65zm0 15.66h1.65v3.73h-1.65zm0 15.66v1.09c.49.7 1 1.35 1.45 2l.2-.23v-2.82zm0-5.22h1.65v3.73h-1.65zm0-5.22h1.65v3.73h-1.65zm-3.29 6.33l.15.26v-1.28c-.05.36-.1.68-.15 1.02zm.9-23.48h1.65v-3.73h-.82c-.29.28-.56.56-.83.84zm-.75-2.03l-.3.4c0 .16 0 .31.07.46a7.13 7.13 0 00.23.91zm2.4 3.52h-1.64c.29.57.62 1.17 1 1.82 0 .07.07.14.1.2.16.32.32.65.48 1a.6.6 0 00.09.13zm0 20.88h-1.65v2.62q.34.57.69 1.11h1zm0-1.49v-3.73h-1.59v3.73zm0-10.44v-3.31l-.54 3.31zm-1.36 5.22h1.36v-3.73h-.77c-.19 1.16-.34 2.4-.59 3.73zm6.89 6.71v3.73c.53-.8 1.06-1.63 1.6-2.51v-1.22zm0-5.22v3.73h1.65v-3.32a2.34 2.34 0 010-.26v-.15zM66.5 91.46c-.4.43-1 .94-1.59 1.5h1.59zM68.83 93c-.63-.56-1.19-1.07-1.58-1.5V93zm-1.58 17.11h1.65v3.73h-1.65zm0 10.44h1.65v3.73h-1.65zm0-5.22h1.65v3.73h-1.65zm1.64-15.66h-1.64v3.73h1.64v-3.73zm-1.64 5.22h1.65v3.73h-1.65zm0 22.79c.47-.6.94-1.23 1.42-1.91h-1.42zm0-33.23h1.65v3.73h-1.65zm2.39 10.87v3.3h.53c-.17-1.27-.38-2.39-.53-3.3zm0-5.65v3.15a1 1 0 00.09-.13c.16-.36.32-.68.48-1l.11-.21c.34-.66.67-1.25 1-1.82zM72 98a7.17 7.17 0 00.24-.91c0-.15 0-.3.06-.46-.1-.13-.2-.27-.31-.4V98zm-2.36.18h1.65v-2.89l-.83-.84h-.82zm.77 11.93h-.77v3.73H71c-.21-1.33-.41-2.57-.59-3.73z"></path><path d="M60.45 99.2a4 4 0 011-2.65l.3-.4c.23-.29.48-.58.75-.86s.54-.56.83-.84c.54-.52 1.1-1 1.62-1.49s1.19-1.07 1.59-1.5a2.79 2.79 0 00.37-.47 3.56 3.56 0 00.38.47c.39.43 1 .94 1.58 1.5s1.08 1 1.63 1.49l.83.84c.26.29.51.57.74.86.11.13.21.27.31.4a4 4 0 011 2.64C73 102.73 84 89.82 84 84.7v-.36c-.09-.72-2.2-1.82-4.15-5.11-.15-.26-.36-.27-.68-.08-1.23.75-4.13 4.79-12.24 11-8.11-6.22-11-10.26-12.24-11-.31-.19-.53-.18-.68.08-2 3.29-4.05 4.39-4.14 5.11a2.17 2.17 0 000 .26c-.25 5.04 10.91 18.16 10.58 14.6z" fill="#838384"></path><path d="M62.49 132.11a13.73 13.73 0 003.81-3.29c-.47-.61-1-1.26-1.45-2s-1.13-1.67-1.7-2.58q-.34-.54-.69-1.11l-.75-1.25-.15-.26A219.52 219.52 0 0145.81 86.5c-.49-1.25-21 7-22.17 7.56-.94.84 6.72 19.46 7.85 25.71a33.36 33.36 0 01.42 4.63A66.72 66.72 0 0062 134.27c.15-1.27.3-2.06.49-2.16z" fill="#282629"></path><path d="M101.35 125.2a34.76 34.76 0 01.44-5.4c1.09-6 8.3-23.78 7.91-25.69 0-.08 0-.15-.09-.17-1.17-.52-21.69-8.84-22.13-7.56A208.85 208.85 0 0172 120.55l-.73 1.22c-.54.88-1.07 1.71-1.6 2.51-.34.51-.68 1-1 1.49-.48.68-1 1.31-1.42 1.91-.25.31-.5.62-.75.91l-.2.23a13.73 13.73 0 01-3.81 3.29c-.19.1-.34.89-.47 2.16 1.73.13 3.47.22 5.23.22a66.88 66.88 0 0034.1-9.29" fill="#1a1a1b"></path><path d="M67.41 79.23c5.28.18 7-1 11-4.31l1-.83c4.93-4.19 2.44-12.94 5.44-12.39s6.29-7.44 4.18-9.45c-1-.09-1.87.88-2.66 2.2-.89 1.49-.54 3.79-1.42 3.74-1.19-4-.93-7.62-.69-11.81C76 48.8 67.47 50.06 60.59 45c-1.41-1-2.77-2.4-4.91-2.36-2.47 0-3.46 1.5-3.11 3.87.17 1.19.25 2.8.32 3.5A10.07 10.07 0 0151 56.1c-.37.38-1.27 2-1.8 2.09s-.14-2.47-1.62-4.69c-1.16-1.75-1.7-1.37-1.7-1.37C43.56 54 47 62.25 50 61.7s.55 8.1 5.37 12.31l.08.08c4.68 3.99 6.27 5.33 11.96 5.14z" fill="#f9d2b5"></path><path d="M47.61 53.5c1.48 2.22 1.18 4.8 1.62 4.69s1.43-1.71 1.8-2.09a10.07 10.07 0 001.86-6.1c-.07-.7-.15-2.31-.32-3.5-.35-2.37.64-3.83 3.11-3.87 2.14 0 3.5 1.32 4.91 2.36 6.88 5.05 15.4 3.79 23.66 1.37-.24 4.19-.5 7.78.69 11.81.88.05.53-2.25 1.42-3.74.79-1.32 1.63-2.29 2.66-2.2a2.87 2.87 0 01.38.08c2.46-5.22 2.72-13.7.29-18.93s-6.3-7.68-10.14-12c.35 1.18-1.24 2.95-2.75 3.08-1.26.12-3.35-.56-4.61-.71-6.36-.77-10-1.06-15.18.77a19.36 19.36 0 00-7.22 4.22 19.88 19.88 0 00-5.18 10.65 26.75 26.75 0 00-.19 6.38c.12 1.14.81 5.36 1.49 6.38 0-.02.54-.4 1.7 1.35z" fill="#554c44"></path>',12),mc=[bc];function vc(e,t){return m(),N("svg",pc,mc)}const gc={name:"local-avatar",render:vc},_c={class:"pl-8px text-16px font-medium"},xc=V({name:"UserAvatar",__name:"user-avatar",setup(e){const t=to(),n=Aa(),o=Q(),{iconRender:a}=no(),l=I(()=>[{label:O("message.common.UserCenter"),key:"user-center",icon:a({icon:"carbon:user-avatar"})},{type:"divider",key:"divider"},{label:O("message.common.logout"),key:"logout",icon:a({icon:"carbon:logout"})}]);function i(s){var b;const d=s;d==="logout"?(b=window.$dialog)==null||b.info({title:O("message.common.tip"),content:O("message.common.tips.quitTips"),positiveText:O("message.common.confirm"),negativeText:O("message.common.cancel"),onPositiveClick:()=>{n.resetAuthStore()}}):d==="user-center"&&t.push("/userCenter")}return(s,d)=>{const b=gc,g=it,_=gn;return m(),j(_,{options:l.value,onSelect:i},{default:y(()=>[f(g,{class:"px-12px",inverted:r(o).header.inverted},{default:y(()=>[f(b,{class:"text-32px"}),D("span",_c,re(r(n).userInfo.username),1)]),_:1},8,["inverted"])]),_:1},8,["options"])}}}),wc=V({name:"SettingButton",__name:"setting-button",setup(e){const t=ze(),n=Q();return(o,a)=>{const l=_o,i=it;return m(),j(i,{class:"w-40px h-full","tooltip-content":r(O)("message.common.themeConfig"),inverted:r(n).header.inverted,onClick:r(t).toggleSettingDrawerVisible},{default:y(()=>[f(l,{class:"text-20px"})]),_:1},8,["tooltip-content","inverted","onClick"])}}}),yc={key:1,class:"flex-1-hidden flex-y-center h-full"},Cc={class:"flex justify-end h-full"},kc=V({name:"GlobalHeader",__name:"index",props:{showLogo:{},showHeaderMenu:{},showMenuCollapse:{}},setup(e){const t=Q(),{isMobile:n}=kn(),o={}.VITE_VERCEL!=="Y";return(a,l)=>{const i=Qn("system-message"),s=vt;return m(),j(s,{class:"global-header flex-y-center h-full",inverted:r(t).header.inverted},{default:y(()=>[a.showLogo?(m(),j($n,{key:0,"show-title":!0,class:"h-full",style:Ae({width:r(t).sider.width+"px"})},null,8,["style"])):xe("",!0),a.showHeaderMenu?(m(),j(r(ec),{key:2})):(m(),N("div",yc,[a.showMenuCollapse||r(n)?(m(),j(r(Gs),{key:0})):xe("",!0),r(t).header.crumb.visible&&!r(n)?(m(),j(r(Zs),{key:1})):xe("",!0)])),D("div",Cc,[f(Ls),f(r(uc)),f(r(fc)),f(r(er)),f(i),r(o)?(m(),j(r(wc),{key:0})):xe("",!0),f(r(xc))])]),_:1},8,["inverted"])}}}),$c=Ke(kc,[["__scopeId","data-v-a2968c42"]]),Sc=V({name:"BetterScroll",__name:"better-scroll",props:{options:{}},setup(e,{expose:t}){const n=e,o=U(),a=U(),l=U(),i=I(()=>!!n.options.scrollY);function s(){o.value&&(a.value=new Ga(o.value,n.options))}const{width:d}=Mn(o),{width:b,height:g}=Mn(l);return be([()=>d.value,()=>b.value,()=>g.value],()=>{a.value&&a.value.refresh()}),Lt(()=>{s()}),t({instance:a}),(_,p)=>(m(),N("div",{ref_key:"bsWrap",ref:o,class:"h-full text-left"},[D("div",{ref_key:"bsContent",ref:l,class:ye(["inline-block",{"h-full":!i.value}])},[Ot(_.$slots,"default")],2)],512))}}),zc=V({name:"ContextMenu",__name:"context-menu",props:{visible:{type:Boolean,default:!1},currentPath:{default:""},affix:{type:Boolean},x:{},y:{}},emits:["update:visible"],setup(e,{emit:t}){const n=e,o=ze(),a=vn(),{iconRender:l}=no(),i=I({get(){return n.visible},set(_){t("update:visible",_)}});function s(){i.value=!1}const d=I(()=>[{label:"内容全屏",key:"full-content",icon:l({icon:"gridicons-fullscreen"})},{label:"重新加载",key:"reload-current",disabled:n.currentPath!==a.activeTab,icon:l({icon:"ant-design:reload-outlined"})},{label:"关闭",key:"close-current",disabled:n.currentPath===a.homeTab.fullPath||!!n.affix,icon:l({icon:"ant-design:close-outlined"})},{label:"关闭其他",key:"close-other",icon:l({icon:"ant-design:column-width-outlined"})},{label:"关闭左侧",key:"close-left",icon:l({icon:"mdi:format-horizontal-align-left"})},{label:"关闭右侧",key:"close-right",icon:l({icon:"mdi:format-horizontal-align-right"})},{label:"关闭所有",key:"close-all",icon:l({icon:"ant-design:line-outlined"})}]),b=new Map([["full-content",()=>{o.setContentFull(!0)}],["reload-current",()=>{o.reloadPage()}],["close-current",()=>{a.removeTab(n.currentPath)}],["close-other",()=>{a.clearTab([n.currentPath])}],["close-left",()=>{a.clearLeftTab(n.currentPath)}],["close-right",()=>{a.clearRightTab(n.currentPath)}],["close-all",()=>{a.clearAllTab()}]]);function g(_){const p=_,w=b.get(p);w&&w(),s()}return(_,p)=>{const w=gn;return m(),j(w,{show:i.value,options:d.value,placement:"bottom-start",x:_.x,y:_.y,onClickoutside:s,onSelect:g},null,8,["show","options","x","y"])}}}),Rc=V({name:"TabDetail",__name:"index",emits:["scroll"],setup(e,{emit:t}){const n=Q(),o=vn(),a=I(()=>n.tab.mode==="chrome"),l=U();async function i(){if(await Oe(),l.value&&l.value.children.length&&l.value.children[o.activeTabIndex]){const p=l.value.children[o.activeTabIndex],{x:w,width:z}=p.getBoundingClientRect(),T=w+z/2;setTimeout(()=>{t("scroll",T)},50)}}const s=Pa({visible:!1,affix:!1,x:0,y:0,currentPath:""});function d(p){Object.assign(s,p)}let b=!1;function g(p){b||d({visible:p})}async function _(p,w,z){p.preventDefault();const{clientX:T,clientY:A}=p;b=!0;const R=s.visible?150:0;d({visible:!1}),setTimeout(()=>{d({visible:!0,x:T,y:A,currentPath:w,affix:z}),b=!1},R)}return be(()=>o.activeTabIndex,()=>{i()},{immediate:!0}),(p,w)=>{const z=eo;return m(),N(ae,null,[D("div",{ref_key:"tabRef",ref:l,class:ye(["flex h-full pr-18px",[a.value?"items-end":"items-center gap-12px"]])},[(m(!0),N(ae,null,Xe(r(o).tabs,T=>(m(),j(r(Da),{key:T.fullPath,mode:r(n).tab.mode,"dark-mode":r(n).darkMode,active:r(o).activeTab===T.fullPath,"active-color":r(n).themeColor,closable:!(T.name===r(o).homeTab.name||T.meta.affix),onClick:A=>r(o).handleClickTab(T.fullPath),onClose:A=>r(o).removeTab(T.fullPath),onContextmenu:A=>_(A,T.fullPath,T.meta.affix)},{prefix:y(()=>[f(z,{icon:T.meta.icon,"local-icon":T.meta.localIcon,class:"inline-block align-text-bottom text-16px"},null,8,["icon","local-icon"])]),default:y(()=>[Be(" "+re(T.meta.i18nTitle?r(O)(T.meta.i18nTitle):T.meta.title),1)]),_:2},1032,["mode","dark-mode","active","active-color","closable","onClick","onClose","onContextmenu"]))),128))],2),f(r(zc),{visible:s.visible,"current-path":s.currentPath,affix:s.affix,x:s.x,y:s.y,"onUpdate:visible":g},null,8,["visible","current-path","affix","x","y"])],64)}}}),Mc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Bc=D("path",{fill:"currentColor",d:"M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"},null,-1),Tc=[Bc];function Fc(e,t){return m(),N("svg",Mc,Tc)}const Ac={name:"mdi-refresh",render:Fc},Pc=V({name:"ReloadButton",__name:"index",setup(e){const t=ze(),n=pt(),o=lt(),{loading:a,startLoading:l,endLoading:i}=Ka();function s(){const d=n.cacheRoutes.includes(String(o.name));d&&n.removeCacheRoute(o.name),l(),t.reloadPage(),setTimeout(()=>{d&&n.addCacheRoute(o.name),i()},1e3)}return(d,b)=>{const g=Ac,_=it;return m(),j(_,{class:"w-64px h-full","tooltip-content":r(O)("message.common.reload"),placement:"bottom-end",onClick:s},{default:y(()=>[f(g,{class:ye(["text-22px",{"animate-spin":r(a)}])},null,8,["class"])]),_:1},8,["tooltip-content"])}}}),Dc=V({name:"GlobalTab",__name:"index",setup(e){const t=lt(),n=Q(),o=vn(),a=Ea(),l=U(),{width:i,left:s}=Ia(l),d=U(),b=!!a.device.type;function g(p){var T;const z=p-s.value-i.value/2;if(d.value){const{maxScrollX:A,x:R}=d.value.instance,M=A-R,E=z>0?Math.max(-z,M):Math.min(-z,-R);(T=d.value)==null||T.instance.scrollBy(E,0,300)}}function _(){o.iniTabStore(t)}return be(()=>t.fullPath,()=>{o.addTab(t),o.setActiveTab(t.fullPath)}),_(),(p,w)=>{const z=Sc,T=vt;return m(),j(T,{class:"global-tab flex-y-center w-full pl-16px",style:Ae({height:r(n).tab.height+"px"})},{default:y(()=>[D("div",{ref_key:"bsWrapper",ref:l,class:"flex-1-hidden h-full"},[f(z,{ref_key:"bsScroll",ref:d,options:{scrollX:!0,scrollY:!1,click:r(b)}},{default:y(()=>[f(r(Rc),{onScroll:g})]),_:1},8,["options"])],512),f(r(Pc))]),_:1},8,["style"])}}}),Ec=Ke(Dc,[["__scopeId","data-v-2aed69b2"]]),Ic=V({name:"VerticalMenu",__name:"vertical-menu",setup(e){const t=lt(),n=ze(),o=Q(),a=pt(),{routerPush:l}=St(),i=I(()=>mn(a.menus));console.log(i);const s=I(()=>{var _;return(_=t.meta)!=null&&_.activeMenu?t.meta.activeMenu:t.name}),d=U([]);function b(_,p){l(p.routePath)}function g(_){d.value=_}return be(()=>t.name,()=>{d.value=oo(s.value,i.value)},{immediate:!0}),(_,p)=>{const w=xn,z=zt;return m(),j(z,{class:"flex-1-hidden"},{default:y(()=>[f(w,{value:s.value,collapsed:r(n).siderCollapse,"collapsed-width":r(o).sider.collapsedWidth,"collapsed-icon-size":22,options:i.value,"expanded-keys":d.value,indent:18,inverted:!r(o).darkMode&&r(o).sider.inverted,"onUpdate:value":b,"onUpdate:expandedKeys":g},null,8,["value","collapsed","collapsed-width","options","expanded-keys","inverted"])]),_:1})}}}),Vc=V({name:"VerticalSider",__name:"index",setup(e){const t=ze(),n=Q(),o=I(()=>n.layout.mode==="horizontal-mix"),a=I(()=>!t.siderCollapse&&n.layout.mode!=="vertical-mix");return(l,i)=>{const s=vt;return m(),j(s,{class:"flex-col-stretch h-full",inverted:r(n).sider.inverted},{default:y(()=>[o.value?xe("",!0):(m(),j(r($n),{key:0,"show-title":a.value,style:Ae({height:r(n).header.height+"px"})},null,8,["show-title","style"])),f(r(Ic))]),_:1},8,["inverted"])}}}),Lc=V({name:"MixMenuDetail",__name:"mix-menu-detail",props:{routeName:{},label:{},activeRouteName:{},icon:{type:[Object,Function],default:void 0},isMini:{type:Boolean,default:!1}},setup(e){const t=e,{bool:n,setTrue:o,setFalse:a}=Nt(),l=I(()=>t.routeName===t.activeRouteName);return(i,s)=>(m(),N("div",{class:"mb-6px px-4px cursor-pointer",onMouseenter:s[0]||(s[0]=(...d)=>r(o)&&r(o)(...d)),onMouseleave:s[1]||(s[1]=(...d)=>r(a)&&r(a)(...d))},[D("div",{class:ye(["flex-center flex-col py-12px rounded-2px bg-transparent transition-colors duration-300 ease-in-out",{"text-primary !bg-primary_active":l.value,"text-primary":r(n)}])},[(m(),j(nn(i.icon),{class:ye([i.isMini?"text-16px":"text-20px"])},null,8,["class"])),D("p",{class:ye(["w-full text-center ellipsis-text text-12px transition-height duration-300 ease-in-out",[i.isMini?"h-0 pt-0":"h-24px pt-4px"]])},re(i.label),3)],2)],32))}}),Uc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Hc=D("path",{fill:"currentColor",d:"M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2Z"},null,-1),Oc=[Hc];function Nc(e,t){return m(),N("svg",Uc,Oc)}const jc={name:"mdi-pin",render:Nc},Wc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Xc=D("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-5.93-5.93V22h-1.6v-6H6v-2l2-2v-.73l-6-6M16 12l2 2v2h-.18L8 6.18V4H7V2h10v2h-1v8Z"},null,-1),qc=[Xc];function Kc(e,t){return m(),N("svg",Wc,qc)}const Yc={name:"mdi-pin-off",render:Kc},Gc={class:"text-primary pl-8px text-16px font-bold"},Zc=V({name:"MixMenuDrawer",__name:"mix-menu-drawer",props:{visible:{type:Boolean},menus:{}},setup(e){const t=e,n=lt(),o=ze(),a=Q(),{routerPush:l}=St(),{title:i}=Va(),s=I(()=>t.visible&&t.menus.length||o.mixSiderFixed),d=I(()=>{var p;return(p=n.meta)!=null&&p.activeMenu?n.meta.activeMenu:n.name}),b=U([]);function g(p,w){l(w.routePath)}function _(p){b.value=p}return be(()=>n.name,()=>{b.value=oo(d.value,t.menus)},{immediate:!0}),(p,w)=>{const z=Yc,T=jc,A=xn,R=zt,M=vt;return m(),N("div",{class:"relative h-full transition-width duration-300 ease-in-out",style:Ae({width:r(o).mixSiderFixed?r(a).sider.mixChildMenuWidth+"px":"0px"})},[f(M,{class:"drawer-shadow absolute-lt flex-col-stretch h-full nowrap-hidden",inverted:r(a).sider.inverted,style:Ae({width:s.value?r(a).sider.mixChildMenuWidth+"px":"0px"})},{default:y(()=>[D("header",{class:"header-height flex-y-center justify-between",style:Ae({height:r(a).header.height+"px"})},[D("h2",Gc,re(r(i)),1),D("div",{class:"px-8px text-16px text-gray-600 cursor-pointer",onClick:w[0]||(w[0]=(...E)=>r(o).toggleMixSiderFixed&&r(o).toggleMixSiderFixed(...E))},[r(o).mixSiderFixed?(m(),j(z,{key:0})):(m(),j(T,{key:1}))])],4),f(R,{class:"flex-1-hidden"},{default:y(()=>[f(A,{value:d.value,options:p.menus,"expanded-keys":b.value,indent:18,inverted:!r(a).darkMode&&r(a).sider.inverted,"onUpdate:value":g,"onUpdate:expandedKeys":_},null,8,["value","options","expanded-keys","inverted"])]),_:1})]),_:1},8,["inverted","style"])],4)}}}),Jc=Ke(Zc,[["__scopeId","data-v-f43dab98"]]),Qc={class:"inline-block",viewBox:"0 0 256 256",width:"1em",height:"1em"},ed=D("path",{fill:"currentColor",d:"M208.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L137 128ZM57 128l71.52-71.51a12 12 0 0 0-17-17l-80 80a12 12 0 0 0 0 17l80 80a12 12 0 0 0 17-17Z"},null,-1),td=[ed];function nd(e,t){return m(),N("svg",Qc,td)}const od={name:"ph-caret-double-left-bold",render:nd},ad={class:"inline-block",viewBox:"0 0 256 256",width:"1em",height:"1em"},rd=D("path",{fill:"currentColor",d:"m144.49 136.49l-80 80a12 12 0 0 1-17-17L119 128L47.51 56.49a12 12 0 0 1 17-17l80 80a12 12 0 0 1-.02 17Zm80-17l-80-80a12 12 0 1 0-17 17L199 128l-71.52 71.51a12 12 0 0 0 17 17l80-80a12 12 0 0 0 .01-17Z"},null,-1),ld=[rd];function id(e,t){return m(),N("svg",ad,ld)}const sd={name:"ph-caret-double-right-bold",render:id},cd=V({name:"MixMenuCollapse",__name:"mix-menu-collapse",setup(e){const t=ze();return(n,o)=>{const a=sd,l=od,i=Ie;return m(),j(i,{text:!0,class:"h-36px",onClick:r(t).toggleSiderCollapse},{default:y(()=>[r(t).siderCollapse?(m(),j(a,{key:0,class:"text-16px"})):(m(),j(l,{key:1,class:"text-16px"}))]),_:1},8,["onClick"])}}}),dd={class:"flex-1-hidden flex-col-stretch h-full"},ud=V({name:"VerticalMixSider",__name:"index",setup(e){const t=lt(),n=ze(),o=Q(),a=pt(),{routerPush:l}=St(),{bool:i,setTrue:s,setFalse:d}=Nt(),b=U("");function g(A){b.value=A}const _=I(()=>a.menus.map(A=>{const{routeName:R,label:M,i18nTitle:E}=A,H=A==null?void 0:A.icon,$=!!(A.children&&A.children.length);return{routeName:R,label:E?O(E):M,icon:H,hasChildren:$}}));function p(){_.value.some(A=>{var E;const R=(E=t.meta)!=null&&E.activeMenu?t.meta.activeMenu:t.name,M=R==null?void 0:R.includes(A.routeName);return M&&g(A.routeName),M})}function w(A,R){g(A),R?s():l({name:A})}function z(){p(),d()}const T=I(()=>{const A=[];return a.menus.some(R=>{var E;const M=R.routeName===b.value&&!!((E=R.children)!=null&&E.length);return M&&A.push(...mn(R.children||[])),M}),A});return be(()=>t.name,()=>{p()},{immediate:!0}),(A,R)=>{const M=zt,E=vt;return m(),j(E,{class:"flex h-full",inverted:r(o).sider.inverted,onMouseleave:z},{default:y(()=>[D("div",dd,[f(r($n),{"show-title":!1,style:Ae({height:r(o).header.height+"px"})},null,8,["style"]),f(M,{class:"flex-1-hidden"},{default:y(()=>[(m(!0),N(ae,null,Xe(_.value,H=>(m(),j(r(Lc),{key:H.routeName,"route-name":H.routeName,"active-route-name":b.value,label:H.label,icon:H.icon,"is-mini":r(n).siderCollapse,onClick:$=>w(H.routeName,H.hasChildren)},null,8,["route-name","active-route-name","label","icon","is-mini","onClick"]))),128))]),_:1}),f(r(cd))]),f(r(Jc),{visible:r(i),menus:T.value},null,8,["visible","menus"])]),_:1},8,["inverted"])}}}),hd=V({name:"GlobalSider",__name:"index",setup(e){const t=Q(),n=I(()=>t.layout.mode==="vertical-mix");return(o,a)=>n.value?(m(),j(r(ud),{key:0,class:"global-sider"})):(m(),j(r(Vc),{key:1,class:"global-sider"}))}}),fd=Ke(hd,[["__scopeId","data-v-afe6955b"]]),pd=D("span",null,"Copyright ©2023",-1),bd=V({name:"GlobalFooter",__name:"index",setup(e){const t=Q();return(n,o)=>{const a=vt;return m(),j(a,{class:"flex-center h-full",inverted:r(t).footer.inverted},{default:y(()=>[pd]),_:1},8,["inverted"])}}}),Sd=V({name:"BasicLayout",__name:"index",setup(e){const t=ze(),n=Q(),{mode:o,isMobile:a,headerProps:l,siderVisible:i,siderWidth:s,siderCollapsedWidth:d}=kn();return(b,g)=>{const _=Rr;return m(),N(ae,null,[f(r(Ha),{mode:r(o),"is-mobile":r(a),"scroll-mode":r(n).scrollMode,"scroll-el-id":r(t).scrollElId,"full-content":r(t).contentFull,"fixed-top":r(n).fixedHeaderAndTab,"header-height":r(n).header.height,"tab-visible":r(n).tab.visible,"tab-height":r(n).tab.height,"content-class":r(t).disableMainXScroll?"overflow-x-hidden":"","sider-visible":r(i),"sider-collapse":r(t).siderCollapse,"sider-width":r(s),"sider-collapsed-width":r(d),"footer-visible":r(n).footer.visible,"fixed-footer":r(n).footer.fixed,"right-footer":r(n).footer.right,onClickMobileSiderMask:g[0]||(g[0]=p=>r(t).setSiderCollapse(!0))},{header:y(()=>[f(r($c),La(Ua(r(l))),null,16)]),tab:y(()=>[f(r(Ec))]),sider:y(()=>[f(r(fd))]),footer:y(()=>[f(r(bd))]),default:y(()=>[f(r(Za))]),_:1},8,["mode","is-mobile","scroll-mode","scroll-el-id","full-content","fixed-top","header-height","tab-visible","tab-height","content-class","sider-visible","sider-collapse","sider-width","sider-collapsed-width","footer-visible","fixed-footer","right-footer"]),(m(),j(_,{key:r(n).scrollMode,"listen-to":`#${r(t).scrollElId}`,class:"z-100"},null,8,["listen-to"])),f(r(Zi))],64)}}});export{Sd as default};
