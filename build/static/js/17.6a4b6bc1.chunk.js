(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[17],{529:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t(284),i=t(203),l=t(125),n=t(541),d=t(358),r=t(540),j=t(262),o=t(522),m=t(81),x=t(45),b=t(482),p=t(528),O=t(514),h=t(490),u=t(497),v=t(495),N=t(546),w=t(5);class C extends a.Component{render(){var e;const{data:s,visible:t,close:a}=this.props;return Object(w.jsxs)(b.a,{width:300,placement:"right",onClose:a,closable:!1,visible:t,children:[Object(w.jsxs)("div",{className:"text-center mt-3",children:[Object(w.jsx)(p.a,{size:80,src:null===s||void 0===s?void 0:s.img}),Object(w.jsx)("h3",{className:"mt-2 mb-0",children:null===s||void 0===s?void 0:s.name}),Object(w.jsx)("span",{className:"text-muted",children:null===s||void 0===s?void 0:s.username})]}),Object(w.jsx)(O.a,{dashed:!0}),Object(w.jsxs)("div",{className:"",children:[Object(w.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"Account details"}),Object(w.jsxs)("p",{children:[Object(w.jsx)(h.a,{}),Object(w.jsxs)("span",{className:"ml-3 text-dark",children:["id: ",null===s||void 0===s?void 0:s.id]})]})]}),Object(w.jsxs)("div",{className:"mt-5",children:[Object(w.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"CONTACT"}),Object(w.jsxs)("p",{children:[Object(w.jsx)(u.a,{}),Object(w.jsx)("span",{className:"ml-3 text-dark",children:null===s||void 0===s?void 0:s.phone})]}),Object(w.jsxs)("p",{children:[Object(w.jsx)(v.a,{}),Object(w.jsx)("span",{className:"ml-3 text-dark",children:null!==s&&void 0!==s&&s.email?null===s||void 0===s?void 0:s.email:"-"})]}),Object(w.jsxs)("p",{children:[Object(w.jsx)(N.a,{}),Object(w.jsxs)("span",{className:"ml-3 text-dark",children:[null===s||void 0===s?void 0:s.address.street," ",null===s||void 0===s?void 0:s.address.city]})]})]}),Object(w.jsxs)("div",{className:"mt-5",children:[Object(w.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"Social profiles"}),Object(w.jsxs)("p",{children:[Object(w.jsx)(N.a,{}),Object(w.jsx)("span",{className:"ml-3 text-dark",children:null===s||void 0===s?void 0:s.website})]}),Object(w.jsxs)("p",{children:[Object(w.jsx)(N.a,{}),Object(w.jsx)("span",{className:"ml-3 text-dark",children:null===s||void 0===s||null===(e=s.company)||void 0===e?void 0:e.name})]})]})]})}}var k=C;const y=e=>Object(w.jsx)(p.a,{...e,className:`ant-avatar-${e.type}`,children:e.text});var g=e=>{const{name:s,suffix:t,subTitle:a,id:c,type:i,src:l,icon:n,size:d,shape:r,gap:j,text:o,onNameClick:m}=e;return Object(w.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[y({icon:n,src:l,type:i,size:d,shape:r,gap:j,text:o}),Object(w.jsxs)("div",{className:"ml-2",children:[Object(w.jsxs)("div",{children:[m?Object(w.jsx)("div",{onClick:()=>m({name:s,subTitle:a,src:l,id:c}),className:"avatar-status-name clickable",children:s}):Object(w.jsx)("div",{className:"avatar-status-name",children:s}),Object(w.jsx)("span",{children:t})]}),Object(w.jsx)("div",{className:"text-muted avatar-status-subtitle",children:a})]})]})},f=t(40),z=t(143);s.default=()=>{const[e,s]=Object(a.useState)(!1),[t,b]=Object(a.useState)(null),p=Object(f.c)(),O=Object(x.g)(),{loading:h,users:u}=Object(f.d)((e=>e.user));Object(a.useEffect)((()=>{p(Object(z.d)())}),[p]);const v=[{title:"\u041a\u043b\u0438\u0435\u043d\u0442",dataIndex:"name",width:"150px",render:(e,s)=>Object(w.jsx)("div",{className:"d-flex",children:Object(w.jsx)(g,{src:s.img,name:`${s.name} ${s.username}`,subTitle:s.email})}),sorter:{compare:(e,s)=>(e=e.name.toLowerCase())>(s=s.name.toLowerCase())?-1:s>e?1:0}},{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",dataIndex:"phone",width:"150px",sorter:{compare:(e,s)=>e.phone.localeCompare(s.phone)}},{title:"\u0412\u0435\u0431\u0441\u0430\u0439\u0442",dataIndex:"website",sorter:{compare:(e,s)=>(e=e.website.toLowerCase())>(s=s.website.toLowerCase())?-1:s>e?1:0}},{title:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",dataIndex:"company",width:"180px",render:(e,s)=>{var t,a,c;return Object(w.jsxs)("span",{children:[null===(t=s.company)||void 0===t?void 0:t.name," ",Object(w.jsx)("br",{})," ",null===(a=s.company)||void 0===a?void 0:a.catchPhrase," ",null===(c=s.company)||void 0===c?void 0:c.bs]})},sorter:{compare:(e,s)=>(e=e.name.toLowerCase())>(s=s.name.toLowerCase())?-1:s>e?1:0}},{title:"",dataIndex:"actions",render:(e,t)=>Object(w.jsxs)("div",{className:"text-right",children:[Object(w.jsx)(i.a,{title:"View",children:Object(w.jsx)(l.a,{type:"primary",className:"mr-2",icon:Object(w.jsx)(j.a,{}),onClick:()=>{return e=t,s(!0),void b(e);var e},size:"small"})}),Object(w.jsx)(i.a,{title:"Delete",children:Object(w.jsx)(l.a,{danger:!0,icon:Object(w.jsx)(o.a,{}),onClick:()=>{return e=t.id,void c.b.success({content:`Deleted user ${e}`,duration:2});var e},size:"small"})})]})}];return Object(w.jsx)(n.a,{bodyStyle:{padding:"0px"},children:Object(w.jsxs)(d.a,{indicator:Object(w.jsx)(m.a,{spin:!0}),size:"large",spinning:h,children:[Object(w.jsx)(r.a,{columns:v,dataSource:u,rowKey:"id",onRow:e=>({onClick:()=>(e=>{O.push(`/app/clients/list/${e.id}`)})(e)})}),Object(w.jsx)(k,{data:t,visible:e,close:()=>{s(!1),b(null)}})]})})}}}]);
//# sourceMappingURL=17.6a4b6bc1.chunk.js.map