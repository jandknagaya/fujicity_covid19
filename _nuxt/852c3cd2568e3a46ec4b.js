(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{301:function(t,e,n){var content=n(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("790a7675",content,!0,{sourceMap:!1})},303:function(t,e,n){"use strict";var r=n(301);n.n(r).a},304:function(t,e,n){(e=n(11)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},306:function(t,e,n){"use strict";var r=n(0).a.extend({props:{icon:{type:String}}}),o=(n(303),n(8)),l=n(44),d=n.n(l),c=n(289),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports;d()(component,{VIcon:c.a})},308:function(t,e,n){"use strict";e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var r=new Date(e["日付"]),o=e["小計"];isNaN(o)||(n+=o,t.push({label:"".concat(r.getMonth()+1,"/").concat(r.getDate()),transition:o,cumulative:n}))})),t}},309:function(t,e,n){"use strict";n(403);var r=n(136),o=(n(33),n(0)),l=n(305),d=n(333),c=n(323),f=n(330),h=n(321),v={created:function(){this.canvas=!0},components:{DataView:l.a,DataSelector:d.a,DataViewBasicInfoPanel:c.a,OpenDataLink:f.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartId:{type:String,default:"time-bar-chart"},chartData:{type:Array,default:function(){return[]}},date:{type:String,required:!0},unit:{type:String,default:""},url:{type:String,default:""}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e)},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e)},displayInfo:function(){return"transition"===this.dataKind?{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"".concat(this.$t("実績値"),"（").concat(this.$t("前日比"),": ").concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit}:{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:"".concat(this.chartData.slice(-1)[0].label," ").concat(this.$t("累計値"),"（").concat(this.$t("前日比"),": ").concat(this.displayCumulativeRatio," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:h.b,borderWidth:0}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:h.b,borderWidth:0}]}},displayOption:function(){var t=this.unit,e={tooltips:{displayColors:!1,callbacks:{label:function(e){return"".concat(parseInt(e.value).toLocaleString()," ").concat(t)},title:function(t,data){return data.labels[t[0].index]}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold",gridLines:{display:!0}},type:"time",time:{unit:"month",parser:"M/D",displayFormats:{month:"MMM"}}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(e,{animation:{duration:0}}),e},scaledTicksYAxisMax:function(){var t="transition"===this.dataKind?"transition":"cumulative",e=this.chartData.map((function(e){return e[t]}));return 1.2*Math.max.apply(Math,Object(r.a)(e))},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"},{text:this.title,value:"0"}]},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign({text:t.displayData.labels[i]},{0:t.displayData.datasets[0].data[i]})}))}},methods:{formatDayBeforeRatio:function(t){var e=t.toLocaleString();switch(Math.sign(t)){case 1:return"+".concat(e);case-1:default:return"".concat(e)}}}},_=o.a.extend(v),w=n(8),x=n(44),m=n.n(x),y=n(537),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"button",fn:function(){return[n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),n("bar",{style:{display:t.canvas?"block":"none"},attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240}}),t._v(" "),n("v-data-table",{staticClass:"cardTable",style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"}})],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VDataTable:y.a})},315:function(t,e,n){var content=n(374);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("4b55f26a",content,!0,{sourceMap:!1})},316:function(t,e,n){var content=n(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("15495534",content,!0,{sourceMap:!1})},317:function(t,e,n){var content=n(378);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("970c2a6c",content,!0,{sourceMap:!1})},319:function(t,e,n){var content=n(380);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("e3e1d1b4",content,!0,{sourceMap:!1})},320:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("08457358",content,!0,{sourceMap:!1})},321:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return l}));var r="#006400",o=["#006400","#1B75BC"],l=["#00441B","#006400","#1B75BC"]},322:function(t,e,n){var content=n(384);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("435e5f58",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";var r=n(0).a.extend({props:{lText:{type:String,required:!0},sText:{type:String,required:!0},unit:{type:String,required:!0}}}),o=(n(379),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataInfo"},[n("span",{staticClass:"DataView-DataInfo-summary"},[t._v("\n    "+t._s(t.lText)+"\n    "),n("small",{staticClass:"DataView-DataInfo-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br"),t._v(" "),n("small",{staticClass:"DataView-DataInfo-date"},[t._v(t._s(t.sText))])])}),[],!1,null,null,null);e.a=component.exports},330:function(t,e,n){"use strict";var r=n(0).a.extend({props:{url:{type:String,default:""}}}),o=(n(381),n(8)),l=n(44),d=n.n(l),c=n(289),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"OpenDataLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._v("\n  "+this._s(this.$t("オープンデータを入手"))+"\n  "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:"15","aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VIcon:c.a})},333:function(t,e,n){"use strict";var r=n(0).a.extend({name:"DataSelector",props:{value:{type:String,default:"transition"},targetId:{type:String,default:function(t){return t&&""!==t?t:null}}}}),o=(n(377),n(8)),l=n(44),d=n.n(l),c=n(400),f=n(546),h=n(405),v=n.n(h),_=n(137),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{staticClass:"DataSelector",attrs:{"aria-controls":t.targetId,value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"transition"===t.value?"true":"false",value:"transition"}},[t._v("\n    "+t._s(t.$t("日別"))+"\n  ")]),t._v(" "),n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"cumulative"===t.value?"true":"false",value:"cumulative"}},[t._v("\n    "+t._s(t.$t("累計"))+"\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VBtn:c.a,VBtnToggle:f.a}),v()(component,{Ripple:_.a})},359:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/04/17","url":"https://www.pref.shizuoka.jp/kinkyu/covid-19-taisetunaoneai.html","text":"静岡県からの大切なお願い"},{"date":"2020/04/17","url":"https://www.pref.shizuoka.jp/kinkyu/covid-19-soudan.html","text":"新型コロナウイルス感染症の相談"}]}')},372:function(t,e,n){var content=n(475);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("2110844c",content,!0,{sourceMap:!1})},373:function(t,e,n){"use strict";var r=n(315),o=n.n(r);e.default=o.a},374:function(t,e,n){(e=n(11)(!1)).push([t.i,".note_3ycFr{margin-top:10px;margin-bottom:0;font-size:12px;color:#707070}",""]),e.locals={note:"note_3ycFr"},t.exports=e},375:function(t,e,n){"use strict";var r=n(316),o=n.n(r);e.default=o.a},376:function(t,e,n){(e=n(11)(!1)).push([t.i,'.container_37WEO{width:100%;display:flex;justify-content:center;box-sizing:border-box;color:#008830;line-height:1.35;padding-left:0 !important}.container_37WEO *{box-sizing:border-box}.container_37WEO ul{padding-left:0}.pillar_F62Yl{display:flex;flex-direction:column;justify-content:flex-end;flex:0 0 auto;text-align:center;width:100%;border:3px solid #008830}.group_1ksdS{display:flex;flex:0 0 auto;padding-left:0;padding-top:3px;border-top:3px solid #008830;border-left:3px solid #008830}.box_2dey9{display:flex}.box_2dey9.parent_23pyN{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-top:29px}.box_2dey9.parent_23pyN::after{content:"";display:block;position:absolute;top:-1px;right:0;height:30px;border-left:3px solid #008830}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-29px;border-top:none;border-right:none;border-left:none}.box_2dey9.confirmed_P-yFc{width:100%}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc((100% + 3px * 2) / 6 - 3px * 3)}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc((100% + 3px * 2) / 6 * 5 + 3px)}.box_2dey9.hospitalized_3w7PT{margin-left:3px;width:calc(100% / 5 * 3 - 3px)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc((100% + 3px * 2) / 3 - 3px * 3)}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc((100% + 3px * 2) / 3 * 2 + 3px)}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:3px;width:calc(100% / 2 - 3px)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:3px;width:calc(100% / 5 - 3px)}.content_1gFZ-{min-height:150px;padding:10px 2px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}.content_1gFZ->span{display:block;width:100%;font-size:16px;font-size:1rem}.content_1gFZ->span:last-child{margin-top:.1em}.content_1gFZ->span:not(:last-child){word-break:break-all}.content_1gFZ- span strong{font-size:18px;font-size:1.125rem}.content_1gFZ- span.unit_25C4Z{font-size:16px;font-size:1rem}@media screen and (max-width: 1440px){.pillar_F62Yl{border-width:.209vw}.group_1ksdS{padding-top:.209vw;border-top-width:.209vw;border-left-width:.209vw}.content_1gFZ->span{font-size:15px;font-size:0.9375rem}.content_1gFZ- span strong{font-size:17px;font-size:1.0625rem}.content_1gFZ- span.unit_25C4Z{font-size:15px;font-size:0.9375rem}.box_2dey9.parent_23pyN{border-top-width:.209vw;border-left-width:.209vw;padding-top:2.013vw}.box_2dey9.parent_23pyN::after{height:2.223vw;border-left-width:.209vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-2.013vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.209vw * 2) / 6 - 0.209vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.209vw * 2) / 6 * 5 + 0.209vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.209vw;width:calc(100% / 5 * 3 - 0.209vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.209vw * 2) / 3 - 0.209vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.209vw * 2) / 3 * 2 + 0.209vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.209vw;width:calc(100% / 2 - 0.209vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.209vw;width:calc(100% / 5 - 0.209vw)}}@media screen and (max-width: 1263px){.pillar_F62Yl{border-width:.159vw}.group_1ksdS{padding-top:.159vw;border-top-width:.159vw;border-left-width:.159vw}.content_1gFZ->span{font-size:13px;font-size:0.8125rem}.content_1gFZ- span strong{font-size:15px;font-size:0.9375rem}.content_1gFZ- span.unit_25C4Z{font-size:13px;font-size:0.8125rem}.box_2dey9.parent_23pyN{border-top-width:.159vw;border-left-width:.159vw;padding-top:1.583vw}.box_2dey9.parent_23pyN::after{height:1.742vw;border-left-width:.159vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-1.583vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.159vw * 2) / 6 - 0.159vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.159vw * 2) / 6 * 5 + 0.159vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.159vw;width:calc(100% / 5 * 3 - 0.159vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.159vw * 2) / 3 - 0.159vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.159vw * 2) / 3 * 2 + 0.159vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.159vw;width:calc(100% / 2 - 0.159vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.159vw;width:calc(100% / 5 - 0.159vw)}}@media screen and (max-width: 1170px){.pillar_F62Yl{border-width:.171vw}.group_1ksdS{padding-top:.171vw;border-top-width:.171vw;border-left-width:.171vw}.content_1gFZ->span{font-size:13px;font-size:0.8125rem}.content_1gFZ- span strong{font-size:15px;font-size:0.9375rem}.content_1gFZ- span.unit_25C4Z{font-size:13px;font-size:0.8125rem}.box_2dey9.parent_23pyN{border-top-width:.171vw;border-left-width:.171vw;padding-top:1.71vw}.box_2dey9.parent_23pyN::after{height:1.881vw;border-left-width:.171vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-1.709vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.171vw * 2) / 6 - 0.171vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.171vw * 2) / 6 * 5 + 0.171vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.171vw;width:calc(100% / 5 * 3 - 0.171vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.171vw * 2) / 3 - 0.171vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.171vw * 2) / 3 * 2 + 0.171vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.171vw;width:calc(100% / 2 - 0.171vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.171vw;width:calc(100% / 5 - 0.171vw)}}@media screen and (max-width: 959px){.pillar_F62Yl{border-width:.417vw}.group_1ksdS{padding-top:.417vw;border-top-width:.417vw;border-left-width:.417vw}.content_1gFZ->span{font-size:14px;font-size:0.875rem}.content_1gFZ- span strong{font-size:16px;font-size:1rem}.content_1gFZ- span.unit_25C4Z{font-size:14px;font-size:0.875rem}.box_2dey9.parent_23pyN{border-top-width:.417vw;border-left-width:.417vw;padding-top:3.333vw}.box_2dey9.parent_23pyN::after{height:3.75vw;border-left-width:.417vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-3.333vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.417vw * 2) / 6 - 0.417vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.417vw * 2) / 6 * 5 + 0.417vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.417vw;width:calc(100% / 5 * 3 - 0.417vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.417vw * 2) / 3 - 0.417vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.417vw * 2) / 3 * 2 + 0.417vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.417vw;width:calc(100% / 2 - 0.417vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.417vw;width:calc(100% / 5 - 0.417vw)}}@media screen and (max-width: 767px){.pillar_F62Yl{border-width:.313vw}.group_1ksdS{padding-top:.313vw;border-top-width:.313vw;border-left-width:.313vw}.content_1gFZ->span{font-size:14px;font-size:0.875rem}.content_1gFZ- span strong{font-size:16px;font-size:1rem}.content_1gFZ- span.unit_25C4Z{font-size:14px;font-size:0.875rem}.box_2dey9.parent_23pyN{border-top-width:.313vw;border-left-width:.313vw;padding-top:3.541vw}.box_2dey9.parent_23pyN::after{height:3.855vw;border-left-width:.313vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-3.541vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.313vw * 2) / 6 - 0.313vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.313vw * 2) / 6 * 5 + 0.313vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.313vw;width:calc(100% / 5 * 3 - 0.313vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.313vw * 2) / 3 - 0.313vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.313vw * 2) / 3 * 2 + 0.313vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.313vw;width:calc(100% / 2 - 0.313vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.313vw;width:calc(100% / 5 - 0.313vw)}}@media screen and (max-width: 600px){.pillar_F62Yl{border-width:.5vw}.group_1ksdS{padding-top:.5vw;border-top-width:.5vw;border-left-width:.5vw}.content_1gFZ->span{font-size:14px;font-size:0.875rem}.content_1gFZ- span strong{font-size:16px;font-size:1rem}.content_1gFZ- span.unit_25C4Z{font-size:14px;font-size:0.875rem}.box_2dey9.parent_23pyN{border-top-width:.5vw;border-left-width:.5vw;padding-top:4.834vw}.box_2dey9.parent_23pyN::after{height:5.334vw;border-left-width:.5vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-4.833vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.5vw * 2) / 6 - 0.5vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.5vw * 2) / 6 * 5 + 0.5vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.5vw;width:calc(100% / 5 * 3 - 0.5vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.5vw * 2) / 3 - 0.5vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.5vw * 2) / 3 * 2 + 0.5vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.5vw;width:calc(100% / 2 - 0.5vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.5vw;width:calc(100% / 5 - 0.5vw)}}@media screen and (max-width: 420px){.pillar_F62Yl{border-width:.334vw}.group_1ksdS{padding-top:.334vw;border-top-width:.334vw;border-left-width:.334vw}.content_1gFZ->span{font-size:12px;font-size:0.75rem}.content_1gFZ- span strong{font-size:14px;font-size:0.875rem}.content_1gFZ- span.unit_25C4Z{font-size:12px;font-size:0.75rem}.box_2dey9.parent_23pyN{border-top-width:.334vw;border-left-width:.334vw;padding-top:5.166vw}.box_2dey9.parent_23pyN::after{height:5.5vw;border-left-width:.334vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-5.166vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.334vw * 2) / 6 - 0.334vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.334vw * 2) / 6 * 5 + 0.334vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.334vw;width:calc(100% / 5 * 3 - 0.334vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.334vw * 2) / 3 - 0.334vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.334vw * 2) / 3 * 2 + 0.334vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.334vw;width:calc(100% / 2 - 0.334vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.334vw;width:calc(100% / 5 - 0.334vw)}}',""]),e.locals={container:"container_37WEO",pillar:"pillar_F62Yl",group:"group_1ksdS",box:"box_2dey9",parent:"parent_23pyN",confirmed:"confirmed_P-yFc",hospitalized:"hospitalized_3w7PT",minor:"minor_1RUXC",severe:"severe_2vs8y",deceased:"deceased_3u1su",recovered:"recovered_JzYjB",content:"content_1gFZ-",unit:"unit_25C4Z"},t.exports=e},377:function(t,e,n){"use strict";var r=n(317);n.n(r).a},378:function(t,e,n){(e=n(11)(!1)).push([t.i,".DataSelector{margin-top:20px;border:1px solid #d9d9d9;background-color:#fff}.DataSelector-Button{border:none !important;margin:2px;border-radius:4px !important;height:24px !important;font-size:12px !important;color:#333 !important;background-color:#fff !important}.DataSelector-Button::before{background-color:inherit}.DataSelector-Button:focus{outline:dotted #707070 1px}.DataSelector .v-btn--active{background-color:#4d4d4d !important;color:#fff !important}",""]),t.exports=e},379:function(t,e,n){"use strict";var r=n(319);n.n(r).a},380:function(t,e,n){(e=n(11)(!1)).push([t.i,"@media screen and (min-width: 1171px){.DataView-DataInfo{text-align:right;width:50%}}.DataView-DataInfo-summary{display:inline-block;font-family:Hiragino Sans,sans-serif;font-style:normal;font-size:30px;line-height:30px}.DataView-DataInfo-summary-unit{font-size:.6em}.DataView-DataInfo-date{white-space:wrap;display:inline-block;font-size:12px;line-height:12px;color:#707070}",""]),t.exports=e},381:function(t,e,n){"use strict";var r=n(320);n.n(r).a},382:function(t,e,n){(e=n(11)(!1)).push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},383:function(t,e,n){"use strict";var r=n(322);n.n(r).a},384:function(t,e,n){(e=n(11)(!1)).push([t.i,".cardTable.v-data-table th{padding:8px 10px;height:auto;border-bottom:1px solid #d9d9d9;white-space:nowrap;color:#4d4d4d;font-size:12px}.cardTable.v-data-table th.text-center{text-align:center}.cardTable.v-data-table tbody tr{color:#333}.cardTable.v-data-table tbody tr td{padding:8px 10px;height:auto;font-size:12px}.cardTable.v-data-table tbody tr td.text-center{text-align:center}.cardTable.v-data-table tbody tr:nth-child(odd) td{background:rgba(217,217,217,.3)}.cardTable.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row){border:none}.cardTable.v-data-table:focus{outline:dotted #707070 1px}.note{padding:8px;font-size:12px;color:#707070}",""]),t.exports=e},385:function(t,e,n){var content=n(514);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("a7f1d464",content,!0,{sourceMap:!1})},393:function(t,e,n){"use strict";var r=n(302),o=n(0),l=n(305),d=o.a.extend({components:{DataView:l.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""}}}),c=n(373),f=n(8);var h=Object(f.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("data-view",{attrs:{title:this.title,"title-id":this.titleId,date:this.date},scopedSlots:this._u([{key:"button",fn:function(){},proxy:!0}])},[this._v(" "),this._t("default")],2)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null).exports,v=(n(59),n(60),n(5),n(36),o.a.extend({props:{"検査実施人数":{type:Number,required:!0},"陽性者数":{type:Number,required:!0},"入院中":{type:Number,required:!0},"軽症中等症":{type:Number,required:!0},"重症":{type:Number,required:!0},"死亡":{type:Number,required:!0},"退院":{type:Number,required:!0}},methods:{getAdjustX:function(input){switch(input.toString(10).length){case 1:return 3;case 2:return 0;case 3:return-3;case 4:return-8;default:return 0}}}})),_=n(375);var w={components:{ConfirmedCasesCard:h,ConfirmedCasesTable:Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.tall,t.$style.parent,t.$style.confirmed]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v("\n          "+t._s(t.$t("陽性者数"))+"\n          "),n("br"),t._v("("+t._s(t.$t("累計"))+")\n        ")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.陽性者数))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent,t.$style.hospitalized]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院中")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.入院中))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.short,t.$style.minor]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",{domProps:{innerHTML:t._s(t.$t("軽症・<br />中等症"))}}),t._v(" "),n("span",[n("strong",[t._v(t._s(t.軽症中等症))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.short,t.$style.severe]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("重症")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.重症))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.deceased]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("死亡")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.死亡))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.recovered]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("退院")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.退院))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])])}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null).exports},data:function(){var t=function(data){return{"検査実施人数":data.value,"陽性者数":data.children[0].value,"入院中":data.children[0].children[0].value,"軽症中等症":data.children[0].children[0].children[0].value,"重症":data.children[0].children[0].children[1].value,"死亡":data.children[0].children[2].value,"退院":data.children[0].children[1].value}}(r.main_summary),data={Data:r,confirmedCases:t};return data}},x=n(44),m=n.n(x),y=n(297),z=Object(f.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("confirmed-cases-card",{attrs:{title:this.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:this.Data.patients.date}},[e("confirmed-cases-table",this._b({attrs:{"aria-label":this.$t("検査陽性者の状況")}},"confirmed-cases-table",this.confirmedCases,!1))],1)],1)}),[],!1,null,null,null);e.a=z.exports;m()(z,{VCol:y.a})},394:function(t,e,n){"use strict";n(63),n(10),n(6);var r=n(302),o=n(308),l=n(18),d=n.n(l),c=[{text:"公表日",value:"公表日"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代"},{text:"性別",value:"性別"},{text:"退院※",value:"退院",align:"center"}],f=n(0),h=n(305),v=n(323),_=n(330),w=f.a.extend({components:{DataView:h.a,DataViewBasicInfoPanel:v.a,OpenDataLink:_.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""}},mounted:function(){this.$refs.displayedTable.$el.querySelectorAll("table").forEach((function(table){table.setAttribute("tabindex","0")}))}}),x=(n(383),n(8)),m=n(44),y=n.n(m),z=n(537),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("span")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:t.url}})]},proxy:!0}])},[t._v(" "),n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0}}),t._v(" "),n("div",{staticClass:"note"},[t._v("\n    "+t._s(t.$t("※退院には、死亡退院を含む"))+"\n  ")])],1)}),[],!1,null,null,null),k=component.exports;y()(component,{VDataTable:z.a});var $={components:{DataTable:k},data:function(){var t=Object(o.a)(r.patients_summary.data),e=function(data){var t={headers:c,datasets:[]};return data.forEach((function(e){var n,r,o,l,c={"公表日":null!==(n=d()(e["リリース日"]).format("MM/DD"))&&void 0!==n?n:"不明","居住地":null!==(r=e["居住地"])&&void 0!==r?r:"不明","年代":null!==(o=e["年代"])&&void 0!==o?o:"不明","性別":null!==(l=e["性別"])&&void 0!==l?l:"不明","退院":e["退院"]};t.datasets.push(c)})),t.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),t}(r.patients.data),n={lText:t[t.length-1].cumulative.toLocaleString(),sText:this.$t("{date}の累計",{date:t[t.length-1].label}),unit:this.$t("人")},l=!0,f=!1,h=void 0;try{for(var v,_=e.headers[Symbol.iterator]();!(l=(v=_.next()).done);l=!0){var header=v.value;header.text="退院"===header.value?this.$t("退院※"):this.$t(header.value)}}catch(t){f=!0,h=t}finally{try{l||null==_.return||_.return()}finally{if(f)throw h}}var w=!0,x=!1,m=void 0;try{for(var y,z=e.datasets[Symbol.iterator]();!(w=(y=z.next()).done);w=!0){var k=y.value;if(k["居住地"]=this.$t(k["居住地"]),k["性別"]=this.$t(k["性別"]),k["退院"]=this.$t(k["退院"]),"10歳未満"===k["年代"])k["年代"]=this.$t("10歳未満");else if("不明"===k["年代"])k["年代"]=this.$t("不明");else{var $=k["年代"].substring(0,2);k["年代"]=this.$t("{age}代",{age:$})}}}catch(t){x=!0,m=t}finally{try{w||null==z.return||z.return()}finally{if(x)throw m}}var data={Data:r,patientsTable:e,sumInfoOfPatients:n};return data}},D=n(297),C=Object(x.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{title:this.$t("陽性患者の属性"),"title-id":"attributes-of-confirmed-cases","chart-data":this.patientsTable,"chart-option":{},date:this.Data.patients.date,info:this.sumInfoOfPatients,url:"https://opendata.pref.shizuoka.jp/",source:this.$t("オープンデータを入手")}})],1)}),[],!1,null,null,null);e.a=C.exports;y()(C,{VCol:D.a})},395:function(t,e,n){"use strict";var r=n(302),o=n(308),l={components:{TimeBarChart:n(309).a},data:function(){var t=Object(o.a)(r.patients_summary.data),data={Data:r,patientsGraph:t};return data}},d=n(8),c=n(44),f=n.n(c),h=n(297),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("陽性患者数"),"title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":this.patientsGraph,date:this.Data.patients.date,unit:this.$t("人"),url:"https://opendata.pref.shizuoka.jp/"}})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VCol:h.a})},397:function(t,e,n){"use strict";var r=n(302),o=n(308),l={components:{TimeBarChart:n(309).a},data:function(){var t=r.inspection_persons.labels.map((function(t,i){return{"日付":t,"小計":r.inspection_persons.datasets[0].data[i]}})),e=Object(o.a)(t);return{data:r.inspection_persons,graphData:e}}},d=n(8),c=n(44),f=n.n(c),h=n(297),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{title:t.$t("検査実施人数"),"title-id":"number-of-inspection-persons","chart-id":"number-of-inspection-persons","chart-data":t.graphData,date:t.data.date,unit:t.$t("人")},scopedSlots:t._u([{key:"description",fn:function(){return[n("ul",[n("li",[t._v("\n          "+t._s(t.$t("（注）医療機関が保険適用で行った検査は含まれていない"))+"\n        ")]),t._v(" "),n("li",[t._v("\n          "+t._s(t.$t("（注）速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n        ")])])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VCol:h.a})},398:function(t,e,n){"use strict";var r=n(302),o=n(308),l={components:{TimeBarChart:n(309).a},data:function(){var t=Object(o.a)(r.querents.data),data={Data:r,querentsGraph:t};return data}},d=n(8),c=n(44),f=n.n(c),h=n(297),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("新型コロナ受診相談窓口相談件数"),"title-id":"number-of-reports-to-covid19-consultation-desk","chart-id":"time-bar-chart-querents","chart-data":this.querentsGraph,date:this.Data.querents.date,unit:this.$t("件.reports"),url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000070"}})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VCol:h.a})},474:function(t,e,n){"use strict";var r=n(372);n.n(r).a},475:function(t,e,n){(e=n(11)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},513:function(t,e,n){"use strict";var r=n(385);n.n(r).a},514:function(t,e,n){(e=n(11)(!1)).push([t.i,".MainPage .Header[data-v-4afe72f8]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-4afe72f8]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-4afe72f8]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-4afe72f8]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-4afe72f8]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-4afe72f8]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-4afe72f8]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-4afe72f8]{padding:4px 8px}}",""]),t.exports=e},538:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(306),l=n(360),d=r.a.extend({props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(l.a)(t)}}}),c=(n(474),n(8)),f=n(44),h=n.n(f),v=n(289),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n  ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null),_=component.exports;h()(component,{VIcon:v.a});var w=n(302),x=n(359),m=n(393),y=n(395),z=n(394),k=n(397),$=n(398),D=r.a.extend({components:{PageHeader:o.a,WhatsNew:_,ConfirmedCasesDetailsCard:m.a,ConfirmedCasesNumberCard:y.a,ConfirmedCasesAttributesCard:z.a,InspectionPersonsNumberCard:k.a,ConsultationDeskReportsNumberCard:$.a},data:function(){var data={Data:w,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("静岡県内の最新感染動向")},newsItems:x.newsItems};return data},computed:{updatedAt:function(){return Object(l.b)(this.$data.Data.lastUpdate)}},head:function(){return{title:this.$t("静岡県内の最新感染動向")}}}),C=(n(513),n(408)),F=n(298),S=Object(c.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.Data.lastUpdate))])]),t._v(" "),["ja","ja-basic"].includes(t.$i18n.locale)?t._e():n("div",{staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("tested-cases-details-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("inspection-persons-number-card"),t._v(" "),n("tested-number-card"),t._v(" "),n("telephone-advisory-reports-number-card"),t._v(" "),n("consultation-desk-reports-number-card"),t._v(" "),n("metro-card"),t._v(" "),n("agency-card"),t._v(" "),n("shinjuku-visitors-card"),t._v(" "),n("chiyoda-visitors-card")],1),t._v(" "),n("v-divider"),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("shinjuku-st-map-card"),t._v(" "),n("tokyo-st-map-card")],1)],1)}),[],!1,null,"4afe72f8",null);e.default=S.exports;h()(S,{VDivider:C.a,VRow:F.a})}}]);