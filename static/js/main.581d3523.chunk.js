(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t(51)},29:function(e,a,t){},30:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(20),l=t.n(r),s=(t(29),t(9)),o=t(7),i=(t(30),t(8)),u=t(15),m=t.n(u);m.a.initializeApp({apiKey:"AIzaSyAaBDnvVd3AaHkoxVxu_Is0K9kC4M2-uMA",authDomain:"reto-intercorp-9a9ca.firebaseapp.com",databaseURL:"https://reto-intercorp-9a9ca.firebaseio.com",projectId:"reto-intercorp-9a9ca",storageBucket:"",messagingSenderId:"72946523998",appId:"1:72946523998:web:8011eab71019e19e"});var p=m.a,E=p.firestore(),d=(t(44),function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),o=s[0],u=s[1],m=Object(n.useState)(0),E=Object(i.a)(m,2),d=E[0],f=E[1],b=Object(n.useState)(""),_=Object(i.a)(b,2),h=_[0],v=_[1];return c.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),function(e,a,t,n){p.firestore().collection("usuarios").add({nombre:e,apellido:a,nacimiento:t,edad:n,id:t+e})}(t,o,h,d)},className:"crear-cliente"},c.a.createElement("p",{className:"crear-cliente__p"},"Ingrese nuevo usuario:"),c.a.createElement("input",{type:"text",placeholder:"Nombre",onChange:function(e){return r(e.currentTarget.value)},className:"crear-cliente__input"}),c.a.createElement("input",{type:"text",placeholder:"Apellidos",onChange:function(e){return u(e.currentTarget.value)},className:"crear-cliente__input"}),c.a.createElement("input",{type:"number",placeholder:"Edad",onChange:function(e){return f(e.currentTarget.value)},className:"crear-cliente__input"}),c.a.createElement("input",{type:"date",placeholder:"Fecha de nacimiento",onChange:function(e){return v(e.currentTarget.value)},className:"crear-cliente__input"}),c.a.createElement("input",{type:"submit",className:"crear-cliente__submit"}))}),f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null))},b=(t(45),function(){var e=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)(function(){E.collection("usuarios").get().then(function(e){var a=[];e.forEach(function(e){return a.push(e.data())}),c(a)})},[]),t}();return c.a.createElement("div",{className:"container lista-clientes"},c.a.createElement("div",{className:"row lista-clientes__cabecera"},c.a.createElement("span",{className:"lista-clientes__cabecera--text col-2"},"NOMBRE"),c.a.createElement("span",{className:"lista-clientes__cabecera--text col-3"},"APELLIDO"),c.a.createElement("span",{className:"lista-clientes__cabecera--text col-2"},"EDAD"),c.a.createElement("span",{className:"lista-clientes__cabecera--text col-3"},"FECHA DE NACIMIENTO")),e.map(function(a){return c.a.createElement("div",{className:"row lista-clientes__user",key:e.id},c.a.createElement("span",{className:"lista-clientes__cabecera--text col-2"},a.nombre),c.a.createElement("span",{className:"lista-clientes__cabecera--text col-3"},a.apellido),c.a.createElement("span",{className:"lista-clientes__cabecera--text col-2"},a.edad),c.a.createElement("span",{className:"lista-clientes__cabecera--text col-2"},a.nacimiento))}))}),_=function(){return c.a.createElement(b,null)},h=function(){var e=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)(function(){E.collection("usuarios").get().then(function(e){var a=[];e.forEach(function(e){a.push(parseInt(e.data().edad))}),c(a)})},[]),t}();console.log(e);return c.a.createElement("div",null,c.a.createElement("p",null,"El promedio de las edades es: ",c.a.createElement("span",null)))},v=(t(46),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"INTERCORP RETAIL"),c.a.createElement("nav",{className:"header__nav"},c.a.createElement(s.b,{to:"/"},c.a.createElement("p",{className:"header__nav--p"},"Ingresar usuario")),c.a.createElement(s.b,{to:"/usuarios/"},c.a.createElement("p",{className:"header__nav--p"},"Usuarios Registrados")),c.a.createElement(s.b,{to:"/calculos/"},c.a.createElement("p",{className:"header__nav--p"},"C\xe1lculos Usuarios"))))}),N=function(){return c.a.createElement(s.a,{basename:"/reto-intercorp"},c.a.createElement(v,null),c.a.createElement(o.a,{path:"/",exact:!0,component:f}),c.a.createElement(o.a,{path:"/usuarios/",exact:!0,component:_}),c.a.createElement(o.a,{path:"/calculos/",exact:!0,component:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.581d3523.chunk.js.map