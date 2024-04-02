import{d as le,h as b,k as A,y as Z,o as h,c as y,m as s,t,F as L,E as N,e as $,a1 as g,a2 as G,a3 as k,a4 as te,a as ne,a5 as M,q as oe,s as ae,_ as de}from"./framework.GQ61FypF.js";const ce={type:"external","arg-type":"custom",source:"amqp","lib-depends":["librabbitmq"],"ext-depends-windows":["openssl"]},ue={type:"external",source:"apcu"},be={type:"builtin"},pe={type:"builtin","arg-type":"with-prefix","lib-depends":["bzip2"]},re={type:"builtin"},ge={type:"builtin"},xe={type:"builtin","arg-type":"with","lib-depends":["curl"],"ext-depends-windows":["zlib","openssl"]},me={type:"builtin","arg-type-windows":"with"},he={type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["libxml2","zlib"],"ext-depends-windows":["xml"]},ye={type:"external",source:"ext-ds"},ve={type:"external",source:"ext-event","arg-type":"custom","lib-depends":["libevent"],"ext-depends":["openssl"],"ext-suggests":["sockets"]},we={type:"builtin"},fe={"arg-type":"custom",type:"builtin","lib-depends-unix":["libffi"],"lib-depends-windows":["libffi-win"]},ze={type:"builtin"},qe={type:"builtin"},ke={type:"builtin","lib-suggests":["openssl"]},Ee={type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["zlib","libpng"],"ext-depends":["zlib"],"lib-suggests":["libavif","libwebp","libjpeg","freetype"]},_e={type:"builtin","arg-type":"with-prefix","lib-depends":["gettext"]},Se={type:"external","arg-type":"custom",source:"ext-glfw","lib-depends":["glfw"],"lib-depends-windows":[]},Ce={type:"builtin","arg-type":"with-prefix","lib-depends":["gmp"]},De={type:"builtin","arg-type":"with-prefix","arg-type-windows":"with","lib-depends-unix":["libiconv"],"lib-depends-windows":["libiconv-win"]},Ie={type:"external",source:"igbinary"},Le={type:"external",source:"ext-imagick","arg-type":"custom","lib-depends":["imagemagick"]},Ne={type:"builtin","arg-type":"custom","lib-depends":["imap"],"lib-suggests":["openssl"]},Oe={type:"external",source:"inotify"},Ve={type:"builtin","lib-depends":["icu"]},Pe={type:"builtin","arg-type":"with-prefix","lib-depends":["ldap"],"lib-suggests":["gmp","libsodium"],"ext-suggests":["openssl"]},Ae={type:"builtin","arg-type":"custom","ext-depends":["mbstring"],"lib-depends":["onig"]},Te={type:"builtin","arg-type":"custom"},Ue={type:"external",source:"ext-memcache","arg-type":"custom","lib-depends":["zlib"],"ext-depends":["session"]},je={type:"external",source:"memcached","arg-type":"custom","cpp-extension":!0,"lib-depends":["libmemcached"],"ext-depends":["session","zlib"]},Be={type:"external",source:"mongodb","arg-type":"custom","lib-suggests":["icu","openssl","zstd","zlib"]},$e={type:"builtin","arg-type":"with","ext-depends":["mysqlnd"]},Ge={type:"builtin","arg-type-windows":"with","lib-depends":["zlib"]},Me={type:"builtin","arg-type":"custom"},He={type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["openssl","zlib"],"ext-depends":["zlib"]},Re={type:"builtin","unix-only":!0},Fe={type:"builtin"},Ze={type:"builtin","arg-type":"with","ext-depends":["pdo","mysqlnd"]},Qe={type:"builtin","arg-type":"with-prefix","ext-depends":["pdo","pgsql"],"lib-depends":["postgresql"]},We={type:"builtin","arg-type":"with","ext-depends":["pdo","sqlite3"],"lib-depends":["sqlite"]},Ke={type:"external",source:"pdo_sqlsrv","arg-type":"with","ext-depends":["pdo","sqlsrv"]},Ye={type:"builtin","arg-type":"with-prefix","lib-depends":["postgresql"]},Je={type:"builtin","ext-depends":["zlib"]},Xe={type:"builtin","unix-only":!0},es={type:"external",source:"protobuf"},ss={type:"external",source:"rar","cpp-extension":!0},is={type:"builtin","arg-type":"with-prefix","lib-depends":["readline"]},ls={type:"external",source:"redis","arg-type":"custom","ext-suggests":["session","igbinary"],"lib-suggests":["zstd","liblz4"]},ts={type:"builtin"},ns={type:"builtin"},os={type:"external",source:"ext-simdjson","cpp-extension":!0},as={type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml"]},ds={type:"external",source:"ext-snappy","cpp-extension":!0,"arg-type":"custom","lib-depends":["snappy"],"ext-suggest":["apcu"]},cs={type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml"]},us={type:"builtin"},bs={type:"builtin","arg-type":"with","lib-depends":["libsodium"]},ps={type:"builtin","arg-type":"with-prefix","arg-type-windows":"with","lib-depends":["sqlite"]},rs={type:"external",source:"sqlsrv","lib-depends":["unixodbc"],"ext-depends-linux":["pcntl"],"cpp-extension":!0},gs={type:"external",source:"ext-ssh2","arg-type":"with-prefix","arg-type-windows":"with","lib-depends":["libssh2"],"ext-depends-windows":["openssl","zlib"]},xs={type:"external",source:"swoole","arg-type":"custom","cpp-extension":!0,"unix-only":!0,"lib-depends":["libcares","brotli","nghttp2","zlib"],"ext-depends":["openssl","curl"],"ext-suggests":["swoole-hook-pgsql","swoole-hook-mysql","swoole-hook-sqlite"]},ms={type:"external",source:"swow","arg-type":"custom","lib-suggests":["openssl","curl"],"ext-suggests":["openssl","curl"]},hs={type:"builtin","unix-only":!0},ys={type:"builtin","unix-only":!0},vs={type:"builtin"},ws={type:"builtin","arg-type":"with-prefix","lib-depends":["tidy"]},fs={type:"builtin"},zs={type:"external",source:"ext-uuid","arg-type":"with-prefix","lib-depends":["libuuid"]},qs={type:"external",source:"ext-uv","arg-type":"with-prefix","lib-depends":["libuv"],"ext-depends":["sockets"]},ks={type:"external",source:"xhprof","ext-depends":["ctype"]},Es={type:"external",source:"xlswriter","arg-type":"custom","ext-depends":["zlib","zip"]},_s={type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["libxml2"],"ext-depends-windows":["iconv"]},Ss={type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml","dom"]},Cs={type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml"]},Ds={type:"builtin","arg-type":"with-prefix","lib-depends":["libxslt"],"ext-depends":["xml","dom"]},Is={type:"external",source:"yaml","arg-type":"with-prefix","lib-depends":["libyaml"]},Ls={type:"builtin","arg-type":"with-prefix","arg-type-windows":"enable","lib-depends":["libzip"]},Ns={type:"builtin","arg-type":"custom","arg-type-windows":"enable","lib-depends":["zlib"]},Os={type:"external",source:"ext-zstd","arg-type":"custom","lib-depends":["zstd"]},Vs={amqp:ce,apcu:ue,bcmath:be,bz2:pe,calendar:re,ctype:ge,curl:xe,dba:me,dom:he,ds:ye,event:ve,exif:we,ffi:fe,fileinfo:ze,filter:qe,ftp:ke,gd:Ee,gettext:_e,glfw:Se,gmp:Ce,iconv:De,igbinary:Ie,imagick:Le,imap:Ne,inotify:Oe,intl:Ve,ldap:Pe,mbregex:Ae,mbstring:Te,memcache:Ue,memcached:je,mongodb:Be,mysqli:$e,mysqlnd:Ge,opcache:Me,openssl:He,"password-argon2":{type:"builtin","arg-type":"with-prefix","lib-depends":["libargon2"]},pcntl:Re,pdo:Fe,pdo_mysql:Ze,pdo_pgsql:Qe,pdo_sqlite:We,pdo_sqlsrv:Ke,pgsql:Ye,phar:Je,posix:Xe,protobuf:es,rar:ss,readline:is,redis:ls,session:ts,shmop:ns,simdjson:os,simplexml:as,snappy:ds,soap:cs,sockets:us,sodium:bs,sqlite3:ps,sqlsrv:rs,ssh2:gs,swoole:xs,"swoole-hook-mysql":{type:"addon","arg-type":"custom","ext-depends":["mysqlnd","pdo","pdo_mysql"],"ext-suggests":["mysqli"]},"swoole-hook-pgsql":{type:"addon","arg-type":"custom","ext-depends":["pgsql","pdo"]},"swoole-hook-sqlite":{type:"addon","arg-type":"custom","ext-depends":["sqlite3","pdo"]},swow:ms,sysvmsg:hs,sysvsem:ys,sysvshm:vs,tidy:ws,tokenizer:fs,uuid:zs,uv:qs,xhprof:ks,xlswriter:Es,xml:_s,xmlreader:Ss,xmlwriter:Cs,xsl:Ds,yaml:Is,zip:Ls,zlib:Ns,zstd:Os},Ps={source:"brotli","static-libs-unix":["libbrotlidec.a","libbrotlienc.a","libbrotlicommon.a"],"static-libs-windows":["brotlicommon.lib","brotlienc.lib","brotlidec.lib"],headers:["brotli"]},As={source:"bzip2","static-libs-unix":["libbz2.a"],"static-libs-windows":[["libbz2.lib","libbz2_a.lib"]],headers:["bzlib.h"]},Ts={source:"curl","static-libs-unix":["libcurl.a"],"static-libs-windows":["libcurl_a.lib"],headers:["curl"],"lib-depends-unix":["openssl","zlib"],"lib-depends-windows":["openssl","zlib","libssh2","nghttp2"],"lib-suggests-unix":["libssh2","brotli","nghttp2","zstd"],"lib-suggests-windows":["brotli","zstd"],frameworks:["CoreFoundation","CoreServices","SystemConfiguration"]},Us={source:"freetype","static-libs-unix":["libfreetype.a"],"headers-unix":["freetype2/freetype/freetype.h","freetype2/ft2build.h"],"lib-depends":["zlib"],"lib-suggests":["libpng","bzip2","brotli"]},js={source:"gettext","static-libs-unix":["libintl.a"],"lib-depends":["libiconv"],"lib-suggests":["ncurses","libxml2"],frameworks:["CoreFoundation"]},Bs={source:"ext-glfw","static-libs-unix":["libglfw3.a"],frameworks:["CoreVideo","OpenGL","Cocoa","IOKit"]},$s={source:"gmp","static-libs-unix":["libgmp.a"],"static-libs-windows":["libgmp.lib"],headers:["gmp.h"]},Gs={source:"icu","cpp-library":!0,"static-libs-unix":["libicui18n.a","libicuio.a","libicuuc.a","libicudata.a"]},Ms={source:"imagemagick","static-libs-unix":["libMagick++-7.Q16HDRI.a","libMagickWand-7.Q16HDRI.a","libMagickCore-7.Q16HDRI.a"],"lib-depends":["zlib","libpng","libjpeg","libwebp","freetype","libtiff"],"lib-suggests":["zstd","xz","bzip2","libzip","libxml2"]},Hs={source:"imap","static-libs-unix":["libc-client.a"],"lib-suggests":["openssl"]},Rs={source:"ldap","static-libs-unix":["liblber.a","libldap.a"],"lib-depends":["openssl","zlib","gmp","libsodium"]},Fs={source:"libargon2","static-libs-unix":["libargon2.a"]},Zs={source:"libavif","static-libs-unix":["libavif.a"]},Qs={source:"libcares","static-libs-unix":["libcares.a"],"headers-unix":["ares.h","ares_dns.h","ares_nameser.h","ares_rules.h"]},Ws={source:"libevent","static-libs-unix":["libevent.a","libevent_core.a","libevent_extra.a","libevent_openssl.a"],"lib-depends":["openssl"]},Ks={source:"libffi","static-libs-unix":["libffi.a"],"static-libs-windows":["libffi.lib"],"headers-unix":["ffi.h","ffitarget.h"],"headers-windows":["ffi.h","fficonfig.h","ffitarget.h"]},Ys={source:"libiconv","static-libs-unix":["libiconv.a","libcharset.a"],headers:["iconv.h","libcharset.h","localcharset.h"]},Js={source:"libjpeg","static-libs-unix":["libjpeg.a","libturbojpeg.a"]},Xs={source:"liblz4","static-libs-unix":["liblz4.a"]},ei={source:"libmemcached","static-libs-unix":["libmemcached.a","libmemcachedutil.a"]},si={source:"libpng","static-libs-unix":["libpng16.a"],"static-libs-windows":["libpng16_static.lib"],"headers-unix":["png.h","pngconf.h","pnglibconf.h"],"headers-windows":["png.h","pngconf.h"],"lib-depends":["zlib"]},ii={source:"librabbitmq","static-libs-unix":["librabbitmq.a"],"static-libs-windows":["rabbitmq.4.lib"],"lib-depends":["openssl"]},li={source:"libsodium","static-libs-unix":["libsodium.a"]},ti={source:"libssh2","static-libs-unix":["libssh2.a"],"static-libs-windows":["libssh2.lib"],headers:["libssh2.h","libssh2_publickey.h","libssh2_sftp.h"],"lib-depends":["openssl"],"lib-suggests":["zlib"]},ni={source:"libtiff","static-libs-unix":["libtiff.a"]},oi={source:"libuuid","static-libs-unix":["libuuid.a"]},ai={source:"libuv","static-libs-unix":["libuv.a"]},di={source:"libwebp","static-libs-unix":["libwebp.a","libwebpdecoder.a","libwebpdemux.a","libwebpmux.a","libsharpyuv.a"]},ci={source:"libxml2","static-libs-unix":["libxml2.a"],"static-libs-windows":["libxml2s.lib","libxml2_a.lib"],headers:["libxml2"],"lib-depends-unix":["libiconv"],"lib-suggests-unix":["xz","icu","zlib"],"lib-depends-windows":["libiconv-win"],"lib-suggests-windows":["zlib"]},ui={source:"libxslt","static-libs-unix":["libxslt.a","libexslt.a"],"lib-depends":["libxml2"]},bi={source:"libyaml","static-libs-unix":["libyaml.a"],"static-libs-windows":["yaml.lib"],headers:["yaml.h"]},pi={source:"libzip","static-libs-unix":["libzip.a"],"static-libs-windows":[["zip.lib","libzip_a.lib"]],headers:["zip.h","zipconf.h"],"lib-depends":["zlib"],"lib-suggests":["bzip2","xz","zstd","openssl"]},ri={source:"ncurses","static-libs-unix":["libncurses.a"]},gi={source:"nghttp2","static-libs-unix":["libnghttp2.a"],"static-libs-windows":["nghttp2.lib"],headers:["nghttp2"],"lib-depends":["zlib","openssl"],"lib-suggests":["libxml2"]},xi={source:"onig","static-libs-unix":["libonig.a"],"static-libs-windows":["onig.lib","onig_a.lib"],headers:["oniggnu.h","oniguruma.h"]},mi={source:"openssl","static-libs-unix":["libssl.a","libcrypto.a"],"static-libs-windows":["libssl.lib","libcrypto.lib"],headers:["openssl"],"lib-depends":["zlib"]},hi={source:"postgresql","static-libs-unix":["libpq.a","libpgport.a","libpgcommon.a"],"lib-depends":["libiconv","libxml2","openssl","zlib","readline"],"lib-suggests":["icu","libxslt","ldap","zstd"]},yi={source:"readline","static-libs-unix":["libreadline.a"],"lib-depends":["ncurses"]},vi={source:"snappy","static-libs-unix":["libsnappy.a"],"headers-unix":["snappy.h","snappy-c.h","snappy-sinksource.h","snappy-stubs-public.h"],"lib-depends":["zlib"]},wi={source:"sqlite","static-libs-unix":["libsqlite3.a"],"static-libs-windows":["libsqlite3_a.lib"],headers:["sqlite3.h","sqlite3ext.h"]},fi={source:"tidy","static-libs-unix":["libtidy.a"]},zi={source:"unixodbc","static-libs-unix":["libodbc.a","libodbccr.a","libodbcinst.a"],"lib-depends":["libiconv"]},qi={source:"xz","static-libs-unix":["liblzma.a"],"static-libs-windows":[["liblzma.lib","liblzma_a.lib"]],"headers-unix":["lzma"],"headers-windows":["lzma","lzma.h"],"lib-depends":["libiconv"]},ki={source:"zlib","static-libs-unix":["libz.a"],"static-libs-windows":["zlib_a.lib"],headers:["zlib.h","zconf.h"]},Ei={source:"zstd","static-libs-unix":["libzstd.a"],"static-libs-windows":[["zstd.lib","zstd_static.lib"]],"headers-unix":["zdict.h","zstd.h","zstd_errors.h"],"headers-windows":["zstd.h","zstd_errors.h"]},_i={brotli:Ps,bzip2:As,curl:Ts,freetype:Us,gettext:js,glfw:Bs,gmp:$s,icu:Gs,imagemagick:Ms,imap:Hs,ldap:Rs,libargon2:Fs,libavif:Zs,libcares:Qs,libevent:Ws,libffi:Ks,"libffi-win":{source:"libffi-win","static-libs-windows":["libffi.lib"],"headers-windows":["ffi.h","ffitarget.h","fficonfig.h"]},libiconv:Ys,"libiconv-win":{source:"libiconv-win","static-libs-windows":["libiconv.lib","libiconv_a.lib"]},libjpeg:Js,liblz4:Xs,libmemcached:ei,libpng:si,librabbitmq:ii,libsodium:li,libssh2:ti,libtiff:ni,libuuid:oi,libuv:ai,libwebp:di,libxml2:ci,libxslt:ui,libyaml:bi,libzip:pi,ncurses:ri,nghttp2:gi,onig:xi,openssl:mi,"pkg-config":{source:"pkg-config"},postgresql:hi,readline:yi,snappy:vi,sqlite:wi,tidy:fi,unixodbc:zi,xz:qi,zlib:ki,zstd:Ei};function E(e,i,o,d){return e.os==="linux"?e[i][o][d+"-linux"]??e[i][o][d+"-unix"]??e[i][o][d]??[]:e.os==="macos"?e[i][o][d+"-macos"]??e[i][o][d+"-unix"]??e[i][o][d]??[]:[]}function Q(e,i){return E(e,"ext",i,"ext-depends")}function Si(e,i){return E(e,"ext",i,"ext-suggests")}function Ci(e,i){return E(e,"ext",i,"lib-depends")}function Di(e,i){return E(e,"ext",i,"lib-suggests")}function W(e,i){return E(e,"lib",i,"lib-depends")}function Ii(e,i){return E(e,"lib",i,"lib-suggests")}function Li(e,i){const o=[],d=new Set,x=[];i.forEach(a=>{d.has(a)||Vi(e,a,d,o)});const w=[];return o.forEach(a=>{i.indexOf(a)===-1&&x.push(a),[...Ci(e,a),...Di(e,a)].forEach(V=>{w.indexOf(V)===-1&&w.push(V)})}),{exts:o,libs:Ni(e,w),notIncludedExts:x}}function Ni(e,i){const o=[],d=new Set;return i.forEach(x=>{d.has(x)||(console.log("before visited"),console.log(d),Oi(e,x,d,o),console.log("after visited"),console.log(d))}),o}function Oi(e,i,o,d){if(o.has(i))return;o.add(i),[...W(e,i),...Ii(e,i)].forEach(w=>{K(e,w,o,d)}),d.push(i)}function K(e,i,o,d){o.has(i)||(o.add(i),W(e,i).forEach(x=>{K(e,x,o,d)}),d.push(i))}function Y(e,i,o,d){o.has(o)||(o.add(i),Q(e,i).forEach(x=>{Y(e,x,o,d)}),d.push(i))}function Vi(e,i,o,d){if(o.has(i))return;o.add(i),[...Q(e,i),...Si(e,i)].forEach(w=>{Y(e,w,o,d)}),d.push(i)}const O=e=>(oe("data-v-1cdb3adf"),e=e(),ae(),e),Pi={class:"option-line"},Ai=["id","value","disabled"],Ti=["for"],Ui={class:"box"},ji={class:"ext-item"},Bi=["id","value","disabled"],$i=["for"],Gi={class:"details custom-block"},Mi={class:"box"},Hi={class:"ext-item"},Ri=["id","value","disabled"],Fi=["for"],Zi={class:"tip custom-block"},Qi=O(()=>s("p",{class:"custom-block-title"},"TIP",-1)),Wi={class:"box"},Ki={class:"ext-item"},Yi=["id","value"],Ji=["for"],Xi={key:0,class:"warning custom-block"},el=O(()=>s("p",{class:"custom-block-title"},"WARNING",-1)),sl={class:"option-line"},il={class:"option-title"},ll={value:"native"},tl={value:"spc"},nl={value:"docker"},ol={key:1,class:"option-line"},al={class:"option-title"},dl=O(()=>s("option",{value:"x86_64"},"x86_64 (amd64)",-1)),cl=O(()=>s("option",{value:"aarch64"},"aarch64 (arm64)",-1)),ul=[dl,cl],bl={class:"option-line"},pl={class:"option-title"},rl=["value"],gl={class:"option-line"},xl={class:"option-title"},ml={for:"debug-yes"},hl={for:"debug-no"},yl={class:"option-line"},vl={class:"option-title"},wl={for:"zts-yes"},fl={for:"zts-no"},zl={class:"option-line"},ql={class:"option-title"},kl={for:"show-download-yes"},El={for:"show-download-no"},_l=["placeholder"],Sl={key:2,class:"command-container"},Cl={class:"command-preview"},Dl=O(()=>s("br",null,null,-1)),Il={key:3,class:"command-container"},Ll={class:"command-preview"},Nl={key:4,class:"command-container"},Ol={class:"command-preview"},Vl={class:"command-container"},Pl={class:"command-preview"},Al={name:"CliGenerator"},Tl=le({...Al,props:{lang:{type:String,default:"zh"}},setup(e){const i=b(Vs),o=b(_i),d=b([]),x=[{os:"linux",label:"Linux",disabled:!1},{os:"macos",label:"macOS",disabled:!1},{os:"windows",label:"Windows",disabled:!0}],w=["7.4","8.0","8.1","8.2","8.3"],a={zh:{selectExt:"选择扩展",buildTarget:"选择编译目标",buildOptions:"编译选项",buildEnvironment:"编译环境",buildEnvNative:"本地构建（Git 源码）",buildEnvSpc:"本地构建（独立 spc 二进制）",buildEnvDocker:"Alpine Docker 构建",useDebug:"是否开启调试输出",yes:"是",no:"否",resultShow:"结果展示",selectCommon:"选择常用扩展",selectNone:"全部取消选择",useZTS:"是否编译线程安全版",hardcodedINI:"硬编码 INI 选项",hardcodedINIPlacehoder:"如需要硬编码 ini，每行写一个，例如：memory_limit=2G",resultShowDownload:"是否展示仅下载对应扩展依赖的命令",downloadExtOnlyCommand:"只下载对应扩展的依赖包命令",downloadAllCommand:"下载所有依赖包命令",compileCommand:"编译命令",downloadPhpVersion:"下载 PHP 版本",downloadSPCBinaryCommand:"下载 spc 二进制命令",selectedArch:"选择系统架构",selectedSystem:"选择操作系统",buildLibs:"要构建的库",depTips:"选择扩展后，不可选中的项目为必需的依赖，编译的依赖库列表中可选的为现有扩展和依赖库的可选依赖。选择可选依赖后，将生成 --with-libs 参数。",microUnavailable:"micro 不支持 PHP 7.4 及更早版本！"},en:{selectExt:"Select Extensions",buildTarget:"Build Target",buildOptions:"Build Options",buildEnvironment:"Build Environment",buildEnvNative:"Native build (Git source code)",buildEnvSpc:"Native build (standalone spc binary)",buildEnvDocker:"Alpine docker build",useDebug:"Enable debug message",yes:"Yes",no:"No",resultShow:"Result",selectCommon:"Select common extensions",selectNone:"Unselect all",useZTS:"Enable ZTS",hardcodedINI:"Hardcoded INI options",hardcodedINIPlacehoder:"If you need to hardcode ini, write one per line, for example: memory_limit=2G",resultShowDownload:"Download with corresponding extension dependencies",downloadExtOnlyCommand:"Download sources by extensions command",downloadAllCommand:"Download all sources command",compileCommand:"Compile command",downloadPhpVersion:"Download PHP version",downloadSPCBinaryCommand:"Download spc binary command",selectedArch:"Select build architecture",selectedSystem:"Select Build OS",buildLibs:"Select Dependencies",depTips:"After selecting the extensions, the unselectable items are essential dependencies. In the compiled dependencies list, optional dependencies consist of existing extensions and optional dependencies of libraries. Optional dependencies will be added in --with-libs parameter.",microUnavailable:"Micro does not support PHP 7.4 and earlier versions!"}},H=["cli","fpm","micro","embed","all"],V=()=>{m.value=["apcu","bcmath","calendar","ctype","curl","dba","dom","exif","filter","fileinfo","gd","iconv","intl","mbstring","mbregex","mysqli","mysqlnd","openssl","opcache","pcntl","pdo","pdo_mysql","pdo_sqlite","pdo_pgsql","pgsql","phar","posix","readline","redis","session","simplexml","sockets","sodium","sqlite3","tokenizer","xml","xmlreader","xmlwriter","xsl","zip","zlib"]},R=A(()=>m.value.join(",")),J=A(()=>{const p=z.value.filter(n=>P.value.indexOf(n)===-1);return p.length>0?' --with-libs="'+p.join(",")+'"':""}),m=b([]),z=b([]),T=b([]),P=b([]),f=b(["cli"]),_=b("native"),S=b("8.2"),q=b(0),C=b(0),D=b(1),U=b(""),v=b("linux"),j=b("x86_64"),B=A(()=>{switch(_.value){case"native":return"bin/spc";case"spc":return"./spc";case"docker":return"bin/spc-alpine-docker";default:return""}}),F=b("--build-cli"),X=A(()=>{const p=U.value.split(`
`);let n=[];return p.forEach(l=>{l.indexOf("=")>=1&&n.push(l)})," "+n.map(l=>'-I "'+l+'"').join(" ")}),ee=p=>{let n;f.value.indexOf("all")!==-1&&p.target.value==="all"?f.value=["all"]:(n=f.value.indexOf("all"))!==-1&&p.target.value!=="all"&&f.value.splice(n,1),F.value=f.value.map(l=>"--build-"+l).join(" ")},se=p=>{const n=new Set,l=u=>{let c=[];if(v.value==="linux"){if(c=i.value[u]["ext-depends-linux"]??i.value[u]["ext-depends-unix"]??i.value[u]["ext-depends"]??[],c.length===0)return}else if(v.value==="macos"&&(c=i.value[u]["ext-depends-macos"]??i.value[u]["ext-depends-unix"]??i.value[u]["ext-depends"]??[],c.length===0))return;c.forEach(r=>{n.add(r),l(r)})};return p.forEach(u=>{l(u)}),Array.from(n)},ie=p=>{const n=new Set,l=c=>{let r=[];if(v.value==="linux"){if(r=o.value[c]["lib-depends-linux"]??o.value[c]["lib-depends-unix"]??o.value[c]["lib-depends"]??[],r.length===0)return}else if(v.value==="macos"&&(r=o.value[c]["lib-depends-macos"]??o.value[c]["lib-depends-unix"]??o.value[c]["lib-depends"]??[],r.length===0))return;r.forEach(I=>{n.add(I),l(I)})},u=c=>{let r=[];if(v.value==="linux"){if(r=i.value[c]["lib-depends-linux"]??i.value[c]["lib-depends-unix"]??i.value[c]["lib-depends"]??[],r.length===0)return}else if(v.value==="macos"&&(r=i.value[c]["lib-depends-macos"]??i.value[c]["lib-depends-unix"]??i.value[c]["lib-depends"]??[],r.length===0))return;r.forEach(I=>{n.add(I),l(I)})};return p.forEach(c=>{u(c)}),Array.from(n)};return Z(v,()=>m.value=[]),Z(m,p=>{T.value=se(p),T.value.forEach(l=>{m.value.indexOf(l)===-1&&m.value.push(l)}),m.value.sort(),console.log("检测到变化！"),console.log(p);const n=Li({ext:i.value,lib:o.value,os:v.value},m.value);d.value=n.libs.sort(),z.value=[],P.value=ie(n.exts),P.value.forEach(l=>{z.value.indexOf(l)===-1&&z.value.push(l)})}),(p,n)=>(h(),y("div",null,[s("h2",null,t(a[e.lang].selectedSystem),1),s("div",Pi,[(h(),y(L,null,N(x,(l,u)=>s("span",{key:u,style:{"margin-right":"4px"}},[g(s("input",{type:"radio",id:"os-"+l.os,value:l.os,disabled:l.disabled===!0,"onUpdate:modelValue":n[0]||(n[0]=c=>v.value=c)},null,8,Ai),[[k,v.value]]),s("label",{for:"os-"+l.os},t(l.label),9,Ti)])),64))]),s("h2",null,t(a[e.lang].selectExt)+t(m.value.length>0?" ("+m.value.length+")":""),1),s("div",Ui,[(h(!0),y(L,null,N(i.value,(l,u)=>(h(),y("div",ji,[g(s("input",{type:"checkbox",id:u,value:u,"onUpdate:modelValue":n[1]||(n[1]=c=>m.value=c),disabled:T.value.indexOf(u)!==-1},null,8,Bi),[[M,m.value]]),s("label",{for:u},t(u),9,$i)]))),256))]),s("div",{class:"my-btn",onClick:V},t(a[e.lang].selectCommon),1),s("div",{class:"my-btn",onClick:n[2]||(n[2]=l=>m.value=[])},t(a[e.lang].selectNone),1),s("details",Gi,[s("summary",null,t(a[e.lang].buildLibs)+t(z.value.length>0?" ("+z.value.length+")":""),1),s("div",Mi,[(h(!0),y(L,null,N(d.value,(l,u)=>(h(),y("div",Hi,[g(s("input",{type:"checkbox",id:u,value:l,"onUpdate:modelValue":n[3]||(n[3]=c=>z.value=c),disabled:P.value.indexOf(l)!==-1},null,8,Ri),[[M,z.value]]),s("label",{for:u},t(l),9,Fi)]))),256))])]),s("div",Zi,[Qi,s("p",null,t(a[e.lang].depTips),1)]),s("h2",null,t(a[e.lang].buildTarget),1),s("div",Wi,[(h(),y(L,null,N(H,l=>s("div",Ki,[g(s("input",{type:"checkbox",id:"build_"+l,value:l,"onUpdate:modelValue":n[4]||(n[4]=u=>f.value=u),onChange:ee},null,40,Yi),[[M,f.value]]),s("label",{for:"build_"+l},t(l),9,Ji)])),64))]),S.value==="7.4"&&(f.value.indexOf("micro")!==-1||f.value.indexOf("all")!==-1)?(h(),y("div",Xi,[el,s("p",null,t(a[e.lang].microUnavailable),1)])):$("",!0),s("h2",null,t(a[e.lang].buildOptions),1),s("div",sl,[s("span",il,t(a[e.lang].buildEnvironment),1),g(s("select",{"onUpdate:modelValue":n[5]||(n[5]=l=>_.value=l)},[s("option",ll,t(a[e.lang].buildEnvNative),1),s("option",tl,t(a[e.lang].buildEnvSpc),1),s("option",nl,t(a[e.lang].buildEnvDocker),1)],512),[[G,_.value]])]),_.value==="spc"?(h(),y("div",ol,[s("span",al,t(a[e.lang].selectedArch),1),g(s("select",{"onUpdate:modelValue":n[6]||(n[6]=l=>j.value=l)},ul,512),[[G,j.value]])])):$("",!0),s("div",bl,[s("span",pl,t(a[e.lang].downloadPhpVersion),1),g(s("select",{"onUpdate:modelValue":n[7]||(n[7]=l=>S.value=l)},[(h(),y(L,null,N(w,l=>s("option",{value:l},t(l),9,rl)),64))],512),[[G,S.value]])]),s("div",gl,[s("span",xl,t(a[e.lang].useDebug),1),g(s("input",{type:"radio",id:"debug-yes",value:1,"onUpdate:modelValue":n[8]||(n[8]=l=>q.value=l)},null,512),[[k,q.value]]),s("label",ml,t(a[e.lang].yes),1),g(s("input",{type:"radio",id:"debug-no",value:0,"onUpdate:modelValue":n[9]||(n[9]=l=>q.value=l)},null,512),[[k,q.value]]),s("label",hl,t(a[e.lang].no),1)]),s("div",yl,[s("span",vl,t(a[e.lang].useZTS),1),g(s("input",{type:"radio",id:"zts-yes",value:1,"onUpdate:modelValue":n[10]||(n[10]=l=>C.value=l)},null,512),[[k,C.value]]),s("label",wl,t(a[e.lang].yes),1),g(s("input",{type:"radio",id:"zts-no",value:0,"onUpdate:modelValue":n[11]||(n[11]=l=>C.value=l)},null,512),[[k,C.value]]),s("label",fl,t(a[e.lang].no),1)]),s("div",zl,[s("span",ql,t(a[e.lang].resultShowDownload),1),g(s("input",{type:"radio",id:"show-download-yes",value:1,"onUpdate:modelValue":n[12]||(n[12]=l=>D.value=l)},null,512),[[k,D.value]]),s("label",kl,t(a[e.lang].yes),1),g(s("input",{type:"radio",id:"show-download-no",value:0,"onUpdate:modelValue":n[13]||(n[13]=l=>D.value=l)},null,512),[[k,D.value]]),s("label",El,t(a[e.lang].no),1)]),s("h2",null,t(a[e.lang].hardcodedINI),1),g(s("textarea",{class:"textarea",placeholder:a[e.lang].hardcodedINIPlacehoder,"onUpdate:modelValue":n[14]||(n[14]=l=>U.value=l),rows:"5"},null,8,_l),[[te,U.value]]),s("h2",null,t(a[e.lang].resultShow),1),_.value==="spc"?(h(),y("div",Sl,[s("b",null,t(a[e.lang].downloadSPCBinaryCommand),1),s("div",Cl,[ne(" curl -o spc.tgz https://dl.static-php.dev/static-php-cli/spc-bin/nightly/spc-"+t(v.value)+"-"+t(j.value)+".tar.gz && tar -zxvf spc.tgz && rm spc.tgz",1),Dl])])):$("",!0),D.value?(h(),y("div",Il,[s("b",null,t(a[e.lang].downloadExtOnlyCommand),1),s("div",Ll,t(B.value)+" download --with-php="+t(S.value)+' --for-extensions "'+t(R.value)+'"'+t(q.value?" --debug":""),1)])):(h(),y("div",Nl,[s("b",null,t(a[e.lang].downloadAllCommand),1),s("div",Ol,t(B.value)+" download --all --with-php="+t(S.value)+t(q.value?" --debug":""),1)])),s("div",Vl,[s("b",null,t(a[e.lang].compileCommand),1),s("div",Pl,t(B.value)+" build "+t(F.value)+' "'+t(R.value)+'"'+t(J.value)+t(q.value?" --debug":"")+t(C.value?" --enable-zts":"")+t(X.value),1)])]))}}),jl=de(Tl,[["__scopeId","data-v-1cdb3adf"]]);export{jl as C};
