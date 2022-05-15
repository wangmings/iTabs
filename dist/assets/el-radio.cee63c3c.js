var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,d=(a,l,o)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o,r=(e,a)=>{for(var l in a||(a={}))s.call(a,l)&&d(e,l,a[l]);if(o)for(var l of o(a))n.call(a,l)&&d(e,l,a[l]);return e},t=(e,o)=>a(e,l(o));import{bu as i,cA as u,bC as b,bH as c,bG as p,cU as m,k as f,af as v,Q as y,cD as g,cE as h,a4 as V,bz as x,bB as k,al as w,ay as S,W as G,X as R,A as z,b3 as B,bk as C,aF as I,a1 as O,D as K,bp as A,bo as E,C as P,cC as j,as as _,aA as D,r as N,v as F,aY as U,cG as $,cO as q,bF as H,bL as L}from"./el-button.0a4ba32a.js";const Q=Symbol("radioGroupKey"),T=i({size:u,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),W=i(t(r({},T),{modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean})),X={[b]:e=>c(e)||p(e)||m(e),change:e=>c(e)||p(e)||m(e)},Y=(e,a)=>{const l=f(),o=v(Q,void 0),s=y((()=>!!o)),n=y({get:()=>s.value?o.modelValue:e.modelValue,set(n){s.value?o.changeEvent(n):a(b,n),l.value.checked=e.modelValue===e.label}}),d=g(y((()=>null==o?void 0:o.size))),r=h(y((()=>null==o?void 0:o.disabled))),t=f(!1),i=y((()=>r.value||s.value&&n.value!==e.label?-1:0));return{radioRef:l,isGroup:s,radioGroup:o,focus:t,size:d,disabled:r,tabIndex:i,modelValue:n}},J=V({name:"ElRadio",props:W,emits:X,setup(e,{emit:a}){const l=x("radio"),{radioRef:o,isGroup:s,focus:n,size:d,disabled:r,tabIndex:t,modelValue:i}=Y(e,a);return{ns:l,focus:n,isGroup:s,modelValue:i,tabIndex:t,size:d,disabled:r,radioRef:o,handleChange:function(){w((()=>a("change",i.value)))}}}}),M=["aria-checked","aria-disabled","tabindex"],Z=["value","name","disabled"];var ee=k(J,[["render",function(e,a,l,o,s,n){return S(),G("label",{class:z([e.ns.b(),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.is("bordered",e.border),e.ns.is("checked",e.modelValue===e.label),e.ns.m(e.size)]),role:"radio","aria-checked":e.modelValue===e.label,"aria-disabled":e.disabled,tabindex:e.tabIndex,onKeydown:a[5]||(a[5]=E(A((a=>e.modelValue=e.disabled?e.modelValue:e.label),["stop","prevent"]),["space"]))},[R("span",{class:z([e.ns.e("input"),e.ns.is("disabled",e.disabled),e.ns.is("checked",e.modelValue===e.label)])},[R("span",{class:z(e.ns.e("inner"))},null,2),B(R("input",{ref:"radioRef","onUpdate:modelValue":a[0]||(a[0]=a=>e.modelValue=a),class:z(e.ns.e("original")),value:e.label,type:"radio","aria-hidden":"true",name:e.name,disabled:e.disabled,tabindex:"-1",onFocus:a[1]||(a[1]=a=>e.focus=!0),onBlur:a[2]||(a[2]=a=>e.focus=!1),onChange:a[3]||(a[3]=(...a)=>e.handleChange&&e.handleChange(...a))},null,42,Z),[[C,e.modelValue]])],2),R("span",{class:z(e.ns.e("label")),onKeydown:a[4]||(a[4]=A((()=>{}),["stop"]))},[I(e.$slots,"default",{},(()=>[O(K(e.label),1)]))],34)],42,M)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const ae=V({name:"ElRadioButton",props:i(t(r({},T),{name:{type:String,default:""}})),setup(e,{emit:a}){const l=x("radio"),{radioRef:o,isGroup:s,focus:n,size:d,disabled:r,tabIndex:t,modelValue:i,radioGroup:u}=Y(e,a);return{ns:l,isGroup:s,size:d,disabled:r,tabIndex:t,modelValue:i,focus:n,activeStyle:y((()=>({backgroundColor:(null==u?void 0:u.fill)||"",borderColor:(null==u?void 0:u.fill)||"",boxShadow:(null==u?void 0:u.fill)?`-1px 0 0 0 ${u.fill}`:"",color:(null==u?void 0:u.textColor)||""}))),radioRef:o}}}),le=["aria-checked","aria-disabled","tabindex"],oe=["value","name","disabled"];var se=k(ae,[["render",function(e,a,l,o,s,n){return S(),G("label",{class:z([e.ns.b("button"),e.ns.is("active",e.modelValue===e.label),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.bm("button",e.size)]),role:"radio","aria-checked":e.modelValue===e.label,"aria-disabled":e.disabled,tabindex:e.tabIndex,onKeydown:a[4]||(a[4]=E(A((a=>e.modelValue=e.disabled?e.modelValue:e.label),["stop","prevent"]),["space"]))},[B(R("input",{ref:"radioRef","onUpdate:modelValue":a[0]||(a[0]=a=>e.modelValue=a),class:z(e.ns.be("button","original-radio")),value:e.label,type:"radio",name:e.name,disabled:e.disabled,tabindex:"-1",onFocus:a[1]||(a[1]=a=>e.focus=!0),onBlur:a[2]||(a[2]=a=>e.focus=!1)},null,42,oe),[[C,e.modelValue]]),R("span",{class:z(e.ns.be("button","inner")),style:P(e.modelValue===e.label?e.activeStyle:{}),onKeydown:a[3]||(a[3]=A((()=>{}),["stop"]))},[I(e.$slots,"default",{},(()=>[O(K(e.label),1)]))],38)],42,le)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);var ne=k(V({name:"ElRadioGroup",props:i({size:u,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},textColor:{type:String,default:""}}),emits:X,setup(e,a){const l=x("radio"),o=f(),{formItem:s}=j();return _((()=>{const e=o.value.querySelectorAll("[type=radio]"),a=e[0];!Array.from(e).some((e=>e.checked))&&a&&(a.tabIndex=0)})),D(Q,N(t(r({},F(e)),{changeEvent:e=>{a.emit(b,e),w((()=>a.emit("change",e)))}}))),U((()=>e.modelValue),(()=>null==s?void 0:s.validate("change").catch((e=>$())))),{ns:l,radioGroupRef:o,handleKeydown:e=>{if(!o.value)return;const a=e.target,l="INPUT"===a.nodeName?"[type=radio]":"[role=radio]",s=o.value.querySelectorAll(l),n=s.length,d=Array.from(s).indexOf(a),r=o.value.querySelectorAll("[role=radio]");let t=null;switch(e.code){case q.left:case q.up:e.stopPropagation(),e.preventDefault(),t=0===d?n-1:d-1;break;case q.right:case q.down:e.stopPropagation(),e.preventDefault(),t=d===n-1?0:d+1}null!==t&&(r[t].click(),r[t].focus())}}}}),[["render",function(e,a,l,o,s,n){return S(),G("div",{ref:"radioGroupRef",class:z(e.ns.b("group")),role:"radiogroup",onKeydown:a[0]||(a[0]=(...a)=>e.handleKeydown&&e.handleKeydown(...a))},[I(e.$slots,"default")],34)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const de=H(ee,{RadioButton:se,RadioGroup:ne}),re=L(ne);L(se);export{de as E,re as a};
