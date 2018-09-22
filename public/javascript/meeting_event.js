$(function() {
    // 0:無言 1:発話中
    var speakcheck = 0;
    // 1:しゃべりたい
    var wantspeak =  0;
    
    if (speakcheck = 1){
        var txt = "発言中です"
        document.getElementById("sentence").innerHTML = txt;
    }else if (wantspeak = 1){
        var txt = "しゃべりたい！"
        document.getElementById("sentence").innerHTML = txt;
        document.getElementById("sentence").style.color = "red";
    }else{
        var txt = ""
        document.getElementById("sentence").innerHTML = txt;
    }
  });
