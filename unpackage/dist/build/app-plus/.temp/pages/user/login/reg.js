require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([15],{138:function(t,e,s){"use strict";var i=o(s(2)),n=o(s(139));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},139:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(141),n=s.n(i),o=s(142);var a=function(t){s(140)},l=s(0)(n.a,o.a,a,null,null);e.default=l.exports},140:function(t,e){},141:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i,n=s(4),o=(i=n)&&i.__esModule?i:{default:i};e.default={data:function(){return{showPassword:!0,showClearIcon:!1,inputClearValue:"",loading:!1,popType:"middle",tiptitle:"提示",showPopupMiddle:!1,tipcontent:"",is_sms:!0,Loop:"",downtime:60,verifyCode:"",smsCode:"",fsbtn:"发送验证码"}},onLoad:function(){},onPullDownRefresh:function(){},onShareAppMessage:function(){return{title:this.webshareTitle,path:"/pages/tabBar/index/index"}},onNavigationBarButtonTap:function(t){},methods:{goDetailPage:function(e){t.navigateTo({url:e})},hidePopup:function(){this.showPopupMiddle=!1,this.showPopupTop=!1,this.showPopupBottom=!1},showMiddlePopup:function(){this.hidePopup(),this.popType="middle",this.showPopupMiddle=!0},changePassword:function(){this.showPassword=!this.showPassword},bindClearInput:function(t){this.inputClearValue=t.target.value,t.target.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1},formSubmit:function(e){var s=this,i=e.detail.value.account,n=e.detail.value.password,o=e.detail.value.smsCode,a=this.verifyCode;if(""===i)return t.showModal({content:"请填写手机号",showCancel:!1}),!1;if(""===o)return t.showModal({content:"请填写验证码",showCancel:!1}),!1;if(""===a)return t.showModal({content:"请先获取验证码",showCancel:!1}),!1;if(""===n)return t.showModal({content:"请填写6~18位字符新密码",showCancel:!1}),!1;var l=this;try{this.$http.post(this.websiteUrl+"/api/api/reg",{phone:i,password:n,smsCode:o,verifyCode:a},function(e){1==e.data.code?t.showModal({content:e.data.msg,showCancel:!1,success:function(){s.$store.dispatch("apiLogin",{openid:e.data.result.token,sessionKey:e.data.result.session_id}),t.switchTab({url:"/pages/tabBar/user/user"})}}):t.showModal({content:e.data.msg,showCancel:!1,success:function(){l.loading=!1}})})}catch(e){t.showModal({content:"网络异常,请稍后重试...",showCancel:!1,success:function(){l.loading=!1}})}},getClause:function(){var e=this;try{this.$http.post(this.websiteUrl+"/api/api/getClause",{},function(s){1==s.data.code?(e.tiptitle="隐私条款",e.tipcontent=s.data.result.article.content.replace(/\\/g,"").replace(/<img/g,'<img style="display:none;"'),e.showMiddlePopup()):t.showModal({content:s.data.msg,showCancel:!1})})}catch(e){t.showModal({content:"网络异常,请稍后重试...",showCancel:!1})}},sendSMS:function(e){var s=this;if(this.is_sms){this.is_sms=!1;var i=this.inputClearValue;if(""===i)return t.showModal({content:"请填写手机号",showCancel:!1}),!1;try{this.$http.post(this.websiteUrl+"/api/api/sendSMS",{phone:i},function(e){1==e.data.code?(s.downtime=60,s.dateDown(),s.verifyCode=e.data.result):(t.showModal({content:e.data.msg,showCancel:!1}),s.is_sms=!0)})}catch(e){t.showModal({content:"网络异常,请稍后重试...",showCancel:!1}),this.is_sms=!0}}},dateDown:function(){var t=this;this.fsbtn="重新发送("+this.downtime+")",this.Loop=setInterval(function(){if(0==t.downtime)return t.fsbtn="发送验证码",t.is_sms=!0,void clearInterval(t.Loop);t.downtime--,t.fsbtn="重新发送("+this.downtime+")"}.bind(this),1e3),this.is_sms&&clearInterval(this.Loop)}},components:{uniPopup:o.default}}}).call(e,s(1).default)},142:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"uni-common-pb"},[t._m(0),s("view",{staticClass:"uni-padding-wrap"},[s("form",{attrs:{eventid:"7Wn-6"},on:{submit:t.formSubmit}},[s("view",{staticClass:"uni-form-item uni-column"},[s("view",{staticClass:"with-fun by-login-input"},[s("input",{staticClass:"uni-input",attrs:{type:"number",name:"account",placeholder:"请填写手机号",value:t.inputClearValue,eventid:"F1e-0"},on:{input:t.bindClearInput}}),t.showClearIcon?s("view",{staticClass:"uni-icon uni-icon-clear",attrs:{eventid:"gHf-1"},on:{click:t.clearIcon}}):t._e()])]),s("view",{staticClass:"uni-form-item uni-column"},[s("view",{staticClass:"with-fun by-login-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.smsCode,expression:"smsCode"}],staticClass:"uni-input",attrs:{type:"number",name:"smsCode",placeholder:"请填入验证码",eventid:"i72-2"},domProps:{value:t.smsCode},on:{input:function(e){e.target.composing||(t.smsCode=e.target.value)}}}),s("view",{staticClass:"text by-dj-btn",class:t.is_sms?"":"active",attrs:{eventid:"wF0-3"},on:{click:t.sendSMS}},[t._v(t._s(t.fsbtn))])])]),s("view",{staticClass:"uni-form-item uni-column"},[s("view",{staticClass:"with-fun by-login-input"},[s("input",{staticClass:"uni-input",attrs:{placeholder:"请填写6~18位字符密码",name:"password",password:t.showPassword}}),s("view",{staticClass:"uni-icon uni-icon-eye",class:[t.showPassword?"":"uni-active"],attrs:{eventid:"ryR-4"},on:{click:t.changePassword}})])]),s("view",{staticClass:"uni-btn-v"},[s("button",{attrs:{formType:"submit",loading:t.loading,type:"warn"}},[t._v("注 册")])],1),s("view",{staticClass:"text clause"},[t._v("\n\t\t\t\t点击注册即表示您同意"),s("text",{attrs:{eventid:"nGH-5"},on:{click:t.getClause}},[t._v("《隐私条例和服务条款》")])])])],1),s("uni-popup",{attrs:{show:t.showPopupMiddle,type:t.popType,title:t.tiptitle,queren:!0,quxiao:!0,eventid:"SSO-7",mpcomid:"1eT-1"},on:{hidePopup:t.hidePopup}},[s("view",{staticClass:"uni-common-mt uni-helllo-text uni-center",staticStyle:{"text-align":"left"}},[s("rich-text",{attrs:{nodes:t.tipcontent,mpcomid:"CAA-0"}})],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-login-logo"},[e("image",{attrs:{src:"../../../static/login-logo.png"}})])}]};e.a=i}},[138]);