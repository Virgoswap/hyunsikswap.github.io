(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{301:function(e,t,r){var content=r(648);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("3c5250ca",content,!0,{sourceMap:!1})},647:function(e,t,r){"use strict";var n=r(301);r.n(n).a},648:function(e,t,r){(t=r(54)(!1)).push([e.i,".intro[data-v-20df09a7]{background-color:#eee;padding:1rem}.cover[data-v-20df09a7]{text-align:center}.title[data-v-20df09a7]{margin-bottom:.1rem!important}.desc[data-v-20df09a7]{font-size:.9rem;color:#999}.cover img[data-v-20df09a7]{display:inline-block;width:150px;text-align:center}.cow[data-v-20df09a7]{margin-bottom:1rem}.cow img[data-v-20df09a7]{width:100%;padding:1rem;display:inline-block}.avatar[data-v-20df09a7],.cow img[data-v-20df09a7]{text-align:center}.avatar[data-v-20df09a7]{font-size:5rem}.milk[data-v-20df09a7]{width:3rem}.apy[data-v-20df09a7]{font-size:.9rem;color:#007bff}",""]),e.exports=t},650:function(e,t,r){"use strict";r.r(t);r(39),r(40),r(46),r(45),r(24),r(57),r(35);var n=r(15),c=r(55),o=r(272),d=r(227),l={data:function(){return{cows:c.default.cows,priceMILKBUSD:null,priceMILKBNB:null,apy:{1:"--",2:"--",3:"--"}}},methods:{},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new o.e,c=[r.getPriceOfBNBBUSD(),r.getPriceOfCOWBNB()],t.next=4,Promise.all(c);case 4:l=t.sent,e.priceMILKBUSD=Object(d.BigNumber)(l[0]).times(Object(d.BigNumber)(l[1])),e.priceMILKBNB=Object(d.BigNumber)(l[1]),console.log("priceBNBBUSD=",l[0]),console.log("priceMILKBNB=",l[1]),e.cows.map(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n,c,d,l,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.initialized){t.next=12;break}return n=new o.d(r.stakeToken.address,r.stakeToken.symbol,r.stakeToken.decimals),c=new o.b(r.address,r.stakeToken,r.yieldToken),t.next=5,c.rewardRate();case 5:return d=t.sent,t.next=8,n.balanceOf(r.address);case 8:l=t.sent,v=d.times(31536e3).div(l),console.log(r.name,v.toString()),1==r.id&&(e.apy[1]=v.times(e.priceMILKBNB).div(e.priceMILKBNB.plus(1)).times(1e6).toFixed(2));case 12:return t.abrupt("return",r);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 10:case"end":return t.stop()}}),t)})))()}},v=(r(647),r(41)),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("div",{staticClass:"intro"},[r("h3",[e._v("\n        "+e._s(e.$t("home.protocol-name"))+"\n      ")]),e._v(" "),r("p",[e._v("\n        "+e._s(e.$t("home.protocol-desc"))+"\n      ")]),e._v(" "),r("p")])]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"price alert alert-success"},[e._v("\n    1 $DEGEN = "+e._s(e.priceMILKBUSD?e.priceMILKBUSD.toFixed(4):"--")+" $BUSD = "+e._s(e.priceMILKBNB?e.priceMILKBNB.toFixed(4):"--")+" $BNB\n  ")]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"row"},e._l(e.cows,(function(t,i){return r("div",{key:i,staticClass:"col-6 cow"},[r("div",{staticClass:"card cow"},[r("img",{staticClass:"avatar",attrs:{src:"require(`@/static/${cow.id}.png`)"}}),e._v(" "),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title title"},[e._v(e._s(t.name))]),e._v(" "),r("div",{staticClass:"desc"},[e._v(e._s(e.$t("home.card-desc",{symbol:t.stakeToken.symbol})))]),e._v(" "),r("p",{staticClass:"card-text apy"},[e._v(" APY: "+e._s(e.apy[t.id])+"% ")]),e._v(" "),t.initialized?r("a",{staticClass:"btn btn-block btn-success",attrs:{href:"/pool/"+t.id}},[e._v("\n            "+e._s(e.$t("home.select"))+"\n          ")]):r("a",{staticClass:"btn btn-secondary btn-block",attrs:{href:"#"}},[e._v(e._s(e.$t("home.coming-soon")))])])])])})),0),e._v(" "),r("br")])}),[],!1,null,"20df09a7",null);t.default=component.exports}}]);