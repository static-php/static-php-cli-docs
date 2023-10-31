import{_ as t,c as d,o as e,U as s}from"./chunks/framework.a73c7ff7.js";const m=JSON.parse('{"title":"Extensions","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/extensions.md","filePath":"zh/guide/extensions.md"}'),r={name:"zh/guide/extensions.md"},y=s('<h1 id="extensions" tabindex="-1">Extensions <a class="header-anchor" href="#extensions" aria-label="Permalink to &quot;Extensions&quot;">​</a></h1><blockquote><ul><li>yes: supported and tested</li><li>untested: supported, but not tested</li><li>empty: not supported yet, or WIP</li><li>no with issue link: not supported yet due to issue</li><li>partial with issue link: supported but not perfect due to issue</li></ul></blockquote><table><thead><tr><th></th><th>Linux</th><th>macOS</th><th>FreeBSD</th><th>Windows</th></tr></thead><tbody><tr><td>apcu</td><td>yes, untested</td><td>yes, untested</td><td>yes, untested</td><td></td></tr><tr><td>bcmath</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>bz2</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>calendar</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>ctype</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>curl</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>dba</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>dom</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>enchant</td><td></td><td></td><td></td><td></td></tr><tr><td>event</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>exif</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>ffi</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>filter</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>fileinfo</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>ftp</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td><a href="./extension-notes.html#gd">gd</a></td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>gettext</td><td></td><td></td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#glfw">glfw</a></td><td>no</td><td>yes</td><td>no</td><td></td></tr><tr><td>gmp</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>iconv</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>imagick</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#imap">imap</a></td><td>no</td><td>no</td><td></td><td></td></tr><tr><td>inotify</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>intl</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>ldap</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>mbstring</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>mbregex</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td><a href="./extension-notes.html#mcrypt">mcrypt</a></td><td>no</td><td>no</td><td>no</td><td></td></tr><tr><td>memcache</td><td>yes, untested</td><td>yes, untested</td><td></td><td></td></tr><tr><td>memcached</td><td>no</td><td>yes, untested</td><td></td><td></td></tr><tr><td>mongodb</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>mysqli</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>mysqlnd</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td><a href="./extension-notes.html#oci8">oci8</a></td><td>no</td><td>no</td><td>no</td><td></td></tr><tr><td>opcache</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>openssl</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>password-argon2</td><td></td><td></td><td></td><td></td></tr><tr><td>pcntl</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>pdo</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>pdo_mysql</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>pdo_sqlite</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>pdo_pgsql</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>pgsql</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>phar</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>posix</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>protobuf</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>pspell</td><td></td><td></td><td></td><td></td></tr><tr><td>rdkafka</td><td></td><td></td><td></td><td></td></tr><tr><td>readline</td><td>yes, untested</td><td>yes, untested</td><td></td><td></td></tr><tr><td>redis</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>session</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>shmop</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>simplexml</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>snappy</td><td>yes, untested</td><td>yes, untested</td><td></td><td></td></tr><tr><td>soap</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>sockets</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>sodium</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>sqlite3</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#sqlsrv">sqlsrv</a></td><td>no</td><td>no</td><td>no</td><td></td></tr><tr><td>ssh2</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#swow">swow</a></td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#swoole">swoole</a></td><td>partial</td><td>yes</td><td></td><td></td></tr><tr><td>sysvmsg</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>sysvsem</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>sysvshm</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>tidy</td><td></td><td></td><td></td><td></td></tr><tr><td>tokenizer</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td><a href="./extension-notes.html#xdebug">xdebug</a></td><td>no</td><td>no</td><td>no</td><td></td></tr><tr><td>xlswriter</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td><a href="./extension-notes.html#xml">xml</a></td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>xmlreader</td><td>yes, untested</td><td>yes, untested</td><td></td><td></td></tr><tr><td>xmlwriter</td><td>yes, untested</td><td>yes, untested</td><td></td><td></td></tr><tr><td>xsl</td><td>yes, untested</td><td>yes, untested</td><td></td><td></td></tr><tr><td>yaml</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>zip</td><td>yes</td><td>yes</td><td></td><td></td></tr><tr><td>zlib</td><td>yes</td><td>yes</td><td>yes</td><td></td></tr><tr><td>zstd</td><td>yes</td><td>yes</td><td></td><td></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If an extension you need is missing, you can create a <a href="https://github.com/crazywhalecc/static-php-cli/issues" target="_blank" rel="noreferrer">Feature Request</a>.</p></div>',4),n=[y];function o(i,a,l,p,h,c){return e(),d("div",null,n)}const x=t(r,[["render",o]]);export{m as __pageData,x as default};
