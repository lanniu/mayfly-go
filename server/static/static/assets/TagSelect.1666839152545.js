var y=Object.defineProperty,T=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var m=(a,t,s)=>t in a?y(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,p=(a,t)=>{for(var s in t||(t={}))v.call(t,s)&&m(a,s,t[s]);if(h)for(var s of h(t))w.call(t,s)&&m(a,s,t[s]);return a},g=(a,t)=>T(a,C(t));import{A as e}from"./Api.1666839152545.js";import{t as S}from"./api.16668391525452.js";import{d as N,c as P,e as V,t as b,_ as x,k as u,m as f,p as A,q as F,w as I,y as n,A as d,D as l,v as B,z as $}from"./index.1666839152545.js";const J={list:e.create("/machines","get"),getMachinePwd:e.create("/machines/{id}/pwd","get"),info:e.create("/machines/{id}/sysinfo","get"),stats:e.create("/machines/{id}/stats","get"),process:e.create("/machines/{id}/process","get"),killProcess:e.create("/machines/{id}/process","delete"),closeCli:e.create("/machines/{id}/close-cli","delete"),saveMachine:e.create("/machines","post"),changeStatus:e.create("/machines/{id}/{status}","put"),del:e.create("/machines/{id}","delete"),scripts:e.create("/machines/{machineId}/scripts","get"),runScript:e.create("/machines/{machineId}/scripts/{scriptId}/run","get"),saveScript:e.create("/machines/{machineId}/scripts","post"),deleteScript:e.create("/machines/{machineId}/scripts/{scriptId}","delete"),files:e.create("/machines/{id}/files","get"),lsFile:e.create("/machines/{machineId}/files/{fileId}/read-dir","get"),rmFile:e.create("/machines/{machineId}/files/{fileId}/remove","delete"),uploadFile:e.create("/machines/{machineId}/files/{fileId}/upload?token={token}","post"),fileContent:e.create("/machines/{machineId}/files/{fileId}/read","get"),createFile:e.create("/machines/{machineId}/files/{id}/create-file","post"),updateFileContent:e.create("/machines/{machineId}/files/{id}/write","post"),addConf:e.create("/machines/{machineId}/files","post"),delConf:e.create("/machines/{machineId}/files/{id}","delete"),terminal:e.create("/api/machines/{id}/terminal","get"),recDirNames:e.create("/machines/rec/names","get")},z=N({name:"TagSelect",props:{tagId:{type:Number},tagPath:{type:String}},setup(a,{emit:t}){const s=P({tags:[],selectTags:null});V(async()=>{a.tagId&&(s.selectTags=a.tagId),s.tags=await S.getTagTrees.request(null)});const r=(i,o)=>{o.checkedNodes.length>0?(t("update:tagId",i.id),t("update:tagPath",i.codePath),t("changeTag",i)):(t("update:tagId",null),t("update:tagPath",null))};return g(p({},b(s)),{changeTag:r})}}),D={class:"custom-tree-node"},M={style:{"font-size":"13px"}},q=n("span",{style:{color:"#3c8dbc"}},"\u3010",-1),E=n("span",{style:{color:"#3c8dbc"}},"\u3011",-1);function R(a,t,s,r,i,o){const _=u("el-tag"),k=u("el-tree-select");return f(),A("div",null,[F(k,{onCheck:a.changeTag,style:{width:"100%"},modelValue:a.selectTags,"onUpdate:modelValue":t[0]||(t[0]=c=>a.selectTags=c),data:a.tags,"render-after-expand":!0,"default-expanded-keys":[a.selectTags],"show-checkbox":"","check-strictly":"","node-key":"id",props:{value:"id",label:"codePath",children:"children"}},{default:I(({data:c})=>[n("span",D,[n("span",M,[d(l(c.code)+" ",1),q,d(" "+l(c.name)+" ",1),E,c.children!==null?(f(),B(_,{key:0,size:"small"},{default:I(()=>[d(l(c.children.length),1)]),_:2},1024)):$("",!0)])])]),_:1},8,["onCheck","modelValue","data","default-expanded-keys"])])}var K=x(z,[["render",R]]);export{K as T,J as m};