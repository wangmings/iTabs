import{a4 as e,bs as l,ay as s,W as a,X as o,bQ as t,cw as n,cx as i,bu as r,bz as c,Q as u,bB as d,aF as p,U as m,A as b,aI as f,V as v,D as g,bF as x,c4 as y,r as w,c0 as j,cy as h,as as C,x as _,b1 as V,a2 as k,ch as I,I as T,aE as S,bD as E,a1 as A,bp as U,ci as $,b9 as q}from"./el-button.0a4ba32a.js";import{E as z}from"./el-input.b3ba137c.js";import{E as F,a as D}from"./el-select.dc7a2ac5.js";import"./el-scrollbar.3e84cd99.js";import"./el-popper.7e8f10c3.js";import{E as B,a as Q}from"./el-form-item.785a6e2e.js";import{_ as R}from"./d-color.c1dcbbce.js";import{u as W}from"./index.c956e740.js";import{c as L}from"./cloneDeep.436aab3d.js";import"./typescript.72bf8adc.js";import"./index.f364da82.js";import"./event.0bae16b8.js";import"./isEqual.6fce44d5.js";import"./_baseIsEqual.220044e7.js";import"./_Uint8Array.d6bc81f7.js";import"./index.b9023f44.js";import"./validator.053f84bf.js";import"./deprecation.bfd0cf7f.js";import"./arrow-up.0ae35c9a.js";import"./_baseClone.a466ea06.js";import"./arrow-down.766403d3.js";const M=e({name:"CircleCheckFilled"}),X={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},G=[o("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"},null,-1)];const H={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},J={[H.success]:l(M,[["render",function(e,l,o,t,n,i){return s(),a("svg",X,G)}]]),[H.warning]:t,[H.error]:n,[H.info]:i},K=r({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{values:["success","warning","info","error"],default:"info"}});const N=x(d(e({name:"ElResult",props:K,setup(e,{slots:l}){const s=c("result");W({scope:"ElResult",type:"Slot",from:"subTitle",replacement:"sub-title",version:"2.1.3",ref:"https://github.com/element-plus/element-plus/pull/6636/"},u((()=>!!l.subTitle)));return{ns:s,resultIcon:u((()=>{const l=e.icon,s=l&&H[l]?H[l]:"icon-info";return{class:s,component:J[s]||J["icon-info"]}}))}}}),[["render",function(e,l,t,n,i,r){return s(),a("div",{class:b(e.ns.b())},[o("div",{class:b(e.ns.e("icon"))},[p(e.$slots,"icon",{},(()=>[e.resultIcon.component?(s(),m(f(e.resultIcon.component),{key:0,class:b(e.resultIcon.class)},null,8,["class"])):v("v-if",!0)]))],2),e.title||e.$slots.title?(s(),a("div",{key:0,class:b(e.ns.e("title"))},[p(e.$slots,"title",{},(()=>[o("p",null,g(e.title),1)]))],2)):v("v-if",!0),e.subTitle||e.$slots["sub-title"]?(s(),a("div",{key:1,class:b(e.ns.e("subtitle"))},[p(e.$slots,"sub-title",{},(()=>[o("p",null,g(e.subTitle),1)]))],2)):v("v-if",!0),e.$slots.extra?(s(),a("div",{key:2,class:b(e.ns.e("extra"))},[p(e.$slots,"extra")],2)):v("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]));const O={class:"popup-body p20"},P={class:"icon-preview mb10"},Y={class:"icon-preview-body"};var Z=y({setup(e){const l=w({navConfig:j.get("navConfig")||[],menuActiveId:"1",addSuccess:!1}),t=w({type:"",id:"",url:"",name:"",src:"",type:"text",iconText:"A",backgroundColor:h()});return C((()=>{chrome.tabs&&chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(e){t.url=e[0].url,t.name=e[0].title||"",t.iconText=t.name.substring(0,3)}))})),(e,n)=>(s(),a("div",O,[_(l).addSuccess?(s(),m(_(N),{key:1,icon:"success",title:"添加成功"})):(s(),m(_(Q),{key:0,onSubmit:n[6]||(n[6]=U((()=>{}),["prevent"])),model:_(t),size:"default","label-width":"80px","label-position":"left"},{default:V((()=>[k(_(B),{label:"地址",prop:"url",required:""},{default:V((()=>[k(_(z),{autofocus:"",modelValue:_(t).url,"onUpdate:modelValue":n[0]||(n[0]=e=>_(t).url=e),placeholder:"https://"},null,8,["modelValue"])])),_:1}),k(_(B),{label:"名称",prop:"name",required:""},{default:V((()=>[k(_(z),{modelValue:_(t).name,"onUpdate:modelValue":n[1]||(n[1]=e=>_(t).name=e),maxlength:"30",placeholder:"网站名称"},null,8,["modelValue"])])),_:1}),k(_(B),{label:"",style:{"margin-bottom":"10px"}},{default:V((()=>[o("div",P,[o("div",Y,[k(I,{bgColor:_(t).backgroundColor,text:_(t).iconText},null,8,["bgColor","text"])])])])),_:1}),k(_(B),{label:"分组"},{default:V((()=>[k(_(F),{"popper-class":"popup-group-select",modelValue:_(l).menuActiveId,"onUpdate:modelValue":n[2]||(n[2]=e=>_(l).menuActiveId=e)},{default:V((()=>[(s(!0),a(T,null,S(_(l).navConfig,(e=>(s(),m(_(D),{key:e.id,value:e.id,label:e.name},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])])),_:1}),k(_(B),{label:"图标文字"},{default:V((()=>[k(_(z),{placeholder:"请输入图标文字",maxlength:"6",modelValue:_(t).iconText,"onUpdate:modelValue":n[3]||(n[3]=e=>_(t).iconText=e)},null,8,["modelValue"])])),_:1}),k(_(B),{label:"图标背景"},{default:V((()=>[k(R,{class:"wfull",modelValue:_(t).backgroundColor,"onUpdate:modelValue":n[4]||(n[4]=e=>_(t).backgroundColor=e)},null,8,["modelValue"])])),_:1}),k(_(B),{label:""},{default:V((()=>[k(_(E),{disabled:_(l).addSuccess,type:"primary",style:{width:"120px"},onClick:n[5]||(n[5]=e=>(l.navConfig.find((e=>l.menuActiveId===e.id)).children.push(L(t)),j.set("navConfig",l.navConfig),$("navConfig",800),l.addSuccess=!0,void setTimeout((()=>{window.close()}),1e3)))},{default:V((()=>[A(g(_(l).addSuccess?"添加成功":"确 定"),1)])),_:1},8,["disabled"])])),_:1})])),_:1},8,["model"]))]))}},[["__scopeId","data-v-89d47518"]]);q({setup:e=>(e,l)=>(s(),m(Z))}).mount("#popup");
