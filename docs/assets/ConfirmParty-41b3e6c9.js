import{d as t,u as o,r as l,j as s}from"./index-35989979.js";const m=()=>{const{partyId:r}=t(),a=o(),[e]=l.useState(`https://dreamslave.github.io/react-coffee-plz/order/${r}`);function i(){navigator.clipboard.writeText(e).catch(n=>{console.error("클립보드에 텍스트를 복사하는 동안 오류가 발생했습니다:",n)})}function c(){window.open(e,"_blank")}return s.jsxs("div",{id:"party",className:"element pbd50",children:[s.jsxs("h1",{className:"point",children:[s.jsx("div",{className:"main_tit point mgb5",children:"Wow!"}),"파티가 생성되었어요!"]}),s.jsxs("div",{className:"confirm-area mgt30",children:[s.jsx("div",{className:"mainimg",children:s.jsx("img",{src:"/src/assets/img/icon_hurry.png"})}),s.jsxs("div",{className:"link_copy",children:[s.jsx("div",{className:"link",children:e}),s.jsx("div",{className:"copy",onClick:i,children:s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"26px",children:[s.jsx("path",{d:"M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z"}),s.jsx("path",{d:"M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z"})]})})]}),s.jsx("div",{className:"go_order",onClick:c,children:"주문하러가기"})]}),s.jsx("footer",{id:"footer",className:" bg_white",children:s.jsx("div",{className:"large-btn bg_black",onClick:()=>a("/entrance"),children:"추가 파티 생성"})})]})};export{m as default};
