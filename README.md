# handleTemplate
##  a jquery Plus for javascript to DataBind Template  

/**************************************************************************************************************/<br />
#####自定义的HTML Render 模板引擎<br />
#####版本信息：v1.0.0.2  Creat By: Star Qin  20160929<br />
/**************************************************************************************************************/<br />
#####功能：指定【dlRepeatorArtList】 装配容器的内容填充为相应的数据+模拟模板<br />
#####调用样例： var isRendSucessed = $(&quot;#dlRepeatorArtList&quot;).handleTemplate(&quot;#tpl_ArtList&quot;, articleDataListSource);<br />
#####参数：1.以【articleDataListSource】为数据源<br />
#####参数：2.以【tpl_ArtList】为模板<br />
#####参数：3.回调函数【CallBack_Function】<br />
#####参数：4. 无参或0-1,html() 默认直接原样填充，2.向下Append(), 3.则向上PerAppend() 填充<br />
#####返回： 套接HTML是否执行成功 true|| false<br />
/**************************************************************************************************************/


# 使用方法
## 1.引用jquery Lib 

&lt;!--JQuery  CDN Lib --&gt;
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

&lt;div class=&quot;list-box&quot;  id=&quot;rptRelationList&quot;&gt;&lt;/div&gt;

  
## 4.调用Html Render 

&lt;script  type=&quot;text/javascript&quot;&gt;<br />
$(&quot;#rptRelationList&quot;).handleTemplate(&quot;#tpl_CommodityH5&quot;, evtData.RspData.CommodityList);<br />
&lt;/script&gt;<br />
 

