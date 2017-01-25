# handleTemplate
##  a jquery Plus for javascript to DataBind Template  

为何开发:
 曾经使用过webForm 的repeater 控件配合 datasource来渲染表格和商品列表。<br />
 现在的大前端很多思想也有类似功能，后台取得json数据后绑定到前台，mvvm 之所以如日中天，正因数据绑定为王。<br />
 前台开发时，套用JSON 数据大多数都在使用 var  html='&lt;div&gt;'+ jsonData.Id +'&lt;/div&gt;' 之类的语句，很繁琐，代码很乱。<br />
 所以写了此代码用于代替日常的HTML拼接语句。
 
### 希望喜欢此模板的同学增扩此功能。

### 优缺分析：
<hr/>
 优点：小巧，轻量，不足100行代码，生成速度较快。一般1ms-4ms,不超过4ms <br />
 缺点：1.暂不支持深层数据引用。如##OjbectData.Name## 2.不支持自定义函数。<br />

使用：##dataName## 作为模板数据，请不要加空格<br />


/**************************************************************************************************************/<br />
####自定义的HTML Render 模板引擎<br />
####版本信息：v1.0.0.2  Creat By: Star Qin  20160929    QQ: 252455785 <br />
/**************************************************************************************************************/<br />
###### 功能：指定【dlRepeatorArtList】 装配容器的内容填充为相应的数据+模拟模板<br />
###### 调用样例： var isRendSucessed = $(&quot;#dlRepeatorArtList&quot;).handleTemplate(&quot;#tpl_ArtList&quot;, articleDataListSource);<br />
###### 参数：1.以【articleDataListSource】为数据源<br />
###### 参数：2.以【tpl_ArtList】为模板<br />
###### 参数：3.回调函数【CallBack_Function】<br />
###### 参数：4. 无参或0-1,html() 默认直接原样填充，2.向下Append(), 3.则向上PerAppend() 填充<br />
###### 返回： 套接HTML是否执行成功 true|| false<br />
/**************************************************************************************************************/

<hr/>

# 使用方法
## 1.引用jquery Lib 

&lt;!--JQuery  CDN Lib --&gt; <br />
&lt;script src=&quot;http://libs.baidu.com/jquery/2.0.0/jquery.min.js?r=20160901&quot;&gt;&lt;/script&gt;

## 2.写一个 template模板

    <!--商品展示模板-->
    <template id="tpl_CommodityH5" style="display: none;">
        <div class="list-goods">
            <img data-original="##SmallPic##" class="tplimage  img-responsive"  src="http://img02.xx.com/e/web/150930/00982/163525/placeholder_300x300.png" />
            <p>##CommodityName##</p>
            <span>￥##CommodityPriceConverted##</span>
            <i class="icon icon6"></i>
        </div>
    </template>
    
## 3.给定一个渲染区域

&lt;div class=&quot;list-box&quot;  id=&quot;rptRelationCommodityList&quot;&gt;&lt;/div&gt;

  
## 4.调用Html Render 

&lt;script  type=&quot;text/javascript&quot;&gt;<br />
$(&quot;#rptRelationCommodityList&quot;).handleTemplate(&quot;#tpl_CommodityH5&quot;, evtData.RspData.CommodityList);<br />
&lt;/script&gt;<br />
 
## 5. OK  Fly 完成，等它执行吧
