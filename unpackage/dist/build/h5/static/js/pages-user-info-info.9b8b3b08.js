(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-info-info"],{"0e3e":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-e6bc47a6]{height:auto;min-height:100%;background-color:#f2f2f2}.info-top-bg[data-v-e6bc47a6]{width:100%;height:%?213?%;padding-top:%?50?%}.info-head-pic[data-v-e6bc47a6]{margin:0 auto;border-radius:50%;\n\t/* height: 107upx;\n\twidth: 107upx; */\n\t/*background: #fecccc; opacity: 0.8;*/overflow:hidden}.info-head-pic uni-image[data-v-e6bc47a6]{height:%?100?%;width:%?100?%;float:right}.info-head-bj-btn[data-v-e6bc47a6]{width:%?120?%;margin:0 auto}.info-head-bj-btn uni-image[data-v-e6bc47a6]{height:%?42?%;width:%?122?%;margin-top:%?20?%}.hg50[data-v-e6bc47a6]{height:%?98?%;color:#576175;font-size:%?28?%;\n\t/* font-weight: 600; */color:#999;padding:0 %?20?%}.hg50 uni-text[data-v-e6bc47a6]{color:#333}.hg50 .uni-navigate-right[data-v-e6bc47a6]:after{font-size:%?28?%}.hg50 .uni-navigate-right[data-v-e6bc47a6]{\n\t/* line-height: 80upx; */border-bottom:1px solid #ecedef}\n\n/* .hg50 .uni-navigate-right.bb0 {\n\tborder-bottom: 0upx;\n} */.uni-card.by-card[data-v-e6bc47a6]{border-radius:%?12?%;-webkit-box-shadow:%?4?% %?4?% %?20?% %?4?% rgba(0,37,174,.2);box-shadow:%?4?% %?4?% %?20?% %?4?% rgba(0,37,174,.2)}.by-mt-30[data-v-e6bc47a6]{margin-top:%?40?%}.by-sdh[data-v-e6bc47a6]{font-size:%?26?%;font-weight:400}.name_info[data-v-e6bc47a6]{color:#999;font-size:%?24?%}.my_head[data-v-e6bc47a6]{color:#999}body.?%PAGE?%[data-v-e6bc47a6]{background-color:#f2f2f2}",""])},"29cd":function(t,e,i){"use strict";i.r(e);var a=i("5fd8"),n=i("9583");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("9516");var o=i("2877"),u=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"e6bc47a6",null);e["default"]=u.exports},"5fd8":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"uni-card by-card by-mt-30"},[i("v-uni-view",{staticClass:"uni-card-content"},[i("v-uni-view",{staticClass:"my_head",on:{click:function(e){e=t.$handleEvent(e),t.chooseImage(e)}}},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right bb0 uni-flex uni-row"},[i("v-uni-text",{staticClass:"flex-item",staticStyle:{width:"70%"}},[t._v("我的头像")]),i("v-uni-view",{staticClass:"info-head-pic flex-item"},[i("v-uni-image",{attrs:{src:t.userInfo.head_img?t.userInfo.head_img:"../../../static/head-no-pic.png","data-src":t.userInfo.head_img?t.userInfo.head_img:"../../../static/head-no-pic.png"},on:{click:function(e){e=t.$handleEvent(e),t.previewImage(e)}}})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-card by-card"},[i("v-uni-view",{staticClass:"uni-card-content"},[i("v-uni-view",{staticClass:"hg50"},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right",on:{click:function(e){e=t.$handleEvent(e),t.goDetailPage("/pages/user/info/editname?nickname="+t.userInfo.nickname)}}},[t._v("昵称"),i("v-uni-text",{staticClass:"uni-list-cell-left by-sdh"},[t._v(t._s(t.userInfo.nickname?t.userInfo.nickname:"未设置"))])],1)],1),i("v-uni-view",{staticClass:"hg50"},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right",staticStyle:{"border-bottom":"none"},on:{click:function(e){e=t.$handleEvent(e),t.goDetailPage("/pages/user/info/editphone?mobile="+t.userInfo.mobile)}}},[t._v("手机号"),i("v-uni-text",{staticClass:"uni-list-cell-left by-sdh"},[t._v(t._s(t.userInfo.mobile))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-card by-card by-mt-30"},[i("v-uni-view",{staticClass:"uni-card-content"},[i("v-uni-view",{staticClass:"hg50"},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right bb0",staticStyle:{"border-bottom":"none"},on:{click:function(e){e=t.$handleEvent(e),t.goDetailPage("/pages/user/info/realname")}}},[t._v("实名认证"),0===t.userInfo.is_validate?i("v-uni-text",{staticClass:"uni-list-cell-left by-sdh"},[t._v("去认证")]):t._e(),1===t.userInfo.is_validate?i("v-uni-text",{staticClass:"uni-list-cell-left by-sdh"},[t._v(t._s(t.userInfo.realname))]):t._e()],1)],1)],1)],1)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},9516:function(t,e,i){"use strict";var a=i("efaf"),n=i.n(a);n.a},9583:function(t,e,i){"use strict";i.r(e);var a=i("df11"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},df11:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("a34a"));function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e,i,a,n,s,o){try{var u=t[s](o),r=u.value}catch(c){return void i(c)}u.done?e(r):Promise.resolve(r).then(a,n)}function o(t){return function(){var e=this,i=arguments;return new Promise(function(a,n){var o=t.apply(e,i);function u(t){s(o,a,n,u,r,"next",t)}function r(t){s(o,a,n,u,r,"throw",t)}u(void 0)})}}var u={data:function(){return{imageList:[],userInfo:{nickname:"未设置",mobile:"未绑定",head_img:"../../../static/head-no-pic.png",vip_name:"普通会员",group_name:"会员",is_validate:0,realname:""}}},onLoad:function(){},onShow:function(){this.getUserInfoData()},onShareAppMessage:function(){return{title:this.webshareTitle,path:"/pages/tabBar/index/index"}},onBackPress:function(){uni.switchTab({url:"/pages/tabBar/user/user"})},onNavigationBarButtonTap:function(t){},methods:{getUserInfoData:function(){var t=this,e=this.$store.state.openid,i=this.$store.state.sessionKey;try{this.$http.post(this.websiteUrl+"/api/api/getUserInfoData",{openid:e,sessionKey:i},function(e){1==e.data.code&&(t.userInfo=e.data.result.userInfo,t.imageList=[t.userInfo.head_img])})}catch(a){uni.showModal({content:"网络异常,请稍后重试...",showCancel:!1})}},goDetailPage:function(t){var e=this.$store.state.openid;null===e?uni.navigateTo({url:"/pages/user/login/login"}):uni.navigateTo({url:t})},chooseImage:function(){var t=o(a.default.mark(function t(){var e,i,n=this;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this.$store.state.openid,i=this.$store.state.sessionKey,uni.chooseImage({sizeType:["compressed"],count:1,success:function(t){n.imageList=[],n.imageList=n.imageList.concat(t.tempFilePaths);var a=n.imageList.length;if(a>=1){n.userInfo.head_img=n.imageList[a-1];var s=t.tempFilePaths;uni.showLoading();try{uni.uploadFile({url:n.websiteUrl+"/api/upload/uploadface",filePath:s[a-1],name:"file",formData:{data:JSON.stringify({openid:e,sessionKey:i})},success:function(t){var e=JSON.parse(t.data);uni.hideLoading(),1==e.code?uni.showToast({title:"成功"}):uni.showToast({title:e.msg})}})}catch(o){uni.hideLoading()}}else uni.showToast({title:"没有选中图片"})}});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),previewImage:function(t){var e=t.target.dataset.src;uni.showLoading(),uni.previewImage({current:e,urls:this.imageList.length>0?this.imageList:[e],complete:function(t){uni.hideLoading()}})}}};e.default=u},efaf:function(t,e,i){var a=i("0e3e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("598147e0",a,!0,{sourceMap:!1,shadowMode:!1})}}]);