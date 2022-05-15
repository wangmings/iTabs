import{bW as e,a4 as l,n as t,k as a,aY as o,as as n,bB as r,cX as s,ay as u,W as c,X as i,C as h,A as d,a9 as p,Q as f,af as m,cY as v,aZ as g,I as b,aE as k,bD as _,bJ as C,bP as w,bC as M,by as $,bz as y,cK as V,cL as x,r as S,cD as A,bq as N,al as F,aA as H,cG as B,aG as E,aH as W,U as P,b1 as j,b3 as T,a2 as D,V as I,bo as O,a1 as z,D as q,bn as L,x as U,ci as R}from"./el-button.0a4ba32a.js";import{E as X}from"./el-input.b3ba137c.js";import{E as Y}from"./index.f364da82.js";import{o as K,a as G}from"./event.0bae16b8.js";import{C as J}from"./index.b9023f44.js";import{i as Q}from"./validator.053f84bf.js";import{a as Z}from"./arrow-down.766403d3.js";let ee=!1;function le(l,t){if(!e)return;const a=function(e){var l;null==(l=t.drag)||l.call(t,e)},o=function(e){var l;G(document,"mousemove",a),G(document,"mouseup",o),G(document,"touchmove",a),G(document,"touchend",o),document.onselectstart=null,document.ondragstart=null,ee=!1,null==(l=t.end)||l.call(t,e)},n=function(e){var l;ee||(e.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,K(document,"mousemove",a),K(document,"mouseup",o),K(document,"touchmove",a),K(document,"touchend",o),ee=!0,null==(l=t.start)||l.call(t,e))};K(l,"mousedown",n),K(l,"touchstart",n)}var te=r(l({name:"ElColorAlphaSlider",props:{color:{type:Object,required:!0},vertical:{type:Boolean,default:!1}},setup(e){const l=p(),r=t(null),u=t(null),c=a(0),i=a(0),h=a(null);function d(t){const a=l.vnode.el.getBoundingClientRect(),{clientX:o,clientY:n}=s(t);if(e.vertical){let l=n-a.top;l=Math.max(r.value.offsetHeight/2,l),l=Math.min(l,a.height-r.value.offsetHeight/2),e.color.set("alpha",Math.round((l-r.value.offsetHeight/2)/(a.height-r.value.offsetHeight)*100))}else{let l=o-a.left;l=Math.max(r.value.offsetWidth/2,l),l=Math.min(l,a.width-r.value.offsetWidth/2),e.color.set("alpha",Math.round((l-r.value.offsetWidth/2)/(a.width-r.value.offsetWidth)*100))}}function f(){c.value=function(){if(e.vertical)return 0;const t=l.vnode.el,a=e.color.get("alpha");return t?Math.round(a*(t.offsetWidth-r.value.offsetWidth/2)/100):0}(),i.value=function(){const t=l.vnode.el;if(!e.vertical)return 0;const a=e.color.get("alpha");return t?Math.round(a*(t.offsetHeight-r.value.offsetHeight/2)/100):0}(),h.value=function(){if(e.color&&e.color.value){const{r:l,g:t,b:a}=e.color.toRgb();return`linear-gradient(to right, rgba(${l}, ${t}, ${a}, 0) 0%, rgba(${l}, ${t}, ${a}, 1) 100%)`}return null}()}return o((()=>e.color.get("alpha")),(()=>{f()})),o((()=>e.color.value),(()=>{f()})),n((()=>{const e={drag:e=>{d(e)},end:e=>{d(e)}};le(u.value,e),le(r.value,e),f()})),{thumb:r,bar:u,thumbLeft:c,thumbTop:i,background:h,handleClick:function(e){e.target!==r.value&&d(e)},update:f}}}),[["render",function(e,l,t,a,o,n){return u(),c("div",{class:d(["el-color-alpha-slider",{"is-vertical":e.vertical}])},[i("div",{ref:"bar",class:"el-color-alpha-slider__bar",style:h({background:e.background}),onClick:l[0]||(l[0]=(...l)=>e.handleClick&&e.handleClick(...l))},null,4),i("div",{ref:"thumb",class:"el-color-alpha-slider__thumb",style:h({left:e.thumbLeft+"px",top:e.thumbTop+"px"})},null,4)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);var ae=r(l({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(e){const l=p(),t=a(null),r=a(null),u=a(0),c=a(0),i=f((()=>e.color.get("hue")));function h(a){const o=l.vnode.el.getBoundingClientRect(),{clientX:n,clientY:r}=s(a);let u;if(e.vertical){let e=r-o.top;e=Math.min(e,o.height-t.value.offsetHeight/2),e=Math.max(t.value.offsetHeight/2,e),u=Math.round((e-t.value.offsetHeight/2)/(o.height-t.value.offsetHeight)*360)}else{let e=n-o.left;e=Math.min(e,o.width-t.value.offsetWidth/2),e=Math.max(t.value.offsetWidth/2,e),u=Math.round((e-t.value.offsetWidth/2)/(o.width-t.value.offsetWidth)*360)}e.color.set("hue",u)}function d(){u.value=function(){const a=l.vnode.el;if(e.vertical)return 0;const o=e.color.get("hue");return a?Math.round(o*(a.offsetWidth-t.value.offsetWidth/2)/360):0}(),c.value=function(){const a=l.vnode.el;if(!e.vertical)return 0;const o=e.color.get("hue");return a?Math.round(o*(a.offsetHeight-t.value.offsetHeight/2)/360):0}()}return o((()=>i.value),(()=>{d()})),n((()=>{const e={drag:e=>{h(e)},end:e=>{h(e)}};le(r.value,e),le(t.value,e),d()})),{bar:r,thumb:t,thumbLeft:u,thumbTop:c,hueValue:i,handleClick:function(e){e.target!==t.value&&h(e)},update:d}}}),[["render",function(e,l,t,a,o,n){return u(),c("div",{class:d(["el-color-hue-slider",{"is-vertical":e.vertical}])},[i("div",{ref:"bar",class:"el-color-hue-slider__bar",onClick:l[0]||(l[0]=(...l)=>e.handleClick&&e.handleClick(...l))},null,512),i("div",{ref:"thumb",class:"el-color-hue-slider__thumb",style:h({left:e.thumbLeft+"px",top:e.thumbTop+"px"})},null,4)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);const oe=Symbol(),ne=function(e,l,t){return[e,l*t/((e=(2-l)*t)<1?e:2-e)||0,e/2]},re=function(e,l){var t;"string"==typeof(t=e)&&t.includes(".")&&1===Number.parseFloat(t)&&(e="100%");const a=function(e){return"string"==typeof e&&e.includes("%")}(e);return e=Math.min(l,Math.max(0,Number.parseFloat(`${e}`))),a&&(e=Number.parseInt(""+e*l,10)/100),Math.abs(e-l)<1e-6?1:e%l/Number.parseFloat(l)},se={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},ue=function(e){e=Math.min(Math.round(e),255);const l=Math.floor(e/16),t=e%16;return`${se[l]||l}${se[t]||t}`},ce=function({r:e,g:l,b:t}){return Number.isNaN(+e)||Number.isNaN(+l)||Number.isNaN(+t)?"":`#${ue(e)}${ue(l)}${ue(t)}`},ie={A:10,B:11,C:12,D:13,E:14,F:15},he=function(e){return 2===e.length?16*(ie[e[0].toUpperCase()]||+e[0])+(ie[e[1].toUpperCase()]||+e[1]):ie[e[1].toUpperCase()]||+e[1]},de=function(e,l,t){e=re(e,255),l=re(l,255),t=re(t,255);const a=Math.max(e,l,t),o=Math.min(e,l,t);let n;const r=a,s=a-o,u=0===a?0:s/a;if(a===o)n=0;else{switch(a){case e:n=(l-t)/s+(l<t?6:0);break;case l:n=(t-e)/s+2;break;case t:n=(e-l)/s+4}n/=6}return{h:360*n,s:100*u,v:100*r}},pe=function(e,l,t){e=6*re(e,360),l=re(l,100),t=re(t,100);const a=Math.floor(e),o=e-a,n=t*(1-l),r=t*(1-o*l),s=t*(1-(1-o)*l),u=a%6,c=[t,r,n,n,s,t][u],i=[s,t,t,r,n,n][u],h=[n,n,s,t,t,r][u];return{r:Math.round(255*c),g:Math.round(255*i),b:Math.round(255*h)}};class fe{constructor(e){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="",e=e||{};for(const l in e)v(e,l)&&(this[l]=e[l]);e.value?this.fromString(e.value):this.doOnChange()}set(e,l){if(1!==arguments.length||"object"!=typeof e)this[`_${e}`]=l,this.doOnChange();else for(const t in e)v(e,t)&&this.set(t,e[t])}get(e){return"alpha"===e?Math.floor(this[`_${e}`]):this[`_${e}`]}toRgb(){return pe(this._hue,this._saturation,this._value)}fromString(e){if(!e)return this._hue=0,this._saturation=100,this._value=100,void this.doOnChange();const l=(e,l,t)=>{this._hue=Math.max(0,Math.min(360,e)),this._saturation=Math.max(0,Math.min(100,l)),this._value=Math.max(0,Math.min(100,t)),this.doOnChange()};if(e.includes("hsl")){const t=e.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter((e=>""!==e)).map(((e,l)=>l>2?Number.parseFloat(e):Number.parseInt(e,10)));if(4===t.length?this._alpha=100*Number.parseFloat(t[3]):3===t.length&&(this._alpha=100),t.length>=3){const{h:e,s:a,v:o}=function(e,l,t){t/=100;let a=l/=100;const o=Math.max(t,.01);return l*=(t*=2)<=1?t:2-t,a*=o<=1?o:2-o,{h:e,s:100*(0===t?2*a/(o+a):2*l/(t+l)),v:(t+l)/2*100}}(t[0],t[1],t[2]);l(e,a,o)}}else if(e.includes("hsv")){const t=e.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter((e=>""!==e)).map(((e,l)=>l>2?Number.parseFloat(e):Number.parseInt(e,10)));4===t.length?this._alpha=100*Number.parseFloat(t[3]):3===t.length&&(this._alpha=100),t.length>=3&&l(t[0],t[1],t[2])}else if(e.includes("rgb")){const t=e.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter((e=>""!==e)).map(((e,l)=>l>2?Number.parseFloat(e):Number.parseInt(e,10)));if(4===t.length?this._alpha=100*Number.parseFloat(t[3]):3===t.length&&(this._alpha=100),t.length>=3){const{h:e,s:a,v:o}=de(t[0],t[1],t[2]);l(e,a,o)}}else if(e.includes("#")){const t=e.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(t))return;let a,o,n;3===t.length?(a=he(t[0]+t[0]),o=he(t[1]+t[1]),n=he(t[2]+t[2])):6!==t.length&&8!==t.length||(a=he(t.slice(0,2)),o=he(t.slice(2,4)),n=he(t.slice(4,6))),8===t.length?this._alpha=he(t.slice(6))/255*100:3!==t.length&&6!==t.length||(this._alpha=100);const{h:r,s:s,v:u}=de(a,o,n);l(r,s,u)}}compare(e){return Math.abs(e._hue-this._hue)<2&&Math.abs(e._saturation-this._saturation)<1&&Math.abs(e._value-this._value)<1&&Math.abs(e._alpha-this._alpha)<1}doOnChange(){const{_hue:e,_saturation:l,_value:t,_alpha:a,format:o}=this;if(this.enableAlpha)switch(o){case"hsl":{const a=ne(e,l/100,t/100);this.value=`hsla(${e}, ${Math.round(100*a[1])}%, ${Math.round(100*a[2])}%, ${this.get("alpha")/100})`;break}case"hsv":this.value=`hsva(${e}, ${Math.round(l)}%, ${Math.round(t)}%, ${this.get("alpha")/100})`;break;case"hex":this.value=`${ce(pe(e,l,t))}${ue(255*a/100)}`;break;default:{const{r:a,g:o,b:n}=pe(e,l,t);this.value=`rgba(${a}, ${o}, ${n}, ${this.get("alpha")/100})`}}else switch(o){case"hsl":{const a=ne(e,l/100,t/100);this.value=`hsl(${e}, ${Math.round(100*a[1])}%, ${Math.round(100*a[2])}%)`;break}case"hsv":this.value=`hsv(${e}, ${Math.round(l)}%, ${Math.round(t)}%)`;break;case"rgb":{const{r:a,g:o,b:n}=pe(e,l,t);this.value=`rgb(${a}, ${o}, ${n})`;break}default:this.value=ce(pe(e,l,t))}}}const me=l({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0}},setup(e){const{currentColor:l}=m(oe),t=a(n(e.colors,e.color));function n(e,l){return e.map((e=>{const t=new fe;return t.enableAlpha=!0,t.format="rgba",t.fromString(e),t.selected=t.value===l.value,t}))}return o((()=>l.value),(e=>{const l=new fe;l.fromString(e),t.value.forEach((e=>{e.selected=l.compare(e)}))})),g((()=>{t.value=n(e.colors,e.color)})),{rgbaColors:t,handleSelect:function(l){e.color.fromString(e.colors[l])}}}}),ve={class:"el-color-predefine"},ge={class:"el-color-predefine__colors"},be=["onClick"];var ke=r(me,[["render",function(e,l,t,a,o,n){return u(),c("div",ve,[i("div",ge,[(u(!0),c(b,null,k(e.rgbaColors,((l,t)=>(u(),c("div",{key:e.colors[t],class:d(["el-color-predefine__color-selector",{selected:l.selected,"is-alpha":l._alpha<100}]),onClick:l=>e.handleSelect(t)},[i("div",{style:h({backgroundColor:l.value})},null,4)],10,be)))),128))])])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);const _e=l({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(e){const l=p(),t=a(0),r=a(0),u=a("hsl(0, 100%, 50%)"),c=f((()=>({hue:e.color.get("hue"),value:e.color.get("value")})));function i(){const a=e.color.get("saturation"),o=e.color.get("value"),n=l.vnode.el,{clientWidth:s,clientHeight:c}=n;r.value=a*s/100,t.value=(100-o)*c/100,u.value=`hsl(${e.color.get("hue")}, 100%, 50%)`}function h(a){const o=l.vnode.el.getBoundingClientRect(),{clientX:n,clientY:u}=s(a);let c=n-o.left,i=u-o.top;c=Math.max(0,c),c=Math.min(c,o.width),i=Math.max(0,i),i=Math.min(i,o.height),r.value=c,t.value=i,e.color.set({saturation:c/o.width*100,value:100-i/o.height*100})}return o((()=>c.value),(()=>{i()})),n((()=>{le(l.vnode.el,{drag:e=>{h(e)},end:e=>{h(e)}}),i()})),{cursorTop:t,cursorLeft:r,background:u,colorValue:c,handleDrag:h,update:i}}}),Ce=i("div",{class:"el-color-svpanel__white"},null,-1),we=i("div",{class:"el-color-svpanel__black"},null,-1),Me=[i("div",null,null,-1)];var $e=r(l({name:"ElColorPicker",components:{ElButton:_,ElTooltip:Y,ElInput:X,ElIcon:C,Close:w,ArrowDown:Z,SvPanel:r(_e,[["render",function(e,l,t,a,o,n){return u(),c("div",{class:"el-color-svpanel",style:h({backgroundColor:e.background})},[Ce,we,i("div",{class:"el-color-svpanel__cursor",style:h({top:e.cursorTop+"px",left:e.cursorLeft+"px"})},Me,4)],4)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]),HueSlider:ae,AlphaSlider:te,Predefine:ke},directives:{ClickOutside:J},props:{modelValue:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:{type:String,validator:Q},popperClass:String,predefine:Array},emits:["change","active-change",M],setup(e,{emit:l}){const{t:t}=$(),r=y("color"),s=m(V,{}),u=m(x,{}),c=a(null),i=a(null),h=a(null),d=a(null);let p=!0;const v=S(new fe({enableAlpha:e.showAlpha,format:e.colorFormat,value:e.modelValue})),g=a(!1),b=a(!1),k=a(""),_=f((()=>e.modelValue||b.value?function(e,l){if(!(e instanceof fe))throw new TypeError("color should be instance of _color Class");const{r:t,g:a,b:o}=e.toRgb();return l?`rgba(${t}, ${a}, ${o}, ${e.get("alpha")/100})`:`rgb(${t}, ${a}, ${o})`}(v,e.showAlpha):"transparent")),C=A(),w=f((()=>!(!e.disabled&&!s.disabled))),E=f((()=>e.modelValue||b.value?v.value:""));o((()=>e.modelValue),(e=>{e?e&&e!==v.value&&(p=!1,v.fromString(e)):b.value=!1})),o((()=>E.value),(e=>{k.value=e,p&&l("active-change",e),p=!0})),o((()=>v.value),(()=>{e.modelValue||b.value||(b.value=!0)}));const W=N((function(e){g.value=e}),100);function P(){F((()=>{e.modelValue?v.fromString(e.modelValue):b.value=!1}))}return n((()=>{e.modelValue&&(k.value=E.value)})),o((()=>g.value),(()=>{F((()=>{var e,l,t;null==(e=c.value)||e.update(),null==(l=i.value)||l.update(),null==(t=h.value)||t.update()}))})),H(oe,{currentColor:E}),{color:v,colorDisabled:w,colorSize:C,displayedColor:_,showPanelColor:b,showPicker:g,customInput:k,handleConfirm:function(){v.fromString(k.value)},hide:function(){W(!1),P()},handleTrigger:function(){w.value||W(!g.value)},clear:function(){var t;W(!1),l(M,null),l("change",null),null!==e.modelValue&&(null==(t=u.validate)||t.call(u,"change").catch((e=>B()))),P()},confirmValue:function(){var t;const a=v.value;l(M,a),l("change",a),null==(t=u.validate)||t.call(u,"change").catch((e=>B())),W(!1),F((()=>{const l=new fe({enableAlpha:e.showAlpha,format:e.colorFormat,value:e.modelValue});v.compare(l)||P()}))},t:t,ns:r,hue:c,svPanel:i,alpha:h,popper:d}}}),[["render",function(e,l,t,a,o,n){const r=E("hue-slider"),s=E("sv-panel"),p=E("alpha-slider"),f=E("predefine"),m=E("el-input"),v=E("el-button"),g=E("arrow-down"),b=E("el-icon"),k=E("close"),_=E("el-tooltip"),C=W("click-outside");return u(),P(_,{ref:"popper",visible:e.showPicker,"onUpdate:visible":l[2]||(l[2]=l=>e.showPicker=l),"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[e.ns.be("picker","panel"),e.ns.b("dropdown"),e.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",transition:"el-zoom-in-top",persistent:""},{content:j((()=>[T((u(),c("div",null,[i("div",{class:d(e.ns.be("dropdown","main-wrapper"))},[D(r,{ref:"hue",class:"hue-slider",color:e.color,vertical:""},null,8,["color"]),D(s,{ref:"svPanel",color:e.color},null,8,["color"])],2),e.showAlpha?(u(),P(p,{key:0,ref:"alpha",color:e.color},null,8,["color"])):I("v-if",!0),e.predefine?(u(),P(f,{key:1,ref:"predefine",color:e.color,colors:e.predefine},null,8,["color","colors"])):I("v-if",!0),i("div",{class:d(e.ns.be("dropdown","btns"))},[i("span",{class:d(e.ns.be("dropdown","value"))},[D(m,{modelValue:e.customInput,"onUpdate:modelValue":l[0]||(l[0]=l=>e.customInput=l),"validate-event":!1,size:"small",onKeyup:O(e.handleConfirm,["enter"]),onBlur:e.handleConfirm},null,8,["modelValue","onKeyup","onBlur"])],2),D(v,{size:"small",type:"text",class:d(e.ns.be("dropdown","link-btn")),onClick:e.clear},{default:j((()=>[z(q(e.t("el.colorpicker.clear")),1)])),_:1},8,["class","onClick"]),D(v,{plain:"",size:"small",class:d(e.ns.be("dropdown","btn")),onClick:e.confirmValue},{default:j((()=>[z(q(e.t("el.colorpicker.confirm")),1)])),_:1},8,["class","onClick"])],2)])),[[C,e.hide]])])),default:j((()=>[i("div",{class:d([e.ns.b("picker"),e.ns.is("disabled",e.colorDisabled),e.ns.bm("picker",e.colorSize)])},[e.colorDisabled?(u(),c("div",{key:0,class:d(e.ns.be("picker","mask"))},null,2)):I("v-if",!0),i("div",{class:d(e.ns.be("picker","trigger")),onClick:l[1]||(l[1]=(...l)=>e.handleTrigger&&e.handleTrigger(...l))},[i("span",{class:d([e.ns.be("picker","color"),e.ns.is("alpha",e.showAlpha)])},[i("span",{class:d(e.ns.be("picker","color-inner")),style:h({backgroundColor:e.displayedColor})},[T(D(b,{class:d([e.ns.be("picker","icon"),e.ns.is("icon-arrow-down")])},{default:j((()=>[D(g)])),_:1},8,["class"]),[[L,e.modelValue||e.showPanelColor]]),e.modelValue||e.showPanelColor?I("v-if",!0):(u(),P(b,{key:0,class:d([e.ns.be("picker","empty"),e.ns.is("icon-close")])},{default:j((()=>[D(k)])),_:1},8,["class"]))],6)],2)],2)],2)])),_:1},8,["visible","popper-class"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/index.vue"]]);$e.install=e=>{e.component($e.name,$e)};const ye=$e;const Ve={class:"d-color d-flex-between"},xe={key:0,class:"mr20 d-sub"},Se=["onClick"],Ae={props:{modelValue:{type:String,required:!0},colors:{type:Array,default:[]},custom:{type:Boolean,default:!0},async:{type:Boolean,default:!1},title:String},emits:["update:modelValue","change"],setup(e,{emit:l}){const t=e,a=["#1681ff","#2ecc71","#33c5c5","#9b59b6","#f1c40f","#e67e22","#e74c3c","transparent"],o=f((()=>t.colors.length?t.colors:a));function n(e){l("update:modelValue",e),l("change",e),t.async&&R("baseConfig")}return(l,a)=>(u(),c("div",Ve,[e.title?(u(),c("p",xe,q(e.title),1)):I("",!0),(u(!0),c(b,null,k(U(o),(e=>(u(),c("span",{class:d(["d-color-item",{colorTransparent:"transparent"===e}]),onClick:l=>n(e),key:e,style:h([{backgroundColor:e},{borderColor:t.modelValue==e?"transparent"==e?"#dad6d6":e:"transparent"}])},null,14,Se)))),128)),t.custom?(u(),P(U(ye),{key:1,modelValue:e.modelValue,"onUpdate:modelValue":n,size:"small"},null,8,["modelValue"])):I("",!0)]))}};export{Ae as _};
