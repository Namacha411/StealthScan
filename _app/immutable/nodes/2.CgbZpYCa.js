import{s as V,n as M,r as q}from"../chunks/scheduler.CtbWrGNo.js";import{S as H,i as X,e as h,s as b,t as N,c as m,a as y,m as E,f as x,d as g,b as P,n as c,g as U,h as l,o as F,p as A,j as G}from"../chunks/index.NjQNrUhK.js";const J=!0,Y=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"}));function R(i){let e,t="コピーしました";return{c(){e=h("div"),e.textContent=t,this.h()},l(a){e=m(a,"DIV",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-13e5ae5"&&(e.textContent=t),this.h()},h(){c(e,"class","copied-message animate-bounce svelte-1fniv23")},m(a,f){U(a,e,f)},d(a){a&&g(e)}}}function K(i){let e,t,a="検索除けツール",f,o,_,r,u,C="変換",B,p,D="コピー",j,v,w,k,O,S,I,n=i[2]&&R();return{c(){e=h("main"),t=h("h1"),t.textContent=a,f=b(),o=h("textarea"),_=b(),r=h("div"),u=h("button"),u.textContent=C,B=b(),p=h("button"),p.textContent=D,j=b(),v=h("pre"),w=N(i[1]),k=N(`\r
	`),O=b(),n&&n.c(),this.h()},l(d){e=m(d,"MAIN",{class:!0});var s=y(e);t=m(s,"H1",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-vgupbt"&&(t.textContent=a),f=x(s),o=m(s,"TEXTAREA",{class:!0,rows:!0,placeholder:!0}),y(o).forEach(g),_=x(s),r=m(s,"DIV",{class:!0});var T=y(r);u=m(T,"BUTTON",{class:!0,"data-svelte-h":!0}),E(u)!=="svelte-1fmruzf"&&(u.textContent=C),B=x(T),p=m(T,"BUTTON",{class:!0,"data-svelte-h":!0}),E(p)!=="svelte-15b9na"&&(p.textContent=D),T.forEach(g),j=x(s),v=m(s,"PRE",{class:!0});var z=y(v);w=P(z,i[1]),k=P(z,`\r
	`),z.forEach(g),O=x(s),n&&n.l(s),s.forEach(g),this.h()},h(){c(t,"class","text-3xl font-bold underline text-blue-900 mb-4"),c(o,"class","w-full p-2 border-2 border-gray-300 rounded shadow-inner resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-1fniv23"),c(o,"rows","5"),c(o,"placeholder","テキストを入力してください"),c(u,"class","bg-indigo-700 text-white py-2 px-4 rounded font-semibold transition duration-300 ease-in-out hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-1fniv23"),c(p,"class","bg-indigo-700 text-white py-2 px-4 rounded font-semibold transition duration-300 ease-in-out hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-1fniv23"),c(r,"class","flex space-x-2 mt-4"),c(v,"class","mt-4 p-4 rounded-lg shadow overflow-auto font-mono text-sm leading-normal svelte-1fniv23"),c(e,"class","max-w-lg mx-auto p-4 svelte-1fniv23")},m(d,s){U(d,e,s),l(e,t),l(e,f),l(e,o),F(o,i[0]),l(e,_),l(e,r),l(r,u),l(r,B),l(r,p),l(e,j),l(e,v),l(v,w),l(v,k),l(e,O),n&&n.m(e,null),S||(I=[A(o,"input",i[5]),A(u,"click",i[3]),A(p,"click",i[4])],S=!0)},p(d,[s]){s&1&&F(o,d[0]),s&2&&G(w,d[1]),d[2]?n||(n=R(),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:M,o:M,d(d){d&&g(e),n&&n.d(),S=!1,q(I)}}}function L(i,e,t){let a="",f="",o=!1;function _(){t(1,f=a.split("").join("​"))}function r(){navigator.clipboard.writeText(f).then(()=>{t(2,o=!0),setTimeout(()=>{t(2,o=!1)},2e3)}).catch(C=>{console.error("コピーに失敗しました: ",C)})}function u(){a=this.value,t(0,a)}return[a,f,o,_,r,u]}class Z extends H{constructor(e){super(),X(this,e,L,K,V,{})}}export{Z as component,Y as universal};