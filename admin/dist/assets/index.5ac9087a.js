var S=Object.defineProperty,k=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var f=(e,a,t)=>a in e?S(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,b=(e,a)=>{for(var t in a||(a={}))I.call(a,t)&&f(e,t,a[t]);if(g)for(var t of g(a))P.call(a,t)&&f(e,t,a[t]);return e},w=(e,a)=>k(e,M(a));import{_ as A,l as q,u as B,o as H,a as v,t as L,b as c,c as N,d as x,j as y,w as r,E as z,m as i,f as n,g as V,z as R,A as j,h as $}from"./index.dabb5305.js";import{u as F,r as G}from"./table.6af03a03.js";const J={name:"ExamTable",setup(){const e=q(null),a=B(),t=F();H(()=>{console.log("ExamTable onMounted"),s()});const s=async()=>{t.loading=!0;let l=await v.listExam(t.query);G(l,t),t.loading=!1},h=()=>{a.push({name:"exam-form"})},m=l=>{a.push({path:"/exam-form",query:{id:l}})},p=async l=>{let u=await v.deleteExam(l);z.success(u.msg),t.query.page=1,await s()},o=l=>{t.multipleSelection=l},_=l=>{t.query.page=l,s()};return w(b({},L(t)),{multipleTable:e,handleSelectionChange:o,handleAdd:h,handleEdit:m,handleDelete:p,fetchTableData:s,changePage:_})}},C=e=>(R("data-v-79667e75"),e=e(),j(),e),K={class:"nexus-table-header"},O=C(()=>i("div",{class:"left"},null,-1)),Q={class:"right"},U=$("Add"),W=["innerHTML"],X=["innerHTML"],Y=["onClick"],Z=C(()=>i("a",{style:{cursor:"pointer"}},"Delete",-1));function ee(e,a,t,s,h,m){const p=c("el-button"),o=c("el-table-column"),_=c("el-popconfirm"),l=c("el-table"),u=c("el-pagination"),T=c("el-card"),D=N("loading");return x(),y(T,{class:""},{header:r(()=>[i("div",K,[O,i("div",Q,[n(p,{type:"primary",icon:"Plus",onClick:s.handleAdd},{default:r(()=>[U]),_:1},8,["onClick"])])])]),default:r(()=>[V((x(),y(l,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark",onSelectionChange:s.handleSelectionChange},{default:r(()=>[n(o,{type:"selection",width:"55"}),n(o,{prop:"id",label:"Id",width:"50"}),n(o,{prop:"name",label:"Name"}),n(o,{label:"Indexes",width:"250px"},{default:r(d=>[i("p",{style:{"white-space":"pre-line"},innerHTML:d.row.indexes_formatted},null,8,W)]),_:1}),n(o,{prop:"begin",label:"Begin",width:"160"}),n(o,{prop:"end",label:"End",width:"160"}),n(o,{prop:"duration_text",label:"Duration"}),n(o,{label:"Target users",width:"350px"},{default:r(d=>[i("p",{style:{"white-space":"pre-line"},innerHTML:d.row.filters_formatted},null,8,X)]),_:1}),n(o,{prop:"is_discovered_text",label:"Discovered",width:"110"}),n(o,{prop:"priority",label:"Priority"}),n(o,{prop:"status_text",label:"Status"}),n(o,{label:"Action",width:"120"},{default:r(d=>[i("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:E=>s.handleEdit(d.row.id)},"Edit",8,Y),n(_,{title:"Confirm Delete ?",onConfirm:E=>s.handleDelete(d.row.id)},{reference:r(()=>[Z]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[D,e.loading]]),n(u,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.perPage,"current-page":e.currentPage,onCurrentChange:s.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var oe=A(J,[["render",ee],["__scopeId","data-v-79667e75"]]);export{oe as default};
