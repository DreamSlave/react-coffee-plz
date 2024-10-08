import{r as n,b as E,u as L,a as A,j as s,e as V}from"./index-5d16f4e5.js";import{D as R,e as x,k as _}from"./react-datepicker-cc0428f4.js";import{A as F,a as O}from"./api.config-7a1e0839.js";const $=()=>{const h=n.useRef(!0),[i,p]=n.useState(new Date),[c,m]=n.useState(new Date),[l,D]=n.useState(""),[N,u]=n.useState(1),[d,f]=n.useState(""),[y,j]=n.useState([]),[T,o]=n.useState(!0),a=E(e=>e.party);n.useEffect(()=>{(async()=>{if(h.current)try{const t=await v();j(t),a.partyName&&(console.log(":partyInfo:",a),D(a.partyName)),a.cafeId?(f(a.cafeName),u(a.cafeId)):t.length>0&&(f(t[0].cafeName),u(t[0].cafeId)),a.endDate&&p(M(a.endDate)),a.endTime?m(H(a.endTime)):m(P()),h.current=!1}catch(t){console.error(t)}})()},[a]),n.useEffect(()=>{o(l!==""&&d!=="");const e=new Date,t=c.getTime()-e.getTime();i.getTime()>e.getTime()?o(!0):setTimeout(()=>{c.getTime()-e.getTime()>1e3*60?o(!0):o(!1)},t)},[l,d,i,c]);function v(){return F.get(`${O.defaultDomain}/cafe/info`).then(e=>e.data)}const S=e=>{D(e.target.value)},w=e=>{const t=y.find(r=>r.cafeId===e.cafeId);f(String(t==null?void 0:t.cafeName)??""),u(Number(t==null?void 0:t.cafeId)??1)},I=L(),b=A(),C=function(){const e=i.toLocaleDateString("en-CA").replace(/-/g,""),t=c.toLocaleTimeString("en-US",{hour12:!1}).slice(0,-3).replace(":","");console.log(":yyyymmdd:",e),console.log(":HHmm:",t),b(V(l,N,d,e,t)),I("/party/preview")};function M(e){const t=parseInt(e.substring(0,4),10),r=parseInt(e.substring(4,6),10)-1,g=parseInt(e.substring(6,8),10);return new Date(t,r,g)}function H(e){const t=new Date,r=parseInt(e.substring(0,2),10),g=parseInt(e.substring(2,4),10);return t.setHours(r),t.setMinutes(g),t}function P(){const e=new Date,t=e.getMinutes(),r=Math.ceil(t/15)*15;return r===60?(e.setHours(e.getHours()+1),e.setMinutes(0)):e.setMinutes(r),e.setSeconds(0),e.setMilliseconds(0),e}const k=()=>{const e=new Date;return(i==null?void 0:i.toDateString())===e.toDateString()?e:new Date(0,0,0,0,0)};return s.jsxs("div",{id:"party",className:"element",children:[s.jsxs("h1",{children:["본격적으로",s.jsx("br",{}),s.jsx("span",{className:"point",children:"파티를 생성"}),"합니다."]}),s.jsxs("div",{className:"form-area",children:[s.jsxs("div",{className:"input",children:[s.jsx("div",{className:"label",children:"파티명"}),s.jsx("input",{type:"text",placeholder:"파티명을 입력하세요.",className:"",value:l,onChange:S})]}),s.jsxs("div",{children:[s.jsx("div",{className:"label",children:"카페선택"}),s.jsx("div",{className:"select",children:s.jsx(R,{onChange:e=>w(e),dataItem:y,itemKey:"cafeId",itemValue:"cafeName",defaultValue:N})})]}),s.jsxs("div",{className:"form_date mgb10",children:[s.jsx("div",{className:"label",children:"마감설정"}),s.jsx(x,{locale:_,dateFormat:"yyyy/MM/dd",shouldCloseOnSelect:!0,className:"datepicker",selected:i,minDate:new Date,onChange:e=>p(e)})]}),s.jsx("div",{className:"form_date mgb10",children:s.jsx(x,{className:"timepicker",selected:c,onChange:e=>m(e),showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",dateFormat:"hh:mm aa",minTime:k(),maxTime:new Date(0,0,0,23,59)})})]}),s.jsx("footer",{id:"footer",children:T?s.jsx("div",{className:"large-btn",onClick:C,children:"미리보기"}):s.jsx("div",{className:"large-btn bg_gray",children:"미리보기"})})]})};export{$ as default};
