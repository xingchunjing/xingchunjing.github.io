<p style="line-height: 2;"><span style="font-size: 19px; font-family: 华文楷体;">google支付需要在服务端记录并验证订单，防止伪造订单，这里记录一下服务端校验订单</span></p><p style="line-height: 2;"><span style="font-size: 16px; font-family: 华文楷体;">Google Pay主要支付流程</span></p><ul><li style="line-height: 2;"><span style="font-size: 16px; font-family: 华文楷体;">手机端向Java服务端发起支付，生成预订单，给手机端返回生成的订单号</span></li><li style="line-height: 2;"><span style="font-size: 16px; font-family: 华文楷体;">手机端向Google发起支付（传入java服务端生成的订单号）</span></li><li style="line-height: 2;"><span style="font-size: 16px; font-family: 华文楷体;">Google服务器将支付结果返回给手机端（因这边用到的是消耗型的产品，所以购买后必须要通知gp我已经消耗了这次交易）</span></li><li style="line-height: 2;"><span style="font-size: 16px; font-family: 华文楷体;">手机端向Java服务端发送校验请求，校验通过后即可处理订单（服务端重试校验，发货，保证订单正常发货成功）</span></li></ul><p style="line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;">一. 创建服务账号</span></p><ul><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">打开地址： </span><a href="https://console.cloud.google.com" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://console.cloud.google.com</span></a></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">选择项目或者创建一个新的项目，为了区分和维护推荐创建个新的项目</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">选中项目后例如(Google-Pay) 创建服务帐户</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">在“ 服务帐户详细信息”下 ，键入服务帐户的名称，ID和描述，然后单击“ 创建”</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">可选：在“ 服务帐户权限”下 ，选择要授予服务帐户的IAM角色，然后单击继续</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">可选：在“ 授予用户对此服务帐户的访问权限”下 ，添加允许使用和管理该服务帐户的用户或组。</span></li><li style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">单击管理密钥，创建密钥 ，然后单击创建推荐生成json格式密钥。(之前的的代码可能会用到，不过最新的的api已经启用一些类，所以这个可能有问题)</span></li></ul><p style="line-height: 2;"><img src="/article/java-google01.jpg" alt="" data-href="/article/java-google01.jpg" style=""></p><p style="line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;">二.Google Play后台关联服务账号并授权（owner权限）</span></p><ul><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">进入Google Play 管理中心的API 权限页面</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">将 Google Play 开发者帐号关联到 Google Cloud 项目如（Google-Pay）</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">点击服务帐号下要向自己的服务帐号授予对 Cloud 项目的访问权限，这样它才能显示在Google Play管理后台</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">完成点击刷新，API 权限页面的“服务帐号”会自动刷新，您的服务帐号将随即列出。</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">点击授予api访问权和应用于哪个app(可以选择多个app)，为服务帐号提供相关操作所需的权限。</span></li></ul><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">注意：</span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">必须先将 Google Play 开发者帐号关联到 Google Cloud 项目，然后才能访问 Google Play Developer API。在大多数情况下，我们建议您为自己的 Google Play 开发者帐号新建一个专用的 Google Cloud 项目，不过您也可以关联现有项目。请注意，每个 Google Play 开发者帐号只能关联到一个 Google Cloud 项目。如果您的同一个 Google Play 开发者帐号中有多个应用，这些应用必须都共用同一个 Google Cloud 项目。</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">以上参考： </span><a href="https://blog.csdn.net/weixin_39222112/article/details/120068129 " target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://blog.csdn.net/weixin_39222112/article/details/120068129 </span></a></p><p style="line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;">三. 获取凭证</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">由于要链接Google Play</span><span style="color: rgb(68, 68, 68); font-size: 14px; font-family: 华文楷体;"> 中的项目所以直接导入</span><span style="color: rgb(185, 74, 72); font-size: 14px; font-family: 华文楷体;">androidpublisher，这里已经包含了鉴权相关的api，不用重复倒入依赖包</span></p><pre><code class="language-xml">&lt;dependency&gt;
    &lt;groupId&gt;com.google.apis&lt;/groupId&gt;
    &lt;artifactId&gt;google-api-services-androidpublisher&lt;/artifactId&gt;
    &lt;version&gt;v3-rev20211125-1.32.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre><p style="line-height: 2;"><span style="color: rgb(196, 29, 127); font-size: 14px; font-family: 华文楷体;">这里介绍一下如何查找maven依赖的版本：</span></p><ul><li style="line-height: 2;"><span style="color: rgb(196, 29, 127); font-size: 14px; font-family: 华文楷体;">简单的方法：直接在在该网址上查询即可 </span><a href="https://mvnrepository.com/" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://mvnrepository.com/</span></a><span style="font-size: 14px; font-family: 华文楷体;"> ，不过版本可能不是最新，选择一个使用最多的版本即可</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">稍微复杂一点（正式一点），访问开发者后台</span><a href="https://console.cloud.google.com" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://console.cloud.google.com</span></a><span style="font-size: 14px; font-family: 华文楷体;">，右侧导航栏API和服务-&gt;库，搜索androidpublisher，进入api库里面，查看教程和文档，链接跳转到官方文档中，在使用入门最下面客户端库，</span><span style="color: rgb(32, 33, 36); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">请参阅</span><a href="https://developers.google.com/android-publisher/libraries?hl=zh-cn" target="" style="text-align: start;"><span style="font-size: 14px; font-family: 华文楷体;">客户端库和代码示例 </span></a><span style="color: rgb(32, 33, 36); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">点解链接进入</span><a href="https://developers.google.com/api-client-library/java/apis/androidpublisher/v3?hl=zh-cn" target=""><span style="font-size: 14px; font-family: 华文楷体;">适用于 Java 的 Google API 客户端库 </span></a><span style="font-size: 14px; font-family: 华文楷体;">即可跳转到官方的git仓库 </span><a href="https://github.com/googleapis/google-api-java-client-services/tree/main/clients/google-api-services-androidpublisher/v3" target="_blank"><span style="font-size: 14px; font-family: 华文楷体;">https://github.com/googleapis/google-api-java-client-services/tree/main/clients/google-api-services-androidpublisher/v3</span></a><span style="font-size: 14px; font-family: 华文楷体;"> </span></li></ul><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">上面这个过程有点复杂，不过记录一下下次自己找东西就方便多了，外文文档一不留神就不清楚到哪去找东西了</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">接下来先获取凭证：</span><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">之前的GoogleCredential也会在后续被废弃，服务账号验证的方式不知道后续会怎样，所以还是要能找到最新的文档</span></p><ul><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">在刚才（进入api库里面，查看教程和文档，链接跳转到</span><span style="color: rgb(130, 0, 20); font-size: 14px; font-family: 华文楷体;">官方文档</span><span style="font-size: 14px; font-family: 华文楷体;">中）这一步中选择左侧导航栏：</span><span style="color: rgb(130, 0, 20); font-size: 14px; font-family: 华文楷体;">使用入门</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">本页内容中：</span><span style="color: rgb(130, 0, 20); font-size: 14px; font-family: 华文楷体;">使用 OAuth 客户端，点击链接OAuth，进入到</span><span style="color: rgb(32, 33, 36); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">使用 OAuth 2.0 访问 Google API</span></li><li style="line-height: 2;"><span style="color: rgb(32, 33, 36); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">本页内容最下面：客户端库--</span><a href="https://developers.google.com/api-client-library/java/google-api-java-client/oauth2?hl=zh-cn" target=""><span style="font-size: 14px; font-family: 华文楷体;">适用于 Java 的 Google API 客户端库</span></a><span style="font-size: 14px; font-family: 华文楷体;">点击进入</span></li><li style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">本页内容中：已安装应用方式（服务账号的方式老是显示</span><a href="https://googleapis.dev/java/google-api-client/latest/com/google/api/client/googleapis/auth/oauth2/GoogleCredential.html" target="" style="text-align: start;"><span style="font-size: 14px; font-family: 华文楷体;">GoogleCredential</span></a><span style="color: rgb(32, 33, 36); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;"> 被弃用</span><span style="font-size: 14px; font-family: 华文楷体;">）：官方给的示例代码，修改获得自己的代码</span></li></ul><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">直接使用文档中的代码，发现还需要导入很多的包，这些包去哪找？</span></p><p style="text-indent: 2em; line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">在我们的文档页面最上面概览中介绍：</span><span style="color: rgb(32, 33, 36); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;"><strong>目的</strong></span><span style="color: rgb(32, 33, 36); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">：本文档介绍了如何使用 </span><a href="https://googleapis.dev/java/google-api-client/latest/com/google/api/client/googleapis/auth/oauth2/GoogleCredential.html" target="" style="text-align: start;"><span style="font-size: 14px; font-family: 华文楷体;">GoogleCredential</span></a><span style="color: rgb(32, 33, 36); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;"> 实用程序类对 Google 服务进行 OAuth 2.0 授权。如需了解我们提供的通用 OAuth 2.0 函数，请参阅 </span><a href="https://developers.google.com/api-client-library/java/google-oauth-java-client/oauth2?hl=zh-cn" target="" style="text-align: start;"><span style="font-size: 14px; font-family: 华文楷体;">OAuth 2.0 和 Java 版 Google OAuth 客户端库</span></a><span style="color: rgb(32, 33, 36); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">。</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">我们需要到 </span><a href="https://developers.google.com/api-client-library/java/google-oauth-java-client/oauth2?hl=zh-cn" target="" style="text-align: start;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">OAuth 2.0 和 Java 版 Google OAuth 客户端库这里面找</span></a><span style="font-size: 14px; font-family: 华文楷体;">里面有个</span><a href="https://developers.google.com/api-client-library/java/google-oauth-java-client/reference/1.20.0/com/google/api/client/auth/oauth2/package-summary.html?hl=zh-cn" target=""><span style="font-size: 14px; font-family: 华文楷体;">com.google.api.client.auth.oauth2</span></a><span style="font-size: 14px; font-family: 华文楷体;">（来自 </span><a href="https://developers.google.com/api-client-library/java/google-oauth-java-client/setup?hl=zh-cn#google-oauth-client" target=""><span style="font-size: 14px; font-family: 华文楷体;">google-oauth-client</span></a><span style="font-size: 14px; font-family: 华文楷体;">）</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">点击进入 </span><a href="https://developers.google.com/api-client-library/java/google-oauth-java-client/setup?hl=zh-cn#google-oauth-client" target=""><span style="font-size: 14px; font-family: 华文楷体;">google-oauth-client</span></a><span style="font-size: 14px; font-family: 华文楷体;">使用到了里面的这些依赖</span></p><pre><code class="language-xml">&lt;!--最终使用版本 1.32.1--&gt;
&lt;dependency&gt;
    &lt;groupId&gt;com.google.oauth-client&lt;/groupId&gt;
    &lt;artifactId&gt;google-oauth-client-java6&lt;/artifactId&gt;
    &lt;version&gt;1.30.4&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--最终使用版本 1.32.1--&gt;
&lt;dependency&gt;
    &lt;groupId&gt;com.google.oauth-client&lt;/groupId&gt;
    &lt;artifactId&gt;google-oauth-client-jetty&lt;/artifactId&gt;
    &lt;version&gt;1.30.4&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--这个依赖文档中没有，不过确实用到了，我在其他文档中看到google-api-client-jackson2的2.0.0版本，不过那个有问题，所以还是按这个用吧 --&gt;
&lt;!--最终使用版本 1.30.4--&gt;
&lt;dependency&gt;
    &lt;groupId&gt;com.google.api-client&lt;/groupId&gt;
    &lt;artifactId&gt;google-api-client-jackson2&lt;/artifactId&gt;
    &lt;version&gt;1.30.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">完成代码（已安装应用方式，需要用户授权）：</span></p><pre><code class="language-java">public static Credential authorize(String clientSecretsJson, String user) throws GeneralSecurityException, IOException {

    JsonFactory jsonFactory = JacksonFactory.getDefaultInstance();
    HttpTransport transport = GoogleNetHttpTransport.newTrustedTransport();
    InputStreamReader isr = new InputStreamReader(IOUtils.toInputStream(clientSecretsJson, "UTF-8"));
    GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(jsonFactory, isr);

    GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
            transport, jsonFactory, clientSecrets,
            Collections.singleton(AndroidPublisherScopes.ANDROIDPUBLISHER))
            .build();

    return new AuthorizationCodeInstalledApp(flow, new LocalServerReceiver()).authorize("user");

}</code></pre><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">到了这一步，运行后显示java.lang.IllegalArgumentException</span></p><p style="line-height: 2;"><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">报错是在</span></p><pre><code class="language-java">GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(jsonFactory, isr);</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">查看源码才知道，</span><span style="color: rgb(29, 57, 196); font-size: 14px; font-family: 华文楷体;">load需要加载参数installed或者web</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">上面下载的json文件是服务端的凭证，之前使用下面的代码是没问题的，不过GoogleCredential已弃用，服务端的凭证与官方示例不匹配，需要下载</span><span style="color: rgb(225, 60, 57); font-size: 14px; font-family: 华文楷体;">OAuth 2.0 客户端 ID（凭证），一定要换</span></p><pre><code class="language-java">//这是之前的服务账号验证的方式，新的api中是被弃用的，但是官方文档中还是这么用的示例....，也许后续会更新吧
public static GoogleCredential authorizeServer() throws GeneralSecurityException, IOException {

    HttpTransport transport = GoogleNetHttpTransport.newTrustedTransport();
    JsonFactory jsonFactory = JacksonFactory.getDefaultInstance();

    ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(clientSecretsJson.getBytes());
    //已弃用
    GoogleCredential readJsonFile = GoogleCredential.fromStream(byteArrayInputStream, transport, jsonFactory)
        .createScoped(Collections.singleton(AndroidPublisherScopes.ANDROIDPUBLISHER));

    GoogleCredential credential = new GoogleCredential.Builder().setTransport(readJsonFile.getTransport())
        .setJsonFactory(readJsonFile.getJsonFactory())
        .setServiceAccountId(readJsonFile.getServiceAccountId())
        .setServiceAccountScopes(readJsonFile.getServiceAccountScopes())
        //.setServiceAccountUser("hospital-billing-manager@api-7965197382587815639-857758.iam.gserviceaccount.com")
        .setServiceAccountPrivateKey(readJsonFile.getServiceAccountPrivateKey()).build();

    return credential;
}</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">说实话到这一步我已经不想弄了,结果一看很清楚，过程无法言述，哎.......</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">这回写个main方法执行一下，果然不出我所料，还有问题</span></p><p style="line-height: 2;"><span style="color: rgb(196, 29, 127); font-size: 14px; font-family: 华文楷体;">这回是java.lang.NoSuchMethodError: org.eclipse.jetty.server.Connector.setHost</span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(196, 29, 127); font-size: 14px; font-family: 华文楷体;">查看源码发现是</span><span style="font-size: 14px; font-family: 华文楷体;">new LocalServerReceiver()出得问题，竟然没有</span><span style="color: rgb(120, 6, 80); font-size: 14px; font-family: 华文楷体;">setHost方法，</span><span style="font-size: 14px; font-family: 华文楷体;">不得不说就很强，头发掉很多，弄了半天我以为是什么写错了呢，后来决定换下依赖的版本，全都换成1.32.1，这回代码直接出错了，</span><span style="color: rgb(120, 6, 80); font-size: 14px; font-family: 华文楷体;">这个JacksonFactory.getDefaultInstance();方法没有</span><span style="font-size: 14px; font-family: 华文楷体;">了，所以有单独把google-api-client-jackson2换成1.30.4，这回可以了，代码没报错，运行也没报错，能弹出授权页面，但是授权页面显示</span><span style="color: rgb(32, 33, 36); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;">错误</span><span style="color: rgb(120, 6, 80); background-color: rgb(255, 255, 255); font-size: 14px; font-family: 华文楷体;"> 400： redirect_uri_mismatch，这个问题是由于我的是测试项目，需要授权回调地址，所以redirect_uri得配制成自己的，得了，整个方法弄的还不如我自己写一个http请求来的快呢</span></p><pre><code class="language-java">//添加配置，开发者后台配置OAuth 2.0 客户端 ID
LocalServerReceiver localServerReceiver = new LocalServerReceiver.Builder().setHost("localhost").setPort(8092)
.setCallbackPath("/jingxc/google/google-callback").build();</code></pre><p style="line-height: 2;"><img src="/article/java-google02.jpg" alt="" data-href="/article/java-google02.jpg" style=""></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">整个可以运行的代码是：运行会有堆栈溢出，暂时没时间管这个，先将就着往下</span></p><pre><code class="language-java">package com.jxc.server.service.impl;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.androidpublisher.AndroidPublisherScopes;
import com.jxc.server.service.GooglePayService;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.Collections;

@Service
public class GooglePayServiceImpl implements GooglePayService {

    private static final java.io.File DATA_STORE_DIR =
            new java.io.File(System.getProperty("user.home"), ".googlepay/pay_sample");

    public static Credential authorize() throws GeneralSecurityException, IOException {

        JsonFactory jsonFactory = JacksonFactory.getDefaultInstance();
        HttpTransport transport = GoogleNetHttpTransport.newTrustedTransport();
        //InputStreamReader isr = new InputStreamReader(IOUtils.toInputStream(clientSecretsJson, "UTF-8"));
        InputStreamReader isr = new InputStreamReader(GooglePayServiceImpl.class.getClassLoader().getResourceAsStream("./client_secrets.json"));
        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(jsonFactory, isr);
        FileDataStoreFactory dataStoreFactory = new FileDataStoreFactory(DATA_STORE_DIR);
        GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
                transport, jsonFactory, clientSecrets,
                Collections.singleton(AndroidPublisherScopes.ANDROIDPUBLISHER))

                .build();
        LocalServerReceiver localServerReceiver = new LocalServerReceiver.Builder().setHost("localhost").setPort(8092).setCallbackPath("/jingxc/google/google-callback").build();
        return new AuthorizationCodeInstalledApp(flow, localServerReceiver).authorize("user");

    }

    public static void main(String[] args) {
        try {
            Credential credential = authorize();
            System.out.println(credential);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">到这就可以显示跳转页面，但和我想要的不一样啊，我想服务端直接获取权限，我找了好多地方，也没有看到服务凭证还有那些新的不被弃用的方法，实在是找不出来了，不找了，</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">现在两种方式都尝试了一下，觉得怎样合适就怎样来吧</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">顺便这里说下之后会专门写一篇不用官方api的方式，感觉使用api反而比较乱</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">若果想消除服务账号验证的弃用标记，可以低版本的maven，我试了一下最高使用1.28.0之后就有弃用标记了</span></p><pre><code class="language-xml">&lt;!--本文写时官网版本是2.0.0 --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;com.google.api-client&lt;/groupId&gt;
    &lt;artifactId&gt;google-api-client&lt;/artifactId&gt;
    &lt;version&gt;1.28.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre><p style="line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;">三.查询订单信息</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">查询订单信息，上面的准备工作已经基本完成，可以直接完成代码了，伪代码如下：</span></p><pre><code class="language-java">public static void checkOrder() throws GeneralSecurityException, IOException {

    // 参数详细说明:
    String signtureData = "安卓上报的订单数据";
    String signture = "安卓上报的签名";
    String publicKey = "订单数据验签公钥";

    JSONObject parseObject = JSON.parseObject(signtureData);
    String productId = parseObject.getString("productId");//在谷歌后台定义的商品id
    String packageName = parseObject.getString("packageName");//安卓apk包名
    String purchaseToken = parseObject.getString("purchaseToken");//安卓上报的token
    int purchaseState = parseObject.getIntValue("purchaseState");//订单状态

    if (purchaseState != 0) {
        //TODO 订单未完成付款
        return;
    }

    Credential credential = authorizeServer();
    HttpTransport transport = GoogleNetHttpTransport.newTrustedTransport();

    AndroidPublisher publisher = new AndroidPublisher.Builder(transport, JacksonFactory.getDefaultInstance(),
            credential).setApplicationName("uu_oversea_pay").build();

    AndroidPublisher.Purchases.Products products = publisher.purchases().products();
    AndroidPublisher.Purchases.Subscriptions subscribes = publisher.purchases().subscriptions();

    boolean doCheck = RSA.doCheck(signtureData, signture, publicKey, "RSA1", true);
    // https://developers.google.com/android-publisher/api-ref/purchases/products/get
    AndroidPublisher.Purchases.Products.Get product = products.get(packageName, productId, purchaseToken);
    AndroidPublisher.Purchases.Subscriptions.Get subscribe = subscribes.get(packageName, productId,
            purchaseToken);

    // 获取订单信息
    // https://developers.google.com/android-publisher/api-ref/purchases/products
    // 通过consumptionState, purchaseState可以判断订单的状态
    String purchaseOrderId = "";
    int payType = 0;
    if (0 == payType) {
        ProductPurchase purchase = product.execute();
        purchaseOrderId = purchase.getOrderId();
        purchaseState = purchase.getPurchaseState();
        if (purchaseState != 0) {
            //TODO 订单未付款
            return;
        }
    } else {
        SubscriptionPurchase purchase = subscribe.execute();
        Long expiryTimeMillis = purchase.getExpiryTimeMillis();
        long now = System.currentTimeMillis() / 1000;
        if (now &gt; expiryTimeMillis) {
            //TODO 订单已过订阅期限
            return;
        }
        purchaseOrderId = purchase.getOrderId();
    }
    //TODO 更改订单状态
}</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">返回的数据信息：</span></p><pre><code class="language-css">{

	"purchaseTimeMillis": "1682575200000",//购买产品的时间，自纪元（1970 年 1 月 1 日）以来的毫秒数。
	"purchaseState": 0,//订单的购买状态。可能的值为：0. 已购买 1. 已取消 2. 待定
	"consumptionState": 0,//产品的消费状态。可能的值为： 0. 尚未消耗 1. 已消耗
	"developerPayload": "",
	"orderId": "GPA.3398-6726-1036-80298",//google订单号
	"purchaseType": 0,
	"acknowledgementState": 0,
	"kind": "androidpublisher#productPurchase",
	"obfuscatedExternalAccountId": "SDK2204180944530041",//上面客户支付时的透传字段，google指导是用来存放用户信息的，不能过长，否则客户端不能支付
	"obfuscatedExternalProfileId": "",
	"regionCode": "HK"
}</code></pre><p style="line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;">四.退款数据查询</span></p><p style="line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 14px; font-family: 华文楷体;">退款信息需要自己去google查询，这一点不是很方便</span></p><pre><code class="language-java">public void googleRefundOrder() throws GeneralSecurityException, IOException {

    GoogleCredential credential = authorizeServer();
    String packageName = "安卓apk的包名";

    HttpTransport transport = GoogleNetHttpTransport.newTrustedTransport();
    JacksonFactory defaultInstance = JacksonFactory.getDefaultInstance();

    AndroidPublisher service = new AndroidPublisher.Builder(transport, defaultInstance, credential)
            .setApplicationName("uu_oversea_pay").build();

    // 获取google list对象
    AndroidPublisher.Purchases.Voidedpurchases.List voidPurchaseList = service.purchases().voidedpurchases()
            .list(packageName);
    // 设置查询参数
    voidPurchaseList.setStartTime(getDaysBeforeUnixTimeStampMinute(-24 * 60));//一天
    // 执行查询
    VoidedPurchasesListResponse response = voidPurchaseList.execute();
    List&lt;VoidedPurchase&gt; voidedPurchases = response.getVoidedPurchases();
    if (voidedPurchases == null) {
        //TODO 没有退款
        return;
    }
    // 获取分页tokenPagination
    TokenPagination tokenPagination = response.getTokenPagination();
    while (tokenPagination != null) {
        // 设置查询token 重新执行查询 查询下一页
        voidPurchaseList.setToken(tokenPagination.getNextPageToken());
        VoidedPurchasesListResponse newResponse = voidPurchaseList.execute();
        voidedPurchases.addAll(newResponse.getVoidedPurchases());
        tokenPagination = newResponse.getTokenPagination();
    }
    for (VoidedPurchase voidedPurchase : voidedPurchases) {
        String orderId = voidedPurchase.getOrderId();
        //TODO 处理相关退款账号和设备
    }
}</code></pre><p style="line-height: 2;"><span style="color: rgb(66, 144, 247); font-size: 16px; font-family: 华文楷体;">四.订阅的订单</span></p><pre><code class="language-java">public void googleSubscribeOrder(byte[] body) throws IOException, GeneralSecurityException {
    JSONObject paramJson = null;

    String paramStr = new String(body, "utf-8");

    if (StringUtils.isNotBlank(paramStr)) {
        paramJson = JSON.parseObject(URLDecoder.decode(paramStr, "utf-8"));

        JSONObject msgJson = paramJson.getJSONObject("message");
        String data = msgJson.getString("data");
        String developerNotificationStr = new String(Base64.getDecoder().decode(data), "UTF-8");
        JSONObject developerNotificationJson = JSON.parseObject(developerNotificationStr);
        String packageName = developerNotificationJson.getString("packageName");
        JSONObject subscriptionNotificationJson = developerNotificationJson
                .getJSONObject("subscriptionNotification");
        String purchaseToken = subscriptionNotificationJson.getString("purchaseToken");
        String subscriptionId = subscriptionNotificationJson.getString("subscriptionId");
        /**
         * notificationType int 通知的类型。它可以具有以下值： (1)
         * SUBSCRIPTION_RECOVERED - 从帐号保留状态恢复了订阅。 (2)
         * SUBSCRIPTION_RENEWED - 续订了处于活动状态的订阅。 (3)
         * SUBSCRIPTION_CANCELED - 自愿或非自愿地取消了订阅。如果是自愿取消，在用户取消时发送。 (4)
         * SUBSCRIP￼￼TION_PURCHASED - 购买了新的订阅。 (5) SUBSCRIPTION_ON_HOLD
         * - 订阅已进入帐号保留状态（如已启用）。 (6) SUBSCRIPTION_IN_GRACE_PERIOD -
         * 订阅已进入宽限期（如已启用）。 (7) SUBSCRIPTION_RESTARTED -
         * 用户已通过“Play”&gt;“帐号”&gt;“订阅”重新激活其订阅（需要选择使用订阅恢复功能）。 (8)
         * SUBSCRIPTION_PRICE_CHANGE_CONFIRMED - 用户已成功确认订阅价格变动。 (9)
         * SUBSCRIPTION_DEFERRED - 订阅的续订时间点已延期。 (10) SUBSCRIPTION_PAUSED
         * - 订阅已暂停。 (11) SUBSCRIPTION_PAUSE_SCHEDULE_CHANGED -
         * 订阅暂停计划已更改。 (12) SUBSCRIPTION_REVOKED - 用户在有效时间结束前已撤消订阅。 (13)
         * SUBSCRIPTION_EXPIRED - 订阅已过期。
         */
        int notificationType = subscriptionNotificationJson.getIntValue("notificationType");

        if (2 == notificationType) {

            GoogleCredential credential = authorizeServer();

            HttpTransport transport = GoogleNetHttpTransport.newTrustedTransport();

            AndroidPublisher publisher = new AndroidPublisher.Builder(transport,
                    JacksonFactory.getDefaultInstance(), credential).setApplicationName("uu_oversea_pay")
                    .build();

            AndroidPublisher.Purchases.Subscriptions subscribes = publisher.purchases().subscriptions();

            AndroidPublisher.Purchases.Subscriptions.Get subscribe = subscribes.get(packageName, subscriptionId,
                    purchaseToken);

            SubscriptionPurchase purchase = subscribe.execute();
            Long expiryTimeMillis = purchase.getExpiryTimeMillis();
            long now = System.currentTimeMillis() / 1000;
            if (now &gt; expiryTimeMillis) {
                //已过订阅期限
                return;
            }
            String purchaseOrderId = purchase.getOrderId();
            //TODO 续订
        }
    }
}</code></pre><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">google支付相关的问题就介绍到这...</span></p><p style="line-height: 2;"><span style="font-size: 14px; font-family: 华文楷体;">后记：我会在写一篇curl的流程介绍，那样不受api版本限制，比较自由灵活</span></p><p style="line-height: 2;"><br></p><ul><li style="text-align: start; line-height: 2;"><span style="font-size: 19px; font-family: 华文楷体;"><strong>本文作者：</strong></span><span style="font-size: 19px; font-family: 华文楷体;"> 景兴春</span></li><li style="text-align: start; line-height: 2;"><span style="font-size: 19px; font-family: 华文楷体;"><strong>本文链接：</strong></span><span style="font-size: 19px; font-family: 华文楷体;"> &nbsp;</span><a href="https://xingchunjing.github.io/#/content/java-google" target="_blank">https://xingchunjing.github.io/#/content/java-google</a></li><li style="text-align: start; line-height: 2;"><span style="font-size: 19px; font-family: 华文楷体;"><strong>版权声明：</strong></span><span style="font-size: 19px; font-family: 华文楷体;"> 本博客所有文章除特别声明外，均采用 </span><a href="https://www.apache.org/licenses/LICENSE-2.0.html" target="_blank"><span style="font-size: 19px; font-family: 华文楷体;">Apache License 2.0</span></a><span style="font-size: 19px; font-family: 华文楷体;"> 许可协议。转载请注明出处！</span></li></ul>