// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "tomarAsistencia") {
//     sendResponse({
//       received: true,
//       data: message.data,
//     });
//   }
// });

// ver que onda esto
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "tomarAsistencia" && message.tabId) {
    chrome.tabs.sendMessage(message.tabId, { action: "tomarAsistencia" });
  }
});
