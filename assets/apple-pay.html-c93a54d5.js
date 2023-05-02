const e=JSON.parse('{"key":"v-44beb608","path":"/back/payment/apple-pay.html","title":"apple内购","lang":"zh-CN","frontmatter":{"icon":"card","date":"2023-04-25T00:00:00.000Z","category":["pay","java","后端"],"tag":["pay","java","apple","后端"],"star":true,"sticky":true,"description":"apple内购 还是先找官方文档... 打开开发者网址https://developer.apple.com/ 网页最下面：英文(In-app purchase)，中文(App 内购买项目) 选择中文(App 内购买项目配置流程) 选择中文(生成共享密钥以验证数据) 点击链接中文(通过 App Store 验证收据)","head":[["meta",{"property":"og:url","content":"https://gitee.com/jing-xingchun/back/payment/apple-pay.html"}],["meta",{"property":"og:site_name","content":"Jingxc"}],["meta",{"property":"og:title","content":"apple内购"}],["meta",{"property":"og:description","content":"apple内购 还是先找官方文档... 打开开发者网址https://developer.apple.com/ 网页最下面：英文(In-app purchase)，中文(App 内购买项目) 选择中文(App 内购买项目配置流程) 选择中文(生成共享密钥以验证数据) 点击链接中文(通过 App Store 验证收据)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-02T06:41:43.000Z"}],["meta",{"property":"article:author","content":"Jingxc"}],["meta",{"property":"article:tag","content":"pay"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"apple"}],["meta",{"property":"article:tag","content":"后端"}],["meta",{"property":"article:published_time","content":"2023-04-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-02T06:41:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"apple内购\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-02T06:41:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jingxc\\",\\"url\\":\\"/\\"}]}"]]},"headers":[{"level":2,"title":"为什么要进行服务端验证","slug":"为什么要进行服务端验证","link":"#为什么要进行服务端验证","children":[]},{"level":2,"title":"购买流程","slug":"购买流程","link":"#购买流程","children":[]},{"level":2,"title":"请求验证说明","slug":"请求验证说明","link":"#请求验证说明","children":[]},{"level":2,"title":"验证代码","slug":"验证代码","link":"#验证代码","children":[]},{"level":2,"title":"退款","slug":"退款","link":"#退款","children":[{"level":3,"title":"版本1退款","slug":"版本1退款","link":"#版本1退款","children":[]},{"level":3,"title":"版本2退款","slug":"版本2退款","link":"#版本2退款","children":[]}]}],"git":{"createdTime":1683009703000,"updatedTime":1683009703000,"contributors":[{"name":"Jingxc","email":"2584982513@qq.com","commits":1}]},"readingTime":{"minutes":8.5,"words":2549},"filePathRelative":"back/payment/apple-pay.md","localizedDate":"2023年4月25日","excerpt":"<h1> apple内购</h1>\\n<p>还是先找官方文档...</p>\\n<ul>\\n<li>打开<a href=\\"https://developer.apple.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">开发者网址https://developer.apple.com/</a></li>\\n<li>网页最下面：<a href=\\"https://developer.apple.com/in-app-purchase/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">英文(In-app purchase)</a>，<a href=\\"https://developer.apple.com/cn/in-app-purchase/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">中文(App 内购买项目)</a></li>\\n<li>选择<a href=\\"https://developer.apple.com/cn/help/app-store-connect/configure-in-app-purchase-settings/overview-for-configuring-in-app-purchases/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">中文(App 内购买项目配置流程)</a></li>\\n<li>选择<a href=\\"https://developer.apple.com/cn/help/app-store-connect/configure-in-app-purchase-settings/generate-a-shared-secret-to-verify-receipts\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">中文(生成共享密钥以验证数据)</a></li>\\n<li>点击链接<a href=\\"https://developer.apple.com/documentation/storekit/in-app_purchase/original_api_for_in-app_purchase/validating_receipts_with_the_app_store\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">中文(通过 App Store 验证收据)</a></li>\\n</ul>","autoDesc":true}');export{e as data};
