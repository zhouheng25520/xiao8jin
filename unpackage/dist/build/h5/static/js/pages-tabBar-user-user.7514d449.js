(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-user-user"],{"0293":function(e,t,i){"use strict";i.r(t);var a=i("d5ee"),n=i("74fa");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("2a53");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"5b5be6e8",null);t["default"]=r.exports},"1d17":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{realtime:"",searchIndex:3,userInfo:{nickname:"未登录",vip_name:"游客",mobile:"",head_img:"../../../static/head-no-pic.png",integral:"0",message:"0",invite:"0",repay_num:"0"},navlist:[{title:"交易明细",path:"/pages/user/account/account"},{title:"邀请好友",path:"/pages/user/invite/invite"},{title:"在线客服",path:"/pages/user/im-chat/im-chat"},{title:"APP下载",path:"/pages/index/web-view/web-view?title=APP下载&url="+this.websiteUrl+"/index/index/download"}],setlist:[{title:"设置",path:"/pages/user/set/set"}]}},onLoad:function(){},onShow:function(){this.getUserData()},onHide:function(){clearTimeout(this.realtime)},onPullDownRefresh:function(){this.getUserData(),uni.stopPullDownRefresh()},onShareAppMessage:function(){return{title:this.webshareTitle,path:"/pages/tabBar/index/index"}},onNavigationBarButtonTap:function(e){},methods:{getUserData:function(){var e=this,t=this.$store.state.openid,i=this.$store.state.sessionKey;try{this.$http.post(this.websiteUrl+"/api/api/getUserData",{openid:t,sessionKey:i},function(t){if(1==t.data.code){if(e.userInfo=t.data.result.userInfo,1!=e.userInfo.is_validate){if(clearTimeout(e.realtime),uni.getStorageSync("is_tishireal"))return;uni.setStorageSync("is_tishireal",!0),e.realtime=setTimeout(function(){uni.showModal({title:"提示",content:"您还没有进行实名认证，是否立即前往认证？",success:function(e){e.confirm&&uni.navigateTo({url:"/pages/user/info/realname"})}})}.bind(e),2e3)}}else e.$store.commit("logout")})}catch(a){uni.showModal({content:"网络异常,请稍后重试...",showCancel:!1})}},goDetailPage:function(e){clearTimeout(this.realtime);var t=this.$store.state.openid;null===t?uni.navigateTo({url:"/pages/user/login/login"}):uni.navigateTo({url:e})}}};t.default=a},"2a53":function(e,t,i){"use strict";var a=i("e974"),n=i.n(a);n.a},"74fa":function(e,t,i){"use strict";i.r(t);var a=i("1d17"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},c0b1:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-5b5be6e8]{height:auto;min-height:100%;background-color:#f7f8fa}.user-top-bg[data-v-5b5be6e8]{width:100%;height:%?263?%}.head-pic[data-v-5b5be6e8]{border-radius:50%;height:%?107?%;width:%?107?%; /*background: #fecccc; opacity: 0.8;*/overflow:hidden}.head-pic uni-image[data-v-5b5be6e8]{height:%?107?%;width:%?107?%}.head-bj-btn[data-v-5b5be6e8]{width:%?120?%}.head-bj-btn uni-image[data-v-5b5be6e8]{height:%?40?%;width:%?120?%;margin-top:%?30?%}.head-left[data-v-5b5be6e8]{width:%?130?%}.head-center[data-v-5b5be6e8]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#fff;font-weight:700}.head-nickname[data-v-5b5be6e8]{font-size:%?34?%}.head-phone[data-v-5b5be6e8]{font-size:%?24?%}.head-bottom[data-v-5b5be6e8]{height:%?124?%;margin-top:%?30?%}.head-bottom-news[data-v-5b5be6e8]{color:#fff;width:%?120?%;text-align:center;font-weight:600;font-size:%?36?%}.head-bottom-integral[data-v-5b5be6e8]{color:#fff;width:%?220?%;text-align:center;font-weight:600;font-size:%?36?%}.head-bottom-invite[data-v-5b5be6e8]{color:#fff;width:%?170?%;text-align:center;font-weight:600;font-size:%?36?%}.head-bottom-news .text[data-v-5b5be6e8]{font-weight:400;font-size:%?28?%}.head-bottom-integral .text[data-v-5b5be6e8]{font-weight:400;font-size:%?28?%}.head-bottom-invite .text[data-v-5b5be6e8]{font-weight:400;font-size:%?28?%}.user-center-icon[data-v-5b5be6e8]{margin:%?30?% %?0?%}.uni-row-plan[data-v-5b5be6e8]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;background-color:#4dc5bb;border-radius:%?15?%;height:%?180?%}.uni-row-vip[data-v-5b5be6e8]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;background-color:#e97070;border-radius:%?15?%;height:%?180?%}.uni-row-pd[data-v-5b5be6e8]{width:%?30?%}.uni-row-plan .plan-title[data-v-5b5be6e8]{font-size:%?34?%;line-height:%?50?%;color:#fff}.uni-row-plan .plan-btn[data-v-5b5be6e8]{font-size:%?24?%;display:block;line-height:%?80?%;color:#c7eae6}.uni-row-plan .plan-num[data-v-5b5be6e8]{font-size:%?34?%;line-height:%?50?%;color:#fff}.uni-row-vip .vip-title[data-v-5b5be6e8]{font-size:%?34?%;line-height:%?50?%;color:#fff}.uni-row-vip .vip-btn[data-v-5b5be6e8]{font-size:%?24?%;display:block;line-height:%?80?%;color:#f9dbdb}.uni-row-vip .vip-num[data-v-5b5be6e8]{font-size:%?34?%;line-height:%?50?%;color:#fff}.uni-row-vip .vip-num uni-image[data-v-5b5be6e8]{width:%?58?%;height:%?58?%;margin-top:%?0?%}.hg50[data-v-5b5be6e8]{height:%?120?%;color:#576175;font-size:%?34?%;font-weight:600}.hg50 .uni-navigate-right[data-v-5b5be6e8]:after{font-size:%?52?%}.hg50 .uni-navigate-right[data-v-5b5be6e8]{line-height:%?80?%;border-bottom:%?1?% solid #ecedef}.hg50 .uni-navigate-right.bb0[data-v-5b5be6e8]{border-bottom:%?0?%}.uni-card.by-card[data-v-5b5be6e8]{border-radius:%?12?%;-webkit-box-shadow:%?4?% %?4?% %?20?% %?4?% hsla(0,0%,48.2%,.3);box-shadow:%?4?% %?4?% %?20?% %?4?% hsla(0,0%,48.2%,.3)}.by-mt-30[data-v-5b5be6e8]{margin-top:%?40?%}body.?%PAGE?%[data-v-5b5be6e8]{background-color:#f7f8fa}",""])},d5ee:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"user-top-bg",staticStyle:{background:"url(../../../static/user_top_bg.png) no-repeat","background-size":"100% 100%"}},[i("v-uni-view",{staticClass:"uni-flex uni-row uni-padding-wrap",on:{click:function(t){t=e.$handleEvent(t),e.goDetailPage("/pages/user/info/info")}}},[i("v-uni-view",{staticClass:"text head-left"},[i("v-uni-view",{staticClass:"head-pic"},[i("v-uni-image",{attrs:{src:e.userInfo.head_img?e.userInfo.head_img:"../../../static/head-no-pic.png"}})],1)],1),i("v-uni-view",{staticClass:"text head-center"},[i("v-uni-view",{staticClass:"text head-nickname"},[e._v(e._s(e.userInfo.nickname))]),i("v-uni-view",{staticClass:"text head-phone"},[e._v(e._s(e.userInfo.vip_name))])],1),i("v-uni-view",{staticClass:"text head-bj-btn"},[i("v-uni-image",{attrs:{src:"../../../static/head-bj-btn.png"}})],1)],1),i("v-uni-view",{staticClass:"uni-flex uni-row uni-padding-wrap head-bottom"},[i("v-uni-view",{staticClass:"text head-bottom-news",on:{click:function(t){t=e.$handleEvent(t),e.goDetailPage("/pages/user/news/news")}}},[e._v(e._s(e.userInfo.message)),i("v-uni-view",{staticClass:"text"},[e._v("消息")])],1),i("v-uni-view",{staticClass:"text head-bottom-integral",on:{click:function(t){t=e.$handleEvent(t),e.goDetailPage("/pages/user/integral/integral")}}},[e._v(e._s(e.userInfo.integral)),i("v-uni-view",{staticClass:"text"},[e._v("积分")])],1),i("v-uni-view",{staticClass:"text head-bottom-invite",on:{click:function(t){t=e.$handleEvent(t),e.goDetailPage("/pages/user/invite/invite")}}},[e._v(e._s(e.userInfo.invite)),i("v-uni-view",{staticClass:"text"},[e._v("邀请好友")])],1)],1)],1),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"user-center-icon"},[i("v-uni-view",{staticClass:"uni-flex uni-row"},[i("v-uni-view",{staticClass:"text uni-row-plan uni-triplex-row",on:{click:function(t){t=e.$handleEvent(t),e.goDetailPage("/pages/user/plan/plan")}}},[i("v-uni-view",{staticClass:"text plan-title uni-triplex-left"},[e._v("我的计划"),i("v-uni-view",{staticClass:"text plan-btn"},[e._v("查看")])],1),i("v-uni-view",{staticClass:"text plan-num uni-triplex-right"},[e._v("("+e._s(e.userInfo.repay_num)+")")])],1),i("v-uni-view",{staticClass:"text uni-row-pd"}),i("v-uni-view",{staticClass:"text uni-row-vip uni-triplex-row",on:{click:function(t){t=e.$handleEvent(t),e.goDetailPage("/pages/user/agent/agent")}}},[i("v-uni-view",{staticClass:"text vip-title uni-triplex-left"},[e._v("推广中心"),i("v-uni-view",{staticClass:"text vip-btn"},[e._v("查看")])],1),i("v-uni-view",{staticClass:"text vip-num uni-triplex-right"},[i("v-uni-image",{attrs:{src:"../../../static/user_agent.png"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-card by-card"},[i("v-uni-view",{staticClass:"uni-card-content"},e._l(e.navlist,function(t,a){return i("v-uni-view",{key:a,staticClass:"hg50"},[i("v-uni-view",{class:a==e.searchIndex?"uni-list-cell-navigate uni-navigate-right bb0":"uni-list-cell-navigate uni-navigate-right",on:{click:function(i){i=e.$handleEvent(i),e.goDetailPage(t.path)}}},[e._v(e._s(t.title))])],1)}))],1),i("v-uni-view",{staticClass:"uni-card by-card by-mt-30"},[i("v-uni-view",{staticClass:"uni-card-content"},e._l(e.setlist,function(t,a){return i("v-uni-view",{key:a,staticClass:"hg50"},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right bb0",on:{click:function(i){i=e.$handleEvent(i),e.goDetailPage(t.path)}}},[e._v(e._s(t.title))])],1)}))],1)],1)],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},e974:function(e,t,i){var a=i("c0b1");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("2b45de0a",a,!0,{sourceMap:!1,shadowMode:!1})}}]);