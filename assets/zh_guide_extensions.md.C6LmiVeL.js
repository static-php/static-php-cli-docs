import{_ as t,c as d,o as e,a2 as s}from"./chunks/framework._YPf4yo5.js";const m=JSON.parse('{"title":"扩展列表","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/extensions.md","filePath":"zh/guide/extensions.md"}'),r={name:"zh/guide/extensions.md"},y=s('<h1 id="扩展列表" tabindex="-1">扩展列表 <a class="header-anchor" href="#扩展列表" aria-label="Permalink to &quot;扩展列表&quot;">​</a></h1><blockquote><ul><li><code>yes</code>: 已支持</li><li><code>yes, untested</code>: 已支持，但未经充分测试</li><li>empty: 目前还不支持，或正在支持中</li><li><code>no</code> with issue link: 确定不支持或无法支持</li><li><code>partial</code> with issue link: 已支持，但是无法完美工作</li></ul></blockquote><table><thead><tr><th></th><th>Linux</th><th>macOS</th><th>FreeBSD</th><th>Windows</th></tr></thead><tbody><tr><td>apcu</td><td>yes, untested</td><td>yes, untested</td><td>yes, untested</td><td>yes, untested</td></tr><tr><td>bcmath</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>bz2</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>calendar</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>ctype</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>curl</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>dba</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>dom</td><td>yes</td><td>yes</td><td></td><td>yes</td></tr><tr><td>ds</td><td>yes, untested</td><td>yes, untested</td><td>yes, untested</td><td>yes, untested</td></tr><tr><td>enchant</td><td></td><td></td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#event">event</a></td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>exif</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td><a href="./extension-notes.html#ffi">ffi</a></td><td>no</td><td>yes</td><td></td><td>yes</td></tr><tr><td>filter</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>fileinfo</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>ftp</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td><a href="./extension-notes.html#gd">gd</a></td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>gettext</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#glfw">glfw</a></td><td>no</td><td>yes</td><td>no</td><td></td></tr><tr><td>gmp</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>iconv</td><td>yes</td><td>yes</td><td></td><td>yes, untested</td></tr><tr><td>igbinary</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>imagick</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#imap">imap</a></td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>inotify</td><td>yes</td><td>no</td><td></td><td></td></tr><tr><td>intl</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>ldap</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>mbstring</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>mbregex</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td><a href="./extension-notes.html#mcrypt">mcrypt</a></td><td>no</td><td>no</td><td>no</td><td></td></tr><tr><td>memcache</td><td>yes, untested</td><td>yes, untested</td><td></td><td></td></tr><tr><td>memcached</td><td>no</td><td>yes, untested</td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#mongodb">mongodb</a></td><td>yes</td><td>no</td><td></td><td></td></tr><tr><td>mysqli</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>mysqlnd</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td><a href="./extension-notes.html#oci8">oci8</a></td><td>no</td><td>no</td><td>no</td><td></td></tr><tr><td>opcache</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>openssl</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td><a href="./extension-notes.html#password-argon2">password-argon2</a></td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>pcntl</td><td>yes</td><td>yes</td><td>yes</td><td>no</td></tr><tr><td>pdo</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>pdo_mysql</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>pdo_sqlite</td><td>yes</td><td>yes</td><td></td><td>yes</td></tr><tr><td>pdo_pgsql</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#pgsql">pgsql</a></td><td>partial</td><td>partial</td><td></td><td></td></tr><tr><td>phar</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>posix</td><td>yes</td><td>yes</td><td>yes</td><td>no</td></tr><tr><td>protobuf</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>pspell</td><td></td><td></td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#rar">rar</a></td><td>yes</td><td>partial</td><td></td><td></td></tr><tr><td>rdkafka</td><td></td><td></td><td></td><td></td></tr><tr><td>readline</td><td>yes, untested</td><td>yes, untested</td><td></td><td></td></tr><tr><td>redis</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>session</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>shmop</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>simdjson</td><td>yes, untested</td><td>yes, untested</td><td>yes, untested</td><td>yes, untested</td></tr><tr><td>simplexml</td><td>yes</td><td>yes</td><td></td><td>yes</td></tr><tr><td>snappy</td><td>yes, untested</td><td>yes, untested</td><td></td><td></td></tr><tr><td>soap</td><td>yes</td><td>yes</td><td></td><td>yes</td></tr><tr><td>sockets</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>sodium</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>sqlite3</td><td>yes</td><td>yes</td><td></td><td>yes</td></tr><tr><td>sqlsrv</td><td>yes, untested</td><td>yes, untested</td><td></td><td></td></tr><tr><td>ssh2</td><td>yes</td><td>yes</td><td></td><td>yes</td></tr><tr><td><a href="./extension-notes.html#swow">swow</a></td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#swoole">swoole</a></td><td>yes</td><td>yes</td><td></td><td>no</td></tr><tr><td><a href="./extension-notes.html#swoole-hook-pgsql">swoole-hook-pgsql</a></td><td>yes</td><td>partial</td><td></td><td>no</td></tr><tr><td><a href="./extension-notes.html#swoole-hook-mysql">swoole-hook-mysql</a></td><td>yes</td><td>yes</td><td></td><td>no</td></tr><tr><td><a href="./extension-notes.html#swoole-hook-sqlite">swoole-hook-sqlite</a></td><td>yes</td><td>yes</td><td></td><td>no</td></tr><tr><td>sysvmsg</td><td>yes</td><td>yes</td><td></td><td>no</td></tr><tr><td>sysvsem</td><td>yes</td><td>yes</td><td></td><td>no</td></tr><tr><td>sysvshm</td><td>yes</td><td>yes</td><td></td><td>yes</td></tr><tr><td>tidy</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>tokenizer</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>uv</td><td>yes, untested</td><td>yes, untested</td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#xdebug">xdebug</a></td><td>no</td><td>no</td><td>no</td><td></td></tr><tr><td><a href="./extension-notes.html#xhprof">xhprof</a></td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>xlswriter</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#xml">xml</a></td><td>yes</td><td>yes</td><td></td><td>yes</td></tr><tr><td>xmlreader</td><td>yes, untested</td><td>yes, untested</td><td></td><td>yes</td></tr><tr><td>xmlwriter</td><td>yes, untested</td><td>yes, untested</td><td></td><td>yes</td></tr><tr><td>xsl</td><td>yes, untested</td><td>yes, untested</td><td></td><td></td></tr><tr><td>yac</td><td>yes, untested</td><td>yes, untested</td><td></td><td>yes, untested</td></tr><tr><td>yaml</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>zip</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>zlib</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>zstd</td><td>yes</td><td>yes</td><td></td><td></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果缺少您需要的扩展，您可以创建 <a href="https://github.com/crazywhalecc/static-php-cli/issues" target="_blank" rel="noreferrer">功能请求</a>。</p><p>有些扩展或扩展依赖的库会有一些可选的特性，例如 gd 库可选支持 libwebp、freetype 等。 如果你只使用 <code>bin/spc build gd --build-cli</code> 是不会包含它们（static-php-cli 默认为最小依赖原则）。</p><p>你可以在编译时使用 <code>--with-libs=</code> 加入这些库，当本次编译的依赖库中包含它们，gd 会自动依赖它们启用这些特性。 （如：<code>bin/spc build gd --with-libs=libwebp,freetype --build-cli</code>）</p><p>或者你也可以使用 <code>--with-suggested-exts</code> 和 <code>--with-suggested-libs</code> 启用这些扩展和库所有可选的依赖。 （如：<code>bin/spc build gd --with-suggested-libs --build-cli</code>）</p><p>如果你不知道某个扩展是否有可选特性，可以通过查看 <a href="https://github.com/crazywhalecc/static-php-cli/tree/main/config" target="_blank" rel="noreferrer">spc 配置文件</a> 或使用命令 <code>bin/spc dev:extensions</code> 查看（库依赖为 <code>lib-suggests</code>，扩展依赖为 <code>ext-suggests</code>）。</p></div>',4),o=[y];function n(i,a,l,c,h,p){return e(),d("div",null,o)}const f=t(r,[["render",n]]);export{m as __pageData,f as default};
