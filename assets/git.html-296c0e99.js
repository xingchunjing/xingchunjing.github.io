import{_ as a,X as n,Y as s,a5 as e}from"./framework-608b3dd6.js";const i={},l=e(`<h2 id="git命令" tabindex="-1"><a class="header-anchor" href="#git命令" aria-hidden="true">#</a> git命令</h2><h3 id="查看不同级别的配置文件" tabindex="-1"><a class="header-anchor" href="#查看不同级别的配置文件" aria-hidden="true">#</a> 查看不同级别的配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看系统的config</span>
<span class="token function">git</span> config <span class="token parameter variable">--system</span> <span class="token parameter variable">--list</span>

<span class="token comment">#查看当前用户（global）配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#配置用户名和邮箱" aria-hidden="true">#</a> 配置用户名和邮箱</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#配置用户名</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;username&quot;</span>

<span class="token comment">#配置邮箱</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email  email.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建本地仓库" tabindex="-1"><a class="header-anchor" href="#创建本地仓库" aria-hidden="true">#</a> 创建本地仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#在当前目录新建一个Git代码库</span>
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="克隆远程仓库" tabindex="-1"><a class="header-anchor" href="#克隆远程仓库" aria-hidden="true">#</a> 克隆远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#克隆一个项目和它的整个代码历史（版本信息）</span>
<span class="token function">git</span> clone 链接地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看文件状态" tabindex="-1"><a class="header-anchor" href="#查看文件状态" aria-hidden="true">#</a> 查看文件状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看制定文件状态</span>
<span class="token function">git</span> status <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>

<span class="token comment">#查看所有文件状态</span>
<span class="token function">git</span> status

<span class="token comment">#添加所有文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> 

<span class="token comment">#提交暂存区中的内容到本地仓库 -m:提交的信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;信息&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支命令" tabindex="-1"><a class="header-anchor" href="#分支命令" aria-hidden="true">#</a> 分支命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#列出本地所有分支</span>
<span class="token function">git</span> branch

<span class="token comment">#列出所有远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>

<span class="token comment">#新建一个分支，但依然停留在当前分支</span>
<span class="token function">git</span> branch 分支名

<span class="token comment">#新建一个分支，并切换到该分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> 分支名

<span class="token comment">#合并指定分支到当前分支</span>
<span class="token function">git</span> merge 分支名

<span class="token comment">#删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> 分支名

<span class="token comment">#删除远程分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> 分支名
<span class="token function">git</span> branch <span class="token parameter variable">-dr</span> 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>git设置和取消代理的作用 代理在设备和git仓库之间充当媒介，适当配置或取消媒介能提高推送成功率</p><h3 id="设置代理" tabindex="-1"><a class="header-anchor" href="#设置代理" aria-hidden="true">#</a> 设置代理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看自己的代理端口是否是1080，如果不是，改成你自己的</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy  <span class="token string">&#39;http://127.0.0.1:9083&#39;</span> 
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy <span class="token string">&#39;http://127.0.0.1:9083&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="取消代理" tabindex="-1"><a class="header-anchor" href="#取消代理" aria-hidden="true">#</a> 取消代理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看代理" tabindex="-1"><a class="header-anchor" href="#查看代理" aria-hidden="true">#</a> 查看代理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--get</span> http.proxy
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--get</span> https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,21),t=[l];function c(d,r){return n(),s("div",null,t)}const o=a(i,[["render",c],["__file","git.html.vue"]]);export{o as default};
