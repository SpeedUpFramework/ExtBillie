var isON = false;
var doNotif = true;

function updateIcon() {
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            var data = JSON.parse(xmlhttp.responseText);

            var online = data.stream != null;

            if(online){
                if(doNotif) {
                    doNotif = false;
                    doNotification();
                }
                isON = true;
                chrome.browserAction.setTitle({title : "Billiechou - Online"});
                setIconON(true);
            }else {
                if (!isON) {
                    doNotif = true;
                }
                chrome.browserAction.setTitle({title : "Billiechou - Offline"});
                setIconON(false);
                isON = false;
            }
        }
    }

    var url = "https://api.twitch.tv/kraken/streams/" + chaine;
    xmlhttp.open("GET",url,true);
    xmlhttp.send();

}
