(function(e){function t(t){for(var o,a,s=t[0],u=t[1],i=t[2],b=0,p=[];b<s.length;b++)a=s[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==c[u]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},c={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/webhooks/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={class:"container"},r={class:"box"},a=Object(o["g"])(" Enter token here"),s=Object(o["f"])("br",null,null,-1),u={key:0},i=Object(o["g"])(" Is it safe to enter token here? "),l=Object(o["f"])("ul",null,[Object(o["f"])("li",null,"This script runs on github, only allows frontend, no backend services, you can track all calls done by the frontend."),Object(o["f"])("li",null,"If you don't trust, feel free to use the script and run by yourself.")],-1),b=[i,l],p={key:0,class:"box"};function d(e,t,n,i,l,d){var f=Object(o["m"])("smap-list");return Object(o["i"])(),Object(o["e"])("div",c,[Object(o["f"])("div",r,[a,s,Object(o["p"])(Object(o["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.token=e})},null,512),[[o["o"],l.token]]),null===l.token?(Object(o["i"])(),Object(o["e"])("div",u,b)):Object(o["d"])("",!0)]),null!==l.token?(Object(o["i"])(),Object(o["e"])("div",p,[Object(o["h"])(f,{token:l.token},null,8,["token"])])):Object(o["d"])("",!0)])}var f=n("1da1"),j=(n("96cf"),n("ac1f"),n("841c"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),{key:0});function O(e,t,n,c,r,a){var s=Object(o["m"])("smap-item");return null!==n.token?(Object(o["i"])(),Object(o["e"])("div",j,[(Object(o["i"])(!0),Object(o["e"])(o["a"],null,Object(o["l"])(r.smaps,(function(e){return Object(o["i"])(),Object(o["c"])(s,{key:e.smapId,smap:e,token:n.token,class:"smap"},null,8,["smap","token"])})),128))])):Object(o["d"])("",!0)}var h=n("53ca"),m=(n("b0c0"),function(e){return Object(o["k"])("data-v-34c56adb"),e=e(),Object(o["j"])(),e}),k={class:"smap"},v={key:0,class:"fetching"},w={key:1,class:"no-webhook"},g={key:2},y={key:0},S={key:0},x=m((function(){return Object(o["f"])("code",{class:"method method-get"},"get",-1)})),P=Object(o["g"])(),I=["value"],_={key:1},R=m((function(){return Object(o["f"])("code",{class:"method method-post"},"post",-1)})),T=Object(o["g"])(),M=["value"];function U(e,t,n,c,r,a){return Object(o["i"])(),Object(o["e"])("div",k,[Object(o["f"])("span",null,Object(o["n"])(n.smap.name),1),null===r.webhook?(Object(o["i"])(),Object(o["e"])("div",v,"fetching...")):Object(o["d"])("",!0),!1===r.webhook?(Object(o["i"])(),Object(o["e"])("div",w,"no webhook")):Object(o["d"])("",!0),"object"===Object(h["a"])(r.webhook)?(Object(o["i"])(),Object(o["e"])("div",g,["undefined"!==typeof r.webhook.options?(Object(o["i"])(),Object(o["e"])("div",y,["HttpGet"===r.webhook.options?(Object(o["i"])(),Object(o["e"])("div",S,[x,P,Object(o["f"])("input",{type:"text",value:r.webhook.serverUrl},null,8,I)])):Object(o["d"])("",!0),"HttpPost"===r.webhook.options?(Object(o["i"])(),Object(o["e"])("div",_,[R,T,Object(o["f"])("input",{type:"text",value:r.webhook.serverUrl},null,8,M)])):Object(o["d"])("",!0)])):Object(o["d"])("",!0)])):Object(o["d"])("",!0)])}n("99af");var F={name:"SmapItem",data:function(){return{webhook:null}},props:{smap:Object,token:String},created:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log({smap:e.smap}),console.log("TYPEOF",Object(h["a"])(e.webhook)),console.log("Checking webhook for smapId ".concat(e.smap.smapId)),n="https://platform.smapone.com/Backend/intern/Smaps/".concat(e.smap.smapId,"/Notification/Data/Webhook?accessToken=").concat(e.token),fetch(n).then((function(e){return e.json()})).then((function(t){console.log("webhookdata",{data:t}),e.webhook=null!==t&&t}));case 5:case"end":return t.stop()}}),t)})))()}},L=(n("be3a"),n("6b0d")),B=n.n(L);const E=B()(F,[["render",U],["__scopeId","data-v-34c56adb"]]);var H=E,J={name:"SmapList",components:{SmapItem:H},data:function(){return{smaps:[]}},props:{token:String},created:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("Fetching smaps ..."),fetch("https://platform.smapone.com/Backend/v1/Smaps?accessToken=".concat(e.token)).then((function(e){return e.json()})).then((function(t){console.log("Fetched smaps data",{data:t}),e.smaps=t}));case 2:case"end":return t.stop()}}),t)})))()}};const A=B()(J,[["render",O]]);var C=A,D={name:"App",components:{SmapList:C},data:function(){return{token:null}},created:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=window.location.search,o=new URLSearchParams(n),o.has("token")&&(e.config.channel=o.get("token"));case 3:case"end":return t.stop()}}),t)})))()}};n("d82c");const G=B()(D,[["render",d]]);var N=G;Object(o["b"])(N).mount("#app")},6442:function(e,t,n){},be3a:function(e,t,n){"use strict";n("e1db")},d82c:function(e,t,n){"use strict";n("6442")},e1db:function(e,t,n){}});
//# sourceMappingURL=app.796c8234.js.map