# handleTemplate
a  jquery Plus for javascript to DataBind Template  

/**************************************************************************************************************/
//自定义的HTML Render 模板引擎
//版本信息：v1.0.0.2  Creat By: Star Qin  20160929
/**************************************************************************************************************/
//功能：指定【dlRepeatorArtList】 装配容器的内容填充为相应的数据+模拟模板
//调用样例： var isRendSucessed = $("#dlRepeatorArtList").handleTemplate("#tpl_ArtList", articleDataListSource);
//参数：1.以【articleDataListSource】为数据源
//参数：2.以【tpl_ArtList】为模板
//参数：3.回调函数【CallBack_Function】
//参数：4. 无参或0-1,html() 默认直接原样填充，2.向下Append(), 3.则向上PerAppend() 填充
//返回： 套接HTML是否执行成功 true|| false
/**************************************************************************************************************/

# 使用方法
## 1.引用jquery Lib 

<!--JQuery  CDN Lib -->
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js?r=20160901"></script>

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

  <div class="list-box"  id="rptRelationList"></div>
  
## 4.调用Html Render 

 <script  type="text/javascript">
     $("#rptRelationList").handleTemplate("#tpl_CommodityH5", evtData.RspData.CommodityList);
 </script>
 
 

