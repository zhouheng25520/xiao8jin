(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-agent-jyph"],{1625:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,"uni-page-body[data-v-2a975a90]{height:auto;min-height:100%;background-color:#f76045}.agent_user_bg[data-v-2a975a90]{height:%?569?%;width:100%;color:#fff;line-height:%?569?%}.syph-top[data-v-2a975a90]{height:%?359?%;margin-top:%?0?%;padding-top:%?210?%;padding-left:%?20?%;padding-right:%?20?%}.syph-list-bg[data-v-2a975a90]{height:%?130?%;width:100%;color:#353535;line-height:%?130?%}.syph-list[data-v-2a975a90]{height:%?130?%}.syph-list-b-bg[data-v-2a975a90]{height:%?45?%;width:100%;color:#fff;line-height:%?45?%}.syph-list-b[data-v-2a975a90]{height:%?45?%}.by-flex[data-v-2a975a90]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.text-r[data-v-2a975a90]{text-align:right}.text-l[data-v-2a975a90]{text-align:left}.text-c[data-v-2a975a90]{text-align:center}.top-1[data-v-2a975a90]{padding-top:%?50?%;text-align:center}.top-1 .head-pic[data-v-2a975a90]{margin:0 auto;border-radius:50%;height:%?125?%;width:%?125?%;overflow:hidden;margin-top:%?20?%}.top-1 .head-pic uni-image[data-v-2a975a90]{width:%?125?%;height:%?125?%}.top-1 .ph-name[data-v-2a975a90]{font-size:%?24?%;line-height:%?70?%;color:#333}.top-1 .ph-sy[data-v-2a975a90]{font-size:%?32?%;line-height:%?50?%;color:#353535}.top-2[data-v-2a975a90]{padding-top:%?28?%;text-align:center}.top-2 .head-pic[data-v-2a975a90]{margin:0 auto;border-radius:50%;height:%?145?%;width:%?145?%;overflow:hidden;margin-top:%?20?%}.top-2 .head-pic uni-image[data-v-2a975a90]{width:%?145?%;height:%?145?%}.top-2 .ph-name[data-v-2a975a90]{font-size:%?24?%;line-height:%?70?%;color:#646464}.top-2 .ph-sy[data-v-2a975a90]{font-size:%?32?%;line-height:%?50?%;color:#fe0e00}.top-3[data-v-2a975a90]{padding-top:%?50?%;text-align:center}.top-3 .head-pic[data-v-2a975a90]{margin:0 auto;border-radius:50%;height:%?125?%;width:%?125?%;overflow:hidden;margin-top:%?20?%}.top-3 .head-pic uni-image[data-v-2a975a90]{width:%?125?%;height:%?125?%}.top-3 .ph-name[data-v-2a975a90]{font-size:%?24?%;line-height:%?70?%;color:#333}.top-3 .ph-sy[data-v-2a975a90]{font-size:%?32?%;line-height:%?50?%;color:#353535}.syph-list .head-pic[data-v-2a975a90]{margin:0 auto;border-radius:50%;height:%?90?%;width:%?90?%;overflow:hidden;margin-top:%?20?%}.syph-list .head-pic uni-image[data-v-2a975a90]{width:%?90?%;height:%?90?%}.syph-list .xuhao[data-v-2a975a90]{line-height:%?140?%;width:%?80?%;font-size:%?40?%;color:#939393}.syph-list .touxiang[data-v-2a975a90]{width:%?90?%;margin-right:%?20?%}.syph-list .nickname[data-v-2a975a90]{margin-top:%?20?%;color:#5b5b5b}.syph-list .money[data-v-2a975a90]{margin-right:%?20?%;margin-top:%?20?%;color:#000}.fzhsy-jh[data-v-2a975a90]{color:#979797;font-size:%?24?%}.fzhsy-jdh[data-v-2a975a90]{color:#979797;font-size:%?24?%}body.?%PAGE?%[data-v-2a975a90]{background-color:#f76045}",""])},"1f04":function(t,a,i){"use strict";i.r(a);var e=i("8fd5"),n=i("35d8");for(var s in n)"default"!==s&&function(t){i.d(a,t,function(){return n[t]})}(s);i("9564");var o=i("2877"),h=Object(o["a"])(n["default"],e["a"],e["b"],!1,null,"2a975a90",null);a["default"]=h.exports},3203:function(t,a,i){var e=i("1625");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("39d0ed83",e,!0,{sourceMap:!1,shadowMode:!1})},"35d8":function(t,a,i){"use strict";i.r(a);var e=i("8745"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,function(){return e[t]})}(s);a["default"]=n.a},8745:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{list:[]}},onLoad:function(){this.getAgentSyph()},onShow:function(){},methods:{getAgentSyph:function(){var t=this;try{this.$http.post(this.websiteUrl+"/api/agent/getAgentSyph",{},function(a){1==a.data.code?t.list=a.data.result:uni.showModal({content:a.data.msg,showCancel:!1})})}catch(a){uni.showModal({content:"网络异常,请稍后重试...",showCancel:!1})}}},components:{}};a.default=e},"8fd5":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("v-uni-view",{staticClass:"agent_syph_bg",staticStyle:{"background-image":"url(../../../static/agent_syph_bg.png)","background-repeat":"no-repeat","background-size":"100% 100%"}},[i("v-uni-view",{staticClass:"syph-top"},[i("v-uni-view",{staticClass:"uni-flex uni-row"},t._l(t.list,function(a,e){return e<3?i("v-uni-view",{key:e,staticClass:"by-flex text-c",class:"top-"+(e+1)},[i("v-uni-view",{staticClass:"head-pic"},[i("v-uni-image",{attrs:{src:a.head_img?a.head_img:"../../../static/head-no-pic.png"}})],1),i("v-uni-view",{staticClass:"ph-name"},[t._v(t._s(a.nickname))]),i("v-uni-view",{staticClass:"ph-sy"},[t._v("￥"+t._s(a.z_money))])],1):t._e()}))],1)],1),t._l(t.list,function(a,e){return e>2?i("v-uni-view",{key:e,staticClass:"syph-list-bg",staticStyle:{"background-image":"url(../../../static/agent_syph_list_bg.png)","background-repeat":"no-repeat","background-size":"100% 100%"}},[i("v-uni-view",{staticClass:"syph-list",staticStyle:{padding:"0 30upx"}},[i("v-uni-view",{staticClass:"uni-flex uni-row"},[i("v-uni-view",{staticClass:"text-c xuhao"},[t._v(t._s(e+1))]),i("v-uni-view",{staticClass:"text-r touxiang"},[i("v-uni-view",{staticClass:"head-pic"},[i("v-uni-image",{attrs:{src:a.head_img?a.head_img:"../../../static/head-no-pic.png"}})],1)],1),i("v-uni-view",{staticClass:"by-flex text-l nickname"},[i("v-uni-view",{staticClass:"fzhsy"},[t._v(t._s(a.nickname))]),i("v-uni-view",{staticClass:"fzhsy-jh"},[t._v(t._s(a.group_name))])],1),i("v-uni-view",{staticClass:"text-r money"},[i("v-uni-view",{staticClass:"fzhsy"},[t._v("￥"),i("v-uni-text",[t._v(t._s(a.z_money))])],1),i("v-uni-view",{staticClass:"fzhsy-jdh"},[t._v("累计收益")])],1)],1)],1)],1):t._e()}),i("v-uni-view",{staticClass:"syph-list-b-bg",staticStyle:{"background-image":"url(../../../static/agent_syph_b_bg.png)","background-repeat":"no-repeat","background-size":"100% 100%"}},[i("v-uni-view",{staticClass:"syph-list-b"})],1)],2)},n=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return n})},9564:function(t,a,i){"use strict";var e=i("3203"),n=i.n(e);n.a}}]);