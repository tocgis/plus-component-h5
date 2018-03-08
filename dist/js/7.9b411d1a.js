webpackJsonp([7],{"2yvd":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("zrnl"),s={name:"findNearby",components:{findItem:n["a"]},data:function(){return{dataList:[],userIDs:[],formatData:[]}},computed:{location:function(){return this.$store.state.LOCATION},latitude:function(){return this.$route.query.lat||this.location.lat||0},longitude:function(){return this.$route.query.lng||this.location.lng||0}},watch:{location:function(){this.getUsers()},userIDs:function(){this.formatDataList()}},methods:{formatDataList:function(){var t=this;this.formatData=this.userIDs.map(function(e){var i=t.$store.getters.getUserById(e);return i.id||t.$http.get("/users/".concat(e)).then(function(e){var i=e.data,n=void 0===i?{}:i;t.$store.commit("SAVE_USER",n)}).catch(function(t){console.log(t);var i=t.response;i=void 0===i?{}:i;var n=i.status;404===n&&console.error("该用户不存在, 或已删除 #ID:"+e)}),i})},getUsers:function(){var t=this;this.$http.get("around-amap",{params:{limit:10,offset:this.formatData.length,latitude:this.latitude,longitude:this.longitude}}).then(function(e){var i=e.data,n=void 0===i?[]:i;t.userIDs=n.map(function(t){return t.user_id})})}},created:function(){this.getUsers()}},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.formatData,function(e){return e.id?i("find-item",{key:"find-nearby-"+e.id,attrs:{user:e}}):t._e()}))},o=[],r=i("XyMi");function u(t){i("q2sy")}var l=!1,c=u,d=null,f=null,v=Object(r["a"])(s,a,o,l,c,d,f);e["default"]=v.exports},"4IXD":function(t,e){},"9+4P":function(t,e){},aP1B:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("zrnl"),s={name:"findContent",components:{findItem:n["a"]},data:function(){return{user_list:[],loading:!0}},computed:{type:function(){return this.$route.meta.type},noData:function(){return 0===this.user_list.length&&!this.loading}},beforeRouteEnter:function(t,e,i){i(function(i){t.meta.type!==e.meta.type&&i.getUsers()})},methods:{getUsers:function(){var t=this;this.loading=!0,this.$store.dispatch("GET_USER_DATA",{type:this.type,limt:15}).then(function(e){var i=e.data;t.loading=!1,i&&i.length>0&&(t.user_list=i)}).catch(function(t){console.log(t)})}}},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"full"},[i("full-spin")],1),t.noData?[t._v("\n        no data\n    ")]:t._e(),t._l(t.user_list,function(e){return e.id?i("find-item",{key:"find-usr-"+e.id,attrs:{user:e}}):t._e()})],2)},o=[],r=i("XyMi");function u(t){i("pmaC")}var l=!1,c=u,d=null,f=null,v=Object(r["a"])(s,a,o,l,c,d,f);e["default"]=v.exports},"lA/f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("BW2B"),s={name:"findIndex",components:{HeadTop:n["a"]},data:function(){return{}},computed:{location:function(){var t=this.$store.state.LOCATION||{};return"{}"===JSON.stringify(t)&&this.$store.dispatch("GET_LOCATION"),t},cur_txt:function(){var t=this.location.label,e=void 0===t?"":t;return(e.length>5?"".concat(e.slice(0,2),"…").concat(e.slice(-2)):e)||"选择城市"}},methods:{goBack:function(){this.to("/discover")},to:function(t){t&&this.$router.push(t)}}},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-find"},[i("head-top",{attrs:{"go-back":t.goBack,title:"true",append:!0}},[i("div",{staticClass:"find-top-append ellipsis",attrs:{slot:"append"},on:{click:function(e){t.to("/location")}},slot:"append"},[i("v-icon",{attrs:{type:"find-location"}}),t._v(t._s(t.cur_txt)+"\n        ")],1),i("div",{staticClass:"head-search",attrs:{slot:"title"},on:{click:function(e){t.to("/search_user")}},slot:"title"},[i("v-icon",{attrs:{type:"base-search"}}),t._v(" 搜索\n        ")],1)]),i("div",{staticClass:"find-nav"},[i("router-link",{staticClass:"find-nav-item",attrs:{tag:"div",to:"/find/pop"}},[t._v("热门")]),i("router-link",{staticClass:"find-nav-item",attrs:{tag:"div",to:"/find/new"}},[t._v("最新")]),i("router-link",{staticClass:"find-nav-item",attrs:{tag:"div",to:"/find/rec"}},[t._v("推荐")]),i("router-link",{staticClass:"find-nav-item",attrs:{tag:"div",to:"/find/nearby"}},[t._v("附近")])],1),i("div",{staticClass:"find-content"},[i("keep-alive",[t.$route.meta.keepAlive?i("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():i("router-view")],1)],1)},o=[],r=i("XyMi");function u(t){i("4IXD")}var l=!1,c=u,d=null,f=null,v=Object(r["a"])(s,a,o,l,c,d,f);e["default"]=v.exports},pmaC:function(t,e){},q2sy:function(t,e){},zrnl:function(t,e,i){"use strict";var n={name:"findItem",props:["user"],data:function(){return{loading:!1}},computed:{isFollow:function(){var t=this.user,e=t.follower,i=void 0!==e&&e,n=t.following,s=void 0!==n&&n;return i&&s?"eachFollow":i?"follow":"unFollow"}},methods:{toUserHome:function(){this.$router.push("/user/".concat(this.user.id))},followUser:function(){var t=this;if(this.loading)return!1;this.loading=!0,this.$store.dispatch("FOLLOW_USER",{id:this.user.id,status:this.isFollow}).then(function(e){var i=e.follower;t.loading=!1,t.user.follower=i}).catch(function(e){var i=e.response;i=void 0===i?{}:i;var n=i.data,s=void 0===n?{message:"操作失败"}:n;t.loading=!1,t.$Message.error(s)})}}},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"find-item",attrs:{id:"find-usr-"+t.user.id},on:{click:t.toUserHome}},[i("v-avatar",{staticClass:"find-item-avatar",attrs:{sex:"user.sex",src:t.user.avatar}},[t._v("\n        "+t._s(t.user.name.slice(0,1))+"\n    ")]),i("div",{staticClass:"find-item-info"},[i("p",{staticClass:"find-item-name ellipsis"},[t._v(t._s(t.user.name))]),i("p",{staticClass:"find-item-bio ellipsis"},[t._v(t._s(t.user.bio))])]),[i("v-icon",{staticClass:"find-item-follow-icon",attrs:{type:"base-"+t.isFollow},nativeOn:{click:function(e){e.stopPropagation(),t.followUser(e)}}})]],2)},a=[],o=i("XyMi");function r(t){i("9+4P")}var u=!1,l=r,c=null,d=null,f=Object(o["a"])(n,s,a,u,l,c,d);e["a"]=f.exports}});
//# sourceMappingURL=7.9b411d1a.js.map