import{_ as d,c as t,o as e,a2 as o}from"./chunks/framework._YPf4yo5.js";const C=JSON.parse('{"title":"环境变量列表","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"zh/guide/env-vars.md","filePath":"zh/guide/env-vars.md"}'),c={name:"zh/guide/env-vars.md"},a=o(`<h1 id="环境变量列表" tabindex="-1">环境变量列表 <a class="header-anchor" href="#环境变量列表" aria-label="Permalink to &quot;环境变量列表&quot;">​</a></h1><p>本页面的环境变量列表中所提到的所有环境变量都具有默认值，除非另有说明。你可以通过设置这些环境变量来覆盖默认值。</p><p>一般情况下，你不需要修改任何以下环境变量，因为它们已经被设置为最佳值。 但是，如果你有特殊需求，你可以通过设置这些环境变量来满足你的需求（比如你需要调试不同编译参数下的 PHP 性能表现）。</p><p>如需使用自定义环境变量，你可以在终端中使用 <code>export</code> 命令或者在命令前直接设置环境变量，例如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># export 方式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SPC_CONCURRENCY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bin/spc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mbstring,pcntl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --build-cli</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 直接设置方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SPC_CONCURRENCY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bin/spc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mbstring,pcntl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --build-cli</span></span></code></pre></div><h2 id="通用环境变量" tabindex="-1">通用环境变量 <a class="header-anchor" href="#通用环境变量" aria-label="Permalink to &quot;通用环境变量&quot;">​</a></h2><p>通用环境变量是所有构建目标都可以使用的环境变量。</p><table><thead><tr><th>var name</th><th>default value</th><th>comment</th></tr></thead><tbody><tr><td><code>BUILD_ROOT_PATH</code></td><td><code>{pwd}/buildroot</code></td><td>编译目标的根目录</td></tr><tr><td><code>BUILD_LIB_PATH</code></td><td><code>{pwd}/buildroot/lib</code></td><td>编译依赖库的根目录</td></tr><tr><td><code>BUILD_INCLUDE_PATH</code></td><td><code>{pwd}/buildroot/include</code></td><td>编译依赖库的头文件目录</td></tr><tr><td><code>BUILD_BIN_PATH</code></td><td><code>{pwd}/buildroot/bin</code></td><td>编译依赖库的二进制文件目录</td></tr><tr><td><code>PKG_ROOT_PATH</code></td><td><code>{pwd}/pkgroot</code></td><td>闭源或预编译工具下载后安装的目录</td></tr><tr><td><code>SOURCE_PATH</code></td><td><code>{pwd}/source</code></td><td>编译项目的源码解压缩目录</td></tr><tr><td><code>DOWNLOAD_PATH</code></td><td><code>{pwd}/downloads</code></td><td>下载的文件存放目录</td></tr><tr><td><code>SPC_CONCURRENCY</code></td><td>取决于当前 CPU 核心数量</td><td>并行编译的数量</td></tr></tbody></table><h2 id="系统特定变量" tabindex="-1">系统特定变量 <a class="header-anchor" href="#系统特定变量" aria-label="Permalink to &quot;系统特定变量&quot;">​</a></h2><p>这些环境变量是特定于系统的，它们只在特定的系统上才会生效。</p><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><table><thead><tr><th>var name</th><th>default value</th><th>comment</th></tr></thead><tbody><tr><td><code>PHP_SDK_PATH</code></td><td><code>{pwd}\\php-sdk-binary-tools</code></td><td>PHP SDK 工具的安装目录</td></tr><tr><td><code>UPX_EXEC</code></td><td><code>$PKG_ROOT_PATH\\bin\\upx.exe</code></td><td>UPX 压缩工具的路径</td></tr></tbody></table><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><table><thead><tr><th>var name</th><th>default value</th><th>comment</th></tr></thead><tbody><tr><td><code>CC</code></td><td><code>clang</code></td><td>C 编译器</td></tr><tr><td><code>CXX</code></td><td><code>clang++</code></td><td>C++ 编译器</td></tr><tr><td><code>SPC_DEFAULT_C_FLAGS</code></td><td><code>--target=arm64-apple-darwin</code> 或 <code>--target=x86_64-apple-darwin</code></td><td>默认 C 编译标志（与 <code>CFLAGS</code> 不同）</td></tr><tr><td><code>SPC_DEFAULT_CXX_FLAGS</code></td><td><code>--target=arm64-apple-darwin</code> 或 <code>--target=x86_64-apple-darwin</code></td><td>默认 C++ 编译标志（与 <code>CXXFLAGS</code> 不同）</td></tr><tr><td><code>SPC_CMD_PREFIX_PHP_BUILDCONF</code></td><td><code>./buildconf --force</code></td><td>编译 PHP <code>buildconf</code> 命令前缀</td></tr><tr><td><code>SPC_CMD_PREFIX_PHP_CONFIGURE</code></td><td><code>./configure --prefix= --with-valgrind=no --enable-shared=no --enable-static=yes --disable-all --disable-cgi --disable-phpdbg</code></td><td>编译 PHP <code>configure</code> 命令前缀</td></tr><tr><td><code>SPC_CMD_PREFIX_PHP_MAKE</code></td><td><code>make -j$SPC_CONCURRENCY</code></td><td>编译 PHP <code>make</code> 命令前缀</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_CFLAGS</code></td><td><code>$SPC_DEFAULT_C_FLAGS -Werror=unknown-warning-option</code></td><td>PHP <code>configure</code> 命令的 <code>CFLAGS</code> 变量</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_CPPFLAGS</code></td><td><code>-I$BUILD_INCLUDE_PATH</code></td><td>PHP <code>configure</code> 命令的 <code>CPPFLAGS</code> 变量</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_LDFLAGS</code></td><td><code>-L$BUILD_LIB_PATH</code></td><td>PHP <code>configure</code> 命令的 <code>LDFLAGS</code> 变量</td></tr><tr><td><code>SPC_CMD_VAR_PHP_MAKE_EXTRA_CFLAGS</code></td><td><code>-g0 -Os</code> 或 <code>-g -O0</code>（当使用 <code>--no-strip</code> 时为后者）</td><td>PHP <code>make</code> 命令的 <code>EXTRA_CFLAGS</code> 变量</td></tr><tr><td><code>SPC_CMD_VAR_PHP_MAKE_EXTRA_LIBS</code></td><td><code>-lresolv</code></td><td>PHP <code>make</code> 命令的额外 <code>EXTRA_LIBS</code> 变量</td></tr></tbody></table><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><table><thead><tr><th>var name</th><th>default value</th><th>comment</th></tr></thead><tbody><tr><td><code>UPX_EXEC</code></td><td><code>$PKG_ROOT_PATH/bin/upx</code></td><td>UPX 压缩工具的路径</td></tr><tr><td><code>GNU_ARCH</code></td><td><code>x86_64</code> 或 <code>aarch64</code></td><td>当前环境的 CPU 架构</td></tr><tr><td><code>CC</code></td><td>Alpine: <code>gcc</code>, Other: <code>$GNU_ARCH-linux-musl-gcc</code></td><td>C 编译器</td></tr><tr><td><code>CXX</code></td><td>Alpine: <code>g++</code>, Other: <code>$GNU_ARCH-linux-musl-g++</code></td><td>C++ 编译器</td></tr><tr><td><code>AR</code></td><td>Alpine: <code>ar</code>, Other: <code>$GNU_ARCH-linux-musl-ar</code></td><td>静态库工具</td></tr><tr><td><code>LD</code></td><td><code>ld.gold</code></td><td>链接器</td></tr><tr><td><code>PATH</code></td><td><code>/usr/local/musl/bin:/usr/local/musl/$GNU_ARCH-linux-musl/bin:$PATH</code></td><td>系统 PATH</td></tr><tr><td><code>SPC_DEFAULT_C_FLAGS</code></td><td>empty</td><td>默认 C 编译标志</td></tr><tr><td><code>SPC_DEFAULT_CXX_FLAGS</code></td><td>empty</td><td>默认 C++ 编译标志</td></tr><tr><td><code>SPC_CMD_PREFIX_PHP_BUILDCONF</code></td><td><code>./buildconf --force</code></td><td>编译 PHP <code>buildconf</code> 命令前缀</td></tr><tr><td><code>SPC_CMD_PREFIX_PHP_CONFIGURE</code></td><td><code>LD_LIBRARY_PATH={ld_lib_path} ./configure --prefix= --with-valgrind=no --enable-shared=no --enable-static=yes --disable-all --disable-cgi --disable-phpdbg</code></td><td>编译 PHP <code>configure</code> 命令前缀</td></tr><tr><td><code>SPC_CMD_PREFIX_PHP_MAKE</code></td><td><code>make -j$SPC_CONCURRENCY</code></td><td>编译 PHP <code>make</code> 命令前缀</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_CFLAGS</code></td><td><code>$SPC_DEFAULT_C_FLAGS</code></td><td>PHP <code>configure</code> 命令的 <code>CFLAGS</code> 变量</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_CPPFLAGS</code></td><td><code>-I$BUILD_INCLUDE_PATH</code></td><td>PHP <code>configure</code> 命令的 <code>CPPFLAGS</code> 变量</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_LDFLAGS</code></td><td><code>-L$BUILD_LIB_PATH</code></td><td>PHP <code>configure</code> 命令的 <code>LDFLAGS</code> 变量</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_LIBS</code></td><td><code>-ldl -lpthread</code></td><td>PHP <code>configure</code> 命令的 <code>LIBS</code> 变量</td></tr><tr><td><code>SPC_CMD_VAR_PHP_MAKE_EXTRA_CFLAGS</code></td><td><code>-g0 -Os -fno-ident -fPIE</code> 或 <code>-g -O0 -fno-ident -fPIE</code>（当使用 <code>--no-strip</code> 时为后者）</td><td>PHP <code>make</code> 命令的 <code>EXTRA_CFLAGS</code> 变量</td></tr><tr><td><code>SPC_CMD_VAR_PHP_MAKE_EXTRA_LIBS</code></td><td>empty</td><td>PHP <code>make</code> 命令的额外 <code>EXTRA_LIBS</code> 变量</td></tr><tr><td><code>SPC_CMD_VAR_MAKE_EXTRA_LDFLAGS_PROGRAM</code></td><td><code>-all-static</code>（当使用 <code>clang</code> 时：<code>-Xcompiler -fuse-ld=lld -all-static</code>）</td><td><code>make</code> 命令的额外 <code>LDFLAGS</code> 变量（用于编译程序）</td></tr></tbody></table><blockquote><p><code>{ld_lib_path}</code> 值为 <code>/usr/local/musl/$GNU_ARCH-linux-musl/lib</code>。</p></blockquote><h3 id="freebsd" tabindex="-1">FreeBSD <a class="header-anchor" href="#freebsd" aria-label="Permalink to &quot;FreeBSD&quot;">​</a></h3><p>因 FreeBSD 系统的用户较少，我们暂时不提供 FreeBSD 系统的环境变量。</p><h3 id="unix" tabindex="-1">Unix <a class="header-anchor" href="#unix" aria-label="Permalink to &quot;Unix&quot;">​</a></h3><p>对于 macOS、Linux、FreeBSD 等 Unix 系统，以下环境变量是通用的。</p><table><thead><tr><th>var name</th><th>default value</th><th>comment</th></tr></thead><tbody><tr><td><code>PATH</code></td><td><code>$BUILD_BIN_PATH:$PATH</code></td><td>系统 PATH</td></tr><tr><td><code>PKG_CONFIG_PATH</code></td><td><code>$BUILD_LIB_PATH/pkgconfig</code></td><td>pkg-config 的搜索路径</td></tr><tr><td><code>PKG_CONFIG</code></td><td><code>$BUILD_BIN_PATH/pkg-config</code></td><td>pkg-config 命令路径</td></tr></tbody></table><h2 id="编译依赖库的环境变量-仅限-unix-系统" tabindex="-1">编译依赖库的环境变量（仅限 Unix 系统） <a class="header-anchor" href="#编译依赖库的环境变量-仅限-unix-系统" aria-label="Permalink to &quot;编译依赖库的环境变量（仅限 Unix 系统）&quot;">​</a></h2><p>从 2.2.0 开始，static-php-cli 对所有 macOS、Linux、FreeBSD 等 Unix 系统的编译依赖库的命令均支持自定义环境变量。</p><p>这样你就可以随时通过环境变量来调整编译依赖库的行为。例如你可以通过 <code>xxx_CFLAGS=-O0</code> 来设置编译 xxx 库的优化参数。</p><p>当然，不是每个依赖库都支持注入环境变量，我们目前提供了三个通配的环境变量，后缀分别为：</p><ul><li><code>_CFLAGS</code>: C 编译器的参数</li><li><code>_LDFLAGS</code>: 链接器的参数</li><li><code>_LIBS</code>: 额外的链接库</li></ul><p>前缀为依赖库的名称，具体依赖库的名称以 <code>lib.json</code> 为准。其中，带有 <code>-</code> 的依赖库名称需要将 <code>-</code> 替换为 <code>_</code>。</p><p>下面是一个替换 openssl 库编译的优化选项示例：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">openssl_CFLAGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-O0&quot;</span></span></code></pre></div><p>库名称使用同 <code>lib.json</code> 中列举的名称，区分大小写。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>当未指定相关环境变量时，除以下变量外，其余值均默认为空：</p><table><thead><tr><th>var name</th><th>var default value</th></tr></thead><tbody><tr><td><code>pkg_config_CFLAGS</code></td><td>macOS: <code>$SPC_DEFAULT_C_FLAGS -Wimplicit-function-declaration -Wno-int-conversion</code>, Other: empty</td></tr><tr><td><code>pkg_config_LDFLAGS</code></td><td>Linux: <code>--static</code>, Other: empty</td></tr><tr><td><code>imagemagick_LDFLAGS</code></td><td>Linux: <code>-static</code>, Other: empty</td></tr><tr><td><code>imagemagick_LIBS</code></td><td>macOS: <code>-liconv</code>, Other: empty</td></tr><tr><td><code>ldap_LDFLAGS</code></td><td><code>-L$BUILD_LIB_PATH</code></td></tr><tr><td><code>openssl_CFLAGS</code></td><td>Linux: <code>$SPC_DEFAULT_C_FLAGS</code>, Other: empty</td></tr><tr><td>others...</td><td>empty</td></tr></tbody></table></div><p>下表是支持自定义以上三种变量的依赖库名称列表：</p><table><thead><tr><th>lib name</th></tr></thead><tbody><tr><td>brotli</td></tr><tr><td>bzip</td></tr><tr><td>curl</td></tr><tr><td>freetype</td></tr><tr><td>gettext</td></tr><tr><td>gmp</td></tr><tr><td>imagemagick</td></tr><tr><td>ldap</td></tr><tr><td>libargon2</td></tr><tr><td>libavif</td></tr><tr><td>libcares</td></tr><tr><td>libevent</td></tr><tr><td>openssl</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>因为给每个库适配自定义环境变量是一项特别繁琐的工作，且大部分情况下你都不需要这些库的自定义环境变量，所以我们目前只支持了部分库的自定义环境变量。</p><p>如果你需要自定义环境变量的库不在上方列表，可以通过 <a href="https://github.com/crazywhalecc/static-php-cli/issues" target="_blank" rel="noreferrer">GitHub Issue</a> 来提出需求。</p></div>`,35),i=[a];function r(s,l,n,_,h,p){return e(),t("div",null,i)}const A=d(c,[["render",r]]);export{C as __pageData,A as default};
