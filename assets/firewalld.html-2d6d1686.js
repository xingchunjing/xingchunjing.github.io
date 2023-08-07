import{_ as a,X as e,Y as s,a4 as n}from"./framework-a5b3b151.js";const i={},l=n(`<h2 id="firewalld的基本使用" tabindex="-1"><a class="header-anchor" href="#firewalld的基本使用" aria-hidden="true">#</a> firewalld的基本使用</h2><p>启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status firewalld

<span class="token comment">#这个命令也可以，只是信息会简单点</span>
firewall-cmd <span class="token parameter variable">--state</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>停止：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>禁用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="开启端口" tabindex="-1"><a class="header-anchor" href="#开启端口" aria-hidden="true">#</a> 开启端口</h2><h3 id="添加" tabindex="-1"><a class="header-anchor" href="#添加" aria-hidden="true">#</a> 添加</h3><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#--permanent永久生效，没有此参数重启后失效</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外部授权" tabindex="-1"><a class="header-anchor" href="#外部授权" aria-hidden="true">#</a> 外部授权</h3><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#添加端口外部访问权限（这样外部才能访问）</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp


<span class="token comment">#重新载入，添加端口后重新载入才能起作用</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这些之后，端口是开启成功的，如果没有成功，重启系统试试。</p></div><h3 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h3><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看端口(访问权限)</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --query-port<span class="token operator">=</span><span class="token number">80</span>/tcp

<span class="token comment">#删除端口</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --remove-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>查看当前开了哪些端口 其实一个服务对应一个端口，每个服务对应/usr/lib/firewalld/services下面一个xml文件。</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看开启了哪些服务</span>
firewall-cmd --list-services

<span class="token comment">#查看开启了哪些端口</span>
firewall-cmd --list-ports

<span class="token comment">#查看还有哪些服务可以打开</span>
firewall-cmd --get-services

<span class="token comment">#查看所有打开的端口：</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-ports
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),d=[l];function r(c,t){return e(),s("div",null,d)}const o=a(i,[["render",r],["__file","firewalld.html.vue"]]);export{o as default};
