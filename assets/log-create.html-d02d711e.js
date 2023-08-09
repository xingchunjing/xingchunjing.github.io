import{_ as t,X as e,Y as o,Z as n,$ as a,a0 as c,a1 as l,a2 as s,E as i}from"./framework-f01f539c.js";const u={},k=s(`<h1 id="log日志" tabindex="-1"><a class="header-anchor" href="#log日志" aria-hidden="true">#</a> Log日志</h1><p>在完成日常任务时，有时候需要根据不同的目的，自己定制化完成log日志的输出，通过配置文件实现日志输出存在一定的局限性，可以通过代码来，定制化实现下面的目标</p><ul><li>自定义日志文件输出目录</li><li>自定义日志文件名称格式</li><li>自定义日志文件输出间隔</li><li>自定义日志内容输出格式 ...</li></ul><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>game<span class="token punctuation">.</span>server<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">OffsetDateTime</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">ZoneOffset</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span>format<span class="token punctuation">.</span></span><span class="token class-name">DateTimeFormatter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ConcurrentHashMap</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>lang3<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span></span><span class="token class-name">FileAppender</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span></span><span class="token class-name">Level</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span></span><span class="token class-name">PatternLayout</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span>varia<span class="token punctuation">.</span></span><span class="token class-name">LevelRangeFilter</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoggerFactory</span> <span class="token punctuation">{</span>

    <span class="token comment">// 防止频繁创建Logger对象</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> logMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Logger</span> <span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">String</span> baseDir<span class="token punctuation">,</span> <span class="token class-name">String</span> appId<span class="token punctuation">,</span> <span class="token class-name">String</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">SimpleDateFormat</span> formatter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;&#39;_&#39;yyyyMMdd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> date <span class="token operator">=</span> formatter<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>baseDir<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>appId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;cannot be empty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 防止map过大不按时间存储{ key: [date_A, logger_A] }</span>
        <span class="token class-name">String</span> key <span class="token operator">=</span> baseDir <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> appId <span class="token operator">+</span> <span class="token string">&quot;/gameserver_&quot;</span> <span class="token operator">+</span> appId <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> logMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 存储新数据</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>

                <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token function">createLogger</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> type<span class="token punctuation">,</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> logger<span class="token punctuation">;</span>

            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 比较时间</span>
        <span class="token class-name">String</span> saveDate <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>saveDate<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Logger</span><span class="token punctuation">)</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> logger<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">// 更新数据</span>
                <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token function">createLogger</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> type<span class="token punctuation">,</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> logger<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 添加同步锁，并进行双端校验，防止重复创建
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     * <span class="token keyword">@param</span> <span class="token parameter">type</span>
     * <span class="token keyword">@param</span> <span class="token parameter">date</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">synchronized</span> <span class="token keyword">static</span> <span class="token class-name">Logger</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> type<span class="token punctuation">,</span> <span class="token class-name">String</span> date<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// 双端检索，防止重复创建</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> logMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> saveDate <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>saveDate<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Logger</span><span class="token punctuation">)</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> logger<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">String</span> logFilePath <span class="token operator">=</span> key <span class="token operator">+</span> date<span class="token punctuation">;</span>
        <span class="token comment">// 添加Appender到日志记录器</span>
        <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;com.game.server.config.LoggerFactory.&quot;</span> <span class="token operator">+</span> type <span class="token operator">+</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">FileAppender</span> appender <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileAppender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 设置输出文件名</span>
        appender<span class="token punctuation">.</span><span class="token function">setFile</span><span class="token punctuation">(</span>logFilePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置输出格式</span>
        appender<span class="token punctuation">.</span><span class="token function">setLayout</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PatternLayout</span><span class="token punctuation">(</span><span class="token string">&quot;%m%n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置Appender的阈值级别</span>
        appender<span class="token punctuation">.</span><span class="token function">setThreshold</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">INFO</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        appender<span class="token punctuation">.</span><span class="token function">activateOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">LevelRangeFilter</span> filterInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LevelRangeFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filterInfo<span class="token punctuation">.</span><span class="token function">setLevelMin</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">INFO</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filterInfo<span class="token punctuation">.</span><span class="token function">setLevelMax</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">ERROR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        appender<span class="token punctuation">.</span><span class="token function">addFilter</span><span class="token punctuation">(</span>filterInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">addAppender</span><span class="token punctuation">(</span>appender<span class="token punctuation">)</span><span class="token punctuation">;</span>

        list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>logger<span class="token punctuation">)</span><span class="token punctuation">;</span>

        logMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> logger<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置介绍" tabindex="-1"><a class="header-anchor" href="#配置介绍" aria-hidden="true">#</a> 配置介绍</h3><hr><p>本文采用log4j作为基础，使用时需要引入相关依赖</p><p>主要通过getLogger静态方法，获取日志Logger对象，入参是String baseDir, String appId, String type</p><ul><li>baseDir设置日志存放根目录</li><li>appId区分不同日志目录</li><li>type区分日志文件类型</li></ul><p>本文中采用的是每天自动生成新的日志文件，为了防止运行时占用堆空间过大，不以时间直接存储到logMap，这样既可以减少资源的占用，又可以减少Logger对象的频繁创建</p><p>主要是对比时间以及文件类型来判断是否需要创建Logger对象</p>`,12),r={class:"hint-container tip"},d=s(`<p class="hint-container-title">提示</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 双端检索，防止重复创建</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> logMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> saveDate <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>saveDate<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Logger</span><span class="token punctuation">)</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> logger<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m=n("p",null,'// 添加Appender到日志记录器 Logger logger = Logger.getLogger("com.game.server.config.LoggerFactory." + type + date);',-1),v=s(`<h2 id="日志使用" tabindex="-1"><a class="header-anchor" href="#日志使用" aria-hidden="true">#</a> 日志使用</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">getBaseDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> appid<span class="token punctuation">,</span> <span class="token constant">CORE_LOG</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;[&quot;</span> <span class="token operator">+</span> time <span class="token operator">+</span> <span class="token string">&quot;][LogReg],&quot;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token class-name">SerializerFeature<span class="token punctuation">.</span>WriteMapNullValue</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(b,y){const p=i("font");return e(),o("div",null,[k,n("div",r,[d,n("p",null,[a("这段代码比较重要，防止并发的时候重复创建日志记录器，"),c(p,{color:"red"},{default:l(()=>[a("那样有可能造成日志内容的重复输出")]),_:1})]),m]),v])}const w=t(u,[["render",g],["__file","log-create.html.vue"]]);export{w as default};
