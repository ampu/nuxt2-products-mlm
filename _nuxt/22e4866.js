(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{438:function(t,r,n){"use strict";n.r(r);var o=n(420),e=n(412),c=n(413),d=n(415),_=n(435),l=n(392),v=n(456),h=n(391),f=n(379),m=n(258),C=n(455),P=(n(35),n(260),n(15),n(56),n(7),n(119)),w={props:{product:{type:Object,required:!0}},computed:{productPath:function(){var t=this.product.id;return Object(P.b)(P.a.PRODUCT,{id:t})},isInCart:function(){var t=this;return this.$store.getters["products/getCartProductIds"].some((function(r){return t.product.id===r}))}},methods:{addToCart:function(){this.$store.commit("products/addToCart",this.product.id)}}},x=Object.assign(w,{__name:"ProductMain",setup:function(t){return{__sfc:!0,LocalPath:P.a}}}),I=n(83),component=Object(I.a)(x,(function(){var t=this,r=t._self._c,n=t._self._setupProxy;return r(h.a,{staticClass:"ProductMain"},[r(C.a,{attrs:{"no-gutters":""}},[r(v.a,{attrs:{cols:"6"}},[r(m.a,{staticClass:"ProductMain__image mr-5",attrs:{src:t.product.originalImageUrl,cover:""}})],1),t._v(" "),r(v.a,{attrs:{cols:"6"}},[r(_.a,{attrs:{elevation:"0"}},[r(l.c,[t._v("\n          "+t._s(t.product.name)+"\n        ")]),t._v(" "),r(l.b,[r(o.a,{staticClass:"px-0",attrs:{large:""}},[r(c.a,{attrs:{to:n.LocalPath.INDEX}},[t._v("\n              Главная\n            ")]),t._v(" "),r(e.a,[r(f.a,[t._v("mdi-chevron-right")])],1),t._v(" "),r(c.a,{attrs:{to:t.productPath}},[t._v("\n              "+t._s(t.product.name)+"\n            ")])],1)],1),t._v(" "),r(l.b,[t._v("\n          Цена:\n          "),r("strong",[t._v(t._s(t.product.price.toFixed(2)))]),t._v("\n          ₽\n        ")]),t._v(" "),r(l.b,[r("div",{domProps:{innerHTML:t._s(t.product.description)}})]),t._v(" "),r(l.a,{staticClass:"px-4"},[t.isInCart?r("NuxtLink",{attrs:{to:n.LocalPath.CART}},[r(d.a,{attrs:{elevation:"0",outlined:""}},[t._v("\n              В корзину\n            ")])],1):t._e(),t._v(" "),t.isInCart?t._e():r(d.a,{attrs:{elevation:"0",outlined:""},on:{click:function(r){return r.preventDefault(),t.addToCart.apply(null,arguments)}}},[t._v("\n            Купить\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"53860a1e",null);r.default=component.exports}}]);