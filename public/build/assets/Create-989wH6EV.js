import{T as f,o as m,f as n,a as s,u as l,w as u,F as c,Z as g,b as a,e as b,i as v,A as x,B as k,n as y,d as w,t as j}from"./app-e4NMnGsl.js";import{_ as V}from"./AuthenticatedLayout-sYdvXuD0.js";import{_ as r,b as i,a as d}from"./TextInput-zFIjD9AZ.js";import{P as h}from"./PrimaryButton-O4RpLPuI.js";import"./ApplicationLogo-dZLy_dZq.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const N=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"New Project",-1),B={class:"py-12"},S={class:"max-w-md mx-auto sm:px-6 lg:px-8 bg-white"},P=["value"],U={class:"mt-2"},$={class:"flex items-center justify-end mt-4"},T={__name:"Create",props:{skills:Array},setup(p){const e=f({name:"",image:null,skill_id:"",project_url:""}),_=()=>{e.post(route("projects.store"))};return(C,o)=>(m(),n(c,null,[s(l(g),{title:"New Project"}),s(V,null,{header:u(()=>[N]),default:u(()=>[a("div",B,[a("div",S,[a("form",{class:"b-4",onSubmit:b(_,["prevent"])},[a("div",null,[s(r,{for:"skill_id",value:"Skill"}),v(a("select",{"onUpdate:modelValue":o[0]||(o[0]=t=>l(e).skill_id=t),id:"skill_id",name:"skill_id",class:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"},[(m(!0),n(c,null,k(p.skills,t=>(m(),n("option",{key:t.id,value:t.id},j(t.name),9,P))),128))],512),[[x,l(e).skill_id]]),s(i,{class:"mt-2",message:l(e).errors.skill_id},null,8,["message"])]),a("div",null,[s(r,{for:"name",value:"Name"}),s(d,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:l(e).name,"onUpdate:modelValue":o[1]||(o[1]=t=>l(e).name=t),autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(i,{class:"mt-2",message:l(e).errors.name},null,8,["message"])]),a("div",null,[s(r,{for:"project_url",value:"URL"}),s(d,{id:"project_url",type:"text",class:"mt-1 block w-full",modelValue:l(e).project_url,"onUpdate:modelValue":o[2]||(o[2]=t=>l(e).project_url=t),autocomplete:"project_url"},null,8,["modelValue"]),s(i,{class:"mt-2",message:l(e).errors.project_url},null,8,["message"])]),a("div",U,[s(r,{for:"image",value:"Image"}),s(d,{id:"image",type:"file",class:"mt-1 block w-full",onInput:o[3]||(o[3]=t=>l(e).image=t.target.files[0])}),s(i,{class:"mt-2",message:l(e).errors.image},null,8,["message"])]),a("div",$,[s(h,{class:y(["ms-4",{"opacity-25":l(e).processing}]),disabled:l(e).processing},{default:u(()=>[w(" Store ")]),_:1},8,["class","disabled"])])],32)])])]),_:1})],64))}};export{T as default};
