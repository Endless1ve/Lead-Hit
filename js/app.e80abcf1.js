(function(){"use strict";var e={4360:function(e,t,r){var n=r(5130),i=r(6768);function a(e,t){const r=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(r)}var o=r(1241);const s={},u=(0,o.A)(s,[["render",a]]);var d=u,c=r(1387);const l={class:"auth"};function f(e,t,r,n,a,o){const s=(0,i.g2)("FormItem"),u=(0,i.g2)("PreloaderBlock");return(0,i.uX)(),(0,i.CE)("div",l,[(0,i.bF)(s),e.isLoading?((0,i.uX)(),(0,i.Wv)(u,{key:0})):(0,i.Q3)("",!0)])}var p=r(782),v=r(4232);const m={class:"form"},h={class:"inputGroup"};function g(e,t,r,n,a,o){const s=(0,i.g2)("LogoItem"),u=(0,i.g2)("InputItem"),d=(0,i.g2)("ErrorItem"),c=(0,i.g2)("ButtonItem");return(0,i.uX)(),(0,i.CE)("form",m,[(0,i.bF)(s),(0,i.Lk)("div",h,[(0,i.bF)(u,{placeholder:"Введите id сайта",modelValue:o.siteId,"onUpdate:modelValue":t[0]||(t[0]=e=>o.siteId=e),modelModifiers:{trim:!0},onInput:e.clearError},null,8,["modelValue","onInput"]),e.isErrorVisible?((0,i.uX)(),(0,i.Wv)(d,{key:0},{default:(0,i.k6)((()=>[(0,i.eW)((0,v.v_)(e.errorText),1)])),_:1})):(0,i.Q3)("",!0)]),(0,i.bF)(c,{onClick:e.sendData},{default:(0,i.k6)((()=>[(0,i.eW)("Войти")])),_:1},8,["onClick"])])}const b=e=>((0,i.Qi)("data-v-1c5769c4"),e=e(),(0,i.jt)(),e),I={class:"logo"},y=b((()=>(0,i.Lk)("span",{class:"logo-accent"},"Lead",-1)));function E(e,t,r,n,a,o){return(0,i.uX)(),(0,i.CE)("h1",I,[y,(0,i.eW)(" Hit ")])}var k={};const A=(0,o.A)(k,[["render",E],["__scopeId","data-v-1c5769c4"]]);var w=A;const L=["placeholder","value"];function _(e,t,r,n,a,o){return(0,i.uX)(),(0,i.CE)("input",{class:"input",type:"text",placeholder:r.placeholder,value:r.modelValue,onInput:t[0]||(t[0]=(...e)=>o.updateInput&&o.updateInput(...e))},null,40,L)}var x={props:{modelValue:{type:[String,Number]},placeholder:{type:String,required:!0}},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const C=(0,o.A)(x,[["render",_],["__scopeId","data-v-62dbd1ea"]]);var T=C;const V={class:"button"};function S(e,t){return(0,i.uX)(),(0,i.CE)("button",V,[(0,i.RG)(e.$slots,"default",{},void 0,!0)])}const O={},j=(0,o.A)(O,[["render",S],["__scopeId","data-v-50da8746"]]);var F=j;const X={class:"error"};function P(e,t,r,n,a,o){return(0,i.uX)(),(0,i.CE)("div",X,[(0,i.RG)(e.$slots,"default",{},void 0,!0)])}var B={};const N=(0,o.A)(B,[["render",P],["__scopeId","data-v-29508fed"]]);var D=N,W={components:{LogoItem:w,InputItem:T,ButtonItem:F,ErrorItem:D},methods:{...(0,p.PY)({updateSiteId:"auth/updateSiteId"}),...(0,p.i0)({clearError:"auth/clearError",sendData:"auth/sendData"})},computed:{...(0,p.L8)({isErrorVisible:"auth/isErrorVisible",errorText:"auth/errorText"}),siteId:{get(){return this.$store.state.auth.siteId},set(e){this.updateSiteId(e)}}}};const q=(0,o.A)(W,[["render",g],["__scopeId","data-v-a2616806"]]);var G=q;const M=e=>((0,i.Qi)("data-v-00c0abd0"),e=e(),(0,i.jt)(),e),Y={class:"preloaderBlock"},H=M((()=>(0,i.Lk)("p",{class:"preloaderText"},"Пожалуйста, подождите",-1)));function Q(e,t,r,n,a,o){const s=(0,i.g2)("PreloaderItem");return(0,i.uX)(),(0,i.CE)("div",Y,[H,(0,i.bF)(s)])}const $={class:"loader"};function R(e,t,r,n,a,o){return(0,i.uX)(),(0,i.CE)("span",$)}var U={};const K=(0,o.A)(U,[["render",R],["__scopeId","data-v-6a6c41e3"]]);var z=K,Z={components:{PreloaderItem:z}};const J=(0,o.A)(Z,[["render",Q],["__scopeId","data-v-00c0abd0"]]);var ee=J,te={components:{FormItem:G,PreloaderBlock:ee},computed:{...(0,p.L8)({isLoading:"auth/isLoading"})}};const re=(0,o.A)(te,[["render",f],["__scopeId","data-v-897bea98"]]);var ne=re;const ie=[{path:"/",component:ne,name:"auth",meta:{requiresAuth:!1}},{path:"/analytics",component:()=>r.e(48).then(r.bind(r,4048)),name:"analytics",meta:{requiresAuth:!0}}],ae=(0,c.aE)({history:(0,c.Bt)("/Lead-Hit/"),routes:ie});ae.beforeEach(((e,t,r)=>{const n=localStorage.getItem("leadhit-site-id");e.meta.requiresAuth&&!n?r({name:"auth"}):r()}));var oe=ae,se=(r(4114),r(7049));const ue={state:()=>({siteId:"",isErrorVisible:!1,isInputValid:!1,missLength:"id сайта должен содержать 24 символа",incorrectValue:"Некорректное значение",serverError:"Ошибка сервера",errorText:"",isLoading:!1}),getters:{siteId(e){return e.siteId},isErrorVisible(e){return e.isErrorVisible},errorText(e){return e.errorText},isLoading(e){return e.isLoading}},mutations:{updateSiteId(e,t){e.siteId=t},toggleError(e,t){e.isErrorVisible=t},setErrorText(e,t){e.errorText=t},setInputValidity(e,t){e.isInputValid=t},setLoading(e,t){e.isLoading=t}},actions:{setError({commit:e},t){e("toggleError",!0),e("setErrorText",t)},clearError({commit:e}){e("toggleError",!1),e("setErrorText","")},validateInput({state:e,dispatch:t,commit:r}){24===e.siteId.length?(t("clearError"),r("setInputValidity",!0)):(t("setError",e.missLength),r("setInputValidity",!1))},async sendData({state:e,commit:t,dispatch:r}){try{if(r("validateInput"),e.isInputValid){t("setLoading",!0);const r=await se.A.get("https://track-api.leadhit.io/client/test_auth",{headers:{"Api-Key":"5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo","Leadhit-Site-Id":e.siteId}});"ok"===r.data.message&&(localStorage.setItem("leadhit-site-id",e.siteId),oe.push("/analytics"))}}catch(n){401===n.request.status||422===n.request.status?r("setError",e.incorrectValue):r("setError",e.serverError)}finally{t("setLoading",!1)}}},namespaced:!0};var de=ue,ce=r(6753),le=r(7109),fe=r(8236),pe=r(9203),ve=r(2523),me=r(9943),he=r(4907),ge=r(1653),be=r(1164),Ie=r(7203),ye=r(2803),Ee=r(3571),ke=r(8625),Ae=r(2279);const we={state:()=>({data:[{date:"2020-07-01",visits:213},{date:"2020-07-02",visits:249},{date:"2020-07-03",visits:179},{date:"2020-07-04",visits:170},{date:"2020-07-05",visits:184},{date:"2020-07-06",visits:202},{date:"2020-07-07",visits:198},{date:"2020-07-08",visits:168},{date:"2020-07-09",visits:176},{date:"2020-07-10",visits:171},{date:"2020-07-11",visits:190},{date:"2020-07-12",visits:154},{date:"2020-07-13",visits:246},{date:"2020-07-14",visits:250},{date:"2020-07-15",visits:227},{date:"2020-07-16",visits:140},{date:"2020-07-17",visits:170},{date:"2020-07-18",visits:125},{date:"2020-07-19",visits:106},{date:"2020-07-20",visits:207},{date:"2020-07-21",visits:222},{date:"2020-07-22",visits:198},{date:"2020-07-23",visits:204},{date:"2020-07-24",visits:213},{date:"2020-07-25",visits:145},{date:"2020-07-26",visits:166},{date:"2020-07-27",visits:163},{date:"2020-07-28",visits:135},{date:"2020-07-29",visits:45}]}),actions:{createChar({state:e},t){let r=ce.b.new(t);r.locale=Ae.A;let n=r.container.children.push(he.C.new(r,{})),i=n.xAxes.push(ge.c.new(r,{groupData:!1,baseInterval:{timeUnit:"day",count:1},gridIntervals:[{timeUnit:"week",count:1}],renderer:be.j.new(r,{minorGridEnabled:!0,minGridDistance:50}),tooltip:le.m.new(r,{})})),a=n.yAxes.push(Ie.F.new(r,{min:0,renderer:ye.Q.new(r,{})})),o=n.series.push(Ee.I.new(r,{xAxis:i,yAxis:a,valueYField:"visits",valueXField:"date",stroke:fe.yW("#ff4402"),fill:fe.yW("#ff4402"),tooltip:le.m.new(r,{pointerOrientation:"vertical",labelText:"{valueY}"})}));o.data.processor=pe.X.new(r,{dateFormat:"yyyy-MM-dd",dateFields:["date"]}),o.data.setAll(e.data),o.fills.template.setAll({fillOpacity:.2,visible:!0}),o.bullets.push((function(){let e=ve.j.new(r,{radius:5,fill:"#ff4402",stroke:"#ff4402",strokeWidth:2});return me.D.new(r,{sprite:e})}));let s=n.set("cursor",ke.A.new(r,{xAxis:i,behavior:"none"}));s.lineY.set("visible",!1),s.lineX.set("visible",!1)}},namespaced:!0};var Le=we,_e=(0,p.y$)({modules:{auth:de,chart:Le}});(0,n.Ef)(d).use(_e).use(oe).mount("#app")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,a){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],a=e[c][2];for(var s=!0,u=0;u<n.length;u++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(s=!1,a<o&&(o=a));if(s){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,i,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+".d0e9c5e2.js"}}(),function(){r.miniCssF=function(e){return"css/"+e+".da818dcd.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="lead-hit:";r.l=function(n,i,a,o){if(e[n])e[n].push(i);else{var s,u;if(void 0!==a)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var l=d[c];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[i];var f=function(t,r){s.onerror=s.onload=null,clearTimeout(p);var i=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/Lead-Hit/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,i,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",r.nc&&(o.nonce=r.nc);var s=function(r){if(o.onerror=o.onload=null,"load"===r.type)i();else{var n=r&&r.type,s=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=n,u.request=s,o.parentNode&&o.parentNode.removeChild(o),a(u)}};return o.onerror=o.onload=s,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var i=r[n],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){i=o[n],a=i.getAttribute("data-href");if(a===e||a===t)return i}},n=function(n){return new Promise((function(i,a){var o=r.miniCssF(n),s=r.p+o;if(t(o,s))return i();e(n,s,null,i,a)}))},i={524:0};r.f.miniCss=function(e,t){var r={48:1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=n(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={524:0};r.f.j=function(t,n){var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var a=new Promise((function(r,n){i=e[t]=[r,n]}));n.push(i[2]=a);var o=r.p+r.u(t),s=new Error,u=function(n){if(r.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}};r.l(o,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,o=n[0],s=n[1],u=n[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(u)var c=u(r)}for(t&&t(n);d<o.length;d++)a=o[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=self["webpackChunklead_hit"]=self["webpackChunklead_hit"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(4360)}));n=r.O(n)})();
//# sourceMappingURL=app.e80abcf1.js.map