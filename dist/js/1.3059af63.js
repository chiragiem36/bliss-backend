(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"15Ye":function(t,e,o){"use strict";var s=o("Lshg"),n=o.n(s);n.a},Lshg:function(t,e,o){},vBO3:function(t,e,o){"use strict";o.r(e);var s,n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("q-scroll-area",{staticClass:"row",staticStyle:{"padding-top":"10px"},style:{height:t.height-150+"px"}},[o("div",{staticClass:"col-xs-10"},t._l(t.blogs,function(e){return o("div",{staticClass:"row justify-center",staticStyle:{"padding-bottom":"5px"}},[o("q-card",{key:e.title,staticClass:"col-xs-11  col-sm-8 col-md-6",staticStyle:{"margin-bottom":"10px"},attrs:{color:"white","text-color":"grey-9"}},[o("q-card-title",{staticClass:"text-grey-8"},[t._v("\n      \t\t\t\t\t"+t._s(e.title)+"\n      \t\t\t\t\t"),o("span",{staticClass:"text-grey-8",attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Time - "),o("span",{staticClass:"text-grey-6"},[t._v(t._s(new Date(e.date).toLocaleTimeString()))])])]),o("q-card-separator"),o("q-card-main",[o("p",{staticStyle:{overflow:"hidden"},style:{height:t.maxW}},[o("img",{attrs:{src:"/assets/sample.png",width:"100%"}})]),o("p",[t._v(t._s(e.desc))])])],1)],1)}))])],1)},i=[];n._withStripped=!0,s="8080"===window.location.port?"http://localhost:8000":window.location.origin;var l={data:function(){return{blogs:[],ts:""}},created:function(){var t=this;this.$http.get(s+"/blogs/latest").then(function(e){return console.log(e),200===e.status&&t.blogs.push(e.body),e.body._id}).then(function(e){t.getMore(e)})},methods:{getMore:function(t){var e=this;this.$http.get(s+"/blogs/last="+t).then(function(t){200===t.status&&(e.blogs.push(t.body),e.getMore(t.body._id))}).catch(function(t){console.error(t)})}},computed:{height:function(){return window.innerHeight},blogs:function(){return[{title:"Hello world",desc:"Saying Hello to the world",tags:"none",date:new Date},{title:"Hello world",desc:"Saying Hello to the world",tags:"none",date:new Date},{title:"Hello world",desc:"Saying Hello to the world",tags:"none",date:new Date}]},maxW:function(){return this.$q.platform.is.mobile?"150px":"350px"}}},a=l,r=(o("15Ye"),o("KHd+")),c=Object(r["a"])(a,n,i,!1,null,null,null);e["default"]=c.exports}}]);