(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8tYL":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loaded?s("div",[s("a",{staticStyle:{padding:"0px",position:"fixed",right:"5%",bottom:"4%","z-index":"10"},attrs:{href:t.url}},[s("img",{staticStyle:{padding:"0px"},attrs:{src:"https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/whatsapp-512.png",width:"60px",height:"100%"}})]),s("div",{staticClass:"row justify-center text-grey-8 text-left",staticStyle:{"margin-top":"30px"}},[s("div",{staticClass:"col-xs-11 col-sm-8 col-md-8",staticStyle:{"font-size":"250%","font-weight":"500"}},[t._v("\n      "+t._s(t.blog.title)+"\n    ")])]),s("div",{staticClass:"row justify-center text-grey-6 text-center",staticStyle:{"margin-top":"25px","text-transform":"capitalize"}},[s("div",{staticClass:"col-xs-11 col-sm-8 text-left"},[s("q-icon",{attrs:{name:"account_circle"}}),t._v(" "+t._s(t.blog.author)+"\n    ")],1),s("div",{staticClass:"col-xs-11 col-sm-8 text-left",staticStyle:{"margin-top":"5px"}},[s("q-icon",{attrs:{name:"watch_later"}}),t._v(" "+t._s(new Date(t.blog.time).toLocaleString())+"\n    ")],1)]),s("div",{staticClass:"row justify-center text-grey-6",staticStyle:{"margin-top":"25px"}},[s("div",{staticClass:"col-xs-11 col-sm-8 col-md-6 text-left",staticStyle:{"font-weight":"400"},style:{"font-size":t.mobile?"16px":"20px"}},[t._v("\n      "+t._s(t.blog.desc)+"\n    ")])]),s("div",{staticClass:"row justify-center text-grey-6 text-center",staticStyle:{"margin-top":"50px","margin-bottom":"30px"}},[t.blog.video?s("iframe",{attrs:{width:"420",height:"315",src:t.blog.url}}):s("img",{staticClass:"col-xs-11 col-sm-9 col-lg-8",attrs:{height:"100%",src:t.blog.url}})]),s("div",{staticClass:"row text-grey-7 text-left"},t._l(t.blog.content,function(e){return s("div",{staticClass:"col-xs-10 offset-xs-1 col-sm-8 offset-sm-2 offset-md-2 col-md-8 col-lg-6 offset-lg-3",staticStyle:{"margin-top":"10px","font-weight":"350","line-height":"1.45","font-samily":"'Open Sans'"},style:{"font-size":t.mobile?"15px":"22px"}},[t._v("\n      "+t._s(e)+"\n    ")])}))]):t._e()},i=[];o._withStripped=!0;var l;s("KKXr");l="8080"===window.location.port?"http://localhost":window.location.origin;var n={computed:{mobile:function(){return!!this.$q.platform.is.mobile}},methods:{to:function(){}},data:function(){return{blog:null,loaded:!1}},created:function(){var t=this;this.$http.get(l+"/blogs/blog="+this.$route.params.id).then(function(e){200===e.status&&(t.blog=e.body,t.blog.content=t.blog.content.split("\n"),t.url="whatsapp://send?text="+encodeURIComponent("Blissful - "+t.blog.title+". "+window.location),t.loaded=!0)})}},a=n,c=(s("bQ9C"),s("KHd+")),r=Object(c["a"])(a,o,i,!1,null,null,null);e["default"]=r.exports},bQ9C:function(t,e,s){"use strict";var o=s("vSvw"),i=s.n(o);i.a},vSvw:function(t,e,s){}}]);