import{a as o,u as m,j as s}from"./index-eddb4896.js";import{c as h}from"./clip_img-63a32124.js";import{A as p,a as x}from"./api.config-aa286da0.js";const j="/react-coffee-plz/assets/icon_hurry-fd52168d.png";function v(){const r=o(e=>e.party);console.log(":partyInfo:",r);const t=m(),c=function(){const e={userList:r.memberList.map(a=>a.userId),partyName:r.partyName,cafeId:r.cafeId,endDate:r.endDate,endTime:r.endTime};p.post(`${x.defaultDomain}/party/save`,e).then(a=>{if(!a||!a.ok){alert(`처리 실패하였습니다.
관리자에게 문의해주세요.`);return}t(`/party/confirm/${a.data.partyId}`)}).catch(a=>{console.error("[/order/save] Error occurred ::: ",a)})},n=e=>{const a=e.substring(0,4),i=e.substring(4,6),d=e.substring(6,8);return`${a}/${i}/${d}`},l=e=>{const a=e.substring(0,2),i=e.substring(2,4);return`${a}:${i}`};return s.jsxs("div",{id:"party",className:"element pbd50",children:[s.jsxs("h1",{children:["생성된 파티를",s.jsx("br",{}),s.jsx("span",{className:"point",children:"확인"}),"하세요."]}),s.jsxs("div",{className:"order-list-area mgt30",children:[s.jsx("div",{className:"clipimg",children:s.jsx("img",{alt:"clip",src:h})}),s.jsxs("div",{className:"order-title",children:[s.jsxs("div",{className:"text",children:[s.jsx("div",{className:"title",children:r.partyName}),s.jsx("div",{className:"cafenm point",children:r.cafeNm})]}),s.jsx("div",{className:"image",children:s.jsx("img",{alt:"hurry",src:j})})]}),s.jsxs("div",{className:"order-time",children:[s.jsx("span",{className:"mgr5",children:s.jsx("b",{children:"마감시간"})})," ",n(r.endDate)," ",l(r.endTime)]}),s.jsxs("div",{className:"order-list-detail",children:[s.jsx("div",{className:"title",children:s.jsxs("b",{children:["파티원 ",s.jsx("span",{className:"point",children:r.memberList.length}),"명"]})}),s.jsx("div",{className:"list",children:s.jsx("ul",{children:r.memberList.map((e,a)=>s.jsxs("li",{children:[a+1,". ",e.name," ",e.rank,"(",e.team,")"]},a+1))})})]})]}),s.jsx("footer",{id:"footer",className:"bg_white",children:s.jsx("div",{className:"large-btn",onClick:c,children:"파티생성"})})]})}export{v as default};
