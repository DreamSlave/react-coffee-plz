import{b as o,r as t,u as c,j as e}from"./index-964a1bc5.js";/* empty css              */const d=()=>{const{encodedMenuNm:s}=o(),[a,i]=t.useState(""),r=c();console.log(a),t.useEffect(()=>{s&&s!==""&&i(decodeURIComponent(s))},[s]);const n=()=>{r("/order/test")};return e.jsxs("div",{id:"order",className:"element",children:[e.jsxs("h1",{className:"point",children:[e.jsx("div",{className:"main_tit point mgb5",children:"Wow!"}),"주문이 완료되었습니다!"]}),e.jsx("div",{className:"order-complete_img",children:e.jsx("img",{src:"/src/assets/img/compelete_img.png"})}),e.jsxs("div",{className:"order-complete",children:[e.jsx("div",{className:"person",children:"정민재 프로(UX디자인팀)"}),e.jsx("div",{className:"menu point",children:"초코라떼 아이스"})]}),e.jsx("footer",{id:"footer",children:e.jsx("div",{className:"btn-area bg_white",children:e.jsx("div",{className:"large-btn bg_black",onClick:n,children:"주문현황 보러가기"})})})]})};export{d as default};
