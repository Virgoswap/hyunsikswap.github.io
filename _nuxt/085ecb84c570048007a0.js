(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{299:function(t,e,n){var content=n(645);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("a50b9fe4",content,!0,{sourceMap:!1})},644:function(t,e,n){"use strict";var r=n(299);n.n(r).a},645:function(t,e,n){(e=n(54)(!1)).push([t.i,".market[data-v-7792a87e]{display:flex;flex-direction:column;align-items:center;justify-content:center}.form[data-v-7792a87e]{position:relative;max-width:820px;width:100%;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;padding:2rem}.form[data-v-7792a87e],.transaction[data-v-7792a87e]{margin-bottom:40px}h1[data-v-7792a87e]{font-size:22px;margin-bottom:20px}.input-body[data-v-7792a87e]{display:flex;align-items:flex-start}.input-body .input[data-v-7792a87e]{width:calc(100% - 200px)}.left-label[data-v-7792a87e]{width:100%;text-align:center;display:flex;justify-content:space-between}.left-label span[data-v-7792a87e]{color:#565a69}.arrow-down[data-v-7792a87e]{height:100px;display:flex;justify-content:center;font-size:23px}.submit-button[data-v-7792a87e]{width:200px;margin-left:20px;border-color:#28a745;color:#28a745;margin-top:32px}.btn-outline-secondary[data-v-7792a87e]:hover{color:#fff;background-color:#28a745;border-color:#28a745}.address-item[data-v-7792a87e]{margin-bottom:10px}.address-item[data-v-7792a87e]:hover{color:#28a745;text-decoration:underline;cursor:pointer}",""]),t.exports=e},655:function(t,e,n){"use strict";n.r(e);n(35);var r=n(15),o=(n(260),n(227)),c=n(272),l=n(219),d=n(103),f=n(56),m={name:"market",data:function(){return{bnb_amount:"",wbnb_amount:"",bnb_balance:"-",wbnb_balance:"-",transactions:[]}},computed:{erc20:function(){var t=f.default.tokens.find((function(t){return"bnb"==t.symbol}));return t&&this.$store.state.connectedAccount?new c.c(t.address):""},wbnb:function(){var t=f.default.tokens.find((function(t){return"bnb"==t.symbol}));return t&&this.$store.state.connectedAccount?new c.f(t.address):""},bnbState:function(){return this.bnb_amount?new o.BigNumber(this.bnb_amount).gt(0):null},wbnbState:function(){return this.wbnb_amount?new o.BigNumber(this.wbnb_amount).gt(0):null}},watch:{erc20:function(t){t&&this.getBnbBalance()},wbnb:function(t){var e=this;t&&this.getWbnbBalance().then((function(data){e.wbnb_balance=data}))}},methods:{etherscanTx:function(t){return d.a.etherscanTx(t)},getBnbBalance:function(){var t=this;this.erc20&&window.web3.eth.getBalance(this.$store.state.connectedAccount,"latest",(function(e,data){t.bnb_balance=data?new o.BigNumber(data).shiftedBy(-18):0}))},getWbnbBalance:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.wbnb){e.next=5;break}return e.next=3,t.wbnb.balanceOf(t.$store.state.connectedAccount);case 3:return n=e.sent,e.abrupt("return",n?n.toNumber():"-");case 5:return e.abrupt("return","-");case 6:case"end":return e.stop()}}),e)})))()},swapBnb:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.state.connectedAccount&&(n=f.default.tokens.find((function(t){return"bnb"==t.symbol})),t.wbnb.withdraw(t.$store.state.connectedAccount,n.address,t.wbnb_amount,(function(e,n){if(e)t.$bvToast.toast(error,{title:t.$t("market.error"),solid:!0});else{t.transactions.push(n);var r=t,o=setInterval((function(){window.web3.eth.getTransactionReceipt(n,(function(t,e){e&&(r.getBnbBalance(),r.getWbnbBalance().then((function(data){r.wbnb_balance=data})),clearInterval(o))}))}),2e3)}})));case 1:case"end":return e.stop()}}),e)})))()},swapWbnb:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.state.connectedAccount&&(n=f.default.tokens.find((function(t){return"bnb"==t.symbol})),r={from:t.$store.state.connectedAccount,to:n.address,value:Object(l.toBN)(new o.BigNumber(t.bnb_amount).shiftedBy(18)),gasPrice:Object(l.toBN)(2e10),gas:7e4},window.web3.eth.sendTransaction(r,(function(e,n){if(e)t.$bvToast.toast(error,{title:t.$t("market.error"),solid:!0});else{t.transactions.push(n);var r=t,o=setInterval((function(){window.web3.eth.getTransactionReceipt(n,(function(t,e){e&&(r.getBnbBalance(),r.getWbnbBalance().then((function(data){r.wbnb_balance=data})),clearInterval(o))}))}),2e3)}})));case 1:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;this.getBnbBalance(),this.getWbnbBalance().then((function(data){t.wbnb_balance=data}))}},v=(n(644),n(41)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"market"},[n("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.$t("market.tip")))]),t._v(" "),n("h1",[t._v(t._s(t.$t("market.title-swap")))]),t._v(" "),n("div",{staticClass:"form"},[n("div",{staticClass:"input-body top"},[n("div",{staticClass:"input",attrs:{role:"group"}},[n("label",{staticClass:"left-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("market.from",{symbol:"BNB"}))),n("span",[t._v(t._s(t.$t("market.balance",{balance:t.bnb_balance})))])]),t._v(" "),n("b-input",{attrs:{state:t.bnbState,placeholder:t.$t("market.amount"),trim:""},model:{value:t.bnb_amount,callback:function(e){t.bnb_amount=e},expression:"bnb_amount"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(t._s(t.$t("market.greather-than")))])],1),t._v(" "),n("b-button",{staticClass:"submit-button",attrs:{variant:"outline-secondary"},on:{click:t.swapWbnb}},[t._v(t._s(t.$t("market.swap",{symbol:"WBNB"})))])],1),t._v(" "),n("div",{staticClass:"arrow-down"}),t._v(" "),n("div",{staticClass:"input-body top"},[n("div",{staticClass:"input",attrs:{role:"group"}},[n("label",{staticClass:"left-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("market.from",{symbol:"WBNB"}))),n("span",[t._v(t._s(t.$t("market.balance",{balance:t.wbnb_balance})))])]),t._v(" "),n("b-input",{attrs:{state:t.wbnbState,placeholder:t.$t("market.amount"),trim:""},model:{value:t.wbnb_amount,callback:function(e){t.wbnb_amount=e},expression:"wbnb_amount"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(t._s(t.$t("market.greather-than")))])],1),t._v(" "),n("b-button",{staticClass:"submit-button",attrs:{variant:"outline-secondary"},on:{click:t.swapBnb}},[t._v(t._s(t.$t("market.swap",{symbol:"BNB"})))])],1)]),t._v(" "),t.transactions.length>0?n("h1",[t._v(t._s(t.$t("market.title-transaction")))]):t._e(),t._v(" "),t.transactions.length>0?n("div",{staticClass:"transaction"},t._l(t.transactions,(function(e,i){return n("div",{key:i,staticClass:"address-item"},[n("a",{attrs:{href:t.etherscanTx(e),target:"_blank"}},[t._v(" "+t._s(e))])])})),0):t._e()])}),[],!1,null,"7792a87e",null);e.default=component.exports}}]);