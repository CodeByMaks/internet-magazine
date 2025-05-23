"use strict";(()=>{var e={};e.id=12,e.ids=[12,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},418:(e,t,r)=>{r.r(t),r.d(t,{config:()=>w,default:()=>U,getServerSideProps:()=>D,getStaticPaths:()=>P,getStaticProps:()=>N,reportWebVitals:()=>C,routeModule:()=>L,unstable_getServerProps:()=>A,unstable_getServerSideProps:()=>T,unstable_getStaticParams:()=>M,unstable_getStaticPaths:()=>F,unstable_getStaticProps:()=>S});var o={};r.r(o),r.d(o,{default:()=>v});var n=r(7093),i=r(5244),a=r(1323),d=r(1777),s=r.n(d),l=r(5863),c=r.n(l),u=r(997);r(6689);var m=r(5326),p=r(5086);(function(){var e=Error("Cannot find module 'react-redux'");throw e.code="MODULE_NOT_FOUND",e})(),function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '__barrel_optimize__?names=FaShoppingCart,FaTrash!=!react-icons/fa'");throw e.code="MODULE_NOT_FOUND",e}();let f=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 2rem;
`,O=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`,h=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`,_=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,b=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  padding: 1rem;
`,g=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: #333;
`,y=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
`,x=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  display: flex;
  gap: 0.5rem;
`,E=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.2s;

  &.primary {
    background: #3498db;
    color: white;

    &:hover {
      background: #2980b9;
    }
  }

  &.danger {
    background: #e74c3c;
    color: white;

    &:hover {
      background: #c0392b;
    }
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,j=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  text-align: center;
  padding: 2rem;
  color: #666;
`,v=()=>{let e=Object(function(){var e=Error("Cannot find module 'react-redux'");throw e.code="MODULE_NOT_FOUND",e}())(),{items:t}=Object(function(){var e=Error("Cannot find module 'react-redux'");throw e.code="MODULE_NOT_FOUND",e}())(e=>e.wishlist),r=t=>{e((0,m.$f)(t))},o=t=>{e((0,p.Xq)({...t,quantity:1})),e((0,m.$f)(t.id))};return t.length?(0,u.jsxs)(f,{children:[u.jsx("h1",{children:"Избранное"}),u.jsx(O,{children:t.map(e=>(0,u.jsxs)(h,{children:[u.jsx(_,{src:e.image,alt:e.name}),(0,u.jsxs)(b,{children:[u.jsx(g,{children:e.name}),(0,u.jsxs)(y,{children:[e.price.toLocaleString("ru-RU")," ₽"]}),(0,u.jsxs)(x,{children:[(0,u.jsxs)(E,{className:"primary",onClick:()=>o(e),disabled:!e.stock,children:[u.jsx(Object(function(){var e=Error("Cannot find module '__barrel_optimize__?names=FaShoppingCart,FaTrash!=!react-icons/fa'");throw e.code="MODULE_NOT_FOUND",e}()),{}),e.stock?"В корзину":"Нет в наличии"]}),(0,u.jsxs)(E,{className:"danger",onClick:()=>r(e.id),children:[u.jsx(Object(function(){var e=Error("Cannot find module '__barrel_optimize__?names=FaShoppingCart,FaTrash!=!react-icons/fa'");throw e.code="MODULE_NOT_FOUND",e}()),{}),"Удалить"]})]})]})]},e.id))})]}):u.jsx(f,{children:(0,u.jsxs)(j,{children:[u.jsx("h2",{children:"Избранное пусто"}),u.jsx("p",{children:"Добавьте товары в избранное, чтобы вернуться к ним позже"})]})})},U=(0,a.l)(o,"default"),N=(0,a.l)(o,"getStaticProps"),P=(0,a.l)(o,"getStaticPaths"),D=(0,a.l)(o,"getServerSideProps"),w=(0,a.l)(o,"config"),C=(0,a.l)(o,"reportWebVitals"),S=(0,a.l)(o,"unstable_getStaticProps"),F=(0,a.l)(o,"unstable_getStaticPaths"),M=(0,a.l)(o,"unstable_getStaticParams"),A=(0,a.l)(o,"unstable_getServerProps"),T=(0,a.l)(o,"unstable_getServerSideProps"),L=new n.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/Wishlist",pathname:"/Wishlist",bundlePath:"",filename:""},components:{App:c(),Document:s()},userland:o})},5863:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let o=r(167),n=r(997),i=o._(r(6689)),a=r(6921);async function d(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,a.loadGetInitialProps)(t,r)}}class s extends i.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,n.jsx)(e,{...t})}}s.origGetInitialProps=d,s.getInitialProps=d,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5086:(e,t,r)=>{r.d(t,{$R:()=>a,LL:()=>d,Rt:()=>s,Xq:()=>n,h2:()=>i}),function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}();let o=Object(function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}())({name:"cart",initialState:{items:[],total:0,status:"idle",error:null,lastAction:null},reducers:{addToCart:(e,t)=>{let r=e.items.find(e=>e.id===t.payload.id);r?r.quantity+=1:e.items.push({...t.payload,quantity:1}),e.total=e.items.reduce((e,t)=>e+t.price*t.quantity,0),e.lastAction={type:"add",item:t.payload}},removeFromCart:(e,t)=>{let r=e.items.find(e=>e.id===t.payload);e.items=e.items.filter(e=>e.id!==t.payload),e.total=e.items.reduce((e,t)=>e+t.price*t.quantity,0),e.lastAction={type:"remove",item:r}},updateQuantity:(e,t)=>{let{id:r,quantity:o}=t.payload,n=e.items.find(e=>e.id===r);if(n){let t=n.quantity;n.quantity=Math.max(1,Math.min(o,n.stock||99)),e.total=e.items.reduce((e,t)=>e+t.price*t.quantity,0),e.lastAction={type:"update",item:n,oldQuantity:t,newQuantity:n.quantity}}},clearCart:e=>{let t=[...e.items];e.items=[],e.total=0,e.lastAction={type:"clear",items:t}},undoLastAction:e=>{if(e.lastAction){switch(e.lastAction.type){case"add":e.items=e.items.filter(t=>t.id!==e.lastAction.item.id);break;case"remove":e.items.push(e.lastAction.item);break;case"update":let t=e.items.find(t=>t.id===e.lastAction.item.id);t&&(t.quantity=e.lastAction.oldQuantity);break;case"clear":e.items=e.lastAction.items}e.total=e.items.reduce((e,t)=>e+t.price*t.quantity,0),e.lastAction=null}},setError:(e,t)=>{e.error=t.payload,e.status="error"},clearError:e=>{e.error=null,e.status="idle"}}}),{addToCart:n,removeFromCart:i,updateQuantity:a,clearCart:d,undoLastAction:s,setError:l,clearError:c}=o.actions;o.reducer},5326:(e,t,r)=>{r.d(t,{$f:()=>i,Mp:()=>n}),function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}();let o=Object(function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}())({name:"wishlist",initialState:{items:[],status:"idle",error:null},reducers:{addToWishlist:(e,t)=>{e.items.find(e=>e.id===t.payload.id)||e.items.push(t.payload)},removeFromWishlist:(e,t)=>{e.items=e.items.filter(e=>e.id!==t.payload)},clearWishlist:e=>{e.items=[]}}}),{addToWishlist:n,removeFromWishlist:i,clearWishlist:a}=o.actions;o.reducer},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[777],()=>r(418));module.exports=o})();