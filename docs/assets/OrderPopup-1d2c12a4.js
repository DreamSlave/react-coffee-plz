import{r as n,j as e}from"./index-eddb4896.js";function a(){return{menuNm:"아메리카노-아이스-연하게",menuId:"IDIDIDID",count:30,orderUserInfoList:[{userNm:"김진미 프로(PD팀)",count:~~(Math.random()*10),userId:"ID"+~~(Math.random()*10),phoneNumber:"010-3722-8040"},{userNm:"김세인 프로(PD팀)",count:~~(Math.random()*10),userId:"ID"+~~(Math.random()*10),phoneNumber:"010-3722-8040"},{userNm:"조도은 프로(PD팀)",count:~~(Math.random()*10),userId:"ID"+~~(Math.random()*10),phoneNumber:"010-3722-8040"}]}}function i(){const[s,o]=n.useState({menuNm:"",menuId:"",count:0,orderUserInfoList:[]});return n.useEffect(()=>{const r=a();o(r)},[]),e.jsx(e.Fragment,{children:e.jsx("div",{id:"popup",children:e.jsxs("div",{className:"popup-area",children:[e.jsx("div",{className:"close",children:e.jsx("div",{className:"fr",children:e.jsx("svg",{width:"27px",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})})})}),e.jsxs("div",{className:"order-item",children:[e.jsx("div",{className:"menunm",children:s.menuNm}),e.jsx("div",{className:"count",children:s.count})]}),e.jsx("div",{className:"order-person-detail",children:s.orderUserInfoList.map((r,d)=>{const t="list-"+(d+1);return e.jsxs("div",{className:t,children:[e.jsxs("div",{className:"person-info",children:[e.jsx("svg",{className:"fl mgr5",width:"22px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z","clip-rule":"evenodd"})}),r.userNm]}),e.jsx("div",{className:"call-btn point",onClick:()=>document.location.href=`tel:${r.phoneNumber}`,children:"전화걸기"})]},r.userId)})})]})})})}export{i as default};
