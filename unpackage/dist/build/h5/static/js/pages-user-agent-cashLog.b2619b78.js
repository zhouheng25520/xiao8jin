(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-agent-cashLog"],{"0457":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-page-body[data-v-5c6dc898]{height:auto;min-height:100%;background-color:#fff}.list-view[data-v-5c6dc898]{padding:%?10?% 0}.list-item[data-v-5c6dc898]{margin:%?20?% 0;height:%?140?%;line-height:%?140?%;width:100%;border-bottom:%?2?% solid #eee;text-align:center}.justify[data-v-5c6dc898]{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.justify .left-text[data-v-5c6dc898]{text-align:left}.justify .right-text[data-v-5c6dc898]{text-align:right}.log-title[data-v-5c6dc898]{font-size:%?36?%;color:#333}.log-tail[data-v-5c6dc898]{font-size:%?28?%;color:#888}.log-time[data-v-5c6dc898]{font-size:%?28?%;color:#888}.log-money[data-v-5c6dc898]{font-size:%?32?%;color:#ff3e31;font-weight:600}.log-balance[data-v-5c6dc898]{font-size:%?28?%;color:#666}.log-status[data-v-5c6dc898]{font-size:%?28?%;color:#44c055}.log-status .log-icon[data-v-5c6dc898]{font-size:%?38?%}.log-status.red[data-v-5c6dc898]{color:#ff3e31}.log-status.blue[data-v-5c6dc898]{color:#8686ff}.no-list[data-v-5c6dc898]{text-align:center;height:%?260?%;padding-top:50%}.no-list uni-image[data-v-5c6dc898]{width:%?185?%;height:%?60?%}body.?%PAGE?%[data-v-5c6dc898]{background-color:#fff}",""])},"0486":function(t,e,a){"use strict";var i=a("5394"),n=a.n(i);n.a},"1c5a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("9cb5"));function n(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{list:[],page:1,is_load:0,no_list:0,loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(){this.getAgentCashLogData()},onPullDownRefresh:function(){this.loadingType=0,this.page=1,this.list=[],this.is_load=0,this.getAgentCashLogData(),uni.stopPullDownRefresh()},onReachBottom:function(){0===this.loadingType&&(this.loadingType=1,this.getAgentCashLogData())},methods:{getAgentCashLogData:function(){var t=this,e=this.$store.state.openid,a=this.$store.state.sessionKey,i=this.page;try{this.$http.post(this.websiteUrl+"/api/agent/getAgentCashLogData",{openid:e,sessionKey:a,page:i},function(e){1==e.data.code?e.data.result.list.length>=1?(t.list=t.list.concat(e.data.result.list),t.loadingType=0,t.page=t.page+1,t.is_load=1,t.no_list=1):(t.loadingType=2,1==t.page&&(t.no_list=0,t.is_load=0)):(t.loadingType=0,uni.showModal({content:e.data.msg,showCancel:!1}))})}catch(n){this.loadingType=0,uni.showModal({content:"网络异常,请稍后重试...",showCancel:!1})}}},components:{uniLoadMore:i.default}};e.default=o},"2ddd":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",[0==t.no_list?a("v-uni-view",{staticClass:"no-list"},[a("v-uni-image",{attrs:{src:"../../../static/no-list.png"}})],1):t._e(),1==t.no_list?a("v-uni-view",{staticClass:"list-view"},t._l(t.list,function(e,i){return a("v-uni-view",{key:i,staticClass:"list-item"},[a("v-uni-view",{staticClass:"uni-flex uni-row justify"},[a("v-uni-view",{staticClass:"text left-text"},[a("v-uni-view",{staticClass:"text log-title"},[t._v(t._s(e.bank_name))]),a("v-uni-view",{staticClass:"text log-tail"},[t._v("尾号("+t._s(e.bank_code)+")")])],1),a("v-uni-view",{staticClass:"text right-text"},[a("v-uni-view",{staticClass:"text log-money"},[t._v(t._s(e.money))]),a("v-uni-view",{staticClass:"text log-balance"},[t._v(t._s(e.status))])],1)],1)],1)})):t._e(),1==t.is_load?a("uni-load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText}}):t._e()],1)],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"325c":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".load-more[data-v-f7d5bfdc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.loading-img[data-v-f7d5bfdc]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-f7d5bfdc]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-f7d5bfdc]{position:absolute}.load1[data-v-f7d5bfdc],.load2[data-v-f7d5bfdc],.load3[data-v-f7d5bfdc]{height:24px;width:24px}.load2[data-v-f7d5bfdc]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-f7d5bfdc]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-f7d5bfdc]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#777;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-f7d5bfdc 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-f7d5bfdc]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-f7d5bfdc]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-f7d5bfdc]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-f7d5bfdc]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-f7d5bfdc]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-f7d5bfdc]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-f7d5bfdc]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-f7d5bfdc]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-f7d5bfdc]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-f7d5bfdc]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-f7d5bfdc]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-f7d5bfdc]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-f7d5bfdc]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-f7d5bfdc]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-f7d5bfdc]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-f7d5bfdc]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-f7d5bfdc{0%{opacity:1}to{opacity:.2}}",""])},5394:function(t,e,a){var i=a("0457");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("2473d01d",i,!0,{sourceMap:!1,shadowMode:!1})},"658f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=i},7349:function(t,e,a){"use strict";a.r(e);var i=a("1c5a"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"85c6":function(t,e,a){"use strict";var i=a("9b85"),n=a.n(i);n.a},"9b85":function(t,e,a){var i=a("325c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("284a6e48",i,!0,{sourceMap:!1,shadowMode:!1})},"9cb5":function(t,e,a){"use strict";a.r(e);var i=a("e6de"),n=a("f706");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("85c6");var d=a("2877"),s=Object(d["a"])(n["default"],i["a"],i["b"],!1,null,"f7d5bfdc",null);e["default"]=s.exports},e6de:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"load-more"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[a("v-uni-view",{staticClass:"load1"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load2"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load3"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1)],1),a("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},f3cd:function(t,e,a){"use strict";a.r(e);var i=a("2ddd"),n=a("7349");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("0486");var d=a("2877"),s=Object(d["a"])(n["default"],i["a"],i["b"],!1,null,"5c6dc898",null);e["default"]=s.exports},f706:function(t,e,a){"use strict";a.r(e);var i=a("658f"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a}}]);