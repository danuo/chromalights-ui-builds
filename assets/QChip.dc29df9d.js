import{c as C,ab as _,ac as x,ad as y,ae as B,e as t,al as R,g as a,Z as u,aY as I,R as w,W as z,j as D}from"./index.cb6feb5d.js";const Q={xs:8,sm:10,md:14,lg:20,xl:24};var j=C({name:"QChip",props:{..._,...x,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:h,emit:i}){const{proxy:{$q:n}}=D(),v=y(e,n),b=B(e,Q),m=t(()=>e.selected===!0||e.icon!==void 0),f=t(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),q=t(()=>e.iconRemove||n.iconSet.chip.remove),c=t(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),g=t(()=>{const l=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(l?` text-${l} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(c.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(v.value===!0?" q-chip--dark q-dark":"")}),s=t(()=>{const l=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},o={...l,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||n.lang.label.remove};return{chip:l,remove:o}});function S(l){l.keyCode===13&&r(l)}function r(l){e.disable||(i("update:selected",!e.selected),i("click",l))}function d(l){(l.keyCode===void 0||l.keyCode===13)&&(z(l),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function k(){const l=[];c.value===!0&&l.push(a("div",{class:"q-focus-helper"})),m.value===!0&&l.push(a(u,{class:"q-chip__icon q-chip__icon--left",name:f.value}));const o=e.label!==void 0?[a("div",{class:"ellipsis"},[e.label])]:void 0;return l.push(a("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},I(h.default,o))),e.iconRight&&l.push(a(u,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&l.push(a(u,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:q.value,...s.value.remove,onClick:d,onKeyup:d})),l}return()=>{if(e.modelValue===!1)return;const l={class:g.value,style:b.value};return c.value===!0&&Object.assign(l,s.value.chip,{onClick:r,onKeyup:S}),R("div",l,k(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[w,e.ripple]])}}});export{j as Q};
