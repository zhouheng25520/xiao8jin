(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-vip-vip"],{"135c":function(t,e,i){"use strict";i.r(e);var a=i("2794"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},2794:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("82a7"));function n(t){return t&&t.__esModule?t:{default:t}}var o={components:{uniSegmentedControl:a.default},data:function(){return{items:["微信支付","支付宝"],vipInfo:{nickname:"",viptime:"",viptq:"",vippayff:"第一步:长按或截图二维码图片进行保存;<br />第二步:打开支付宝或微信，点开扫一扫;<br />第三步:点右上角从相册中选择刚保存的二维码;<br />第四步:输入购买会员相应金额;<br />第五步:支付时添加备注，备注会员手机号;<br />第六步:支付完成后，等待系统充值;",vipmoney:[{title:"",val:"",gqval:""},{title:"",val:"",gqval:""},{title:"",val:"",gqval:""}],alipay:"",weixin:""},current:0,activeColor:"#fe5950",styleType:"text",vipMoney:0}},onLoad:function(){},onShow:function(){this.getVipInfo()},methods:{getVipInfo:function(){var t=this,e=this.$store.state.openid,i=this.$store.state.sessionKey;try{this.$http.post(this.websiteUrl+"/api/api/getVipInfo",{openid:e,sessionKey:i},function(e){1==e.data.code?t.vipInfo=e.data.result:uni.showModal({content:e.data.msg,showCancel:!1})})}catch(a){uni.showModal({content:"网络异常,请稍后重试...",showCancel:!1})}},onClickNum:function(t){this.vipMoney=t},onClickItem:function(t){this.current!==t&&(this.current=t)}}};e.default=o},5358:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"segmented-control"},t._l(t.values,function(e,a){return i("v-uni-view",{key:a,staticClass:"segmented-control-item",class:t.styleType,style:a===t.currentIndex?t.activeStyle:t.itemStyle,on:{click:function(e){e=t.$handleEvent(e),t.onClick(a)}}},[t._v(t._s(e))])}))},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"6d17":function(t,e,i){"use strict";var a=i("9a47"),n=i.n(a);n.a},"6db4":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".segmented-control[data-v-55ed8292]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;font-size:%?32?%;border-radius:%?0?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden;border-bottom:%?2?% solid #eee;padding:%?0?% %?50?%}.segmented-control.button[data-v-55ed8292]{border:%?2?% solid}.segmented-control.text[data-v-55ed8292]{border:0;border-radius:%?0?%}.segmented-control-item[data-v-55ed8292]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?120?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?32?%;font-weight:500}.segmented-control-item.button[data-v-55ed8292]{border-left:%?1?% solid}.segmented-control-item.text[data-v-55ed8292]{border-left:0}.segmented-control-item[data-v-55ed8292]:first-child{border-left-width:0}",""])},"7dddd":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"vip_bg",staticStyle:{background:"url(../../../static/vip_bg.png)","background-size":"100% 100%"}},[i("v-uni-view",{staticClass:"vip_nickname"},[t._v(t._s(t.vipInfo.nickname))]),i("v-uni-view",{staticClass:"vip_time"},[t._v(t._s(t.vipInfo.viptime))])],1),i("v-uni-view",{staticClass:"vip_title"},[t._v("VIP会员资费")]),i("v-uni-view",{staticClass:"uni-flex uni-row pd10"},t._l(t.vipInfo.vipmoney,function(e,a){return i("v-uni-view",{key:a,staticClass:"text vip-money",class:t.vipMoney==a?"active":"",on:{click:function(e){e=t.$handleEvent(e),t.onClickNum(a)}}},[i("v-uni-view",{staticClass:"vip-money-title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"vip-money-val"},[t._v("￥"),i("v-uni-text",[t._v(t._s(e.val))])],1),i("v-uni-view",{staticClass:"vip-money-gqval"},[t._v("￥"+t._s(e.gqval))])],1)})),i("v-uni-view",{staticClass:"pd30"},[i("v-uni-view",{staticClass:"uni-card by-card"},[i("v-uni-view",{staticClass:"uni-card-content p15"},[i("v-uni-view",{staticClass:"tq-title"},[t._v("会员的特权")]),i("v-uni-view",{staticClass:"linebg"}),i("v-uni-view",{staticClass:"tq-center"},[i("v-uni-rich-text",{attrs:{nodes:t.vipInfo.viptq}})],1)],1)],1)],1),i("v-uni-view",[i("uni-segmented-control",{attrs:{current:t.current,values:t.items,styleType:t.styleType,activeColor:t.activeColor},on:{clickItem:function(e){e=t.$handleEvent(e),t.onClickItem(e)}}})],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}],staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"alipay"},[i("img",{attrs:{src:t.vipInfo.alipay}})])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===t.current,expression:"current === 0"}],staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"weixin"},[i("img",{attrs:{src:t.vipInfo.weixin}}),i("v-uni-view",[t._v("长按二维码选择识别图中二维码")])],1)],1)],1),i("v-uni-view",{staticClass:"pd30"},[i("v-uni-view",{staticClass:"uni-card by-card"},[i("v-uni-view",{staticClass:"uni-card-content p15"},[i("v-uni-view",{staticClass:"tq-title"},[t._v("支付方法")]),i("v-uni-view",{staticClass:"linebg"}),i("v-uni-view",{staticClass:"tq-center font-sg"},[i("v-uni-rich-text",{attrs:{nodes:t.vipInfo.vippayff}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"tip_btn pd30"},[i("v-uni-text",[t._v("*")]),t._v("如有疑问可咨询客服人员。")],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"82a7":function(t,e,i){"use strict";i.r(e);var a=i("5358"),n=i("926d");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("6d17");var r=i("2877"),c=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"55ed8292",null);e["default"]=c.exports},"926d":function(t,e,i){"use strict";i.r(e);var a=i("b569"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"9a47":function(t,e,i){var a=i("6db4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7317a549",a,!0,{sourceMap:!1,shadowMode:!1})},b569:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"segmented-control",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:this.current}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},computed:{wrapStyle:function(){var t="";switch(this.styleType){case"text":t="border:0;";break;default:t="border-color: ".concat(this.activeColor);break}return t},itemStyle:function(){var t="";switch(this.styleType){case"text":t="color:#000;border-left:0;";break;default:t="color:".concat(this.activeColor,";border-color:").concat(this.activeColor,";");break}return t},activeStyle:function(){var t="";switch(this.styleType){case"text":t="color:".concat(this.activeColor,";border-left:0;border-bottom-style:solid;");break;default:t="color:#fff;border-color:".concat(this.activeColor,";background-color:").concat(this.activeColor);break}return t}},methods:{onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}};e.default=a},b96c:function(t,e,i){"use strict";i.r(e);var a=i("7dddd"),n=i("135c");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("d4b4");var r=i("2877"),c=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"058c94ea",null);e["default"]=c.exports},c0b2:function(t,e,i){var a=i("ca51");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("8b629e68",a,!0,{sourceMap:!1,shadowMode:!1})},ca51:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-058c94ea]{height:auto;min-height:100%;background-color:#f7f8fa}.vip_bg[data-v-058c94ea]{height:%?176?%;padding-top:%?54?%}.vip_nickname[data-v-058c94ea]{color:#d0be9a;margin-left:%?180?%;font-size:%?38?%}.vip_time[data-v-058c94ea]{color:#b3a696;margin-left:%?184?%;font-size:%?24?%}.vip_title[data-v-058c94ea]{padding:%?20?%;font-size:%?34?%;font-weight:800}.pd10[data-v-058c94ea]{padding:%?0?% %?10?%}.vip-money[data-v-058c94ea]{border:%?4?% solid #ebebeb;border-radius:%?12?%;margin:%?0?% %?10?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:%?200?%;padding:%?20?% %?0?% %?20?% %?50?%}.vip-money.active[data-v-058c94ea]{border:%?4?% solid #3e3e3e;background-color:#3e3e3e}.vip-money-title[data-v-058c94ea]{color:#7b7b7b;font-size:%?32?%;font-weight:800}.vip-money-val[data-v-058c94ea]{color:#6c6c6c;font-size:%?28?%;font-weight:500}.vip-money-val uni-text[data-v-058c94ea]{color:#6c6c6c;font-size:%?44?%;font-weight:800}.vip-money-gqval[data-v-058c94ea]{color:silver;font-size:%?28?%;font-weight:400;text-decoration:line-through}.vip-money.active .vip-money-title[data-v-058c94ea]{color:#d2ba8c}.vip-money.active .vip-money-val[data-v-058c94ea]{color:#d6b580}.vip-money.active .vip-money-val uni-text[data-v-058c94ea]{color:#d6b580}.vip-money.active .vip-money-gqval[data-v-058c94ea]{color:#969696}.uni-card.by-card[data-v-058c94ea]{border-radius:%?12?%;-webkit-box-shadow:%?4?% %?4?% %?20?% %?4?% hsla(0,0%,48.2%,.3);box-shadow:%?4?% %?4?% %?20?% %?4?% hsla(0,0%,48.2%,.3)}.uni-card.by-card .p15[data-v-058c94ea]{padding:%?0?% %?16?%}.pd30[data-v-058c94ea]{padding:%?30?% %?20?%}.tq-title[data-v-058c94ea]{text-align:center;line-height:%?120?%;font-size:%?36?%;color:#d78603}.linebg[data-v-058c94ea]{margin:%?30?% %?0?%;height:%?4?%;background-color:#ebebeb;width:90%;margin:%?0?% auto}.tq-center[data-v-058c94ea]{padding:%?30?% %?50?%}.alipay[data-v-058c94ea]{text-align:center;padding:%?40?%;height:%?619?%}.alipay uni-image[data-v-058c94ea]{width:%?444?%;height:%?619?%}.alipay img[data-v-058c94ea]{width:%?444?%;height:%?619?%}.weixin[data-v-058c94ea]{text-align:center;padding:%?40?%;height:%?619?%}.weixin uni-image[data-v-058c94ea]{width:%?444?%;height:%?537?%}.weixin img[data-v-058c94ea]{width:%?444?%;height:%?537?%}.font-sg[data-v-058c94ea]{font-weight:400;font-family:pingfangxi}.red-text[data-v-058c94ea]{color:#fe5950}.tip_btn[data-v-058c94ea]{color:#cdd1dd;text-align:center}.tip_btn uni-text[data-v-058c94ea]{color:#fd5950}body.?%PAGE?%[data-v-058c94ea]{background-color:#f7f8fa}",""])},d4b4:function(t,e,i){"use strict";var a=i("c0b2"),n=i.n(a);n.a}}]);