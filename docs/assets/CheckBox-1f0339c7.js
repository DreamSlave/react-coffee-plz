import{r as a,j as o}from"./index-9fa57f77.js";const i=({children:r,checked:t,onChange:e})=>{const[n,s]=a.useState(t);a.useEffect(()=>{s(t)},[t]);const x=c=>{const h=c.target.checked;s(h),e&&e(c)};return o.jsxs("label",{children:[o.jsx("input",{type:"checkbox",checked:n,onChange:x}),r]})};export{i as C};
