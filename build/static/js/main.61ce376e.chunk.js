(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{42:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(15),r=a.n(n),i=a(8),j=a(23),l=a(33),o=a(47),d=a(26),u=a(25),b=a(43),O=a(31),x=a(35),h=a(1),p=function(e){var t=e.cartCount;return Object(h.jsx)("div",{children:Object(h.jsx)(u.a,{bg:"dark",variant:"dark",expand:"lg",fixed:"top",gap:5,children:Object(h.jsxs)(b.a,{fluid:!0,children:[Object(h.jsx)(u.a.Brand,{href:"#",children:"E-SHOP"}),Object(h.jsx)(u.a.Toggle,{"aria-controls":"navbarScroll"}),Object(h.jsxs)(u.a.Collapse,{id:"navbarScroll",children:[Object(h.jsx)(d.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"80px"},navbarScroll:!0,children:Object(h.jsx)(d.a.Link,{children:"About Us"})}),Object(h.jsxs)(o.a,{className:"d-flex",children:[Object(h.jsx)(l.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(h.jsx)(j.a,{variant:"outline-success text-white",children:"Search"})]}),Object(h.jsx)(d.a.Link,{children:"My Account"})]}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(O.a,{icon:x.b,className:"text-white",size:"lg"}),Object(h.jsx)("span",{className:"text-white badge bg-danger",children:t})]})]})})})},m=a(40),f=a.n(m),g=a(45),v=a(7),C=a(20),N=(a(61),a(46)),S=function(e){var t,a=e.title,s=e.image,n=e.price,r=e.updateCartCount,l=e.rewindCarCount,o=e.desc,d=Object(c.useState)("Add to Cart"),u=Object(i.a)(d,2),b=u[0],p=u[1];return n=10*Math.ceil(n),Object(h.jsxs)("div",{className:"c",children:[Object(h.jsx)("div",{className:"des",children:o}),Object(h.jsxs)(C.a,(t={className:"text-center"},Object(v.a)(t,"className","cStyle"),Object(v.a)(t,"children",[Object(h.jsx)(C.a.Img,{variant:"top",src:s,className:"cImg"}),Object(h.jsxs)(C.a.Body,{className:"txt",children:[Object(h.jsx)(C.a.Text,{className:"ti",children:a}),Object(h.jsxs)(C.a.Text,{className:"pri",children:[n,"/="]})]}),Object(h.jsxs)(N.a,{className:"",children:[Object(h.jsx)(j.a,{className:"bton",onClick:function(){r(),p("Add to Cart"!==b?b+1:parseInt(1))},variant:"success",size:"sm",children:b}),Object(h.jsx)(j.a,{onClick:function(){l(b),p("Add to Cart")},variant:"info",children:Object(h.jsx)(O.a,{icon:x.a,className:"text-white",size:"lg"})})]})]),t))]})},k=(a(42),function(e){for(var t=e.postsPerPage,a=e.totalPosts,c=e.paginate,s=[],n=1;n<=Math.ceil(a/t);n++)s.push(n);return Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{className:"pagination",children:s.map((function(e){return Object(h.jsx)("li",{className:"page-item pagiButton",children:Object(h.jsx)("a",{onClick:function(){return c(e)},href:"!#",className:"page-link",children:e})},e)}))})})});function w(e){var t=Object(c.useState)([]),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(),j=Object(i.a)(r,2),l=(j[0],j[1]),o=Object(c.useState)(1),d=Object(i.a)(o,2),u=d[0],b=d[1],O=Object(c.useState)(8),x=Object(i.a)(O,1)[0];Object(c.useEffect)((function(){p()}),[]);var p=function(){var e=Object(g.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a),l(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=u*x,v=m-x,C=s.slice(v,m);return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"produ",children:C.map((function(t){return Object(h.jsx)(S,{title:t.title,image:t.image,price:t.price,desc:t.description,updateCartCount:e.updateCartCount,rewindCarCount:e.rewindCarCount},t.title)}))}),Object(h.jsx)("div",{className:"pagi",children:Object(h.jsx)(k,{paginate:function(e){return b(e)},postsPerPage:x,totalPosts:s.length})})]})}var y=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{cartCount:a}),Object(h.jsx)(w,{className:"",updateCartCount:function(){s(a+1),console.log(a)},rewindCarCount:function(e){0!==a&&s(a-e)}})]})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.61ce376e.chunk.js.map