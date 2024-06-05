import{d as le,h as g,k as V,y as G,o as r,c as b,m as i,t as l,F as U,G as L,e as z,a3 as x,a4 as X,a5 as S,a6 as ne,a as oe,a7 as M,q as ae,s as de,_ as pe}from"./framework._YPf4yo5.js";const ue={support:{BSD:"wip"},type:"external","arg-type":"custom",source:"amqp","lib-depends":["librabbitmq"],"ext-depends-windows":["openssl"]},ce={type:"external",source:"apcu"},re={type:"builtin"},be={support:{Windows:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["bzip2"]},we={type:"builtin"},ge={type:"builtin"},xe={notes:!0,type:"builtin","arg-type":"with","lib-depends":["curl"],"ext-depends-windows":["zlib","openssl"]},me={type:"builtin","arg-type":"custom","lib-suggests":["qdbm"]},he={support:{BSD:"wip"},type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["libxml2","zlib"],"ext-depends-windows":["xml"]},ye={type:"external",source:"ext-ds"},ve={support:{Windows:"wip",BSD:"wip",Darwin:"wip",Linux:"wip"},type:"wip"},fe={support:{Windows:"wip",BSD:"wip"},notes:!0,type:"external",source:"ext-event","arg-type":"custom","lib-depends":["libevent"],"ext-depends":["openssl"],"ext-suggests":["sockets"]},ze={type:"builtin"},Se={support:{Linux:"no",BSD:"wip"},notes:!0,"arg-type":"custom",type:"builtin","lib-depends-unix":["libffi"],"lib-depends-windows":["libffi-win"]},De={type:"builtin"},ke={type:"builtin"},qe={type:"builtin","lib-suggests":["openssl"]},Be={support:{Windows:"wip",BSD:"wip"},notes:!0,type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["zlib","libpng"],"ext-depends":["zlib"],"lib-suggests":["libavif","libwebp","libjpeg","freetype"]},We={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["gettext"]},_e={support:{Windows:"wip",BSD:"no",Linux:"no"},notes:!0,type:"external","arg-type":"custom",source:"ext-glfw","lib-depends":["glfw"],"lib-depends-windows":[]},Ee={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["gmp"]},Ce={support:{BSD:"wip"},type:"builtin","arg-type":"with-prefix","arg-type-windows":"with","lib-depends-unix":["libiconv"],"lib-depends-windows":["libiconv-win"]},Ie={support:{Windows:"wip",BSD:"wip"},type:"external",source:"igbinary"},Pe={support:{Windows:"wip",BSD:"wip"},type:"external",source:"ext-imagick","arg-type":"custom","lib-depends":["imagemagick"]},Ue={support:{Windows:"wip",BSD:"wip"},notes:!0,type:"builtin","arg-type":"custom","lib-depends":["imap"],"ext-suggests":["openssl"]},Le={support:{Windows:"no",BSD:"wip",Darwin:"no"},type:"external",source:"inotify"},Ne={support:{Windows:"no",BSD:"wip"},type:"builtin","lib-depends":["icu"]},Oe={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["ldap"],"lib-suggests":["gmp","libsodium"],"ext-suggests":["openssl"]},Ae={support:{BSD:"wip"},type:"builtin","arg-type":"none","ext-depends":["xml"]},Ve={type:"builtin","arg-type":"custom","ext-depends":["mbstring"],"lib-depends":["onig"]},Te={type:"builtin","arg-type":"custom"},je={type:"wip",support:{Windows:"no",BSD:"no",Darwin:"no",Linux:"no"},notes:!0},$e={support:{Windows:"wip",BSD:"wip"},type:"external",source:"ext-memcache","arg-type":"custom","lib-depends":["zlib"],"ext-depends":["session"]},Ge={support:{Windows:"wip",BSD:"wip",Linux:"no"},type:"external",source:"memcached","arg-type":"custom","cpp-extension":!0,"lib-depends":["libmemcached"],"ext-depends":["session","zlib"]},Xe={support:{BSD:"wip",Windows:"wip"},notes:!0,type:"external",source:"mongodb","arg-type":"custom","lib-suggests":["icu","openssl","zstd","zlib"]},Me={type:"builtin","arg-type":"with","ext-depends":["mysqlnd"]},Re={type:"builtin","arg-type-windows":"with","lib-depends":["zlib"]},He={type:"wip",support:{Windows:"wip",BSD:"no",Darwin:"no",Linux:"no"},notes:!0},Fe={type:"builtin","arg-type":"custom"},Ze={notes:!0,type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["openssl","zlib"],"ext-depends":["zlib"]},Qe={support:{BSD:"wip"},notes:!0,type:"external",source:"parallel","arg-type-windows":"with","lib-depends-windows":["pthreads4w"]},Ke={support:{Windows:"no"},type:"builtin","unix-only":!0},Ye={type:"builtin"},Je={type:"builtin","arg-type":"with","ext-depends":["pdo","mysqlnd"]},ei={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","ext-depends":["pdo","pgsql"],"lib-depends":["postgresql"]},ii={support:{BSD:"wip"},type:"builtin","arg-type":"with","ext-depends":["pdo","sqlite3"],"lib-depends":["sqlite"]},si={support:{Windows:"wip",BSD:"wip"},type:"external",source:"pdo_sqlsrv","arg-type":"with","ext-depends":["pdo","sqlsrv"]},ti={support:{Windows:"wip",BSD:"wip"},notes:!0,type:"builtin","arg-type":"with-prefix","lib-depends":["postgresql"]},li={type:"builtin","ext-depends":["zlib"]},ni={support:{Windows:"no"},type:"builtin","unix-only":!0},oi={support:{Windows:"wip",BSD:"wip"},type:"external",source:"protobuf"},ai={support:{Windows:"wip",BSD:"wip",Darwin:"partial"},notes:!0,type:"external",source:"rar","cpp-extension":!0},di={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["readline"]},pi={support:{Windows:"wip",BSD:"wip"},type:"external",source:"redis","arg-type":"custom","ext-suggests":["session","igbinary"],"lib-suggests":["zstd","liblz4"]},ui={type:"builtin"},ci={type:"builtin"},ri={type:"external",source:"ext-simdjson","cpp-extension":!0},bi={support:{BSD:"wip"},type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml"]},wi={support:{Windows:"wip",BSD:"wip"},type:"external",source:"ext-snappy","cpp-extension":!0,"arg-type":"custom","lib-depends":["snappy"],"ext-suggest":["apcu"]},gi={support:{BSD:"wip"},type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml"]},xi={type:"builtin"},mi={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with","lib-depends":["libsodium"]},hi={support:{BSD:"wip"},type:"builtin","arg-type":"with-prefix","arg-type-windows":"with","lib-depends":["sqlite"]},yi={support:{Windows:"wip",BSD:"wip"},type:"external",source:"sqlsrv","lib-depends":["unixodbc"],"ext-depends-linux":["pcntl"],"cpp-extension":!0},vi={support:{BSD:"wip"},type:"external",source:"ext-ssh2","arg-type":"with-prefix","arg-type-windows":"with","lib-depends":["libssh2"],"ext-depends-windows":["openssl","zlib"]},fi={support:{Windows:"no",BSD:"wip"},notes:!0,type:"external",source:"swoole","arg-type":"custom","cpp-extension":!0,"unix-only":!0,"lib-depends":["libcares","brotli","nghttp2","zlib"],"ext-depends":["openssl","curl"],"ext-suggests":["swoole-hook-pgsql","swoole-hook-mysql","swoole-hook-sqlite"]},zi={support:{Windows:"wip",BSD:"wip"},notes:!0,type:"external",source:"swow","arg-type":"custom","lib-suggests":["openssl","curl"],"ext-suggests":["openssl","curl"]},Si={support:{Windows:"no",BSD:"wip"},type:"builtin","unix-only":!0},Di={support:{Windows:"no",BSD:"wip"},type:"builtin","unix-only":!0},ki={support:{BSD:"wip"},type:"builtin"},qi={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["tidy"]},Bi={type:"builtin"},Wi={support:{Windows:"wip",BSD:"wip"},type:"external",source:"ext-uuid","arg-type":"with-prefix","lib-depends":["libuuid"]},_i={support:{Windows:"wip",BSD:"wip"},type:"external",source:"ext-uv","arg-type":"with-prefix","lib-depends":["libuv"],"ext-depends":["sockets"]},Ei={type:"builtin",support:{Windows:"wip",BSD:"no",Darwin:"no",Linux:"no"},notes:!0},Ci={support:{Windows:"wip",BSD:"wip"},notes:!0,type:"external",source:"xhprof","ext-depends":["ctype"]},Ii={support:{Windows:"wip",BSD:"wip"},type:"external",source:"xlswriter","arg-type":"custom","ext-depends":["zlib","zip"],"lib-suggests":["openssl"]},Pi={support:{BSD:"wip"},notes:!0,type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["libxml2"],"ext-depends-windows":["iconv"]},Ui={support:{BSD:"wip"},type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml","dom"]},Li={support:{BSD:"wip"},type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml"]},Ni={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["libxslt"],"ext-depends":["xml","dom"]},Oi={support:{BSD:"wip"},type:"external",source:"yac","arg-type-unix":"custom","ext-depends-unix":["igbinary"]},Ai={support:{Windows:"wip",BSD:"wip"},type:"external",source:"yaml","arg-type":"with-prefix","lib-depends":["libyaml"]},Vi={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","arg-type-windows":"enable","lib-depends":["libzip"]},Ti={type:"builtin","arg-type":"custom","arg-type-windows":"enable","lib-depends":["zlib"]},ji={support:{Windows:"wip",BSD:"wip"},type:"external",source:"ext-zstd","arg-type":"custom","lib-depends":["zstd"]},$i={amqp:ue,apcu:ce,bcmath:re,bz2:be,calendar:we,ctype:ge,curl:xe,dba:me,dom:he,ds:ye,enchant:ve,event:fe,exif:ze,ffi:Se,fileinfo:De,filter:ke,ftp:qe,gd:Be,gettext:We,glfw:_e,gmp:Ee,iconv:Ce,igbinary:Ie,imagick:Pe,imap:Ue,inotify:Le,intl:Ne,ldap:Oe,libxml:Ae,mbregex:Ve,mbstring:Te,mcrypt:je,memcache:$e,memcached:Ge,mongodb:Xe,mysqli:Me,mysqlnd:Re,oci8:He,opcache:Fe,openssl:Ze,parallel:Qe,"password-argon2":{support:{Windows:"wip",BSD:"wip"},notes:!0,type:"builtin","arg-type":"with-prefix","lib-depends":["libargon2"]},pcntl:Ke,pdo:Ye,pdo_mysql:Je,pdo_pgsql:ei,pdo_sqlite:ii,pdo_sqlsrv:si,pgsql:ti,phar:li,posix:ni,protobuf:oi,rar:ai,readline:di,redis:pi,session:ui,shmop:ci,simdjson:ri,simplexml:bi,snappy:wi,soap:gi,sockets:xi,sodium:mi,sqlite3:hi,sqlsrv:yi,ssh2:vi,swoole:fi,"swoole-hook-mysql":{support:{Windows:"no",BSD:"wip"},notes:!0,type:"addon","arg-type":"custom","ext-depends":["mysqlnd","pdo","pdo_mysql"],"ext-suggests":["mysqli"]},"swoole-hook-pgsql":{support:{Windows:"no",BSD:"wip",Darwin:"partial"},notes:!0,type:"addon","arg-type":"custom","ext-depends":["pgsql","pdo"]},"swoole-hook-sqlite":{support:{Windows:"no",BSD:"wip"},notes:!0,type:"addon","arg-type":"custom","ext-depends":["sqlite3","pdo"]},swow:zi,sysvmsg:Si,sysvsem:Di,sysvshm:ki,tidy:qi,tokenizer:Bi,uuid:Wi,uv:_i,xdebug:Ei,xhprof:Ci,xlswriter:Ii,xml:Pi,xmlreader:Ui,xmlwriter:Li,xsl:Ni,yac:Oi,yaml:Ai,zip:Vi,zlib:Ti,zstd:ji},Gi={source:"brotli","static-libs-unix":["libbrotlidec.a","libbrotlienc.a","libbrotlicommon.a"],"static-libs-windows":["brotlicommon.lib","brotlienc.lib","brotlidec.lib"],headers:["brotli"]},Xi={source:"bzip2","static-libs-unix":["libbz2.a"],"static-libs-windows":[["libbz2.lib","libbz2_a.lib"]],headers:["bzlib.h"]},Mi={source:"curl","static-libs-unix":["libcurl.a"],"static-libs-windows":["libcurl_a.lib"],headers:["curl"],"lib-depends-unix":["openssl","zlib"],"lib-depends-windows":["openssl","zlib","libssh2","nghttp2"],"lib-suggests-unix":["libssh2","brotli","nghttp2","zstd"],"lib-suggests-windows":["brotli","zstd"],frameworks:["CoreFoundation","CoreServices","SystemConfiguration"]},Ri={source:"freetype","static-libs-unix":["libfreetype.a"],"headers-unix":["freetype2/freetype/freetype.h","freetype2/ft2build.h"],"lib-depends":["zlib"],"lib-suggests":["libpng","bzip2","brotli"]},Hi={source:"gettext","static-libs-unix":["libintl.a"],"lib-depends":["libiconv"],"lib-suggests":["ncurses","libxml2"],frameworks:["CoreFoundation"]},Fi={source:"ext-glfw","static-libs-unix":["libglfw3.a"],frameworks:["CoreVideo","OpenGL","Cocoa","IOKit"]},Zi={source:"gmp","static-libs-unix":["libgmp.a"],"static-libs-windows":["libgmp.lib"],headers:["gmp.h"]},Qi={source:"icu","cpp-library":!0,"static-libs-unix":["libicui18n.a","libicuio.a","libicuuc.a","libicudata.a"]},Ki={source:"imagemagick","static-libs-unix":["libMagick++-7.Q16HDRI.a","libMagickWand-7.Q16HDRI.a","libMagickCore-7.Q16HDRI.a"],"lib-depends":["zlib","libpng","libjpeg","libwebp","freetype","libtiff"],"lib-suggests":["zstd","xz","bzip2","libzip","libxml2"]},Yi={source:"imap","static-libs-unix":["libc-client.a"],"lib-suggests":["openssl"]},Ji={source:"ldap","static-libs-unix":["liblber.a","libldap.a"],"lib-depends":["openssl","zlib","gmp","libsodium"]},es={source:"libargon2","static-libs-unix":["libargon2.a"]},is={source:"libavif","static-libs-unix":["libavif.a"]},ss={source:"libcares","static-libs-unix":["libcares.a"],"headers-unix":["ares.h","ares_dns.h","ares_nameser.h","ares_rules.h"]},ts={source:"libevent","static-libs-unix":["libevent.a","libevent_core.a","libevent_extra.a","libevent_openssl.a"],"lib-depends":["openssl"]},ls={source:"libffi","static-libs-unix":["libffi.a"],"static-libs-windows":["libffi.lib"],"headers-unix":["ffi.h","ffitarget.h"],"headers-windows":["ffi.h","fficonfig.h","ffitarget.h"]},ns={source:"libiconv","static-libs-unix":["libiconv.a","libcharset.a"],headers:["iconv.h","libcharset.h","localcharset.h"]},os={source:"libjpeg","static-libs-unix":["libjpeg.a","libturbojpeg.a"]},as={source:"liblz4","static-libs-unix":["liblz4.a"]},ds={source:"libmemcached","static-libs-unix":["libmemcached.a","libmemcachedutil.a"]},ps={source:"libpng","static-libs-unix":["libpng16.a"],"static-libs-windows":["libpng16_static.lib"],"headers-unix":["png.h","pngconf.h","pnglibconf.h"],"headers-windows":["png.h","pngconf.h"],"lib-depends":["zlib"]},us={source:"librabbitmq","static-libs-unix":["librabbitmq.a"],"static-libs-windows":["rabbitmq.4.lib"],"lib-depends":["openssl"]},cs={source:"libsodium","static-libs-unix":["libsodium.a"]},rs={source:"libssh2","static-libs-unix":["libssh2.a"],"static-libs-windows":["libssh2.lib"],headers:["libssh2.h","libssh2_publickey.h","libssh2_sftp.h"],"lib-depends":["openssl"],"lib-suggests":["zlib"]},bs={source:"libtiff","static-libs-unix":["libtiff.a"]},ws={source:"libuuid","static-libs-unix":["libuuid.a"],headers:["uuid/uuid.h"]},gs={source:"libuv","static-libs-unix":["libuv.a"]},xs={source:"libwebp","static-libs-unix":["libwebp.a","libwebpdecoder.a","libwebpdemux.a","libwebpmux.a","libsharpyuv.a"]},ms={source:"libxml2","static-libs-unix":["libxml2.a"],"static-libs-windows":["libxml2s.lib","libxml2_a.lib"],headers:["libxml2"],"lib-depends-unix":["libiconv"],"lib-suggests-unix":["xz","icu","zlib"],"lib-depends-windows":["libiconv-win"],"lib-suggests-windows":["zlib"]},hs={source:"libxslt","static-libs-unix":["libxslt.a","libexslt.a"],"lib-depends":["libxml2"]},ys={source:"libyaml","static-libs-unix":["libyaml.a"],"static-libs-windows":["yaml.lib"],headers:["yaml.h"]},vs={source:"libzip","static-libs-unix":["libzip.a"],"static-libs-windows":[["zip.lib","libzip_a.lib"]],headers:["zip.h","zipconf.h"],"lib-depends":["zlib"],"lib-suggests":["bzip2","xz","zstd","openssl"]},fs={source:"ncurses","static-libs-unix":["libncurses.a"]},zs={source:"nghttp2","static-libs-unix":["libnghttp2.a"],"static-libs-windows":["nghttp2.lib"],headers:["nghttp2"],"lib-depends":["zlib","openssl"],"lib-suggests":["libxml2"]},Ss={source:"onig","static-libs-unix":["libonig.a"],"static-libs-windows":["onig.lib","onig_a.lib"],headers:["oniggnu.h","oniguruma.h"]},Ds={source:"openssl","static-libs-unix":["libssl.a","libcrypto.a"],"static-libs-windows":["libssl.lib","libcrypto.lib"],headers:["openssl"],"lib-depends":["zlib"]},ks={source:"postgresql","static-libs-unix":["libpq.a","libpgport.a","libpgcommon.a"],"lib-depends":["libiconv","libxml2","openssl","zlib","readline"],"lib-suggests":["icu","libxslt","ldap","zstd"]},qs={source:"pthreads4w","static-libs-windows":["libpthreadVC3.lib"]},Bs={source:"qdbm","static-libs-unix":["libqdbm.a"],"static-libs-windows":["qdbm_a.lib"],"headers-windows":["depot.h"]},Ws={source:"readline","static-libs-unix":["libreadline.a"],"lib-depends":["ncurses"]},_s={source:"snappy","static-libs-unix":["libsnappy.a"],"headers-unix":["snappy.h","snappy-c.h","snappy-sinksource.h","snappy-stubs-public.h"],"lib-depends":["zlib"]},Es={source:"sqlite","static-libs-unix":["libsqlite3.a"],"static-libs-windows":["libsqlite3_a.lib"],headers:["sqlite3.h","sqlite3ext.h"]},Cs={source:"tidy","static-libs-unix":["libtidy.a"]},Is={source:"unixodbc","static-libs-unix":["libodbc.a","libodbccr.a","libodbcinst.a"],"lib-depends":["libiconv"]},Ps={source:"xz","static-libs-unix":["liblzma.a"],"static-libs-windows":[["liblzma.lib","liblzma_a.lib"]],"headers-unix":["lzma"],"headers-windows":["lzma","lzma.h"],"lib-depends":["libiconv"]},Us={source:"zlib","static-libs-unix":["libz.a"],"static-libs-windows":["zlib_a.lib"],headers:["zlib.h","zconf.h"]},Ls={source:"zstd","static-libs-unix":["libzstd.a"],"static-libs-windows":[["zstd.lib","zstd_static.lib"]],"headers-unix":["zdict.h","zstd.h","zstd_errors.h"],"headers-windows":["zstd.h","zstd_errors.h"]},Ns={brotli:Gi,bzip2:Xi,curl:Mi,freetype:Ri,gettext:Hi,glfw:Fi,gmp:Zi,icu:Qi,imagemagick:Ki,imap:Yi,ldap:Ji,libargon2:es,libavif:is,libcares:ss,libevent:ts,libffi:ls,"libffi-win":{source:"libffi-win","static-libs-windows":["libffi.lib"],"headers-windows":["ffi.h","ffitarget.h","fficonfig.h"]},libiconv:ns,"libiconv-win":{source:"libiconv-win","static-libs-windows":["libiconv.lib","libiconv_a.lib"]},libjpeg:os,liblz4:as,libmemcached:ds,libpng:ps,librabbitmq:us,libsodium:cs,libssh2:rs,libtiff:bs,libuuid:ws,libuv:gs,libwebp:xs,libxml2:ms,libxslt:hs,libyaml:ys,libzip:vs,ncurses:fs,nghttp2:zs,onig:Ss,openssl:Ds,"pkg-config":{source:"pkg-config"},postgresql:ks,pthreads4w:qs,qdbm:Bs,readline:Ws,snappy:_s,sqlite:Es,tidy:Cs,unixodbc:Is,xz:Ps,zlib:Us,zstd:Ls};function B(e,s,a,p){return e.os==="linux"?e[s][a][p+"-linux"]??e[s][a][p+"-unix"]??e[s][a][p]??[]:e.os==="macos"?e[s][a][p+"-macos"]??e[s][a][p+"-unix"]??e[s][a][p]??[]:e.os==="windows"?e[s][a][p+"-windows"]??e[s][a][p]??[]:[]}function Z(e,s){return B(e,"ext",s,"ext-depends")}function Os(e,s){return B(e,"ext",s,"ext-suggests")}function As(e,s){return B(e,"ext",s,"lib-depends")}function Vs(e,s){return B(e,"ext",s,"lib-suggests")}function Q(e,s){return B(e,"lib",s,"lib-depends")}function Ts(e,s){return B(e,"lib",s,"lib-suggests")}function js(e,s){const a=[],p=new Set,h=[];s.forEach(o=>{p.has(o)||Xs(e,o,p,a)});const f=[];return a.forEach(o=>{s.indexOf(o)===-1&&h.push(o),[...As(e,o),...Vs(e,o)].forEach(N=>{f.indexOf(N)===-1&&f.push(N)})}),{exts:a,libs:$s(e,f),notIncludedExts:h}}function $s(e,s){const a=[],p=new Set;return s.forEach(h=>{p.has(h)||(console.log("before visited"),console.log(p),Gs(e,h,p,a),console.log("after visited"),console.log(p))}),a}function Gs(e,s,a,p){if(a.has(s))return;a.add(s),[...Q(e,s),...Ts(e,s)].forEach(f=>{K(e,f,a,p)}),p.push(s)}function K(e,s,a,p){a.has(s)||(a.add(s),Q(e,s).forEach(h=>{K(e,h,a,p)}),p.push(s))}function Y(e,s,a,p){a.has(a)||(a.add(s),Z(e,s).forEach(h=>{Y(e,h,a,p)}),p.push(s))}function Xs(e,s,a,p){if(a.has(s))return;a.add(s),[...Z(e,s),...Os(e,s)].forEach(f=>{Y(e,f,a,p)}),p.push(s)}const W=e=>(ae("data-v-4cdb2891"),e=e(),de(),e),Ms={class:"option-line"},Rs=["id","value","disabled"],Hs=["for"],Fs={class:"box"},Zs={class:"ext-item"},Qs=["id","value","disabled"],Ks=["for"],Ys={class:"details custom-block"},Js={class:"box"},et={class:"ext-item"},it=["id","value","disabled"],st=["for"],tt={class:"tip custom-block"},lt=W(()=>i("p",{class:"custom-block-title"},"TIP",-1)),nt={class:"box"},ot={class:"ext-item"},at=["id","value"],dt=["for"],pt={key:1,class:"warning custom-block"},ut=W(()=>i("p",{class:"custom-block-title"},"WARNING",-1)),ct={key:2,class:"warning custom-block"},rt=W(()=>i("p",{class:"custom-block-title"},"WARNING",-1)),bt={class:"option-line"},wt={class:"option-title"},gt={value:"native"},xt={value:"spc"},mt={key:0,value:"docker"},ht={key:3,class:"option-line"},yt={class:"option-title"},vt=W(()=>i("option",{value:"x86_64"},"x86_64 (amd64)",-1)),ft={key:0,value:"aarch64"},zt={class:"option-line"},St={class:"option-title"},Dt=["value"],kt={class:"option-line"},qt={class:"option-title"},Bt={for:"debug-yes"},Wt={for:"debug-no"},_t={class:"option-line"},Et={class:"option-title"},Ct={for:"zts-yes"},It={for:"zts-no"},Pt={class:"option-line"},Ut={class:"option-title"},Lt={for:"show-download-yes"},Nt={for:"show-download-no"},Ot={key:4,class:"option-line"},At={class:"option-title"},Vt={for:"upx-yes"},Tt={for:"upx-no"},jt=["placeholder"],$t={key:5,class:"command-container"},Gt={key:0,class:"command-preview"},Xt=W(()=>i("br",null,null,-1)),Mt={key:1},Rt={class:"warning custom-block"},Ht=W(()=>i("p",{class:"custom-block-title"},"WARNING",-1)),Ft={key:6,class:"command-container"},Zt={class:"command-preview"},Qt={key:7,class:"command-container"},Kt={class:"command-preview"},Yt={key:8,class:"command-container"},Jt={class:"command-preview"},el={class:"command-container"},il={class:"command-preview"},sl={name:"CliGenerator"},tl=le({...sl,props:{lang:{type:String,default:"zh"}},setup(e){const s=g($i),a=g(Ns),p=g([]),h=[{os:"linux",label:"Linux",disabled:!1},{os:"macos",label:"macOS",disabled:!1},{os:"windows",label:"Windows",disabled:!1}],f=["7.4","8.0","8.1","8.2","8.3"],o={zh:{selectExt:"选择扩展",buildTarget:"选择编译目标",buildOptions:"编译选项",buildEnvironment:"编译环境",buildEnvNative:"本地构建（Git 源码）",buildEnvSpc:"本地构建（独立 spc 二进制）",buildEnvDocker:"Alpine Docker 构建",useDebug:"是否开启调试输出",yes:"是",no:"否",resultShow:"结果展示",selectCommon:"选择常用扩展",selectNone:"全部取消选择",useZTS:"是否编译线程安全版",hardcodedINI:"硬编码 INI 选项",hardcodedINIPlacehoder:"如需要硬编码 ini，每行写一个，例如：memory_limit=2G",resultShowDownload:"是否展示仅下载对应扩展依赖的命令",downloadExtOnlyCommand:"只下载对应扩展的依赖包命令",downloadAllCommand:"下载所有依赖包命令",downloadUPXCommand:"下载 UPX 命令",compileCommand:"编译命令",downloadPhpVersion:"下载 PHP 版本",downloadSPCBinaryCommand:"下载 spc 二进制命令",selectedArch:"选择系统架构",selectedSystem:"选择操作系统",buildLibs:"要构建的库",depTips:"选择扩展后，不可选中的项目为必需的依赖，编译的依赖库列表中可选的为现有扩展和依赖库的可选依赖。选择可选依赖后，将生成 --with-libs 参数。",microUnavailable:"micro 不支持 PHP 7.4 及更早版本！",windowsSAPIUnavailable:"Windows 目前不支持 fpm、embed 构建！",useUPX:"是否开启 UPX 压缩（减小二进制体积，但很少见的情况下 micro SAPI 无法使用）",windowsDownSPCWarning:"Windows 下请手动下载 spc.exe 二进制文件并解压到当前目录！"},en:{selectExt:"Select Extensions",buildTarget:"Build Target",buildOptions:"Build Options",buildEnvironment:"Build Environment",buildEnvNative:"Native build (Git source code)",buildEnvSpc:"Native build (standalone spc binary)",buildEnvDocker:"Alpine docker build",useDebug:"Enable debug message",yes:"Yes",no:"No",resultShow:"Result",selectCommon:"Select common extensions",selectNone:"Unselect all",useZTS:"Enable ZTS",hardcodedINI:"Hardcoded INI options",hardcodedINIPlacehoder:"If you need to hardcode ini, write one per line, for example: memory_limit=2G",resultShowDownload:"Download with corresponding extension dependencies",downloadExtOnlyCommand:"Download sources by extensions command",downloadAllCommand:"Download all sources command",downloadUPXCommand:"Download UPX command",compileCommand:"Compile command",downloadPhpVersion:"Download PHP version",downloadSPCBinaryCommand:"Download spc binary command",selectedArch:"Select build architecture",selectedSystem:"Select Build OS",buildLibs:"Select Dependencies",depTips:"After selecting the extensions, the unselectable items are essential dependencies. In the compiled dependencies list, optional dependencies consist of existing extensions and optional dependencies of libraries. Optional dependencies will be added in --with-libs parameter.",microUnavailable:"Micro does not support PHP 7.4 and earlier versions!",windowsSAPIUnavailable:"Windows does not support fpm and embed build!",useUPX:"Enable UPX compression (reduce binary size, but in rare cases micro SAPI doesn't work with UPX)",windowsDownSPCWarning:"Please download the spc.exe binary file manually and extract it to the current directory on Windows!"}},R=["cli","fpm","micro","embed","all"],N=()=>{y.value=["apcu","bcmath","calendar","ctype","curl","dba","dom","exif","filter","fileinfo","gd","iconv","intl","mbstring","mbregex","mysqli","mysqlnd","openssl","opcache","pcntl","pdo","pdo_mysql","pdo_sqlite","pdo_pgsql","pgsql","phar","posix","readline","redis","session","simplexml","sockets","sodium","sqlite3","tokenizer","xml","xmlreader","xmlwriter","xsl","zip","zlib"]},H=V(()=>y.value.join(",")),J=V(()=>{const m=D.value.filter(n=>O.value.indexOf(n)===-1);return m.length>0?' --with-libs="'+m.join(",")+'"':""}),y=g([]),D=g([]),T=g([]),O=g([]),v=g(["cli"]),_=g("native"),E=g("8.2"),k=g(0),C=g(0),I=g(1),q=g(0),j=g(""),c=g("linux"),$=g("x86_64"),A=V(()=>{switch(_.value){case"native":return"bin/spc";case"spc":return c.value==="windows"?".\\spc.exe":"./spc";case"docker":return"bin/spc-alpine-docker";default:return""}}),F=g("--build-cli"),ee=V(()=>{const m=j.value.split(`
`);let n=[];return m.forEach(t=>{t.indexOf("=")>=1&&n.push(t)})," "+n.map(t=>'-I "'+t+'"').join(" ")}),ie=m=>{let n;v.value.indexOf("all")!==-1&&m.target.value==="all"?v.value=["all"]:(n=v.value.indexOf("all"))!==-1&&m.target.value!=="all"&&v.value.splice(n,1),F.value=v.value.map(t=>"--build-"+t).join(" ")},se=m=>{const n=new Set,t=u=>{let d=[];if(c.value==="linux"){if(d=s.value[u]["ext-depends-linux"]??s.value[u]["ext-depends-unix"]??s.value[u]["ext-depends"]??[],d.length===0)return}else if(c.value==="macos"){if(d=s.value[u]["ext-depends-macos"]??s.value[u]["ext-depends-unix"]??s.value[u]["ext-depends"]??[],d.length===0)return}else if(c.value==="windows"&&(d=s.value[u]["ext-depends-windows"]??s.value[u]["ext-depends"]??[],d.length===0))return;d.forEach(w=>{n.add(w),t(w)})};return m.forEach(u=>{t(u)}),Array.from(n)},te=m=>{const n=new Set,t=d=>{let w=[];if(c.value==="linux"){if(w=a.value[d]["lib-depends-linux"]??a.value[d]["lib-depends-unix"]??a.value[d]["lib-depends"]??[],w.length===0)return}else if(c.value==="macos"){if(w=a.value[d]["lib-depends-macos"]??a.value[d]["lib-depends-unix"]??a.value[d]["lib-depends"]??[],w.length===0)return}else if(c.value==="windows"&&(w=a.value[d]["lib-depends-windows"]??a.value[d]["lib-depends"]??[],w.length===0))return;w.forEach(P=>{n.add(P),t(P)})},u=d=>{let w=[];if(c.value==="linux"){if(w=s.value[d]["lib-depends-linux"]??s.value[d]["lib-depends-unix"]??s.value[d]["lib-depends"]??[],w.length===0)return}else if(c.value==="macos"){if(w=s.value[d]["lib-depends-macos"]??s.value[d]["lib-depends-unix"]??s.value[d]["lib-depends"]??[],w.length===0)return}else if(c.value==="windows"&&(w=s.value[d]["lib-depends-windows"]??s.value[d]["lib-depends"]??[],w.length===0))return;w.forEach(P=>{n.add(P),t(P)})};return m.forEach(d=>{u(d)}),Array.from(n)};return G(c,()=>y.value=[]),G(c,()=>q.value=0),G(y,m=>{T.value=se(m),T.value.forEach(t=>{y.value.indexOf(t)===-1&&y.value.push(t)}),y.value.sort(),console.log("检测到变化！"),console.log(m);const n=js({ext:s.value,lib:a.value,os:c.value},y.value);p.value=n.libs.sort(),D.value=[],O.value=te(n.exts),O.value.forEach(t=>{D.value.indexOf(t)===-1&&D.value.push(t)})}),(m,n)=>(r(),b("div",null,[i("h2",null,l(o[e.lang].selectedSystem),1),i("div",Ms,[(r(),b(U,null,L(h,(t,u)=>i("span",{key:u,style:{"margin-right":"4px"}},[x(i("input",{type:"radio",id:"os-"+t.os,value:t.os,disabled:t.disabled===!0,"onUpdate:modelValue":n[0]||(n[0]=d=>c.value=d)},null,8,Rs),[[S,c.value]]),i("label",{for:"os-"+t.os},l(t.label),9,Hs)])),64))]),i("h2",null,l(o[e.lang].selectExt)+l(y.value.length>0?" ("+y.value.length+")":""),1),i("div",Fs,[(r(!0),b(U,null,L(s.value,(t,u)=>(r(),b("div",Zs,[x(i("input",{type:"checkbox",id:u,value:u,"onUpdate:modelValue":n[1]||(n[1]=d=>y.value=d),disabled:T.value.indexOf(u)!==-1},null,8,Qs),[[M,y.value]]),i("label",{for:u},l(u),9,Ks)]))),256))]),c.value!=="windows"?(r(),b("div",{key:0,class:"my-btn",onClick:N},l(o[e.lang].selectCommon),1)):z("",!0),i("div",{class:"my-btn",onClick:n[2]||(n[2]=t=>y.value=[])},l(o[e.lang].selectNone),1),i("details",Ys,[i("summary",null,l(o[e.lang].buildLibs)+l(D.value.length>0?" ("+D.value.length+")":""),1),i("div",Js,[(r(!0),b(U,null,L(p.value,(t,u)=>(r(),b("div",et,[x(i("input",{type:"checkbox",id:u,value:t,"onUpdate:modelValue":n[3]||(n[3]=d=>D.value=d),disabled:O.value.indexOf(t)!==-1},null,8,it),[[M,D.value]]),i("label",{for:u},l(t),9,st)]))),256))])]),i("div",tt,[lt,i("p",null,l(o[e.lang].depTips),1)]),i("h2",null,l(o[e.lang].buildTarget),1),i("div",nt,[(r(),b(U,null,L(R,t=>i("div",ot,[x(i("input",{type:"checkbox",id:"build_"+t,value:t,"onUpdate:modelValue":n[4]||(n[4]=u=>v.value=u),onChange:ie},null,40,at),[[M,v.value]]),i("label",{for:"build_"+t},l(t),9,dt)])),64))]),E.value==="7.4"&&(v.value.indexOf("micro")!==-1||v.value.indexOf("all")!==-1)?(r(),b("div",pt,[ut,i("p",null,l(o[e.lang].microUnavailable),1)])):z("",!0),c.value==="windows"&&(v.value.indexOf("fpm")!==-1||v.value.indexOf("embed")!==-1)?(r(),b("div",ct,[rt,i("p",null,l(o[e.lang].windowsSAPIUnavailable),1)])):z("",!0),i("h2",null,l(o[e.lang].buildOptions),1),i("div",bt,[i("span",wt,l(o[e.lang].buildEnvironment),1),x(i("select",{"onUpdate:modelValue":n[5]||(n[5]=t=>_.value=t)},[i("option",gt,l(o[e.lang].buildEnvNative),1),i("option",xt,l(o[e.lang].buildEnvSpc),1),c.value!=="windows"?(r(),b("option",mt,l(o[e.lang].buildEnvDocker),1)):z("",!0)],512),[[X,_.value]])]),_.value==="spc"?(r(),b("div",ht,[i("span",yt,l(o[e.lang].selectedArch),1),x(i("select",{"onUpdate:modelValue":n[6]||(n[6]=t=>$.value=t)},[vt,c.value!=="windows"?(r(),b("option",ft,"aarch64 (arm64)")):z("",!0)],512),[[X,$.value]])])):z("",!0),i("div",zt,[i("span",St,l(o[e.lang].downloadPhpVersion),1),x(i("select",{"onUpdate:modelValue":n[7]||(n[7]=t=>E.value=t)},[(r(),b(U,null,L(f,t=>i("option",{value:t},l(t),9,Dt)),64))],512),[[X,E.value]])]),i("div",kt,[i("span",qt,l(o[e.lang].useDebug),1),x(i("input",{type:"radio",id:"debug-yes",value:1,"onUpdate:modelValue":n[8]||(n[8]=t=>k.value=t)},null,512),[[S,k.value]]),i("label",Bt,l(o[e.lang].yes),1),x(i("input",{type:"radio",id:"debug-no",value:0,"onUpdate:modelValue":n[9]||(n[9]=t=>k.value=t)},null,512),[[S,k.value]]),i("label",Wt,l(o[e.lang].no),1)]),i("div",_t,[i("span",Et,l(o[e.lang].useZTS),1),x(i("input",{type:"radio",id:"zts-yes",value:1,"onUpdate:modelValue":n[10]||(n[10]=t=>C.value=t)},null,512),[[S,C.value]]),i("label",Ct,l(o[e.lang].yes),1),x(i("input",{type:"radio",id:"zts-no",value:0,"onUpdate:modelValue":n[11]||(n[11]=t=>C.value=t)},null,512),[[S,C.value]]),i("label",It,l(o[e.lang].no),1)]),i("div",Pt,[i("span",Ut,l(o[e.lang].resultShowDownload),1),x(i("input",{type:"radio",id:"show-download-yes",value:1,"onUpdate:modelValue":n[12]||(n[12]=t=>I.value=t)},null,512),[[S,I.value]]),i("label",Lt,l(o[e.lang].yes),1),x(i("input",{type:"radio",id:"show-download-no",value:0,"onUpdate:modelValue":n[13]||(n[13]=t=>I.value=t)},null,512),[[S,I.value]]),i("label",Nt,l(o[e.lang].no),1)]),c.value!=="macos"?(r(),b("div",Ot,[i("span",At,l(o[e.lang].useUPX),1),x(i("input",{type:"radio",id:"upx-yes",value:1,"onUpdate:modelValue":n[14]||(n[14]=t=>q.value=t)},null,512),[[S,q.value]]),i("label",Vt,l(o[e.lang].yes),1),x(i("input",{type:"radio",id:"upx-no",value:0,"onUpdate:modelValue":n[15]||(n[15]=t=>q.value=t)},null,512),[[S,q.value]]),i("label",Tt,l(o[e.lang].no),1)])):z("",!0),i("h2",null,l(o[e.lang].hardcodedINI),1),x(i("textarea",{class:"textarea",placeholder:o[e.lang].hardcodedINIPlacehoder,"onUpdate:modelValue":n[16]||(n[16]=t=>j.value=t),rows:"5"},null,8,jt),[[ne,j.value]]),i("h2",null,l(o[e.lang].resultShow),1),_.value==="spc"?(r(),b("div",$t,[i("b",null,l(o[e.lang].downloadSPCBinaryCommand),1),c.value!=="windows"?(r(),b("div",Gt,[oe(" curl -o spc.tgz https://dl.static-php.dev/static-php-cli/spc-bin/nightly/spc-"+l(c.value)+"-"+l($.value)+".tar.gz && tar -zxvf spc.tgz && rm spc.tgz",1),Xt])):(r(),b("div",Mt,[i("div",Rt,[Ht,i("p",null,l(o[e.lang].windowsDownSPCWarning),1)])]))])):z("",!0),I.value?(r(),b("div",Ft,[i("b",null,l(o[e.lang].downloadExtOnlyCommand),1),i("div",Zt,l(A.value)+" download --with-php="+l(E.value)+' --for-extensions "'+l(H.value)+'"'+l(k.value?" --debug":""),1)])):(r(),b("div",Qt,[i("b",null,l(o[e.lang].downloadAllCommand),1),i("div",Kt,l(A.value)+" download --all --with-php="+l(E.value)+l(k.value?" --debug":""),1)])),q.value?(r(),b("div",Yt,[i("b",null,l(o[e.lang].downloadUPXCommand),1),i("div",Jt,l(A.value)+" install-pkg upx"+l(k.value?" --debug":""),1)])):z("",!0),i("div",el,[i("b",null,l(o[e.lang].compileCommand),1),i("div",il,l(A.value)+" build "+l(F.value)+' "'+l(H.value)+'"'+l(J.value)+l(k.value?" --debug":"")+l(C.value?" --enable-zts":"")+l(q.value?" --with-upx-pack":"")+l(ee.value),1)])]))}}),nl=pe(tl,[["__scopeId","data-v-4cdb2891"]]);export{nl as C};
