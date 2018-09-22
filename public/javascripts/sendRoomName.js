function sendinfo(roomName,path) {
    var slackLog
    var roomName={
      "roomName":roomName
    };
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function()
    {
        var READYSTATE_COMPLETED = 4;
        var HTTP_STATUS_OK = 200;

        if( this.readyState == READYSTATE_COMPLETED
         && this.status == HTTP_STATUS_OK )
        {
            // レスポンスの表示
//            slackLog = JSON.parse(this.responseText);
//            var filelist = this.responseText;
//            filelist = filelist.replace(/\"/g,"");
//            jsonlistAry = filelist.split(',');
//            console.log(jsonlistAry);

            return 1000;
            //$('[name=result]').val(this.responseText);
        }
    }

    xmlHttpRequest.open( 'GET', path,false );

    // サーバに対して解析方法を指定する
    xmlHttpRequest.setRequestHeader( 'Content-Type', 'application/json');

    // データをリクエスト ボディに含めて送信する
    xmlHttpRequest.send( JSON.stringify(roomName) );
    return slackLog;
}
