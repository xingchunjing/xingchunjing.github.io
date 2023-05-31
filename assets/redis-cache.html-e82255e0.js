import{_ as i,X as e,Y as a,a2 as r}from"./framework-f01f539c.js";const s="/assets/images/rediscache02.jpg",d="/assets/images/rediscache03.jpg",l={},h=r('<h1 id="redis缓存" tabindex="-1"><a class="header-anchor" href="#redis缓存" aria-hidden="true">#</a> redis缓存</h1><h2 id="一-扩容与缩容" tabindex="-1"><a class="header-anchor" href="#一-扩容与缩容" aria-hidden="true">#</a> 一. 扩容与缩容</h2><p>当哈希表中元素数量逐渐增加时，此时产生 hash 冲突的概率逐渐增大，且由于dict(哈希桶)也是采用拉链法解决 hash 冲突的，随着hash冲突概率上升，链表会越来越长，单个哈希桶链表上数据越来越多，查找时间复杂度退化到 O(n)，这就会导致查找效率下降。相反，当元素不断减少时，元素占用 dict 的空间就越少，出现对于内存的极致利用，此时就需要进行缩容操作。</p><p>负载因子。负载因子一般用于描述集合当前被填充的程度。在 Redis 的字典 dict 中，</p><div class="hint-container info"><p class="hint-container-title">负载因子</p><p>负载因子 = 哈希表中已保存节点数量 / 哈希表的大小，即：</p><p>load factor = ht[0].used / ht[0].size</p></div><p>Redis中，三条关于扩容和缩容的规则：</p><div class="hint-container tip"><p class="hint-container-title">扩容规则</p><ol><li>没有执行 BGSAVE 和 BGWRITEAOF 指令的情况下，哈希表的负载因子大于等于 1 时进行扩容。</li><li>正在执行 BGSAVE 和 BGWRITEAOF 指令的情况下，哈希表的负载因子大于等于 5 时进行扩容。</li><li>负载因子小于 0.1 时，Redis 自动开始对哈希表进行收索操作。</li></ol></div><p>其中，扩容和缩容的数量大小也是有一定的规则：</p><ol><li>扩容：扩容后的 dicEntry 数组数量为第一个大于等于 ht[0].used * 2 的 2^n</li><li>缩容：缩容后的 dicEntry 数组数量为第一个大于等于 ht[0].used 的 2^n</li></ol><h2 id="二-rehash" tabindex="-1"><a class="header-anchor" href="#二-rehash" aria-hidden="true">#</a> 二. rehash</h2><p>与 Java 中的 HashMap 类似，当 Redis 中的 dict 进行扩容或者缩容，会发生 reHash 过程。</p><p>在扩容和收缩的时候，如果哈希字典中有很多元素，一次性将这些键全部rehash到ht[1]的话，可能会导致服务器在一段时间内停止服务(对于单线程的 Redis 而言很难承受这么高的时间复杂度的操作)。所以，采用渐进式rehash的方式，详细步骤如下：</p><figure><img src="'+s+'" alt="步骤" tabindex="0" loading="lazy"><figcaption>步骤</figcaption></figure><ol><li>为ht[1]分配空间，让字典同时持有ht[0]和ht[1]两个哈希表</li><li>将rehashindex的值设置为0，表示rehash工作正式开始</li><li>在rehash期间，每次对字典执行增删改查操作是，程序除了执行指定的操作以外，还会顺带将ht[0]哈希表在rehashindex索引上的所有键值对rehash到ht[1]，当rehash工作完成以后，rehashindex的值+1</li><li>随着字典操作的不断执行，最终会在某一时间段上ht[0]的所有键值对都会被rehash到ht[1]，这时将rehashindex的值设置为-1，表示rehash操作结束</li></ol><div class="hint-container warning"><p class="hint-container-title">注意</p><p>渐进式rehash采用的是一种分而治之的方式，将rehash的操作分摊在每一个的访问中，避免集中式rehash而带来的庞大计算量。</p><p>需要注意的是在渐进式rehash的过程，如果有增删改查操作时，如果index大于rehashindex，访问ht[0]，否则访问ht[1]。</p></div><h2 id="三-主从复制" tabindex="-1"><a class="header-anchor" href="#三-主从复制" aria-hidden="true">#</a> 三. 主从复制</h2><p>一般判断节点是否正常工作,常用的方法都是通过互相的ping-pong心跳检测机制，如果有一半以上的节点去ping一个节点的时候没pong回应，集群就会认为这个节点宕机，会断掉这个节点的连接。</p><ul><li>redis主节点默认每隔10s 发送一次心跳-—--判断从节点是否在线。</li><li>redis从节点每隔1s 发送一次心跳------给主节点发送自己的复制偏移量，从主节点获取到最新的数据变更命令，还做一件事情就是判断主节点是否在线。</li></ul><h3 id="_3-1-优点" tabindex="-1"><a class="header-anchor" href="#_3-1-优点" aria-hidden="true">#</a> 3.1 优点</h3><hr><ul><li>故障恢复：当主节点宕机，其他节点依然可以提供服务；</li><li>负载均衡：Master 节点提供写服务，Slave 节点提供读服务，分担压力；</li><li>高可用基石：是哨兵和 cluster 实施的基础，是高可用的基石。</li></ul><h3 id="_3-2-一致性" tabindex="-1"><a class="header-anchor" href="#_3-2-一致性" aria-hidden="true">#</a> 3.2 一致性</h3><hr><p>为了保证副本数据的一致性，主从架构采用了读写分离的方式。</p><p>读操作：主、从库都可以执行；</p><p>写操作：主库先执行，之后将写操作同步到从库；</p><h3 id="_3-3-复制" tabindex="-1"><a class="header-anchor" href="#_3-3-复制" aria-hidden="true">#</a> 3.3 复制</h3><hr><p>redis的同步是异步的</p><p>Redis全量复制一般发生在Slave初始化阶段，这时Slave需要将Master上的所有数据都复制一份。具体步骤如下：</p><ul><li>从服务器连接主服务器，发送SYNC命令；</li><li>主服务器接收到SYNC命名后，开始执行BGSAVE命令生成RDB文件并使用缓冲区记录此后执行的所有写命令；</li><li>主服务器BGSAVE执行完后，向所有从服务器发送快照文件，并在发送期间继续记录被执行的写命令；</li><li>从服务器收到快照文件后丢弃所有旧数据，载入收到的快照；</li><li>主服务器快照发送完毕后开始向从服务器发送缓冲区中的写命令；</li><li>从服务器完成对快照的载入，开始接收命令请求，并执行来自主服务器缓冲区的写命令；</li></ul><p>增量同步</p><p>Redis增量复制是指Slave初始化后开始正常工作时主服务器发生的写操作同步到从服务器的过程。</p><p>增量复制的过程主要是主服务器每执行一个写命令就会向从服务器发送相同的写命令，从服务器接收并执行收到的写命令。</p><p>Redis主从同步策略为主从刚刚连接的时候，进行全量同步；全同步结束后，进行增量同步。当然，如果有需要，slave 在任何时候都可以发起全量同步。redis 策略是，无论如何，首先会尝试进行增量同步，如不成功，要求从机进行全量同步。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当客户端发送写请求给master节点的时候，客户端会返回OK，然后同步到各个slave节点中。如果此时master还没来得及同步给slave节点时发生宕机,那么master内存中的数据会丢失。</p><p>解决方案:client端我们可以采取降级措施，将数据暂时写入本地缓存和磁盘中，在一段时间后重新写入master来保证数据不丢失。也可以将数据写入rocketmq.消息队列，发送一个延时消费消息去写入msater。</p></div><h2 id="四-哨兵模式" tabindex="-1"><a class="header-anchor" href="#四-哨兵模式" aria-hidden="true">#</a> 四. 哨兵模式</h2><p>在 Redis 主从复制模式中，因为系统不具备自动恢复的功能，所以当主服务器（master）宕机后，需要手动把一台从服务器（slave）切换为主服务器。在这个过程中，不仅需要人为干预，而且还会造成一段时间内服务器处于不可用状态，同时数据安全性也得不到保障，因此主从模式的可用性较低，不适用于线上生产环境。</p><p>Redis 官方推荐一种高可用方案，也就是 Redis Sentinel 哨兵模式，它弥补了主从模式的不足。Sentinel 通过监控的方式获取主机的工作状态是否正常，当主机发生故障时， Sentinel 会自动进行 Failover（即故障转移），并将其监控的从机提升主服务器（master），从而保证了系统的高可用性。</p><h3 id="_4-1-作用" tabindex="-1"><a class="header-anchor" href="#_4-1-作用" aria-hidden="true">#</a> 4.1 作用</h3><hr><p>哨兵主要有两个重要作用：</p><ol><li>哨兵节点会以每秒一次的频率对每个 Redis 节点发送PING命令，并通过 Redis 节点的回复来判断其运行状态。</li><li>当哨兵监测到主服务器发生故障时，会自动在从节点中选择一台将机器，并其提升为主服务器，然后使用 PubSub 发布订阅模式，通知其他的从节点，修改配置文件，跟随新的主服务器。</li></ol><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在实际生产情况中，Redis Sentinel 是集群的高可用的保障，为避免 Sentinel 发生意外，它一般是由 3～5 个节点组成，这样就算挂了个别节点，该集群仍然可以正常运转。其结构图如下所示：</p></div><figure><img src="'+d+'" alt="多哨兵" tabindex="0" loading="lazy"><figcaption>多哨兵</figcaption></figure><p>哨兵集群监控的 Redis 集群是主从架构，无法横向拓展，可以通过 Cluster 集群实现高可用</p><h2 id="五-集群" tabindex="-1"><a class="header-anchor" href="#五-集群" aria-hidden="true">#</a> 五. 集群</h2><p>Redis单实例的架构，从最开始的一主N从，到读写分离，再到Sentinel哨兵机制，单实例的Redis缓存足以应对大多数的使用场景，也能实现主从故障迁移。</p><p>Redis3.0加入了Redis的集群模式，实现了数据的分布式存储，对数据进行分片，将不同的数据存储在不同的master节点上面，从而解决了海量数据的存储问题。</p><p>Redis集群采用去中心化的思想，没有中心节点的说法，对于客户端来说，整个集群可以看成一个整体，可以连接任意一个节点进行操作，就像操作单一Redis实例一样，不需要任何代理中间件，当客户端操作的key没有分配到该node上时，Redis会返回转向指令，指向正确的node。</p><p>Redis也内置了高可用机制，支持N个master节点，每个master节点都可以挂载多个slave节点，当master节点挂掉时，集群会提升它的某个slave节点作为新的master节点。</p><h3 id="_5-1-哈希槽算法" tabindex="-1"><a class="header-anchor" href="#_5-1-哈希槽算法" aria-hidden="true">#</a> 5.1 哈希槽算法</h3><hr><p>常见的分区算法有hash算法、一致性hash算法</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>普通hash算法：将key使用hash算法计算之后，按照节点数量来取余，即hash(key)%N。优点就是比较简单，但是扩容或者摘除节点时需要重新根据映射关系计算，会导致数据重新迁移。</p><p>一致性hash算法：为每一个节点分配一个token，构成一个哈希环；查找时先根据key计算hash值，然后顺时针找到第一个大于等于该哈希值的token节点。优点是在加入和删除节点时只影响相邻的两个节点，缺点是加减节点会造成部分数据无法命中，所以一般用于缓存，而且用于节点量大的情况下，扩容一般增加一倍节点保障数据负载均衡。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Redis集群采用的算法是哈希槽分区算法。Redis集群中有16384个哈希槽（槽的范围是 0 -16383，哈希槽），将不同的哈希槽分布在不同的Redis节点上面进行管理，也就是说每个Redis节点只负责一部分的哈希槽。在对数据进行操作的时候，集群会对使用CRC16算法对key进行计算并对16384取模（slot = CRC16(key)%16383），得到的结果就是 Key-Value 所放入的槽，通过这个值，去找到对应的槽所对应的Redis节点，然后直接到这个对应的节点上进行存取操作。</p></div><p>使用哈希槽的好处就在于可以方便的添加或者移除节点，并且无论是添加删除或者修改某一个节点，都不会造成集群不可用的状态。当需要增加节点时，只需要把其他节点的某些哈希槽挪到新节点就可以了；当需要移除节点时，只需要把移除节点上的哈希槽挪到其他节点就行了；哈希槽数据分区算法具有以下几种特点：</p><ul><li>解耦数据和节点之间的关系，简化了扩容和收缩难度；</li><li>节点自身维护槽的映射关系，不需要客户端代理服务维护槽分区元数据</li><li>支持节点、槽、键之间的映射查询，用于数据路由，在线伸缩等场景</li></ul><h2 id="六-持久化" tabindex="-1"><a class="header-anchor" href="#六-持久化" aria-hidden="true">#</a> 六. 持久化</h2><p>redis持久化----两种方式</p><ol><li>redis提供了两种持久化的方式，分别是RDB（Redis DataBase）和AOF（Append Only File）。</li><li>RDB，简而言之，就是在不同的时间点，将redis存储的数据生成快照并存储到磁盘等介质上；</li><li>AOF，则是换了一个角度来实现持久化，那就是将redis执行过的所有写指令记录下来，在下次redis重新启动时，只要把这些写指令从前到后再重复执行一遍，就可以实现数据恢复了。</li><li>其实RDB和AOF两种方式也可以同时使用，在这种情况下，如果redis重启的话，则会优先采用AOF方式来进行数据恢复，这是因为AOF方式的数据恢复完整度更高。</li><li>如果你没有数据持久化的需求，也完全可以关闭RDB和AOF方式，这样的话，redis将变成一个纯内存数据库，就像memcache一样。</li></ol><h3 id="_6-1-redis持久化rdb" tabindex="-1"><a class="header-anchor" href="#_6-1-redis持久化rdb" aria-hidden="true">#</a> 6.1 redis持久化RDB</h3><hr><ol><li>RDB方式，是将redis某一时刻的数据持久化到磁盘中，是一种快照式的持久化方法。</li><li>redis在进行数据持久化的过程中，会先将数据写入到一个临时文件中，待持久化过程都结束了，才会用这个临时文件替换上次持久化好的文件。正是这种特性，让我们可以随时来进行备份，因为快照文件总是完整可用的。</li><li>对于RDB方式，redis会单独创建（fork）一个子进程来进行持久化，而主进程是不会进行任何IO操作的，这样就确保了redis极高的性能。</li><li>如果需要进行大规模数据的恢复，且对于数据恢复的完整性不是非常敏感，那RDB方式要比AOF方式更加的高效。</li><li>虽然RDB有不少优点，但它的缺点也是不容忽视的。如果你对数据的完整性非常敏感，那么RDB方式就不太适合你，因为即使你每5分钟都持久化一次，当redis故障时，仍然会有近5分钟的数据丢失。所以，redis还提供了另一种持久化方式，那就是AOF。</li></ol><h3 id="_6-2-redis持久化aof" tabindex="-1"><a class="header-anchor" href="#_6-2-redis持久化aof" aria-hidden="true">#</a> 6.2 redis持久化AOF</h3><hr><ol><li>AOF，英文是Append Only File，即只允许追加不允许改写的文件。</li><li>如前面介绍的，AOF方式是将执行过的写指令记录下来，在数据恢复时按照从前到后的顺序再将指令都执行一遍，就这么简单。</li><li>我们通过配置redis.conf中的appendonly yes就可以打开AOF功能。如果有写操作（如SET等），redis就会被追加到AOF文件的末尾。</li><li>默认的AOF持久化策略是每秒钟fsync一次（fsync是指把缓存中的写指令记录到磁盘中），因为在这种情况下，redis仍然可以保持很好的处理性能，即使redis故障，也只会丢失最近1秒钟的数据。</li><li>如果在追加日志时，恰好遇到磁盘空间满、inode满或断电等情况导致日志写入不完整，也没有关系，redis提供了redis-check-aof工具，可以用来进行日志修复。</li><li>因为采用了追加方式，如果不做任何处理的话，AOF文件会变得越来越大，为此，redis提供了AOF文件重写（rewrite）机制，即当AOF文件的大小超过所设定的阈值时，redis就会启动AOF文件的内容压缩，只保留可以恢复数据的最小指令集。举个例子或许更形象，假如我们调用了100次INCR指令，在AOF文件中就要存储100条指令，但这明显是很低效的，完全可以把这100条指令合并成一条SET指令，这就是重写机制的原理。</li><li>在进行AOF重写时，仍然是采用先写临时文件，全部完成后再替换的流程，所以断电、磁盘满等问题都不会影响AOF文件的可用性，这点大家可以放心。</li><li>AOF方式的另一个好处，我们通过一个“场景再现”来说明。某同学在操作redis时，不小心执行了FLUSHALL，导致redis内存中的数据全部被清空了，这是很悲剧的事情。不过这也不是世界末日，只要redis配置了AOF持久化方式，且AOF文件还没有被重写（rewrite），我们就可以用最快的速度暂停redis并编辑AOF文件，将最后一行的FLUSHALL命令删除，然后重启redis，就可以恢复redis的所有数据到FLUSHALL之前的状态了。是不是很神奇，这就是AOF持久化方式的好处之一。但是如果AOF文件已经被重写了，那就无法通过这种方法来恢复数据了。</li><li>虽然优点多多，但AOF方式也同样存在缺陷，比如在同样数据规模的情况下，AOF文件要比RDB文件的体积大。而且，AOF方式的恢复速度也要慢于RDB方式。</li></ol><p>如果你直接执行BGREWRITEAOF命令，那么redis会生成一个全新的AOF文件，其中便包括了可以恢复现有数据的最少的命令集。</p><ol start="10"><li>如果运气比较差，AOF文件出现了被写坏的情况，也不必过分担忧，redis并不会贸然加载这个有问题的AOF文件，而是报错退出。这时可以通过以下步骤来修复出错的文件：</li></ol><p>1.备份被写坏的AOF文件 2.运行redis-check-aof –fix进行修复 3.用diff -u来看下两个文件的差异，确认问题点 4.重启redis，加载修复后的AOF文件</p><h3 id="_6-3-redis持久化aof重写" tabindex="-1"><a class="header-anchor" href="#_6-3-redis持久化aof重写" aria-hidden="true">#</a> 6.3 redis持久化AOF重写</h3><hr><ol><li>AOF重写的内部运行原理，我们有必要了解一下。</li><li>在重写即将开始之际，redis会创建（fork）一个“重写子进程”，这个子进程会首先读取现有的AOF文件，并将其包含的指令进行分析压缩并写入到一个临时文件中。</li><li>与此同时，主工作进程会将新接收到的写指令一边累积到内存缓冲区中，一边继续写入到原有的AOF文件中，这样做是保证原有的AOF文件的可用性，避免在重写过程中出现意外。</li><li>当“重写子进程”完成重写工作后，它会给父进程发一个信号，父进程收到信号后就会将内存中缓存的写指令追加到新AOF文件中。</li><li>当追加结束后，redis就会用新AOF文件来代替旧AOF文件，之后再有新的写指令，就都会追加到新的AOF文件中了。</li></ol><h3 id="_6-4-如何选择rdb和aof" tabindex="-1"><a class="header-anchor" href="#_6-4-如何选择rdb和aof" aria-hidden="true">#</a> 6.4 如何选择RDB和AOF</h3><hr><ol><li>对于我们应该选择RDB还是AOF，官方的建议是两个同时使用。这样可以提供更可靠的持久化方案。</li><li>redis的备份和还原，可以借助第三方的工具redis-dump。</li></ol><h3 id="_6-5-缺点" tabindex="-1"><a class="header-anchor" href="#_6-5-缺点" aria-hidden="true">#</a> 6.5 缺点</h3><hr><ol><li>RDB需要定时持久化，风险是可能会丢两次持久之间的数据，量可能很大。</li><li>AOF每秒fsync一次指令硬盘，如果硬盘IO慢，会阻塞父进程；风险是会丢失1秒多的数据；在Rewrite过程中，主进程把指令存到mem-buffer中，最后写盘时会阻塞主进程。</li></ol>',79),t=[h];function n(p,c){return e(),a("div",null,t)}const A=i(l,[["render",n],["__file","redis-cache.html.vue"]]);export{A as default};