var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,p=(e,t)=>{for(var o in t||(t={}))a.call(t,o)&&l(e,o,t[o]);if(r)for(var o of r(t))n.call(t,o)&&l(e,o,t[o]);return e},i=(e,r)=>t(e,o(r));import{a as s,u as f,E as d}from"./index.f364da82.js";import{a4 as c,bB as u,aF as b,k as m,aA as y,af as v,as as g,x as h,ao as w,bu as S,bv as B,cB as O,bz as x,Q as A,bH as k,aG as j,ay as E,U as N,b1 as C,W as T,D as $,A as P,V as R,a1 as _,ak as H}from"./el-button.0a4ba32a.js";import{u as I}from"./deprecation.bfd0cf7f.js";var L=u(c({inheritAttrs:!1}),[["render",function(e,t,o,r,a,n){return b(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var M=u(c({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,t,o,r,a,n){return b(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const D=S({trigger:s.trigger,effect:i(p({},f.effect),{default:"light"}),type:{type:B(String)},placement:{type:B(String),default:"bottom"},popperOptions:{type:B(Object),default:()=>({})},size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:B([Number,String]),default:0},maxHeight:{type:B([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},buttonProps:{type:B(Object)}});S({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:O}}),S({onKeydown:{type:B(Function)}}),(e=>{const t=`El${e}Collection`,o=`${t}Item`,r=Symbol(t),a=Symbol(o),n=i(p({},L),{name:t,setup(){const e=m(null),t=new Map;y(r,{itemMap:t,getItems:()=>{const o=h(e);if(!o)return[];const r=Array.from(o.querySelectorAll("[data-el-collection-item]"));return[...t.values()].sort(((e,t)=>r.indexOf(e.ref)-r.indexOf(t.ref)))},collectionRef:e})}}),l=i(p({},M),{name:o,setup(e,{attrs:t}){const o=m(null),n=v(r,void 0);y(a,{collectionItemRef:o}),g((()=>{const e=h(o);e&&n.itemMap.set(e,p({ref:e},t))})),w((()=>{const e=h(o);n.itemMap.delete(e)}))}})})("Dropdown");const z=S({trigger:s.trigger,placement:D.placement,disabled:s.disabled,visible:f.visible,transition:f.transition,popperOptions:D.popperOptions,tabindex:D.tabindex,appendToBody:{type:Boolean,default:void 0},content:f.content,popperStyle:f.popperStyle,popperClass:f.popperClass,enterable:i(p({},f.enterable),{default:!0}),effect:i(p({},f.effect),{default:"light"}),teleported:f.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0}});var F=u(c({name:"ElPopover",components:{ElTooltip:d},props:z,emits:["update:visible","before-enter","before-leave","after-enter","after-leave"],setup(e,{emit:t}){const o=x("popover"),r=m(null),a=A((()=>{var e;return null==(e=h(r))?void 0:e.popperRef})),n=A((()=>k(e.width)?e.width:`${e.width}px`)),l=A((()=>[{width:n.value},e.popperStyle])),p=A((()=>[o.b(),e.popperClass,{[o.m("plain")]:!!e.content}])),i=A((()=>"el-fade-in-linear"===e.transition)),{compatTeleported:s}=I("ElPopover","appendToBody");return{compatTeleported:s,ns:o,kls:p,gpuAcceleration:i,style:l,tooltipRef:r,popperRef:a,hide:()=>{var e;null==(e=r.value)||e.hide()},beforeEnter:()=>{t("before-enter")},beforeLeave:()=>{t("before-leave")},afterEnter:()=>{t("after-enter")},afterLeave:()=>{t("update:visible",!1),t("after-leave")}}}}),[["render",function(e,t,o,r,a,n){const l=j("el-tooltip");return E(),N(l,H({ref:"tooltipRef"},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,"append-to-body":e.appendToBody,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":e.kls,"popper-style":e.style,teleported:e.compatTeleported,persistent:e.persistent,"gpu-acceleration":e.gpuAcceleration,onBeforeShow:e.beforeEnter,onBeforeHide:e.beforeLeave,onShow:e.afterEnter,onHide:e.afterLeave}),{content:C((()=>[e.title?(E(),T("div",{key:0,class:P(e.ns.e("title")),role:"title"},$(e.title),3)):R("v-if",!0),b(e.$slots,"default",{},(()=>[_($(e.content),1)]))])),default:C((()=>[e.$slots.reference?b(e.$slots,"reference",{key:0}):R("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","append-to-body","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onBeforeShow","onBeforeHide","onShow","onHide"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/index.vue"]]);const V=(e,t)=>{const o=t.arg||t.value,r=null==o?void 0:o.popperRef;r&&(r.triggerRef=e)};var q={mounted(e,t){V(e,t)},updated(e,t){V(e,t)}};F.install=e=>{e.component(F.name,F)},q.install=e=>{e.directive("popover",q)};const G=q;F.directive=G;const K=F;export{K as E};
