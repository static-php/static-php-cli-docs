import{u as r,A as i,V as s,a6 as u,a7 as c,a8 as l,a9 as f,aa as d,ab as m,ac as h,ad as A,ae as g,af as v,ag as P,d as C,j as w,ah as y,ai as _,aj as R,ak as b}from"./chunks/framework.3f05c8be.js";import{t as E}from"./chunks/theme.e8ae031f.js";const T={...E,setup(){const{lang:e}=r();i(()=>{s&&(document.cookie=`nf_lang=${e.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`)})}};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=p(T),j=C({name:"VitePressApp",setup(){const{site:e}=r();return w(()=>{i(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),y(),_(),R(),o.setup&&o.setup(),()=>b(o.Layout)}});async function D(){const e=O(),a=x();a.provide(c,e);const t=l(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function x(){return A(j)}function O(){let e=s,a;return g(t=>{let n=v(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),P(()=>import(n),[])):null},o.NotFound)}s&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{D as createApp};
