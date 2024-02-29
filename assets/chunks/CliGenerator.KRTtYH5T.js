import{d as le,h as b,k as A,y as Z,o as m,c as y,m as s,t,F as L,E as N,e as j,a1 as g,a2 as G,a3 as E,a4 as te,a as ne,a5 as M,q as oe,s as ae,_ as de}from"./framework.GQ61FypF.js";const ce={type:"external",source:"apcu"},ue={type:"builtin"},be={type:"builtin","arg-type":"with-prefix","lib-depends":["bzip2"]},pe={type:"builtin"},re={type:"builtin"},ge={type:"builtin","arg-type":"with","lib-depends":["curl"],"ext-depends-windows":["zlib","openssl"]},xe={type:"builtin","arg-type-windows":"with"},he={type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["libxml2","zlib"]},me={type:"external",source:"ext-event","arg-type":"custom","lib-depends":["libevent"],"ext-depends":["openssl"],"ext-suggests":["sockets"]},ye={type:"builtin"},ve={"arg-type":"custom",type:"builtin","lib-depends-unix":["libffi"],"lib-depends-windows":["libffi-win"]},we={type:"builtin"},fe={type:"builtin"},ze={type:"builtin","lib-suggests":["openssl"]},ke={type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["zlib","libpng"],"ext-depends":["zlib"],"lib-suggests":["libavif","libwebp","libjpeg","freetype"]},Ee={type:"builtin","arg-type":"with-prefix","lib-depends":["gettext"]},qe={type:"external","arg-type":"custom",source:"ext-glfw","lib-depends":["glfw"],"lib-depends-windows":[]},_e={type:"builtin","arg-type":"with-prefix","lib-depends":["gmp"]},Se={type:"builtin","arg-type":"with-prefix","arg-type-windows":"with","lib-depends-unix":["libiconv"],"lib-depends-windows":["libiconv-win"]},Ce={type:"external",source:"igbinary"},De={type:"external",source:"ext-imagick","arg-type":"custom","lib-depends":["imagemagick"]},Ie={type:"builtin","arg-type":"custom","lib-depends":["imap"],"lib-suggests":["openssl"]},Le={type:"external",source:"inotify"},Ne={type:"builtin","lib-depends":["icu"]},Oe={type:"builtin","arg-type":"with-prefix","lib-depends":["ldap"],"lib-suggests":["gmp","libsodium"],"ext-suggests":["openssl"]},Ve={type:"builtin","arg-type":"custom","ext-depends":["mbstring"],"lib-depends":["onig"]},Pe={type:"builtin","arg-type":"custom"},Ae={type:"external",source:"ext-memcache","arg-type":"custom","lib-depends":["zlib"],"ext-depends":["session"]},Te={type:"external",source:"memcached","arg-type":"custom","cpp-extension":!0,"lib-depends":["libmemcached"],"ext-depends":["session","zlib"]},Ue={type:"external",source:"mongodb","arg-type":"custom","lib-suggests":["icu","openssl","zstd","zlib"]},Be={type:"builtin","arg-type":"with","ext-depends":["mysqlnd"]},$e={type:"builtin","arg-type-windows":"with","lib-depends":["zlib"]},je={type:"builtin","arg-type":"custom"},Ge={type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["openssl","zlib"],"ext-depends":["zlib"]},Me={type:"builtin","unix-only":!0},He={type:"builtin"},Re={type:"builtin","arg-type":"with","ext-depends":["pdo","mysqlnd"]},Fe={type:"builtin","arg-type":"with-prefix","ext-depends":["pdo","pgsql"],"lib-depends":["postgresql"]},Ze={type:"builtin","arg-type":"with","ext-depends":["pdo","sqlite3"],"lib-depends":["sqlite"]},Qe={type:"builtin","arg-type":"with-prefix","lib-depends":["postgresql"]},We={type:"builtin","ext-depends":["zlib"]},Ke={type:"builtin","unix-only":!0},Ye={type:"external",source:"protobuf"},Je={type:"external",source:"rar","cpp-extension":!0},Xe={type:"builtin","arg-type":"with-prefix","lib-depends":["readline"]},es={type:"external",source:"redis","arg-type":"custom","ext-suggests":["session","igbinary"],"lib-suggests":["zstd","liblz4"]},ss={type:"builtin"},is={type:"builtin"},ls={type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml"]},ts={type:"external",source:"ext-snappy","cpp-extension":!0,"arg-type":"custom","lib-depends":["snappy"],"ext-suggest":["apcu"]},ns={type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml"]},os={type:"builtin"},as={type:"builtin","arg-type":"with","lib-depends":["libsodium"]},ds={type:"builtin","arg-type":"with-prefix","arg-type-windows":"with","lib-depends":["sqlite"]},cs={type:"external",source:"sqlsrv","lib-depends":["unixodbc"],"ext-depends-linux":["pcntl"],"cpp-extension":!0},us={type:"external",source:"ext-ssh2","arg-type":"with-prefix","arg-type-windows":"with","lib-depends":["libssh2"],"ext-depends-windows":["openssl","zlib"]},bs={type:"external",source:"swoole","arg-type":"custom","cpp-extension":!0,"unix-only":!0,"lib-depends":["libcares","brotli","nghttp2","zlib"],"ext-depends":["openssl","curl"],"ext-suggests":["swoole-hook-pgsql","swoole-hook-mysql","swoole-hook-sqlite"]},ps={type:"external",source:"swow","arg-type":"custom","lib-suggests":["openssl","curl"],"ext-suggests":["openssl","curl"]},rs={type:"builtin","unix-only":!0},gs={type:"builtin","unix-only":!0},xs={type:"builtin"},hs={type:"builtin","arg-type":"with-prefix","lib-depends":["tidy"]},ms={type:"builtin"},ys={type:"external",source:"ext-uv","arg-type":"with-prefix","lib-depends":["libuv"],"ext-depends":["sockets"]},vs={type:"external",source:"xhprof","ext-depends":["ctype"]},ws={type:"external",source:"xlswriter","arg-type":"custom","ext-depends":["zlib","zip"]},fs={type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["libxml2"],"ext-depends-windows":["iconv"]},zs={type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml","dom"]},ks={type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml"]},Es={type:"builtin","arg-type":"with-prefix","lib-depends":["libxslt"],"ext-depends":["xml","dom"]},qs={type:"external",source:"yaml","arg-type":"with-prefix","lib-depends":["libyaml"]},_s={type:"builtin","arg-type":"with-prefix","arg-type-windows":"enable","lib-depends":["libzip"]},Ss={type:"builtin","arg-type":"custom","arg-type-windows":"enable","lib-depends":["zlib"]},Cs={type:"external",source:"ext-zstd","arg-type":"custom","lib-depends":["zstd"]},Ds={apcu:ce,bcmath:ue,bz2:be,calendar:pe,ctype:re,curl:ge,dba:xe,dom:he,event:me,exif:ye,ffi:ve,fileinfo:we,filter:fe,ftp:ze,gd:ke,gettext:Ee,glfw:qe,gmp:_e,iconv:Se,igbinary:Ce,imagick:De,imap:Ie,inotify:Le,intl:Ne,ldap:Oe,mbregex:Ve,mbstring:Pe,memcache:Ae,memcached:Te,mongodb:Ue,mysqli:Be,mysqlnd:$e,opcache:je,openssl:Ge,"password-argon2":{type:"builtin","arg-type":"with-prefix","lib-depends":["libargon2"]},pcntl:Me,pdo:He,pdo_mysql:Re,pdo_pgsql:Fe,pdo_sqlite:Ze,pgsql:Qe,phar:We,posix:Ke,protobuf:Ye,rar:Je,readline:Xe,redis:es,session:ss,shmop:is,simplexml:ls,snappy:ts,soap:ns,sockets:os,sodium:as,sqlite3:ds,sqlsrv:cs,ssh2:us,swoole:bs,"swoole-hook-mysql":{type:"addon","arg-type":"custom","ext-depends":["mysqlnd","pdo","pdo_mysql"],"ext-suggests":["mysqli"]},"swoole-hook-pgsql":{type:"addon","arg-type":"custom","ext-depends":["pgsql","pdo"]},"swoole-hook-sqlite":{type:"addon","arg-type":"custom","ext-depends":["sqlite3","pdo"]},swow:ps,sysvmsg:rs,sysvsem:gs,sysvshm:xs,tidy:hs,tokenizer:ms,uv:ys,xhprof:vs,xlswriter:ws,xml:fs,xmlreader:zs,xmlwriter:ks,xsl:Es,yaml:qs,zip:_s,zlib:Ss,zstd:Cs},Is={source:"brotli","static-libs-unix":["libbrotlidec.a","libbrotlienc.a","libbrotlicommon.a"],"static-libs-windows":["brotlicommon.lib","brotlienc.lib","brotlidec.lib"],headers:["brotli"]},Ls={source:"bzip2","static-libs-unix":["libbz2.a"],"static-libs-windows":[["libbz2.lib","libbz2_a.lib"]],headers:["bzlib.h"]},Ns={source:"curl","static-libs-unix":["libcurl.a"],"static-libs-windows":["libcurl.lib"],headers:["curl"],"lib-depends-unix":["openssl","zlib"],"lib-depends-windows":["openssl","zlib","libssh2","nghttp2"],"lib-suggests-unix":["libssh2","brotli","nghttp2","zstd"],"lib-suggests-windows":["brotli","zstd"],frameworks:["CoreFoundation","CoreServices","SystemConfiguration"]},Os={source:"freetype","static-libs-unix":["libfreetype.a"],"headers-unix":["freetype2/freetype/freetype.h","freetype2/ft2build.h"],"lib-depends":["zlib"],"lib-suggests":["libpng","bzip2","brotli"]},Vs={source:"gettext","static-libs-unix":["libintl.a"],"lib-depends":["libiconv"],"lib-suggests":["ncurses","libxml2"],frameworks:["CoreFoundation"]},Ps={source:"ext-glfw","static-libs-unix":["libglfw3.a"],frameworks:["CoreVideo","OpenGL","Cocoa","IOKit"]},As={source:"gmp","static-libs-unix":["libgmp.a"],"static-libs-windows":["libgmp.lib"],headers:["gmp.h"]},Ts={source:"icu","cpp-library":!0,"static-libs-unix":["libicui18n.a","libicuio.a","libicuuc.a","libicudata.a"]},Us={source:"imagemagick","static-libs-unix":["libMagick++-7.Q16HDRI.a","libMagickWand-7.Q16HDRI.a","libMagickCore-7.Q16HDRI.a"],"lib-depends":["zlib","libpng","libjpeg","libwebp","freetype"],"lib-suggests":["zstd","xz","bzip2","libzip","libxml2"]},Bs={source:"imap","static-libs-unix":["libc-client.a"],"lib-suggests":["openssl"]},$s={source:"ldap","static-libs-unix":["liblber.a","libldap.a"],"lib-depends":["openssl","zlib","gmp","libsodium"]},js={source:"libargon2","static-libs-unix":["libargon2.a"]},Gs={source:"libavif","static-libs-unix":["libavif.a"]},Ms={source:"libcares","static-libs-unix":["libcares.a"],"headers-unix":["ares.h","ares_dns.h","ares_nameser.h","ares_rules.h"]},Hs={source:"libevent","static-libs-unix":["libevent.a","libevent_core.a","libevent_extra.a","libevent_openssl.a"],"lib-depends":["openssl"]},Rs={source:"libffi","static-libs-unix":["libffi.a"],"static-libs-windows":["libffi.lib"],"headers-unix":["ffi.h","ffitarget.h"],"headers-windows":["ffi.h","fficonfig.h","ffitarget.h"]},Fs={source:"libiconv","static-libs-unix":["libiconv.a","libcharset.a"],headers:["iconv.h","libcharset.h","localcharset.h"]},Zs={source:"libjpeg","static-libs-unix":["libjpeg.a","libturbojpeg.a"]},Qs={source:"liblz4","static-libs-unix":["liblz4.a"]},Ws={source:"libmemcached","static-libs-unix":["libmemcached.a","libmemcachedutil.a"]},Ks={source:"libpng","static-libs-unix":["libpng16.a"],"static-libs-windows":["libpng16_static.lib"],"headers-unix":["png.h","pngconf.h","pnglibconf.h"],"headers-windows":["png.h","pngconf.h"],"lib-depends":["zlib"]},Ys={source:"libsodium","static-libs-unix":["libsodium.a"]},Js={source:"libssh2","static-libs-unix":["libssh2.a"],"static-libs-windows":["libssh2.lib"],headers:["libssh2.h","libssh2_publickey.h","libssh2_sftp.h"],"lib-depends":["openssl"],"lib-suggests":["zlib"]},Xs={source:"libuv","static-libs-unix":["libuv.a"]},ei={source:"libwebp","static-libs-unix":["libwebp.a","libwebpdecoder.a","libwebpdemux.a","libwebpmux.a","libsharpyuv.a"]},si={source:"libxml2","static-libs-unix":["libxml2.a"],"static-libs-windows":["libxml2s.lib","libxml2_a.lib"],headers:["libxml2"],"lib-depends-unix":["libiconv"],"lib-suggests-unix":["xz","icu","zlib"],"lib-depends-windows":["libiconv-win"],"lib-suggests-windows":["zlib"]},ii={source:"libxslt","static-libs-unix":["libxslt.a","libexslt.a"],"lib-depends":["libxml2"]},li={source:"libyaml","static-libs-unix":["libyaml.a"],"static-libs-windows":["yaml.lib"],headers:["yaml.h"]},ti={source:"libzip","static-libs-unix":["libzip.a"],"static-libs-windows":[["zip.lib","libzip_a.lib"]],headers:["zip.h","zipconf.h"],"lib-depends":["zlib"],"lib-suggests":["bzip2","xz","zstd","openssl"]},ni={source:"ncurses","static-libs-unix":["libncurses.a"]},oi={source:"nghttp2","static-libs-unix":["libnghttp2.a"],"static-libs-windows":["nghttp2.lib"],headers:["nghttp2"],"lib-depends":["zlib","openssl"],"lib-suggests":["libxml2"]},ai={source:"onig","static-libs-unix":["libonig.a"],"static-libs-windows":["onig.lib","onig_a.lib"],headers:["oniggnu.h","oniguruma.h"]},di={source:"openssl","static-libs-unix":["libssl.a","libcrypto.a"],"static-libs-windows":["libssl.lib","libcrypto.lib"],headers:["openssl"],"lib-depends":["zlib"]},ci={source:"postgresql","static-libs-unix":["libpq.a","libpgport.a","libpgcommon.a"],"lib-depends":["libiconv","libxml2","openssl","zlib","readline"],"lib-suggests":["icu","libxslt","ldap","zstd"]},ui={source:"readline","static-libs-unix":["libreadline.a"],"lib-depends":["ncurses"]},bi={source:"snappy","static-libs-unix":["libsnappy.a"],"headers-unix":["snappy.h","snappy-c.h","snappy-sinksource.h","snappy-stubs-public.h"],"lib-depends":["zlib"]},pi={source:"sqlite","static-libs-unix":["libsqlite3.a"],"static-libs-windows":["libsqlite3_a.lib"],headers:["sqlite3.h","sqlite3ext.h"]},ri={source:"tidy","static-libs-unix":["libtidy.a"]},gi={source:"unixodbc","static-libs-unix":["libodbc.a","libodbccr.a","libodbcinst.a"],"lib-depends":["libiconv"]},xi={source:"xz","static-libs-unix":["liblzma.a"],"static-libs-windows":[["liblzma.lib","liblzma_a.lib"]],"headers-unix":["lzma"],"headers-windows":["lzma","lzma.h"],"lib-depends":["libiconv"]},hi={source:"zlib","static-libs-unix":["libz.a"],"static-libs-windows":["zlib_a.lib"],headers:["zlib.h","zconf.h"]},mi={source:"zstd","static-libs-unix":["libzstd.a"],"static-libs-windows":[["zstd.lib","zstd_static.lib"]],"headers-unix":["zdict.h","zstd.h","zstd_errors.h"],"headers-windows":["zstd.h","zstd_errors.h"]},yi={brotli:Is,bzip2:Ls,curl:Ns,freetype:Os,gettext:Vs,glfw:Ps,gmp:As,icu:Ts,imagemagick:Us,imap:Bs,ldap:$s,libargon2:js,libavif:Gs,libcares:Ms,libevent:Hs,libffi:Rs,"libffi-win":{source:"libffi-win","static-libs-windows":["libffi.lib"],"headers-windows":["ffi.h","ffitarget.h","fficonfig.h"]},libiconv:Fs,"libiconv-win":{source:"libiconv-win","static-libs-windows":["libiconv.lib","libiconv_a.lib"]},libjpeg:Zs,liblz4:Qs,libmemcached:Ws,libpng:Ks,libsodium:Ys,libssh2:Js,libuv:Xs,libwebp:ei,libxml2:si,libxslt:ii,libyaml:li,libzip:ti,ncurses:ni,nghttp2:oi,onig:ai,openssl:di,"pkg-config":{source:"pkg-config"},postgresql:ci,readline:ui,snappy:bi,sqlite:pi,tidy:ri,unixodbc:gi,xz:xi,zlib:hi,zstd:mi};function q(e,i,o,d){return e.os==="linux"?e[i][o][d+"-linux"]??e[i][o][d+"-unix"]??e[i][o][d]??[]:e.os==="macos"?e[i][o][d+"-macos"]??e[i][o][d+"-unix"]??e[i][o][d]??[]:[]}function Q(e,i){return q(e,"ext",i,"ext-depends")}function vi(e,i){return q(e,"ext",i,"ext-suggests")}function wi(e,i){return q(e,"ext",i,"lib-depends")}function fi(e,i){return q(e,"ext",i,"lib-suggests")}function W(e,i){return q(e,"lib",i,"lib-depends")}function zi(e,i){return q(e,"lib",i,"lib-suggests")}function ki(e,i){const o=[],d=new Set,x=[];i.forEach(a=>{d.has(a)||_i(e,a,d,o)});const w=[];return o.forEach(a=>{i.indexOf(a)===-1&&x.push(a),[...wi(e,a),...fi(e,a)].forEach(V=>{w.indexOf(V)===-1&&w.push(V)})}),{exts:o,libs:Ei(e,w),notIncludedExts:x}}function Ei(e,i){const o=[],d=new Set;return i.forEach(x=>{d.has(x)||(console.log("before visited"),console.log(d),qi(e,x,d,o),console.log("after visited"),console.log(d))}),o}function qi(e,i,o,d){if(o.has(i))return;o.add(i),[...W(e,i),...zi(e,i)].forEach(w=>{K(e,w,o,d)}),d.push(i)}function K(e,i,o,d){o.has(i)||(o.add(i),W(e,i).forEach(x=>{K(e,x,o,d)}),d.push(i))}function Y(e,i,o,d){o.has(o)||(o.add(i),Q(e,i).forEach(x=>{Y(e,x,o,d)}),d.push(i))}function _i(e,i,o,d){if(o.has(i))return;o.add(i),[...Q(e,i),...vi(e,i)].forEach(w=>{Y(e,w,o,d)}),d.push(i)}const O=e=>(oe("data-v-1cdb3adf"),e=e(),ae(),e),Si={class:"option-line"},Ci=["id","value","disabled"],Di=["for"],Ii={class:"box"},Li={class:"ext-item"},Ni=["id","value","disabled"],Oi=["for"],Vi={class:"details custom-block"},Pi={class:"box"},Ai={class:"ext-item"},Ti=["id","value","disabled"],Ui=["for"],Bi={class:"tip custom-block"},$i=O(()=>s("p",{class:"custom-block-title"},"TIP",-1)),ji={class:"box"},Gi={class:"ext-item"},Mi=["id","value"],Hi=["for"],Ri={key:0,class:"warning custom-block"},Fi=O(()=>s("p",{class:"custom-block-title"},"WARNING",-1)),Zi={class:"option-line"},Qi={class:"option-title"},Wi={value:"native"},Ki={value:"spc"},Yi={value:"docker"},Ji={key:1,class:"option-line"},Xi={class:"option-title"},el=O(()=>s("option",{value:"x86_64"},"x86_64 (amd64)",-1)),sl=O(()=>s("option",{value:"aarch64"},"aarch64 (arm64)",-1)),il=[el,sl],ll={class:"option-line"},tl={class:"option-title"},nl=["value"],ol={class:"option-line"},al={class:"option-title"},dl={for:"debug-yes"},cl={for:"debug-no"},ul={class:"option-line"},bl={class:"option-title"},pl={for:"zts-yes"},rl={for:"zts-no"},gl={class:"option-line"},xl={class:"option-title"},hl={for:"show-download-yes"},ml={for:"show-download-no"},yl=["placeholder"],vl={key:2,class:"command-container"},wl={class:"command-preview"},fl=O(()=>s("br",null,null,-1)),zl={key:3,class:"command-container"},kl={class:"command-preview"},El={key:4,class:"command-container"},ql={class:"command-preview"},_l={class:"command-container"},Sl={class:"command-preview"},Cl={name:"CliGenerator"},Dl=le({...Cl,props:{lang:{type:String,default:"zh"}},setup(e){const i=b(Ds),o=b(yi),d=b([]),x=[{os:"linux",label:"Linux",disabled:!1},{os:"macos",label:"macOS",disabled:!1},{os:"windows",label:"Windows",disabled:!0}],w=["7.4","8.0","8.1","8.2","8.3"],a={zh:{selectExt:"选择扩展",buildTarget:"选择编译目标",buildOptions:"编译选项",buildEnvironment:"编译环境",buildEnvNative:"本地构建（Git 源码）",buildEnvSpc:"本地构建（独立 spc 二进制）",buildEnvDocker:"Alpine Docker 构建",useDebug:"是否开启调试输出",yes:"是",no:"否",resultShow:"结果展示",selectCommon:"选择常用扩展",selectNone:"全部取消选择",useZTS:"是否编译线程安全版",hardcodedINI:"硬编码 INI 选项",hardcodedINIPlacehoder:"如需要硬编码 ini，每行写一个，例如：memory_limit=2G",resultShowDownload:"是否展示仅下载对应扩展依赖的命令",downloadExtOnlyCommand:"只下载对应扩展的依赖包命令",downloadAllCommand:"下载所有依赖包命令",compileCommand:"编译命令",downloadPhpVersion:"下载 PHP 版本",downloadSPCBinaryCommand:"下载 spc 二进制命令",selectedArch:"选择系统架构",selectedSystem:"选择操作系统",buildLibs:"要构建的库",depTips:"选择扩展后，不可选中的项目为必需的依赖，编译的依赖库列表中可选的为现有扩展和依赖库的可选依赖。选择可选依赖后，将生成 --with-libs 参数。",microUnavailable:"micro 不支持 PHP 7.4 及更早版本！"},en:{selectExt:"Select Extensions",buildTarget:"Build Target",buildOptions:"Build Options",buildEnvironment:"Build Environment",buildEnvNative:"Native build (Git source code)",buildEnvSpc:"Native build (standalone spc binary)",buildEnvDocker:"Alpine docker build",useDebug:"Enable debug message",yes:"Yes",no:"No",resultShow:"Result",selectCommon:"Select common extensions",selectNone:"Unselect all",useZTS:"Enable ZTS",hardcodedINI:"Hardcoded INI options",hardcodedINIPlacehoder:"If you need to hardcode ini, write one per line, for example: memory_limit=2G",resultShowDownload:"Download with corresponding extension dependencies",downloadExtOnlyCommand:"Download sources by extensions command",downloadAllCommand:"Download all sources command",compileCommand:"Compile command",downloadPhpVersion:"Download PHP version",downloadSPCBinaryCommand:"Download spc binary command",selectedArch:"Select build architecture",selectedSystem:"Select Build OS",buildLibs:"Select Dependencies",depTips:"After selecting the extensions, the unselectable items are essential dependencies. In the compiled dependencies list, optional dependencies consist of existing extensions and optional dependencies of libraries. Optional dependencies will be added in --with-libs parameter.",microUnavailable:"Micro does not support PHP 7.4 and earlier versions!"}},H=["cli","fpm","micro","embed","all"],V=()=>{h.value=["apcu","bcmath","calendar","ctype","curl","dba","dom","exif","filter","fileinfo","gd","iconv","intl","mbstring","mbregex","mysqli","mysqlnd","openssl","opcache","pcntl","pdo","pdo_mysql","pdo_sqlite","pdo_pgsql","pgsql","phar","posix","readline","redis","session","simplexml","sockets","sodium","sqlite3","tokenizer","xml","xmlreader","xmlwriter","xsl","zip","zlib"]},R=A(()=>h.value.join(",")),J=A(()=>{const p=z.value.filter(n=>P.value.indexOf(n)===-1);return p.length>0?' --with-libs="'+p.join(",")+'"':""}),h=b([]),z=b([]),T=b([]),P=b([]),f=b(["cli"]),_=b("native"),S=b("8.2"),k=b(0),C=b(0),D=b(1),U=b(""),v=b("linux"),B=b("x86_64"),$=A(()=>{switch(_.value){case"native":return"bin/spc";case"spc":return"./spc";case"docker":return"bin/spc-alpine-docker";default:return""}}),F=b("--build-cli"),X=A(()=>{const p=U.value.split(`
`);let n=[];return p.forEach(l=>{l.indexOf("=")>=1&&n.push(l)})," "+n.map(l=>'-I "'+l+'"').join(" ")}),ee=p=>{let n;f.value.indexOf("all")!==-1&&p.target.value==="all"?f.value=["all"]:(n=f.value.indexOf("all"))!==-1&&p.target.value!=="all"&&f.value.splice(n,1),F.value=f.value.map(l=>"--build-"+l).join(" ")},se=p=>{const n=new Set,l=u=>{let c=[];if(v.value==="linux"){if(c=i.value[u]["ext-depends-linux"]??i.value[u]["ext-depends-unix"]??i.value[u]["ext-depends"]??[],c.length===0)return}else if(v.value==="macos"&&(c=i.value[u]["ext-depends-macos"]??i.value[u]["ext-depends-unix"]??i.value[u]["ext-depends"]??[],c.length===0))return;c.forEach(r=>{n.add(r),l(r)})};return p.forEach(u=>{l(u)}),Array.from(n)},ie=p=>{const n=new Set,l=c=>{let r=[];if(v.value==="linux"){if(r=o.value[c]["lib-depends-linux"]??o.value[c]["lib-depends-unix"]??o.value[c]["lib-depends"]??[],r.length===0)return}else if(v.value==="macos"&&(r=o.value[c]["lib-depends-macos"]??o.value[c]["lib-depends-unix"]??o.value[c]["lib-depends"]??[],r.length===0))return;r.forEach(I=>{n.add(I),l(I)})},u=c=>{let r=[];if(v.value==="linux"){if(r=i.value[c]["lib-depends-linux"]??i.value[c]["lib-depends-unix"]??i.value[c]["lib-depends"]??[],r.length===0)return}else if(v.value==="macos"&&(r=i.value[c]["lib-depends-macos"]??i.value[c]["lib-depends-unix"]??i.value[c]["lib-depends"]??[],r.length===0))return;r.forEach(I=>{n.add(I),l(I)})};return p.forEach(c=>{u(c)}),Array.from(n)};return Z(v,()=>h.value=[]),Z(h,p=>{T.value=se(p),T.value.forEach(l=>{h.value.indexOf(l)===-1&&h.value.push(l)}),h.value.sort(),console.log("检测到变化！"),console.log(p);const n=ki({ext:i.value,lib:o.value,os:v.value},h.value);d.value=n.libs.sort(),z.value=[],P.value=ie(n.exts),P.value.forEach(l=>{z.value.indexOf(l)===-1&&z.value.push(l)})}),(p,n)=>(m(),y("div",null,[s("h2",null,t(a[e.lang].selectedSystem),1),s("div",Si,[(m(),y(L,null,N(x,(l,u)=>s("span",{key:u,style:{"margin-right":"4px"}},[g(s("input",{type:"radio",id:"os-"+l.os,value:l.os,disabled:l.disabled===!0,"onUpdate:modelValue":n[0]||(n[0]=c=>v.value=c)},null,8,Ci),[[E,v.value]]),s("label",{for:"os-"+l.os},t(l.label),9,Di)])),64))]),s("h2",null,t(a[e.lang].selectExt)+t(h.value.length>0?" ("+h.value.length+")":""),1),s("div",Ii,[(m(!0),y(L,null,N(i.value,(l,u)=>(m(),y("div",Li,[g(s("input",{type:"checkbox",id:u,value:u,"onUpdate:modelValue":n[1]||(n[1]=c=>h.value=c),disabled:T.value.indexOf(u)!==-1},null,8,Ni),[[M,h.value]]),s("label",{for:u},t(u),9,Oi)]))),256))]),s("div",{class:"my-btn",onClick:V},t(a[e.lang].selectCommon),1),s("div",{class:"my-btn",onClick:n[2]||(n[2]=l=>h.value=[])},t(a[e.lang].selectNone),1),s("details",Vi,[s("summary",null,t(a[e.lang].buildLibs)+t(z.value.length>0?" ("+z.value.length+")":""),1),s("div",Pi,[(m(!0),y(L,null,N(d.value,(l,u)=>(m(),y("div",Ai,[g(s("input",{type:"checkbox",id:u,value:l,"onUpdate:modelValue":n[3]||(n[3]=c=>z.value=c),disabled:P.value.indexOf(l)!==-1},null,8,Ti),[[M,z.value]]),s("label",{for:u},t(l),9,Ui)]))),256))])]),s("div",Bi,[$i,s("p",null,t(a[e.lang].depTips),1)]),s("h2",null,t(a[e.lang].buildTarget),1),s("div",ji,[(m(),y(L,null,N(H,l=>s("div",Gi,[g(s("input",{type:"checkbox",id:"build_"+l,value:l,"onUpdate:modelValue":n[4]||(n[4]=u=>f.value=u),onChange:ee},null,40,Mi),[[M,f.value]]),s("label",{for:"build_"+l},t(l),9,Hi)])),64))]),S.value==="7.4"&&(f.value.indexOf("micro")!==-1||f.value.indexOf("all")!==-1)?(m(),y("div",Ri,[Fi,s("p",null,t(a[e.lang].microUnavailable),1)])):j("",!0),s("h2",null,t(a[e.lang].buildOptions),1),s("div",Zi,[s("span",Qi,t(a[e.lang].buildEnvironment),1),g(s("select",{"onUpdate:modelValue":n[5]||(n[5]=l=>_.value=l)},[s("option",Wi,t(a[e.lang].buildEnvNative),1),s("option",Ki,t(a[e.lang].buildEnvSpc),1),s("option",Yi,t(a[e.lang].buildEnvDocker),1)],512),[[G,_.value]])]),_.value==="spc"?(m(),y("div",Ji,[s("span",Xi,t(a[e.lang].selectedArch),1),g(s("select",{"onUpdate:modelValue":n[6]||(n[6]=l=>B.value=l)},il,512),[[G,B.value]])])):j("",!0),s("div",ll,[s("span",tl,t(a[e.lang].downloadPhpVersion),1),g(s("select",{"onUpdate:modelValue":n[7]||(n[7]=l=>S.value=l)},[(m(),y(L,null,N(w,l=>s("option",{value:l},t(l),9,nl)),64))],512),[[G,S.value]])]),s("div",ol,[s("span",al,t(a[e.lang].useDebug),1),g(s("input",{type:"radio",id:"debug-yes",value:1,"onUpdate:modelValue":n[8]||(n[8]=l=>k.value=l)},null,512),[[E,k.value]]),s("label",dl,t(a[e.lang].yes),1),g(s("input",{type:"radio",id:"debug-no",value:0,"onUpdate:modelValue":n[9]||(n[9]=l=>k.value=l)},null,512),[[E,k.value]]),s("label",cl,t(a[e.lang].no),1)]),s("div",ul,[s("span",bl,t(a[e.lang].useZTS),1),g(s("input",{type:"radio",id:"zts-yes",value:1,"onUpdate:modelValue":n[10]||(n[10]=l=>C.value=l)},null,512),[[E,C.value]]),s("label",pl,t(a[e.lang].yes),1),g(s("input",{type:"radio",id:"zts-no",value:0,"onUpdate:modelValue":n[11]||(n[11]=l=>C.value=l)},null,512),[[E,C.value]]),s("label",rl,t(a[e.lang].no),1)]),s("div",gl,[s("span",xl,t(a[e.lang].resultShowDownload),1),g(s("input",{type:"radio",id:"show-download-yes",value:1,"onUpdate:modelValue":n[12]||(n[12]=l=>D.value=l)},null,512),[[E,D.value]]),s("label",hl,t(a[e.lang].yes),1),g(s("input",{type:"radio",id:"show-download-no",value:0,"onUpdate:modelValue":n[13]||(n[13]=l=>D.value=l)},null,512),[[E,D.value]]),s("label",ml,t(a[e.lang].no),1)]),s("h2",null,t(a[e.lang].hardcodedINI),1),g(s("textarea",{class:"textarea",placeholder:a[e.lang].hardcodedINIPlacehoder,"onUpdate:modelValue":n[14]||(n[14]=l=>U.value=l),rows:"5"},null,8,yl),[[te,U.value]]),s("h2",null,t(a[e.lang].resultShow),1),_.value==="spc"?(m(),y("div",vl,[s("b",null,t(a[e.lang].downloadSPCBinaryCommand),1),s("div",wl,[ne(" curl -o spc.tgz https://dl.static-php.dev/static-php-cli/spc-bin/nightly/spc-"+t(v.value)+"-"+t(B.value)+".tar.gz && tar -zxvf spc.tgz && rm spc.tgz",1),fl])])):j("",!0),D.value?(m(),y("div",zl,[s("b",null,t(a[e.lang].downloadExtOnlyCommand),1),s("div",kl,t($.value)+" download --with-php="+t(S.value)+' --for-extensions "'+t(R.value)+'"'+t(k.value?" --debug":""),1)])):(m(),y("div",El,[s("b",null,t(a[e.lang].downloadAllCommand),1),s("div",ql,t($.value)+" download --all --with-php="+t(S.value)+t(k.value?" --debug":""),1)])),s("div",_l,[s("b",null,t(a[e.lang].compileCommand),1),s("div",Sl,t($.value)+" build "+t(F.value)+' "'+t(R.value)+'"'+t(J.value)+t(k.value?" --debug":"")+t(C.value?" --enable-zts":"")+t(X.value),1)])]))}}),Ll=de(Dl,[["__scopeId","data-v-1cdb3adf"]]);export{Ll as C};