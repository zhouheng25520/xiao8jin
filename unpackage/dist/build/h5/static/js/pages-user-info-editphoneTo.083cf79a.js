(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-info-editphoneTo"],{"170c":function(t,i,e){"use strict";e.r(i);var n=e("b8a5"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=s.a},"5c81":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"uni-page-body[data-v-4f0eb1b4]{height:auto;min-height:100%;background-color:#f7f8fa}.by-bg-title[data-v-4f0eb1b4]{background-color:#2e2e2e;color:#fff;height:%?90?%;line-height:%?90?%;padding-left:%?30?%}.uni-card.by-card[data-v-4f0eb1b4]{border-radius:%?12?%;-webkit-box-shadow:%?4?% %?4?% %?20?% %?4?% hsla(0,0%,48.2%,.3);box-shadow:%?4?% %?4?% %?20?% %?4?% hsla(0,0%,48.2%,.3)}.by-dj-btn[data-v-4f0eb1b4]{color:#666;border:%?2?% #d7d5d5 solid;padding:%?14?% %?20?%;height:%?30?%;line-height:%?30?%;border-radius:%?12?%;margin-top:%?10?%;margin-right:%?15?%}.by-dj-btn.active[data-v-4f0eb1b4]{-webkit-box-ordinal-group:3;-webkit-order:%?2?% #f7f8fa solid;-ms-flex-order:%?2?% #f7f8fa solid;order:%?2?% #f7f8fa solid;color:#d7d5d5}.by-button-submit[data-v-4f0eb1b4]{background-color:#fd5950;background:-webkit-gradient(linear,left top,right top,from(#ff7575),to(#fd5950));background:-o-linear-gradient(left,#ff7575,#fd5950);background:linear-gradient(left,#ff7575,#fd5950)}body.?%PAGE?%[data-v-4f0eb1b4]{background-color:#f7f8fa}",""])},"7ba4":function(t,i,e){"use strict";var n=e("851a"),s=e.n(n);s.a},"851a":function(t,i,e){var n=e("5c81");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("93243e24",n,!0,{sourceMap:!1,shadowMode:!1})},b8a5:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{inputClearValue:"发送验证码",mobile:"",loading:!1,is_sms:!0,Loop:"",downtime:60,verifyCode:"",smsCode:""}},onLoad:function(t){t.mobile?this.mobile=t.mobile:uni.navigateTo({url:"/pages/user/info/info"})},onShow:function(){},onShareAppMessage:function(){return{title:this.webshareTitle,path:"/pages/tabBar/index/index"}},methods:{verification:function(t){var i=this.$store.state.openid,e=this.$store.state.sessionKey,n=this.verifyCode,s=this.smsCode,a=this;try{if(this.loading)return;this.loading=!0,this.$http.post(this.websiteUrl+"/api/api/verification",{openid:i,sessionKey:e,verifyCode:n,smsCode:s},function(t){1==t.data.code?uni.navigateTo({url:"/pages/user/info/editPhoneToyz?toverifyCode="+t.data.result}):uni.showModal({content:t.data.msg,showCancel:!1,success:function(){a.loading=!1}})})}catch(t){uni.showModal({content:"网络异常,请稍后重试...",showCancel:!1,success:function(){a.loading=!1}})}},sendSMS:function(t){var i=this;if(this.is_sms){this.is_sms=!1;var e=this.$store.state.openid,n=this.$store.state.sessionKey,s=1;try{this.$http.post(this.websiteUrl+"/api/api/sendSMS",{openid:e,sessionKey:n,is_user:s},function(t){1==t.data.code?(i.downtime=60,i.dateDown(),i.verifyCode=t.data.result):(uni.showModal({content:t.data.msg,showCancel:!1}),i.is_sms=!0)})}catch(t){uni.showModal({content:"网络异常,请稍后重试...",showCancel:!1}),this.is_sms=!0}}},dateDown:function(){var t=this;this.inputClearValue="重新发送("+this.downtime+")",this.Loop=setInterval(function(){if(0==t.downtime)return t.inputClearValue="发送验证码",t.is_sms=!0,void clearInterval(t.Loop);t.downtime--,t.inputClearValue="重新发送("+this.downtime+")"}.bind(this),1e3),this.is_sms&&clearInterval(this.Loop)},setNickname:function(){var t=this.$store.state.openid,i=this.$store.state.sessionKey,e=this.inputClearValue;if(""!=e)try{if(this.loading)return;this.loading=!0;var n=this;this.$http.post(this.websiteUrl+"/api/api/setNickname",{openid:t,sessionKey:i,nickname:e},function(t){uni.showToast({title:t.data.msg,success:function(){n.loading=!1}})})}catch(s){uni.showModal({content:"网络异常,请稍后重试...",showCancel:!1}),this.loading=!1}else uni.showModal({content:"请填写昵称",showCancel:!1})}}};i.default=n},d041:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"by-bg-title"},[t._v("验证码将发送至"+t._s(t.mobile))]),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-card by-card"},[e("v-uni-view",{staticClass:"uni-card-content"},[e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-view",{staticClass:"with-fun"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"number",placeholder:"请填入验证码"},model:{value:t.smsCode,callback:function(i){t.smsCode=i},expression:"smsCode"}}),e("v-uni-view",{staticClass:"text by-dj-btn",class:t.is_sms?"":"active",on:{click:function(i){i=t.$handleEvent(i),t.sendSMS(i)}}},[t._v(t._s(t.inputClearValue))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-common-mt"},[e("v-uni-button",{staticClass:"by-button-submit",attrs:{type:"warn",loading:t.loading},on:{click:function(i){i=t.$handleEvent(i),t.verification(i)}}},[t._v("下一步")])],1)],1)],1)},s=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return s})},d4f6:function(t,i,e){"use strict";e.r(i);var n=e("d041"),s=e("170c");for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);e("7ba4");var o=e("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"4f0eb1b4",null);i["default"]=r.exports}}]);