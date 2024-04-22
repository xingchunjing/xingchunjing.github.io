import{_ as s,X as r,Y as n,Z as i,$ as a,a0 as t,a2 as l,E as o}from"./framework-f01f539c.js";const h="/assets/images/MyBatis架构.svg",c="/assets/images/MyBatis组件及调用关系.svg",d={},p=l('<h1 id="mybatis源码" tabindex="-1"><a class="header-anchor" href="#mybatis源码" aria-hidden="true">#</a> Mybatis源码</h1><h2 id="_1-手写持久层框架思路" tabindex="-1"><a class="header-anchor" href="#_1-手写持久层框架思路" aria-hidden="true">#</a> 1. 手写持久层框架思路</h2><h3 id="_1-1-框架使用端-项目" tabindex="-1"><a class="header-anchor" href="#_1-1-框架使用端-项目" aria-hidden="true">#</a> 1.1 框架使用端（项目）</h3><hr><p>引入自定义持久层框架jar包</p><ul><li>创建SqlMapConfig.xml配置文件：数据库配置信息，（存放mapper.xml的路径地址）</li><li>创建mapper.xml配置文件：存放sql信息，参数类型，返回值类型</li></ul><h3 id="_1-2-框架本身" tabindex="-1"><a class="header-anchor" href="#_1-2-框架本身" aria-hidden="true">#</a> 1.2 框架本身</h3><hr><p>本质是对JDBC进行封装</p><ol><li><p>加载配置文件</p><ul><li>创建Resources类，负责加载配置文件，加载成字节数入流，存放到内存中</li><li>方法：InputStream getResourceAsStream(String path)</li></ul></li><li><p>创建两个JavaBean(容器对象)</p><ul><li>Configuration：全局配置类，存储sqlMapConfig.xml配置文件解析出来的内容</li><li>MappedStatement：映射配置类：存储mapper.xml配置文件解析出来的内容</li></ul></li><li><p>解析配置文件，填充容器对象</p><ul><li>创建SqlSessionFactoryBuilder类 <ul><li>方法：SqlSessionFactory</li><li>build(InputStream)（1）解析配置文件(dom4j+xpath)封装Configuration，(2) 创建SqlSessionFactory</li></ul></li></ul></li><li><p>创建SqlSessionFactory接口及DefaultSqlSessionFactory</p><ul><li>方法：SqlSession openSession() 工厂模式</li></ul></li><li><p>创建SqlSession接口和DefaultSqlSession实现类</p><ul><li>方法：selectList()...</li></ul></li><li><p>创建Executor接口和实现类SimpleExecutor</p><ul><li>方法：query(Configuration,MappedStatement,Object),执行底层JDBC代码(数据库和sql配置信息)</li></ul></li></ol><h3 id="_1-3-手写持久层代码示例" tabindex="-1"><a class="header-anchor" href="#_1-3-手写持久层代码示例" aria-hidden="true">#</a> 1.3 手写持久层代码示例</h3><hr>',12),u={href:"https://gitee.com/jing-xingchun/ipersistent",target:"_blank",rel:"noopener noreferrer"},m=l('<h2 id="_2-mybatis的架构设计" tabindex="-1"><a class="header-anchor" href="#_2-mybatis的架构设计" aria-hidden="true">#</a> 2. Mybatis的架构设计</h2><figure><img src="'+h+'" alt="架构设计" tabindex="0" loading="lazy"><figcaption>架构设计</figcaption></figure><ul><li>接口层：提供增删改查的API接口，通过调用这些接口，可以完成交互</li><li>数据处理层：解析SQL，根据调用请求完成一次数据库操作</li><li>框架支撑层：负责通用基础服务的支撑</li><li>引导层：提供两种配置信息</li></ul><h2 id="_3-mybatis的主要组件及其调用关系" tabindex="-1"><a class="header-anchor" href="#_3-mybatis的主要组件及其调用关系" aria-hidden="true">#</a> 3. Mybatis的主要组件及其调用关系</h2><figure><img src="'+c+'" alt="MyBatis组件及调用关系" tabindex="0" loading="lazy"><figcaption>MyBatis组件及调用关系</figcaption></figure><h3 id="_3-1-mybatis源码" tabindex="-1"><a class="header-anchor" href="#_3-1-mybatis源码" aria-hidden="true">#</a> 3.1 MyBatis源码</h3>',6),_={href:"https://github.com/mybatis/mybatis-3",target:"_blank",rel:"noopener noreferrer"},b={href:"https://mybatis.org/mybatis-3/zh/index.html",target:"_blank",rel:"noopener noreferrer"};function f(g,y){const e=o("ExternalLinkIcon");return r(),n("div",null,[p,i("p",null,[i("a",u,[a("https://gitee.com/jing-xingchun/ipersistent"),t(e)])]),m,i("p",null,[i("a",_,[a("源码地址：https://github.com/mybatis/mybatis-3"),t(e)])]),i("p",null,[i("a",b,[a("文档：https://mybatis.org/mybatis-3/zh/index.html"),t(e)])])])}const S=s(d,[["render",f],["__file","mybatis.html.vue"]]);export{S as default};
