import{_ as e,c as a,o as l,U as o}from"./chunks/framework.a73c7ff7.js";const u=JSON.parse('{"title":"扩展注意事项","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/extension-notes.md","filePath":"zh/guide/extension-notes.md"}'),i={name:"zh/guide/extension-notes.md"},t=o('<h1 id="扩展注意事项" tabindex="-1">扩展注意事项 <a class="header-anchor" href="#扩展注意事项" aria-label="Permalink to &quot;扩展注意事项&quot;">​</a></h1><p>因为是静态编译，扩展不会 100% 完美编译，而且不同扩展对 PHP、环境都有不同的要求，这里将一一列举。</p><h2 id="phpmicro" tabindex="-1">phpmicro <a class="header-anchor" href="#phpmicro" aria-label="Permalink to &quot;phpmicro&quot;">​</a></h2><ol><li>phpmicro SAPI 仅支持 PHP &gt;= 8.0 版本。</li></ol><h2 id="swoole" tabindex="-1">swoole <a class="header-anchor" href="#swoole" aria-label="Permalink to &quot;swoole&quot;">​</a></h2><ol><li>swoole &gt;= 5.0 版本仅支持 PHP &gt;= 8.0 版本。</li><li>swoole 目前不支持 curl 的 hook（后续有可能会修复）。</li></ol><h2 id="swow" tabindex="-1">swow <a class="header-anchor" href="#swow" aria-label="Permalink to &quot;swow&quot;">​</a></h2><ol><li>swow 仅支持 PHP &gt;= 8.0 版本。</li></ol><h2 id="imap" tabindex="-1">imap <a class="header-anchor" href="#imap" aria-label="Permalink to &quot;imap&quot;">​</a></h2><ol><li>该扩展目前不支持 Kerberos。</li><li>由于底层的 c-client、ext-imap 不是线程安全的。 无法在 <code>--enable-zts</code> 构建中使用它。</li><li>由于该扩展可能会从未来的 PHP 中删除，因此我们建议您寻找替代实现，例如 <a href="https://github.com/Webklex/php-imap" target="_blank" rel="noreferrer">Webklex/php-imap</a>。</li></ol><h2 id="gd" tabindex="-1">gd <a class="header-anchor" href="#gd" aria-label="Permalink to &quot;gd&quot;">​</a></h2><ol><li>gd 扩展依赖了较多的额外图形库，默认情况下，直接使用 <code>bin/spc build gd</code> 不会引入和支持部分图形库，例如 <code>libjpeg</code>、<code>libavif</code> 等， 需要使用 <code>--with-libs</code> 参数补全。目前支持 <code>freetype,libjpeg,libavif,libwebp</code> 四个库的支持，所以这里可以使用以下命令来让 gd 库引入它们：</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bin/spc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--with-libs=freetype,libjpeg,libavif,libwebp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--build-cli</span></span></code></pre></div><h2 id="mcrypt" tabindex="-1">mcrypt <a class="header-anchor" href="#mcrypt" aria-label="Permalink to &quot;mcrypt&quot;">​</a></h2><ol><li>目前未支持，未来也不计划支持此扩展。<a href="https://github.com/crazywhalecc/static-php-cli/issues/32" target="_blank" rel="noreferrer">#32</a></li></ol><h2 id="oci8" tabindex="-1">oci8 <a class="header-anchor" href="#oci8" aria-label="Permalink to &quot;oci8&quot;">​</a></h2><ol><li>oci8 是 Oracle 数据库的扩展，因为 Oracle 提供的扩展所依赖的库未提供静态编译版本（<code>.a</code>）或源代码，无法使用静态链接的方式将此扩展编译到 php 内，故无法支持。</li></ol><h2 id="sqlsrv" tabindex="-1">sqlsrv <a class="header-anchor" href="#sqlsrv" aria-label="Permalink to &quot;sqlsrv&quot;">​</a></h2><ol><li>sqlsrv 是 SQL Server 数据库的扩展，因为 SQL Server 提供的扩展所依赖的库未提供静态编译版本（<code>.a</code>）或源代码，无法使用静态链接的方式将此扩展编译到 php 内，故无法支持。</li></ol><h2 id="xdebug" tabindex="-1">xdebug <a class="header-anchor" href="#xdebug" aria-label="Permalink to &quot;xdebug&quot;">​</a></h2><ol><li>Xdebug 是一个 Zend 扩展，Xdebug 的功能依赖于 PHP 的 Zend 引擎和底层代码，如果要将其静态编译到 PHP 中，可能需要巨量的 patch 代码，这是不可行的。</li><li>macOS 平台可以通过在相同平台编译的 PHP 下编译一个 xdebug 扩展，并提取其中的 <code>xdebug.so</code> 文件，再在 static-php-cli 中使用 <code>--no-strip</code> 参数保留调试符号表，同时加入 <code>ffi</code> 扩展。 编译的 <code>./php</code> 二进制可以通过指定 INI 配置并运行，例如<code>./php -d &#39;zend_extension=xdebug.so&#39; your-code.php</code>。</li></ol><h2 id="xml" tabindex="-1">xml <a class="header-anchor" href="#xml" aria-label="Permalink to &quot;xml&quot;">​</a></h2><ol><li>xml包括 xmlreader、xmlwriter、dom、simplexml 等，添加 xml 扩展时最好同时启用这些扩展。</li><li>libxml 包含在 xml 扩展中。 启用 xml 相当于启用 libxml。</li></ol><h2 id="glfw" tabindex="-1">glfw <a class="header-anchor" href="#glfw" aria-label="Permalink to &quot;glfw&quot;">​</a></h2><ol><li>glfw 扩展依赖 OpenGL，在 Linux 平台还依赖 X11 等环境，这些库都无法被轻易地动态链接。</li><li>在 macOS 系统下，我们可以动态链接系统的 OpenGL 和一些相关的库。</li></ol>',25),r=[t];function s(c,d,n,h,p,b){return l(),a("div",null,r)}const x=e(i,[["render",s]]);export{u as __pageData,x as default};
