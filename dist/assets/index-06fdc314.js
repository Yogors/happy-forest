import{k as lo,cy as so,b as x,cz as ro,e as j,c as n,n as w,f as Y,m as we,bH as io,bI as co,d as Te,g as uo,s as Ve,_ as ho,p as R,t as vo,o as _e,x as fo,y as ye,z as mo,h as b,B as po,T as bo,S as W,U as Q,C as se,a4 as ke,bp as go,aQ as re,aR as xo,aS as c,a_ as Ce,aT as Re,aZ as $,aU as Z,aX as q,aV as G,a$ as J,bc as wo,b6 as _o,a5 as yo,b3 as ko,b4 as Co}from"./index-da2566df.js";import{a as Ro}from"./toggle-lang.vue_vue_type_script_setup_true_lang-17d8e3fb.js";import{u as So,b as ie,V as zo,d as To,e as Vo}from"./Dropdown-ac0d8cff.js";import{_ as Bo}from"./_plugin-vue_export-helper-c27b6911.js";import"./format-length-c9d165c6.js";const Mo=a=>{const s="rgba(0, 0, 0, .85)",_="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:h,primaryColor:d,baseColor:i,cardColor:f,modalColor:S,popoverColor:H,borderRadius:A,fontSize:V,opacityDisabled:u}=a;return Object.assign(Object.assign({},so),{fontSize:V,markFontSize:V,railColor:h,railColorHover:h,fillColor:d,fillColorHover:d,opacityDisabled:u,handleColor:"#FFF",dotColor:f,dotColorModal:S,dotColorPopover:H,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:s,indicatorBoxShadow:_,indicatorTextColor:i,indicatorBorderRadius:A,dotBorder:`2px solid ${h}`,dotBorderActive:`2px solid ${d}`,dotBoxShadow:""})},$o={name:"Slider",common:lo,self:Mo},Do=$o;function Se(a){return window.TouchEvent&&a instanceof window.TouchEvent}function ze(){const a=x(new Map),s=_=>h=>{a.value.set(_,h)};return ro(()=>{a.value.clear()}),[a,s]}const Io=j([n("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[w("reverse",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),w("vertical",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),n("slider-marks",[n("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),w("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[n("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[n("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),n("slider-rail",`
 height: 100%;
 `,[Y("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),w("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),n("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[n("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),n("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[n("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),w("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[n("slider-handle",`
 cursor: not-allowed;
 `)]),w("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),j("&:hover",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[Y("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),w("active",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[Y("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),n("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[n("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),n("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[Y("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),n("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[n("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[n("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[j("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),j("&:focus",[n("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[j("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),n("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[w("transition-disabled",[n("slider-dot","transition: none;")]),n("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[w("active","border: var(--n-dot-border-active);")])])]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[we()]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[w("top",`
 margin-bottom: 12px;
 `),w("right",`
 margin-left: 12px;
 `),w("bottom",`
 margin-top: 12px;
 `),w("left",`
 margin-right: 12px;
 `),we()]),io(n("slider",[n("slider-dot","background-color: var(--n-dot-color-modal);")])),co(n("slider",[n("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Fo=0,Ho=Object.assign(Object.assign({},Ve.props),{to:ie.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Ao=Te({name:"Slider",props:Ho,setup(a){const{mergedClsPrefixRef:s,namespaceRef:_,inlineThemeDisabled:h}=uo(a),d=Ve("Slider","-slider",Io,Do,a,s),i=x(null),[f,S]=ze(),[H,A]=ze(),V=x(new Set),u=ho(a),{mergedDisabledRef:z}=u,D=R(()=>{const{step:e}=a;if(Number(e)<=0||e==="mark")return 0;const o=e.toString();let t=0;return o.includes(".")&&(t=o.length-o.indexOf(".")-1),t}),E=x(a.defaultValue),ee=vo(a,"value"),g=So(ee,E),y=R(()=>{const{value:e}=g;return(a.range?e:[e]).map(pe)}),ce=R(()=>y.value.length>2),Be=R(()=>a.placement===void 0?a.vertical?"right":"top":a.placement),ue=R(()=>{const{marks:e}=a;return e?Object.keys(e).map(parseFloat):null}),k=x(-1),he=x(-1),B=x(-1),M=x(!1),U=x(!1),oe=R(()=>{const{vertical:e,reverse:o}=a;return e?o?"top":"bottom":o?"right":"left"}),Me=R(()=>{if(ce.value)return;const e=y.value,o=N(a.range?Math.min(...e):a.min),t=N(a.range?Math.max(...e):e[0]),{value:l}=oe;return a.vertical?{[l]:`${o}%`,height:`${t-o}%`}:{[l]:`${o}%`,width:`${t-o}%`}}),$e=R(()=>{const e=[],{marks:o}=a;if(o){const t=y.value.slice();t.sort((m,p)=>m-p);const{value:l}=oe,{value:r}=ce,{range:v}=a,C=r?()=>!1:m=>v?m>=t[0]&&m<=t[t.length-1]:m<=t[0];for(const m of Object.keys(o)){const p=Number(m);e.push({active:C(p),label:o[m],style:{[l]:`${N(p)}%`}})}}return e});function De(e,o){const t=N(e),{value:l}=oe;return{[l]:`${t}%`,zIndex:o===k.value?1:0}}function ve(e){return a.showTooltip||B.value===e||k.value===e&&M.value}function Ie(e){return M.value?!(k.value===e&&he.value===e):!0}function Fe(e){var o;~e&&(k.value=e,(o=f.value.get(e))===null||o===void 0||o.focus())}function He(){H.value.forEach((e,o)=>{ve(o)&&e.syncPosition()})}function fe(e){const{"onUpdate:value":o,onUpdateValue:t}=a,{nTriggerFormInput:l,nTriggerFormChange:r}=u;t&&ke(t,e),o&&ke(o,e),E.value=e,l(),r()}function me(e){const{range:o}=a;if(o){if(Array.isArray(e)){const{value:t}=y;e.join()!==t.join()&&fe(e)}}else Array.isArray(e)||y.value[0]!==e&&fe(e)}function te(e,o){if(a.range){const t=y.value.slice();t.splice(o,1,e),me(t)}else me(e)}function ae(e,o,t){const l=t!==void 0;t||(t=e-o>0?1:-1);const r=ue.value||[],{step:v}=a;if(v==="mark"){const p=P(e,r.concat(o),l?t:void 0);return p?p.value:o}if(v<=0)return o;const{value:C}=D;let m;if(l){const p=Number((o/v).toFixed(C)),T=Math.floor(p),ne=p>T?T:T-1,le=p<T?T:T+1;m=P(o,[Number((ne*v).toFixed(C)),Number((le*v).toFixed(C)),...r],t)}else{const p=Ee(e);m=P(e,[...r,p])}return m?pe(m.value):o}function pe(e){return Math.min(a.max,Math.max(a.min,e))}function N(e){const{max:o,min:t}=a;return(e-t)/(o-t)*100}function Ae(e){const{max:o,min:t}=a;return t+(o-t)*e}function Ee(e){const{step:o,min:t}=a;if(Number(o)<=0||o==="mark")return e;const l=Math.round((e-t)/o)*o+t;return Number(l.toFixed(D.value))}function P(e,o=ue.value,t){if(!(o!=null&&o.length))return null;let l=null,r=-1;for(;++r<o.length;){const v=o[r]-e,C=Math.abs(v);(t===void 0||v*t>0)&&(l===null||C<l.distance)&&(l={index:r,distance:C,value:o[r]})}return l}function be(e){const o=i.value;if(!o)return;const t=Se(e)?e.touches[0]:e,l=o.getBoundingClientRect();let r;return a.vertical?r=(l.bottom-t.clientY)/l.height:r=(t.clientX-l.left)/l.width,a.reverse&&(r=1-r),Ae(r)}function je(e){if(z.value||!a.keyboard)return;const{vertical:o,reverse:t}=a;switch(e.key){case"ArrowUp":e.preventDefault(),O(o&&t?-1:1);break;case"ArrowRight":e.preventDefault(),O(!o&&t?-1:1);break;case"ArrowDown":e.preventDefault(),O(o&&t?1:-1);break;case"ArrowLeft":e.preventDefault(),O(!o&&t?1:-1);break}}function O(e){const o=k.value;if(o===-1)return;const{step:t}=a,l=y.value[o],r=Number(t)<=0||t==="mark"?l:l+t*e;te(ae(r,l,e>0?1:-1),o)}function Ue(e){var o,t;if(z.value||!Se(e)&&e.button!==Fo)return;const l=be(e);if(l===void 0)return;const r=y.value.slice(),v=a.range?(t=(o=P(l,r))===null||o===void 0?void 0:o.index)!==null&&t!==void 0?t:-1:0;v!==-1&&(e.preventDefault(),Fe(v),Ne(),te(ae(l,y.value[v]),v))}function Ne(){M.value||(M.value=!0,W("touchend",document,K),W("mouseup",document,K),W("touchmove",document,X),W("mousemove",document,X))}function L(){M.value&&(M.value=!1,Q("touchend",document,K),Q("mouseup",document,K),Q("touchmove",document,X),Q("mousemove",document,X))}function X(e){const{value:o}=k;if(!M.value||o===-1){L();return}const t=be(e);te(ae(t,y.value[o]),o)}function K(){L()}function Pe(e){k.value=e,z.value||(B.value=e)}function Oe(e){k.value===e&&(k.value=-1,L()),B.value===e&&(B.value=-1)}function Le(e){B.value=e}function Xe(e){B.value===e&&(B.value=-1)}_e(k,(e,o)=>void se(()=>he.value=o)),_e(g,()=>{if(a.marks){if(U.value)return;U.value=!0,se(()=>{U.value=!1})}se(He)}),fo(()=>{L()});const ge=R(()=>{const{self:{markFontSize:e,railColor:o,railColorHover:t,fillColor:l,fillColorHover:r,handleColor:v,opacityDisabled:C,dotColor:m,dotColorModal:p,handleBoxShadow:T,handleBoxShadowHover:ne,handleBoxShadowActive:le,handleBoxShadowFocus:Ke,dotBorder:Ye,dotBoxShadow:We,railHeight:Qe,railWidthVertical:Ze,handleSize:qe,dotHeight:Ge,dotWidth:Je,dotBorderRadius:eo,fontSize:oo,dotBorderActive:to,dotColorPopover:ao},common:{cubicBezierEaseInOut:no}}=d.value;return{"--n-bezier":no,"--n-dot-border":Ye,"--n-dot-border-active":to,"--n-dot-border-radius":eo,"--n-dot-box-shadow":We,"--n-dot-color":m,"--n-dot-color-modal":p,"--n-dot-color-popover":ao,"--n-dot-height":Ge,"--n-dot-width":Je,"--n-fill-color":l,"--n-fill-color-hover":r,"--n-font-size":oo,"--n-handle-box-shadow":T,"--n-handle-box-shadow-active":le,"--n-handle-box-shadow-focus":Ke,"--n-handle-box-shadow-hover":ne,"--n-handle-color":v,"--n-handle-size":qe,"--n-opacity-disabled":C,"--n-rail-color":o,"--n-rail-color-hover":t,"--n-rail-height":Qe,"--n-rail-width-vertical":Ze,"--n-mark-font-size":e}}),I=h?ye("slider",void 0,ge,a):void 0,xe=R(()=>{const{self:{fontSize:e,indicatorColor:o,indicatorBoxShadow:t,indicatorTextColor:l,indicatorBorderRadius:r}}=d.value;return{"--n-font-size":e,"--n-indicator-border-radius":r,"--n-indicator-box-shadow":t,"--n-indicator-color":o,"--n-indicator-text-color":l}}),F=h?ye("slider-indicator",void 0,xe,a):void 0;return{mergedClsPrefix:s,namespace:_,uncontrolledValue:E,mergedValue:g,mergedDisabled:z,mergedPlacement:Be,isMounted:mo(),adjustedTo:ie(a),dotTransitionDisabled:U,markInfos:$e,isShowTooltip:ve,shouldKeepTooltipTransition:Ie,handleRailRef:i,setHandleRefs:S,setFollowerRefs:A,fillStyle:Me,getHandleStyle:De,activeIndex:k,arrifiedValues:y,followerEnabledIndexSet:V,handleRailMouseDown:Ue,handleHandleFocus:Pe,handleHandleBlur:Oe,handleHandleMouseEnter:Le,handleHandleMouseLeave:Xe,handleRailKeyDown:je,indicatorCssVars:h?void 0:xe,indicatorThemeClass:F==null?void 0:F.themeClass,indicatorOnRender:F==null?void 0:F.onRender,cssVars:h?void 0:ge,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){var a;const{mergedClsPrefix:s,themeClass:_,formatTooltip:h}=this;return(a=this.onRender)===null||a===void 0||a.call(this),b("div",{class:[`${s}-slider`,_,{[`${s}-slider--disabled`]:this.mergedDisabled,[`${s}-slider--active`]:this.activeIndex!==-1,[`${s}-slider--with-mark`]:this.marks,[`${s}-slider--vertical`]:this.vertical,[`${s}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},b("div",{class:`${s}-slider-rail`},b("div",{class:`${s}-slider-rail__fill`,style:this.fillStyle}),this.marks?b("div",{class:[`${s}-slider-dots`,this.dotTransitionDisabled&&`${s}-slider-dots--transition-disabled`]},this.markInfos.map(d=>b("div",{key:d.label,class:[`${s}-slider-dot`,{[`${s}-slider-dot--active`]:d.active}],style:d.style}))):null,b("div",{ref:"handleRailRef",class:`${s}-slider-handles`},this.arrifiedValues.map((d,i)=>{const f=this.isShowTooltip(i);return b(zo,null,{default:()=>[b(To,null,{default:()=>b("div",{ref:this.setHandleRefs(i),class:`${s}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(d,i),onFocus:()=>{this.handleHandleFocus(i)},onBlur:()=>{this.handleHandleBlur(i)},onMouseenter:()=>{this.handleHandleMouseEnter(i)},onMouseleave:()=>{this.handleHandleMouseLeave(i)}},po(this.$slots.thumb,()=>[b("div",{class:`${s}-slider-handle`})]))}),this.tooltip&&b(Vo,{ref:this.setFollowerRefs(i),show:f,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(i),teleportDisabled:this.adjustedTo===ie.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>b(bo,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(i),onEnter:()=>{this.followerEnabledIndexSet.add(i)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(i)}},{default:()=>{var S;return f?((S=this.indicatorOnRender)===null||S===void 0||S.call(this),b("div",{class:[`${s}-slider-handle-indicator`,this.indicatorThemeClass,`${s}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof h=="function"?h(d):d)):null}})})]})})),this.marks?b("div",{class:`${s}-slider-marks`},this.markInfos.map(d=>b("div",{key:d.label,class:`${s}-slider-mark`,style:d.style},d.label))):null))}}),Eo="/assets/bgm-aa3888b3.mp3",jo="/assets/update-d5bad0d1.jpg",Uo="/assets/notice-42c91099.jpg",de=a=>(ko("data-v-5b95248c"),a=a(),Co(),a),No={class:"w-full h-full main-page"},Po=de(()=>c("source",{src:Eo,type:"audio/mpeg"},null,-1)),Oo={class:"desktop"},Lo=de(()=>c("div",{class:"pt-30 pl-20px pr-20px"},[c("div",{class:"text-6 text-center mb-20px"},"建设进度"),c("p",{class:"mb-16px"},"2023-12-30: 宣传栏开工，新建进度表"),c("p",{class:"mb-16px"},"2023-12-31: 公告栏开工")],-1)),Xo=de(()=>c("div",{class:"pt-30 pl-20px pr-20px"},[c("div",{class:"text-6 text-center mb-20px"},"公告"),c("p",{class:"mb-16px"},"快乐森林的居民们，你们好！"),c("p",{class:"mb-16px"}," 我们正在建造一座叫“无限宣传栏”的设施，这个宣传栏在建成之后可以无限地延展下去吗这样就不用担心没有地方贴上你们的烦恼啦 ")],-1)),Ko={class:"pt-10 pl-20px pr-20px"},Yo={class:"text-6 text-center mb-20px"},Wo={class:"toggle-lang flex mb-16px"},Qo={class:"w-120px"},Zo={class:"toggle-lang flex items-center justify-start"},qo={class:"w-120px"},Go={class:"absolute bottom-10px flex-center w-full left--20px"},Jo=Te({__name:"index",setup(a){const s=go(),_=x(!1),h=x(!1),d=x(!1),i=x(0),f=x();function S(V){f.value.play(),f.value.volume=V}function H(){i.value===0?(f.value.volume=1,i.value=1,f.value.play()):(f.value.volume=0,i.value=0,f.value.pause()),console.log(f.value.pause)}function A(){s.resetAuthStore()}return(V,u)=>{const z=wo,D=_o,E=Ao,ee=yo;return re(),xo("div",No,[c("audio",{ref_key:"audioRef",ref:f,loop:""},[Po,Ce(" 您的浏览器不支持 audio 标签。 ")],512),c("div",Oo,[c("img",{class:"notice w-16% absolute left-25% top-6% cursor-pointer",src:jo,onClick:u[0]||(u[0]=g=>_.value=!0)}),c("img",{class:"notice w-16% absolute left-55% top-6% cursor-pointer",src:Uo,onClick:u[1]||(u[1]=g=>h.value=!0)})]),c("div",{class:"absolute left-30px top-30px",onClick:H},[i.value===0?(re(),Re(z,{key:0,icon:"material-symbols:volume-off-rounded",class:"text-48px cursor-pointer color-#fff"})):(re(),Re(z,{key:1,icon:"material-symbols:volume-up",class:"text-48px cursor-pointer color-#fff"}))]),c("div",{class:"absolute right-30px top-30px cursor-pointer color-#fff",onClick:u[2]||(u[2]=g=>d.value=!0)},[$(z,{icon:"material-symbols:settings-outline",class:"text-48px cursor-pointer color-#fff"})]),$(D,{show:_.value,"onUpdate:show":u[3]||(u[3]=g=>_.value=g),style:{width:"30vw",height:"41vw",background:"url('/src/assets/images/home-modal-bg.jpg') no-repeat center center/100% 100%, #fff"}},{default:Z(()=>[Lo]),_:1},8,["show"]),$(D,{show:h.value,"onUpdate:show":u[4]||(u[4]=g=>h.value=g),style:{width:"30vw",height:"41vw",background:"url('/src/assets/images/home-modal-bg.jpg') no-repeat center center/100% 100%, #fff"}},{default:Z(()=>[Xo]),_:1},8,["show"]),$(D,{show:d.value,"onUpdate:show":u[6]||(u[6]=g=>d.value=g),style:{width:"40vw",height:"20vw","background-color":"#fff"}},{default:Z(()=>[c("div",Ko,[c("div",Yo,q(G(J)("message.common.setting")),1),c("div",Wo,[c("span",Qo,q(G(J)("message.common.langChange")),1),$(Ro,{"hover-bg":"hover:bg-transparent"})]),c("div",Zo,[c("span",qo,q(G(J)("message.common.volumeChange")),1),$(E,{value:i.value,"onUpdate:value":[u[5]||(u[5]=g=>i.value=g),S],"show-tooltip":"",step:.1,min:0,max:1,class:"w-60%",placement:"bottom"},null,8,["value"])]),c("div",Go,[$(ee,{type:"primary",onClick:A},{default:Z(()=>[Ce(q(G(J)("message.common.logout")),1)]),_:1})])])]),_:1},8,["show"])])}}});const lt=Bo(Jo,[["__scopeId","data-v-5b95248c"]]);export{lt as default};
