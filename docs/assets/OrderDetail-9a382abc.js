import{r as s,j as e}from"./index-303bf09b.js";/* empty css              */function o(){return{title:"드림 슬레이브!",cafeNm:"메에가커픠",endDt:"2023/09/06 12:13",orderUserCount:18+~~(Math.random()*100),orderTagerUserCount:30+~~(Math.random()*100),orderDrinkCount:15+~~(Math.random()*100),orderTagerDrinkCount:30+~~(Math.random()*100),orderState:"01",orderMenuInfoList:[{menuNm:"아메리카노-아이스",count:~~(Math.random()*100),menuId:"ID"+~~(Math.random()*1e4)},{menuNm:"아메리카노-아이스-연하게",count:~~(Math.random()*100),menuId:"ID"+~~(Math.random()*1e4)},{menuNm:"아메리카노-핫",count:~~(Math.random()*100),menuId:"ID"+~~(Math.random()*1e4)},{menuNm:"카페라떼-아이스",count:~~(Math.random()*100),menuId:"ID"+~~(Math.random()*1e4)},{menuNm:"카페라떼-아이스-BIG",count:~~(Math.random()*100),menuId:"ID"+~~(Math.random()*1e4)},{menuNm:"초코라떼-아이스",count:~~(Math.random()*100),menuId:"ID"+~~(Math.random()*1e4)},{menuNm:"바닐라라떼-아이스",count:~~(Math.random()*100),menuId:"ID"+~~(Math.random()*1e4)},{menuNm:"(직접입력)자두에이드",count:~~(Math.random()*100),menuId:"ID"+~~(Math.random()*1e4)},{menuNm:"괜찮습니다.",count:~~(Math.random()*100),menuId:"ID"+~~(Math.random()*1e4)}]}}function u(){const[a,d]=s.useState([]),[r,t]=s.useState({cafeNm:"",endDt:"",orderDrinkCount:0,orderMenuInfoList:[],orderState:"",orderTagerDrinkCount:0,orderTagerUserCount:0,orderUserCount:0,title:""});return s.useEffect(()=>{const n=o();t(n),d(n.orderMenuInfoList)},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{id:"order",className:"element bg_pink",children:[e.jsx("div",{className:"main_tit",children:"커피주문 현황"}),e.jsxs("div",{className:"order-list-area",children:[e.jsx("div",{className:"clipimg",children:e.jsx("img",{src:"/src/assets/img/clip_img.png"})}),e.jsxs("div",{className:"order-title",children:[e.jsxs("div",{className:"text",children:[e.jsx("div",{className:"title",children:r.title}),e.jsx("div",{className:"cafenm point",children:r.cafeNm})]}),e.jsx("div",{className:"image",children:e.jsx("img",{src:"/src/assets/img/icon_open.png"})})]}),e.jsxs("div",{className:"order-time",children:[e.jsx("span",{className:"mgr5",children:e.jsx("b",{children:"마감시간"})})," ",r.endDt]}),e.jsxs("div",{className:"order-total",children:[e.jsxs("div",{className:"detail",children:[e.jsx("div",{className:"title",children:"주문한 인원"}),e.jsxs("div",{className:"count",children:[r.orderUserCount," 명"]}),e.jsxs("div",{className:"all gray",children:["총 ",r.orderTagerUserCount,"명"]})]}),e.jsxs("div",{className:"detail",children:[e.jsx("div",{className:"title",children:"주문된 음료"}),e.jsxs("div",{className:"count",children:[r.orderDrinkCount," 잔"]}),e.jsxs("div",{className:"all gray",children:["총 ",r.orderTagerDrinkCount," 잔"]})]})]}),e.jsxs("div",{className:"order-list-sum",children:[e.jsx("div",{className:"title",children:e.jsx("b",{children:"주문 취합 리스트"})}),a.map((n,m)=>{const i="item-"+(m+1);return e.jsxs("div",{className:i,children:[e.jsx("div",{className:"menunm",children:n.menuNm}),e.jsx("div",{className:"count",children:n.count})]},n.menuId)})]})]}),e.jsx("footer",{id:"footer",className:"bg_pink",children:e.jsx("div",{className:"large-btn bg_black",children:"주문하기"})})]})})}export{u as default};
