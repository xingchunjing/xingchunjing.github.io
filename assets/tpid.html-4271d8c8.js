import{_ as a,X as s,Y as n,a2 as e}from"./framework-f01f539c.js";const i={},d=e(`<h2 id="线程命令" tabindex="-1"><a class="header-anchor" href="#线程命令" aria-hidden="true">#</a> 线程命令</h2><h3 id="根据pid查看进程" tabindex="-1"><a class="header-anchor" href="#根据pid查看进程" aria-hidden="true">#</a> 根据pid查看进程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#ps查询</span>
<span class="token function">ps</span> -aux<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token number">3651</span>
<span class="token comment">#查找进程目录</span>
<span class="token builtin class-name">cd</span> /proc/pid
cwd <span class="token operator">&gt;</span> 进程目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="top命令" tabindex="-1"><a class="header-anchor" href="#top命令" aria-hidden="true">#</a> top命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#按进程的CPU使用率排序</span>
运行top命令后，键入大写P

<span class="token comment">#按进程的内存使用率排序</span>
运行top命令后，键入大写M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看线程详情" tabindex="-1"><a class="header-anchor" href="#查看线程详情" aria-hidden="true">#</a> 查看线程详情</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看详情</span>
<span class="token function">ps</span> p pid <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> pcpu,pmem,pid,tid,time,tname,cmd

<span class="token comment">#查看数量</span>
<span class="token function">ps</span> p pid <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> pcpu,pmem,pid,tid,time,tname,cmd<span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导出堆栈信息" tabindex="-1"><a class="header-anchor" href="#导出堆栈信息" aria-hidden="true">#</a> 导出堆栈信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#导出到当前目录</span>
jstack <span class="token parameter variable">-l</span> pid <span class="token operator">&gt;</span> ./jstack.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[d];function l(r,t){return s(),n("div",null,c)}const o=a(i,[["render",l],["__file","tpid.html.vue"]]);export{o as default};
