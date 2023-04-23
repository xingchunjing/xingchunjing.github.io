<h3 style="text-align: left; line-height: 2;"><span style="font-size: 19px; font-family: 华文楷体;">xsolla:</span><span style="color: rgb(116, 126, 138); background-color: rgb(255, 255, 255); font-size: 19px; font-family: 华文楷体;">您已尽心尽力开发出令人惊叹、独一无二的游戏。作为您的合作伙伴，帮助您将成果与世界共享是我们的使命。</span></h3><h4 style="text-align: left; line-height: 2;"><span style="font-family: 华文楷体;"><strong>作为开发者在集成xsolla支付接口之前，首先要有一系列的准备，xsolla商家账号，接入流程参考官方文档 </strong></span><a href="https://developers.xsolla.com/zh/doc/pay-station/integration-guide/get-started/" target="_blank">https://developers.xsolla.com/zh/doc/pay-station/integration-guide/get-started/</a> </h4><h4 style="text-align: start; line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;"><strong>一. 注册xsolla商家相关</strong></span><span style="color: rgb(66, 144, 247); font-family: 华文楷体;"><strong>账号</strong></span></h4><p style="text-align: start; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">1.1 </span><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">在浏览器输入 &nbsp;</span><a href="https://publisher.xsolla.com/" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://publisher.xsolla.com/</span></a><span style="font-size: 14px; font-family: 华文楷体;"> </span><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">跳转xsolla注册/登陆界面，点击注册</span></p><p style="text-align: start; line-height: 2;"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">1.2 填写公司和创建项目，用于生成商户id(</span><span style="color: rgb(66, 144, 247); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">自己在这里遇到一个坑，在创建账号时创建的项目不是active的我也不清楚为啥，导致后面的请求都不行，后来联系了平台人员，我把项目删了重新新建一个，刚建完就是active的，就很奇妙</span><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">)</span></p><p style="text-align: start; line-height: 2;"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">官方的人员很热情，回复得也很快很有耐心，直接点击下面的在线聊天就能沟通，点赞，下面是部分回复</span></p><pre><code class="language-markdown">我：你好，我是开发人员，我想接入咱们的支付功能，在获取用户令牌时返回
"message": "Project is not active. Please make sure you have successfully passed all tests 
&lt;a href=\"https:\/\/publisher.xsolla.com\/403694\/projects\/217604\" target=\"_blank\"&gt;here&lt;\/a&gt; and activate your project.",

Simon：

https://publisher.xsolla.com/403694/projects/217604/edit/webhooks 您还需要设置 webhook 并粘贴 webhook 的 URL 以激活您的项目。

我：我是按照咱们官方文档步骤来的，webhook这一块下面的商店/支付/订阅都需要填写才能激活项目吗？

Simon

https://developers.xsolla.com/solutions/payments/ 它是付款文档，但您可以在那里看到有关如何设置项目和启用它的所有信息。它还有关于 webhook 的主题。

我：按照上面操作了一顿还是不行，后来干脆把创建账号时创建的项目删了，再按照上面创建一个，直接变成active的了，很奇妙

Simon：
很高兴分享指向我们最相关解决方案的链接。
您还可以使用我发送给您的链接来集成它并启用您的项目。

您还可以查看最适合您的项目的内容。

支付 - https://xsolla.com/products/paystation

游戏内商店 - https://xsolla.com/products/in-game-store

网上商店 - https://xsolla.com/solution/web-shop-for-mobile-games?cardId=290

游戏销售 - https://xsolla.com/solutions/online-game-sales?cardId=166

数字分销中心 - https://xsolla.com/products/digital-distribution-hub

订阅 - https://xsolla.com/products/subscriptions



Simon：

您可以在发布者帐户中选择产品，单击感兴趣的产品选项卡中的文档。还有一个完整的集成指南，其中包括启用您的项目和产品</code></pre><p style="text-align: start; line-height: 2;"><span style="color: rgb(73, 92, 107); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;"><strong>1.3 商户ID</strong></span><span style="color: rgb(73, 92, 107); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">在以下位置显示：</span></p><ul><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">在</span><span style="font-size: 14px; font-family: 华文楷体;"><strong>项目设置 &gt; Webhooks</strong></span><span style="font-size: 14px; font-family: 华文楷体;">部分。</span><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">记录商户id，项目id，api密钥备用（webhook）</span></li><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">在</span><span style="font-size: 14px; font-family: 华文楷体;"><strong>公司设置 &gt; 公司</strong></span><span style="font-size: 14px; font-family: 华文楷体;">部分。</span></li></ul><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;"><strong>1.4 API密钥</strong></span><span style="font-size: 14px; font-family: 华文楷体;">仅在创建它时在发布商帐户中显示一次，必须存储在己侧。您可以在以下部分中创建新的密钥：</span></p><ul><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;"><strong>公司设置 &gt; API密钥</strong></span></li><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;"><strong>项目设置 &gt; API密钥</strong></span></li></ul><p style="text-align: left; line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;"><strong>二. 获取用户令牌</strong></span></p><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">请求地址：</span><a href="https://api.xsolla.com/merchant/v2/merchants/{xsollaUserId}/token" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://api.xsolla.com/merchant/v2/merchants/{xsollaUserId}/token</span></a></p><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">xsollaUserId: 用户创建的商户id</span></p><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">封装请求头信息</span></p><p style="text-align: start; line-height: 2;"><span style="color: rgb(73, 92, 107); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">xsollaAPI使用</span><a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank" style="text-align: left;"><span style="font-size: 14px; font-family: 华文楷体;">基本认证</span></a><span style="color: rgb(73, 92, 107); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">。所有发送到API的请求必须包含</span><span style="font-size: 14px; font-family: 华文楷体;">Authorization: Basic &lt;your_authorization_basic_key&gt;</span><span style="color: rgb(73, 92, 107); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">头，其中</span><span style="font-size: 14px; font-family: 华文楷体;">&lt;your_authorization_basic_key&gt;</span><span style="color: rgb(73, 92, 107); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">是按照Base64标准加密的</span><span style="color: rgb(73, 92, 107); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;"><strong>商户ID: API密钥</strong></span><span style="color: rgb(73, 92, 107); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">对。请前往</span><a href="https://publisher.xsolla.com/" target="_blank" style="text-align: left;"><span style="font-size: 14px; font-family: 华文楷体;">发布商帐户</span></a><span style="color: rgb(73, 92, 107); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">找到以下参数：</span></p><pre><code class="language-java">//授权信息
String xsollaUserId = constantInfo.getUserId();//商户id
String appId = constantInfo.getAppId();//项目id
String appKey = constantInfo.getAppKey();//密钥
String headerBasic = OauthSignatureUtil.headerBasic(xsollaUserId, appKey);//方法参见java-paypal

Map&lt;String, String&gt; headers = new HashMap&lt;&gt;();
headers.put("Authorization", headerBasic);</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">对于请求提没什么可说的直接按照文档上赋值就可以了</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">示例代码：</span></p><pre><code class="language-java">@Override
@OperationLogger
public ReturnResult createToken(CreateTokenParams params) {

    String userId = params.getUserId();
    String gameId = params.getGameId();
    String channelId = params.getChannelId();
    String email = params.getEmail();
    String currencyType = params.getCurrencyType();

    //验证账号是否存在
    UserAccountInfo accountInfo = UserAccountInfo.builder().userId(userId).build();
    accountInfo = userAccountInfoMapper.selectOne(new QueryWrapper&lt;&gt;(accountInfo));
    if (accountInfo == null) {
        return ReturnResultError.builder().code(ConstantCommon.RETURN_CODE_903).msg("账号不存在").data("")
                .build();
    }

    String username = accountInfo.getUsername();

    //查询渠道配置信息
    ConstantMeInfo constantInfo = getCacheConstantInfo(gameId, channelId, "xsolla");

    //授权信息
    String xsollaUserId = constantInfo.getUserId();//商户id
    String appId = constantInfo.getAppId();//项目id
    String appKey = constantInfo.getAppKey();//密钥
    String headerBasic = OauthSignatureUtil.headerBasic(xsollaUserId, appKey);//方法参见java-paypal

    Map&lt;String, String&gt; headers = new HashMap&lt;&gt;();
    headers.put("Authorization", headerBasic);

    //请求体
    Map&lt;String, Object&gt; xsollaParams = new HashMap&lt;&gt;();
    xsollaParams.put("settings", new HashMap&lt;String, Object&gt;() {{
        put("currency", currencyType);
        put("language", "en");//xsolla支付界面语言。可定制化配置
        put("project_id", Integer.parseInt(appId));
    }});
    xsollaParams.put("user", new HashMap&lt;String, Object&gt;() {{
        put("email", new HashMap&lt;String, String&gt;() {{
            put("value", email);
        }});
        put("id", new HashMap&lt;String, String&gt;() {{
            put("value", userId);
        }});
        put("name", new HashMap&lt;String, String&gt;() {{
            put("value", username);
        }});
    }});

    Map&lt;String, String&gt; createToken = client.postByJsonToMap("https://api.xsolla.com/merchant/v2/merchants/" + xsollaUserId + "/token", headers, xsollaParams);

    System.out.println(JSON.toJSONString(createToken));
    return ReturnResultSuccess.builder().code(ConstantCommon.RETURN_CODE_200).msg("订单创建成功").data(JSON.toJSONString(createToken))
            .count(ConstantCommon.RETURN_COUNT_1).build();
}</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">这样就拿到了用户的token信息</span></p><pre><code class="language-css">{
    "token":"twpuiVlqxd95a0rL2isA7RmTjSD7rzXa_lc_en_bg_FFFFFF_tb_3D46F5"
}</code></pre><p><br></p>