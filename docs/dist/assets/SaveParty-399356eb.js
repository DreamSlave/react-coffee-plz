import{r as s,b as d,j as e}from"./index-74a8c02d.js";/* empty css              */import{D as m,e as t,k as h}from"./react-datepicker-6c1c46bf.js";const u=()=>{const[l,r]=s.useState(new Date),[i,n]=s.useState(new Date),o=a=>{console.log("data",a)},c=d(a=>a.party);return console.log(":partyInfo:",c),e.jsxs("div",{id:"party",className:"element",children:[e.jsxs("h1",{children:["본격적으로",e.jsx("br",{}),e.jsx("span",{className:"point",children:"파티를 생성"}),"합니다."]}),e.jsxs("div",{className:"form-area",children:[e.jsxs("div",{className:"input",children:[e.jsx("div",{className:"label",children:"파티명"}),e.jsx("input",{type:"text",placeholder:"파티명을 입력하세요.",className:""})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"카페선택"}),e.jsx("div",{className:"select",children:e.jsx(m,{onChange:a=>o(a.id),itemKey:"id",itemValue:"value",dataItem:[{value:"메가커피",id:"001"},{value:"컴포즈커피",id:"002"}]})})]}),e.jsxs("div",{className:"form_date mgb10",children:[e.jsx("div",{className:"label",children:"마감설정"}),e.jsx(t,{locale:h,dateFormat:"yyyy/MM/dd",shouldCloseOnSelect:!0,className:"datepicker",selected:l,minDate:new Date,onChange:a=>r(a)})]}),e.jsx("div",{className:"form_date mgb10",children:e.jsx(t,{className:"timepicker",selected:i,onChange:a=>n(a),showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",dateFormat:"hh:mm aa"})})]}),e.jsx("footer",{id:"footer",children:e.jsx("div",{className:"large-btn",children:"미리보기"})})]})};export{u as default};
