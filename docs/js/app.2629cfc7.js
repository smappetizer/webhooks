(function(e){function t(t){for(var o,r,s=t[0],i=t[1],u=t[2],b=0,p=[];b<s.length;b++)r=s[b],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==c[i]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},c={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/webhooks/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1788:function(e,t,n){},3434:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={class:"container"},a={key:0,class:"box token-input"},r=Object(o["g"])(" Enter your smapOne API token here"),s=Object(o["f"])("br",null,null,-1),i=Object(o["f"])("div",{class:"token-info"},[Object(o["g"])(" Is it safe to enter token here? "),Object(o["f"])("ul",null,[Object(o["f"])("li",null,"This script runs on github, only allows frontend, no backend services, you can track all calls done by the frontend."),Object(o["f"])("li",null,[Object(o["g"])("If you don't trust, feel free to "),Object(o["f"])("a",{href:"https://github.com/moritzhesse/webhooks"},"download the script"),Object(o["g"])(" and to compile and run by yourself.")])])],-1);function u(e,t,n,u,l,b){var p=Object(o["m"])("smap-list");return Object(o["i"])(),Object(o["e"])("div",c,[null===l.token?(Object(o["i"])(),Object(o["e"])("div",a,[r,s,Object(o["p"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.token=e}),placeholder:"smapOne API token"},null,512),[[o["o"],l.token]]),i])):Object(o["d"])("",!0),l.api?(Object(o["i"])(),Object(o["c"])(p,{key:1,api:l.api},null,8,["api"])):Object(o["d"])("",!0)])}var l=n("c7eb"),b=n("1da1"),p=(n("ac1f"),n("841c"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("b0c0"),n("4de4"),function(e){return Object(o["k"])("data-v-7b9088f2"),e=e(),Object(o["j"])(),e}),f={id:"settings",class:"box"},d=p((function(){return Object(o["f"])("code",{class:"method method-post"},"post",-1)})),h=[d],O=p((function(){return Object(o["f"])("code",{class:"method method-get"},"get",-1)})),j=[O],m={class:"box"};function k(e,t,n,c,a,r){var s=Object(o["m"])("smap-item");return Object(o["i"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("div",f,[Object(o["p"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.filter.name=e}),placeholder:"Search smap name"},null,512),[[o["o"],a.filter.name]]),Object(o["f"])("span",{class:Object(o["h"])(["filter",{active:!1===a.filter.group}]),onClick:t[1]||(t[1]=function(e){return r.setFilterGroup(!1)})},"all",2),Object(o["f"])("span",{class:Object(o["h"])(["filter",{active:"webhook"==a.filter.group}]),onClick:t[2]||(t[2]=function(e){return r.setFilterGroup("webhook")})},"with webhook",2),Object(o["f"])("span",{class:Object(o["h"])(["filter",{active:"post"==a.filter.group}]),onClick:t[3]||(t[3]=function(e){return r.setFilterGroup("post")})},h,2),Object(o["f"])("span",{class:Object(o["h"])(["filter",{active:"get"==a.filter.group}]),onClick:t[4]||(t[4]=function(e){return r.setFilterGroup("get")})},j,2),Object(o["f"])("span",{class:Object(o["h"])(["filter",{active:"no-webhook"==a.filter.group}]),onClick:t[5]||(t[5]=function(e){return r.setFilterGroup("no-webhook")})},"no webhook",2)]),Object(o["f"])("div",m,[(Object(o["i"])(!0),Object(o["e"])(o["a"],null,Object(o["l"])(r.filteredSmaps,(function(e){return Object(o["i"])(),Object(o["c"])(s,{key:e.smapId,smap:e,api:n.api,class:"smap",onSetWebhook:r.onSetWebhook},null,8,["smap","api","onSetWebhook"])})),128))])],64)}n("4e82"),n("caad"),n("2532"),n("7db0");var v=function(e){return Object(o["k"])("data-v-151a280a"),e=e(),Object(o["j"])(),e},w={key:0,class:"info-no-webhook"},g={key:0,class:"info-fetching"},y={key:1,class:"smap-meta"},x={class:"smap-meta-box"},S=Object(o["g"])("smapID "),I={class:"smap-meta-box"},P=Object(o["g"])("Last changed "),C={key:0},W=Object(o["g"])("Version "),L={class:"smap-meta-box smap-meta-cols"},_={class:"smap-meta-box"},U=Object(o["g"])("Licenses "),D={class:"smap-meta-box"},G=Object(o["g"])("Installations "),M={class:"smap-meta-box"},F=Object(o["g"])("Data entries "),V={key:0,class:"smap-meta-box"},H=v((function(){return Object(o["f"])("div",null,"Webhook URL",-1)})),R=["value"],T={key:2},A={key:0},B={key:0,class:"method method-get"},J={key:1,class:"method method-post"},$={class:"webhook-url"};function z(e,t,n,c,a,r){return n.smap?(Object(o["i"])(),Object(o["e"])("div",{key:0,class:Object(o["h"])(["smap",{webhook:n.smap.webhook,fetching:null===n.smap.webhook,"no-webhook":!1===n.smap.webhook}])},[Object(o["f"])("div",{class:"smap-name",onClick:t[0]||(t[0]=function(e){return a.showMeta=!a.showMeta})},[Object(o["g"])(Object(o["n"])(n.smap.name)+" ",1),!1===n.smap.webhook?(Object(o["i"])(),Object(o["e"])("span",w,"no webhook")):Object(o["d"])("",!0)]),null===n.smap.webhook?(Object(o["i"])(),Object(o["e"])("div",g,"fetching...")):Object(o["d"])("",!0),a.showMeta?(Object(o["i"])(),Object(o["e"])("div",y,[Object(o["f"])("div",x,[S,Object(o["f"])("code",null,Object(o["n"])(n.smap.smapId),1)]),Object(o["f"])("div",I,[Object(o["f"])("div",null,[P,Object(o["f"])("code",null,Object(o["n"])(r.getDate(n.smap.lastChanged)),1)]),n.smap.lastPublishedVersion?(Object(o["i"])(),Object(o["e"])("div",C,[W,Object(o["f"])("code",null,Object(o["n"])(n.smap.lastPublishedVersion.version),1)])):Object(o["d"])("",!0)]),Object(o["f"])("div",L,[Object(o["f"])("div",_,[U,Object(o["f"])("code",null,Object(o["n"])(n.smap.userLicenseCount),1)]),Object(o["f"])("div",D,[G,Object(o["f"])("code",null,Object(o["n"])(n.smap.installationsCount),1)]),Object(o["f"])("div",M,[F,Object(o["f"])("code",null,Object(o["n"])(n.smap.totalDataCount),1)])]),n.smap.webhook?(Object(o["i"])(),Object(o["e"])("div",V,[H,Object(o["f"])("div",null,[Object(o["f"])("input",{type:"text",value:n.smap.webhook.serverUrl},null,8,R)])])):Object(o["d"])("",!0)])):Object(o["d"])("",!0),n.smap.webhook?(Object(o["i"])(),Object(o["e"])("div",T,[n.smap.webhook.options?(Object(o["i"])(),Object(o["e"])("div",A,[Object(o["f"])("div",null,["HttpGet"===n.smap.webhook.options?(Object(o["i"])(),Object(o["e"])("code",B,"get")):Object(o["d"])("",!0),"HttpPost"===n.smap.webhook.options?(Object(o["i"])(),Object(o["e"])("code",J,"post")):Object(o["d"])("",!0),Object(o["f"])("span",$,Object(o["n"])(r.getReadableUrl(n.smap.webhook.serverUrl)),1)])])):Object(o["d"])("",!0)])):Object(o["d"])("",!0)],2)):Object(o["d"])("",!0)}n("99af");var E={name:"SmapItem",emits:["setWebhook"],data:function(){return{showMeta:!1}},props:{api:Object,smap:Object},created:function(){var e=this;return Object(b["a"])(Object(l["a"])().mark((function t(){var n;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.api.getWebhook(e.smap.smapId);case 2:n=t.sent,null===n?e.$emit("setWebhook",e.smap.smapId,!1):e.$emit("setWebhook",e.smap.smapId,n);case 4:case"end":return t.stop()}}),t)})))()},methods:{getReadableUrl:function(e){var t=e.substr(0,32),n=e.substr(e.length-16,e.length);return"".concat(t,"...").concat(n)},getDate:function(e){var t={year:"numeric",month:"long",day:"numeric"};return new Date(e).toLocaleDateString("en-US",t)}}},N=(n("861b"),n("6b0d")),q=n.n(N);const K=q()(E,[["render",z],["__scopeId","data-v-151a280a"]]);var Q=K,X={name:"SmapList",components:{SmapItem:Q},data:function(){return{filter:{name:null,group:!1},smaps:[]}},props:{api:Object},created:function(){var e=this;return Object(b["a"])(Object(l["a"])().mark((function t(){var n;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.api.getSmaps();case 2:n=t.sent,null!==n&&(e.smaps=n.sort((function(e,t){return e.name.localeCompare(t.name)})));case 4:case"end":return t.stop()}}),t)})))()},computed:{filteredSmaps:function(){var e=this.filter;return this.smaps.filter((function(t){var n=!1;e.group?("webhook"==e.group&&!1!==t.webhook&&null!==t.webhook||"no-webhook"==e.group&&!1===t.webhook||"get"==e.group&&t.webhook&&"HttpGet"==t.webhook.options||"post"==e.group&&t.webhook&&"HttpPost"==t.webhook.options)&&(n=!0):n=!0;var o=!1;return(null===e.name||t.name.toLowerCase().includes(e.name.toLowerCase()))&&(o=!0),n&&o}))}},methods:{setFilterGroup:function(e){this.filter.group=e},onSetWebhook:function(e,t){var n=this.smaps.find((function(t){return t.smapId==e}));"undefined"!==typeof n&&(n.webhook=t)}}};n("a877");const Y=q()(X,[["render",k],["__scopeId","data-v-7b9088f2"]]);var Z=Y,ee=n("cc9a"),te=n.n(ee),ne={name:"App",components:{SmapList:Z},data:function(){return{token:null,api:null}},created:function(){var e=this;return Object(b["a"])(Object(l["a"])().mark((function t(){var n,o;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=window.location.search,o=new URLSearchParams(n),o.has("token")&&(e.token=o.get("token"));case 3:case"end":return t.stop()}}),t)})))()},watch:{token:function(e,t){this.api=new te.a(this.token)}}};n("6e52");const oe=q()(ne,[["render",u]]);var ce=oe;Object(o["b"])(ce).mount("#app")},"6e52":function(e,t,n){"use strict";n("3434")},"7dd3":function(e,t,n){},"861b":function(e,t,n){"use strict";n("7dd3")},a877:function(e,t,n){"use strict";n("1788")},cc9a:function(e,t,n){var o=n("7ec2").default,c=n("c973").default,a=n("970b").default,r=n("5bc3").default;n("99af"),n("d3b7");var s=function(){"use strict";function e(t){a(this,e),this.token=t}return r(e,[{key:"getSmaps",value:function(){var e=c(o().mark((function e(){var t;return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://platform.smapone.com/Backend/v1/Smaps",e.next=3,this.get(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getWebhook",value:function(){var e=c(o().mark((function e(t){var n;return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="https://platform.smapone.com/Backend/intern/Smaps/".concat(t,"/Notification/Data/Webhook"),e.next=3,this.get(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=c(o().mark((function e(t){var n;return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="".concat(t,"?accessToken=").concat(this.token),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}();e.exports=s}});
//# sourceMappingURL=app.2629cfc7.js.map