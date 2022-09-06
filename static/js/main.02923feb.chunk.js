(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{100:function(e,t,n){},22:function(e,t,n){},235:function(e,t,n){var c={"./post0.md":[241,3],"./post1.md":[242,4],"./post2.md":[243,5],"./post3.md":[244,6],"./post4.md":[245,7],"./post5.md":[246,8],"./post6.md":[247,9],"./post7.md":[248,10]};function s(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],s=t[0];return n.e(t[1]).then((function(){return n(s)}))}s.keys=function(){return Object.keys(c)},s.id=235,e.exports=s},236:function(e){e.exports=JSON.parse('{"count":8}')},240:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),a=n(87),r=n.n(a),o=(n(100),n(21)),l=n(2),j=n(16),h=n(17),d=n(20),u=n(19),b=(n(22),n(88)),p=n(34);function m(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:e.text})},e.text)}function O(e){var t,n=[],c=Object(p.a)(e);try{for(c.s();!(t=c.n()).done;){var s=t.value;n.push(m(s))}}catch(i){c.e(i)}finally{c.f()}return n}var x=function(e){return Object(c.jsxs)("div",{className:"list",children:[Object(c.jsx)("h4",{children:e.items.title}),Object(c.jsx)("ul",{children:O(e.items.items)})]})};function f(e){var t,n=[],s=Object(p.a)(e);try{for(s.s();!(t=s.n()).done;){var i=t.value;n.push(Object(c.jsx)(x,{items:i},i.title))}}catch(a){s.e(a)}finally{s.f()}return n}var v=function(e){return Object(c.jsx)("div",{className:"lists",children:f(e.lists)})};function k(){return Object(c.jsx)("div",{className:"bio",children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Designed and developed the ",Object(c.jsx)("a",{href:"https://kdl-umass.github.io/CausalGPSLC.jl",children:"CausalGPSLC.jl"})," Julia package with colleagues for causal effect estimation using Gaussian processes in the presence of structured latent confounders."]}),Object(c.jsxs)("li",{children:["Applied causal effect estimation and conducted explainable AI research in the ",Object(c.jsx)("a",{href:"https://kdl.cs.umass.edu/",children:"Knowledge Discovery Lab"})," at CICS, UMass."]}),Object(c.jsxs)("li",{children:["Studied computer science, machine learning, and data science at ",Object(c.jsx)("a",{href:"https://cs.umass.edu/",children:"UMass Amherst"}),"."]}),Object(c.jsxs)("li",{children:["Worked at ",Object(c.jsx)("a",{href:"https://www.mathworks.com",children:"MathWorks"})," on Docker-based cloud services and MATLAB source code."]}),Object(c.jsxs)("li",{children:["Conducted neural network research with the ",Object(c.jsx)("a",{href:"https://binds.cs.umass.edu/",children:"BINDS Lab"}),"."]}),Object(c.jsx)("li",{children:"Hobbies include ceramic art, surfing, rock climbing, and instrumental music."}),Object(c.jsxs)("li",{children:["Also, check out the ",Object(c.jsx)("a",{href:"https://BoleteFilter.github.io",children:"Bolete Filter"})," that Jack and ",Object(c.jsx)("a",{href:"https://github.com/lbialik",children:"Liza Bialik"})," have been working on!"]})]})})}var g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App content",children:[Object(c.jsx)("div",{className:"left headshot-container",children:Object(c.jsx)("img",{src:"./images/profile.jpg",className:"headshot",alt:"Headshot of Jack Kenney"})}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("h1",{className:"title",children:"Jack Kenney"}),Object(c.jsx)("span",{className:"tagline",children:"Scientist. Developer. Artist."}),Object(c.jsx)(v,{lists:b})]}),Object(c.jsx)(k,{})]})]})}}]),n}(i.a.Component),y=n(93),N=n(94),w=n(89),C=n.n(w),A=n(90),S=n.n(A),J=n(92);var L=function(e){var t=Object(s.useState)(""),i=Object(N.a)(t,2),a=i[0],r=i[1];return n(235)("./post".concat(e,".md")).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),Object(c.jsxs)("div",{className:"post",children:[Object(c.jsx)(C.a,{remarkPlugins:[S.a,J.a],children:a}),Object(c.jsx)("div",{style:{borderBottomWidth:1,color:"black",flex:1}})]},e)},P=n(236),B=Object(y.a)(Array(P.count).keys()).reverse();var D=function(){return Object(c.jsx)("div",{className:"blog",children:B.map((function(e){return L(e)}))})},I=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"content blog",children:Object(c.jsx)(D,{})})}}]),n}(i.a.Component);function M(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Papers"}),Object(c.jsxs)("ul",{class:"papers-list",children:[Object(c.jsxs)("li",{children:["Kenney, J., Valcore, J., Riggs, S., & Rietman, E. (2019). Deep Learning Regression of VLSI Plasma Etch Metrology. arXiv preprint arXiv:1910.10067. [",Object(c.jsx)("a",{href:"https://arxiv.org/pdf/1910.10067",children:"pdf"}),"]"]}),Object(c.jsx)("br",{}),Object(c.jsxs)("li",{children:["Kenney, J. (2019) Undergraduate Honors Thesis. CHC & CICS, UMass Amherst. [",Object(c.jsx)("a",{href:"./docs/thesis.pdf",children:"pdf"}),"]"]})]})]})}var E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"content papers blog",children:Object(c.jsx)(M,{})})}}]),n}(i.a.Component);var H=Object(l.f)((function(e){return Object(c.jsx)("nav",{className:"",children:Object(c.jsxs)("ul",{className:"list",children:[Object(c.jsx)("li",{className:"nav-item  ".concat("/"===e.location.pathname?"active":""),children:Object(c.jsx)(o.b,{className:"a",to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"nav-item  ".concat("/papers"===e.location.pathname?"active":""),children:Object(c.jsx)(o.b,{className:"a",to:"/papers",children:"Papers"})}),Object(c.jsx)("li",{className:"nav-item  ".concat("/linux"===e.location.pathname?"active":""),children:Object(c.jsx)(o.b,{className:"a",to:"/linux",children:"Linux"})})]})})}));var U=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(H,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/",exact:!0,component:function(){return Object(c.jsx)(g,{})}}),Object(c.jsx)(l.a,{path:"/papers",exact:!0,component:function(){return Object(c.jsx)(E,{})}}),Object(c.jsx)(l.a,{path:"/linux",exact:!0,component:function(){return Object(c.jsx)(I,{})}})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(c.jsx)(U,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e){e.exports=JSON.parse('[{"title":"Professional","items":[{"text":"GitHub","link":"https://github.com/jackkenney"},{"text":"Scholar","link":"https://scholar.google.com/citations?user=jtRl-ZIAAAAJ"},{"text":"LinkedIn","link":"https://linkedin.com/in/jackkenney"}]},{"title":"Social","items":[{"text":"Email","link":"mailto:jack@kenney.dev"},{"text":"Twitter","link":"https://twitter.com/jacknkenney"},{"text":"Ceramics","link":"https://www.instagram.com/livingdoingbeing/"},{"text":"Photography","link":"https://vsco.co/livingdoingbeing/"}]}]')}},[[240,1,2]]]);
//# sourceMappingURL=main.02923feb.chunk.js.map