import{Z as e,ba as t,e as a,p as s,B as i,q as p,a as o}from"./index.js?v=1723125373998";import{e as n,u as l,d,i as m}from"./index27.js?v=1723125373998";import{B as r}from"./details.js?v=1723125373998";import{l as u,ad as x,k as c,r as _,X as v,S as j,Z as U,_ as b,a3 as H,W as g,P as f,V as w,q as $,F as y,b as k,a5 as h,a6 as C}from"./vue.js?v=1723125373998";import"./pinia.js?v=1723125373998";import"./useLoop.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1723125373998";import"./index63.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./Countdown.js?v=1723125373998";import"./Select.js?v=1723125373998";import"./Empty.js?v=1723125373998";import"./use-theme-vars.js?v=1723125373998";import"./Progress.js?v=1723125373998";import"./useTableData.js?v=1723125373998";import"./data.js?v=1723125373998";import"./Skeleton.js?v=1723125373998";import"./DataTable.js?v=1723125373998";import"./Checkbox.js?v=1723125373998";import"./Ellipsis.js?v=1723125373998";import"./omit.js?v=1723125373998";import"./useLoading.js?v=1723125373998";import"./useTableColumns.js?v=1723125373998";import"./Switch.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang9.js?v=1723125373998";import"./color.js?v=1723125373998";import"./index92.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang10.js?v=1723125373998";import"./Tabs.js?v=1723125373998";const T={class:"update-old"},M=(e=>(h("data-v-4c9decac"),e=e(),C(),e))((()=>b("div",{class:"absolute -top-90px right-40px w-150px"},[b("img",{class:"w-full",src:"/static/vite/images/update-rocket.svg",alt:"rocket img"})],-1))),F={class:"absolute top-15px left-15px text-white text-14px"},L={class:"pt-140px"},S={class:"text-22px text-center font-bold text-[#565656]"},B={class:"flex justify-between mx-32px mt-20px mb-16px text-14px"},P={class:"mt-10px mx-32px mb-32px p-20px bg-[#F6FBF7] rounded-4px"},q=["innerHTML"],A={class:"update-tips"},D={class:"mr-16px"},E={class:"mr-16px"},Z={class:"update-btn"},I=o(u({__name:"old",props:{info:{}},emits:["close"],setup(o,{expose:u,emit:h}){const C=o,I=h,{info:N}=C,{t:V}=x(),W=c((()=>N.is_beta)),X=c((()=>W.value?G.value:z.value)),z=c((()=>({uptime:N.uptime.replaceAll("/","-"),downUrl:N.downUrl,version:N.version,updateMsg:N.updateMsg}))),G=c((()=>({uptime:N.beta.uptime.replaceAll("/","-"),downUrl:N.beta.downUrl,version:N.beta.version,updateMsg:N.beta.updateMsg}))),J=_(!1),K=()=>{J.value=!0},O=()=>{e({title:V("Home.Update.index_11"),content:V("Home.Update.index_13"),onConfirm:async({hide:e})=>{await n(),await l(),await d(),t(),e()}})},Q=async()=>{await m({version:X.value.version}),setTimeout((()=>{I("close")}),2e3)},R=async()=>{await l(),await d(),t()};return u({onClose:async()=>{await m({version:X.value.version},!1)}}),(e,t)=>{const o=a,n=s,l=v("i18n-t"),d=i,m=p;return j(),U("div",T,[M,b("div",F,[b("span",null,H(e.$t("Home.Update.index_14",[g(W)?e.$t("Home.Update.index_7"):e.$t("Home.Update.index_8")])),1)]),b("div",L,[b("div",S,H(e.$t("Home.Update.index_15")),1),b("div",B,[b("div",null,[b("span",null,H(e.$t("Home.Update.index_17")),1),f(o,{href:"https://forum.aapanel.com/d/9-aapanel-linux-panel-6-1-5-installation-tutorial/36",target:"_blank"},{default:w((()=>[$(H(e.$t("Public.Name"))+" "+H(g(W)?e.$t("Home.Update.index_7"):e.$t("Home.Update.index_8"))+" "+H(g(X).version),1)])),_:1})]),b("div",null,H(e.$t("Home.Update.index_16",[g(X).uptime])),1)]),b("div",P,[b("div",{class:"update-logs",innerHTML:g(X).updateMsg},null,8,q),f(n,{class:"my-20px!"}),b("div",A,[g(W)?(j(),U(y,{key:1},[b("div",null,[b("span",E,H(e.$t("Home.Update.index_10",[g(z).uptime])),1),b("span",null,H(e.$t("Home.Update.index_6",[g(z).uptime])),1)]),b("div",null,[f(o,{onClick:O},{default:w((()=>[$(H(e.$t("Home.Update.index_11")),1)])),_:1})])],64)):(j(),U(y,{key:0},[b("div",null,[b("span",D,H(e.$t("Home.Update.index_5",[g(G).version])),1),b("span",null,H(e.$t("Home.Update.index_6",[g(G).uptime])),1)]),f(l,{tag:"div",keypath:"Home.Update.index_9.0"},{btn:w((()=>[f(o,{onClick:K},{default:w((()=>[$(H(e.$t("Home.Update.index_9.1")),1)])),_:1})])),_:1})],64))])]),b("div",Z,[f(d,{class:"ignore mr-48px",round:"",onClick:Q},{default:w((()=>[$(H(e.$t("Home.Update.index_18")),1)])),_:1}),f(d,{type:"primary",round:"",onClick:R},{default:w((()=>[$(H(e.$t("Home.Update.index_19")),1)])),_:1})])]),f(m,{show:g(J),"onUpdate:show":t[0]||(t[0]=e=>k(J)?J.value=e:null),title:e.$t("Home.Update.index_12"),component:r},null,8,["show","title"])])}}}),[["__scopeId","data-v-4c9decac"]]);export{I as default};