(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"5Z8U":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),l=n("NC8T");var r={},i={_frontmatter:r},o=l.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(o,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use the UnderlineNav component to style navigation with a minimal underlined selected state, typically used for navigation placed at the top of the page."),Object(a.b)("p",null,"To use UnderlineNav with ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/ReactTraining/react-router"}),"react-router")," or\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/react-router-dom"}),"react-router-dom"),", pass\n",Object(a.b)("inlineCode",{parentName:"p"},"as={NavLink}")," and omit the ",Object(a.b)("inlineCode",{parentName:"p"},"selected")," prop.\nThis ensures that the NavLink gets ",Object(a.b)("inlineCode",{parentName:"p"},"activeClassName='selected'")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Attention:")," Make sure to properly label your ",Object(a.b)("inlineCode",{parentName:"p"},"UnderlineNav")," with an ",Object(a.b)("inlineCode",{parentName:"p"},"aria-label")," to provide context about the type of navigation contained in ",Object(a.b)("inlineCode",{parentName:"p"},"UnderlineNav"),"."),Object(a.b)("h2",null,"Default example"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<UnderlineNav aria-label="Main">\n  <UnderlineNav.Link href="#home" selected>\n    Home\n  </UnderlineNav.Link>\n  <UnderlineNav.Link href="#documentation">Documentation</UnderlineNav.Link>\n  <UnderlineNav.Link href="#support">Support</UnderlineNav.Link>\n</UnderlineNav>\n')),Object(a.b)("h2",null,"System props"),Object(a.b)("p",null,"UnderlineNav and UnderlineNav.Link components get ",Object(a.b)("inlineCode",{parentName:"p"},"COMMON")," system props. Read our ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/testing4/system-props"}),"System Props")," doc page for a full list of available props."),Object(a.b)("h2",null,"Component props"),Object(a.b)("h3",null,"UnderlineNav"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Prop name"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"actions"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Node"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Place another element, such as a button, to the opposite side of the navigation items.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"align"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Use ",Object(a.b)("inlineCode",{parentName:"td"},"right")," to have navigation items aligned right.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"full"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Used to make navigation fill the width of the container.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"aria-label"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Used to set the ",Object(a.b)("inlineCode",{parentName:"td"},"aria-label")," on the top level ",Object(a.b)("inlineCode",{parentName:"td"},"<nav>")," element.")))),Object(a.b)("h3",null,"UnderlineNav.Link"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Prop name"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"as"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"sets the HTML tag for the component")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"href"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"URL to be used for the Link")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"selected"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Used to style the link as selected or unselected")))))}c.isMDXComponent=!0},NC8T:function(e,t,n){"use strict";var a=n("UutA"),l=n("oXiK"),r=n("aOgs"),i=n("q1tI"),o=n.n(i),c=n("8gyx"),b=n("VhsB"),s=n("nkI/"),p=n("bWhc"),m=n("og4h"),d=n("sqpL"),g=Object(a.f)(l.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function O(e){var t=e.items,n=e.depth;return o.a.createElement(g,{as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(l.Box,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(l.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(O,{items:e.items,depth:n+1}):null)})))}O.defaultProps={depth:0};var u=O,j=Object(a.f)(l.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),f=Object(a.f)(l.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),N=Object(a.f)(l.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),h=Object(a.f)(l.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(a.f)(l.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,i=a.title,g=a.description,O=a.status,v=a.source,k=a.additionalContributors,x=void 0===k?[]:k;return o.a.createElement(l.Flex,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(c.a,{title:i,description:g}),o.a.createElement(b.b,null),o.a.createElement(j,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.Box,{display:["none",null,null,"block"]},o.a.createElement(p.a,null)),o.a.createElement(f,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(N,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(l.Heading,null,i)),n.tableOfContents.items?o.a.createElement(h,{display:["none",null,"block"],position:"sticky",top:b.a+24,maxHeight:"calc(100vh - "+b.a+"px - 24px)"},o.a.createElement(l.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(u,{items:n.tableOfContents.items})):null,o.a.createElement(y,null,O||v?o.a.createElement(l.Flex,{mb:3,alignItems:"center"},O?o.a.createElement(d.a,{status:O}):null,o.a.createElement(l.Box,{mx:"auto"}),v?o.a.createElement(m.a,{href:v}):null):null,n.tableOfContents.items?o.a.createElement(l.Box,{display:["block",null,"none"],mb:3},o.a.createElement(l.Details,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.Text,{as:"summary",fontWeight:"bold"},o.a.createElement(l.StyledOcticon,{icon:t?r.b:r.c,mr:2}),"Table of contents"),o.a.createElement(l.Box,{pt:1},o.a.createElement(u,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(x.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-underline-nav-md-4af758772fc602142d24.js.map