import{r as a,a as d,j as e}from"./index-9fa57f77.js";/* empty css              */import{D as m,e as t,k as x}from"./react-datepicker-14f8a5cb.js";const v=()=>{const[l,r]=a.useState(new Date),[n,c]=a.useState(new Date),i=s=>{console.log("data",s)},o=d(s=>s.party);return console.log(":partyInfo:",o),e.jsxs("div",{id:"party",className:"element",children:[e.jsxs("h1",{children:["본격적으로",e.jsx("br",{}),e.jsx("span",{className:"point",children:"파티를 생성"}),"합니다."]}),e.jsxs("div",{className:"form-area",children:[e.jsxs("div",{className:"input",children:[e.jsx("div",{className:"label",children:"파티명"}),e.jsx("input",{type:"text",placeholder:"파티명을 입력하세요.",className:""})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"카페선택"}),e.jsx(m,{onChange:s=>i(s.id),dataItem:[{value:"메가커피",id:"001"},{value:"컴포즈커피",id:"002"}]})]}),e.jsxs("div",{className:"form_date mgb10",children:[e.jsx("div",{className:"label",children:"마감설정"}),e.jsx(t,{locale:x,dateFormat:"yyyy/MM/dd",shouldCloseOnSelect:!0,className:"",selected:l,minDate:new Date,onChange:s=>r(s)}),e.jsx("div",{className:"btn",children:e.jsx("img",{src:"/src/assets/img/calendar_ic.png"})})]}),e.jsxs("div",{className:"form_date mgb10",children:[e.jsx(t,{selected:n,onChange:s=>c(s),showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",dateFormat:"hh:mm aa"}),e.jsx("div",{className:"btn",children:e.jsx("img",{src:"/src/assets/img/clock_ic.png"})})]})]}),e.jsx("footer",{id:"footer",children:e.jsx("div",{className:"large-btn",children:"미리보기"})})]})};export{v as default};
