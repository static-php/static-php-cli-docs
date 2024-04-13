import{_ as e,c as t,o,a2 as n}from"./chunks/framework._YPf4yo5.js";const v=JSON.parse('{"title":"Start Developing","description":"","frontmatter":{},"headers":[],"relativePath":"en/develop/index.md","filePath":"en/develop/index.md"}'),i={name:"en/develop/index.md"},s=n('<h1 id="start-developing" tabindex="-1">Start Developing <a class="header-anchor" href="#start-developing" aria-label="Permalink to &quot;Start Developing&quot;">​</a></h1><p>Developing this project requires the installation and deployment of a PHP environment, as well as some extensions and Composer commonly used in PHP projects.</p><p>The development environment and running environment of the project are almost exactly the same. You can refer to the <strong>Manual Build</strong> section to install system PHP or use the pre-built static PHP of this project as the environment. I will not go into details here.</p><p>Regardless of its purpose, this project itself is actually a <code>php-cli</code> program. You can edit and develop it as a normal PHP project. At the same time, you need to understand the Shell languages of different systems.</p><p>The current purpose of this project is to compile statically compiled independent PHP, but the main part also includes compiling static versions of many dependent libraries, so you can reuse this set of compilation logic to build independent binary versions of other programs, such as Nginx, etc.</p><h2 id="environment-preparation" tabindex="-1">Environment preparation <a class="header-anchor" href="#environment-preparation" aria-label="Permalink to &quot;Environment preparation&quot;">​</a></h2><p>A PHP environment is required to develop this project. You can use the PHP that comes with the system, or you can use the static PHP built by this project.</p><p>Regardless of which PHP you use, in your development environment you need to install these extensions:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>curl,dom,filter,mbstring,openssl,pcntl,phar,posix,sodium,tokenizer,xml,xmlwriter</span></span></code></pre></div><p>The static-php-cli project itself does not require so many extensions, but during the development process, you will use tools such as Composer and PHPUnit, which require these extensions.</p><blockquote><p>For micro self-executing binaries built by static-php-cli itself, only <code>pcntl,posix,mbstring,tokenizer,phar</code> is required.</p></blockquote><h2 id="start-development" tabindex="-1">Start development <a class="header-anchor" href="#start-development" aria-label="Permalink to &quot;Start development&quot;">​</a></h2><p>Continuing down to see the project structure documentation, you can learn how <code>static-php-cli</code> works.</p>',13),a=[s];function r(p,l,c,d,h,u){return o(),t("div",null,a)}const g=e(i,[["render",r]]);export{v as __pageData,g as default};
