(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-agent-tdph"],{"060b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{list:[]}},onLoad:function(){this.getAgentTdph()},onShow:function(){},methods:{getAgentTdph:function(){var t=this;try{this.$http.post(this.websiteUrl+"/api/agent/getAgentTdph",{},function(e){1==e.data.code?t.list=e.data.result:uni.showModal({content:e.data.msg,showCancel:!1})})}catch(e){uni.showModal({content:"网络异常,请稍后重试...",showCancel:!1})}}},components:{}};e.default=a},"2f1b":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-5e64cdb1]{height:auto;min-height:100%;background-color:#f76045}.agent_user_bg[data-v-5e64cdb1]{height:%?569?%;width:100%;color:#fff;line-height:%?569?%}.syph-top[data-v-5e64cdb1]{height:%?359?%;margin-top:%?0?%;padding-top:%?210?%;padding-left:%?20?%;padding-right:%?20?%}.syph-list-bg[data-v-5e64cdb1]{height:%?130?%;width:100%;color:#353535;line-height:%?130?%}.syph-list[data-v-5e64cdb1]{height:%?130?%}.syph-list-b-bg[data-v-5e64cdb1]{height:%?45?%;width:100%;color:#fff;line-height:%?45?%}.syph-list-b[data-v-5e64cdb1]{height:%?45?%}.by-flex[data-v-5e64cdb1]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.text-r[data-v-5e64cdb1]{text-align:right}.text-l[data-v-5e64cdb1]{text-align:left}.text-c[data-v-5e64cdb1]{text-align:center}.top-1[data-v-5e64cdb1]{padding-top:%?50?%;text-align:center}.top-1 .head-pic[data-v-5e64cdb1]{margin:0 auto;border-radius:50%;height:%?125?%;width:%?125?%;overflow:hidden;margin-top:%?20?%}.top-1 .head-pic uni-image[data-v-5e64cdb1]{width:%?125?%;height:%?125?%}.top-1 .ph-name[data-v-5e64cdb1]{font-size:%?24?%;line-height:%?70?%;color:#333}.top-1 .ph-sy[data-v-5e64cdb1]{font-size:%?32?%;line-height:%?50?%;color:#353535}.top-2[data-v-5e64cdb1]{padding-top:%?28?%;text-align:center}.top-2 .head-pic[data-v-5e64cdb1]{margin:0 auto;border-radius:50%;height:%?145?%;width:%?145?%;overflow:hidden;margin-top:%?20?%}.top-2 .head-pic uni-image[data-v-5e64cdb1]{width:%?145?%;height:%?145?%}.top-2 .ph-name[data-v-5e64cdb1]{font-size:%?24?%;line-height:%?70?%;color:#646464}.top-2 .ph-sy[data-v-5e64cdb1]{font-size:%?32?%;line-height:%?50?%;color:#fe0e00}.top-3[data-v-5e64cdb1]{padding-top:%?50?%;text-align:center}.top-3 .head-pic[data-v-5e64cdb1]{margin:0 auto;border-radius:50%;height:%?125?%;width:%?125?%;overflow:hidden;margin-top:%?20?%}.top-3 .head-pic uni-image[data-v-5e64cdb1]{width:%?125?%;height:%?125?%}.top-3 .ph-name[data-v-5e64cdb1]{font-size:%?24?%;line-height:%?70?%;color:#333}.top-3 .ph-sy[data-v-5e64cdb1]{font-size:%?32?%;line-height:%?50?%;color:#353535}.ph-sy uni-text[data-v-5e64cdb1]{font-size:%?24?%;margin-left:%?6?%}.syph-list .head-pic[data-v-5e64cdb1]{margin:0 auto;border-radius:50%;height:%?90?%;width:%?90?%;overflow:hidden;margin-top:%?20?%}.syph-list .head-pic uni-image[data-v-5e64cdb1]{width:%?90?%;height:%?90?%}.syph-list .xuhao[data-v-5e64cdb1]{line-height:%?140?%;width:%?80?%;font-size:%?40?%;color:#939393}.syph-list .touxiang[data-v-5e64cdb1]{width:%?90?%;margin-right:%?20?%}.syph-list .nickname[data-v-5e64cdb1]{margin-top:%?20?%;color:#5b5b5b}.syph-list .money[data-v-5e64cdb1]{margin-right:%?20?%;margin-top:%?20?%;color:#000}.fzhsy-jh[data-v-5e64cdb1]{color:#979797;font-size:%?24?%}.fzhsy-jdh[data-v-5e64cdb1]{color:#979797;font-size:%?24?%}.fzhsy uni-text[data-v-5e64cdb1]{font-size:%?24?%;margin-left:%?6?%}body.?%PAGE?%[data-v-5e64cdb1]{background-color:#f76045}",""])},"3bac":function(t,e,i){"use strict";i.r(e);var a=i("45c6"),n=i("d46f");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("85fa");var d=i("2877"),o=Object(d["a"])(n["default"],a["a"],a["b"],!1,null,"5e64cdb1",null);e["default"]=o.exports},"45c6":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"agent_syph_bg",staticStyle:{"background-image":"url(../../../static/agent_syph_bg.png)","background-repeat":"no-repeat","background-size":"100% 100%"}},[i("v-uni-view",{staticClass:"syph-top"},[i("v-uni-view",{staticClass:"uni-flex uni-row"},t._l(t.list,function(e,a){return a<3?i("v-uni-view",{key:a,staticClass:"by-flex text-c",class:"top-"+(a+1)},[i("v-uni-view",{staticClass:"head-pic"},[i("v-uni-image",{attrs:{src:e.head_img?e.head_img:"../../../static/head-no-pic.png"}})],1),i("v-uni-view",{staticClass:"ph-name"},[t._v(t._s(e.nickname))]),i("v-uni-view",{staticClass:"ph-sy"},[t._v(t._s(e.usercount)),i("v-uni-text",[t._v("人")])],1)],1):t._e()}))],1)],1),t._l(t.list,function(e,a){return a>2?i("v-uni-view",{key:a,staticClass:"syph-list-bg",staticStyle:{"background-image":"url(../../../static/agent_syph_list_bg.png)","background-repeat":"no-repeat","background-size":"100% 100%"}},[i("v-uni-view",{staticClass:"syph-list",staticStyle:{padding:"0 30upx"}},[i("v-uni-view",{staticClass:"uni-flex uni-row"},[i("v-uni-view",{staticClass:"text-c xuhao"},[t._v(t._s(a+1))]),i("v-uni-view",{staticClass:"text-r touxiang"},[i("v-uni-view",{staticClass:"head-pic"},[i("v-uni-image",{attrs:{src:e.head_img?e.head_img:"../../../static/head-no-pic.png"}})],1)],1),i("v-uni-view",{staticClass:"by-flex text-l nickname"},[i("v-uni-view",{staticClass:"fzhsy"},[t._v(t._s(e.nickname))]),i("v-uni-view",{staticClass:"fzhsy-jh"},[t._v(t._s(e.group_name))])],1),i("v-uni-view",{staticClass:"text-r money"},[i("v-uni-view",{staticClass:"fzhsy"},[t._v(t._s(e.usercount)),i("v-uni-text",[t._v("人")])],1),i("v-uni-view",{staticClass:"fzhsy-jdh"},[t._v("累计推广")])],1)],1)],1)],1):t._e()}),i("v-uni-view",{staticClass:"syph-list-b-bg",staticStyle:{"background-image":"url(../../../static/agent_syph_b_bg.png)","background-repeat":"no-repeat","background-size":"100% 100%"}},[i("v-uni-view",{staticClass:"syph-list-b"})],1)],2)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"85fa":function(t,e,i){"use strict";var a=i("c802"),n=i.n(a);n.a},c802:function(t,e,i){var a=i("2f1b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3a075cb7",a,!0,{sourceMap:!1,shadowMode:!1})},d46f:function(t,e,i){"use strict";i.r(e);var a=i("060b"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a}}]);