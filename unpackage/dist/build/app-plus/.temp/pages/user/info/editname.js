require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([22],{62:function(t,n,e){"use strict";var a=s(e(2)),i=s(e(63));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},63:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(65),i=e.n(a),s=e(66);var o=function(t){e(64)},c=e(0)(i.a,s.a,o,null,null);n.default=c.exports},64:function(t,n){},65:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{showClearIcon:!1,inputClearValue:"",loading:!1}},onLoad:function(t){t.nickname&&(this.inputClearValue=t.nickname,this.showClearIcon=!0)},onShow:function(){},onShareAppMessage:function(){return{title:this.webshareTitle,path:"/pages/tabBar/index/index"}},methods:{bindClearInput:function(t){this.inputClearValue=t.target.value,t.target.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1},setNickname:function(){var n=this.$store.state.openid,e=this.$store.state.sessionKey,a=this.inputClearValue;if(""!=a){var i=this;try{if(this.loading)return;this.loading=!0,this.$http.post(this.websiteUrl+"/api/api/setNickname",{openid:n,sessionKey:e,nickname:a},function(n){t.showModal({content:n.data.msg,showCancel:!1,success:function(){i.loading=!1}})})}catch(n){t.showModal({content:"网络异常,请稍后重试...",showCancel:!1,success:function(){i.loading=!1}})}}else t.showModal({content:"请填写昵称",showCancel:!1})}}}}).call(n,e(1).default)},66:function(t,n,e){"use strict";var a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"uni-padding-wrap"},[e("view",{staticClass:"uni-card by-card"},[e("view",{staticClass:"uni-card-content"},[e("view",{staticClass:"uni-form-item uni-column"},[e("view",{staticClass:"with-fun"},[e("input",{staticClass:"uni-input",attrs:{placeholder:"请填入昵称",value:t.inputClearValue,eventid:"yas-0"},on:{input:t.bindClearInput}}),t.showClearIcon?e("view",{staticClass:"uni-icon uni-icon-clear",attrs:{eventid:"GUx-1"},on:{click:t.clearIcon}}):t._e()])])])]),e("view",{staticClass:"uni-common-mt"},[e("button",{staticClass:"by-button-submit",attrs:{type:"warn",loading:t.loading,eventid:"XIS-2"},on:{click:t.setNickname}},[t._v("提交保存")])],1)])},staticRenderFns:[]};n.a=a}},[62]);