var F=Object.defineProperty,P=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var D=(e,t,a)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,T=(e,t)=>{for(var a in t||(t={}))x.call(t,a)&&D(e,a,t[a]);if(k)for(var a of k(t))R.call(t,a)&&D(e,a,t[a]);return e},q=(e,t)=>P(e,V(t));import{_ as B,l as M,u as N,r as z,o as j,a as C,t as L,b as i,c as Q,d as f,j as v,w as r,E as U,m,f as l,e as G,k as H,F as J,g as K,h as w,z as O,A as W}from"./index.dabb5305.js";import{u as X,r as Y}from"./table.6af03a03.js";const Z={name:"ClientTable",setup(){const e=M(null),t=N(),a=X();let o=z({agentAllows:[]});j(()=>{console.log("MedalTable onMounted"),c()});const c=async()=>{a.loading=!0,await y();let n=await C.listAgentDeny(a.query);Y(n,a),a.loading=!1},A=()=>{t.push({name:"agent-deny-form"})},g=n=>{t.push({path:"/agent-deny-form",query:{id:n}})},h=async n=>{let u=await C.deleteAgentDeny(n);U.success(u.msg),a.query.page=1,await c()},p=n=>{a.multipleSelection=n},_=n=>{a.query.page=n,c()},y=async()=>{let n=await C.listAllAgentAllow();o.agentAllows=n.data},s=()=>{a.query.family_id=""},b=(n,u)=>n.family.family;return q(T({},L(a)),{extraData:o,multipleTable:e,handleSelectionChange:p,handleAdd:A,handleEdit:g,handleDelete:h,fetchTableData:c,changePage:_,handleReset:s,formatColumnFamilyId:b})}},$=e=>(O("data-v-1119bb88"),e=e(),W(),e),ee={class:"nexus-table-header"},ae={class:"left"},te=w("Query"),le=w("Reset"),ne={class:"right"},oe=w("Add"),re=["onClick"],ie=$(()=>m("a",{style:{cursor:"pointer"}},"Delete",-1));function se(e,t,a,o,c,A){const g=i("el-option"),h=i("el-select"),p=i("el-form-item"),_=i("el-button"),y=i("el-form"),s=i("el-table-column"),b=i("el-popconfirm"),n=i("el-table"),u=i("el-pagination"),S=i("el-card"),I=Q("loading");return f(),v(S,{class:""},{header:r(()=>[m("div",ee,[m("div",ae,[l(y,{inline:!0,model:e.query},{default:r(()=>[l(p,{label:""},{default:r(()=>[l(h,{modelValue:e.query.family_id,"onUpdate:modelValue":t[0]||(t[0]=d=>e.query.family_id=d),filterable:"",placeholder:"Family"},{default:r(()=>[(f(!0),G(J,null,H(o.extraData.agentAllows,d=>(f(),v(g,{key:d.id,label:d.family,value:d.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(p,null,{default:r(()=>[l(_,{type:"primary",onClick:o.fetchTableData},{default:r(()=>[te]),_:1},8,["onClick"]),l(_,{type:"primary",onClick:o.handleReset},{default:r(()=>[le]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),m("div",ne,[l(_,{type:"primary",icon:"Plus",onClick:o.handleAdd},{default:r(()=>[oe]),_:1},8,["onClick"])])])]),default:r(()=>[K((f(),v(n,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark",onSelectionChange:o.handleSelectionChange},{default:r(()=>[l(s,{type:"selection",width:"55"}),l(s,{prop:"id",label:"Id",width:"50"}),l(s,{prop:"family_id",label:"Family",formatter:o.formatColumnFamilyId},null,8,["formatter"]),l(s,{prop:"name",label:"Name"}),l(s,{prop:"peer_id",label:"Peer id"}),l(s,{prop:"agent",label:"Agent"}),l(s,{label:"Action",width:"120"},{default:r(d=>[m("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:E=>o.handleEdit(d.row.id)},"Edit",8,re),l(b,{title:"Confirm Delete ?",onConfirm:E=>o.handleDelete(d.row.id)},{reference:r(()=>[ie]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[I,e.loading]]),l(u,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.perPage,"current-page":e.currentPage,onCurrentChange:o.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var me=B(Z,[["render",se],["__scopeId","data-v-1119bb88"]]);export{me as default};
