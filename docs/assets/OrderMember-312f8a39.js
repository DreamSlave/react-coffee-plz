import{j as e,a as o,u,r as d,g as h}from"./index-35989979.js";function p({userInfo:a,isOrderComplete:s,selectOrderer:t}){return e.jsx(e.Fragment,{children:e.jsxs("span",{onClick:()=>s?"":t(a.userId,a.name,a.team,a.rank),children:[e.jsxs("div",{className:"name "+(s?"gray":""),children:[a.name," (",a.team,")"]}),s?e.jsx("div",{className:"done-label",children:"주문완료"}):""]})})}function x(){return[{name:"김진미",rank:"프로",userId:"ID"+~~(Math.random()*1e3),team:"PD팀",isOrderComplete:!0},{name:"김세인",rank:"프로",userId:"ID"+~~(Math.random()*1e3),team:"PD팀",isOrderComplete:!0},{name:"조도은",rank:"프로",userId:"ID"+~~(Math.random()*1e3),team:"PD팀",isOrderComplete:!0},{name:"정민재",rank:"프로",userId:"ID"+~~(Math.random()*1e3),team:"UX디자인팀",isOrderComplete:!1},{name:"이광수",rank:"프로",userId:"ID"+~~(Math.random()*1e3),team:"UX디자인팀",isOrderComplete:!0},{name:"김우빈",rank:"프로",userId:"ID"+~~(Math.random()*1e3),team:"PD팀",isOrderComplete:!1}]}function I(){const a=o(),s=u(),t=(r,n,l,c)=>{a(h(r,n,l,c)),s("/order/menu")},[m,i]=d.useState([]);return d.useEffect(()=>{const r=x();i(r)},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{id:"order",className:"element orderer",children:[e.jsxs("h1",{children:[e.jsx("span",{className:"point",children:"주문자를"}),e.jsx("br",{}),"선택해주세요."]}),e.jsx("div",{className:"orderer-list",children:m.map((r,n)=>e.jsx("div",{className:"item",children:e.jsx(p,{userInfo:{userId:r.userId,name:r.name,rank:r.rank,team:r.team},isOrderComplete:r.isOrderComplete,selectOrderer:t})},r.userId+n))})]})})}export{I as default};
