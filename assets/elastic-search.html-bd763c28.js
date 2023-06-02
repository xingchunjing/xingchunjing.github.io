import{_ as n,X as s,Y as a,a4 as t}from"./framework-a5b3b151.js";const e={},i=t(`<h1 id="es" tabindex="-1"><a class="header-anchor" href="#es" aria-hidden="true">#</a> ES</h1><p>ES（Elasticsearch）Elasticsearch是一个基于Lucene的搜索服务器。它提供了一个分布式多用户能力的全文搜索引擎，基于RESTful web接口。Elasticsearch是用Java语言开发的，并作为Apache许可条款下的开放源码发布，是一种流行的企业级搜索引擎。Elasticsearch用于云计算中，能够达到实时搜索，稳定，可靠，快速，安装使用方便 。 其实记住是一个分布式全文搜索引擎，重点是全文搜索。</p><p>全文搜索：​这里解释一下全文索引比如用户要搜索一个文章，以Java为关键字进行搜索，不管是书名中还是文章的标题，文章的作者名字，文章的摘要，只要是包含java关键字就会作为查询结果返回给用户查看，这就使用了全文搜索技术。 搜索的条件不再是仅用于对某一个字段进行比对与查找，而是在一条数据中使用搜索条件去比对表中更多的字段，只要能匹配上就作为查询结果，而ES技术就是一种可以实现上述效果的技术。</p><h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2><ul><li>索引<code>&lt;Index&gt;</code> 一组相似文档的集合</li></ul><p>一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个商品数据的索引，一个订单数据的索引，还有一个用户数据的索引。一个索引由一个名字来标识(必须全部是小写字母的)，并且当我们要对这个索引中的文档进行索引、搜索、更新和删除的时候，都要使用到这个名字。</p><ul><li>映射<code>&lt;Mapping&gt;</code> 用来定义索引存储文档的结构：字段、类型等</li></ul><p>映射是定义一个文档和它所包含的字段如何被存储和索引的过程。在默认配置下，ES可以根据插入的数据自动地创建mapping，也可以手动创建mapping。 mapping中主要包括字段名、字段类型等</p><ul><li>文档<code>&lt;Document&gt;</code> 索引中一条记录，可以被索引的最小单元</li></ul><p>文档是索引中存储的一条条数据。一条文档是一个可被索引的最小单元。ES中的文档采用了轻量级的JSON格式数据来表示。</p><ul><li>分片<code>&lt;shards&gt;</code></li></ul><p>Elasticsearch提供了将索引划分成多份的能力，这些份就叫做分片。当你创建一个索引的时候，你可以指定你想要的分片的数量。每个分片本身也是一个功能完善并且独立的“索引”，这个“索引”可以被放置 到集群中的任何节点上。</p><ul><li>复制<code>&lt;replicas&gt;</code></li></ul><p>Index的分片中一份或多份副本。</p><h3 id="关键字对比" tabindex="-1"><a class="header-anchor" href="#关键字对比" aria-hidden="true">#</a> 关键字对比</h3><hr><table><thead><tr><th style="text-align:left;">ES</th><th style="text-align:left;">对比</th><th style="text-align:left;">ES</th><th style="text-align:left;">对比</th></tr></thead><tbody><tr><td style="text-align:left;">must</td><td style="text-align:left;">相当于MySql中的and</td><td style="text-align:left;">term</td><td style="text-align:left;">完全匹配</td></tr><tr><td style="text-align:left;">should</td><td style="text-align:left;">相当于MySql中的or</td><td style="text-align:left;">fuzzy</td><td style="text-align:left;">误拼写查询</td></tr><tr><td style="text-align:left;">must_not</td><td style="text-align:left;">不等于</td><td style="text-align:left;">range</td><td style="text-align:left;">范围查询</td></tr><tr><td style="text-align:left;">gt</td><td style="text-align:left;">大于</td><td style="text-align:left;">wildcard</td><td style="text-align:left;">模糊查询</td></tr><tr><td style="text-align:left;">git</td><td style="text-align:left;">大于等于</td><td style="text-align:left;">exists</td><td style="text-align:left;">排除null</td></tr><tr><td style="text-align:left;">lt</td><td style="text-align:left;">小于</td><td style="text-align:left;">match_phrase</td><td style="text-align:left;">短语匹配</td></tr><tr><td style="text-align:left;">lte</td><td style="text-align:left;">小于等于</td><td style="text-align:left;">match_phrase和match区别</td><td style="text-align:left;">match是分词匹配(将输入的词进行分词),match_phrase是短语匹配(输入文本进行查找)</td></tr><tr><td style="text-align:left;">match</td><td style="text-align:left;">分词查询</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><h2 id="es存储类型" tabindex="-1"><a class="header-anchor" href="#es存储类型" aria-hidden="true">#</a> ES存储类型</h2><h3 id="文本类型-text" tabindex="-1"><a class="header-anchor" href="#文本类型-text" aria-hidden="true">#</a> 文本类型 - text</h3><p>在Elasticsearch 5.4 版本开始, text取代了需要分词的string， 当一个字段需要用于全文搜索(会被分词), 比如产品名称、产品描述信息, 就应该使用text类型.</p><p>text的内容会被分词, 可以设置是否需要存储: “index”: “true|false” 。text类型的字段不能用于排序, 也很少用于聚合.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT website
<span class="token punctuation">{</span>
	<span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;blog&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        		<span class="token string">&quot;summary&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span>, <span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关键字类型-keyword" tabindex="-1"><a class="header-anchor" href="#关键字类型-keyword" aria-hidden="true">#</a> 关键字类型 - keyword</h3><hr><p>在Elasticsearch 5.4 版本开始, keyword取代了不需要分词的string.当一个字段需要按照精确值进行过滤、排序、聚合等操作时, 就应该使用keyword类型.</p><p>keyword的内容不会被分词, 可以设置是否需要存储: “index”: “true|false”.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT website
<span class="token punctuation">{</span>
	<span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;blog&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        		<span class="token string">&quot;tags&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;keyword&quot;</span>, <span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数字类型-8种" tabindex="-1"><a class="header-anchor" href="#数字类型-8种" aria-hidden="true">#</a> 数字类型-8种</h3><hr><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">byte</td><td style="text-align:left;">有符号的8位整数, 范围: [-128 ~ 127]</td></tr><tr><td style="text-align:left;">short</td><td style="text-align:left;">有符号的16位整数, 范围: [-32768 ~ 32767]</td></tr><tr><td style="text-align:left;">integer</td><td style="text-align:left;">有符号的32位整数, 范围: [−231 ~ 231-1]</td></tr><tr><td style="text-align:left;">long</td><td style="text-align:left;">有符号的64位整数, 范围: [−263 ~ 263-1]</td></tr><tr><td style="text-align:left;">float</td><td style="text-align:left;">32位单精度浮点数</td></tr><tr><td style="text-align:left;">double</td><td style="text-align:left;">64位双精度浮点数</td></tr><tr><td style="text-align:left;">half_float</td><td style="text-align:left;">16位半精度IEEE 754浮点类型</td></tr><tr><td style="text-align:left;">scaled_float</td><td style="text-align:left;">缩放类型的的浮点数, 比如price字段只需精确到分, 57.34缩放因子为100, 存储结果为5734</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用注意事项:</p><p>尽可能选择范围小的数据类型, 字段的长度越短, 索引和搜索的效率越高；优先考虑使用带缩放因子的浮点类型.</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT shop
<span class="token punctuation">{</span>
    <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;book&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">}</span>,
                <span class="token string">&quot;quantity&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;integer&quot;</span><span class="token punctuation">}</span>,  // integer类型
                <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;scaled_float&quot;</span>,       // scaled_float类型
                    <span class="token string">&quot;scaling_factor&quot;</span><span class="token builtin class-name">:</span> <span class="token number">100</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期类型-date" tabindex="-1"><a class="header-anchor" href="#日期类型-date" aria-hidden="true">#</a> 日期类型 - date</h3><hr><p>JSON没有日期数据类型, 所以在ES中, 日期可以是:包含格式化日期的字符串, “2018-10-01”, 或&quot;2018/10/01 12:10:30&quot;</p><p>代表时间毫秒数的长整型数字。代表时间秒数的整数.</p><p>如果时区未指定, 日期将被转换为UTC格式, 但存储的却是长整型的毫秒值.</p><p>可以自定义日期格式, 若未指定, 则使用默认格式: strict_date_optional_time||epoch_millis</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加映射</span>
PUT website
  <span class="token punctuation">{</span>
  <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;blog&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;pub_date&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;date&quot;</span><span class="token punctuation">}</span>   <span class="token comment"># 日期类型</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 添加数据</span>
PUT website/blog/11
<span class="token punctuation">{</span> <span class="token string">&quot;pub_date&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2018-10-10&quot;</span> <span class="token punctuation">}</span>

PUT website/blog/12
<span class="token punctuation">{</span> <span class="token string">&quot;pub_date&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2018-10-10T12:00:00Z&quot;</span> <span class="token punctuation">}</span>	<span class="token comment"># Solr中默认使用的日期格式</span>

PUT website/blog/13
<span class="token punctuation">{</span> <span class="token string">&quot;pub_date&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1589584930103&quot;</span> <span class="token punctuation">}</span>			<span class="token comment"># 时间的毫秒值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多种日期格式:</p><p>多个格式使用双竖线||分隔, 每个格式都会被依次尝试, 直到找到匹配的.第一个格式用于将时间毫秒值转换为对应格式的字符串.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 添加映射</span>
PUT website
<span class="token punctuation">{</span>
    <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;blog&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;date&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;date&quot;</span>,  // 可以接受如下类型的格式
                    <span class="token string">&quot;format&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布尔类型-boolean" tabindex="-1"><a class="header-anchor" href="#布尔类型-boolean" aria-hidden="true">#</a> 布尔类型 - boolean</h3><hr><p>可以接受表示真、假的字符串或数字:</p><p>真值: true, “true”, “on”, “yes”, “1”…</p><p>假值: false, “false”, “off”, “no”, “0”, “”(空字符串), 0.0, 0</p><h3 id="二进制型-binary" tabindex="-1"><a class="header-anchor" href="#二进制型-binary" aria-hidden="true">#</a> 二进制型 - binary</h3><hr><p>二进制类型是Base64编码字符串的二进制值, 不以默认的方式存储, 且不能被搜索. 有2个设置项:</p><ul><li><p>doc_values: 该字段是否需要存储到磁盘上, 方便以后用来排序、聚合或脚本查询. 接受true和false(默认);</p></li><li><p>store: 该字段的值是否要和_source分开存储、检索, 意思是除了_source中, 是否要单独再存储一份. 接受true或false(默认).</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加映射</span>
PUT website
<span class="token punctuation">{</span>
    <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;blog&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;blob&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;binary&quot;</span><span class="token punctuation">}</span>   <span class="token comment"># 二进制</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 添加数据</span>
PUT website/blog/1
<span class="token punctuation">{</span>
    <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Some binary blog&quot;</span>,
    <span class="token string">&quot;blob&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;hED903KSrA084fRiD5JLgY==&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意: Base64编码的二进制值不能嵌入换行符\\n, 逗号(0x2c)等符号.</p></div><h3 id="范围类型-range" tabindex="-1"><a class="header-anchor" href="#范围类型-range" aria-hidden="true">#</a> 范围类型 - range</h3><hr><p>range过滤允许我们按照制定范围查找一批数据</p><h3 id="复杂数据类型array" tabindex="-1"><a class="header-anchor" href="#复杂数据类型array" aria-hidden="true">#</a> 复杂数据类型Array</h3><hr><p>ES中没有专门的数组类型, 直接使用[]定义即可;</p><p>数组中所有的值必须是同一种数据类型, 不支持混合数据类型的数组:</p><p>① 字符串数组: [“one”, “two”];</p><p>② 整数数组: [1, 2];</p><p>③ 由数组组成的数组: [1, [2, 3]], 等价于[1, 2, 3];</p><p>④ 对象数组: [{“name”: “Tom”, “age”: 20}, {“name”: “Jerry”, “age”: 18}].</p><div class="hint-container danger"><p class="hint-container-title">注意</p><p>动态添加数据时, 数组中第一个值的类型决定整个数组的类型; 不支持混合数组类型, 比如[1, “abc”]; 数组可以包含null值, 空数组[]会被当做missing field —— 没有值的字段.</p></div><h3 id="复杂数据类型object" tabindex="-1"><a class="header-anchor" href="#复杂数据类型object" aria-hidden="true">#</a> 复杂数据类型Object</h3><hr><p>JSON文档是分层的: 文档可以包含内部对象, 内部对象也可以包含内部对象.</p><h3 id="复杂数据类型嵌套类型-nested" tabindex="-1"><a class="header-anchor" href="#复杂数据类型嵌套类型-nested" aria-hidden="true">#</a> 复杂数据类型嵌套类型 - nested</h3><hr><p>嵌套类型是对象数据类型的一个特例, 可以让array类型的对象被独立索引和搜索.</p><h3 id="专门数据类型ip类型" tabindex="-1"><a class="header-anchor" href="#专门数据类型ip类型" aria-hidden="true">#</a> 专门数据类型IP类型</h3><hr><p>IP类型的字段用于存储IPv4或IPv6的地址, 本质上是一个长整型字段.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#添加映射</span>
PUT employee
<span class="token punctuation">{</span>
    <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;customer&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;ip_addr&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ip&quot;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#添加数据</span>
PUT employee/customer/1
<span class="token punctuation">{</span> <span class="token string">&quot;ip_addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;192.168.1.1&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计数数据类型-token-counttoken-count类型用于统计字符串中的单词数量" tabindex="-1"><a class="header-anchor" href="#计数数据类型-token-counttoken-count类型用于统计字符串中的单词数量" aria-hidden="true">#</a> 计数数据类型 - token_counttoken_count类型用于统计字符串中的单词数量.</h3><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 添加映射</span>
PUT employee
<span class="token punctuation">{</span>
  <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;customer&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span>,
          <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;length&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;token_count&quot;</span>,
              <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;standard&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">## 添加数据</span>
PUT employee/customer/1
<span class="token punctuation">{</span> <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;John Snow&quot;</span> <span class="token punctuation">}</span>
PUT employee/customer/2
<span class="token punctuation">{</span> <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Tyrion Lannister&quot;</span> <span class="token punctuation">}</span>

<span class="token comment">## 查询数据</span>
GET employee/customer/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;name. length&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,78),l=[i];function p(c,o){return s(),a("div",null,l)}const d=n(e,[["render",p],["__file","elastic-search.html.vue"]]);export{d as default};
