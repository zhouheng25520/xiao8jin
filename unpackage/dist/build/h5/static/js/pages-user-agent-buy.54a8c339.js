(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-agent-buy"],{"2e2b":function(t,e,i){"use strict";i.r(e);var n=i("434e"),a=i("60bc");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("edbf");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"b2ff9f64",null);e["default"]=r.exports},"434e":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"vip_bg",staticStyle:{background:"url(../../../static/vip_bg.png)","background-size":"100% 100%"}},[i("v-uni-view",{staticClass:"vip_nickname"},[t._v(t._s(t.vipInfo.nickname))]),i("v-uni-view",{staticClass:"vip_time"},[t._v(t._s(t.vipInfo.viptime))])],1),i("v-uni-view",{staticClass:"vip_title"},[t._v("等级资费")]),i("v-uni-view",{staticClass:"uni-flex uni-row pd10"},t._l(t.vipInfo.vipmoney,function(e,n){return i("v-uni-view",{key:n,staticClass:"text vip-money",class:t.vipMoney==n?"active":"",on:{click:function(i){i=t.$handleEvent(i),t.onClickNum(n,e.id)}}},[i("v-uni-view",{staticClass:"vip-money-title"},[t._v(t._s(e.title))]),e.val>0?i("v-uni-view",{staticClass:"vip-money-val"},[t._v("￥"),i("v-uni-text",[t._v(t._s(e.val))])],1):i("v-uni-view",{staticClass:"vip-money-val"},[t._v("免费")])],1)})),i("v-uni-view",{staticClass:"pd30"},[i("v-uni-view",{staticClass:"uni-card by-card"},[i("v-uni-view",{staticClass:"uni-card-content p15"},[i("v-uni-view",{staticClass:"tq-title"},[t._v("推广等级收益")]),i("v-uni-view",{staticClass:"linebg"}),i("v-uni-view",{staticClass:"tq-center"},[i("v-uni-rich-text",{attrs:{nodes:t.vipInfo.agenttq}})],1)],1)],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.vipInfo.payWay,expression:"vipInfo.payWay === 1"}],staticClass:"uni-common-mt pd300"},[i("v-uni-view",{staticClass:"uni-card by-card"},[i("v-uni-view",{staticClass:"uni-card-content"},[i("v-uni-view",{staticClass:"hg50"},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right bb0"},[i("v-uni-view",{staticClass:"by-sdh"},[t._v("付款账户"),i("v-uni-text")],1),i("v-uni-input",{staticClass:"uni-input",attrs:{disabled:"disabled",placeholder:"请选择付款账户"},on:{click:function(e){e=t.$handleEvent(e),t.showBottomPopup(e)}},model:{value:t.credit_name,callback:function(e){t.credit_name=e},expression:"credit_name"}})],1)],1)],1)],1),i("v-uni-button",{staticClass:"by-button-submit",attrs:{type:"warn",loading:t.loading},on:{click:function(e){e=t.$handleEvent(e),t.payAgentFee(e)}}},[t._v("立即升级")])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===t.vipInfo.payWay,expression:"vipInfo.payWay === 0"}]},[i("v-uni-view",[i("uni-segmented-control",{attrs:{current:t.current,values:t.items,styleType:t.styleType,activeColor:t.activeColor},on:{clickItem:function(e){e=t.$handleEvent(e),t.onClickItem(e)}}})],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}],staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"alipay"},[i("img",{attrs:{src:t.vipInfo.alipay}})])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===t.current,expression:"current === 0"}],staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"weixin"},[i("img",{attrs:{src:t.vipInfo.weixin}}),i("v-uni-view",[t._v("长按二维码选择识别图中二维码")])],1)],1)],1),i("v-uni-view",{staticClass:"pd30"},[i("v-uni-view",{staticClass:"uni-card by-card"},[i("v-uni-view",{staticClass:"uni-card-content p15"},[i("v-uni-view",{staticClass:"tq-title"},[t._v("支付方法")]),i("v-uni-view",{staticClass:"linebg"}),i("v-uni-view",{staticClass:"tq-center font-sg"},[i("v-uni-rich-text",{attrs:{nodes:t.vipInfo.vippayff}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"tip_btn pd30"},[i("v-uni-text",[t._v("*")]),t._v("如有疑问可咨询客服人员。")],1)],1),i("uni-popup",{attrs:{show:t.showPopupBottom,type:t.popType,title:"请选择支付卡"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.hidePopup(e)}}},[i("v-uni-view",{staticClass:"uni-center"},[i("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(e){e=t.$handleEvent(e),t.radioChange(e)}}},t._l(t.radioItems,function(e,n){return i("v-uni-label",{key:n,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-label",{staticClass:"label-2-text",attrs:{for:e.name}},[i("v-uni-text",[t._v(t._s(e.value))])],1)],1),i("v-uni-view",[i("v-uni-radio",{attrs:{id:e.name,value:e.name,checked:e.checked}})],1)],1)})),i("v-uni-view",{staticClass:"add-card-btn uni-flex uni-row",staticStyle:{"justify-content":"center"},on:{click:function(e){e=t.$handleEvent(e),t.goDetailPage("/pages/card/credit/add")}}},[i("v-uni-view",{staticClass:"flex-item uni-icon uni-icon-plusempty"}),i("v-uni-view",{staticClass:"flex-item add-title"},[t._v("添加新的信用卡")])],1)],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},4554:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("82a7")),a=o(i("f818"));function o(t){return t&&t.__esModule?t:{default:t}}var s={components:{uniSegmentedControl:n.default,uniPopup:a.default},data:function(){return{items:["微信支付","支付宝"],vipInfo:{payWay:1,nickname:"",viptime:"",viptq:"",vippayff:"第一步:长按或截图二维码图片进行保存;<br />第二步:打开支付宝或微信，点开扫一扫;<br />第三步:点右上角从相册中选择刚保存的二维码;<br />第四步:输入购买等级资费的相应金额;<br />第五步:支付时添加备注，备注会员手机号;<br />第六步:支付完成后，等待系统充值;",vipmoney:[{title:"",val:"",id:""},{title:"",val:"",id:""},{title:"",val:"",id:""}],alipay:"",weixin:""},current:0,activeColor:"#fe5950",styleType:"text",vipMoney:0,credit_name:"",credit_id:"",loading:!1,disabled:!0,popType:"middle",showPopupBottom:!1,radioItems:[],group_id:0}},onLoad:function(){},onShow:function(){this.getVipInfo()},onHide:function(){this.showPopupBottom&&(this.showPopupBottom=!1)},onBackPress:function(){if(this.showPopupBottom)return this.showPopupBottom=!1,!0},onUnload:function(){this.showPopupBottom&&(this.showPopupBottom=!1)},methods:{payAgentFee:function(){var t=this,e=this.$store.state.openid,i=this.$store.state.sessionKey,n=this.group_id,a=this.credit_id;null!=e&&(""!=a?uni.showModal({title:"提示",content:"您确定支付相应金额，进行升级吗？",success:function(o){if(o.confirm){var s=t;try{if(t.loading)return;t.loading=!0,t.$http.post(t.websiteUrl+"/api/agent/payAgentFee",{openid:e,sessionKey:i,group_id:n,credit_id:a},function(t){1==t.data.code?""!=t.data.result.url?(s.loading=!1,uni.navigateTo({url:"/pages/card/web-view/web-view?url="+t.data.result.url})):uni.showModal({content:t.data.msg,showCancel:!1,success:function(){s.loading=!1,uni.navigateBack()}}):uni.showModal({content:t.data.msg,showCancel:!1,success:function(){s.loading=!1}})})}catch(r){uni.showModal({content:"网络异常,请稍后重试...",showCancel:!1,success:function(){s.loading=!1}})}}}}):uni.showModal({content:"请选择付款账户",showCancel:!1}))},radioChange:function(t){for(var e=t.target.value,i={},n=0;n<this.radioItems.length;n++)-1!==e.indexOf(this.radioItems[n].name)?(i["radioItems["+n+"].checked"]=!0,this.credit_name=this.radioItems[n].value):i["radioItems["+n+"].checked"]=!1;this.credit_id=t.detail.value,this.showPopupBottom=!1},hidePopup:function(){this.showPopupBottom=!1,this.showAisleBottom=!1},showBottomPopup:function(){this.hidePopup(),this.popType="bottom",this.showPopupBottom=!0},goDetailPage:function(t){var e=this.$store.state.openid;if(null==e)return uni.navigateTo({url:"/pages/user/login/login"}),!1;uni.navigateTo({url:t})},getVipInfo:function(){var t=this,e=this.$store.state.openid,i=this.$store.state.sessionKey;try{this.$http.post(this.websiteUrl+"/api/agent/getAgentInfo",{openid:e,sessionKey:i},function(e){1==e.data.code?(t.vipInfo=e.data.result,t.radioItems=e.data.result.creditCard):uni.showModal({content:e.data.msg,showCancel:!1})})}catch(n){uni.showModal({content:"网络异常,请稍后重试...",showCancel:!1})}},onClickNum:function(t,e){this.vipMoney=t,this.group_id=e},onClickItem:function(t){this.current!==t&&(this.current=t)}}};e.default=s},5358:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"segmented-control"},t._l(t.values,function(e,n){return i("v-uni-view",{key:n,staticClass:"segmented-control-item",class:t.styleType,style:n===t.currentIndex?t.activeStyle:t.itemStyle,on:{click:function(e){e=t.$handleEvent(e),t.onClick(n)}}},[t._v(t._s(e))])}))},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"60bc":function(t,e,i){"use strict";i.r(e);var n=i("4554"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"6d17":function(t,e,i){"use strict";var n=i("9a47"),a=i.n(n);a.a},"6db4":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".segmented-control[data-v-55ed8292]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;font-size:%?32?%;border-radius:%?0?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden;border-bottom:%?2?% solid #eee;padding:%?0?% %?50?%}.segmented-control.button[data-v-55ed8292]{border:%?2?% solid}.segmented-control.text[data-v-55ed8292]{border:0;border-radius:%?0?%}.segmented-control-item[data-v-55ed8292]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?120?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?32?%;font-weight:500}.segmented-control-item.button[data-v-55ed8292]{border-left:%?1?% solid}.segmented-control-item.text[data-v-55ed8292]{border-left:0}.segmented-control-item[data-v-55ed8292]:first-child{border-left-width:0}",""])},"81a5":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-b2ff9f64]{height:auto;min-height:100%;background-color:#f7f8fa}.vip_bg[data-v-b2ff9f64]{height:%?176?%;padding-top:%?54?%}.vip_nickname[data-v-b2ff9f64]{color:#d0be9a;margin-left:%?180?%;font-size:%?38?%}.vip_time[data-v-b2ff9f64]{color:#b3a696;margin-left:%?184?%;font-size:%?24?%}.vip_title[data-v-b2ff9f64]{padding:%?20?%;font-size:%?34?%;font-weight:800}.pd10[data-v-b2ff9f64]{padding:%?0?% %?10?%}.vip-money[data-v-b2ff9f64]{border:%?4?% solid #ebebeb;border-radius:%?12?%;margin:%?0?% %?10?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:%?140?%;padding:%?20?% %?0?% %?20?% %?50?%}.vip-money.active[data-v-b2ff9f64]{border:%?4?% solid #3e3e3e;background-color:#3e3e3e}.vip-money-title[data-v-b2ff9f64]{color:#7b7b7b;font-size:%?32?%;font-weight:800}.vip-money-val[data-v-b2ff9f64]{color:#6c6c6c;font-size:%?28?%;font-weight:500}.vip-money-val uni-text[data-v-b2ff9f64]{color:#6c6c6c;font-size:%?44?%;font-weight:800}.vip-money-gqval[data-v-b2ff9f64]{color:silver;font-size:%?28?%;font-weight:400;text-decoration:line-through}.vip-money.active .vip-money-title[data-v-b2ff9f64]{color:#d2ba8c}.vip-money.active .vip-money-val[data-v-b2ff9f64]{color:#d6b580}.vip-money.active .vip-money-val uni-text[data-v-b2ff9f64]{color:#d6b580}.vip-money.active .vip-money-gqval[data-v-b2ff9f64]{color:#969696}.uni-card.by-card[data-v-b2ff9f64]{border-radius:%?12?%;-webkit-box-shadow:%?4?% %?4?% %?20?% %?4?% hsla(0,0%,48.2%,.3);box-shadow:%?4?% %?4?% %?20?% %?4?% hsla(0,0%,48.2%,.3)}.uni-card.by-card .p15[data-v-b2ff9f64]{padding:%?0?% %?16?%}.pd300[data-v-b2ff9f64]{padding:%?0?% %?20?%}.pd30[data-v-b2ff9f64]{padding:%?30?% %?20?%}.tq-title[data-v-b2ff9f64]{text-align:center;line-height:%?120?%;font-size:%?36?%;color:#d78603}.linebg[data-v-b2ff9f64]{margin:%?30?% %?0?%;height:%?4?%;background-color:#ebebeb;width:90%;margin:%?0?% auto}.tq-center[data-v-b2ff9f64]{padding:%?30?% %?50?%}.alipay[data-v-b2ff9f64]{text-align:center;padding:%?40?%;height:%?619?%}.alipay uni-image[data-v-b2ff9f64]{width:%?444?%;height:%?619?%}.alipay img[data-v-b2ff9f64]{width:%?444?%;height:%?619?%}.weixin[data-v-b2ff9f64]{text-align:center;padding:%?40?%;height:%?619?%}.weixin uni-image[data-v-b2ff9f64]{width:%?444?%;height:%?537?%}.weixin img[data-v-b2ff9f64]{width:%?444?%;height:%?537?%}.font-sg[data-v-b2ff9f64]{font-weight:400;font-family:pingfangxi}.red-text[data-v-b2ff9f64]{color:#fe5950}.tip_btn[data-v-b2ff9f64]{color:#cdd1dd;text-align:center}.tip_btn uni-text[data-v-b2ff9f64]{color:#fd5950}\n\t/* 遮罩层 */.uni-mask[data-v-b2ff9f64]{background:rgba(0,0,0,.6);position:fixed;width:100%;height:100%;left:0;top:0;z-index:1}.tip_cancel[data-v-b2ff9f64]{text-align:center}.tip_cancel uni-image[data-v-b2ff9f64]{width:%?70?%;height:%?123?%}.add-card-btn[data-v-b2ff9f64]{font-size:%?28?%;font-weight:500;line-height:%?100?%;height:%?100?%}.add-card-btn .add-title[data-v-b2ff9f64]{line-height:%?96?%;font-size:%?28?%}.uni-icon-plusempty[data-v-b2ff9f64]{font-size:%?68?%;line-height:%?100?%}body.?%PAGE?%[data-v-b2ff9f64]{background-color:#f7f8fa}",""])},"82a7":function(t,e,i){"use strict";i.r(e);var n=i("5358"),a=i("926d");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("6d17");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"55ed8292",null);e["default"]=r.exports},"8bde":function(t,e,i){var n=i("81a5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("c876e970",n,!0,{sourceMap:!1,shadowMode:!1})},"8cf1":function(t,e,i){var n=i("f20e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3befde89",n,!0,{sourceMap:!1,shadowMode:!1})},"926d":function(t,e,i){"use strict";i.r(e);var n=i("b569"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"9a47":function(t,e,i){var n=i("6db4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7317a549",n,!0,{sourceMap:!1,shadowMode:!1})},b569:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"segmented-control",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:this.current}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},computed:{wrapStyle:function(){var t="";switch(this.styleType){case"text":t="border:0;";break;default:t="border-color: ".concat(this.activeColor);break}return t},itemStyle:function(){var t="";switch(this.styleType){case"text":t="color:#000;border-left:0;";break;default:t="color:".concat(this.activeColor,";border-color:").concat(this.activeColor,";");break}return t},activeStyle:function(){var t="";switch(this.styleType){case"text":t="color:".concat(this.activeColor,";border-left:0;border-bottom-style:solid;");break;default:t="color:#fff;border-color:".concat(this.activeColor,";background-color:").concat(this.activeColor);break}return t}},methods:{onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}};e.default=n},c071:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{show:{type:Boolean,default:!1},title:{type:String,default:"请选择"},type:{type:String,default:"middle"}},data:function(){var t=0;return t=44,{offsetTop:t}},methods:{hide:function(){this.$emit("hidePopup")}}};e.default=n},e525:function(t,e,i){"use strict";var n=i("8cf1"),a=i.n(n);a.a},e6d2:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){e=t.$handleEvent(e),t.hide(e)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-popup uni-popup-bottom"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"by-content"},[t._t("default")],2)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},edbf:function(t,e,i){"use strict";var n=i("8bde"),a=i.n(n);a.a},f20e:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-mask[data-v-061476ca]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-061476ca]{position:absolute;z-index:999;background-color:#fff;-webkit-box-shadow:0 0 %?30?% rgba(0,0,0,.1);box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-bottom[data-v-061476ca]{left:0;bottom:0;width:100%;padding:%?0?% %?0?% %?0?% %?0?%;text-align:left}.uni-popup-bottom .title[data-v-061476ca]{line-height:%?100?%;height:%?100?%;padding-left:%?30?%;font-size:%?32?%;font-weight:500}",""])},f818:function(t,e,i){"use strict";i.r(e);var n=i("e6d2"),a=i("fda1");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("e525");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"061476ca",null);e["default"]=r.exports},fda1:function(t,e,i){"use strict";i.r(e);var n=i("c071"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a}}]);