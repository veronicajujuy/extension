chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "tomarAsistencia" && message.tabId) {
    chrome.tabs.sendMessage(message.tabId, { action: "tomarAsistencia" });
  }
});
