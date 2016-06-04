var chaine = "Billiechou";
var title = "Billiechou";
var message = "Billiechou est en ligne !";
var redirectUrl = "https://twitch.tv/billiechou";
chrome.browserAction.onClicked.addListener(function(activeTab){

		chrome.tabs.create({ "url": "https://twitch.tv/billiechou" });

});
