let s,n=0;const e=new Array(256);for(let t=0;t<256;t++)e[t]=(t+256).toString(16).substring(1);const l=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return o=>{const r=new Uint8Array(o);return t.getRandomValues(r),r}}return o=>{const r=[];for(let i=o;i>0;i--)r.push(Math.floor(Math.random()*256));return r}})(),d=4096;function a(){(s===void 0||n+16>d)&&(n=0,s=l(d));const t=Array.prototype.slice.call(s,n,n+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,e[t[0]]+e[t[1]]+e[t[2]]+e[t[3]]+"-"+e[t[4]]+e[t[5]]+"-"+e[t[6]]+e[t[7]]+"-"+e[t[8]]+e[t[9]]+"-"+e[t[10]]+e[t[11]]+e[t[12]]+e[t[13]]+e[t[14]]+e[t[15]]}let c=!1;{const t=document.createElement("div");t.setAttribute("dir","rtl"),Object.assign(t.style,{width:"1px",height:"1px",overflow:"auto"});const o=document.createElement("div");Object.assign(o.style,{width:"1000px",height:"1px"}),document.body.appendChild(t),t.appendChild(o),t.scrollLeft=-1e3,c=t.scrollLeft>=0,t.remove()}export{c as r,a as u};
