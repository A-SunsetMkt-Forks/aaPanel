System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185"],(function(e,l){"use strict";var t,a,u,r,n,s,i,o,c,d,p,_,f;return{setters:[e=>{t=e._},e=>{a=e.d,u=e.W,r=e.r,n=e.j,s=e.O,i=e.P,o=e.M,c=e.Y,d=e.R,p=e.ak},e=>{_=e.ad,f=e.bG},null,null],execute:function(){const l={class:"p-20px"};e("default",a({__name:"index",props:{data:{}},setup(e,{expose:a}){const{t:m}=u(),v=e,{callback:g,api:x,url:y}=v.data,b=r(null),j=n({title:"",url:"",atall:!0}),h={title:{required:!0,message:m("Security.Conf.Index_28"),trigger:["blur","input"]},url:{required:!0,message:m("Security.Conf.Index_28"),trigger:["blur","input"]}};return a({onConfirm:async({hide:e})=>{await(b.value?.validate()),await x(p(j),y),g?.(),e()}}),(e,a)=>{const u=_,r=f,n=t;return s(),i("div",l,[o(n,{ref_key:"formRef",ref:b,model:d(j),rules:h},{default:c((()=>[o(r,{label:e.$t("Docker.Compose.form.index_3"),path:"title"},{default:c((()=>[o(u,{class:"w-250px!",type:"text",value:d(j).title,"onUpdate:value":a[0]||(a[0]=e=>d(j).title=e),placeholder:" "},null,8,["value"])])),_:1},8,["label"]),o(r,{label:e.$t("WP.TableRow.index_7"),path:"url"},{default:c((()=>[o(u,{class:"w-250px!",type:"text",value:d(j).url,"onUpdate:value":a[1]||(a[1]=e=>d(j).url=e),placeholder:" "},null,8,["value"])])),_:1},8,["label"])])),_:1},8,["model"])])}}}))}}}));