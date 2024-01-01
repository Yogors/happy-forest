import{k as so,cy as lo,b as x,cz as ro,e as U,c as n,n as w,f as Y,m as we,bH as io,bI as co,d as Te,g as uo,s as Ve,_ as ho,p as S,t as vo,o as _e,x as fo,y as ye,z as mo,h as g,B as po,T as bo,S as W,U as q,C as re,a4 as ke,bp as go,aQ as ie,aR as xo,aS as d,a_ as Ce,aT as Se,aZ as H,aU as Q,aX as Z,aV as G,a$ as J,b6 as wo,a5 as _o,b3 as yo,b4 as ko,bc as Co}from"./index-284316f4.js";import{a as So}from"./toggle-lang.vuevuetypescriptsetuptruelang-98d3758c.js";import{u as Ro,b as de,V as zo,d as To,e as Vo}from"./Dropdown-1ef8a687.js";import{_ as Bo}from"./plugin-vueexport-helper-c27b6911.js";import"./format-length-c9d165c6.js";const Mo=a=>{const l="rgba(0, 0, 0, .85)",_="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:h,primaryColor:c,baseColor:i,cardColor:f,modalColor:R,popoverColor:A,borderRadius:F,fontSize:T,opacityDisabled:u}=a;return Object.assign(Object.assign({},lo),{fontSize:T,markFontSize:T,railColor:h,railColorHover:h,fillColor:c,fillColorHover:c,opacityDisabled:u,handleColor:"#FFF",dotColor:f,dotColorModal:R,dotColorPopover:A,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:l,indicatorBoxShadow:_,indicatorTextColor:i,indicatorBorderRadius:F,dotBorder:`2px solid ${h}`,dotBorderActive:`2px solid ${c}`,dotBoxShadow:""})},$o={name:"Slider",common:so,self:Mo},Do=$o;function Re(a){return window.TouchEvent&&a instanceof window.TouchEvent}function ze(){const a=x(new Map),l=_=>h=>{a.value.set(_,h)};return ro(()=>{a.value.clear()}),[a,l]}const Io=U([n("slider",`
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
 `),U("&:hover",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[Y("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),w("active",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[Y("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),n("slider-marks",`
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
 `,[U("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),U("&:focus",[n("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[U("&:hover",`
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
 `),we()]),io(n("slider",[n("slider-dot","background-color: var(--n-dot-color-modal);")])),co(n("slider",[n("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Ho=0,Ao=Object.assign(Object.assign({},Ve.props),{to:de.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Fo=Te({name:"Slider",props:Ao,setup(a){const{mergedClsPrefixRef:l,namespaceRef:_,inlineThemeDisabled:h}=uo(a),c=Ve("Slider","-slider",Io,Do,a,l),i=x(null),[f,R]=ze(),[A,F]=ze(),T=x(new Set),u=ho(a),{mergedDisabledRef:V}=u,$=S(()=>{const{step:e}=a;if(Number(e)<=0||e==="mark")return 0;const o=e.toString();let t=0;return o.includes(".")&&(t=o.length-o.indexOf(".")-1),t}),E=x(a.defaultValue),oe=vo(a,"value"),m=Ro(oe,E),y=S(()=>{const{value:e}=m;return(a.range?e:[e]).map(pe)}),ce=S(()=>y.value.length>2),Be=S(()=>a.placement===void 0?a.vertical?"right":"top":a.placement),ue=S(()=>{const{marks:e}=a;return e?Object.keys(e).map(parseFloat):null}),k=x(-1),he=x(-1),B=x(-1),M=x(!1),N=x(!1),te=S(()=>{const{vertical:e,reverse:o}=a;return e?o?"top":"bottom":o?"right":"left"}),Me=S(()=>{if(ce.value)return;const e=y.value,o=P(a.range?Math.min(...e):a.min),t=P(a.range?Math.max(...e):e[0]),{value:s}=te;return a.vertical?{[s]:`${o}%`,height:`${t-o}%`}:{[s]:`${o}%`,width:`${t-o}%`}}),$e=S(()=>{const e=[],{marks:o}=a;if(o){const t=y.value.slice();t.sort((p,b)=>p-b);const{value:s}=te,{value:r}=ce,{range:v}=a,C=r?()=>!1:p=>v?p>=t[0]&&p<=t[t.length-1]:p<=t[0];for(const p of Object.keys(o)){const b=Number(p);e.push({active:C(b),label:o[p],style:{[s]:`${P(b)}%`}})}}return e});function De(e,o){const t=P(e),{value:s}=te;return{[s]:`${t}%`,zIndex:o===k.value?1:0}}function ve(e){return a.showTooltip||B.value===e||k.value===e&&M.value}function Ie(e){return M.value?!(k.value===e&&he.value===e):!0}function He(e){var o;~e&&(k.value=e,(o=f.value.get(e))===null||o===void 0||o.focus())}function Ae(){A.value.forEach((e,o)=>{ve(o)&&e.syncPosition()})}function fe(e){const{"onUpdate:value":o,onUpdateValue:t}=a,{nTriggerFormInput:s,nTriggerFormChange:r}=u;t&&ke(t,e),o&&ke(o,e),E.value=e,s(),r()}function me(e){const{range:o}=a;if(o){if(Array.isArray(e)){const{value:t}=y;e.join()!==t.join()&&fe(e)}}else Array.isArray(e)||y.value[0]!==e&&fe(e)}function ae(e,o){if(a.range){const t=y.value.slice();t.splice(o,1,e),me(t)}else me(e)}function ne(e,o,t){const s=t!==void 0;t||(t=e-o>0?1:-1);const r=ue.value||[],{step:v}=a;if(v==="mark"){const b=j(e,r.concat(o),s?t:void 0);return b?b.value:o}if(v<=0)return o;const{value:C}=$;let p;if(s){const b=Number((o/v).toFixed(C)),z=Math.floor(b),se=b>z?z:z-1,le=b<z?z:z+1;p=j(o,[Number((se*v).toFixed(C)),Number((le*v).toFixed(C)),...r],t)}else{const b=Ee(e);p=j(e,[...r,b])}return p?pe(p.value):o}function pe(e){return Math.min(a.max,Math.max(a.min,e))}function P(e){const{max:o,min:t}=a;return(e-t)/(o-t)*100}function Fe(e){const{max:o,min:t}=a;return t+(o-t)*e}function Ee(e){const{step:o,min:t}=a;if(Number(o)<=0||o==="mark")return e;const s=Math.round((e-t)/o)*o+t;return Number(s.toFixed($.value))}function j(e,o=ue.value,t){if(!(o!=null&&o.length))return null;let s=null,r=-1;for(;++r<o.length;){const v=o[r]-e,C=Math.abs(v);(t===void 0||v*t>0)&&(s===null||C<s.distance)&&(s={index:r,distance:C,value:o[r]})}return s}function be(e){const o=i.value;if(!o)return;const t=Re(e)?e.touches[0]:e,s=o.getBoundingClientRect();let r;return a.vertical?r=(s.bottom-t.clientY)/s.height:r=(t.clientX-s.left)/s.width,a.reverse&&(r=1-r),Fe(r)}function Ue(e){if(V.value||!a.keyboard)return;const{vertical:o,reverse:t}=a;switch(e.key){case"ArrowUp":e.preventDefault(),O(o&&t?-1:1);break;case"ArrowRight":e.preventDefault(),O(!o&&t?-1:1);break;case"ArrowDown":e.preventDefault(),O(o&&t?1:-1);break;case"ArrowLeft":e.preventDefault(),O(!o&&t?1:-1);break}}function O(e){const o=k.value;if(o===-1)return;const{step:t}=a,s=y.value[o],r=Number(t)<=0||t==="mark"?s:s+t*e;ae(ne(r,s,e>0?1:-1),o)}function Ne(e){var o,t;if(V.value||!Re(e)&&e.button!==Ho)return;const s=be(e);if(s===void 0)return;const r=y.value.slice(),v=a.range?(t=(o=j(s,r))===null||o===void 0?void 0:o.index)!==null&&t!==void 0?t:-1:0;v!==-1&&(e.preventDefault(),He(v),Pe(),ae(ne(s,y.value[v]),v))}function Pe(){M.value||(M.value=!0,W("touchend",document,K),W("mouseup",document,K),W("touchmove",document,X),W("mousemove",document,X))}function L(){M.value&&(M.value=!1,q("touchend",document,K),q("mouseup",document,K),q("touchmove",document,X),q("mousemove",document,X))}function X(e){const{value:o}=k;if(!M.value||o===-1){L();return}const t=be(e);ae(ne(t,y.value[o]),o)}function K(){L()}function je(e){k.value=e,V.value||(B.value=e)}function Oe(e){k.value===e&&(k.value=-1,L()),B.value===e&&(B.value=-1)}function Le(e){B.value=e}function Xe(e){B.value===e&&(B.value=-1)}_e(k,(e,o)=>void re(()=>he.value=o)),_e(m,()=>{if(a.marks){if(N.value)return;N.value=!0,re(()=>{N.value=!1})}re(Ae)}),fo(()=>{L()});const ge=S(()=>{const{self:{markFontSize:e,railColor:o,railColorHover:t,fillColor:s,fillColorHover:r,handleColor:v,opacityDisabled:C,dotColor:p,dotColorModal:b,handleBoxShadow:z,handleBoxShadowHover:se,handleBoxShadowActive:le,handleBoxShadowFocus:Ke,dotBorder:Ye,dotBoxShadow:We,railHeight:qe,railWidthVertical:Qe,handleSize:Ze,dotHeight:Ge,dotWidth:Je,dotBorderRadius:eo,fontSize:oo,dotBorderActive:to,dotColorPopover:ao},common:{cubicBezierEaseInOut:no}}=c.value;return{"--n-bezier":no,"--n-dot-border":Ye,"--n-dot-border-active":to,"--n-dot-border-radius":eo,"--n-dot-box-shadow":We,"--n-dot-color":p,"--n-dot-color-modal":b,"--n-dot-color-popover":ao,"--n-dot-height":Ge,"--n-dot-width":Je,"--n-fill-color":s,"--n-fill-color-hover":r,"--n-font-size":oo,"--n-handle-box-shadow":z,"--n-handle-box-shadow-active":le,"--n-handle-box-shadow-focus":Ke,"--n-handle-box-shadow-hover":se,"--n-handle-color":v,"--n-handle-size":Ze,"--n-opacity-disabled":C,"--n-rail-color":o,"--n-rail-color-hover":t,"--n-rail-height":qe,"--n-rail-width-vertical":Qe,"--n-mark-font-size":e}}),D=h?ye("slider",void 0,ge,a):void 0,xe=S(()=>{const{self:{fontSize:e,indicatorColor:o,indicatorBoxShadow:t,indicatorTextColor:s,indicatorBorderRadius:r}}=c.value;return{"--n-font-size":e,"--n-indicator-border-radius":r,"--n-indicator-box-shadow":t,"--n-indicator-color":o,"--n-indicator-text-color":s}}),I=h?ye("slider-indicator",void 0,xe,a):void 0;return{mergedClsPrefix:l,namespace:_,uncontrolledValue:E,mergedValue:m,mergedDisabled:V,mergedPlacement:Be,isMounted:mo(),adjustedTo:de(a),dotTransitionDisabled:N,markInfos:$e,isShowTooltip:ve,shouldKeepTooltipTransition:Ie,handleRailRef:i,setHandleRefs:R,setFollowerRefs:F,fillStyle:Me,getHandleStyle:De,activeIndex:k,arrifiedValues:y,followerEnabledIndexSet:T,handleRailMouseDown:Ne,handleHandleFocus:je,handleHandleBlur:Oe,handleHandleMouseEnter:Le,handleHandleMouseLeave:Xe,handleRailKeyDown:Ue,indicatorCssVars:h?void 0:xe,indicatorThemeClass:I==null?void 0:I.themeClass,indicatorOnRender:I==null?void 0:I.onRender,cssVars:h?void 0:ge,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender}},render(){var a;const{mergedClsPrefix:l,themeClass:_,formatTooltip:h}=this;return(a=this.onRender)===null||a===void 0||a.call(this),g("div",{class:[`${l}-slider`,_,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},g("div",{class:`${l}-slider-rail`},g("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?g("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(c=>g("div",{key:c.label,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:c.active}],style:c.style}))):null,g("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((c,i)=>{const f=this.isShowTooltip(i);return g(zo,null,{default:()=>[g(To,null,{default:()=>g("div",{ref:this.setHandleRefs(i),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(c,i),onFocus:()=>{this.handleHandleFocus(i)},onBlur:()=>{this.handleHandleBlur(i)},onMouseenter:()=>{this.handleHandleMouseEnter(i)},onMouseleave:()=>{this.handleHandleMouseLeave(i)}},po(this.$slots.thumb,()=>[g("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&g(Vo,{ref:this.setFollowerRefs(i),show:f,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(i),teleportDisabled:this.adjustedTo===de.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>g(bo,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(i),onEnter:()=>{this.followerEnabledIndexSet.add(i)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(i)}},{default:()=>{var R;return f?((R=this.indicatorOnRender)===null||R===void 0||R.call(this),g("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof h=="function"?h(c):c)):null}})})]})})),this.marks?g("div",{class:`${l}-slider-marks`},this.markInfos.map(c=>g("div",{key:c.label,class:`${l}-slider-mark`,style:c.style},c.label))):null))}}),Eo="/happy-forest/dist/assets/bgm-aa3888b3.mp3",Uo="/happy-forest/dist/assets/update-88bd1bb9.png",No="/happy-forest/dist/assets/Announcements-a20518a1.png",Po="/happy-forest/dist/assets/Hamsterbuilding-deb80299.mp4",jo="/happy-forest/dist/assets/setting-ef1c9b48.png",ee=a=>(yo("data-v-de8f9a63"),a=a(),ko(),a),Oo={class:"w-full h-full main-page"},Lo=ee(()=>d("source",{src:Eo,type:"audio/mpeg"},null,-1)),Xo={class:"desktop"},Ko=ee(()=>d("video",{src:Po,class:"squirrel absolute",muted:"",autoplay:"",loop:""},null,-1)),Yo=ee(()=>d("div",{class:"pt-30 pl-20px pr-20px"},[d("div",{class:"text-6 text-center mb-20px"},"建设进度"),d("p",{class:"mb-16px"},"2023-12-30: 宣传栏开工，新建进度表"),d("p",{class:"mb-16px"},"2023-12-31: 公告栏开工")],-1)),Wo=ee(()=>d("div",{class:"pt-30 pl-20px pr-20px"},[d("div",{class:"text-6 text-center mb-20px"},"公告"),d("p",{class:"mb-16px"},"快乐森林的居民们，你们好！"),d("p",{class:"mb-16px"}," 我们正在建造一座叫“无限宣传栏”的设施，这个宣传栏在建成之后可以无限地延展下去吗这样就不用担心没有地方贴上你们的烦恼啦 ")],-1)),qo={class:"pt-10 pl-20px pr-20px"},Qo={class:"text-6 text-center mb-20px"},Zo={class:"toggle-lang flex mb-16px"},Go={class:"w-120px"},Jo={class:"toggle-lang flex items-center justify-start"},et={class:"w-120px"},ot={class:"absolute bottom-10px flex-center w-full left--20px"},tt=Te({__name:"index",setup(a){const l=go(),_=x(!1),h=x(!1),c=x(!1),i=x(0),f=x();function R(T){f.value.play(),f.value.volume=T}function A(){i.value===0?(f.value.volume=1,i.value=1,f.value.play()):(f.value.volume=0,i.value=0,f.value.pause()),console.log(f.value.pause)}function F(){l.resetAuthStore()}return(T,u)=>{const V=Co,$=wo,E=Fo,oe=_o;return ie(),xo("div",Oo,[d("audio",{ref_key:"audioRef",ref:f,loop:""},[Lo,Ce(" 您的浏览器不支持 audio 标签。 ")],512),d("div",Xo,[d("img",{class:"notice w-16% absolute left-25% top-6% cursor-pointer",src:Uo,onClick:u[0]||(u[0]=m=>_.value=!0)}),d("img",{class:"notice w-16% absolute left-55% top-6% cursor-pointer",src:No,onClick:u[1]||(u[1]=m=>h.value=!0)})]),Ko,d("div",{class:"absolute left-30px top-30px",onClick:A},[i.value===0?(ie(),Se(V,{key:0,icon:"material-symbols:volume-off-rounded",class:"text-48px cursor-pointer color-#fff"})):(ie(),Se(V,{key:1,icon:"material-symbols:volume-up",class:"text-48px cursor-pointer color-#fff"}))]),d("div",{class:"absolute w-48px h-48px right-30px top-30px cursor-pointer color-#fff",onClick:u[3]||(u[3]=m=>c.value=!0)},[d("img",{class:"",src:jo,onClick:u[2]||(u[2]=m=>c.value=!0)})]),H($,{show:_.value,"onUpdate:show":u[4]||(u[4]=m=>_.value=m),style:{width:"30vw",height:"41vw",background:"url('/src/assets/images/StampPaper.png') no-repeat center center/100% 100%, #fff"}},{default:Q(()=>[Yo]),_:1},8,["show"]),H($,{show:h.value,"onUpdate:show":u[5]||(u[5]=m=>h.value=m),style:{width:"30vw",height:"41vw",background:"url('/src/assets/images/StampPaper.png') no-repeat center center/100% 100%, #fff"}},{default:Q(()=>[Wo]),_:1},8,["show"]),H($,{show:c.value,"onUpdate:show":u[7]||(u[7]=m=>c.value=m),style:{width:"40vw",height:"20vw","background-color":"#fff"}},{default:Q(()=>[d("div",qo,[d("div",Qo,Z(G(J)("message.common.setting")),1),d("div",Zo,[d("span",Go,Z(G(J)("message.common.langChange")),1),H(So,{"hover-bg":"hover:bg-transparent"})]),d("div",Jo,[d("span",et,Z(G(J)("message.common.volumeChange")),1),H(E,{value:i.value,"onUpdate:value":[u[6]||(u[6]=m=>i.value=m),R],"show-tooltip":"",step:.1,min:0,max:1,class:"w-60%",placement:"bottom"},null,8,["value"])]),d("div",ot,[H(oe,{type:"primary",onClick:F},{default:Q(()=>[Ce(Z(G(J)("message.common.logout")),1)]),_:1})])])]),_:1},8,["show"])])}}});const it=Bo(tt,[["__scopeId","data-v-de8f9a63"]]);export{it as default};
