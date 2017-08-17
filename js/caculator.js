var num;
var LAST='';    ///记录等号输入
function caculator(num){  //输入数字
    if(num >= 0 && num <= 9){
        if(LAST == '='){     //LAST=='='时，再输入数字清空
            document.getElementById('screen').value = '';
        }
    }
    LAST = '';    //LAST值刷新
    if (document.getElementById('screen').value == 0){
            document.getElementById('screen').value = '';
        }
    document.getElementById('screen').value += num;
}
function key(num){   //输入运算符
    LAST = '';    ///刷新LAST的值
    var str = document.getElementById('screen').value;
    var b = str.charAt(str.length-1);   //获取字符串最后一个字符
    if (b >=0 && b <= 9){     //避免重复输入运算符
        str = str+num;
    }
    document.getElementById('screen').value = str;
}
function dot(num){  ////   .的输入
    var str = document.getElementById('screen').value;
    var number = str.split(/\+|\-|\*|\%|\//);  //将输入框的字符串在运算符处劈开
    var end = number[number.length-1]; ///每次点击"."时都要运行此函数，所以只需在劈开后的最后一个字符串判断是否已经有".点"
    var a =  end.split('.').length;
    var b = end.charAt(str.length-1);
    if (a == 1){        ///避免点的重复
        if(b >=0 && b <= 9){
            str = str+num;
        }
    }
    document.getElementById('screen').value = str;
}
function fun(num) {
    if (num == 'AC'){
        document.getElementById('screen').value = '0';
    }
    else if (num == 'Back'){
        var str = document.getElementById('screen').value;
        str = str.substring(0,str.length-1);
        str = (str != "") ? str : "0";
        document.getElementById('screen').value = str;
    }
    else if (num == 'AC'){
        document.getElementById('screen').value = 0;
    }
    else if (num == '=') {
        LAST = '=';
        document.getElementById('screen').value = eval(document.getElementById('screen').value);
    }
}
