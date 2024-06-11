const e=JSON.parse('{"key":"v-d4b6567e","path":"/source/mybatis.html","title":"Mybatis源码","lang":"zh-CN","frontmatter":{"icon":"mysql","date":"2023-09-25T00:00:00.000Z","category":["mybatis","java","后端"],"tag":["java","mybatis","后端"],"star":true,"description":"Mybatis源码 1. 手写持久层框架思路 1.1 框架使用端（项目） 引入自定义持久层框架jar包 创建SqlMapConfig.xml配置文件：数据库配置信息，（存放mapper.xml的路径地址） 创建mapper.xml配置文件：存放sql信息，参数类型，返回值类型 1.2 框架本身 本质是对JDBC进行封装 加载配置文件 创建Resources类，负责加载配置文件，加载成字节数入流，存放到内存中 方法：InputStream getResourceAsStream(String path) 创建两个JavaBean(容器对象) Configuration：全局配置类，存储sqlMapConfig.xml配置文件解析出来的内容 MappedStatement：映射配置类：存储mapper.xml配置文件解析出来的内容 解析配置文件，填充容器对象 创建SqlSessionFactoryBuilder类 方法：SqlSessionFactory build(InputStream)（1）解析配置文件(dom4j+xpath)封装Configuration，(2) 创建SqlSessionFactory 创建SqlSessionFactory接口及DefaultSqlSessionFactory 方法：SqlSession openSession() 工厂模式 创建SqlSession接口和DefaultSqlSession实现类 方法：selectList()... 创建Executor接口和实现类SimpleExecutor 方法：query(Configuration,MappedStatement,Object),执行底层JDBC代码(数据库和sql配置信息)","head":[["meta",{"property":"og:url","content":"https://gitee.com/jing-xingchun/source/mybatis.html"}],["meta",{"property":"og:site_name","content":"Jingxc"}],["meta",{"property":"og:title","content":"Mybatis源码"}],["meta",{"property":"og:description","content":"Mybatis源码 1. 手写持久层框架思路 1.1 框架使用端（项目） 引入自定义持久层框架jar包 创建SqlMapConfig.xml配置文件：数据库配置信息，（存放mapper.xml的路径地址） 创建mapper.xml配置文件：存放sql信息，参数类型，返回值类型 1.2 框架本身 本质是对JDBC进行封装 加载配置文件 创建Resources类，负责加载配置文件，加载成字节数入流，存放到内存中 方法：InputStream getResourceAsStream(String path) 创建两个JavaBean(容器对象) Configuration：全局配置类，存储sqlMapConfig.xml配置文件解析出来的内容 MappedStatement：映射配置类：存储mapper.xml配置文件解析出来的内容 解析配置文件，填充容器对象 创建SqlSessionFactoryBuilder类 方法：SqlSessionFactory build(InputStream)（1）解析配置文件(dom4j+xpath)封装Configuration，(2) 创建SqlSessionFactory 创建SqlSessionFactory接口及DefaultSqlSessionFactory 方法：SqlSession openSession() 工厂模式 创建SqlSession接口和DefaultSqlSession实现类 方法：selectList()... 创建Executor接口和实现类SimpleExecutor 方法：query(Configuration,MappedStatement,Object),执行底层JDBC代码(数据库和sql配置信息)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-20T03:15:51.000Z"}],["meta",{"property":"article:author","content":"Jingxc"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"mybatis"}],["meta",{"property":"article:tag","content":"后端"}],["meta",{"property":"article:published_time","content":"2023-09-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-20T03:15:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis源码\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-20T03:15:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jingxc\\",\\"url\\":\\"/\\"}]}"]]},"headers":[{"level":2,"title":"1. 手写持久层框架思路","slug":"_1-手写持久层框架思路","link":"#_1-手写持久层框架思路","children":[{"level":3,"title":"1.1 框架使用端（项目）","slug":"_1-1-框架使用端-项目","link":"#_1-1-框架使用端-项目","children":[]},{"level":3,"title":"1.2 框架本身","slug":"_1-2-框架本身","link":"#_1-2-框架本身","children":[]},{"level":3,"title":"1.3 手写持久层代码示例","slug":"_1-3-手写持久层代码示例","link":"#_1-3-手写持久层代码示例","children":[]}]},{"level":2,"title":"2. Mybatis的架构设计","slug":"_2-mybatis的架构设计","link":"#_2-mybatis的架构设计","children":[]},{"level":2,"title":"3. Mybatis的主要组件及其调用关系","slug":"_3-mybatis的主要组件及其调用关系","link":"#_3-mybatis的主要组件及其调用关系","children":[{"level":3,"title":"3.1 MyBatis源码","slug":"_3-1-mybatis源码","link":"#_3-1-mybatis源码","children":[]}]}],"git":{"createdTime":1696918438000,"updatedTime":1697771751000,"contributors":[{"name":"Jingxc","email":"2584982513@qq.com","commits":3}]},"readingTime":{"minutes":1.53,"words":459},"filePathRelative":"source/mybatis.md","localizedDate":"2023年9月25日","excerpt":"<h1> Mybatis源码</h1>\\n<h2> 1. 手写持久层框架思路</h2>\\n<h3> 1.1 框架使用端（项目）</h3>\\n<hr>\\n<p>引入自定义持久层框架jar包</p>\\n<ul>\\n<li>创建SqlMapConfig.xml配置文件：数据库配置信息，（存放mapper.xml的路径地址）</li>\\n<li>创建mapper.xml配置文件：存放sql信息，参数类型，返回值类型</li>\\n</ul>\\n<h3> 1.2 框架本身</h3>\\n<hr>\\n<p>本质是对JDBC进行封装</p>\\n<ol>\\n<li>\\n<p>加载配置文件</p>\\n<ul>\\n<li>创建Resources类，负责加载配置文件，加载成字节数入流，存放到内存中</li>\\n<li>方法：InputStream getResourceAsStream(String path)</li>\\n</ul>\\n</li>\\n<li>\\n<p>创建两个JavaBean(容器对象)</p>\\n<ul>\\n<li>Configuration：全局配置类，存储sqlMapConfig.xml配置文件解析出来的内容</li>\\n<li>MappedStatement：映射配置类：存储mapper.xml配置文件解析出来的内容</li>\\n</ul>\\n</li>\\n<li>\\n<p>解析配置文件，填充容器对象</p>\\n<ul>\\n<li>创建SqlSessionFactoryBuilder类\\n<ul>\\n<li>方法：SqlSessionFactory</li>\\n<li>build(InputStream)（1）解析配置文件(dom4j+xpath)封装Configuration，(2) 创建SqlSessionFactory</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>创建SqlSessionFactory接口及DefaultSqlSessionFactory</p>\\n<ul>\\n<li>方法：SqlSession openSession() 工厂模式</li>\\n</ul>\\n</li>\\n<li>\\n<p>创建SqlSession接口和DefaultSqlSession实现类</p>\\n<ul>\\n<li>方法：selectList()...</li>\\n</ul>\\n</li>\\n<li>\\n<p>创建Executor接口和实现类SimpleExecutor</p>\\n<ul>\\n<li>方法：query(Configuration,MappedStatement,Object),执行底层JDBC代码(数据库和sql配置信息)</li>\\n</ul>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};