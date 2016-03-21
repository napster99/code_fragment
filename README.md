# code_fragment
常用代码片段



##1. 操作DOM class

```javascript
 // 判断某个对象是否有指定的className
function hasClass(ele,cls) {
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

// 给指定对象添加className
function addClass(ele,cls) {
    if (!this.hasClass(ele,cls)) ele.className += " "+cls;
}

// 删除className
function removeClass(ele,cls) {
    if (hasClass(ele,cls)) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className=ele.className.replace(reg,' ');
    }
}
```


## 2. 分解url

```javascript
// 正则：
/^([^:]+):\/\/(?:([^:@]+):?([^@]*)@)?(?:([^/?#:]+):?(\d*))([^?#]*)(?:\?([^#]+)?)?(?:#(.+)?)?$/
// 结果格式：
Array
    [scheme] => http
    [host] => quchao.com
    [user] => user
    [pass] => pass
    [path] => /about-me
    [query] => t=100102
    [fragment] => hash
)

// demo:
'http://user:pass@xuanfenge.com:80/category/?s=css3#first'
.match(/^([^:]+):\/\/(?:([^:@]+):?([^@]*)@)?(?:([^/?#:]+):?(\d*))([^?#]*)(?:\?([^#]+)?)?(?:#(.+)?)?$/);
// 结果
["http://user:pass@xuanfenge.com:80/category/?s=css3#first", "http", "user", "pass", "xuanfenge.com", "80", "/category/", "s=css3", "first"]
```


## 3. 获取url参数

```javascript
function parseUrl(url) {
    // 找到url中的第一个?号
    var parse = url.substring(url.indexOf("?") + 1),
        params = parse.split("&"),
        len = params.length,
        item = [],
        param = {};

    for (var i = 0; i < len; i++) {
        item = params[i].split("=");
        param[item[0]] = item[1];
    }

    return param;
}

// demo:
parseUrl("www.xuanfengge.com/js?name=xuanfeng&age=21&page=2")
// 结果
{name: "xuanfeng", age: "21", page: "2"}

```


##4. URL参数拼接

```javascript
/**
 * @description 将传入的url参数对象解析组装成字符串做为queryString中的一部分
 * @param {Object} params 请求参数的数组
 * @param {string} cgi 请求串
 * @return {String} queryString部分字符串
 * @example ： param1=value1&param2=value2&param3=value3......
 */
function convert_params(params, cgi){
    var paramsArray = [];
    for (var name in params) {
        if (paramsArray.length == 0) {
            cgi && cgi.indexOf('?') != -1 ? paramsArray.push("&") : paramsArray.push("?");
        }
        else {
            paramsArray.push("&");
        }
        paramsArray.push(name);
        paramsArray.push("=");
        paramsArray.push(params[name]);
    }
    return paramsArray.join("");
}

console.log(convert_params({"param": "value1", "param2": "value2"}, "/cgi-bin/"));
// ?param=value1&param2=value2
console.log(convert_params({"param": "value1", "param2": "value2"}, "/cgi-bin/?page=1"));
// &param=value1&param2=value2
```

##5. 判断一个对象是否为空对象

```javascript
function isEmptyObj(obj){
    for(var name in obj) {
        return false;
    }
    return true;
}
console.log(isEmptyObj({}));                //true
console.log(isEmptyObj({name: "ivan"}));    //false
```


## 6. 解析url

```javascript
/**
 * @description 解析url
 * @param {String} 请求url串
 * @return
 * @type Object
 * @example parse_url('http://www.xuanfengge.com/index?app_id=110000011')
 */
function parse_url(url){
    var host, path, search, hash, param = {};
    if(url === undefined) {
        var loc = window.location;
        host = loc.host;
        path = loc.pathname;
        search = loc.search.substr(1);
        hash = loc.hash;
    } else {
        var ret = url.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?:\:\d+)?(\/[^\?\\\"\'\|\:<>]*)?(?:\?([^\'\"\\<>#]*))?(?:#(\w+))?/i) || [];
        host = ret[1];
        path = ret[2];
        search = ret[3];
        hash = ret[4];
    }
    search && function() {
        var arr = search.split('&');
        for(var i = 0, l = arr.length; i < l; i++) {
            //var p=arr[i].split('=');
            //param[p[0]]=p[1];
            if(arr[i].indexOf('=') != -1) {
                var pos = arr[i].indexOf('=');
                var k = arr[i].slice(0, pos);
                var v = arr[i].slice(pos + 1);
                param[k] = v;
            }
        }
    }();
    return {
        host : host,
        path : path,
        search : search,
        hash : hash,
        param : param
    }
}
console.log(JSON.stringify(parse_url("http://www.xuanfengge.com/index?app_id=110000011")));
// {"host":"www.xuanfengge.com","path":"/index","search":"app_id=110000011","param":{"app_id":"110000011"}}
```

## 7. cookie存储的工具类函数

```javascript
var cookie = {
    getTopDomain : function() {
        var top = window.location.host, list = {
            'com.cn' : 1,
            'net.cn' : 1,
            'gov.cn' : 1,
            'com.hk' : 1
        }, arr = top.split('.');
        //配置最常用的地区域名名单
        arr.length > 2 && function() {
            top = (list[arr.slice(-2).join('.')] ? arr.slice(-3) : arr.slice(-2)).join('.');
        }();
        return top;
    },
    get : function(key) {
        var ret = document.cookie.match(new RegExp("(?:^|;\\s)" + key + "=(.*?)(?:;\\s|$)"));
        return ret ? ret[1] : "";
    },
    save : function(key, value, expires) {
        document.cookie = key + "=" + value + ";path=/;domain=" + this.getTopDomain() + ( expires ? ";expires=" + expires : '');
    }
}
```


## 8. 浏览器及版本

```javascript
var userAgent = navigator.userAgent.toLowerCase();
$.browser = {
    version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1],
    safari: /webkit/.test( userAgent ),
    opera: /opera/.test( userAgent ),
    msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
    mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
};
```

##9. 类型转换函数
```javascript
var Converter = {
    toInt: function(val){
        return result = isNaN(val)? 0 : parseInt(val);
    },
    toFloat: function(val){
        return result = isNaN(val)? 0 : parseFloat(val);
    },
    toDate: function(strDate){
        var sDate = strDate.replace(/(^\s+|\s+$)/g,''); //去两边空格;
        if(sDate==''){
            return null;
        }

        var s = sDate.replace(/[\d]{4,4}[\-/]{1}[\d]{1,2}[\-/]{1}[\d]{1,2}/g, '');
        if (s == '')
        {
            var t=new Date(sDate.replace(/\-/g,'/'));
            var ar = sDate.split(/[-/:]/);
            if(ar[0] == t.getFullYear() && ar[1] == t.getMonth() + 1 && ar[2] == t.getDate())
            {
                return t;   //返回转化成功的日期对象
            }
        }

        return null;

    }
};

console.log(Converter.toInt("12.3"));
// 12
console.log(Converter.toFloat("12.36"));
// 12.36
console.log(Converter.toDate("2014/9/2"));
console.log(Converter.toDate("2014-9-2"));
console.log(Converter.toDate("2014-09-02"));
// Tue Sep 02 2014 00:00:00 GMT+0800 (中国标准时间)
```

## 10. 全屏遮罩层

```javascript
/**
 * @description 全屏遮罩层管理器
 * @example mask.create();
 */
var mask = {
    self : '',
    isIE6 : $.browser.msie && $.browser.version < 7,
    create : function() {
        if(this.self && this.self.parent().length) {
            return;
        }
        $(window).bind('resize.overlay', this.resize);
        return (this.self = (this.self || $('<div></div>').css({
            height : '100%',
            left : 0,
            position : 'absolute',
            top : 0,
            width : '100%',
            background : '#000',
            'opacity' : 0.3,
            'z-index' : 2001
        })).appendTo('body').css({
            width : this.width(),
            height : this.height()
        }));
    },
    destroy : function() {
        if(this.self && !this.self.parent().length) {
            return;
        }
        $([document, window]).unbind('resize.overlay');
        this.self.animate({
            opacity : 'hide'
        }, function() {
            $(this).remove().show();
        });
    },
    resize: function() {
        var _mask = mask;
        _mask.self.css({
            width: 0,height: 0
        }).css({
            width: _mask.width(),height: _mask.height()
        });
    },
    height : function() {
        var scrollHeight, offsetHeight;
        if(this.isIE6) {
            scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            offsetHeight = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
            if(scrollHeight < offsetHeight) {
                return $(window).height() + 'px';
            } else {
                return scrollHeight + 'px';
            }
        } else {
            return $(document).height() + 'px';
        }
    },
    width : function() {
        var scrollWidth, offsetWidth;
        if(this.isIE6) {
            scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
            offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
            if(scrollWidth < offsetWidth) {
                return $(window).width() + 'px';
            } else {
                return scrollWidth + 'px';
            }
        } else {
            return $(document).width() + 'px';
        }
    }
}


// demo
mask.create();
setTimeout(function(){
    mask.destroy()
}, 1000);
```


##11、十六进制颜色值的随机生成

```javascript
var arrHex=["0","1","2","3","4","5","6","7","8","9","a","b","c","d"],
    strHex="#",
    index;
    for(var i=0;i<6;i++){
     index=Math.floor(Math.random()*14);
     strHex+=arrHex[index];
    }
return strHex;
}
console.log(randomColor());

function getRandomColor(){
   return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
}
console.log(getRandomColor());

```

说明：

1、16777215为16进制的颜色ffffff转成10进制的数字

2、>>数字取整

3、转成16进制不足6位的以0来补充

##12、实现字符串长度截取并在结尾添加…
```javascript
function cutstr(str, len) {
    var temp;
    var icount = 0;
    var patrn = /[^\x00-\xff]/;  //表示汉字或者全角，即ASCII 编码不在0-255的字符
    var strre = "";
    for (var i = 0; i < str.length; i++) {
        if (icount < len) {
            // 每次截取一个字符
            temp = str.substr(i, 1);
            if (patrn.exec(temp) == null) {
                // 如果是英文、半角
                icount = icount + 1
            } else {
                // 如果是中文、全角
                icount = icount + 2
            }
            // 字符串连接
            strre += temp
        } else {
            break
        }
    }
    return strre + "..."
}
// demo:
cutstr("zhangxiaojian", 2)  //zh...
cutstr("高斯林", 3)    //高斯...

```



##13、打乱一个数字数组
```javascript

    var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
    numbers = numbers.sort(function(){ return Math.random() - 0.5});
    /* the array numbers will be equal for example to 

```

