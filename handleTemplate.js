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
(function ($) {
    //$.fn.handleTemplate = function() {  // Our plugin implementation code goes here.  }
    //$.fn.extend({ handleTemplate : function() {    // Our plugin implementation code goes here.     }});
    $.fn.handleTemplate = function (jqTagName, vmDataSource, tPrependType, callbackFunc) {
        var toRendHtmlStr = ""; //生成HTML标签
        if ($(jqTagName.toString()).length <= 0) {
            toRendHtmlStr = "Template 模板配置有误：1001 没有找到 <template>为：" + jqTagName + "的数据模板DOM所在位置！";
            return false;
        }
        var $toRendTag = $(this);
        var templateHtmlStr = $(jqTagName.toString()).html(); //模板

        var errorToShowedMsg = "Template 模板配置有误：1002 没有找到类似于 ##dataName## 这样的占位！请在HTML中添加! ";
        //***************************************************************
        //检测是否重复
        var CheckedContains = function (dCollect, needle) {
            for (var iiis in dCollect) {
                if (dCollect[iiis] === needle) return true;
            }
            return false;
        };
        //***************************************************************
        //主动生成数据HTML
        var RenderToHtml = function () {
            if (tPrependType) {
                switch (tPrependType) {
                    case 1:
                        $toRendTag.html(toRendHtmlStr);
                        break;
                    case 2:
                        $toRendTag.append(toRendHtmlStr);
                        break;
                    case 3:
                        $toRendTag.prepend(toRendHtmlStr);
                        break;
                    default:
                        $toRendTag.html(toRendHtmlStr);
                        break;
                }
           
            } else {
                $toRendTag.html(toRendHtmlStr);
            }
        }
        //替换数据对象
        var ReplacedToTag = function (vmSimpleData) {
            var _rowHtmlStr = templateHtmlStr;
            for (var colName in vmColumns) {
                var _colDefined = String(vmColumns[colName]).replace(" ", "");
                var _regColkey = new RegExp(_colDefined, "img");
                var _colNamed = _colDefined.replace(/##/img, "");
                var _colInnerData = vmSimpleData[_colNamed] ? String(vmSimpleData[_colNamed]) : "";
                ////console.log(_colDefined +"    ==    "+ _colInnerData);
                _rowHtmlStr = _rowHtmlStr.replace(_regColkey, _colInnerData);
            } //end for in
            toRendHtmlStr += _rowHtmlStr;
        }

        //var StringFormater =
        //***************************************************************
        if (vmDataSource == null || vmDataSource === undefined) {
            toRendHtmlStr = "DataSouce 不能是空数据！";
            RenderToHtml();
            return false;
        }
        //模板无内容
        if (templateHtmlStr.length <= 0) {
            RenderToHtml();
            return false;
        }
        //正规Columns
        var regSharp = /##\w+.##/igm;
        var matchRegList = templateHtmlStr.match(regSharp);
        //生成Columns
        var vmColumns = [];
        //匹配
        if (matchRegList && matchRegList.length > 0) {
            for (var j = 0; j < matchRegList.length; j++) {
                var _col = matchRegList[j].toString().replace(/\s+/g, ""); // .replace(/##/g, ""));
                if (!CheckedContains(vmColumns, _col)) { vmColumns.push(_col); }
                //vmColumns.push(_col);
            }
        } else {
            toRendHtmlStr = '<span  style="background-color: #F33;color: #FF0;">' + errorToShowedMsg + '</span>';
            RenderToHtml();
            return false;
        }
        //是否有Columns数据 
        if (vmColumns.length <= 0) {
            return '<span  style="background-color: #F33;color: #FF0;">' + errorToShowedMsg + '</span>';
        }

        ////var c = typeof vmDataSource;
        ////console.log("数据源对象类型：" + c);
        ////console.log("数据源对象类型：" + (c instanceof Array));
        ////console.log(vmDataSource);
        var isArrayedJson = vmDataSource.propertyIsEnumerable(1);
        //vmDataSource.length 和isArrayedJson 一样可判断对象和数组
        if (vmDataSource.length) {
            //数据组替换
            for (var i = 0; i < vmDataSource.length; i++) {
                ReplacedToTag(vmDataSource[i]);
            } //end for iDataList
        } else {
            //单数据替换
            ReplacedToTag(vmDataSource);
        }
        //return toRendHtmlStr;  //返回此数据
        RenderToHtml();
        //回调函数
        if (callbackFunc) {
            callbackFunc("Completed");
        }
        return true;
    };
    //other 
})(jQuery);

//V1 method javascript String.format
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g,
        function (m, i) {
            return args[i];
        });
}

/**************************************************************************************************************/
