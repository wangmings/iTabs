import{ay as a,U as e,b1 as s,ak as o,x as i,X as t,aF as l,W as n,aE as c,I as r,V as d,D as m}from"./el-button.0a4ba32a.js";import{E as h}from"./el-dialog.4b8a03dc.js";import"./el-overlay.ebdea840.js";import{a as p}from"./main.858372aa.js";import"./index.8dc67c0c.js";const b={class:"p20 ac d-main",style:{"line-height":"24px"}},f={class:"ac mt30 mb40 d-main"},g=["href"],u=["src"],x={class:"mt0"},k=["src"],j=t("p",{class:"mt0"},[t("span",null,"扩展中心")],-1),y={setup(y){const E=()=>{chrome&&chrome.tabs.create({url:"chrome://extensions/"})},w=[{n:"Edge",icon:"edge",h:"https://microsoftedge.microsoft.com/addons/detail/inedkoakiaeepjoblbiiipedngonadhn"},{n:"Chrome",icon:"chrome",h:"https://chrome.google.com/webstore/detail/mhloojimgilafopcmlcikiidgbbnelip"},{n:"Firefox",icon:"firefox",h:"https://addons.mozilla.org/zh-CN/firefox/addon/itab-%E6%96%B0%E6%A0%87%E7%AD%BE%E9%A1%B5/"},{n:"360极速版",icon:"360",h:"https://ext.chrome.360.cn/webstore/detail/cccfmjnapcablhcaegmbencndfeclkpi"},{n:"更多版本",icon:"more",h:"https://itab.link/"}];return(y,v)=>(a(),e(i(h),o({"custom-class":"notion-dialog","close-on-press-escape":!1,width:"640px","append-to-body":""},y.$attrs),{default:s((()=>[t("div",b,[l(y.$slots,"default"),t("ul",f,[(a(),n(r,null,c(w,(a=>t("a",{target:"_blank",href:a.h,class:"d-inline mr20 ml20 d-main d-hover",key:a.icon},[t("img",{style:{width:"32px"},class:"d-inline",src:`https://files.codelife.cc/itab/browser/${a.icon}.svg`,alt:""},null,8,u),t("p",x,[t("span",null,m(a.n),1)])],8,g))),64)),i(p)?d("",!0):(a(),n("a",{key:0,onClick:E,class:"d-inline mr20 ml20 ac d-main d-hover"},[t("img",{style:{width:"32px"},class:"d-inline",src:"https://files.codelife.cc/itab/browser/extension.svg",alt:""},null,8,k),j]))])])])),_:3},16))}};export{y as default};
