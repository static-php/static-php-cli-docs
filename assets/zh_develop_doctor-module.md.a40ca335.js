import{_ as s,c as n,o as a,U as l}from"./chunks/framework.a73c7ff7.js";const i=JSON.parse('{"title":"Doctor 模块","description":"","frontmatter":{},"headers":[],"relativePath":"zh/develop/doctor-module.md","filePath":"zh/develop/doctor-module.md"}'),o={name:"zh/develop/doctor-module.md"},p=l(`<h1 id="doctor-模块" tabindex="-1">Doctor 模块 <a class="header-anchor" href="#doctor-模块" aria-label="Permalink to &quot;Doctor 模块&quot;">​</a></h1><p>Doctor 模块是一个较为独立的用于检查系统环境的模块，可使用命令 <code>bin/spc doctor</code> 进入，入口的命令类在 <code>DoctorCommand.php</code> 中。</p><p>Doctor 模块是一个检查单，里面有一系列的检查项目和自动修复项目。这些项目都存放在 <code>src/SPC/doctor/item/</code> 目录中， 并且使用了两种 Attribute 用作检查项标记和自动修复项目标记：<code>#[AsCheckItem]</code> 和 <code>#[AsFixItem]</code>。</p><p>以现有的检查项 <code>if necessary tools are installed</code>，它是用于检查编译必需的包是否安装在 macOS 系统内，下面是它的源码：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">SPC</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">doctor</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">AsCheckItem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">SPC</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">doctor</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">AsFixItem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">SPC</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">doctor</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">CheckResult</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#[AsCheckItem</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">if necessary tools are installed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">limit_os</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Darwin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">level</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">997</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">checkCliTools</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#FFCB6B;">CheckResult</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">missing </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">foreach</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">self</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">REQUIRED_COMMANDS </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">cmd</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($this-&gt;</span><span style="color:#82AAFF;">findCommand</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">cmd</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">missing</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">cmd</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(!</span><span style="color:#82AAFF;">empty</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">missing</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CheckResult</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">missing system commands: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">implode</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">missing</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">build-tools</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[$</span><span style="color:#A6ACCD;">missing</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CheckResult</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">ok</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>属性的第一个参数就是检查项目的名称，后面的 <code>limit_os</code> 参数是限制了该检查项仅在指定的系统下触发，<code>level</code> 是执行该检查项的优先级，数字越大，优先级越高。</p><p>里面用到的 <code>$this-&gt;findCommand()</code> 方法为 <code>SPC\\builder\\traits\\UnixSystemUtilTrait</code> 的方法，用途是查找系统命令所在位置，找不到时返回 NULL。</p><p>每个检查项的方法都应该返回一个 <code>SPC\\doctor\\CheckResult</code>：</p><ul><li>在返回 <code>CheckResult::fail()</code> 时，第一个参数用于输出终端的错误提示，第二个参数是在这个检查项可自动修复时的修复项目名称。</li><li>在返回 <code>CheckResult::ok()</code> 时，表明检查通过。你也可以传递一个参数，用于返回检查结果，例如：<code>CheckResult::ok(&#39;OS supported&#39;)</code>。</li><li>在返回 <code>CheckResult::fail()</code> 时，如果包含了第三个参数，第三个参数的数组将被当作 <code>AsFixItem</code> 的参数。</li></ul><p>下面是这个检查项对应的自动修复项的方法：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#[AsFixItem</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">build-tools</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fixBuildTools</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">missing</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">bool</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">foreach</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">missing </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">cmd</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">shell</span><span style="color:#89DDFF;">(true)-&gt;</span><span style="color:#82AAFF;">exec</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">brew install </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">escapeshellarg</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">cmd</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">RuntimeException</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><code>#[AsFixItem()]</code> 属性传入的参数即修复项的名称，该方法必须返回 True 或 False。当返回 False 时，表明自动修复失败，需要手动处理。</p><p>此处的代码中 <code>shell()-&gt;exec()</code> 是项目的执行命令的方法，用于替代 <code>exec()</code>、<code>system()</code>，同时提供了 debug、获取执行状态、进入目录等特性。</p>`,13),e=[p];function c(t,D,r,F,y,C){return a(),n("div",null,e)}const d=s(o,[["render",c]]);export{i as __pageData,d as default};