import{j as r,a as p,b as n,u as h,r as d,g as x}from"./index-03aa8170.js";import{A as j,a as N}from"./api.config-7a1e0839.js";function b({userInfo:s,isOrderComplete:a,selectOrderer:o}){return r.jsx(r.Fragment,{children:r.jsxs("span",{children:[r.jsxs("div",{className:"name "+(a?"gray":""),onClick:()=>a?"":o(s.userId,s.name,s.team,s.rank),children:[s.name," (",s.team,")"]}),a?r.jsx("div",{className:"done-label",children:"주문완료"}):r.jsx("div",{style:{background:"#ff5cc3",color:"white",cursor:"pointer"},className:"done-label",onClick:()=>document.location.href=`tel:${s.telNo}`,children:"전화걸기"})]})})}const g=async s=>(await await j.get(`${N.defaultDomain}/order/users/${s}`)).data[0].userList;function v(){const s=p(),a={partyNo:n(e=>e.order.partyNo),userId:n(e=>e.order.userId),name:n(e=>e.order.name),team:n(e=>e.order.team),rank:n(e=>e.order.rank)},o=h(),c=(e,t,m,u)=>{s(x(e,t,m,u)),o("/order/menu")},[i,l]=d.useState([]);return d.useEffect(()=>{async function e(){const t=await g(a.partyNo);l(t)}e()},[]),r.jsx(r.Fragment,{children:r.jsxs("div",{id:"order",className:"element orderer",children:[r.jsxs("h1",{children:[r.jsx("span",{className:"point",children:"주문자를"}),r.jsx("br",{}),"선택해주세요."]}),r.jsx("div",{className:"orderer-list",children:i.map((e,t)=>r.jsx("div",{className:"item",children:r.jsx(b,{userInfo:{userId:e.userId,name:e.name,rank:e.rank,team:e.team,telNo:e.telNo},isOrderComplete:e.orderComplete,selectOrderer:c})},e.userId+""+t))})]})})}export{v as default};
