(this["webpackJsonpuser-list"]=this["webpackJsonpuser-list"]||[]).push([[0],{20:function(e,t,r){},22:function(e,t,r){},23:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){},26:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),c=r(2),a=r.n(c),i=r(3),u=r(10),o="CHANGE_SEARCH_TEXT",l={searchText:""},h=r(7),j=r(8),d=r(11),b=r(9),f=(r(20),r(1)),p=function(e){return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("img",{src:e.user.picture.large,alt:"user"}),Object(f.jsxs)("h3",{children:[e.user.name.first," ",e.user.name.last]}),Object(f.jsxs)("address",{children:[e.user.location.city," ",Object(f.jsx)("strong",{children:e.user.location.country})]}),Object(f.jsx)("span",{children:e.user.email})]})},x=(r(22),function(e){return Object(f.jsx)("div",{className:"card-list",children:e.userList.map((function(e){return Object(f.jsx)(p,{user:e},e.login.uuid)}))})}),O=(r(23),function(e){var t=e.placeholder,r=e.changeSearchText;return Object(f.jsx)("div",{className:"search-content",children:Object(f.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:r})})}),m=(r(24),function(e){Object(d.a)(r,e);var t=Object(b.a)(r);function r(){var e;return Object(h.a)(this,r),(e=t.call(this)).state={users:[]},e}return Object(j.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=15").then((function(e){return e.json()})).then((function(t){return e.setState({users:t.results})}))}},{key:"render",value:function(){var e=this.state.users,t=this.props,r=t.searchText,n=t.changeSearchText,s=e.filter((function(e){return e.name.first.toLowerCase().includes(r.toLowerCase())||e.name.last.toLowerCase().includes(r.toLowerCase())}));return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(O,{placeholder:"Search User",changeSearchText:n}),Object(f.jsx)(x,{userList:s})]})}}]),r}(n.Component)),v=Object(i.b)((function(e){return{searchText:e.searchText}}),(function(e){return{changeSearchText:function(t){return e((r=t.target.value,{type:o,payload:r}));var r}}}))(m),g=(r(25),Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case o:return Object.assign({},e,{searchText:t.payload});default:return e}})));a.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(i.a,{store:g,children:Object(f.jsx)(v,{})})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.b83867ea.chunk.js.map