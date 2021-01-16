chrome.runtime.onMessage.addListener(() => {

});

console.log('test');

var iframe = document.createElement('iframe'); 
iframe.style.background = "green";
iframe.style.height = "100%";
iframe.style.width = "300px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.frameBorder = "none"; 
iframe.src = chrome.extension.getURL("sidebar.html");

document.body.appendChild(iframe);