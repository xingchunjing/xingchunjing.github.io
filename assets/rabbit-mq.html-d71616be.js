const e=JSON.parse('{"key":"v-66e6d0ac","path":"/knowledge/rabbit-mq.html","title":"RabbitMQ","lang":"zh-CN","frontmatter":{"icon":"rss","date":"2020-05-23T00:00:00.000Z","category":["java","后端"],"tag":["java","后端","RabbitMQ"],"star":true,"description":"RabbitMQ 为什么使用MQ 流量削峰：解决高并发问题 例如秒杀活动，可能会在短时间内产生大量请求同时打到服务端，如果后端对每个请求都进行数据库读写操作，定会造成服务器压力过大，产生服务异常甚至不可用。我们可以通过使用MQ实现流量缓冲，将所有请求先放入消息队列中，服务端每次处理业务先从消息队列获取，从而实现流量削峰，解决高并发问题。 应用解耦：提升系统可用性 例如电商应用中有订单系统、库存系统、物流系统、支付系统，当用户创建订单后，先后调用库存系统、物流系统、支付系统，任何一个子系统出了故障，都会造成下单失败。引入消息队列后，系统间耦合调用的问题会减少，任何一个子系统出现故障都不会影响用户下单，子系统故障恢复后，会继续处理消息，提升系统可用性。","head":[["meta",{"property":"og:url","content":"https://gitee.com/jing-xingchun/knowledge/rabbit-mq.html"}],["meta",{"property":"og:site_name","content":"Jingxc"}],["meta",{"property":"og:title","content":"RabbitMQ"}],["meta",{"property":"og:description","content":"RabbitMQ 为什么使用MQ 流量削峰：解决高并发问题 例如秒杀活动，可能会在短时间内产生大量请求同时打到服务端，如果后端对每个请求都进行数据库读写操作，定会造成服务器压力过大，产生服务异常甚至不可用。我们可以通过使用MQ实现流量缓冲，将所有请求先放入消息队列中，服务端每次处理业务先从消息队列获取，从而实现流量削峰，解决高并发问题。 应用解耦：提升系统可用性 例如电商应用中有订单系统、库存系统、物流系统、支付系统，当用户创建订单后，先后调用库存系统、物流系统、支付系统，任何一个子系统出了故障，都会造成下单失败。引入消息队列后，系统间耦合调用的问题会减少，任何一个子系统出现故障都不会影响用户下单，子系统故障恢复后，会继续处理消息，提升系统可用性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-10T15:03:54.000Z"}],["meta",{"property":"article:author","content":"Jingxc"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"后端"}],["meta",{"property":"article:tag","content":"RabbitMQ"}],["meta",{"property":"article:published_time","content":"2020-05-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-10T15:03:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-10T15:03:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jingxc\\",\\"url\\":\\"/\\"}]}"]]},"headers":[{"level":2,"title":"为什么使用MQ","slug":"为什么使用mq","link":"#为什么使用mq","children":[{"level":3,"title":"流量削峰：解决高并发问题","slug":"流量削峰-解决高并发问题","link":"#流量削峰-解决高并发问题","children":[]},{"level":3,"title":"应用解耦：提升系统可用性","slug":"应用解耦-提升系统可用性","link":"#应用解耦-提升系统可用性","children":[]},{"level":3,"title":"异步处理：提升响应速度","slug":"异步处理-提升响应速度","link":"#异步处理-提升响应速度","children":[]}]},{"level":2,"title":"工作原理","slug":"工作原理","link":"#工作原理","children":[]},{"level":2,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[]},{"level":2,"title":"高级应用","slug":"高级应用","link":"#高级应用","children":[{"level":3,"title":"死信队列","slug":"死信队列","link":"#死信队列","children":[]},{"level":3,"title":"延迟队列","slug":"延迟队列","link":"#延迟队列","children":[]},{"level":3,"title":"队列幂等性","slug":"队列幂等性","link":"#队列幂等性","children":[]},{"level":3,"title":"优先级队列","slug":"优先级队列","link":"#优先级队列","children":[]},{"level":3,"title":"惰性队列","slug":"惰性队列","link":"#惰性队列","children":[]}]},{"level":2,"title":"工作模式","slug":"工作模式","link":"#工作模式","children":[{"level":3,"title":"Simple（简单模式）","slug":"simple-简单模式","link":"#simple-简单模式","children":[]},{"level":3,"title":"Work queues（工作模式）","slug":"work-queues-工作模式","link":"#work-queues-工作模式","children":[]},{"level":3,"title":"Publish/Subscribe（发布订阅模式）","slug":"publish-subscribe-发布订阅模式","link":"#publish-subscribe-发布订阅模式","children":[]},{"level":3,"title":"Routing（路由模式）","slug":"routing-路由模式","link":"#routing-路由模式","children":[]},{"level":3,"title":"Topics（主题模式）","slug":"topics-主题模式","link":"#topics-主题模式","children":[]}]},{"level":2,"title":"交换机类型","slug":"交换机类型","link":"#交换机类型","children":[]}],"git":{"createdTime":1683731034000,"updatedTime":1683731034000,"contributors":[{"name":"Jingxc","email":"2584982513@qq.com","commits":1}]},"readingTime":{"minutes":8.57,"words":2572},"filePathRelative":"knowledge/rabbit-mq.md","localizedDate":"2020年5月23日","excerpt":"<h1> RabbitMQ</h1>\\n<h2> 为什么使用MQ</h2>\\n<h3> 流量削峰：解决高并发问题</h3>\\n<hr>\\n<p>例如秒杀活动，可能会在短时间内产生大量请求同时打到服务端，如果后端对每个请求都进行数据库读写操作，定会造成服务器压力过大，产生服务异常甚至不可用。我们可以通过使用MQ实现流量缓冲，将所有请求先放入消息队列中，服务端每次处理业务先从消息队列获取，从而实现流量削峰，解决高并发问题。</p>\\n<h3> 应用解耦：提升系统可用性</h3>\\n<hr>\\n<p>例如电商应用中有订单系统、库存系统、物流系统、支付系统，当用户创建订单后，先后调用库存系统、物流系统、支付系统，任何一个子系统出了故障，都会造成下单失败。引入消息队列后，系统间耦合调用的问题会减少，任何一个子系统出现故障都不会影响用户下单，子系统故障恢复后，会继续处理消息，提升系统可用性。</p>","autoDesc":true}');export{e as data};
