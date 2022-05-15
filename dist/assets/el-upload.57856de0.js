var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,r=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&n(e,a,t[a]);if(s)for(var a of s(t))o.call(t,a)&&n(e,a,t[a]);return e},i=(e,s)=>t(e,a(s));import{a4 as u,bs as c,ay as d,W as p,X as f,bS as m,bu as v,bv as y,d4 as b,by as h,bz as g,k as w,U as k,b1 as E,aE as F,A as R,x as S,bo as T,aF as x,V as C,a2 as U,bJ as $,D as L,bp as O,C as _,bN as j,bP as P,I as z,b7 as H,bB as D,cT as B,af as A,n as V,dz as M,aY as q,cG as K,aU as X,cE as N,Q as W,ao as I,aA as J,u as G,$ as Q,ak as Y,bF as Z}from"./el-button.0a4ba32a.js";import{E as ee,l as te}from"./main.858372aa.js";import{a as ae}from"./el-input.b3ba137c.js";import{m as se}from"./typescript.72bf8adc.js";import{z as le}from"./zoom-in.dd934e7d.js";import{u as oe}from"./index.c956e740.js";const ne=u({name:"Delete"}),re={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ie=[f("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"},null,-1)];var ue=c(ne,[["render",function(e,t,a,s,l,o){return d(),p("svg",re,ie)}]]);const ce=u({name:"Document"}),de={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},pe=[f("path",{fill:"currentColor",d:"M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"},null,-1)];var fe=c(ce,[["render",function(e,t,a,s,l,o){return d(),p("svg",de,pe)}]]);const me=Symbol("uploadContextKey");class ve extends Error{constructor(e,t,a,s){super(e),this.name="UploadAjaxError",this.status=t,this.method=a,this.url=s}}function ye(e,t,a){let s;return s=a.response?`${a.response.error||a.response}`:a.responseText?`${a.responseText}`:`fail to ${t.method} ${e} ${a.status}`,new ve(s,a.status,t.method,e)}const be=["text","picture","picture-card"];let he=1;const ge=()=>Date.now()+he++,we=v({action:{type:String,default:"#"},headers:{type:y(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>se({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:y(Array),default:()=>se([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:be,default:"text"},httpRequest:{type:y(Function),default:e=>{"undefined"==typeof XMLHttpRequest&&m("ElUpload","XMLHttpRequest is undefined");const t=new XMLHttpRequest,a=e.action;t.upload&&t.upload.addEventListener("progress",(t=>{const a=t;a.percent=t.total>0?t.loaded/t.total*100:0,e.onProgress(a)}));const s=new FormData;if(e.data)for(const[o,n]of Object.entries(e.data))Array.isArray(n)?s.append(o,...n):s.append(o,n);s.append(e.filename,e.file,e.file.name),t.addEventListener("error",(()=>{e.onError(ye(a,e,t))})),t.addEventListener("load",(()=>{if(t.status<200||t.status>=300)return e.onError(ye(a,e,t));e.onSuccess(function(e){const t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(a){return t}}(t))})),t.open(e.method,a,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const l=e.headers||{};if(l instanceof Headers)l.forEach(((e,a)=>t.setRequestHeader(a,e)));else for(const[o,n]of Object.entries(l))ae(n)||t.setRequestHeader(o,String(n));return t.send(s),t}},disabled:Boolean,limit:Number}),ke=v(i(r({},we),{beforeUpload:{type:y(Function),default:b},beforeRemove:{type:y(Function)},onRemove:{type:y(Function),default:b},onChange:{type:y(Function),default:b},onPreview:{type:y(Function),default:b},onSuccess:{type:y(Function),default:b},onProgress:{type:y(Function),default:b},onError:{type:y(Function),default:b},onExceed:{type:y(Function),default:b}})),Ee=v({files:{type:y(Array),default:()=>se([])},disabled:{type:Boolean,default:!1},handlePreview:{type:y(Function),default:b},listType:{type:String,values:be,default:"text"}}),Fe=["onKeydown"],Re=["src"],Se=["onClick"],Te=["onClick"],xe=["onClick"];var Ce=D(u(i(r({},{name:"ElUploadList"}),{props:Ee,emits:{remove:e=>!!e},setup(e,{emit:t}){const a=e,{t:s}=h(),l=g("upload"),o=g("icon"),n=g("list"),r=w(!1),i=e=>{e.target.focus()},u=e=>{t("remove",e)};return(e,t)=>(d(),k(H,{tag:"ul",class:R([S(l).b("list"),S(l).bm("list",e.listType),S(l).is("disabled",e.disabled)]),name:S(n).b()},{default:E((()=>[(d(!0),p(z,null,F(e.files,(n=>(d(),p("li",{key:n.uid||n.name,class:R([S(l).be("list","item"),S(l).is(n.status),{focusing:r.value}]),tabindex:"0",onKeydown:T((t=>!e.disabled&&u(n)),["delete"]),onFocus:t[0]||(t[0]=e=>r.value=!0),onBlur:t[1]||(t[1]=e=>r.value=!1),onClick:i},[x(e.$slots,"default",{file:n},(()=>["picture"===e.listType||"uploading"!==n.status&&"picture-card"===e.listType?(d(),p("img",{key:0,class:R(S(l).be("list","item-thumbnail")),src:n.url,alt:""},null,10,Re)):C("v-if",!0),"picture"===e.listType||"uploading"!==n.status&&"picture-card"===e.listType?C("v-if",!0):(d(),p("div",{key:1,class:R(S(l).be("list","item-info"))},[f("a",{class:R(S(l).be("list","item-name")),onClick:O((e=>(e=>{a.handlePreview(e)})(n)),["prevent"])},[U(S($),{class:R(S(o).m("document"))},{default:E((()=>[U(S(fe))])),_:1},8,["class"]),f("span",{class:R(S(l).be("list","item-file-name"))},L(n.name),3)],10,Se),"uploading"===n.status?(d(),k(S(ee),{key:0,type:"picture-card"===e.listType?"circle":"line","stroke-width":"picture-card"===e.listType?6:2,percentage:Number(n.percentage),style:_("picture-card"===e.listType?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):C("v-if",!0)],2)),f("label",{class:R(S(l).be("list","item-status-label"))},["text"===e.listType?(d(),k(S($),{key:0,class:R([S(o).m("upload-success"),S(o).m("circle-check")])},{default:E((()=>[U(S(j))])),_:1},8,["class"])):["picture-card","picture"].includes(e.listType)?(d(),k(S($),{key:1,class:R([S(o).m("upload-success"),S(o).m("check")])},{default:E((()=>[U(S(te))])),_:1},8,["class"])):C("v-if",!0)],2),e.disabled?C("v-if",!0):(d(),k(S($),{key:2,class:R(S(o).m("close")),onClick:e=>u(n)},{default:E((()=>[U(S(P))])),_:2},1032,["class","onClick"])),C(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),C(" This is a bug which needs to be fixed "),C(" TODO: Fix the incorrect navigation interaction "),e.disabled?C("v-if",!0):(d(),p("i",{key:3,class:R(S(o).m("close-tip"))},L(S(s)("el.upload.deleteTip")),3)),"picture-card"===e.listType?(d(),p("span",{key:4,class:R(S(l).be("list","item-actions"))},[f("span",{class:R(S(l).be("list","item-preview")),onClick:t=>e.handlePreview(n)},[U(S($),{class:R(S(o).m("zoom-in"))},{default:E((()=>[U(S(le))])),_:1},8,["class"])],10,Te),e.disabled?C("v-if",!0):(d(),p("span",{key:0,class:R(S(l).be("list","item-delete")),onClick:e=>u(n)},[U(S($),{class:R(S(o).m("delete"))},{default:E((()=>[U(S(ue))])),_:1},8,["class"])],10,xe))],2)):C("v-if",!0)]))],42,Fe)))),128)),x(e.$slots,"append")])),_:3},8,["class","name"]))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const Ue=v({disabled:{type:Boolean,default:!1}}),$e={file:e=>B(e)},Le=["onDrop","onDragover"];var Oe=D(u(i(r({},{name:"ElUploadDrag"}),{props:Ue,emits:$e,setup(e,{emit:t}){const a=e,s=A(me);s||m("ElUploadDrag","usage: <el-upload><el-upload-dragger /></el-upload>");const l=g("upload"),o=w(!1),n=e=>{if(a.disabled)return;o.value=!1;const l=Array.from(e.dataTransfer.files),n=s.accept.value;if(!n)return void t("file",l);const r=l.filter((e=>{const{type:t,name:a}=e,s=a.includes(".")?`.${a.split(".").pop()}`:"",l=t.replace(/\/.*$/,"");return n.split(",").map((e=>e.trim())).filter((e=>e)).some((e=>e.startsWith(".")?s===e:/\/\*$/.test(e)?l===e.replace(/\/\*$/,""):!!/^[^/]+\/[^/]+$/.test(e)&&t===e))}));t("file",r)},r=()=>{a.disabled||(o.value=!0)};return(e,t)=>(d(),p("div",{class:R([S(l).b("dragger"),S(l).is("dragover",o.value)]),onDrop:O(n,["prevent"]),onDragover:O(r,["prevent"]),onDragleave:t[0]||(t[0]=O((e=>o.value=!1),["prevent"]))},[x(e.$slots,"default")],42,Le))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const _e=v(i(r({},we),{fileList:{type:y(Array),default:()=>se([])},beforeUpload:{type:y(Function),default:b},onRemove:{type:y(Function),default:b},onStart:{type:y(Function),default:b},onSuccess:{type:y(Function),default:b},onProgress:{type:y(Function),default:b},onError:{type:y(Function),default:b},onExceed:{type:y(Function),default:b}})),je=["onKeydown"],Pe=["name","multiple","accept"];var ze=D(u(i(r({},{name:"ElUploadContent",inheritAttrs:!1}),{props:_e,setup(e,{expose:t}){const a=e,s=g("upload"),l=V({}),o=V(),n=e=>{if(0===e.length)return;const{autoUpload:t,limit:s,fileList:l,multiple:o,onStart:n,onExceed:i}=a;if(s&&l.length+e.length>s)i(e,l);else{o||(e=e.slice(0,1));for(const a of e){const e=a;e.uid=ge(),n(e),t&&r(e)}}},r=async e=>{if(o.value.value="",!a.beforeUpload)return i(e);let t;try{t=await a.beforeUpload(e)}catch(l){t=!1}if(!1===t)return void a.onRemove(e);let s=e;if(t instanceof Blob){s=t instanceof File?t:new File([t],e.name,{type:e.type});for(const t of Object.keys(e))s[t]=e[t]}i(e)},i=e=>{const{headers:t,data:s,method:o,withCredentials:n,name:r,action:i,onProgress:u,onSuccess:c,onError:d,httpRequest:p}=a,{uid:f}=e,m={headers:t||{},withCredentials:n,file:e,data:s,method:o,filename:r,action:i,onProgress:t=>{u(t,e)},onSuccess:t=>{c(t,e),delete l.value[f]},onError:t=>{d(t,e),delete l.value[f]}},v=p(m);l.value[f]=v,v instanceof Promise&&v.then(m.onSuccess,m.onError)},u=e=>{const t=e.target.files;t&&n(Array.from(t))},c=()=>{a.disabled||(o.value.value="",o.value.click())},m=()=>{c()};return t({abort:e=>{M(l.value).filter(e?([t])=>String(e.uid)===t:()=>!0).forEach((([e,t])=>{t instanceof XMLHttpRequest&&t.abort(),delete l.value[e]}))},upload:r}),(e,t)=>(d(),p("div",{class:R([S(s).b(),S(s).m(e.listType)]),tabindex:"0",onClick:c,onKeydown:T(O(m,["self"]),["enter","space"])},[e.drag?(d(),k(Oe,{key:0,disabled:e.disabled,onFile:n},{default:E((()=>[x(e.$slots,"default")])),_:3},8,["disabled"])):x(e.$slots,"default",{key:1}),f("input",{ref_key:"inputRef",ref:o,class:R(S(s).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:u,onClick:t[0]||(t[0]=O((()=>{}),["stop"]))},null,42,Pe)],42,je))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const He=(e,t)=>{const a=w([]),s=e=>a.value.find((t=>t.uid===e.uid));function l(e){var a;null==(a=t.value)||a.abort(e)}return q((()=>e.listType),(t=>{"picture-card"!==t&&"picture"!==t||(a.value=a.value.map((t=>{const{raw:s,url:l}=t;if(!l&&s)try{t.url=URL.createObjectURL(s)}catch(o){e.onError(o,t,a.value)}return t})))})),q((()=>e.fileList),(e=>{for(const t of e)t.uid||(t.uid=ge()),t.status||(t.status="success");a.value=e}),{immediate:!0,deep:!0}),{abort:l,clearFiles:function(e=["ready","uploading","success","fail"]){a.value=a.value.filter((t=>!e.includes(t.status)))},handleError:(t,l)=>{const o=s(l);o&&(o.status="fail",a.value.splice(a.value.indexOf(o),1),e.onError(t,o,a.value),e.onChange(o,a.value))},handleProgress:(t,l)=>{const o=s(l);o&&(e.onProgress(t,o,a.value),o.status="uploading",o.percentage=Math.round(t.percent))},handleStart:t=>{const s={name:t.name,percentage:0,status:"ready",size:t.size,raw:t,uid:t.uid};if("picture-card"===e.listType||"picture"===e.listType)try{s.url=URL.createObjectURL(t)}catch(l){K("ElUpload",l.message),e.onError(l,s,a.value)}a.value.push(s),e.onChange(s,a.value)},handleSuccess:(t,l)=>{const o=s(l);o&&(o.status="success",o.response=t,e.onSuccess(t,o,a.value),e.onChange(o,a.value))},handleRemove:async(t,o)=>{o&&oe({scope:"ElUpload",from:"handleRemove second argument",version:"2.2",replacement:"first argument `file`",ref:"https://element-plus.org/en-US/component/upload.html#methods"},!0);const n=o||t,r=n instanceof File?s(n):n;r||m("ElUpload","file to be removed not found");const i=t=>{l(t);const s=a.value;s.splice(s.indexOf(t),1),e.onRemove(t,s),(e=>{var t;(null==(t=e.url)?void 0:t.startsWith("blob:"))&&URL.revokeObjectURL(e.url)})(t)};if(e.beforeRemove){!1!==await e.beforeRemove(r,a.value)&&i(r)}else i(r)},submit:function(){a.value.filter((({status:e})=>"ready"===e)).forEach((({raw:e})=>{var a;return e&&(null==(a=t.value)?void 0:a.upload(e))}))},uploadFiles:a}};const De=Z(D(u(i(r({},{name:"ElUpload"}),{props:ke,setup(e,{expose:t}){const a=e,s=X(),l=N(),o=V(),{abort:n,submit:u,clearFiles:c,uploadFiles:f,handleStart:m,handleError:v,handleRemove:y,handleSuccess:b,handleProgress:h}=He(a,o),g=W((()=>"picture-card"===a.listType)),w=W((()=>i(r({},a),{onStart:m,onProgress:h,onSuccess:b,onError:v,onRemove:y})));return I((()=>{f.value.forEach((({url:e})=>{(null==e?void 0:e.startsWith("blob:"))&&URL.revokeObjectURL(e)}))})),J(me,{accept:G(a,"accept")}),t({abort:n,submit:u,clearFiles:c,handleStart:m,handleRemove:y}),(e,t)=>(d(),p("div",null,[S(g)&&e.showFileList?(d(),k(Ce,{key:0,disabled:S(l),"list-type":e.listType,files:S(f),"handle-preview":e.onPreview,onRemove:S(y)},Q({append:E((()=>["picture-card"===e.listType?(d(),k(ze,Y({key:0,ref_key:"uploadRef",ref:o},S(w)),{default:E((()=>[S(s).trigger?x(e.$slots,"trigger",{key:0}):C("v-if",!0),!S(s).trigger&&S(s).default?x(e.$slots,"default",{key:1}):C("v-if",!0)])),_:3},16)):C("v-if",!0)])),_:2},[e.$slots.file?{name:"default",fn:E((({file:t})=>[x(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):C("v-if",!0),"picture-card"!==e.listType?(d(),k(ze,Y({key:1,ref_key:"uploadRef",ref:o},S(w)),{default:E((()=>[S(s).trigger?x(e.$slots,"trigger",{key:0}):C("v-if",!0),!S(s).trigger&&S(s).default?x(e.$slots,"default",{key:1}):C("v-if",!0)])),_:3},16)):C("v-if",!0),e.$slots.trigger?x(e.$slots,"default",{key:2}):C("v-if",!0),x(e.$slots,"tip"),!S(g)&&e.showFileList?(d(),k(Ce,{key:3,disabled:S(l),"list-type":e.listType,files:S(f),"handle-preview":e.onPreview,onRemove:S(y)},Q({_:2},[e.$slots.file?{name:"default",fn:E((({file:t})=>[x(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):C("v-if",!0)]))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]));export{De as E};
