import{b as r,r as t,u as i,j as e}from"./index-baa901d4.js";/* empty css              */const l="/react-coffee-plz/assets/compelete_img-f8183ffb.png",p=()=>{const{encodedMenuNm:s}=r(),[a,o]=t.useState(""),c=i();console.log(a),t.useEffect(()=>{s&&s!==""&&o(decodeURIComponent(s))},[s]);const n=()=>{c("/order/test")};return e.jsxs("div",{id:"order",className:"element",children:[e.jsxs("h1",{className:"point",children:[e.jsx("div",{className:"main_tit point mgb5",children:"Wow!"}),"주문이 완료되었습니다!"]}),e.jsx("div",{className:"order-complete_img",children:e.jsx("img",{src:l})}),e.jsxs("div",{className:"order-complete",children:[e.jsx("div",{className:"person",children:"정민재 프로(UX디자인팀)"}),e.jsx("div",{className:"menu point",children:"초코라떼 아이스"})]}),e.jsx("footer",{id:"footer",children:e.jsx("div",{className:"btn-area bg_white",children:e.jsx("div",{className:"large-btn bg_black",onClick:n,children:"주문현황 보러가기"})})})]})};export{p as default};
