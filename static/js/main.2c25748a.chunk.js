(this["webpackJsonpgoogle-clone"]=this["webpackJsonpgoogle-clone"]||[]).push([[0],{50:function(e,a,t){e.exports=t(67)},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(19),r=t.n(l),o=(t(55),t(56),t(57),t(5)),s=t(40),m=t.n(s),i=t(81),u=t(35),g=t(18),h=(t(58),t(25)),d=t.n(h),E=t(39),_=t.n(E),v=t(80),p=t(3),b=Object(n.createContext)(),f=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(b.Provider,{value:Object(n.useReducer)(a,t)},l)},N=function(){return Object(n.useContext)(b)},P=t(30),w="SET_SEARCH_TERM",S=function(e,a){switch(console.log(a),a.type){case w:return Object(P.a)(Object(P.a)({},e),{},{term:a.term});default:return e}};var j=function(e){var a=e.hideButtons,t=void 0!==a&&a,l=N(),r=Object(g.a)(l,2);Object(u.a)(r[0]);var o=r[1],s=Object(n.useState)(""),m=Object(g.a)(s,2),i=m[0],h=m[1],E=Object(p.f)(),b=function(e){e.preventDefault(),console.log("you hit the search button >> ",i),o({type:w,term:i}),E.push("/search")};return c.a.createElement("form",{className:"search"},c.a.createElement("div",{className:"search__input"},c.a.createElement(d.a,{className:"search__inputIcon"}),c.a.createElement("input",{value:i,onChange:function(e){return h(e.target.value)}}),c.a.createElement(_.a,null)),t?c.a.createElement("div",{className:"search__buttons"},c.a.createElement(v.a,{className:"search__buttonsHidden",type:"submit",onClick:b,variant:"outlined"},"Google Search"),c.a.createElement(v.a,{className:"search__buttonsHidden",variant:"outlined"},"I'm Feeling Lucky")):c.a.createElement("div",{className:"search__buttons"},c.a.createElement(v.a,{type:"submit",onClick:b,variant:"outlined"},"Google Search"),c.a.createElement(v.a,{variant:"outlined"},"I'm Feeling Lucky")))};var y=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__header"},c.a.createElement("div",{className:"home__headerLeft"},c.a.createElement(o.b,{to:"/about"},"About"),c.a.createElement(o.b,{to:"/store"},"Store")),c.a.createElement("div",{className:"home__headerRight"},c.a.createElement(o.b,{to:"/gmail"},"Gmail"),c.a.createElement(o.b,{to:"/images"},"Images"),c.a.createElement(m.a,null),c.a.createElement(i.a,null))),c.a.createElement("div",{className:"home__body"},c.a.createElement("img",{src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:""})),c.a.createElement("div",{className:"home__inputContainer"},c.a.createElement(j,null)))},O=(t(65),t(29)),k=t.n(O),I=t(41),x=function(e){var a=Object(n.useState)(null),t=Object(g.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(I.a)(k.a.mark((function a(){return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyBn0bS6HHPSvGkl-yhY5hqVYE-0SH08n7E","&cx=").concat("c52e9e221726b4525","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){l(e)}));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),{data:c}},C=t(42),B=t.n(C),H=t(43),R=t.n(H),T=t(44),A=t.n(T),L=t(45),G=t.n(L),M=t(46),q=t.n(M);var F=function(){var e=N(),a=Object(g.a)(e,2),t=a[0].term,n=(a[1],x(t).data);return console.log(n),c.a.createElement("div",{className:"searchPage"},c.a.createElement("div",{className:"searchPage__header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"searchPage__logo",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:""})),c.a.createElement("div",{className:"searchPage__headerBody"},c.a.createElement(j,{hideButtons:!0}),c.a.createElement("div",{className:"searchPage__options"},c.a.createElement("div",{className:"searchPage__optionsLeft"},c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(d.a,null),c.a.createElement(o.b,{to:"/all"},"All")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(B.a,null),c.a.createElement(o.b,{to:"/news"},"News")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(R.a,null),c.a.createElement(o.b,{to:"/images"},"Images")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(A.a,null),c.a.createElement(o.b,{to:"/shopping"},"Shopping")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(G.a,null),c.a.createElement(o.b,{to:"/maps"},"Maps")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(q.a,null),c.a.createElement(o.b,{to:"/more"},"More"))),c.a.createElement("div",{className:"searchPage__optionsRight"},c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(o.b,{to:"/settings"},"Settings")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(o.b,{to:"/tools"},"Tools")))))),t&&c.a.createElement("div",{className:"searchPage__results"},c.a.createElement("p",{className:"searchPage__resultCount"},"About ",null===n||void 0===n?void 0:n.searchInformation.formattedTotalResults," results (",null===n||void 0===n?void 0:n.searchInformation.formattedSearchTime," seconds) for ",t),null===n||void 0===n?void 0:n.items.map((function(e){var a,t,n,l,r;return c.a.createElement("div",{className:"searchPage__result"},c.a.createElement("a",{href:e.link},(null===(a=e.pagemap)||void 0===a||null===(t=a.cse_image)||void 0===t?void 0:t.length)>0&&(null===(n=e.pagemap)||void 0===n||null===(l=n.cse_image[0])||void 0===l?void 0:l.src)&&c.a.createElement("img",{className:"searchPage__resultImage",src:null===(r=e.pagemap)||void 0===r?void 0:r.cse_image[0].src,alt:""}),e.displayLink),c.a.createElement("a",{className:"searchPage__resultTitle",href:e.link},c.a.createElement("h2",null,e.title)),c.a.createElement("p",{className:"searchPage__resultSnippet"},e.snippet))}))))};var J=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(o.a,null,c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/search"},c.a.createElement(F,null)),c.a.createElement(p.a,{path:"/"},c.a.createElement(y,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,{initialState:{term:null},reducer:S},c.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.2c25748a.chunk.js.map