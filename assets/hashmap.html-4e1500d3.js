const a=JSON.parse('{"key":"v-4eb8f035","path":"/knowledge/hashmap.html","title":"HashMap-01","lang":"zh-CN","frontmatter":{"icon":"map","date":"2022-06-23T00:00:00.000Z","category":["java","后端"],"tag":["HashMap","java","后端"],"star":true,"description":"HashMap-01 HashMap基础 HashMap存储结构 在JDK1.7中和JDK1.8中有所区别： 在JDK1.7中，由”数组+链表“组成，数组是HashMap的主体，链表则是主要为了解决哈希冲突而存在的。 在JDK1.8中，由“数组+链表+红黑树”组成。当链表过长，则会严重影响HashMap的性能，红黑树搜索时间复杂度是O(logn)，而链表是O(n)。因此，JDK1.8对数据结构做了进一步的优化，引入了红黑树，链表和红黑树在达到一定条件会进行转换： 当链表超过8且数组长度(数据总量)超过64才会转为红黑树 将链表转换成红黑树前会判断，如果当前数组的长度小于64，那么会选择先进行数组扩容，而不是转换为红黑树，以减少搜索时间。 ArrayList底层是动态数组数据结构，查询快，增删慢（因为Array增删需要移动数据），LinkedList底层是双重链表数据结构，查询相对较慢（因为Link查询需要移动指针），增删块。","head":[["meta",{"property":"og:url","content":"https://gitee.com/jing-xingchun/knowledge/hashmap.html"}],["meta",{"property":"og:site_name","content":"Jingxc"}],["meta",{"property":"og:title","content":"HashMap-01"}],["meta",{"property":"og:description","content":"HashMap-01 HashMap基础 HashMap存储结构 在JDK1.7中和JDK1.8中有所区别： 在JDK1.7中，由”数组+链表“组成，数组是HashMap的主体，链表则是主要为了解决哈希冲突而存在的。 在JDK1.8中，由“数组+链表+红黑树”组成。当链表过长，则会严重影响HashMap的性能，红黑树搜索时间复杂度是O(logn)，而链表是O(n)。因此，JDK1.8对数据结构做了进一步的优化，引入了红黑树，链表和红黑树在达到一定条件会进行转换： 当链表超过8且数组长度(数据总量)超过64才会转为红黑树 将链表转换成红黑树前会判断，如果当前数组的长度小于64，那么会选择先进行数组扩容，而不是转换为红黑树，以减少搜索时间。 ArrayList底层是动态数组数据结构，查询快，增删慢（因为Array增删需要移动数据），LinkedList底层是双重链表数据结构，查询相对较慢（因为Link查询需要移动指针），增删块。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-29T01:44:48.000Z"}],["meta",{"property":"article:author","content":"Jingxc"}],["meta",{"property":"article:tag","content":"HashMap"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"后端"}],["meta",{"property":"article:published_time","content":"2022-06-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-29T01:44:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashMap-01\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-29T01:44:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jingxc\\",\\"url\\":\\"/\\"}]}"]]},"headers":[{"level":2,"title":"HashMap基础","slug":"hashmap基础","link":"#hashmap基础","children":[{"level":3,"title":"HashMap存储结构","slug":"hashmap存储结构","link":"#hashmap存储结构","children":[]},{"level":3,"title":"HashMap的node属性","slug":"hashmap的node属性","link":"#hashmap的node属性","children":[]},{"level":3,"title":"HashMap的容量","slug":"hashmap的容量","link":"#hashmap的容量","children":[]},{"level":3,"title":"HashMap的负载因子","slug":"hashmap的负载因子","link":"#hashmap的负载因子","children":[]},{"level":3,"title":"HashMap的hash算法","slug":"hashmap的hash算法","link":"#hashmap的hash算法","children":[]},{"level":3,"title":"HashMap的数组+链表/树","slug":"hashmap的数组-链表-树","link":"#hashmap的数组-链表-树","children":[]},{"level":3,"title":"HashMap为什么不一开始就使用红黑树","slug":"hashmap为什么不一开始就使用红黑树","link":"#hashmap为什么不一开始就使用红黑树","children":[]},{"level":3,"title":"HashMap底层数组取值时为什么不用取模而是&","slug":"hashmap底层数组取值时为什么不用取模而是","link":"#hashmap底层数组取值时为什么不用取模而是","children":[]},{"level":3,"title":"指定数组长度不是2次幂，会破坏2次幂规则吗","slug":"指定数组长度不是2次幂-会破坏2次幂规则吗","link":"#指定数组长度不是2次幂-会破坏2次幂规则吗","children":[]}]},{"level":2,"title":"HashMap源码","slug":"hashmap源码","link":"#hashmap源码","children":[{"level":3,"title":"1.8的put方法","slug":"_1-8的put方法","link":"#_1-8的put方法","children":[]},{"level":3,"title":"1.8的get方法","slug":"_1-8的get方法","link":"#_1-8的get方法","children":[]},{"level":3,"title":"1.7HashMap的扩容原理","slug":"_1-7hashmap的扩容原理","link":"#_1-7hashmap的扩容原理","children":[]},{"level":3,"title":"1.7HashMap的扩容过程","slug":"_1-7hashmap的扩容过程","link":"#_1-7hashmap的扩容过程","children":[]},{"level":3,"title":"1.8HsahMap的扩容原理","slug":"_1-8hsahmap的扩容原理","link":"#_1-8hsahmap的扩容原理","children":[]},{"level":3,"title":"HsahMap的不安全的原因","slug":"hsahmap的不安全的原因","link":"#hsahmap的不安全的原因","children":[]},{"level":3,"title":"JDK1.7多线程HashMap并发put的时候为何会发生环形链表，产生死循环？","slug":"jdk1-7多线程hashmap并发put的时候为何会发生环形链表-产生死循环","link":"#jdk1-7多线程hashmap并发put的时候为何会发生环形链表-产生死循环","children":[]}]}],"git":{"createdTime":1683291085000,"updatedTime":1693273488000,"contributors":[{"name":"Jingxc","email":"2584982513@qq.com","commits":2},{"name":"jingxc","email":"2584982513@qq.com","commits":1}]},"readingTime":{"minutes":21.17,"words":6350},"filePathRelative":"knowledge/hashmap.md","localizedDate":"2022年6月23日","excerpt":"<h1> HashMap-01</h1>\\n<h2> HashMap基础</h2>\\n<h3> HashMap存储结构</h3>\\n<p>在JDK1.7中和JDK1.8中有所区别：\\n在JDK1.7中，由”数组+链表“组成，数组是HashMap的主体，链表则是主要为了解决哈希冲突而存在的。</p>\\n<p>在JDK1.8中，由“数组+链表+红黑树”组成。当链表过长，则会严重影响HashMap的性能，红黑树搜索时间复杂度是O(logn)，而链表是O(n)。因此，JDK1.8对数据结构做了进一步的优化，引入了红黑树，链表和红黑树在达到一定条件会进行转换：</p>\\n<p>当链表超过8且数组长度(数据总量)超过64才会转为红黑树\\n将链表转换成红黑树前会判断，如果当前数组的长度小于64，那么会选择先进行数组扩容，而不是转换为红黑树，以减少搜索时间。\\nArrayList底层是动态数组数据结构，查询快，增删慢（因为Array增删需要移动数据），LinkedList底层是双重链表数据结构，查询相对较慢（因为Link查询需要移动指针），增删块。</p>","autoDesc":true}');export{a as data};