import{r as a,j as e}from"./index-58212601.js";/* empty css              */import{s as l}from"./search-ic-bd0a5ab9.js";const N=()=>{const[n,c]=a.useState(""),[t,r]=a.useState([]);a.useEffect(()=>{m()},[]);const i=s=>{c(s.target.value)},m=()=>{console.log(`doSearch called ::: param ::: ${n}`),r([{menuId:"MENU0001",menuNm:"아메리카노(ICE)"},{menuId:"MENU0002",menuNm:"아메리카노(ICE) 연하게"},{menuId:"MENU0003",menuNm:"아메리카노(HOT)"},{menuId:"MENU0004",menuNm:"아메리카노(HOT) 연하게"},{menuId:"MENU0005",menuNm:"카페라떼(ICE)"},{menuId:"MENU0006",menuNm:"카페라떼(ICE) 연하게"},{menuId:"MENU0007",menuNm:"카페라떼(HOT)"}])};return e.jsxs("div",{id:"order",className:"element selectmenu",children:[e.jsxs("h1",{children:[e.jsx("span",{className:"point",children:"메뉴를"}),e.jsx("br",{}),"선택해주세요."]}),e.jsx("div",{className:"person-info bg_sub point",children:"정민재 프로(UX디자인팀)"}),e.jsxs("div",{className:"form-search mgt25 mgb15",children:[e.jsx("div",{className:"input",children:e.jsx("input",{type:"text",placeholder:"검색",value:n,onChange:i,className:""})}),e.jsx("div",{className:"btn",children:e.jsx("img",{className:"search-ic",alt:"Search ic",src:l,onClick:m})})]}),e.jsx("div",{className:"tag-group",children:e.jsx("div",{className:"menu-tag bg_pink white",children:"# 아이스"})}),e.jsx("div",{className:"orderer-list mgt25",children:t.map(s=>e.jsx("div",{className:"item",children:s.menuNm},s.menuId))})]})};export{N as default};
