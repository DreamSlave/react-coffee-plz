import{r as t,u as _,j as e,C as A,b as u,c as D}from"./index-c762bf3a.js";import{s as z}from"./search-ic-461cbee7.js";import{A as M,a as y}from"./api.config-7a1e0839.js";const B="/react-coffee-plz/assets/listloading-56b54439.gif";function G({partyNo:i,cafeId:m,menu:n,orderer:a,show:p,toggleShowPopup:f}){const[o,j]=t.useState(""),N=_(),h=r=>{j(r.target.value)},v=async()=>{let r=n.id===0?o:n.name;if(r.trim()==="")return alert("메뉴명을 확인해주세요."),!1;if(n.id===0&&r==="욜룔룔룔료")return alert("이스터 에그 팝업!"),!1;let g={userId:a.userId,menuId:n.id===0?"":n.id,menuNm:r,cafeId:m,partyId:i};M.put(`${y.defaultDomain}/order/save`,g).then(l=>{if(!l||!l.ok){alert(`처리 실패하였습니다.
관리자에게 문의해주세요.`);return}N(`/order/complete/${a.partyNo}/${encodeURIComponent(r)}/${encodeURIComponent(a.name)}/${encodeURIComponent(a.team)}/${encodeURIComponent(a.rank)}`)}).catch(l=>{console.error("[/order/save] Error occurred ::: ",l)})};return e.jsx(A,{in:p,timeout:5e3,className:"fade",children:e.jsx("div",{children:e.jsx("div",{id:"popup",className:"popup",children:e.jsxs("div",{className:"pop_confirm",children:[e.jsx("h2",{children:"선택한 메뉴를 확인해주세요."}),e.jsxs("div",{className:"person-info",children:[a.name," ",a.rank,"(",a.team,")"]}),n.id===0?e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"메뉴명 입력",value:o,onChange:h,className:"mgt10 mgb5"}),e.jsx("div",{className:"point mgb25",children:"작성하기 전에 진짜 없는 메뉴인지 확인하셨나요?"})]}):e.jsx("div",{className:"menunm",children:n.name}),e.jsx("div",{className:"btn-area",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("div",{className:"large-btn bg_sub point",onClick:f,children:"취소"})}),e.jsx("li",{children:e.jsx("div",{className:"large-btn",onClick:v,children:"확인"})})]})})]})})})})}const H=()=>{const i={partyNo:u(s=>s.order.partyNo),userId:u(s=>s.order.userId),name:u(s=>s.order.name),team:u(s=>s.order.team),rank:u(s=>s.order.rank)},[m,n]=t.useState(""),[a,p]=t.useState(""),[f,o]=t.useState([]),[j,N]=t.useState(""),[h,v]=t.useState(),[r]=t.useState(["아이스","핫","라떼","에이드","샷추가","생과일","아메리카노"]),[g,l]=t.useState(!1),[b,S]=t.useState(1),[L,P]=t.useState(!0),[I,C]=t.useState(!1),x=t.useRef(null);t.useRef(null),D(),t.useEffect(()=>{U(b)},[a,b]);const $=s=>{n(s.target.value)},R=()=>{p(m),S(1),o([])},w=s=>{n(s),p(s),S(1)},U=s=>{C(!0),M.get(`${y.defaultDomain}/menu/info/${i.partyNo}?page=${s}&searchTag=${a}`).then(d=>{const c=d.data;c.content&&c.content.length>0&&N(c.content[0].cafeId),P(s===c.totalPages||c.totalPages===0),o(s===1?[{id:0,name:"직접입력"},{id:99,name:"괜찮습니다."},...c.content]:T=>[...T,...c.content]),C(!1)})},k=()=>{l(s=>!s)},V=s=>{k(),v(s)},E=t.useCallback(s=>{I||L||(x.current&&x.current.disconnect(),x.current=new IntersectionObserver(d=>{d[0].isIntersecting&&S(c=>c+1)},{rootMargin:"0px 0px 100px 0px"}),s&&x.current.observe(s))},[I]);return e.jsxs("div",{children:[g&&h&&e.jsx(G,{partyNo:i.partyNo,cafeId:j,menu:h,orderer:i,show:g,toggleShowPopup:k}),e.jsxs("div",{id:"order",className:"element selectmenu",children:[e.jsxs("h1",{children:[e.jsx("span",{className:"point",children:"메뉴를"}),e.jsx("br",{}),"선택해주세요."]}),e.jsxs("div",{className:"person-info bg_sub point",children:[i.name," ",i.rank,"(",i.team,")"]}),e.jsxs("div",{className:"form-search mgt25 mgb15",children:[e.jsx("div",{className:"input",children:e.jsx("input",{type:"text",placeholder:"검색",value:m,onChange:$,className:""})}),e.jsx("div",{className:"btn",children:e.jsx("img",{className:"search-ic",alt:"Search ic",src:z,onClick:R})})]}),e.jsx("div",{className:"tag-group",children:r.map((s,d)=>e.jsxs("div",{className:"menu-tag bg_pink white",onClick:()=>w(s),children:["# ",s]},d))}),e.jsxs("div",{className:"orderer-list mgt25",children:[f.map(s=>e.jsx("div",{className:"item",onClick:()=>V(s),children:s.name},s.id)),I&&e.jsx("div",{className:"listloading",children:e.jsx("img",{className:"loading",alt:"loading",src:B})}),e.jsx("div",{ref:E})]})]})]})};export{H as default};
