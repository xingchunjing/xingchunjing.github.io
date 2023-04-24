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
}</code></pre><p style="text-align: left; line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;"><strong>二. </strong></span><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;">使用指定商品创建订单</span></p><p style="text-align: left; line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;">目前使用的是指定商品创建订单，商品信息需要在商户后台提前配置，项目-商店-虚拟商品，配置即可,也可以使用api创建虚拟商品</span></p><p style="text-align: left; line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;"> </span><a href="https://developers.xsolla.com/zh/api/igs-bb/operation/admin-create-virtual-item/" target="_blank">https://developers.xsolla.com/zh/api/igs-bb/operation/admin-create-virtual-item/</a> </p><p style="text-align: left; line-height: 2;"><img src="/article/xsolla-pay02.jpg" alt="" data-href="/article/xsolla-pay02.jpg" style=""></p><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">请求地址：</span><a href="https://store.xsolla.com/api/v2/project/{projectId}/payment/item/{productId}" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://store.xsolla.com/api/v2/project/{projectId}/payment/item/{productId}</span></a></p><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">projectId:项目id，productId：商品id，sku</span></p><p style="text-align: left; line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">封装请求头信息，用到上步骤获取的用户令牌</span></p><pre><code class="language-java">//授权信息
Map&lt;String, String&gt; headers = new HashMap&lt;&gt;();
headers.put("Authorization", "Bearer " + token);</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">封装用户付款ui</span></p><pre><code class="language-java">//配置ui显示
Map&lt;String, Object&gt; ui = new HashMap&lt;&gt;();
ui.put("desktop", new HashMap&lt;String, Object&gt;() {{//桌面版本的界面设置。
    put("header", new HashMap&lt;String, Object&gt;() {{
        put("close_button", false);//是否在支付中心桌面端显示关闭按钮。该按钮将关闭支付中心并将用户重定向到settings.return_url参数中指定的URL。默认为false。
        put("is_visible", true);//页眉在支付UI上是否可见。
        put("type", "normal");//如何显示页眉。不能：compact（隐藏项目名称和用户ID）或normal（默认）
        put("visible_logo", true);//标题中将显示Logo
        put("visible_name", true);//页眉中是否显示项目名称。
        put("visible_purchase", true);//是否在页眉中显示购买描述(purchase.description.value )
    }});
}});
ui.put("mobile", new HashMap&lt;String, Object&gt;() {{
    put("footer", new HashMap&lt;String, Object&gt;() {{
        put("is_visible", true);//是否在移动版本的支付UI中隐藏或显示脚注。
    }});
    put("header", new HashMap&lt;String, Object&gt;() {{
        put("close_button", false);//是否在支付中心移动端显示关闭按钮。该按钮将关闭支付中心并将用户重定向到settings.return_url参数中指定的URL。默认为false。
    }});
}});
ui.put("size", "large");
ui.put("theme", "default");
ui.put("version", "mobile");//设备的类型。可以是desktop（默认值）或mobile。</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">完整的请求体信息</span></p><pre><code class="language-java">Map&lt;String, Object&gt; xsollaParams = new HashMap&lt;&gt;();
xsollaParams.put("settings", new HashMap&lt;String, Object&gt;() {{
    put("ui", ui);
    put("return_url", constantInfo.getReturnUrl());
}});
xsollaParams.put("sandbox", true);//沙盒环境
xsollaParams.put("quantity", 1);
xsollaParams.put("custom_parameters", new HashMap&lt;String, Object&gt;() {{//项目特定参数。
    put("character_id", userId);
}});</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">订单创建成功，返回</span></p><pre><code class="language-css">{
    "order_id":32304580,
    "token":"twpugyGEI56prN2fAzMKu5ynipYwXZqe_lc_cn_bg_FFFFFF_tb_3D46F5"
}</code></pre><p style="line-height: 2;"><span style="font-size: 16px; font-family: 华文楷体;">直接访问 </span><a href="https://sandbox-secure.xsolla.com/paystation4/?token=TOKEN" target="_blank"><span style="font-size: 16px; font-family: 华文楷体;">https://sandbox-secure.xsolla.com/paystation4/?token=TOKEN</span></a><span style="font-size: 16px; font-family: 华文楷体;"> 即可跳转到付款页面，当然也可以用iframe中打开</span></p><p style="line-height: 2;"><span style="font-size: 16px; font-family: 华文楷体;">使用上面的链接在沙盒模式下打开支付UI。项目发布后，请使用此URL：https://secure.xsolla.com/paystation4/?token=TOKEN。</span></p><p style="line-height: 2;"><br></p><p style="line-height: 2;"><img src="/article/xsolla-pay01.jpg" alt="" data-href="/article/xsolla-pay01.jpg" style=""></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 16px; font-family: 华文楷体;">选择paypal支付，可以用paypal沙盒虚拟账号支付，有关paypal账号部分参见java-paypal</span></p><p style="line-height: 2;"><img src="/article/xsolla-pay03.jpg" alt="" data-href="/article/xsolla-pay03.jpg" style=""></p><p style="line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;">在个人商户邮箱就可收到用户的付款信息</span></p><p style="line-height: 2;"><img src="/article/xsolla-pay04.jpg" alt="" data-href="/article/xsolla-pay04.jpg" style=""></p><h1 style="text-align: left; line-height: 2;"><span style="font-size: 16px; font-family: 华文楷体;">通过发布商帐户进行管理</span></h1><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">可以使用</span><a href="https://publisher.xsolla.com/" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">发布商帐户</span></a><span style="font-size: 14px; font-family: 华文楷体;">轻松管理付款：</span></p><ul><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">在</span><span style="font-size: 14px; font-family: 华文楷体;"><strong>会计 &gt; 交易登记表</strong></span><span style="font-size: 14px; font-family: 华文楷体;">中查看交易历史记录、统计数据及上传交易数据。（</span><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">需要选择测试交易就能看见刚才测试的支付订单</span><span style="font-size: 14px; font-family: 华文楷体;">）</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">在</span><span style="font-size: 14px; font-family: 华文楷体;"><strong>会计 &gt; 付款</strong></span><span style="font-size: 14px; font-family: 华文楷体;">中核对收入。</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">在</span><span style="font-size: 14px; font-family: 华文楷体;"><strong>会计 &gt; 报告</strong></span><span style="font-size: 14px; font-family: 华文楷体;">导出用于法律合规事宜的报告。</span></li></ul><p style="text-align: left; line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;"><strong>三. 退款</strong></span></p><p style="text-align: left; line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 14px; font-family: 华文楷体;"><strong>可以发起部分退款，也可以全额退款，这里只介绍全额退款，详细的文档请参见</strong></span></p><p style="text-align: left; line-height: 2;"><a href="https://developers.xsolla.com/zh/api/pay-station/operation/request-refund/" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://developers.xsolla.com/zh/api/pay-station/operation/request-refund/</span></a><span style="font-size: 14px; font-family: 华文楷体;"> </span></p><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">退款需要交易id，交易id</span></p><ul><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">商户：商户后台交易记录能查看到交易id</span></li><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">用户：用户在付款后，ui页面有显示（№1163315218）</span></li></ul><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">请求地址： </span><a href="https://api.xsolla.com/merchant/v2/merchants/{merchant_id}/reports/transactions/{transaction_id}/refund" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://api.xsolla.com/merchant/v2/merchants/{merchant_id}/reports/transactions/{transaction_id}/refund</span></a><span style="font-size: 14px; font-family: 华文楷体;"> </span></p><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">merchant_id：商户id</span></p><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">transaction_id：交易id</span></p><pre><code class="language-java">@Override
@OperationLogger
public ReturnResult refundOrder(RefundOrderParams params) {

    String userId = params.getUserId();
    String orderId = params.getOrderId();
    String gameId = params.getGameId();
    String channelId = params.getChannelId();
    String transcationId = params.getTranscationId();
    String desc = params.getDesc();

    //查询订单是否存在
    OrderMeInfo orderMeInfo = OrderMeInfo.builder().gameId(gameId).channelId(channelId).orderId(orderId).userId(userId)
            .orderStatus(ConstantCommon.ORDER_STATUS_1).build();
    orderMeInfo = orderMeInfoMapper.selectOne(new QueryWrapper&lt;&gt;(orderMeInfo));
    if (orderMeInfo == null) {
        return ReturnResultError.builder().code(ConstantCommon.RETURN_CODE_903).msg("订单不存在或者不存在/已退款").data("")
                .build();
    }

    //查询渠道配置信息
    ConstantMeInfo constantInfo = getCacheConstantInfo(gameId, channelId, "xsolla");

    //授权信息
    String xsollaUserId = constantInfo.getUserId();//商户id
    String appKey = constantInfo.getAppKey();//密钥
    String headerBasic = OauthSignatureUtil.headerBasic(xsollaUserId, appKey);

    Map&lt;String, String&gt; headers = new HashMap&lt;&gt;();
    headers.put("Authorization", headerBasic);

    Map&lt;String, Object&gt; xsollaParams = new HashMap&lt;&gt;();
    xsollaParams.put("description", "退款理由" + desc);
    xsollaParams.put("email", "18712709017@163.com");//用户邮箱

    Map&lt;String, String&gt; refund = client.postByJsonToMap("https://api.xsolla.com/merchant/v2/merchants/"
            + constantInfo.getUserId() + "/reports/transactions/" + transcationId + "/refund", headers, xsollaParams);
    System.out.println(JSON.toJSONString(refund));
    
    //TODO 更新订单信息
    return ReturnResultSuccess.builder().code(ConstantCommon.RETURN_CODE_200).msg("退款成功").data(refund)
            .count(ConstantCommon.RETURN_COUNT_1).build();
}</code></pre><h1 style="text-align: left; line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;">四. 设置WEBHOOK(重要)</span></h1><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">如希望接收事件通知（如支付状态变化），请在发布商帐户中设置Webhook：</span></p><ol><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">在</span><a href="https://publisher.xsolla.com/" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">发布商帐户</span></a><span style="font-size: 14px; font-family: 华文楷体;">中打开您的项目。</span></li><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">在侧边栏中单击</span><span style="font-size: 14px; font-family: 华文楷体;"><strong>项目设置</strong></span><span style="font-size: 14px; font-family: 华文楷体;">，然后前往</span><span style="font-size: 14px; font-family: 华文楷体;"><strong>Webhooks</strong></span><span style="font-size: 14px; font-family: 华文楷体;">。</span></li><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">将</span><span style="font-size: 14px; font-family: 华文楷体;"><strong>Webhooks</strong></span><span style="font-size: 14px; font-family: 华文楷体;">开关设置为</span><span style="font-size: 14px; font-family: 华文楷体;"><strong>开</strong></span><span style="font-size: 14px; font-family: 华文楷体;">。</span></li><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">指定Webhook URL。</span></li><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">默认会生成一个用于项目Webhook签名的密钥。如要生成一个新密钥，请单击刷新图标。</span></li><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">单击</span><span style="font-size: 14px; font-family: 华文楷体;"><strong>保存设置</strong></span><span style="font-size: 14px; font-family: 华文楷体;">。</span></li></ol><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">推荐实现以下Webhook：</span></p><ul><li style="text-align: left; line-height: 2;"><a href="https://developers.xsolla.com/zh/webhooks/operation/user-validation" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">用户验证</span></a></li><li style="text-align: left; line-height: 2;"><a href="https://developers.xsolla.com/zh/webhooks/operation/payment" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">付款（可以将订单与交易关联起来）</span></a></li><li style="text-align: left; line-height: 2;"><a href="https://developers.xsolla.com/zh/webhooks/operation/successful-order-payment/" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">购买时获取购物车内容</span></a></li><li style="text-align: left; line-height: 2;"><a href="https://developers.xsolla.com/zh/webhooks/operation/refund/" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">退款</span></a></li><li style="text-align: left; line-height: 2;"><a href="https://developers.xsolla.com/zh/webhooks/operation/partial-refund/" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">部分退款</span></a></li></ul><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">要确认已收到Webhook，您的服务器必须作出如下响应：</span></p><ul><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">不带消息正文的HTTP代码204。</span></li><li style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">描述问题的HTTP代码400（如果指定用户未找到或传入的签名无效）。</span></li></ul><p style="text-align: left; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">xsolla的接入到目前就已基本完成</span></p><p style="text-align: left; line-height: 2;"><br></p><p style="text-align: left; line-height: 2;"><br></p><ul><li style="text-align: start; line-height: 2;"><span style="font-size: 19px; font-family: 华文楷体;"><strong>本文作者：</strong></span><span style="font-size: 19px; font-family: 华文楷体;"> 景兴春</span></li><li style="text-align: start; line-height: 2;"><span style="font-size: 19px; font-family: 华文楷体;"><strong>本文链接：</strong></span><span style="font-size: 19px; font-family: 华文楷体;"> &nbsp;</span><a href="https://xingchunjing.github.io/#/content/java-xsolla" target="_blank">https://xingchunjing.github.io/#/content/java-xsolla</a> </li><li style="text-align: start; line-height: 2;"><span style="font-size: 19px; font-family: 华文楷体;"><strong>版权声明：</strong></span><span style="font-size: 19px; font-family: 华文楷体;"> 本博客所有文章除特别声明外，均采用 </span><a href="https://www.apache.org/licenses/LICENSE-2.0.html" target="_blank"><span style="font-size: 19px; font-family: 华文楷体;">Apache License 2.0</span></a><span style="font-size: 19px; font-family: 华文楷体;"> 许可协议。转载请注明出处！</span></li></ul>