import{D as a}from"./d-switch.8d803ddf.js";import{_ as e}from"./d-color.c1dcbbce.js";import{D as t}from"./d-slider.fbf2ea16.js";import{D as l}from"./d-font-family.0ce7f1e5.js";import{b as o}from"./main.858372aa.js";import{c4 as d,ay as i,W as s,a2 as n,I as m,x as u,V as r,aB as p,az as c,X as f}from"./el-button.0a4ba32a.js";import"./validator.053f84bf.js";import"./el-input.b3ba137c.js";import"./typescript.72bf8adc.js";import"./index.f364da82.js";import"./event.0bae16b8.js";import"./index.b9023f44.js";import"./arrow-down.766403d3.js";import"./el-input-number.39938184.js";import"./index.a7f52680.js";import"./arrow-up.0ae35c9a.js";import"./plus.408c9cf2.js";import"./el-popper.7e8f10c3.js";import"./el-select.dc7a2ac5.js";import"./el-scrollbar.3e84cd99.js";import"./isEqual.6fce44d5.js";import"./_baseIsEqual.220044e7.js";import"./_Uint8Array.d6bc81f7.js";import"./deprecation.bfd0cf7f.js";import"./index.c956e740.js";const V=a=>(p("data-v-8696fd24"),a=a(),c(),a),j=V((()=>f("h2",{class:"mt20 setting-li-sub"},"颜色",-1))),v=V((()=>f("h2",{class:"mt20 setting-li-sub"},"显示",-1)));var h=d({props:{data:{}},setup(d){const p=d,{t:c}=o();return null==p.data.show&&(p.data.show=!0),null==p.data.hour24&&(p.data.hour24=!0),(o,p)=>(i(),s("div",null,[n(a,{async:"",title:"显示时间",modelValue:d.data.show,"onUpdate:modelValue":p[0]||(p[0]=a=>d.data.show=a)},null,8,["modelValue"]),d.data.show?(i(),s(m,{key:0},[n(a,{async:"",title:u(c)("setting_timeWeight"),"active-value":500,"inactive-value":400,modelValue:d.data.fontWeight,"onUpdate:modelValue":p[1]||(p[1]=a=>d.data.fontWeight=a)},null,8,["title","modelValue"]),n(t,{async:"",title:u(c)("setting_timeSize"),min:30,max:130,modelValue:d.data.size,"onUpdate:modelValue":p[2]||(p[2]=a=>d.data.size=a)},null,8,["title","modelValue"]),j,n(e,{class:"setting-li",colors:["#fff","#909399","#606266","#E6A23C","#F56C6C","#67C23A"],modelValue:d.data.color,"onUpdate:modelValue":p[3]||(p[3]=a=>d.data.color=a)},null,8,["modelValue"]),v,n(a,{async:"",title:"24小时制",modelValue:d.data.hour24,"onUpdate:modelValue":p[4]||(p[4]=a=>d.data.hour24=a)},null,8,["modelValue"]),n(a,{async:"",title:"秒",modelValue:d.data.sec,"onUpdate:modelValue":p[5]||(p[5]=a=>d.data.sec=a)},null,8,["modelValue"]),n(a,{title:u(c)("setting_showMonth"),"active-value":"inline","inactive-value":"none",modelValue:d.data.month,"onUpdate:modelValue":p[6]||(p[6]=a=>d.data.month=a)},null,8,["title","modelValue"]),n(a,{async:"",title:u(c)("setting_showWeek"),"active-value":"inline","inactive-value":"none",modelValue:d.data.week,"onUpdate:modelValue":p[7]||(p[7]=a=>d.data.week=a)},null,8,["title","modelValue"]),n(a,{async:"",title:u(c)("setting_showLunar"),"active-value":"inline","inactive-value":"none",modelValue:d.data.lunar,"onUpdate:modelValue":p[8]||(p[8]=a=>d.data.lunar=a)},null,8,["title","modelValue"]),n(l,{class:"setting-li",style:{padding:"10px 16px"},title:u(c)("setting_timeFont"),modelValue:d.data.font,"onUpdate:modelValue":p[9]||(p[9]=a=>d.data.font=a)},null,8,["title","modelValue"])],64)):r("",!0)]))}},[["__scopeId","data-v-8696fd24"]]);export{h as default};