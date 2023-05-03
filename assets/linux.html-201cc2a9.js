import{_ as a,X as n,Y as s,a5 as e}from"./framework-608b3dd6.js";const p={},i=e(`<h2 id="linux命令" tabindex="-1"><a class="header-anchor" href="#linux命令" aria-hidden="true">#</a> linux命令</h2><h3 id="根据pid查看进程" tabindex="-1"><a class="header-anchor" href="#根据pid查看进程" aria-hidden="true">#</a> 根据pid查看进程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#ps查询</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看大文件" tabindex="-1"><a class="header-anchor" href="#查看大文件" aria-hidden="true">#</a> 查看大文件</h2><h3 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#最简单的方法就是借助 ls 命令，因为 ls 命令本身输出是带文件大小信息的。</span>
<span class="token comment">#比如，我要列出 /jj/log/ 目录中的20个最大文件，可以：</span>
<span class="token function">ls</span> <span class="token parameter variable">-lSh</span> /jj/log/ <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h3><p>find 本身就是查找命令，可以递归查找一个目录的子目录，所以用它是自然的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#比如，查找/etc目录下最大的5个文件：</span>
<span class="token function">find</span> /etc <span class="token parameter variable">-type</span> f <span class="token parameter variable">-printf</span> “%s<span class="token punctuation">\\</span>t%p<span class="token punctuation">\\</span>n” <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-5</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">ls</span> <span class="token parameter variable">-Slh</span>

<span class="token comment">#查找当前用户名下最大的10个文件</span>
<span class="token function">find</span> <span class="token environment constant">$HOME</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-printf</span> “%s<span class="token punctuation">\\</span>t%p<span class="token punctuation">\\</span>n” <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-10</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">ls</span> <span class="token parameter variable">-Slh</span>

<span class="token comment">#查询大于200M的文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-type</span> f <span class="token parameter variable">-size</span> +200M <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">ls</span> <span class="token parameter variable">-Slh</span>

<span class="token comment">#查询100M和200M之间的文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-type</span> f <span class="token parameter variable">-size</span> +100M <span class="token parameter variable">-size</span> +200M <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">ls</span> <span class="token parameter variable">-Slh</span>

<span class="token comment">#查询root目录下最大的5个文件</span>
ind /root <span class="token parameter variable">-type</span> f <span class="token parameter variable">-exec</span> <span class="token function">ls</span> <span class="token parameter variable">-s</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n5</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">ls</span> <span class="token parameter variable">-Slh</span>

<span class="token comment">#查询/目录下10天以前最大的5个文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-type</span> f <span class="token parameter variable">-mtime</span> +10 <span class="token parameter variable">-printf</span> “%s<span class="token punctuation">\\</span>t%p<span class="token punctuation">\\</span>n” <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-5</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">ls</span> <span class="token parameter variable">-Slh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="du" tabindex="-1"><a class="header-anchor" href="#du" aria-hidden="true">#</a> du</h3><p>du 命令可以查看磁盘空间的使用情况，自然也可以用来查看磁盘上占用空间较多的文件和文件夹。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查找/root下5个最大的文件</span>
<span class="token function">du</span> <span class="token parameter variable">-ah</span> /root <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n5</span>

<span class="token comment">#查找当前目录下最大的5个目录</span>
<span class="token function">du</span> <span class="token parameter variable">-ah</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n5</span>

<span class="token comment">#查找根目录下最大目录/文件(包括子文件夹)</span>
<span class="token function">du</span> <span class="token parameter variable">-Sh</span> / <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-rh</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n10</span>

<span class="token comment">#只看大小在 GB 范围内的所有文件</span>
<span class="token function">du</span> <span class="token parameter variable">-ah</span> / <span class="token operator">|</span> <span class="token function">grep</span> “<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>G<span class="token punctuation">\\</span>b”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令参数" tabindex="-1"><a class="header-anchor" href="#命令参数" aria-hidden="true">#</a> 命令参数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>find：
-exec<span class="token operator">&lt;</span>执行指令<span class="token operator">&gt;</span>：假设find指令的回传值为True，就执行该指令；

<span class="token parameter variable">-mtime</span> n 查找系统中最后n天被改变文件数据的文件 +大于 -小于

<span class="token parameter variable">-type</span> 查找某一类型的文件
b -块设备文件；
c -字符设备文件；
d -目录；
p -管道文件；
f -普通文件；
l -符号链接文件；
s -socket文件；

-printf<span class="token operator">&lt;</span>输出格式<span class="token operator">&gt;</span>：假设find指令的回传值为Ture，就将文件或目录名称列出到标准输出。格式可以自行指定；

sort：
<span class="token parameter variable">-n</span> 依照数值的大小排序；
<span class="token parameter variable">-r</span> 以相反的顺序来排序；

xargs：传递参数

<span class="token function">ls</span> <span class="token parameter variable">-Slh</span>
<span class="token parameter variable">-Sl</span> 从大到小显示详情
<span class="token parameter variable">-Slr</span> 从小到大显示详情
<span class="token parameter variable">-h</span> humans 以人类易读的方式显示（正常情况下显示为bit，加上-h后 显示的为KB MB GB TB等）

du：
<span class="token parameter variable">-a</span> 显示所有目录或文件的大小
<span class="token parameter variable">-h</span> 以K,M,G为单位，提高信息可读性
<span class="token parameter variable">-S</span> 显示目录的大小，但不含子目录大小
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[i];function t(r,c){return n(),s("div",null,l)}const d=a(p,[["render",t],["__file","linux.html.vue"]]);export{d as default};
