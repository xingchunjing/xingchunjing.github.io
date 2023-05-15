import{_ as c,X as o,Y as l,Z as n,$ as s,a0 as a,a1 as i,a2 as u,E as e}from"./framework-f01f539c.js";const k="/assets/images/rediscache01.jpg",r={},d=n("h1",{id:"缓存配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#缓存配置","aria-hidden":"true"},"#"),s(" 缓存配置")],-1),v=u(`<h2 id="添加redis依赖包" tabindex="-1"><a class="header-anchor" href="#添加redis依赖包" aria-hidden="true">#</a> 添加Redis依赖包</h2><p>在项目的pom.xml中添加如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- redis依赖包 ,版本是和项目的Spring Boot版本一至--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置redis信息" tabindex="-1"><a class="header-anchor" href="#配置redis信息" aria-hidden="true">#</a> 配置redis信息</h2><p>在application.properties中配置redis数据库连接信息，如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span>
    <span class="token comment">#连接超时时间</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 60s
    <span class="token key atrule">jedis</span><span class="token punctuation">:</span>
      <span class="token key atrule">pool</span><span class="token punctuation">:</span>
        <span class="token comment">#连接池中的最大空闲连接</span>
        <span class="token key atrule">max-idle</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token comment">#连接池中的最小空闲连接</span>
        <span class="token key atrule">min-idle</span><span class="token punctuation">:</span> <span class="token number">50</span>
        <span class="token comment">#连接池最大连接数（使用负值表示没有限制）</span>
        <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token comment">#连接池最大阻塞等待时间（使用负值表示没有限制）</span>
        <span class="token key atrule">max-wait</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>1s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义redistemplate" tabindex="-1"><a class="header-anchor" href="#自定义redistemplate" aria-hidden="true">#</a> 自定义RedisTemplate</h2><p>也可以不添加此配置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> template <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//使用JSON格式化序列化对象，对缓存数据key和value进行转换</span>
        <span class="token class-name">Jackson2JsonRedisSerializer</span> jackson2JsonRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//解决查询缓存转换异常的问题</span>
        <span class="token class-name">ObjectMapper</span> om <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">,</span> <span class="token class-name">JsonAutoDetect<span class="token punctuation">.</span>Visibility</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">enableDefaultTyping</span><span class="token punctuation">(</span><span class="token class-name">ObjectMapper<span class="token punctuation">.</span>DefaultTyping</span><span class="token punctuation">.</span><span class="token constant">NON_FINAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jackson2JsonRedisSerializer<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>om<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StringRedisSerializer</span> stringRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// key采用String的序列化方式</span>
        template<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// hash的key也采用String的序列化方式</span>
        template<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// value序列化方式采用jackson</span>
        template<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// hash的value序列化方式采用jackson</span>
        template<span class="token punctuation">.</span><span class="token function">setHashValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> template<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写工具类" tabindex="-1"><a class="header-anchor" href="#编写工具类" aria-hidden="true">#</a> 编写工具类</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisCacheUtil</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate<span class="token punctuation">;</span>

    <span class="token comment">// =============================common============================</span>

    <span class="token doc-comment comment">/**
     * 指定缓存失效时间
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">expire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据key 获取过期时间
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键 不能为null
     * <span class="token keyword">@return</span> 时间(秒) 返回0代表为永久有效
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getExpire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">getExpire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断key是否存在
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@return</span> true 存在 false不存在
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除缓存
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 可以传一个值 或多个
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">del</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> <span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span><span class="token function">arrayToList</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ============================String=============================</span>

    <span class="token doc-comment comment">/**
     * 普通缓存获取
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@return</span> 值
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> key <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 普通缓存放入
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@return</span> true成功 false失败
     */</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 普通缓存放入并设置时间
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span>  时间(秒) time要大于0 如果time小于等于0 将设置无限期
     * <span class="token keyword">@return</span> true成功 false 失败
     */</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 递增
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">delta</span> 要增加几(大于0)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">incr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>delta <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;递增因子必须大于0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> delta<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 递减
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">delta</span> 要减少几(小于0)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">decr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>delta <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;递减因子必须大于0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token operator">-</span>delta<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ================================Map=================================</span>

    <span class="token doc-comment comment">/**
     * HashGet
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键 不能为null
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项 不能为null
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">hget</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取hashKey对应的所有键值
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@return</span> 对应的多个键值
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">hmget</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * HashSet
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">map</span> 对应多个键值
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hmset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * HashSet 并设置时间
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键
     * <span class="token keyword">@param</span> <span class="token parameter">map</span>  对应多个键值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
     * <span class="token keyword">@return</span> true成功 false失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hmset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 向一张hash表中放入数据,如果不存在将创建
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">item</span>  项
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@return</span> true 成功 false失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 向一张hash表中放入数据,如果不存在将创建
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">item</span>  项
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span>  时间(秒) 注意:如果已存在的hash表有时间,这里将会替换原有的时间
     * <span class="token keyword">@return</span> true 成功 false失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除hash表中的值
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键 不能为null
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项 可以使多个 不能为null
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hdel</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断hash表中是否有该项的值
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键 不能为null
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项 不能为null
     * <span class="token keyword">@return</span> true 存在 false不存在
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hHasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * hash递增 如果不存在,就会创建一个 并把新增后的值返回
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项
     * <span class="token keyword">@param</span> <span class="token parameter">by</span>   要增加几(大于0)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">hincr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token keyword">double</span> by<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> by<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * hash递减
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项
     * <span class="token keyword">@param</span> <span class="token parameter">by</span>   要减少记(小于0)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">hdecr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token keyword">double</span> by<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> <span class="token operator">-</span>by<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ============================set=============================</span>

    <span class="token doc-comment comment">/**
     * 根据key获取Set中的所有值
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">sGet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">members</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据value从一个set中查询,是否存在
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@return</span> true 存在 false不存在
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">sHasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isMember</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将数据放入set缓存
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>    键
     * <span class="token keyword">@param</span> <span class="token parameter">values</span> 值 可以是多个
     * <span class="token keyword">@return</span> 成功个数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">sSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将set数据放入缓存
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>    键
     * <span class="token keyword">@param</span> <span class="token parameter">time</span>   时间(秒)
     * <span class="token keyword">@param</span> <span class="token parameter">values</span> 值 可以是多个
     * <span class="token keyword">@return</span> 成功个数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">sSetAndTime</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Long</span> count <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> count<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取set缓存的长度
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">sGetSetSize</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 移除值为value的
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>    键
     * <span class="token keyword">@param</span> <span class="token parameter">values</span> 值 可以是多个
     * <span class="token keyword">@return</span> 移除的个数
     */</span>

    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">setRemove</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Long</span> count <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> count<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ===============================list=================================</span>

    <span class="token doc-comment comment">/**
     * 获取list缓存的内容
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">start</span> 开始
     * <span class="token keyword">@param</span> <span class="token parameter">end</span>   结束 0 到 -1代表所有值
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">lGet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> start<span class="token punctuation">,</span> <span class="token keyword">long</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取list缓存的长度
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">lGetListSize</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 通过索引 获取list中的值
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 索引 index&gt;=0时， 0 表头，1 第二个元素，依次类推；index&lt;0时，-1，表尾，-2倒数第二个元素，依次类推
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">lGetIndex</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将list放入缓存
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将list放入缓存
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span>  时间(秒)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将list放入缓存
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPushAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将list放入缓存
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span>  时间(秒)
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPushAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据索引修改list中的某条数据
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 索引
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@return</span>
     */</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lUpdateIndex</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> index<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 移除N个值为value
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">count</span> 移除多少个
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@return</span> 移除的个数
     */</span>

    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">lRemove</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> count<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Long</span> remove <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> count<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> remove<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//引入依赖</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">RedisCacheUtil</span> redisCacheUtil<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 获取商品缓存
 *
 * <span class="token keyword">@param</span> <span class="token parameter">gameId</span>
 * <span class="token keyword">@param</span> <span class="token parameter">channelId</span>
 * <span class="token keyword">@param</span> <span class="token parameter">productId</span>
 * <span class="token keyword">@param</span> <span class="token parameter">currencyType</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">private</span> <span class="token class-name">ProductMeInfo</span> <span class="token function">getCacheProductInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> gameId<span class="token punctuation">,</span> <span class="token class-name">String</span> channelId<span class="token punctuation">,</span> <span class="token class-name">String</span> productId<span class="token punctuation">,</span> <span class="token class-name">String</span> currencyType<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> redisKey <span class="token operator">=</span> <span class="token class-name">ConstantCommon</span><span class="token punctuation">.</span><span class="token constant">KEY_PREFIX_PRODUCT</span> <span class="token operator">+</span> gameId <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> channelId <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> productId <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> currencyType<span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> hasKey <span class="token operator">=</span> redisCacheUtil<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>redisKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ProductMeInfo</span> productMeInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProductMeInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hasKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> hmget <span class="token operator">=</span> redisCacheUtil<span class="token punctuation">.</span><span class="token function">hmget</span><span class="token punctuation">(</span>redisKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        productMeInfo <span class="token operator">=</span> <span class="token class-name">BeanMapUtils</span><span class="token punctuation">.</span><span class="token function">mapToEntity</span><span class="token punctuation">(</span>hmget<span class="token punctuation">,</span> <span class="token class-name">ProductMeInfo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token class-name">ProductMeInfo</span> meInfo <span class="token operator">=</span> <span class="token class-name">ProductMeInfo</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">gameId</span><span class="token punctuation">(</span>gameId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">channelId</span><span class="token punctuation">(</span>channelId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">productId</span><span class="token punctuation">(</span>productId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">currencyType</span><span class="token punctuation">(</span>currencyType<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productMeInfo <span class="token operator">=</span> productMeInfoMapper<span class="token punctuation">.</span><span class="token function">selectOne</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>meInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> hmap <span class="token operator">=</span> <span class="token class-name">BeanMapUtils</span><span class="token punctuation">.</span><span class="token function">entityToMapObject</span><span class="token punctuation">(</span>productMeInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisCacheUtil<span class="token punctuation">.</span><span class="token function">hmset</span><span class="token punctuation">(</span>redisKey<span class="token punctuation">,</span> hmap<span class="token punctuation">,</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> productMeInfo<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>使用redis缓存工具类的实体类要与redis工具类在同一包下，否则会无法启动项目，如果redis工具类在公共包下也要使类路径一致</p></div><p>例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Description</span><span class="token operator">:</span>

<span class="token class-name">Field</span> redisCacheUtil in <span class="token class-name"><span class="token namespace">top<span class="token punctuation">.</span>jingxc<span class="token punctuation">.</span>server<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span>PaypalServiceImpl</span> required a bean of type &#39;<span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>jingxc<span class="token punctuation">.</span>server<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>RedisCacheUtil</span>&#39; that could not be <span class="token class-name"><span class="token namespace">found<span class="token punctuation">.</span></span>

The</span> injection point has the following annotations<span class="token operator">:</span>
	<span class="token operator">-</span> <span class="token annotation punctuation">@org.springframework.beans.factory.annotation.Autowired</span><span class="token punctuation">(</span>required<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span>


<span class="token class-name">Action</span><span class="token operator">:</span>

<span class="token class-name">Consider</span> defining a bean of type &#39;<span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>jingxc<span class="token punctuation">.</span>server<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>RedisCacheUtil</span>&#39; in your configuration<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果将依赖修改成@Autowired(required = false)，项目是能启动了，但是使用的时候会报空指针</p><p>所以，在使用的时候需要注意</p><p>这边给出了项目依赖关系</p><figure><img src="`+k+`" alt="依赖关系" tabindex="0" loading="lazy"><figcaption>依赖关系</figcaption></figure><p>pom文件中引入统一依赖包</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>top.jingxc.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jingxc-spring-boot-common<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),m=n("li",null,[n("strong",null,"本文作者："),s(" 景兴春")],-1),b=n("strong",null,"本文链接：",-1),y={href:"https://www.jingxc.top/spring/redis-cache.html",target:"_blank",rel:"noopener noreferrer"},w=n("strong",null,"版权声明：",-1),g={href:"https://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank",rel:"noopener noreferrer"};function f(h,S){const t=e("RouterLink"),p=e("ExternalLinkIcon");return o(),l("div",null,[d,n("p",null,[s("本文主要讲述，在Spring Boot中即成RedisTemplate 完成缓存工具类，如果要了解redis的具体信息，请参阅"),a(t,{to:"/knowledge/redis-cache.html"},{default:i(()=>[s("redis缓存")]),_:1})]),v,n("ul",null,[m,n("li",null,[b,s(),n("a",y,[s("https://www.jingxc.top/spring/redis-cache.html"),a(p)])]),n("li",null,[w,s(" 本博客所有文章除特别声明外，均采用 "),n("a",g,[s("Apache License 2.0"),a(p)]),s(" 许可协议。转载请注明出处！")])])])}const x=c(r,[["render",f],["__file","redis-cache.html.vue"]]);export{x as default};
