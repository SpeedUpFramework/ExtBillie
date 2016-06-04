function doNotification() {
    chrome.notifications.create('notifyON' + chaine, { type: "basic", title: title, message: message, iconUrl: "images/logo.jpg" }, function(id) { });
}

function setIconON(on) {
    chrome.browserAction.setIcon({path:(on ? "images/on.png" : "images/off.png")});
}



setInterval(updateIcon,120000);
updateIcon();
