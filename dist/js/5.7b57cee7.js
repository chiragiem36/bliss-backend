(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8tYL":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.loaded?e("div",[e("a",{staticStyle:{padding:"0px",position:"fixed",right:"5%",bottom:"5%","z-index":"10"},attrs:{href:t.url}},[e("img",{staticStyle:{padding:"0px"},attrs:{src:"https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/whatsapp-512.png",width:"60px",height:"100%"}})]),e("div",{staticClass:"row justify-center text-grey-8 text-left",staticStyle:{"margin-top":"30px"}},[e("div",{staticClass:"col-xs-11 col-sm-8 col-md-8",staticStyle:{"font-size":"250%","font-weight":"500"}},[t._v("\n      "+t._s(t.blog.title)+"\n    ")])]),e("div",{staticClass:"row justify-center text-grey-6 text-center",staticStyle:{"margin-top":"25px","text-transform":"capitalize"}},[e("div",{staticClass:"col-xs-11 col-sm-8 text-left"},[e("q-icon",{attrs:{name:"account_circle"}}),t._v(" "+t._s(t.blog.author)+"\n    ")],1),e("div",{staticClass:"col-xs-11 col-sm-8 text-left",staticStyle:{"margin-top":"5px"}},[e("q-icon",{attrs:{name:"watch_later"}}),t._v(" "+t._s(new Date(t.blog.time).toLocaleString())+"\n    ")],1)]),e("div",{staticClass:"row justify-center text-grey-6",staticStyle:{"margin-top":"25px"}},[e("div",{staticClass:"col-xs-11 col-sm-8 col-md-6 text-left",staticStyle:{"font-weight":"400"},style:{"font-size":t.small?"16px":"20px"}},[t._v("\n      "+t._s(t.blog.desc)+"\n    ")])]),e("div",{staticClass:"row justify-center text-grey-6 text-center",staticStyle:{"margin-top":"50px","margin-bottom":"30px"}},[e("img",{staticClass:"col-xs-11 col-sm-9 col-lg-8",attrs:{height:"100%",src:t.blog.img_url}})]),e("div",{staticClass:"row text-grey-7 text-left"},t._l(t.blog.content,function(s){return e("div",{staticClass:"col-xs-10 offset-xs-1 col-sm-8 offset-sm-2 offset-md-2 col-md-8 col-lg-6 offset-lg-3",staticStyle:{"margin-top":"10px","font-weight":"350","line-height":"1.45","font-samily":"'Open Sans'"},style:{"font-size":t.small?"15px":"22px"}},[t._v("\n      "+t._s(s)+"\n    ")])}))]):t._e()},o=[];i._withStripped=!0;var n;e("KKXr");n="8080"===window.location.port?"http://localhost":window.location.origin;var l={computed:{small:function(){return window.innerWidth<579}},methods:{to:function(){}},data:function(){return{blog:null,loaded:!1}},created:function(){var t=this;this.$http.get(n+"/blogs/blog="+this.$route.params.id).then(function(s){200===s.status&&(t.blog=s.body,t.blog.content=t.blog.content.split("\n"),t.url="whatsapp://send?text="+encodeURIComponent("Blissful - "+t.blog.title+". "+window.location),t.loaded=!0)})}},a=l,c=(e("bQ9C"),e("KHd+")),r=Object(c["a"])(a,i,o,!1,null,null,null);s["default"]=r.exports},bQ9C:function(t,s,e){"use strict";var i=e("vSvw"),o=e.n(i);o.a},vSvw:function(t,s,e){}}]);