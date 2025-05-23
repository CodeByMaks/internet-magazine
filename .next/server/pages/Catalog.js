"use strict";(()=>{var e={};e.id=586,e.ids=[586,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2759:(e,t,r)=>{r.r(t),r.d(t,{config:()=>Q,default:()=>H,getServerSideProps:()=>B,getStaticPaths:()=>W,getStaticProps:()=>Z,reportWebVitals:()=>V,routeModule:()=>et,unstable_getServerProps:()=>K,unstable_getServerSideProps:()=>ee,unstable_getStaticParams:()=>J,unstable_getStaticPaths:()=>Y,unstable_getStaticProps:()=>X});var o={};r.r(o),r.d(o,{default:()=>G});var n=r(7093),a=r(5244),i=r(1323),l=r(1777),d=r.n(l),s=r(5863),c=r.n(s),u=r(997),m=r(6689),p=r(3843);!function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}();let f=10,O=[{id:1,name:"Смартфон iPhone 13",description:"Новейший смартфон от Apple с отличной камерой и производительностью",price:79990,category:"Электроника",image:"https://via.placeholder.com/300",stock:10,rating:4.8},{id:2,name:"Ноутбук MacBook Pro",description:"Мощный ноутбук для профессионалов",price:129990,category:"Электроника",image:"https://via.placeholder.com/300",stock:5,rating:4.9},{id:3,name:"Футболка хлопковая",description:"Комфортная хлопковая футболка",price:1990,category:"Одежда",image:"https://via.placeholder.com/300",stock:50,rating:4.5}],h=Object(function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}())("products/fetchProducts",async({page:e=1,limit:t=f,category:r=null,search:o=null},{rejectWithValue:n})=>{try{console.log("Начинаем загрузку продуктов...",{page:e,limit:t,category:r,search:o});let n=(await p.ZP.get("/products")).data;if(r&&"all"!==r&&(n=n.filter(e=>e.category===r)),o){let e=o.toLowerCase();n=n.filter(t=>t.name.toLowerCase().includes(e)||t.description.toLowerCase().includes(e))}let a=(e-1)*t,i=n.slice(a,a+t);return console.log("Обработанные продукты:",{total:n.length,page:e,limit:t,items:i}),{items:i,currentPage:e,totalPages:Math.ceil(n.length/t),totalItems:n.length,itemsPerPage:t}}catch(e){return console.error("Ошибка при загрузке продуктов:",{message:e.message,response:e.response?.data,status:e.response?.status}),n(e.response?.data?.message||e.message)}},{condition:(e,{getState:t})=>{let{products:r}=t();return"loading"!==r.status}}),g=Object(function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}())("products/fetchProductById",async(e,{rejectWithValue:t})=>{try{return(await p.ZP.get(`/products/${e}`)).data}catch(e){return t(e.message)}}),_=Object(function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}())({name:"products",initialState:{items:[],selectedProduct:null,status:"idle",error:null,isUsingMockData:!1,pagination:{currentPage:1,totalPages:1,totalItems:0,itemsPerPage:f},filters:{category:null,search:null}},reducers:{clearSelectedProduct:e=>{e.selectedProduct=null},setFilters:(e,t)=>{e.filters={...e.filters,...t.payload},e.pagination.currentPage=1},clearFilters:e=>{e.filters={category:null,search:null},e.pagination.currentPage=1}},extraReducers:e=>{e.addCase(h.pending,e=>{e.status="loading",e.error=null}).addCase(h.fulfilled,(e,t)=>{e.status="succeeded",e.items=t.payload.items,e.pagination={currentPage:t.payload.currentPage,totalPages:t.payload.totalPages,totalItems:t.payload.totalItems,itemsPerPage:t.payload.itemsPerPage},e.isUsingMockData=!1,console.log("Продукты успешно загружены:",t.payload)}).addCase(h.rejected,(e,t)=>{e.status="failed",e.error=t.payload,e.isUsingMockData=!0,e.items=O,e.pagination={currentPage:1,totalPages:1,totalItems:O.length,itemsPerPage:f}}).addCase(g.pending,e=>{e.status="loading",e.error=null}).addCase(g.fulfilled,(e,t)=>{e.status="succeeded",e.selectedProduct=t.payload}).addCase(g.rejected,(e,t)=>{e.status="failed",e.error=t.payload,e.selectedProduct=O.find(e=>e.id===parseInt(t.meta.arg))||null})}}),{clearSelectedProduct:b,setFilters:E,clearFilters:v}=_.actions;_.reducer;var x=r(5086),D=r(5326);(function(){var e=Error("Cannot find module 'react-redux'");throw e.code="MODULE_NOT_FOUND",e})(),function(){var e=Error("Cannot find module 'react-router-dom'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '__barrel_optimize__?names=FaHeart!=!react-icons/fa'");throw e.code="MODULE_NOT_FOUND",e}();let U=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: translateY(-4px);
  }
`,j=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: #f3f4f6;
`,y=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  padding: 1rem;
`,N=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.1rem;
`,P=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  color: #6366f1;
  font-weight: 600;
  margin: 0 0 1rem 0;
`,w=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  width: 100%;
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
`,C=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  color: ${e=>e.$active?"#e53e3e":"#718096"};

  &:hover {
    transform: scale(1.1);
    color: #e53e3e;
  }
`,M=({product:e})=>{let t=Object(function(){var e=Error("Cannot find module 'react-redux'");throw e.code="MODULE_NOT_FOUND",e}())(),[r,o]=(0,m.useState)(!1),n=Object(function(){var e=Error("Cannot find module 'react-redux'");throw e.code="MODULE_NOT_FOUND",e}())(e=>e.wishlist.items).some(t=>t.id===e.id);return(0,u.jsxs)(U,{children:[u.jsx(Object(function(){var e=Error("Cannot find module 'react-router-dom'");throw e.code="MODULE_NOT_FOUND",e}()),{to:`/product/${e.id}`,children:u.jsx(j,{src:r?"https://picsum.photos/300/300":e.image,alt:e.name,onError:()=>{o(!0)}})}),u.jsx(C,{onClick:r=>{r.preventDefault(),n?t((0,D.$f)(e.id)):t((0,D.Mp)(e))},$active:n,"aria-label":n?"Удалить из избранного":"Добавить в избранное",children:u.jsx(Object(function(){var e=Error("Cannot find module '__barrel_optimize__?names=FaHeart!=!react-icons/fa'");throw e.code="MODULE_NOT_FOUND",e}()),{})}),(0,u.jsxs)(y,{children:[u.jsx(Object(function(){var e=Error("Cannot find module 'react-router-dom'");throw e.code="MODULE_NOT_FOUND",e}()),{to:`/product/${e.id}`,children:u.jsx(N,{children:e.name})}),(0,u.jsxs)(P,{children:[e.price.toLocaleString("ru-RU")," ₽"]}),u.jsx(w,{onClick:()=>{t((0,x.Xq)({...e,quantity:1}))},children:"В корзину"})]})]})};var F=r(2659),T=r(7767);(function(){var e=Error("Cannot find module 'react-redux'");throw e.code="MODULE_NOT_FOUND",e})(),function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '__barrel_optimize__?names=FaFilter,FaSearch!=!react-icons/fa'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module 'lodash/debounce'");throw e.code="MODULE_NOT_FOUND",e}();let L=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 2rem;
`,k=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,S=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  flex: 1;
  min-width: 300px;
  position: relative;

  input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #6366f1;
    }
  }

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #718096;
  }
`,A=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  background: white;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: #6366f1;
  }
`,q=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`,I=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  text-align: center;
  padding: 2rem;
  color: #666;
  background: white;
  border-radius: 8px;
  margin-top: 2rem;
`,$=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`,z=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background: ${e=>e.active?"#6366f1":"white"};
  color: ${e=>e.active?"white":"#1f2937"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${e=>e.active?"#6366f1":"#f3f4f6"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,R=[{value:"",label:"Все категории"},{value:"Электроника",label:"Электроника"},{value:"Одежда",label:"Одежда"},{value:"Книги",label:"Книги"},{value:"Обувь",label:"Обувь"},{value:"Аксессуары",label:"Аксессуары"},{value:"Игрушки",label:"Игрушки"}],G=()=>{let e=Object(function(){var e=Error("Cannot find module 'react-redux'");throw e.code="MODULE_NOT_FOUND",e}())(),{items:t,status:r,error:o,pagination:n,filters:a}=Object(function(){var e=Error("Cannot find module 'react-redux'");throw e.code="MODULE_NOT_FOUND",e}())(e=>e.products),[i,l]=(0,m.useState)("name"),[d,s]=(0,m.useState)(a.category||"all"),c=(0,m.useRef)(null),p=(0,m.useRef)(a.search||""),f=(0,m.useCallback)(Object(function(){var e=Error("Cannot find module 'lodash/debounce'");throw e.code="MODULE_NOT_FOUND",e}())(t=>{e(E({search:t})),e(h({page:1,limit:n.itemsPerPage,category:"all"!==d?d:null,search:t||null}))},500),[e,d,n.itemsPerPage]);(0,m.useEffect)(()=>{e(h({page:n.currentPage,limit:n.itemsPerPage,category:"all"!==d?d:null,search:p.current||null}))},[e,n.currentPage,d]);let O=t=>{e(h({page:t,limit:n.itemsPerPage,category:"all"!==d?d:null,search:p.current||null}))},g=(0,m.useMemo)(()=>[...t].sort((e,t)=>{switch(i){case"price-asc":return e.price-t.price;case"price-desc":return t.price-e.price;case"name":return e.name.localeCompare(t.name);default:return 0}}),[t,i]);return"loading"===r?u.jsx(F.Z,{}):"failed"===r?u.jsx(T.Z,{message:o||"Произошла ошибка при загрузке товаров"}):(0,u.jsxs)(L,{children:[u.jsx("h1",{children:"Каталог товаров"}),(0,u.jsxs)(k,{children:[(0,u.jsxs)(S,{children:[u.jsx(Object(function(){var e=Error("Cannot find module '__barrel_optimize__?names=FaFilter,FaSearch!=!react-icons/fa'");throw e.code="MODULE_NOT_FOUND",e}()),{}),u.jsx("input",{ref:c,type:"text",placeholder:"Поиск товаров...",defaultValue:a.search||"",onChange:e=>{let t=e.target.value;p.current=t,c.current&&(c.current.value=t),f(t)}})]}),u.jsx(A,{value:d,onChange:t=>{let r=t.target.value;s(r),e(E({category:r}))},children:R.map(e=>u.jsx("option",{value:e.value,children:e.label},e.value))}),(0,u.jsxs)(A,{value:i,onChange:e=>l(e.target.value),children:[u.jsx("option",{value:"name",children:"По названию"}),u.jsx("option",{value:"price-asc",children:"По возрастанию цены"}),u.jsx("option",{value:"price-desc",children:"По убыванию цены"})]})]}),0===g.length?(0,u.jsxs)(I,{children:[u.jsx("h3",{children:"Товары не найдены"}),u.jsx("p",{children:"Попробуйте изменить параметры поиска"})]}):(0,u.jsxs)(u.Fragment,{children:[u.jsx(q,{children:g.map(e=>u.jsx(M,{product:e},e.id))}),(0,u.jsxs)($,{children:[u.jsx(z,{onClick:()=>O(n.currentPage-1),disabled:1===n.currentPage,children:"Назад"}),Array.from({length:n.totalPages},(e,t)=>t+1).map(e=>u.jsx(z,{active:e===n.currentPage,onClick:()=>O(e),children:e},e)),u.jsx(z,{onClick:()=>O(n.currentPage+1),disabled:n.currentPage===n.totalPages,children:"Вперед"})]})]})]})},H=(0,i.l)(o,"default"),Z=(0,i.l)(o,"getStaticProps"),W=(0,i.l)(o,"getStaticPaths"),B=(0,i.l)(o,"getServerSideProps"),Q=(0,i.l)(o,"config"),V=(0,i.l)(o,"reportWebVitals"),X=(0,i.l)(o,"unstable_getStaticProps"),Y=(0,i.l)(o,"unstable_getStaticPaths"),J=(0,i.l)(o,"unstable_getStaticParams"),K=(0,i.l)(o,"unstable_getServerProps"),ee=(0,i.l)(o,"unstable_getServerSideProps"),et=new n.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/Catalog",pathname:"/Catalog",bundlePath:"",filename:""},components:{App:c(),Document:d()},userland:o})},5863:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let o=r(167),n=r(997),a=o._(r(6689)),i=r(6921);async function l(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,i.loadGetInitialProps)(t,r)}}class d extends a.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,n.jsx)(e,{...t})}}d.origGetInitialProps=l,d.getInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3843:(e,t,r)=>{r.d(t,{HI:()=>l,ZP:()=>c,bm:()=>i}),function(){var e=Error("Cannot find module 'axios'");throw e.code="MODULE_NOT_FOUND",e}();let o=new Map,n=Object(function(){var e=Error("Cannot find module 'axios'");throw e.code="MODULE_NOT_FOUND",e}())({baseURL:(void 0).PROD?"https://internet-magazine-4jwp.vercel.app/api":"http://localhost:3002/api",headers:{"Content-Type":"application/json"},withCredentials:!0}),a=()=>{let e=document.cookie.split(";").find(e=>e.trim().startsWith("token="));return e?e.split("=")[1]:null},i=e=>{document.cookie=`token=${e}; path=/; secure; samesite=strict; max-age=86400`},l=()=>{document.cookie="token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"},d=e=>{let t=o.get(e);return t&&Date.now()-t.timestamp<3e5?t.data:null},s=(e,t)=>{o.set(e,{data:t,timestamp:Date.now()})};n.interceptors.request.use(e=>{if("get"===e.method){let t=d(e.url);if(t)return Promise.reject({__CACHE_HIT__:!0,data:t})}let t=a();return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),n.interceptors.response.use(e=>("get"===e.config.method&&s(e.config.url,e.data),e),async e=>e.__CACHE_HIT__?{data:e.data}:e.message&&e.message.includes("CORS")?(console.error("CORS ошибка:",e.message),Promise.reject(Error("Ошибка доступа к API"))):e.response?500===e.response.status?Promise.reject(Error("Ошибка сервера")):Promise.reject(e):e.config&&e.config.retryCount<3?(e.config.retryCount=(e.config.retryCount||0)+1,await new Promise(t=>setTimeout(t,1e3*e.config.retryCount)),n(e.config)):Promise.reject(Error("Ошибка сети")));let c=n},7767:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(997);r(6689),function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '__barrel_optimize__?names=FaExclamationCircle!=!react-icons/fa'");throw e.code="MODULE_NOT_FOUND",e}();let n=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  background-color: #fee2e2;
  border: 1px solid #ef4444;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,a=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())(Object(function(){var e=Error("Cannot find module '__barrel_optimize__?names=FaExclamationCircle!=!react-icons/fa'");throw e.code="MODULE_NOT_FOUND",e}()))`
  color: #ef4444;
  font-size: 1.5rem;
  flex-shrink: 0;
`,i=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  color: #991b1b;
  margin: 0;
  font-size: 1rem;
`,l=({message:e})=>e?(0,o.jsxs)(n,{children:[o.jsx(a,{}),o.jsx(i,{children:e})]}):null},2659:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(997);r(6689),function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}();let n=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,a=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`,i=Object(function(){var e=Error("Cannot find module 'styled-components'");throw e.code="MODULE_NOT_FOUND",e}())`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f4f6;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: ${n} 1s linear infinite;
`,l=()=>o.jsx(a,{children:o.jsx(i,{})})},5086:(e,t,r)=>{r.d(t,{$R:()=>i,LL:()=>l,Rt:()=>d,Xq:()=>n,h2:()=>a}),function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}();let o=Object(function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}())({name:"cart",initialState:{items:[],total:0,status:"idle",error:null,lastAction:null},reducers:{addToCart:(e,t)=>{let r=e.items.find(e=>e.id===t.payload.id);r?r.quantity+=1:e.items.push({...t.payload,quantity:1}),e.total=e.items.reduce((e,t)=>e+t.price*t.quantity,0),e.lastAction={type:"add",item:t.payload}},removeFromCart:(e,t)=>{let r=e.items.find(e=>e.id===t.payload);e.items=e.items.filter(e=>e.id!==t.payload),e.total=e.items.reduce((e,t)=>e+t.price*t.quantity,0),e.lastAction={type:"remove",item:r}},updateQuantity:(e,t)=>{let{id:r,quantity:o}=t.payload,n=e.items.find(e=>e.id===r);if(n){let t=n.quantity;n.quantity=Math.max(1,Math.min(o,n.stock||99)),e.total=e.items.reduce((e,t)=>e+t.price*t.quantity,0),e.lastAction={type:"update",item:n,oldQuantity:t,newQuantity:n.quantity}}},clearCart:e=>{let t=[...e.items];e.items=[],e.total=0,e.lastAction={type:"clear",items:t}},undoLastAction:e=>{if(e.lastAction){switch(e.lastAction.type){case"add":e.items=e.items.filter(t=>t.id!==e.lastAction.item.id);break;case"remove":e.items.push(e.lastAction.item);break;case"update":let t=e.items.find(t=>t.id===e.lastAction.item.id);t&&(t.quantity=e.lastAction.oldQuantity);break;case"clear":e.items=e.lastAction.items}e.total=e.items.reduce((e,t)=>e+t.price*t.quantity,0),e.lastAction=null}},setError:(e,t)=>{e.error=t.payload,e.status="error"},clearError:e=>{e.error=null,e.status="idle"}}}),{addToCart:n,removeFromCart:a,updateQuantity:i,clearCart:l,undoLastAction:d,setError:s,clearError:c}=o.actions;o.reducer},5326:(e,t,r)=>{r.d(t,{$f:()=>a,Mp:()=>n}),function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}();let o=Object(function(){var e=Error("Cannot find module '@reduxjs/toolkit'");throw e.code="MODULE_NOT_FOUND",e}())({name:"wishlist",initialState:{items:[],status:"idle",error:null},reducers:{addToWishlist:(e,t)=>{e.items.find(e=>e.id===t.payload.id)||e.items.push(t.payload)},removeFromWishlist:(e,t)=>{e.items=e.items.filter(e=>e.id!==t.payload)},clearWishlist:e=>{e.items=[]}}}),{addToWishlist:n,removeFromWishlist:a,clearWishlist:i}=o.actions;o.reducer},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[777],()=>r(2759));module.exports=o})();