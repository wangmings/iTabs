import{u as e,i as a,a as t,b as o,U as l}from"./install.e81c9494.js";import{i as s,a as i,b as r,c as n,d as m}from"./install.2a557092.js";import{Q as c,ay as p,U as u,x as d}from"./el-button.0a4ba32a.js";const y={props:{data:{type:Array,default:[]}},setup(y){const h=y;e([a,t,o,s,i,r,n,m]);function b(e,a){for(var t=[],o=0,l=e.values.length;o<l;o++)if(o<a)t.push("-");else{for(var s=0,i=0;i<a;i++)s+=+e.values[o-i][1];t.push(s/a)}return t}const g=c((()=>{let e=function(e){const a=[],t=[];return e.forEach((e=>{let o=e.split(",");a.push(o.splice(0,1)[0]),t.push(o)})),{categoryData:a,values:t}}(h.data);return{backgroundColor:"transparent",title:{text:"",subtext:"",left:0},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{data:["日K","MA5","MA10","MA20","MA30"]},grid:{top:36,left:0,right:10,bottom:40,containLabel:!0},xAxis:{type:"category",data:e.categoryData,scale:!0,boundaryGap:!1,axisLine:{onZero:!1},splitLine:{show:!1},min:"dataMin",max:"dataMax"},yAxis:{scale:!0,splitLine:{lineStyle:{color:"rgba(100,100,100,.1)"}}},dataZoom:[{type:"inside",height:20,bottom:10,borderColor:"rgba(100,100,100,.5)",start:50,end:100},{show:!0,type:"slider",height:20,bottom:10,borderColor:"rgba(100,100,100,.5)",start:50,end:100}],series:[{name:"日K",type:"candlestick",data:e.values,itemStyle:{color:"#ec0000",color0:"#00da3c",borderColor:"#8A0000",borderColor0:"#008F28"},markPoint:{label:{formatter:function(e){return null!=e?Math.round(e.value)+"":""}},data:[{name:"Mark",coord:["2013/5/31",2300],value:2300,itemStyle:{color:"rgb(41,60,85)"}},{name:"highest value",type:"max",valueDim:"highest"},{name:"lowest value",type:"min",valueDim:"lowest"},{name:"average value on close",type:"average",valueDim:"close"}],tooltip:{formatter:function(e){return e.name+"<br>"+(e.data.coord||"")}}},markLine:{symbol:["none","none"],data:[[{name:"from lowest to highest",type:"min",valueDim:"lowest",symbol:"circle",symbolSize:10,label:{show:!1},emphasis:{label:{show:!1}}},{type:"max",valueDim:"highest",symbol:"circle",symbolSize:10,label:{show:!1},emphasis:{label:{show:!1}}}],{name:"min line on close",type:"min",valueDim:"close"},{name:"max line on close",type:"max",valueDim:"close"}]}},{name:"MA5",type:"line",data:b(e,5),smooth:!0,lineStyle:{width:1,opacity:.5}},{name:"MA10",type:"line",data:b(e,10),smooth:!0,lineStyle:{width:1,opacity:.5}},{name:"MA20",type:"line",data:b(e,20),smooth:!0,lineStyle:{width:1,opacity:.5}},{name:"MA30",type:"line",data:b(e,30),smooth:!0,lineStyle:{width:1,opacity:.5}}]}}));return(e,a)=>(p(),u(d(l),{autoresize:"",theme:"dark",class:"chart",option:d(g)},null,8,["option"]))}};export{y as default};
