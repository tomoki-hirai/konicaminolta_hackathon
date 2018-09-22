// -------------------------------------------------------------------
//  bb01.js
// -------------------------------------------------------------------
function getParam()
{
    var url   = location.href
    parameters    = url.split("?")
    params   = parameters[1].split("&")
    var paramsArray = []
    for ( it = 0; it < params.length; it++ ) {
        neet = params[it].split("=")
        paramsArray.push(neet[0])
        paramsArray[neet[0]] = neet[1]
        }
    var categoryKey = paramsArray["room_name"]
    decStr = decodeURI(categoryKey)
    //console.log("Path:"+decStr)
    return decStr
}

// -------------------------------------------------------------------
jQuery(function()
{
    const roomName = getParam() //ルーム名
    var path="/meeting/speaking" //送り先
    console.log("会議名:"+roomName)
    //JSON一覧とユーザー情報を取得しログ出力
    //sendinfo(roomName,path)

})

// -------------------------------------------------------------------
