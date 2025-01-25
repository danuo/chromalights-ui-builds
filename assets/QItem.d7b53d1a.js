import{c as L,ab as B,u as K,ad as R,d as w,r as o,e as n,g as v,X as A,W as D,h as I,j as P}from"./index.cb6feb5d.js";var S=L({name:"QItem",props:{...B,...K,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:d,emit:f}){const{proxy:{$q:i}}=P(),m=R(t,i),{hasLink:s,linkAttrs:b,linkClass:k,linkTag:q,navigateOnClick:g}=w(),u=o(null),l=o(null),c=n(()=>t.clickable===!0||s.value===!0||t.tag==="label"),a=n(()=>t.disable!==!0&&c.value===!0),y=n(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(m.value===!0?" q-item--dark":"")+(s.value===!0&&t.active===null?k.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),h=n(()=>{if(t.insetLevel===void 0)return null;const e=i.lang.rtl===!0?"Right":"Left";return{["padding"+e]:16+t.insetLevel*56+"px"}});function C(e){a.value===!0&&(l.value!==null&&(e.qKeyEvent!==!0&&document.activeElement===u.value?l.value.focus():document.activeElement===l.value&&u.value.focus()),g(e))}function x(e){if(a.value===!0&&A(e,[13,32])===!0){D(e),e.qKeyEvent=!0;const r=new MouseEvent("click",e);r.qKeyEvent=!0,u.value.dispatchEvent(r)}f("keyup",e)}function E(){const e=I(d.default,[]);return a.value===!0&&e.unshift(v("div",{class:"q-focus-helper",tabindex:-1,ref:l})),e}return()=>{const e={ref:u,class:y.value,style:h.value,role:"listitem",onClick:C,onKeyup:x};return a.value===!0?(e.tabindex=t.tabindex||"0",Object.assign(e,b.value)):c.value===!0&&(e["aria-disabled"]="true"),v(q.value,e,E())}}});export{S as Q};
