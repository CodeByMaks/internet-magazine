"use strict";(()=>{var e={};e.id=984,e.ids=[984,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4472:(e,t,r)=>{r.r(t),r.d(t,{config:()=>y,default:()=>j,getServerSideProps:()=>v,getStaticPaths:()=>C,getStaticProps:()=>w,reportWebVitals:()=>D,routeModule:()=>A,unstable_getServerProps:()=>T,unstable_getServerSideProps:()=>M,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>N,unstable_getStaticProps:()=>U});var o={};r.r(o),r.d(o,{default:()=>x});var n=r(7093),a=r(5244),s=r(1323),i=r(1777),d=r.n(i),u=r(5863),l=r.n(u),c=r(997),p=r(6689),m=r(3951),f=r(3843),g=r(6166);(function(){var e=Error("Cannot find module 'react-redux'");throw e.code="MODULE_NOT_FOUND",e})(),function(){var e=Error("Cannot find module 'react-router-dom'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}();let O=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,h=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;
`,_=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,b=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #6366f1;
  }
`,E=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  padding: 0.75rem;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4f46e5;
  }
`,P=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  background: none;
  border: none;
  color: #6366f1;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`,x=()=>{let[e,t]=(0,p.useState)(!0),[r,o]=(0,p.useState)({username:"",email:"",password:""}),[n,a]=(0,p.useState)(null),s=Object(function(){var e=Error("Cannot find module 'react-redux'");throw e.code="MODULE_NOT_FOUND",e}())(),i=Object(function(){var e=Error("Cannot find module 'react-router-dom'");throw e.code="MODULE_NOT_FOUND",e}())(),d=Object(function(){var e=Error("Cannot find module 'react-router-dom'");throw e.code="MODULE_NOT_FOUND",e}())(),u=e=>{let{name:t,value:r}=e.target;o(e=>({...e,[t]:r}))},l=async t=>{t.preventDefault(),a(null);try{if(e){let e=await f.ZP.post("/auth/login",{email:r.email,password:r.password});s((0,m.x4)(e.data));let t=d.state?.from?.pathname||"/";i(t,{replace:!0})}else{let e=await f.ZP.post("/auth/register",{...r,role:"user"});s((0,m.z2)(e.data)),i("/")}}catch(e){a(e.response?.data?.message||"Произошла ошибка при авторизации")}};return(0,c.jsxs)(O,{children:[c.jsx(h,{children:e?"Вход":"Регистрация"}),(0,c.jsxs)(_,{onSubmit:l,children:[!e&&c.jsx(b,{type:"text",name:"username",placeholder:"Имя пользователя",value:r.username,onChange:u,required:!0}),c.jsx(b,{type:"email",name:"email",placeholder:"Email",value:r.email,onChange:u,required:!0}),c.jsx(b,{type:"password",name:"password",placeholder:"Пароль",value:r.password,onChange:u,required:!0}),c.jsx(E,{type:"submit",children:e?"Войти":"Зарегистрироваться"})]}),c.jsx(P,{type:"button",onClick:()=>t(!e),children:e?"Нет аккаунта? Зарегистрируйтесь":"Уже есть аккаунт? Войдите"}),n&&c.jsx(g.Z,{message:n,type:"error"})]})},j=(0,s.l)(o,"default"),w=(0,s.l)(o,"getStaticProps"),C=(0,s.l)(o,"getStaticPaths"),v=(0,s.l)(o,"getServerSideProps"),y=(0,s.l)(o,"config"),D=(0,s.l)(o,"reportWebVitals"),U=(0,s.l)(o,"unstable_getStaticProps"),N=(0,s.l)(o,"unstable_getStaticPaths"),S=(0,s.l)(o,"unstable_getStaticParams"),T=(0,s.l)(o,"unstable_getServerProps"),M=(0,s.l)(o,"unstable_getServerSideProps"),A=new n.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/Auth",pathname:"/Auth",bundlePath:"",filename:""},components:{App:l(),Document:d()},userland:o})},5863:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let o=r(167),n=r(997),a=o._(r(6689)),s=r(6921);async function i(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,s.loadGetInitialProps)(t,r)}}class d extends a.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,n.jsx)(e,{...t})}}d.origGetInitialProps=i,d.getInitialProps=i,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3843:(e,t,r)=>{r.d(t,{HI:()=>i,ZP:()=>l,bm:()=>s}),function(){var e=Error("Cannot find module 'axios'");throw e.code="MODULE_NOT_FOUND",e}();let o=new Map,n=Object(function(){var e=Error("Cannot find module 'axios'");throw e.code="MODULE_NOT_FOUND",e}())({baseURL:(void 0).PROD?"https://internet-magazine-4jwp.vercel.app/api":"http://localhost:3002/api",headers:{"Content-Type":"application/json"},withCredentials:!0}),a=()=>{let e=document.cookie.split(";").find(e=>e.trim().startsWith("token="));return e?e.split("=")[1]:null},s=e=>{document.cookie=`token=${e}; path=/; secure; samesite=strict; max-age=86400`},i=()=>{document.cookie="token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"},d=e=>{let t=o.get(e);return t&&Date.now()-t.timestamp<3e5?t.data:null},u=(e,t)=>{o.set(e,{data:t,timestamp:Date.now()})};n.interceptors.request.use(e=>{if("get"===e.method){let t=d(e.url);if(t)return Promise.reject({__CACHE_HIT__:!0,data:t})}let t=a();return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),n.interceptors.response.use(e=>("get"===e.config.method&&u(e.config.url,e.data),e),async e=>e.__CACHE_HIT__?{data:e.data}:e.message&&e.message.includes("CORS")?(console.error("CORS ошибка:",e.message),Promise.reject(Error("Ошибка доступа к API"))):e.response?500===e.response.status?Promise.reject(Error("Ошибка сервера")):Promise.reject(e):e.config&&e.config.retryCount<3?(e.config.retryCount=(e.config.retryCount||0)+1,await new Promise(t=>setTimeout(t,1e3*e.config.retryCount)),n(e.config)):Promise.reject(Error("Ошибка сети")));let l=n},6166:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(997),n=r(6689);!function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}();let a=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem 2rem;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,s=({message:e,type:t="success",onClose:r})=>((0,n.useEffect)(()=>{if(r){let e=setTimeout(()=>{r()},3e3);return()=>clearTimeout(e)}},[r]),o.jsx(a,{style:{backgroundColor:"error"===t?"#f44336":"#4CAF50"},children:e}))},3951:(e,t,r)=>{r.d(t,{kS:()=>s,x4:()=>n,z2:()=>a}),function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}();var o=r(3843);let n=Object(function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}())("auth/login",async(e,{rejectWithValue:t})=>{try{let t=await o.ZP.post("/auth/login",e);return(0,o.bm)(t.data.token),t.data.user}catch(e){return console.error("Ошибка при входе:",{message:e.message,response:e.response?.data,status:e.response?.status}),t(e.response?.data?.message||e.message)}}),a=Object(function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}())("auth/register",async(e,{rejectWithValue:t})=>{try{let t=await o.ZP.post("/auth/register",e);return(0,o.bm)(t.data.token),t.data.user}catch(e){return console.error("Ошибка при регистрации:",{message:e.message,response:e.response?.data,status:e.response?.status}),t(e.response?.data?.message||e.message)}}),s=Object(function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}())("auth/logout",async(e,{rejectWithValue:t})=>{try{return await o.ZP.post("/auth/logout"),(0,o.HI)(),null}catch(e){return console.error("Ошибка при выходе:",{message:e.message,response:e.response?.data,status:e.response?.status}),t(e.response?.data?.message||e.message)}}),i=Object(function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}())({name:"auth",initialState:{user:null,loading:!1,error:null,isAuthenticated:!1},reducers:{clearError:e=>{e.error=null}},extraReducers:e=>{e.addCase(n.pending,e=>{e.loading=!0,e.error=null}).addCase(n.fulfilled,(e,t)=>{e.loading=!1,e.user=t.payload,e.isAuthenticated=!0}).addCase(n.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}).addCase(a.pending,e=>{e.loading=!0,e.error=null}).addCase(a.fulfilled,(e,t)=>{e.loading=!1,e.user=t.payload,e.isAuthenticated=!0}).addCase(a.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}).addCase(s.fulfilled,e=>{e.user=null,e.isAuthenticated=!1})}}),{clearError:d}=i.actions;i.reducer},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[777],()=>r(4472));module.exports=o})();