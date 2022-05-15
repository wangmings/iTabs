import{bu as e,a4 as l,af as a,bz as t,bS as s,k as r,Q as o,ao as n,cQ as i,u,bB as c,bW as v,ay as m,U as d,b1 as f,b3 as p,bn as h,X as b,A as y,C as g,b6 as w,aG as S,W as z,a2 as x,I as k,bv as T,bG as H,cR as E,aY as L,bI as B,al as X,aA as Y,r as $,as as C,ax as W,bw as _,aF as A,aI as N,V as R,bF as M}from"./el-button.0a4ba32a.js";const j=Symbol("scrollbarContextKey"),I={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},F=e({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),G=l({name:"Thumb",props:F,setup(e){const l=a(j),c=t("scrollbar");l||s("Thumb","can not inject scrollbar context");const m=r(),d=r(),f=r({}),p=r(!1);let h=!1,b=!1,y=v?document.onselectstart:null;const g=o((()=>I[e.vertical?"vertical":"horizontal"])),w=o((()=>(({move:e,size:l,bar:a})=>({[a.size]:l,transform:`translate${a.axis}(${e}%)`}))({size:e.size,move:e.move,bar:g.value}))),S=o((()=>m.value[g.value.offset]**2/l.wrapElement[g.value.scrollSize]/e.ratio/d.value[g.value.offset])),z=e=>{e.stopImmediatePropagation(),h=!0,document.addEventListener("mousemove",x),document.addEventListener("mouseup",k),y=document.onselectstart,document.onselectstart=()=>!1},x=e=>{if(!m.value||!d.value)return;if(!1===h)return;const a=f.value[g.value.axis];if(!a)return;const t=100*(-1*(m.value.getBoundingClientRect()[g.value.direction]-e[g.value.client])-(d.value[g.value.offset]-a))*S.value/m.value[g.value.offset];l.wrapElement[g.value.scroll]=t*l.wrapElement[g.value.scrollSize]/100},k=()=>{h=!1,f.value[g.value.axis]=0,document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",k),T(),b&&(p.value=!1)};n((()=>{T(),document.removeEventListener("mouseup",k)}));const T=()=>{document.onselectstart!==y&&(document.onselectstart=y)};return i(u(l,"scrollbarElement"),"mousemove",(()=>{b=!1,p.value=!!e.size})),i(u(l,"scrollbarElement"),"mouseleave",(()=>{b=!0,p.value=h})),{ns:c,instance:m,thumb:d,bar:g,thumbStyle:w,visible:p,clickTrackHandler:e=>{if(!d.value||!m.value||!l.wrapElement)return;const a=100*(Math.abs(e.target.getBoundingClientRect()[g.value.direction]-e[g.value.client])-d.value[g.value.offset]/2)*S.value/m.value[g.value.offset];l.wrapElement[g.value.scroll]=a*l.wrapElement[g.value.scrollSize]/100},clickThumbHandler:e=>{var l;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(l=window.getSelection())||l.removeAllRanges(),z(e);const a=e.currentTarget;a&&(f.value[g.value.axis]=a[g.value.offset]-(e[g.value.client]-a.getBoundingClientRect()[g.value.direction]))}}}});const K=l({components:{Thumb:c(G,[["render",function(e,l,a,t,s,r){return m(),d(w,{name:e.ns.b("fade")},{default:f((()=>[p(b("div",{ref:"instance",class:y([e.ns.e("bar"),e.ns.is(e.bar.key)]),onMousedown:l[1]||(l[1]=(...l)=>e.clickTrackHandler&&e.clickTrackHandler(...l))},[b("div",{ref:"thumb",class:y(e.ns.e("thumb")),style:g(e.thumbStyle),onMousedown:l[0]||(l[0]=(...l)=>e.clickThumbHandler&&e.clickThumbHandler(...l))},null,38)],34),[[h,e.always||e.visible]])])),_:1},8,["name"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]])},props:e({always:{type:Boolean,default:!0},width:{type:String,default:""},height:{type:String,default:""},ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),setup(e){const l=r(0),a=r(0);return{handleScroll:t=>{if(t){const s=t.offsetHeight-4,r=t.offsetWidth-4;a.value=100*t.scrollTop/s*e.ratioY,l.value=100*t.scrollLeft/r*e.ratioX}},moveX:l,moveY:a}}});const O=M(c(l({name:"ElScrollbar",components:{Bar:c(K,[["render",function(e,l,a,t,s,r){const o=S("thumb");return m(),z(k,null,[x(o,{move:e.moveX,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),x(o,{move:e.moveY,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]])},props:e({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:T([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:{type:Boolean,default:!1},minSize:{type:Number,default:20}}),emits:{scroll:({scrollTop:e,scrollLeft:l})=>H(e)&&H(l)},setup(e,{emit:l}){const a=t("scrollbar");let s,n;const u=r(),c=r(),v=r(),m=r("0"),d=r("0"),f=r(),p=r(0),h=r(0),b=r(1),y=r(1),g=o((()=>{const l={};return e.height&&(l.height=E(e.height)),e.maxHeight&&(l.maxHeight=E(e.maxHeight)),[e.wrapStyle,l]}));const w=()=>{if(!c.value)return;const l=c.value.offsetHeight-4,a=c.value.offsetWidth-4,t=l**2/c.value.scrollHeight,s=a**2/c.value.scrollWidth,r=Math.max(t,e.minSize),o=Math.max(s,e.minSize);b.value=t/(l-t)/(r/(l-r)),y.value=s/(a-s)/(o/(a-o)),d.value=r+4<l?`${r}px`:"",m.value=o+4<a?`${o}px`:""};return L((()=>e.noresize),(e=>{e?(null==s||s(),null==n||n()):(({stop:s}=B(v,w)),n=i("resize",w))}),{immediate:!0}),L((()=>[e.maxHeight,e.height]),(()=>{e.native||X((()=>{var e;w(),c.value&&(null==(e=f.value)||e.handleScroll(c.value))}))})),Y(j,$({scrollbarElement:u,wrapElement:c})),C((()=>{e.native||X((()=>w()))})),W((()=>w())),{ns:a,scrollbar$:u,wrap$:c,resize$:v,barRef:f,moveX:p,moveY:h,ratioX:y,ratioY:b,sizeWidth:m,sizeHeight:d,style:g,update:w,handleScroll:()=>{var e;c.value&&(null==(e=f.value)||e.handleScroll(c.value),l("scroll",{scrollTop:c.value.scrollTop,scrollLeft:c.value.scrollLeft}))},scrollTo:function(e,l){_(e)?c.value.scrollTo(e):H(e)&&H(l)&&c.value.scrollTo(e,l)},setScrollTop:e=>{H(e)&&(c.value.scrollTop=e)},setScrollLeft:e=>{H(e)&&(c.value.scrollLeft=e)}}}}),[["render",function(e,l,a,t,s,r){const o=S("bar");return m(),z("div",{ref:"scrollbar$",class:y(e.ns.b())},[b("div",{ref:"wrap$",class:y([e.wrapClass,e.ns.e("wrap"),{[e.ns.em("wrap","hidden-default")]:!e.native}]),style:g(e.style),onScroll:l[0]||(l[0]=(...l)=>e.handleScroll&&e.handleScroll(...l))},[(m(),d(N(e.tag),{ref:"resize$",class:y([e.ns.e("view"),e.viewClass]),style:g(e.viewStyle)},{default:f((()=>[A(e.$slots,"default")])),_:3},8,["class","style"]))],38),e.native?R("v-if",!0):(m(),d(o,{key:0,ref:"barRef",height:e.sizeHeight,width:e.sizeWidth,always:e.always,"ratio-x":e.ratioX,"ratio-y":e.ratioY},null,8,["height","width","always","ratio-x","ratio-y"]))],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]));export{O as E};
