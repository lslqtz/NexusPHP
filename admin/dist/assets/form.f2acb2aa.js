var U=Object.defineProperty,q=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var y=(a,e,n)=>e in a?U(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,D=(a,e)=>{for(var n in e||(e={}))C.call(e,n)&&y(a,n,e[n]);if(g)for(var n of g(e))R.call(e,n)&&y(a,n,e[n]);return a},V=(a,e)=>q(a,B(e));import{_ as F,s as $,l as N,v as j,u as E,r as G,B as I,o as L,a as i,x as M,t as P,b as u,d as c,e as w,f as t,w as r,F as S,k as T,h as z,j as H}from"./index.dabb5305.js";const J={name:"AgentAllowForm",setup(){const{proxy:a}=$();console.log("proxy",a);const e=N(null),n=j(),f=E(),{id:s}=n.query,m=G({token:I("token")||"",id:s,agentAllows:[],formData:{family_id:"",name:"",peer_id:"",agent:"",comment:""},rules:{family_id:[{required:"true"}],name:[{required:"true"}],peer_id:[{required:"true"}],agent:[{required:"true"}]}});L(async()=>{await _(),s&&i.getAgentDeny(s).then(l=>{m.formData.family_id=l.data.family_id,m.formData.name=l.data.name,m.formData.peer_id=l.data.peer_id,m.formData.agent=l.data.agent,m.formData.comment=l.data.comment})}),M(()=>{});const p=()=>{e.value.validate(async l=>{if(l){let d=m.formData;console.log(d),s?await i.updateAgentDeny(s,d):await i.storeAgentDeny(d),await f.push({name:"agent-deny"})}})},_=async()=>{let l=await i.listAllAgentAllow();m.agentAllows=l.data};return V(D({},P(m)),{formRef:e,submitAdd:p})}},K=z("Submit");function O(a,e,n,f,s,m){const p=u("el-option"),_=u("el-select"),l=u("el-form-item"),d=u("el-input"),A=u("el-button"),b=u("el-form"),v=u("el-col"),k=u("el-row");return c(),w("div",null,[t(k,null,{default:r(()=>[t(v,{span:12},{default:r(()=>[t(b,{model:a.formData,rules:a.rules,ref:"formRef","label-width":"200px",class:"formData"},{default:r(()=>[t(l,{label:"Family",prop:"family_id"},{default:r(()=>[t(_,{modelValue:a.formData.family_id,"onUpdate:modelValue":e[0]||(e[0]=o=>a.formData.family_id=o),filterable:""},{default:r(()=>[(c(!0),w(S,null,T(a.agentAllows,o=>(c(),H(p,{key:o.id,label:o.family,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(l,{label:"Name",prop:"name"},{default:r(()=>[t(d,{modelValue:a.formData.name,"onUpdate:modelValue":e[1]||(e[1]=o=>a.formData.name=o),placeholder:""},null,8,["modelValue"])]),_:1}),t(l,{label:"Peer id",prop:"peer_id"},{default:r(()=>[t(d,{modelValue:a.formData.peer_id,"onUpdate:modelValue":e[2]||(e[2]=o=>a.formData.peer_id=o),placeholder:""},null,8,["modelValue"])]),_:1}),t(l,{label:"Agent",prop:"agent"},{default:r(()=>[t(d,{modelValue:a.formData.agent,"onUpdate:modelValue":e[3]||(e[3]=o=>a.formData.agent=o),placeholder:""},null,8,["modelValue"])]),_:1}),t(l,{label:"Comment",prop:"comment"},{default:r(()=>[t(d,{type:"textarea",modelValue:a.formData.comment,"onUpdate:modelValue":e[4]||(e[4]=o=>a.formData.comment=o),placeholder:""},null,8,["modelValue"])]),_:1}),t(l,null,{default:r(()=>[t(A,{type:"primary",onClick:e[5]||(e[5]=o=>f.submitAdd())},{default:r(()=>[K]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})])}var X=F(J,[["render",O]]);export{X as default};
