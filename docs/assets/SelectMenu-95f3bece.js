import{r as t,u as O,j as e,C as _,b as u,c as B}from"./index-31e02238.js";import{s as K}from"./search-ic-4293fc31.js";import{A as E,a as R}from"./api.config-7a1e0839.js";import{O as G}from"./EasterEgg-6a8f69fe.js";const q="/react-coffee-plz/assets/listloading-56b54439.gif";function F({partyNo:r,cafeId:m,menu:n,orderer:a,show:p,toggleShowPopup:x}){const[l,v]=t.useState(""),[j,h]=t.useState(!1),N=O(),g=o=>{v(o.target.value)},S=async()=>{let o=n.id===0?l:n.name;if(o.trim()==="")return alert("메뉴명을 확인해주세요."),!1;if(n.id===0&&["아아","따아","아메","아무"].some(i=>o.includes(i)))return h(!0),!1;let I={userId:a.userId,menuId:n.id===0?"":n.id,menuNm:o,cafeId:m,partyId:r};E.put(`${R.defaultDomain}/order/save`,I).then(i=>{if(!i||!i.ok){alert(`처리 실패하였습니다.
관리자에게 문의해주세요.`);return}N(`/order/complete/${a.partyNo}/${encodeURIComponent(o)}/${encodeURIComponent(a.name)}/${encodeURIComponent(a.team)}/${encodeURIComponent(a.rank)}`)}).catch(i=>{console.error("[/order/save] Error occurred ::: ",i)})},C=()=>{h(!1)};return e.jsx(_,{in:p,timeout:5e3,className:"fade",children:e.jsxs("div",{children:[e.jsx(G,{isOpen:j,onClose:C}),e.jsx("div",{id:"popup",className:"popup",children:e.jsxs("div",{className:"pop_confirm",children:[e.jsx("h2",{children:"선택한 메뉴를 확인해주세요."}),e.jsxs("div",{className:"person-info",children:[a.name," ",a.rank,"(",a.team,")"]}),n.id===0?e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"메뉴명 입력",value:l,onChange:g,className:"mgt10 mgb5"}),e.jsx("div",{className:"point mgb25",children:"작성하기 전에 진짜 없는 메뉴인지 확인하셨나요?"})]}):e.jsx("div",{className:"menunm",children:n.name}),e.jsx("div",{className:"btn-area",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("div",{className:"large-btn bg_sub point",onClick:x,children:"취소"})}),e.jsx("li",{children:e.jsx("div",{className:"large-btn",onClick:S,children:"확인"})})]})})]})})]})})}const Y=()=>{const r={partyNo:u(s=>s.order.partyNo),userId:u(s=>s.order.userId),name:u(s=>s.order.name),team:u(s=>s.order.team),rank:u(s=>s.order.rank)},[m,n]=t.useState(""),[a,p]=t.useState(""),[x,l]=t.useState([]),[v,j]=t.useState(""),[h,N]=t.useState(""),[g,S]=t.useState(),[C]=t.useState(["아이스","핫","라떼","에이드","샷추가","생과일","아메리카노"]),[o,I]=t.useState(!1),[i,b]=t.useState(1),[L,$]=t.useState(!0),[k,w]=t.useState(!1),f=t.useRef(null);t.useRef(null),B();const M=t.useRef(!0);t.useEffect(()=>{M.current&&(window.scrollTo(0,0),M.current=!1),U(i)},[a,i]);const V=s=>{n(s.target.value)},A=s=>{s.key==="Enter"&&y()},y=()=>{p(m),b(1),l([])},T=s=>{n(s),p(s),b(1)},U=s=>{w(!0),E.get(`${R.defaultDomain}/menu/info/${r.partyNo}?page=${s}&searchTag=${a}`).then(d=>{const c=d.data;c.content&&c.content.length>0&&(j(c.content[0].cafeId),N(c.content[0].cafeName)),$(s===c.totalPages||c.totalPages===0),l(s===1?[{id:0,name:"직접입력"},{id:99,name:"괜찮습니다."},...c.content]:H=>[...H,...c.content]),w(!1)})},P=()=>{I(s=>!s)},z=s=>{P(),S(s)},D=t.useCallback(s=>{k||L||(f.current&&f.current.disconnect(),f.current=new IntersectionObserver(d=>{d[0].isIntersecting&&b(c=>c+1)},{rootMargin:"0px 0px 100px 0px"}),s&&f.current.observe(s))},[k]);return e.jsxs("div",{children:[o&&g&&e.jsx(F,{partyNo:r.partyNo,cafeId:v,menu:g,orderer:r,show:o,toggleShowPopup:P}),e.jsxs("div",{id:"order",className:"element selectmenu",children:[e.jsxs("h1",{children:[e.jsx("span",{className:"point",children:"메뉴를"}),e.jsx("br",{}),"선택해주세요."]}),e.jsx("div",{className:"cafename",children:e.jsx("b",{children:h})}),e.jsxs("div",{className:"person-info bg_sub point",children:[r.name," ",r.rank,"(",r.team,")"]}),e.jsxs("div",{className:"form-search mgt25 mgb15",children:[e.jsx("div",{className:"input",children:e.jsx("input",{type:"text",placeholder:"검색",value:m,onChange:V,onKeyDown:A,className:""})}),e.jsx("div",{className:"btn",children:e.jsx("img",{className:"search-ic",alt:"Search ic",src:K,onClick:y})})]}),e.jsx("div",{className:"tag-group",children:C.map((s,d)=>e.jsxs("div",{className:"menu-tag bg_pink white",onClick:()=>T(s),children:["# ",s]},d))}),e.jsxs("div",{className:"orderer-list mgt25",children:[x.map(s=>e.jsxs("div",{className:"item",onClick:()=>z(s),children:[e.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",children:[e.jsx("path",{d:"M7 4h1V0H7v4zM5 2v2H4V2h1z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 6.5A1.5 1.5 0 011.5 5h9a1.5 1.5 0 011.415 1H13.5A1.5 1.5 0 0115 7.5v2a1.5 1.5 0 01-1.5 1.5H12v.5A3.5 3.5 0 018.5 15h-5A3.5 3.5 0 010 11.5v-5zM12 10h1.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5H12v3z",fill:"currentColor"})]}),s.name]},s.id)),k&&e.jsx("div",{className:"listloading",children:e.jsx("img",{className:"loading",alt:"loading",src:q})}),e.jsx("div",{ref:D})]})]})]})};export{Y as default};
