(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[11],{507:function(e,s,t){"use strict";var a=t(202),r=t.n(a),i=t(19),c=t(508).a(),o=t(29),n=t(285);const l=r.a.create({baseURL:i.a,timeout:6e4}),d="/auth/login";l.interceptors.request.use((e=>{const s=localStorage.getItem(o.b);return s&&(e.headers.authorization=s),s||e.headers["public-request"]||(c.push(d),window.location.reload()),e}),(e=>{n.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((e=>e.data),(e=>{let s={message:""};return 400!==e.response.status&&403!==e.response.status||(s.message="Authentication Fail",s.description="Please login again",localStorage.removeItem(o.b),c.push(d),window.location.reload()),404===e.response.status&&(s.message="Not Found"),500===e.response.status&&(s.message="Internal Server Error"),508===e.response.status&&(s.message="Time Out"),n.a.error(s),Promise.reject(e)}));var m=l;const u={login:function(e){return m({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return m({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};s.a=u},515:function(e,s,t){"use strict";var a=t(0),r=t(40),i=t(495),c=t(545),o=t(543),n=t(544),l=t(477),d=t(125),m=t(58),u=t(45),h=t(511),j=t(507),g=t(5);const p={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},e=>{let{getFieldValue:s}=e;return{validator:(e,t)=>t&&s("password")!==t?Promise.reject("Passwords do not match!"):Promise.resolve()}}]},b={showAuthMessage:m.c,hideAuthMessage:m.b,showLoading:m.d,authenticated:m.a};s.a=Object(r.b)((e=>{let{auth:s}=e;const{loading:t,message:a,showMessage:r,token:i,redirect:c}=s;return{loading:t,message:a,showMessage:r,token:i,redirect:c}}),b)((e=>{const{showLoading:s,token:t,loading:r,redirect:b,message:x,showMessage:O,hideAuthMessage:w,authenticated:f,allowRedirect:y}=e,[v]=o.a.useForm();let k=Object(u.g)();return Object(a.useEffect)((()=>{null!==t&&y&&k.push(b),O&&setTimeout((()=>{w()}),3e3)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(h.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(g.jsx)(n.a,{type:"error",showIcon:!0,message:x})}),Object(g.jsxs)(o.a,{form:v,layout:"vertical",name:"register-form",onFinish:()=>{v.validateFields().then((e=>{s();j.a.signUp(e).then((e=>{f("fakeToken")})).then((e=>{Object(m.c)(e)}))})).catch((e=>{console.log("Validate Failed:",e)}))},children:[Object(g.jsx)(o.a.Item,{name:"email",label:"Email",rules:p.email,hasFeedback:!0,children:Object(g.jsx)(l.a,{prefix:Object(g.jsx)(i.a,{className:"text-primary"})})}),Object(g.jsx)(o.a.Item,{name:"password",label:"Password",rules:p.password,hasFeedback:!0,children:Object(g.jsx)(l.a.Password,{prefix:Object(g.jsx)(c.a,{className:"text-primary"})})}),Object(g.jsx)(o.a.Item,{name:"confirm",label:"ConfirmPassword",rules:p.confirm,hasFeedback:!0,children:Object(g.jsx)(l.a.Password,{prefix:Object(g.jsx)(c.a,{className:"text-primary"})})}),Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(d.a,{type:"primary",htmlType:"submit",block:!0,loading:r,children:"Sign Up"})})]})]})}))},535:function(e,s,t){"use strict";t.r(s);t(0);var a=t(515),r=t(523),i=t(524),c=t(541),o=t(40),n=t(5);const l={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};s.default=e=>{const s=Object(o.d)((e=>e.theme.currentTheme));return Object(n.jsx)("div",{className:"h-100",style:l,children:Object(n.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(n.jsx)(r.a,{justify:"center",children:Object(n.jsx)(i.a,{xs:20,sm:20,md:20,lg:7,children:Object(n.jsx)(c.a,{children:Object(n.jsxs)("div",{className:"my-2",children:[Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("img",{className:"img-fluid",src:"/img/"+("light"===s?"logo.png":"logo-white.png"),alt:""}),Object(n.jsx)("p",{className:"text-muted",children:"Create a new account:"})]}),Object(n.jsx)(r.a,{justify:"center",children:Object(n.jsx)(i.a,{xs:24,sm:24,md:20,lg:20,children:Object(n.jsx)(a.a,{...e})})})]})})})})})})}}}]);
//# sourceMappingURL=11.9597edd3.chunk.js.map