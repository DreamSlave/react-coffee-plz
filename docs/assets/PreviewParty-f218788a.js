import{a as d,u as o,j as s}from"./index-baa901d4.js";/* empty css              */function j(){const i=d(e=>e.party);console.log(":partyInfo:",i);const n=o(),c=function(){n("/party/confirm")},t=e=>{const r=e.substring(0,4),a=e.substring(4,6),m=e.substring(6,8);return`${r}/${a}/${m}`},l=e=>{const r=e.substring(0,2),a=e.substring(2,4);return`${r}:${a}`};return s.jsxs("div",{id:"party",className:"element pbd50",children:[s.jsxs("h1",{children:["생성된 파티를",s.jsx("br",{}),s.jsx("span",{className:"point",children:"확인"}),"하세요."]}),s.jsxs("div",{className:"order-list-area mgt30",children:[s.jsx("div",{className:"clipimg",children:s.jsx("img",{src:"/src/assets/img/clip_img.png"})}),s.jsxs("div",{className:"order-title",children:[s.jsxs("div",{className:"text",children:[s.jsx("div",{className:"title",children:i.partyName}),s.jsx("div",{className:"cafenm point",children:i.cafeNm})]}),s.jsx("div",{className:"image",children:s.jsx("img",{src:"/src/assets/img/icon_hurry.png"})})]}),s.jsxs("div",{className:"order-time",children:[s.jsx("span",{className:"mgr5",children:s.jsx("b",{children:"마감시간"})})," ",t(i.endDate)," ",l(i.endTime)]}),s.jsxs("div",{className:"order-list-detail",children:[s.jsx("div",{className:"title",children:s.jsxs("b",{children:["파티원 ",s.jsx("span",{className:"point",children:i.memberList.length}),"명"]})}),s.jsx("div",{className:"list",children:s.jsx("ul",{children:i.memberList.map((e,r)=>s.jsxs("li",{children:[r+1,". ",e.name," ",e.rank,"(",e.team,")"]}))})})]})]}),s.jsx("footer",{id:"footer",className:"bg_white",children:s.jsx("div",{className:"large-btn",onClick:c,children:"파티생성"})})]})}export{j as default};