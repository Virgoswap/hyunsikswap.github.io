(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{301:function(e,t,r){var content=r(648);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("75b24ab6",content,!0,{sourceMap:!1})},647:function(e,t,r){"use strict";var c=r(301);r.n(c).a},648:function(e,t,r){(t=r(54)(!1)).push([e.i,".intro[data-v-2965efce]{background-color:#eee;padding:1rem}.cover[data-v-2965efce]{text-align:center}.title[data-v-2965efce]{margin-bottom:.1rem!important}.desc[data-v-2965efce]{font-size:.9rem;color:#999}.cover img[data-v-2965efce],.tokenlogo[data-v-2965efce]{width:150px}.cover img[data-v-2965efce]{display:inline-block;text-align:center}.cow[data-v-2965efce]{margin-bottom:1rem}.cow img[data-v-2965efce]{width:100%;padding:1rem;display:inline-block}.avatar[data-v-2965efce],.cow img[data-v-2965efce]{text-align:center}.avatar[data-v-2965efce]{font-size:5rem}.milk[data-v-2965efce]{width:3rem}.apy[data-v-2965efce]{font-size:.9rem;color:#007bff}",""]),e.exports=t},650:function(e,t,r){"use strict";r.r(t);r(39),r(40),r(46),r(45),r(24),r(57),r(35);var c=r(15),n=r(55),o=r(272),B=r(227),d={data:function(){return{cows:n.default.cows,priceDEGENBUSD:null,priceDEGENBNB:null,priceBHCBUSD:null,priceBHCBNB:null,priceEARTHBUSD:null,priceEARTHBNB:null,apy:{1:"--",2:"--",3:"--",4:"--",5:"--",6:"--",7:"--",8:"--",9:"--",10:"--"}}},methods:{},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new o.e,n=[r.getPriceOfBNBBUSD(),r.getPriceOfDEGENBNB(),r.getPriceOfBHCBNB(),r.getPriceOfEARTHBNB(),r.getPriceOfBUSDBNB(),r.getPriceOfMOONUSDT()],t.next=4,Promise.all(n);case 4:d=t.sent,e.priceDEGENBUSD=Object(B.BigNumber)(d[0]).times(Object(B.BigNumber)(d[1])),e.priceDEGENBNB=Object(B.BigNumber)(d[1]),e.priceBHCBUSD=Object(B.BigNumber)(d[0]).times(Object(B.BigNumber)(d[2])),e.priceBHCBNB=Object(B.BigNumber)(d[2]),e.priceEARTHBUSD=Object(B.BigNumber)(d[0]).times(Object(B.BigNumber)(d[3])),e.priceEARTHBNB=Object(B.BigNumber)(d[3]),e.priceMOONUSDT=Object(B.BigNumber)(d[5]),e.priceBUSDBNB=Object(B.BigNumber)(d[4]),e.priceBNBBUSD=Object(B.BigNumber)(d[0]),console.log("priceBNBBUSD=",d[0]),console.log("priceDEGENBNB=",d[1]),console.log("priceBHCBNB=",d[2]),console.log("priceEARTHBNB=",d[3]),console.log("priceMOONUSDT=",d[5]),e.cows.map(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(r){var c,n,B,d,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.initialized){t.next=12;break}return c=new o.d(r.stakeToken.address,r.stakeToken.symbol,r.stakeToken.decimals),n=new o.b(r.address,r.stakeToken,r.yieldToken),t.next=5,n.rewardRate();case 5:return B=t.sent,t.next=8,c.balanceOf(r.address);case 8:d=t.sent,l=B.times(31536e3).div(d),console.log(r.name,l.toString()),1==r.id?e.apy[1]=l.times(e.priceMOONUSDT).times(100).toFixed(2):2==r.id?e.apy[2]=l.times(e.priceEARTHBUSD).times(100).toFixed(2):3==r.id?e.apy[3]=l.times(e.priceMOONUSDT).toFixed(2):4==r.id?e.apy[4]=l.times(e.priceMOONUSDT).div(e.priceEARTHBUSD.plus(1)).times(1e4).toFixed(2):5==r.id?e.apy[5]=l.times(e.priceMOONUSDT).div(e.priceBNBBUSD.plus(1)).times(100).toFixed(2):6==r.id?e.apy[6]=l.times(e.priceBHCBNB).div(e.priceDEGENBNB.plus(1)).times(100).toFixed(2):7==r.id?e.apy[7]=l.times(e.priceBHCBNB).div(e.priceBHCBNB.plus(1)).times(100).toFixed(2):8==r.id?e.apy[8]=l.times(e.priceBHCBNB).div(e.priceEARTHBNB.plus(1)).times(100).toFixed(2):9==r.id?e.apy[9]=l.times(e.priceBHCBNB).div(e.priceBUSDBNB.plus(1)).times(100).toFixed(2):10==r.id&&(e.apy[10]=l.times(e.priceDEGENBNB).div(e.priceDEGENBNB.plus(1)).times(100).toFixed(2));case 12:return t.abrupt("return",r);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 20:case"end":return t.stop()}}),t)})))()}},l=(r(647),r(41)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("div",{staticClass:"intro"},[r("h3",[e._v("\n        "+e._s(e.$t("home.protocol-name"))+"\n      ")]),e._v(" "),r("p",[e._v("\n        "+e._s(e.$t("home.protocol-desc"))+"\n      ")]),e._v(" "),r("p")])]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"price alert alert-success"},[e._v("\n    1 $DEGEN = "+e._s(e.priceDEGENBUSD?e.priceDEGENBUSD.toFixed(4):"--")+" $BUSD /\n    0.00001 $MOON = "+e._s(e.priceMOONUSDT?e.priceMOONUSDT.div(1e5).toFixed(4):"--")+" $USDT /\n    0.00001 $EARTH = "+e._s(e.priceEARTHBUSD?e.priceEARTHBUSD.div(1e5).toFixed(4):"--")+" $BUSD /\n    1 $BHC = "+e._s(e.priceBHCBUSD?e.priceBHCBUSD.toFixed(4):"--")+" $BUSD\n  ")]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"row"},e._l(e.cows,(function(t,i){return r("div",{key:i,staticClass:"col-6 cow"},[r("div",{staticClass:"card cow"},[r("div",{staticClass:"card-body"},[r("img",{staticClass:"tokenlogo",attrs:{src:t.image}}),e._v(" "),r("h5",{staticClass:"card-title title"},[e._v(e._s(t.name))]),e._v(" "),r("div",{staticClass:"desc"},[e._v(e._s(e.$t("home.card-desc",{symbol:t.stakeToken.symbol})))]),e._v(" "),r("p",{staticClass:"card-text apy"},[e._v(" APY: "+e._s(e.apy[t.id])+"% ")]),e._v(" "),t.initialized?r("a",{staticClass:"btn btn-block btn-success",attrs:{href:"/pool/"+t.id}},[e._v("\n            "+e._s(e.$t("home.select"))+"\n          ")]):r("a",{staticClass:"btn btn-secondary btn-block",attrs:{href:"#"}},[e._v(e._s(e.$t("home.coming-soon")))])])])])})),0),e._v(" "),r("br")])}),[],!1,null,"2965efce",null);t.default=component.exports}}]);