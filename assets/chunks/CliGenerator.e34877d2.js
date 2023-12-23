import{d as le,h as b,g as A,z as F,o as x,c as y,k as s,t,F as L,G as N,e as j,a2 as g,a3 as G,a4 as _,a5 as te,a as ne,a6 as M,p as oe,m as ae,_ as de}from"./framework.a73c7ff7.js";const ce={type:"external",source:"apcu"},ue={type:"builtin"},be={type:"builtin","arg-type":"with-prefix","lib-depends":["bzip2"]},pe={type:"builtin"},re={type:"builtin"},ge={type:"builtin","arg-type":"with","lib-depends":["curl"]},me={type:"builtin","arg-type-windows":"with"},he={type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["libxml2","zlib"]},xe={type:"external",source:"ext-event","arg-type":"custom","lib-depends":["libevent"],"ext-depends":["openssl"],"ext-suggests":["sockets"]},ye={type:"builtin"},ve={"arg-type":"custom",type:"builtin","lib-depends":["libffi"]},fe={type:"builtin"},we={type:"builtin"},ze={type:"builtin","lib-suggests":["openssl"]},Ee={type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["zlib","libpng"],"ext-depends":["zlib"],"lib-suggests":["libavif","libwebp","libjpeg","freetype"]},_e={type:"builtin","arg-type":"with","lib-depends":["gettext"]},ke={type:"external","arg-type":"custom",source:"ext-glfw","lib-depends":["glfw"]},qe={type:"builtin","arg-type":"with-prefix","lib-depends":["gmp"]},Se={type:"builtin","arg-type":"with-prefix","lib-depends":["libiconv"]},Ce={type:"external",source:"igbinary"},De={type:"external",source:"ext-imagick","arg-type":"custom","lib-depends":["imagemagick"]},Ie={type:"builtin","arg-type":"custom","lib-depends":["imap"],"lib-suggests":["openssl"]},Le={type:"external",source:"inotify"},Ne={type:"builtin","lib-depends":["icu"]},Oe={type:"builtin","arg-type":"with-prefix","lib-depends":["ldap"],"lib-suggests":["gmp","libsodium"],"ext-suggests":["openssl"]},Ve={type:"builtin","arg-type":"custom","ext-depends":["mbstring"],"lib-depends":["onig"]},Pe={type:"builtin","arg-type":"custom"},Ae={type:"external",source:"ext-memcache","arg-type":"custom","lib-depends":["zlib"],"ext-depends":["session"]},Te={type:"external",source:"memcached","arg-type":"custom","cpp-extension":!0,"lib-depends":["libmemcached"],"ext-depends":["session","zlib"]},Ue={type:"external",source:"mongodb","arg-type":"custom","lib-suggests":["icu","openssl","zstd","zlib"]},Be={type:"builtin","arg-type":"with","ext-depends":["mysqlnd"]},$e={type:"builtin","arg-type-windows":"with","lib-depends":["zlib"]},je={type:"builtin","arg-type":"custom"},Ge={type:"builtin","arg-type":"custom","lib-depends":["openssl","zlib"],"ext-depends":["zlib"]},Me={type:"builtin","unix-only":!0},He={type:"builtin"},Re={type:"builtin","arg-type":"with","ext-depends":["pdo","mysqlnd"]},Ze={type:"builtin","arg-type":"with-prefix","ext-depends":["pdo","pgsql"],"lib-depends":["postgresql"]},Fe={type:"builtin","arg-type":"with","ext-depends":["pdo","sqlite3"],"lib-depends":["sqlite"]},Qe={type:"builtin","arg-type":"with-prefix","lib-depends":["postgresql"]},We={type:"builtin","ext-depends":["zlib"]},Ke={type:"builtin","unix-only":!0},Ye={type:"external",source:"protobuf"},Je={type:"builtin","arg-type":"with","lib-depends":["aspell"]},Xe={type:"external",source:"rar","cpp-extension":!0},es={type:"builtin","arg-type":"with-prefix","lib-depends":["readline"]},ss={type:"external",source:"redis","arg-type":"custom","ext-suggests":["session","igbinary"],"lib-suggests":["zstd","liblz4"]},is={type:"builtin"},ls={type:"builtin"},ts={type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["libxml2"]},ns={type:"external",source:"ext-snappy","cpp-extension":!0,"arg-type":"custom","lib-depends":["snappy"],"ext-suggest":["apcu"]},os={type:"builtin","arg-type":"with","lib-depends":["net-snmp"]},as={type:"builtin","arg-type":"custom","lib-depends":["libxml2"]},ds={type:"builtin"},cs={type:"builtin","arg-type":"with","lib-depends":["libsodium"]},us={type:"builtin","arg-type":"with-prefix","lib-depends":["sqlite"]},bs={type:"external",source:"sqlsrv","lib-depends":["unixodbc"],"cpp-extension":!0,"ext-depends-linux":["pcntl"]},ps={type:"external",source:"ext-ssh2","arg-type":"with-prefix","lib-depends":["libssh2"]},rs={type:"external",source:"swoole","arg-type":"custom","cpp-extension":!0,"lib-depends":["openssl"],"ext-depends":["openssl"],"ext-suggests":["curl","pgsql"],"unix-only":!0},gs={type:"external",source:"swow","arg-type":"custom","lib-suggests":["openssl","curl"],"ext-suggests":["openssl","curl"]},ms={type:"builtin","unix-only":!0},hs={type:"builtin","unix-only":!0},xs={type:"builtin","unix-only":!0},ys={type:"builtin","arg-type":"with-prefix","lib-depends":["tidy"]},vs={type:"builtin"},fs={type:"external",source:"xlswriter","arg-type":"custom","ext-depends":["zlib","zip"]},ws={type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["libxml2"]},zs={type:"builtin","arg-type":"custom","lib-depends":["libxml2"]},Es={type:"builtin","arg-type":"custom","lib-depends":["libxml2"]},_s={type:"builtin","arg-type":"with-prefix","lib-depends":["libxslt"],"ext-depends":["xml","dom"]},ks={type:"external",source:"yaml","arg-type":"with-prefix","lib-depends":["libyaml"]},qs={type:"builtin","arg-type":"with-prefix","arg-type-windows":"enable","lib-depends":["libzip"]},Ss={type:"builtin","arg-type":"custom","arg-type-windows":"enable","lib-depends":["zlib"]},Cs={type:"external",source:"ext-zstd","arg-type":"custom","lib-depends":["zstd"]},Ds={apcu:ce,bcmath:ue,bz2:be,calendar:pe,ctype:re,curl:ge,dba:me,dom:he,event:xe,exif:ye,ffi:ve,fileinfo:fe,filter:we,ftp:ze,gd:Ee,gettext:_e,glfw:ke,gmp:qe,iconv:Se,igbinary:Ce,imagick:De,imap:Ie,inotify:Le,intl:Ne,ldap:Oe,mbregex:Ve,mbstring:Pe,memcache:Ae,memcached:Te,mongodb:Ue,mysqli:Be,mysqlnd:$e,opcache:je,openssl:Ge,"password-argon2":{type:"builtin","arg-type":"with-prefix","lib-depends":["libargon2"]},pcntl:Me,pdo:He,pdo_mysql:Re,pdo_pgsql:Ze,pdo_sqlite:Fe,pgsql:Qe,phar:We,posix:Ke,protobuf:Ye,pspell:Je,rar:Xe,readline:es,redis:ss,session:is,shmop:ls,simplexml:ts,snappy:ns,snmp:os,soap:as,sockets:ds,sodium:cs,sqlite3:us,sqlsrv:bs,ssh2:ps,swoole:rs,swow:gs,sysvmsg:ms,sysvsem:hs,sysvshm:xs,tidy:ys,tokenizer:vs,xlswriter:fs,xml:ws,xmlreader:zs,xmlwriter:Es,xsl:_s,yaml:ks,zip:qs,zlib:Ss,zstd:Cs},Is={source:"brotli","static-libs-unix":["libbrotlidec-static.a","libbrotlienc-static.a","libbrotlicommon-static.a"],"static-libs-windows":["brotlicommon-static.lib","brotlienc-static.lib","brotlidec-static.lib"],headers:["brotli"]},Ls={source:"bzip2","static-libs-unix":["libbz2.a"],"static-libs-windows":[["libbz2.lib","libbz2_a.lib"]],headers:["bzlib.h"]},Ns={source:"curl","static-libs-unix":["libcurl.a"],"static-libs-windows":["libcurl.lib"],headers:["curl"],"lib-depends-unix":["openssl","zlib"],"lib-suggests":["libssh2","brotli","nghttp2","zstd"],"lib-suggests-windows":["zlib","libssh2","brotli","nghttp2","zstd","openssl","idn2","psl"],frameworks:["CoreFoundation","CoreServices","SystemConfiguration"]},Os={source:"freetype","static-libs-unix":["libfreetype.a"],"headers-unix":["freetype2/freetype/freetype.h","freetype2/ft2build.h"],"lib-depends":["zlib"],"lib-suggests":["libpng","bzip2","brotli"]},Vs={source:"ext-glfw","static-libs-unix":["libglfw3.a"],frameworks:["CoreVideo","OpenGL","Cocoa","IOKit"]},Ps={source:"gmp","static-libs-unix":["libgmp.a"],"static-libs-windows":["libgmp.lib"],headers:["gmp.h"]},As={source:"icu","cpp-library":!0,"static-libs-unix":["libicui18n.a","libicuio.a","libicuuc.a","libicudata.a"]},Ts={source:"imagemagick","static-libs-unix":["libMagick++-7.Q16HDRI.a","libMagickWand-7.Q16HDRI.a","libMagickCore-7.Q16HDRI.a"],"lib-depends":["zlib","libpng","libjpeg","libwebp","freetype"],"lib-suggests":["zstd","xz","bzip2","libzip","libxml2"]},Us={source:"imap","static-libs-unix":["libc-client.a"],"lib-suggests":["openssl"]},Bs={source:"ldap","static-libs-unix":["liblber.a","libldap.a"],"lib-depends":["openssl","zlib","gmp","libsodium"]},$s={source:"libargon2","static-libs-unix":["libargon2.a"]},js={source:"libavif","static-libs-unix":["libavif.a"]},Gs={source:"libevent","static-libs-unix":["libevent.a","libevent_core.a","libevent_extra.a","libevent_openssl.a"],"lib-depends":["openssl"]},Ms={source:"libffi","static-libs-unix":["libffi.a"],"static-libs-windows":["libffi.lib"],"headers-unix":["ffi.h","ffitarget.h"],"headers-windows":["ffi.h","fficonfig.h","ffitarget.h"]},Hs={source:"libiconv","static-libs-unix":["libiconv.a","libcharset.a"],headers:["iconv.h","libcharset.h","localcharset.h"]},Rs={source:"libjpeg","static-libs-unix":["libjpeg.a","libturbojpeg.a"]},Zs={source:"liblz4","static-libs-unix":["liblz4.a"]},Fs={source:"libmemcached","static-libs-unix":["libmemcached.a","libmemcachedutil.a"]},Qs={source:"libpng","static-libs-unix":["libpng16.a"],"static-libs-windows":["libpng16_static.lib"],"headers-unix":["png.h","pngconf.h","pnglibconf.h"],"headers-windows":["png.h","pngconf.h"],"lib-depends":["zlib"]},Ws={source:"libsodium","static-libs-unix":["libsodium.a"]},Ks={source:"libssh2","static-libs-unix":["libssh2.a"],"static-libs-windows":["libssh2.lib"],headers:["libssh2.h","libssh2_publickey.h","libssh2_sftp.h"],"lib-depends":["openssl"],"lib-suggests":["zlib"]},Ys={source:"libwebp","static-libs-unix":["libwebp.a","libwebpdecoder.a","libwebpdemux.a","libwebpmux.a","libsharpyuv.a"]},Js={source:"libxml2","static-libs-unix":["libxml2.a"],"static-libs-windows":[["libxml2s.lib","libxml2_a.lib"]],headers:["libxml2"],"lib-depends":["libiconv","zlib"],"lib-suggests":["xz","icu"],"lib-suggests-windows":["icu","xz"]},Xs={source:"libxslt","static-libs-unix":["libxslt.a","libexslt.a"],"lib-depends":["libxml2"]},ei={source:"libyaml","static-libs-unix":["libyaml.a"],"static-libs-windows":["yaml.lib"],headers:["yaml.h"]},si={source:"libzip","static-libs-unix":["libzip.a"],"static-libs-windows":[["zip.lib","libzip_a.lib"]],headers:["zip.h","zipconf.h"],"lib-depends":["zlib"],"lib-suggests":["bzip2","xz","zstd","openssl"]},ii={source:"ncurses","static-libs-unix":["libncurses.a"]},li={source:"nghttp2","static-libs-unix":["libnghttp2.a"],"static-libs-windows":["nghttp2.lib"],headers:["nghttp2"],"lib-depends":["zlib","openssl"],"lib-suggests":["libxml2"]},ti={source:"onig","static-libs-unix":["libonig.a"],"static-libs-windows":[["onig.lib","onig_a.lib"]],headers:["oniggnu.h","oniguruma.h"]},ni={source:"openssl","static-libs-unix":["libssl.a","libcrypto.a"],"static-libs-windows":["libssl.lib","libcrypto.lib"],headers:["openssl"],"lib-depends":["zlib"]},oi={source:"postgresql","static-libs-unix":["libpq.a","libpgport.a","libpgcommon.a"],"lib-depends":["libiconv","libxml2","openssl","zlib","readline"],"lib-suggests":["icu","libxslt","ldap","zstd"]},ai={source:"readline","static-libs-unix":["libreadline.a"],"lib-depends":["ncurses"]},di={source:"snappy","static-libs-unix":["libsnappy.a"],"headers-unix":["snappy.h","snappy-c.h","snappy-sinksource.h","snappy-stubs-public.h"],"lib-depends":["zlib"]},ci={source:"sqlite","static-libs-unix":["libsqlite3.a"],"headers-unix":["sqlite3.h","sqlite3ext.h"]},ui={source:"tidy","static-libs-unix":["libtidy.a"]},bi={source:"unixodbc","static-libs-unix":["libodbc.a","libodbccr.a","libodbcinst.a"],"lib-depends":["libiconv"]},pi={source:"xz","static-libs-unix":["liblzma.a"],"static-libs-windows":[["liblzma.lib","liblzma_a.lib"]],"headers-unix":["lzma"],"headers-windows":["lzma","lzma.h"],"lib-depends":["libiconv"]},ri={source:"zlib","static-libs-unix":["libz.a"],"static-libs-windows":["zlib_a.lib"],headers:["zlib.h","zconf.h"]},gi={source:"zstd","static-libs-unix":["libzstd.a"],"static-libs-windows":[["zstd.lib","zstd_static.lib"]],"headers-unix":["zdict.h","zstd.h","zstd_errors.h"],"headers-windows":["zstd.h","zstd_errors.h"]},mi={brotli:Is,bzip2:Ls,curl:Ns,freetype:Os,glfw:Vs,gmp:Ps,icu:As,imagemagick:Ts,imap:Us,ldap:Bs,libargon2:$s,libavif:js,libevent:Gs,libffi:Ms,libiconv:Hs,libjpeg:Rs,liblz4:Zs,libmemcached:Fs,libpng:Qs,libsodium:Ws,libssh2:Ks,libwebp:Ys,libxml2:Js,libxslt:Xs,libyaml:ei,libzip:si,ncurses:ii,nghttp2:li,onig:ti,openssl:ni,"pkg-config":{source:"pkg-config"},postgresql:oi,readline:ai,snappy:di,sqlite:ci,tidy:ui,unixodbc:bi,xz:pi,zlib:ri,zstd:gi};function k(e,i,o,d){return e.os==="linux"?e[i][o][d+"-linux"]??e[i][o][d+"-unix"]??e[i][o][d]??[]:e.os==="macos"?e[i][o][d+"-macos"]??e[i][o][d+"-unix"]??e[i][o][d]??[]:[]}function Q(e,i){return k(e,"ext",i,"ext-depends")}function hi(e,i){return k(e,"ext",i,"ext-suggests")}function xi(e,i){return k(e,"ext",i,"lib-depends")}function yi(e,i){return k(e,"ext",i,"lib-suggests")}function W(e,i){return k(e,"lib",i,"lib-depends")}function vi(e,i){return k(e,"lib",i,"lib-suggests")}function fi(e,i){const o=[],d=new Set,m=[];i.forEach(a=>{d.has(a)||Ei(e,a,d,o)});const f=[];return o.forEach(a=>{i.indexOf(a)===-1&&m.push(a),[...xi(e,a),...yi(e,a)].forEach(V=>{f.indexOf(V)===-1&&f.push(V)})}),{exts:o,libs:wi(e,f),notIncludedExts:m}}function wi(e,i){const o=[],d=new Set;return i.forEach(m=>{d.has(m)||(console.log("before visited"),console.log(d),zi(e,m,d,o),console.log("after visited"),console.log(d))}),o}function zi(e,i,o,d){if(o.has(i))return;o.add(i),[...W(e,i),...vi(e,i)].forEach(f=>{K(e,f,o,d)}),d.push(i)}function K(e,i,o,d){o.has(i)||(o.add(i),W(e,i).forEach(m=>{K(e,m,o,d)}),d.push(i))}function Y(e,i,o,d){o.has(o)||(o.add(i),Q(e,i).forEach(m=>{Y(e,m,o,d)}),d.push(i))}function Ei(e,i,o,d){if(o.has(i))return;o.add(i),[...Q(e,i),...hi(e,i)].forEach(f=>{Y(e,f,o,d)}),d.push(i)}const O=e=>(oe("data-v-b101b3b3"),e=e(),ae(),e),_i={class:"option-line"},ki=["id","value"],qi=["for"],Si={class:"box"},Ci={class:"ext-item"},Di=["id","value","disabled"],Ii=["for"],Li={class:"details custom-block"},Ni={class:"box"},Oi={class:"ext-item"},Vi=["id","value","disabled"],Pi=["for"],Ai={class:"tip custom-block"},Ti=O(()=>s("p",{class:"custom-block-title"},"TIP",-1)),Ui={class:"box"},Bi={class:"ext-item"},$i=["id","value"],ji=["for"],Gi={key:0,class:"warning custom-block"},Mi=O(()=>s("p",{class:"custom-block-title"},"WARNING",-1)),Hi={class:"option-line"},Ri={class:"option-title"},Zi={value:"native"},Fi={value:"spc"},Qi={value:"docker"},Wi={key:1,class:"option-line"},Ki={class:"option-title"},Yi=O(()=>s("option",{value:"x86_64"},"x86_64 (amd64)",-1)),Ji=O(()=>s("option",{value:"aarch64"},"aarch64 (arm64)",-1)),Xi=[Yi,Ji],el={class:"option-line"},sl={class:"option-title"},il=["value"],ll={class:"option-line"},tl={class:"option-title"},nl={for:"debug-yes"},ol={for:"debug-no"},al={class:"option-line"},dl={class:"option-title"},cl={for:"zts-yes"},ul={for:"zts-no"},bl={class:"option-line"},pl={class:"option-title"},rl={for:"show-download-yes"},gl={for:"show-download-no"},ml=["placeholder"],hl={key:2,class:"command-container"},xl={class:"command-preview"},yl=O(()=>s("br",null,null,-1)),vl={key:3,class:"command-container"},fl={class:"command-preview"},wl={key:4,class:"command-container"},zl={class:"command-preview"},El={class:"command-container"},_l={class:"command-preview"},kl={name:"CliGenerator"},ql=le({...kl,props:{lang:{type:String,default:"zh"}},setup(e){const i=b(Ds),o=b(mi),d=b([]),m=[{os:"linux",label:"Linux"},{os:"macos",label:"macOS"}],f=["7.4","8.0","8.1","8.2","8.3"],a={zh:{selectExt:"选择扩展",buildTarget:"选择编译目标",buildOptions:"编译选项",buildEnvironment:"编译环境",buildEnvNative:"本地构建（Git 源码）",buildEnvSpc:"本地构建（独立 spc 二进制）",buildEnvDocker:"Alpine Docker 构建",useDebug:"是否开启调试输出",yes:"是",no:"否",resultShow:"结果展示",selectCommon:"选择常用扩展",selectNone:"全部取消选择",useZTS:"是否编译线程安全版",hardcodedINI:"硬编码 INI 选项",hardcodedINIPlacehoder:"如需要硬编码 ini，每行写一个，例如：memory_limit=2G",resultShowDownload:"是否展示仅下载对应扩展依赖的命令",downloadExtOnlyCommand:"只下载对应扩展的依赖包命令",downloadAllCommand:"下载所有依赖包命令",compileCommand:"编译命令",downloadPhpVersion:"下载 PHP 版本",downloadSPCBinaryCommand:"下载 spc 二进制命令",selectedArch:"选择系统架构",selectedSystem:"选择操作系统",buildLibs:"要构建的库",depTips:"选择扩展后，不可选中的项目为必需的依赖，编译的依赖库列表中可选的为现有扩展和依赖库的可选依赖。选择可选依赖后，将生成 --with-libs 参数。",microUnavailable:"micro 不支持 PHP 7.4 及更早版本！"},en:{selectExt:"Select Extensions",buildTarget:"Build Target",buildOptions:"Build Options",buildEnvironment:"Build Environment",buildEnvNative:"Native build (Git source code)",buildEnvSpc:"Native build (standalone spc binary)",buildEnvDocker:"Alpine docker build",useDebug:"Enable debug message",yes:"Yes",no:"No",resultShow:"Result",selectCommon:"Select common extensions",selectNone:"Unselect all",useZTS:"Enable ZTS",hardcodedINI:"Hardcoded INI options",hardcodedINIPlacehoder:"If you need to hardcode ini, write one per line, for example: memory_limit=2G",resultShowDownload:"Download with corresponding extension dependencies",downloadExtOnlyCommand:"Download sources by extensions command",downloadAllCommand:"Download all sources command",compileCommand:"Compile command",downloadPhpVersion:"Download PHP version",downloadSPCBinaryCommand:"Download spc binary command",selectedArch:"Select build architecture",selectedSystem:"Select Build OS",buildLibs:"Select Dependencies",depTips:"After selecting the extensions, the unselectable items are essential dependencies. In the compiled dependencies list, optional dependencies consist of existing extensions and optional dependencies of libraries. Optional dependencies will be added in --with-libs parameter.",microUnavailable:"Micro does not support PHP 7.4 and earlier versions!"}},H=["cli","fpm","micro","embed","all"],V=()=>{h.value=["apcu","bcmath","calendar","ctype","curl","dba","dom","exif","filter","fileinfo","gd","iconv","intl","mbstring","mbregex","mysqli","mysqlnd","openssl","opcache","pcntl","pdo","pdo_mysql","pdo_sqlite","pdo_pgsql","pgsql","phar","posix","readline","redis","session","simplexml","sockets","sodium","sqlite3","tokenizer","xml","xmlreader","xmlwriter","xsl","zip","zlib"]},R=A(()=>h.value.join(",")),J=A(()=>{const p=z.value.filter(n=>P.value.indexOf(n)===-1);return p.length>0?' --with-libs="'+p.join(",")+'"':""}),h=b([]),z=b([]),T=b([]),P=b([]),w=b(["cli"]),q=b("native"),S=b("8.2"),E=b(0),C=b(0),D=b(1),U=b(""),v=b("linux"),B=b("x86_64"),$=A(()=>{switch(q.value){case"native":return"bin/spc";case"spc":return"./spc";case"docker":return"bin/spc-alpine-docker";default:return""}}),Z=b("--build-cli"),X=A(()=>{const p=U.value.split(`
`);let n=[];return p.forEach(l=>{l.indexOf("=")>=1&&n.push(l)})," "+n.map(l=>'-I "'+l+'"').join(" ")}),ee=p=>{let n;w.value.indexOf("all")!==-1&&p.target.value==="all"?w.value=["all"]:(n=w.value.indexOf("all"))!==-1&&p.target.value!=="all"&&w.value.splice(n,1),Z.value=w.value.map(l=>"--build-"+l).join(" ")},se=p=>{const n=new Set,l=u=>{let c=[];if(v.value==="linux"){if(c=i.value[u]["ext-depends-linux"]??i.value[u]["ext-depends-unix"]??i.value[u]["ext-depends"]??[],c.length===0)return}else if(v.value==="macos"&&(c=i.value[u]["ext-depends-macos"]??i.value[u]["ext-depends-unix"]??i.value[u]["ext-depends"]??[],c.length===0))return;c.forEach(r=>{n.add(r),l(r)})};return p.forEach(u=>{l(u)}),Array.from(n)},ie=p=>{const n=new Set,l=c=>{let r=[];if(v.value==="linux"){if(r=o.value[c]["lib-depends-linux"]??o.value[c]["lib-depends-unix"]??o.value[c]["lib-depends"]??[],r.length===0)return}else if(v.value==="macos"&&(r=o.value[c]["lib-depends-macos"]??o.value[c]["lib-depends-unix"]??o.value[c]["lib-depends"]??[],r.length===0))return;r.forEach(I=>{n.add(I),l(I)})},u=c=>{let r=[];if(v.value==="linux"){if(r=i.value[c]["lib-depends-linux"]??i.value[c]["lib-depends-unix"]??i.value[c]["lib-depends"]??[],r.length===0)return}else if(v.value==="macos"&&(r=i.value[c]["lib-depends-macos"]??i.value[c]["lib-depends-unix"]??i.value[c]["lib-depends"]??[],r.length===0))return;r.forEach(I=>{n.add(I),l(I)})};return p.forEach(c=>{u(c)}),Array.from(n)};return F(v,()=>h.value=[]),F(h,p=>{T.value=se(p),T.value.forEach(l=>{h.value.indexOf(l)===-1&&h.value.push(l)}),h.value.sort(),console.log("检测到变化！"),console.log(p);const n=fi({ext:i.value,lib:o.value,os:v.value},h.value);d.value=n.libs.sort(),z.value=[],P.value=ie(n.exts),P.value.forEach(l=>{z.value.indexOf(l)===-1&&z.value.push(l)})}),(p,n)=>(x(),y("div",null,[s("h2",null,t(a[e.lang].selectedSystem),1),s("div",_i,[(x(),y(L,null,N(m,(l,u)=>s("span",{key:u,style:{"margin-right":"4px"}},[g(s("input",{type:"radio",id:"os-"+l.os,value:l.os,"onUpdate:modelValue":n[0]||(n[0]=c=>v.value=c)},null,8,ki),[[_,v.value]]),s("label",{for:"os-"+l.os},t(l.label),9,qi)])),64))]),s("h2",null,t(a[e.lang].selectExt)+t(h.value.length>0?" ("+h.value.length+")":""),1),s("div",Si,[(x(!0),y(L,null,N(i.value,(l,u)=>(x(),y("div",Ci,[g(s("input",{type:"checkbox",id:u,value:u,"onUpdate:modelValue":n[1]||(n[1]=c=>h.value=c),disabled:T.value.indexOf(u)!==-1},null,8,Di),[[M,h.value]]),s("label",{for:u},t(u),9,Ii)]))),256))]),s("div",{class:"my-btn",onClick:V},t(a[e.lang].selectCommon),1),s("div",{class:"my-btn",onClick:n[2]||(n[2]=l=>h.value=[])},t(a[e.lang].selectNone),1),s("details",Li,[s("summary",null,t(a[e.lang].buildLibs)+t(z.value.length>0?" ("+z.value.length+")":""),1),s("div",Ni,[(x(!0),y(L,null,N(d.value,(l,u)=>(x(),y("div",Oi,[g(s("input",{type:"checkbox",id:u,value:l,"onUpdate:modelValue":n[3]||(n[3]=c=>z.value=c),disabled:P.value.indexOf(l)!==-1},null,8,Vi),[[M,z.value]]),s("label",{for:u},t(l),9,Pi)]))),256))])]),s("div",Ai,[Ti,s("p",null,t(a[e.lang].depTips),1)]),s("h2",null,t(a[e.lang].buildTarget),1),s("div",Ui,[(x(),y(L,null,N(H,l=>s("div",Bi,[g(s("input",{type:"checkbox",id:"build_"+l,value:l,"onUpdate:modelValue":n[4]||(n[4]=u=>w.value=u),onChange:ee},null,40,$i),[[M,w.value]]),s("label",{for:"build_"+l},t(l),9,ji)])),64))]),S.value==="7.4"&&(w.value.indexOf("micro")!==-1||w.value.indexOf("all")!==-1)?(x(),y("div",Gi,[Mi,s("p",null,t(a[e.lang].microUnavailable),1)])):j("",!0),s("h2",null,t(a[e.lang].buildOptions),1),s("div",Hi,[s("span",Ri,t(a[e.lang].buildEnvironment),1),g(s("select",{"onUpdate:modelValue":n[5]||(n[5]=l=>q.value=l)},[s("option",Zi,t(a[e.lang].buildEnvNative),1),s("option",Fi,t(a[e.lang].buildEnvSpc),1),s("option",Qi,t(a[e.lang].buildEnvDocker),1)],512),[[G,q.value]])]),q.value==="spc"?(x(),y("div",Wi,[s("span",Ki,t(a[e.lang].selectedArch),1),g(s("select",{"onUpdate:modelValue":n[6]||(n[6]=l=>B.value=l)},Xi,512),[[G,B.value]])])):j("",!0),s("div",el,[s("span",sl,t(a[e.lang].downloadPhpVersion),1),g(s("select",{"onUpdate:modelValue":n[7]||(n[7]=l=>S.value=l)},[(x(),y(L,null,N(f,l=>s("option",{value:l},t(l),9,il)),64))],512),[[G,S.value]])]),s("div",ll,[s("span",tl,t(a[e.lang].useDebug),1),g(s("input",{type:"radio",id:"debug-yes",value:1,"onUpdate:modelValue":n[8]||(n[8]=l=>E.value=l)},null,512),[[_,E.value]]),s("label",nl,t(a[e.lang].yes),1),g(s("input",{type:"radio",id:"debug-no",value:0,"onUpdate:modelValue":n[9]||(n[9]=l=>E.value=l)},null,512),[[_,E.value]]),s("label",ol,t(a[e.lang].no),1)]),s("div",al,[s("span",dl,t(a[e.lang].useZTS),1),g(s("input",{type:"radio",id:"zts-yes",value:1,"onUpdate:modelValue":n[10]||(n[10]=l=>C.value=l)},null,512),[[_,C.value]]),s("label",cl,t(a[e.lang].yes),1),g(s("input",{type:"radio",id:"zts-no",value:0,"onUpdate:modelValue":n[11]||(n[11]=l=>C.value=l)},null,512),[[_,C.value]]),s("label",ul,t(a[e.lang].no),1)]),s("div",bl,[s("span",pl,t(a[e.lang].resultShowDownload),1),g(s("input",{type:"radio",id:"show-download-yes",value:1,"onUpdate:modelValue":n[12]||(n[12]=l=>D.value=l)},null,512),[[_,D.value]]),s("label",rl,t(a[e.lang].yes),1),g(s("input",{type:"radio",id:"show-download-no",value:0,"onUpdate:modelValue":n[13]||(n[13]=l=>D.value=l)},null,512),[[_,D.value]]),s("label",gl,t(a[e.lang].no),1)]),s("h2",null,t(a[e.lang].hardcodedINI),1),g(s("textarea",{class:"textarea",placeholder:a[e.lang].hardcodedINIPlacehoder,"onUpdate:modelValue":n[14]||(n[14]=l=>U.value=l),rows:"5"},null,8,ml),[[te,U.value]]),s("h2",null,t(a[e.lang].resultShow),1),q.value==="spc"?(x(),y("div",hl,[s("b",null,t(a[e.lang].downloadSPCBinaryCommand),1),s("div",xl,[ne(" curl -o spc.tgz https://dl.static-php.dev/static-php-cli/spc-bin/nightly/spc-"+t(v.value)+"-"+t(B.value)+".tar.gz && tar -zxvf spc.tgz && rm spc.tgz",1),yl])])):j("",!0),D.value?(x(),y("div",vl,[s("b",null,t(a[e.lang].downloadExtOnlyCommand),1),s("div",fl,t($.value)+" download --with-php="+t(S.value)+' --for-extensions "'+t(R.value)+'"'+t(E.value?" --debug":""),1)])):(x(),y("div",wl,[s("b",null,t(a[e.lang].downloadAllCommand),1),s("div",zl,t($.value)+" download --all --with-php="+t(S.value)+t(E.value?" --debug":""),1)])),s("div",El,[s("b",null,t(a[e.lang].compileCommand),1),s("div",_l,t($.value)+" build "+t(Z.value)+' "'+t(R.value)+'"'+t(J.value)+t(E.value?" --debug":"")+t(C.value?" --enable-zts":"")+t(X.value),1)])]))}});const Cl=de(ql,[["__scopeId","data-v-b101b3b3"]]);export{Cl as C};
