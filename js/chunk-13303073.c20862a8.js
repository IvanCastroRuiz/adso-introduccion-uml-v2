(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13303073"],{2532:function(t,e,s){"use strict";var n=s("23e7"),i=s("5a34"),r=s("1d80"),a=s("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(r(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,s){var n=s("861d"),i=s("c6b6"),r=s("b622"),a=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"5a34":function(t,e,s){var n=s("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},6189:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper px-0"},[s("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth}],style:[{transform:"translate("+t.scrollVal+"px,0px)"}]},[t._t("default")],2)])},i=[],r=(s("7db0"),s("b64b"),s("caad"),s("2532"),s("d81d"),{name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1}},data:function(){return{scrollVal:0,ids:[]}},watch:{selectedId:function(t){t.length&&this.scroll()}},mounted:function(){this.getCords(),window.addEventListener("resize",this.scroll)},updated:function(){this.getCords()},beforeDestroy:function(){window.removeEventListener("resize",this.scroll)},methods:{scroll:function(){var t=this,e=this.ids.find((function(e){return e.id===t.selectedId})).id,s=document.getElementById(e);if(Object.keys(this.$slots.default).length&&this.selectedId.length&&null!==s){var n=!(navigator.userAgent.includes("Chrome/")||navigator.userAgent.includes("Firefox/")),i=this.$refs.hContainer,r=s.offsetWidth*this.ids.length,a=n?s.offsetLeft-i.offsetLeft:s.offsetLeft,o=i.offsetWidth/s.offsetWidth;o>1&&r-a<i.offsetWidth&&(a=r-i.offsetWidth),this.scrollVal=1===this.ids.length?0:-a}},getCords:function(){this.$slots.default&&(this.ids=this.$slots.default.map((function(t){return{id:t.elm.id,key:t.key}})))}}}),a=r,o=(s("705c"),s("2877")),d=Object(o["a"])(a,n,i,!1,null,"78c19d28",null);e["a"]=d.exports},"705c":function(t,e,s){"use strict";s("fea5")},7596:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slyder-b"},[t.datos.length?s("ScrollHorizontal",{attrs:{selectedId:t.selected,"item-full-width":""}},t._l(t.datos,(function(e,n){return s("div",{key:"key-"+t.getId(n),staticClass:"slyder-b__slyde",attrs:{id:t.getId(n)}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 order-lg-2 mb-4 mb-lg-0"},[s("figure",{staticClass:"slyder-b__img"},[s("img",{attrs:{src:e.imagen,alt:e.leyendaImagen}}),e.leyendaImagen?s("figcaption",[t._v(t._s(e.leyendaImagen))]):t._e()])]),s("div",{staticClass:"col-lg-4 order-lg-1"},[s("h3",[t._v(t._s(e.titulo))]),s("p",{staticClass:"mb-3",domProps:{innerHTML:t._s(e.texto)}}),s("div",{staticClass:"slyder__action"},[s("div",{staticClass:"slyder__pagination"},[t._v(t._s(n+1)+"/"+t._s(t.datos.length))]),n-1>=0?s("a",{staticClass:"slyder__btn",on:{click:function(e){t.selected=t.getId(n-1)}}},[s("i",{staticClass:"fas fa-angle-left"})]):t._e(),n!=t.datos.length-1?s("a",{staticClass:"slyder__btn",on:{click:function(e){t.selected=t.getId(n+1)},mouseover:function(e){t.mostrarIndicador=!1}}},[s("i",{staticClass:"fas fa-angle-right"}),t.mostrarIndicador&&0===n?s("div",{staticClass:"indicador__container"},[s("div",{staticClass:"indicador--click indicador--sm"})]):t._e()]):t._e()])])])])})),0):t._e()],1)},i=[],r=s("c73e"),a=s("6189"),o={name:"SlyderB",components:{ScrollHorizontal:a["a"]},mixins:[r["a"]],data:function(){return{mostrarIndicador:!0}},mounted:function(){this.selected=this.getId(0)}},d=o,l=s("2877"),c=Object(l["a"])(d,n,i,!1,null,null,null);e["default"]=c.exports},"7db0":function(t,e,s){"use strict";var n=s("23e7"),i=s("b727").find,r=s("44d2"),a="find",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)},ab13:function(t,e,s){var n=s("b622"),i=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[i]=!1,"/./"[t](e)}catch(n){}}return!1}},b64b:function(t,e,s){var n=s("23e7"),i=s("7b0b"),r=s("df75"),a=s("d039"),o=a((function(){r(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return r(i(t))}})},c73e:function(t,e,s){"use strict";e["a"]={props:{datos:{type:Array,default:()=>[]}},data:()=>({mainId:Math.floor(1e7*Math.random()),selected:"0"}),methods:{getId(t){return t<0?null:"sl-"+this.mainId+t+1}}}},caad:function(t,e,s){"use strict";var n=s("23e7"),i=s("4d64").includes,r=s("44d2");n({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d81d:function(t,e,s){"use strict";var n=s("23e7"),i=s("b727").map,r=s("1dde"),a=r("map");n({target:"Array",proto:!0,forced:!a},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},fea5:function(t,e,s){}}]);
//# sourceMappingURL=chunk-13303073.c20862a8.js.map