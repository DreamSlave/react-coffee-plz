import{r as o,c as N,b as L,u as _,a as V,j as r,s as T}from"./index-476bf060.js";import{C as p}from"./CheckBox-bc4281fa.js";import{A,a as D}from"./api.config-7a1e0839.js";const P=()=>{const[n,h]=o.useState([]),[d,u]=o.useState([]),[g,f]=o.useState(!0),[x,k]=o.useState(!0),{showLoading:b,hideLoading:w}=N();o.useEffect(()=>{n.filter(e=>e.checked).length<1?f(!1):f(!0)},[n]);const j=L(e=>e.party);o.useEffect(()=>{(async()=>{try{const s=await E();if(x){const t=s.map(a=>{const l=j.memberList.some(S=>S.userId===a.userId);return{...a,checked:l}}),c=[...new Set(s.map(a=>a.team))].map(a=>({team:a,checked:t.filter(l=>l.team===a).every(l=>l.checked===!0),isView:!1}));h(t),u(c),k(!1)}}catch(s){console.error("Error fetching member list:",s)}})()},[]);const v=(e,s)=>{const t=[...d];t[e].isView=!s,u(t)},m=(e,s,t)=>{const i=[...n];switch(e){case"USERID":i.forEach(c=>{c.userId===s&&(c.checked=t)});break;case"TEAM":i.forEach(c=>{c.team===s&&(c.checked=t)});break}h(i)},y=_(),M=V(),C=function(){const e=n.filter(s=>s.checked===!0).map(s=>({userId:s.userId,rank:s.rank,team:s.team,name:s.name}));M(T(e)),y("/party/save")},E=async()=>{b();try{return(await A.get(`${D.defaultDomain}/users`)).data}catch(e){throw console.error(e),e}finally{w()}};return r.jsxs("div",{id:"party",className:"element",children:[r.jsxs("h1",{children:[r.jsx("span",{className:"point",children:"대상인원을"}),r.jsx("br",{}),"선택해주세요."]}),r.jsxs("div",{className:"total_chck mgt20 mgb20",children:[n.filter(e=>e.checked).length,"명"]}),d.map((e,s)=>r.jsxs("div",{className:"chck_person",children:[r.jsx(p,{checked:e.checked,onChange:t=>m("TEAM",e.team,t.target.checked),children:r.jsx("span",{children:e.team},s+"_span")},e.team),r.jsx("div",{className:"p_2dpth_btn",onClick:()=>v(s,e.isView),children:e.isView?r.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",children:r.jsx("path",{d:"M7.5 3l7.5 8H0l7.5-8z",fill:"currentColor"})}):r.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",children:r.jsx("path",{d:"M7.5 12L0 4h15l-7.5 8z",fill:"currentColor"})})}),r.jsx("div",{className:"p_2dpth mgt10",children:e.isView&&n.filter(t=>t.team===e.team).map((t,i)=>r.jsx("div",{className:"checkbox",children:r.jsx(p,{checked:t.checked,onChange:c=>m("USERID",t.userId,c.target.checked),children:r.jsxs("span",{children:[t.name," ",t.rank," (",t.team,")"]},i)},t.name)}))},s+"_innder_div")]},s)),r.jsx("footer",{id:"footer",children:g?r.jsx("div",{className:"large-btn",onClick:C,children:"파티생성하기"}):r.jsx("div",{className:"large-btn bg_gray",children:"파티생성하기"})})]})};export{P as default};
