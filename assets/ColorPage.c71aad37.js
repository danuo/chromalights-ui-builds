import{Q as Ee}from"./QItemLabel.93937425.js";import{c as Pe,ab as Ue,ad as Re,r as Q,e as y,w as K,g as l,ak as I,Z as He,al as je,j as Fe,a0 as L,am as Oe,x as De,y as Ge,z as R,A as D,K as S,B as T,P as ie,M as G,N as ee,D as ce,Q as te,an as Ne,C as B,ao as ae,aj as ze}from"./index.cb6feb5d.js";import{a as We,Q as Ye}from"./QBtnToggle.3c5e9f72.js";import{Q as $,T as Xe}from"./QSlider.5da25664.js";import{c as re}from"./QTabs.01a97f90.js";import{Q as U,a as N,b as Ze,u as Je}from"./QTabPanel.2ae3bcc2.js";import{u as Ke,a as Le}from"./private.use-form.246ff555.js";import{t as et,Q as tt}from"./QSelect.a06ed3f8.js";import{S as at}from"./SmallToggleComponent.79011050.js";import"./rtl.eb0210c3.js";import"./QChip.dc29df9d.js";import"./QItem.d7b53d1a.js";import"./QItemSection.f4d29192.js";import"./plugin-vue_export-helper.21dcd24c.js";const rt=/^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;function le({r:t,g:o,b:a,a:i}){const u=i!==void 0;if(t=Math.round(t),o=Math.round(o),a=Math.round(a),t>255||o>255||a>255||u&&i>100)throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");return i=u?(Math.round(255*i/100)|1<<8).toString(16).slice(1):"","#"+(a|o<<8|t<<16|1<<24).toString(16).slice(1)+i}function oe({r:t,g:o,b:a,a:i}){return`rgb${i!==void 0?"a":""}(${t},${o},${a}${i!==void 0?","+i/100:""})`}function de(t){if(typeof t!="string")throw new TypeError("Expected a string");t=t.replace(/^#/,""),t.length===3?t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]:t.length===4&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const o=parseInt(t,16);return t.length>6?{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:Math.round((o&255)/2.55)}:{r:o>>16,g:o>>8&255,b:o&255}}function ne({h:t,s:o,v:a,a:i}){let u,b,p;o=o/100,a=a/100,t=t/360;const V=Math.floor(t*6),C=t*6-V,f=a*(1-o),A=a*(1-C*o),x=a*(1-(1-C)*o);switch(V%6){case 0:u=a,b=x,p=f;break;case 1:u=A,b=a,p=f;break;case 2:u=f,b=a,p=x;break;case 3:u=f,b=A,p=a;break;case 4:u=x,b=f,p=a;break;case 5:u=a,b=f,p=A;break}return{r:Math.round(u*255),g:Math.round(b*255),b:Math.round(p*255),a:i}}function z({r:t,g:o,b:a,a:i}){const u=Math.max(t,o,a),b=Math.min(t,o,a),p=u-b,V=u===0?0:p/u,C=u/255;let f;switch(u){case b:f=0;break;case t:f=o-a+p*(o<a?6:0),f/=6*p;break;case o:f=a-t+p*2,f/=6*p;break;case a:f=t-o+p*4,f/=6*p;break}return{h:Math.round(f*360),s:Math.round(V*100),v:Math.round(C*100),a:i}}function ge(t){if(typeof t!="string")throw new TypeError("Expected a string");const o=t.replace(/ /g,""),a=rt.exec(o);if(a===null)return de(o);const i={r:Math.min(255,parseInt(a[2],10)),g:Math.min(255,parseInt(a[3],10)),b:Math.min(255,parseInt(a[4],10))};if(a[1]){const u=parseFloat(a[5]);i.a=Math.min(1,isNaN(u)===!0?1:u)*100}return i}function lt(t){if(typeof t!="string"&&(!t||t.r===void 0))throw new TypeError("Expected a string or a {r, g, b} object as color");const o=typeof t=="string"?ge(t):t,a=o.r/255,i=o.g/255,u=o.b/255,b=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),p=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4),V=u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4);return .2126*b+.7152*p+.0722*V}const ot=["rgb(255,204,204)","rgb(255,230,204)","rgb(255,255,204)","rgb(204,255,204)","rgb(204,255,230)","rgb(204,255,255)","rgb(204,230,255)","rgb(204,204,255)","rgb(230,204,255)","rgb(255,204,255)","rgb(255,153,153)","rgb(255,204,153)","rgb(255,255,153)","rgb(153,255,153)","rgb(153,255,204)","rgb(153,255,255)","rgb(153,204,255)","rgb(153,153,255)","rgb(204,153,255)","rgb(255,153,255)","rgb(255,102,102)","rgb(255,179,102)","rgb(255,255,102)","rgb(102,255,102)","rgb(102,255,179)","rgb(102,255,255)","rgb(102,179,255)","rgb(102,102,255)","rgb(179,102,255)","rgb(255,102,255)","rgb(255,51,51)","rgb(255,153,51)","rgb(255,255,51)","rgb(51,255,51)","rgb(51,255,153)","rgb(51,255,255)","rgb(51,153,255)","rgb(51,51,255)","rgb(153,51,255)","rgb(255,51,255)","rgb(255,0,0)","rgb(255,128,0)","rgb(255,255,0)","rgb(0,255,0)","rgb(0,255,128)","rgb(0,255,255)","rgb(0,128,255)","rgb(0,0,255)","rgb(128,0,255)","rgb(255,0,255)","rgb(245,0,0)","rgb(245,123,0)","rgb(245,245,0)","rgb(0,245,0)","rgb(0,245,123)","rgb(0,245,245)","rgb(0,123,245)","rgb(0,0,245)","rgb(123,0,245)","rgb(245,0,245)","rgb(214,0,0)","rgb(214,108,0)","rgb(214,214,0)","rgb(0,214,0)","rgb(0,214,108)","rgb(0,214,214)","rgb(0,108,214)","rgb(0,0,214)","rgb(108,0,214)","rgb(214,0,214)","rgb(163,0,0)","rgb(163,82,0)","rgb(163,163,0)","rgb(0,163,0)","rgb(0,163,82)","rgb(0,163,163)","rgb(0,82,163)","rgb(0,0,163)","rgb(82,0,163)","rgb(163,0,163)","rgb(92,0,0)","rgb(92,46,0)","rgb(92,92,0)","rgb(0,92,0)","rgb(0,92,46)","rgb(0,92,92)","rgb(0,46,92)","rgb(0,0,92)","rgb(46,0,92)","rgb(92,0,92)","rgb(255,255,255)","rgb(205,205,205)","rgb(178,178,178)","rgb(153,153,153)","rgb(127,127,127)","rgb(102,102,102)","rgb(76,76,76)","rgb(51,51,51)","rgb(25,25,25)","rgb(0,0,0)"],ue="M5 5 h10 v10 h-10 v-10 z",nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";var se=Pe({name:"QColor",props:{...Ue,...Ke,modelValue:String,defaultValue:String,defaultView:{type:String,default:"spectrum",validator:t=>["spectrum","tune","palette"].includes(t)},formatModel:{type:String,default:"auto",validator:t=>["auto","hex","rgb","hexa","rgba"].includes(t)},palette:Array,noHeader:Boolean,noHeaderTabs:Boolean,noFooter:Boolean,square:Boolean,flat:Boolean,bordered:Boolean,disable:Boolean,readonly:Boolean},emits:["update:modelValue","change"],setup(t,{emit:o}){const{proxy:a}=Fe(),{$q:i}=a,u=Re(t,i),{getCache:b}=Je(),p=Q(null),V=Q(null),C=y(()=>t.formatModel==="auto"?null:t.formatModel.indexOf("hex")!==-1),f=y(()=>t.formatModel==="auto"?null:t.formatModel.indexOf("a")!==-1),A=Q(t.formatModel==="auto"?t.modelValue===void 0||t.modelValue===null||t.modelValue===""||t.modelValue.startsWith("#")?"hex":"rgb":t.formatModel.startsWith("hex")?"hex":"rgb"),x=Q(t.defaultView),r=Q(j(t.modelValue||t.defaultValue)),_=y(()=>t.disable!==!0&&t.readonly!==!0),O=y(()=>t.modelValue===void 0||t.modelValue===null||t.modelValue===""||t.modelValue.startsWith("#")),h=y(()=>C.value!==null?C.value:O.value),v=y(()=>({type:"hidden",name:t.name,value:r.value[h.value===!0?"hex":"rgb"]})),g=Le(v),m=y(()=>f.value!==null?f.value:r.value.a!==void 0),H=y(()=>({backgroundColor:r.value.rgb||"#000"})),be=y(()=>`q-color-picker__header-content q-color-picker__header-content--${(r.value.a!==void 0&&r.value.a<65?!0:lt(r.value)>.4)?"light":"dark"}`),ve=y(()=>({background:`hsl(${r.value.h},100%,50%)`})),pe=y(()=>({top:`${100-r.value.v}%`,[i.lang.rtl===!0?"right":"left"]:`${r.value.s}%`})),me=y(()=>t.palette!==void 0&&t.palette.length!==0?t.palette:ot),fe=y(()=>"q-color-picker"+(t.bordered===!0?" q-color-picker--bordered":"")+(t.square===!0?" q-color-picker--square no-border-radius":"")+(t.flat===!0?" q-color-picker--flat no-shadow":"")+(t.disable===!0?" disabled":"")+(u.value===!0?" q-color-picker--dark q-dark":"")),he=y(()=>t.disable===!0?{"aria-disabled":"true"}:{}),_e=y(()=>[[Xe,we,void 0,{prevent:!0,stop:!0,mouse:!0}]]);K(()=>t.modelValue,e=>{const n=j(e||t.defaultValue);n.hex!==r.value.hex&&(r.value=n)}),K(()=>t.defaultValue,e=>{if(!t.modelValue&&e){const n=j(e);n.hex!==r.value.hex&&(r.value=n)}});function E(e,n){r.value.hex=le(e),r.value.rgb=oe(e),r.value.r=e.r,r.value.g=e.g,r.value.b=e.b,r.value.a=e.a;const c=r.value[h.value===!0?"hex":"rgb"];o("update:modelValue",c),n===!0&&o("change",c)}function j(e){const n=f.value!==void 0?f.value:t.formatModel==="auto"?null:t.formatModel.indexOf("a")!==-1;if(typeof e!="string"||e.length===0||et.anyColor(e.replace(/ /g,""))!==!0)return{h:0,s:0,v:0,r:0,g:0,b:0,a:n===!0?100:void 0,hex:void 0,rgb:void 0};const c=ge(e);return n===!0&&c.a===void 0&&(c.a=100),c.hex=le(c),c.rgb=oe(c),Object.assign(c,z(c))}function F(e,n,c){const d=p.value;if(d===null)return;const M=d.clientWidth,s=d.clientHeight,q=d.getBoundingClientRect();let w=Math.min(M,Math.max(0,e-q.left));i.lang.rtl===!0&&(w=M-w);const P=Math.min(s,Math.max(0,n-q.top)),Z=Math.round(100*w/M),J=Math.round(100*Math.max(0,Math.min(1,-(P/s)+1))),Qe=ne({h:r.value.h,s:Z,v:J,a:m.value===!0?r.value.a:void 0});r.value.s=Z,r.value.v=J,E(Qe,c)}function W(e,n){const c=Math.round(e),d=ne({h:c,s:r.value.s,v:r.value.v,a:m.value===!0?r.value.a:void 0});r.value.h=c,E(d,n)}function ke(e){W(e,!0)}function k(e,n,c,d,M){if(d!==void 0&&I(d),!/^[0-9]+$/.test(e)){M===!0&&a.$forceUpdate();return}const s=Math.floor(Number(e));if(s<0||s>c){M===!0&&a.$forceUpdate();return}const q={r:n==="r"?s:r.value.r,g:n==="g"?s:r.value.g,b:n==="b"?s:r.value.b,a:m.value===!0?n==="a"?s:r.value.a:void 0};if(n!=="a"){const w=z(q);r.value.h=w.h,r.value.s=w.s,r.value.v=w.v}if(E(q,M),d!==void 0&&M!==!0&&d.target.selectionEnd!==void 0){const w=d.target.selectionEnd;L(()=>{d.target.setSelectionRange(w,w)})}}function Y(e,n){let c;const d=e.target.value;if(I(e),A.value==="hex"){if(d.length!==(m.value===!0?9:7)||!/^#[0-9A-Fa-f]+$/.test(d))return!0;c=de(d)}else{let s;if(d.endsWith(")"))if(m.value!==!0&&d.startsWith("rgb(")){if(s=d.substring(4,d.length-1).split(",").map(q=>parseInt(q,10)),s.length!==3||!/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(d))return!0}else if(m.value===!0&&d.startsWith("rgba(")){if(s=d.substring(5,d.length-1).split(","),s.length!==4||!/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(d))return!0;for(let w=0;w<3;w++){const P=parseInt(s[w],10);if(P<0||P>255)return!0;s[w]=P}const q=parseFloat(s[3]);if(q<0||q>1)return!0;s[3]=q}else return!0;else return!0;if(s[0]<0||s[0]>255||s[1]<0||s[1]>255||s[2]<0||s[2]>255||m.value===!0&&(s[3]<0||s[3]>1))return!0;c={r:s[0],g:s[1],b:s[2],a:m.value===!0?s[3]*100:void 0}}const M=z(c);if(r.value.h=M.h,r.value.s=M.s,r.value.v=M.v,E(c,n),n!==!0){const s=e.target.selectionEnd;L(()=>{e.target.setSelectionRange(s,s)})}}function ye(e){const n=j(e),c={r:n.r,g:n.g,b:n.b,a:n.a};c.a===void 0&&(c.a=r.value.a),r.value.h=n.h,r.value.s=n.s,r.value.v=n.v,E(c,!0)}function we(e){e.isFinal?F(e.position.left,e.position.top,!0):Ve(e)}const Ve=Oe(e=>{F(e.position.left,e.position.top)},20);function Ce(e){F(e.pageX-window.pageXOffset,e.pageY-window.pageYOffset,!0)}function Me(e){F(e.pageX-window.pageXOffset,e.pageY-window.pageYOffset)}function X(e){V.value!==null&&(V.value.$el.style.opacity=e?1:0)}function Ae(e){A.value=e}function xe(){const e=[];return t.noHeaderTabs!==!0&&e.push(l(re,{class:"q-color-picker__header-tabs",modelValue:A.value,dense:!0,align:"justify","onUpdate:modelValue":Ae},()=>[l(U,{label:"HEX"+(m.value===!0?"A":""),name:"hex",ripple:!1}),l(U,{label:"RGB"+(m.value===!0?"A":""),name:"rgb",ripple:!1})])),e.push(l("div",{class:"q-color-picker__header-banner row flex-center no-wrap"},[l("input",{class:"fit",value:r.value[A.value],..._.value!==!0?{readonly:!0}:{},...b("topIn",{onInput:n=>{X(Y(n)===!0)},onChange:I,onBlur:n=>{Y(n,!0)===!0&&a.$forceUpdate(),X(!1)}})}),l(He,{ref:V,class:"q-color-picker__error-icon absolute no-pointer-events",name:i.iconSet.type.negative})])),l("div",{class:"q-color-picker__header relative-position overflow-hidden"},[l("div",{class:"q-color-picker__header-bg absolute-full"}),l("div",{class:be.value,style:H.value},e)])}function qe(){return l(Ze,{modelValue:x.value,animated:!0},()=>[l(N,{class:"q-color-picker__spectrum-tab overflow-hidden",name:"spectrum"},Te),l(N,{class:"q-pa-md q-color-picker__tune-tab",name:"tune"},Ie),l(N,{class:"q-color-picker__palette-tab",name:"palette"},$e)])}function Se(e){x.value=e}function Be(){return l("div",{class:"q-color-picker__footer relative-position overflow-hidden"},[l(re,{class:"absolute-full",modelValue:x.value,dense:!0,align:"justify","onUpdate:modelValue":Se},()=>[l(U,{icon:i.iconSet.colorPicker.spectrum,name:"spectrum",ripple:!1}),l(U,{icon:i.iconSet.colorPicker.tune,name:"tune",ripple:!1}),l(U,{icon:i.iconSet.colorPicker.palette,name:"palette",ripple:!1})])])}function Te(){const e={ref:p,class:"q-color-picker__spectrum non-selectable relative-position cursor-pointer"+(_.value!==!0?" readonly":""),style:ve.value,..._.value===!0?{onClick:Ce,onMousedown:Me}:{}},n=[l("div",{style:{paddingBottom:"100%"}}),l("div",{class:"q-color-picker__spectrum-white absolute-full"}),l("div",{class:"q-color-picker__spectrum-black absolute-full"}),l("div",{class:"absolute",style:pe.value},[r.value.hex!==void 0?l("div",{class:"q-color-picker__spectrum-circle"}):null])],c=[l($,{class:"q-color-picker__hue non-selectable",modelValue:r.value.h,min:0,max:360,trackSize:"8px",innerTrackColor:"transparent",selectionColor:"transparent",readonly:_.value!==!0,thumbPath:ue,"onUpdate:modelValue":W,onChange:ke})];return m.value===!0&&c.push(l($,{class:"q-color-picker__alpha non-selectable",modelValue:r.value.a,min:0,max:100,trackSize:"8px",trackColor:"white",innerTrackColor:"transparent",selectionColor:"transparent",trackImg:nt,readonly:_.value!==!0,hideSelection:!0,thumbPath:ue,...b("alphaSlide",{"onUpdate:modelValue":d=>k(d,"a",100),onChange:d=>k(d,"a",100,void 0,!0)})})),[je("div",e,n,"spec",_.value,()=>_e.value),l("div",{class:"q-color-picker__sliders"},c)]}function Ie(){return[l("div",{class:"row items-center no-wrap"},[l("div","R"),l($,{modelValue:r.value.r,min:0,max:255,color:"red",dark:u.value,readonly:_.value!==!0,...b("rSlide",{"onUpdate:modelValue":e=>k(e,"r",255),onChange:e=>k(e,"r",255,void 0,!0)})}),l("input",{value:r.value.r,maxlength:3,readonly:_.value!==!0,onChange:I,...b("rIn",{onInput:e=>k(e.target.value,"r",255,e),onBlur:e=>k(e.target.value,"r",255,e,!0)})})]),l("div",{class:"row items-center no-wrap"},[l("div","G"),l($,{modelValue:r.value.g,min:0,max:255,color:"green",dark:u.value,readonly:_.value!==!0,...b("gSlide",{"onUpdate:modelValue":e=>k(e,"g",255),onChange:e=>k(e,"g",255,void 0,!0)})}),l("input",{value:r.value.g,maxlength:3,readonly:_.value!==!0,onChange:I,...b("gIn",{onInput:e=>k(e.target.value,"g",255,e),onBlur:e=>k(e.target.value,"g",255,e,!0)})})]),l("div",{class:"row items-center no-wrap"},[l("div","B"),l($,{modelValue:r.value.b,min:0,max:255,color:"blue",readonly:_.value!==!0,dark:u.value,...b("bSlide",{"onUpdate:modelValue":e=>k(e,"b",255),onChange:e=>k(e,"b",255,void 0,!0)})}),l("input",{value:r.value.b,maxlength:3,readonly:_.value!==!0,onChange:I,...b("bIn",{onInput:e=>k(e.target.value,"b",255,e),onBlur:e=>k(e.target.value,"b",255,e,!0)})})]),m.value===!0?l("div",{class:"row items-center no-wrap"},[l("div","A"),l($,{modelValue:r.value.a,color:"grey",readonly:_.value!==!0,dark:u.value,...b("aSlide",{"onUpdate:modelValue":e=>k(e,"a",100),onChange:e=>k(e,"a",100,void 0,!0)})}),l("input",{value:r.value.a,maxlength:3,readonly:_.value!==!0,onChange:I,...b("aIn",{onInput:e=>k(e.target.value,"a",100,e),onBlur:e=>k(e.target.value,"a",100,e,!0)})})]):null]}function $e(){const e=n=>l("div",{class:"q-color-picker__cube col-auto",style:{backgroundColor:n},..._.value===!0?b("palette#"+n,{onClick:()=>{ye(n)}}):{}});return[l("div",{class:"row items-center q-color-picker__palette-rows"+(_.value===!0?" q-color-picker__palette-rows--editable":"")},me.value.map(e))]}return()=>{const e=[qe()];return t.name!==void 0&&t.disable!==!0&&g(e,"push"),t.noHeader!==!0&&e.unshift(xe()),t.noFooter!==!0&&e.push(Be()),l("div",{class:fe.value,...he.value},e)}}});const ut={class:"q-py-md row flex-center",style:{width:"100%"}},st={class:"q-gutter-y-md",style:{width:"75%"}},it={class:"q-py-lg"},ct={class:"row items-center"},dt={class:"col-3"},gt={class:"col-9"},bt={class:"col-3"},vt={class:"col-9"},pt={class:"q-my-sm row justify-end"},mt={__name:"ColorComponent",setup(t){const o=De(),{settings:a,meta:i}=Ge(o),u=Q("A"),b=["A","B","C"],p=["Color A","Color B"],V=[{label:"prim",value:"prim"},{label:"sec",value:"sec"},{label:"white",value:"white"}],C=y({get(){let h=a.value.colors[u.value];return x(h)},set(h){a.value.colors[u.value]=r(h)}});function f(){ae("/rest/settings",{action:"reset_color_mappings"})}function A(){let h={action:"set_color",color_rgb:a.value.colors[u.value],color_key:u.value};ae("/rest/settings",h)}function x(h){return`rgb(${Math.round(h[0]*255)}, ${Math.round(h[1]*255)}, ${Math.round(h[2]*255)})`}function r(h){var v=h.substring(4,h.length-1).split(","),g=parseInt(v[0])/255,m=parseInt(v[1])/255,H=parseInt(v[2])/255;return[g,m,H]}function _(h){const v=b[h];let g=[];return g.push("height: 60px;"),g.push("padding-top: 16px;"),g.push("border-bottom: 8px solid "),g.push(x(a.value.colors[v])),g.push(";"),g.push("background-color: "),g.push(u.value==v?x(a.value.colors[v]):"#000"),g.push(";"),g.join(" ")}function O(){a.value.apply_color_rule=!a.value.apply_color_rule,o.set_settings("apply_color_rule")}return(h,v)=>(R(),D(G,null,[S("div",ut,[S("div",st,[T(We,{class:"row",style:{width:"100%"}},{default:ie(()=>[(R(!0),D(G,null,ee(p.length,(g,m)=>(R(),ce(te,{key:m,onClick:H=>u.value=b[m],label:p[m],class:"col",style:Ne(_(m))},null,8,["onClick","label","style"]))),128))]),_:1})])]),T(se,{onChange:A,modelValue:C.value,"onUpdate:modelValue":v[0]||(v[0]=g=>C.value=g),"default-value":"#000","default-view":"tune","format-model":"rgb","no-header-tabs":"",size:"huge","no-footer":!0},null,8,["modelValue"]),T(se,{onChange:A,modelValue:C.value,"onUpdate:modelValue":v[1]||(v[1]=g=>C.value=g),"default-value":"#000","default-view":"palette","format-model":"rgb","no-header":"","no-header-tabs":"",size:"huge","no-footer":!0,palette:B(i).color_palette},null,8,["modelValue","palette"]),S("div",it,[S("div",ct,[S("div",dt,[T(at,{active:B(a).apply_color_rule,onClick:v[2]||(v[2]=g=>O()),label:"rule"},null,8,["active"])]),S("div",gt,[T(tt,{"onUpdate:modelValue":[v[3]||(v[3]=g=>{B(a).color_rule=g,B(o).set_settings("color_rule")}),v[4]||(v[4]=g=>B(a).color_rule=g)],dense:"",outlined:"",modelValue:B(a).color_rule,options:B(i).color_rule_names,color:"secondary"},null,8,["modelValue","options"])])]),(R(),D(G,null,ee([1,2,3],g=>S("div",{class:"row items-center",key:g},[S("div",bt,"Level "+ze(g),1),S("div",vt,[T(Ye,{spread:"",dense:"",modelValue:B(a).color_mapping_preset[g],"onUpdate:modelValue":m=>B(a).color_mapping_preset[g]=m,options:V,size:"lg",onClick:v[5]||(v[5]=m=>B(o).set_settings("color_mapping_preset"))},null,8,["modelValue","onUpdate:modelValue"])])])),64)),S("div",pt,[T(te,{label:"reset",icon:"update",onClick:v[6]||(v[6]=g=>f())})])])],64))}},Tt={__name:"ColorPage",setup(t){return(o,a)=>(R(),ce(Ee,{padding:""},{default:ie(()=>[T(mt)]),_:1}))}};export{Tt as default};
