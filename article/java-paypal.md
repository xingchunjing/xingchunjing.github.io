<h3 style="text-align: left; line-height: 2;"><span style="font-size: 19px; font-family: 华文楷体;">paypal是一个基于买卖双方的海外第三方平台。买家只需知道你的paypal账号，即可在线直接把钱汇入你的账户，即时到账，本文是基于游戏道具等虚拟商品进行的接入介绍，如果是实物商品，流程可能有些不同，具体需参考官方文档，不过大同小异</span></h3><h4 style="text-align: left; line-height: 2;"><span style="font-family: 华文楷体;"><strong>作为开发者在集成paypal支付接口之前，首先要有一系列的准备，paypal账号，开发者账号、测试账号集成的步骤如下：</strong></span></h4><h4 style="line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;"><strong>一. 注册paypal相关</strong></span><span style="color: rgb(66, 144, 247); font-family: 华文楷体;"><strong>账号</strong></span></h4><p style="line-height: 2;"><span style="font-family: 华文楷体;">1.1 </span><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">在浏览器输入“</span><a href="https://developer.paypal.com" target="_blank"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;"><em>https://www.paypal.com</em></span></a><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">” 跳转paypal界面，点击右上角的注册</span></p><p style="line-height: 2;"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">1.2 选择，”创建商家用户”，根据要求填写信息，注册完得去邮箱激活</span></p><h4 style="line-height: 2;"><span style="color: rgb(66, 144, 247); background-color: rgb(255, 255, 255); font-size: 16px; font-family: 华文楷体;"><strong>二. 注册开发者账号</strong></span></h4><p style="line-height: 2;"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">2.1 在浏览器输入“</span><a href="https://developer.paypal.com" target="_blank"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;"><em>https://developer.paypal.com</em></span></a><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">”，点击右上角的“Log into Dashboard”，用上一步创建好的账号登录</span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">在testing tools 下面选择Sandbox accounts，创建自己的测试账号，系统默认已经创建，最好自己再重新创建一个个人账号，和商家账号,账号创建完成后可以修改用户基本信息，也可以修改拥有金额等</span></p><p style="line-height: 2;"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">2.2 用商家账号登陆测试环境查看创建情况</span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">用测试账号登录测试网站查看，注意！这跟paypal官网不同！不是同一个地址，在浏览器输入：</span><a href="https://www.sandbox.paypal.com" target="_blank"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;"><em>https://www.sandbox.paypal.com</em></span></a><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;"> 在这里登陆测试账户</span></p><p style="line-height: 2;"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">2.3 </span><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;"><strong>创建应用，生成用于测试的clientID 和 密钥</strong></span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">点击导航栏Dashboard下的My Apps &amp; Credentials，创建一个新的测试APP</span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">创建完成后，可以看到”ClientID“ 和”Secret“，记录好备用</span></p><h4 style="line-height: 2;"><span style="color: rgb(66, 144, 247); background-color: rgb(255, 255, 255); font-size: 16px; font-family: 华文楷体;">三. 代码开发</span></h4><p><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">3.1 引入paypal的sdk</span></p><p style="text-indent: 2em; line-height: 2;"><span style="background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">访问地址 </span><a href="https://github.com/paypal/" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://github.com/paypal/</span></a><span style="font-size: 14px; font-family: 华文楷体;">查看最新的接口文档，在搜索框直接搜索java（使用其他语言可搜索其他的方式），补充（最近看git的文档好多sdk已经是保留弃用状态，如果是自有项目版本更新可以参考git，如果是新建，建议字节参照rest api接入）</span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(207, 19, 34); font-size: 14px; font-family: 华文楷体;">此存储库已由所有者于 2022 年 7 月 26 日存档。它现在是只读的。</span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(207, 19, 34); font-size: 14px; font-family: 华文楷体;">此 SDK 已弃用；您可以继续使用它，但不会接受任何新功能或支持请求。建议直接</span><a href="https://developer.paypal.com/docs/api/orders/v2/" target="" style="text-align: start;"><span style="color: rgb(207, 19, 34); font-size: 14px; font-family: 华文楷体;">集成 REST API 。</span></a><span style="color: rgb(207, 19, 34); font-size: 14px; font-family: 华文楷体;">查看有关使用 REST API 对请求进行身份验证的</span><a href="https://developer.paypal.com/api/rest/authentication/" target="" style="text-align: start;"><span style="color: rgb(207, 19, 34); font-size: 14px; font-family: 华文楷体;">授权的文档。</span></a></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">3.2 通过REST API 完成代码</span></p><p style="text-indent: 2em; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">首先获取授权信息</span><span style="color: rgb(64, 169, 255); font-size: 14px; font-family: 华文楷体;">Authorization</span><span style="font-size: 14px; font-family: 华文楷体;">，用到上面的</span><span style="color: rgb(64, 169, 255); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">”ClientID“ 和”Secret“，</span><span style="background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">官方给出两种方式，这里采用第二种：</span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(44, 46, 47); font-size: 14px; font-family: 华文楷体;">To make REST API calls, include the bearer token in this header with the </span><span style="font-size: 14px; font-family: 华文楷体;">Bearer</span><span style="color: rgb(44, 46, 47); font-size: 14px; font-family: 华文楷体;"> authentication scheme. The value is </span><span style="font-size: 14px; font-family: 华文楷体;">Bearer &lt;Access-Token&gt;</span><span style="color: rgb(44, 46, 47); font-size: 14px; font-family: 华文楷体;"> or </span><span style="font-size: 14px; font-family: 华文楷体;">Basic &lt;client_id:secret&gt;</span><span style="color: rgb(44, 46, 47); font-size: 14px; font-family: 华文楷体;">.</span></p><pre><code class="language-java">/**
* 构造Basic Auth认证头信息
*
* @param key
* @param value
* @return
*/
public static String headerBasic(String key, String value) {
    String auth = key + ":" + value;
    byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
    return authHeader;
}</code></pre><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 16px; font-family: 华文楷体;">3.3 下面直接来创建订单</span><span style="color: rgb(225, 60, 57);">Create order</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">POST请求地址： </span><a href="https://api-m.paypal.com/v2/checkout/orders" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://api-m.paypal.com/v2/checkout/orders</span></a><span style="font-size: 14px; font-family: 华文楷体;"> ，</span><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">注意环境 沙箱：</span><a href="https://api-m.sandbox.paypal.com/v2/checkout/orders" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://api-m.sandbox.paypal.com/v2/checkout/orders</span></a></p><pre><code class="language-java">//设置PayPal-Request-Id，这个之前没有也能正常使用，最新的API里面有就加上了
String paypalRequestId = UUID.randomUUID().toString();</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">完成请求头设置</span></p><pre><code class="language-java">Map&lt;String, String&gt; headers = new HashMap&lt;&gt;();
headers.put("Authorization", headerBasic);
headers.put("PayPal-Request-Id", paypalRequestId);</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">请求参数purchase_units，这里只列出部分自己用到的，还有一部分自己查看文档适当添加,</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">部分参数虚拟商品之前可以不加，后paypal官方人员通知需要加上一些参数</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">我看了下你们调用api的请求需要俩个地方加以下。</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">1. 因为贵司的产品是虚拟产品，在application_context对象里的shipping_preference传NO_SHIPPING。 </span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">2. 需要把产品（item details）传给paypal的。</span></p><pre><code class="language-java">{
    "intent":"CAPTURE",
    "purchase_units":[
        {
            "reference_id":"订单id，d9f80740-38f0-11e8-b467-0ed5f89f718b",
            "amount":{
                "currency_code":"支付货币：USD",
                "value":"商品金额100",
                "breakdown":{
                    "item_total":{
                        "value":"10",
                        "currency_code":"USD"
                    }
                }
            },
            "custom_id":"userId",
            "description":"商品描述",
            "invoice_id":"出现在付款人的交易历史记录和付款人收到的电子邮件中",
             "items":[
                {
                    "name":"商品名称",
                    "quantity":"1",
                    "description":"商品描述",
                    "unit_amount":{
                        "currency_code":"USD",
                        "value":"100"
                    }
                }
            ]
        }
    ],
    "payment_source":{
        "paypal":{
            "experience_context":{
                "payment_method_preference":"IMMEDIATE_PAYMENT_REQUIRED",
                "payment_method_selected":"PAYPAL",
                "brand_name":"EXAMPLE INC",
                "locale":"en-US",
                "landing_page":"LOGIN",
                "shipping_preference":"NO_SHIPPING",
                "user_action":"PAY_NOW",
                "return_url":"https://example.com/returnUrl",
                "cancel_url":"https://example.com/cancelUrl"
            }
        }
    }
}</code></pre><pre><code class="language-java">Map&lt;String, Object&gt; paypalParams = new HashMap&lt;&gt;();

//封装订单purchase_units
Random random = new Random();
String orderId = System.currentTimeMillis() + random.nextInt(10000) + "";
// 订单号边长添加用户ID标识
String finalOrderId = gameId + '-' + userId + '-' + orderId;
Map&lt;String, Object&gt; units = new HashMap&lt;&gt;();
units.put("reference_id", finalOrderId);
Map&lt;String, Object&gt; amount = new HashMap&lt;String, Object&gt;() {{
    put("value", productInfo.getAmount());
    put("currency_code", currencyType);
}};
Map&lt;String, Object&gt; unitsAmount = new HashMap&lt;&gt;(amount);
amount.put("breakdown", new HashMap&lt;String, Object&gt;() {{
    put("item_total", unitsAmount);
}});
units.put("amount", amount);
units.put("custom_id", userId);
units.put("description", productInfo.getProductDesc());
units.put("invoice_id", finalOrderId);

units.put("items", new ArrayList&lt;Map&lt;String, Object&gt;&gt;() {{
    add(new HashMap&lt;String, Object&gt;() {{
        put("name", productInfo.getProductName());
        put("quantity", 1);
        put("description", productInfo.getProductDesc());
        put("unit_amount", unitsAmount);
    }});
}});
paypalParams.put("purchase_units", new ArrayList&lt;Map&lt;String, Object&gt;&gt;() {{
    add(units);
}});</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">封装experience_context,之前的application_context字短已经弃用，请查看官方文档</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">Please specify this field in the experience_context object instead of the application_context object.</span></p><pre><code class="language-java">paypalParams.put("intent", "CAPTURE");

//封装experience_context,application_context字短已经弃用，请查看官方文档
// Please specify this field in the experience_context object instead of the application_context object.
Map&lt;String, Object&gt; experienceContext = new HashMap&lt;&gt;();

//该标签会覆盖PayPal网站上paypal账户中的公司名称
experienceContext.put("brand_name", "JINGXC");

/** * LOGIN。当客户单击PayPal Checkout时，客户将被重定向到页面以登录PayPal并批准付款。 
* BILLING。当客户单击PayPal Checkout时，客户将被重定向到一个页面，以输入信用卡或借记卡以及完成购买所需的其他相关账单信息 
* NO_PREFERENCE。当客户单击“ PayPal Checkout”时，将根据其先前的交互方式将其重定向到页面以登录PayPal并批准付款， 
* 或重定向至页面以输入信用卡或借记卡以及完成购买所需的其他相关账单信息使用PayPal。 
* 默认值：NO_PREFERENCE 
*/
experienceContext.put("landing_page", "NO_PREFERENCE");

/** * GET_FROM_FILE。使用贝宝网站上客户提供的送货地址。 
* NO_SHIPPING。从PayPal网站编辑送货地址。推荐用于数字商品 
* SET_PROVIDED_ADDRESS。使用商家提供的地址。客户无法在PayPal网站上更改此地址 
*/
experienceContext.put("shipping_preference", "NO_SHIPPING");

/** * CONTINUE。将客户重定向到PayPal付款页面后，将出现“ 继续”按钮。当结帐流程启动时最终金额未知时，请使用此选项， 
* 并且您想将客户重定向到商家页面而不处理付款。 
* PAY_NOW。将客户重定向到PayPal付款页面后，出现“ 立即付款”按钮。当启动结帐时知道最终金额并且您要在客户单击“ 
* 立即付款”时立即处理付款时，请使用此选项。 
*/
experienceContext.put("user_action", "PAY_NOW");

/** *UNRESTRICTED:接受客户的任何类型的付款。 
*IMMEDIATE_PAYMENT_REQUIRED:只接受客户的即时付款。例如，信用卡、PayPal余额或即时ACH。 
* 确保在捕获时，付款没有挂起状态。 
*/
experienceContext.put("payment_method_preference", "IMMEDIATE_PAYMENT_REQUIRED");

//客户批准付款后客户被重定向的URL。
experienceContext.put("return_url", constantInfo.getReturnUrl());
//客户取消付款后客户被重定向的URL。
experienceContext.put("cancel_url", constantInfo.getCancelUrl());
paypalParams.put("payment_source", new HashMap&lt;String, Object&gt;() {{    
    put("paypal", new HashMap&lt;String, Object&gt;() {{        
        put("experience_context", experienceContext);    
    }});
}});</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">订单返回结果：</span></p><pre><code class="language-css">{
    "id":"3C259212NL577514R",
    "status":"PAYER_ACTION_REQUIRED",
    "payment_source":{
        "paypal":{

        }
    },
    "links":[
        {
            "href":"https://api.sandbox.paypal.com/v2/checkout/orders/3C259212NL577514R",
            "rel":"self",
            "method":"GET"
        },
        {
            "href":"https://www.sandbox.paypal.com/checkoutnow?token=3C259212NL577514R",
            "rel":"payer-action",
            "method":"GET"
        }
    ]
}</code></pre><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;"><em>用户通过CreateOrder生成 approveUrl 跳转paypal支付成功后，只是授权，并没有将用户的钱打入我们的paypal账户，我们需要通过 CaptureOrder接口，将钱打入我的PayPal账户</em></span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 16px; font-family: 华文楷体;">3.4 捕获订单执行扣款Capture payment for order</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">POST请求地址： </span><a href="https://api-m.sandbox.paypal.com/v2/checkout/orders/" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://api-m.sandbox.paypal.com/v2/checkout/orders/{platformOrderId}/capture</span></a><span style="font-size: 14px; font-family: 华文楷体;"> ，线上环境去掉sandbox即可</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">platformOrderId:创建订单时返回结果的id，也是用户授权付款是的id，需要记录</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">执行扣款的代码相对简单，只需要把权限设置好就行</span></p><pre><code class="language-java">//授权信息
String appKey = constantInfo.getAppKey();
String appSecret = constantInfo.getAppSecret();
String headerBasic = OauthSignatureUtil.headerBasic(appKey, appSecret);

//设置PayPal-Request-Id，这个之前没有也能正常使用，最新的API里面有就加上了
String paypalRequestId = UUID.randomUUID().toString();

Map&lt;String, String&gt; headers = new HashMap&lt;&gt;();
headers.put("Authorization", headerBasic);
headers.put("PayPal-Request-Id", paypalRequestId);
Map&lt;String, String&gt; captureOrder = client.postByJsonToMap("https://api-m.sandbox.paypal.com/v2/checkout/orders/" 
    + platformOrderId + "/capture", headers, new HashMap&lt;&gt;());</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">返回</span></p><pre><code class="language-css">{
    "id":"3C259212NL577514R",
    "status":"COMPLETED",
    "payment_source":{
        "paypal":{
            "email_address":"sb-fajxd25664859@personal.example.com",
            "account_id":"HGCPNCP4GDSS8",
            "name":{
                "given_name":"John",
                "surname":"Doe"
            },
            "address":{
                "country_code":"C2"
            }
        }
    },
    "purchase_units":[
        {
            "reference_id":"219-123456789-1682070775764",
            "payments":{
                "captures":[
                    {
                        "id":"65066433PF4829143",
                        "status":"COMPLETED",
                        "amount":{
                            "currency_code":"USD",
                            "value":"10.00"
                        },
                        "final_capture":true,
                        "seller_protection":{
                            "status":"ELIGIBLE",
                            "dispute_categories":[
                                "ITEM_NOT_RECEIVED",
                                "UNAUTHORIZED_TRANSACTION"
                            ]
                        },
                        "seller_receivable_breakdown":{
                            "gross_amount":{
                                "currency_code":"USD",
                                "value":"10.00"
                            },
                            "paypal_fee":{
                                "currency_code":"USD",
                                "value":"0.64"
                            },
                            "net_amount":{
                                "currency_code":"USD",
                                "value":"9.36"
                            }
                        },
                        "invoice_id":"219-123456789-1682070775764",
                        "custom_id":"123456789",
                        "links":[
                            {
                                "href":"https://api.sandbox.paypal.com/v2/payments/captures/65066433PF4829143",
                                "rel":"self",
                                "method":"GET"
                            },
                            {
                                "href":"https://api.sandbox.paypal.com/v2/payments/captures/65066433PF4829143/refund",
                                "rel":"refund",
                                "method":"POST"
                            },
                            {
                                "href":"https://api.sandbox.paypal.com/v2/checkout/orders/3C259212NL577514R",
                                "rel":"up",
                                "method":"GET"
                            }
                        ],
                        "create_time":"2023-04-21T10:35:39Z",
                        "update_time":"2023-04-21T10:35:39Z"
                    }
                ]
            }
        }
    ],
    "payer":{
        "name":{
            "given_name":"John",
            "surname":"Doe"
        },
        "email_address":"sb-fajxd25664859@personal.example.com",
        "payer_id":"HGCPNCP4GDSS8",
        "address":{
            "country_code":"C2"
        }
    },
    "links":[
        {
            "href":"https://api.sandbox.paypal.com/v2/checkout/orders/3C259212NL577514R",
            "rel":"self",
            "method":"GET"
        }
    ]
}</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">登陆商家后台就可看见订单的详细信息了，至此交易流程就算完成，捕获订单时purchase_units-payments-captures-id需要记录，该id为退款或者查看捕获状态是的id</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;"> </span><a href="https://www.sandbox.paypal.com" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://www.sandbox.paypal.com</span></a><span style="font-size: 14px; font-family: 华文楷体;"> 登陆商家账号，查看交易记录</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 16px; font-family: 华文楷体;">3.5 查看订单状态（详情）Checkout order</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">GET请求地址: </span><a href="https://api-m.sandbox.paypal.com/v2/checkout/orders/{paymentId}" target="_blank"><span style="font-size: 14px;">https://api-m.sandbox.paypal.com/v2/checkout/orders/{platformOrderId}</span></a></p><ul><li style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">注意：如果订单创建完成，玩家还未授权付款，订单状态是</span><span style="color: rgb(58, 181, 74); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">PAYER_ACTION_REQUIRED，此时商家是无法捕获订单的，会报错，</span></li><li style="line-height: 2;"><span style="color: rgb(58, 181, 74); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">如果玩家付款授权完成，商家还未捕获订单，此时订单状态是APPROVED，此时商家是可以捕获订单（将金额打到商家账户）</span></li><li style="line-height: 2;"><span style="color: rgb(58, 181, 74); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">如果商家捕获订单完成，订单状态是</span><span style="color: rgb(114, 192, 64); font-size: 14px; font-family: 华文楷体;">COMPLETED，此时交易流程已经走完，玩家付款，商家已经收款</span></li><li style="line-height: 2;"><span style="color: rgb(114, 192, 64); font-size: 14px; font-family: 华文楷体;">如果玩家下单后长时间未授权付款，该订单在查询状态时，可能会返回错误，这个间隔时间没测</span></li></ul><p style="line-height: 2;"><span style="color: rgb(0, 0, 0); font-size: 14px; font-family: 华文楷体;">查看订单状态的代码与执行扣款代码类似，不过查看状态是get请求</span></p><pre><code class="language-java">@Override
@OperationLogger
public ReturnResult checkOrder(CheckOrderParams params) {

    String platformOrderId = params.getPlatformOrderId();
    String gameId = params.getGameId();
    String channelId = params.getChannelId();
    //查询渠道配置信息
    ConstantMeInfo constantInfo = getCacheConstantInfo(gameId, channelId, "paypal");

    //授权信息
    String appKey = constantInfo.getAppKey();
    String appSecret = constantInfo.getAppSecret();
    String headerBasic = OauthSignatureUtil.headerBasic(appKey, appSecret);

    //设置PayPal-Request-Id，这个之前没有也能正常使用，最新的API里面有就加上了
    String paypalRequestId = UUID.randomUUID().toString();

    Map&lt;String, String&gt; headers = new HashMap&lt;&gt;();
    headers.put("Authorization", headerBasic);
    headers.put("PayPal-Request-Id", paypalRequestId);
    Map&lt;String, String&gt; captureOrder = client.getToMap("https://api-m.sandbox.paypal.com/v2/checkout/orders/" + platformOrderId, headers, new HashMap&lt;&gt;());
    System.out.println(captureOrder);

    return ReturnResultSuccess.builder().code(ConstantCommon.RETURN_CODE_200).msg("查看订单状态成功").data(platformOrderId).count(ConstantCommon.RETURN_COUNT_1).build();

}</code></pre><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 16px; font-family: 华文楷体;">3.6 查看捕获订单状态（详情）Show captured payment details</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">GET请求地址： </span><a href="https://api-m.sandbox.paypal.com/v2/payments/captures/" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://api-m.sandbox.paypal.com/v2/payments/captures/{paymentId}</span></a></p><p style="line-height: 2;"><span style="color: rgb(54, 88, 226); font-size: 14px; font-family: 华文楷体;">paymentId:捕获订单时，返回的捕获付款id，purchase_units-payments-captures-id</span></p><pre><code class="language-java">@Override
@OperationLogger
public ReturnResult checkCapture(CheckCaptureParams params) {
    String paymentId = params.getPaymentId();
    String gameId = params.getGameId();
    String channelId = params.getChannelId();
    //查询渠道配置信息
    ConstantMeInfo constantInfo = getCacheConstantInfo(gameId, channelId, "paypal");

    //授权信息
    String appKey = constantInfo.getAppKey();
    String appSecret = constantInfo.getAppSecret();
    String headerBasic = OauthSignatureUtil.headerBasic(appKey, appSecret);

    //设置PayPal-Request-Id，这个之前没有也能正常使用，最新的API里面有就加上了
    String paypalRequestId = UUID.randomUUID().toString();

    Map&lt;String, String&gt; headers = new HashMap&lt;&gt;();
    headers.put("Authorization", headerBasic);
    headers.put("PayPal-Request-Id", paypalRequestId);
    Map&lt;String, String&gt; captureOrder = client.getToMap("https://api-m.sandbox.paypal.com/v2/payments/captures/" + paymentId, headers, new HashMap&lt;&gt;());
    System.out.println(captureOrder);

    return ReturnResultSuccess.builder().code(ConstantCommon.RETURN_CODE_200).msg("查看订单状态成功").data(paymentId).count(ConstantCommon.RETURN_COUNT_1).build();

}</code></pre><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 16px; font-family: 华文楷体;">3.7 申请退款Refund captured payment</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">POST请求地址：</span><a href="https://api-m.sandbox.paypal.com/v2/payments/captures/{paymentId}/refund" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://api-m.sandbox.paypal.com/v2/payments/captures/{paymentId}/refund</span></a></p><p style="line-height: 2;"><span style="font-size: 14px;">paymentId: </span><span style="font-size: 14px; font-family: 华文楷体;">捕获订单时,返回的purchase_units-payments-captures-id</span></p><pre><code class="language-java">@Override
@OperationLogger
public ReturnResult refundCapture(RefundCaptureParams params) {

    String gameId = params.getGameId();
    String channelId = params.getChannelId();
    String orderId = params.getOrderId();
    String noteToPayer = params.getNoteToPayer();
    String userId = params.getUserId();

    //TODO 校验用户与订单是否匹配
    OrderMeInfo orderMeInfo = OrderMeInfo.builder().orderId(orderId).gameId(gameId).userId(userId)
                .orderStatus(ConstantCommon.ORDER_STATUS_1).build();
    orderMeInfo = orderMeInfoMapper.selectOne(new QueryWrapper&lt;&gt;(orderMeInfo));
    if (orderMeInfo == null) {
        return ReturnResultError.builder().code(ConstantCommon.RETURN_CODE_999).msg("未查询到该订单").data("")
                    .build();
    }

    //查询渠道配置信息
    ConstantMeInfo constantInfo = getCacheConstantInfo(gameId, channelId, "paypal");

    //授权信息
    String appKey = constantInfo.getAppKey();
    String appSecret = constantInfo.getAppSecret();
    String headerBasic = OauthSignatureUtil.headerBasic(appKey, appSecret);

    //设置PayPal-Request-Id，这个之前没有也能正常使用，最新的API里面有就加上了
    String paypalRequestId = UUID.randomUUID().toString();

    Map&lt;String, String&gt; headers = new HashMap&lt;&gt;();
    headers.put("Authorization", headerBasic);
    headers.put("PayPal-Request-Id", paypalRequestId);
    headers.put("Prefer", "return=representation");

    Map&lt;String, Object&gt; paypalParams = new HashMap&lt;&gt;();
    paypalParams.put("invoice_id", orderId + "-01");
    paypalParams.put("note_to_payer", "退款原因:" + noteToPayer);

    /**
    * Array of objects [ 0 .. 1 ] items
    * An array of various fees, commissions, tips, or donations.
    * This field is only applicable to merchants that been enabled for PayPal Commerce Platform
    * for Marketplaces and Platforms capability.
    */
    Map&lt;String, Object&gt; platformFees = new HashMap&lt;&gt;();
    platformFees.put("amount", new HashMap&lt;String, Object&gt;() {{
        put("value", 1);//真实费用
        put("currency_code", "USD");
    }});

    paypalParams.put("payment_instruction", new HashMap&lt;String, Object&gt;() {{
        put("platform_fees", new ArrayList&lt;Map&lt;String, Object&gt;&gt;() {{
            add(platformFees);
        }});
    }});
    paypalParams.put("amount", new HashMap&lt;String, Object&gt;() {{
        put("value", 10);//真实费用
        put("currency_code", "USD");
    }});

    Map&lt;String, String&gt; refundOrder = client.postByJsonToMap("https://api-m.sandbox.paypal.com/v2/payments/captures/" + orderMeInfo.getPaymentId() + "/refund", headers, new HashMap&lt;&gt;());
    System.out.println(refundOrder);
    String id = refundOrder.get("id");
    orderMeInfo.setRefundId(id);
    orderMeInfoMapper.updateById(orderMeInfo);
    return ReturnResultSuccess.builder().code(ConstantCommon.RETURN_CODE_200).msg("退款成功").data(orderMeInfo.getPaymentId()).count(ConstantCommon.RETURN_COUNT_1).build();

}</code></pre><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 16px; font-family: 华文楷体;">3.8 查看退款详情Show refund details</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">通过退款id，可通过api查看退款详情，请求方式为GET，请求地址为：</span></p><p style="line-height: 2;"><a href="https://api-m.sandbox.paypal.com/v2/payments/refunds/{refundId}" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://api-m.sandbox.paypal.com/v2/payments/refunds/{refundId}</span></a></p><p style="line-height: 2;"><span style="font-size: 16px; font-family: 华文楷体;">请求流程合上述基本一致，不再赘述</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 16px; font-family: 华文楷体;">3.9 配置webhook监听事件信息</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 16px; font-family: 华文楷体;">在开发者后台配置webhook的接收地址，配置好要接受的事件后即可收到paypal的数据信息</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 16px; font-family: 华文楷体;">再次说明：官方回复</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 16px; font-family: 华文楷体;">pending可能是第一时间因你们的服务器的原因，没有收到。webhooks有时候会有延迟的，具体还要看下。所以，我们建议商家如果第一时间capture api拿到的交易状态是completed，就直接可以处理了，不需要等webhooks了。如果交易状态是pending，需要等webhooks处理。</span></p><p><br></p><pre><code class="language-java">@Override
@OperationLogger
public void paypalWebhook(HttpServletRequest req, String body) {

    String transmissionTime = req.getHeader("paypal-transmission-time");
    String authVersion = req.getHeader("paypal-auth-version");
    String certUrl = req.getHeader("paypal-cert-url");
    String authAlgo = req.getHeader("paypal-auth-algo");
    String transmissionSig = req.getHeader("paypal-transmission-sig");
    String transmissionId = req.getHeader("paypal-transmission-id");

    log.warn("paypal-transmission-time" + transmissionTime);
    log.warn("paypal-auth-version" + authVersion);
    log.warn("paypal-cert-url" + certUrl);
    log.warn("paypal-auth-algo" + authAlgo);
    log.warn("paypal-transmission-sig" + transmissionSig);
    log.warn("paypal-transmission-id" + transmissionId);

    // 校验数据信息
    X509Certificate cert;
    PublicKey publicKey = null;
    try {
        URL url = new URL(certUrl);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        // 设置超时间为30秒
        conn.setConnectTimeout(30 * 1000);
        // 防止屏蔽程序抓取而返回403错误
        conn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");
        // 得到输入流
        InputStream inputStream = conn.getInputStream();

        cert = X509Certificate.getInstance(inputStream);
        publicKey = cert.getPublicKey();
    } catch (Exception e) {
            log.error("获取公钥信息失败", e);
    }

    String publicKeyString = Base64.encodeBase64String(publicKey.getEncoded());

    log.warn("公钥信息：" + publicKeyString);
    log.warn("请求参数信息：" + body);
    log.warn("验签数据：" + transmissionSig);

    CRC32 crc32 = new CRC32();
    crc32.update(body.getBytes());
    long value = crc32.getValue();
    String webhookId = redisCacheUtil.getValue(ConstantCommon.PAYPAL_WEBHOOK_ID);
    String a = transmissionId + "|" + transmissionTime + "|" + webhookId + "|" + value;
    log.warn("验签内容：" + a);
    boolean doCheck = RSA.doCheck(a, transmissionSig, publicKeyString, "RSA256", true);

    if (doCheck) {
        log.warn("校验数据通过，处理订单请求");
    }

}</code></pre><p style="line-height: 2;"><span style="font-size: 16px; font-family: 华文楷体;">至此，paypal的接入流程基本完事</span></p>