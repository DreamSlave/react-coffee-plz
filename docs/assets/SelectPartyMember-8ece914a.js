import{r as d,j as s}from"./index-303bf09b.js";/* empty css              */import{C as l}from"./CheckBox-7c1c744c.js";const _=()=>{const[n,h]=d.useState([{name:"김진미",team:"PD팀",department:"기업부설연구소",rank:"프로",c_no:"01058935898",checked:!1},{name:"김세인",team:"PD팀",department:"기업부설연구소",rank:"프로",c_no:"01058935898",checked:!1},{name:"조도은",team:"PD팀",department:"기업부설연구소",rank:"프로",c_no:"01058935898",checked:!1},{name:"권혜란",team:"PD팀",department:"기업부설연구소",rank:"프로",c_no:"01058935898",checked:!1},{name:"정민재",team:"UX디자인팀",department:"기업부설연구소",rank:"프로",c_no:"01058935898",checked:!1}]);d.useEffect(()=>{},[n]);const[i,o]=d.useState([...new Set(n.map(e=>e.team))].map(e=>({team:e,checked:!1,isView:!1}))),m=(e,a)=>{const c=[...i];c[e].isView=!a,o(c)},k=(e,a)=>{const c=[...n];c.forEach(r=>{r.team===e&&(r.checked=a)}),h(c)};return s.jsxs("div",{id:"party",className:"element",children:[s.jsxs("h1",{children:[s.jsx("span",{className:"point",children:"대상인원을"}),s.jsx("br",{}),"선택해주세요."]}),s.jsxs("div",{className:"total_chck mgt20 mgb20",children:[n.filter(e=>e.checked).length,"명"]}),i.map((e,a)=>s.jsxs("div",{className:"chck_person",children:[s.jsx(l,{checked:e.checked,onChange:c=>k(e.team,c.target.checked),children:s.jsx("span",{children:e.team},a+"_span")},e.team),s.jsx("div",{className:"p_2dpth_btn",onClick:()=>m(a,e.isView),children:s.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",children:s.jsx("path",{d:"M7.5 12L0 4h15l-7.5 8z",fill:"currentColor"})})}),s.jsx("div",{className:"p_2dpth",children:e.isView&&n.filter(c=>c.team===e.team).map((c,r)=>s.jsx(l,{checked:c.checked,onChange:p=>h(f=>f.map(t=>t.name===c.name?{...t,checked:p.target.checked}:t)),children:s.jsx("div",{children:s.jsxs("div",{children:[c.name," ",c.rank," (",c.team,")"]},r)},r)},c.name))},a+"_innder_div")]},a)),s.jsx("footer",{id:"footer",children:s.jsx("div",{className:"large-btn",children:"파티생성하기"})})]})};export{_ as default};
