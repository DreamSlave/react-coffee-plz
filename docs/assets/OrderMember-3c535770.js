import{r as s,j as e}from"./index-35989979.js";/* empty css              */function d(){return[{userNm:"김진미 프로",userId:"ID"+~~(Math.random()*10),teamNm:"PD팀",isOrderComplete:!0},{userNm:"김세인 프로",userId:"ID"+~~(Math.random()*10),teamNm:"PD팀",isOrderComplete:!0},{userNm:"조도은 프로",userId:"ID"+~~(Math.random()*10),teamNm:"PD팀",isOrderComplete:!0},{userNm:"정민재 프로",userId:"ID"+~~(Math.random()*10),teamNm:"UX디자인팀",isOrderComplete:!1},{userNm:"이광수 프로",userId:"ID"+~~(Math.random()*10),teamNm:"UX디자인팀",isOrderComplete:!0},{userNm:"김우빈 프로",userId:"ID"+~~(Math.random()*10),teamNm:"PD팀",isOrderComplete:!1}]}function l(){const[m,t]=s.useState([]);return s.useEffect(()=>{const r=d();t(r)},[]),e.jsxs(e.Fragment,{children:[e.jsx("header",{className:"header"}),e.jsxs("div",{id:"order",className:"element orderer",children:[e.jsxs("h1",{children:[e.jsx("span",{className:"point",children:"주문자를"}),e.jsx("br",{}),"선택해주세요."]}),e.jsx("div",{className:"orderer-list",children:m.map((r,a)=>e.jsxs("div",{className:"item",children:[e.jsxs("div",{className:"name",children:[r.userNm," (",r.teamNm,")"]}),r.isOrderComplete?e.jsx("div",{className:"done-label",children:"주문완료"}):""]},r.userId+a))})]})]})}export{l as default};
