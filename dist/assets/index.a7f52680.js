import{o as e,b as t}from"./event.0bae16b8.js";var a={beforeMount(a,o){let n,l=null;const r=()=>o.value&&o.value(),u=()=>{Date.now()-n<100&&r(),clearInterval(l),l=null};e(a,"mousedown",(e=>{0===e.button&&(n=Date.now(),t(document,"mouseup",u),clearInterval(l),l=setInterval(r,100))}))}};export{a as R};
