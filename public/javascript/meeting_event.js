function show_message(id,speak,want) {
    // speak - 0:無言 1:発話中
    // want - 1:しゃべりたい
    var wantspeak =  0;
    
    if (speak = 1){
        var txt = "発言中です"
        document.getElementById("sentence").innerHTML = txt;
    }else if (want = 1){
        var txt = "しゃべりたい！"
        document.getElementById("sentence").innerHTML = txt;
        document.getElementById("sentence").style.color = "red";
    }else{
        var txt = ""
        document.getElementById("sentence").innerHTML = txt;
    }
}
