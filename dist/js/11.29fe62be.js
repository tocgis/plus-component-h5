webpackJsonp([11],{L3YA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("rzQm"),s=a.n(n),r=a("fKPv"),i=a.n(r),o=(a("EuXz"),a("uNya")),c=a("0zyd");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return c["a"].get("/questions/".concat(e,"/answers"),{params:{offset:t,limit:a,order_type:"default"},validateStatus:function(e){return 200===e}})}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return c["a"].get("/questions/".concat(e,"/answers"),{params:{offset:t,limit:a,order_type:"time"},validateStatus:function(e){return 200===e}})}function d(e){return c["a"].post("/question-answers/".concat(e,"/likes"),{},{validateStatus:function(e){return 201===e}})}function h(e){return c["a"].delete("/question-answers/".concat(e,"/likes"),{validateStatus:function(e){return 204===e}})}var m=a("BM2P"),v=a("mfU/"),f="module-question-answers-item",w={name:f,props:{answer:{type:Object,required:!0}},components:i()({},v["a"].name,v["a"]),data:function(){return{likeTargetHanding:!1}},computed:{anonymity:function(){var e=this.answer.anonymity;return!!e},user:function(){var e=this.answer.user,t=void 0===e?{}:e;return t}},methods:{classNameBuilder:function(e){return"".concat(f,"-").concat(e)},handleLike:function(){var e=this;d(this.answer.id).then(function(){e.likeTargetHanding=!1,e.answer.liked=!0,e.answer.likes_count+=1}).catch(function(t){var a=t.response;a=void 0===a?{}:a;var n=a.data;e.likeTargetHanding=!1,e.$Message.error(n)})},handleUnlike:function(){var e=this;h(this.answer.id).then(function(){e.likeTargetHanding=!1,e.answer.liked=!1,e.answer.likes_count-=1}).catch(function(t){var a=t.response;a=void 0===a?{}:a;var n=a.data;e.likeTargetHanding=!1,e.$Message.error(n)})},handleLikeTarget:function(){this.likeTargetHanding?this.$Message.warning("正在执行，请勿重复点击!"):this.answer.liked?this.handleUnlike():this.handleLike()}},created:function(){}},p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"module-question-answers-item"},[a("div",{class:e.classNameBuilder("avatar")},[a("module-user-avatar",{attrs:{size:.56,anonymity:e.anonymity,src:e.user.avatar,sex:e.user.sex}})],1),a("div",{class:e.classNameBuilder("main")},[a("h3",{class:e.classNameBuilder("main-header")},[e._v("\n      "+e._s(e.anonymity?"匿名用户":e.user.name)+"\n      "),a("span",[e._v(e._s(e._f("time2tips")(e.answer.created_at)))])]),a("div",{class:e.classNameBuilder("main-body")},[e._v(e._s(e._f("markdownText")(e.answer.body)))]),a("div",{class:e.classNameBuilder("main-button")},[a("button",{on:{click:e.handleLikeTarget}},[a("svg",{class:[e.classNameBuilder("icon"),{active:e.answer.liked}]},[a("use",{attrs:{"xlink:href":"#message-likes"}})]),e._v("\n        "+e._s(e._f("formatNum")(e.answer.likes_count))+"\n      ")]),a("span",[a("svg",{class:e.classNameBuilder("icon")},[a("use",{attrs:{"xlink:href":"#message-comments"}})]),e._v("\n        "+e._s(e._f("formatNum")(e.answer.comments_count))+"\n      ")])])])])},_=[],b=a("XyMi");function g(e){a("PRrP")}var k=!1,N=g,q=null,B=null,y=Object(b["a"])(w,p,_,k,N,q,B),C=y.exports,T="page-question",M={name:T,components:i()({},C.name,C),data:function(){return{question:{},answersTimeOrder:!1,answers:[]}},computed:{logedUser:function(){var e=this.$store.state.CURRENTUSER;return e},editer:function(){return!1},topics:function(){var e=this.question.topics,t=void 0===e?[]:e;return t},htmlBody:function(){var e=this.question.body,t=void 0===e?"":e;return Object(m["render"])(t)},loadContainer:function(){return this.$refs.questionLoadContainer},answerRequestMethod:function(){return this.answersTimeOrder?l:u}},watch:{answersTimeOrder:function(e,t){console.log(e,t),e.path===t.path&&(this.answers=[],this.loadContainer.beforeRefresh())}},methods:{classNameBuilder:function(e){return"".concat(T,"-").concat(e)},fetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object(o["b"])(this.$route.params.id).then(function(a){var n=a.data;e.question=n,t instanceof Function&&t()}).catch(function(t){var a=t.response;a=void 0===a?{}:a;var n=a.data;e.loadContainer.topEnd(!1),e.loadContainer.bottomEnd(!0),e.$Message.error(n)})},refreshAnswer:function(){var e=this;this.answerRequestMethod(this.$route.params.id).then(function(t){var a=t.data;e.loadContainer.topEnd(!1),e.loadContainer.bottomEnd(a.length<15),e.answers=a}).catch(function(t){var a=t.response;a=void 0===a?{}:a;var n=a.data;e.loadContainer.topEnd(!1),e.loadContainer.bottomEnd(!0),e.$Message.error(n)})},handleRefreshAnswers:function(){this.fetch(this.refreshAnswer)},handleTargetAnswersOrder:function(){this.answersTimeOrder=!this.answersTimeOrder},handleWatch:function(){var e=this;Object(o["d"])(this.$route.params.id).then(function(){e.question.watched=!0,e.question.watchers_count+=1}).catch(function(t){var a=t.response;a=void 0===a?{}:a;var n=a.data;e.$Message.error(n)})},handleUnwatch:function(){var e=this;Object(o["c"])(this.$route.params.id).then(function(){e.question.watched=!1,e.question.watchers_count-=1}).catch(function(t){var a=t.response;a=void 0===a?{}:a;var n=a.data;e.$Message.error(n)})},handleLoadMoreAnswers:function(){var e=this;this.answers.length&&this.answerRequestMethod(this.$route.params.id,this.answers.length).then(function(t){var a=t.data;e.loadContainer.bottomEnd(a.length<15),e.answers=s()(e.answers).concat(s()(a))}).catch(function(t){var a=t.response;a=void 0===a?{}:a;var n=a.data;e.loadContainer.bottomEnd(!0),e.$Message.error(n)})}}},$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("head-top",{attrs:{"go-back":!0,title:"问题详情"}}),a("div",{class:e.classNameBuilder("container")},[a("load-more",{ref:"questionLoadContainer",attrs:{"on-refresh":e.handleRefreshAnswers,"on-load-more":e.handleLoadMoreAnswers}},[a("div",{class:e.classNameBuilder("main")},[a("div",{class:e.classNameBuilder("main-topics")},e._l(e.topics,function(t){return a("router-link",{key:t.id,staticClass:"label",attrs:{to:"/question-topics/"+t.id}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),a("h3",{class:e.classNameBuilder("main-title")},[e._v(e._s(e.question.subject))]),a("div",{class:["markdown-body",e.classNameBuilder("main-body")],domProps:{innerHTML:e._s(e.htmlBody)}}),a("div",{class:e.classNameBuilder("main-watch")},[a("div",{class:e.classNameBuilder("main-watch-count")},[a("span",{staticClass:"follow-count"},[e._v(e._s(e.question.watchers_count)+" 关注")]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.question.amount,expression:"question.amount"}]},[a("span",[e._v("·")]),a("span",{staticClass:"shang"},[a("span",[e._v("赏")]),e._v("\n                "+e._s(e.question.amount)+"\n              ")])])]),e.question.watched?a("button",{class:[e.classNameBuilder("main-watch-follow"),"active"],on:{click:e.handleUnwatch}},[a("span",[e._v("✓")]),e._v("已关注\n          ")]):a("button",{class:e.classNameBuilder("main-watch-follow"),on:{click:e.handleWatch}},[a("span",[e._v("+")]),e._v("关注\n          ")])]),a("div",{class:e.classNameBuilder("main-button")},[a("div",{staticClass:"button"},[a("svg",{class:e.classNameBuilder("main-button-icon")},[a("use",{attrs:{"xlink:href":"#base-reward"}})]),e._v("\n            "+e._s(e.question.amount?"已":"未")+"设置悬赏\n          ")]),a("span"),a("div",{staticClass:"button"},[a("svg",{class:e.classNameBuilder("main-button-icon")},[a("use",{attrs:{"xlink:href":"#base-edit"}})]),e._v("\n            添加回答\n          ")])])]),a("div",{class:e.classNameBuilder("answers-tool")},[a("div",[e._v(e._s(e.question.answers_count)+"个回答")]),a("button",{on:{click:e.handleTargetAnswersOrder}},[e._v("\n          "+e._s(e.answersTimeOrder?"时间排序":"默认排序")+"\n          "),a("svg",{staticClass:"icon"},[a("use",{attrs:{"xlink:href":"#base-filter-list"}})])])]),e._l(e.answers,function(e){return a("module-question-answers-item",{key:e.id,attrs:{answer:e}})})],2)],1),a("div",{class:e.classNameBuilder("tabbar")},[a("a",{class:e.classNameBuilder("tabbar-item"),attrs:{href:"#"}},[a("svg",{class:e.classNameBuilder("tabbar-icon")},[a("use",{attrs:{"xlink:href":"#message-comments"}})]),e._v("\n      评论\n    ")]),a("a",{class:e.classNameBuilder("tabbar-item"),attrs:{href:"#"}},[a("svg",{class:e.classNameBuilder("tabbar-icon")},[a("use",{attrs:{"xlink:href":"#base-share"}})]),e._v("\n      分享\n    ")]),a("a",{directives:[{name:"show",rawName:"v-show",value:e.editer,expression:"editer"}],class:e.classNameBuilder("tabbar-item"),attrs:{href:"#"}},[a("svg",{class:e.classNameBuilder("tabbar-icon")},[a("use",{attrs:{"xlink:href":"#edit"}})]),e._v("\n      编辑\n    ")]),a("a",{class:e.classNameBuilder("tabbar-item"),attrs:{href:"#"}},[a("svg",{class:e.classNameBuilder("tabbar-icon")},[a("use",{attrs:{"xlink:href":"#base-more"}})]),e._v("\n      更多\n    ")])])],1)},x=[];function O(e){a("y2tp")}var E=!1,R=O,L=null,j=null,A=Object(b["a"])(M,$,x,E,R,L,j);t["default"]=A.exports},PRrP:function(e,t){},uNya:function(e,t,a){"use strict";t["a"]=r,t["b"]=i,t["d"]=o,t["c"]=c;var n=a("0zyd");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["a"].get("/questions",{params:e,validateStatus:function(e){return 200===e}})}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return s({type:e,limit:a,offset:t})}function i(e){return n["a"].get("/questions/".concat(e),{validateStatus:function(e){return 200===e}})}function o(e){return n["a"].put("/user/question-watches/".concat(e),{},{validateStatus:function(e){return 204===e}})}function c(e){return n["a"].delete("/user/question-watches/".concat(e),{validateStatus:function(e){return 204===e}})}},y2tp:function(e,t){}});
//# sourceMappingURL=11.29fe62be.js.map