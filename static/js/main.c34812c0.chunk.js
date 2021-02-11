(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(21),r=a.n(n),i=(a(27),a(7)),l=a(5),d=a(6),o=(a(28),a(0)),j=function(){return Object(o.jsx)("header",{className:"w-full flex-none",children:Object(o.jsxs)("div",{className:"lg:text-center py-8 bg-indigo-900",children:[Object(o.jsx)("h1",{className:"text-4xl text-white font-bold tracking-wide",children:"Employee Directory"}),Object(o.jsx)("p",{className:"mt-2 text-base text-gray-300",children:"Search for any employee, or use the column headers to sort by category."})]})})},m=a(11),b=a.n(m),h={getUser:function(){return b.a.get("https://randomuser.me/api/")},getUsers:function(e){return b.a.get("https://randomuser.me/api/?nat=us,gb,au&results=".concat(e))}},u="px-10 py-2 whitespace-nowrap border border-gray-300",x="items-center",O="h-10 w-10",g="h-10 w-10 rounded-sm",f="ml-4",p="text-sm font-base text-gray-900",N=function(e){var t=new Date(e.registered).toDateString();return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:u,children:Object(o.jsx)("div",{className:x,children:Object(o.jsx)("div",{className:O,children:Object(o.jsx)("img",{className:g,src:e.thumbnail,alt:e.name.first+" "+e.name.last})})})}),Object(o.jsx)("td",{className:u,children:Object(o.jsxs)("div",{className:f,children:[Object(o.jsx)("div",{className:p,children:e.name.first+" "+e.name.last}),Object(o.jsx)("div",{className:p,children:e.username})]})}),Object(o.jsx)("td",{className:u,children:Object(o.jsx)("div",{className:p,children:e.email})}),Object(o.jsx)("td",{className:u,children:Object(o.jsx)("div",{className:p,children:e.phone})}),Object(o.jsx)("td",{className:u,children:Object(o.jsx)("div",{className:p,children:e.age})}),Object(o.jsx)("td",{className:u,children:Object(o.jsx)("div",{className:p,children:t})})]})},v=function(e){return Object(o.jsx)("div",{className:"search",children:Object(o.jsx)("form",{className:"mt-1 justify-center",children:Object(o.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:e.name,type:"text",className:"rounded-lg p-1 w-auto border text-sm text-gray-800 border-gray-200 bg-white",placeholder:"Search"})})})},y=a(22),w=function(e){return Object(o.jsxs)("div",{children:[e.children,Object(o.jsx)(y.a,{icon:e.icon,className:"mx-2 cursor-pointer","data-direction":e.direction,"data-column":e.column,onClick:e.onClick})]})},C="p-5 text-left",S=function(e){var t;return Object(o.jsx)("div",{className:"table w-auto flex-none m-10 rounded-sm border-2 border-light-blue-500 border-opacity-25",children:Object(o.jsxs)("table",{className:"table-auto",children:[Object(o.jsx)("thead",{className:"bg-gray-200",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:C,children:"Image"}),Object(o.jsxs)("th",{className:C,children:[Object(o.jsx)(w,{column:"name",icon:e.icon,onClick:e.onClick,children:"Name"}),Object(o.jsx)(v,{handleInputChange:e.handleInputChange,search:e.name,name:"name"})]}),Object(o.jsx)("th",{className:C,children:"Email"}),Object(o.jsx)("th",{className:C,children:"Phone"}),Object(o.jsx)("th",{className:C,children:"Age"}),Object(o.jsx)("th",{className:C,children:"Date Registered"})]})}),Object(o.jsx)("tbody",{children:(t=e.users,t.map((function(e,t){return Object(o.jsx)(N,{thumbnail:e.picture.thumbnail,name:e.name,username:e.login.username,email:e.email,phone:e.phone,location:e.location,age:e.dob.age,registered:e.registered.date},t)})))})]})})},k=a(4),I=a(8);k.b.add(I.a,I.b);var D=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),r=Object(d.a)(n,2),m=r[0],b=r[1],u=Object(c.useState)({name:""}),x=Object(d.a)(u,2),O=x[0],g=x[1],f=Object(c.useState)({sort:"desc"}),p=Object(d.a)(f,2),N=p[0],v=p[1];return Object(c.useEffect)((function(){h.getUsers(12).then((function(e){s(e.data.results),b(e.data.results)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsx)("div",{className:"App flex-auto mx-auto",children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(j,{}),Object(o.jsx)(S,Object(l.a)(Object(l.a)({icon:I.a,users:m,handleInputChange:function(e){var t=a.filter((function(t){return t.name.first.startsWith(e.target.value)}));b(t),g(Object(l.a)(Object(l.a)({},O),{},Object(i.a)({},e.target.name,e.target.value)))}},O),{},{onClick:function(e){var t=Object(l.a)({},N);"desc"===t.sort?(a.sort((function(e,t){return e.name.first>t.name.first?1:-1})),v({sort:"asc"})):"asc"===t.sort&&(a.sort((function(e,t){return e.name.first<t.name.first?1:-1})),v({sort:"desc"}))}}))]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root")),E()}},[[51,1,2]]]);
//# sourceMappingURL=main.c34812c0.chunk.js.map